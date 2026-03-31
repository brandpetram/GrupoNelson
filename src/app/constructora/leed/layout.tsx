import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Certificación LEED · Grupo Nelson',
    default: 'Certificación LEED | Grupo Nelson',
  },
  description: 'Naves industriales con certificación LEED en Mexicali, Baja California. Grupo Nelson: más de 60 años construyendo en clima extremo.',
}

export default function LeedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
