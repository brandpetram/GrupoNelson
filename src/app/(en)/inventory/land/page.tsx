import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { allTerrenosQuery } from '@/sanity/lib/queries/terrenos'
import LandClient from './page-client'
import type { Terreno } from '@/data/terrenos'

export const metadata: Metadata = {
  title: 'Available Land | Grupo Nelson',
  description: 'Land available for industrial development in Mexicali, San Luis Rio Colorado, Ensenada and San Luis Potosi.',
  alternates: { canonical: 'https://nelson.com.mx/inventory/land' },
}

export default async function LandPage() {
  const terrenos: Terreno[] = await client.fetch(allTerrenosQuery)
  return <LandClient terrenos={terrenos} />
}
