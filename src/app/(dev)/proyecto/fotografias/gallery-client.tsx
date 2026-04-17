'use client'

import { useEffect, useState } from 'react'
import { X, Copy, Check } from 'lucide-react'

type SectionEntry = { name: string; count: number }
type StatusFilter = 'all' | 'used' | 'unused'

/**
 * Client wrapper que envuelve el grid (renderizado server-side).
 *
 * Maneja buscador, filtro por estado, filtro por sección, lightbox y copiar ruta.
 * No recibe el array completo de fotos — interactúa con el DOM usando data-attributes
 * de cada tarjeta (data-photo-filename, data-photo-path, data-photo-used, data-photo-pages).
 */
export function GalleryClient({
  sections,
  children,
}: {
  sections: SectionEntry[]
  children: React.ReactNode
}) {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState<number>(0)

  const [lightboxPath, setLightboxPath] = useState<string | null>(null)
  const [lightboxFilename, setLightboxFilename] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Aplicar filtros al DOM.
  useEffect(() => {
    const q = query.toLowerCase().trim()
    const cards = document.querySelectorAll<HTMLElement>('[data-photo-filename]')

    let visible = 0
    cards.forEach((card) => {
      const fn = (card.dataset.photoFilename || '').toLowerCase()
      const path = (card.dataset.photoPath || '').toLowerCase()
      const used = card.dataset.photoUsed === '1'
      const pagesRaw = card.dataset.photoPages || ''
      const pages = pagesRaw ? pagesRaw.split('|') : []

      let hidden = false
      if (q.length > 0 && !fn.includes(q) && !path.includes(q)) hidden = true
      if (statusFilter === 'used' && !used) hidden = true
      if (statusFilter === 'unused' && used) hidden = true
      if (selectedSection && !pages.includes(selectedSection)) hidden = true

      card.hidden = hidden
      if (!hidden) visible++
    })
    setVisibleCount(visible)

    // Ocultar sección entera si no hay tarjetas visibles.
    const grids = document.querySelectorAll<HTMLElement>('[data-section]')
    grids.forEach((section) => {
      const anyVisible = Array.from(
        section.querySelectorAll<HTMLElement>('[data-photo-filename]'),
      ).some((c) => !c.hidden)
      section.hidden = !anyVisible
    })
  }, [query, statusFilter, selectedSection])

  // Delegación: copiar ruta / abrir lightbox.
  useEffect(() => {
    const handler = async (e: MouseEvent) => {
      const target = e.target as HTMLElement

      const copyBtn = target.closest<HTMLElement>('[data-copy]')
      if (copyBtn) {
        e.preventDefault()
        e.stopPropagation()
        const path = copyBtn.dataset.copy!
        try {
          await navigator.clipboard.writeText(path)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {}
        return
      }

      const openCard = target.closest<HTMLElement>('[data-photo-open]')
      if (openCard) {
        setLightboxPath(openCard.dataset.photoOpen!)
        setLightboxFilename(openCard.dataset.photoFilename || null)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // ESC cierra lightbox.
  useEffect(() => {
    if (!lightboxPath) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxPath(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxPath])

  const clearFilters = () => {
    setQuery('')
    setStatusFilter('all')
    setSelectedSection(null)
  }

  const anyFilterActive =
    query.trim().length > 0 || statusFilter !== 'all' || selectedSection !== null

  return (
    <>
      <div className="flex gap-8">
        {/* Sidebar sticky */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-6 space-y-7 text-sm max-h-[calc(100vh-3rem)] overflow-y-auto pr-2 -mr-2">
            <FilterGroup title="Estado">
              <FilterRow
                label="Todas"
                active={statusFilter === 'all'}
                onClick={() => setStatusFilter('all')}
              />
              <FilterRow
                label="En uso"
                active={statusFilter === 'used'}
                onClick={() => setStatusFilter('used')}
              />
              <FilterRow
                label="Sin uso"
                active={statusFilter === 'unused'}
                onClick={() => setStatusFilter('unused')}
              />
            </FilterGroup>

            <FilterGroup title={`Secciones del sitio (${sections.length})`}>
              {sections.map((s) => (
                <FilterRow
                  key={s.name}
                  label={stripPrefix(s.name)}
                  prefix={getPrefix(s.name)}
                  count={s.count}
                  active={selectedSection === s.name}
                  onClick={() =>
                    setSelectedSection((prev) => (prev === s.name ? null : s.name))
                  }
                />
              ))}
            </FilterGroup>

            {anyFilterActive && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Buscador sticky */}
          <div className="sticky top-0 z-20 -mx-4 px-4 py-3 bg-background/95 backdrop-blur-md border-b border-border/60 mb-8">
            <div className="flex items-center gap-3">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre de archivo o ruta…"
                className="flex-1 px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
              />
              {anyFilterActive && (
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {visibleCount} {visibleCount === 1 ? 'resultado' : 'resultados'}
                </span>
              )}
            </div>
          </div>

          {children}
        </div>
      </div>

      {/* Toast de copiado */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-[70] px-4 py-2.5 rounded-lg bg-foreground text-background text-sm shadow-xl flex items-center gap-2">
          <Check size={16} />
          Ruta copiada
        </div>
      )}

      {/* Lightbox */}
      {lightboxPath && (
        <div
          onClick={() => setLightboxPath(null)}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxPath(null)
            }}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl max-h-full flex flex-col gap-5 cursor-auto"
          >
            <img
              src={lightboxPath}
              alt={lightboxFilename || ''}
              className="max-h-[80vh] object-contain rounded-md mx-auto"
            />
            <div className="text-center space-y-3">
              <p className="text-white/90 text-sm font-mono break-all">{lightboxPath}</p>
              <button
                data-copy={lightboxPath}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg hover:bg-white/90 transition text-sm font-medium"
              >
                <Copy size={16} /> Copiar ruta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function FilterGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-2 px-2">
        {title}
      </h3>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

function FilterRow({
  label,
  prefix,
  count,
  active,
  onClick,
}: {
  label: string
  prefix?: string
  count?: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'w-full flex items-center gap-1.5 px-2 py-1 rounded-md text-left transition-colors text-[12.5px] leading-tight',
        active
          ? 'bg-primary/10 text-primary font-medium'
          : 'text-foreground/80 hover:bg-muted/60 hover:text-foreground',
      ].join(' ')}
    >
      {prefix && (
        <span className="text-[9px] uppercase tracking-wide text-muted-foreground/80 shrink-0 font-medium">
          {prefix}
        </span>
      )}
      <span className="flex-1 truncate">{label}</span>
      {typeof count === 'number' && (
        <span className="text-[11px] text-muted-foreground tabular-nums shrink-0">
          {count}
        </span>
      )}
    </button>
  )
}

function getPrefix(name: string): string | undefined {
  if (name.startsWith('page:')) return 'P'
  if (name.startsWith('layout:')) return 'L'
  return undefined
}

function stripPrefix(name: string): string {
  return name.replace(/^(page:|layout:)\s*/, '')
}
