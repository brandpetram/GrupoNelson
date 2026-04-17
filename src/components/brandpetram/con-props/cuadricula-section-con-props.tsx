/**
 * CuadriculaSectionConProps - Componente único e irrepetible
 *
 * Hero con mosaico de imágenes de conveyors.
 * Solo contenido es configurable (imágenes, textos, botones).
 */

'use client'

import { Grid as GridBackground } from '@/components/ui/brandpetram/grid'
import { motion, type Variants } from 'motion/react'
import Image from 'next/image'
import { type ReactNode } from 'react'

// Los sizes siguen los mismos breakpoints del CSS `zoom` de abajo:
// sin zoom el tile medería basePx; con zoom activo mide basePx × factor.
// Reportar el tamaño real evita que Next descargue variantes oversized.
const CUADRICULA_ZOOM_BREAKPOINTS: ReadonlyArray<readonly [number, number]> = [
  [2560, 1.00],
  [2240, 0.95],
  [1920, 1.20],
  [1728, 1.10],
  [1536, 0.90],
  [1440, 0.95],
  [1280, 0.85],
  [1200, 0.80],
  [1024, 0.90],
  [834, 0.80],
  [768, 0.65],
  [430, 0.40],
  [393, 0.38],
]
const CUADRICULA_DEFAULT_ZOOM = 0.35

function sizesFor(basePx: number): string {
  const parts = CUADRICULA_ZOOM_BREAKPOINTS.map(
    ([bp, zoom]) => `(min-width: ${bp}px) ${Math.ceil(basePx * zoom)}px`
  )
  return `${parts.join(', ')}, ${Math.ceil(basePx * CUADRICULA_DEFAULT_ZOOM)}px`
}

const SIZES_137 = sizesFor(137)
const SIZES_127 = sizesFor(127)
const SIZES_173 = sizesFor(173)
const SIZES_246 = sizesFor(246)
const SIZES_81 = sizesFor(81)
const SIZES_87 = sizesFor(87)
const SIZES_248 = sizesFor(248)
const SIZES_330 = sizesFor(330)
const SIZES_500 = sizesFor(500)

interface CuadriculaSectionConPropsProps {
  // 17 imágenes visibles del mosaico (columna 5 eliminada — era hidden y descargaba sin mostrarse)
  imagen1: string
  imagen2: string
  imagen3: string
  imagen4: string
  imagen5: string
  imagen6: string
  imagen7: string
  imagen8: string
  imagen9: string
  imagen10: string
  imagen11: string
  imagen12: string
  imagen13: string
  imagen14: string
  imagen15: string // Imagen principal (la más grande)
  imagen16: string
  imagen17: string

  // Contenido de texto
  badge: string
  titulo: ReactNode
  parrafo: string

  // Botones
  boton1Texto: string
  boton1Href: string
  boton2Texto: string
  boton2Href: string

  // Filtros y overlays (aplican a todas las imágenes)
  overlayColor: string // ej: "rgba(100, 150, 250, 0.5)"
  overlayBlendMode: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'
  filterBrightness: number // ej: 1.10
  filterSaturate: number // ej: 1.15
  filterContrast: number // ej: 1.05
  lang?: 'en' | 'es'
}

export function CuadriculaSectionConProps({
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
  imagen12,
  imagen13,
  imagen14,
  imagen15,
  imagen16,
  imagen17,
  badge,
  titulo,
  parrafo,
  boton1Texto,
  boton1Href,
  boton2Texto,
  boton2Href,
  overlayColor,
  overlayBlendMode,
  filterBrightness,
  filterSaturate,
  filterContrast
}: CuadriculaSectionConPropsProps) {
  // Construir string de filtro CSS una sola vez
  const cssFilter = `brightness(${filterBrightness}) saturate(${filterSaturate}) contrast(${filterContrast})`

  // Variantes de animación para las columnas
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  const columnVariants: Variants = {
    hidden: {
      x: 300,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <GridBackground
      gridSize={200}
      fadeRadius="32rem"
      height="h-screen"
      strokeColor="stroke-gray-200 dark:stroke-white/10"
      showHighlights={true}
      className="overflow-hidden"
    >
      <style>{`
        .cuadricula-zoom {
          zoom: 0.35;
        }
        @media (min-width: 393px) {
          .cuadricula-zoom {
            zoom: 0.38;
          }
        }
        @media (min-width: 430px) {
          .cuadricula-zoom {
            zoom: 0.40;
          }
        }
        @media (min-width: 768px) {
          .cuadricula-zoom {
            zoom: 0.65;
          }
        }
        @media (min-width: 834px) {
          .cuadricula-zoom {
            zoom: 0.80;
          }
        }
        @media (min-width: 1024px) {
          .cuadricula-zoom {
            zoom: 0.90;
          }
        }
        @media (min-width: 1200px) {
          .cuadricula-zoom {
            zoom: 0.80;
          }
        }
        @media (min-width: 1280px) {
          .cuadricula-zoom {
            zoom: 0.85;
          }
        }
        @media (min-width: 1366px) {
          .cuadricula-zoom {
            zoom: 0.85;
          }
        }
        @media (min-width: 1440px) {
          .cuadricula-zoom {
            zoom: 0.95;
          }
        }
        @media (min-width: 1536px) {
          .cuadricula-zoom {
            zoom: 0.90;
          }
        }
        @media (min-width: 1728px) {
          .cuadricula-zoom {
            zoom: 1.1;
          }
        }
        @media (min-width: 1920px) {
          .cuadricula-zoom {
            zoom: 1.2;
          }
        }
        @media (min-width: 2240px) {
          .cuadricula-zoom {
            zoom: 0.95;
          }
        }
        @media (min-width: 2560px) {
          .cuadricula-zoom {
            zoom: 1.00;
          }
        }
      `}</style>

      {/* Contenedor flex para dividir en dos columnas */}
      <div className=" -translate-y-18 md:translate-y-0 relative isolate z-20 flex flex-col 1200:flex-row min-h-screen 1200:items-center justify-start 1200:justify-between w-full py-0 px-0 1280:pl-12 1366:pl-14 md:py-0 1200:-translate-y-20 1280:translate-y-0">
        {/* Columna izquierda - Contenido de texto */}
        <div className="md:-mr-120 order-2 md:order-1 relative z-20 1280:max-w-2xl 1728:max-w-4xl p-5 md:p-10 1280:p-0 1200:-translate-y-20 1280:-translate-y-28 1366:-translate-y-28  1440:-translate-y-40 1536:-translate-y-24 1728:-translate-y-40 1920:-translate-y-56 1920:translate-x-10">
          <span className="rounded-xl bg-orange-700/10 px-4 py-2 text-xs lg:text-lg font-semibold leading-6 text-red-600  ring-1 ring-inset ring-red-500/20">{badge}</span>
          <h1 className="mt-4 md:mt-5  text-3xl 393:text-4xl 430:text-5xl md:text-6xl 1024:text-7xl 1536:text-8xl font-extrabold text-foreground mb-6 leading-none tracking-tighter">
           {titulo}
          </h1>
          <p className="md:max-w-xl -mt-3 md:mt-0 1200:w-9/12 430:text-xl 1024:text-2xl 1728:text-2xl text-muted-foreground mb-8">
            {parrafo}
          </p>
          <div className="flex flex-col md:max-w-[18rem] 1024:max-w-sm 1200:flex-row md:w-2/12 834:w-2/12 1024:w-2/12 1200:w-full gap-4 md:-mr-[7rem] text-xs 360:text-sm 393:text-lg">
            <a href={boton1Href} className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-500 transition text-center">
              {boton1Texto}
            </a>
            <a href={boton2Href} className="px-6 py-3 bg-transparent text-foreground border border-border rounded-lg font-semibold hover:bg-muted transition text-center">
              {boton2Texto}
            </a>
          </div>
        </div>

        {/* Columna derecha - Cuadrícula */}
        <div className="w-fit cuadricula-zoom ml-auto md:-translate-y-64 834:-translate-y-48 1024:-translate-y-50 1200:-translate-y-0 1200:translate-x-32 1280:translate-x-20 1366:translate-x-0 order-1">
        <motion.div
          className="flex gap-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* COLUMNA 1 */}
          <motion.div className="flex flex-col place-content-end" variants={columnVariants}>
            <div className="relative w-[136.62px] aspect-[1/2] overflow-hidden rounded-none border-0 border-blue-500">
              <Image
                fill
                src={imagen1}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_137}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>
          </motion.div>

          {/* COLUMNA 2 */}
          <motion.div className="flex flex-col place-content-end gap-1" variants={columnVariants}>
            <div className="relative w-[126.62px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
              <Image
                fill
                src={imagen2}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_127}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>
            <div className="relative w-[126.62px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
              <Image
                fill
                src={imagen3}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_127}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>
            <div className="relative w-[126.62px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
              <Image
                fill
                src={imagen4}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_127}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>
          </motion.div>

          {/* COLUMNA 3 */}
          <motion.div className="flex flex-col place-content-start gap-1" variants={columnVariants}>
            <div className="relative w-[172.5px] aspect-square overflow-hidden rounded-none self-end border-0 border-blue-500">
              <Image
                fill
                src={imagen5}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_173}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>

            <div className="relative w-[172.5px] aspect-square overflow-hidden rounded-none self-end border-0 border-blue-500">
              <Image
                fill
                src={imagen6}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_173}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>
            <div className="flex flex-col ml-auto place-content-end place-items-end gap-1">
              <div className="grid grid-cols-[245.5px_80.5px] grid-rows-[80.5px_80.5px_80.5px] gap-1">
                <div className="relative row-span-3 overflow-hidden rounded-none border-0 border-blue-500">
                  <Image
                    fill
                    src={imagen7}
                    alt="Industrial construction"
                    className="object-cover object-center"
                    style={{filter: cssFilter}}
                    sizes={SIZES_246}
                  />
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                  />
                </div>

                <div className="relative overflow-hidden rounded-none border-0 border-blue-500">
                  <Image
                    fill
                    src={imagen8}
                    alt="Industrial construction"
                    className="object-cover object-center"
                    style={{filter: cssFilter}}
                    sizes={SIZES_81}
                  />
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                  />
                </div>

                <div className="relative overflow-hidden rounded-none border-0 border-blue-500">
                  <Image
                    fill
                    src={imagen9}
                    alt="Industrial construction"
                    className="object-cover object-center"
                    style={{filter: cssFilter}}
                    sizes={SIZES_81}
                  />
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                  />
                </div>

                <div className="relative overflow-hidden rounded-none border-0 border-blue-500">
                  <Image
                    fill
                    src={imagen10}
                    alt="Industrial construction"
                    className="object-cover object-center"
                    style={{filter: cssFilter}}
                    sizes={SIZES_81}
                  />
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                  />
                </div>
              </div>

              <div className="relative w-[330px] h-[322px] overflow-hidden rounded-none border-0 border-blue-500">
                <Image
                  fill
                  src={imagen11}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_330}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>
            </div>
          </motion.div>

          {/* COLUMNA 4 */}
          <motion.div className="flex flex-col place-content-end place-items-end gap-1" variants={columnVariants}>
            <div className="flex flex-row self-start gap-1">
              <div className="relative w-[172.5px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
                <Image
                  fill
                  src={imagen12}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_173}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>
              <div className="relative w-[172.5px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
                <Image
                  fill
                  src={imagen13}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_173}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>
              <div className="relative w-[86.25px] aspect-square overflow-hidden rounded-none self-end border-0 border-blue-500">
                <Image
                  fill
                  src={imagen14}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_87}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>
            </div>

            {/* IMAGEN PRINCIPAL */}
            <div className="relative w-[500px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
              <Image
                fill
                src={imagen15}
                alt="Industrial construction"
                className="object-cover object-center"
                style={{filter: cssFilter}}
                sizes={SIZES_500}
              />
              <div
                className="absolute inset-0"
                style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
              />
            </div>

            <div className="flex flex-row">
              <div className="relative w-[248px] aspect-square overflow-hidden rounded-none mr-1 border-0 border-blue-500">
                <Image
                  fill
                  src={imagen16}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_248}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>

              <div className="relative w-[248px] aspect-square overflow-hidden rounded-none border-0 border-blue-500">
                <Image
                  fill
                  src={imagen17}
                  alt="Industrial construction"
                  className="object-cover object-center"
                  style={{filter: cssFilter}}
                  sizes={SIZES_248}
                />
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayColor, mixBlendMode: overlayBlendMode}}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </GridBackground>
  )
}
