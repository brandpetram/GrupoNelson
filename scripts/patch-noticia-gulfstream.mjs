/**
 * Parcha la noticia de Gulfstream con el contenido real en español.
 * Documento ID: kllPxzrZvj3u6Zg4KymSSy
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KymSSy'

const p1 = 'Gulfstream Aerospace Corporation anunció una inversión de USD 370 millones para construir su segunda planta de manufactura en Mexicali, Baja California, en el Parque Industrial Nelson II. La nueva instalación sumará más de 50,000 m² (540,000 sq ft) de superficie productiva, generará 1,500 nuevos empleos directos y llevará la plantilla total de la empresa en el estado a más de 5,000 trabajadores. La gobernadora Marina del Pilar Ávila Olmeda presidió el anuncio junto con John Ortega, vicepresidente de Gulfstream, y Mark Bennet, director global de Relaciones Institucionales de la compañía. La inversión refuerza la posición de Mexicali como la principal base de manufactura aeroespacial de Gulfstream fuera de su sede corporativa en Savannah, Georgia.'

const p2 = 'La relación de Gulfstream con Mexicali no es nueva ni circunstancial. La empresa instaló sus primeras operaciones en la ciudad hace más de tres décadas y con el tiempo consolidó allí su instalación más grande fuera de Estados Unidos. En esas plantas, Gulfstream produce arneses eléctricos, componentes de lámina metálica, subconjuntos estructurales y piezas maquinadas que integran su línea de jets ejecutivos. El crecimiento sostenido de estas operaciones a lo largo de los años responde a condiciones que Mexicali ha mantenido de forma consistente: acceso directo al mercado estadounidense por la frontera con Calexico, California; una fuerza laboral técnica con experiencia acumulada en manufactura aeroespacial; y un ecosistema de parques industriales con especificaciones Clase A. La nueva inversión, según señaló el gobierno del estado, forma parte de los esfuerzos de la empresa por reconfigurar y modernizar sus operaciones de manufactura en la región.'

const p3 = 'La nueva planta consolidará en un solo espacio operaciones actualmente distribuidas en tres instalaciones existentes. Una vez concretado el traslado, los inmuebles liberados serán renovados para ampliar la eficiencia productiva de la compañía. El diseño contempla la cobertura de techos y cubiertas de estacionamiento con paneles solares, un elemento que refleja las crecientes exigencias de los corporativos aeroespaciales en materia de sustentabilidad operativa. "Esta inversión generará oportunidades y contribuirá a la economía local", señaló John Ortega en el acto de anuncio. El proyecto se ubica en el Parque Industrial Nelson II, parte del portafolio desarrollado por Grupo Nelson, empresa con más de 60 años de experiencia en infraestructura industrial en Mexicali y uno de los desarrolladores pioneros de la industria maquiladora en Baja California. Para contextualizar la magnitud de la operación: se trata de la segunda planta aeroespacial que Gulfstream construye en el estado, lo que convierte a Baja California en el único territorio fuera de Georgia donde la compañía opera más de una instalación de manufactura de gran escala.'

const p4 = 'La expansión de Gulfstream ocurre en un momento de alta actividad para el mercado industrial de Mexicali. La demanda de naves Clase A en la zona ha superado de forma consistente la oferta disponible en los últimos años, impulsada por la reconfiguración de cadenas de suministro globales y el interés creciente de empresas estadounidenses y asiáticas en establecer operaciones en la frontera norte de México. En ese contexto, una inversión de esta escala —aproximadamente USD 370 millones en un solo proyecto— no es solo un movimiento de expansión interna de una empresa ya establecida: es una señal de confianza en la infraestructura, el capital humano y la estabilidad del mercado industrial de Mexicali. Para el sector aeroespacial de Baja California, que agrupa a decenas de empresas de manufactura de precisión y emplea a miles de técnicos especializados, la segunda planta de Gulfstream representa una validación de la trayectoria que la región ha construido durante más de tres décadas como destino de manufactura aeroespacial avanzada.'

const p5 = 'Fuentes: Mexico News Daily, SanDiegoRed, Mexico Business News, Steel Orbis.'

const description = 'Gulfstream Aerospace invierte USD 370 millones en su segunda planta en Mexicali: 50,000 m², 1,500 nuevos empleos en el Parque Industrial Nelson II.'

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
