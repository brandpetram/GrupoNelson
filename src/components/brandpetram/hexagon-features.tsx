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

const defaultFeatures: Feature[] = [
  {
    title: 'Lorem Ipsum I',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Lorem Ipsum II',
    description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.'
  },
  {
    title: 'Lorem Ipsum III',
    description: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.'
  },
  {
    title: 'Lorem Ipsum IV',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis unde omnis iste natus error sit voluptatem.'
  },
  {
    title: 'Lorem Ipsum V',
    description: 'Accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae.'
  },
  {
    title: 'Lorem Ipsum VI',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos ratione.'
  }
]

interface HexagonFeaturesProps {
  /** Lista de 6 características para mostrar en grid 2x3 */
  features?: Feature[]
}

export function HexagonFeatures({ features = defaultFeatures }: HexagonFeaturesProps) {
  return (
    <section data-component="HexagonFeatures" data-component-file="src/components/brandpetram/hexagon-features.tsx" data-component-props="false" className="w-full">
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
