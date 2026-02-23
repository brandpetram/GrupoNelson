import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { ParkSpecsLayout } from '@/components/brandpetram/park-specs-layout'
import { getParkBySlug, industrialParks } from '@/data/parks/parks-data'

export const metadata = {
  title: 'Parque Industrial El Vigía II | Grupo Nelson',
  description: 'Especificaciones técnicas del Parque Industrial El Vigía II en Mexicali. 7.5 hectáreas, instalaciones modernas desde 1987.',
}

export default function VigiaIIPage() {
  const park = getParkBySlug('vigia-ii')!

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParkHero park={park} />
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
