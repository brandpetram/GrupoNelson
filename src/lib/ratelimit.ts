import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

let ratelimitInstance: Ratelimit | null = null

function getRatelimit(): Ratelimit {
  if (!ratelimitInstance) {
    const url = process.env.UPSTASH_REDIS_REST_URL?.trim()
    const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim()
    if (!url || !token) {
      throw new Error('UPSTASH_REDIS_REST_URL/TOKEN not configured')
    }
    ratelimitInstance = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(3, '1 h'),
      prefix: 'nelson:ratelimit',
      analytics: false,
    })
  }
  return ratelimitInstance
}

export interface RatelimitResult {
  success: boolean
  source: 'upstash' | 'dev-bypass'
  remaining?: number
  reset?: number
}

/**
 * Evalúa el rate limit para una IP. En desarrollo hace bypass completo por
 * default (sin llamar a Upstash) para no bloquear al equipo. Para forzar el
 * path real de Upstash en dev, setear UPSTASH_RATELIMIT_FORCE=1.
 */
export async function checkRatelimit(ip: string): Promise<RatelimitResult> {
  const isDev = process.env.NODE_ENV === 'development'
  const forceInDev = process.env.UPSTASH_RATELIMIT_FORCE === '1'

  if (isDev && !forceInDev) {
    return { success: true, source: 'dev-bypass' }
  }

  const result = await getRatelimit().limit(ip)
  return {
    success: result.success,
    source: 'upstash',
    remaining: result.remaining,
    reset: result.reset,
  }
}
