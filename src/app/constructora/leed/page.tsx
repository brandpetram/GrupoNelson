import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'

export const metadata: Metadata = {
  title: 'Certificación LEED | Grupo Nelson',
  description: 'Naves industriales con certificación LEED en Mexicali, Baja California. 7 pilares de sustentabilidad: clima extremo, proceso, BMS, agua, calidad interior, materiales y energía.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed' },
}

const temas = [
  {
    slug: 'clima-extremo',
    titulo: 'Experiencia en Clima Extremo',
    subtitulo: 'Diseño calibrado para +45°C y radiación solar extrema en Mexicali.',
    imagen: '/leed/leed1-mexicali-nave-industrial-clima-extremo-1.png',
  },
  {
    slug: 'proceso-certificacion',
    titulo: 'Proceso & Certificación LEED',
    subtitulo: 'Del predesign al certificado GBCI sin improvisar documentación.',
    imagen: '/leed/leed2-mexicali-nave-industrial-certificacion-bdc-1.png',
  },
  {
    slug: 'sistemas-operativos',
    titulo: 'Sistemas Operativos Inteligentes',
    subtitulo: 'BMS con submedición independiente de energía y agua en tiempo real.',
    imagen: '/leed/leed3-mexicali-nave-industrial-sistemas-bms-1.png',
  },
  {
    slug: 'sitios-sostenibles',
    titulo: 'Sitios Sostenibles & Agua',
    subtitulo: 'Techos reflectivos SRI >78 y reducción del 40% en consumo de agua.',
    imagen: '/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.png',
  },
  {
    slug: 'calidad-ambiental',
    titulo: 'Calidad Ambiental Interior',
    subtitulo: 'Materiales de bajo COV y ventilación ASHRAE 62.1 para clima desértico.',
    imagen: '/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.png',
  },
  {
    slug: 'materiales-recursos',
    titulo: 'Materiales & Recursos',
    subtitulo: 'EPD verificada, contenido reciclado documentado y desvío >50% a vertedero.',
    imagen: '/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.png',
  },
  {
    slug: 'energia-atmosfera',
    titulo: 'Energía & Atmósfera',
    subtitulo: 'Modelado energético y fotovoltaicos en cubierta. Ahorro del 35-50%.',
    imagen: '/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.png',
  },
]

export default function LeedHubPage() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-800"
        >
          <defs>
            <pattern id="leed-hub-grid" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-900/20">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#leed-hub-grid)" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Encabezado */}
      <div className="max-w-2xl mb-16">
        <p className="text-base/7 font-semibold text-emerald-600">Constructora · Grupo Nelson</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
          Certificación LEED
        </h1>
        <p className="mt-6 text-xl/8 text-muted-foreground">
          Construimos naves industriales certificadas LEED en Mexicali, Baja California — una de las zonas climáticas más demandantes de Norteamérica. Explora los 7 pilares de nuestra metodología.
        </p>
        <div className="mt-8">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Cotiza tu nave LEED
          </Link>
        </div>
      </div>

      {/* Grid de temas */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {temas.map((tema) => (
          <Link
            key={tema.slug}
            href={`/constructora/leed/${tema.slug}`}
            className="group block rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={tema.imagen}
                alt={tema.titulo}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white font-extrabold tracking-tighter text-lg leading-tight">
                  {tema.titulo}
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground leading-snug">{tema.subtitulo}</p>
              <p className="mt-3 text-sm font-semibold text-emerald-600 group-hover:underline">
                Leer más →
              </p>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <div className="mt-8">
        <CarruselLeed />
      </div>
    </div>
  )
}
