'use client'

import { motion } from 'motion/react'
import { TextoGradiente } from '../ui/brandpetram/texto-gradiente'

/**
 * Circulos - Componente SDI
 *
 * Componente zero-props con breakpoints personalizados.
 * Edita tamaños, textos y colores directamente en el código.
 */

export function Circulos() {
  return (
    <div className="space-y-2">

      {/* Item 1: Soporte - Slate 900 */}
      <motion.div
        className="flex items-center gap-3 md:gap-12 1200:gap-24"
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0
        }}
      >
        {/* Círculo S */}
        <div className="w-24 h-30 md:w-50 md:h-60 1200:w-60 1200:h-72 1280:w-65 1280:h-80 1366:w-70 1366:h-84 1440:w-75 1440:h-90 1536:w-80 1536:h-96 1728:w-85 1728:h-102 1920:w-90 1920:h-108 bg-slate-900 rounded-none flex items-center justify-center shrink-0">
          <span className="text-[3rem] md:text-[6rem] 1200:text-[7rem] 1280:text-[7.5rem] 1366:text-[8rem] 1440:text-[8.5rem] 1536:text-[9rem] 1728:text-[9.5rem] 1920:text-[10rem] font-black text-white leading-none flex items-center justify-center">
            S
          </span>
        </div>

        {/* Texto */}
        <div className="flex-1 md:max-w-2xl">
          <h3 className="text-2xl md:text-5xl 1200:text-[4.5rem] 1280:text-[6rem] 1366:text-[6rem] 1440:text-[6rem] 1536:text-[6rem] 1728:text-[6rem] 1920:text-[6rem] leading-none tracking-tight font-extrabold mb-2 md:mb-4 text-foreground">
            Desarrollo
          </h3>
          <p className="text-sm md:text-lg 1200:text-xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
            Diseñamos y fabricamos sistemas de conveyors completos para tu planta. Te acompañamos desde el concepto hasta la puesta en marcha exitosa. Somos tu socio en proyectos llave en mano.
          </p>
        </div>
      </motion.div>

      {/* Item 2: Dinámico - Gradiente con animación */}
      <motion.div
        className="flex items-center gap-3 md:gap-12 1200:gap-24"
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3
        }}
      >
        {/* Círculo D animado */}
        <div className="w-24 h-30 md:w-50 md:h-60 1200:w-60 1200:h-72 1280:w-65 1280:h-80 1366:w-70 1366:h-84 1440:w-75 1440:h-90 1536:w-80 1536:h-96 1728:w-85 1728:h-102 1920:w-90 1920:h-108 bg-gradient-to-r from-orange-500 to-red-600 rounded-none flex items-center justify-center shrink-0">
          <span className="text-[3rem] md:text-[6rem] 1200:text-[7rem] 1280:text-[7.5rem] 1366:text-[8rem] 1440:text-[8.5rem] 1536:text-[9rem] 1728:text-[9.5rem] 1920:text-[10rem] font-black text-white leading-none flex items-center justify-center">
            D
          </span>
        </div>

        {/* Texto */}
        <div className="flex-1 md:max-w-2xl">
          <h3 className="text-2xl md:text-5xl 1200:text-[4.5rem] 1280:text-[6rem] 1366:text-[6rem] 1440:text-[6rem] 1536:text-[6rem] 1728:text-[6rem] 1920:text-[6rem] leading-none tracking-tight font-extrabold mb-2 md:mb-4">
            <TextoGradiente
              texto="Construcción"
              gradienteFrom="from-orange-500"
              gradienteTo="to-red-600"
            />
          </h3>
          <p className="text-sm md:text-lg 1200:text-xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
            Desarrollamos ingeniería de aplicación específica para tus necesidades únicas. Te apoyamos en instalación, troubleshooting y optimización continua de sistemas. Transformamos ideas en sistemas productivos reales y confiables.
          </p>
        </div>
      </motion.div>

      {/* Item 3: Industrial - Slate 900 */}
      <motion.div
        className="flex items-center gap-3 md:gap-12 1200:gap-24"
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.6
        }}
      >
        {/* Círculo I */}
        <div className="w-24 h-30 md:w-50 md:h-60 1200:w-60 1200:h-72 1280:w-65 1280:h-80 1366:w-70 1366:h-84 1440:w-75 1440:h-90 1536:w-80 1536:h-96 1728:w-85 1728:h-102 1920:w-90 1920:h-108 bg-slate-900 rounded-none flex items-center justify-center shrink-0">
          <span className="text-[3rem] md:text-[6rem] 1200:text-[7rem] 1280:text-[7.5rem] 1366:text-[8rem] 1440:text-[8.5rem] 1536:text-[9rem] 1728:text-[9.5rem] 1920:text-[10rem] font-black text-white leading-none flex items-center justify-center">
            I
          </span>
        </div>

        {/* Texto */}
        <div className="flex-1 md:max-w-2xl">
          <h3 className="text-2xl md:text-5xl 1200:text-[4.5rem] 1280:text-[6rem] 1366:text-[6rem] 1440:text-[6rem] 1536:text-[6rem] 1728:text-[6rem] 1920:text-[6rem] leading-none tracking-tight font-extrabold mb-2 md:mb-4 text-foreground">
            Gestión
          </h3>
          <p className="text-sm md:text-lg 1200:text-xl 1728:text-2xl 1920:text-2xl text-muted-foreground">
            Integramos conveyors, automatización y cómputo industrial en tu operación diaria. Te brindamos mantenimiento preventivo y correctivo especializado de calidad. Nuestra experiencia con Fortune 500 respalda cada proyecto.
          </p>
        </div>
      </motion.div>

    </div>
  )
}
