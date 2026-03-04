import type { Metadata } from 'next'
import NavesDisponiblesClient from './page-client'

export const metadata: Metadata = {
  title: 'Naves Disponibles | Grupo Nelson',
  description: 'Inventario de naves industriales disponibles en Mexicali. Consulta especificaciones y solicita información.',
  alternates: { canonical: 'https://gruponelson.mx/inventario/naves-disponibles' },
}

export default function NavesDisponiblesPage() {
  return <NavesDisponiblesClient />
}
