import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'
import { createMetadata } from '@/lib/create-metadata'

export const metadata = createMetadata({
  lang: 'es',
  path: '/es/constructora/leed/sistemas-operativos',
  title: 'Sistemas Operativos Inteligentes LEED | Grupo Nelson Mexicali',
  description: 'BMS con submedición por circuito para naves industriales LEED en Mexicali. Monitoreo en tiempo real de HVAC, energía solar y agua. Dashboards ESG. Grupo Nelson.',
})

export default function SistemasOperativosPage() {
  return (
    <LeedPageLayout
      eyebrow="Monitoreo y submedición BMS"
      titulo="Monitorea cada sistema de tu nave industrial en Mexicali con BMS y submedición LEED por circuito"
      intro="Gulfstream 550K opera con 42 manejadoras de A/C, 10 MW de paneles solares y 20 MW de capacidad eléctrica. Sin monitoreo inteligente por circuito, detectar una desviación de consumo toma meses. Con BMS y submedición, toma horas. Baumex integra estos sistemas desde la construcción de la nave — no como retrofit."
      imageSrc="/leed/leed3-mexicali-nave-industrial-sistemas-bms-2.jpeg"
      imageAlt="BMS y sistemas inteligentes en nave industrial LEED — Mexicali"
      parrafos={[
        'Identifica desviaciones de consumo energético en horas, no en meses. Baumex integra Building Management Systems con submedición independiente por circuito: HVAC, iluminación, bombas, sistema fotovoltaico y consumo hídrico monitoreados desde una sola plataforma. En Mexicali, donde la climatización puede representar más del 40% del gasto operativo de una nave, esa visibilidad es la diferencia entre operar con datos y operar con intuición.',
        'Simplifica tus reportes ESG con trazabilidad energética e hídrica automática. Los dashboards de consumo por sistema y las alertas de desviación alimentan reportes corporativos sin esfuerzo manual adicional. Para empresas Fortune 500 que operan en parques de Grupo Nelson — Gulfstream, Honeywell, DHL — este nivel de trazabilidad no es opcional: es lo que sus corporativos exigen para reportar a inversionistas y boards.',
        'Asegura que tu nave LEED en Mexicali mantenga el desempeño que se diseñó. La certificación LEED no termina cuando se entrega la nave — la operación diaria determina si el edificio cumple o se degrada. La submedición por circuito es la herramienta que permite al operador saber exactamente cuánto consume cada sistema, identificar picos anómalos y tomar decisiones de ajuste con datos verificables.',
      ]}
      features={[
        {
          title: 'BMS con submedición por circuito',
          description: 'HVAC, iluminación, bombas, fotovoltaicos y consumo hídrico monitoreados en tiempo real desde una sola plataforma.',
        },
        {
          title: 'Detección de ineficiencias en horas',
          description: 'Sensores IoT integrados que identifican desviaciones de consumo antes de que impacten el gasto operativo mensual.',
        },
        {
          title: 'Dashboards ESG sin esfuerzo manual',
          description: 'Trazabilidad energética e hídrica por sistema. Alertas de desviación. Reportes corporativos alimentados automáticamente.',
        },
      ]}
      subtituloSeccion="Controla el gasto operativo de tu nave industrial en Mexicali con datos en tiempo real"
      parrafoCierre="Opera tu nave industrial en Mexicali con la visibilidad que exige una operación multinacional. Baumex integra BMS y submedición desde la construcción para que cada sistema — HVAC, solar, agua, iluminación — sea medible, auditable y optimizable. Solicita una consulta para tu proyecto."
      fuentes="LEED v4.1 Energy & Atmosphere: Advanced Energy Metering Credit · ASHRAE Guideline 36 (High-Performance Sequences of Operation)"
    />
  )
}
