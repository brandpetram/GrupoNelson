import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Naves Industriales LEED en Clima Extremo | Grupo Nelson Mexicali',
  description: 'Construcción de naves industriales LEED en Mexicali con +45°C. Envolvente térmica R-19/R-30, cubiertas SRI >78, delta de 24°C controlado. 28 años de experiencia en clima extremo.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/clima-extremo' },
}

export default function ClimaExtremoPage() {
  return (
    <LeedPageLayout
      eyebrow="Ingeniería para +45°C"
      titulo="Construye tu nave industrial LEED en Mexicali a +45°C — 28 años de ingeniería en clima extremo"
      intro="Mexicali supera los 48°C en verano con radiación solar de 2,400 kWh/m² anuales. Baumex ha construido 75+ naves industriales en estas condiciones en 28 años. La envolvente térmica de cada nave se calibra específicamente para el desierto sonorense con datos de desempeño recopilados en la misma zona climática."
      imageSrc="/leed/leed1-mexicali-nave-industrial-clima-extremo-2.jpeg"
      imageAlt="Nave industrial LEED en clima extremo — Mexicali, Baja California"
      parrafos={[
        'Resuelve un delta de temperatura de hasta 24°C entre el exterior y el interior operativo de tu nave industrial en Mexicali. Paneles de aislamiento con valor R-19 en muros y R-30 en cubierta. Sellado perimetral en el 100% de los muelles de carga. Cubiertas reflectivas con índice de reflectancia solar (SRI) superior a 78 — reducen la temperatura superficial de la cubierta hasta 30°C.',
        'Gulfstream 550K (52,200 m²) opera en Mexicali con 3,200 toneladas de aire acondicionado de mínimo consumo distribuidas en 42 manejadoras, cubierta TPO con garantía de 20 años y recuperación del 90% del agua de condensación. Cada especificación de envolvente fue calibrada por Baumex para las condiciones reales del sitio — 48°C de temperatura exterior y 2,400 kWh/m² de radiación solar anual.',
        'Accede a 28 años de datos de desempeño térmico en naves industriales de Mexicali. Un error de cálculo en la envolvente de una nave a 48°C dispara el consumo de climatización entre 30% y 50% sobre el diseño original (ASHRAE 90.1). Baumex calibra estas especificaciones con décadas de ejecución en la misma zona — 75+ naves con datos de operación reales.',
      ]}
      features={[
        {
          title: 'Envolvente calibrada para +45°C',
          description: 'R-19 en muros, R-30 en cubierta, sellado al 100% en muelles de carga. Especificaciones validadas en 75+ naves en Mexicali.',
        },
        {
          title: 'Cubiertas reflectivas SRI >78',
          description: 'Cubierta TPO que reduce temperatura superficial hasta 30°C. Gulfstream 550K: garantía de impermeabilización de 20 años.',
        },
        {
          title: '3,200 toneladas de A/C con recuperación de agua',
          description: '42 manejadoras de mínimo consumo. 90% del agua de condensación reutilizada en torres de enfriamiento. Dato real del proyecto Gulfstream.',
        },
      ]}
      subtituloSeccion="Certifica LEED tu nave industrial en Mexicali — donde el clima es el examen más difícil"
      parrafoCierre="Opera tu nave industrial en Mexicali con envolvente térmica que cumple créditos LEED y resiste los 48°C del desierto. 30 corporaciones internacionales ya operan en parques de Grupo Nelson con estas especificaciones. Solicita una consulta para tu proyecto."
      fuentes="ASHRAE 90.1 (Energy Standard for Buildings) · LEED v4.1 Energy & Atmosphere Credits · Datos de proyecto: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
