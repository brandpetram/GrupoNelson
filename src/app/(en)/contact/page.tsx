import Contact from './contact-section'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/contact',
  title: 'Contact',
  description: 'Contact us for industrial warehouse leasing, available land, and build-to-suit construction services in Mexicali.',
})

export default function ContactPage() {
  return <Contact />
}
