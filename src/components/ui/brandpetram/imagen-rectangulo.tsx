import Image from 'next/image'
import { cn } from '../../../lib/utils'
import { GridOverlay } from '../grid'
import type { GridProps } from '../grid'

type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'

interface ImagenRectanguloProps {
  /**
   * URL de la imagen (local o CDN firmada)
   * @default "/brandpetram/imagen-de-template-1.jpg"
   * @description Para CDN, usar resolveImageUrl() en un Server Component antes de pasar la URL
   */
  src?: string

  /**
   * Alt text para accesibilidad
   * @default "Imagen"
   */
  alt?: string

  /**
   * Clases CSS (aspect ratio, bordes, sombras, etc.)
   * @example "aspect-video", "aspect-square md:aspect-[21/9]"
   */
  className?: string

  /**
   * Opacidad del overlay oscuro sobre la imagen (0-1)
   * @example 0.3 para oscurecer 30%
   */
  overlayOpacity?: number

  /**
   * Clases de gradiente o color para overlay con efecto
   * @example "bg-gradient-to-r from-blue-600/50 to-purple-600/50"
   * @example "bg-blue-600/40"
   */
  colorOverlay?: string

  /**
   * Blend mode para el color overlay
   * @default "normal"
   * @example "multiply" para efecto duotono oscuro
   * @example "screen" para efecto luminoso
   * @example "color" para teñir la imagen
   */
  blendMode?: BlendMode

  /**
   * Configuración opcional del grid overlay sobre la imagen
   * Si se omite, no se muestra el grid
   */
  gridConfig?: Omit<GridProps, 'mode' | 'children' | 'height'>
}

export function ImagenRectangulo({
  src = '/brandpetram/imagen-de-template-1.jpg',
  alt = 'Imagen',
  className,
  overlayOpacity,
  colorOverlay,
  blendMode = 'normal',
  gridConfig,
}: ImagenRectanguloProps) {
  const needsRelative = gridConfig || overlayOpacity !== undefined || colorOverlay

  return (
    <div className={cn('aspect-video overflow-hidden', needsRelative && 'relative', className)}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="size-full object-cover"
      />

      {/* Overlay oscuro opcional */}
      {overlayOpacity !== undefined && overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Color overlay con blend mode opcional */}
      {colorOverlay && (
        <div
          className={cn('absolute inset-0 pointer-events-none', colorOverlay)}
          style={{ mixBlendMode: blendMode }}
          aria-hidden="true"
        />
      )}

      {/* Grid Overlay opcional (encima de todos los overlays) */}
      {gridConfig && <GridOverlay {...gridConfig} />}
    </div>
  )
}
