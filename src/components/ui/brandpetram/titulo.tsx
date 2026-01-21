import { cn } from '@/lib/utils'

interface TituloProps {
  /** Texto del título */
  children: React.ReactNode
  /** Elemento HTML a renderizar */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
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
  /** Ancho del texto - clase Tailwind (ej: w-full, w-1/2, max-w-prose) */
  width?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Componente primitivo para títulos.
 * Personalizable via props de Tailwind.
 *
 * Uso:
 * <Titulo as="h1" fontSize="text-5xl" fontWeight="font-bold">
 *   Mi Título
 * </Titulo>
 */
export function Titulo({
  children,
  as: Component = 'h2',
  fontSize = 'text-4xl',
  fontWeight = 'font-bold',
  tracking = 'tracking-tight',
  lineHeight = 'leading-tight',
  textColor = 'text-foreground',
  width,
  className,
}: TituloProps) {
  return (
    <Component
      className={cn(
        fontSize,
        fontWeight,
        tracking,
        lineHeight,
        textColor,
        width,
        className
      )}
    >
      {children}
    </Component>
  )
}
