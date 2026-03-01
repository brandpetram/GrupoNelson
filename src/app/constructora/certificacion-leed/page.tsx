import type { Metadata } from 'next'
import Header from '@/components/Header'
import { HeroMarketing1 } from '@/components/brandpetram/hero-marketing-1'

export const metadata: Metadata = {
  title: 'Certificación LEED | Grupo Nelson',
}

export default function CertificacionLeedPage() {
  return (
    <div className="min-h-[200vh]">
        <Header variant={'light'} mobileVariant={'dark'} />
        <div className={'lg:py-30 lg:px-20'}>
            <HeroMarketing1/>
        </div>
    </div>
  )
}
