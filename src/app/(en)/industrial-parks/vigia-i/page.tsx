import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/industrial-parks/vigia-i',
  title: 'El Vigía I Industrial Park',
  description: 'El Vigía I Industrial Park in Mexicali: 14 hectares, 11 established companies, and built-to-suit industrial buildings since 1967.',
})

export default async function VigiaIPage() {
  const park = (await getParkBySlug('vigia-i'))!

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
        <FichaTecnicaParque park={park} lang="en" />
      </div>
      <VirtualTourBP
        tourId="hY5fjENu2"
        title="360° Virtual Tour — El Vigía I"
        subtitle="Explore El Vigía I Industrial Park as if you were here."
      />
    </div>
  )
}
