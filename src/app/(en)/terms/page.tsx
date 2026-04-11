import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions of use for the Grupo Nelson website.',
}

export default function TermsPage() {
  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal Notice</p>
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Terms and Conditions of Use</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last modified — April 10, 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            The terms of use presented below constitute the agreement between Parque Industrial Nelson S.A. de C.V. (hereinafter &quot;Grupo Nelson&quot;) and any user of the website whose electronic address is <Link href="/" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx</Link> (hereinafter the &quot;Site&quot;).
          </p>
          <p>
            The use of the Site by any person grants them the status of user (hereinafter the &quot;User&quot;) and implies their full and unconditional adherence to these Terms of Use. If at any time the User disagrees, they must immediately refrain from using the Site.
          </p>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Access and use of the Site</h2>
            <p>
              Access to and use of the Site is free of charge for Users. Through the Site, Grupo Nelson provides Users with access to information about industrial parks, industrial buildings, available land, and construction services in Mexicali.
            </p>
            <p>
              The User acknowledges that the use of the Site does not imply any ownership rights over the Site, any of its elements, or its content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Content</h2>
            <p>
              The User agrees to use the Site and its content in accordance with applicable laws and with respect to public order. The User agrees not to copy, distribute, modify, reproduce, or use in any way the content without the express authorization of Grupo Nelson.
            </p>
            <p>
              Grupo Nelson declares that all content and elements used on the Site are duly protected under the corresponding laws in Mexico.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Disclaimer of warranties and liability</h2>
            <p>
              By the mere act of accessing the Site, the User acknowledges and accepts that the use thereof is at their sole risk. Grupo Nelson does not guarantee the absence of viruses or other elements that may cause alterations to the User&apos;s computer system.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Intellectual property</h2>
            <p>
              Grupo Nelson authorizes the User to use the Site exclusively under the terms expressed herein, without this implying the granting of any license or authorization regarding the intellectual property of Grupo Nelson, including registered trademarks, industrial designs, trade names, and copyrights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Applicable law and jurisdiction</h2>
            <p>
              In all matters related to the interpretation and compliance with the provisions herein, Users agree to submit to the applicable laws and the jurisdiction of the competent courts in Mexicali, Baja California, Mexico.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Modifications</h2>
            <p>
              Grupo Nelson reserves the right to modify these Terms of Use at any time. Modifications will be published on this Site.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
