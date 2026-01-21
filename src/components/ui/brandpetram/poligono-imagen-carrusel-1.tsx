'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface ImagenCarrusel {
  /** Ruta de la imagen */
  src: string;
  /** Texto alternativo para la imagen */
  alt: string;
  /** Color del overlay opcional para esta imagen */
  overlayColor?: string;
  /** Texto opcional para esta imagen */
  text?: string;
}

interface PoligonoImagenCarrusel1Props {
  /** Array de imágenes para el carrusel */
  imagenes: ImagenCarrusel[];
  /** Color del texto - clase Tailwind */
  textColor?: string;
  /** Posición del objeto de la imagen - clase Tailwind */
  objectPosition?: string;
  /** Intervalo de cambio automático en milisegundos (default: 5000ms / 5 segundos) */
  autoplayInterval?: number;
  /** Habilitar autoplay (default: true) */
  autoplay?: boolean;
  /** Duración de la transición en segundos (default: 0.6) */
  transitionDuration?: number;
  /** Mostrar indicadores (dots) de navegación (default: true) */
  showIndicators?: boolean;
  /** Habilitar efecto hover en imagen (scale) (default: false) */
  enableHoverScale?: boolean;
  /** Mostrar overlay y texto en hover (default: false) */
  enableHoverOverlay?: boolean;
  /** Clase adicional para el contenedor */
  className?: string;
}

/**
 * Componente carrusel de imágenes con transiciones elegantes usando motion/react.
 * El tamaño es determinado por el contenedor padre.
 *
 * @example
 * <PoligonoImagenCarrusel1
 *   imagenes={[
 *     { src: '/img1.jpg', alt: 'Imagen 1', text: 'Texto 1' },
 *     { src: '/img2.jpg', alt: 'Imagen 2', overlayColor: 'rgba(0,0,0,0.5)' }
 *   ]}
 *   autoplayInterval={4000}
 * />
 */
export function PoligonoImagenCarrusel1({
  imagenes,
  textColor = 'text-white',
  objectPosition = 'object-center',
  autoplayInterval = 5000,
  autoplay = true,
  transitionDuration = 0.6,
  showIndicators = true,
  enableHoverScale = false,
  enableHoverOverlay = false,
  className,
}: PoligonoImagenCarrusel1Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!autoplay || imagenes.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagenes.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, imagenes.length]);

  const currentImage = imagenes[currentIndex];

  return (
    <div className={cn('group relative block overflow-hidden w-full h-full', className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Imagen */}
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              'object-cover transition-transform duration-300',
              enableHoverScale && 'group-hover:scale-105',
              objectPosition
            )}
          />

          {/* Overlay con opacidad al hacer hover - solo si está habilitado y se proporciona overlayColor */}
          {enableHoverOverlay && currentImage.overlayColor && (
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ backgroundColor: currentImage.overlayColor }}
            />
          )}

          {/* Texto - solo si está habilitado el hover overlay */}
          {enableHoverOverlay && currentImage.text && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p
                className={cn(
                  'px-4 text-center text-xl font-semibold',
                  textColor
                )}
              >
                {currentImage.text}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Indicadores (dots) */}
      {showIndicators && imagenes.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {imagenes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              )}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
