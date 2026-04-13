import Header from '@/components/Header'
import Mu from '@/components/brandpetram/mu'
import Nu from '@/components/brandpetram/nu'
import Xi from '@/components/brandpetram/xi'
import Omicron from '@/components/brandpetram/omicron'
import Pi from '@/components/brandpetram/pi'
import Rho from '@/components/brandpetram/rho'
import Sigma from '@/components/brandpetram/sigma'
import Tau from '@/components/brandpetram/tau'
import Upsilon from '@/components/brandpetram/upsilon'
import Phi from '@/components/brandpetram/phi'
import Chi from '@/components/brandpetram/chi'
import Psi from '@/components/brandpetram/psi'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/baumex',
  title: 'Baumex Constructora',
  description: 'Constructora in-house de Grupo Nelson con más de 25 años construyendo naves industriales built-to-suit en Mexicali. 75+ proyectos entregados para empresas Fortune 500.',
})

export default function BaumexPage() {
  return (
    <div className="overflow-hidden">
      <Header variant="dark" />

      <Mu />

      <div className="container mx-auto mt-20">
        <Nu />
      </div>

      <div className="container mx-auto mt-20">
        <Xi />
      </div>

      <div className="container mx-auto mt-20">
        <Omicron />
      </div>

      <div className="container mx-auto mt-20">
        <Pi />
      </div>

      <Rho />

      <div className="container mx-auto mt-20">
        <Sigma />
      </div>

      <div className="container mx-auto mt-20">
        <Tau />
      </div>

      <div className="container mx-auto mt-20">
        <Upsilon />
      </div>

      <div className="container mx-auto mt-20">
        <Phi />
      </div>

      <div className="container mx-auto mt-20">
        <Chi />
      </div>

      <div className="container mx-auto mt-20">
        <Psi />
      </div>
    </div>
  )
}
