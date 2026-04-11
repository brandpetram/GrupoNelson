import Header from '@/components/Header'
import Footer1 from '@/components/brandpetram/footer-1'
import Link from 'next/link'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Subtle top accent line */}
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
            {/* Sidebar navigation */}
            <aside className="hidden lg:block">
              <nav className="sticky top-32">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">Legal</p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/aviso-de-privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Aviso de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Términos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Política de Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <article className="min-w-0">
              {children}
            </article>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mx-auto max-w-5xl px-6 lg:px-12 mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </main>
      <Footer1 />
    </div>
  )
}
