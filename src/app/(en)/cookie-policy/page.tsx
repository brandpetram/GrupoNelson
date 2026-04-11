import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for the Grupo Nelson website.',
}

export default function CookiePolicyPage() {
  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal Notice</p>
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Cookie Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last modified — April 10, 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">What are cookies?</h2>
            <p>
              Cookies are small text files that websites store in your browser when you visit them. They are widely used to make websites work more efficiently, as well as to provide information to site owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">What cookies do we use?</h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-border/50 p-5">
                <h3 className="text-sm font-medium text-foreground mb-2">Strictly necessary cookies</h3>
                <p className="text-sm">
                  These are essential for the website to function properly. They include cookies that enable navigation and the use of basic features. These cookies do not collect information that can be used for marketing purposes.
                </p>
              </div>

              <div className="rounded-lg border border-border/50 p-5">
                <h3 className="text-sm font-medium text-foreground mb-2">Performance and analytics cookies</h3>
                <p className="text-sm">
                  These allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information collected by these cookies is aggregated and anonymous.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">How to control cookies?</h2>
            <p>
              You can configure your browser to reject all cookies or to notify you when a cookie is being sent. However, some features of the website may not function properly without cookies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { browser: 'Chrome', path: 'Settings → Privacy and security → Cookies' },
                { browser: 'Firefox', path: 'Options → Privacy and security → Cookies' },
                { browser: 'Safari', path: 'Preferences → Privacy → Cookies' },
                { browser: 'Edge', path: 'Settings → Privacy → Cookies' },
              ].map(({ browser, path }) => (
                <div key={browser} className="rounded-lg border border-border/50 p-4">
                  <p className="text-sm font-medium text-foreground">{browser}</p>
                  <p className="text-xs text-muted-foreground mt-1">{path}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">More information</h2>
            <p>
              For more information about how we process your personal data, please see our <Link href="/privacy-policy" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Privacy Policy</Link>. If you have questions about our cookie policy, contact us at <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
