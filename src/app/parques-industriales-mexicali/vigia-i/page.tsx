import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { ParkSpecsLayout } from '@/components/brandpetram/park-specs-layout'
import { getParkBySlug, industrialParks } from '@/data/parks/parks-data'

export const metadata = {
  title: 'Parque Industrial El Vigía I | Grupo Nelson',
  description: 'Especificaciones técnicas del Parque Industrial El Vigía I en Mexicali. 14 hectáreas, 11 empresas establecidas, desde 1967.',
}

export default function VigiaIPage() {
  const park = getParkBySlug('vigia-i')!

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParkHero park={park} />
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
