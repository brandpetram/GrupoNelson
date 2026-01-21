/**
 * Masonry Grid 4 Columnas
 * Componente de grid tipo masonry con elementos de diferentes tamaños:
 * - Imágenes rectangulares (verticales, cuadradas, horizontales)
 * - Cajas de texto con gradientes
 *
 * Animación: Las columnas entran una por una de arriba hacia abajo al entrar en viewport
 */

'use client'

import { motion } from 'motion/react'

export function Masonry1() {

  return (
    <div className="container mx-auto px-4 w-11/12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

        {/* COLUMNA 1 */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
        >
          {/* Item 1 - Imagen (más alto que ancho) */}
          <div className="relative aspect-[1.5/2] rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-281.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item 5 - Imagen cuadrada */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-274.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item 9 - Imagen cuadrada (nueva) */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* COLUMNA 2 */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Item 2 - Texto Tipo 1 (Industrial style) - cuadrado */}
          <div className="bg-gradient-to-bl from-orange-500 to-red-600 aspect-square grid place-items-center rounded-none">
            <div className="flex flex-col mx-auto gap-3 md:gap-7 lg:gap-3 xl:gap-5 2xl:gap-10 w-9/12 md:w-7/12 lg:w-8/12 xl:w-7/12 text-xs 430:text-md md:text-2xl 1024:text-3xl 1200:text-lg 1536:text-xl 1920:text-2xl">
              <p className="text-white font-bold tracking-wider uppercase">
                Naves Industriales
              </p>
              <p className="text-white leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-white">
                Cotiza Aquí →
              </p>
            </div>
          </div>

          {/* Item 6 - Imagen cuadrada */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-276.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item 10 - Imagen cuadrada (nueva) */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-277.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item 11 - Texto Tipo 2 (nueva) */}
          <div className="bg-gradient-to-bl from-orange-500 to-red-600 aspect-square grid place-items-center rounded-none">
            <div className="flex flex-col mx-auto gap-3 md:gap-7 lg:gap-3 xl:gap-5 2xl:gap-10 w-9/12 md:w-7/12 lg:w-8/12 xl:w-7/12 text-xs 430:text-md md:text-2xl 1024:text-3xl 1200:text-lg 1536:text-xl 1920:text-2xl">
              <p className="text-white font-bold tracking-wider uppercase">
                Soluciones
              </p>
              <p className="text-white leading-tight">
                Sistemas personalizados para tu línea de producción
              </p>
              <p className="text-white">
                Consulta →
              </p>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA 3 */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Item 3 - Imagen (más alto que ancho) */}
          <div className="relative aspect-[1.5/2] rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-278.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
              style={{ objectPosition: '80% 100%' }}
            />
          </div>

          {/* Item 7 - Imagen rectangular (más ancho que alto) */}
          <div className="relative aspect-video rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-279.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item 12 - Imagen cuadrada (nueva) */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-280.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* COLUMNA 4 */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          {/* Item 4 - Texto Tipo 2 (gradient style) */}
          <div className="relative w-full aspect-[1/2] overflow-hidden rounded-none bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="p-8 text-center">
              <p className="text-white font-light text-lg md:text-2xl leading-loose tracking-wide text-balance">
                Marcando el camino hacia lorem{' '}
                <span className="font-black">sostenible</span> ipsum dolor sit.
              </p>
            </div>
          </div>

          {/* Item 8 - Imagen cuadrada */}
          <div className="relative aspect-square rounded-none overflow-hidden">
            <img
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-281.jpg"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
