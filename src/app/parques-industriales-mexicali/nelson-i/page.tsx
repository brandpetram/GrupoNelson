import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { ParkSpecsLayout } from '@/components/brandpetram/park-specs-layout'
import { getParkBySlug, industrialParks } from '@/data/parks/parks-data'

export const metadata = {
  title: 'Parque Industrial Nelson I | Grupo Nelson',
  description: 'Parque Industrial Nelson I en Mexicali. 27 hectáreas, 9 empresas establecidas, centro industrial establecido desde 1987.',
}

export default function NelsonIPage() {
  const park = getParkBySlug('nelson-i')!

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParkHero park={park} />
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
