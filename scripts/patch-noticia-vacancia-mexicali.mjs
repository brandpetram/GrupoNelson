/**
 * Parcha la noticia de vacancia/mercado industrial Mexicali con contenido real.
 * Documento ID: kllPxzrZvj3u6Zg4KymTke
 * Cambia también título y slug porque el ángulo cambió completamente.
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KymTke'

const p1 = 'El mercado inmobiliario industrial de Mexicali cerró 2024 con señales claras de consolidación: la demanda bruta acumulada superó los 70,000 m² durante el año, los precios promedio de renta alcanzaron USD 6.58 por metro cuadrado — un alza del 12% frente a los USD 5.90 registrados en junio de 2023 — y el inventario total de la ciudad superó los 3.4 millones de metros cuadrados, de acuerdo con datos de Solili y reportes del sector inmobiliario industrial. El corredor Boulevard Lázaro Cárdenas se posicionó como el más activo de la ciudad, con tarifas de hasta USD 6.79/m² y concentrando la mayor parte de las operaciones de arrendamiento del año. Mexicali se consolida como el segundo mercado industrial más relevante de Baja California, solo por detrás de Tijuana, y mantiene una posición de interés creciente entre empresas nacionales e internacionales que buscan establecer operaciones en la frontera norte de México.'

const p2 = 'El desempeño de 2024 se entiende mejor en el contexto de los años previos. Mexicali experimentó un ciclo prolongado de vacancia baja — por debajo del 4% durante varios años — impulsado por la llegada de empresas de manufactura aeroespacial, automotriz y de dispositivos médicos que eligieron la ciudad por su acceso directo al mercado estadounidense a través de la frontera con Calexico, California. La presión sostenida sobre la oferta disponible fue la principal razón del alza en precios: cuando la demanda supera consistentemente al inventario disponible, los arrendadores ajustan tarifas, y Mexicali vio ese ajuste materializarse con un incremento del 12% en un solo año. A nivel estatal, Baja California combina infraestructura fronteriza, mano de obra técnica especializada y un ecosistema de parques industriales con décadas de experiencia en manufactura de exportación — condiciones que explican por qué el mercado no solo atrajo nuevos inquilinos en 2024, sino que retuvo a los existentes.'

const p3 = 'Los sectores con mayor presencia en el mercado de Mexicali reflejan la evolución de la ciudad como destino de manufactura avanzada. La industria logística y el sector manufacturero — en particular el aeroespacial, el automotriz y el de dispositivos médicos — son los principales demandantes de espacio industrial, según reportes de mercado. Los contratos registrados en 2024 oscilaron entre los 5,000 y los 20,000 m² por operación, lo que indica que el mercado está atendiendo tanto a empresas en etapa de expansión moderada como a grandes operadores que requieren instalaciones de escala. El inventario de la ciudad se distribuye en múltiples parques y corredores con distintos niveles de especificación: desde naves Clase A con sistemas centrales de protección contra incendios, línea eléctrica dedicada y certificaciones LEED, hasta instalaciones de perfil más económico orientadas a manufactura de menor complejidad. Desarrolladores industriales como Grupo Nelson, con cerca de 60 años de presencia en el mercado, operan en este rango completo de oferta y representan un ejemplo del tipo de actor que ha acompañado la transformación de Mexicali desde sus primeras décadas como zona maquiladora hasta su etapa actual como polo de manufactura de alta precisión.'

const p4 = 'El primer trimestre de 2025 introdujo un elemento de cautela: la imposición de aranceles estadounidenses a productos mexicanos generó incertidumbre entre inversionistas y contrajo la demanda de espacio industrial en Mexicali y otros mercados fronterizos. La absorción bruta del primer trimestre de 2025 representó aproximadamente el 30% de la actividad registrada en el mismo período de 2024, según datos de Solili. Sin embargo, los fundamentos del mercado no han cambiado: ubicación estratégica, fuerza laboral técnica consolidada, infraestructura de primer nivel y acceso directo a California y Arizona. La pregunta para 2025-2026 no es si Mexicali seguirá siendo un destino industrial relevante, sino a qué ritmo se reactivará la demanda una vez que el contexto arancelario se estabilice. Para los desarrolladores con portafolios consolidados y contratos de largo plazo, este período de ajuste es parte del ciclo natural de un mercado maduro — y Mexicali tiene décadas de evidencia de que la demanda industrial, tarde o temprano, regresa.'

const p5 = 'Fuentes: Solili Reporte Industrial 2024, Real Estate Market MX, Solili Q1 2025.'

const description = 'El mercado industrial de Mexicali cerró 2024 con rentas 12% más altas, demanda acumulada de 70,000 m² y precios de hasta USD 6.79/m² en Boulevard Lázaro Cárdenas.'

function makeBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

const body = [
  {
    _key: 'es',
    _type: 'internationalizedArrayBlockContentValue',
    value: [
      makeBlock('p1', p1),
      makeBlock('p2', p2),
      makeBlock('p3', p3),
      makeBlock('p4', p4),
      makeBlock('p5', p5),
    ],
  },
]

const result = await client
  .patch(DOC_ID)
  .set({
    title: [
      {
        _key: 'es',
        _type: 'internationalizedArrayStringValue',
        value: 'Mexicali Consolida su Mercado Industrial: Rentas Suben 12% y la Demanda de 2024 Sienta las Bases para el Futuro',
      },
    ],
    slug: {
      _type: 'slug',
      current: 'mexicali-consolida-mercado-industrial-rentas-2024',
    },
    description: [
      {
        _key: 'es',
        _type: 'internationalizedArrayTextValue',
        value: description,
      },
    ],
    body,
  })
  .commit()

console.log('✅ Noticia actualizada:', result._id)
console.log('   Título:', result.title?.[0]?.value)
