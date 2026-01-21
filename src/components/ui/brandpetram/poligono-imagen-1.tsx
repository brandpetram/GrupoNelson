import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PoligonoImagen1Props {
  /** Ruta de la imagen (puede ser absoluta o de public/) */
  src: string;
  /** Texto alternativo para la imagen */
  alt: string;
  /** Color del overlay en formato CSS (ej: 'rgba(0,0,0,0.5)', '#000000', 'bg-black/50') */
  overlayColor?: string;
  /** Texto a mostrar sobre la imagen */
  text?: string;
  /** Color del texto en formato CSS o clase Tailwind */
  textColor?: string;
  /** Posición del objeto de la imagen - clase Tailwind (ej: 'object-center', 'object-top', 'object-[center_bottom]') */
  objectPosition?: string;
  /** Clase adicional para el contenedor */
  className?: string;
}

/**
 * Componente polígono para mostrar una imagen con overlay opcional y texto.
 * El tamaño es determinado por el contenedor padre.
 * IMPORTANTE: El contenedor padre debe tener dimensiones definidas (width y height)
 */
export function PoligonoImagen1({
  src,
  alt,
  overlayColor,
  text,
  textColor = 'text-white',
  objectPosition = 'object-center',
  className,
}: PoligonoImagen1Props) {
  return (
    <div className={cn('group relative block overflow-hidden w-full h-full', className)}>
      {/* Imagen */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          'object-cover  rounded-xs',
          objectPosition
        )}
      />

      {/* Overlay con opacidad al hacer hover - solo si se proporciona overlayColor */}
      {overlayColor && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      {/* Texto */}
      {text && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p
            className={cn(
              'px-4 text-center text-xl font-semibold',
              textColor
            )}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
