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

  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    const body = document.body
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      html.style.overflow = 'hidden'
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      html.style.overflow = ''
      body.style.paddingRight = ''
    }
    return () => {
      html.style.overflow = ''
      body.style.paddingRight = ''
    }
  }, [open, mounted])

  const [viewerOpen, setViewerOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const thumbBtnRef = useRef<HTMLButtonElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const touchStartXRef = useRef<number | null>(null)
  const swipedRef = useRef(false)

  // Resetear imagen activa y scroll cuando cambia la nave
  useEffect(() => {
    setActiveImage(nave?.images?.[0] ?? null)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [nave?.id])

  const closeViewer = () => {
    setViewerOpen(false)
    setTimeout(() => thumbBtnRef.current?.focus(), 0)
  }

  // Escape cierra el drawer (cuando el viewer está cerrado)
  useEffect(() => {
    if (!open || viewerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, viewerOpen, onClose])

  // Escape + ArrowLeft/Right cuando el viewer está abierto
  useEffect(() => {
    if (!viewerOpen) return
    closeBtnRef.current?.focus()
    const images = nave?.images ?? []
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeViewer()
      } else if (e.key === 'Tab') {
        e.preventDefault()
        closeBtnRef.current?.focus()
      } else if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && images.length > 1) {
        e.preventDefault()
        setActiveImage((current) => {
          const idx = images.indexOf(current ?? '')
          const next = e.key === 'ArrowRight'
            ? (idx + 1) % images.length
            : (idx - 1 + images.length) % images.length
          return images[next]
        })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [viewerOpen, nave])

  // Cerrar viewer si se cierra el drawer
  useEffect(() => {
    if (!open && viewerOpen) setViewerOpen(false)
  }, [open, viewerOpen])

  // ArrowUp/Down para scroll del drawer
  useEffect(() => {
    if (!open || viewerOpen) return
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
  }, [open, viewerOpen])

  if (!mounted) return null

  // ── Filas del grid de especificaciones ────────────────────────────────────
  const specs: { label: string; value: string | number | undefined }[] = nave ? [
    { label: 'Ubicación',       value: nave.ubicacion },
    { label: 'Superficie',      value: nave.superficieM2 > 0 ? `${nave.superficieM2.toLocaleString('es-MX')} m²  ·  ${nave.superficieFt2.toLocaleString('es-MX')} sq ft` : undefined },
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

  const images = nave?.images ?? []

  const overlay = (
    <div
      className={`fixed inset-0 z-[1100] transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div
        role={viewerOpen ? undefined : 'dialog'}
        aria-modal={viewerOpen ? undefined : true}
        aria-label={nave?.nave ?? 'Nave industrial'}
        className={`fixed right-0 top-0 h-[100dvh] w-[96vw] lg:w-[56vw] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col transform-gpu will-change-transform`}
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

        {/* Lightbox viewer */}
        {viewerOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Visor de imagen: ${nave?.nave ?? 'Nave industrial'}`}
            className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center"
            style={{ touchAction: 'none' }}
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0].clientX
              swipedRef.current = false
            }}
            onTouchEnd={(e) => {
              if (touchStartXRef.current === null) return
              const delta = e.changedTouches[0].clientX - touchStartXRef.current
              if (Math.abs(delta) > 50 && images.length > 1) {
                swipedRef.current = true
                setActiveImage((current) => {
                  const idx = images.indexOf(current ?? '')
                  const next = delta < 0
                    ? (idx + 1) % images.length
                    : (idx - 1 + images.length) % images.length
                  return images[next]
                })
              }
            }}
            onClick={(e) => { e.stopPropagation(); if (!swipedRef.current) closeViewer() }}
          >
            {/* Botón cerrar viewer */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={(e) => { e.stopPropagation(); closeViewer() }}
              className="absolute top-3 left-3 z-30 inline-flex items-center rounded-xs bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cerrar
            </button>

            {/* Flecha izquierda */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((current) => {
                    const idx = images.indexOf(current ?? '')
                    return images[(idx - 1 + images.length) % images.length]
                  })
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center size-14 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Foto anterior"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Flecha derecha */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((current) => {
                    const idx = images.indexOf(current ?? '')
                    return images[(idx + 1) % images.length]
                  })
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center size-14 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Foto siguiente"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Contador */}
            {images.length > 1 && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/70 text-sm tabular-nums">
                {images.indexOf(activeImage ?? '') + 1} / {images.length}
              </p>
            )}

            {activeImage && (
              <div className="relative z-10 w-full h-full pointer-events-none">
                <img
                  src={activeImage}
                  alt={`${nave?.nave ?? ''} foto`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Contenido scrollable */}
        <div
          ref={scrollContainerRef}
          className={`flex-1 divide-y divide-gray-200 ${viewerOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}
        >

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

              {nave?.nota && (
                <p className="mt-3 flex items-start gap-1.5 rounded-sm bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  <span className="mt-px flex-shrink-0">⚠️</span>
                  <span>{nave.nota}</span>
                </p>
              )}

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

          {/* Galería — strip de thumbnails + grid clicable */}
          {images.length > 0 && (
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Fotos {images.length > 1 && <span className="font-normal text-gray-400">({images.length})</span>}
              </h3>

              {/* Strip de thumbnails cuando hay más de 1 */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xs overflow-hidden border-2 transition-all ${activeImage === img ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}`}
                      aria-label={`Foto ${i + 1}`}
                    >
                      <img src={img} alt={`${nave?.nave} foto ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Grid clicable — abre el lightbox */}
              <div className="grid grid-cols-2 gap-2">
                {images.map((img, i) => (
                  <button
                    ref={i === 0 ? thumbBtnRef : undefined}
                    key={img}
                    type="button"
                    onClick={() => { setActiveImage(img); setViewerOpen(true) }}
                    className={`relative aspect-square overflow-hidden rounded-xs group border-2 transition-colors ${activeImage === img ? 'border-blue-600' : 'border-transparent'}`}
                    aria-label={`Ver foto ${i + 1} en pantalla completa`}
                  >
                    <img
                      src={img}
                      alt={`${nave?.nave} foto ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </button>
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
