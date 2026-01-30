/**
 * Componente: mosaico-invertido-con-props.tsx
 * Creado: 27 de enero de 2026
 *
 * Layout 50/50 invertido: Imagen grande a la izquierda + Grid 2x2 a la derecha.
 * Versión con props para reutilización.
 */

'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ImagenRectangulo } from '../../ui/brandpetram/imagen-rectangulo'

interface MosaicoInvertidoConPropsProps {
  /** Título del bloque 1 (oscuro) */
  bloque1Titulo?: string
  /** Descripción del bloque 1 */
  bloque1Descripcion?: string
  /** Texto del link del bloque 1 */
  bloque1LinkTexto?: string
  /** URL del link del bloque 1 */
  bloque1LinkHref?: string

  /** Imagen del bloque 2 */
  bloque2ImagenSrc?: string
  /** Alt de la imagen del bloque 2 */
  bloque2ImagenAlt?: string

  /** Imagen del bloque 3 */
  bloque3ImagenSrc?: string
  /** Alt de la imagen del bloque 3 */
  bloque3ImagenAlt?: string

  /** Título del bloque 4 (naranja) */
  bloque4Titulo?: string
  /** Descripción del bloque 4 */
  bloque4Descripcion?: string
  /** Texto del link del bloque 4 */
  bloque4LinkTexto?: string
  /** URL del link del bloque 4 */
  bloque4LinkHref?: string

  /** Imagen grande del lado izquierdo */
  imagenIzquierdaSrc?: string
  /** Alt de la imagen izquierda */
  imagenIzquierdaAlt?: string
}

export function MosaicoInvertidoConProps({
  bloque1Titulo = "Conveyor Industrial",
  bloque1Descripcion = "Diseño e Instalación de Sistemas Conveyor",
  bloque1LinkTexto = "Ver Más",
  bloque1LinkHref = "#",

  bloque2ImagenSrc = "/brandpetram/imagen-de-template-2.jpg",
  bloque2ImagenAlt = "Instalación industrial",

  bloque3ImagenSrc = "/brandpetram/imagen-de-template-3.jpg",
  bloque3ImagenAlt = "Aire acondicionado industrial",

  bloque4Titulo = "¿Tienes preguntas?",
  bloque4Descripcion = "Contáctanos ahora para resolver tus preguntas",
  bloque4LinkTexto = "Contactar Aquí",
  bloque4LinkHref = "#",

  imagenIzquierdaSrc = "/brandpetram/imagen-de-template-1.jpg",
  imagenIzquierdaAlt = "Imagen destacada"
}: MosaicoInvertidoConPropsProps) {
  return (
    <div className="flex flex-col 1024:flex-row gap-0">
      {/* Lado izquierdo: Imagen grande con motion */}
      <div className="w-full 1024:w-1/2">
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.90 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="h-full will-change-transform"
        >
          <ImagenRectangulo
            src={imagenIzquierdaSrc}
            alt={imagenIzquierdaAlt}
            className="aspect-square 1024:aspect-auto 1024:h-full"
          />
        </motion.div>
      </div>

      {/* Lado derecho: Grid 2x2 */}
      <div className="w-full 1024:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Bloque 1: Oscuro con CTA (columna izquierda, fila superior) */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.90 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="aspect-square bg-slate-900 text-white p-6 md:p-8 1024:p-10 flex flex-col justify-center items-start text-left will-change-transform"
          >
            <h3 className="text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg font-bold tracking-wide uppercase 1200:leading-none">
              {bloque1Titulo}
            </h3>
            <p className="mt-2 md:mt-3 text-lg md:text-xl 1024:text-lg 1024:text-2xl 1200:text-lg 1280:text-lg 1920:text-2xl font-normal leading-tight 1024:leading-none 1200:leading-none 1280:leading-normal text-balance max-w-xs">
              {bloque1Descripcion}
            </p>
            <Link
              href={bloque1LinkHref}
              className="mt-4 md:mt-5 text-sm md:text-base 1024:text-base 1920:text-base font-extrabold tracking-widest uppercase text-yellow-400 transition-opacity hover:opacity-80"
            >
              {bloque1LinkTexto}
            </Link>
          </motion.div>

          {/* Bloque 2: Imagen (columna derecha, fila superior) */}
          <div className="aspect-square bg-linear-to-r from-orange-600 to-red-600 p-6 md:p-8 1024:p-10 flex items-center justify-center relative">
            {/* Triángulo SVG apuntando a la derecha */}
            <svg
              className="absolute left-0 top-1/4 -translate-y-1/2 w-4 h-8 md:w-6 md:h-12 1024:w-8 1024:h-16"
              viewBox="0 0 100 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="0,0 100,100 0,200"
                fill="#0f172a"
              />
            </svg>

            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.90 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full h-full bg-white p-4 md:p-6 1024:p-8 will-change-transform"
            >
              <ImagenRectangulo
                src={bloque2ImagenSrc}
                alt={bloque2ImagenAlt}
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* Bloque 4: Naranja con CTA (columna izquierda, fila inferior) */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.90 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="aspect-square bg-linear-to-r from-orange-600 to-red-600 text-white p-6 md:p-8 1024:p-10 flex flex-col justify-center items-center text-center will-change-transform"
          >
            <h3 className="text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg font-bold tracking-wide uppercase 1200:leading-none">
              {bloque4Titulo}
            </h3>
            <p className="mt-2 md:mt-3 text-lg md:text-xl 1024:text-lg 1024:text-2xl 1200:text-lg 1280:text-lg 1920:text-2xl font-normal leading-tight 1024:leading-none 1200:leading-none 1280:leading-normal text-balance max-w-xs">
              {bloque4Descripcion}
            </p>
            <Link
              href={bloque4LinkHref}
              className="mt-4 md:mt-5 text-base md:text-lg 1024:text-sm 1200:text-base 1280:text-base 1366:text-lg 1440:text-lg 1536:text-lg 1728:text-xl 1920:text-xl font-bold transition-opacity hover:opacity-80 inline-flex items-center gap-2"
            >
              <span>{bloque4LinkTexto}</span>
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* Bloque 3: Imagen (columna derecha, fila inferior) */}
          <ImagenRectangulo
            src={bloque3ImagenSrc}
            alt={bloque3ImagenAlt}
            className="aspect-square"
          />

        </div>
      </div>
    </div>
  )
}
