/**
 * ImagenConEtiquetaConProps - Componente único e irrepetible
 *
 * Imagen con etiqueta de Texto
 * Solo contenido es configurable (imagen, alt, etiqueta).
 * Todos los estilos están hardcodeados.
 */

import Image from 'next/image'

interface ImagenConEtiquetaConProps {
  /** Ruta de la imagen */
  src: string
  /** Texto alternativo para la imagen */
  alt: string
  /** Texto de la etiqueta */
  etiqueta: string
}

export function ImagenConEtiquetaConProps({
  src,
  alt,
  etiqueta
}: ImagenConEtiquetaConProps) {
  return (
    <div className="relative w-full h-full rounded-none overflow-visible">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-[inherit]"
      />

      {/* Polígono decorativo - top left */}
      <div
        className="absolute top-0 left-0 md:w-25 834:w-32 1024:w-35 aspect-[1/1] bg-background opacity-100 rounded-none"
        aria-hidden="true"
      />

      {/* Etiqueta de texto - bottom left */}
      <div className="absolute bottom-0 left-0 translate-y-5 md:translate-y-[120px] translate-x-0 rounded-none rounded-tr-none rounded-tr-3xl bg-background opacity-100 text-foreground text-4xl 393:text-[2.5rem] md:text-[5rem] 1024:text-[7rem] 1200:text-[8rem] 1440:text-[8.5rem] font-black leading-[2rem] 393:leading-[2.4rem] md:leading-[4.5rem] 1024:leading-[6rem] 1200:leading-[7rem] tracking-tight w-[14rem] 393:w-[16rem] md:w-[30rem] 1024:w-[39rem] 1200:w-[46rem] 1280:w-[44rem] 1366:w-7/12 1536:w-[47rem] 1728:w-[49rem] whitespace-normal px-4 py-2 md:px-6 md:py-3">
        {etiqueta}
      </div>
    </div>
  )
}
