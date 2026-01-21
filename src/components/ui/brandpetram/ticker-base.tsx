'use client'

import { useRef, useState, useCallback } from 'react'
import { Ticker } from 'motion-plus/react'
import {
  useScroll,
  useMotionValue,
  useAnimationFrame
} from 'motion/react'
import { cn } from '../../../lib/utils'
import { TickerContext } from './ticker-context'

interface TickerBaseProps {
  /**
   * Velocidad base del ticker en px/s
   * @default 35
   */
  velocidadBase?: number

  /**
   * Factor que multiplica el scroll para la velocidad
   * @default 4
   */
  multiplicadorScroll?: number

  /**
   * Altura del contenedor
   * @default "100%"
   */
  altura?: string

  /**
   * Espacio entre items en px
   * @default 24
   */
  gap?: number

  /**
   * Clases adicionales para el contenedor
   */
  className?: string

  /**
   * Array de elementos JSX para el ticker
   */
  items: React.ReactNode[]

  /**
   * Ref para el contenedor (usado por items con highlight)
   */
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export function TickerBase({
  velocidadBase = 35,
  multiplicadorScroll = 4,
  altura = '100%',
  gap = 24,
  className,
  items,
  containerRef: externalRef,
}: TickerBaseProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const containerRef = externalRef || internalRef

  // Estado para el item central
  const [centerItemId, setCenterItemId] = useState<string | null>(null)

  // Map para guardar referencias a todos los items registrados
  const itemsMapRef = useRef<Map<string, HTMLElement>>(new Map())

  // Motion value para controlar el offset del ticker manualmente
  const tickerOffset = useMotionValue(0)

  // Refs para tracking de scroll
  const lastScrollYRef = useRef(0)
  const directionRef = useRef(1) // 1 = hacia arriba (offset aumenta), -1 = hacia abajo
  const currentVelocityRef = useRef(velocidadBase)

  // Escuchamos el scroll de la ventana
  const { scrollY } = useScroll()

  // Función para registrar items
  const registerItem = useCallback((element: HTMLElement | null, id: string) => {
    if (element) {
      itemsMapRef.current.set(id, element)
    } else {
      itemsMapRef.current.delete(id)
    }
  }, [])

  // Actualizamos velocidad y dirección basados en el scroll
  scrollY.on('change', (current) => {
    const delta = current - lastScrollYRef.current

    // Si hay scroll, actualizamos la dirección persistente
    if (Math.abs(delta) > 0.1) {
      // Scroll hacia abajo = delta positivo = ticker va hacia arriba (1)
      // Scroll hacia arriba = delta negativo = ticker va hacia abajo (-1)
      directionRef.current = delta > 0 ? 1 : -1

      // Boost de velocidad basado en la magnitud del scroll
      const scrollSpeed = Math.abs(delta) * multiplicadorScroll
      currentVelocityRef.current = velocidadBase + scrollSpeed
    }

    lastScrollYRef.current = current
  })

  // Animación continua del ticker y cálculo del item central
  useAnimationFrame((_, delta) => {
    // Aplicamos la velocidad actual con la dirección
    const velocity = currentVelocityRef.current * directionRef.current
    const newOffset = tickerOffset.get() + (velocity * delta / 1000)
    tickerOffset.set(newOffset)

    // Decaimiento suave de la velocidad hacia la base
    currentVelocityRef.current = velocidadBase + (currentVelocityRef.current - velocidadBase) * 0.98

    // Calcular cuál item está más cerca del centro
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const containerCenterY = containerRect.top + containerRect.height / 2

    let closestId: string | null = null
    let closestDistance = Infinity

    itemsMapRef.current.forEach((element, id) => {
      const rect = element.getBoundingClientRect()
      const itemCenterY = rect.top + rect.height / 2
      const distance = Math.abs(itemCenterY - containerCenterY)

      if (distance < closestDistance) {
        closestDistance = distance
        closestId = id
      }
    })

    // Solo actualizamos si cambió para evitar re-renders innecesarios
    if (closestId !== null) {
      setCenterItemId(prev => prev !== closestId ? closestId : prev)
    }
  })

  const contextValue = {
    containerRef,
    registerItem,
    centerItemId,
  }

  return (
    <TickerContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn('overflow-hidden relative', className)}
        style={{
          height: altura,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <Ticker
          offset={tickerOffset}
          axis="y"
          gap={gap}
          items={items}
          align="start"
        />
      </div>
    </TickerContext.Provider>
  )
}
