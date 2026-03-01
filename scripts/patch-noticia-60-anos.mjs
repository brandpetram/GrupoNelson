/**
 * Parcha la noticia "Grupo Nelson Celebra 60 Años" con contenido real en español.
 * Documento ID: 4lXD1QprlKmqniOHamwWCB
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHamwWCB'

const p1 = 'Grupo Nelson conmemora en 2026 sus primeros 60 años de operación en Mexicali, una trayectoria que comenzó cuando la ciudad fronteriza apenas daba sus primeros pasos como destino de manufactura y que hoy se traduce en casi cuatro millones de pies cuadrados de infraestructura industrial, clientes de la lista Fortune 500 y una constructora in-house con capacidad para certificar proyectos bajo estándares LEED. La empresa fue fundada en los años inmediatos al lanzamiento del Programa de Industrialización Fronteriza de 1965 — la política federal que transformó la frontera norte de México en una de las zonas manufactureras más activas del hemisferio occidental. Seis décadas después, Grupo Nelson opera tres parques industriales en Mexicali y mantiene una tasa de clientes recurrentes que supera el 80%, un indicador que la empresa atribuye a su modelo de construcción a la medida y a contratos de largo plazo que en algunos casos superan los 35 años de continuidad ininterrumpida.'

const p2 = 'El punto de partida de Grupo Nelson coincide con uno de los momentos más definitorios de la historia industrial del país. En 1965, el gobierno federal lanzó el Programa de Industrialización Fronteriza con el objetivo de atraer inversión extranjera y generar empleo en la franja fronteriza, en parte como respuesta al desempleo que dejó la cancelación del Programa Bracero en 1964. El marco permitía a empresas extranjeras importar materiales, manufacturar en México y reexportar el producto terminado con aranceles reducidos — una fórmula que detonó la instalación de plantas de ensamble a lo largo de toda la frontera norte. Baja California fue uno de los territorios de mayor adopción temprana: para 1973 el estado albergaba 102 empresas maquiladoras distribuidas en Ensenada, Mexicali, Tecate y Tijuana, según datos históricos del sector. Grupo Nelson formó parte de esa primera generación de actores que entendieron que el verdadero activo no era solo el terreno, sino la capacidad de construir y arrendar infraestructura industrial de calidad a las empresas que llegaban a instalarse en la frontera. Esa apuesta temprana definió el modelo de negocio que la empresa sostiene hasta hoy.'

const p3 = 'El crecimiento de Grupo Nelson a lo largo de seis décadas puede leerse en la progresión de sus parques industriales. El primero, El Vigía, fue el pionero — un desarrollo que hoy conserva edificaciones que forman parte de la memoria física de la industrialización en Mexicali. Le siguió Nelson 1, un parque de segunda generación con mayor ordenamiento, áreas verdes y estacionamiento integrado. El más reciente, Nelson 2, representa el estándar de nave industrial Clase A: 27 hectáreas, sistema centralizado de protección contra incendios con capacidad para 360,000 galones, línea eléctrica dedicada y proyectos certificables bajo el estándar LEED. En conjunto, los tres parques suman cerca de 4 millones de pies cuadrados de infraestructura activa. Entre los inquilinos de largo plazo se cuentan empresas Fortune 500 como Gulfstream Aerospace y Honeywell, compañías que llevan más de tres décadas en instalaciones construidas a la medida por Grupo Nelson. El caso de Interiores Aéreos ilustra la filosofía de la empresa: un cliente que comenzó con 5,000 sq ft en El Vigía y que hoy ocupa más de 450,000 sq ft en el portafolio del grupo. Este patrón de crecimiento conjunto — empresa y cliente expandiéndose en paralelo — es, para Grupo Nelson, la medida más precisa de lo que significa establecer relaciones industriales de largo plazo.'

const p4 = 'Seis décadas de operación en un solo mercado no son un accidente sino el resultado de una decisión consistente: no construir para especular, sino para permanecer. Grupo Nelson opera bajo una filosofía de desarrollo conservadora — solo construye cuando hay un cliente específico que lo requiere, o cuando su tasa de vacancia lo justifica. Esa disciplina, que en el corto plazo puede parecer una limitación frente a competidores con mayor inventario disponible, es también la razón por la que la empresa llega a su sexagésimo aniversario con una cartera en la que la mayoría de sus inquilinos llevan décadas bajo el mismo techo. Para el sector industrial de Mexicali, este aniversario es también un recordatorio de la magnitud de lo que se ha construido en la ciudad desde los años de la primera maquiladora: una infraestructura de manufactura que hoy recibe la atención de empresas globales que buscan en la frontera con California y Arizona una combinación de logística, talento técnico y confiabilidad operativa difícil de encontrar en otro polo industrial del país.'

const p5 = 'Fuentes históricas: Consejo Nacional de la Industria Maquiladora (INDEX), SMU Texas-Mexico Center, COLEF.'

const description = 'Grupo Nelson cumple 60 años en Mexicali: de los primeros parques maquiladores de 1965 a casi 4 millones de sq ft con clientes Fortune 500 como Gulfstream y Honeywell.'

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

const descriptionField = [
  {
    _key: 'es',
    _type: 'internationalizedArrayTextValue',
    value: description,
  },
]

const result = await client
  .patch(DOC_ID)
  .set({ body, description: descriptionField })
  .commit()

console.log('✅ Noticia actualizada:', result._id)
console.log('   Título:', result.title?.[0]?.value)
