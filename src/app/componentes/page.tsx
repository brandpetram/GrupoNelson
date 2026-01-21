'use client'

import Header from '@/components/Header'
import { CarruselConveyors } from '@/components/brandpetram/carrusel'
import { GridPoligonos2x1x2 } from '@/components/brandpetram/grid-poligonos-2x1x2'
import { Titulo } from '@/components/ui/brandpetram/titulo'
import { Parrafo } from '@/components/ui/brandpetram/parrafo'
import { BigNumber } from "@/components/brandpetram/big-number"
import { GridOverlay } from "@/components/ui/brandpetram/grid"
import { PoligonoImagenCarrusel1 } from "@/components/ui/brandpetram/poligono-imagen-carrusel-1"
import Link from "next/link"
import { HeroAnimado } from "@/components/brandpetram/hero-animado"
import { LogosMarcas } from "@/components/brandpetram/grid-marcas-de-conveyors"
import { TickerMarketing2 } from "@/components/brandpetram/ticker-marketing-2"
import { SidebarSticky1 } from "@/components/brandpetram/sidebar-sticky-1"
import { Masonry1 } from "@/components/brandpetram/masonry-1"
import { StickyRevealContent, StickyRevealCover } from "@/components/ui/sticky-reveal"
import { HalfCircle } from "@/components/brandpetram/half-circle"
import { HalfCircleMobile } from "@/components/brandpetram/half-circle-mobile"
import { LogoNelson } from "@/components/logo-nelson"
import { HexagonFeatures } from "@/components/brandpetram/hexagon-features"
import { ConveyorsGridSection } from "@/components/brandpetram/conveyors-grid-section"
import FAQs from "@/components/tailarkpro/faqs-four"
import { motion } from "motion/react"
import { ScrollHighlightSDI } from "@/components/sdi/scroll-highlight-sdi"

export default function ConveyorsIndustrialesPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />



      <main className="bg-background text-foreground mt-32">

          {/* Hero Animado con animaciones secuenciales */}
          <HeroAnimado
              imagenIzquierdaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg"
              imagenIzquierdaAlt="Lorem ipsum"
              textoPoligono="Parques Industriales en Mexicali Baja"
              imagenDerechaSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg"
              imagenDerechaAlt="Lorem ipsum"
              parrafo1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris."
              parrafo2="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkContacto="/contacto"
              palabrasLista={[
                  'Tipo A',
                  'Tipo B',
                  'Tipo C',
                  'Tipo D',
                  'Tipo E'
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
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                  </Parrafo>
              </div>
              {/* Logos de Marcas - probar las 3 variantes */}
              <div className={'flex flex-col md:flex-row mt-10 1728:mt-0 1200:mb-32 1280:-mb-40 1536:mb-10 1728:mb-32 1920:mb-32'}>
                  <div className={'flex-2'}><LogosMarcas/></div>
                  <div className="shadow-xl md:flex-1 2240:flex-2 right-0 1200:translate-x-10 z-10 bg-gradient-to-bl from-blue-600 to-sky-500 rounded-xs ">
                      <div className="flex flex-col gap-6">
                          <Titulo
                              as="h2"
                              fontSize="text-4xl md:text-2xl lg:text-4xl 1200:text-3xl 1280:text-4xl 1536:text-5xl"
                              fontWeight="font-bold"
                              className="text-white dark:text-gray-50 leading-none px-10 pt-10"  // Blanco en light, gris oscuro en dark
                          >
                              Naves Industriales Built-to-Suit
                          </Titulo>
                          <Parrafo
                              fontSize="1200:text-md 1728:text-xl 2560:text-2xl "
                              maxWidth="max-w-4xl"
                              lineHeight={'leading-normal'}
                              className="text-balance text-white dark:text-gray-50 px-10 pb-10"  // Blanco con opacidad en light, gris en dark
                          >
                             Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit.
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
                  alt: 'Lorem ipsum',
                  overlayColor: 'rgba(249, 115, 22, 0.4)',
                  text: 'Espacios Modulares'
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
                      <div className="w-9/12 max-w-sm bg-gradient-to-tl p-16 from-blue-600 to-sky-500 p-10 rounded-xs">
                          <div className="flex flex-col gap-6">
                              <Titulo
                                  as="h2"
                                  fontSize="text-3xl md:text-4xl 1280:text-3xl 1536:text-4xl"
                                  fontWeight="font-bold"
                                  className="text-white dark:text-gray-50 leading-none"
                              >
                                  Construye tu Nave Industrial en Mexicali desde Terreno
                              </Titulo>

                          </div>
                      </div>

                      {/* Texto debajo del div naranja */}
                      <div className="w-9/12 1200:w-7/12 px-5 flex flex-col gap-4">
                          <p className="text-foreground tracking-wide leading-loose md:text-2xl text-balance 1200:text-base ">
                              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                          </p>
                          <Link
                              href="/contacto"
                              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors w-fit"
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
                                      alt: 'Lorem ipsum',
                                      overlayColor: 'rgba(249, 115, 22, 0.4)',
                                      text: 'Espacios Modulares'
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
                            className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[40px] h-8 md:h-14 bg-gradient-to-tl from-blue-600 to-sky-500 z-10 -rotate-12"
                            initial={{ width: 0 }}
                            whileInView={{ width: "calc(58.33% - 0px)" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "0px" }}
                          >
                            {/* Círculo inicio */}
                            <motion.div
                              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-blue-600 to-sky-500 flex items-center justify-center"
                              initial={{ rotate: 0 }}
                              whileInView={{ rotate: 360 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                              viewport={{ once: true, margin: "0px" }}
                            >
                              <span className="text-white font-black text-4xl md:text-8xl">A</span>
                            </motion.div>
                            {/* Círculo final */}
                            <motion.div
                              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-20 h-20 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-blue-600 to-sky-500 flex items-center justify-center"
                              initial={{ rotate: 0 }}
                              whileInView={{ rotate: 360 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                              viewport={{ once: true, margin: "0px" }}
                            >
                              <span className="text-white font-black text-4xl md:text-8xl">Z</span>
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
            imageAlt="Lorem ipsum"
            number="+4.5"
            title={<>Millones de <br /> Pies² Desarrollados</>}
            subtitle={<>Construidos en naves <br /> industriales en Mexicali desde 1965</>}
          />


          {/* Sección de Items Imagen con Texto */}
          <div className={'mt-32'}><ConveyorsGridSection/></div>



          {/* Carrusel de Parques Industriales */}
          <CarruselConveyors />


          {/* STICKY REVEAL SYSTEM - Solo en desktop */}
          <div className="hidden md:block relative">
            {/* 1. NORMAL - Masonry scrolls naturally */}
            <section className="bg-background py-8 md:py-16">
              <Masonry1 />
            </section>

            {/* 2. STICKY - Orange/Red features content revealed */}
            <StickyRevealContent className="bg-gradient-to-br from-blue-600 to-sky-500">
              <HexagonFeatures />
            </StickyRevealContent>

            {/* 3. COVER - Slides up revealing the sticky section */}
            <StickyRevealCover className="bg-background" rounded={false}>
              <div className="relative w-full h-full">
                <img
                  src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg"
                  alt="Lorem ipsum"
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
                    highlightColor="fill-blue-600/40"
                  />
                </motion.div>
                {/* Logo flotante en esquina inferior derecha */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                  <LogoNelson variant="white" width={200} />
                </div>
              </div>
            </StickyRevealCover>
          </div>

          {/* Mobile version - Sin efecto de reveal */}
          <section className="md:hidden bg-gradient-to-br from-blue-600 to-sky-500">
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

      </main>
    </div>
  )
}
