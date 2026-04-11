import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/diseno-e-ingenieria',
  title: 'Ingeniería y Diseño',
  description: 'Ingeniería industrial bajo códigos internacionales para naves industriales built-to-suit en Mexicali. Diseño estructural, mecánico y eléctrico en parques industriales de Grupo Nelson.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
