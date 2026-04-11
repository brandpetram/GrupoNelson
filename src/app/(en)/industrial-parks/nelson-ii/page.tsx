import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { ParkMap } from '@/components/brandpetram/park-map'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/industrial-parks/nelson-ii',
  title: 'Nelson II Industrial Park',
  description: 'Nelson II Industrial Park in Mexicali: 26.6 hectares, built-to-suit industrial buildings with cutting-edge technology. Gulfstream, Honeywell, and other Fortune 500 companies.',
})

export default async function NelsonIIPage() {
  const park = (await getParkBySlug('nelson-ii'))!

  return (
    <div className="min-h-screen bg-background">
      <Header lang="en" />
        <div className={'mt-24 md:mt-32 1200:mt-28'}><ParkHero
            park={park}
            gradientTop={0.4}
            gradientBottom={0.85}
            overlayColor="#2563eb1a"
            gridConfig={{
                strokeColor: 'stroke-white/15',
                gridSize: 120,
                showHighlights: true,
                highlightColor: 'fill-blue-600/10',
                fadeRadius: '100rem',
                fadePosition: 'center',
            }}
        /></div>
        <div className={'mb-32 w-11/12 1200:w-10/12 mx-auto'}>
            <FichaTecnicaParque park={park} lang="en" />
            {park.coordinates && (
                <ParkMap lang="en"
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
        title="360° Virtual Tour — Nelson II"
        subtitle="Explore Nelson II Industrial Park as if you were here."
      />
    </div>
  )
}
