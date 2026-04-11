import Header from '@/components/Header'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginalBeta } from '@/components/tarjeta-hero-original-beta'
import { Beta } from '@/components/brandpetram/beta'
import { Gamma } from '@/components/brandpetram/gamma'
import { Delta } from '@/components/brandpetram/delta'
import { Epsilon } from '@/components/brandpetram/epsilon'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/build-to-suit',
  title: 'Build-to-Suit Construction',
  description: 'Build-to-suit industrial buildings in Mexicali designed and constructed to your exact specifications. Grupo Nelson delivers from raw land to fully operational facilities within its industrial parks.',
})

export default function BuildToSuitPage() {
  return (
    <div className="[&_header:not([data-scrolled])_path[fill='currentColor']]:!fill-white">
      <Header variant="dark" lang="en" />

      <div className="mt-0">
        <HeroVideoCover
          videoSrc="/video-2-720p.mp4"
          posterSrc="/hero-poster-0.jpg"
          alt="Build to Suit | Grupo Nelson"
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
            badge1="Build-to-Suit"
            badge2="Custom-built facilities"
            titulo="Build the facility that doesn't exist in any catalog"
            descripcion="Designed from scratch for your exact operation. 52,200 m² for Gulfstream. 95-meter bridge for Skyworks. 3,000 HP wind tunnel for Honeywell."
          />
        </HeroVideoCover>
      </div>

      {/* Title + description (no logos) */}
      <div className="container mx-auto 1200:px-4 py-16">
        <div className="ml-10 1200:ml-40 1920:ml-60 mb-12">
          <h2 className="text-4xl 360:text-5xl 393:text-5xl 768:text-7xl 1200:text-[3rem] 1280:text-[3.3rem] 1366:text-[3.5rem] 1440:text-[3.5rem] 1536:text-[5.3rem] 1728:text-[6rem] 1920:text-[5rem] font-medium text-foreground leading-none tracking-tighter text-balance w-10/12">
            World-Class Clients trust <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-black">Grupo Nelson:</span>
          </h2>
        </div>
      </div>

      {/* Beta component */}
      <div className="container mx-auto px-4 py-0 mt-56 mb-56">
        <Beta />
      </div>

      {/* Gamma component */}
      <div className="container mx-auto px-4 py-16 mb-56">
        <Gamma />
      </div>

      {/* Delta component */}
      <div className="container mx-auto">
        <Delta />
      </div>

      {/* Epsilon component */}
      <div className="container mx-auto ">
        <Epsilon />
      </div>

    </div>
  )
}
