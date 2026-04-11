import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { allNavesQuery } from '@/sanity/lib/queries/naves'
import NavesDisponiblesClient from './page-client'
import type { NaveIndustrial } from '@/data/naves-industriales'

export const metadata: Metadata = {
  title: 'Naves Disponibles | Grupo Nelson',
  description: 'Inventario de naves industriales disponibles en Mexicali. Consulta especificaciones y solicita información.',
  alternates: { canonical: 'https://nelson.com.mx/inventario/naves-disponibles' },
}

export default async function NavesDisponiblesPage() {
  const naves: NaveIndustrial[] = await client.fetch(allNavesQuery)
  return <NavesDisponiblesClient naves={naves} />
}
