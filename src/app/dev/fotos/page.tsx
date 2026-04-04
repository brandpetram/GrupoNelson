'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import Image from 'next/image'
import inventory from '@/data/foto-inventory.json'

type FotoEntry = {
  path: string
  folder: string
  filename: string
  usedInCode: boolean
  usedIn: string[]
}

type FolderSummary = {
  folder: string
  count: number
  usedCount: number
  photos: FotoEntry[]
}

type Inventory = {
  generatedAt: string
  totalPhotos: number
  totalUsed: number
  totalUnused: number
  folders: FolderSummary[]
}

type CurationEntry = {
  status?: string
  sections?: string[]
}

type CurationData = Record<string, CurationEntry>

type FilterMode = 'all' | 'used' | 'unused' | 'approved' | 'rejected'

const SECTIONS = [
  { value: 'home', label: 'Home' },
  { value: 'nelson/diferencia', label: 'Diferencia Nelson' },
  { value: 'nelson/liderazgo', label: 'Liderazgo' },
  { value: 'nelson/historia', label: 'Nuestra Historia' },
  { value: 'nelson/trayectoria', label: 'Trayectoria' },
  { value: 'parques/nelson-i', label: 'Parque Nelson I' },
  { value: 'parques/nelson-ii', label: 'Parque Nelson II' },
  { value: 'parques/vigia-i', label: 'Parque Vigía I' },
  { value: 'parques/vigia-ii', label: 'Parque Vigía II' },
  { value: 'constructora/baumex', label: 'Baumex Constructora' },
  { value: 'constructora/portafolio', label: 'Portafolio Baumex' },
  { value: 'constructora/leed', label: 'Certificación LEED' },
  { value: 'constructora/llave-en-mano', label: 'Llave en Mano' },
  { value: 'constructora/build-to-suit', label: 'Build-to-Suit' },
  { value: 'constructora/ingenieria', label: 'Diseño e Ingeniería' },
  { value: 'constructora/estandares', label: 'Estándares Internacionales' },
  { value: 'constructora/proyectos-especializados', label: 'Proyectos Especializados' },
  { value: 'experiencia/casos-de-exito', label: 'Casos de Éxito' },
  { value: 'experiencia/certificaciones', label: 'Certificaciones' },
  { value: 'experiencia/excelencia-operativa', label: 'Excelencia Operativa' },
  { value: 'inventario/naves', label: 'Naves Disponibles' },
  { value: 'inventario/terrenos', label: 'Terrenos' },
  { value: 'blog', label: 'Blog' },
  { value: 'contacto', label: 'Contacto' },
] as const

const data = inventory as Inventory

export default function DevFotosPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [lightboxPhoto, setLightboxPhoto] = useState<FotoEntry | null>(null)
  const [filter, setFilter] = useState<FilterMode>('all')
  const [copied, setCopied] = useState(false)
  const [curation, setCuration] = useState<CurationData>({})
  const [showSections, setShowSections] = useState(false)

  // Cargar curación al montar
  useEffect(() => {
    fetch('/api/dev/fotos/curate')
      .then((r) => r.json())
      .then((d) => setCuration(d))
      .catch(() => {})
  }, [])

  const activeFolder = useMemo(() => {
    if (!selectedFolder) return null
    return data.folders.find((f) => f.folder === selectedFolder) ?? null
  }, [selectedFolder])

  const filteredPhotos = useMemo(() => {
    if (!activeFolder) return []
    return activeFolder.photos.filter((p) => {
      if (filter === 'all') return true
      if (filter === 'used') return p.usedInCode
      if (filter === 'unused') return !p.usedInCode
      if (filter === 'approved') return curation[p.path]?.status === 'approved'
      if (filter === 'rejected') return curation[p.path]?.status === 'rejected'
      return true
    })
  }, [activeFolder, filter, curation])

  const copyPath = useCallback((path: string) => {
    navigator.clipboard.writeText(path)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [])

  const curate = useCallback(
    async (path: string, status?: string, sections?: string[]) => {
      const body: Record<string, unknown> = { path }
      if (status !== undefined) body.status = status
      if (sections !== undefined) body.sections = sections

      await fetch('/api/dev/fotos/curate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      setCuration((prev) => {
        const next = { ...prev }
        const existing = next[path] || {}
        if (status !== undefined) existing.status = status
        if (sections !== undefined) existing.sections = sections
        next[path] = existing
        return next
      })
    },
    []
  )

  const discard = useCallback(
    async (photo: FotoEntry) => {
      const warning = photo.usedInCode
        ? `Esta foto está en uso en: ${photo.usedIn.join(', ')}. ¿Mover a cuarentena de todas formas?`
        : `¿Mover ${photo.filename} a _descartes/?`
      if (!confirm(warning)) return

      const res = await fetch('/api/dev/fotos/discard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: photo.path }),
      })

      if (res.ok) {
        // Recargar inventario (la page usa import estático, hay que recargar)
        window.location.reload()
      }
    },
    []
  )

  const toggleSection = useCallback(
    (photoPath: string, section: string) => {
      const current = curation[photoPath]?.sections || []
      const next = current.includes(section)
        ? current.filter((s) => s !== section)
        : [...current, section]
      curate(photoPath, undefined, next)
    },
    [curation, curate]
  )

  // Navegación con teclado en lightbox
  useEffect(() => {
    if (!lightboxPhoto || !filteredPhotos.length) return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightboxPhoto(null)
        setShowSections(false)
        return
      }

      const currentIndex = filteredPhotos.findIndex((p) => p.path === lightboxPhoto!.path)
      if (e.key === 'ArrowRight' && currentIndex < filteredPhotos.length - 1) {
        setLightboxPhoto(filteredPhotos[currentIndex + 1])
        setShowSections(false)
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setLightboxPhoto(filteredPhotos[currentIndex - 1])
        setShowSections(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxPhoto, filteredPhotos])

  // Stats de curación
  const curationStats = useMemo(() => {
    const entries = Object.values(curation)
    return {
      approved: entries.filter((e) => e.status === 'approved').length,
      rejected: entries.filter((e) => e.status === 'rejected').length,
      withSections: entries.filter((e) => e.sections && e.sections.length > 0).length,
    }
  }, [curation])

  function getPhotoStatus(path: string) {
    return curation[path]?.status
  }

  function getPhotoSections(path: string) {
    return curation[path]?.sections || []
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Inventario de fotos</h1>
            <p className="text-sm text-muted-foreground">
              {data.totalPhotos} imágenes · {data.totalUsed} en uso · {data.totalUnused} sin uso
              {curationStats.approved > 0 && (
                <span className="ml-2 text-green-600">· {curationStats.approved} aprobadas</span>
              )}
              {curationStats.rejected > 0 && (
                <span className="ml-2 text-red-500">· {curationStats.rejected} rechazadas</span>
              )}
              {curationStats.withSections > 0 && (
                <span className="ml-2 text-blue-500">· {curationStats.withSections} con sección</span>
              )}
              <span className="ml-3 text-xs opacity-50">
                Generado: {new Date(data.generatedAt).toLocaleDateString('es-MX')}
              </span>
            </p>
          </div>
          {selectedFolder && (
            <button
              onClick={() => { setSelectedFolder(null); setFilter('all') }}
              className="px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80"
            >
              ← Todas las carpetas
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Vista de carpetas */}
        {!selectedFolder && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.folders.map((folder) => {
              const folderApproved = folder.photos.filter(
                (p) => curation[p.path]?.status === 'approved'
              ).length
              return (
                <button
                  key={folder.folder}
                  onClick={() => setSelectedFolder(folder.folder)}
                  className="text-left p-4 rounded-lg border hover:border-foreground/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-medium truncate mr-2">
                      {folder.folder}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {folder.count} fotos
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600">
                      {folder.usedCount} en uso
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600">
                      {folder.count - folder.usedCount} sin uso
                    </span>
                    {folderApproved > 0 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600">
                        {folderApproved} ❤️
                      </span>
                    )}
                  </div>
                  {/* Preview */}
                  <div className="mt-3 aspect-video relative rounded overflow-hidden bg-muted">
                    <Image
                      src={folder.photos[0]?.path ?? ''}
                      alt={folder.folder}
                      fill
                      className="object-cover"
                      sizes="300px"
                      unoptimized
                    />
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {/* Vista de fotos dentro de una carpeta — layout de lista */}
        {selectedFolder && activeFolder && (
          <>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <h2 className="font-mono text-lg font-bold">{activeFolder.folder}</h2>
              <span className="text-sm text-muted-foreground">
                {filteredPhotos.length} de {activeFolder.count} fotos
              </span>
              <div className="flex gap-1 ml-auto flex-wrap">
                {(['all', 'used', 'unused', 'approved', 'rejected'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setFilter(mode)}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${
                      filter === mode
                        ? 'bg-foreground text-background'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {mode === 'all'
                      ? 'Todas'
                      : mode === 'used'
                        ? 'En uso'
                        : mode === 'unused'
                          ? 'Sin uso'
                          : mode === 'approved'
                            ? '❤️ Aprobadas'
                            : 'Rechazadas'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {filteredPhotos.map((photo) => {
                const status = getPhotoStatus(photo.path)
                const sections = getPhotoSections(photo.path)

                return (
                  <div
                    key={photo.path}
                    className={`flex gap-5 p-4 rounded-lg border transition-colors ${
                      status === 'approved'
                        ? 'border-green-500/50 bg-green-500/5'
                        : status === 'rejected'
                          ? 'border-red-400/50 bg-red-500/5 opacity-50'
                          : 'border-border hover:border-foreground/20'
                    }`}
                  >
                    {/* Thumbnail — click abre lightbox */}
                    <div
                      className="w-[480px] h-[300px] relative rounded-md overflow-hidden bg-muted flex-shrink-0 cursor-pointer"
                      onClick={() => setLightboxPhoto(photo)}
                    >
                      <Image
                        src={photo.path}
                        alt={photo.filename}
                        fill
                        className="object-cover"
                        sizes="480px"
                        unoptimized
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      {/* Fila 1: ruta + estado */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => copyPath(photo.path)}
                          className="font-mono text-sm bg-muted hover:bg-muted/80 px-2.5 py-1 rounded transition-colors truncate"
                          title="Copiar ruta"
                        >
                          {photo.path}
                        </button>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                            photo.usedInCode
                              ? 'bg-green-500/10 text-green-600'
                              : 'bg-orange-500/10 text-orange-600'
                          }`}
                        >
                          {photo.usedInCode ? 'En uso' : 'Sin uso'}
                        </span>
                      </div>

                      {/* Fila 2: dónde se usa */}
                      {photo.usedIn.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {photo.usedIn.map((location) => (
                            <span
                              key={location}
                              className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-600"
                            >
                              {location}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Fila 3: secciones asignadas */}
                      {sections.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {sections.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-600"
                            >
                              {SECTIONS.find((sec) => sec.value === s)?.label ?? s}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Fila 4: acciones */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            curate(photo.path, status === 'approved' ? 'pending' : 'approved')
                          }
                          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                            status === 'approved'
                              ? 'bg-green-500/20 text-green-700'
                              : 'bg-muted hover:bg-green-500/10 text-muted-foreground'
                          }`}
                        >
                          {status === 'approved' ? '❤️ Aprobada' : '🤍 Aprobar'}
                        </button>

                        <button
                          onClick={() =>
                            curate(photo.path, status === 'rejected' ? 'pending' : 'rejected')
                          }
                          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                            status === 'rejected'
                              ? 'bg-red-500/20 text-red-700'
                              : 'bg-muted hover:bg-red-500/10 text-muted-foreground'
                          }`}
                        >
                          {status === 'rejected' ? '✕ Rechazada' : '✕ Rechazar'}
                        </button>

                        <button
                          onClick={() => {
                            setLightboxPhoto(photo)
                            setShowSections(true)
                          }}
                          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                            sections.length > 0
                              ? 'bg-purple-500/20 text-purple-700'
                              : 'bg-muted hover:bg-purple-500/10 text-muted-foreground'
                          }`}
                        >
                          Secciones ({sections.length})
                        </button>

                        <button
                          onClick={() => discard(photo)}
                          className="px-3 py-1.5 text-sm rounded-md bg-muted hover:bg-red-500/10 text-muted-foreground transition-colors ml-auto"
                        >
                          🗑 Descartar
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => { setLightboxPhoto(null); setShowSections(false) }}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen */}
            <div className="relative w-[85vw] h-[65vh]">
              <Image
                src={lightboxPhoto.path}
                alt={lightboxPhoto.filename}
                fill
                className="object-contain"
                sizes="85vw"
                unoptimized
                priority
              />
            </div>

            {/* Info bar */}
            <div className="mt-3 flex flex-col items-center gap-2 text-white/80 text-sm max-w-[85vw]">
              {/* Ruta + estado + acciones */}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <button
                  onClick={() => copyPath(lightboxPhoto.path)}
                  className="font-mono text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
                >
                  {copied ? '✓ Copiado' : lightboxPhoto.path}
                </button>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    lightboxPhoto.usedInCode
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-orange-500/20 text-orange-400'
                  }`}
                >
                  {lightboxPhoto.usedInCode ? 'En uso' : 'Sin uso'}
                </span>

                {/* Acciones */}
                <button
                  onClick={() =>
                    curate(
                      lightboxPhoto.path,
                      getPhotoStatus(lightboxPhoto.path) === 'approved' ? 'pending' : 'approved'
                    )
                  }
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    getPhotoStatus(lightboxPhoto.path) === 'approved'
                      ? 'bg-green-500/30 text-green-300'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {getPhotoStatus(lightboxPhoto.path) === 'approved' ? '❤️ Aprobada' : '🤍 Aprobar'}
                </button>

                <button
                  onClick={() => setShowSections(!showSections)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    getPhotoSections(lightboxPhoto.path).length > 0
                      ? 'bg-blue-500/30 text-blue-300'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Secciones ({getPhotoSections(lightboxPhoto.path).length})
                </button>
              </div>

              {/* Dónde se usa en código */}
              {lightboxPhoto.usedIn.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {lightboxPhoto.usedIn.map((location) => (
                    <span
                      key={location}
                      className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              )}

              {/* Panel de secciones */}
              {showSections && (
                <div className="bg-white/10 rounded-lg p-3 max-h-[30vh] overflow-y-auto w-full max-w-xl">
                  <p className="text-xs text-white/50 mb-2">Asignar a secciones:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {SECTIONS.map((section) => {
                      const isSelected = getPhotoSections(lightboxPhoto.path).includes(
                        section.value
                      )
                      return (
                        <button
                          key={section.value}
                          onClick={() => toggleSection(lightboxPhoto.path, section.value)}
                          className={`text-left text-xs px-2.5 py-1.5 rounded transition-colors ${
                            isSelected
                              ? 'bg-blue-500/40 text-blue-200'
                              : 'bg-white/5 hover:bg-white/10 text-white/60'
                          }`}
                        >
                          {isSelected ? '✓ ' : ''}{section.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Cerrar */}
            <button
              onClick={() => { setLightboxPhoto(null); setShowSections(false) }}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg"
            >
              ×
            </button>

            {/* Navegación */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              {filteredPhotos.findIndex((p) => p.path === lightboxPhoto.path) > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const idx = filteredPhotos.findIndex((p) => p.path === lightboxPhoto.path)
                    setLightboxPhoto(filteredPhotos[idx - 1])
                    setShowSections(false)
                  }}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
                >
                  ‹
                </button>
              )}
              <div />
              {filteredPhotos.findIndex((p) => p.path === lightboxPhoto.path) <
                filteredPhotos.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const idx = filteredPhotos.findIndex((p) => p.path === lightboxPhoto.path)
                    setLightboxPhoto(filteredPhotos[idx + 1])
                    setShowSections(false)
                  }}
                  className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
                >
                  ›
                </button>
              )}
            </div>

            {/* Keyboard hint */}
            <p className="mt-2 text-white/30 text-xs">
              ← → navegar · Esc cerrar · clic en ruta para copiar
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
