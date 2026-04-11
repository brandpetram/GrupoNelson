import HomeClient from './home-client'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/',
  title: 'Grupo Nelson — Industrial Parks in Mexicali',
  description: 'Industrial development with over 60 years of experience in Mexicali. Industrial parks, build-to-suit construction, industrial buildings and available land.',
})

export default function Home() {
  return <HomeClient />
}
