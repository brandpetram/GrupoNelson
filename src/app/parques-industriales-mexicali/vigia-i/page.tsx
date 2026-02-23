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
        <div className={'mt-24 md:mt-32 1200:mt-28'}><ParkHero
            park={park}
            gradientTop={0.4}
            gradientBottom={0.85}
            overlayColor="#2563eb1a"   // 10% de opacidad
            gridConfig={{
                strokeColor: 'stroke-white/15',
                gridSize: 120,
                showHighlights: true,
                highlightColor: 'fill-blue-600/10',   // ← color + opacidad
                fadeRadius: '100rem',               // ← más grande = se ve más del grid
                fadePosition: 'center',

            }}
        /></div>
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
