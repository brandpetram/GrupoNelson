# Plan para usar Google Search Console de forma programática

> **Fecha:** 2026-04-11 (corregido con 5 findings de review)  
> **Estado:** Pendiente  
> **Ubicación:** Este plan vive en `grupo-nelson/docs/planes/` pero NO es exclusivo de Grupo Nelson. Es un proyecto de infraestructura de Brandpetram que aplica a todos los sitios web de la agencia.

---

## Contexto

Luis Múzquiz (Brandpetram) administra ~140 proyectos cliente. Algunos clientes tienen más de 10 sitios web. Operaciones recurrentes como enviar sitemaps e inspeccionar estado de indexación no pueden hacerse sitio por sitio desde el browser de Google Search Console — no escala.

Necesita acceso programático a la API de Google Search Console para:

- Listar todas las propiedades verificadas (`sites.list`)
- Enviar y actualizar sitemaps (`sitemaps.submit`)
- Inspeccionar estado de indexación de URLs (`urlInspection.index.inspect` — solo lectura, no solicita indexación)
- Consultar analítica de búsqueda (`searchAnalytics.query` — clicks, impresiones, CTR, posición)
- Automatizar estas operaciones para cualquier sitio web, no solo uno

### Limitaciones de la API (superficie oficial vigente)

- **Solicitar indexación NO es posible via API.** `urlInspection.index:inspect` solo devuelve el estado actual de una URL (si está indexada, cuándo se rastreó, errores). La solicitud de indexación ("Request Indexing") solo está disponible desde la UI de Search Console.
- **Cobertura y hreflang no tienen endpoint bulk.** No hay un endpoint que devuelva "todos los errores de cobertura" o "todas las URLs con hreflang inválido". Lo que existe es `searchAnalytics.query` para métricas de búsqueda y `urlInspection` para inspeccionar URLs una por una.
- **No hay reportes globales de errores.** Los reportes de cobertura, hreflang y Core Web Vitals solo están en la UI.

### Intento previo (2026-04-11)

Se intentó usar `gcloud auth` con el scope `webmasters`, pero:

- `gcloud auth login` no acepta `--scopes`
- `gcloud auth application-default login --scopes=...` no persiste el scope de `webmasters` en el token
- El OAuth client interno de `gcloud` tiene scopes fijos que no incluyen `webmasters`

**Conclusión:** `gcloud` no sirve para acceder a la API de Search Console. Se necesita un OAuth Client propio.

---

## Solución: OAuth Client propio en `brandpetram-assets`

### Qué es

Un OAuth Client ID (tipo "Desktop app") registrado en el proyecto GCP `brandpetram-assets`. Este client permite hacer un flujo OAuth una vez, obtener un refresh token con el scope `webmasters`, y reutilizar ese token desde cualquier script o CLI.

### Por qué en `brandpetram-assets`

- Es el proyecto GCP de la agencia (no de un cliente específico)
- La API de Search Console ya está habilitada ahí
- Un solo client sirve para acceder a cualquier propiedad de Search Console que `luis@brandpetram.com` tenga verificada — Nelson, SDI, y los ~140 proyectos restantes

### Qué se obtiene

- Un `client_id` y `client_secret` (credenciales del OAuth client)
- Un `refresh_token` (obtenido una vez tras el flujo OAuth)
- Con estos 3 valores, cualquier script puede obtener un `access_token` con el scope `webmasters` y hacer llamadas a la API

### Sobre la duración del refresh token

El refresh token **no dura indefinidamente** en todos los casos:

- Si la app está en estado **"Testing"** en la OAuth consent screen, Google **expira los refresh tokens a los 7 días**. Para evitar esto, publicar la app (no requiere verificación si es Internal o si solo la usa el owner).
- Si la app está **publicada**, el refresh token dura hasta que el usuario lo revoque o cambie su contraseña.
- Si la app es **External** y no está verificada, Google muestra una pantalla de advertencia al autenticar pero el token funciona igual para el owner.

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
- **Publicar la app** (no dejarla en Testing) para evitar expiración de tokens a los 7 días

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
pip install google-auth-oauthlib google-auth-httplib2
python ~/.scripts/gsc-auth.py
```

Guardar el refresh token en `~/.secrets/gsc-refresh-token.txt`.

### Paso 3: Script de uso diario

```python
# ~/.scripts/gsc.py — CLI para Google Search Console
import json, sys
from urllib.parse import quote
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
import requests as http_requests

def get_creds():
    client = json.load(open('/Users/lmuzquiz/.secrets/gsc-oauth-client.json'))['installed']
    refresh_token = open('/Users/lmuzquiz/.secrets/gsc-refresh-token.txt').read().strip()
    creds = Credentials(
        token=None,
        refresh_token=refresh_token,
        client_id=client['client_id'],
        client_secret=client['client_secret'],
        token_uri=client['token_uri'],
    )
    creds.refresh(Request())
    return creds

def list_sites():
    creds = get_creds()
    r = http_requests.get(
        'https://searchconsole.googleapis.com/webmasters/v3/sites',
        headers={'Authorization': f'Bearer {creds.token}'}
    )
    for site in r.json().get('siteEntry', []):
        print(f"{site['permissionLevel']:20s} {site['siteUrl']}")

def submit_sitemap(site_url, sitemap_url):
    creds = get_creds()
    encoded_site = quote(site_url, safe='')
    encoded_sitemap = quote(sitemap_url, safe='')
    r = http_requests.put(
        f'https://searchconsole.googleapis.com/webmasters/v3/sites/{encoded_site}/sitemaps/{encoded_sitemap}',
        headers={'Authorization': f'Bearer {creds.token}'}
    )
    if r.status_code == 204:
        print(f"OK — sitemap enviado para {site_url}")
    else:
        print(f"Error {r.status_code}: {r.text}")

def inspect_url(site_url, url):
    """Inspecciona el estado de indexación de una URL.
    NOTA: esto NO solicita indexación — solo reporta el estado actual."""
    creds = get_creds()
    r = http_requests.post(
        'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
        headers={'Authorization': f'Bearer {creds.token}'},
        json={'inspectionUrl': url, 'siteUrl': site_url}
    )
    result = r.json()
    if 'inspectionResult' in result:
        ir = result['inspectionResult']
        print(f"URL: {url}")
        print(f"  Index status: {ir.get('indexStatusResult', {}).get('coverageState', 'unknown')}")
        print(f"  Last crawl: {ir.get('indexStatusResult', {}).get('lastCrawlTime', 'never')}")
        print(f"  Robots: {ir.get('indexStatusResult', {}).get('robotsTxtState', 'unknown')}")
    else:
        print(json.dumps(result, indent=2))

def search_analytics(site_url, days=7):
    """Consulta clicks, impresiones, CTR y posición de los últimos N días."""
    from datetime import datetime, timedelta
    creds = get_creds()
    end = datetime.now().strftime('%Y-%m-%d')
    start = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
    encoded_site = quote(site_url, safe='')
    r = http_requests.post(
        f'https://searchconsole.googleapis.com/webmasters/v3/sites/{encoded_site}/searchAnalytics/query',
        headers={'Authorization': f'Bearer {creds.token}'},
        json={
            'startDate': start,
            'endDate': end,
            'dimensions': ['page'],
            'rowLimit': 20,
        }
    )
    data = r.json()
    for row in data.get('rows', []):
        page = row['keys'][0]
        print(f"  {row['clicks']:5.0f} clicks  {row['impressions']:7.0f} imp  {row['ctr']:.1%} CTR  pos {row['position']:.1f}  {page}")

if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'help'
    if cmd == 'sites':
        list_sites()
    elif cmd == 'sitemap' and len(sys.argv) == 4:
        submit_sitemap(sys.argv[2], sys.argv[3])
    elif cmd == 'inspect' and len(sys.argv) == 4:
        inspect_url(sys.argv[2], sys.argv[3])
    elif cmd == 'analytics' and len(sys.argv) >= 3:
        days = int(sys.argv[3]) if len(sys.argv) > 3 else 7
        search_analytics(sys.argv[2], days)
    else:
        print("Uso:")
        print("  python gsc.py sites")
        print("  python gsc.py sitemap https://www.nelson.com.mx https://www.nelson.com.mx/sitemap.xml")
        print("  python gsc.py inspect https://www.nelson.com.mx https://www.nelson.com.mx/about/difference")
        print("  python gsc.py analytics https://www.nelson.com.mx [days]")
        print("")
        print("Nota: 'inspect' solo consulta estado, NO solicita indexación.")
        print("Para solicitar indexación, usar la UI de Google Search Console.")
```

### Paso 4: Uso para Grupo Nelson

```bash
# Listar sitios verificados
python ~/.scripts/gsc.py sites

# Enviar sitemap de Nelson
python ~/.scripts/gsc.py sitemap https://www.nelson.com.mx https://www.nelson.com.mx/sitemap.xml

# Inspeccionar estado de indexación de una URL
python ~/.scripts/gsc.py inspect https://www.nelson.com.mx https://www.nelson.com.mx/industrial-parks

# Ver analítica de los últimos 7 días
python ~/.scripts/gsc.py analytics https://www.nelson.com.mx

# Ver analítica de los últimos 30 días
python ~/.scripts/gsc.py analytics https://www.nelson.com.mx 30
```

### Paso 5 (futuro): Automatización batch

Una vez que el script básico funcione, se puede extender para:

- Recorrer una lista de sitios y enviar todos los sitemaps
- Batch de inspecciones de estado de indexación
- Reportes periódicos de analítica de búsqueda (clicks, impresiones)
- Integración con Linear o Slack para alertas

**Lo que NO se puede automatizar (solo UI):**
- Solicitar indexación de URLs ("Request Indexing")
- Ver reportes de cobertura, hreflang, Core Web Vitals

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
