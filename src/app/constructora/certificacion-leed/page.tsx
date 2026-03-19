import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'
import { SidebarSticky1 } from '@/components/brandpetram/sidebar-sticky-1'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'
import { BigNumber } from '@/components/brandpetram/big-number'

export const metadata: Metadata = {
  title: 'Certificación LEED | Grupo Nelson',
  description: 'Naves industriales con certificación LEED en Mexicali. Gulfstream 550K en proceso de LEED Gold: 10 MW solares, FM Global, BRB antisísmicos. 7 pilares de sustentabilidad. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/certificacion-leed' },
}

export default function CertificacionLeedPage() {
  return (
    <div className="">
      <Header variant={'light'} mobileVariant={'dark'} />

      {/* Copy integrado en los componentes HeroMarketing1 y SidebarSticky1 */}
      <div className={'lg:pt-30 lg:px-20'}>
        <HeroMarketing1 />
        <div className={'mt-20'}><SidebarSticky1 /></div>
        {/* Carrusel de temas LEED */}
        <CarruselLeed />
        <BigNumber
          imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
          imageAlt="Naves industriales LEED en Mexicali — Grupo Nelson"
          number="+4.5"
          title={<>Millones de <br /> Pies² Desarrollados</>}
          subtitle={<>Construidos en naves <br /> industriales en Mexicali desde 1965</>}
        />
      </div>
    </div>
  )
}
