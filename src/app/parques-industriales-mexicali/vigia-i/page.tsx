import Header from '@/components/Header'
import { ParkHero } from '@/components/brandpetram/park-hero'
import { FichaTecnicaParque } from '@/components/brandpetram/ficha-tecnica-parque'
import { VirtualTourBP } from '@/components/brandpetram/virtual-tour-bp'
import { getParkBySlug } from '@/data/parks/parks-sanity'

export const metadata = {
  title: 'Parque Industrial El Vigía I | Grupo Nelson',
  description: 'Especificaciones técnicas del Parque Industrial El Vigía I en Mexicali. 14 hectáreas, 11 empresas establecidas, desde 1967.',
}

export default async function VigiaIPage() {
  const park = (await getParkBySlug('vigia-i'))!

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
      <div className="w-11/12 1200:w-10/12 mx-auto mb-32">
        <FichaTecnicaParque park={park} />
      </div>
      <VirtualTourBP
        tourId="hY5fjENu2"
        title="Tour Virtual 360° — El Vigía I"
        subtitle="Explora el Parque Industrial El Vigía I como si estuvieras aquí."
      />
    </div>
  )
}
