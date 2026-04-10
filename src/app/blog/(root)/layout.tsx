import type { Metadata } from 'next'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre parques industriales, naves industriales built-to-suit, logística y desarrollo industrial en Mexicali. Tendencias y guías de Grupo Nelson.',
}

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <ScrollToTop />
            {children}
        </>
    )
}
