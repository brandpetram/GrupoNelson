'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Turnstile } from '@marsidev/react-turnstile'
import { useTurnstileSubmit } from '@/hooks/use-turnstile-submit'
import Header from '@/components/Header'

// ── Imagen y efectos visuales (configurables) ──────────────────────
const HERO_IMAGE = '/parque-industrial-nelson-2-mexicali/Specs-Nave-Industrial-1-Nelson-II-002.jpg'
const IMAGE_FILTER = 'brightness(0.6) contrast(1.15)'
const IMAGE_BLUR = '0px'
const OVERLAY_COLOR = 'rgba(10, 25, 60, 0.65)'
const OVERLAY_BLEND_MODE = 'multiply'
const OVERLAY_FADE_START = '30%'
const OVERLAY_FADE_END = '75%'
const DARK_OVERLAY = 0.1
const GRID_ENABLED = true
const GRID_SIZE = 120
const GRID_STROKE_COLOR = 'rgba(255, 255, 255, 0.1)'
const GRID_FADE_RADIUS = '28rem'

const ROLE_OPTIONS = [
  'Cliente final',
  'Broker',
]

const INTEREST_OPTIONS = [
  'Busco nave disponible',
  'Busco terreno para construir',
  'Necesito nave a la medida (build-to-suit)',
  'Quiero conocer un parque industrial',
  'Otro',
]

export default function ContactForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    park: '',
    interests: [] as string[],
    message: '',
    website: '',
  })

  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const turnstile = useTurnstileSubmit()

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  function toggleInterest(value: string) {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(v => v !== value)
        : [...prev.interests, value],
    }))
    if (errors.interests) setErrors(prev => ({ ...prev, interests: null }))
  }

  function validate() {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'El teléfono debe ser de al menos 10 dígitos'
    }
    if (formData.interests.length === 0) newErrors.interests = 'Selecciona al menos una opción'
    return newErrors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!turnstile.canSubmit) {
      setErrors({ submit: 'Estamos verificando que no eres un bot. Espera un momento.' })
      return
    }

    setIsSubmitting(true)
    try {
      const res = await turnstile.submit(token => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          company: formData.company,
          role: formData.role,
          park: formData.park,
          interest: formData.interests.join(', '),
          message: formData.message,
          website: formData.website,
          turnstileToken: token,
        }),
      }))

      if (res.ok) {
        router.push('/gracias')
        return
      }

      if (res.status === 400) {
        setErrors({ submit: 'Revisa los campos, hay datos inválidos.' })
      } else if (res.status === 429) {
        setErrors({ submit: 'Has enviado varios formularios recientemente. Espera unos minutos e intenta de nuevo.' })
      } else if (res.status === 403) {
        setErrors({ submit: 'No pudimos verificar que eres humano. Recarga la página e intenta de nuevo.' })
      } else {
        setErrors({ submit: 'Hubo un error al enviar. Inténtalo de nuevo.' })
      }
    } catch {
      setErrors({ submit: 'Hubo un error al enviar. Inténtalo de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-x-clip">
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row mt-20">

        {/* ── Lado izquierdo: Formulario ── */}
        <div className="relative z-10 w-full lg:w-[45%] bg-background px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">

          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Contacto
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tighter leading-none text-gray-900 dark:text-white mb-3">
            Hablemos de<br />tu proyecto
          </h1>
          <p className="text-base sm:text-lg font-light tracking-wide text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed">
            Naves industriales, terrenos y construcción a la medida en Mexicali.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            {/* Honeypot: campo oculto, debe permanecer vacío. Si un bot lo llena, el endpoint responde 200 silencioso sin enviar email. display:none para que password managers no lo autocompleten. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={formData.website}
              onChange={e => setFormData(prev => ({ ...prev, website: e.target.value }))}
              style={{ display: 'none' }}
            />
            {/* Nombre */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Nombre completo <span className="text-primary">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Tu nombre"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="tu@empresa.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Teléfono <span className="text-primary">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="686 123 4567"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>

            {/* Soy */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Soy
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ROLE_OPTIONS.map(option => {
                  const isSelected = formData.role === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, role: option }))
                        if (errors.role) setErrors(prev => ({ ...prev, role: null }))
                      }}
                      className={`rounded-xs px-4 py-2.5 text-sm font-medium text-center transition-colors border ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-gray-900 dark:text-white'
                          : 'border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Parque industrial */}
            <div>
              <label htmlFor="park" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Parque industrial
              </label>
              <div className="relative">
              <select
                id="park"
                name="park"
                value={formData.park}
                onChange={handleChange}
                className="w-full appearance-none rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 pr-10 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">No tengo preferencia</option>
                <option value="Nelson II">Parque Nelson II</option>
                <option value="Nelson I">Parque Nelson I</option>
                <option value="Nelson III">Parque Nelson III (en construcción)</option>
                <option value="El Vigía I">Parque El Vigía I</option>
                <option value="El Vigía II">Parque El Vigía II</option>
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </div>
            </div>

            {/* Interés — multi-select */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Interés <span className="text-primary">*</span>
                <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">(puedes elegir varios)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INTEREST_OPTIONS.map(option => {
                  const isSelected = formData.interests.includes(option)
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleInterest(option)}
                      className={`rounded-xs px-4 py-2.5 text-sm font-medium text-left transition-colors border ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-gray-900 dark:text-white'
                          : 'border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              {errors.interests && <p className="mt-1 text-sm text-red-400">{errors.interests}</p>}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xs border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Error global */}
            {errors.submit && (
              <div className="rounded-xs bg-red-900/30 border border-red-500/30 p-3">
                <p className="text-sm text-red-400">{errors.submit}</p>
              </div>
            )}

            {/* Turnstile widget (invisible/managed) */}
            {turnstile.siteKey && (
              <Turnstile
                ref={turnstile.ref}
                siteKey={turnstile.siteKey}
                options={{ language: 'es', theme: 'auto' }}
                onSuccess={turnstile.onSuccess}
                onExpire={turnstile.onExpire}
                onError={turnstile.onError}
              />
            )}

            {/* Aviso si el widget falló de cargar (adblock, CSP, env var ausente). */}
            {(!turnstile.siteKey || turnstile.widgetFailed) && (
              <div className="rounded-xs bg-yellow-50 border border-yellow-300 p-3 dark:bg-yellow-900/20 dark:border-yellow-500/40">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  No pudimos cargar la verificación de seguridad. Recarga la página o desactiva tu bloqueador de anuncios para poder enviar el formulario.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !turnstile.canSubmit}
              className="w-full rounded-xs bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 text-base transition-colors"
            >
              {isSubmitting ? 'Enviando...' : !turnstile.canSubmit ? 'Verificando…' : 'Enviar mensaje'}
            </button>
          </form>
        </div>

        {/* ── Lado derecho: Imagen sticky ── */}
        <div className="relative hidden lg:block lg:w-[55%] lg:sticky lg:top-0 lg:self-start" style={{ minHeight: '100vh' }}>
          {/* Capa 1: Imagen con filtros */}
          <img
            src={HERO_IMAGE}
            alt="Parque Industrial Nelson II"
            className="absolute inset-0 h-full w-full object-cover object-left"
            style={{ filter: `${IMAGE_FILTER} blur(${IMAGE_BLUR})` }}
          />

          {/* Capa 2: Overlay gradiente izquierda → derecha */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${OVERLAY_COLOR} 0%, ${OVERLAY_COLOR} ${OVERLAY_FADE_START}, transparent ${OVERLAY_FADE_END})`,
              mixBlendMode: OVERLAY_BLEND_MODE as React.CSSProperties['mixBlendMode'],
            }}
          />

          {/* Capa 3: Oscurecimiento */}
          {DARK_OVERLAY > 0 && (
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${DARK_OVERLAY})` }} />
          )}

          {/* Capa 4: Grid SVG */}
          {GRID_ENABLED && (
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id="contact-grid" width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
                    <path d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`} fill="none" stroke={GRID_STROKE_COLOR} strokeWidth="1" />
                  </pattern>
                  <radialGradient id="contact-grid-fade">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="contact-grid-mask">
                    <rect width="100%" height="100%" fill="url(#contact-grid-fade)" style={{ transformOrigin: 'center', transform: `scale(${parseFloat(GRID_FADE_RADIUS) / 14})` }} />
                  </mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-grid)" mask="url(#contact-grid-mask)" />
              </svg>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
