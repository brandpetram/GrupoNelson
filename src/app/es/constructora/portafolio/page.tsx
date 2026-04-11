import type { Metadata } from 'next'
import PortafolioBaumexClient from './page-client'

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos',
  description: 'Historial completo de más de 75 proyectos industriales y comerciales entregados por Baumex Constructora desde 1997.',
  alternates: { canonical: 'https://nelson.com.mx/constructora/portafolio' },
}

export default function PortafolioBaumexPage() {
  return <PortafolioBaumexClient />
}
