import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Calidad Ambiental Interior | LEED | Grupo Nelson',
  description: 'Materiales de bajo COV, ventilación ASHRAE 62.1 y confort térmico para naves industriales LEED en Mexicali. Protege la salud y productividad de tu equipo. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/calidad-ambiental' },
}

export default function CalidadAmbientalPage() {
  return (
    <LeedPageLayout
      eyebrow="Aire, luz y confort interior"
      titulo="Construye tu nave industrial en Mexicali con calidad ambiental interior certificada LEED"
      intro="Pinturas con COV por debajo de 50 g/L. Ventilación diseñada para clima desértico con filtración ASHRAE 62.1. Confort térmico controlado para operación industrial continua. Estos son los estándares de calidad ambiental interior que Grupo Nelson integra en la construcción de naves industriales en Mexicali — y los que permiten obtener créditos LEED en la categoría de ambiente interior."
      imageSrc="/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.jpeg"
      imageAlt="Calidad ambiental interior en nave industrial LEED — Mexicali"
      parrafos={[
        'Especifica materiales verificados contra umbrales LEED antes de que se instalen en tu nave. Pinturas y recubrimientos con compuestos orgánicos volátiles por debajo de 50 g/L, selladores por debajo de 250 g/L, adhesivos por debajo de 70 g/L, y sistemas de piso con certificación FloorScore. Baumex verifica cada producto que entra a obra contra estos umbrales — en Mexicali, donde las naves operan con recirculación intensiva de aire por temperaturas que superan los 45°C, controlar las fuentes de emisión interior protege directamente a las personas que trabajan dentro.',
        'Asegura ventilación adecuada para el entorno desértico de Mexicali. Los sistemas de ventilación de Grupo Nelson se diseñan conforme a ASHRAE 62.1 con filtración específica para las condiciones de polvo y partículas de la región. La nave Gulfstream 550K (52,200 m²) opera con 42 manejadoras de aire y 3,200 toneladas de aire acondicionado de mínimo consumo, con recuperación del 90% del agua de condensación.',
        'Documenta las condiciones de trabajo de tu nave industrial en Mexicali con parámetros medibles. Iluminación natural y artificial optimizada para operación industrial, temperatura interior controlada, y aire libre de contaminantes. Estos parámetros suman créditos LEED y cumplen la expectativa de cualquier empresa multinacional que evalúa instalarse en parques industriales de Mexicali.',
      ]}
      features={[
        {
          title: 'Materiales de bajo COV verificados en obra',
          description: 'Pinturas <50 g/L, selladores <250 g/L, adhesivos <70 g/L y pisos FloorScore — cada producto verificado contra umbrales LEED antes de instalarse.',
        },
        {
          title: 'Ventilación ASHRAE 62.1 para clima desértico',
          description: 'Filtración diseñada para polvo y partículas del entorno de Mexicali. Gulfstream 550K: 42 manejadoras, 3,200 toneladas de A/C, 90% de recuperación de agua.',
        },
        {
          title: 'Confort térmico para operación industrial continua',
          description: 'Temperatura controlada, iluminación optimizada y aire limpio — condiciones documentables que facilitan auditorías corporativas y retención de personal.',
        },
      ]}
      subtituloSeccion="Calidad ambiental que se mide: aire, luz y temperatura en tu nave industrial de Mexicali"
      parrafoCierre="Opera tu nave industrial en Mexicali con calidad ambiental interior que cumple créditos LEED, estándares ASHRAE y las expectativas de empresas Fortune 500. Gulfstream, Honeywell y 30 corporaciones internacionales ya operan en parques de Grupo Nelson con estos estándares. Solicita una consulta para tu proyecto."
      fuentes="ASHRAE Standard 62.1 (Ventilation for Acceptable Indoor Air Quality) · LEED v4.1 Indoor Environmental Quality Credits · FloorScore Standard (Resilient Floor Covering Institute)"
    />
  )
}
