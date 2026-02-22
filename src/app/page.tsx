'use client'

// TODO: Migrar estos componentes desde componentes-brandpetram
// import { KeynoteHero, RadiantHeader } from '@brandpetram/componentes-2026/templates'
// import { StatsSection1 } from '@brandpetram/componentes-2026/pro-blocks'
// import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'
import { HeroVideoCover } from '@/components/hero-video-cover'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'
import { HexagonFeatures } from '@/components/hexagon-features'
import { Header as RadiantHeader } from '@/components/from-tailwind-templates/radiant-ts-header/header'
import { DiagonalDivider } from '@/components/diagonal-divider'
import { BadgeAniversario } from '@/components/badge-aniversario'
import Header from '@/components/Header'
import { motion } from 'motion/react'
import {Mosaico2ConProps} from "@/components/brandpetram/con-props/mosaico-2-con-props";
import {MosaicoInvertidoConProps} from "@/components/brandpetram/con-props/mosaico-invertido-con-props";
import TickerOverflow from '@/components/motion-plus/ticker-overflow';
import LogoCloud from '@/components/motion-plus/logo-cloud';
import { AlphaBP } from '@/components/brandpetram/alpha-bp';
import { ScrollStorytelling } from '@/components/brandpetram/scroll-storytelling';

export default function Home() {
  return (
    <div>
      {/* Header con navegación principal */}
      <Header variant="dark" />

      {/* Contenedor para hero + diagonal */}
      <div className="relative">
        {/* Hero con video de parque industrial */}
        <HeroVideoCover
          videoSrc="/parques-industriales-mexicali-nelson-3-optimizado.mp4"
          posterSrc="/hero-poster-0.jpg"
          alt="Parque Industrial Gulfstream - Vista aérea de instalaciones modernas"
          overlayOpacity={0.30}
          videoBrightness={0.8}
          videoContrast={1.3}
          videoFilterDesktop="brightness(1.10) saturate(1.15) contrast(1.05)"
          videoFilterMobile="brightness(1.05) saturate(1.10) contrast(1.02)"
          videoOverlayDesktop="rgba(100, 150, 250, 0.25)"
          videoOverlayMobile="rgba(30, 80, 255, 0.20)"
          videoOverlayBlendMode="multiply"
          darkOverlay={0.5}
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
          <TarjetaHeroOriginal />
        </HeroVideoCover>

        {/* Badge de aniversario - Posicionado en el hero */}
        <motion.div
          className="hidden md:block md:absolute 360:text-[1.1rem] 393:text-[1.15rem] 430:text-[1.2rem] 768:text-[1.35rem] 834:text-[1.45rem] 1024:text-[1.6rem] 1200:text-[1.75rem] 1280:text-[1.85rem] 1366:text-[1.95rem] 1440:text-[2.1rem] 1536:text-[2.3rem] 1728:text-[2.55rem] 1920:text-[2.8rem] bottom-10 right-5 -rotate-10"
          style={{ zIndex: 10 }}
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -10 }}
          transition={{
            duration: 0.6,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <BadgeAniversario className="w-[180px] h-[180px] 768:w-[280px] 768:h-[280px] 1024:w-[350px] 1024:h-[350px]" />
        </motion.div>

        {/* Divider diagonal - Posicionado al final del hero, fuera para evitar animación */}
        <div className="absolute bottom-0 size-0 left-0 right-0 z-20">
          <DiagonalDivider fillColor="white" height={150} slope={100} invertDirection={true} />
        </div>
      </div>

      {/* Logo Cloud (mobile/tablet) */}
      <LogoCloud />



      {/* Componente Alpha - Fase 3: Brandpetramizado (CON 13 BREAKPOINTS) */}
      <div className="container mx-auto 1200:px-4 py-16">
        <AlphaBP />
      </div>

      {/* Sección sobre nosotros con números animados */}
      <RadiantHeader />

      {/* CON PROPS (propeado) */}
      <div className={'w-full p-10 mx-auto mt-32 relative'}>
              <Mosaico2ConProps
                  bloque1Titulo="Soluciones Industriales"
                  bloque1Descripcion="Infraestructura de calidad con soluciones a medida"
                  bloque1LinkTexto="Explorar"
                  bloque1LinkHref="#"
                  bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg"
                  bloque2ImagenAlt="Lorem ipsum"
                  bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg"
                  bloque3ImagenAlt="Lorem ipsum"
                  bloque4Titulo="¿Necesitas información?"
                  bloque4Descripcion="Contáctanos para conocer nuestras soluciones"
                  bloque4LinkTexto="Contactar"
                  bloque4LinkHref="#"
                  imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg"
                  imagenDerechaAlt="Lorem ipsum"
              />

              {/* VERSIÓN INVERTIDA (propeado) */}
              <div className="-mt-1">
                  <MosaicoInvertidoConProps
                      bloque1Titulo="Soluciones Industriales"
                      bloque1Descripcion="Infraestructura de calidad con soluciones a medida"
                      bloque1LinkTexto="Explorar"
                      bloque1LinkHref="#"
                      bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg"
                      bloque2ImagenAlt="Lorem ipsum"
                      bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                      bloque3ImagenAlt="Lorem ipsum"
                      bloque4Titulo="¿Necesitas información?"
                      bloque4Descripcion="Contáctanos para conocer nuestras soluciones"
                      bloque4LinkTexto="Contactar"
                      bloque4LinkHref="#"
                      imagenIzquierdaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
                      imagenIzquierdaAlt="Lorem ipsum"
                  />
              </div>
          </div>

      {/* Sección de características en hexágonos */}
        <div className={'mt-20'}><HexagonFeatures/></div>

      {/* ScrollStorytelling - Storytelling interactivo con scroll */}
      <div className={'1200:mt-80 relative'}>
        <ScrollStorytelling mediaAspectRatio="aspect-[16/9]" />
      </div>

      {/* TODO: Migrar KeynoteHero */}
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
