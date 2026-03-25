/**
 * Componente: Gamma
 * Creado: 6 de febrero de 2026
 * Proyecto: ABC Industrial - Industria Alimenticia
 *
 * Fase 1: Construir (sin responsive completo todavía)
 */

"use client"

import Image from "next/image"
import {CuadritosLluvia} from "@/components/ui/brandpetram/cuadritos-lluvia"

export function Gamma() {
  return (
      <div>
          <h2 className="1200:-translate-y-10 -mt-24 translate-x-7 1200:translate-x-40 text-4xl 360:text-5xl 393:text-5xl 430:text-[3.5rem] 768:text-7xl 834:text-7xl 1024:text-8xl 1200:text-[3.4rem] 1280:text-[4rem] 1366:text-[4.2rem] 1440:text-[4.5rem] 1536:text-[5rem] 1728:text-[5rem] 1920:text-[6rem] font-extrabold text-foreground leading-none tracking-tighter">
              Naves Industriales<br/>
              Fabricadas a la Medida.
          </h2>
          <div className="flex justify-center">

              {/* Contenedor principal centrado */}
              <div
                  className="mt-32 md:mt-20 1200:mt-24 1920:mt-32 md:w-[90%] 1024:w-[90%] 1200:w-[60%] 1280:w-[60%] 1920:w-[60%] md:aspect-[1/1.5] 1200:aspect-[5.3/3] relative overflow-visible">
                  {/* Div ABC centrado horizontalmente en el top, por detrás */}
                  <div
                      className="absolute -translate-y-15 right-10 1200:left-1/2 1200:-translate-x-1/2 w-50 h-60 bg-gradient-to-tr from-orange-500 to-red-600 rounded-t-xs flex items-center justify-center -z-10">
                  </div>

                  {/* Div pequeño centrado en la esquina superior izquierda, por delante */}
                  <div
                      className="md:absolute md:hidden 1200:block md:top-0 md:right-0 md:translate-x-1/2 md:-translate-y-[9rem] 1280:w-60 1366:w-80 h-auto aspect-1/1 md:aspect-square bg-white rounded-xs shadow-xl z-10 overflow-hidden">
                      <Image
                          src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-12.jpeg"
                          alt="Imagen pequeña superpuesta"
                          fill
                          className="object-cover"
                      />
                  </div>
                  <div
                      className="md:absolute md:hidden 1200:block md:bottom-0 md:right-0 md:translate-x-1/2 md:translate-y-[9rem] 1366:translate-y-[2rem] 1280:w-90 1366:w-105 h-auto aspect-square bg-orange-500 to-red-500 bg-linear-to-b text-white rounded-xs shadow-xl z-10 overflow-visible flex flex-col justify-center p-10">
                      <h2 className="text-3xl 1366:text-4xl 1728:text-5xl 1920:text-5xl font-extrabold leading-none tracking-tighter mb-4">¿Cuántos<br/>Megawatts?<br/>Los que necesites.</h2>
                      <p className="text-sm 1366:text-base 1728:text-lg text-white/80 leading-relaxed">La especificación eléctrica la defines tú. Nosotros diseñamos la subestación, gestionamos con CFE y la instalamos.</p>
                      <div className="absolute bottom-0 left-0 translate-y-1/2 pointer-events-none z-10">
                        <CuadritosLluvia />
                      </div>
                  </div>
                  <Image
                      src="/grupo-nelson-naves-en-parques-industriales-en-mexicali-13.jpeg"
                      alt="Placeholder ipsum dolor consectetur"
                      fill
                      className="object-cover rounded-xs"
                  />
              </div>
          </div>
      </div>
  )
}
