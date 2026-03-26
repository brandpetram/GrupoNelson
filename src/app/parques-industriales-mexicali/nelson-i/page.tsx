import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'

export const metadata = {
  title: 'Parque Industrial Nelson I | Grupo Nelson',
  description: 'Parque Industrial Nelson I en Mexicali. 27 hectáreas, 9 empresas establecidas, centro industrial establecido desde 1987.',
}

export default async function NelsonIPage() {
  const park = (await getParkBySlug('nelson-i'))!

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
      <div className="w-11/12 1200:w-10/12 mx-auto mb-32">
        <FichaTecnicaParque park={park} />
        <VirtualTourBP
          tourId="hY5fjENu2"
          sceneId="GUu4QABnR"
          title="Tour Virtual 360° — Nelson I"
          subtitle="Explora el Parque Industrial Nelson I como si estuvieras aquí."
        />
      </div>
    </div>
  )
}
