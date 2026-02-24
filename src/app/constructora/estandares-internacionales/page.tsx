import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Estándares Internacionales | Grupo Nelson',
}

export default function EstandaresInternacionalesPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
