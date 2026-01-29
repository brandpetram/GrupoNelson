/**
 * TresCardsConProps - Componente único e irrepetible
 *
 * Tres cards con video/imagen y texto superpuesto.
 * Solo contenido es configurable (títulos, botones, media).
 */

'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface TresCardsConPropsProps {
  // Card 1
  card1Titulo?: ReactNode
  card1BotonTexto?: string
  card1BotonHref?: string
  card1VideoSrc?: string
  card1VideoPoster?: string

  // Card 2
  card2Titulo?: ReactNode
  card2BotonTexto?: string
  card2BotonHref?: string
  card2ImagenSrc?: string
  card2ImagenAlt?: string

  // Card 3
  card3Titulo?: ReactNode
  card3BotonTexto?: string
  card3BotonHref?: string
  card3ImagenSrc?: string
  card3ImagenAlt?: string
}

export function TresCardsConProps({
  card1Titulo = <>Proveeduría<br/>de Conveyors</>,
  card1BotonTexto = "Cotiza aquí",
  card1BotonHref = "#",
  card1VideoSrc = "/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico.mp4",
  card1VideoPoster = "/conveyors-industriales/videos/conveyors-industriales-de-banda-en-todo-mexico-poster.jpg",
  card2Titulo = <>Ingeniería y<br/>Proyectos<br/>con Conveyors</>,
  card2BotonTexto = "Cotiza aquí",
  card2BotonHref = "#",
  card2ImagenSrc = "/conveyors-industriales/img/conveyors-industriales-de-banda-en-mexico-12.jpg",
  card2ImagenAlt = "Ingeniería y Proyectos con Conveyors",
  card3Titulo = <>Servicio<br/>y Refacciones<br/>para Conveyors</>,
  card3BotonTexto = "Cotiza aquí",
  card3BotonHref = "#",
  card3ImagenSrc = "/conveyors-industriales/img/conveyors-industriales-de-banda-en-mexico-14.jpg",
  card3ImagenAlt = "Servicio y Refacciones para Conveyors",
}: TresCardsConPropsProps) {
  return (
    <div className="w-full px-6 810:px-12 1024:px-16 relative z-0">
      <motion.div
        className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-280"
        initial={{ y: 600, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.15, 1] }}
      >

        {/* Card 1 - Video */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              {card1Titulo}
            </h3>

            <a href={card1BotonHref} className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>{card1BotonTexto}</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>

          {/* Área de video - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              poster={card1VideoPoster}
            >
              <source src={card1VideoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Card 2 - Imagen */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              {card2Titulo}
            </h3>

            <a href={card2BotonHref} className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>{card2BotonTexto}</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>

          {/* Área de imagen - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-gray-200">
            <Image
              src={card2ImagenSrc}
              alt={card2ImagenAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Card 3 - Imagen */}
        <div className="flex-1 flex flex-col">
          {/* Área de texto - altura fija para alineación */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 md:p-10 lg:p-12 flex flex-col justify-end h-[230px] 1280:h-[280px] rounded-t-sm">
            <h3 className="text-3xl md:text-lg 1024:text-lg 1200:text-2xl 1280:text-2xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-4xl 1920:text-4xl font-normal text-white leading-none mb-8">
              {card3Titulo}
            </h3>

            <a href={card3BotonHref} className="flex items-center gap-3 text-white font-bold text-xl md:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-2xl group">
              <span>{card3BotonTexto}</span>
              <ArrowRight className="w-8 h-8 md:w-7 md:h-7 1200:w-10 1200:h-10 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>

          {/* Área de imagen - aspect ratio cuadrado sin rounded */}
          <div className="relative aspect-square bg-gray-200">
            <Image
              src={card3ImagenSrc}
              alt={card3ImagenAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

      </motion.div>
    </div>
  )
}
