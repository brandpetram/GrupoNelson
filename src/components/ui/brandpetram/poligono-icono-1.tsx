import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';

interface PoligonoIcono1Props {
  /** Icono: puede ser un componente SVG (ReactNode) o ruta de imagen PNG/JPG (string) */
  icon: React.ReactNode | string;
  /** Color de fondo - puede ser cualquier clase de Tailwind o color CSS */
  backgroundColor?: string;
  /** Tamaño del icono - clases de Tailwind (ej: 'w-12 h-12', 'w-24 h-24') */
  iconSize?: string;
  /** Color del icono SVG - solo aplica si icon es un SVG */
  iconColor?: string;
  /** Texto alternativo para imágenes */
  alt?: string;
  /** Espaciado interno */
  padding?: string;
  /** Clase adicional para el contenedor */
  className?: string;
  /** Efecto hover */
  hoverEffect?: 'none' | 'rotate' | 'scale' | 'both';
}

/**
 * Componente polígono para mostrar iconos (SVG o imágenes) con fondo personalizable.
 * El tamaño del contenedor es determinado por el padre.
 * Detecta automáticamente si es SVG (ReactNode) o imagen (string).
 */
export function PoligonoIcono1({
  icon,
  backgroundColor = 'bg-white',
  iconSize = 'w-12 h-12',
  iconColor = 'text-current',
  alt = 'Icono',
  padding = 'p-4',
  className,
  hoverEffect = 'scale',
}: PoligonoIcono1Props) {
  // Determinar si es una imagen (string) o SVG (ReactNode)
  const isImage = typeof icon === 'string';

  // Determinar si backgroundColor es una clase de Tailwind o un color CSS
  const isCustomColor = backgroundColor.includes('rgba') ||
                        backgroundColor.includes('rgb') ||
                        backgroundColor.includes('#') ||
                        backgroundColor.includes('hsl');

  // Clases de efecto hover
  const hoverClasses = {
    none: '',
    rotate: 'hover:-rotate-20',
    scale: 'hover:scale-110',
    both: 'hover:-rotate-12 hover:scale-110',
  };

  return (
    <div
      className={cn(
        'relative flex items-center justify-center w-full h-full overflow-hidden',
        !isCustomColor && backgroundColor,
        padding,
        className
      )}
      style={isCustomColor ? { backgroundColor } : undefined}
    >
      <div
        className={cn(
          'transition-all duration-300',
          hoverClasses[hoverEffect]
        )}
      >
        {isImage ? (
          // Renderizar como imagen
          <div className={cn('relative', iconSize)}>
            <Image
              src={icon}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          // Renderizar como SVG
          <div className={cn(iconSize, iconColor)}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}