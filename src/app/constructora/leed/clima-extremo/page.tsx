import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Experiencia en Clima Extremo',
  description: 'Construcción de naves industriales LEED en Mexicali con +45°C y radiación solar extrema. Envolvente térmica calibrada, techos reflectivos SRI >78. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/clima-extremo' },
}

export default function ClimaExtremoPage() {
  return (
    <LeedPageLayout
      titulo="Experiencia en Clima Extremo"
      intro="No todas las naves LEED son iguales. Un diseño que funciona en Monterrey o Querétaro colapsa operativamente en Mexicali, donde el termómetro supera los 48°C en verano y la radiación solar acumulada excede los 2,400 kWh/m² anuales."
      imageSrc="/leed/leed1-mexicali-nave-industrial-clima-extremo-1.png"
      imageAlt="Nave industrial LEED en clima extremo — Mexicali, Baja California"
      parrafos={[
        'El Fraunhofer Institute for Building Physics documenta que el rendimiento de la envolvente térmica varía drásticamente según la zona climática, y que sin simulación higrotérmica específica para el contexto local, las decisiones de aislamiento y ventilación se toman a ciegas. Construir una nave industrial en clima extremo exige un nivel de ingeniería que solo se adquiere con décadas de ejecución en esa misma zona — no con manuales genéricos ni con extrapolaciones de otros mercados.',
        'Resuelve un delta de temperatura de hasta 24°C entre el exterior y el interior operativo de tu nave con una envolvente diseñada específicamente para el desierto sonorense. Eso significa paneles de aislamiento con valor R mínimo de 19 en muros y R-30 en cubierta, sellado perimetral en el 100% de los muelles de carga, y cubiertas reflectivas con SRI superior a 78.',
        'Grupo Nelson ha calibrado estas especificaciones a lo largo de décadas de construcción en Mexicali, donde un error de cálculo térmico no es un inconveniente menor — es un colapso operativo que dispara el consumo de climatización y destruye el retorno de inversión del edificio.',
      ]}
      features={[
        {
          title: 'Envolvente calibrada para +45°C',
          description: 'Paneles con valor R-19 en muros y R-30 en cubierta, sellado perimetral al 100% en muelles de carga.',
        },
        {
          title: 'Cubiertas reflectivas SRI >78',
          description: 'El reporte del IFC documenta ahorros superiores a USD 20,000 anuales en electricidad frente a un diseño convencional en almacenes de un solo nivel.',
        },
        {
          title: 'Simulación higrotérmica local',
          description: 'Cada decisión de envolvente se valida con modelado específico para las condiciones climáticas de Mexicali, no con bases de datos genéricas.',
        },
      ]}
      subtituloSeccion="Certifica donde otros no pueden"
      parrafoCierre="Obtén certificación LEED en una de las zonas climáticas más demandantes de Norteamérica. Los parques industriales de Grupo Nelson en Mexicali son la prueba de que LEED funciona en clima extremo — no porque las condiciones sean favorables, sino porque el diseño se calibra para dominarlas."
      fuentes="Fraunhofer IBP, 'Hygrothermal System Analysis: Building Envelope Simulation for Different Climate Zones' · IFC/World Bank, 'Building Green: Sustainable Construction in Emerging Markets' (2023)"
    />
  )
}
