import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
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

type SectionEntry = { name: string; count: number }

const inventory = inventoryData as Inventory

function extractNumericSuffix(filename: string): number {
  const match = filename.match(/-(\d+)\.(jpg|jpeg|png|webp|gif|svg)$/i)
  return match ? parseInt(match[1], 10) : NaN
}

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

  const parqueSpecsFolders = inventory.folders.filter(
    (f) => f.folder.startsWith('parque-industrial-') && f.folder.endsWith('-mexicali'),
  )
  const specsFlat = parqueSpecsFolders.flatMap((f) => f.photos)

  const narrativeFolderNames = new Set<string>([
    'parques-industriales-mexicali',
    ...parqueSpecsFolders.map((f) => f.folder),
  ])
  const restFolders = inventory.folders
    .filter((f) => !narrativeFolderNames.has(f.folder))
    .sort((a, b) => {
      if (a.folder === '(raíz)') return 1
      if (b.folder === '(raíz)') return -1
      return a.folder.localeCompare(b.folder)
    })

  return { reales, profesionales, specs: specsFlat, restFolders }
}

// Rutas internas del sitio (no públicas). Coincide con los prefijos protegidos
// por el proxy en src/proxy.ts — si ese archivo cambia, mantener en sync.
const INTERNAL_ROUTE_SEGMENTS = new Set([
  'componentes',
  'componentes-dos',
  'componentes-tres',
  'componentes-cuatro',
  'product',
  'productos',
  'proyecto',
  'admin',
  'qa',
  'dev',
])

const INTERNAL_LAYOUT_PREFIXES = ['(dev)', '(admin)']

function isPublicSection(name: string): boolean {
  const route = name.replace(/^(page:|layout:)\s*/, '')
  if (name.startsWith('layout:')) {
    return !INTERNAL_LAYOUT_PREFIXES.some((p) => route.startsWith(p))
  }
  const firstSegment = route.split('/')[0]
  return !INTERNAL_ROUTE_SEGMENTS.has(firstSegment)
}

// Calcula páginas/layouts únicos con su conteo de fotos.
function buildSiteSections(): SectionEntry[] {
  const counts = new Map<string, number>()
  for (const folder of inventory.folders) {
    for (const photo of folder.photos) {
      for (const used of photo.usedIn) {
        if (used.startsWith('page:') || used.startsWith('layout:')) {
          counts.set(used, (counts.get(used) || 0) + 1)
        }
      }
    }
  }
  return Array.from(counts.entries())
    .filter(([name]) => isPublicSection(name))
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      // page: home primero, luego layouts, luego páginas alfabético
      if (a.name === 'page: home') return -1
      if (b.name === 'page: home') return 1
      const aIsLayout = a.name.startsWith('layout:')
      const bIsLayout = b.name.startsWith('layout:')
      if (aIsLayout && !bIsLayout) return 1
      if (!aIsLayout && bIsLayout) return -1
      return a.name.localeCompare(b.name)
    })
}

const { reales, profesionales, specs, restFolders } = buildSections()
const siteSections = buildSiteSections()

export default function FotografiasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-8 pb-20 px-4">
        <div className="max-w-[90rem] mx-auto">
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al admin
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Fotografías
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Inventario de todas las imágenes en{' '}
              <code className="text-xs px-1.5 py-0.5 rounded bg-muted font-mono">public/</code>
              , con información de qué páginas y componentes las usan.
            </p>
            <div className="flex flex-wrap gap-5 mt-4 text-sm">
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
            <p className="mt-3 text-xs text-muted-foreground">
              Generado: {new Date(inventory.generatedAt).toLocaleString('es-MX')}
            </p>
          </header>

          <GalleryClient sections={siteSections}>
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
          </GalleryClient>
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
      className="mt-14 scroll-mt-24 first:mt-0"
    >
      <header className="mb-5 flex items-baseline justify-between gap-6 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl">{description}</p>
          )}
        </div>
        <div className="text-sm text-muted-foreground shrink-0 whitespace-nowrap">
          {total} {total === 1 ? 'foto' : 'fotos'}
          {used > 0 && (
            <>
              {' '}
              · <span className="text-foreground">{used}</span> en uso
            </>
          )}
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
      data-photo-used={photo.usedInCode ? '1' : '0'}
      data-photo-pages={pages.join('|')}
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
          <p
            className="text-[11px] text-foreground/80 truncate"
            title={pages.join('\n')}
          >
            {firstPage}
            {extraCount > 0 && <span className="text-muted-foreground"> +{extraCount}</span>}
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
