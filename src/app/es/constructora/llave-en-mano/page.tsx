import Header from '@/components/Header'
import { Zeta } from '@/components/brandpetram/zeta'
import { Eta } from '@/components/brandpetram/eta'
import { Teta } from '@/components/brandpetram/teta'
import { Iota } from '@/components/brandpetram/iota'
import { Kappa } from '@/components/brandpetram/kappa'
import { Lamda } from '@/components/brandpetram/lamda'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/llave-en-mano',
  title: 'Soluciones Llave en Mano',
  description: 'Naves industriales llave en mano en Mexicali: listas para operar desde el primer día. Parques industriales de Grupo Nelson con infraestructura completa.',
})

export default function LlaveEnManoPage() {
  return (
    <div>
      <Header />

      {/* Componente Zeta */}
      <div className="container mx-auto mb-32 mt-30">
        <Zeta />
      </div>

      {/* Componente Eta */}
      <div className="container mx-auto mt-10 mb-32">
        <Eta />
      </div>

      {/* Componente Teta */}
      <div className="container mx-auto -mt-20 md:mt-60 1200:mt-80 mb-0">
        <Teta />
      </div>

      {/* Componente Iota */}
      <div className="container mx-auto mt-10 ">
        <Iota />
      </div>

      {/* Componente Kappa */}
      <div className="container mx-auto  mb-32 -mt-16">
        <Kappa />
      </div>

      {/* Componente Lamda */}
      <div className="container mx-auto -mt-32 mb-32">
        <Lamda />
      </div>

    </div>
  )
}
