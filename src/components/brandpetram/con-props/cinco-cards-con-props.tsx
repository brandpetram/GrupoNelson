/**
 * CincoCardsConProps - Componente único e irrepetible
 *
 * Cinco cards con video/imagen y texto superpuesto.
 * Solo contenido es configurable (títulos, botones, media).
 */

'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface CincoCardsConPropsProps {
  // Card 1
  card1Titulo?: ReactNode
  card1BotonTexto?: string
  card1BotonHref?: string
  card1ImagenSrc?: string
  card1ImagenAlt?: string
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

  // Card 4
  card4Titulo?: ReactNode
  card4BotonTexto?: string
  card4BotonHref?: string
  card4ImagenSrc?: string
  card4ImagenAlt?: string

  // Card 5
  card5Titulo?: ReactNode
  card5BotonTexto?: string
  card5BotonHref?: string
  card5ImagenSrc?: string
  card5ImagenAlt?: string
  mostrarCard5?: boolean
  lang?: 'en' | 'es'
}

export function CincoCardsConProps({
  card1Titulo = <>Card<br/>Uno</>,
  card1BotonTexto = "Ver más",
  card1BotonHref = "#",
  card1ImagenSrc = "",
  card1ImagenAlt = "",
  card1VideoSrc = "",
  card1VideoPoster = "",
  card2Titulo = <>Card<br/>Dos</>,
  card2BotonTexto = "Ver más",
  card2BotonHref = "#",
  card2ImagenSrc = "/brandpetram/imagen-de-template-1.jpg",
  card2ImagenAlt = "Card 2",
  card3Titulo = <>Card<br/>Tres</>,
  card3BotonTexto = "Ver más",
  card3BotonHref = "#",
  card3ImagenSrc = "/brandpetram/imagen-de-template-2.jpg",
  card3ImagenAlt = "Card 3",
  card4Titulo = <>Card<br/>Cuatro</>,
  card4BotonTexto = "Ver más",
  card4BotonHref = "#",
  card4ImagenSrc = "/brandpetram/imagen-de-template-3.jpg",
  card4ImagenAlt = "Card 4",
  card5Titulo = <>Card<br/>Cinco</>,
  card5BotonTexto = "Ver más",
  card5BotonHref = "#",
  card5ImagenSrc = "/brandpetram/imagen-de-template-4.jpg",
  card5ImagenAlt = "Card 5",
  mostrarCard5 = true,
}: CincoCardsConPropsProps) {
  return (
    <div data-component="CincoCardsConProps" data-component-file="src/components/brandpetram/con-props/cinco-cards-con-props.tsx" data-component-props="true" className="w-full px-6 md:px-6 1200:px-6 relative z-0 md:overflow-x-auto 1200:overflow-x-visible">
      <motion.div
        className="flex flex-col md:flex-row gap-4 md:gap-4 1024:gap-6 1200:gap-6 lg:gap-8"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.15, 1] }}
      >

        {/* Card 1 - Video */}
        <div className="flex-1 md:flex-none md:w-[180px] 1024:w-[200px] 1200:flex-1 1200:w-auto flex flex-col shrink-0">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-4 md:p-6 lg:p-8 flex flex-col justify-end h-[180px] 1280:h-[220px] rounded-t-sm">
            <h3 className="text-2xl md:text-base 1024:text-base 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-3xl font-normal text-white leading-none mb-4">
              {card1Titulo}
            </h3>
            <a href={card1BotonHref} className="flex items-center gap-2 text-white font-bold text-base md:text-sm 1024:text-sm 1200:text-sm 1280:text-sm 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg group">
              <span>{card1BotonTexto}</span>
              <ArrowRight className="w-5 h-5 md:w-4 md:h-4 1200:w-5 1200:h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>
          <div className="relative aspect-square bg-black">
            {card1VideoSrc ? (
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false} poster={card1VideoPoster}>
                <source src={card1VideoSrc} type="video/mp4" />
              </video>
            ) : (
              <img src={card1ImagenSrc} alt={card1ImagenAlt} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* Card 2 - Imagen */}
        <div className="flex-1 md:flex-none md:w-[180px] 1024:w-[200px] 1200:flex-1 1200:w-auto flex flex-col shrink-0">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 md:p-6 lg:p-8 flex flex-col justify-end h-[180px] 1280:h-[220px] rounded-t-sm">
            <h3 className="text-2xl md:text-base 1024:text-base 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-3xl font-normal text-white leading-none mb-4">
              {card2Titulo}
            </h3>
            <a href={card2BotonHref} className="flex items-center gap-2 text-white font-bold text-base md:text-sm 1024:text-sm 1200:text-sm 1280:text-sm 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg group">
              <span>{card2BotonTexto}</span>
              <ArrowRight className="w-5 h-5 md:w-4 md:h-4 1200:w-5 1200:h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image src={card2ImagenSrc} alt={card2ImagenAlt} fill className="object-cover" />
          </div>
        </div>

        {/* Card 3 - Imagen */}
        <div className="flex-1 md:flex-none md:w-[180px] 1024:w-[200px] 1200:flex-1 1200:w-auto flex flex-col shrink-0">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-4 md:p-6 lg:p-8 flex flex-col justify-end h-[180px] 1280:h-[220px] rounded-t-sm">
            <h3 className="text-2xl md:text-base 1024:text-base 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-3xl font-normal text-white leading-none mb-4">
              {card3Titulo}
            </h3>
            <a href={card3BotonHref} className="flex items-center gap-2 text-white font-bold text-base md:text-sm 1024:text-sm 1200:text-sm 1280:text-sm 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg group">
              <span>{card3BotonTexto}</span>
              <ArrowRight className="w-5 h-5 md:w-4 md:h-4 1200:w-5 1200:h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image src={card3ImagenSrc} alt={card3ImagenAlt} fill className="object-cover" />
          </div>
        </div>

        {/* Card 4 - Imagen */}
        <div className="flex-1 md:flex-none md:w-[180px] 1024:w-[200px] 1200:flex-1 1200:w-auto flex flex-col shrink-0">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-4 md:p-6 lg:p-8 flex flex-col justify-end h-[180px] 1280:h-[220px] rounded-t-sm">
            <h3 className="text-2xl md:text-base 1024:text-base 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-3xl font-normal text-white leading-none mb-4">
              {card4Titulo}
            </h3>
            <a href={card4BotonHref} className="flex items-center gap-2 text-white font-bold text-base md:text-sm 1024:text-sm 1200:text-sm 1280:text-sm 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg group">
              <span>{card4BotonTexto}</span>
              <ArrowRight className="w-5 h-5 md:w-4 md:h-4 1200:w-5 1200:h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image src={card4ImagenSrc} alt={card4ImagenAlt} fill className="object-cover" />
          </div>
        </div>

        {/* Card 5 - Imagen */}
        {mostrarCard5 && <div className="flex-1 md:flex-none md:w-[180px] 1024:w-[200px] 1200:flex-1 1200:w-auto flex flex-col shrink-0">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-6 lg:p-8 flex flex-col justify-end h-[180px] 1280:h-[220px] rounded-t-sm">
            <h3 className="text-2xl md:text-base 1024:text-base 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-3xl font-normal text-white leading-none mb-4">
              {card5Titulo}
            </h3>
            <a href={card5BotonHref} className="flex items-center gap-2 text-white font-bold text-base md:text-sm 1024:text-sm 1200:text-sm 1280:text-sm 1366:text-base 1440:text-base 1536:text-base 1728:text-lg 1920:text-lg group">
              <span>{card5BotonTexto}</span>
              <ArrowRight className="w-5 h-5 md:w-4 md:h-4 1200:w-5 1200:h-5 transition-transform group-hover:translate-x-2" strokeWidth={3} />
            </a>
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image src={card5ImagenSrc} alt={card5ImagenAlt} fill className="object-cover" />
          </div>
        </div>}

      </motion.div>
    </div>
  )
}
