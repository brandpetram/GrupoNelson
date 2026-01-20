// TODO: Migrar estos componentes desde componentes-brandpetram
// import { KeynoteHero, RadiantHeader } from '@brandpetram/componentes-2026/templates'
// import { StatsSection1 } from '@brandpetram/componentes-2026/pro-blocks'
// import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'
import { HeroVideoCover } from '@/components/hero-video-cover'
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
      >
        <div className="max-w-md bg-blue-600/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            Los Expertos en Parques Industriales en Mexicali
          </h1>
          <p className="text-white/90 text-lg">
            60 años creando soluciones llave en mano para empresas globales en parques y espacios industriales en Mexicali
          </p>
        </div>
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
