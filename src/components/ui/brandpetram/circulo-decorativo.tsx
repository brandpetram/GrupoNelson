'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValue, useTransform, type Easing } from 'motion/react'

interface CirculoDecorativoProps {
  contenido?: string | React.ReactNode
  bgClase?: string
  overlayClase?: string
  tamanoTexto?: string
  claseTexto?: string
  className?: string
  animado?: boolean
  animacionScale?: number[]
  animacionRotate?: number[]
  animacionBorderRadius?: string[]
  animacionDuration?: number
  animacionRepeat?: number | typeof Infinity
  animacionRepeatDelay?: number
  animacionEase?: Easing
  animacionTimes?: number[]
}

export function CirculoDecorativo({
  contenido,
  bgClase = 'bg-gradient-to-br from-gray-400 to-gray-600',
  overlayClase,
  tamanoTexto = 'text-5xl',
  claseTexto,
  className,
  animado = false,
  animacionScale,
  animacionRotate,
  animacionBorderRadius,
  animacionDuration = 2,
  animacionRepeat = Infinity,
  animacionRepeatDelay = 1,
  animacionEase = 'easeInOut',
  animacionTimes,
}: CirculoDecorativoProps) {
  const clases = cn(
    'relative flex items-center justify-center rounded-full overflow-hidden',
    'aspect-square shrink-0',
    'text-white font-bold',
    tamanoTexto,
    bgClase,
    className
  )

  const rotateValue = useMotionValue(0)
  const contraRotate = useTransform(rotateValue, (value) => -value)

  const contenidoRender = (
    <>
      {overlayClase && (
        <div className={cn('absolute inset-0', overlayClase)} />
      )}

      {contenido && animado && animacionRotate ? (
        <motion.span
          className={cn('relative z-10', claseTexto)}
          style={{ rotate: contraRotate }}
        >
          {contenido}
        </motion.span>
      ) : (
        <span className={cn('relative z-10', claseTexto)}>{contenido}</span>
      )}
    </>
  )

  if (animado && (animacionScale || animacionRotate || animacionBorderRadius)) {
    return (
      <motion.div
        className={clases}
        style={animacionRotate ? { rotate: rotateValue } : {}}
        animate={{
          ...(animacionScale && { scale: animacionScale }),
          ...(animacionRotate && { rotate: animacionRotate }),
          ...(animacionBorderRadius && { borderRadius: animacionBorderRadius }),
        }}
        transition={{
          duration: animacionDuration,
          ease: animacionEase,
          ...(animacionTimes && { times: animacionTimes }),
          repeat: animacionRepeat,
          repeatDelay: animacionRepeatDelay,
        }}
      >
        {contenidoRender}
      </motion.div>
    )
  }

  return (
    <div className={clases}>
      {contenidoRender}
    </div>
  )
}
