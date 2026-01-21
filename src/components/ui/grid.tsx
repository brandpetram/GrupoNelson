/**
 * Grid - Componente de cuadrícula decorativa con desvanecimiento radial.
 *
 * Puede usarse como:
 * - **Background**: Cuadrícula detrás del contenido (z-index negativo)
 * - **Overlay**: Cuadrícula encima del contenido (z-index positivo)
 *
 * Replica el patrón visual de Tailwind Plus/UI con mayor flexibilidad.
 *
 * @example Modo background (detrás del contenido):
 * <Grid fadeRadius="32rem"><MiContenido /></Grid>
 *
 * @example Modo overlay (encima del contenido):
 * <div className="relative">
 *   <Bloque1 {...props} />
 *   <Grid mode="overlay" strokeColor="stroke-white/20" fadePosition="right" />
 * </div>
 *
 * @example Con alias GridOverlay (más conveniente):
 * <div className="relative">
 *   <Imagen />
 *   <GridOverlay strokeColor="stroke-yellow-400/30" fadePosition="bottom-left" fadeRadius="6rem" />
 * </div>
 */

'use client'

import { useId } from 'react'
import { motion, type TargetAndTransition, type Transition } from 'motion/react'

interface GridProps {
  children?: React.ReactNode
  className?: string
  /** Tamaño de cada celda de la cuadrícula en px (default: 200) */
  gridSize?: number
  /** Radio del gradiente de desvanecimiento (default: "32rem") */
  fadeRadius?: string
  /** Posición del gradiente (default: "center") */
  fadePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Altura del fondo (clase Tailwind, default: "h-256") */
  height?: string
  /** Color del stroke (clase Tailwind, default: "stroke-gray-200 dark:stroke-white/10") */
  strokeColor?: string
  /** Mostrar cuadrados destacados (default: true) */
  showHighlights?: boolean
  /** Color de los cuadrados destacados (clase Tailwind) */
  highlightColor?: string
  /** Modo: 'background' (detrás, z-) o 'overlay' (encima, z+) */
  mode?: 'background' | 'overlay'
  /** Configuración opcional de animación (motion) */
  animate?: {
    initial?: TargetAndTransition
    animate?: TargetAndTransition
    transition?: Transition
  }
}

export function Grid({
  children,
  className = '',
  gridSize = 200,
  fadeRadius = '32rem',
  fadePosition = 'center',
  height = 'h-256',
  strokeColor = 'stroke-gray-200 dark:stroke-white/10',
  showHighlights = true,
  highlightColor = 'fill-gray-50 dark:fill-gray-800',
  mode = 'background',
  animate,
}: GridProps) {
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
      className={`absolute ${modeClasses} w-full h-full ${strokeColor} ${className}`}
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
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Dibuja una "L" invertida que forma la esquina de cada celda */}
            <path d={`M.5 ${gridSize}V.5H${gridSize}`} fill="none" />
          </pattern>
        </defs>

        {/* Cuadrados destacados - color plano, el mask radial crea el efecto de desvanecimiento */}
        {showHighlights && (
          <svg x="50%" y={-1} className={`overflow-visible ${highlightColor}`}>
            <path
              d={`M-${gridSize} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${gridSize * 3} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M-${gridSize * 2} ${gridSize * 3}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${gridSize} ${gridSize * 4}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z`}
              strokeWidth={0}
            />
          </svg>
        )}

        {/* Rellena todo el área con el patrón */}
        <rect
          fill={`url(#${patternId})`}
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
    )

  // Si hay animación, envolver en motion.div
  const finalElement = animate ? (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={animate.initial}
      animate={animate.animate}
      transition={animate.transition}
    >
      {svgElement}
    </motion.div>
  ) : svgElement

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
 * GridSimple - Versión minimalista sin highlights
 */
export function GridSimple({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Grid
      showHighlights={false}
      className={className}
    >
      {children}
    </Grid>
  )
}

/**
 * GridOverlay - Alias conveniente para modo overlay
 *
 * @example
 * <div className="relative">
 *   <Bloque1 {...props} />
 *   <GridOverlay strokeColor="stroke-white/30" />
 * </div>
 */
export function GridOverlay(props: Omit<GridProps, 'mode' | 'children' | 'height'>) {
  return <Grid {...props} mode="overlay" />
}

// Legacy exports para compatibilidad
export const GridBackground = Grid
export const GridBackgroundSimple = GridSimple
export type GridBackgroundProps = GridProps
export type { GridProps }
