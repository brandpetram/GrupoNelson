import type { Metadata } from 'next'
import { LeedPageLayout } from '@/components/brandpetram/leed-page-layout'

export const metadata: Metadata = {
  title: 'Sitios Sostenibles & Agua',
  description: 'Techos reflectivos SRI >78, pavimentos de alto albedo y captación pluvial para naves industriales LEED en Mexicali. Reduce consumo de agua un 40%. Grupo Nelson.',
  alternates: { canonical: 'https://gruponelson.mx/constructora/leed/sitios-sostenibles' },
}

export default function SitiosSosteniblesPage() {
  return (
    <LeedPageLayout
      titulo="Sitios Sostenibles & Agua"
      intro="Mexicali se encuentra en una de las regiones con mayor estrés hídrico de Norteamérica. Operar una nave industrial aquí sin estrategia de eficiencia hídrica no es solo un riesgo ambiental — es un riesgo operativo."
      imageSrc="/leed/leed4-mexicali-nave-industrial-sitios-sostenibles-1.png"
      imageAlt="Sitios sostenibles y eficiencia hídrica — Nave industrial LEED Mexicali"
      parrafos={[
        'La Agencia Europea de Medio Ambiente reporta en "Europe\'s State of Water 2024" que las zonas bajo estrés hídrico enfrentan restricciones de suministro que pueden forzar reducciones o paradas de producción industrial. Esa realidad ya no es exclusiva de Europa mediterránea: es la realidad de Baja California, donde cada litro que tu nave consume debe justificarse y cada litro que puede recuperarse debe recuperarse.',
        'Reduce la isla de calor en tu parque industrial con cubiertas reflectivas de SRI superior a 78 y pavimentos de alto albedo en estacionamientos y patios de maniobras. El estándar europeo EN 17190 establece los métodos de medición de reflectancia solar para membranas de cubierta, y el European Cool Roof Council certifica productos que mantienen ese rendimiento a largo plazo — no solo el primer año.',
        'Complementa la estrategia de cubierta con captación pluvial que aprovecha los más de 5,000 m² de techo de tu nave. Aunque Mexicali recibe precipitación limitada, los eventos pluviales concentrados generan volúmenes recuperables que, combinados con fixtures sanitarios de ultra-bajo flujo, pueden reducir el consumo total de agua un 40% frente a una nave convencional.',
      ]}
      features={[
        {
          title: 'Cubiertas reflectivas SRI >78',
          description: 'Reduce la temperatura superficial de la cubierta hasta 30°C, bajando la carga térmica del edificio y el efecto de isla de calor sobre todo el parque.',
        },
        {
          title: 'Captación pluvial integrada',
          description: 'Aprovecha los más de 5,000 m² de techo para recuperar volúmenes pluviales que, combinados con fixtures de ultra-bajo flujo, reducen el consumo de agua un 40%.',
        },
        {
          title: 'Pavimentos de alto albedo',
          description: 'Estacionamientos y patios de maniobras con materiales certificados por el European Cool Roof Council que mantienen su reflectancia a largo plazo.',
        },
      ]}
      subtituloSeccion="Cumple LEED Water Efficiency en la zona más árida de México"
      parrafoCierre="Certifica los créditos de eficiencia hídrica y sitios sustentables con un diseño que no solo puntúa ante el GBCI, sino que resuelve un problema real de tu operación: la dependencia del agua en una región donde el suministro no está garantizado a perpetuidad."
      fuentes="European Environment Agency, 'Europe\'s State of Water 2024: The Need for Improved Water Resilience' · European Cool Roof Council / EN 17190, 'Flexible Sheets for Waterproofing – Solar Reflectance Index'"
    />
  )
}
