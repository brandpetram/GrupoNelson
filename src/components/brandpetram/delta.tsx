/**
 * Componente: Delta
 * Creado: 6 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Layout: Imagen a la izquierda + Texto grande a la derecha (centrado verticalmente)
 * Fase 1: Construir (sin responsive completo todavía)
 */

"use client"

import Image from "next/image"

export function Delta({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const title = lang === 'en'
    ? <>Your Facility, Exactly<br/>As You Envisioned It</>
    : <>Tu Nave Como<br/>Siempre la Quisiste</>

  return (
    <div data-component="Delta" data-component-file="src/components/brandpetram/delta.tsx" data-component-props="false" className="relative flex flex-col 768:flex-row items-center gap-0">
      {/* Imagen */}
      <div className="w-full 768:w-[50rem] aspect-[3.3/3] relative rounded-t-xs overflow-hidden">
        <Image
          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
          alt="Imagen"
          fill
          className="object-cover"
        />
      </div>

      {/* Texto — en móvil se superpone sobre la imagen */}
      <div className="absolute inset-0 flex items-center justify-center 768:static 768:flex-1">
        <h2 className="text-3xl 768:text-5xl 1200:text-6xl 1536:text-7xl 1920:text-8xl font-black text-white 768:text-foreground leading-none tracking-tighter">
          {title}
        </h2>
      </div>
    </div>
  )
}
