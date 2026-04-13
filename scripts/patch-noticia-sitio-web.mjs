/**
 * Parcha la noticia "Grupo Nelson Lanza su Nuevo Sitio Web Corporativo" con contenido real en español.
 * Documento ID: kllPxzrZvj3u6Zg4KymSs8
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skQZj0alAYM3fM93NUK7qMcdtyqX51scCVNO3HpXX6IiESn57nTLOCmeTeKWiwAwnRV6gBzh32BpCGIh1N9W3Mx6zEPyIxkhDfgX4FITSJCxdafzIEdkE2mlb2BAJbHeeB9IzMP8qfvYLZe1E5MYBoeovKbgKRM5NlwWPtKgrfpRAhrn0lgc',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KymSs8'

const p1 = 'Grupo Nelson presentó su nuevo sitio web corporativo en nelson.com.mx, una plataforma bilingüe español-inglés diseñada para responder a las necesidades actuales de un mercado industrial que investiga, compara y decide en línea antes de hacer una llamada. El sitio consolida por primera vez en un solo punto toda la oferta del grupo: cinco parques industriales con fichas técnicas, tours virtuales 360° y mapas interactivos; inventario de naves disponibles con especificaciones de superficie, altura libre y estatus en tiempo real; el portafolio completo de construcción build-to-suit; y casos de éxito verificables con nombres como Gulfstream Aerospace, Honeywell, DHL y Rheem. El lanzamiento llega en un momento en que Mexicali experimenta un crecimiento sostenido en la demanda de espacio industrial y en que las empresas internacionales evalúan opciones de nearshoring con acceso directo a la frontera con California.'

const p2 = 'Durante más de seis décadas, Grupo Nelson construyó su cartera de más de treinta corporaciones internacionales con un modelo basado en relaciones directas, referidos y reputación presencial. Ese modelo funcionó mientras el mercado industrial de Mexicali crecía de forma orgánica, pero el contexto cambió. El nearshoring aceleró la llegada de empresas que investigan destinos digitalmente antes de contactar a un desarrollador, y Baja California se posicionó como uno de los estados con mayor captación de inversión extranjera directa del país. Para una empresa con tres generaciones de trayectoria, cinco parques y clientes Fortune 500 que llevan más de 35 años operando en sus instalaciones, la ausencia de una plataforma digital a la altura de esos credenciales era una brecha que el mercado ya no toleraba. El nuevo sitio cierra esa brecha — no como un ejercicio de imagen, sino como una herramienta de negocio construida con la misma exigencia técnica que Grupo Nelson aplica a su infraestructura física.'

const p3 = 'El sitio fue desarrollado con arquitectura bilingüe nativa — no es una traducción automática sino dos versiones editoriales independientes, cada una con contenido escrito específicamente para su audiencia. La plataforma está optimizada para funcionar en más de 17 resoluciones de pantalla distintas, desde dispositivos móviles de 360 píxeles hasta monitores ultrawide de 1920 píxeles y superiores, asegurando que la experiencia sea consistente sin importar desde dónde se acceda. El rendimiento fue tratado como requisito de ingeniería, no como métrica secundaria: tiempos de carga optimizados, imágenes procesadas por tamaño de viewport y una arquitectura que permite actualizar inventario, noticias y especificaciones de parques sin intervención técnica. Cada parque industrial tiene su propia página con ficha técnica detallada, mapa interactivo con Google Maps, tour virtual 360° y listado de naves con especificaciones actualizadas. Las páginas de la constructora presentan el portafolio de más de 75 proyectos completados en 30 años, incluyendo la nave de 550,000 pies cuadrados construida para Gulfstream en el Parque Industrial Nelson II bajo estándares LEED, FM Global y sistemas antisísmicos BRB. La sección de noticias incorpora contenido editorial propio sobre el mercado industrial de Mexicali, inversión extranjera y tendencias del sector — posicionando a Grupo Nelson no solo como desarrollador sino como voz informada del mercado en el que opera.'

const p4 = 'El lanzamiento del sitio refleja una decisión que va más allá de lo tecnológico: una empresa que durante sesenta años fue conocida por quienes ya operaban en Mexicali ahora se presenta activamente ante la audiencia internacional que evalúa la frontera norte de México como destino de manufactura. La misma atención al detalle que define la construcción de una nave industrial de clase mundial — especificaciones precisas, estándares verificables, infraestructura que funciona bajo presión — es la que define esta plataforma. En un mercado donde la primera impresión de un desarrollador industrial suele ser su presencia digital, Grupo Nelson ahora tiene un sitio que refleja lo que sus clientes de seis décadas ya saben: que se trata de uno de los desarrolladores industriales con mayor permanencia, profundidad de relación y capacidad técnica en Mexicali. El sitio está disponible en nelson.com.mx.'

const description = 'Grupo Nelson presenta su nuevo sitio web corporativo bilingüe en nelson.com.mx: cinco parques industriales, inventario de naves, portafolio build-to-suit y casos de éxito con clientes Fortune 500, optimizado para más de 17 resoluciones de pantalla.'

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
