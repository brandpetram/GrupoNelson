import { cn } from '@/lib/utils'

interface LineaLProps {
  /** Orientación de la L (esquina donde se unen las líneas) */
  orientacion?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-left-down' | 'top-right-down' | 'center-left' | 'center-right'
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
 * Línea decorativa en forma de L.
 * Dos líneas que se encuentran en una esquina.
 *
 * Uso:
 * <LineaL
 *   orientacion="top-left"
 *   anchoHorizontal="w-full"
 *   altoVertical="h-48"
 * />
 */
export function LineaL({
  orientacion = 'top-left',
  anchoHorizontal = 'w-full',
  altoVertical = 'h-32',
  grosor = 1,
  color = 'bg-muted-foreground/30',
  className,
}: LineaLProps) {
  // Configuración de posición según orientación
  const config = {
    // Esquinas clásicas (L en la esquina)
    'top-left': {
      horizontal: 'top-0 left-0',
      vertical: 'top-0 left-0',
    },
    'top-right': {
      horizontal: 'top-0 right-0',
      vertical: 'top-0 right-0',
    },
    'bottom-left': {
      horizontal: 'bottom-0 left-0',
      vertical: 'bottom-0 left-0',
    },
    'bottom-right': {
      horizontal: 'bottom-0 right-0',
      vertical: 'bottom-0 right-0',
    },
    // Línea horizontal arriba, vertical baja desde arriba
    'top-left-down': {
      horizontal: 'top-0 left-0',
      vertical: 'top-0 left-0',
    },
    'top-right-down': {
      horizontal: 'top-0 right-0',
      vertical: 'top-0 right-0',
    },
    // Línea horizontal centrada verticalmente, vertical va desde el centro hacia abajo
    'center-left': {
      horizontal: 'top-1/2 -translate-y-1/2 left-0',
      vertical: 'top-1/2 left-0',
    },
    'center-right': {
      horizontal: 'top-1/2 -translate-y-1/2 right-0',
      vertical: 'top-1/2 right-0',
    },
  }

  const { horizontal, vertical } = config[orientacion]

  // Para center-*, el contenedor no tiene altura fija - se ajusta al contenido adyacente
  const isCentered = orientacion === 'center-left' || orientacion === 'center-right'

  if (isCentered) {
    // Contenedor usa h-full para estirarse a la altura de la celda del grid
    // La línea horizontal se centra con top-1/2, la vertical baja desde ahí
    return (
      <div
        className={cn('relative h-full', anchoHorizontal, className)}
        aria-hidden="true"
      >
        {/* Línea horizontal - centrada verticalmente */}
        <div
          className={cn('absolute top-1/2 -translate-y-1/2 left-0 w-full', color)}
          style={{ height: `${grosor}px` }}
        />
        {/* Línea vertical - desde el centro hacia abajo */}
        <div
          className={cn('absolute top-1/2', altoVertical, color, orientacion === 'center-left' ? 'left-0' : 'right-0')}
          style={{ width: `${grosor}px` }}
        />
      </div>
    )
  }

  return (
    <div
      className={cn('relative', anchoHorizontal, altoVertical, className)}
      aria-hidden="true"
    >
      {/* Línea horizontal */}
      <div
        className={cn('absolute', anchoHorizontal, color, horizontal)}
        style={{ height: `${grosor}px` }}
      />
      {/* Línea vertical */}
      <div
        className={cn('absolute', altoVertical, color, vertical)}
        style={{ width: `${grosor}px` }}
      />
    </div>
  )
}
