"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TarjetaHeroOriginal() {
  return (
    <div className="max-w-md mt-32 md:mt-0 1024:mt-0 1200:mt-6 1280:mt-6 1366:mt-6 1440:mt-6 1536:mt-10 1728:mt-6 1920:mt-6 md:bg-blue-600/60 md:backdrop-blur-sm rounded-2xl p-0 md:p-8 1024:p-12 md:border border-white/20 shadow-lg">
      {/* Sección de badges */}
      <div className="hidden 360:flex items-center gap-3 mb-3">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-sm md:text-base 1024:text-lg 1200:text-sm 1280:text-sm 1366:text-sm 1440:text-base 1536:text-base 1728:text-base 1920:text-base font-medium text-white">{"Built to Suit"}</span>
        </div>
        <div className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <span className="text-sm md:text-base 1024:text-lg 1200:text-sm 1280:text-sm 1366:text-sm 1440:text-base 1536:text-base 1728:text-base 1920:text-base font-medium">{"Sustainable Design"}</span>
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 1024:h-5 1024:w-5 1200:h-4 1200:w-4 1280:h-4 1280:w-4 1366:h-4 1366:w-4 1440:h-5 1440:w-5 1536:h-5 1536:w-5 1728:h-5 1728:w-5 1920:h-5 1920:w-5" />
        </div>
      </div>

      {/* Título principal */}
      <h1 className="text-3xl 360:text-4xl 393:text-5xl leading-none font-bold tracking-tight text-white text-balance md:text-5xl 1024:text-6xl 1200:text-4xl 1280:text-4xl 1366:text-4xl 1440:text-5xl 1536:text-5xl 1728:text-5xl 1920:text-5xl mb-6">
        {"Los Expertos en Parques Industriales en Mexicali"}
      </h1>

      {/* Descripción */}
      <p className="text-lg text-white/70 text-pretty md:text-xl 1024:text-2xl 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl max-w-3xl mb-10 leading-relaxed">
        {
          "60 años creando soluciones llave en mano para empresas globales en parques y espacios industriales en Mexicali"
        }
      </p>

      {/* Botones CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="text-base md:text-lg 1024:text-xl 1200:text-base 1280:text-base 1366:text-base 1440:text-lg 1536:text-lg 1728:text-lg 1920:text-lg px-8 py-6 h-auto">
          {"Conocer más"}
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="text-base md:text-lg 1024:text-xl 1200:text-base 1280:text-base 1366:text-base 1440:text-lg 1536:text-lg 1728:text-lg 1920:text-lg px-8 py-6 h-auto text-white border border-white/20 hover:bg-white/10 hover:text-white"
        >
          <span>{"Contactar"}</span>
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 1024:h-6 1024:w-6 1200:h-5 1200:w-5 1280:h-5 1280:w-5 1366:h-5 1366:w-5 1440:h-6 1440:w-6 1536:h-6 1536:w-6 1728:h-6 1728:w-6 1920:h-6 1920:w-6" />
        </Button>
      </div>
    </div>
  )
}
