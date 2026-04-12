'use client'

interface BadgeAniversarioProps {
  numero?: string
  textoInferior?: string
  /** Texto curvo superior del badge (default: "CELEBRANDO") */
  textoCurvo?: string
  /** Clases de Tailwind para controlar el tamaño del badge, ej: "w-48 h-48 md:w-64 md:h-64" */
  className?: string
  /** Letter spacing del texto curvo, en unidades SVG. Negativo = más apretado. Default: 0.9 */
  curvedTextTracking?: number
  /** Desplazamiento vertical del contenido en unidades SVG. Negativo = sube, positivo = baja. Default: -3 */
  contentOffsetY?: number
  /** Radio del arco del texto curvo. 50 = borde del círculo, mayor = más alejado. Default: 58 */
  curvedTextRadius?: number
  /** Idioma */
  lang?: 'en' | 'es'
}

export function BadgeAniversario({
  numero = '60',
  textoInferior,
  textoCurvo,
  className = 'w-[200px] h-[200px]',
  curvedTextTracking = 0.9,
  contentOffsetY = -3,
  curvedTextRadius = 58,
  lang = 'es',
}: BadgeAniversarioProps) {
  const _textoInferior = textoInferior ?? (lang === 'en' ? 'years' : 'años')
  const _textoCurvo = textoCurvo ?? (lang === 'en' ? 'CELEBRATING' : 'CELEBRANDO')
  return (
    <div data-component="BadgeAniversario" data-component-file="src/components/badge-aniversario.tsx" data-component-props="true" className={`relative flex items-center justify-center ${className}`}>

      {/* SVG único que maneja todo — viewBox 0-100 para unidades relativas */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full overflow-visible"
      >
        {/* Círculo exterior — gradiente azul */}
        <defs>
          <radialGradient id="grad-exterior" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <radialGradient id="grad-medio" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
          <radialGradient id="grad-interior" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#172554" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <path
            id="celebrando-arc"
            d={`M ${50 - curvedTextRadius},50 A ${curvedTextRadius},${curvedTextRadius} 0 0 1 ${50 + curvedTextRadius},50`}
          />
        </defs>

        {/* Círculo exterior */}
        <circle cx="50" cy="50" r="50" fill="url(#grad-exterior)" />

        {/* Círculo medio */}
        <circle cx="50" cy="50" r="42.5" fill="url(#grad-medio)" />

        {/* Círculo interior */}
        <circle cx="50" cy="50" r="35" fill="url(#grad-interior)" />

        {/* Número grande + texto inferior — centrados con contentOffsetY */}
        <text
          x="50"
          y={50 + contentOffsetY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="32"
          fontWeight="900"
          letterSpacing="-1.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {numero}
        </text>

        {/* Texto inferior */}
        <text
          x="50"
          y={50 + contentOffsetY + 18}
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="300"
          letterSpacing="1"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {_textoInferior}
        </text>

        {/* Texto curvo "CELEBRANDO" fuera del perímetro */}
        <text fill="white" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
          <textPath href="#celebrando-arc" startOffset="50%" textAnchor="middle" letterSpacing={curvedTextTracking}>
            {_textoCurvo}
          </textPath>
        </text>
      </svg>

    </div>
  )
}
