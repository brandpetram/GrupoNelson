/**
 * Parcha el post de blog: Automatización en Bodegas: Lo Que el Mercado Mexicano Está Adoptando y Por Qué Falla en el 30% de los Casos
 * Documento ID: uqKP1CJoSsgXdCXPUwMZHS
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMZHS'

function makeBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

function makeH2(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'h2',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

const description = 'El mercado de automatización de almacenes en México crece al 15% anual y superará los 1,800 millones de dólares para 2030. El problema: el 30% de los proyectos no entrega el ROI prometido, y las causas están documentadas. Este análisis descompone qué tecnologías están adoptando las operaciones mexicanas, qué especificaciones de nave determinan si la inversión funciona, y por qué tantos proyectos bien intencionados terminan mal.'

const blocks = [
  makeBlock('b01', 'El mercado de automatización de almacenes en México alcanzó los 838.8 millones de dólares en 2024 y está proyectado para superar los 1,828 millones para 2030, con una tasa de crecimiento anual compuesta del 15%: la más alta de Norteamérica. A escala regional, América Latina crece al 19.3% anual —la tasa más elevada de todas las regiones globales—, impulsada en gran parte por el dinamismo del mercado mexicano. Esas cifras pintan un escenario de transformación acelerada.'),
  makeBlock('b02', 'Lo que las cifras agregadas no muestran es la otra estadística: el 30% de los proyectos de automatización en almacenes no entrega los beneficios anticipados. Y el 70% de los proyectos de integración tecnológica sufre retrasos o sobrecostos significativos antes de llegar a la operación estable. Esta no es una cifra de la industria manufacturera en general —es específica de la implementación de sistemas automatizados en almacenes y centros de distribución. Entender las causas es tan importante como entender los argumentos a favor de automatizar.'),

  makeH2('h01', 'Por qué México está automatizando ahora'),
  makeBlock('b03', 'La confluencia de tres fuerzas estructurales está presionando a las operaciones logísticas mexicanas hacia la automatización de una forma que no tiene precedente en el mercado local. La primera es el nearshoring. En 2024, la demanda de espacio industrial en México superó los dos millones de metros cuadrados, con el sector automotriz absorbiendo el 39% de esa demanda. Las empresas multinacionales que relocalizan operaciones desde Asia llegan con estándares operativos de sus mercados de origen: automatizan desde el primer día o tienen en el roadmap una transición rápida.'),
  makeBlock('b04', 'La segunda fuerza es la escasez laboral. Aproximadamente el 68% de las empresas en México reporta dificultades para cubrir vacantes en operaciones. En logística específicamente, se proyectan unas 50,000 vacantes sin cubrir, y la falta de choferes de transporte podría alcanzar las 28,000 posiciones para 2025. La escasez no es solo cuantitativa; es también de perfil técnico: los operadores con experiencia en sistemas de manejo de materiales son un recurso escaso en casi todos los mercados industriales del país. Cuando el costo de la rotación laboral y el error humano se vuelven imposibles de absorber, la automatización deja de ser una decisión estratégica y se convierte en una necesidad operativa.'),
  makeBlock('b05', 'La tercera fuerza es el e-commerce. El mercado de last-mile en México está proyectado en 15,630 millones de dólares para 2025, con crecimiento hacia los 27,310 millones para 2030. Esa explosión de volumen y velocidad de despacho —con ventanas de entrega que se comprimen de 72 horas a 24 y, en segmentos premium, a menos de cuatro horas— hace que los almacenes operados manualmente dejen de ser competitivos no por costos sino por velocidad. La automatización es la única respuesta estructural a la demanda de throughput que impone el comercio electrónico a escala.'),

  makeH2('h02', 'El mapa de tecnologías: cuál aplica para qué operación'),
  makeBlock('b06', 'Los conveyors y sorters son las tecnologías más maduras del sector. Las plantas semi-automatizadas con conveyor controlaron el 42% del revenue del sector en 2024. Son sistemas adecuados para operaciones con flujo predecible y alto volumen de unidades homogéneas: retail de gran formato, distribución de consumo masivo, paquetería. Su mayor limitación es la rigidez: están diseñados para rutas fijas y son difíciles y costosos de reconfigurar cuando el layout operativo cambia.'),
  makeBlock('b07', 'Los robots móviles autónomos —AGV (vehículos guiados automáticamente) y AMR (robots móviles autónomos)— son el segmento de mayor crecimiento, proyectado como el mayor del sector para 2028 con una CAGR cercana al 30%. La preferencia del mercado se inclina hacia los AMR porque no requieren modificaciones de infraestructura: a diferencia de los AGV que siguen rutas físicas en el piso, los AMR navegan con sensores y mapas de software, lo que reduce el costo de despliegue y facilita la reconfiguración. El payback típico de una implementación AMR está en 12 a 18 meses, con un retorno proyectado superior al 250% en cinco años. GEODIS implementó AMRs de Locus Robotics en sus operaciones en México, uno de los casos más documentados de adopción corporativa en el país.'),
  makeBlock('b08', 'Los sistemas AS/RS (Automated Storage and Retrieval Systems) representan la inversión más alta y el mayor impacto potencial. El caso más relevante en México en 2024 fue el acuerdo entre Walmart de México y Symbotic para dos centros de distribución greenfield en el Bajío —el mayor despliegue en una sola fase en la historia de Symbotic. El ROI típico de un AS/RS está en 12 a 24 meses, y la reducción de errores de picking llega al objetivo del 0.1%, frente a tasas de error de 1 a 3% en operaciones manuales. La limitación es el costo de capital y los requerimientos de infraestructura: estos sistemas necesitan naves diseñadas específicamente para soportarlos.'),
  makeBlock('b09', 'Los sistemas pick-to-light son una solución intermedia que incrementa la productividad entre 30 y 50% con una precisión superior al 99.9%, a una fracción del costo de un AS/RS. Funcionan bien en operaciones de picking de e-commerce con alto número de SKUs y pedidos pequeños. Los WMS con inteligencia artificial completan el mapa tecnológico: el mercado global de WMS está proyectado de 4,000 millones de dólares en 2024 a 8,600 millones en 2029, y el 84% de los líderes de supply chain en Norteamérica planea adoptar IA en sus sistemas de gestión en los próximos cinco años, según el reporte MHI 2024. En México, el mercado de WMS se estima en 40 millones de dólares para 2025.'),

  makeH2('h03', 'Lo que la nave necesita: especificaciones que determinan si la automatización funciona o falla'),
  makeBlock('b10', 'La decisión de automatizar no puede separarse de la decisión sobre la infraestructura donde se va a implementar. Las especificaciones de la nave no son un detalle secundario —son el factor que con mayor frecuencia convierte un proyecto de automatización bien diseñado en un proyecto problemático.'),
  makeBlock('b11', 'Para una implementación de AMRs, el requerimiento crítico es el piso. Las variaciones de nivel deben mantenerse por debajo de 5 milímetros. Un piso con planimetría deficiente obliga a los robots a reducir velocidad, genera errores de posicionamiento y acelera el desgaste mecánico. La resistencia del piso en zonas de operación general debe superar los 7,112 PSI. La altura libre (clear height) requerida para AMRs está en el rango de 8 a 12 metros: estos robots optimizan el área horizontal, por lo que no necesitan alturas extremas, pero sí suficiente espacio para que el sistema de estantería que transportan opere con margen de seguridad.'),
  makeBlock('b12', 'Para un sistema AS/RS, los requerimientos son considerablemente más exigentes. La clear height mínima para un AS/RS de 21 bins es de 10.5 metros (34 pies). Los sistemas premium superan los 30 metros (100 pies). Los estándares de planimetría de piso (FF/FL) deben ser muy superiores a los de una nave estándar, equivalentes a los requeridos para operaciones VNA (Very Narrow Aisle). El diseño estructural de la nave debe contemplar las cargas puntuales de las columnas del sistema, que en algunos configuraciones pueden superar las 20 toneladas por punto de apoyo. Una nave convencional no puede acomodar estos sistemas sin modificaciones costosas, y en muchos casos sin rediseño estructural.'),
  makeBlock('b13', 'La diferencia de inversión entre una nave estándar y una nave automation-ready es cuantificable. Para AMRs, una nave con las especificaciones adecuadas cuesta entre 15 y 25% más que una nave convencional equivalente. Para AS/RS, la diferencia sube al 40 a 60%. Prologis estima que para 2025 más del 60% de los nuevos desarrollos logísticos en México incluirán algún nivel de especificación orientada a automatización. Esa tendencia no es impulsada por los desarrolladores: es una respuesta a la demanda de inquilinos que ya saben que sus operaciones van en esa dirección.'),

  makeH2('h04', 'Baja California: manufactura avanzada con automatización de décadas y logística que empieza a seguir'),
  makeBlock('b14', 'Mexicali concentra 151 plantas manufactureras, más de 86,000 trabajadores y 27 parques industriales activos. El clúster aeroespacial de Baja California reúne aproximadamente 40 empresas y 16,000 puestos, posicionando a la región como el laboratorio aeroespacial más importante de América. El clúster de dispositivos médicos —el mayor de América Latina— suma más de 6,000 ingenieros y técnicos especializados. Esta concentración industrial no es nueva: empresas como Collins Aerospace, Honeywell, Goodrich, Intuitive Surgical, Skyworks e Infineon llevan décadas operando en la región con estándares de automatización de manufactura que en muchos casos están por delante de los mercados logísticos.'),
  makeBlock('b15', 'Lo que está cambiando ahora es la migración de ese nivel de sofisticación hacia las operaciones de almacenamiento y distribución. Durante décadas, las naves de la región sirvieron principalmente a manufactura de exportación. La actividad logística era secundaria. El nearshoring y el crecimiento del comercio electrónico están creando demanda de centros de distribución con especificaciones que el inventario histórico de Mexicali no contemplaba —mayores alturas libres, pisos de mayor especificación, infraestructura eléctrica para sistemas de alto consumo. Los nuevos proyectos de desarrollo industrial en la región están respondiendo a esa demanda, y los operadores que llegaron para manufactura están evaluando qué hacer con su logística de salida en un mercado donde las exigencias de velocidad y exactitud no dejan de aumentar.'),

  makeH2('h05', 'Las tres razones más documentadas por las que los proyectos fallan en México'),
  makeBlock('b16', 'La primera causa de fallo en proyectos AS/RS es el piso. La especificación incorrecta de los parámetros FF/FL —la planimetría de la losa— causa daño al equipo, tiempo de inactividad no programado y, en los casos más graves, rediseño completo del sistema después de la instalación. Este error es evitable. Requiere que el especificador del sistema automatizado y el constructor de la nave trabajen juntos antes de que se vacíe la losa, no después. El problema es que en México, con frecuencia el arrendatario firma la nave antes de tener el diseño del sistema de automatización, y cuando el proveedor de AS/RS llega a hacer el levantamiento, la losa ya está construida con tolerancias inadecuadas.'),
  makeBlock('b17', 'La segunda causa es la incompatibilidad de sistemas. Los WMS y ERPs legacy que ya existen en la organización carecen de APIs compatibles con los sistemas modernos de control de almacén. Los formatos de datos son incompatibles. La integración que en el pitch del proveedor tomaba seis semanas termina tomando seis meses, y el sistema automatizado opera en paralelo con procesos manuales durante ese período de limbo, generando errores y duplicando costos. Este problema es más frecuente en empresas que llevan más de 15 años con el mismo sistema de gestión y nunca lo actualizaron porque "funcionaba". Funciona, hasta que tienes que conectarlo con un robot.'),
  makeBlock('b18', 'La tercera causa es estructural al mercado mexicano: la infraestructura eléctrica. AMPIP tiene documentados más de 80 proyectos industriales detenidos o retrasados por falta de suministro eléctrico adecuado. Los apagones registrados en Jalisco en 2024 causaron entre 12 y 15 millones de dólares en pérdidas al sector manufacturero. Un sistema de conveyors, sorters o AS/RS tiene un consumo eléctrico que puede triplicar el de la misma operación sin automatizar. Si la subestación del parque industrial no tiene la capacidad instalada para soportar ese incremento, el sistema no puede operar en su capacidad de diseño. Esto no es un problema que el proveedor del sistema automatizado va a resolver: es una restricción de infraestructura que el arrendatario debe verificar antes de comprometer capital.'),
  makeBlock('b19', 'Existe una cuarta causa que los análisis técnicos mencionan menos porque es incómoda: la sobre-automatización prematura. Hay operaciones que automatizan antes de ordenar sus procesos. El resultado es que el sistema automatizado reproduce el caos de la operación manual con mayor velocidad y menor flexibilidad para corregirlo. PM Steele, firma especializada en consultoría de almacenes, denomina este fenómeno "automatizar el desorden". La automatización no simplifica una operación mal diseñada —la cristaliza. Y los costos ocultos de mantenimiento completan el cuadro: la escasez de técnicos certificados para sistemas automatizados en México eleva los costos de servicio entre un 30 y 50% sobre las estimaciones originales que presentó el proveedor.'),

  makeH2('h06', 'El argumento para automatizar paso a paso'),
  makeBlock('b20', 'El camino más seguro hacia la automatización en el mercado mexicano no es el de mayor escala desde el primer día. Es el de modularidad y secuenciación. Empezar con sistemas pick-to-light o AMRs en zonas de alta rotación permite validar la madurez operativa de la organización —la capacidad de mantener datos limpios en el WMS, de entrenar a los operadores, de gestionar el cambio organizacional— sin comprometer el capital que requiere un AS/RS. Una vez que esa madurez está probada, escalar hacia sistemas más complejos tiene una base real, no proyecciones de un pitch deck.'),
  makeBlock('b21', 'La secuencia que funciona: primero estandarizar y limpiar los procesos, luego implementar el WMS con integraciones abiertas, después introducir tecnologías de automatización modular, y solo entonces —cuando el volumen y la densidad de pedidos lo justifiquen— evaluar AS/RS o sistemas de alta densidad. El mercado mexicano tiene una realidad que el mercado norteamericano no comparte en la misma medida: los volúmenes de muchas operaciones no alcanzan la densidad de pedidos que justifica el capex de un AS/RS de escala completa. Un sistema diseñado para los picos del Black Friday de una operación norteamericana puede ser sobredimensionado para una operación equivalente en México, donde esos picos tienen otra magnitud.'),
  makeBlock('b22', 'Las métricas que el mercado reporta para implementaciones bien ejecutadas son contundentes: reducción de errores de picking de hasta 70% frente a operación manual, incremento de throughput de hasta 300% según análisis de McKinsey, reducción de costos laborales del 30 al 40% en un horizonte de cinco años. Esos números son alcanzables. La condición es que el proyecto esté bien diseñado, que la nave tenga las especificaciones correctas, que la infraestructura eléctrica esté garantizada, y que la organización esté preparada para operar con los nuevos sistemas antes de encenderlos.'),
  makeBlock('b23', 'Para directores de operaciones y supply chain que están evaluando automatizar instalaciones en el norte de México —y particularmente en Baja California, donde la manufactura avanzada ya opera con esos estándares hace décadas— la pregunta más importante no es qué tecnología elegir. Es si la nave donde van a implementarla puede soportarla. Grupo Nelson, con proyectos de desarrollo industrial en la región, trabaja con directores de operaciones en esa conversación antes de que se tome la decisión de arrendamiento, no después.'),

  makeBlock('b_fuentes', 'Fuentes: Grand View Research — Mexico Warehouse Automation Market Size & Forecast 2024–2030 · MarketsandMarkets — Latin America Warehouse Automation Market Report 2024 · Mordor Intelligence — Global Warehouse Automation Market Outlook to 2034 · Interact Analysis — Global Warehouse Automation Market 2024 Review · MHI Annual Industry Report 2024 — AI Adoption in Supply Chain · Locus Robotics / GEODIS — AMR Implementation Mexico Case Study · Walmart de México / Symbotic — Distribution Center Announcement October 2024 · McKinsey & Company — Automation in Warehousing: Next-Generation Operations · AMPIP — Infraestructura Eléctrica y Proyectos Industriales en México 2024 · PM Steele — Common Warehouse Automation Failures Analysis · Prologis — Mexico Industrial Logistics Automation Trends 2025 · CBRE México — Nearshoring Industrial Demand Report 2024 · Cluster Aeroespacial de Baja California — Industry Profile 2024 · Cluster Médico de Baja California — Datos del Sector 2024 · SEDECO Mexicali — Parques Industriales y Empleo 2024 · Statista — Mexico Last-Mile Delivery Market Forecast 2025–2030 · Gartner — WMS Market Forecast 2024–2029 · NFPA 13 — Standard for the Installation of Sprinkler Systems · Interact Analysis — AGV/AMR Market Forecast 2024–2028'),
]

const body = [
  {
    _key: 'es',
    _type: 'internationalizedArrayBlockContentValue',
    value: blocks,
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
  console.log('✅ Post actualizado:', result._id)
} catch (err) {
  console.error('❌ Error:', err.message)
}
