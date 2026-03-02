import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'
import { SidebarSticky1 } from '@/components/brandpetram/sidebar-sticky-1'
import {GridPoligonos2x1x2} from "@/components/brandpetram/grid-poligonos-2x1x2";
import {CarruselConveyors} from "@/components/brandpetram/carrusel";
import {CarruselLeed} from "@/components/brandpetram/carrusel-leed";
import {BigNumber} from "@/components/brandpetram/big-number";
export const metadata: Metadata = {
  title: 'Certificación LEED | Grupo Nelson',
}

export default function CertificacionLeedPage() {
  return (
    <div className="">
        <Header variant={'light'} mobileVariant={'dark'} />
        <div className={'lg:pt-30 lg:px-20 '}>
            <HeroMarketing1/>

            <div className={'mt-20'}><SidebarSticky1/></div>

            {/* Carrusel de Parques Industriales */}

            <CarruselLeed />
            <BigNumber
                imageSrc="/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-255.jpg"
                imageAlt="Lorem ipsum"
                number="+4.5"
                title={<>Millones de <br /> Pies² Desarrollados</>}
                subtitle={<>Construidos en naves <br /> industriales en Mexicali desde 1965</>}
            />
        </div>

    </div>
  )
}
