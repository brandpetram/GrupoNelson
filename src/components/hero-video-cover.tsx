"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GridOverlay } from "@/components/ui/grid"
import { motion, type TargetAndTransition, type Transition } from "motion/react"

interface GridConfig {
  strokeColor?: string
  gridSize?: number
  showHighlights?: boolean
  highlightColor?: string
  fadePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  fadeRadius?: string
  animate?: {
    initial?: TargetAndTransition
    animate?: TargetAndTransition
    transition?: Transition
  }
}

interface HeroVideoCoverProps {
  videoSrc: string
  posterSrc: string
  alt?: string
  overlayOpacity?: number
  className?: string
  children?: React.ReactNode
  /** Brillo del video (0.0 - 2.0, default: 1.0) */
  videoBrightness?: number
  /** Contraste del video (0.0 - 2.0, default: 1.0) */
  videoContrast?: number
  /** Oscurecimiento adicional sobre el video (0.0 - 1.0) */
  darkOverlay?: number
  /** Configuración del grid overlay */
  gridConfig?: GridConfig
}

export function HeroVideoCover({
  videoSrc,
  posterSrc,
  alt = "Hero background",
  overlayOpacity = 0.4,
  className = "",
  children,
  videoBrightness = 1.0,
  videoContrast = 1.0,
  darkOverlay,
  gridConfig,
}: HeroVideoCoverProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptPlay = async () => {
      if (hasStartedRef.current) return
      hasStartedRef.current = true

      try {
        video.muted = true
        video.playsInline = true
        const playPromise = video.play()

        if (playPromise !== undefined) {
          await playPromise
          setTimeout(() => {
            setIsVideoLoaded(true)
          }, 100)
        }
      } catch (error) {
        setIsVideoLoaded(true)
      }
    }

    const handleCanPlay = () => {
      if (!hasStartedRef.current && video.readyState >= 2) {
        attemptPlay()
      }
    }

    const handleCanPlayThrough = () => {
      if (!hasStartedRef.current) {
        attemptPlay()
      }
    }

    const handleLoadedData = () => {
      if (!hasStartedRef.current && video.readyState >= 2) {
        attemptPlay()
      }
    }

    if (video.readyState >= 2) {
      attemptPlay()
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("canplaythrough", handleCanPlayThrough)
    video.addEventListener("loadeddata", handleLoadedData)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  // Opacidades para el vignette (arriba y abajo oscuros, centro más claro)
  const edgeOpacity = Math.round(overlayOpacity * 100)
  const centerOpacity = Math.round(overlayOpacity * 0.3 * 100)

  return (
    <section className={`relative w-full h-screen overflow-hidden ${className}`} aria-label="Hero section">
      {/* Contenedor de aspecto fijo para prevenir CLS */}
      <div className="absolute inset-0">
        {/* Imagen estática - carga inmediatamente para FCP óptimo */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${posterSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label={alt}
        />

        {/* Video - transición suave */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            filter: `brightness(${videoBrightness}) contrast(${videoContrast})`,
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
          {"Tu navegador no soporta el elemento video."}
        </video>

        {/* Capa de oscurecimiento adicional (opcional) */}
        {darkOverlay !== undefined && darkOverlay > 0 && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${darkOverlay})` }}
            aria-hidden="true"
          />
        )}

        {/* Grid Overlay animado (opcional) */}
        {gridConfig && gridConfig.animate && (
          <motion.div
            className="absolute inset-0"
            initial={gridConfig.animate.initial}
            whileInView={gridConfig.animate.animate}
            viewport={{ once: true, margin: '-100px' }}
            transition={gridConfig.animate.transition}
          >
            <GridOverlay
              strokeColor={gridConfig.strokeColor || 'stroke-white/30'}
              gridSize={gridConfig.gridSize || 100}
              showHighlights={gridConfig.showHighlights ?? true}
              highlightColor={gridConfig.highlightColor}
              fadePosition={gridConfig.fadePosition}
              fadeRadius={gridConfig.fadeRadius}
            />
          </motion.div>
        )}

        {/* Grid Overlay sin animación (opcional) */}
        {gridConfig && !gridConfig.animate && (
          <GridOverlay
            strokeColor={gridConfig.strokeColor || 'stroke-white/30'}
            gridSize={gridConfig.gridSize || 100}
            showHighlights={gridConfig.showHighlights ?? true}
            highlightColor={gridConfig.highlightColor}
            fadePosition={gridConfig.fadePosition}
            fadeRadius={gridConfig.fadeRadius}
          />
        )}

        {/* Vignette: gradientes en top y bottom para contraste del nav y contenido */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(0,0,0,0.8) 0%,
                rgba(0,0,0,0) 30%,
                rgba(0,0,0,0) 70%,
                rgba(0,0,0,0.8) 100%
              )
            `,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {children}
        </div>
      </div>
    </section>
  )
}
