import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagenConEtiquetaProps {
  /** Ruta de la imagen */
  src: string
  /** Texto alternativo para la imagen */
  alt: string
  /** Texto de la etiqueta */
  etiqueta: string
  /** Posición de la etiqueta */
  posicion?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Offset de la etiqueta - clase Tailwind (ej: '4', '0', '-4' para salirse) */
  offset?: string
  /** Offset horizontal específico (sobreescribe el offset general en X) */
  offsetX?: string
  /** Offset vertical específico (sobreescribe el offset general en Y) */
  offsetY?: string
  /** Color de fondo de la etiqueta - clase Tailwind */
  etiquetaBg?: string
  /** Opacidad general de la etiqueta - clase Tailwind (ej: 'opacity-75', 'opacity-50') */
  etiquetaOpacity?: string
  /** Color del texto de la etiqueta - clase Tailwind */
  etiquetaColor?: string
  /** Tamaño del texto de la etiqueta - clase Tailwind */
  etiquetaFontSize?: string
  /** Peso del texto de la etiqueta - clase Tailwind */
  etiquetaFontWeight?: string
  /** Interlineado de la etiqueta - clase Tailwind (ej: 'leading-tight') */
  etiquetaLineHeight?: string
  /** Espaciado entre letras - clase Tailwind (ej: 'tracking-wide') */
  etiquetaLetterSpacing?: string
  /** Padding de la etiqueta - clase Tailwind */
  etiquetaPadding?: string
  /** Bordes redondeados de la etiqueta - clase Tailwind */
  etiquetaRounded?: string
  /** Borde superior izquierdo - clase Tailwind (ej: 'rounded-tl-none', 'rounded-tl-3xl') */
  etiquetaRoundedTL?: string
  /** Borde superior derecho - clase Tailwind (ej: 'rounded-tr-none', 'rounded-tr-3xl') */
  etiquetaRoundedTR?: string
  /** Borde inferior izquierdo - clase Tailwind (ej: 'rounded-bl-none', 'rounded-bl-3xl') */
  etiquetaRoundedBL?: string
  /** Borde inferior derecho - clase Tailwind (ej: 'rounded-br-none', 'rounded-br-3xl') */
  etiquetaRoundedBR?: string
  /** Clases adicionales para el contenedor */
  className?: string
  /** Clases adicionales para la etiqueta */
  etiquetaClassName?: string

  // Props para polígono decorativo
  /** Mostrar polígono decorativo */
  poligono?: boolean
  /** Posición del polígono */
  poligonoPosicion?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** Ancho del polígono - clase Tailwind (ej: 'w-32', 'w-64') */
  poligonoWidth?: string
  /** Aspect ratio del polígono - clase Tailwind (ej: 'aspect-square', 'aspect-[4/3]') */
  poligonoAspect?: string
  /** Color de fondo del polígono - clase Tailwind */
  poligonoBg?: string
  /** Opacidad del polígono - clase Tailwind */
  poligonoOpacity?: string
  /** Offset horizontal del polígono */
  poligonoOffsetX?: string
  /** Offset vertical del polígono */
  poligonoOffsetY?: string
  /** Clases adicionales para el polígono */
  poligonoClassName?: string
}

/**
 * Imagen con una etiqueta de texto posicionable en cualquier esquina.
 * El tamaño es determinado por el contenedor padre.
 *
 * Uso:
 * <div className="relative aspect-video">
 *   <ImagenConEtiqueta
 *     src="/mi-imagen.jpg"
 *     alt="Descripción"
 *     etiqueta="Mi Texto"
 *     posicion="bottom-right"
 *   />
 * </div>
 */
export function ImagenConEtiqueta({
  src,
  alt,
  etiqueta,
  posicion = 'bottom-right',
  offset = '4',
  offsetX,
  offsetY,
  etiquetaBg = 'bg-gradient-to-br from-orange-600 to-orange-500',
  etiquetaOpacity,
  etiquetaColor = 'text-white',
  etiquetaFontSize = 'text-lg md:text-xl',
  etiquetaFontWeight = 'font-semibold',
  etiquetaLineHeight,
  etiquetaLetterSpacing,
  etiquetaPadding = 'px-4 py-2 md:px-6 md:py-3',
  etiquetaRounded = 'rounded-lg',
  etiquetaRoundedTL,
  etiquetaRoundedTR,
  etiquetaRoundedBL,
  etiquetaRoundedBR,
  className,
  etiquetaClassName,
  // Polígono props
  poligono = false,
  poligonoPosicion = 'top-left',
  poligonoWidth = 'w-32',
  poligonoAspect = 'aspect-square',
  poligonoBg = 'bg-orange-600',
  poligonoOpacity,
  poligonoOffsetX = '0',
  poligonoOffsetY = '0',
  poligonoClassName,
}: ImagenConEtiquetaProps) {
  // Usar offsetX/offsetY si están definidos, sino usar offset general
  const effectiveOffsetX = offsetX ?? offset
  const effectiveOffsetY = offsetY ?? offset

  // Determinar si X o Y son negativos
  const isNegativeX = effectiveOffsetX.startsWith('-')
  const isNegativeY = effectiveOffsetY.startsWith('-')
  const absValueX = isNegativeX ? effectiveOffsetX.substring(1) : effectiveOffsetX
  const absValueY = isNegativeY ? effectiveOffsetY.substring(1) : effectiveOffsetY

  const getOffsetClass = (direction: string, value: string, isNeg: boolean) => {
    if (!value) return `${direction}-4` // default

    // Para valores negativos, usar offset 0 (pegado al borde)
    if (isNeg) {
      return `${direction}-0`
    }

    // Si termina en 'px', 'rem', etc., usar valor arbitrario directamente
    if (value.match(/px|rem|em|%$/)) {
      return `${direction}-[${value}]`
    }

    // Valores numéricos estándar de Tailwind (0-96)
    const tailwindValues = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96']
    if (tailwindValues.includes(value)) {
      return `${direction}-${value}`
    }

    // Cualquier otro valor numérico → convertir a píxeles arbitrarios
    return `${direction}-[${value}px]`
  }

  // Genera inline style para mover fuera cuando es negativo
  const getTranslateStyle = (): React.CSSProperties | undefined => {
    if (!isNegativeX && !isNegativeY) return undefined

    const translateX = isNegativeX ? absValueX : '0'
    const translateY = isNegativeY ? absValueY : '0'

    // Determinar dirección del translate según posición
    const signX = posicion.includes('right') ? '' : '-'
    const signY = posicion.includes('bottom') ? '' : '-'

    const finalX = isNegativeX ? `${signX}${translateX}px` : '0'
    const finalY = isNegativeY ? `${signY}${translateY}px` : '0'

    return { transform: `translate(${finalX}, ${finalY})` }
  }

  const posicionClases = {
    'top-left': `${getOffsetClass('top', effectiveOffsetY, isNegativeY)} ${getOffsetClass('left', effectiveOffsetX, isNegativeX)}`,
    'top-right': `${getOffsetClass('top', effectiveOffsetY, isNegativeY)} ${getOffsetClass('right', effectiveOffsetX, isNegativeX)}`,
    'bottom-left': `${getOffsetClass('bottom', effectiveOffsetY, isNegativeY)} ${getOffsetClass('left', effectiveOffsetX, isNegativeX)}`,
    'bottom-right': `${getOffsetClass('bottom', effectiveOffsetY, isNegativeY)} ${getOffsetClass('right', effectiveOffsetX, isNegativeX)}`,
  }

  // Lógica para polígono
  const isNegativePoligonoX = poligonoOffsetX.startsWith('-')
  const isNegativePoligonoY = poligonoOffsetY.startsWith('-')
  const absPoligonoX = isNegativePoligonoX ? poligonoOffsetX.substring(1) : poligonoOffsetX
  const absPoligonoY = isNegativePoligonoY ? poligonoOffsetY.substring(1) : poligonoOffsetY

  const poligonoPosicionClases = {
    'top-left': `${getOffsetClass('top', poligonoOffsetY, isNegativePoligonoY)} ${getOffsetClass('left', poligonoOffsetX, isNegativePoligonoX)}`,
    'top-right': `${getOffsetClass('top', poligonoOffsetY, isNegativePoligonoY)} ${getOffsetClass('right', poligonoOffsetX, isNegativePoligonoX)}`,
    'bottom-left': `${getOffsetClass('bottom', poligonoOffsetY, isNegativePoligonoY)} ${getOffsetClass('left', poligonoOffsetX, isNegativePoligonoX)}`,
    'bottom-right': `${getOffsetClass('bottom', poligonoOffsetY, isNegativePoligonoY)} ${getOffsetClass('right', poligonoOffsetX, isNegativePoligonoX)}`,
  }

  const getPoligonoTranslateStyle = (): React.CSSProperties | undefined => {
    if (!isNegativePoligonoX && !isNegativePoligonoY) return undefined

    const translateX = isNegativePoligonoX ? absPoligonoX : '0'
    const translateY = isNegativePoligonoY ? absPoligonoY : '0'

    const signX = poligonoPosicion.includes('right') ? '' : '-'
    const signY = poligonoPosicion.includes('bottom') ? '' : '-'

    const finalX = isNegativePoligonoX ? `${signX}${translateX}px` : '0'
    const finalY = isNegativePoligonoY ? `${signY}${translateY}px` : '0'

    return { transform: `translate(${finalX}, ${finalY})` }
  }

  return (
    <div className={cn('relative w-full h-full', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-[inherit]"
      />

      {/* Polígono decorativo */}
      {poligono && (
        <div
          style={getPoligonoTranslateStyle()}
          className={cn(
            'absolute',
            poligonoPosicionClases[poligonoPosicion],
            poligonoWidth,
            poligonoAspect,
            poligonoBg,
            poligonoOpacity,
            poligonoClassName
          )}
          aria-hidden="true"
        />
      )}

      {/* Etiqueta de texto */}
      <div
        style={getTranslateStyle()}
        className={cn(
          'absolute',
          posicionClases[posicion],
          etiquetaRounded,
          etiquetaRoundedTL,
          etiquetaRoundedTR,
          etiquetaRoundedBL,
          etiquetaRoundedBR,
          etiquetaBg,
          etiquetaOpacity,
          etiquetaColor,
          etiquetaFontSize,
          etiquetaFontWeight,
          etiquetaLineHeight,
          etiquetaLetterSpacing,
          etiquetaPadding,
          etiquetaClassName
        )}
      >
        {etiqueta}
      </div>
    </div>
  )
}
