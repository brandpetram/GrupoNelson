import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer1 from '@/components/brandpetram/footer-1'

export const metadata: Metadata = {
    title: 'Tailark Pages | Grupo Nelson',
    description: 'Preview de páginas Tailark con header y footer de Grupo Nelson',
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main
                role="main"
                className="bg-zinc-950/10">
                {children}
            </main>
            <Footer1 />
        </>
    )
}