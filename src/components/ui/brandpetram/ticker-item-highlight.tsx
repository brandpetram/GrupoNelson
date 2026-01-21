'use client'

import { useRef, useEffect, useId } from 'react'
import { cn } from '../../../lib/utils'
import { useTickerContext } from './ticker-context'

interface TickerItemHighlightProps {
  /**
   * Ref del contenedor root (ya no se usa, se mantiene por compatibilidad)
   * @deprecated Usar dentro de TickerBase que provee el contexto
   */
  rootRef?: React.RefObject<HTMLDivElement | null>

  /**
   * Color del texto normal
   * @default "rgba(255, 255, 255, 0.4)"
   */
  colorTexto?: string

  /**
   * Color del texto destacado
   * @default "rgba(189, 159, 101, 0.82)"
   */
  colorDestacado?: string

  /**
   * Clases adicionales para el item
   */
  clasesItem?: string

  /**
   * Contenido del item
   */
  children: React.ReactNode
}

export function TickerItemHighlight({
  colorTexto = 'rgba(255, 255, 255, 0.4)',
  colorDestacado = 'rgba(189, 159, 101, 0.82)',
  clasesItem,
  children,
}: TickerItemHighlightProps) {
  const itemRef = useRef<HTMLSpanElement>(null)
  const uniqueId = useId()
  const { registerItem, centerItemId } = useTickerContext()

  // Registrar este item en el contexto
  useEffect(() => {
    const element = itemRef.current
    registerItem(element, uniqueId)

    return () => {
      registerItem(null, uniqueId)
    }
  }, [registerItem, uniqueId])

  const isCenter = centerItemId === uniqueId

  return (
    <span
      ref={itemRef}
      className={cn(
        'text-2xl md:text-3xl font-normal transition-colors duration-150',
        clasesItem
      )}
      style={{ color: isCenter ? colorDestacado : colorTexto }}
    >
      {children}
    </span>
  )
}
