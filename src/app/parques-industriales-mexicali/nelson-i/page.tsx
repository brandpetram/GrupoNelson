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
        <div className={'mt-24 md:mt-32 1200:mt-28'}><ParkHero
            park={park}
            gradientTop={0.4}
            gradientBottom={0.85}
            overlayColor="#2563eb10"   // 10% de opacidad
            gridConfig={{
                strokeColor: 'stroke-white/25',
                gridSize: 120,
                showHighlights: true,
                highlightColor: 'fill-blue-600/20',   // ← color + opacidad
                fadeRadius: '40rem',               // ← más grande = se ve más del grid
                fadePosition: 'center',

            }}
        /></div>
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
