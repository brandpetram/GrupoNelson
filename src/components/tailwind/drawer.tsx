'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { GridPoligonos2x1 } from '@/components/brandpetram/grid-poligonos-2x1'
import { Phone } from 'lucide-react'

export type ServiceDrawerData = {
  id: string
  name: string
  shortDescription: string
  image: string
  alt: string
  description?: string
  features?: string[]
  applications?: string[]
}

export type DrawerProps = {
  open: boolean
  onClose: () => void
  service: ServiceDrawerData | null
}

function getDisplayName(name: string): string {
  return name
}

export default function Drawer({ open, onClose, service }: DrawerProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Lock background scroll only when mounted and open
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    const body = document.body
    if (open) {
      root.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      root.style.overflow = ''
      body.style.overflow = ''
    }
    return () => {
      root.style.overflow = ''
      body.style.overflow = ''
    }
  }, [open, mounted])

  const [viewerOpen, setViewerOpen] = useState(false)
  const thumbBtnRef = useRef<HTMLButtonElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const closeViewer = () => {
    setViewerOpen(false)
    setTimeout(() => thumbBtnRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!open || viewerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, viewerOpen, onClose])

  useEffect(() => {
    if (!viewerOpen) return
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeViewer()
      } else if (e.key === 'Tab') {
        e.preventDefault()
        closeBtnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [viewerOpen])

  useEffect(() => {
    if (!open && viewerOpen) {
      setViewerOpen(false)
    }
  }, [open, viewerOpen])

  useEffect(() => {
    if (!open || viewerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        e.stopImmediatePropagation() // Evitar que otros listeners se ejecuten
        const container = scrollContainerRef.current
        if (!container) return
        const scrollAmount = 100
        container.scrollBy({
          top: e.key === 'ArrowDown' ? scrollAmount : -scrollAmount,
          behavior: 'smooth'
        })
      }
    }
    window.addEventListener('keydown', onKey, { capture: true }) // Capturar antes que otros listeners
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [open, viewerOpen])

  if (!mounted) return null

  const overlay = (
    <div className={`fixed inset-0 z-[1100] transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" onClick={onClose} />

      {/* Panel */}
      <div
        role={viewerOpen ? undefined : 'dialog'}
        className={`fixed right-0 top-0 h-[100dvh] w-[96vw] max-w-2xl bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col transform-gpu will-change-transform`}
      >
        {/* Header */}
        <div className="px-4 py-6 sm:px-6 border-b">
          <div className="flex items-start justify-between">
            <h2 className="text-base font-semibold text-gray-900 truncate">
              Grupo Nelson
            </h2>
            <div className="ml-3 flex h-7 items-center">
              <button type="button" onClick={onClose} className="relative rounded-xs p-1.5 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600">
                <span className="sr-only">Cerrar panel</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image Viewer Overlay */}
        {viewerOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Visor de imagen: ${service?.name ? getDisplayName(service.name) : 'Servicio'}`}
            className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center"
            style={{ touchAction: 'none' }}
            onClick={(e) => { e.stopPropagation(); closeViewer(); }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeViewer();
              }}
              className="absolute top-3 left-3 z-30 inline-flex items-center rounded-xs bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cerrar
            </button>
            {service?.image ? (
              <div className="relative z-10 w-full h-full pointer-events-none">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : null}
          </div>
        )}

        {/* Main content */}
        <div
          ref={scrollContainerRef}
          className={`divide-y divide-gray-200 ${viewerOpen ? 'overflow-hidden' : 'overflow-y-auto'}`}
        >
          {/* Cover band + image + title area */}
          <div className="pb-6">
            <div className="h-24 bg-gradient-to-bl from-blue-600 to-blue-700 sm:h-20 lg:h-28" />
            <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
              <div>
                <div className="-m-1 flex">
                  <button
                    ref={thumbBtnRef}
                    type="button"
                    aria-label="Ver imagen en grande"
                    aria-haspopup="dialog"
                    aria-expanded={viewerOpen}
                    onClick={() => setViewerOpen(true)}
                    className="inline-flex overflow-hidden rounded-xs border-4 border-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    {service?.image ? (
                      <img
                        alt={service.alt}
                        src={service.image}
                        className="size-24 shrink-0 bg-gray-100 outline outline-1 -outline-offset-1 outline-black/5 sm:size-40 lg:size-48 object-cover"
                      />
                    ) : (
                      <div className="size-24 sm:size-40 lg:size-48 bg-gray-100" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-6 sm:ml-6 sm:flex-1">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl truncate">{service?.name ? getDisplayName(service.name) : 'Servicio'}</h3>
                    <span className="ml-2.5 inline-block size-2 shrink-0 rounded-full bg-green-400">
                      <span className="sr-only">Disponible</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 text-balance">{service?.shortDescription}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-green-500 hover:via-green-400 hover:to-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xs bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Cotizar
                  </a>
                  <a
                    href="tel:+528181009100"
                    className="inline-flex items-center justify-center gap-2 rounded-xs bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content sections */}
          <div className="px-4 py-5 sm:px-6">
            {/* Características y Aplicaciones con imagen */}
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 mt-6">
              {/* Left: Lists */}
              <div className="space-y-4">
                {/* Características */}
                {service?.features?.length ? (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-2">Características</dt>
                    <dd className="text-sm text-gray-900">
                      <ul className="list-disc pl-5 space-y-1">
                        {service.features.map((f) => (
                          <li key={f} className="capitalize">{f}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}

                {/* Aplicaciones */}
                {service?.applications?.length ? (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-2">Aplicaciones</dt>
                    <dd className="text-sm text-gray-900">
                      <ul className="list-disc pl-5 space-y-1">
                        {service.applications.map((a) => (
                          <li key={a} className="capitalize">{a}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}
              </div>

              {/* Right: Image */}
              {service?.image ? (
                <div className="relative aspect-[3/2] w-full md:self-start">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover rounded-xs"
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* Lorem ipsum paragraphs */}
          <div className="px-4 py-5 sm:px-6">
            <div className="space-y-4 text-sm text-gray-900">
              <p className="text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-balance">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* 2x1 Grid */}
          <div className="px-4 py-5 sm:px-6">
            <GridPoligonos2x1 />
          </div>

          {/* Final paragraph */}
          <div className="px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-900 text-balance">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
