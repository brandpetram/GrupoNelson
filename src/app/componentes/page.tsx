'use client'

import Header from '@/components/Header'
import Footer1 from '@/components/brandpetram/footer-1'
import { CarruselConveyors } from '@/components/brandpetram/carrusel'
import { HeroMarketing1Video } from '@/components/brandpetram/hero-marketing-1-video'
import { GridPoligonos2 } from '@/components/brandpetram/grid-poligonos-2'
import { GridPoligonos2x1 } from '@/components/brandpetram/grid-poligonos-2x1'
import { GridPoligonos2x1x2 } from '@/components/brandpetram/grid-poligonos-2x1x2'
import { GridPoligonos2x1x2x1 } from '@/components/brandpetram/grid-poligonos-2x1x2x1'
import { Titulo } from '@/components/ui/brandpetram/titulo'
import { Parrafo } from '@/components/ui/brandpetram/parrafo'
import { LineaL } from '@/components/ui/brandpetram/linea-l'
import {
  ProductGallery,
  FeaturesSection,
  CTASection
} from '@/components/sdi/internal-pages'
import {PoligonoTexto1} from "@/components/ui/brandpetram/poligono-texto-1";
import {ImagenConEtiqueta} from "@/components/ui/brandpetram/imagen-con-etiqueta";
import {BigNumber} from "@/components/brandpetram/big-number";
import {GridOverlay} from "@/components/ui/brandpetram/grid";
import {PoligonoImagen1} from "@/components/ui/brandpetram/poligono-imagen-1";
import {PoligonoImagenCarrusel1} from "@/components/ui/brandpetram/poligono-imagen-carrusel-1";
import {Flecha1} from "@/components/ui/brandpetram/flecha-1";
import {LineaLFlex} from "@/components/ui/brandpetram/linea-l-flex";
import Link from "next/link";
import { HeroAnimado } from "@/components/brandpetram/hero-animado";
import HeroSecondaryFour from "@/components/tailarkpro/secondary-hero-four";
import {ImageIllustration} from "@/components/tailarkpro/secondary-hero-four/image-illustration";
import { LogosMarcas, LogosMarcasCompacto, LogosMarcasDestacado } from "@/components/brandpetram/grid-marcas-de-conveyors";
import { TickerMarketing2 } from "@/components/brandpetram/ticker-marketing-2";
import { SidebarSticky1 } from "@/components/brandpetram/sidebar-sticky-1";
import { Masonry1 } from "@/components/brandpetram/masonry-1";
import { StickyRevealContent, StickyRevealCover } from "@/components/ui/sticky-reveal";
import { HalfCircle } from "@/components/brandpetram/half-circle";
import { HalfCircleMobile } from "@/components/brandpetram/half-circle-mobile";
import { LogoWhite } from "@/components/logo-white";
import { HexagonFeatures } from "@/components/brandpetram/hexagon-features";
import { ConveyorsGridSection } from "@/components/brandpetram/conveyors-grid-section";
import {
  serviciosDeConveyorsLinks,
  conveyorsMarcasLinks,
  sectoresConveyorsLinks,
} from '@/data/nav/conveyors-industriales';
import FAQs from "@/components/tailarkpro/faqs-four";
import { motion } from "motion/react";
import { ScrollHighlightSDI } from "@/components/sdi/scroll-highlight-sdi";

const products = [
  {
    id: '1',
    name: 'Dorner Conveyors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'Dorner',
    href: '/proveedores/dorner'
  },
  {
    id: '2',
    name: 'FlexLink Systems',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'FlexLink',
    href: '/proveedores/flexlink'
  },
  {
    id: '3',
    name: 'Hytrol Conveyors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'Hytrol',
    href: '/proveedores/hytrol'
  },
  {
    id: '4',
    name: 'Intralox Belting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'Intralox',
    href: '/proveedores/intralox'
  },
  {
    id: '5',
    name: 'Pacline Overhead',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'Pacline',
    href: '/proveedores/pacline'
  },
  {
    id: '6',
    name: 'Ambaflex Spiral',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    placeholderText: 'Ambaflex',
    href: '/proveedores/ambaflex'
  }
]


const features = [
  {
    id: '1',
    title: 'Alta Eficiencia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'Bajo Mantenimiento',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: '3',
    title: 'Diseño Modular',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
]

const ctaData = {
  title: 'Lorem Ipsum Dolor Sit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttons: [
    {
      label: 'Solicitar Cotización',
      href: '/contacto',
      variant: 'default' as const
    },
    {
      label: 'Ver Catálogo',
      href: '/catalogo',
      variant: 'outline' as const
    }
  ]
}

export default function ConveyorsIndustrialesPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />



      <main className="bg-background text-foreground mt-32">

          {/* Hero Animado con animaciones secuenciales */}
          <HeroAnimado
              imagenIzquierdaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg"
              imagenIzquierdaAlt="Conveyors de banda"
              textoPoligono="Conveyors Industriales en todo México"
              imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg"
              imagenDerechaAlt="Conveyors verticales"
              parrafo1="Más de 18 años de experiencia en suministro diseño e instalación de Sistema Conveyors para empresas de manufactura que necesitan automatizar flujo de materiales, empaques, componentes o productos."
              parrafo2="Nuestros sistemas de conveyors industriales mueven cientos de millones de productos cada año en todo México."
              linkContacto="/contacto"
              palabrasLista={[
                  'De Banda',
                  'De Rodillos',
                  'De Cadena',
                  'Espirales',
                  'Aéreos'
              ]}
          />


          <div className={'mt-20'}><GridPoligonos2x1x2/></div>

          {/* Ejemplo 3: Estilo más compacto */}
          <div className="container mx-auto w-10/12 1200:w-8/12 1366:w-8/12 1536:w-9/12  lg:max-w-6xl my-10 md:my-20">
              <div className="flex flex-col gap-4">

                  <Parrafo
                      fontSize="text-base text-3xl 768:text-3xl md:text-4xl 1024:text-5xl 1200:text-4xl 1536:text-5xl "
                      textColor="text-muted-foreground"
                  >
                      Soluciones, ingenieria y suministro especializado en sistemas de conveyors industriales en todo México. Ofrecemos soluciones ergonómicas para el manejo de materiales, respaldados por miles de clientes satisfechos y marcas de clase mundial.
                  </Parrafo>
              </div>
              {/* Logos de Marcas - probar las 3 variantes */}
              <div className={'flex flex-col md:flex-row mt-10 1728:mt-0 1200:mb-32 1280:-mb-40 1536:mb-10 1728:mb-32 1920:mb-32'}>
                  <div className={'flex-2'}><LogosMarcas/></div>
                  <div className="shadow-xl md:flex-1 2240:flex-2 right-0 1200:translate-x-10 z-10 bg-gradient-to-bl from-orange-500 to-red-600 rounded-xs ">
                      <div className="flex flex-col gap-6">
                          <Titulo
                              as="h2"
                              fontSize="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl"
                              fontWeight="font-bold"
                              className="text-white dark:text-gray-50 leading-none px-10 pt-10"  // Blanco en light, gris oscuro en dark
                          >
                              Sistemas de Conveyors a la Medida
                          </Titulo>
                          <Parrafo
                              fontSize="1200:text-md 1728:text-xl 2560:text-2xl "
                              maxWidth="max-w-4xl"
                              lineHeight={'leading-normal'}
                              className="text-balance text-white dark:text-gray-50 px-10 pb-10"  // Blanco con opacidad en light, gris en dark
                          >
                             Nuestros sistemas de conveyors personalizados optimizan el flujo de materiales en múltiples sectores. Ofrecemos soluciones especializadas para la industria alimenticia, manufacturera y automotriz, diseñadas para mejorar eficiencia operativa y adaptarse a las necesidades específicas de cada proceso.
                          </Parrafo>
                      </div>
                  </div>

              </div>
          </div>

        {/* Carrusel de imágenes con texto superpuesto */}
        <div className="relative 1200:-mt-64 1280:-mt-30 1366:-mt-30 1728:-mt-56 2240:-mt-26 2560:-mt-36 mx-auto max-w-8/12 2240:max-w-7/12 ">
          {/* Carrusel de fondo */}
          <div className="relative aspect-square md:aspect-5/3 1728:aspect-2/1 overflow-hidden rounded-none">
            <PoligonoImagenCarrusel1
              imagenes={[

                {
                  src: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg',
                  alt: 'Conveyors verticales',
                  overlayColor: 'rgba(249, 115, 22, 0.4)',
                  text: 'Sistemas Verticales'
                }
              ]}
              objectPosition="object-center"
              autoplayInterval={3000}
              transitionDuration={0.8}
              showIndicators={false}
            />
          </div>



          {/* Texto superpuesto - ajusta top/right/bottom/left para posicionar */}
        </div>

          <div className="relative mt-24  max-w-4xl 1024:max-w-full md:w-11/12 1280:w-10/12 mx-auto -translate-y-20">
              <div className="flex flex-col 1200:flex-row gap-6 items-start">
                  {/* Columna izquierda: texto */}
                  <div className="order-1 ml-10 1200:ml-0 w-full 1200:w-5/12 flex flex-col gap-6 relative z-10 1200:-translate-y-32">
                      {/* Div naranja */}
                      <div className="w-9/12 max-w-sm bg-gradient-to-tl p-16 from-orange-500 to-red-600 p-10 rounded-xs">
                          <div className="flex flex-col gap-6">
                              <Titulo
                                  as="h2"
                                  fontSize="text-3xl md:text-4xl 1280:text-3xl 1536:text-4xl"
                                  fontWeight="font-bold"
                                  className="text-white dark:text-gray-50 leading-none"
                              >
                                  Transporta desde el punto A hacia el punto B en tu Línea
                              </Titulo>

                          </div>
                      </div>

                      {/* Texto debajo del div naranja */}
                      <div className="w-9/12 1200:w-7/12 px-5 flex flex-col gap-4">
                          <p className="text-foreground tracking-wide leading-loose md:text-2xl text-balance 1200:text-base ">
                              Optimiza el final de tu línea de producción con conveyors confiables. Desde empaque hasta paletizado, reducimos tiempos y aumentamos productividad. Tecnología adaptable que mantiene tu operación en movimiento.
                          </p>
                          <Link
                              href="/contacto"
                              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors w-fit"
                          >
                              Contáctanos
                          </Link>
                      </div>
                  </div>

                  {/* Columna derecha: carrusel */}
                  <div className="order-2 w-full 1200:w-10/12 1728:w-11/12 1920:w-full 1200:-ml-56 1920:-ml-64 mt-10 relative z-0">
                      <div className="relative aspect-square md:aspect-16/9 1200:aspect-16/12 1366:aspect-16/10 1440:aspect-16/9 1536:aspect-16/8 overflow-visible rounded-xs">
                          <PoligonoImagenCarrusel1
                              imagenes={[

                                  {
                                      src: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg',
                                      alt: 'Conveyors verticales',
                                      overlayColor: 'rgba(249, 115, 22, 0.4)',
                                      text: 'Sistemas Verticales'
                                  },

                              ]}
                              objectPosition="object-center"
                              autoplayInterval={3000}
                              transitionDuration={0.8}
                              showIndicators={false}
                              className="rounded-xs"
                          />

                          {/* Overlay rectangulo - posicionable */}
                          <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[40px] h-8 md:h-14 bg-gradient-to-tl from-orange-500 to-red-600 z-10 -rotate-12"
                            initial={{ width: 0 }}
                            whileInView={{ width: "calc(58.33% - 0px)" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "0px" }}
                          >
                            {/* Círculo inicio */}
                            <motion.div
                              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-orange-500 to-red-600 flex items-center justify-center"
                              initial={{ rotate: 0 }}
                              whileInView={{ rotate: 360 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                              viewport={{ once: true, margin: "0px" }}
                            >
                              <span className="text-white font-black text-4xl md:text-8xl">A</span>
                            </motion.div>
                            {/* Círculo final */}
                            <motion.div
                              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-20 h-20 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-orange-500 to-red-600 flex items-center justify-center"
                              initial={{ rotate: 0 }}
                              whileInView={{ rotate: 360 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                              viewport={{ once: true, margin: "0px" }}
                            >
                              <span className="text-white font-black text-4xl md:text-8xl">B</span>
                            </motion.div>
                          </motion.div>
                      </div>
                  </div>
              </div>
          </div>




          {/* Sección con Sidebar Sticky */}
          <SidebarSticky1 />

          <BigNumber
            imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
            imageAlt="Conveyors de banda industrial"
            number="+200"
            title={<>Millones de <br /> productos al Año</>}
            subtitle={<>Se mueven por sistemas <br /> de conveyors implementados por SDI industrial</>}
          />


          {/* Sección de Items Imagen con Texto */}
          <div className={'mt-32'}><ConveyorsGridSection/></div>



          {/* Carrusel de Conveyors Industriales */}
          <CarruselConveyors />


          {/* STICKY REVEAL SYSTEM - Solo en desktop */}
          <div className="hidden md:block relative">
            {/* 1. NORMAL - Masonry scrolls naturally */}
            <section className="bg-background py-8 md:py-16">
              <Masonry1 />
            </section>

            {/* 2. STICKY - Orange/Red features content revealed */}
            <StickyRevealContent className="bg-gradient-to-br from-orange-500 to-red-600">
              <HexagonFeatures />
            </StickyRevealContent>

            {/* 3. COVER - Slides up revealing the sticky section */}
            <StickyRevealCover className="bg-background" rounded={false}>
              <div className="relative w-full h-full">
                <img
                  src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
                  alt="Omni Metal Craft"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.3) brightness(0.8)' }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  className="absolute inset-0"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  style={{ originY: 0 }}
                >
                  <GridOverlay
                    strokeColor="stroke-white/30"
                    gridSize={100}
                    showHighlights={true}
                    highlightColor="fill-orange-500/40"
                  />
                </motion.div>
                {/* Logo flotante en esquina inferior derecha */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                  <LogoWhite width={200} height={125} />
                </div>
              </div>
            </StickyRevealCover>
          </div>

          {/* Mobile version - Sin efecto de reveal */}
          <section className="md:hidden bg-gradient-to-br from-orange-500 to-red-600">
            <HexagonFeatures />
          </section>

          {/* Half Circle - Desktop */}
          <div className="hidden md:block">
            <HalfCircle />
          </div>

          {/* Half Circle Mobile */}
          <div className="md:hidden">
            <HalfCircleMobile />
          </div>

          <div className={'lg:mt-20'}><TickerMarketing2/></div>

          {/* Sección de FAQs */}
          <FAQs />

          {/* Scroll Highlight SDI */}
          <ScrollHighlightSDI />

        <Footer1 />
      </main>
    </div>
  )
}
