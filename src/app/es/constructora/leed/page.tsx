import type { Metadata } from 'next'
import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'
import { SidebarSticky1 } from '@/components/brandpetram/sidebar-sticky-1'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'

export const metadata: Metadata = {
  title: 'Certificación LEED en Mexicali',
  description: 'Certifica LEED tu nave industrial en Mexicali con Baumex: 28 años de experiencia en clima extremo, datos de desempeño térmico reales y Gulfstream en proceso de LEED Gold.',
  alternates: { canonical: 'https://nelson.com.mx/constructora/leed' },
}

export default function LeedPage() {
  return (
    <div className="overflow-x-clip">
      <div className={'pt-20 lg:pt-30 lg:px-20'}>
        <div className="768:mt-10 834:mt-10 1024:mt-10 1200:mt-0">
          <HeroMarketing1 />
        </div>
        <div className={'mt-20'}><SidebarSticky1 /></div>
        <CarruselLeed />
      </div>
    </div>
  )
}
