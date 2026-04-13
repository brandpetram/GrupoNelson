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
  lang: 'en',
  path: '/construction/baumex',
  title: 'Baumex Construction',
  description: 'Grupo Nelson\'s in-house construction firm with over 25 years building industrial facilities in Mexicali. 75+ projects delivered for Fortune 500 companies. 4.5 million square feet built since 1997.',
})

export default function BaumexPage() {
  return (
    <div className="overflow-hidden">
      <Header variant="dark" lang="en" />

      <Mu lang="en" />

      <div className="container mx-auto mt-20">
        <Nu lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Xi lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Omicron lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Pi lang="en" />
      </div>

      <Rho lang="en" />

      <div className="container mx-auto mt-20">
        <Sigma lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Tau lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Upsilon lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Phi lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Chi lang="en" />
      </div>

      <div className="container mx-auto mt-20">
        <Psi lang="en" />
      </div>
    </div>
  )
}
