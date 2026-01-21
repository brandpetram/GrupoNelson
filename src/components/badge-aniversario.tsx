'use client'

import { useState, useEffect } from 'react'

interface BadgeAniversarioProps {
  /**
   * Número de años (el texto grande)
   */
  numero?: string
  /**
   * Texto inferior (ej: "años")
   */
  textoInferior?: string
  /**
   * Tamaño del badge en píxeles para móvil
   */
  size?: number
  /**
   * Tamaño del badge en píxeles para tablet (md breakpoint)
   */
  sizeMd?: number
  /**
   * Tamaño del badge en píxeles para desktop (lg breakpoint)
   */
  sizeLg?: number
}

export function BadgeAniversario({
  numero = '60',
  textoInferior = 'años',
  size = 200,
  sizeMd,
  sizeLg,
}: BadgeAniversarioProps) {
  // Detectar el breakpoint actual
  const [currentSize, setCurrentSize] = useState(size)

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth
      if (width >= 1024 && sizeLg) {
        setCurrentSize(sizeLg)
      } else if (width >= 768 && sizeMd) {
        setCurrentSize(sizeMd)
      } else {
        setCurrentSize(size)
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [size, sizeMd, sizeLg])

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${currentSize}px`,
        height: `${currentSize}px`,
      }}
    >
      {/* Círculo exterior (borde) - Gradiente azul */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 50%, #1e40af 100%)',
          boxShadow: '0 20px 60px rgba(37, 99, 235, 0.4)',
        }}
      />

      {/* Círculo medio - Azul más oscuro */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${currentSize * 0.85}px`,
          height: `${currentSize * 0.85}px`,
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        }}
      />

      {/* Círculo interior (contenido) - Gradiente azul oscuro */}
      <div
        className="absolute rounded-full flex flex-col items-center justify-center"
        style={{
          width: `${currentSize * 0.7}px`,
          height: `${currentSize * 0.7}px`,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 50%, #0f172a 100%)',
          boxShadow: 'inset 0 8px 20px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Número grande */}
        <div
          className="font-black leading-none"
          style={{
            fontSize: `${currentSize * 0.35}px`,
            color: '#ffffff',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.05em',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          {numero}
        </div>

        {/* Texto inferior */}
        <div
          className="font-light tracking-wide"
          style={{
            fontSize: `${currentSize * 0.12}px`,
            color: '#ffffff',
            marginTop: `${currentSize * -0.05}px`,
            textTransform: 'lowercase',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {textoInferior}
        </div>
      </div>
    </div>
  )
}
