import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'en',
  path: '/construction/leed/energy-atmosphere',
  title: 'Energy & Atmosphere LEED | Grupo Nelson Mexicali',
  description: 'LEED industrial buildings in Mexicali with 10 MW solar panels, 35-50% energy savings vs conventional buildings. Energy modeling from conceptual phase. Grupo Nelson.',
})

export default function EnergyAtmospherePage() {
  return (
    <LeedPageLayout lang="en"
      eyebrow="Energy efficiency and solar"
      titulo="Reduce energy costs at your Mexicali industrial building by 35-50% with LEED design and 10 MW of solar panels"
      intro="Gulfstream 550K in Mexicali: 10 MW of solar panels across 50,000 m² (rooftop + carports), 20 MW installed electrical capacity, 50% clean solar energy. 3,200 tons of minimum-consumption A/C. These are the real results of the LEED Energy & Atmosphere category executed by Baumex on the largest industrial building in the city."
      imageSrc="/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.jpeg"
      imageAlt="Energy and atmosphere — LEED industrial building with photovoltaics in Mexicali"
      parrafos={[
        'Optimize the energy profile of your Mexicali industrial building from the conceptual phase. Baumex coordinates three strategies with energy modeling specific to the site\'s climate conditions: the thermal envelope reduces cooling load (R-19 walls, R-30 roof), high-bay LED lighting with occupancy controls reduces baseline electrical demand, and the rooftop photovoltaic system generates the energy the building no longer wastes.',
        'The Gulfstream 550K building documents the results: 10 MW of solar panels distributed across 20,000 m² of rooftop and 30,000 m² of parking carports. 20 MW total installed electrical capacity. 42 minimum-consumption air handling units with 90% condensation water recovery reused in cooling towers. FM Global certification across the entire envelope.',
        'Scale your solar generation capacity in Mexicali. With over 5,000 m² of south-facing rooftop, the photovoltaic potential of an industrial building in this region is exceptional — every kWh generated on-site reduces dependence on the CFE grid and earns credits in the LEED Renewable Energy category. Baumex manages the full integration: structure prepared for panel loads, electrical installation properly sized, and grid connection.',
      ]}
      features={[
        {
          title: '10 MW of solar panels installed',
          description: 'Gulfstream 550K: 20,000 m² on rooftop + 30,000 m² on carports. 50% of total energy will be clean solar.',
        },
        {
          title: 'Energy modeling from conceptual phase',
          description: 'Simulation of real performance under Mexicali climate conditions — not national averages. Every design decision quantified.',
        },
        {
          title: '35-50% savings vs conventional building',
          description: 'Result of combining an envelope calibrated for 48°C, smart lighting, and solar generation in Mexicali industrial parks.',
        },
      ]}
      subtituloSeccion="Energy & Atmosphere: the highest-weight LEED category for industrial buildings in Mexicali"
      parrafoCierre="Maximize Energy & Atmosphere credits in your Mexicali industrial building. With a calibrated envelope, efficient lighting, and rooftop solar panels, Baumex has demonstrated 35-50% savings in the largest building in the city. Request a consultation for your project."
      fuentes="ASHRAE 90.1 (Energy Baseline) · LEED v4.1 Energy & Atmosphere Credits · Project data: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
