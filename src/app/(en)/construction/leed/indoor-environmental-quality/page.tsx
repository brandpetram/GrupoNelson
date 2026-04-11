import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/leed/indoor-environmental-quality',
  title: 'Indoor Environmental Quality | LEED | Grupo Nelson',
  description: 'Low-VOC materials, ASHRAE 62.1 ventilation, and thermal comfort for LEED industrial buildings in Mexicali. Protect your team\'s health and productivity. Grupo Nelson.',
})

export default function IndoorEnvironmentalQualityPage() {
  return (
    <LeedPageLayout lang="en"
      eyebrow="Air, light, and indoor comfort"
      titulo="Build your Mexicali industrial building with LEED-certified indoor environmental quality"
      intro="Paints with VOC levels below 50 g/L. Ventilation designed for desert climate with ASHRAE 62.1 filtration. Thermal comfort controlled for continuous industrial operation. These are the indoor environmental quality standards that Grupo Nelson integrates into industrial building construction in Mexicali — and the ones that earn LEED credits in the indoor environment category."
      imageSrc="/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.jpeg"
      imageAlt="Indoor environmental quality in LEED industrial building — Mexicali"
      parrafos={[
        'Specify verified materials against LEED thresholds before they are installed in your building. Paints and coatings with volatile organic compounds below 50 g/L, sealants below 250 g/L, adhesives below 70 g/L, and flooring systems with FloorScore certification. Baumex verifies every product entering the construction site against these thresholds — in Mexicali, where buildings operate with intensive air recirculation due to temperatures exceeding 45°C, controlling indoor emission sources directly protects the people working inside.',
        'Ensure adequate ventilation for Mexicali\'s desert environment. Grupo Nelson\'s ventilation systems are designed per ASHRAE 62.1 with filtration specific to the region\'s dust and particulate conditions. The Gulfstream 550K building (52,200 m²) operates with 42 air handling units and 3,200 tons of minimum-consumption air conditioning, with 90% condensation water recovery.',
        'Document your Mexicali industrial building\'s working conditions with measurable parameters. Optimized natural and artificial lighting for industrial operations, controlled interior temperature, and contaminant-free air. These parameters earn LEED credits and meet the expectations of any multinational company evaluating locations in Mexicali industrial parks.',
      ]}
      features={[
        {
          title: 'Low-VOC materials verified on-site',
          description: 'Paints <50 g/L, sealants <250 g/L, adhesives <70 g/L, and FloorScore flooring — every product verified against LEED thresholds before installation.',
        },
        {
          title: 'ASHRAE 62.1 ventilation for desert climate',
          description: 'Filtration designed for Mexicali\'s dust and particulates. Gulfstream 550K: 42 air handlers, 3,200 tons A/C, 90% water recovery.',
        },
        {
          title: 'Thermal comfort for continuous industrial operation',
          description: 'Controlled temperature, optimized lighting, and clean air — documentable conditions that facilitate corporate audits and staff retention.',
        },
      ]}
      subtituloSeccion="Measurable environmental quality: air, light, and temperature in your Mexicali industrial building"
      parrafoCierre="Operate your Mexicali industrial building with indoor environmental quality that meets LEED credits, ASHRAE standards, and the expectations of Fortune 500 companies. Gulfstream, Honeywell, and 30 international corporations already operate in Grupo Nelson parks at these standards. Request a consultation for your project."
      fuentes="ASHRAE Standard 62.1 (Ventilation for Acceptable Indoor Air Quality) · LEED v4.1 Indoor Environmental Quality Credits · FloorScore Standard (Resilient Floor Covering Institute)"
    />
  )
}
