import { client } from '@/sanity/lib/client'
import { allNavesQuery } from '@/sanity/lib/queries/naves'
import AvailableBuildingsClient from './page-client'
import type { NaveIndustrial } from '@/data/naves-industriales'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/inventory/available-buildings',
  title: 'Available Buildings | Grupo Nelson',
  description: 'Industrial buildings inventory available in Mexicali. View specifications and request information.',
})

export default async function AvailableBuildingsPage() {
  const naves: NaveIndustrial[] = await client.fetch(allNavesQuery)
  return <AvailableBuildingsClient naves={naves} />
}
