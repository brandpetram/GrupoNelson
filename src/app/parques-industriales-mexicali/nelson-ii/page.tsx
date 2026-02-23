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
      <ParkHero
        park={park}
        gradientTop={0.4}
        gradientBottom={0.85}
        darkOverlay={0.25}
        overlayColor="rgba(10, 20, 60, 0.3)"   // azul oscuro

        gridConfig={{
            strokeColor: 'stroke-white/15',
            gridSize: 120,
            showHighlights: true,
            highlightColor: 'fill-blue-600/10',   // ← color + opacidad
            fadeRadius: '100rem',               // ← más grande = se ve más del grid
            fadePosition: 'center',

        }}
      />
      <ParkSpecsLayout park={park} allParks={industrialParks} />
    </div>
  )
}
