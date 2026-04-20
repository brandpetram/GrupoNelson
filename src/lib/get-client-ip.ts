import { ipAddress } from '@vercel/functions'

/**
 * Devuelve la IP real del cliente, usando helpers nativos de Vercel cuando
 * existe el runtime; cae a `x-vercel-forwarded-for` (inyectada por el proxy
 * y no modificable por el cliente) como backup. En dev local siempre
 * devuelve `'dev-local'` para que el rate limit no bloquee al equipo.
 *
 * Nunca se confía en `x-forwarded-for` tal como viene — ese header es
 * spoofeable si el atacante lo envía y el proxy lo concatena.
 */
export function getClientIp(request: Request): string {
  if (process.env.NODE_ENV === 'development') {
    return 'dev-local'
  }

  const vercelIp = ipAddress(request)
  if (vercelIp) return vercelIp

  const vercelHeader = request.headers.get('x-vercel-forwarded-for')
  if (vercelHeader) return vercelHeader.split(',')[0].trim()

  return 'unknown'
}
