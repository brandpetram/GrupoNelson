'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

const editorialCascadaDefaults = {
  es: {
    titulo: 'De la primera maquiladora de Mexicali a la nave más grande de la ciudad.',
    parrafo: 'En 1965, Rodolfo Nelson Sr. instaló la primera maquiladora de Mexicali. No existían parques industriales — existía una visión. Cuatro generaciones después, esa visión se convirtió en cinco parques, cuatro millones de pies cuadrados desarrollados y la confianza de treinta corporaciones internacionales que eligieron Mexicali porque Grupo Nelson ya había construido la infraestructura que necesitaban.',
    ctaTitulo: '¿Buscas Parques Industriales en Mexicali?',
    ctaSubtitulo: 'Sesenta años de experiencia respaldan cada proyecto.',
    ctaPrimarioTexto: 'Contáctenos',
    ctaPrimarioHref: '/contacto',
    ctaSecundarioTexto: 'Conozca Grupo Nelson',
    ctaSecundarioHref: '/nelson/diferencia-nelson',
  },
  en: {
    titulo: 'From the first maquiladora in Mexicali to the city\'s largest industrial building.',
    parrafo: 'In 1965, Rodolfo Nelson Sr. established the first maquiladora in Mexicali. There were no industrial parks — there was a vision. Four generations later, that vision became five parks, four million square feet developed, and the trust of thirty international corporations that chose Mexicali because Grupo Nelson had already built the infrastructure they needed.',
    ctaTitulo: 'Looking for Industrial Parks in Mexicali?',
    ctaSubtitulo: 'Sixty years of experience back every project.',
    ctaPrimarioTexto: 'Contact Us',
    ctaPrimarioHref: '/contact',
    ctaSecundarioTexto: 'About Grupo Nelson',
    ctaSecundarioHref: '/about/difference',
  },
}

interface EditorialCascadaBPProps {
  /** Idioma */
  lang?: 'en' | 'es'
  /** Título principal */
  titulo?: string
  /** Párrafo descriptivo */
  parrafo?: string
  /** Título del CTA */
  ctaTitulo?: string
  /** Subtítulo del CTA */
  ctaSubtitulo?: string
  /** Texto del botón primario */
  ctaPrimarioTexto?: string
  /** href del botón primario */
  ctaPrimarioHref?: string
  /** Texto del botón secundario */
  ctaSecundarioTexto?: string
  /** href del botón secundario */
  ctaSecundarioHref?: string
  /** Imágenes del carrusel */
  carouselImages?: string[]
}

export function EditorialCascadaBP({
  lang = 'es',
  titulo,
  parrafo,
  ctaTitulo,
  ctaSubtitulo,
  ctaPrimarioTexto,
  ctaPrimarioHref,
  ctaSecundarioTexto,
  ctaSecundarioHref,
  carouselImages,
}: EditorialCascadaBPProps) {
  const d = editorialCascadaDefaults[lang]
  const _titulo = titulo ?? d.titulo
  const _parrafo = parrafo ?? d.parrafo
  const _ctaTitulo = ctaTitulo ?? d.ctaTitulo
  const _ctaSubtitulo = ctaSubtitulo ?? d.ctaSubtitulo
  const _ctaPrimarioTexto = ctaPrimarioTexto ?? d.ctaPrimarioTexto
  const _ctaPrimarioHref = ctaPrimarioHref ?? d.ctaPrimarioHref
  const _ctaSecundarioTexto = ctaSecundarioTexto ?? d.ctaSecundarioTexto
  const _ctaSecundarioHref = ctaSecundarioHref ?? d.ctaSecundarioHref
  return (
    <section data-component="EditorialCascadaBP" data-component-file="src/components/brandpetram/editorial-cascada-bp.tsx" data-component-props="false" className="w-10/12 mx-auto pt-10 sm:pt-14 pb-16 sm:pb-24">
      {/* Título — ancho completo */}
      <h2 className="w-9/12 768:w-full text-[2rem] 393:text-[2.25rem] 430:text-[2.5rem] 768:text-[3rem] 834:text-[3.5rem] 1024:text-[4rem] 1200:text-[3rem] 1366:text-[3.5rem] 1536:text-[4rem] 1728:text-[4.5rem] 1920:text-[5rem] font-extrabold tracking-tighter leading-none text-foreground text-balance">
        {_titulo}
      </h2>

      {/* Párrafo + CTA (izquierda) | Carrusel (derecha) */}
      <div className="mt-8 768:mt-12 1200:mt-16 flex flex-col 1200:flex-row gap-10 1200:gap-16">
        <div className="1200:w-[55%]">
          <p className="text-[1rem] 768:text-[1.25rem] 834:text-[1.375rem] 1024:text-[1.5rem] 1200:text-[1.375rem] 1366:text-[1.5rem] 1536:text-[1.625rem] 1728:text-[1.75rem] 1920:text-[1.875rem] font-normal tracking-wider leading-relaxed text-muted-foreground">
            {_parrafo}
          </p>

          {/* Carrusel — mobile y tablet (debajo del párrafo) */}
          <ImageCarousel className="1200:hidden mt-8 768:mt-10" />

          {/* CTA — debajo del párrafo (y del carrusel en mobile) */}
          <div className="mt-12 768:mt-16 border-t border-border pt-10 768:pt-12">
            <p className="max-w-lg 1200:max-w-2xl text-[2rem] 393:text-[2.25rem] 430:text-[2.5rem] 768:text-[2.5rem] 1024:text-[2.75rem] 1200:text-[3rem] 1366:text-[3.25rem] 1536:text-[3.5rem] 1920:text-[4rem] font-bold tracking-tighter leading-none text-foreground text-balance">
              {_ctaTitulo}
            </p>
            <p className="mt-3 text-[1rem] 768:text-[1.125rem] 1200:text-[1.25rem] text-muted-foreground">
              {_ctaSubtitulo}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={_ctaPrimarioHref}
                className="px-8 py-4 rounded-xs bg-blue-600 text-white font-medium text-center transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-md border-[0.5px] border-white/25 shadow-black/20"
              >
                {_ctaPrimarioTexto}
              </a>
              <a
                href={_ctaSecundarioHref}
                className="px-8 py-4 rounded-xs border border-border text-foreground font-medium text-center transition-all duration-200 hover:bg-muted hover:ring-1 hover:ring-foreground/20 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-black/15"
              >
                {_ctaSecundarioTexto}
              </a>
            </div>
          </div>
        </div>

        {/* Carrusel — desktop (columna derecha) */}
        <ImageCarousel className="hidden 1200:block 1200:w-[45%]" />
      </div>
    </section>
  )
}
