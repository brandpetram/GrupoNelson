import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'
import { SidebarSticky1 } from '@/components/brandpetram/sidebar-sticky-1'
import { CarruselLeed } from '@/components/brandpetram/carrusel-leed'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/leed',
  title: 'LEED Certification in Mexicali',
  description: 'LEED-certify your industrial building in Mexicali with Baumex: 28 years of experience in extreme climate, real thermal performance data, and Gulfstream pursuing LEED Gold.',
})

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
