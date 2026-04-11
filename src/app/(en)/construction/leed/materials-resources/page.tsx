import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/leed/materials-resources',
  title: 'Materials & Resources LEED | Grupo Nelson Mexicali',
  description: 'LEED industrial buildings in Mexicali with EPD-documented recycled steel, regional sourcing within 160 km, and waste diversion >50%. Grupo Nelson.',
})

export default function MaterialsResourcesPage() {
  return (
    <LeedPageLayout lang="en"
      eyebrow="Verified and recyclable materials"
      titulo="Build your LEED industrial building in Mexicali with EPD-documented materials and verifiable recycled content"
      intro="The structural steel in your building may have 90% recycled content or 15% — the difference lies in the Environmental Product Declaration (EPD). Baumex specifies every material with third-party verified EPD: steel with documented recycled content, concrete with additions that reduce Portland cement, and finishes with HPD that verify the absence of substances of concern."
      imageSrc="/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.jpeg"
      imageAlt="EPD-verified materials in LEED industrial building — Mexicali"
      parrafos={[
        'Demand verifiable data for every material entering your Mexicali industrial building. Recycled steel significantly reduces CO₂ emissions compared to virgin steel (World Steel Association, 2023) — but it only counts if it has an EPD to prove it. Baumex specifies structural steel with high documented recycled content, concrete with fly ash or slag that improves durability in extreme climate, and finishing materials with Health Product Declarations (HPD).',
        'Reduce the transportation footprint with regional sourcing within a 160-km radius of the Mexicali construction site. Steel from Ternium and ArcelorMittal, concrete from local CEMEX and Holcim plants, and construction materials from regional distributors — all within the radius that earns LEED credits in the Materials & Resources category. Baumex has long-term relationships with these suppliers — 28 years of construction in Mexicali builds a supply chain that cannot be improvised.',
        'Manage construction waste with 100% separation of recoverable materials and a minimum 50% diversion from landfill. Steel, concrete, cardboard, wood, and packaging plastics — each fraction with a documented destination and verifiable traceability. For the Gulfstream 550K building, Baumex managed waste from 52,200 m² of construction to this standard.',
      ]}
      features={[
        {
          title: 'Third-party verified EPD for every material',
          description: 'Steel, concrete, and finishes with Environmental Product Declarations that quantify real impact — not supplier promises.',
        },
        {
          title: 'Regional sourcing within 160 km',
          description: 'Local Mexicali suppliers that earn additional LEED credits. 28 years of relationships with the regional supply chain.',
        },
        {
          title: 'Waste diversion >50% with traceability',
          description: '100% separation of recoverable materials. Each fraction — steel, concrete, cardboard, wood — with a documented destination.',
        },
      ]}
      subtituloSeccion="EPD-verified materials for your LEED industrial building in Mexicali"
      parrafoCierre="Build your Mexicali industrial building with materials that have EPDs, recycled content certificates, and documented waste traceability. Baumex integrates these standards into every project with suppliers like Ternium, CEMEX, and Holcim within the 160-km radius. Request a consultation."
      fuentes="LEED v4.1 Materials & Resources Credits · ISO 14025 (Environmental Product Declarations) · Project data: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
