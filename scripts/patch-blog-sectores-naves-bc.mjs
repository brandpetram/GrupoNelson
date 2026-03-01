/**
 * Parcha el post de blog: Los Sectores que Más Demandan Naves Industriales en Baja California
 * Documento ID: 4lXD1QprlKmqniOHakmig0
 *
 * Sectores cubiertos: Electrónica, Medtech, Aeroespacial, Automotriz (Toyota)
 * Audiencia: Directores de Operaciones y Supply Chain evaluando BC como destino de manufactura
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmig0'

// --- Helpers para construir bloques Portable Text ---

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

// --- Meta description ---

const description =
  'Electrónica, medtech y aeroespacial dominan la absorción de espacio industrial en Baja California. Antes de buscar nave, conozca qué sectores definen el mercado, qué especificaciones técnicas exigen y qué implica eso para su operación.'

// --- Bloques del artículo ---

const blocks = [
  // Párrafo de apertura
  makeBlock(
    'b01',
    'Cuando una empresa evalúa Baja California como destino de manufactura, la primera pregunta suele ser de disponibilidad: ¿hay nave industrial? La segunda —y más crítica— debería ser otra: ¿qué tipo de nave necesito y qué sectores han moldeado la oferta existente? La respuesta a esa segunda pregunta define si encontrará lo que busca en el mercado abierto o si necesitará una solución a la medida.'
  ),
  makeBlock(
    'b02',
    'Baja California no es un mercado industrial genérico. Es un ecosistema especializado, construido durante décadas alrededor de industrias de alto valor por metro cuadrado. Entender su perfil sectorial no es un ejercicio académico: es el punto de partida para una búsqueda de nave eficiente.'
  ),

  // H2-1: Electrónica
  makeH2('h01', 'Electrónica: el sector que absorbe más espacio y define el perfil del mercado'),
  makeBlock(
    'b03',
    'Si busca un dato que explique la estructura del mercado industrial de Baja California, este es: la industria electrónica y eléctrica representó el 72% de la absorción de espacio industrial en el estado durante el primer semestre de 2024, según datos de Solili y Real Estate Market. No hay un segundo sector cerca. Electrónica no es un actor relevante en BC; es el actor dominante.'
  ),
  makeBlock(
    'b04',
    'Tijuana concentra la mayor parte de esta actividad. La ciudad produce el 99% de las televisiones digitales fabricadas en México, según El Financiero, y alberga alrededor de 120 compañías de manufactura electrónica con aproximadamente 100,000 trabajadores directos. Samsung opera una planta integrada en la ciudad desde 1996 y actualmente fabrica pantallas de hasta 175,000 dólares. LG, Sony y Panasonic tienen presencia confirmada en la misma región.'
  ),
  makeBlock(
    'b05',
    'Mexicali complementa el perfil electrónico del estado con una especialización diferente. Skyworks Solutions, con alrededor de 3,100 empleados en la ciudad, ensambla semiconductores analógicos para mercados tan distintos como automotriz, comunicaciones celulares, dispositivos médicos y aplicaciones militares. La empresa es ganadora del Premio Nacional de Exportación, un indicador de la densidad tecnológica de su operación.'
  ),
  makeBlock(
    'b06',
    'Para una empresa del sector electrónico, el mercado de BC ofrece la mayor disponibilidad relativa de opciones. Los requerimientos técnicos son alcanzables: clear height de 6 a 8 metros, resistencia de piso de 3 a 5 toneladas por metro cuadrado, entre 200 y 500 KVA de potencia eléctrica, y en algunos casos pisos antiestáticos ESD. La infraestructura existente en los principales parques industriales de Tijuana y Mexicali cumple estas especificaciones en la mayoría de los casos.'
  ),

  // H2-2: Medtech
  makeH2('h02', 'Medtech: Tijuana como el mayor hub de dispositivos médicos de Norteamérica'),
  makeBlock(
    'b07',
    'Baja California concentra más del 60% de las 230 plantas de dispositivos médicos que operan en México, según datos de Mexico Industry. Tijuana alberga más de 70 de esas plantas. En conjunto, el sector emplea a 55,000 personas directamente en el estado, de acuerdo con la Tijuana Economic Development Corporation.'
  ),
  makeBlock(
    'b08',
    'Las cifras de exportación confirman el peso específico del cluster: BC lideró las exportaciones nacionales de dispositivos médicos en 2024 con 5,191 millones de dólares, según datos de Data México y la Secretaría de Economía. El estado exporta el 50% del total de dispositivos médicos fabricados en todo México, y el 96.7% de esas exportaciones tienen como destino final el mercado estadounidense.'
  ),
  makeBlock(
    'b09',
    'El contexto nacional refuerza la relevancia del cluster bajacaliforniano: México es el sexto exportador mundial de dispositivos médicos, con exportaciones que crecieron de 10,668 a 20,550 millones de dólares en cinco años, según Expansión (febrero 2026). El crecimiento esperado del sector es del 10% anual. Baja California capta una porción desproporcionadamente grande de ese crecimiento.'
  ),
  makeBlock(
    'b10',
    'Las empresas ancla que operan en Tijuana incluyen nombres de primer nivel global: Medtronic con seis plantas en México y 15,000 empleados nacionales; Becton Dickinson, que inauguró una instalación en Tijuana con una inversión de 38.6 millones de dólares; Stryker con múltiples plantas; Boston Scientific con un centro de manufactura y excelencia; y Siemens Healthineers, que fabrica componentes de radioterapia en la ciudad.'
  ),
  makeBlock(
    'b11',
    'La demanda de nave industrial de medtech es exigente y específica. Las instalaciones para productos implantables requieren salas limpias ISO 7 (Clase 10,000); para no implantables, ISO 8 (Clase 100,000). Esto implica, además del espacio físico, sistemas de presión positiva, control de temperatura y humedad relativa (68–77°F / 30–50% HR), pisos antiestáticos ESD, sistemas de purificación de agua y fuentes de energía ininterrumpida (UPS). La disponibilidad de naves con estas características preinstaladas en el mercado abierto es limitada; la mayoría de los proyectos medtech requieren acuerdos build-to-suit o adecuaciones importantes.'
  ),

  // H2-3: Aeroespacial
  makeH2('h03', 'Aeroespacial: el cluster de cinco décadas que ningún otro estado puede replicar rápido'),
  makeBlock(
    'b12',
    'Baja California concentra el 25% de las empresas aeroespaciales que operan en México, según datos de Mexico Now y el Cluster Aeroespacial de BC. El estado cuenta con más de 125 empresas en el sector y supera los 40,000 empleos directos, liderando el país en esa métrica. Las exportaciones aeroespaciales del estado alcanzaron 3,800 millones de dólares en 2024, un incremento del 21% respecto al año anterior.'
  ),
  makeBlock(
    'b13',
    'Mexicali es el polo aeroespacial más activo del estado. La ciudad alberga 28 empresas especializadas en diseño, ensamblaje y MRO (mantenimiento, reparación y revisión), con cerca de 8,000 empleados técnicos. En FAMEX 2025 se anunció formalmente la creación del Cluster Aeroespacial de Mexicali, lo que institucionaliza una industria que lleva décadas operando de forma dispersa. Tijuana, por su parte, es identificada por el Cluster Aeroespacial de BC como la ciudad con mayor industria aeroespacial de México.'
  ),
  makeBlock(
    'b14',
    'El caso más representativo del momento es Gulfstream (General Dynamics). Su planta en Mexicali es la más grande que la empresa opera fuera de Estados Unidos. En 2024, Gulfstream anunció una inversión de 370 millones de dólares para construir una segunda planta en Mexicali —540,000 pies cuadrados, 1,500 empleos adicionales— en el Nelson II Industrial Park. Una vez completada la expansión, la compañía tendrá más de 5,000 empleados en Baja California. La presencia de Collins Aerospace (RTX), con alrededor de 1,100 empleados en Mexicali produciendo inversores de empuje para el Boeing 787 Dreamliner, y de Honeywell, Safran y GKN Aerospace en el corredor norte del estado, completan un ecosistema de proveedores que tarda décadas en construirse.'
  ),
  makeBlock(
    'b15',
    'La complejidad técnica de las naves para aeroespacial es la más alta del mercado. Se requiere un clear height mínimo de 9 a 12 metros —crítico para el ensamblaje de fuselajes y componentes de gran formato—, pisos con resistencia mínima de 6,000 PSI (250 kg/cm²) y carga de piso de al menos 8 toneladas por metro cuadrado, 500 KVA o más de potencia trifásica, áreas dedicadas para trabajo con materiales compuestos (incluyendo manejo de residuos de fibra de carbono) y espacios de sala limpia para ciertos procesos. Las certificaciones requeridas —AS9100 y NADCAP en muchos casos— implican que incluso los proveedores de espacio deben entender el entorno regulatorio. Muy pocas naves en el mercado general de BC cumplen estas especificaciones; la mayoría de los proyectos aeroespaciales se desarrollan como build-to-suit dentro de parques industriales con experiencia en el sector.'
  ),

  // H2-4: Automotriz / Toyota
  makeH2('h04', 'Automotriz: la excepción Toyota y por qué BC no es Monterrey ni el Bajío'),
  makeBlock(
    'b16',
    'El título del artículo menciona el sector automotriz porque es una pregunta frecuente de directores de operaciones y supply chain que evalúan el norte de México. La respuesta directa es esta: Baja California no es un hub automotriz de primer nivel. Los grandes clusters OEM más proveedores Tier 1 se establecieron históricamente en Sonora, Chihuahua, Nuevo León, Guanajuato y Coahuila —estados con proximidad geográfica a los centros de producción en Texas y con décadas de ecosistema de proveedores construido alrededor de la industria.'
  ),
  makeBlock(
    'b17',
    'En los datos de absorción de espacio industrial de BC correspondientes al primer semestre de 2024 (Solili), el sector automotriz no aparece como categoría diferenciada. La electrónica captura el 72% del mercado; el espacio restante se distribuye entre logística, medtech y otros usos industriales. Automotriz, como categoría de demanda, no mueve el mercado de BC.'
  ),
  makeBlock(
    'b18',
    'La excepción notable es Toyota. La planta de Toyota en Tijuana es la primera que la compañía estableció en México y produce la Tacoma. En noviembre de 2024, Toyota anunció una inversión de 336 millones de dólares para expandir su operación en Tijuana, creando 1,200 empleos adicionales. Es un caso relevante, pero es exactamente eso: una excepción, no el indicador de un cluster en formación. Una empresa que busca sumarse a una cadena de suministro automotriz densa —con acceso a múltiples OEMs y Tier 1 en un radio operativo— encontrará mejores condiciones en Monterrey, Saltillo o el Bajío.'
  ),
  makeBlock(
    'b19',
    'La lógica industrial de BC es diferente: el estado tiene ventaja competitiva en industrias con alta densidad de valor por metro cuadrado, ciclos de producción complejos y fuerte orientación a la exportación directa hacia el mercado estadounidense. Esas industrias son electrónica, medtech y aeroespacial. El automotriz, con sus cadenas de suministro de alto volumen y menor valor relativo por unidad de área, no encaja naturalmente en ese perfil.'
  ),

  // H2-5: Implicaciones para la búsqueda de nave
  makeH2('h05', 'Lo que la especialización sectorial implica para su búsqueda de nave industrial'),
  makeBlock(
    'b20',
    'Conocer qué sectores dominan el mercado no es información accesoria. Define directamente qué tipo de nave encontrará disponible, a qué precio y en qué condiciones. Cuando un mercado es construido principalmente por electrónica —el sector con menores requerimientos técnicos del grupo—, la oferta estándar de naves estará calibrada para esas especificaciones. Una empresa de medtech o aeroespacial que llegue buscando clear heights de 10 metros, pisos de alta resistencia o infraestructura para salas limpias encontrará que la oferta existente es escasa.'
  ),
  makeBlock(
    'b21',
    'Esto tiene consecuencias prácticas para los tiempos de proyecto. Una empresa de electrónica con requerimientos estándar puede encontrar espacio disponible en el mercado de segunda generación o en desarrollos en construcción en un plazo de semanas. Una empresa de aeroespacial o medtech con requerimientos técnicos específicos probablemente necesitará evaluar opciones build-to-suit, con tiempos de desarrollo de 12 a 24 meses según el nivel de adecuación requerido.'
  ),
  makeBlock(
    'b22',
    'La vacancia actual del mercado —7.34% en Tijuana y 6.2% en Mexicali al cierre de 2025— refleja un mercado activo pero no holgado. Con 7.7 millones de metros cuadrados de inventario total (tercer lugar nacional) y una producción manufacturera que creció 30.5% en 2025 muy por encima del promedio nacional, la demanda sigue siendo robusta. En ese contexto, las naves con especificaciones técnicas superiores son las que menor tiempo permanecen disponibles.'
  ),

  // H2-6: Requerimientos técnicos comparativos
  makeH2('h06', 'Requerimientos técnicos: las especificaciones que separan al mercado estándar del especializado'),
  makeBlock(
    'b23',
    'La siguiente comparación resume lo que cada sector demanda de una nave industrial en BC. No es exhaustiva, pero sirve como guía de partida para evaluar si la oferta disponible en el mercado corresponde a sus necesidades operativas.'
  ),
  makeBlock(
    'b24',
    'Electrónica: clear height de 6 a 8 metros; resistencia de piso de 3 a 5 toneladas por metro cuadrado; entre 200 y 500 KVA de potencia eléctrica; pisos antiestáticos ESD en algunos casos. Es el perfil de menor exigencia del grupo y el que el mercado estándar de BC satisface con mayor frecuencia.'
  ),
  makeBlock(
    'b25',
    'Medtech: clear height de 6 a 9 metros; pisos de resistencia estándar a alta; 500 KVA o más con fuente ininterrumpida (UPS); salas limpias ISO 7 u ISO 8 obligatorias según el tipo de producto; sistemas de purificación de agua; control preciso de temperatura y humedad relativa. Es un perfil de alta exigencia que pocas naves del mercado general incluyen preinstalado.'
  ),
  makeBlock(
    'b26',
    'Aeroespacial: clear height mínimo de 9 a 12 metros (crítico, no negociable para ciertos procesos); pisos con resistencia mínima de 6,000 PSI y carga de piso de 8 toneladas por metro cuadrado o más; 500 KVA trifásicos; áreas específicas para materiales compuestos con sistemas de manejo de residuos de fibra de carbono; espacios de sala limpia para determinados subprocesos. Es el perfil de mayor exigencia: la mayoría de las naves del mercado general no lo cumplen sin adecuaciones significativas, y los proyectos suelen resolverse como BTS dentro de parques con experiencia en el sector.'
  ),
  makeBlock(
    'b27',
    'Una variable que se subestima frecuentemente en la evaluación inicial es la certeza de suministro eléctrico. Los tres sectores —y de forma crítica medtech y aeroespacial— operan procesos que no toleran interrupciones. Evaluar la capacidad de la subestación del parque industrial y los acuerdos de respaldo es tan importante como medir los metros cuadrados disponibles.'
  ),

  // Cierre con mención de Grupo Nelson
  makeBlock(
    'b28',
    'Baja California exportó 14,529 millones de dólares acumulados al tercer trimestre de 2024, posicionándose como el cuarto estado exportador del país y representando el 10% del total de exportaciones manufactureras de México. Ese número es la expresión agregada de lo que hacen electrónica, medtech y aeroespacial desde naves industriales en Tijuana, Mexicali y el corredor norte del estado. Si su empresa está evaluando ingresar a este mercado, la pregunta relevante no es solo si hay espacio disponible. Es si hay espacio disponible que se alinee con las especificaciones técnicas de su sector y con sus tiempos de arranque.'
  ),
  makeBlock(
    'b29',
    'Grupo Nelson desarrolla y opera naves industriales en Baja California con experiencia en los sectores que definen el mercado del estado. Si está en la fase de evaluación de sitio, puede iniciar la conversación con nuestro equipo para determinar qué opciones —disponibles o a desarrollar— corresponden a su perfil de requerimientos.'
  ),

  // Fuentes
  makeBlock(
    'b_fuentes',
    'Fuentes: Mexico Industry (participación aeroespacial BC, exportaciones, ranking exportador estatal) · Mexico Now (concentración aeroespacial nacional) · Vanguardia Industrial / FAMEX 2025 (datos de Mexicali aeroespacial, empleo técnico) · Mexico News Daily (Gulfstream inversión y expansión) · Tijuana EDC (plantas medtech, empleo, exportaciones) · Data México / Economía.gob.mx (exportaciones dispositivos médicos BC 2024) · Revista Comercio Exterior (participación BC en exportaciones médicas nacionales) · Expansión feb. 2026 (posición global México en medtech) · El Financiero (producción de TVs digitales en Tijuana) · Tecma (empleo manufactura electrónica Tijuana) · Solili / Real Estate Market (absorción H1 2024 BC) · Industrial News BC (Toyota expansión nov. 2024) · IAméricas (inventario industrial BC, ranking nacional) · Energy Magazine MX (crecimiento producción manufacturera BC 2025).'
  ),
]

// --- Campos a parchear ---

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

// --- Ejecución del patch ---

try {
  const result = await client
    .patch(DOC_ID)
    .set({ body, description: descriptionField })
    .commit()
  console.log('Post actualizado:', result._id)
} catch (err) {
  console.error('Error:', err.message)
}
