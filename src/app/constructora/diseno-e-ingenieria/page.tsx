import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Diseño e Ingeniería | Grupo Nelson',
}

export default function DisenoEIngenieriaPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
