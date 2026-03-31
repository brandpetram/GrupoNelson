/**
 * Componente: Beta
 * Creado: 5 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Fase 1: Construir (sin responsive completo todavía)
 */

"use client"

import Image from "next/image"

export function Beta() {
  return (
    <div data-component="Beta" data-component-file="src/components/brandpetram/beta.tsx" data-component-props="false" className="relative flex flex-col md:flex-row gap-12 1200:translate-x-10 1280:translate-x-16 1366:translate-x-0  ">
      {/* Columna 1: Textos arriba + Imagen abajo */}
      <div className="flex flex-col gap-8 md:w-5/12">
        {/* Sección de textos */}
        <div className="space-y-4 md:w-10/12 1200:w-8/12 md:translate-x-10 1024:translate-x-16 1200:translate-x-0 1366:translate-x-20 -mt-50 md:mt-0 md:-translate-y-50 1200:-translate-y-30 1280:-translate-y-30 1366:-translate-y-30 1440:-translate-y-35 1536:-translate-y-40 1728:-translate-y-40 1920:-translate-y-40">
          <h2 className="text-4xl 1024:text-[3.4rem] 1200:text-[3rem] 1280:text-[3rem] 1536:text-[3.5rem] 1728:text-[3.7rem] 1920:text-[3.5rem] font-bold text-foreground leading-none tracking-tight">
            Nave a <span className="text-orange-600">la medida</span> vs. nave especulativa
          </h2>
          <p className="text-lg 834:text-xl 1024:text-2xl 1200:text-lg 1280:text-[.7rem] 1366:text-[.8rem] 1440:text-[1rem] 1536:text-[1.1rem] 1728:text-[1.3rem] 1920:text-[1.5rem] text-muted-foreground leading-relaxed 1280:w-10/12 1536:w-full">
            Una nave especulativa se construye sin cliente — dimensiones estándar, sistemas genéricos. Build-to-suit elimina ese compromiso: <strong>Gulfstream</strong> necesitó 52,200 m² con sistemas antisísmicos BRB y 20 MW de capacidad eléctrica. <strong>Skyworks</strong> necesitó un puente de 95 metros. Baumex los diseñó y construyó a la medida.
          </p>
        </div>

        {/* Imagen abajo */}
        <div className="absolute bottom-0 ml-4 360:ml-10 md:ml-0 w-[16rem] md:w-[30rem] 1200:w-[23rem] 1280:w-[30rem] 1920:w-[40rem] aspect-square md:aspect-[4.5/3] md:translate-x-10 1200:translate-x-80 translate-y-30 bg-linear-to-tr from-orange-600 to-red-500 z-50 rounded-xs overflow-hidden">

        </div>
      </div>

      {/* Columna 2: Imagen con divs posicionados (contenido actual) */}
      <div className="mt-32 md:mt-0 md:w-[48%] 1024:w-[45%] 1200:w-[48%] 1280:w-[45%] 1920:w-[48%] md:aspect-[1/1.5] 1200:aspect-[4.3/3]  relative overflow-visible">
        {/* Div ABC posicionado arriba a la derecha, por detrás */}
        <div className="md:absolute translate-x-16 360:translate-x-25 393:translate-x-30 430:translate-x-40 md:translate-x-0 -translate-y-30 right-20 w-50 h-60 bg-linear-to-tr from-orange-500 to-red-600 rounded-t-xs flex items-center justify-center -z-10">
          <span className="text-[6rem] font-black text-white -translate-y-15 tracking-tighter">BTS</span>
        </div>

        {/* Div pequeño centrado en la esquina superior izquierda, por delante */}
        <div className="md:absolute md:hidden 1200:block  md:top-0 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2 w-66 h-auto aspect-1/1 md:aspect-[4/3] bg-white dark:bg-zinc-900 rounded-xs shadow-xl z-10 overflow-hidden">
          <Image
            src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-10.jpeg"
            alt="Imagen pequeña superpuesta"
            fill
            className="object-cover"
          />
        </div>

        <Image
          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-11.jpeg"
          alt="Placeholder ipsum dolor consectetur"
          fill
          className="object-cover rounded-xs"
        />
      </div>
    </div>
  )
}
