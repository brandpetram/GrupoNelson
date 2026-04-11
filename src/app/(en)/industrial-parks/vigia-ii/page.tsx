import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'

export const metadata = {
  title: 'El Vigía II Industrial Park',
  description: 'El Vigía II Industrial Park in Mexicali: 7.5 hectares, built-to-suit industrial buildings and modern facilities since 1987.',
}

export default async function VigiaIIPage() {
  const park = (await getParkBySlug('vigia-ii'))!

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
      <div className="w-11/12 1200:w-10/12 mx-auto mb-32">
        <FichaTecnicaParque park={park} />
      </div>
      <VirtualTourBP
        tourId="hY5fjENu2"
        sceneId="tKdB6poJ3k"
        title="360° Virtual Tour — El Vigía II"
        subtitle="Explore El Vigía II Industrial Park as if you were here."
      />
    </div>
  )
}
