'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { TurnstileInstance } from '@marsidev/react-turnstile'

const TURNSTILE_SITE_KEY = (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '').trim()
const FRESH_TOKEN_TIMEOUT_MS = 10_000
const FRESH_TOKEN_POLL_MS = 200

export interface TurnstileSubmitApi {
  siteKey: string
  ref: (inst: TurnstileInstance | null) => void
  onSuccess: (token: string) => void
  onExpire: () => void
  onError: () => void
  canSubmit: boolean
  widgetFailed: boolean
  submit: (build: (token: string) => RequestInit) => Promise<Response>
}

/**
 * Hook compartido por los forms de contacto para encapsular la lógica de
 * Turnstile: estado del token, ref al widget, callbacks, retry silencioso
 * si el server responde `verification_expired`, cleanup en unmount.
 *
 * Resuelve:
 *   - Triplicación del flujo de retry en los 3 forms.
 *   - Leak de setTimeout si el componente desmonta durante el polling.
 *   - Falta de señal al usuario cuando el widget falla (widgetFailed).
 */
export function useTurnstileSubmit(): TurnstileSubmitApi {
  const [token, setToken] = useState<string | null>(null)
  const [widgetFailed, setWidgetFailed] = useState(false)
  const turnstileRef = useRef<TurnstileInstance | null>(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const onSuccess = useCallback((t: string) => {
    if (!mountedRef.current) return
    setToken(t)
    setWidgetFailed(false)
  }, [])

  const onExpire = useCallback(() => {
    if (!mountedRef.current) return
    setToken(null)
    turnstileRef.current?.reset()
  }, [])

  const onError = useCallback(() => {
    if (!mountedRef.current) return
    setToken(null)
    setWidgetFailed(true)
  }, [])

  const setRef = useCallback((inst: TurnstileInstance | null) => {
    turnstileRef.current = inst
  }, [])

  const pollForFreshToken = useCallback((): Promise<string | null> => {
    return new Promise(resolve => {
      const start = Date.now()
      const tick = () => {
        if (!mountedRef.current) return resolve(null)
        const t = turnstileRef.current?.getResponse() ?? null
        if (t) return resolve(t)
        if (Date.now() - start > FRESH_TOKEN_TIMEOUT_MS) return resolve(null)
        setTimeout(tick, FRESH_TOKEN_POLL_MS)
      }
      tick()
    })
  }, [])

  const submit = useCallback(
    async (build: (t: string) => RequestInit): Promise<Response> => {
      if (!token) throw new Error('submit called without token')

      const doFetch = (t: string) => fetch('/api/submit-form', build(t))

      const res = await doFetch(token)
      if (res.ok || res.status !== 403) return res

      const body = (await res.clone().json().catch(() => ({}))) as { error?: string }
      if (body?.error !== 'verification_expired') return res

      turnstileRef.current?.reset()
      const fresh = await pollForFreshToken()
      if (!fresh) return res

      return doFetch(fresh)
    },
    [token, pollForFreshToken]
  )

  return {
    siteKey: TURNSTILE_SITE_KEY,
    ref: setRef,
    onSuccess,
    onExpire,
    onError,
    canSubmit: !!token,
    widgetFailed,
    submit,
  }
}
