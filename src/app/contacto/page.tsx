import type { Metadata } from 'next'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contacto | Grupo Nelson',
  description: 'Contáctanos para renta de naves industriales, terrenos disponibles y servicios de construcción en Mexicali.',
  alternates: { canonical: 'https://gruponelson.mx/contacto' },
}

export default function ContactoPage() {
  return <ContactForm />
}
