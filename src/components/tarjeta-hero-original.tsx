"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@brandpetram/componentes-2026/ui"

export function TarjetaHeroOriginal() {
  return (
    <div className="max-w-md bg-blue-600/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
      {/* Sección de badges */}
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">{"Built to Suit"}</span>
        </div>
        <div className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <span className="text-sm font-medium">{"Sustainable Design"}</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Título principal */}
      <h1 className="text-5xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl xl:text-5xl mb-6">
        {"Los Expertos en Parques Industriales en Mexicali"}
      </h1>

      {/* Descripción */}
      <p className="text-lg text-white/70 text-pretty md:text-xl lg:text-xl max-w-3xl mb-10 leading-relaxed">
        {
          "60 años creando soluciones llave en mano para empresas globales en parques y espacios industriales en Mexicali"
        }
      </p>

      {/* Botones CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="text-base px-8 py-6 h-auto">
          {"Conocer más"}
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="text-base px-8 py-6 h-auto text-white border border-white/20 hover:bg-white/10 hover:text-white"
        >
          <span>{"Contactar"}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
