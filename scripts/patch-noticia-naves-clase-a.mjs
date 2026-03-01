/**
 * Parcha la noticia "La Demanda de Naves Clase A Transforma el Desarrollo Industrial en Mexicali y Baja California".
 * Documento ID: uqKP1CJoSsgXdCXPUz2jxz
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUz2jxz'

const p1 = 'El nearshoring no solo aumentó la demanda de espacio industrial en México — cambió el estándar de lo que las empresas están dispuestas a ocupar. En 2024 se entregaron 210 edificios industriales a nivel nacional; el 83% de ellos correspondía a naves Clase A, y la absorción de ese tipo de espacio creció cuatro veces respecto al año anterior, de acuerdo con datos de Mexico Industry y reportes del mercado inmobiliario. En Baja California, esa transición es especialmente visible: el inventario industrial de Mexicali superó los 40 millones de pies cuadrados en 2024 — un crecimiento del 60% frente a 2018 — con rentas promedio de 6.58 dólares por metro cuadrado mensual, un alza del 12% en un año. El nearshoring llegó con especificaciones técnicas no negociables, y los mercados que pueden satisfacerlas capturan la inversión de mayor valor y mayor permanencia.'

const p2 = 'La brecha entre Clase A y Clase B en el mercado industrial mexicano tiene una explicación técnica directa. Las empresas que llegan bajo el esquema nearshoring — manufactura aeroespacial, dispositivos médicos, semiconductores, automotriz de precisión — tienen requerimientos de infraestructura que están incorporados en sus certificaciones: AS9100 para el aeroespacial, ISO/TS 16949 para el automotriz, regulación FDA y COFEPRIS para el medtech. Cumplir esas certificaciones requiere altura libre de entre 9.75 y 14 metros, piso con resistencia de 8 toneladas por metro cuadrado, sistema eléctrico trifásico de 440 volts, rociadores de supresión rápida (ESFR) y patios de maniobra de entre 35 y 45 metros. Esas especificaciones definen a una nave Clase A, y ningún edificio que no las cumpla puede alojar a las empresas que hoy concentran la mayor parte de la demanda activa en los mercados fronterizos. La consecuencia práctica es que los desarrolladores con inventario Clase B, o que no tienen capacidad de construir a la medida bajo estándares Clase A, quedaron al margen de los contratos de mayor tamaño y mayor plazo que llegaron con el ciclo nearshoring.'

const p3 = 'Los datos de Mexicali entre 2023 y 2024 ilustran la intensidad del ciclo de construcción que acompañó esa demanda. Solo en 2023 se iniciaron 227,000 m² de nueva construcción en la ciudad, con 153,000 m² entregados ese mismo año; el 61% del pipeline nacional estaba prerentado antes de la entrega — es decir, construido a la medida para un inquilino específico. En el primer semestre de 2024, la demanda acumulada en Mexicali alcanzó los 75,000 m², con naves ocupadas en rangos de 5,000 a 20,000 m² por operación. Entre las empresas que eligieron Mexicali para instalarse están Medline Industries, con una inversión de 118 millones de dólares y más de 3,000 empleos directos en manufactura de insumos médicos, y Skyworks Solutions, que comprometió 300 millones de dólares en una planta de semiconductores. Ambos casos representan exactamente el perfil de inquilino que define la demanda Clase A: empresas con operaciones de alta complejidad técnica, contratos de largo plazo y requerimientos de infraestructura que van mucho más allá de una nave genérica. La región Noroeste — que incluye Mexicali, Tijuana y Ciudad Juárez — concentraba el 24% del espacio en desarrollo en todo México a mediados de 2024.'

const p4 = 'El tercer trimestre de 2025 trajo un ajuste: los mercados fronterizos registraron alta vacancia y menor demanda activa, en parte por la incertidumbre arancelaria que retrasó decisiones de localización hasta ocho meses en algunos casos. En Mexicali, el espacio disponible llegó a 250,000 m² al cierre de noviembre de 2025, una tasa de vacancia del 6.3%. Sin embargo, el tipo de vacancia importa tanto como el volumen: en mercados que crecieron un 60% en seis años, un período de ajuste es parte del ciclo normal, no una señal de retroceso estructural. Los desarrolladores que construyeron Clase A — con contratos de largo plazo ya firmados con inquilinos de manufactura avanzada — atraviesan este período con una cartera activa. Grupo Nelson, con más de 60 años en Mexicali y clientes como Gulfstream y Honeywell con décadas de continuidad, es el ejemplo de lo que significa construir para permanecer: cuando la demanda se reactive, el inventario de calidad probada es el primero en ser absorbido, y el que lo tiene no necesita salir a buscarlo — los inquilinos llegan solos.'

const p5 = 'Fuentes: Solili, Mexico Industry, Cushman & Wakefield, Real Estate Market MX, Cluster Industrial, iAmericas CaliBaja Nearshoring Report.'

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

const description = 'El 83% de los edificios industriales entregados en México en 2024 fue Clase A. En Mexicali, el inventario creció 60% desde 2018 y las rentas subieron 12% en un año. Medline ($118M) y Skyworks ($300M) eligieron la ciudad.'

const descriptionField = [
  {
    _key: 'es',
    _type: 'internationalizedArrayTextValue',
    value: description,
  },
]

try {
  const result = await client
    .patch(DOC_ID)
    .set({ body, description: descriptionField })
    .commit()

  console.log('✅ Noticia actualizada:', result._id)
  console.log('   Título:', result.title?.[0]?.value)
} catch (err) {
  console.error('❌ Error:', err.message)
}
