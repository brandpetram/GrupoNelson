/**
 * Componente: Alpha (Brandpetramizado)
 * Creado: 5 de febrero de 2026
 * Brandpetramizado: 5 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Este componente fue brandpetramizado con los 13 breakpoints granulares
 * aplicados a todos los textos y widths.
 *
 * Breakpoints: 360, 393, 430, 768, 834, 1024, 1200, 1280, 1366, 1440, 1536, 1728, 1920
 */

"use client"

import Image from "next/image"

export function AlphaBP() {
  return (
    <div className="relative space-y-12 360:space-y-14 393:space-y-16 430:space-y-18 768:space-y-20 834:space-y-22 1024:space-y-24 1200:space-y-20 1280:space-y-20 1366:space-y-20 1440:space-y-22 1536:space-y-24 1728:space-y-26 1920:space-y-28">
      {/* Patrón de dots - Lado izquierdo pegado al viewport */}
      <svg
        aria-hidden="true"
        className="absolute top-0 -left-10 -translate-y-18 1728:-translate-y-50 w-32 360:w-32 393:w-36 430:w-40 768:w-20 834:w-30 1024:w-30 1200:w-40 1280:w-40 1366:w-44 1440:w-48 1536:w-52 1728:w-56 1920:w-50 h-48 360:h-48 393:h-56 430:h-64 768:h-64 834:h-72 1024:h-80 1200:h-43 1280:h-48 1366:h-58 1440:h-68 1536:h-78 1728:h-86 1920:h-90 text-foreground/10 pointer-events-none z-0"
      >
        <defs>
          <pattern
            id="dot-pattern-left-bp"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          fill="url(#dot-pattern-left-bp)"
          width="100%"
          height="100%"
        />
      </svg>

      {/* Patrón de dots - Lado derecho pegado al viewport */}
        {/* SVG para mobile - dots más pequeños */}
        <svg
            aria-hidden="true"
            className="md:hidden absolute top-16 right-0 w-48 h-160 text-foreground/10 pointer-events-none z-0"
        >
            <defs>
                <pattern
                    id="dot-pattern-right-bp-mobile"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                </pattern>
            </defs>
            <rect fill="url(#dot-pattern-right-bp-mobile)" width="100%" height="100%" />
        </svg>

        {/* SVG para desktop - dots más grandes */}
        <svg
            aria-hidden="true"
            className="hidden md:block absolute top-16 md:top-20 1024:top-24 1200:top-20 1280:top-20 1366:top-22 1440:top-24 1536:top-28
  1728:top-32 1920:top-36 right-0 w-48 md:w-36 1024:w-34 1200:w-[6rem] 1280:w-[7rem] 1366:w-[8rem] 1440:w-[9rem] 1536:w-[10rem]
  1728:w-[12rem] 1920:w-[14rem] h-160 md:h-192 1024:h-224 1200:h-200 1280:h-200 1366:h-224 1440:h-240 1536:h-256 1728:h-280
  1920:h-300 text-foreground/10 pointer-events-none z-0"
        >
            <defs>
                <pattern
                    id="dot-pattern-right-bp-desktop"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                </pattern>
            </defs>
            <rect fill="url(#dot-pattern-right-bp-desktop)" width="100%" height="100%" />
        </svg>

      {/* Sección de textos arriba */}
      <div className="flex flex-col 1200:flex-row  gap-8 360:gap-8 393:gap- 430:gap-10 768:gap-12 834:gap-12 1024:gap-14 1200:gap-12 1280:gap-12 1366:gap-14 1440:gap-16 1536:gap-16 1728:gap-18 1920:gap-20 w-full 360:w-full 393:w-11/12 430:w-11/12 768:w-11/12 834:w-10/12 1024:w-10/12 1200:w-10/12 1280:w-10/12 1366:w-10/12 1440:w-10/12 1536:w-10/12 1728:w-10/12 1920:w-10/12 translate-x-3 360:translate-x-3 393:translate-x-8 430:translate-x-6 768:translate-x-10 834:translate-x-14 1024:translate-x-22 1200:translate-x-40 1280:translate-x-48 1366:translate-x-52 1440:translate-x-56 1536:translate-x-60 1728:translate-x-60 1920:translate-x-60 ">
        {/* H2 - Lado izquierdo */}
        <div className="flex-1 ">
          <h2 className="768:mt-5 834:mt-5 1024:mt-6 1200:mt-5 1280:mt-5 1366:mt-5 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6 text-4xl 360:text-5xl 393:text-5xl 430:text-[3.5rem] 768:text-7xl 834:text-7xl 1024:text-8xl 1200:text-[4rem] 1280:text-[4.3rem] 1366:text-[4.7rem] 1440:text-[5rem] 1536:text-[5.3rem] 1728:text-[6rem] 1920:text-[7rem] font-extrabold text-foreground leading-none tracking-tighter">
            Ipsum temporis <br/>
              ex voluptatum.
          </h2>
        </div>

        {/* Párrafo - Lado derecho */}
        <div className="flex-1 place-content-center">
          <p className="text-sm 360:text-sm 393:text-base 430:text-base 768:text-2xl 834:text-2xl 1024:text-3xl 1200:text-lg 1280:text-lg 1366:text-xl 1440:text-xl 1536:text-2xl 1728:text-2xl 1920:text-[1.7rem] md:max-w-xl tracking-wider leading-loose -mt-3 md:mt-0  w-11/12 1200:w-[19rem] 1280:w-[22rem] 1366:w-[22rem] 1440:w-[22rem] 1536:w-[24rem] 1728:w-[30rem] 1920:w-[32rem] text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>

      {/* Layout existente de imagen + div naranja */}
      <div className="relative flex items-center translate-x-0 360:translate-x-0 393:translate-x-4 430:translate-x-8 768:translate-x-8 834:translate-x-10 1024:translate-x-10 1200:translate-x-24 1280:translate-x-28 1366:translate-x-30 1440:translate-x-30 1536:translate-x-30 1728:translate-x-30 1920:translate-x-30">
      {/* Imagen */}
      <div className="w-full 360:w-full 393:w-11/12 430:w-10/12 768:w-9/12 834:w-9/12 1024:w-8/12 1200:w-8/12 1280:w-8/12 1366:w-8/12 1440:w-8/12 1536:w-8/12 1728:w-8/12 1920:w-8/12 aspect-[4/3] 360:aspect-[4/3] 393:aspect-[4/3] 430:aspect-[4.5/3] 768:aspect-[2.8/3] 834:aspect-[3/3] 1024:aspect-[3/3] 1200:aspect-[4.5/3] 1280:aspect-[4.5/3] 1366:aspect-[4.5/3] 1440:aspect-[4.5/3] 1536:aspect-[4.5/3] 1728:aspect-[4.5/3] 1920:aspect-[4.5/3] relative rounded-xs overflow-hidden">
        <Image
          src="/parque-industrial-nelson-2-en-mexicali-2.jpeg"
          alt="Placeholder ipsum dolor consectetur"
          fill
          className="object-cover"
        />
      </div>

      {/* Div con contenido - posicionado con translate negativo */}
      <div className="relative -translate-x-20 360:-translate-x-20 393:-translate-x-24 430:-translate-x-28 768:-translate-x-20 834:-translate-x-26 1024:-translate-x-30 1200:-translate-x-44 1280:-translate-x-48 1366:-translate-x-52 1440:-translate-x-54 1536:-translate-x-57 1728:-translate-x-60 1920:-translate-x-60 w-full 360:w-full 393:w-11/12 430:w-10/12 768:w-9/12 834:w-9/12 1024:w-8/12 1200:w-[26rem] 1280:w-[28rem] 1366:w-[30rem] 1440:w-[32rem] 1536:w-[34rem] 1728:w-[33rem] 1920:w-[40rem] bg-gradient-to-br from-orange-600/95 to-red-600/95 backdrop-blur-sm rounded-xs p-8 360:p-8 393:p-10 430:p-12 768:p-12 834:p-14 1024:p-16 1200:p-14 1280:p-15 1366:p-16 1440:p-17 1536:p-17 1728:p-18 1920:p-20 border border-white/20 shadow-2xl z-10">
        {/* Título principal - h1 vacío eliminado por no tener contenido */}

        {/* Descripción */}
        <p className="text-base 360:text-base 393:text-lg 430:text-lg 768:text-2xl 834:text-2xl 1024:text-3xl 1200:text-[1.65rem] 1280:text-[1.75rem] 1366:text-[1.9rem] 1440:text-[2.05rem] 1536:text-[2.25rem] 1728:text-[2.5rem] 1920:text-[3rem] text-white/90 text-pretty leading-relaxed font-medium">
          {
            "Soluciones exemplaris constructae specificamente optimizar perfectum maximae altissimos."
          }
        </p>
      </div>
    </div>
    </div>
  )
}
