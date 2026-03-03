import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Calidad Ambiental Interior',
  description: 'Materiales de bajo COV, ventilación ASHRAE 62.1 y confort térmico para naves industriales LEED en Mexicali. Protege la salud y productividad de tu equipo. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/calidad-ambiental' },
}

export default function CalidadAmbientalPage() {
  return (
    <LeedPageLayout
      titulo="Calidad Ambiental Interior"
      intro="La calidad del ambiente interior de una nave industrial no es un tema secundario — es lo que determina la productividad, la salud y la retención de tu fuerza laboral."
      imageSrc="/leed/leed5-mexicali-nave-industrial-calidad-ambiental-1.jpeg"
      imageAlt="Calidad ambiental interior en nave industrial LEED — Mexicali"
      parrafos={[
        'La Organización Mundial de la Salud declaró el aire interior limpio como un derecho humano fundamental, y sus guías de calidad del aire establecen límites específicos para formaldehído, benceno y otros compuestos orgánicos volátiles (COV) que se emiten desde pinturas, selladores, adhesivos y recubrimientos de piso. En Mexicali, donde las naves operan con recirculación intensiva de aire por las temperaturas extremas, controlar las fuentes de emisión interior no es opcional — es lo que protege a las personas que trabajan dentro.',
        'Elimina las fuentes de emisión tóxica del interior de tu nave especificando materiales que cumplen los umbrales de LEED para la categoría de Calidad del Ambiente Interior. Eso significa pinturas y recubrimientos con COV por debajo de 50 g/L, selladores por debajo de 250 g/L, adhesivos por debajo de 70 g/L, y sistemas de piso que cumplen la norma FloorScore o equivalente.',
        'REHVA, la Federación Europea de Asociaciones de HVAC, actualizó en 2024 sus directrices técnicas de calidad ambiental interior en respuesta a la nueva Directiva Europea de Eficiencia Energética en Edificios (EPBD), reforzando que ventilación y calidad del aire son inseparables del desempeño energético del edificio. Grupo Nelson integra estos criterios desde la especificación de materiales: cada producto que entra a la nave se verifica contra los umbrales LEED antes de instalarse.',
      ]}
      features={[
        {
          title: 'Materiales de bajo COV verificados',
          description: 'Pinturas <50 g/L, selladores <250 g/L, adhesivos <70 g/L y pisos con certificación FloorScore — verificados antes de instalarse en obra.',
        },
        {
          title: 'Ventilación ASHRAE 62.1 para clima desértico',
          description: 'Sistemas diseñados con filtración adecuada para las condiciones de polvo y partículas del entorno desértico de Mexicali — una consideración que los diseños genéricos no contemplan.',
        },
        {
          title: 'Confort térmico controlado',
          description: 'Iluminación natural y artificial optimizada para operación industrial, con temperatura interior controlada para maximizar la productividad del equipo de trabajo.',
        },
      ]}
      subtituloSeccion="Productividad que se mide en aire, luz y temperatura"
      parrafoCierre="Garantiza un espacio de trabajo donde tu equipo rinde al máximo: confort térmico controlado, iluminación natural y artificial optimizada para operación industrial, y aire libre de contaminantes. Eso no solo cumple créditos LEED — cumple la expectativa de cualquier empresa multinacional que opere en los parques industriales de la frontera norte."
      fuentes="WHO, 'Guidelines for Indoor Air Quality: Selected Pollutants' · REHVA, 'Model Indoor Environmental Quality Regulation to Fulfil New Provisions of 2024 EPBD Recast'"
    />
  )
}
