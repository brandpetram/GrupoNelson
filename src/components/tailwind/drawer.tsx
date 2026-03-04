'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Phone } from 'lucide-react'
import { NaveIndustrial } from '@/data/naves-industriales'

export type DrawerProps = {
  open: boolean
  onClose: () => void
  nave: NaveIndustrial | null
}

// ── Colores de badge de estatus ───────────────────────────────────────────────
const estatusBadgeClasses: Record<NaveIndustrial['estatus'], string> = {
  'Disponible':       'bg-emerald-100 text-emerald-800',
  'Ocupada':          'bg-gray-100 text-gray-600',
  'En construcción':  'bg-amber-100 text-amber-800',
}

export default function Drawer({ open, onClose, nave }: DrawerProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const savedScrollY = useRef(0)

  useEffect(() => {
    if (!mounted) return
    const body = document.body
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      savedScrollY.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${savedScrollY.current}px`
      body.style.width = '100%'
      body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.style.paddingRight = ''
      window.scrollTo(0, savedScrollY.current)
    }
    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.style.paddingRight = ''
    }
  }, [open, mounted])

  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        e.stopImmediatePropagation()
        const container = scrollContainerRef.current
        if (!container) return
        container.scrollBy({ top: e.key === 'ArrowDown' ? 100 : -100, behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [open])

  if (!mounted) return null

  // ── Filas del grid de especificaciones ────────────────────────────────────
  const specs: { label: string; value: string | number | undefined }[] = nave ? [
    { label: 'Ubicación',       value: nave.ubicacion },
    { label: 'Superficie',      value: `${nave.superficieM2.toLocaleString('es-MX')} m²  ·  ${nave.superficieFt2.toLocaleString('es-MX')} sq ft` },
    { label: 'Terreno',         value: nave.terreno },
    { label: 'Clear height',    value: `${nave.clearHeightFt} ft` },
    { label: 'Altura máxima',   value: nave.alturaMaxM ? `${nave.alturaMaxM} m` : undefined },
    { label: 'Andenes',         value: nave.docksDetalle ?? nave.docks },
    { label: 'Estacionamiento', value: nave.estacionamiento ? `${nave.estacionamiento} espacios` : undefined },
    { label: 'Patio maniobras', value: nave.patioManiobras },
    { label: 'Piso',            value: nave.piso },
    { label: 'Techo',           value: nave.techo },
    { label: 'Paredes',         value: nave.paredes },
    { label: 'Iluminación',     value: nave.iluminacion },
    { label: 'Subestación',     value: nave.subestacion },
    { label: 'HVAC',            value: nave.hvac ? 'Sí — área de oficinas' : undefined },
    { label: 'Sprinklers',      value: nave.sprinklers ? 'Sí' : undefined },
  ].filter(s => s.value !== undefined && s.value !== '') : []

  const overlay = (
    <div
      className={`fixed inset-0 z-[1100] transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={nave?.nave ?? 'Nave industrial'}
        className={`fixed right-0 top-0 h-[100dvh] w-[96vw] max-w-2xl bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col transform-gpu will-change-transform`}
      >
        {/* Header */}
        <div className="px-4 py-6 sm:px-6 border-b flex-shrink-0">
          <div className="flex items-start justify-between">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Grupo Nelson
            </p>
            <button
              type="button"
              onClick={onClose}
              className="relative rounded-xs p-1.5 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <span className="sr-only">Cerrar panel</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido scrollable */}
        <div ref={scrollContainerRef} className="overflow-y-auto flex-1 divide-y divide-gray-200">

          {/* Hero: nombre + parque + estatus + descripción + CTAs */}
          <div className="pb-6">
            <div className="h-24 bg-gradient-to-bl from-blue-700 to-blue-900 sm:h-20 lg:h-28" />
            <div className="px-4 sm:px-6 mt-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{nave?.nave}</h2>
                {nave && (
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${estatusBadgeClasses[nave.estatus]}`}>
                    {nave.estatus}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{nave?.parque}</p>
              <p className="mt-2 text-sm text-gray-600 text-balance">{nave?.shortDescription}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => { onClose(); window.dispatchEvent(new Event('openWhatsAppDrawer')) }}
                  className="inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-green-500 hover:via-green-400 hover:to-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  WhatsApp
                </button>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xs bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Solicitar información
                </a>
                <a
                  href="tel:+526865534088"
                  className="inline-flex items-center justify-center gap-2 rounded-xs bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Phone className="w-4 h-4" />
                  Llamar
                </a>
              </div>
            </div>
          </div>

          {/* Grid de especificaciones */}
          {specs.length > 0 && (
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Especificaciones</h3>
              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <dt className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</dt>
                    <dd className="mt-0.5 text-sm text-gray-900">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Aplicaciones */}
          {nave?.applications && nave.applications.length > 0 && (
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Usos ideales</h3>
              <div className="flex flex-wrap gap-2">
                {nave.applications.map(a => (
                  <span key={a} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Galería — solo cuando hay imágenes */}
          {nave?.images && nave.images.length > 0 && (
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Fotos</h3>
              <div className="grid grid-cols-2 gap-2">
                {nave.images.map((img, i) => (
                  <div key={img} className="relative aspect-square overflow-hidden rounded-xs">
                    <img
                      src={img}
                      alt={`${nave.nave} foto ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
