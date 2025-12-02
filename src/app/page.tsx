import { KeynoteHero, RadiantHeader } from '@brandpetram/componentes-2026/templates'
import { StatsSection1 } from '@brandpetram/componentes-2026/pro-blocks'
import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'
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
      </HeroVideoCover>

      {/* Sección: Screencasts */}
      <section id="screencasts" className="min-h-screen py-20">
        <RadiantHeader />
        <KeynoteHero />
      </section>

      {/* Sección: Stats */}
      <section id="stats" className="min-h-screen py-20">
        <StatsSection1 />
      </section>
    </div>
  );
}
