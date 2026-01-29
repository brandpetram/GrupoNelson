/**
 * Componente original: cuadro-circulo-con-escuadra.tsx
 * Propeado: 27 de enero de 2026
 *
 * Componente que muestra un cuadro de texto con animación y un círculo
 * con items checklist, conectados por líneas decorativas en forma de escuadra.
 */

'use client'

import { motion } from 'motion/react'
import { CuadritosLluvia } from '@/components/ui/brandpetram/cuadritos-lluvia'
import { ReactNode } from 'react'

interface CuadroCirculoConEscuadraConPropsProps {
  /** Título del cuadro (puede ser string o JSX con <br/>) */
  titulo?: ReactNode
  /** Párrafo descriptivo del cuadro */
  parrafo?: string
  /** Número grande en el círculo (ej: "360") */
  numeroCirculo?: string
  /** Símbolo después del número (ej: "°") */
  simboloNumero?: string
  /** Items del checklist en el círculo */
  itemsCirculo?: string[]
}

export function CuadroCirculoConEscuadraConProps({
  titulo = <>Conveyors<br/>de Grado<br/>Alimenticio</>,
  parrafo = "Nuestros sistemas de conveyors industriales para la industria alimenticia combinan ingeniería de precisión y estrictos estándares de higiene, garantizando soluciones eficientes y seguras.",
  numeroCirculo = "360",
  simboloNumero = "°",
  itemsCirculo = ["Equipo", "Ingeniería", "Instalación", "Mantenimiento", "Refacciones"]
}: CuadroCirculoConEscuadraConPropsProps) {
  return (
    <div className={'flex relative'}>
      {/* Sección Transporte de Grado Alimenticio */}
      <motion.div
        className="relative translate-y-10 md:-translate-y-20 md:w-5/12 1200:w-5/12 1366:w-4/12 md:ml-10 1200:ml-20 1280:ml-20 1366:ml-48 bg-gray-100/80 dark:bg-gray-900/80 p-8 md:p-12 lg:p-16 max-h-140"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.15, 1] }}
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-none tracking-tighter mb-8">
            {titulo}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {parrafo}
          </p>
        </div>

        {/* Cuadritos decorativos lloviendo */}
        <div className="absolute bottom-0 right-0 z-10 transform scale-60 md:scale-75 lg:scale-100 origin-top-right">
          <CuadritosLluvia />
        </div>
      </motion.div>

      <div className="flex -translate-x-50 md:translate-x-25 1024:translate-x-50 1200:translate-x-40 1280:translate-x-45 1366:translate-x-50 1440:translate-x-50 1536:translate-x-60 1728:translate-x-70 1920:translate-x-90 translate-y-180 md:translate-y-60 1024:translate-y-140 1200:translate-y-140 1280:translate-y-130 1366:translate-y-130 1440:translate-y-130 1536:translate-y-140 1728:translate-y-140 1920:translate-y-110 h-240 relative z-50">
        <div className="relative">
          {/* Línea vertical */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-96 md:-top-36 1024:-top-76 1200:-top-96 1280:-top-76 1366:-top-76 1440:-top-76 1536:-top-86 1728:-top-96 1920:-top-76 w-px h-0 md:h-96 bg-foreground/20"
          ></div>

          {/* Línea horizontal */}
          <div
            className="absolute -top-96 md:-top-36 1024:-top-76 1200:-top-96 1280:-top-76 1366:-top-76 1440:-top-76 1536:-top-86 1728:-top-96 1920:-top-76 left-1/2 -translate-x-full h-px w-0 md:w-60 1024:w-80 1200:w-70 1280:w-80 1366:w-90 1440:w-90 1536:w-100 1728:w-120 1920:w-130 bg-foreground/20"
          ></div>

          {/* Círculo */}
          <div
            className="-translate-30 360:-translate-20 md:-translate-10 1200:translate-0 size-70 md:size-90 1024:size-90 1200:size-85 1280:size-90 1366:size-100 1920:size-120 rounded-full bg-linear-to-b from-orange-600 to-red-600 flex flex-col items-center justify-center p-8"
          >
            <div className="text-4xl md:text-6xl 1920:text-7xl font-black text-white mb-6">
              {numeroCirculo}<span className="text-2xl md:text-xl">{simboloNumero}</span>
            </div>
            <div className="space-y-0 md:space-y-1 1280:space-y-2  text-white text-lg md:text-xl 1920:text-2xl font-semibold">
              {itemsCirculo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
