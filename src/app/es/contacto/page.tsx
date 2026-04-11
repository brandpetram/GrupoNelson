import Contact from './contact-section'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/contacto',
  title: 'Contacto',
  description: 'Contáctanos para renta de naves industriales, terrenos disponibles y servicios de construcción build-to-suit en Mexicali.',
})

export default function ContactoPage() {
  return <Contact />
}
