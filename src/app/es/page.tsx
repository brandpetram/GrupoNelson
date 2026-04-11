import HomeClient from './home-client'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es',
  title: 'Grupo Nelson — Parques Industriales en Mexicali',
  description: 'Desarrollo industrial con más de 60 años de experiencia en Mexicali. Parques industriales, construcción build-to-suit, naves industriales y terrenos disponibles.',
})

export default function Home() {
  return <HomeClient />
}
