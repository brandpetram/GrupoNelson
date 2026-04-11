import { client } from '@/sanity/lib/client'
import { allTerrenosQuery } from '@/sanity/lib/queries/terrenos'
import TerrenosClient from './page-client'
import type { Terreno } from '@/data/terrenos'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/inventario/terrenos',
  title: 'Terrenos Disponibles | Grupo Nelson',
  description: 'Terrenos disponibles para desarrollo industrial en Mexicali, San Luis Río Colorado, Ensenada y San Luis Potosí.',
})

export default async function TerrenosPage() {
  const terrenos: Terreno[] = await client.fetch(allTerrenosQuery)
  return <TerrenosClient terrenos={terrenos} />
}
