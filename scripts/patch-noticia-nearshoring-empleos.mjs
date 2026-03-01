/**
 * Parcha la noticia "El Nearshoring Impulsa la Creación de Empleos Industriales en Baja California".
 * Documento ID: 4lXD1QprlKmqniOHamwX5V
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHamwX5V'

const p1 = 'Baja California registró 414,572 trabajadores en la manufactura en el segundo trimestre de 2024, la cifra más alta de su historia reciente, de acuerdo con datos del INEGI reportados por Mexico Industry. La manufactura se consolidó como la principal fuente de empleo del estado, superando a todos los demás sectores de la economía local. El resultado no es casualidad: Baja California concentra el 17.4% de todos los establecimientos registrados en el Programa IMMEX a nivel nacional — la proporción más alta de cualquier entidad federativa, según datos de la Secretaría de Economía al cierre de 2025. Para una región que ha construido su modelo económico sobre la manufactura de exportación durante más de seis décadas, estas cifras representan la consolidación de una apuesta que comenzó con los primeros parques industriales de los años sesenta y que hoy atrae capital de industrias que en esa época no existían: aeroespacial de precisión, dispositivos médicos de implante, semiconductores y baterías de litio para vehículos eléctricos.'

const p2 = 'El desempeño laboral de Baja California en manufactura es el resultado acumulado de décadas de inversión en infraestructura industrial, formación técnica y desarrollo de ecosistemas sectoriales especializados. La frontera con California y Arizona fue el punto de partida: la proximidad al mercado estadounidense sin los costos logísticos de la distancia convirtió a Tijuana, Mexicali y Ensenada en destinos naturales para empresas que necesitaban producir cerca de sus clientes finales. Con el tiempo, esa ventaja geográfica se reforzó con otras: una fuerza laboral técnica con experiencia acumulada en manufactura de alta complejidad, parques industriales con especificaciones Clase A certificables bajo estándares internacionales, y una cadena de proveeduría local que en sectores como el aeroespacial y el médico opera con normas equivalentes a las de las plantas matrices en Estados Unidos y Europa. El resultado es que hoy Baja California no compite solo por costo laboral — compite por capacidad técnica y confiabilidad operativa, lo que explica por qué empresas con opciones en toda América Latina siguen eligiendo el estado para sus operaciones de mayor valor agregado.'

const p3 = 'Los sectores con mayor presencia en Baja California ilustran esa trayectoria de sofisticación creciente. El aeroespacial es el más emblemático: el estado alberga más de 100 empresas del sector que generan en conjunto cerca de 30,000 empleos directos, con concentración en Tijuana y Mexicali. Los dispositivos médicos, los semiconductores y circuitos impresos, las baterías de litio para vehículos eléctricos y la manufactura farmacéutica forman el núcleo de los sectores prioritarios identificados por CaliBaja — la alianza binacional de desarrollo económico — como los de mayor potencial de crecimiento en la región fronteriza. La presión de esa demanda se refleja directamente en el mercado inmobiliario industrial: la tasa de ocupación de los parques industriales de Baja California llegó al 95%, y el sector de bodegas industriales creció un 14.5% frente al año anterior, con 72 nuevos proyectos registrados solo en el primer semestre de 2025. Deloitte proyecta que el nearshoring podría generar hasta 1.17 millones de empleos adicionales en México en un horizonte de cinco años — y Baja California, por su infraestructura consolidada, su posición fronteriza y su ecosistema sectorial ya maduro, es uno de los territorios mejor posicionados para capturar una proporción significativa de ese crecimiento.'

const p4 = 'El cuarto trimestre de 2025 introdujo una señal de cautela: Baja California registró una reducción de aproximadamente 21,000 empleos en manufactura frente al mismo período de 2024, según datos del INEGI, en un contexto de incertidumbre generada por la política arancelaria de Estados Unidos. La contracción refleja que los mercados fronterizos, por su alta integración con la economía estadounidense, son también los primeros en sentir los efectos de la volatilidad comercial — y también los primeros en recuperarse cuando esa volatilidad se estabiliza. Los fundamentos estructurales de Baja California no han cambiado: sigue siendo el estado con mayor concentración de establecimientos IMMEX del país, con una fuerza laboral técnica que empresas como Gulfstream, Honeywell y decenas de fabricantes aeroespaciales y de dispositivos médicos han formado durante generaciones. Desarrolladores industriales con décadas de presencia en el mercado, como Grupo Nelson con más de 60 años en Mexicali, han acompañado múltiples ciclos de expansión y ajuste. En todos ellos, el patrón ha sido el mismo: la demanda industrial regresa a los mercados con infraestructura probada, y Baja California tiene seis décadas de evidencia de que esa infraestructura existe.'

const p5 = 'Fuentes: INEGI, Mexico Industry, CaliBaja, Deloitte, Secretaría de Economía.'

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

const description = 'Baja California concentra el 17.4% de los establecimientos IMMEX del país y alcanzó 414,572 empleos en manufactura en 2024 — la base que posiciona al estado para capturar el crecimiento del nearshoring.'

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
