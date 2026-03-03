import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'

export interface LeedFeature {
  icon?: React.ReactNode
  title: string
  description: string
}

export interface LeedPageLayoutProps {
  /** Etiqueta pequeña sobre el título (ej. "Certificación LEED") */
  eyebrow?: string
  /** Título principal de la página */
  titulo: string
  /** Párrafo introductorio */
  intro: string
  /** Imagen sticky (lado derecho en desktop) */
  imageSrc: string
  imageAlt: string
  /** Párrafos de contenido principal */
  parrafos: string[]
  /** Lista de features/puntos clave */
  features?: LeedFeature[]
  /** Subtítulo de sección secundaria */
  subtituloSeccion?: string
  /** Párrafo de cierre */
  parrafoCierre?: string
  /** Fuentes bibliográficas */
  fuentes?: string
  /** Clases adicionales para el wrapper */
  className?: string
}

export function LeedPageLayout({
  eyebrow = 'Certificación LEED · Grupo Nelson',
  titulo,
  intro,
  imageSrc,
  imageAlt,
  parrafos,
  features,
  subtituloSeccion,
  parrafoCierre,
  fuentes,
  className,
}: LeedPageLayoutProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0', className)}>
      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="leed-grid-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#leed-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

        {/* Encabezado — col 1, row 1 */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/constructora/leed" className="hover:text-foreground transition-colors">
                  Certificación LEED
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{titulo}</span>
              </nav>

              <p className="text-base/7 font-semibold text-emerald-600 dark:text-emerald-400">
                {eyebrow}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tighter text-pretty text-foreground sm:text-5xl">
                {titulo}
              </h1>
              <p className="mt-6 text-xl/8 text-muted-foreground">
                {intro}
              </p>
            </div>
          </div>
        </div>

        {/* Imagen sticky — col 2, rows 1-2 */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/10 dark:ring-white/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Badge LEED */}
            <div className="absolute bottom-4 left-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
              LEED Certified
            </div>
          </div>
        </div>

        {/* Contenido principal — col 1, row 2 */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-muted-foreground lg:max-w-lg space-y-6">
              {parrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {features && features.length > 0 && (
                <ul role="list" className="mt-8 space-y-8 text-muted-foreground">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-x-3">
                      {f.icon && (
                        <span className="mt-1 size-5 flex-none text-emerald-600 dark:text-emerald-400">
                          {f.icon}
                        </span>
                      )}
                      <span>
                        <strong className="font-semibold text-foreground">{f.title}.</strong>{' '}
                        {f.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {subtituloSeccion && (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-foreground">
                  {subtituloSeccion}
                </h2>
              )}

              {parrafoCierre && (
                <p className="mt-6">{parrafoCierre}</p>
              )}

              {fuentes && (
                <div className="mt-12 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    <strong className="font-semibold text-muted-foreground">Fuentes: </strong>
                    {fuentes}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  Cotiza tu nave LEED
                </Link>
                <Link
                  href="/constructora/leed"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  ← Ver todos los temas LEED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carrusel de todos los temas LEED */}
      <div className="mt-8">
        <CarruselLeed />
      </div>
    </div>
  )
}
