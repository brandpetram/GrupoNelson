import Header from '@/components/Header'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginalBeta } from '@/components/tarjeta-hero-original-beta'
import { Beta } from '@/components/brandpetram/beta'
import { Gamma } from '@/components/brandpetram/gamma'
import { Delta } from '@/components/brandpetram/delta'
import { Epsilon } from '@/components/brandpetram/epsilon'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/build-to-suit',
  title: 'Construcción Built-to-Suit',
  description: 'Naves industriales built-to-suit en Mexicali diseñadas y construidas a la medida. Grupo Nelson entrega desde terreno hasta nave operando en sus parques industriales.',
})

export default function BuiltToSuitPage() {
  return (
    <div className="overflow-x-hidden [&_header:not([data-scrolled])_path[fill='currentColor']]:!fill-white">
      <Header variant="dark" />

      <div className="mt-0">
        <HeroVideoCover
          videoSrc="/video-2-720p.mp4"
          posterSrc="/hero-poster-0.jpg"
          alt="Built to Suit | Grupo Nelson"
          overlayOpacity={0.30}
          videoBrightness={0.8}
          videoContrast={1.3}
          videoFilterDesktop="brightness(.7) saturate(1) contrast(1)"
          videoFilterMobile="brightness(1.05) saturate(1.10) contrast(1.02)"
          videoOverlayDesktop="rgba(100, 150, 250, 0.25)"
          videoOverlayMobile="rgba(30, 80, 255, 0.20)"
          videoOverlayBlendMode="multiply"
          darkOverlay={0.4}
          darkOverlayMobile={0.3}
          enableAnimations={true}
          gridConfig={{
            strokeColor: 'stroke-white/20',
            gridSize: 150,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
          }}
          gridConfigMobile={{
            strokeColor: 'stroke-white/20',
            gridSize: 80,
            showHighlights: true,
            highlightColor: 'fill-blue-500/30',
            fadeRadius: '20rem',
          }}
        >
          <TarjetaHeroOriginalBeta
            badge="Construcción a la medida"
            titulo="Construye la nave que no existe en ningún catálogo"
            descripcion="Diseñada desde cero para tu operación exacta. 52,200 m² para Gulfstream. 95 metros de puente para Skyworks. Túnel de viento de 3,000 HP para Honeywell."
          />
        </HeroVideoCover>
      </div>

      {/* Título + descripción (sin logos) */}
      <div className="container mx-auto 1200:px-4 py-16">
        <div className="ml-10 1200:ml-40 1920:ml-60 mb-12">
          <h2 className="text-4xl 360:text-5xl 393:text-5xl 768:text-7xl 1200:text-[3rem] 1280:text-[3.3rem] 1366:text-[3.5rem] 1440:text-[3.5rem] 1536:text-[5.3rem] 1728:text-[6rem] 1920:text-[5rem] font-medium text-foreground leading-none tracking-tighter text-balance w-10/12">
            Clientes de Clase Mundial confían en <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-black">Grupo Nelson:</span>
          </h2>
        </div>
      </div>

      {/* Componente Beta */}
      <div className="container mx-auto px-4 py-0 mt-56 mb-56">
        <Beta />
      </div>

      {/* Componente Gamma */}
      <div className="container mx-auto px-4 py-16 mb-56">
        <Gamma />
      </div>

      {/* Componente Delta */}
      <div className="container mx-auto">
        <Delta />
      </div>

      {/* Componente Epsilon */}
      <div className="container mx-auto ">
        <Epsilon />
      </div>

    </div>
  )
}
