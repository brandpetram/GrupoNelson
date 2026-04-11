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
import Image from 'next/image'
import {Mosaico2ConProps} from "@/components/brandpetram/con-props/mosaico-2-con-props";
import {MosaicoInvertidoConProps} from "@/components/brandpetram/con-props/mosaico-invertido-con-props";
import TickerOverflow from '@/components/motion-plus/ticker-overflow';
import LogoCloud from '@/components/motion-plus/logo-cloud';
import { AlphaBP } from '@/components/brandpetram/alpha-bp';
import { ScrollStorytelling } from '@/components/brandpetram/scroll-storytelling';
import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia';
import { CirculosConProps } from '@/components/brandpetram/con-props/circulos-con-props';
import { FaqSectionsThreeColumnsBPConProps } from '@/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props';
import { CincoCardsConProps } from '@/components/brandpetram/con-props/cinco-cards-con-props';
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp';

export default function HomeClient() {
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
          alt="Parque Industrial Nelson II en Mexicali — Vista aérea de naves industriales"
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
          <TarjetaHeroOriginal
            badge1="4 Parques Industriales"
            badge2="33 Corporaciones Internacionales"
            titulo={<>Parques Industriales y Naves <span className="whitespace-nowrap">Built‑to‑Suit</span> en Todo Mexicali</>}
            descripcion="60 años desarrollando infraestructura industrial en la frontera con California. Gulfstream, Honeywell, General Dynamics y DHL ya operan aquí."
          />
        </HeroVideoCover>

        {/* Cuadritos de lluvia decorativos - Lado derecho del hero */}
        <div className="absolute top-full right-40 md:right-60 lg:right-80 z-10 pointer-events-none">
          <CuadritosLluvia />
        </div>

        {/* Badge de aniversario - Posicionado en el hero */}
        <motion.div
          className="absolute translate-y-10 md:translate-y-0 left-5 md:left-auto md:bottom-10 md:right-5 -rotate-10"
          style={{ zIndex: 10, opacity: 0 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
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
        <div className={'1200:hidden'}><LogoCloud/></div>



      {/* Componente Alpha - Resumen de identidad y oferta */}
      <div className="container mx-auto 1200:px-4 py-16 overflow-hidden">
        <AlphaBP
          descripcion="La familia que instaló la primera maquiladora de Mexicali en 1965 sigue operando personalmente. 4 parques, 33 corporaciones internacionales y relaciones de largo plazo que se miden en décadas."
        />
      </div>

      {/* Sección sobre nosotros con números animados */}
      <RadiantHeader />

      {/* Dos caminos: renta + build-to-suit */}
      <div className={'w-full p-10 mx-auto mt-32 relative'}>
              <Mosaico2ConProps
                  bloque1Titulo="Naves Disponibles"
                  bloque1Descripcion="4 parques en Mexicali con naves listas para operar — desde El Vigía hasta Nelson II"
                  bloque1LinkTexto="Ver parques"
                  bloque1LinkHref="/parques-industriales-mexicali"
                  bloque2ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-12.jpeg"
                  bloque2ImagenAlt="Nave industrial disponible en parque industrial de Mexicali"
                  bloque3ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
                  bloque3ImagenAlt="Interior de nave industrial en Mexicali"
                  bloque4Titulo="¿Buscas espacio industrial?"
                  bloque4Descripcion="Consulta disponibilidad en nuestros 4 parques"
                  bloque4LinkTexto="Contactar"
                  bloque4LinkHref="/contacto"
                  imagenDerechaSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg"
                  imagenDerechaAlt="Parque Industrial Nelson II en Mexicali"
              />

              {/* Build-to-suit con Baumex */}
              <div className="-mt-1">
                  <MosaicoInvertidoConProps
                      bloque1Titulo="Construcción a tu Medida"
                      bloque1Descripcion="Baumex, nuestra constructora in-house: 30 años, 75+ proyectos. Diseño, permisos y construcción bajo un solo contrato — sin intermediarios"
                      bloque1LinkTexto="Conocer Baumex"
                      bloque1LinkHref="/constructora/baumex"
                      bloque2ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg"
                      bloque2ImagenAlt="Construcción build-to-suit de nave industrial en Mexicali"
                      bloque3ImagenSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                      bloque3ImagenAlt="Construcción de nave industrial a medida por Baumex"
                      bloque4Titulo="¿Necesitas algo a medida?"
                      bloque4Descripcion="De 5,000 a 550,000 ft² bajo un solo contrato"
                      bloque4LinkTexto="Solicitar proyecto"
                      bloque4LinkHref="/contacto"
                      imagenIzquierdaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
                      imagenIzquierdaAlt="Nave industrial build-to-suit construida por Baumex en Mexicali"
                  />
              </div>
          </div>



      {/* ScrollStorytelling - Storytelling interactivo con scroll */}
      <div className={'1200:mt-80 relative'}>
        <ScrollStorytelling mediaAspectRatio="aspect-[16/9]" />
      </div>

      {/* Imagen grande — Parque Industrial Nelson II */}
      <div className="relative h-full mt-32 aspect-square lg:aspect-auto lg:h-[70vh]">
        <Image
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
          alt="Parque Industrial Nelson II en Mexicali — 27 hectáreas de infraestructura industrial"
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Círculos — 3 pilares comprimidos */}
      <div className="px-4 md:ml-10 1200:ml-32 mt-32 md:px-0">
        <CirculosConProps
          circulo1Letra="60"
          circulo1Titulo="Años"
          circulo1Descripcion="La familia que instaló la primera maquiladora de Mexicali en 1965 sigue operando personalmente. Nearshoring antes de que existiera la palabra. Tres generaciones después, los dueños atienden tu proyecto — no un gerente que rota cada dos años."
          circulo2Letra="33"
          circulo2Titulo="Corporaciones"
          circulo2Descripcion="Gulfstream lleva más de 35 años. Honeywell más de 3 décadas. General Dynamics, DHL, Baxter e Intuitive ya eligieron operar aquí. Relaciones de largo plazo que se miden en décadas."
          circulo3Letra="75"
          circulo3Titulo="Proyectos"
          circulo3Descripcion="Baumex, nuestra constructora in-house, lleva 30 años y 75+ proyectos. Un solo contrato de diseño a entrega. Construimos bajo estándares ISN, LEED, FM Global e IBC — con más de un millón de horas hombre sin accidentes fatales."
        />
      </div>

      {/* FAQs */}
      <div className="mt-32">
        <FaqSectionsThreeColumnsBPConProps
          titulo="Preguntas Frecuentes"
          descripcion="¿Tienes alguna pregunta adicional? Contáctanos directamente por"
          linkTexto="correo electrónico"
          linkHref="mailto:contacto@nelson.com.mx"
          faqs={[
            {
              id: 1,
              question: "¿Qué tipos de naves industriales ofrecen?",
              answer: "Naves en renta y construcción build-to-suit en nuestros 4 parques industriales de Mexicali. Desde espacios renovados en El Vigía hasta naves de clase mundial en Nelson II, con alturas libres de hasta 28 ft y cumplimiento de códigos IBC.",
            },
            {
              id: 2,
              question: "¿Dónde están sus parques industriales?",
              answer: "Operamos 4 parques en Mexicali, B.C., en la frontera con California: El Vigía I, El Vigía II, Nelson I y Nelson II. Nelson II es el más moderno: 27 hectáreas con subestación eléctrica dedicada y sistema contraincendio centralizado con tanque de 360,000 galones bajo estándares NFPA y FM.",
            },
            {
              id: 3,
              question: "¿Ofrecen construcción build-to-suit?",
              answer: "Sí. Baumex, nuestra constructora in-house con 30 años y más de 75 proyectos completados, diseña y construye naves a la medida exacta de sus requerimientos bajo un solo contrato — sin intermediarios. Hemos construido desde 5,000 ft² hasta 550,000 ft².",
            },
            {
              id: 4,
              question: "¿Qué empresas operan en sus parques?",
              answer: "33 corporaciones internacionales, incluyendo Gulfstream (más de 35 años), Honeywell (más de 3 décadas), General Dynamics, DHL, Baxter, Vertiv, Intuitive y Celestica, entre otras. Relaciones de largo plazo que se miden en décadas, no en contratos.",
            },
            {
              id: 5,
              question: "¿Qué certificaciones y estándares cumplen?",
              answer: "Construimos bajo International Building Code (IBC), con capacidad demostrada en certificación LEED, FM Global, sistemas antisísmicos BRB y estándares NFPA. Baumex tiene calificación ISN 'Recomendado' por Honeywell.",
            },
            {
              id: 6,
              question: "¿Cuánto tiempo lleva Grupo Nelson en la industria?",
              answer: "Más de 60 años. Fundamos la industria maquiladora de Mexicali en 1965. Tres generaciones después, la familia fundadora sigue operando personalmente — los dueños atienden cada proyecto directamente.",
            },
          ]}
        />
      </div>

      {/* Cinco Cards */}
      <div className="mt-32">
        <CincoCardsConProps
          card1Titulo={<>Parque Industrial<br/>Nelson II</>}
          card1BotonTexto="Ver especificaciones"
          card1BotonHref="/parques-industriales-mexicali/nelson-ii"
          card1VideoSrc="/parques-industriales-mexicali-nelson-3-optimizado.mp4"
          card1VideoPoster="/hero-poster-0.jpg"

          card2Titulo={<>Parque Industrial<br/>Nelson I</>}
          card2BotonTexto="Ver más"
          card2BotonHref="/parques-industriales-mexicali/nelson-i"
          card2ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-2.jpeg"
          card2ImagenAlt="Parque Industrial Nelson I en Mexicali"

          card3Titulo={<>Parque Industrial<br/>El Vigía I</>}
          card3BotonTexto="Ver especificaciones"
          card3BotonHref="/parques-industriales-mexicali/vigia-i"
          card3ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-4.jpeg"
          card3ImagenAlt="Parque Industrial El Vigía I en Mexicali"

          card4Titulo={<>Parque Industrial<br/>El Vigía II</>}
          card4BotonTexto="Ver especificaciones"
          card4BotonHref="/parques-industriales-mexicali/vigia-ii"
          card4ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-6.jpeg"
          card4ImagenAlt="Parque Industrial El Vigía II en Mexicali"

          card5Titulo={<>Honeywell<br/>en Mexicali</>}
          card5BotonTexto="Conocer más"
          card5BotonHref="#"
          card5ImagenSrc="/honeywell/honeywell-en-parque-industrial-de-mexicali-1.jpeg"
          card5ImagenAlt="Honeywell en Parque Industrial de Mexicali"
          mostrarCard5={false}
        />
      </div>

      {/* Tour Virtual 360° */}
      <VirtualTourBP tourId="hY5fjENu2" />

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
