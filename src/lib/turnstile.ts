/**
 * Verifica un token Turnstile contra el endpoint de Cloudflare.
 * Devuelve un código abstracto en lugar del literal de CF para:
 *   1. no exponer internals al cliente,
 *   2. mapear `timeout-or-duplicate` a `expired` para disparar retry
 *      silencioso (reset del widget) en vez de un mensaje de error
 *      permanente.
 *
 * Política de fail-open vs fail-closed:
 *   - Network error (fetch throw, timeout, AbortError): fail-OPEN — la
 *     petición nunca llegó a CF. Confiamos en las capas sync previas
 *     (Zod, honeypot, rate limit) en vez de bloquear a todos los
 *     usuarios legítimos si CF cae o hay un glitch de red.
 *   - HTTP error (5xx, 4xx) o parse error: fail-CLOSED. Si CF responde
 *     algo pero no es lo esperado, no sabemos si es un fallo del server
 *     o un intento de abuso. Seguro > disponibilidad.
 *   - `success: false` con error-codes: fail-CLOSED con `code` mapeado.
 *   - `success: true` pero hostname fuera de allowlist: fail-CLOSED.
 */

export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; code: 'expired' | 'failed' }

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const VERIFY_TIMEOUT_MS = 6000

const ALLOWED_HOSTNAMES = new Set([
  'nelson.com.mx',
  'www.nelson.com.mx',
  'localhost',
])

interface CloudflareResponse {
  success: boolean
  'error-codes'?: string[]
  hostname?: string
  action?: string
  cdata?: string
}

export async function verifyTurnstile(
  token: string,
  ip: string
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (!secret) {
    console.error('[turnstile] TURNSTILE_SECRET_KEY not configured')
    return { ok: false, code: 'failed' }
  }

  const params = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  })

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), VERIFY_TIMEOUT_MS)

  let res: Response
  try {
    res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      signal: controller.signal,
    })
  } catch (err) {
    clearTimeout(timeout)
    // Fail-OPEN: network-level failure, nunca llegó la request a CF.
    // AbortError (timeout local) o TypeError (DNS/conn refused).
    console.error('[turnstile] siteverify network error (fail-open):', err)
    return { ok: true }
  } finally {
    clearTimeout(timeout)
  }

  if (!res.ok) {
    // Fail-CLOSED: CF respondió pero con error HTTP. No sabemos si es
    // su problema o si el token es sospechoso.
    console.error(`[turnstile] siteverify HTTP ${res.status} (fail-closed)`)
    return { ok: false, code: 'failed' }
  }

  let data: CloudflareResponse
  try {
    data = (await res.json()) as CloudflareResponse
  } catch (err) {
    // Fail-CLOSED: respuesta no parseable.
    console.error('[turnstile] siteverify non-JSON response (fail-closed):', err)
    return { ok: false, code: 'failed' }
  }

  if (!data.success) {
    const codes = data['error-codes'] ?? []
    const isExpired = codes.includes('timeout-or-duplicate')
    return { ok: false, code: isExpired ? 'expired' : 'failed' }
  }

  // Validación de hostname server-side: segundo candado independiente
  // de la configuración del widget en Cloudflare. Si el site key se
  // filtra o los dominios del widget se amplían por error, este check
  // limita el blast radius.
  if (data.hostname && !ALLOWED_HOSTNAMES.has(data.hostname)) {
    console.error(`[turnstile] unexpected hostname (fail-closed): ${data.hostname}`)
    return { ok: false, code: 'failed' }
  }

  return { ok: true }
}
