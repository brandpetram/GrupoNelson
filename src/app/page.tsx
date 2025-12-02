import { NavBar, PrimerHero, KeynoteHero, RadiantHeader } from '@brandpetram/componentes-2026/templates'
import { GridBackground, GradientBlob } from '@brandpetram/componentes-2026/ui'
import { WithImageTiles } from '@brandpetram/componentes-2026/tailwind'
import { Features11 } from '@brandpetram/componentes-2026/tailark'
import { PricingSection1, StatsSection1 } from '@brandpetram/componentes-2026/pro-blocks'
import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'

export default function Home() {
  return (
    <div>
      {/* NavBar con scroll spy */}
      <NavBar />

      {/* Hero con video de parque industrial - Side by side comparison */}
      <HeroVideoCover
        videoSrc="/parques-industriales-mexicali-nelson-2.mp4"
        posterSrc="/hero-poster-0.jpg"
        alt="Parque Industrial Gulfstream - Vista aérea de instalaciones modernas"
        overlayOpacity={0.30}
      >
        <div className="flex gap-8 items-start">
          {/* Tarjeta Original (hardcoded) */}
          <TarjetaHeroOriginal />

          {/* Nueva Tarjeta con micro-componentes */}
          <TarjetaHero1
            titulo="Los Expertos en Parques Industriales en Mexicali"
            subtitulo="60 años creando soluciones llave en mano para empresas globales en parques y espacios industriales en Mexicali"
            badges={[
              { texto: 'Built to Suit', tipo: 'pill', variante: 'blur' },
              { texto: 'Sustainable Design', tipo: 'link', conFlecha: true }
            ]}
            botones={[
              { texto: 'Conocer más', variante: 'default' },
              { texto: 'Contactar', variante: 'ghost', conFlecha: true }
            ]}
          />
        </div>
      </HeroVideoCover>

      <WithImageTiles />

      {/* Sección 1: Table of Contents */}
      <section id="table-of-contents" className="min-h-screen py-20">
        <PrimerHero />
      </section>

      {/* Sección 2: Screencasts */}
      <section id="screencasts" className="min-h-screen py-20">
        <RadiantHeader />
        <KeynoteHero />
      </section>

      {/* Sección 3: Resources */}
      <section id="resources" className="relative min-h-screen py-20">
        <div className="relative z-10">
          <Features11 />
        </div>
      </section>

      {/* Sección 4: Pricing */}
      <section id="pricing" className="min-h-screen py-20">
        <PricingSection1 />
      </section>

      {/* Sección 5: Author */}
      <section id="author" className="min-h-screen py-20">
        <StatsSection1 />
      </section>
    </div>
  );
}
