import { cn } from '@/lib/utils'

interface LineaLFlexProps {
  /** Orientación de la L */
  orientacion?: 'right' | 'left'
  /** Largo de la línea horizontal - clase Tailwind (ej: w-32, w-full, w-[200px]) */
  anchoHorizontal?: string
  /** Largo de la línea vertical - clase Tailwind (ej: h-32, h-full, h-[200px]) */
  altoVertical?: string
  /** Grosor de la línea en píxeles */
  grosor?: number
  /** Color de la línea - clase Tailwind de bg (ej: bg-gray-300, bg-foreground) */
  color?: string
  /** Clases adicionales */
  className?: string
}

/**
 * Línea decorativa en forma de L usando flexbox.
 * Versión que respeta items-start, items-center, items-end del contenedor padre.
 *
 * Estructura: línea horizontal + línea vertical conectadas con flexbox.
 *
 * Uso:
 * <div className="flex items-end"> // Control de alineación desde el padre
 *   <LineaLFlex
 *     orientacion="right"
 *     anchoHorizontal="w-full"
 *     altoVertical="h-48"
 *   />
 *   <div>Contenido alineado</div>
 * </div>
 */
export function LineaLFlex({
  orientacion = 'right',
  anchoHorizontal = 'w-full',
  altoVertical = 'h-32',
  grosor = 1,
  color = 'bg-muted-foreground/30',
  className,
}: LineaLFlexProps) {
  if (orientacion === 'right') {
    // Línea horizontal a la izquierda, vertical a la derecha (hacia abajo)
    return (
      <div
        className={cn('flex items-start', anchoHorizontal, className)}
        aria-hidden="true"
      >
        {/* Línea horizontal */}
        <div
          className={cn('flex-1', color)}
          style={{ height: `${grosor}px` }}
        />
        {/* Línea vertical */}
        <div
          className={cn(altoVertical, color)}
          style={{ width: `${grosor}px` }}
        />
      </div>
    )
  }

  // orientacion === 'left'
  // Línea vertical a la izquierda (hacia abajo), horizontal a la derecha
  return (
    <div
      className={cn('flex items-start', anchoHorizontal, className)}
      aria-hidden="true"
    >
      {/* Línea vertical */}
      <div
        className={cn(altoVertical, color)}
        style={{ width: `${grosor}px` }}
      />
      {/* Línea horizontal */}
      <div
        className={cn('flex-1', color)}
        style={{ height: `${grosor}px` }}
      />
    </div>
  )
}
