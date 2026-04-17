import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import inventoryData from '@/data/foto-inventory.json'
import { GalleryClient } from './gallery-client'

// NOTA DE FRONTERA (no negociable):
// Esta ruta es READ-ONLY para siempre. Solo lista, busca, muestra uso y copia rutas.
// Si se necesita aprobar, rechazar, mover o borrar fotos, hacerlo en otra ruta
// bajo /dev (con guard notFound en producción) o /admin (con auth real).
// Ver docs/planes/plan-para-mejorar-el-visor-de-imagenes-en-admin.md.

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

const inventory = inventoryData as Inventory

function extractNumericSuffix(filename: string): number {
  const match = filename.match(/-(\d+)\.(jpg|jpeg|png|webp|gif|svg)$/i)
  return match ? parseInt(match[1], 10) : NaN
}

// Construye las secciones narrativas + el resto de carpetas.
function buildSections() {
  const allPhotos = inventory.folders.flatMap((f) => f.photos)

  const mainSeriesPhotos = allPhotos
    .filter((p) => p.folder === 'parques-industriales-mexicali')
    .sort((a, b) => extractNumericSuffix(a.filename) - extractNumericSuffix(b.filename))

  const reales = mainSeriesPhotos.filter((p) => {
    const n = extractNumericSuffix(p.filename)
    return !isNaN(n) && n <= 250
  })

  const profesionales = mainSeriesPhotos.filter((p) => {
    const n = extractNumericSuffix(p.filename)
    return !isNaN(n) && n > 250
  })

  // Specs de parques — las 3 carpetas con fotos extraídas de PDFs técnicos.
  const parqueSpecsFolders = inventory.folders.filter(
    (f) => f.folder.startsWith('parque-industrial-') && f.folder.endsWith('-mexicali'),
  )
  const specsFlat = parqueSpecsFolders.flatMap((f) => f.photos)

  // Resto: las carpetas que no caen en ninguna narrativa.
  const narrativeFolderNames = new Set<string>([
    'parques-industriales-mexicali',
    ...parqueSpecsFolders.map((f) => f.folder),
  ])
  const restFolders = inventory.folders
    .filter((f) => !narrativeFolderNames.has(f.folder))
    .sort((a, b) => {
      // "(raíz)" al final; el resto alfabético.
      if (a.folder === '(raíz)') return 1
      if (b.folder === '(raíz)') return -1
      return a.folder.localeCompare(b.folder)
    })

  return { reales, profesionales, specs: specsFlat, restFolders }
}

const { reales, profesionales, specs, restFolders } = buildSections()

export default function FotografiasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al admin
          </Link>

          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Fotografías
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Inventario de todas las imágenes en <code className="text-xs px-1.5 py-0.5 rounded bg-muted font-mono">public/</code>, con información de qué páginas y componentes las usan.
            </p>
            <div className="flex flex-wrap gap-5 mt-5 text-sm">
              <span>
                <strong className="text-foreground">{inventory.totalPhotos}</strong>{' '}
                <span className="text-muted-foreground">fotos</span>
              </span>
              <span>
                <strong className="text-foreground">{inventory.totalUsed}</strong>{' '}
                <span className="text-muted-foreground">en uso</span>
              </span>
              <span>
                <strong className="text-foreground">{inventory.totalUnused}</strong>{' '}
                <span className="text-muted-foreground">sin uso</span>
              </span>
              <span>
                <strong className="text-foreground">{inventory.folders.length}</strong>{' '}
                <span className="text-muted-foreground">carpetas</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Generado: {new Date(inventory.generatedAt).toLocaleString('es-MX')}
            </p>
          </header>

          <GalleryClient />

          {/* Secciones narrativas (con anchors compatibles con deep links existentes) */}
          <Section
            id="reales"
            title="Fotos reales (1-250)"
            description="Extraídas de 86 videos proporcionados por el cliente. Se generó 1 captura por segundo resultando en ~1,600 imágenes; estas 250 fueron seleccionadas manualmente."
            photos={reales}
          />

          <Section
            id="profesionales"
            title={`Fotos profesionales (251-${extractNumericSuffix(profesionales[profesionales.length - 1]?.filename ?? '') || '…'})`}
            description="Stock profesional adquirido para la comunicación comercial. Mantienen similitud con las operaciones reales con calidad fotográfica superior."
            photos={profesionales}
          />

          <Section
            id="parques"
            title="Specs de parques industriales"
            description="Imágenes extraídas de los PDFs técnicos de cada parque. Algunas procesadas con Upscayl para mejorar resolución."
            photos={specs}
          />

          {/* Resto de carpetas (agrupadas por folder) */}
          {restFolders.map((folder) => (
            <Section
              key={folder.folder}
              title={folder.folder}
              description=""
              photos={folder.photos}
              count={folder.count}
              usedCount={folder.usedCount}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Section({
  id,
  title,
  description,
  photos,
  count,
  usedCount,
}: {
  id?: string
  title: string
  description: string
  photos: FotoEntry[]
  count?: number
  usedCount?: number
}) {
  if (photos.length === 0) return null

  const total = count ?? photos.length
  const used = usedCount ?? photos.filter((p) => p.usedInCode).length

  return (
    <section
      id={id}
      data-section={id ?? title}
      className="mt-16 scroll-mt-24 first:mt-12"
    >
      <header className="mb-6 flex items-baseline justify-between gap-6 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl">{description}</p>
          )}
        </div>
        <div className="text-sm text-muted-foreground shrink-0 whitespace-nowrap">
          {total} {total === 1 ? 'foto' : 'fotos'}
          {used > 0 && <> · <span className="text-foreground">{used}</span> en uso</>}
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.path} photo={photo} />
        ))}
      </div>
    </section>
  )
}

function PhotoCard({ photo }: { photo: FotoEntry }) {
  const pages = photo.usedIn.filter((u) => u.startsWith('page:') || u.startsWith('layout:'))
  const firstPage = pages[0]
  const extraCount = Math.max(0, pages.length - 1)

  return (
    <article
      data-photo-filename={photo.filename}
      data-photo-path={photo.path}
      className="group flex flex-col"
    >
      <button
        data-photo-open={photo.path}
        aria-label={`Abrir ${photo.filename}`}
        className="relative aspect-square rounded-md overflow-hidden bg-muted border border-border/60 hover:border-border transition-colors cursor-zoom-in"
      >
        <img
          src={photo.path}
          alt={photo.filename}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {photo.usedInCode && (
          <span className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/95 text-white text-[10px] font-medium shadow-sm">
            <CheckCircle2 size={11} />
            en uso
          </span>
        )}
      </button>

      <div className="mt-2.5 space-y-1.5">
        <p className="text-[11px] font-mono text-muted-foreground break-all leading-tight">
          {photo.path}
        </p>

        {firstPage && (
          <p className="text-[11px] text-foreground/80 truncate" title={pages.join('\n')}>
            {firstPage}
            {extraCount > 0 && (
              <span className="text-muted-foreground"> +{extraCount}</span>
            )}
          </p>
        )}

        <button
          data-copy={photo.path}
          className="text-[11px] text-muted-foreground hover:text-foreground font-mono underline underline-offset-2 decoration-muted-foreground/30 hover:decoration-foreground/70 transition-colors"
        >
          copiar ruta
        </button>
      </div>
    </article>
  )
}
