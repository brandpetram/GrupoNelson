'use client'

/**
 * Mosaico 2
 *
 * Layout 50/50: Grid 2x2 a la izquierda + imagen grande a la derecha.
 * Componente simple sin props - editar directamente el contenido.
 */

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ImagenRectangulo } from '../ui/brandpetram/imagen-rectangulo'

export function Mosaico2() {
  return (
    <div className="flex flex-col 1024:flex-row gap-0">
      {/* Lado izquierdo: Grid 2x2 */}
      <div className="w-full 1024:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Bloque 1: Oscuro con CTA */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.90 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="aspect-square bg-slate-900 text-white p-6 md:p-8 1024:p-10 flex flex-col justify-center items-start text-left will-change-transform"
          >
            <h3 className="text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg font-bold tracking-wide uppercase 1200:leading-none">
              Conveyor Industrial
            </h3>
            <p className="mt-2 md:mt-3 text-lg md:text-xl 1024:text-lg 1024:text-2xl 1200:text-lg 1280:text-lg 1920:text-2xl font-normal leading-tight 1024:leading-none 1200:leading-none 1280:leading-normal text-balance max-w-xs">
              Diseño e Instalación de Sistemas Conveyor
            </p>
            <Link
              href="#"
              className="mt-4 md:mt-5 text-sm md:text-base 1024:text-base 1920:text-base font-extrabold tracking-widest uppercase text-yellow-400 transition-opacity hover:opacity-80"
            >
              Ver Más
            </Link>
          </motion.div>

          {/* Bloque 2: Imagen */}
          <ImagenRectangulo
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-273.jpg"
            alt="Lorem ipsum"
            className="aspect-square"
          />

          {/* Bloque 3: Imagen */}
          <ImagenRectangulo
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-274.jpg"
            alt="Lorem ipsum"
            className="aspect-square"
          />

          {/* Bloque 4: Naranja con CTA */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.90 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="aspect-square bg-linear-to-r from-orange-600 to-red-600 text-white p-6 md:p-8 1024:p-10 flex flex-col justify-center items-center text-center will-change-transform"
          >
            <h3 className="text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg font-bold tracking-wide uppercase 1200:leading-none">
              ¿Tienes preguntas?
            </h3>
            <p className="mt-2 md:mt-3 text-lg md:text-xl 1024:text-lg 1024:text-2xl 1200:text-lg 1280:text-lg 1920:text-2xl font-normal leading-tight 1024:leading-none 1200:leading-none 1280:leading-normal text-balance max-w-xs">
              Contáctanos ahora para resolver tus preguntas
            </p>
            <Link
              href="#"
              className="mt-4 md:mt-5 text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-lg 1440:text-lg 1536:text-lg 1728:text-xl 1920:text-xl font-bold transition-opacity hover:opacity-80 inline-flex items-center gap-2"
            >
              <span>Contactar Aquí</span>
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Lado derecho: Imagen grande con motion */}
      <div className="w-full 1024:w-1/2">
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.90 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="h-full will-change-transform"
        >
          <ImagenRectangulo
            src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-275.jpg"
            alt="Lorem ipsum"
            className="aspect-square 1024:aspect-auto 1024:h-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
