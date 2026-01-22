'use client'

import Header from '@/components/Header'
import { CuadriculaSectionAmbaflex } from '@/components/brandpetram/cuadricula-section-ambaflex'
import {LineaL} from "@/components/ui/brandpetram/linea-l";
import {PoligonoTexto1} from "@/components/ui/brandpetram/poligono-texto-1";
import {Titulo} from "@/components/ui/brandpetram/titulo";
import {Parrafo} from "@/components/ui/brandpetram/parrafo";
import {GridOverlay} from "@/components/ui/brandpetram/grid";
import {BigNumber} from "@/components/brandpetram/big-number";
import {ImagenConEtiquetaAmbaflex} from "@/components/brandpetram/imagen-con-etiqueta-ambaflex";
import {HeroSectionAmbaflex} from "@/components/pro-blocks/hero-section-1/hero-section-ambaflex";
import {CuadroCirculoConEscuadra} from "@/components/brandpetram/cuadro-circulo-con-escuadra";
import {Mosaico2} from "@/components/brandpetram/mosaico-2";
import {Circulos} from "@/components/brandpetram/circulos";
import {CuadritosLluviaDos} from "@/components/ui/brandpetram/cuadritos-lluvia-dos";
import {TresCards} from "@/components/brandpetram/tres-cards";

export default function ConveyorsAmbaflexPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="">
        <CuadriculaSectionAmbaflex />

        <div className="container mx-auto grid grid-cols-1 lg:mt-32 px-4 md:px-0">
            <div className="flex flex-col items-center md:ml-20 lg:ml-34 gap-0 lg:gap-12 xl:gap-6 md:items-end md:grid  768:grid-cols-[5rem_15rem_1fr] 834:grid-cols-[8rem_15rem_1fr] 1024:grid-cols-[4rem_20rem_1fr] 1200:grid-cols-[14rem_20rem_1fr] 1280:grid-cols-[10rem_20rem_1fr] 1366:grid-cols-[16rem_20rem_1fr] 1728:grid-cols-[1.4fr_20rem_4fr]  xl:gap-x-16 md:gap-y-8">
                {/* LineaL solo en desktop */}
                <LineaL
                    orientacion="center-left"
                    anchoHorizontal="md:w-8/12 lg:w-full "
                    altoVertical="768:h-[18rem] 834:h-[20rem] lg:h-[23rem] 1024:h-[22rem] 1200:h-[20rem] 1366:h-[24rem]"
                    className="hidden md:block translate-y-[15%] z-50 "
                />
                <div className="relative aspect-[1/1] size-[13rem] lg:size-[20rem] xl:size-auto  ">
                    <PoligonoTexto1
                        text="Sistemas Ambaflex en México"
                        backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
                        textColor="text-white"
                        fontSize="text-2xl md:text-xl lg:text-4xl"
                        fontWeight="font-bold"
                        padding="p-6"
                        textWidth="w-full"
                        className="rounded-none 1200:max-w-[18rem] 1280:max-w-full"
                    />
                </div>
                {/* Columna 3: Título + Párrafo */}
                <div className="mt-20 md:mt-0 flex flex-col gap-6 text-center md:text-left  w-full 1728:w-auto 1728:max-w-160 1728:justify-self-start">
                    <Titulo
                        as="h2"
                        fontSize="text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
                        lineHeight="leading-none"
                        width="md:max-w-xs lg:max-w-sm xl:max-w-md"
                    >
                        Ingenieria, Suministro y Soluciones
                    </Titulo>
                    <Parrafo
                        fontSize="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                        lineHeight="leading-relaxed lg:leading-loose"
                        fontWeight="font-light"
                        maxWidth="md:max-w-[16rem] lg:max-w-[22rem] 1200:max-w-[22rem] 1280:max-w-[27rem]"
                    >
                        La experiencia, confiabilidad e infraestructura que necesitas en un equipo especializado en conveyors industriales ambaflex
                    </Parrafo>
                </div>
            </div>
        </div>
        {/* Ejemplo ImagenConEtiqueta */}
        <div className="container mx-auto mt-16 md:mt-32 w-11/12 ">


            <div className="relative h-60 md:h-[35vh] lg:h-[40vh] 1200:h-[60vh] xl:h-[70vh] ">
                <ImagenConEtiquetaAmbaflex
                    src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-271.jpg"
                    alt="Lorem ipsum"
                    etiqueta="Soluciones Ambaflex"
                    posicion="bottom-left"
                    offsetYClasses="translate-y-5 md:translate-y-[120px]"
                    offsetXClasses="translate-x-0"
                    etiquetaRounded="rounded-none"
                    etiquetaRoundedTL="rounded-tr-none"
                    etiquetaRoundedTR="rounded-tr-3xl"
                    etiquetaFontSize="text-4xl 393:text-[2.5rem] md:text-[5rem] 1024:text-[7rem] 1200:text-[8rem] 1440:text-[8.5rem]"
                    etiquetaFontWeight="font-black"
                    etiquetaLineHeight="leading-[2rem] 393:leading-[2.4rem] md:leading-[4.5rem] 1024:leading-[6rem] 1200:leading-[7rem]"
                    etiquetaLetterSpacing="tracking-tight"
                    etiquetaBg="bg-background"
                    etiquetaColor="text-foreground"  // ← Agregá esto
                    etiquetaOpacity="opacity-100"
                    etiquetaWidth="w-[14rem] 393:w-[16rem] md:w-[30rem] 1024:w-[39rem] 1200:w-[46rem] 1280:w-[44rem] 1366:w-7/12 1536:w-[47rem] 1728:w-[49rem]"
                    className="rounded-none overflow-visible"
                    poligono={true}
                    poligonoWidth="md:w-25 834:w-32 1024:w-35"
                    poligonoAspect="aspect-[1/1]"
                    poligonoBg=" bg-background"
                    poligonoOpacity="opacity-100"
                    poligonoClassName="rounded-none"
                />
                {/* Grid principal */}
                <GridOverlay
                    fadeRadius="16rem"
                    fadePosition="center"
                    strokeColor="stroke-white/20"
                    gridSize={50}
                    showHighlights={true}
                    highlightColor="fill-orange-500/8"  // Highlights naranjas sutiles
                />
            </div>
        </div>

        {/* Línea decorativa top-right que conecta Soluciones Ambaflex con HeroSection1 */}
        <div className="w-1/2 1728:w-7/12 md:ml-auto relative mt-0 h-20 md:h-20 1200:h-40 1366:h-40 1728:h-64 mt-20 z-30 md:pr-4">
            <LineaL
                orientacion="top-right"
                anchoHorizontal="md:w-7/12"
                altoVertical="h-full"
                color="bg-foreground/20"
            />
        </div>

        <div className={'w-11/12 mx-auto 1200:-translate-y-16 1366:-translate-y-16 1728:-translate-y-24'}><HeroSectionAmbaflex/></div>
        {/* Sección Text + Image */}

        <BigNumber
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-272.jpg"
          imageAlt="Lorem ipsum"
          number="+200"
          title={<>Millones de <br /> productos al Año</>}
          subtitle={<>Se mueven por sistemas de conveyors <br className={'hidden md:block'}/> implementados por SDI industrial</>}
        />

        <CuadroCirculoConEscuadra />

          <div className={'w-11/12 mx-auto -mt-20 md:-mt-64 1024:-mt-40 relative'}>
            <Mosaico2/>

            {/* Cuadritos decorativos pegados debajo del mosaico */}
            <div className="absolute top-full right-20 md:right-40 z-10 pointer-events-none">
              <CuadritosLluviaDos />
            </div>
          </div>
      </main>

        <div className={'px-4 md:ml-10 1200:ml-32 mt-32 md:px-0'}><Circulos/></div>

        <div className={'mt-20 1366:ml-16' }><TresCards/></div>
    </div>
  )
}
