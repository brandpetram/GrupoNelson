import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Instrucciones — Grupo Nelson',
    template: '%s | Grupo Nelson',
  },
  robots: 'noindex, nofollow',
}

export default function InstruccionesGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Este layout existe para que la sección /instrucciones NO herede
  // el footer de marketing del root layout.
  // Cuando MAIN implemente el refactor de Route Groups, este archivo
  // se integrará con la nueva estructura.
  return children
}
