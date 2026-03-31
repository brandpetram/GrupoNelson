import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Energía y Atmósfera LEED | Grupo Nelson Mexicali',
  description: 'Naves industriales LEED en Mexicali con 10 MW de paneles solares, ahorro del 35-50% vs nave convencional. Modelado energético desde fase conceptual. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/energia-atmosfera' },
}

export default function EnergiaAtmosferaPage() {
  return (
    <LeedPageLayout
      eyebrow="Eficiencia energética y solar"
      titulo="Reduce el gasto energético de tu nave industrial en Mexicali un 35-50% con diseño LEED y 10 MW de paneles solares"
      intro="Gulfstream 550K en Mexicali: 10 MW de paneles solares en 50,000 m² (cubierta + carports), 20 MW de capacidad eléctrica instalada, 50% energía solar limpia. 3,200 toneladas de A/C de mínimo consumo. Estos son los resultados reales de la categoría de Energía y Atmósfera de LEED ejecutada por Baumex en la nave industrial más grande de la ciudad."
      imageSrc="/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.jpeg"
      imageAlt="Energía y atmósfera — Nave industrial LEED con fotovoltaicos en Mexicali"
      parrafos={[
        'Optimiza el perfil energético de tu nave industrial en Mexicali desde la fase conceptual. Baumex coordina tres estrategias con modelado energético específico para las condiciones climáticas del sitio: la envolvente térmica reduce la carga de enfriamiento (R-19 muros, R-30 cubierta), la iluminación LED de gran altura con controles de ocupación reduce la demanda eléctrica base, y el sistema fotovoltaico en cubierta genera la energía que el edificio ya no desperdicia.',
        'La nave Gulfstream 550K documenta los resultados: 10 MW de paneles solares distribuidos en 20,000 m² de cubierta y 30,000 m² de carports del estacionamiento. 20 MW de capacidad eléctrica total instalada. 42 manejadoras de aire acondicionado de mínimo consumo con recuperación del 90% del agua de condensación reutilizada en torres de enfriamiento. Certificación FM Global en toda la envolvente.',
        'Escala tu capacidad de generación solar en Mexicali. Con más de 5,000 m² de cubierta orientada al sur, el potencial fotovoltaico de una nave industrial en esta región es excepcional — cada kWh generado en sitio reduce la dependencia de la red de CFE y suma créditos en Energía Renovable de LEED. Baumex gestiona la integración completa: estructura preparada para carga de paneles, instalación eléctrica dimensionada y conexión a red.',
      ]}
      features={[
        {
          title: '10 MW de paneles solares instalados',
          description: 'Gulfstream 550K: 20,000 m² en cubierta + 30,000 m² en carports. 50% de la energía total será solar limpia.',
        },
        {
          title: 'Modelado energético desde fase conceptual',
          description: 'Simulación del desempeño real en condiciones climáticas de Mexicali — no en promedios nacionales. Cada decisión de diseño cuantificada.',
        },
        {
          title: 'Ahorro del 35-50% vs nave convencional',
          description: 'Resultado de combinar envolvente calibrada para 48°C, iluminación inteligente y generación solar en parques industriales de Mexicali.',
        },
      ]}
      subtituloSeccion="Energía y Atmósfera: la categoría de mayor peso en LEED para naves industriales en Mexicali"
      parrafoCierre="Maximiza los créditos de Energía y Atmósfera en tu nave industrial de Mexicali. Con envolvente calibrada, iluminación eficiente y paneles solares en cubierta, Baumex ha demostrado ahorros del 35-50% en la nave más grande de la ciudad. Solicita una consulta para tu proyecto."
      fuentes="ASHRAE 90.1 (Energy Baseline) · LEED v4.1 Energy & Atmosphere Credits · Datos de proyecto: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
