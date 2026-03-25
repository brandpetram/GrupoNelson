import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'
import { AlphaBP } from '@/components/brandpetram/alpha-bp'
import { Beta } from '@/components/brandpetram/beta'
import { Gamma } from '@/components/brandpetram/gamma'
import { Delta } from '@/components/brandpetram/delta'
import { Epsilon } from '@/components/brandpetram/epsilon'

export const metadata: Metadata = {
  title: 'Built to Suit | Grupo Nelson',
}

export default function BuiltToSuitPage() {
  return (
    <div className="[&_header:not([data-scrolled])_path[fill='currentColor']]:!fill-white">
      <Header />

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
          <TarjetaHeroOriginal
            badge1="Build-to-Suit"
            badge2="Construcción a la medida"
            titulo="Construye la nave que no existe en ningún catálogo"
            descripcion="Diseñada desde cero para tu operación exacta. 52,200 m² para Gulfstream. 95 metros de puente para Skyworks. Túnel de viento de 3,000 HP para Honeywell."
          />
        </HeroVideoCover>
      </div>

      {/* Componente AlphaBP */}
      <div className="container mx-auto 1200:px-4 py-16">
        <AlphaBP descripcion="Build-to-suit no es personalizar una nave estándar. Es diseñar y construir una instalación que no existía — desde los cálculos de mecánica de suelos hasta el último acabado interior — exactamente como tu operación la necesita." />
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
