import type { Metadata } from 'next'
import Contact from './contact-section'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for industrial warehouse leasing, available land, and build-to-suit construction services in Mexicali.',
  alternates: { canonical: 'https://nelson.com.mx/contact' },
}

export default function ContactPage() {
  return <Contact />
}
