import { cn } from '@/lib/utils'

interface ParrafoProps {
  /** Texto del párrafo */
  children: React.ReactNode
  /** Elemento HTML a renderizar */
  as?: 'p' | 'span' | 'div'
  /** Tamaño de fuente - clase Tailwind */
  fontSize?: string
  /** Peso de fuente - clase Tailwind */
  fontWeight?: string
  /** Espaciado entre letras - clase Tailwind */
  tracking?: string
  /** Altura de línea - clase Tailwind */
  lineHeight?: string
  /** Color del texto - clase Tailwind */
  textColor?: string
  /** Ancho del texto - clase Tailwind (ej: w-full, w-1/2) */
  width?: string
  /** Ancho máximo del texto - clase Tailwind (ej: max-w-prose, max-w-2xl) */
  maxWidth?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Componente primitivo para párrafos.
 * Personalizable via props de Tailwind.
 *
 * Uso:
 * <Parrafo fontSize="text-lg" lineHeight="leading-relaxed">
 *   Mi texto aquí...
 * </Parrafo>
 */
export function Parrafo({
  children,
  as: Component = 'p',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  tracking = 'tracking-normal',
  lineHeight = 'leading-relaxed',
  textColor = 'text-muted-foreground',
  width,
  maxWidth,
  className,
}: ParrafoProps) {
  return (
    <Component
      className={cn(
        fontSize,
        fontWeight,
        tracking,
        lineHeight,
        textColor,
        width,
        maxWidth,
        className
      )}
    >
      {children}
    </Component>
  )
}
