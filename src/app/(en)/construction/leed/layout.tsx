import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    template: '%s | LEED Certification · Grupo Nelson',
    default: 'LEED Certification | Grupo Nelson',
  },
  description: 'LEED-certified industrial buildings in Mexicali, Baja California. Grupo Nelson: over 60 years building in extreme climate conditions.',
}

export default function LeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
      {children}
    </div>
  )
}
