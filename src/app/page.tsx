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



      {/* Componente Alpha - Fase 3: Brandpetramizado (CON 13 BREAKPOINTS) */}
      <div className="container mx-auto 1200:px-4 py-16 overflow-hidden">
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
                  bloque2ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-12.jpeg"
                  bloque2ImagenAlt="Lorem ipsum"
                  bloque3ImagenSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-3.jpeg"
                  bloque3ImagenAlt="Lorem ipsum"
                  bloque4Titulo="¿Necesitas información?"
                  bloque4Descripcion="Contáctanos para conocer nuestras soluciones"
                  bloque4LinkTexto="Contactar"
                  bloque4LinkHref="#"
                  imagenDerechaSrc="/grupo-nelson-naves-en-parques-industriales-en-mexicali-5.jpeg"
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



      {/* ScrollStorytelling - Storytelling interactivo con scroll */}
      <div className={'1200:mt-80 relative'}>
        <ScrollStorytelling mediaAspectRatio="aspect-[16/9]" />
      </div>

      {/* Imagen grande */}
      <div className="relative h-full mt-32 aspect-square lg:aspect-auto lg:h-[70vh]">
        <Image
          src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-336.jpg"
          alt="Parques industriales Grupo Nelson en Mexicali"
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Círculos */}
      <div className="px-4 md:ml-10 1200:ml-32 mt-32 md:px-0">
        <CirculosConProps
          circulo1Letra="G"
          circulo1Titulo="Grupo"
          circulo1Descripcion="Más de 60 años desarrollando infraestructura industrial de clase mundial en la región fronteriza de Mexicali. Somos el socio estratégico que su empresa necesita para establecerse con éxito en México."
          circulo2Letra="N"
          circulo2Titulo="Nelson"
          circulo2Descripcion="Familia empresarial con raíces profundas en Mexicali. Nuestro compromiso generacional con la región nos permite ofrecer soluciones industriales personalizadas, desde la renta de naves hasta la construcción build-to-suit."
          circulo3Letra="I"
          circulo3Titulo="Parques Industriales"
          circulo3Descripcion="Cuatro parques industriales estratégicamente ubicados en los corredores industriales más importantes de Mexicali. Infraestructura de primer nivel con seguridad 24/7, servicios completos y tecnología de punta."
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
              answer: "Contamos con naves industriales en renta y construcción build-to-suit en nuestros cuatro parques en Mexicali. Desde espacios de 500 m² hasta proyectos a medida de más de 25,000 m².",
            },
            {
              id: 2,
              question: "¿Cuál es la ubicación de sus parques industriales?",
              answer: "Nuestros parques están ubicados en los corredores industriales estratégicos de Mexicali, B.C.: Nelson I, Nelson II, El Vigía I y El Vigía II, con acceso directo a carreteras principales y frontera con EUA.",
            },
            {
              id: 3,
              question: "¿Ofrecen construcción build-to-suit?",
              answer: "Sí. Diseñamos y construimos naves industriales completamente a la medida de sus requerimientos operativos: capacidad eléctrica, altura de nave, andenes, oficinas, y especificaciones técnicas particulares.",
            },
            {
              id: 4,
              question: "¿Qué servicios de infraestructura incluyen?",
              answer: "Todos nuestros parques cuentan con seguridad 24/7, agua potable, drenaje, electricidad, gas natural, acceso pavimentado, telecomunicaciones y sistema centralizado de protección contra incendios bajo estándares NFPA y FM.",
            },
            {
              id: 5,
              question: "¿Cuánto tiempo lleva Grupo Nelson en la industria?",
              answer: "Grupo Nelson tiene más de 60 años de experiencia desarrollando infraestructura industrial en Mexicali. Somos una empresa familiar con profundo conocimiento de la región fronteriza y sus necesidades industriales.",
            },
            {
              id: 6,
              question: "¿Cómo puedo obtener información sobre disponibilidad?",
              answer: "Contáctenos directamente por correo o teléfono. Nuestro equipo le atenderá para presentarle las opciones disponibles según sus requerimientos específicos de espacio, ubicación y especificaciones técnicas.",
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
