import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingeniería y Diseño',
  description: 'Ingeniería industrial bajo códigos internacionales para naves industriales built-to-suit en Mexicali. Diseño estructural, mecánico y eléctrico en parques industriales de Grupo Nelson.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
