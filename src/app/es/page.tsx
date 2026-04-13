import HomeClient from './home-client'
import { createMetadata } from '@/lib/create-metadata'
import { TarjetaHeroOriginal } from '@/components/tarjeta-hero-original'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es',
  title: 'Grupo Nelson — Parques Industriales en Mexicali',
  description: 'Desarrollo industrial con más de 60 años de experiencia en Mexicali. Parques industriales, construcción build-to-suit, naves industriales y terrenos disponibles.',
})

export default function Home() {
  return (
    <HomeClient
      heroContent={
        <TarjetaHeroOriginal
          badge="33 Corporaciones Internacionales"
          titulo={<>Parques Industriales y Naves <span className="whitespace-nowrap">Built‑to‑Suit</span> en Todo Mexicali</>}
          descripcion="Desarrollo y arrendamiento de propiedades industriales en la frontera con California."
        />
      }
    />
  )
}
