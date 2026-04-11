import { client } from '@/sanity/lib/client'
import { allTerrenosQuery } from '@/sanity/lib/queries/terrenos'
import LandClient from './page-client'
import type { Terreno } from '@/data/terrenos'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/inventory/land',
  title: 'Available Land | Grupo Nelson',
  description: 'Land available for industrial development in Mexicali, San Luis Rio Colorado, Ensenada and San Luis Potosi.',
})

export default async function LandPage() {
  const terrenos: Terreno[] = await client.fetch(allTerrenosQuery)
  return <LandClient terrenos={terrenos} />
}
