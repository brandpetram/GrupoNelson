import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/industrial-parks/nelson-i',
  title: 'Nelson I Industrial Park',
  description: 'Nelson I Industrial Park in Mexicali: 27 hectares, 9 established companies, and built-to-suit industrial buildings since 1987.',
})

export default async function NelsonIPage() {
  const park = (await getParkBySlug('nelson-i'))!

  return (
    <div className="min-h-screen bg-background">
      <Header lang="en" />
        <div className={'mt-24 md:mt-32 1200:mt-28'}><ParkHero
            park={park}
            gradientTop={0.4}
            gradientBottom={0.85}
            overlayColor="#2563eb10"
            lang="en"
            gridConfig={{
                strokeColor: 'stroke-white/25',
                gridSize: 120,
                showHighlights: true,
                highlightColor: 'fill-blue-600/20',
                fadeRadius: '40rem',
                fadePosition: 'center',
            }}
        /></div>
      <div className="w-11/12 1200:w-10/12 mx-auto mb-32">
        <FichaTecnicaParque park={park} lang="en" />
      </div>
      <VirtualTourBP
        tourId="hY5fjENu2"
        sceneId="GUu4QABnR"
        title="360° Virtual Tour — Nelson I"
        subtitle="Explore Nelson I Industrial Park as if you were here."
      />
    </div>
  )
}
