import Header from '@/components/Header'

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <div className="h-[4.5rem] md:h-28 lg:h-14" />
            <div className="@container overflow-x-hidden">{children}</div>
        </>
    )
}
