interface BadgeSelloProps {
  /**
   * Número de años (el texto grande)
   */
  numero?: string
  /**
   * Texto superior circular (ej: "CELEBRANDO")
   */
  textoSuperior?: string
  /**
   * Texto inferior circular (ej: "AÑOS")
   */
  textoInferior?: string
  /**
   * Tamaño del badge en píxeles
   */
  size?: number
}

export function BadgeSello({
  numero = '60',
  textoSuperior = 'CELEBRANDO',
  textoInferior = 'AÑOS',
  size = 200,
}: BadgeSelloProps) {
  const viewBoxSize = 200
  const radius = 70
  const textRadius = 85

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(37, 99, 235, 0.4))',
        }}
      >
        <defs>
          {/* Path para texto superior (curva hacia arriba) */}
          <path
            id="textPathTop"
            d={`M ${viewBoxSize / 2 - textRadius},${viewBoxSize / 2} a ${textRadius},${textRadius} 0 0,1 ${textRadius * 2},0`}
            fill="none"
          />
          {/* Path para texto inferior (curva hacia abajo) */}
          <path
            id="textPathBottom"
            d={`M ${viewBoxSize / 2 + textRadius},${viewBoxSize / 2} a ${textRadius},${textRadius} 0 0,1 ${-textRadius * 2},0`}
            fill="none"
          />

          {/* Gradientes */}
          <linearGradient id="gradientOuterSello" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>

          <linearGradient id="gradientMiddleSello" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="gradientInnerSello" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#172554" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Círculo exterior */}
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r="98"
          fill="url(#gradientOuterSello)"
        />

        {/* Círculo medio */}
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r="88"
          fill="url(#gradientMiddleSello)"
        />

        {/* Círculo interior con borde blanco */}
        <circle
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          fill="url(#gradientInnerSello)"
          stroke="white"
          strokeWidth="2"
        />

        {/* Texto superior (curvo) */}
        <text
          fill="white"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            {textoSuperior}
          </textPath>
        </text>

        {/* Texto inferior (curvo) */}
        <text
          fill="white"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            {textoInferior}
          </textPath>
        </text>

        {/* Número central grande */}
        <text
          x={viewBoxSize / 2}
          y={viewBoxSize / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="70"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
        >
          {numero}
        </text>

        {/* Estrellas decorativas (opcional) */}
        <text x="35" y="105" fontSize="12" fill="white">★</text>
        <text x="153" y="105" fontSize="12" fill="white">★</text>
      </svg>
    </div>
  )
}
