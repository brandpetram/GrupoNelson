import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Energía & Atmósfera',
  description: 'Modelado energético, envolvente de alto rendimiento y fotovoltaicos en cubierta para naves industriales LEED en Mexicali. Ahorro del 35-50% vs nave convencional. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/energia-atmosfera' },
}

export default function EnergiaAtmosferaPage() {
  return (
    <LeedPageLayout
      titulo="Energía & Atmósfera"
      intro="El estándar de eficiencia energética ASHRAE 90.1 es el piso, no el techo. Cada crédito de la categoría de Energía y Atmósfera de LEED se gana demostrando cuánto supera tu nave ese baseline — y en Mexicali, donde la demanda de enfriamiento domina el perfil energético, superar el estándar requiere modelado energético desde la fase conceptual."
      imageSrc="/leed/leed7-mexicali-nave-industrial-energia-atmosfera-1.jpeg"
      imageAlt="Energía y atmósfera — Nave industrial LEED con fotovoltaicos en Mexicali"
      parrafos={[
        'El World Green Building Council documenta en su "Global Status Report 2024" que los edificios representan el 37% de las emisiones globales de CO₂ relacionadas con energía, y que el diseño integrativo es la estrategia con mayor impacto demostrado para reducir el consumo energético de edificios nuevos. No se trata de agregar tecnología al final; se trata de diseñar el edificio como sistema eficiente desde el primer trazo.',
        'Grupo Nelson coordina tres estrategias mediante modelado energético que simula el desempeño real de la nave en las condiciones climáticas de Mexicali: la envolvente térmica reduce la carga de enfriamiento, la iluminación LED de gran altura con controles de ocupación y daylighting reduce la demanda eléctrica base, y el sistema fotovoltaico en cubierta genera la energía que el edificio ya no desperdicia.',
        'El Fraunhofer Institute for Solar Energy Systems (ISE) documenta que la combinación de aislamiento de alto rendimiento con fotovoltaicos en cubierta puede reducir el consumo neto de energía de un edificio industrial entre 60% y 85% frente a un diseño convencional. En una nave de Mexicali con más de 5,000 m² de cubierta orientada al sur, el potencial de generación fotovoltaica es excepcional — y cada kWh generado en sitio reduce la dependencia de la red y suma créditos en Energía Renovable de LEED.',
      ]}
      features={[
        {
          title: 'Modelado energético desde fase conceptual',
          description: 'Simulación del desempeño real de la nave en las condiciones climáticas de Mexicali — no en condiciones promedio de una base de datos genérica.',
        },
        {
          title: 'Fotovoltaicos en cubierta >5,000 m²',
          description: 'Cubierta orientada al sur con potencial de generación excepcional. Cada kWh generado en sitio reduce la dependencia de la red y suma créditos en Energía Renovable de LEED.',
        },
        {
          title: 'Ahorro del 35-50% vs nave convencional',
          description: 'Resultado documentado de combinar envolvente calibrada para clima extremo, iluminación inteligente y generación solar en cubierta en los parques industriales de Mexicali.',
        },
      ]}
      subtituloSeccion="La categoría de mayor peso en LEED: dominarla define la diferencia entre Certified y Gold"
      parrafoCierre="Reduce tu gasto energético entre un 35% y un 50% frente a una nave convencional del mismo tamaño en la misma zona. Ese ahorro no es una proyección teórica — es el resultado documentado de combinar envolvente calibrada para clima extremo, iluminación inteligente y generación solar en cubierta en los parques industriales de Mexicali."
      fuentes="World Green Building Council, 'Global Status Report for Buildings and Construction 2024' · Fraunhofer ISE, 'Building Envelopes: Optimization of Multifunctional Properties for Climate-Neutral Buildings'"
    />
  )
}
