'use client'

/**
 * EditorialCascadaBeta
 * Evolución de EditorialCascadaBP.
 * Cambio: CTA reemplazado por grid de stats + botones (tomados de FeatureSection8BP).
 */

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const images = [
  '/fotos-dron/NELSON II/nave-dhl-en-parque-nelson-2-1.JPG',
  '/fotos-dron/CONSTRUCTORA BAUMEX/HONEYWELL/nave-industrial-honeywell-1.JPG',
  '/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg',
  '/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg',
]

function ImageCarousel({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`aspect-square rounded-xs overflow-hidden relative group ${className}`}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 40vw"
          priority={index === 0}
        />
      ))}

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xs bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xs bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

interface EditorialCascadaBetaProps {
  /** Título principal */
  titulo?: string
  /** Párrafo descriptivo */
  parrafo?: string
  /** Stats grid — array de { titulo, descripcion } */
  stats?: Array<{ titulo: string; descripcion: string }>
  /** Texto destacado debajo de stats */
  destacado?: string
  /** Texto del botón primario */
  ctaPrimarioTexto?: string
  /** href del botón primario */
  ctaPrimarioHref?: string
  /** Texto del botón secundario */
  ctaSecundarioTexto?: string
  /** href del botón secundario */
  ctaSecundarioHref?: string
  /** Idioma */
  lang?: 'en' | 'es'
}

export function EditorialCascadaBeta({
  titulo,
  parrafo,
  stats,
  destacado,
  ctaPrimarioTexto,
  ctaPrimarioHref,
  ctaSecundarioTexto,
  ctaSecundarioHref,
  lang = 'es',
}: EditorialCascadaBetaProps) {
  const defaults = lang === 'en' ? {
    titulo: 'The Nelson Difference: pioneers of border manufacturing since 1965, direct operation by the founding family and in-house construction firm.',
    parrafo: 'Grupo Nelson established the first maquiladora in Mexicali in 1965. Four generations later, the founding family still operates every park, every contract and every construction project. Very few industrial developers in this city combine 60 years of permanence, operationally involved owners and an in-house construction firm with 28 years of experience. That translates to less risk, less friction and more speed for your project.',
    stats: [
      { titulo: 'Pioneers since 1965', descripcion: 'Established the first maquiladora in Mexicali' },
      { titulo: 'Owners operating', descripcion: 'They negotiate, decide and respond personally' },
      { titulo: 'In-house construction', descripcion: 'Baumex: 28 years and 75 projects with own team' },
    ],
    destacado: 'Long-term relationships — most clients expand or start new projects decade after decade.',
    ctaPrimarioTexto: 'Request a consultation',
    ctaPrimarioHref: '/contact',
    ctaSecundarioTexto: 'Learn about our track record',
    ctaSecundarioHref: '/about/track-record',
  } : {
    titulo: 'La Diferencia Nelson: pioneros de la manufactura fronteriza desde 1965, operación directa por la familia fundadora y constructora propia.',
    parrafo: 'Grupo Nelson instaló la primera maquiladora de Mexicali en 1965. Cuatro generaciones después, la familia fundadora sigue operando cada parque, cada contrato y cada proyecto de construcción. Muy pocos desarrolladores industriales en esta ciudad combinan 60 años de permanencia, dueños involucrados operativamente y constructora propia con 28 años de experiencia. Eso se traduce en menos riesgo, menos fricción y más velocidad para tu proyecto.',
    stats: [
      { titulo: 'Pioneros desde 1965', descripcion: 'Instalaron la primera maquiladora de Mexicali' },
      { titulo: 'Dueños operando', descripcion: 'Negocian, deciden y responden personalmente' },
      { titulo: 'Constructora propia', descripcion: 'Baumex: 28 años y 75 proyectos con equipo propio' },
    ],
    destacado: 'Relaciones de largo plazo — la mayoría de los clientes expande o inicia nuevos proyectos década tras década.',
    ctaPrimarioTexto: 'Solicita una consulta',
    ctaPrimarioHref: '/contacto',
    ctaSecundarioTexto: 'Conoce nuestra trayectoria',
    ctaSecundarioHref: '/nelson/trayectoria',
  }

  const t = defaults
  const _titulo = titulo ?? t.titulo
  const _parrafo = parrafo ?? t.parrafo
  const _stats = stats ?? t.stats
  const _destacado = destacado ?? t.destacado
  const _ctaPrimarioTexto = ctaPrimarioTexto ?? t.ctaPrimarioTexto
  const _ctaPrimarioHref = ctaPrimarioHref ?? t.ctaPrimarioHref
  const _ctaSecundarioTexto = ctaSecundarioTexto ?? t.ctaSecundarioTexto
  const _ctaSecundarioHref = ctaSecundarioHref ?? t.ctaSecundarioHref
  return (
    <section data-component="EditorialCascadaBeta" data-component-file="src/components/brandpetram/editorial-cascada-beta.tsx" data-component-props="false" className="relative w-10/12 mx-auto pt-10 sm:pt-14 pb-16 sm:pb-24">
      {/* Dot pattern — top right */}
      <svg
        aria-hidden="true"
        className="absolute top-0 right-0 w-32 768:w-40 1200:w-48 1536:w-56 h-48 768:h-64 1200:h-80 1536:h-96 pointer-events-none z-0"
      >
        <defs>
          <linearGradient id="editorial-beta-dots" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <pattern
            id="editorial-beta-dot-pattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="url(#editorial-beta-dots)" />
          </pattern>
        </defs>
        <rect fill="url(#editorial-beta-dot-pattern)" width="100%" height="100%" />
      </svg>

      {/* Título — ancho completo, z-10 para estar sobre los dots */}
      <h2 className="relative z-10 w-9/12 768:w-full text-[2rem] 393:text-[2.25rem] 430:text-[2.5rem] 768:text-[3rem] 834:text-[3.5rem] 1024:text-[4rem] 1200:text-[3rem] 1366:text-[3.5rem] 1536:text-[4rem] 1728:text-[4.5rem] 1920:text-[5rem] font-extrabold tracking-tighter leading-none text-foreground text-balance">
        {_titulo}
      </h2>

      {/* Párrafo + Stats (izquierda) | Carrusel (derecha) */}
      <div className="mt-8 768:mt-12 1200:mt-16 flex flex-col 1200:flex-row gap-10 1200:gap-16">
        <div className="1200:w-[55%]">
          <p className="text-[1rem] 768:text-[1.25rem] 834:text-[1.375rem] 1024:text-[1.5rem] 1200:text-[1.375rem] 1366:text-[1.5rem] 1536:text-[1.625rem] 1728:text-[1.75rem] 1920:text-[1.875rem] font-normal tracking-wider leading-relaxed text-muted-foreground">
            {_parrafo}
          </p>

          {/* Carrusel — mobile y tablet (debajo del párrafo) */}
          <ImageCarousel className="1200:hidden mt-8 768:mt-10" />

          {/* Stats grid — reemplaza el CTA del original */}
          <div className="mt-12 768:mt-16 border-t border-border pt-10 768:pt-12">
            <div className="grid grid-cols-2 gap-[1.5rem] 768:gap-[2rem] 1200:gap-[2rem] 1920:gap-[2.5rem]">
              {_stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-[0.375rem]">
                  <h3 className="text-[0.9375rem] 430:text-[1rem] 768:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1366:text-[1.25rem] 1536:text-[1.375rem] 1728:text-[1.5rem] 1920:text-[1.5rem] text-foreground font-bold leading-tight tracking-tight">
                    {stat.titulo}
                  </h3>
                  <p className="text-[0.75rem] 430:text-[0.8125rem] 768:text-[0.875rem] 1024:text-[1rem] 1200:text-[1rem] 1366:text-[1.0625rem] 1536:text-[1.125rem] 1728:text-[1.125rem] 1920:text-[1.125rem] text-muted-foreground tracking-wide leading-relaxed">
                    {stat.descripcion}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 768:mt-8 text-[0.8125rem] 768:text-[0.875rem] 1024:text-[0.9375rem] 1200:text-[1rem] 1536:text-[1.0625rem] 1728:text-[1.0625rem] 1920:text-[1.125rem] text-muted-foreground tracking-wide leading-relaxed">
              {_destacado}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={_ctaPrimarioHref}
                className="inline-flex items-center justify-center rounded-xs bg-blue-600 px-6 py-3 text-[0.875rem] 1200:text-[0.9375rem] 1536:text-[1rem] font-semibold text-white shadow hover:bg-blue-700 transition-colors"
              >
                {_ctaPrimarioTexto}
              </Link>
              <Link
                href={_ctaSecundarioHref}
                className="inline-flex items-center justify-center gap-2 rounded-xs px-6 py-3 text-[0.875rem] 1200:text-[0.9375rem] 1536:text-[1rem] font-semibold text-foreground hover:bg-accent transition-colors"
              >
                {_ctaSecundarioTexto}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Carrusel — desktop (columna derecha) */}
        <ImageCarousel className="hidden 1200:block 1200:w-[45%]" />
      </div>
    </section>
  )
}
