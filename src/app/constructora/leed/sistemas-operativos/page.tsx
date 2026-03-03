import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Sistemas Operativos Inteligentes',
  description: 'BMS integrado con submedición independiente de energía y agua para naves industriales LEED en Mexicali. Monitoreo en tiempo real, dashboards ESG. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/sistemas-operativos' },
}

export default function SistemasOperativosPage() {
  return (
    <LeedPageLayout
      titulo="Sistemas Operativos Inteligentes"
      intro="Una nave industrial certificada LEED no termina cuando se corta el listón. La operación diaria determina si el edificio mantiene el desempeño que se diseñó o si lo pierde en los primeros meses."
      imageSrc="/leed/leed3-mexicali-nave-industrial-sistemas-bms-1.png"
      imageAlt="BMS y sistemas inteligentes en nave industrial LEED — Mexicali"
      parrafos={[
        'La Directiva Europea de Eficiencia Energética en Edificios (EPBD 2024) ya exige que todos los edificios no residenciales con sistemas HVAC superiores a 290 kW instalen Sistemas de Automatización y Control de Edificios (BACS) — un reconocimiento regulatorio de que sin monitoreo inteligente, la eficiencia se degrada. En los parques industriales de Mexicali, donde la carga térmica es extrema y el consumo energético de climatización puede representar más del 40% del gasto operativo, esa inteligencia no es un lujo: es lo que separa una nave eficiente de una nave cara.',
        'Grupo Nelson integra Building Management Systems (BMS) con submedición independiente por circuito, para que el operador de la nave identifique desviaciones de consumo en horas, no en meses. Una revisión sistemática publicada en la revista Energies (MDPI, 2024) documenta que la integración de BMS con sensores IoT y analítica de datos permite detectar ineficiencias operativas hasta un 30% más rápido que los sistemas convencionales de revisión periódica.',
        'La submedición no es solo un requisito para créditos LEED en la categoría de Energía y Atmósfera — es la herramienta que permite al operador de una nave industrial en Mexicali saber exactamente cuánto consume cada sistema, identificar picos anómalos, y tomar decisiones de ajuste operativo con datos, no con intuición.',
      ]}
      features={[
        {
          title: 'BMS con submedición por circuito',
          description: 'Monitoreo en tiempo real de HVAC, iluminación, bombas, sistema fotovoltaico y consumo hídrico desde una sola plataforma.',
        },
        {
          title: 'Detección de ineficiencias 30% más rápido',
          description: 'La integración de sensores IoT y analítica de datos permite identificar desviaciones de consumo en horas, no en meses (Energies, MDPI 2024).',
        },
        {
          title: 'Trazabilidad energética e hídrica para ESG',
          description: 'Dashboards de consumo por sistema y alertas de desviación que alimentan reportes ESG sin esfuerzo manual adicional.',
        },
      ]}
      subtituloSeccion="Datos que generan decisiones, no reportes que acumulan polvo"
      parrafoCierre="Opera tu nave con el nivel de visibilidad que exige una operación multinacional: dashboards de consumo por sistema, alertas de desviación, y trazabilidad energética e hídrica que alimenta tus reportes ESG sin esfuerzo manual adicional."
      fuentes="European Parliament / EPBD 2024, 'Energy Performance of Buildings Directive Recast: BACS Requirements for Non-Residential Buildings' · Energies (MDPI), 'A Systematic Review of Building Energy Management Systems: Sensors, IoT, and AI Integration' (2024)"
    />
  )
}
