import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Materiales y Recursos LEED | Grupo Nelson Mexicali',
  description: 'Naves industriales LEED en Mexicali con acero reciclado documentado por EPD, abastecimiento regional <160 km y desvío de residuos >50%. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/materiales-recursos' },
}

export default function MaterialesRecursosPage() {
  return (
    <LeedPageLayout
      titulo="Construye tu nave industrial LEED en Mexicali con materiales documentados por EPD y contenido reciclado verificable"
      intro="El acero estructural de tu nave puede tener 90% de contenido reciclado o 15% — la diferencia está en la Declaración Ambiental de Producto (EPD). Baumex especifica cada material con EPD verificada por tercero: acero con contenido reciclado documentado, concreto con adiciones que reducen cemento Portland, y acabados con HPD que verifican ausencia de sustancias de preocupación."
      imageSrc="/leed/leed6-mexicali-nave-industrial-materiales-recursos-1.jpeg"
      imageAlt="Materiales con EPD verificada en nave industrial LEED — Mexicali"
      parrafos={[
        'Exige datos verificables de cada material que entra a tu nave industrial en Mexicali. Cada tonelada de acero reciclado evita 1.5 toneladas de CO₂ — pero solo cuenta si tiene EPD que lo demuestre. Baumex especifica acero estructural con alto contenido reciclado documentado, concreto con cenizas volantes o escoria que mejoran durabilidad en clima extremo, y materiales de acabado con Declaraciones de Productos Saludables (HPD).',
        'Reduce la huella de transporte con abastecimiento regional dentro de un radio de 160 km del sitio de construcción en Mexicali. Proveedores locales de acero, concreto y materiales de construcción que suman créditos LEED adicionales en la categoría de Materiales y Recursos. Baumex tiene relaciones de largo plazo con proveedores certificados de la región — 28 años de construcción en Mexicali generan una cadena de suministro que no se improvisa.',
        'Gestiona los residuos de obra con separación del 100% de materiales recuperables y desvío mínimo del 50% de vertedero. Acero, concreto, cartón, madera y plásticos de embalaje — cada fracción con destino documentado y trazabilidad verificable. En la nave Gulfstream 550K, Baumex gestionó residuos de 52,200 m² de construcción con este estándar.',
      ]}
      features={[
        {
          title: 'EPD verificada por tercero en cada material',
          description: 'Acero, concreto y acabados con Declaración Ambiental de Producto que cuantifica impacto real — no promesas de proveedor.',
        },
        {
          title: 'Abastecimiento regional <160 km',
          description: 'Proveedores locales de Mexicali que suman créditos LEED adicionales. 28 años de relaciones con la cadena de suministro de la región.',
        },
        {
          title: 'Desvío de residuos >50% con trazabilidad',
          description: 'Separación del 100% de materiales recuperables. Cada fracción — acero, concreto, cartón, madera — con destino documentado.',
        },
      ]}
      subtituloSeccion="Materiales con EPD verificada para tu nave industrial LEED en Mexicali"
      parrafoCierre="Construye tu nave industrial en Mexicali con materiales que tienen EPD, certificados de contenido reciclado y trazabilidad de residuos documentada. Baumex integra estos estándares en cada proyecto — 75+ naves construidas con proveedores verificados. Solicita una consulta."
      fuentes="LEED v4.1 Materials & Resources Credits · ISO 14025 (Environmental Product Declarations) · Datos de proyecto: Gulfstream 550K, Baumex (2024-2026)"
    />
  )
}
