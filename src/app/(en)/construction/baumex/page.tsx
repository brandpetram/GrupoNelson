import Header from '@/components/Header'
import MuEn from './components/mu-en'
import NuEn from './components/nu-en'
import XiEn from './components/xi-en'
import OmicronEn from './components/omicron-en'
import PiEn from './components/pi-en'
import RhoEn from './components/rho-en'
import SigmaEn from './components/sigma-en'
import TauEn from './components/tau-en'
import UpsilonEn from './components/upsilon-en'
import PhiEn from './components/phi-en'
import ChiEn from './components/chi-en'
import PsiEn from './components/psi-en'
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

      <MuEn />

      <div className="container mx-auto mt-20">
        <NuEn />
      </div>

      <div className="container mx-auto mt-20">
        <XiEn />
      </div>

      <div className="container mx-auto mt-20">
        <OmicronEn />
      </div>

      <div className="container mx-auto mt-20">
        <PiEn />
      </div>

      <div className="container mx-auto mt-20">
        <RhoEn />
      </div>

      <div className="container mx-auto mt-20">
        <SigmaEn />
      </div>

      <div className="container mx-auto mt-20">
        <TauEn />
      </div>

      <div className="container mx-auto mt-20">
        <UpsilonEn />
      </div>

      <div className="container mx-auto mt-20">
        <PhiEn />
      </div>

      <div className="container mx-auto mt-20">
        <ChiEn />
      </div>

      <div className="container mx-auto mt-20">
        <PsiEn />
      </div>
    </div>
  )
}
