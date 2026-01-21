/**
 * GradientBlob - Nube decorativa con gradiente difuminado.
 * Elemento visual común en landing pages modernas (ej: Tailwind UI).
 * 
 * @example <GradientBlob variant="aurora" position="top-right" />
 */

import { useMemo } from 'react'

// Formas de blob predefinidas (clipPath polygons)
const blobShapes = {
  organic: 'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
  wave: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  cloud: 'polygon(0% 50%, 10% 25%, 25% 10%, 50% 0%, 75% 10%, 90% 25%, 100% 50%, 90% 75%, 75% 90%, 50% 100%, 25% 90%, 10% 75%)',
  splash: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
}

// Variantes de color predefinidas
const colorVariants = {
  aurora: { from: '#ff80b5', to: '#9089fc' },
  sunset: { from: '#f97316', to: '#ec4899' },
  ocean: { from: '#0ea5e9', to: '#06b6d4' },
  forest: { from: '#22c55e', to: '#10b981' },
  lavender: { from: '#a78bfa', to: '#c084fc' },
  golden: { from: '#fbbf24', to: '#f59e0b' },
}

// Posiciones predefinidas
const positionClasses = {
  'top-right': 'top-0 right-0 left-1/2 -ml-24 lg:ml-24 xl:ml-48',
  'top-left': 'top-0 left-0 right-1/2 -mr-24 lg:mr-24 xl:mr-48',
  'bottom-right': 'bottom-0 right-0 left-1/2 -ml-24 lg:ml-24 xl:ml-48',
  'bottom-left': 'bottom-0 left-0 right-1/2 -mr-24 lg:mr-24 xl:mr-48',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

type BlobShape = keyof typeof blobShapes
type ColorVariant = keyof typeof colorVariants
type Position = keyof typeof positionClasses

interface GradientBlobProps {
  /** Variante de color predefinida */
  variant?: ColorVariant
  /** Forma del blob */
  shape?: BlobShape
  /** Posición del blob */
  position?: Position
  /** Color inicial del gradiente (override de variant) */
  fromColor?: string
  /** Color final del gradiente (override de variant) */
  toColor?: string
  /** Opacidad (0-100) */
  opacity?: number
  /** Clase de blur (default: blur-3xl) */
  blur?: string
  /** Clase de tamaño (default: w-200.25) */
  size?: string
  /** Clase de aspect ratio (default: aspect-801/1036) */
  aspectRatio?: string
  /** Clases adicionales para el contenedor */
  className?: string
  /** z-index (default: -z-10) */
  zIndex?: string
}

export function GradientBlob({
  variant = 'aurora',
  shape = 'organic',
  position = 'top-right',
  fromColor,
  toColor,
  opacity = 30,
  blur = 'blur-3xl',
  size = 'w-[50.0625rem]',
  aspectRatio = 'aspect-[801/1036]',
  className = '',
  zIndex = '-z-10',
}: GradientBlobProps) {
  // Determinar colores finales
  const colors = useMemo(() => {
    if (fromColor && toColor) {
      return { from: fromColor, to: toColor }
    }
    return colorVariants[variant]
  }, [variant, fromColor, toColor])

  const clipPath = blobShapes[shape]
  const positionClass = positionClasses[position]

  return (
    <div
      aria-hidden="true"
      className={`absolute ${positionClass} ${zIndex} transform-gpu overflow-hidden ${blur} ${className}`}
    >
      <div
        style={{
          clipPath,
          background: `linear-gradient(to top right, ${colors.from}, ${colors.to})`,
          opacity: opacity / 100,
        }}
        className={`${aspectRatio} ${size}`}
      />
    </div>
  )
}

/**
 * Variantes preconfiguradas para uso rápido
 */
export function AuroraBlob(props: Omit<GradientBlobProps, 'variant'>) {
  return <GradientBlob variant="aurora" {...props} />
}

export function SunsetBlob(props: Omit<GradientBlobProps, 'variant'>) {
  return <GradientBlob variant="sunset" {...props} />
}

export function OceanBlob(props: Omit<GradientBlobProps, 'variant'>) {
  return <GradientBlob variant="ocean" {...props} />
}

export function ForestBlob(props: Omit<GradientBlobProps, 'variant'>) {
  return <GradientBlob variant="forest" {...props} />
}
