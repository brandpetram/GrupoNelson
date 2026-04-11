import PortafolioBaumexClient from './page-client'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/portafolio',
  title: 'Portafolio de Proyectos',
  description: 'Historial completo de más de 75 proyectos industriales y comerciales entregados por Baumex Constructora desde 1997.',
})

export default function PortafolioBaumexPage() {
  return <PortafolioBaumexClient />
}
