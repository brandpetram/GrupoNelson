import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Liderazgo | Grupo Nelson',
}

export default function LiderazgoPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
