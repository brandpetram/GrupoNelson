'use client'

/**
 * DevOverlay — Overlay global que muestra nombres de componentes.
 *
 * Escanea elementos con data-component y data-component-file.
 * - Clic en el nombre → abre el componente en Zed
 * - Botón 📋 → copia el nombre del componente
 * - Botón "Page" → abre el page.tsx de la ruta actual en Zed
 *
 * Solo en development. Toggle: Ctrl+Shift+D o botón flotante.
 */

import { useEffect, useState, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'

const PROJECT_ROOT = '/Users/lmuzquiz/Proyectos/GrupoNelson'

interface LabelInfo {
  name: string
  file: string
  hasProps: boolean
  top: number
  left: number
}

function scan(): LabelInfo[] {
  const labels: LabelInfo[] = []
  const elements = document.querySelectorAll('[data-component]')

  for (const el of elements) {
    const name = el.getAttribute('data-component')
    const file = el.getAttribute('data-component-file') || ''
    const hasProps = el.getAttribute('data-component-props') === 'true'
    if (!name) continue

    const rect = el.getBoundingClientRect()
    if (rect.width === 0 && rect.height === 0) continue

    labels.push({
      name,
      file,
      hasProps,
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    })
  }

  return labels
}

function openInZed(relPath: string) {
  if (!relPath) return
  const absPath = `${PROJECT_ROOT}/${relPath}`
  window.open(`zed://file${absPath}`, '_blank')
}

function copyName(name: string) {
  navigator.clipboard.writeText(name)
}

export function DevOverlay() {
  const [labels, setLabels] = useState<LabelInfo[]>([])
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState<string | null>(null)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const pagePath = pathname === '/' ? 'src/app/page.tsx' : `src/app${pathname}/page.tsx`

  const refresh = useCallback(() => {
    if (!visible) return
    setLabels(scan())
  }, [visible])

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    if (!visible) return

    const timer = setTimeout(refresh, 500)

    // Debounce scroll — solo re-escanea 300ms después de dejar de scrollear
    function onScroll() {
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(refresh, 300)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', refresh, { passive: true })

    return () => {
      clearTimeout(timer)
      if (scrollTimer.current) clearTimeout(scrollTimer.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', refresh)
    }
  }, [visible, refresh])

  // Re-escanear cuando cambia la ruta
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(refresh, 800)
    return () => clearTimeout(timer)
  }, [pathname, visible, refresh])


  // Atajo: Ctrl+Shift+D
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    function handleKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        setVisible(v => !v)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  if (process.env.NODE_ENV !== 'development') return null

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="fixed bottom-4 right-4 z-[99999] rounded bg-fuchsia-600 px-2 py-1 font-mono text-[11px] text-white opacity-40 hover:opacity-100 cursor-pointer shadow-md transition-opacity"
        title="Mostrar etiquetas (Ctrl+Shift+D)"
      >
        DEV
      </button>
    )
  }

  return (
    <>
      {labels.map((label, i) => (
        <span
          key={`${label.name}-${i}`}
          style={{
            position: 'absolute',
            top: label.top + 4,
            left: label.left + 4,
          }}
          className={`z-[99999] flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[11px] text-white opacity-60 hover:opacity-100 shadow-md transition-opacity select-none ${label.hasProps ? 'bg-emerald-600' : 'bg-fuchsia-600'}`}
        >
          <span
            onClick={() => openInZed(label.file)}
            className="cursor-pointer hover:underline"
            title={`${label.file} — abrir en Zed`}
          >
            {label.name}
          </span>
          <span
            onClick={() => {
              copyName(label.name)
              setCopied(label.name)
              setTimeout(() => setCopied(null), 1200)
            }}
            className="cursor-pointer opacity-70 hover:opacity-100 ml-0.5"
            title="Copiar nombre"
          >
            {copied === label.name ? '✓' : '⧉'}
          </span>
        </span>
      ))}

      {/* Barra inferior */}
      <div className="fixed bottom-4 right-4 z-[99999] flex items-center gap-2">
        <button
          onClick={() => openInZed(pagePath)}
          className="rounded bg-sky-600 px-2 py-1 font-mono text-[11px] text-white opacity-60 hover:opacity-100 cursor-pointer shadow-md transition-opacity"
          title={pagePath ? `Abrir ${pagePath} en Zed` : 'Abrir page en Zed'}
        >
          Page ↗
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(pagePath)
            setCopied('__page__')
            setTimeout(() => setCopied(null), 1200)
          }}
          className="rounded bg-sky-600 px-2 py-1 font-mono text-[11px] text-white opacity-60 hover:opacity-100 cursor-pointer shadow-md transition-opacity"
          title="Copiar ruta del page"
        >
          {copied === '__page__' ? '✓' : '⧉'}
        </button>
        <button
          onClick={() => setVisible(false)}
          className="rounded bg-fuchsia-600 px-2 py-1 font-mono text-[11px] text-white opacity-40 hover:opacity-100 cursor-pointer shadow-md transition-opacity"
          title="Ocultar etiquetas (Ctrl+Shift+D)"
        >
          Ocultar
        </button>
      </div>
    </>
  )
}
