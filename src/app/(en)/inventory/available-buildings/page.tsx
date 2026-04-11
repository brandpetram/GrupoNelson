import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { allNavesQuery } from '@/sanity/lib/queries/naves'
import AvailableBuildingsClient from './page-client'
import type { NaveIndustrial } from '@/data/naves-industriales'

export const metadata: Metadata = {
  title: 'Available Buildings | Grupo Nelson',
  description: 'Industrial buildings inventory available in Mexicali. View specifications and request information.',
  alternates: { canonical: 'https://nelson.com.mx/inventory/available-buildings' },
}

export default async function AvailableBuildingsPage() {
  const naves: NaveIndustrial[] = await client.fetch(allNavesQuery)
  return <AvailableBuildingsClient naves={naves} />
}
