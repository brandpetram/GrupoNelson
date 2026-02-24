import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Certificación LEED | Grupo Nelson',
}

export default function CertificacionLeedPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
