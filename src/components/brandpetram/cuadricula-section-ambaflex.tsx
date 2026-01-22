'use client'

import { Grid as GridBackground } from '@/components/ui/brandpetram/grid'
import { GradientBlob } from '@/components/ui/brandpetram/gradient-blob'
import { motion, type Variants } from 'motion/react'

/**
 * NOMBRE: cuadricula-section-1.tsx
 * DESCRIPCIÓN: Hero con contenido izquierdo y cuadrícula de imágenes derecha (fija)
 *
 * EDITAR CONTENIDO:
 * - Edita el título y párrafo directamente en el JSX
 * - Edita las rutas de las imágenes en las constantes imageUrl1-20 (líneas 68-87)
 *
 * CONTROLAR ESCALA DEL MOSAICO:
 * - Edita las variables de escala por breakpoint (líneas 162-176)
 * - Valores: 1 = 100% (tamaño original), 0.8 = 80%, 0.5 = 50%, 0.35 = 35%
 * - mosaicScale360: ≥ 360px (móviles pequeños)
 * - mosaicScale393: ≥ 393px
 * - mosaicScale430: ≥ 430px
 * - mosaicScale768: ≥ 768px (tablet)
 * - mosaicScale834: ≥ 834px
 * - mosaicScale1024: ≥ 1024px
 * - mosaicScale1200: ≥ 1200px
 * - mosaicScale1280: ≥ 1280px
 * - mosaicScale1366: ≥ 1366px
 * - mosaicScale1440: ≥ 1440px
 * - mosaicScale1536: ≥ 1536px
 * - mosaicScale1728: ≥ 1728px
 * - mosaicScale1920: ≥ 1920px (Full HD)
 * - mosaicScale2240: ≥ 2240px
 * - mosaicScale2560: ≥ 2560px (4K)
 *
 * CONTROLAR BORDES:
 * - showBorders (línea 102): true/false para mostrar/ocultar bordes
 * - borderWidth (línea 103): 'border' (1px), 'border-2' (2px), 'border-4' (4px), 'border-8' (8px)
 * - borderColor (línea 104): Cualquier clase de color de Tailwind (ej: 'border-orange-600')
 *
 * CONTROLAR FILTROS Y OVERLAY POR IMAGEN:
 * Edita cada filtro independientemente. Ejemplos:
 * - '' (sin filtro)
 * - 'hue-rotate(200deg)' (más azulado)
 * - 'hue-rotate(-20deg)' (más cálido/naranjo)
 * - 'saturate(1.3) brightness(1.1)' (más saturado y brillante)
 *
 * OVERLAY: Color semi-transparente encima. Formato: 'rgba(r, g, b, opacity)'
 * - 'rgba(100, 180, 255, 0.15)' (azul suave)
 * - 'rgba(255, 150, 100, 0.1)' (naranja suave)
 * - 'rgba(50, 150, 100, 0.12)' (verde agua suave)
 * - '' (sin overlay)
 */

// Filtros de imagen (ordenados por columna: izquierda→derecha, arriba→abajo)
// Ejemplo: 'brightness(1.15) saturate(1.15) contrast(1.05)'
// COLUMNA 1
const filterImage1 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
// COLUMNA 2
const filterImage2 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage3 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage4 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
// COLUMNA 3
const filterImage5 = 'brightness(1.15) saturate(1.15) contrast(1.05)'
const filterImage6 = 'brightness(1.2) saturate(1.3) contrast(1.1)'
const filterImage7 = 'brightness(1.15) saturate(1.15) contrast(1.05)'
const filterImage8 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage9 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage10 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage11 = 'brightness(1.15) saturate(1.15) contrast(1.05)'
// COLUMNA 4
const filterImage12 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage13 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage14 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage15 = 'brightness(1.10) saturate(1.15) contrast(1.05)' // ★ PRINCIPAL
const filterImage16 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage17 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
// COLUMNA 5
const filterImage18 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage19 = 'brightness(1.10) saturate(1.15) contrast(1.05)'
const filterImage20 = 'brightness(1.10) saturate(1.15) contrast(1.05)'

// Posición de las imágenes (ordenadas por columna: izquierda→derecha, arriba→abajo)
// Opciones: 'object-center', 'object-top', 'object-bottom', 'object-left', 'object-right',
//           'object-left-top', 'object-right-top', 'object-left-bottom', 'object-right-bottom'
// COLUMNA 1
const posImage1 = 'object-center'
// COLUMNA 2
const posImage2 = 'object-center'
const posImage3 = 'object-center'
const posImage4 = 'object-center'
// COLUMNA 3
const posImage5 = 'object-center'
const posImage6 = 'object-center'
const posImage7 = 'object-center'
const posImage8 = 'object-center'
const posImage9 = 'object-center'
const posImage10 = 'object-center'
const posImage11 = 'object-center'
// COLUMNA 4
const posImage12 = 'object-center'
const posImage13 = 'object-center'
const posImage14 = 'object-center'
const posImage15 = 'object-center' // ★ PRINCIPAL
const posImage16 = 'object-center'
const posImage17 = 'object-center'
// COLUMNA 5
const posImage18 = 'object-center'
const posImage19 = 'object-center'
const posImage20 = 'object-center'

// Overlays de color (ordenados por columna: izquierda→derecha, arriba→abajo)
// Blend modes: 'normal' (pastel suave), 'multiply' (oscuro/saturado), 'screen' (claro)
// 'overlay' (contraste), 'darken', 'lighten'
const overlayBlendMode = 'multiply' // Cambia aquí el modo

// COLUMNA 1
const overlayImage1 = 'rgba(100, 150, 250, 0.5)'
// COLUMNA 2
const overlayImage2 = 'rgba(100, 150, 250, 0.5)'
const overlayImage3 = 'rgba(100, 150, 250, 0.5)'
const overlayImage4 = 'rgba(100, 150, 250, 0.5)'
// COLUMNA 3
const overlayImage5 = 'rgba(100, 150, 250, 0.5)'
const overlayImage6 = 'rgba(100, 150, 250, 0.5)'
const overlayImage7 = 'rgba(100, 150, 250, 0.4)'
const overlayImage8 = 'rgba(100, 150, 250, 0.5)'
const overlayImage9 = 'rgba(100, 150, 250, 0.5)'
const overlayImage10 = 'rgba(100, 150, 250, 0.5)'
const overlayImage11 = 'rgba(100, 150, 250, 0.5)'
// COLUMNA 4
const overlayImage12 = 'rgba(100, 150, 250, 0.5)'
const overlayImage13 = 'rgba(100, 150, 250, 0.5)'
const overlayImage14 = 'rgba(100, 150, 250, 0.5)'
const overlayImage15 = 'rgba(100, 150, 250, 0.5)' // ★ PRINCIPAL
const overlayImage16 = 'rgba(100, 150, 250, 0.5)'
const overlayImage17 = 'rgba(100, 150, 250, 0.5)'
// COLUMNA 5
const overlayImage18 = 'rgba(100, 150, 250, 0.5)'
const overlayImage19 = 'rgba(100, 150, 250, 0.5)'
const overlayImage20 = 'rgba(100, 150, 250, 0.5)'

// Rutas de las imágenes (ordenadas por columna: izquierda→derecha, arriba→abajo)
// COLUMNA 1: img1
const imageUrl1 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-251.jpg'
// COLUMNA 2: img2, img3, img4
const imageUrl2 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-252.jpg'
const imageUrl3 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-253.jpg'
const imageUrl4 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-254.jpg'
// COLUMNA 3: img5, img6, img7, img8, img9, img10, img11
const imageUrl5 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg'
const imageUrl6 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-256.jpg'
const imageUrl7 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-257.jpg'
const imageUrl8 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-258.jpg'
const imageUrl9 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-259.jpg'
const imageUrl10 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-260.jpg'
const imageUrl11 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-261.jpg'

// COLUMNA 4: img12, img13, img14, img15, img16, img17, img18
const imageUrl12 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-262.jpg'
const imageUrl13 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-263.jpg'
const imageUrl14 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-264.jpg'
const imageUrl15 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-265.jpg'
const imageUrl16 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-266.jpg'
const imageUrl17 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-267.jpg'
// COLUMNA 5: img18, img19, img20
const imageUrl18 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-268.jpg'
const imageUrl19 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-269.jpg'
const imageUrl20 = '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-270.jpg'

// CONTROL DE ESCALA DEL MOSAICO POR BREAKPOINT
// Escala todo el mosaico proporcionalmente en diferentes tamaños de pantalla
// Valores: 1 = 100% (tamaño original), 0.8 = 80%, 0.5 = 50%, etc.
const mosaicScale360 = 0.35      // ≥ 360px
const mosaicScale393 = 0.38      // ≥ 393px
const mosaicScale430 = 0.40      // ≥ 430px
const mosaicScale768 = 0.65      // ≥ 768px (tablet)
const mosaicScale834 = 0.80      // ≥ 834px
const mosaicScale1024 = 0.90     // ≥ 1024px
const mosaicScale1200 = 0.80     // ≥ 1200px
const mosaicScale1280 = 0.85     // ≥ 1280px
const mosaicScale1366 = 0.85     // ≥ 1366px
const mosaicScale1440 = 0.95     // ≥ 1440px
const mosaicScale1536 = 0.90     // ≥ 1536px
const mosaicScale1728 = 1.1     // ≥ 1728px
const mosaicScale1920 = 1.2     // ≥ 1920px
const mosaicScale2240 = 0.95     // ≥ 2240px
const mosaicScale2560 = 1.00     // ≥ 2560px (4K)

// CONTROL DE GAPS (espacios entre imágenes)
const imageGap = 'gap-1' // Espaciado entre todas las imágenes. Opciones: 'gap-0', 'gap-px', 'gap-0.5', 'gap-1'

// CONTROL DE BORDES
// Encender/apagar los bordes de las imágenes (útil para debug o diseño)
const showBorders = true // true = mostrar bordes, false = ocultar
const borderWidth = 'border-0' // Opciones: 'border' (1px), 'border-2' (2px), 'border-4' (4px), 'border-8' (8px)
const borderColor = 'border-blue-500' // Color del borde (cualquier clase de Tailwind)

export function CuadriculaSectionAmbaflex() {
  // Clase de bordes condicional
  const borderClass = showBorders ? `${borderWidth} ${borderColor}` : ''

  // Variantes de animación para las columnas
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Retraso entre cada columna
      }
    }
  }

  const columnVariants: Variants = {
    hidden: {
      x: 300, // Aumentado de 100 a 300 para entrada desde más lejos
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
          zoom: ${mosaicScale360};
        }
        @media (min-width: 393px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale393};
          }
        }
        @media (min-width: 430px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale430};
          }
        }
        @media (min-width: 768px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale768};
          }
        }
        @media (min-width: 834px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale834};
          }
        }
        @media (min-width: 1024px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1024};
          }
        }
        @media (min-width: 1200px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1200};
          }
        }
        @media (min-width: 1280px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1280};
          }
        }
        @media (min-width: 1366px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1366};
          }
        }
        @media (min-width: 1440px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1440};
          }
        }
        @media (min-width: 1536px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1536};
          }
        }
        @media (min-width: 1728px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1728};
          }
        }
        @media (min-width: 1920px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale1920};
          }
        }
        @media (min-width: 2240px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale2240};
          }
        }
        @media (min-width: 2560px) {
          .cuadricula-zoom {
            zoom: ${mosaicScale2560};
          }
        }
      `}</style>

      {/* Nube de gradiente decorativa */}
      <GradientBlob />

      {/* Contenedor flex para dividir en dos columnas */}
      <div className=" -translate-y-18 md:translate-y-0 relative isolate z-20 flex flex-col 1200:flex-row min-h-screen 1200:items-center justify-start 1200:justify-between w-full py-0 px-0 1280:pl-12 1366:pl-14 md:py-0 1200:-translate-y-20 1280:translate-y-0">
        {/* Columna izquierda - Contenido de texto */}
        <div className="md:-mr-120 order-2 md:order-1 relative z-20 1280:max-w-2xl 1728:max-w-4xl p-5 md:p-10 1280:p-0 1200:-translate-y-20 1280:-translate-y-28 1366:-translate-y-28  1440:-translate-y-40 1536:-translate-y-24 1728:-translate-y-40 1920:-translate-y-56 1920:translate-x-10">

          <span className="rounded-xl bg-orange-700/10 px-4 py-2 text-xs lg:text-lg font-semibold leading-6 text-red-600  ring-1 ring-inset ring-red-500/20">Expertos en soluciones y sistemas de</span>
          <h1 className="mt-4 md:mt-5  text-3xl 393:text-4xl 430:text-5xl md:text-6xl 1024:text-7xl 1536:text-8xl font-extrabold text-foreground mb-6 leading-none tracking-tighter">
           Conveyors Ambaflex <br/> en todo México
          </h1>
          <p className="md:max-w-xl -mt-3 md:mt-0 1200:w-9/12 430:text-xl 1024:text-2xl 1728:text-2xl text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="flex flex-col md:max-w-[18rem] 1024:max-w-sm 1200:flex-row md:w-2/12 834:w-2/12 1024:w-2/12 1200:w-full gap-4 md:-mr-[7rem] text-xs 360:text-sm 393:text-lg">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-500 transition">
              Contáctanos
            </button>
            <button className="px-6 py-3 bg-transparent text-foreground border border-border rounded-lg font-semibold hover:bg-muted transition">
              Conoce más →
            </button>
          </div>
        </div>

        {/* Columna derecha - Cuadrícula */}
        <div className="w-fit cuadricula-zoom ml-auto md:-translate-y-64 834:-translate-y-48 1024:-translate-y-50 1200:-translate-y-0 1200:translate-x-32 1280:translate-x-20 1366:translate-x-0 order-1">
        {/* ====== CUADRÍCULA (5 columnas de izquierda a derecha) ====== */}
        <motion.div
          className="flex gap-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* COLUMNA 1: img1 - imagen vertical (aspect 1/2) - 136.62px */}
          <motion.div className="flex flex-col place-content-end" variants={columnVariants}>
            <div className={`relative w-[136.62px] aspect-[1/2] overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl1}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage1}`}
                style={{filter: filterImage1}}
              />
              {overlayImage1 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage1, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
          </motion.div>

          {/* COLUMNA 2: img2, img3, img4 - 3 imágenes cuadradas apiladas - 126.62px */}
          <motion.div className="flex flex-col place-content-end gap-1" variants={columnVariants}>
            <div className={`relative w-[126.62px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl2}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage2}`}
                style={{filter: filterImage2}}
              />
              {overlayImage2 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage2, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
            <div className={`relative w-[126.62px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl3}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage3}`}
                style={{filter: filterImage3}}
              />
              {overlayImage3 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage3, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
            <div className={`relative w-[126.62px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl4}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage4}`}
                style={{filter: filterImage4}}
              />
              {overlayImage4 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage4, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
          </motion.div>

          {/* COLUMNA 3: img5-img11 - Estructura compleja - 330px de ancho total
              IMPORTANTE: Las primeras dos imágenes (172.5px) usan 'self-end' para alinearse a la DERECHA
              de la columna, no al inicio. */}
          <motion.div className="flex flex-col place-content-start gap-1" variants={columnVariants}>
            {/* img5 */}
            <div className={`relative w-[172.5px] aspect-square overflow-hidden rounded-none self-end ${borderClass}`}>
              <img
                src={imageUrl5}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage5}`}
                style={{filter: filterImage5}}
              />
              {overlayImage5 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage5, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>

            {/* img6 */}
            <div className={`relative w-[172.5px] aspect-square overflow-hidden rounded-none self-end ${borderClass}`}>
              <img
                src={imageUrl6}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage6}`}
                style={{filter: filterImage6}}
              />
              {overlayImage6 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage6, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
            <div className="flex flex-col ml-auto place-content-end place-items-end gap-1">
              {/* Bloque refactorizado con grid: imgs 7,8,9,10 con gaps horizontal y vertical */}
              <div className="grid grid-cols-[245.5px_80.5px] grid-rows-[80.5px_80.5px_80.5px] gap-1">
                {/* img7 ocupa las 3 filas - altura total 249.5px (no cuadrada) */}
                <div className={`relative row-span-3 overflow-hidden rounded-none ${borderClass}`}>
                  <img
                    src={imageUrl7}
                    alt="Lorem ipsum"
                    className={`w-full h-full object-cover ${posImage7}`}
                    style={{filter: filterImage7}}
                  />
                  {overlayImage7 && (
                    <div
                      className="absolute inset-0"
                      style={{backgroundColor: overlayImage7, mixBlendMode: overlayBlendMode}}
                    />
                  )}
                </div>

                {/* img8 en fila 1, columna 2 - 80.5px cuadrada */}
                <div className={`relative overflow-hidden rounded-none ${borderClass}`}>
                  <img
                    src={imageUrl8}
                    alt="Lorem ipsum"
                    className={`w-full h-full object-cover ${posImage8}`}
                    style={{filter: filterImage8}}
                  />
                  {overlayImage8 && (
                    <div
                      className="absolute inset-0"
                      style={{backgroundColor: overlayImage8, mixBlendMode: overlayBlendMode}}
                    />
                  )}
                </div>

                {/* img9 en fila 2, columna 2 - 80.5px cuadrada */}
                <div className={`relative overflow-hidden rounded-none ${borderClass}`}>
                  <img
                    src={imageUrl9}
                    alt="Lorem ipsum"
                    className={`w-full h-full object-cover ${posImage9}`}
                    style={{filter: filterImage9}}
                  />
                  {overlayImage9 && (
                    <div
                      className="absolute inset-0"
                      style={{backgroundColor: overlayImage9, mixBlendMode: overlayBlendMode}}
                    />
                  )}
                </div>

                {/* img10 en fila 3, columna 2 - 80.5px cuadrada */}
                <div className={`relative overflow-hidden rounded-none ${borderClass}`}>
                  <img
                    src={imageUrl10}
                    alt="Lorem ipsum"
                    className={`w-full h-full object-cover ${posImage10}`}
                    style={{filter: filterImage10}}
                  />
                  {overlayImage10 && (
                    <div
                      className="absolute inset-0"
                      style={{backgroundColor: overlayImage10, mixBlendMode: overlayBlendMode}}
                    />
                  )}
                </div>
              </div>

              {/* img11 - ajustado a 322px de altura para igualar altura total de columnas 3 y 4 */}
              <div className={`relative w-[330px] h-[322px] overflow-hidden rounded-none ${borderClass}`}>
                <img
                  src={imageUrl11}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage11}`}
                  style={{filter: filterImage11}}
                />
                {overlayImage11 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage11, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* COLUMNA 4: img12-img17 - 3 imágenes superiores + Imagen principal (500px) + 2 imágenes abajo (250px cada una) */}
          <motion.div className="flex flex-col place-content-end place-items-end gap-1" variants={columnVariants}>
            {/* img12, img13, img14 */}
            <div className="flex flex-row self-start gap-1">
              <div className={`relative w-[172.5px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
                <img
                  src={imageUrl12}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage12}`}
                  style={{filter: filterImage12}}
                />
                {overlayImage12 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage12, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>
              <div className={`relative w-[172.5px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
                <img
                  src={imageUrl13}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage13}`}
                  style={{filter: filterImage13}}
                />
                {overlayImage13 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage13, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>
              <div className={`relative w-[86.25px] aspect-square overflow-hidden rounded-none self-end ${borderClass}`}>
                <img
                  src={imageUrl14}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage14}`}
                  style={{filter: filterImage14}}
                />
                {overlayImage14 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage14, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>
            </div>

            {/* ★★★ img15 - IMAGEN PRINCIPAL ★★★ - La más grande del mosaico (500px) */}
            <div className={`relative w-[500px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl15}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage15}`}
                style={{filter: filterImage15}}
              />
              {overlayImage15 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage15, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>

            {/* img16, img17 - Dos imágenes debajo de la principal (248px cada una + 4px margin = 500px total) */}
            <div className="flex flex-row">
              {/* img16 - Imagen izquierda */}
              <div className={`relative w-[248px] aspect-square overflow-hidden rounded-none mr-1 ${borderClass}`}>
                <img
                  src={imageUrl16}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage16}`}
                  style={{filter: filterImage16}}
                />
                {overlayImage16 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage16, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>

              {/* img17 - Imagen derecha */}
              <div className={`relative w-[248px] aspect-square overflow-hidden rounded-none ${borderClass}`}>
                <img
                  src={imageUrl17}
                  alt="Lorem ipsum"
                  className={`w-full h-full object-cover ${posImage17}`}
                  style={{filter: filterImage17}}
                />
                {overlayImage17 && (
                  <div
                    className="absolute inset-0"
                    style={{backgroundColor: overlayImage17, mixBlendMode: overlayBlendMode}}
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* COLUMNA 5: img18, img19, img20 - 3 imágenes verticales (aspect 1/2) - 103.5px */}
          <motion.div className="flex flex-col place-content-end gap-1 hidden" variants={columnVariants}>
            {/* img18 */}
            <div className={`relative w-[103.5px] aspect-[1/2] overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl18}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage18}`}
                style={{filter: filterImage18}}
              />
              {overlayImage18 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage18, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
            {/* img19 */}
            <div className={`relative w-[103.5px] aspect-[1/2] overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl19}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage19}`}
                style={{filter: filterImage19}}
              />
              {overlayImage19 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage19, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
            {/* img20 */}
            <div className={`relative w-[103.5px] aspect-[1/2] overflow-hidden rounded-none ${borderClass}`}>
              <img
                src={imageUrl20}
                alt="Lorem ipsum"
                className={`w-full h-full object-cover ${posImage20}`}
                style={{filter: filterImage20}}
              />
              {overlayImage20 && (
                <div
                  className="absolute inset-0"
                  style={{backgroundColor: overlayImage20, mixBlendMode: overlayBlendMode}}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </GridBackground>
  )
}
