import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Intelligent Operating Systems LEED | Grupo Nelson Mexicali',
  description: 'BMS with circuit-level submetering for LEED industrial buildings in Mexicali. Real-time monitoring of HVAC, solar energy, and water. ESG dashboards. Grupo Nelson.',
  alternates: { canonical: 'https://nelson.com.mx/construction/leed/operating-systems' },
}

export default function OperatingSystemsPage() {
  return (
    <LeedPageLayout
      eyebrow="BMS monitoring and submetering"
      titulo="Monitor every system in your Mexicali industrial building with BMS and LEED circuit-level submetering"
      intro="Gulfstream 550K operates with 42 A/C air handlers, 10 MW of solar panels, and 20 MW of electrical capacity. Without intelligent circuit-level monitoring, detecting a consumption deviation takes months. With BMS and submetering, it takes hours. Baumex integrates these systems during building construction — not as a retrofit."
      imageSrc="/leed/leed3-mexicali-nave-industrial-sistemas-bms-2.jpeg"
      imageAlt="BMS and intelligent systems in LEED industrial building — Mexicali"
      parrafos={[
        'Identify energy consumption deviations in hours, not months. Baumex integrates Building Management Systems with independent circuit-level submetering: HVAC, lighting, pumps, photovoltaic systems, and water consumption monitored from a single platform. In Mexicali, where climate control can account for over 40% of a building\'s operating costs, that visibility is the difference between operating on data and operating on intuition.',
        'Simplify your ESG reports with automatic energy and water traceability. System-level consumption dashboards and deviation alerts feed corporate reports without additional manual effort. For Fortune 500 companies operating in Grupo Nelson parks — Gulfstream, Honeywell, DHL — this level of traceability is not optional: it is what their headquarters require for reporting to investors and boards.',
        'Ensure your LEED building in Mexicali maintains the performance it was designed for. LEED certification does not end when the building is delivered — daily operations determine whether the building performs or degrades. Circuit-level submetering is the tool that allows operators to know exactly how much each system consumes, identify anomalous peaks, and make adjustment decisions with verifiable data.',
      ]}
      features={[
        {
          title: 'BMS with circuit-level submetering',
          description: 'HVAC, lighting, pumps, photovoltaics, and water consumption monitored in real time from a single platform.',
        },
        {
          title: 'Inefficiency detection in hours',
          description: 'Integrated IoT sensors that identify consumption deviations before they impact the monthly operating budget.',
        },
        {
          title: 'ESG dashboards without manual effort',
          description: 'System-level energy and water traceability. Deviation alerts. Corporate reports fed automatically.',
        },
      ]}
      subtituloSeccion="Control your Mexicali industrial building operating costs with real-time data"
      parrafoCierre="Operate your Mexicali industrial building with the visibility that multinational operations demand. Baumex integrates BMS and submetering from construction so that every system — HVAC, solar, water, lighting — is measurable, auditable, and optimizable. Request a consultation for your project."
      fuentes="LEED v4.1 Energy & Atmosphere: Advanced Energy Metering Credit · ASHRAE Guideline 36 (High-Performance Sequences of Operation)"
    />
  )
}
