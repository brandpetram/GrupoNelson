import { client } from '@/sanity/lib/client'
import { allNavesQuery } from '@/sanity/lib/queries/naves'
import NavesDisponiblesClient from './page-client'
import type { NaveIndustrial } from '@/data/naves-industriales'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/inventario/naves-disponibles',
  title: 'Naves Disponibles | Grupo Nelson',
  description: 'Inventario de naves industriales disponibles en Mexicali. Consulta especificaciones y solicita información.',
})

export default async function NavesDisponiblesPage() {
  const naves: NaveIndustrial[] = await client.fetch(allNavesQuery)
  return <NavesDisponiblesClient naves={naves} />
}
