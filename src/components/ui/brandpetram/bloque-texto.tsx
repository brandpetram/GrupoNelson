import { cn } from '@/lib/utils'
import { Titulo } from './titulo'
import { Parrafo } from './parrafo'

interface BloqueTextoProps {
  /** Texto del título */
  titulo: string
  /** Texto del párrafo */
  parrafo: string
  /** Elemento HTML para el título */
  tituloAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Tamaño del título - clase Tailwind */
  tituloFontSize?: string
  /** Peso del título - clase Tailwind */
  tituloFontWeight?: string
  /** Tracking del título - clase Tailwind */
  tituloTracking?: string
  /** Line height del título - clase Tailwind */
  tituloLineHeight?: string
  /** Color del título - clase Tailwind */
  tituloColor?: string
  /** Ancho del título - clase Tailwind */
  tituloWidth?: string
  /** Tamaño del párrafo - clase Tailwind */
  parrafoFontSize?: string
  /** Peso del párrafo - clase Tailwind */
  parrafoFontWeight?: string
  /** Tracking del párrafo - clase Tailwind */
  parrafoTracking?: string
  /** Line height del párrafo - clase Tailwind */
  parrafoLineHeight?: string
  /** Color del párrafo - clase Tailwind */
  parrafoColor?: string
  /** Ancho del párrafo - clase Tailwind */
  parrafoWidth?: string
  /** Ancho máximo del párrafo - clase Tailwind */
  parrafoMaxWidth?: string
  /** Espaciado entre título y párrafo - clase Tailwind */
  gap?: string
  /** Clases adicionales para el contenedor */
  className?: string
}

/**
 * Componente compuesto de Titulo + Parrafo.
 * Usa los primitivos Titulo y Parrafo internamente.
 *
 * Uso:
 * <BloqueTexto
 *   titulo="Mi Título"
 *   parrafo="Mi descripción aquí..."
 *   tituloFontSize="text-5xl"
 *   parrafoFontSize="text-xl"
 * />
 */
export function BloqueTexto({
  titulo,
  parrafo,
  tituloAs = 'h2',
  tituloFontSize = 'text-4xl md:text-5xl',
  tituloFontWeight = 'font-bold',
  tituloTracking = 'tracking-tight',
  tituloLineHeight = 'leading-tight',
  tituloColor = 'text-foreground',
  tituloWidth,
  parrafoFontSize = 'text-lg md:text-xl',
  parrafoFontWeight = 'font-normal',
  parrafoTracking = 'tracking-normal',
  parrafoLineHeight = 'leading-relaxed',
  parrafoColor = 'text-muted-foreground',
  parrafoWidth,
  parrafoMaxWidth,
  gap = 'gap-4',
  className,
}: BloqueTextoProps) {
  return (
    <div className={cn('flex flex-col', gap, className)}>
      <Titulo
        as={tituloAs}
        fontSize={tituloFontSize}
        fontWeight={tituloFontWeight}
        tracking={tituloTracking}
        lineHeight={tituloLineHeight}
        textColor={tituloColor}
        width={tituloWidth}
      >
        {titulo}
      </Titulo>
      <Parrafo
        fontSize={parrafoFontSize}
        fontWeight={parrafoFontWeight}
        tracking={parrafoTracking}
        lineHeight={parrafoLineHeight}
        textColor={parrafoColor}
        width={parrafoWidth}
        maxWidth={parrafoMaxWidth}
      >
        {parrafo}
      </Parrafo>
    </div>
  )
}
