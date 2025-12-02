"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@brandpetram/componentes-2026/ui"

interface HeroVideoCoverProps {
  videoSrc: string
  posterSrc: string
  alt?: string
  overlayOpacity?: number
  className?: string
  children?: React.ReactNode
}

export function HeroVideoCover({
  videoSrc,
  posterSrc,
  alt = "Hero background",
  overlayOpacity = 0.4,
  className = "",
  children,
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
