import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Diseño e Ingeniería | Grupo Nelson',
}

export default function DisenoEIngenieriaPage() {
  return (
    <div className={'overflow-hidden'}>
      <Header variant="dark" />
      <Mu />
      <Nu />
      <Xi />
      <Omicron />
      <Pi />
      <Rho />
      <Sigma />
      <Tau />
      <Upsilon />
      <Phi />
      <Chi />
      <Psi />
    </div>
  )
}
