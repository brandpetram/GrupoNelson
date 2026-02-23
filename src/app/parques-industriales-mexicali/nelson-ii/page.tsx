import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { ParkSpecsLayout } from '@/components/brandpetram/park-specs-layout'
import { ParkMap } from '@/components/brandpetram/park-map'
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
        <div className={'mb-32 w-11/12 1200:w-10/12 mx-auto'}><ParkSpecsLayout park={park} allParks={industrialParks}/>
            {park.coordinates && (
                <ParkMap
                    parkName={park.name}
                    address={park.address ?? park.location}
                    lat={park.coordinates.lat}
                    lng={park.coordinates.lng}
                    zoom={16}
                    mapsUrl={park.mapsUrl}
                />
      )}</div>
    </div>
  )
}
