import { cn } from '@/lib/utils';

interface PoligonoTexto1Props {
  /** Texto a mostrar en el polígono */
  text: string;
  /** Color de fondo - puede ser cualquier clase de Tailwind o color CSS */
  backgroundColor?: string;
  /** Color del texto - puede ser cualquier clase de Tailwind */
  textColor?: string;
  /** Tamaño de fuente - puede ser cualquier clase de Tailwind (ej: text-7xl) */
  fontSize?: string;
  /** Tamaño de fuente - puede ser cualquier clase de Tailwind (ej: text-7xl) */
  fontTracking?: string;
  /**Espacio entre letras - puede ser cualquier clase de Tailwind */
  lineHeight?: string;
    /**Espacio entre lineas - puede ser cualquier clase de Tailwind */
  fontWeight?: string;
  /** Alineación del texto */
  textAlign?: 'text-left' | 'text-center' | 'text-right';
  /** Espaciado interno */
  textWidth?: string;
    /** Width del contenedor */
  padding?: string;
  /** Clase adicional para el contenedor */
  className?: string;
  /** Habilitar efecto hover de escala */
  hoverScale?: boolean;
}

/**
 * Componente polígono para mostrar texto con fondo personalizable.
 * El tamaño es determinado por el contenedor padre.
 * Acepta cualquier clase válida de Tailwind CSS para personalización total.
 */
export function PoligonoTexto1({
  text,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-900',
  fontSize = 'text-xl',
    textWidth = 'w-full',
  fontWeight = 'font-semibold',
    fontTracking = 'tracking-tighter',
    lineHeight = 'leading-none',
  textAlign = 'text-center',
  padding = 'p-4',
  className,
  hoverScale = true,
}: PoligonoTexto1Props) {
  // Determinar si backgroundColor es una clase de Tailwind o un color CSS
  const isCustomColor = backgroundColor.includes('rgba') ||
                        backgroundColor.includes('rgb') ||
                        backgroundColor.includes('#') ||
                        backgroundColor.includes('hsl');

  return (
    <div
      className={cn(
        'group relative flex items-center justify-center w-full h-full overflow-hidden',
        !isCustomColor && backgroundColor,
        className
      )}
      style={isCustomColor ? { backgroundColor } : undefined}
    >
      <p
        className={cn(
          padding,
          fontSize,
          fontWeight,
          fontTracking,
          lineHeight,
          textWidth,
          textColor,
          textAlign,
          'break-words transition-transform duration-300',
          hoverScale && 'group-hover:scale-110'
        )}
      >
        {text}
      </p>
    </div>
  );
}