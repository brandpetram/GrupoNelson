import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Trayectoria | Grupo Nelson',
}

export default function TrayectoriaPage() {
  return (
    <div className="min-h-[200vh]">
      <Header />
    </div>
  )
}
