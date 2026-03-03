import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Materiales & Recursos',
  description: 'Acero con EPD verificada, contenido reciclado documentado y gestión de residuos de obra con desvío mínimo del 50% a vertedero. Naves LEED en Mexicali. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/materiales-recursos' },
}

export default function MaterialesRecursosPage() {
  return (
    <LeedPageLayout
      titulo="Materiales & Recursos"
      intro="El acero estructural de tu nave puede tener 90% de contenido reciclado o puede tener 15% — y ambos proveedores te van a decir que su producto es 'sustentable.' La diferencia está en la Declaración Ambiental de Producto (EPD)."
      imageSrc="/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.jpeg"
      imageAlt="Materiales con EPD verificada en nave industrial LEED — Mexicali"
      parrafos={[
        'Eurofer, la Asociación Europea del Acero, reporta en "European Steel in Figures 2024" que el 56% del acero producido en la Unión Europea proviene de chatarra reciclada, con una tasa de recolección superior al 90%. Cada tonelada de chatarra reciclada evita 1.5 toneladas de CO₂. Exige esos números con EPD — no con palabras.',
        'Grupo Nelson especifica acero estructural con alto contenido reciclado documentado, concreto con adiciones de cenizas volantes o escoria que reducen el cemento Portland y mejoran la durabilidad en clima extremo, y materiales de acabado con Declaraciones de Productos Saludables (HPD) que verifican la ausencia de sustancias de preocupación. El abastecimiento regional — dentro de un radio de 160 km del sitio — suma puntos adicionales y reduce la huella de transporte.',
        'La Comisión Europea impulsó en 2024 su Plan de Acción de Economía Circular con énfasis en que la circularidad en construcción no se mide solo por el contenido reciclado del material, sino por la gestión del ciclo completo. En obra, eso se traduce en un plan de manejo de residuos que separa el 100% de los materiales recuperables — acero, concreto, cartón, madera, plásticos de embalaje — con desvío mínimo del 50% de vertedero y trazabilidad documentada para cada fracción.',
      ]}
      features={[
        {
          title: 'EPD verificada por tercero',
          description: 'Cada material estructural llega con su Declaración Ambiental de Producto que cuantifica el impacto real desde la extracción hasta la puerta de fábrica — no promesas de proveedor.',
        },
        {
          title: 'Abastecimiento regional <160 km',
          description: 'Materiales de origen regional que suman créditos LEED adicionales y reducen la huella de carbono del transporte en la cadena de construcción.',
        },
        {
          title: 'Gestión de residuos con desvío >50%',
          description: 'Plan de manejo de residuos con separación del 100% de materiales recuperables y trazabilidad documentada para cada fracción — acero, concreto, cartón, madera y plásticos.',
        },
      ]}
      subtituloSeccion="Construye con materiales que resisten auditoría, no solo inspección visual"
      parrafoCierre="Presenta ante tus inquilinos, inversionistas y el GBCI un expediente de materiales donde cada producto tiene su EPD, cada lote de concreto tiene su certificado de adiciones, y cada tonelada de residuo de obra tiene su destino documentado. Ese nivel de control en los parques industriales de Mexicali es lo que separa una nave certificada de una nave que dice ser sustentable."
      fuentes="Eurofer, 'European Steel in Figures 2024' · European Commission, 'Circular Economy Action Plan: Construction & Demolition Waste' (2024)"
    />
  )
}
