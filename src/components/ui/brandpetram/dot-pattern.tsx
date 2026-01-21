/**
 * DotPattern - Componente de patrón de puntos decorativo con desvanecimiento radial.
 *
 * Puede usarse como:
 * - **Background**: Patrón detrás del contenido (z-index negativo)
 * - **Overlay**: Patrón encima del contenido (z-index positivo)
 *
 * Permite controlar el espaciado entre dots y su tamaño.
 *
 * @example Modo background (detrás del contenido):
 * <DotPattern dotSpacing={32} dotSize={2}><MiContenido /></DotPattern>
 *
 * @example Modo overlay (encima del contenido):
 * <div className="relative">
 *   <Bloque1 {...props} />
 *   <DotPattern mode="overlay" dotColor="fill-orange-500/30" fadePosition="right" />
 * </div>
 *
 * @example Con alias DotPatternOverlay (más conveniente):
 * <div className="relative">
 *   <Imagen />
 *   <DotPatternOverlay dotColor="fill-white/40" fadePosition="bottom-left" fadeRadius="12rem" />
 * </div>
 */

'use client'

import { useId } from 'react'
import { motion } from 'motion/react'
import type { MotionProps } from 'motion/react'

interface DotPatternProps {
  children?: React.ReactNode
  className?: string
  /** Espaciado entre dots en px (default: 32) */
  dotSpacing?: number
  /** Tamaño del dot en px (default: 2) */
  dotSize?: number
  /** Radio del gradiente de desvanecimiento (default: "32rem") */
  fadeRadius?: string
  /** Posición del gradiente (default: "center") */
  fadePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Altura del fondo (clase Tailwind, default: "h-256") */
  height?: string
  /** Color del dot (clase Tailwind, default: "fill-gray-400 dark:fill-white/20") */
  dotColor?: string
  /** Modo: 'background' (detrás, z-) o 'overlay' (encima, z+) */
  mode?: 'background' | 'overlay'
  /** Configuración opcional de animación (motion) */
  animate?: Pick<MotionProps, 'initial' | 'animate' | 'transition'>
}

export function DotPattern({
  children,
  className = '',
  dotSpacing = 32,
  dotSize = 2,
  fadeRadius = '32rem',
  fadePosition = 'center',
  height = 'h-256',
  dotColor = 'fill-gray-400 dark:fill-white/20',
  mode = 'background',
  animate,
}: DotPatternProps) {
  // Genera un ID único para evitar conflictos si hay múltiples instancias
  const patternId = useId()

  // Mapeo de posiciones a coordenadas CSS
  const positionMap = {
    center: 'center',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
    'top-left': 'top left',
    'top-right': 'top right',
    'bottom-left': 'bottom left',
    'bottom-right': 'bottom right',
  }

  // Clases según modo
  const modeClasses = mode === 'overlay'
    ? 'inset-0 z-10 pointer-events-none'
    : `inset-x-0 top-0 -z-10 ${height}`

  const svgElement = (
    <svg
      aria-hidden="true"
      className={`absolute ${modeClasses} w-full h-full ${dotColor} ${className}`}
      style={{
        maskImage: `radial-gradient(${fadeRadius} ${fadeRadius} at ${positionMap[fadePosition]}, white, transparent)`,
        WebkitMaskImage: `radial-gradient(${fadeRadius} ${fadeRadius} at ${positionMap[fadePosition]}, white, transparent)`
      }}
    >
      <defs>
        <pattern
          x="50%"
          y={-1}
          id={patternId}
          width={dotSpacing}
          height={dotSpacing}
          patternUnits="userSpaceOnUse"
        >
          {/* Dibuja un dot centrado en el patrón */}
          <circle
            cx={dotSpacing / 2}
            cy={dotSpacing / 2}
            r={dotSize}
          />
        </pattern>
      </defs>

      {/* Rellena todo el área con el patrón */}
      <rect
        fill={`url(#${patternId})`}
        width="100%"
        height="100%"
        strokeWidth={0}
      />
    </svg>
  )

  // Renderizar elemento final (con o sin animación)
  const renderElement = () => {
    if (animate) {
      return (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={animate.initial}
          animate={animate.animate}
          transition={animate.transition}
        >
          {svgElement}
        </motion.div>
      )
    }
    return svgElement
  }

  const finalElement = renderElement()

  // En modo overlay sin children, retorna el elemento (con o sin animación)
  if (mode === 'overlay' && !children) {
    return finalElement
  }

  // Modo background o con children: wrapper con contenido
  return (
    <div className={`relative isolate ${mode === 'overlay' ? '' : className}`}>
      {finalElement}
      {children}
    </div>
  )
}

/**
 * DotPatternOverlay - Alias conveniente para modo overlay
 *
 * @example
 * <div className="relative">
 *   <Bloque1 {...props} />
 *   <DotPatternOverlay dotColor="fill-white/30" />
 * </div>
 */
export function DotPatternOverlay(props: Omit<DotPatternProps, 'mode' | 'children' | 'height'>) {
  return <DotPattern {...props} mode="overlay" />
}

export type { DotPatternProps }
