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

export function Delta() {
  return (
    <div data-component="Delta" data-component-file="src/components/brandpetram/delta.tsx" data-component-props="false" className="flex items-center gap-0">
      {/* Div izquierdo: Imagen */}
      <div className="w-[50rem] aspect-[3.3/3] relative rounded-t-xs overflow-hidden">
        <Image
          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-9.jpeg"
          alt="Imagen"
          fill
          className="object-cover"
        />
      </div>

      {/* Div derecho: Texto muy grande (una palabra) */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-5xl 1200:text-6xl 1536:text-7xl 1920:text-8xl font-black text-foreground leading-none tracking-tighter">
          Tu Nave Como<br/>Siempre la Quisiste
        </h2>
      </div>
    </div>
  )
}
