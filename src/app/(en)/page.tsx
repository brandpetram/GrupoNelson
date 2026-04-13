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
          badge="33 International Corporations"
          titulo={<>Industrial Parks and <span className="whitespace-nowrap">Built‑to‑Suit</span> Buildings Across Mexicali</>}
          descripcion="Developing and leasing industrial properties on the California border."
          ctaPrimaryText="Learn More"
          ctaPrimaryHref="/about/difference"
          ctaSecondaryText="Contact Us"
          ctaSecondaryHref="/contact"
        />
      }
    />
  )
}
