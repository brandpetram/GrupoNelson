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
      title: 'Ubicación Estratégica',
      description: 'Parques industriales en zonas de alto crecimiento en Mexicali, con acceso inmediato a infraestructura vial y cercanía a Estados Unidos.'
    },
    {
      title: 'Infraestructura Moderna',
      description: 'Instalaciones construidas con los más altos estándares de calidad y tecnología, diseñadas para operaciones de manufactura avanzada.'
    },
    {
      title: '60 Años de Experiencia',
      description: 'Seis décadas construyendo espacios industriales de clase mundial para empresas globales en la región fronteriza de Baja California.'
    },
    {
      title: 'Built to Suit',
      description: 'Diseñamos y construimos espacios industriales a la medida de tus necesidades operativas y especificaciones técnicas particulares.'
    },
    {
      title: 'Servicios Completos',
      description: 'Desde planeación y permisos hasta construcción y mantenimiento, ofrecemos soluciones llave en mano para tu proyecto industrial.'
    },
    {
      title: 'Desarrollo Sustentable',
      description: 'Comprometidos con prácticas de construcción sustentables que minimizan el impacto ambiental y maximizan la eficiencia energética.'
    }
  ]

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-0 1280:px-32 w-full h-auto md:h-screen md:flex md:items-center py-8 md:py-16">
        {/* Desktop Grid: 2x3 */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {/* Row 1 */}
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={`desktop-${index}`}
              className="py-8 px-12 text-center border-b border-border"
              style={{
                borderRight: index < 2 ? '1px solid hsl(var(--border))' : 'none'
              }}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-lg text-balance leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Row 2 */}
          {features.slice(3, 6).map((feature, index) => (
            <motion.div
              key={`desktop-${index + 3}`}
              className="py-8 px-12 text-center"
              style={{
                borderRight: index < 2 ? '1px solid hsl(var(--border))' : 'none'
              }}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.5 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-lg text-balance leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Stack: 1 columna - Sin animación reveal - Todos los 6 items */}
        <div className="md:hidden space-y-0 flex flex-col justify-start">
          {features.map((feature, index) => (
            <div
              key={`mobile-${index}`}
              className="py-6 px-4 border-b border-border last:border-b-0 last:pb-20"
            >
              <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
