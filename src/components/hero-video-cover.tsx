"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GridOverlay } from "@/components/ui/grid"
import { motion, type TargetAndTransition, type Transition } from "motion/react"
import { cn } from "@/lib/utils"

interface GridConfig {
  strokeColor?: string
  gridSize?: number
  showHighlights?: boolean
  highlightColor?: string
  fadePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  fadeRadius?: string
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
  /** Filtros CSS del video en desktop - ej: 'brightness(1.10) saturate(1.15) contrast(1.05)' */
  videoFilterDesktop?: string
  /** Filtros CSS del video en móvil - ej: 'brightness(1.10) saturate(1.15) contrast(1.05)' */
  videoFilterMobile?: string
  /** Overlay de color sobre el video en desktop - ej: 'rgba(100, 150, 250, 0.5)' */
  videoOverlayDesktop?: string
  /** Overlay de color sobre el video en móvil - ej: 'rgba(100, 150, 250, 0.5)' */
  videoOverlayMobile?: string
  /** Modo de mezcla del overlay - ej: 'multiply', 'screen', 'overlay', 'normal' */
  videoOverlayBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten'
  /** Oscurecimiento adicional sobre el video (0.0 - 1.0) */
  darkOverlay?: number
  /** Oscurecimiento adicional solo en móvil (0.0 - 1.0) */
  darkOverlayMobile?: number
  /** Configuración del grid overlay para desktop */
  gridConfig?: GridConfig
  /** Configuración del grid overlay para móvil */
  gridConfigMobile?: GridConfig
  /** Habilitar animaciones de entrada (default: false) */
  enableAnimations?: boolean
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
  videoFilterDesktop,
  videoFilterMobile,
  videoOverlayDesktop,
  videoOverlayMobile,
  videoOverlayBlendMode = 'normal',
  darkOverlay,
  darkOverlayMobile,
  gridConfig,
  gridConfigMobile,
  enableAnimations = false,
}: HeroVideoCoverProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasStartedRef = useRef(false)

  // Variantes de animación similar a SDI
  const leftVariants = {
    hidden: { x: '-100vw' },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const rightVariants = {
    hidden: { x: '100vw' },
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

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

        {/* Video para móvil (con filtros mobile) */}
        {videoFilterMobile && (
          <>
            <video
              ref={videoRef}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out lg:hidden",
                isVideoLoaded ? "opacity-100" : "opacity-0"
              )}
              style={{
                filter: videoFilterMobile || `brightness(${videoBrightness}) contrast(${videoContrast})`,
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
            {videoOverlayMobile && (
              <div
                className="absolute inset-0 lg:hidden"
                style={{
                  backgroundColor: videoOverlayMobile,
                  mixBlendMode: videoOverlayBlendMode,
                }}
                aria-hidden="true"
              />
            )}
          </>
        )}

        {/* Video para desktop (con filtros desktop o fallback) */}
        <video
          ref={!videoFilterMobile ? videoRef : undefined}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
            videoFilterMobile && "max-lg:hidden",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            filter: videoFilterDesktop || `brightness(${videoBrightness}) contrast(${videoContrast})`,
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

        {/* Overlay de color para desktop */}
        {videoOverlayDesktop && (
          <div
            className={cn("absolute inset-0", videoOverlayMobile && "max-lg:hidden")}
            style={{
              backgroundColor: videoOverlayDesktop,
              mixBlendMode: videoOverlayBlendMode,
            }}
            aria-hidden="true"
          />
        )}

        {/* Capa de oscurecimiento adicional (opcional) */}
        {darkOverlay !== undefined && darkOverlay > 0 && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${darkOverlay})` }}
            aria-hidden="true"
          />
        )}

        {/* Capa de oscurecimiento adicional solo en móvil */}
        {darkOverlayMobile !== undefined && darkOverlayMobile > 0 && (
          <div
            className="absolute inset-0 lg:hidden"
            style={{ backgroundColor: `rgba(0, 0, 0, ${darkOverlayMobile})` }}
            aria-hidden="true"
          />
        )}

        {/* Grid Overlay - entra desde la derecha si enableAnimations */}
        {enableAnimations && (
          <>
            {/* Grid para móvil */}
            {gridConfigMobile && (
              <motion.div
                className="absolute inset-0 lg:hidden"
                initial="hidden"
                animate="visible"
                variants={rightVariants}
              >
                <GridOverlay
                  strokeColor={gridConfigMobile.strokeColor || 'stroke-white/30'}
                  gridSize={gridConfigMobile.gridSize || 100}
                  showHighlights={gridConfigMobile.showHighlights ?? true}
                  highlightColor={gridConfigMobile.highlightColor}
                  fadePosition={gridConfigMobile.fadePosition}
                  fadeRadius={gridConfigMobile.fadeRadius}
                />
              </motion.div>
            )}
            {/* Grid para desktop */}
            {gridConfig && (
              <motion.div
                className={cn("absolute inset-0", gridConfigMobile && "max-lg:hidden")}
                initial="hidden"
                animate="visible"
                variants={rightVariants}
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
          </>
        )}

        {/* Grid Overlay sin animación */}
        {!enableAnimations && (
          <>
            {/* Grid para móvil */}
            {gridConfigMobile && (
              <div className="absolute inset-0 lg:hidden">
                <GridOverlay
                  strokeColor={gridConfigMobile.strokeColor || 'stroke-white/30'}
                  gridSize={gridConfigMobile.gridSize || 100}
                  showHighlights={gridConfigMobile.showHighlights ?? true}
                  highlightColor={gridConfigMobile.highlightColor}
                  fadePosition={gridConfigMobile.fadePosition}
                  fadeRadius={gridConfigMobile.fadeRadius}
                />
              </div>
            )}
            {/* Grid para desktop */}
            {gridConfig && (
              <div className={cn("absolute inset-0", gridConfigMobile && "max-lg:hidden")}>
                <GridOverlay
                  strokeColor={gridConfig.strokeColor || 'stroke-white/30'}
                  gridSize={gridConfig.gridSize || 100}
                  showHighlights={gridConfig.showHighlights ?? true}
                  highlightColor={gridConfig.highlightColor}
                  fadePosition={gridConfig.fadePosition}
                  fadeRadius={gridConfig.fadeRadius}
                />
              </div>
            )}
          </>
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
        <div className="container mx-auto px-6 md:px-8 1280:px-16 1366:px-24 1728:px-32">
          {enableAnimations ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftVariants}
            >
              {children}
            </motion.div>
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  )
}
