import Link from 'next/link'
import Header from '@/components/Header'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/privacy-policy',
  title: 'Privacy Policy',
  description: 'Grupo Nelson privacy policy. Personal data protection in compliance with applicable Mexican data protection laws.',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal Notice</p>
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last modified — April 10, 2026</p>
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Our confidentiality and privacy policies for the protection of personal data and this privacy notice (hereinafter, the &quot;Notice&quot;) are in strict compliance with the Mexican Federal Law on Protection of Personal Data Held by Private Parties, its Regulations, and the Privacy Notice Guidelines, so that you may be aware of our commitment and responsibility to protect the data you provide to us.
          </p>

          <p>
            This privacy notice applies to the specific website nelson.com.mx (hereinafter &quot;this website&quot;). This Notice is available to you at all times on our website <Link href="/" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx</Link>.
          </p>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Identity and address of the data controller</h2>
            <p>
              Parque Industrial Nelson S.A. de C.V. (hereinafter, &quot;Grupo Nelson&quot;), with address at Ave. Reforma #1699, Col. Nueva, Mexicali, BC, Mexico 21100, and email <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a>, is responsible for collecting your personal data, the use given to it, and its protection.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Information collection</h2>
            <p>
              As a visitor to this website, you are not required to provide personal information. This website only collects personal information that is specifically and voluntarily provided by each visitor. Such information may consist of, but is not limited to, your name, current position, company address, email address, and phone number.
            </p>
            <p>
              Our website collects the information that each user wishes to voluntarily provide through the contact form published at <Link href="/contact" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">nelson.com.mx/contact</Link>. This website does not request sensitive information from visitors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Registration information, cookies and web beacons</h2>
            <p>
              This site collects standard registration information, including your IP address, browser type, language, access times, and referring website addresses. To ensure this website is well managed and to facilitate better navigation, we or our service providers may use cookies or web beacons to collect aggregated data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Purposes of data processing</h2>
            <p>
              The personal data collected on this website may be used for the purpose of: (i) identifying the applicant; (ii) providing information about industrial buildings, land, and construction services; (iii) sending notifications related to the requested service; (iv) handling inquiries, questions, clarifications, or complaints; and (v) complying with legal requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Data transfers</h2>
            <p>
              Grupo Nelson may transfer your personal data to Mexican or foreign third parties when the transfer (i) is provided for by law or treaty; (ii) is made to controlling, subsidiary, or affiliated companies; (iii) is necessary by virtue of a contract; (iv) is necessary to safeguard a public interest; or (v) is required for the maintenance of a legal relationship between Grupo Nelson and the data subject.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">ARCO rights</h2>
            <p>
              If you wish to exercise the rights of access, rectification, cancellation, or opposition regarding your personal data, you may request it at any time by sending an email to <a href="mailto:contacto@nelson.com.mx" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">contacto@nelson.com.mx</a>.
            </p>
            <p>
              Once the request is received, Grupo Nelson will communicate the decision adopted within a maximum period of 20 days, so that, if applicable, it may be carried out within the following 15 days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground tracking-tight">Changes to this Notice</h2>
            <p>
              Grupo Nelson reserves the right to make any modifications to this Notice. These modifications will be made known through this website.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
