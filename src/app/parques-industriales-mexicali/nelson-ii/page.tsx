import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { ParkSpecsLayout } from '@/components/brandpetram/park-specs-layout'
import { getParkBySlug, industrialParks } from '@/data/parks/parks-data'

export const metadata = {
  title: 'Parque Industrial Nelson II | Grupo Nelson',
  description: 'Especificaciones técnicas del Parque Industrial Nelson II en Mexicali. 26.6 hectáreas, 3 naves industriales con tecnología de punta.',
}

export default function NelsonIIPage() {
  const park = getParkBySlug('nelson-ii')!

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParkHero park={park} />
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
