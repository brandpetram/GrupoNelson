import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagenConEtiquetaAmbaflexProps {
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
  /** Clases Tailwind translate-y con breakpoints (ej: '-translate-y-[120px] md:-translate-y-[140px]' o '[-120px] md:[-140px]') - sobreescribe offsetY */
  offsetYClasses?: string
  /** Clases Tailwind translate-x con breakpoints (ej: 'translate-x-0 md:translate-x-4' o '0 md:4') - sobreescribe offsetX */
  offsetXClasses?: string
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
  /** Ancho de la etiqueta para texto multilínea - clase Tailwind (ej: 'w-48', 'w-[20rem]') */
  etiquetaWidth?: string
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
 * Variante Ambaflex de ImagenConEtiqueta con control de width para texto multilínea.
 * Permite especificar el ancho de la etiqueta para que el texto se ajuste a múltiples líneas.
 *
 * Uso básico:
 * <div className="relative aspect-video">
 *   <ImagenConEtiquetaAmbaflex
 *     src="/mi-imagen.jpg"
 *     alt="Descripción"
 *     etiqueta="Soluciones Ambaflex"
 *     etiquetaWidth="w-[15rem]"
 *     posicion="bottom-right"
 *   />
 * </div>
 *
 * Uso con breakpoints (usa translate-y/translate-x):
 * <ImagenConEtiquetaAmbaflex
 *   src="/mi-imagen.jpg"
 *   alt="Descripción"
 *   etiqueta="Soluciones Ambaflex"
 *   posicion="bottom-left"
 *   offsetYClasses="[-120px] md:[-140px] lg:[-160px]"
 *   offsetXClasses="0"
 * />
 *
 * También puedes usar clases completas:
 * offsetYClasses="-translate-y-[120px] md:-translate-y-[140px]"
 * offsetXClasses="translate-x-0 md:translate-x-4"
 */
export function ImagenConEtiquetaAmbaflex({
  src,
  alt,
  etiqueta,
  posicion = 'bottom-right',
  offset = '4',
  offsetX,
  offsetY,
  offsetYClasses,
  offsetXClasses,
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
  etiquetaWidth,
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
}: ImagenConEtiquetaAmbaflexProps) {
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
  // No se usa cuando offsetYClasses/offsetXClasses están presentes
  const getTranslateStyle = (): React.CSSProperties | undefined => {
    // Si usamos clases de Tailwind con breakpoints, no aplicar transform inline
    if (offsetYClasses || offsetXClasses) return undefined

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

  // Helper para convertir a clases translate
  const addTranslatePrefix = (classes: string | undefined, axis: 'x' | 'y'): string => {
    if (!classes) return ''

    // Si ya contiene translate-, usarlo tal cual
    if (classes.includes('translate-')) {
      return classes
    }

    // Si no tiene prefijo, agregarlo
    // Manejar múltiples clases separadas por espacios
    return classes.split(' ').map(cls => {
      // Si es una clase con breakpoint (ej: "md:[-120px]" o "md:4")
      if (cls.includes(':')) {
        const parts = cls.split(':')
        const breakpoint = parts[0]
        const value = parts[1]

        // Detectar si es negativo
        const isNegative = value.startsWith('-') || value.startsWith('[')
        const cleanValue = value.startsWith('-') ? value.substring(1) : value

        if (isNegative && value.startsWith('[')) {
          // Caso: "md:[-120px]" → "md:-translate-y-[120px]"
          return `${breakpoint}:-translate-${axis}-${cleanValue}`
        } else if (isNegative) {
          // Caso: "md:-4" → "md:-translate-y-4"
          return `${breakpoint}:-translate-${axis}-${cleanValue}`
        } else {
          // Caso: "md:4" → "md:translate-y-4"
          return `${breakpoint}:translate-${axis}-${value}`
        }
      }

      // Si es una clase simple
      const isNegative = cls.startsWith('-') || cls.startsWith('[')
      const cleanValue = cls.startsWith('-') ? cls.substring(1) : cls

      if (isNegative && cls.startsWith('[')) {
        // Caso: "[-120px]" → "-translate-y-[120px]"
        return `-translate-${axis}-${cleanValue}`
      } else if (isNegative) {
        // Caso: "-4" → "-translate-y-4"
        return `-translate-${axis}-${cleanValue}`
      } else {
        // Caso: "0" o "4" → "translate-y-0" o "translate-y-4"
        return `translate-${axis}-${cls}`
      }
    }).join(' ')
  }

  // Si offsetYClasses o offsetXClasses están presentes, usarlos con anclaje en 0
  // De lo contrario, usar el sistema legacy de offsetX/offsetY
  const posicionClases = {
    'top-left': offsetYClasses || offsetXClasses
      ? `top-0 left-0 ${addTranslatePrefix(offsetYClasses, 'y')} ${addTranslatePrefix(offsetXClasses, 'x')}`
      : `${getOffsetClass('top', effectiveOffsetY, isNegativeY)} ${getOffsetClass('left', effectiveOffsetX, isNegativeX)}`,
    'top-right': offsetYClasses || offsetXClasses
      ? `top-0 right-0 ${addTranslatePrefix(offsetYClasses, 'y')} ${addTranslatePrefix(offsetXClasses, 'x')}`
      : `${getOffsetClass('top', effectiveOffsetY, isNegativeY)} ${getOffsetClass('right', effectiveOffsetX, isNegativeX)}`,
    'bottom-left': offsetYClasses || offsetXClasses
      ? `bottom-0 left-0 ${addTranslatePrefix(offsetYClasses, 'y')} ${addTranslatePrefix(offsetXClasses, 'x')}`
      : `${getOffsetClass('bottom', effectiveOffsetY, isNegativeY)} ${getOffsetClass('left', effectiveOffsetX, isNegativeX)}`,
    'bottom-right': offsetYClasses || offsetXClasses
      ? `bottom-0 right-0 ${addTranslatePrefix(offsetYClasses, 'y')} ${addTranslatePrefix(offsetXClasses, 'x')}`
      : `${getOffsetClass('bottom', effectiveOffsetY, isNegativeY)} ${getOffsetClass('right', effectiveOffsetX, isNegativeX)}`,
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
          etiquetaWidth,
          'whitespace-normal',
          etiquetaClassName
        )}
      >
        {etiqueta}
      </div>
    </div>
  )
}
