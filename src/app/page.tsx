// TODO: Migrar estos componentes desde componentes-brandpetram
// import { KeynoteHero, RadiantHeader } from '@brandpetram/componentes-2026/templates'
// import { StatsSection1 } from '@brandpetram/componentes-2026/pro-blocks'
// import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      {/* Header con navegación principal */}
      <Header />

      {/* Hero con video de parque industrial */}
      <HeroVideoCover
        videoSrc="/parques-industriales-mexicali-nelson-2.mp4"
        posterSrc="/hero-poster-0.jpg"
        alt="Parque Industrial Gulfstream - Vista aérea de instalaciones modernas"
        overlayOpacity={0.30}
        videoBrightness={0.8}
        videoContrast={1.3}
        darkOverlay={0.2}
        gridConfig={{
          strokeColor: 'stroke-white/30',
          gridSize: 100,
          showHighlights: true,
          highlightColor: 'fill-blue-500/40',
          animate: {
            initial: { scaleY: 0 },
            animate: { scaleY: 1 },
            transition: { duration: 1.2, ease: 'easeOut' },
          },
        }}
      >
        <TarjetaHeroOriginal />
      </HeroVideoCover>

      {/* TODO: Migrar RadiantHeader y KeynoteHero */}
      {/* <section id="screencasts" className="min-h-screen py-20">
        <RadiantHeader />
        <KeynoteHero />
      </section> */}

      {/* TODO: Migrar StatsSection1 */}
      {/* <section id="stats" className="min-h-screen py-20">
        <StatsSection1 />
      </section> */}
    </div>
  );
}
