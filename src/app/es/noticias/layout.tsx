import Header from '@/components/Header'

export default function NoticiasLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <section className="bg-background border-b">
                <div className="@container overflow-x-clip pt-22 pb-16 md:pb-24 md:pt-32">{children}</div>
            </section>
        </>
    )
}
