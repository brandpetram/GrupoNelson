import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'La Diferencia Nelson | Grupo Nelson',
}

export default function DiferenciaNelsonPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
