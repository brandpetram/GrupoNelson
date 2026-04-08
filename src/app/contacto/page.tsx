import type { Metadata } from 'next'
import Contact from './contact-section'

export const metadata: Metadata = {
  title: 'Contacto | Grupo Nelson',
  description: 'Contáctanos para renta de naves industriales, terrenos disponibles y servicios de construcción build-to-suit en Mexicali.',
  alternates: { canonical: 'https://gruponelson.mx/contacto' },
}

export default function ContactoPage() {
  return <Contact />
}
