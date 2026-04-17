'use client'

import { useEffect, useState } from 'react'
import { X, Copy, Check } from 'lucide-react'

/**
 * Client component que maneja buscador + lightbox + copiar ruta.
 *
 * No recibe el array completo de fotos (362 KB) para mantener el payload JS bajo.
 * Toda la info que necesita la extrae de data-attributes en el DOM:
 *   - [data-photo-filename], [data-photo-path]: filtro del buscador
 *   - [data-photo-open]: abrir lightbox
 *   - [data-copy]: copiar ruta al portapapeles
 *   - [data-section]: ocultar secciones sin resultados
 */
export function GalleryClient() {
  const [query, setQuery] = useState('')
  const [lightboxPath, setLightboxPath] = useState<string | null>(null)
  const [lightboxFilename, setLightboxFilename] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Filtro visual: oculta tarjetas cuyo filename/path no coincide.
  useEffect(() => {
    const q = query.toLowerCase().trim()
    const cards = document.querySelectorAll<HTMLElement>('[data-photo-filename]')
    cards.forEach((card) => {
      const fn = (card.dataset.photoFilename || '').toLowerCase()
      const path = (card.dataset.photoPath || '').toLowerCase()
      card.hidden = q.length > 0 && !fn.includes(q) && !path.includes(q)
    })

    const sections = document.querySelectorAll<HTMLElement>('[data-section]')
    sections.forEach((section) => {
      const anyVisible = Array.from(
        section.querySelectorAll<HTMLElement>('[data-photo-filename]'),
      ).some((c) => !c.hidden)
      section.hidden = !anyVisible
    })
  }, [query])

  // Delegación de clicks: copiar ruta o abrir lightbox.
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
        } catch {
          // clipboard denied; no-op
        }
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

  return (
    <>
      <div className="sticky top-0 z-10 -mx-4 px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border/60 mb-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre de archivo o ruta…"
            className="flex-1 px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-1.5"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-6 right-6 z-30 px-4 py-2.5 rounded-lg bg-foreground text-background text-sm shadow-xl flex items-center gap-2">
          <Check size={16} />
          Ruta copiada
        </div>
      )}

      {lightboxPath && (
        <div
          onClick={() => setLightboxPath(null)}
          className="fixed inset-0 z-40 bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
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
