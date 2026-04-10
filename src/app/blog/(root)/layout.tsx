import { ScrollToTop } from '@/components/scroll-to-top'

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <ScrollToTop />
            {children}
        </>
    )
}
