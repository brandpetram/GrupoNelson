import HomeClient from './home-client'
import { createMetadata } from '@/lib/create-metadata'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'

export const metadata = createMetadata({
  lang: 'en',
  path: '/',
  title: 'Grupo Nelson — Industrial Parks in Mexicali',
  description: 'Industrial development with over 60 years of experience in Mexicali. Industrial parks, build-to-suit construction, industrial buildings and available land.',
})

export default function Home() {
  return (
    <HomeClient
      heroContent={
        <TarjetaHeroOriginal
          badge1="4 Industrial Parks"
          badge2="33 International Corporations"
          titulo={<>Industrial Parks and <span className="whitespace-nowrap">Built‑to‑Suit</span> Buildings Across Mexicali</>}
          descripcion="60 years developing industrial infrastructure on the California border. Rheem, Honeywell, Gulfstream and DHL already operate here."
          ctaPrimaryText="Learn More"
          ctaPrimaryHref="/about/difference"
          ctaSecondaryText="Contact Us"
          ctaSecondaryHref="/contact"
        />
      }
    />
  )
}
