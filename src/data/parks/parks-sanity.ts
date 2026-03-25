import { client } from '@/sanity/lib/client'
import { allParksQuery, parkBySlugQuery, parkSlugsQuery } from '@/sanity/lib/queries/parks'
import type { IndustrialPark } from './types'

export async function getIndustrialParks(): Promise<IndustrialPark[]> {
  return client.fetch(allParksQuery)
}

export async function getParkBySlug(slug: string): Promise<IndustrialPark | undefined> {
  const park = await client.fetch(parkBySlugQuery, { slug })
  return park || undefined
}

export async function getParkSlugs(): Promise<string[]> {
  return client.fetch(parkSlugsQuery)
}
