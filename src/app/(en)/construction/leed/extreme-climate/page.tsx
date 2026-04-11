import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/leed/extreme-climate',
  title: 'LEED Industrial Buildings in Extreme Climate | Grupo Nelson Mexicali',
  description: 'LEED industrial building construction in Mexicali at +45°C. R-19/R-30 thermal envelope, SRI >78 roofing, 24°C delta controlled. 28 years of extreme climate experience.',
})

export default function ExtremeClimatePage() {
  return (
    <LeedPageLayout lang="en"
      eyebrow="Engineering for +45°C"
      titulo="Build your LEED industrial building in Mexicali at +45°C — 28 years of extreme climate engineering"
      intro="Mexicali exceeds 48°C in summer with solar radiation of 2,400 kWh/m² annually. Baumex has built 75+ industrial buildings under these conditions over 28 years. The thermal envelope of each building is calibrated specifically for the Sonoran Desert using performance data collected in the same climate zone."
      imageSrc="/leed/leed1-mexicali-nave-industrial-clima-extremo-2.jpeg"
      imageAlt="LEED industrial building in extreme climate — Mexicali, Baja California"
      parrafos={[
        'Manage a temperature delta of up to 24°C between the exterior and the operational interior of your Mexicali industrial building. Insulation panels with R-19 in walls and R-30 in the roof. 100% perimeter sealing at all loading docks. Reflective roofing with a Solar Reflectance Index (SRI) above 78 — reducing roof surface temperature by up to 30°C.',
        'Gulfstream 550K (52,200 m²) operates in Mexicali with 3,200 tons of minimum-consumption air conditioning distributed across 42 air handling units, a TPO roof with a 20-year warranty, and 90% condensation water recovery. Every envelope specification was calibrated by Baumex for actual site conditions — 48°C exterior temperature and 2,400 kWh/m² annual solar radiation.',
        'Access 28 years of thermal performance data from industrial buildings in Mexicali. A miscalculation in the envelope of a building at 48°C drives HVAC costs 30% to 50% above the original design (ASHRAE 90.1). Baumex calibrates these specifications with decades of execution in the same zone — 75+ buildings with real operational data.',
      ]}
      features={[
        {
          title: 'Envelope calibrated for +45°C',
          description: 'R-19 walls, R-30 roof, 100% sealed loading docks. Specifications validated across 75+ buildings in Mexicali.',
        },
        {
          title: 'Reflective roofing SRI >78',
          description: 'TPO roof that reduces surface temperature by up to 30°C. Gulfstream 550K: 20-year waterproofing warranty.',
        },
        {
          title: '3,200 tons A/C with water recovery',
          description: '42 minimum-consumption air handlers. 90% condensation water reused in cooling towers. Real data from the Gulfstream project.',
        },
      ]}
      subtituloSeccion="LEED-certify your Mexicali industrial building — where climate is the toughest exam"
      parrafoCierre="Operate your Mexicali industrial building with a thermal envelope that earns LEED credits and withstands the 48°C desert heat. 30 international corporations already operate in Grupo Nelson parks with these specifications. Request a consultation for your project."
      fuentes="ASHRAE 90.1 (Energy Standard for Buildings) · LEED v4.1 Energy & Atmosphere Credits · Project data: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
