import Header from '@/components/Header'
import { Zeta } from '@/components/brandpetram/zeta'
import { Eta } from '@/components/brandpetram/eta'
import { Teta } from '@/components/brandpetram/teta'
import { Iota } from '@/components/brandpetram/iota'
import { Kappa } from '@/components/brandpetram/kappa'
import { Lamda } from '@/components/brandpetram/lamda'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/turnkey',
  title: 'Turnkey Solutions',
  description: 'Turnkey industrial buildings in Mexicali: ready to operate from day one. Grupo Nelson industrial parks with complete infrastructure.',
})

export default function TurnkeyPage() {
  return (
    <div>
      <Header lang="en" />

      {/* Zeta component */}
      <div className="container mx-auto mb-32 mt-30">
        <Zeta lang="en" />
      </div>

      {/* Eta component */}
      <div className="container mx-auto mt-10 mb-32">
        <Eta lang="en" />
      </div>

      {/* Teta component */}
      <div className="container mx-auto -mt-20 md:mt-60 1200:mt-80 mb-0">
        <Teta lang="en" />
      </div>

      {/* Iota component */}
      <div className="container mx-auto mt-10 ">
        <Iota lang="en" />
      </div>

      {/* Kappa component */}
      <div className="container mx-auto  mb-32 -mt-16">
        <Kappa lang="en" />
      </div>

      {/* Lamda component */}
      <div className="container mx-auto -mt-32 mb-32">
        <Lamda lang="en" />
      </div>

    </div>
  )
}
