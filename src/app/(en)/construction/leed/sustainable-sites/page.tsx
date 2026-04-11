import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Sustainable Sites & Water Efficiency LEED | Grupo Nelson Mexicali',
  description: 'LEED industrial buildings in Mexicali with SRI >78 roofing, rainwater harvesting, and 40% water consumption reduction. Nelson II: 360,000-gallon fire suppression tank. Grupo Nelson.',
  alternates: { canonical: 'https://nelson.com.mx/construction/leed/sustainable-sites' },
}

export default function SustainableSitesPage() {
  return (
    <LeedPageLayout
      eyebrow="Water and sustainable sites"
      titulo="Reduce water consumption by 40% in your LEED industrial building in Mexicali — a region with critical water stress"
      intro="Mexicali is located in one of the most water-stressed regions in North America. Nelson II operates with a 360,000-gallon fire suppression tank and a centralized system that saves tenants 60% of the cost. Gulfstream 550K recovers 90% of condensation water from its 42 air handling units. Every liter counts — and every recoverable liter is recovered."
      imageSrc="/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.jpeg"
      imageAlt="Sustainable sites and water efficiency — LEED industrial building in Mexicali"
      parrafos={[
        'Reduce the heat island effect in your Mexicali industrial park with reflective roofing at SRI above 78 and high-albedo paving on parking lots and truck yards. These roofs lower surface temperature by up to 30°C, reducing the building\'s thermal load and the thermal impact on the entire park. Gulfstream 550K operates with a TPO roof carrying a 20-year waterproofing warranty.',
        'Leverage over 5,000 m² of rooftop area for rainwater harvesting. Although Mexicali receives limited precipitation, concentrated rainfall events generate recoverable volumes. Combined with ultra-low-flow sanitary fixtures, total water consumption drops 40% compared to a conventional building. Nelson II features a centralized fire suppression system with a 360,000-gallon tank — infrastructure already in place within the park.',
        'Ensure water efficiency in your Mexicali industrial building with infrastructure Grupo Nelson already has installed. The centralized fire suppression system at Nelson II saves tenants 60% versus individual systems. Condensation water recovery from HVAC air handling units reuses the resource within the same building. Every documented gallon earns credits in the LEED Water Efficiency category.',
      ]}
      features={[
        {
          title: 'Reflective roofing SRI >78',
          description: 'TPO roof that reduces surface temperature by up to 30°C. Gulfstream 550K: 20-year waterproofing warranty.',
        },
        {
          title: 'Centralized fire suppression — 60% savings',
          description: 'Nelson II: 360,000-gallon centralized tank. Tenants save 60% versus individual fire suppression systems.',
        },
        {
          title: '40% reduction in water consumption',
          description: 'Rainwater harvesting + ultra-low-flow fixtures + 90% HVAC condensation water recovery.',
        },
      ]}
      subtituloSeccion="Certify LEED Water Efficiency in your Mexicali industrial building with infrastructure already in place"
      parrafoCierre="Operate your Mexicali industrial building with water efficiency that earns LEED credits and addresses a real operational risk: water dependency in a region where supply is not guaranteed. Nelson II already has the infrastructure. Request a consultation for your project."
      fuentes="LEED v4.1 Water Efficiency Credits · Infrastructure data: Nelson II (360K-gallon tank, centralized system) · Project data: Gulfstream 550K (90% condensation recovery)"
    />
  )
}
