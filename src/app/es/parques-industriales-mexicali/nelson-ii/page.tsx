import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { ParkMap } from '@/components/brandpetram/park-map'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/parques-industriales-mexicali/nelson-ii',
  title: 'Parque Industrial Nelson II',
  description: 'Parque Industrial Nelson II en Mexicali: 26.6 hectáreas, naves industriales built-to-suit con tecnología de punta. Gulfstream, Honeywell y más empresas Fortune 500.',
})

export default async function NelsonIIPage() {
  const park = (await getParkBySlug('nelson-ii'))!

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
        <div className={'mb-32 w-11/12 1200:w-10/12 mx-auto'}>
            <FichaTecnicaParque park={park} />
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
      <VirtualTourBP
        tourId="hY5fjENu2"
        sceneId="TYW_If4PeV"
        title="Tour Virtual 360° — Nelson II"
        subtitle="Explora el Parque Industrial Nelson II como si estuvieras aquí."
      />
    </div>
  )
}
