'use client'

/**
 * NOMBRE: hexagon-features.tsx
 * DESCRIPCIÓN: Grid de características en layout hexagonal (2x3 desktop, 1x6 mobile)
 *              con separadores verticales y horizontales
 *
 * USO: Componente cero props, edita directamente los textos en el código
 */

import { motion } from 'motion/react'

interface Feature {
  title: string
  description: string
}

export function HexagonFeatures() {
  // Edita aquí los items directamente
  const features: Feature[] = [
    {
      title: 'Infraestructura Moderna',
      description: 'Contamos con infraestructura de clase mundial y tecnología de punta para diseñar e instalar sistemas de conveyors que optimicen tu producción.'
    },
    {
      title: 'Personal Especializado',
      description: 'Equipo de ingenieros y técnicos con décadas de experiencia en automatización industrial y sistemas de transporte de carga diversa.'
    },
    {
      title: 'Experiencia Probada',
      description: 'Proveemos soluciones de calidad a cientos de clientes en toda la república mexicana desde hace más de 20 años.'
    },
    {
      title: 'Marcas Líderes',
      description: 'Trabajamos con las mejores marcas internacionales de conveyors: Dorner, Hytrol, FlexLink, Intralox y más.'
    },
    {
      title: 'Control y Calidad',
      description: 'Supervisamos cada etapa del proceso de instalación y mantenimiento con estándares internacionales de calidad y seguridad.'
    },
    {
      title: 'Soluciones Personalizadas',
      description: 'Diseñamos sistemas de conveyors a medida para adaptarnos a las necesidades específicas y capacidad de tu operación.'
    }
  ]

  return (
    <section className="w-full">
      <div className="container mx-auto px-0 1280:px-32 w-full h-auto md:h-screen md:flex md:items-center py-8 md:py-0">
        {/* Desktop Grid: 2x3 */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {/* Row 1 */}
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={`desktop-${index}`}
              className="py-8 px-12 text-center border-b border-white/30"
              style={{
                borderRight: index < 2 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
              }}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/80 text-sm lg:text-lg text-balance leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Row 2 */}
          {features.slice(3, 6).map((feature, index) => (
            <motion.div
              key={`desktop-${index + 3}`}
              className="py-8 px-12 text-center"
              style={{
                borderRight: index < 2 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
              }}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.5 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/80 text-sm lg:text-lg text-balance leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Stack: 1 columna - Sin animación reveal - Todos los 6 items */}
        <div className="md:hidden space-y-0 flex flex-col justify-start">
          {features.map((feature, index) => (
            <div
              key={`mobile-${index}`}
              className="py-6 px-4 border-b border-white/30 last:border-b-0 last:pb-20"
            >
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
