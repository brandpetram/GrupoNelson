import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'LEED Certification Process | Grupo Nelson Mexicali',
  description: 'LEED v4 BD+C certification for industrial buildings in Mexicali. From predesign to GBCI certificate with full traceability. Gulfstream 550K targeting LEED Gold. Grupo Nelson.',
  alternates: { canonical: 'https://nelson.com.mx/construction/leed/certification-process' },
}

export default function CertificationProcessPage() {
  return (
    <LeedPageLayout
      eyebrow="From design to GBCI certificate"
      titulo="LEED-certify your industrial building in Mexicali — from predesign to GBCI certificate without stopping construction"
      intro="Gulfstream 550K (52,200 m²) is currently pursuing LEED Gold certification — at 53-55 points (Silver), targeting Gold with 10 MW of solar panels. Baumex manages the entire process: registration, Design Review, construction evidence management, and Construction Review with full traceability in LEED Online."
      imageSrc="/leed/leed2-mexicali-nave-industrial-certificacion-bdc-3.jpeg"
      imageAlt="LEED v4 BD+C certification process — Industrial building in Mexicali"
      parrafos={[
        'Ensure every technical decision for your Mexicali industrial building is documented in certifiable format from day one. LEED certification is not obtained at the end of construction — it is won or lost in the first weeks of design. Baumex aligns architecture, MEP engineering, sustainability, and construction from predesign so that the LEED v4 BD+C integrative process is executed without improvising documentation.',
        'Each LEED credit requires specific evidence: engineering calculations, commissioning reports, material certificates, waste management records, and energy modeling results. Each piece of evidence has a precise format and timing for generation. In a Mexicali industrial building where the schedule competes with nearshoring velocity, a poorly managed LEED process delays delivery. Baumex certifies without stopping construction.',
        'Obtain a LEED certificate that withstands scrutiny from investors, multinational tenants, and GBCI itself. Certification quality depends on documentation quality — and that quality is built in every phase of the project, not at the end. Baumex has executed projects for Gulfstream, Honeywell, and other Fortune 500 corporations that demand complete documentary traceability in every construction phase.',
      ]}
      features={[
        {
          title: 'Integrative process from predesign',
          description: 'Architecture, MEP, sustainability, and construction aligned from day one. Every decision documented in LEED Online format.',
        },
        {
          title: 'Gulfstream 550K targeting LEED Gold',
          description: '52,200 m², 53-55 current points. 10 MW solar panels, FM Global, TPO roof, BRB seismic braces.',
        },
        {
          title: 'Certification that withstands audit',
          description: 'Full traceability: Design Review, construction evidence management, and Construction Review before GBCI.',
        },
      ]}
      subtituloSeccion="Certify your Mexicali industrial building with the builder already certifying the largest one in the city"
      parrafoCierre="Accelerate your LEED certification in Mexicali. Baumex manages the entire process — from registration to GBCI certificate — with the experience of certifying the largest industrial building in the city. Request a consultation for your project."
      fuentes="USGBC LEED v4.1 BD+C (Building Design and Construction) · GBCI Certification Process · Project data: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
