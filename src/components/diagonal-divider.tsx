interface DiagonalDividerProps {
  /**
   * Color de relleno del SVG (debe hacer match con la sección siguiente)
   */
  fillColor?: string
  /**
   * Altura del divider en píxeles
   */
  height?: number
  /**
   * Qué tan diagonal es el corte (0-100)
   * 0 = sin diagonal (horizontal)
   * 50 = diagonal moderada
   * 100 = diagonal pronunciada
   */
  slope?: number
  /**
   * Invertir la dirección de la diagonal
   */
  invertDirection?: boolean
}

export function DiagonalDivider({
  fillColor = 'white',
  height = 100,
  slope = 50,
  invertDirection = false,
}: DiagonalDividerProps) {
  // Calcular el offset basado en slope (porcentaje de la altura)
  const offset = (slope / 100) * height

  // Path para la diagonal - extendido para cubrir completamente
  const path = invertDirection
    ? `M0,${offset} L1440,0 L1440,${height + 10} L0,${height + 10} Z`
    : `M0,0 L1440,${offset} L1440,${height + 10} L0,${height + 10} Z`

  return (
    <div
      className="w-full relative leading-none overflow-hidden"
      style={{
        height: `${height}px`,
        marginTop: '-1px',
        marginBottom: '-1px'
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        className="w-full block"
        style={{
          display: 'block',
          height: '101%',
          transform: 'translateY(-0.5px)'
        }}
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  )
}
