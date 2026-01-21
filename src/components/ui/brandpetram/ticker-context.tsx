'use client'

import { createContext, useContext } from 'react'

interface TickerContextValue {
  /**
   * Ref del contenedor para calcular posiciones
   */
  containerRef: React.RefObject<HTMLDivElement | null>

  /**
   * Función para registrar un item y obtener si está en el centro
   */
  registerItem: (element: HTMLElement | null, id: string) => void

  /**
   * ID del item actualmente en el centro
   */
  centerItemId: string | null
}

export const TickerContext = createContext<TickerContextValue | null>(null)

export function useTickerContext() {
  const context = useContext(TickerContext)
  if (!context) {
    throw new Error('useTickerContext debe usarse dentro de un TickerProvider')
  }
  return context
}
