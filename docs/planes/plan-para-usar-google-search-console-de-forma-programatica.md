# Plan para usar Google Search Console de forma programática

> **Fecha:** 2026-04-11  
> **Estado:** Pendiente  
> **Ubicación:** Este plan vive en `grupo-nelson/docs/planes/` pero NO es exclusivo de Grupo Nelson. Es un proyecto de infraestructura de Brandpetram que aplica a todos los sitios web de la agencia.

---

## Contexto

Luis Múzquiz (Brandpetram) administra ~140 proyectos cliente. Algunos clientes tienen más de 10 sitios web. Operaciones recurrentes como enviar sitemaps, solicitar indexación, monitorear cobertura y verificar hreflang no pueden hacerse sitio por sitio desde el browser de Google Search Console — no escala.

Necesita acceso programático a la API de Google Search Console para:

- Listar todas las propiedades verificadas
- Enviar y actualizar sitemaps (`POST /sites/{siteUrl}/sitemaps/{feedpath}`)
- Solicitar indexación de URLs (`POST /v1/urlInspection/index:inspect`)
- Consultar errores de cobertura y rendimiento
- Automatizar estas operaciones para cualquier sitio web, no solo uno

### Intento previo (2026-04-11)

Se intentó usar `gcloud auth` con el scope `webmasters`, pero:

- `gcloud auth login` no acepta `--scopes`
- `gcloud auth application-default login --scopes=...` no persiste el scope de `webmasters` en el token
- El OAuth client interno de `gcloud` tiene scopes fijos que no incluyen `webmasters`

**Conclusión:** `gcloud` no sirve para acceder a la API de Search Console. Se necesita un OAuth Client propio.

---

## Solución: OAuth Client propio en `brandpetram-assets`

### Qué es

Un OAuth Client ID (tipo "Desktop app") registrado en el proyecto GCP `brandpetram-assets`. Este client permite hacer un flujo OAuth una vez, obtener un refresh token con el scope `webmasters`, y reutilizar ese token indefinidamente desde cualquier script o CLI.

### Por qué en `brandpetram-assets`

- Es el proyecto GCP de la agencia (no de un cliente específico)
- La API de Search Console ya está habilitada ahí
- Un solo client sirve para acceder a cualquier propiedad de Search Console que `luis@brandpetram.com` tenga verificada — Nelson, SDI, y los ~140 proyectos restantes

### Qué se obtiene

- Un `client_id` y `client_secret` (credenciales del OAuth client)
- Un `refresh_token` (obtenido una vez, dura indefinidamente a menos que se revoque)
- Con estos 3 valores, cualquier script puede obtener un `access_token` con el scope `webmasters` y hacer llamadas a la API

---

## Pasos de implementación

### Paso 1: Crear OAuth Client ID en Google Cloud Console

1. Ir a [Google Cloud Console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials?project=brandpetram-assets)
2. **Create Credentials** → **OAuth client ID**
3. Application type: **Desktop app**
4. Name: `brandpetram-search-console-cli`
5. Descargar el JSON de credenciales → guardar en `~/.secrets/gsc-oauth-client.json`

**Nota:** Si pide configurar la pantalla de consentimiento (OAuth consent screen), seleccionar:
- User type: **Internal** (si el workspace de Google es de Brandpetram) o **External** (si no)
- App name: `Brandpetram Search Console CLI`
- Scopes: agregar `https://www.googleapis.com/auth/webmasters`

### Paso 2: Obtener refresh token (una vez)

Crear un script simple que haga el flujo OAuth en el browser:

```python
# ~/.scripts/gsc-auth.py
from google_auth_oauthlib.flow import InstalledAppFlow

flow = InstalledAppFlow.from_client_secrets_file(
    '/Users/lmuzquiz/.secrets/gsc-oauth-client.json',
    scopes=['https://www.googleapis.com/auth/webmasters']
)
creds = flow.run_local_server(port=8080)
print(f"Refresh token: {creds.refresh_token}")
print("Guarda este token en ~/.secrets/gsc-refresh-token.txt")
```

Ejecutar una vez:
```bash
pip install google-auth-oauthlib
python ~/.scripts/gsc-auth.py
```

Guardar el refresh token en `~/.secrets/gsc-refresh-token.txt`.

### Paso 3: Script de uso diario

```python
# ~/.scripts/gsc.py — CLI para Google Search Console
import json, sys, requests
from google.oauth2.credentials import Credentials

def get_creds():
    client = json.load(open('/Users/lmuzquiz/.secrets/gsc-oauth-client.json'))['installed']
    refresh_token = open('/Users/lmuzquiz/.secrets/gsc-refresh-token.txt').read().strip()
    return Credentials(
        token=None,
        refresh_token=refresh_token,
        client_id=client['client_id'],
        client_secret=client['client_secret'],
        token_uri=client['token_uri'],
    )

def list_sites():
    creds = get_creds()
    creds.refresh(requests.Request())
    r = requests.get('https://searchconsole.googleapis.com/webmasters/v3/sites',
                     headers={'Authorization': f'Bearer {creds.token}'})
    for site in r.json().get('siteEntry', []):
        print(site['siteUrl'])

def submit_sitemap(site_url, sitemap_url):
    creds = get_creds()
    creds.refresh(requests.Request())
    r = requests.put(
        f'https://searchconsole.googleapis.com/webmasters/v3/sites/{site_url}/sitemaps/{sitemap_url}',
        headers={'Authorization': f'Bearer {creds.token}'}
    )
    print(f"Status: {r.status_code}")

def inspect_url(site_url, url):
    creds = get_creds()
    creds.refresh(requests.Request())
    r = requests.post(
        'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
        headers={'Authorization': f'Bearer {creds.token}'},
        json={'inspectionUrl': url, 'siteUrl': site_url}
    )
    result = r.json()
    print(json.dumps(result, indent=2))

if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'help'
    if cmd == 'sites':
        list_sites()
    elif cmd == 'sitemap' and len(sys.argv) == 4:
        submit_sitemap(sys.argv[2], sys.argv[3])
    elif cmd == 'inspect' and len(sys.argv) == 4:
        inspect_url(sys.argv[2], sys.argv[3])
    else:
        print("Uso:")
        print("  python gsc.py sites")
        print("  python gsc.py sitemap https://www.nelson.com.mx https://www.nelson.com.mx/sitemap.xml")
        print("  python gsc.py inspect https://www.nelson.com.mx https://www.nelson.com.mx/about/difference")
```

### Paso 4: Uso para Grupo Nelson

```bash
# Listar sitios
python ~/.scripts/gsc.py sites

# Enviar sitemap de Nelson
python ~/.scripts/gsc.py sitemap https://www.nelson.com.mx https://www.nelson.com.mx/sitemap.xml

# Inspeccionar URL prioritaria
python ~/.scripts/gsc.py inspect https://www.nelson.com.mx https://www.nelson.com.mx/industrial-parks
```

### Paso 5 (futuro): Automatización batch

Una vez que el script básico funcione, se puede extender para:

- Recorrer una lista de sitios y enviar todos los sitemaps
- Batch de solicitudes de indexación para URLs prioritarias
- Reportes periódicos de cobertura y errores
- Integración con Linear o Slack para alertas de errores de indexación

---

## Seguridad

- `gsc-oauth-client.json` y `gsc-refresh-token.txt` viven en `~/.secrets/` — nunca en git
- El refresh token da acceso a Search Console de todos los sitios de `luis@brandpetram.com` — tratar como credencial sensible
- Si se compromete, revocar desde [Google Account → Security → Third-party apps](https://myaccount.google.com/permissions)

---

## Dónde vive este proyecto

El código final (scripts, credenciales, documentación) debería vivir en un repo de infraestructura de Brandpetram, no dentro de grupo-nelson. Sugerencia:

- `~/ops/scripts/gsc.py` o
- Un repo `brandpetram/infra-tools` con todos los scripts de automatización de la agencia

Este plan se escribió aquí porque el caso de uso surgió con Grupo Nelson, pero la solución aplica a todos los proyectos.
