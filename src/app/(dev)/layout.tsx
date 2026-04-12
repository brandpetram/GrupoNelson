import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Dev — Grupo Nelson',
    template: '%s | Dev — Grupo Nelson',
  },
  robots: 'noindex, nofollow',
}

export default function DevGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
