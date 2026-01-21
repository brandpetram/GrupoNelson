/**
 * Hero Marketing 1 - Versión con Video
 *
 * Hero con video de fondo y caja de texto superpuesta.
 * Modelo: Cero props - el cliente copia y edita directamente.
 *
 * PLACEHOLDERS A EDITAR:
 * - Video: src y poster en la sección de video
 * - Título: texto en el h2
 * - Textos: los párrafos <p>
 * - Color línea: clase bg-* en el div de línea decorativa
 */

'use client'

import { useState, useRef, useEffect, useId } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

export function HeroMarketing1Video() {
  // ============================================
  // VIDEO - Estado y refs para lazy loadingÏ
  // ============================================
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ============================================
  // GRID - ID único para el patrón SVG
  // ============================================
  const patternId = useId()

  return (
    <div className="max-w-screen-3xl mx-auto px-4 sm:px-12 lg:px-12">
      {/* Video de fondo con overlay y grid */}
      <div className="relative bg-background">
        <motion.div
          ref={containerRef}
          className="overflow-hidden relative aspect-square md:aspect-4/3 1200:aspect-video rounded-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Poster mientras no carga el video */}
          {!shouldLoadVideo ? (
            <Image
              src="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-262.jpg"
              alt=""
              width={1200}
              height={675}
              className="size-full object-cover"
            />
          ) : (
            <video
              src="/parques-industriales-mexicali-nelson-2.mp4"
              poster="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-262.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover"
            />
          )}

          {/* Overlay oscuro - editar opacity */}
          <div
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: 0.5 }}
            aria-hidden="true"
          />

          {/* Grid overlay animado */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          >
            <svg
              aria-hidden="true"
              className="absolute inset-0 z-10 pointer-events-none w-full h-full stroke-white/30"
              style={{
                maskImage: 'radial-gradient(24rem 24rem at center, white, transparent)',
                WebkitMaskImage: 'radial-gradient(24rem 24rem at center, white, transparent)',
              }}
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id={patternId}
                  width={100}
                  height={100}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 100V.5H100" fill="none" />
                </pattern>
              </defs>

              {/* Cuadrados destacados */}
              <svg x="50%" y={-1} className="overflow-visible fill-white/10">
                <path
                  d="M-100 0h101v101h-101Z M300 0h101v101h-101Z M-200 300h101v101h-101Z M100 400h101v101h-101Z"
                  strokeWidth={0}
                />
              </svg>

              <rect
                fill={`url(#${patternId})`}
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Caja de texto superpuesta */}
      <motion.div
        className="relative z-10 max-w-7xl w-11/12  mx-auto 360:-mt-[10rem] 393:-mt-[13rem] 430:-mt-[12rem] 1024:-mt-[18rem]  1366:-mt-[28rem]  1440:-mt-[25rem] 1536:-mt-[28rem] 1920:-mt-[34rem] "
        initial={{ opacity: 0, y: 320 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 1, ease: 'easeOut' }}
      >
        <div className="py-12 md:py-16 lg:py-20 bg-background/80 mx-auto px-6 lg:px-32 rounded-none">
          <div className="mx-auto max-w-4xl 2xl:max-w-4xl ">
            <h2 className="font-extrabold tracking-tight text-center text-foreground text-4xl md:text-7xl  2xl:text-7xl leading-none text-balance">
              Conveyors Industriales en Todo México
            </h2>

            <div className="flex justify-center mt-6 md:mt-8">
              <div className="h-1 w-full bg-orange-600" />
            </div>

              <div className="space-y-6 text-muted-foreground leading-snug text-lg mt-8 393:text-xl 430:text-2xl 768:text-2xl 834:text-2xl 1024:text-2xl 1200:text-2xl 1280:text-2xl 1366:text-2xl 1440:text-2xl 1536:text-3xl 1728:text-3xl 1920:text-3xl">
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
