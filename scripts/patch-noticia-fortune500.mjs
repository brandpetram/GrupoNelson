/**
 * Parcha la noticia "Otra Empresa de la Lista Fortune 500 Elige Baja California para su Expansión en México".
 * Documento ID: uqKP1CJoSsgXdCXPUz2gvH
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUz2gvH'

const p1 = 'En noviembre de 2024, Toyota Motor Corporation — puesto 15 en el Fortune Global 500 — anunció una inversión de 336 millones de dólares en su planta de Tijuana para producir la nueva generación de la Tacoma y su versión híbrida eléctrica, con 1,200 empleos directos adicionales. En marzo de 2025, Sempra Energy — puesto 246 en el Fortune 500 de Estados Unidos — confirmó una inversión de 3,550 millones de dólares en dos proyectos en Baja California: la terminal de gas natural licuado ECA LNG en Ensenada (3,000 millones de dólares, 4,700 empleos directos) y el parque eólico Cimarron en La Rumorosa, Tecate (550 millones de dólares, 300 MW de capacidad para abastecer a más de 170,000 hogares). Dos de las corporaciones más grandes del mundo, comprometiendo casi 4,000 millones de dólares en el mismo estado en el mismo ciclo de inversión — en un año en que los aranceles estadounidenses generaban incertidumbre en toda la región. El hecho merece una lectura más atenta que el dato en sí.'

const p2 = 'Ninguna de estas inversiones llegó de improviso. Toyota lleva más de dos décadas en Tijuana: su planta de manufactura de Baja California opera desde 2002 y ha construido allí una cadena de proveeduría y una fuerza laboral técnica con más de 20 años de experiencia en producción automotriz de exportación. Honeywell lleva 31 años en BC, con seis centros de manufactura y dos laboratorios de ingeniería activos en el estado, y más de 6,000 trabajadores en la región. Sempra acumula 28 años de operación en México, presente en 17 estados y con 13,600 millones de dólares invertidos históricamente en infraestructura energética. Estos no son inversionistas que llegan a explorar — son operadores que ya saben lo que BC puede ofrecerles y que toman decisiones de expansión basadas en décadas de evidencia operativa. Cuando el gobernador o la gobernadora de BC anuncia una inversión Fortune 500, el titular tiende a ser el monto. La historia real suele estar en los años previos: en los contratos de largo plazo, en la formación de técnicos especializados, en las infraestructuras que funcionaron sin falla durante décadas y que hicieron posible la siguiente ronda de inversión.'

const p3 = 'La región CaliBaja — el corredor económico que integra el sur de California y el norte de Baja California — mueve más de 2,300 millones de dólares en mercancías diariamente por la frontera entre EE.UU. y México. Bajo el T-MEC, ese flujo ocurre sin aranceles para productos que cumplen las reglas de origen, lo que convierte a BC en el territorio más eficiente del hemisferio para empresas que producen para el mercado norteamericano: cercanía geográfica a California y Arizona, acceso sin arancel al mayor mercado de consumo del mundo y un ecosistema de manufactura avanzada con décadas de trayectoria. En 2024, Baja California captó 2,479 millones de dólares de inversión extranjera directa — el tercer mayor flujo de cualquier estado del país — provenientes de 31 países, con Estados Unidos aportando el 59.6% del total. La manufactura del sector de transporte representó casi el 60% de ese total, lo que revela que la apuesta de Toyota no fue una excepción sino parte de un patrón más amplio de empresas con cadenas de suministro integradas a la industria automotriz y aeroespacial norteamericana.'

const p4 = 'Lo que el patrón Fortune 500 en BC revela para el mercado inmobiliario industrial es que las corporaciones globales no eligen sus ubicaciones de manufactura por el precio del metro cuadrado. Eligen por la certeza operativa: infraestructura que cumpla sus estándares técnicos, capacidad de expansión cuando la demanden, y un socio con experiencia probada en su sector. Toyota necesitaba una planta que pudiera producir la Tacoma HEV a los estándares de la industria automotriz japonesa en una ciudad fronteriza con California. Sempra necesitaba capacidad para conectar infraestructura energética en dos mercados regulatorios distintos. Honeywell necesita ingenieros con certificaciones aeroespaciales que no se forman en meses. Lo que estas empresas comparten es la búsqueda de un ecosistema que funcione — y Baja California, con seis décadas de manufactura de exportación, ofrece exactamente eso. Para desarrolladores industriales como Grupo Nelson, que han construido y operado naves para clientes Fortune 500 durante décadas, la llegada de Toyota y Sempra no es una noticia sorprendente: es la continuación de un ciclo que empezó con los primeros parques maquiladores de los años sesenta y que sigue acumulando evidencia a favor de este mercado.'

const p5 = 'Fuentes: El Financiero, Industrial News BC, Secretaría de Economía, Mexico Business News, Energy Analytics Institute, San Diego Regional EDC, Semanario ZETA.'

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

const description = 'Toyota ($336M, 1,200 empleos) y Sempra Energy ($3,550M) confirmaron inversiones en BC en el mismo ciclo. El estado captó $2,479M de IED en 2024, tercer lugar nacional.'

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
