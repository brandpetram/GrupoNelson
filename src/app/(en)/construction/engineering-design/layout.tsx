import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/engineering-design',
  title: 'Engineering & Design',
  description: 'Industrial engineering under international codes for built-to-suit industrial buildings in Mexicali. Structural, mechanical, and electrical design in Grupo Nelson industrial parks.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
