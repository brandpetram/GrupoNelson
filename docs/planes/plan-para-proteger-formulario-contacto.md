# Plan para proteger el formulario de contacto contra spam

**Fecha inicio:** 2026-04-19
**Autor:** Luis + Claude
**Status:** plan — aún no implementado

---

## Problema

Empezamos a recibir spam con payload claramente basura en `/api/submit-form` (nombre/empresa/mensaje con strings random, email Gmail genérico, país `United States`). El email que dispara el spam llega a `hjg/hjn/jcnelson/sosuna@nelson.com.mx` con subject "Nuevo lead desde nelson.com.mx — YZLnZaEVRIQwpHHQXUTYd qcfizjihzVHvKxSyx".

El endpoint actual (`src/app/api/submit-form/route.ts`) **no tiene ninguna protección**:

1. Acepta cualquier JSON y lo formatea a HTML sin validación.
2. Envía por Resend a 4 emails reales del cliente + BCC a `notifications@brandpetram.com`.
3. No valida origen, no tiene rate limit, no tiene CAPTCHA, no valida shape del payload, no tiene honeypot.
4. **No escapa los valores antes de interpolarlos en el HTML del email.** `buildEmailHtml()` mete `f.value` directo al template (líneas 22-27). Un atacante puede enviar `<a href="http://phishing.com">Click aquí</a>` o cualquier markup en `full_name` / `message` y aterriza en la bandeja de entrada del cliente como HTML renderizado. Esto es **ortogonal** al control de acceso: aunque bloqueemos el spam con Turnstile, un lead legítimo malicioso todavía puede hacerlo.

Cualquiera con `curl` puede disparar emails al cliente, y cualquier lead puede inyectar HTML en ellos. Esto va a escalar si no se ataja.

Formularios que consumen el endpoint (3):
- `src/app/es/contacto/contact-form.tsx` — ES
- `src/app/es/contactanos/contact-section.tsx` — ES (ruta legacy)
- `src/app/(en)/contact/contact-section.tsx` — EN (el que tiene campo `country`)

Todos hacen `fetch('/api/submit-form', { method: 'POST', ... })`.

---

## Decisión

Dos ejes de protección, ortogonales:

### A. Control de acceso — 4 capas en el endpoint

Aplicadas en orden parse-first (parseo y validación de shape primero, luego checks sync sobre objeto tipado, después llamadas externas):

1. **Zod schema** — parsea y valida shape y longitudes del payload. Rechaza payloads fuera de contrato antes que cualquier otra capa lea campos. Responde 400.
2. **Honeypot manual** — post-Zod: `if (parsed.data.website) return 200 silencioso`. Cero costo, bloquea bots que rellenan todos los inputs del HTML (incluido el oculto). Ver detalles críticos de serialización cliente-side en Fase 1.
3. **Upstash rate limit** — `@upstash/ratelimit` + `@upstash/redis`. Cap por IP (3/hora). 1 request HTTPS. Responde 429.
4. **Cloudflare Turnstile** — widget en cliente + `siteverify` server-side. Boundary no-forgeable. 1 request HTTPS. Responde 403.

### B. Sanitización de salida — obligatoria independientemente de A

**Escape de HTML en `buildEmailHtml()`** antes de interpolar cualquier valor del usuario en el template del email. Zod valida tipo y longitud pero **no** escapa markup. Sin esto, un lead legítimo (o un bot que pase Turnstile) puede enviar HTML/links arbitrarios que llegan renderizados a las 4 cuentas.

Approach:

- **Body HTML (`buildEmailHtml()`):** función `escapeHtml(s: string)` que reemplaza `&`, `<`, `>`, `"`, `'` por sus entidades, aplicada a cada `f.value` que se interpole en el template HTML. **Esto es lo único que recibe `escapeHtml`.**
- **`replyTo`:** usar el valor de `email` directamente, **sin `escapeHtml`**. `replyTo` es un header de email, no HTML. Aplicar escape HTML a `o'connor@empresa.com` lo convertiría en `o&#39;connor@empresa.com` y rompería el header. Zod ya garantiza que el valor es un email válido (`.email()`), que es el encoding correcto para este contexto.
- **`subject`:** tampoco es HTML. No aplicar `escapeHtml`. El riesgo real en un subject/header es **CRLF injection** (un `full_name` con `\r\n` podría inyectar headers). Mitigación: en Zod, rechazar `full_name` que contenga `\r` o `\n` (`.regex(/^[^\r\n]*$/)`), o sanitizar explícitamente antes de armar el subject. Resend probablemente ya escapa esto a nivel SDK, pero validar es barato y no confiamos en defensas ajenas.

Las 4 capas de A van todas al endpoint único `/api/submit-form`. No duplicar lógica por formulario — el choke point es server-side.

### Por qué estas 4 y no otras

- **reCAPTCHA vs Turnstile:** Turnstile es invisible para humanos legítimos (no CLICKS para seleccionar semáforos), gratis sin tope, y ya lo tenemos dado de alta. `stack-tecnologico.mdx` lo marca como el reemplazo moderno estándar.
- **Rate limit por IP (no por email):** el bot fabrica emails distintos en cada POST; la única señal estable es la IP de origen (vía `request.headers.get('x-forwarded-for')`).
- **Honeypot antes de Turnstile** porque corta el 80% de bots sin pagar el `siteverify` (1 request HTTPS/submit).
- **No agregar captcha visible como fallback:** degrada UX legítima. Si Turnstile no carga, que el form no se pueda enviar y reporte error — esos son los mismos bots sin JS que filtraría Turnstile de todos modos.

---

## Dependencias nuevas

```bash
pnpm add @upstash/redis @upstash/ratelimit zod @marsidev/react-turnstile
```

- `@upstash/redis` — cliente REST (serverless-friendly, no socket).
- `@upstash/ratelimit` — primitiva de rate limit sobre Upstash.
- `zod` — validación del payload.
- `@marsidev/react-turnstile` — wrapper React mantenido del widget de Turnstile. Alternativa oficial es cargar el script de Cloudflare a mano; el wrapper ahorra boilerplate y maneja remounts.

---

## Env vars requeridas

Agregar en `.env.local` (local) y en Vercel (Production + Preview):

```
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...   # pública, va al cliente
TURNSTILE_SECRET_KEY=...              # server-only
```

Credenciales viven en `~/lmuzquiz/.secrets/tokens.md`. **No** commitear valores literales.

---

## Fases

### Fase 1 — Escape HTML + Zod + honeypot (sin deps externas)

Baja fricción, cero dependencia de servicios externos, corta una fracción notable del spam inmediatamente y cierra el agujero de HTML injection. Permite probar el resto del pipeline antes de agregar latencia externa.

**Archivos:**
- `src/lib/form-schema.ts` **(nuevo)** — `submitSchema` (transport schema del payload JSON que entra al endpoint). Ver nota "Transport schema vs form-state schema" abajo.
- `src/lib/escape-html.ts` **(nuevo)** — helper `escapeHtml(s: string)` usado exclusivamente por el template HTML del email.
- `src/app/api/submit-form/route.ts` — importar `submitSchema`, parsear payload, aplicar `escapeHtml` **solo a valores que se interpolan en el HTML**. `replyTo` y `subject` **sin** `escapeHtml` (ver "Decisión → B").
- Los 3 forms cliente — **dos cambios** para que el honeypot funcione:
  1. Agregar `<input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />` al HTML del form.
  2. **Incluir `website` en el payload JSON.** Los 3 forms hoy construyen el JSON manual, ignorando inputs que no serialicen explícitamente. Sin este paso el honeypot queda muerto. Puntos exactos:
     - `src/app/es/contacto/contact-form.tsx:94-107` — agregar `website: formData.website ?? ''` al objeto que pasa a `JSON.stringify`, y agregar `website: ''` al estado inicial.
     - `src/app/es/contactanos/contact-section.tsx:65-71` — agregar `website: data.get('website') ?? ''`.
     - `src/app/(en)/contact/contact-section.tsx:81-87` — ídem.
  Nombre `website` porque los bots suelen llenar campos web típicos y los password managers **no** lo autocompletan; `aria-hidden` + `tabIndex={-1}` evitan que lectores de pantalla o Tab lo expongan.
- **Sanitizar interpolaciones `null` en forms legacy:** los forms EN y ES-contactanos construyen `full_name` con `` `${data.get('first-name')} ${data.get('last-name')}` ``. Si un atacante hace POST desde una página custom donde esos inputs no existen, `data.get()` devuelve `null` y la string literal `"null null"` (9 chars) pasa el `.min(2)` de Zod sin problema. Fix en los dos archivos (`src/app/es/contactanos/contact-section.tsx:66` y `src/app/(en)/contact/contact-section.tsx:82`):
  ```ts
  const first = String(data.get('first-name') ?? '').trim()
  const last = String(data.get('last-name') ?? '').trim()
  const full_name = [first, last].filter(Boolean).join(' ')
  // si ambos están vacíos, full_name = '' → Zod min(2) lo rechaza con 400
  ```

**Política de contrato Zod (importante):**

El schema del endpoint valida el **mínimo común necesario para mandar el email**: `full_name`, `email`, y (a partir de Fase 3) `turnstileToken`. Las reglas de UX más estrictas (`phone` requerido en ES con ≥10 dígitos, `interests.length >= 1` en ES, etc.) viven en el cliente y **no** se imponen server-side.

**Qué manda cada form** (verificado contra código 2026-04-19):

| Form | Archivo | Campos enviados |
|---|---|---|
| ES contacto (principal) | `src/app/es/contacto/contact-form.tsx:94-107` | `full_name, email, phone_number, company, role, park, interest` (singular, string concatenado con `, `), `message` |
| ES contactanos (legacy) | `src/app/es/contactanos/contact-section.tsx:65-71` | `full_name, email, company, country, message` |
| EN contact | `src/app/(en)/contact/contact-section.tsx:81-87` | `full_name, email, company, country, message` |

Razón: los 3 forms tienen contratos distintos. EN y contactanos no envían `phone_number`, `role`, `park` ni `interest`. Solo el ES principal los manda. Si el server exigiera el superset, los otros 2 forms se romperían con `400`. Si el server exige solo el mínimo, el spam tampoco puede "pasar más pobre que los usuarios" porque debe pasar Turnstile + rate limit; un JSON con solo `full_name` + `email` + token válido es un comportamiento esperado de varios forms, no bandera de spam.

**Nota sobre nombres de campos:** el form ES principal envía `interest` (singular, string concatenado), no `interests` (plural, array). El schema del server debe reflejar exactamente lo que llega, no lo que la UI tiene en state. Confirmar cada nombre contra el código antes de fijar el schema.

**Transport schema vs form-state schema — importante:**

`submitSchema` valida el **payload JSON** que entra al endpoint. **No** valida el estado de React de los forms. Los 3 forms actuales tienen estados/inputs distintos:

- Form ES principal: state `{ fullName, email, phone, company, role, park, interests[], message }` → serializa a `full_name, phone_number, interest (string)`.
- Forms ES contactanos / EN: sin state con `full_name`; concatenan `first-name` + `last-name` del FormData al momento de enviar.

Intentar usar `submitSchema` para validar state de UI implicaría transformaciones ad hoc por form. En lugar de eso:

- **Server (obligatorio):** `submitSchema.safeParse(body)` en `route.ts` como primer check después de `request.json()`.
- **Cliente (opcional, defensa en profundidad):** `submitSchema.safeParse(payloadObject)` justo antes de `fetch()`, sobre el objeto JSON que ya se construyó. Corta submits rotos en cliente antes de llegar al server. No sustituye a la validación UI existente en el form.
- **Validación UI (independiente):** cada form sigue con su lógica actual de `validate()` o schemas UI locales. Esos no se tocan en Fase 1.

El schema es **single source of truth del contrato de transporte**, no del contrato UI.

**Schema Zod propuesto:**

```ts
// src/lib/form-schema.ts
export const submitSchema = z.object({
  full_name: z.string().trim().min(2).max(100).regex(/^[^\r\n]*$/, 'no newlines'),
  email: z.string().trim().email().max(200),
  phone_number: z.string().trim().min(7).max(30).optional(),
  company: z.string().trim().max(150).optional(),
  role: z.string().trim().max(50).optional(),
  country: z.string().trim().max(100).optional(),
  park: z.string().trim().max(50).optional(),
  interest: z.string().trim().max(500).optional(), // singular, string concatenado
  message: z.string().trim().max(2000).optional(),
  website: z.string().max(500).optional(), // honeypot: debería venir vacío o undefined
  turnstileToken: z.string().min(10).max(2048).optional(), // obligatorio desde Fase 3
})
```

**Nota sobre `full_name` y CRLF:** el `.regex(/^[^\r\n]*$/)` bloquea saltos de línea en el nombre. `full_name` se usa para construir el `subject` del email (`"Nuevo lead desde nelson.com.mx — ${full_name}"`). Un atacante que pudiera meter `\r\n` ahí inyectaría headers MIME (Bcc, Cc adicionales). Aunque el SDK de Resend probablemente ya escape esto, validar en Zod es barato y no confiamos en defensas ajenas.

**Por qué `website` NO tiene `.max(0)`:** el honeypot no se modela como regla Zod. Si Zod rechazara con `400` cuando `website` tiene valor, eso dejaría al bot con señal clara (código de error específico) para ajustar su payload y eludir la defensa. En lugar de eso:

1. Zod valida solo que `website` sea string de longitud razonable (`.max(500)`, para no procesar payloads enormes).
2. Después del parse exitoso, se chequea manualmente `if (parsed.data.website) return 200 silencioso`.

**Respuesta del honeypot — 200 silencioso:**

Cuando `website` llega con valor (post-Zod), devolver `{ success: true }` con status `200`, **indistinguible de un envío real**. El email no se envía, pero el bot cree que sí y no ajusta su payload para eludir la defensa. Loggear el rechazo internamente (`console.log({ layer: 'honeypot', ip, ... })`) para observabilidad.

Contraste: los rechazos por Zod (`400`), rate limit (`429`) y Turnstile (`403`) **sí** devuelven códigos distintos porque esos controles asumen adversario informado (bots que ya vieron que existen) y dar código no ayuda al atacante a ajustar. El honeypot es la única capa que depende de seguir siendo invisible.

**Honeypot — elección del nombre `website`:**

Evitar nombres que los password managers o autofill del navegador llenen por ti (`address`, `city`, `phone`, `name`, `email`). Esos causan falsos positivos con usuarios legítimos. `website` es seguro porque los campos típicos de form de contacto no piden website y los autofill no lo llenan spontáneamente. Alternativas aceptables: `fax`, `company_url`, `referrer_code`.

**Nota Fase 1:** `turnstileToken` es `.optional()` hasta Fase 3 para no romper forms durante desarrollo. En Fase 3 se cambia a requerido.

### Fase 2 — Upstash rate limit

Ataja bursts. Si el bot resuelve Turnstile más adelante, esto sigue siendo el cap duro por IP.

**Archivos:**
- `src/lib/ratelimit.ts` (nuevo) — exporta instancia de `Ratelimit` configurada.
- `src/app/api/submit-form/route.ts` — llamar `ratelimit.limit(ip)` **después** del honeypot (ver "Orden final de checks en server" en sección "Decisión → A"). Poner el call HTTPS a Upstash antes del honeypot gastaría cuota de Upstash en bots tontos que el honeypot (sync, gratis) ya tumbaría.

**Parámetros:**
- **Límite:** 3 submits por hora por IP. Motivación: un humano legítimo manda 1 form, quizás 2 si se equivoca. Con 3 dejamos margen sin ser laxos.
- **Algoritmo:** `Ratelimit.slidingWindow(3, '1 h')` — ventana deslizante suaviza picos en bordes de ventana.
- **IP source — requiere fuente confiable:** **no** tomar `x-forwarded-for[0]` sin validar — ese header es spoofeable si el atacante lo envía y el proxy lo concatena. Opciones en orden de preferencia:
  1. `import { ipAddress } from '@vercel/functions'` — helper oficial de Vercel que devuelve la IP real del cliente garantizada por el runtime. **Usar esta si la versión de `@vercel/functions` lo expone.**
  2. `request.headers.get('x-vercel-forwarded-for')` — header inyectado por Vercel específicamente, no modificable por el cliente.
  3. Último fallback: `x-forwarded-for[0]` documentando en el código que se confía en que Vercel sobrescribe/filtra valores inyectados por el cliente.
  **Antes de implementar Fase 2**, validar con un `curl` enviando `x-forwarded-for: 1.2.3.4` desde una IP real cuál es el comportamiento observable en Vercel y qué header es confiable. Dejar la decisión documentada en el código con el link a los docs de Vercel consultados.
- **Fallback cuando IP es `unknown`:** rate limit global con key `'unknown'` — peor caso, bloquea después de 3 submits globales hasta que expire la ventana. En la práctica nunca debería pasar con Vercel detrás.
- **Bypass en desarrollo — bypass completo por default:** `ipAddress()` devuelve `undefined` en `localhost`. Sin tratamiento especial, todos los devs (o el mismo dev probando varias veces) se bloquean tras **3 intentos**. Eso rompe el flujo de desarrollo normal. Política del plan:
  - Si `NODE_ENV === 'development'` y **no** está seteado `UPSTASH_RATELIMIT_FORCE=1` → el helper `checkRatelimit(ip)` retorna `{ success: true, source: 'dev-bypass' }` sin llamar a Upstash. Rápido, sin cuota consumida, sin bloqueos.
  - Si `NODE_ENV === 'development'` y `UPSTASH_RATELIMIT_FORCE=1` está seteado → sí llama a Upstash con key `'dev-local'` (bucket separado del bucket de prod), para validar la integración cuando explícitamente quieras probarla.
  - En producción y preview: comportamiento normal con IP real.
  El bypass completo es el default porque "3 intentos antes de bloquear al dev" es garantizado de romper la DX. La variable de entorno permite probar Upstash en dev cuando sea útil sin romper el flujo diario.

**Consumo Upstash:** el free tier da 10K commands/día. Cada submit gasta ~2 commands. 5K submits/día tope — más que suficiente para este sitio.

### Fase 3 — Turnstile

Bloqueo de bots scripteados que no ejecutan JS o no pueden resolver el challenge invisible.

**Cliente (3 forms):**
- Importar `<Turnstile />` de `@marsidev/react-turnstile`.
- Renderizar el widget; capturar el token en `onSuccess`.
- **Manejar expiración con `onExpire` (approach preferido):** los tokens de Turnstile expiran en ~5 min. Si el usuario llena el form lentamente o se distrae, al hacer submit el siteverify fallará con `timeout-or-duplicate`. El widget expone un callback `onExpire` que se dispara **antes** de enviar: en él, resetear el estado de token local (`setToken(null)`) y llamar al `.reset()` del widget para que refresque automáticamente y obtenga un token nuevo sin intervención del usuario. El submit ya estará deshabilitado mientras `token === null`, así que la UX es transparente: si el usuario acaba de terminar de llenar y el token acaba de expirar, ve un flash de "Verificando…" y luego el botón habilitado de nuevo.
- **Retry reactivo como fallback:** si a pesar del `onExpire` el siteverify server-side responde con `timeout-or-duplicate` (ej: race condition), re-renderizar el widget con `key={retryCount + 1}` para forzar remount, obtener nuevo token, y reintentar el submit una vez antes de mostrar error al usuario.
- Enviar `turnstileToken` junto al resto del payload.
- Mostrar "Cargando verificación…" mientras `token === null`; deshabilitar submit hasta tener token.
- Prop `options={{ language: 'es' }}` en forms ES, `'en'` en EN (el challenge modal solo aparece si el invisible falla; buena UX por idioma).

**Server (`route.ts`):**
- Hacer `POST https://challenges.cloudflare.com/turnstile/v0/siteverify` con `{ secret, response: turnstileToken, remoteip: ip }`.
- Rechazar si `success === false`.
- Loggear `error-codes[]` completos en `console.log` (tag `form-guard`) para diagnóstico interno.
- **Exponer un código abstracto en el response body** para que el cliente pueda decidir retry automático vs mensaje de error permanente. No devolver el código literal de Cloudflare (`timeout-or-duplicate`, `invalid-input-response`, etc.) directamente — mapearlo a un código UX abstracto:
  ```ts
  // route.ts
  if (!verify.success) {
    const codes = verify['error-codes'] ?? []
    const isExpired = codes.includes('timeout-or-duplicate')
    return NextResponse.json(
      { error: isExpired ? 'verification_expired' : 'verification_failed' },
      { status: 403 }
    )
  }
  ```
  El cliente lee `error === 'verification_expired'` → dispara retry silencioso del widget. Cualquier otro `verification_failed` → muestra error al usuario. Ver "UX de errores en el cliente" abajo.

**Orden final de checks en server (de barato a caro, parse-first):**

1. `await request.json()` envuelto en `try/catch` → 400 si el body no es JSON válido.
2. `submitSchema.safeParse(body)` → 400 si no cumple shape/longitudes.
3. Honeypot manual: `if (parsed.data.website) return 200 silencioso`.
4. Rate limit Upstash (1 call HTTPS) → 429 si se excede.
5. Turnstile siteverify (1 call HTTPS a Cloudflare) → 403 si falla.
6. `escapeHtml` aplicado a cada valor del payload (sync, siempre, sin rama de error).
7. Resend send (1 call HTTPS a Resend) → 500 si falla, con log interno (no exponer detalles).

**Por qué Zod antes que honeypot** (corrección sobre versión anterior del plan): el honeypot opera sobre campos del payload. Si ponemos el check antes del parse, estamos tocando `body.website` sobre un objeto no validado — si el bot manda un JSON malformado o con tipos raros (`website: 123` en vez de string), el código del honeypot se vuelve frágil. Zod garantiza un objeto tipado antes de que cualquier otra capa lo lea.

**Por qué rate limit y Turnstile después de sync checks**: poner llamadas HTTPS antes que checks sync gasta cuota de Upstash / llamadas a Cloudflare en payloads que honeypot o Zod tumbarían local y gratis. Orden: parse → validar → sync checks → llamadas externas.

### UX de errores en el cliente — Fase 2 + Fase 3

Los 3 forms hoy hacen `if (!res.ok) throw new Error('...')` genérico. Eso se debe refinar para que los status relevantes muestren mensajes útiles:

- **429 (rate limit):** un humano legítimo detrás de NAT corporativo puede chocar con el límite. Mensaje claro: "Has enviado varios formularios recientemente. Por favor espera unos minutos e intenta de nuevo." Texto equivalente en EN. **No** hacer retry automático — el límite existe por una razón.
- **403 `verification_expired`:** retry silencioso del widget Turnstile (reset + nuevo token) y re-submit automático una sola vez. Si vuelve a fallar → tratar como `verification_failed`.
- **403 `verification_failed`:** mensaje: "No pudimos verificar que eres humano. Recarga la página e intenta de nuevo." Esto típicamente indica bot o un browser muy raro.
- **400 (Zod):** indica payload roto. No debería pasar con forms legítimos. Mensaje genérico "Hubo un error con los datos del formulario. Revisa los campos."
- **500 (Resend/otro):** "Error al enviar. Inténtalo más tarde." Loggear en Sentry / Vercel para investigar.

Implementación: reemplazar el `if (!res.ok) throw` de cada form por un switch sobre `res.status` + `(await res.json()).error`, tocando los 3 archivos (`src/app/es/contacto/contact-form.tsx`, `src/app/es/contactanos/contact-section.tsx`, `src/app/(en)/contact/contact-section.tsx`). Consolidar la lógica en un helper `handleSubmitError(res)` si se repite palabra por palabra, pero no forzar abstracción prematura si los 3 forms son suficientemente distintos.

### Fase 4 — Observabilidad mínima

Necesitamos saber si las capas están funcionando o si hay falsos positivos.

- `console.log` estructurado como **JSON puro** (con el prefijo dentro del objeto), para que `jq` lo pueda parsear sin pre-procesamiento:
  ```ts
  console.log(JSON.stringify({
    tag: 'form-guard',
    layer: 'honeypot', // 'zod' | 'honeypot' | 'ratelimit' | 'turnstile' | 'resend'
    ip,
    reason: 'website field populated',
  }))
  ```
  **No** usar `console.log('[form-guard]', JSON.stringify(...))` porque el prefijo queda **fuera** del JSON y los comandos `jq` fallan con `parse error: Invalid literal`.
- **Comandos para medir:**
  ```bash
  # Filtrar líneas de form-guard del último día
  vercel logs --since 1d | jq -cR 'fromjson? | select(.tag == "form-guard")'

  # Conteo de rechazos por capa
  vercel logs --since 1d | jq -cR 'fromjson? | select(.tag == "form-guard") | .layer' | sort | uniq -c

  # Ver rechazos de una capa específica con IP
  vercel logs --since 1d | jq -cR 'fromjson? | select(.tag == "form-guard" and .layer == "ratelimit")'

  # Picos por hora (basado en timestamp del log line de Vercel)
  vercel logs --since 1d | jq -cR 'fromjson? | select(.tag == "form-guard") | .timestamp' | cut -d'T' -f2 | cut -d':' -f1 | sort | uniq -c
  ```
  `jq -cR 'fromjson? | ...'` intenta parsear cada línea como JSON y descarta las que no lo son (lines de framework, etc). Requiere `vercel` CLI autenticada y linkeada al proyecto.
- Revisar logs los primeros 3-7 días y ajustar parámetros (ej. subir rate limit a 5 si hay falsos positivos de clientes reales, o bajar longitud max de `message` si el spam usa mensajes largos).
- Si emerge patrón claro de IPs abusivas, evaluar lista de bloqueo persistente en Upstash (no en Fase 4 inicial, solo si aparece el problema).

---

## Archivos a tocar

| Archivo | Cambio |
|---|---|
| `package.json` | +4 deps (+ posiblemente `@vercel/functions` si aún no está, para `ipAddress`) |
| `.env.local` | +4 env vars |
| `src/app/api/submit-form/route.ts` | reescribir con 4 capas + escape HTML antes de interpolar |
| `src/lib/form-schema.ts` | nuevo — schema Zod compartido cliente ↔ server |
| `src/lib/escape-html.ts` | nuevo — helper `escapeHtml(s)` |
| `src/lib/ratelimit.ts` | nuevo |
| `src/lib/turnstile.ts` | nuevo — helper `verifyTurnstile(token, ip)` |
| `src/lib/get-client-ip.ts` | nuevo — wrapper que encapsula la decisión de IP source confiable (ver Fase 2) |
| `src/app/es/contacto/contact-form.tsx` | honeypot + widget Turnstile + token en payload + usar `submitSchema` importado |
| `src/app/es/contactanos/contact-section.tsx` | ídem |
| `src/app/(en)/contact/contact-section.tsx` | ídem |

Vercel:
- Production env vars × 4
- Preview env vars × 4 (mismos valores u otro par de keys si queremos aislar — los free tiers de Upstash y Turnstile aguantan compartir)

---

## Gotchas anticipados

- **Turnstile no carga en mobile/3G lento:** el wrapper hace retry, pero si nunca llega token el form queda bloqueado. Mostrar "Verificación de seguridad…" con spinner durante los primeros ~3s, después "Recarga si no avanza".
- **Tokens Turnstile son single-use y expiran en 5 min:** si el usuario tarda >5 min en llenar el form, el token se vencerá. Re-renderizar widget con `key={retryCount}` si el siteverify falla con `timeout-or-duplicate` y re-intentar automáticamente una vez antes de mostrar error.
- **Rate limit falso positivo en oficinas NAT:** varios usuarios detrás de una IP compartida (típico en oficinas corporativas) → pueden chocar con el cap de 3/hora si muchos empleados de la misma empresa llenan el form. Mitigación: subir a 5-10/hora si se reporta; o (no en Fase inicial) combinar IP + fingerprint del user-agent.
- **`x-forwarded-for` en dev:** en `localhost` el header no existe → `ip === 'unknown'`. Para pruebas locales forzar una IP fake vía header si se quiere validar rate limit en dev.
- **Spoofing de `x-forwarded-for`:** ver bullet "IP source" en Fase 2. No tomar `x-forwarded-for[0]` sin validar que Vercel lo sobrescribe. Validar empíricamente antes de confiar en ese valor para el rate limit.
- **Escape HTML vs libraries:** `escapeHtml` casero de 5 líneas es suficiente para el template actual (solo emite texto en `<td>`). No meter `DOMPurify` u otra dep para no cargar un árbol de dependencias grande en el runtime serverless. Si el template crece a permitir markup del usuario (no hay plan de eso), re-evaluar.
- **HTML en `subject` y `replyTo`:** el `subject` del email incluye `full_name` sin escape hoy. Escapar también ahí (aunque los clientes de email normalmente no renderizan HTML en subject, mejor consistente). `replyTo` se arma desde `email` ya validado por Zod; no hace falta escape extra, pero sí rechazar si Zod falla.
- **Doble escape si migramos a `react-email`:** si en el futuro se reemplaza el HTML string literal de `buildEmailHtml` por un template de `react-email` o similar, esos frameworks ya escapan por defecto. Aplicar `escapeHtml` manual sobre valores que ya pasaron por el escape del framework produce `&amp;amp;` en lugar de `&`. Al migrar, **remover** el `escapeHtml` manual y confiar en el escape del framework. Dejar un `// TODO: revisar escape si se migra a react-email` al lado del helper para que el trade-off sea evidente.
- **Turnstile y aviso de privacidad:** Turnstile por diseño no usa cookies de tracking cross-site ni fingerprinting agresivo (ese es su selling point vs reCAPTCHA), pero sí envía señales de browser/behavior a Cloudflare para la decisión del challenge. Si el sitio tiene política de privacidad / aviso de cookies (nelson.com.mx sí tiene), agregar una mención: "Usamos Cloudflare Turnstile para proteger formularios de spam. Turnstile procesa datos mínimos del navegador (IP, user-agent, señales básicas) y no instala cookies de seguimiento. Ver política de Cloudflare." Low-effort, evita problemas de compliance.
- **Honeypot y autofill:** algunos password managers llenan cualquier `<input>` visible o con `name` sospechoso. Usar `autoComplete="off"` + `tabIndex={-1}` + `aria-hidden="true"` + `display: none`. No usar `name="email"` o `name="name"` en el honeypot.
- **Zod en el cliente vs server:** schema idéntico importado en ambos lados. El cliente ya valida (ver `validate()` en `contact-form.tsx`), pero con reglas distintas. Consolidar en el schema Zod y reutilizar para validación client-side también — elimina drift.
- **País en form ES:** el form ES **no** manda `country` pero el form EN sí. El schema lo deja `.optional()` para compatibilidad.
- **Vercel preview deployments:** cada PR preview tiene URL distinta; el site key de Turnstile está ligado a dominios. Agregar `*.vercel.app` y el dominio de preview a la whitelist del site key en Cloudflare.

---

## Criterios de éxito

1. Un `curl` directo al endpoint con JSON basura recibe **400** (Zod) o **403** (Turnstile missing/invalid), no **200** con email enviado.
2. Un `curl` con payload que llena el honeypot recibe **200 silencioso** (sin email enviado), indistinguible de un submit real — log interno registra el rechazo.
3. Un `curl` con `full_name: '<script>alert(1)</script><a href="http://evil">link</a>'` y todo lo demás válido llega al buzón con el contenido **escapado como texto**, no como HTML renderizado.
4. El usuario legítimo llena el form en <30 segundos sin ver el CAPTCHA (invisible).
5. Más de 3 submits desde la misma IP en 1 hora reciben **429**.
6. Logs de Vercel muestran la capa que rechazó cada intento.
7. Una semana después: cero spam en las 4 cuentas de nelson.com.mx (medir contra la baseline actual que detonó el plan).

---

## Fuera de alcance

- **Email deliverability / SPF / DKIM:** ya resuelto (commit `2.0` del plan-terminar-grupo-nelson, Resend DNS listos).
- **Protección de otros endpoints:** solo `/api/submit-form` por ahora. Si aparece un endpoint público nuevo, replicar patrón.
- **Dashboard de spam/leads:** fuera de alcance. El BCC a `notifications@brandpetram.com` sigue siendo el registro informal.
- **Autenticación / sesión:** el form es público por diseño. Nada de "iniciar sesión antes de contactar".

---

## Siguiente paso

Revisar este plan con Codex/Gemini antes de implementar (flujo estándar de planes, ver `~/.claude/CLAUDE.md`). Triagear hallazgos y decidir si iterar o arrancar implementación por Fase 1 (Zod + honeypot), que es la de menor riesgo.
