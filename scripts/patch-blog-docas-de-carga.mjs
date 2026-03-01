/**
 * Parcha el post de blog #19: Docas de Carga
 * Documento ID: uqKP1CJoSsgXdCXPUwMN1N
 *
 * Título: Docas de Carga: Lo Que Determina Si Tu Operación Funciona o Se Atasca
 * Audiencia: VPs de Operaciones, directores de Supply Chain, CFOs evaluando naves industriales en México
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMN1N'

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

const description =
  'El 25% de todos los accidentes en almacenes ocurren en docas de carga. Una altura incorrecta, un patio con pendiente excesiva o la ausencia de vehicle restraints no son detalles menores: son variables que determinan si tu operación fluye o se detiene. Esta guía técnica desglosa los cinco componentes críticos de una doca, las especificaciones que más se omiten en los brochures y los costos reales de corregirlo después de firmar.'

const blocks = [
  // --- Apertura ---
  makeBlock(
    'b01',
    'El 25% de todos los accidentes en almacenes ocurren en o alrededor de las docas de carga, según la Occupational Safety and Health Administration (OSHA). No en los pasillos, no en las zonas de almacenamiento, sino en la interfaz de 14 pies de ancho donde el trailer se conecta con la nave. Más de 6,000 accidentes de montacargas al año involucran equipo que cae de una plataforma de carga. Más de 20 personas mueren aplastadas por semitráilers en docas cada año en Estados Unidos. El 70% de esos incidentes podrían prevenirse con los sistemas de restricción adecuados, según datos del National Institute of Standards and Technology (NIST).'
  ),
  makeBlock(
    'b02',
    'Estas cifras no son argumentos de seguridad industrial abstractos. Para un director de operaciones o un CFO que está evaluando o ya opera en una nave industrial, representan exposición real: litigios por accidentes fatales en doca que en Estados Unidos promedian entre $1 millón y $5 millones USD, y paralizaciones operativas que ningún seguro cubre completamente. El problema no es la doca como concepto, sino la brecha entre lo que se especifica en papel y lo que realmente existe cuando firmas el contrato y pones a operar tu equipo.'
  ),
  makeBlock(
    'b03',
    'Esta guía detalla los componentes que determinan si una doca funciona bien, las especificaciones que con mayor frecuencia se omiten en los materiales de marketing de los parques industriales, y los costos reales de corregir deficiencias una vez que ya estás instalado.'
  ),

  // --- H2: Los cinco componentes ---
  makeH2('h01', 'Qué hay en una doca: los cinco componentes que determinan si una bahía funciona bien'),
  makeBlock(
    'b04',
    'Una doca de carga no es una abertura en la pared. Es un sistema de cinco componentes interdependientes. Si alguno falla o está subespecificado, los demás no pueden compensarlo.'
  ),
  makeBlock(
    'b05',
    'El primero es el dock leveler o nivelador de plataforma. Su función es salvar la diferencia de altura y movimiento entre la cama del trailer y el piso de la nave. Existen tres tecnologías principales. El nivelador mecánico opera por resorte con capacidades de 25,000 a 35,000 libras, rango de ajuste de más o menos 12 pulgadas, y un ciclo de 45 a 90 segundos. Su costo instalado en pit oscila entre $7,000 y $12,000 USD con una vida útil de 10 a 15 años. El nivelador hidráulico tolera hasta 80,000 libras, completa el ciclo en 15 a 30 segundos y su costo por bahía con pit nuevo va de $15,000 a $25,000 USD; es el estándar correcto para operaciones de alto ciclo. El nivelador neumático tiene desempeño similar al hidráulico, pero sus airbags son susceptibles a daños mecánicos y a temperaturas extremas, lo que lo hace una opción de riesgo en mercados como Mexicali donde el calor en verano puede superar los 45°C.'
  ),
  makeBlock(
    'b06',
    'El segundo componente son los dock bumpers, los topes de caucho que absorben el impacto del trailer al acoplar. La especificación estándar es 6"×12"×24" con proyección de 4 pulgadas para un lip estándar de 16 pulgadas. Los hay laminados de caucho reciclado, que ofrecen más del 80% de absorción de impacto, y con cara de acero o UHMW para mayor resistencia a la radiación UV, un detalle relevante en zonas con alta exposición solar. El rango de costo es de $50 a $200 USD por par. Son el componente más barato del sistema y, sistemáticamente, el más descuidado. Bumpers deteriorados o faltantes transfieren el impacto directamente a la fachada de la nave y a la estructura del pit.'
  ),
  makeBlock(
    'b07',
    'El tercer componente es el dock seal o dock shelter, que cierra el perímetro entre la nave y el trailer para control de temperatura, polvo e insectos. El dock seal de espuma comprimida ofrece el mayor sellado posible y es adecuado para flotas homogéneas con menos de 30 ciclos diarios. Su costo es de $300 a $800 USD, pero su vida útil en operaciones de alto ciclo se reduce a 3 a 7 años. El dock shelter, con marco rígido y cortinas, es más versátil para trailers de distintas dimensiones y más duradero en operaciones intensivas. Cuesta entre $800 y $2,500 USD. Un dock seal en mal estado no es un problema cosmético: es un indicador confiable de la cultura de mantenimiento del parque industrial.'
  ),
  makeBlock(
    'b08',
    'El cuarto componente, y el más ignorado, es el vehicle restraint o dock lock. Su función es evitar dos fenómenos distintos. El primero es el trailer creep: el impacto repetitivo del montacargas al salir y entrar empuja el trailer milímetros a la vez hasta crear un gap entre la plataforma y la nave que puede ser invisible para el operador pero suficiente para que el equipo caiga. El segundo es el early departure: el chofer del camión arranca antes de que las operaciones hayan concluido. La norma OSHA 29 CFR 1910.178(k)(1) exige frenos aplicados o un sistema de restricción mecánico equivalente. Los vehicle restraints cuestan entre $1,200 y $4,000 USD por unidad e idealmente se integran con semaforización interior y exterior que comunica el estado de la doca al operador de montacargas y al chofer simultáneamente. Para operaciones que reciben auditorías OEM o buscan certificación ISO 45001, los vehicle restraints son prácticamente un requisito.'
  ),
  makeBlock(
    'b09',
    'El quinto componente es la puerta de la bahía. La puerta seccional industrial de 10×10 pies tiene un ciclo de 30 a 60 segundos y una vida útil de 10,000 a 100,000 ciclos de resorte, con costo instalado de $3,000 a $5,000 USD. La puerta de alta velocidad (rapid roll) completa el ciclo en 8 segundos, soporta 100 a 500 o más ciclos diarios y cuesta de $5,000 a $15,000 USD. El impacto en productividad es medible: con 6 docas y 50 ciclos diarios por bahía, una puerta seccional genera 37.5 minutos de espera por doca al día. Una puerta de alta velocidad reduce esa cifra a 6.7 minutos. Para una operación con 10 docas trabajando 250 días al año, la diferencia equivale a aproximadamente 1,250 horas de productividad recuperada anualmente.'
  ),

  // --- H2: Altura de plataforma ---
  makeH2('h02', 'La especificación que más se ignora: la altura de plataforma'),
  makeBlock(
    'b10',
    'La altura de doca es el parámetro técnico más crítico de una nave industrial y el que con mayor frecuencia se omite o se reporta incorrectamente en los materiales de marketing. El estándar norteamericano para trailers de clase 8 es de 48 a 52 pulgadas (120 a 132 cm) medidas desde el nivel del patio hasta el piso de la cama del trailer. En México, las naves clase A adoptaron el estándar de 48 pulgadas (120 cm) precisamente para garantizar compatibilidad con las cadenas de suministro binacionales.'
  ),
  makeBlock(
    'b11',
    'El problema está en el parque existente. Naves construidas antes del año 2000 en México con frecuencia tienen alturas de doca de 44 a 46 pulgadas. Una diferencia de 4 pulgadas puede parecer menor, pero cuando se combina con un nivelador mecánico desgastado cuyo rango de ajuste se ha reducido por el uso, puede impedir completamente las operaciones con trailers norteamericanos estándar o forzar configuraciones de carga que generan riesgo para el equipo y el personal.'
  ),
  makeBlock(
    'b12',
    'La única manera de verificar este dato con certeza es medir físicamente con cinta métrica antes de firmar cualquier contrato. No existe sustituto para esta verificación directa. Los planos, los brochures y las fichas técnicas del parque frecuentemente reportan la altura nominal del proyecto original, no la altura real después de años de uso, reparaciones o modificaciones. En Mexicali específicamente, las naves existentes pueden presentar alturas de doca variables entre 44 y 48 pulgadas dependiendo del año de construcción y el estado de mantenimiento.'
  ),
  makeBlock(
    'b13',
    'El ancho de bahía es el segundo parámetro a verificar. El mínimo funcional es de 12 pies centro a centro; el recomendado es 14 pies. Las puertas estándar industriales miden 9 pies de ancho por 10 de alto; las sobredimensionadas llegan a 10×10 pies. Una bahía de 12 pies con puerta de 9 pies deja márgenes de maniobra muy reducidos para el equipo, especialmente en operaciones nocturnas o de alto volumen.'
  ),

  // --- H2: Patio de maniobras ---
  makeH2('h03', 'El patio de maniobras: el parámetro que no aparece en el brochure'),
  makeBlock(
    'b14',
    'El truck court o patio de maniobras es la dimensión que con mayor frecuencia se omite en la descripción técnica de una nave industrial, a pesar de que determina directamente si los trailers pueden maniobrar con seguridad y eficiencia. Un trailer articulado de 53 pies requiere aproximadamente 130 pies de radio de giro para entrar y salir de una doca en un solo movimiento. La profundidad mínima funcional del patio es de 120 pies; la recomendada para operaciones sin restricciones es de 130 a 150 pies.'
  ),
  makeBlock(
    'b15',
    'En México, el estándar clase A establece truck courts de 120 a 135 pies, frente a los 130 a 185 pies que son comunes en desarrollos industriales de Estados Unidos. Esta diferencia no es trivial: un patio de 120 pies en una nave con docas en ambos lados puede requerir maniobras adicionales, aumentar los tiempos de acoplamiento y generar congestión en periodos de alta demanda. El 27% de los centros de distribución reportan la zona de recepción como la más congestionada de su operación; un patio subespecificado amplifica ese problema.'
  ),
  makeBlock(
    'b16',
    'La pendiente del patio es otro factor que rara vez aparece en los materiales del desarrollador. La pendiente máxima recomendada para operaciones con trailers es del 2% (relación 1:50). Pendientes de entre 3% y 5%, que no son infrecuentes en desarrollos que optimizaron el costo de nivelación del terreno, obligan a instalar vehicle restraints como requisito de seguridad, no como opción. En pendientes mayores al 5%, el riesgo de trailer creep se vuelve crítico incluso con frenos aplicados.'
  ),
  makeBlock(
    'b17',
    'La combinación de dock-high (plataforma elevada a 48 pulgadas) más patio adecuado es el estándar de facto para operaciones de distribución eficiente. Las puertas a nivel de patio (grade-level) son útiles para vehículos menores, cargas especiales o maquinaria sobredimensionada, pero operar exclusivamente con docas a nivel aumenta entre 20% y 30% el costo de mano de obra en carga y descarga. La configuración óptima en una nave clase A es mayoría de docas elevadas más una o dos puertas a nivel para casos especiales.'
  ),

  // --- H2: Cuántas docas necesitas ---
  makeH2('h04', 'Cuántas docas necesita realmente tu operación'),
  makeBlock(
    'b18',
    'El ratio de docas por superficie de nave es uno de los parámetros que más varían según el tipo de operación, y uno de los que con mayor frecuencia se subestima en el momento de evaluar una nave. Los rangos estándar por tipo de uso son los siguientes:'
  ),
  makeBlock(
    'b19',
    'Centro de distribución de e-commerce con alta rotación: 1 doca por cada 465 a 929 metros cuadrados. Centro de distribución general: 1 doca por cada 929 a 1,858 metros cuadrados. Manufactura ligera: 1 doca por cada 1,394 a 1,858 metros cuadrados. Manufactura pesada: 1 doca por cada 1,858 a 2,787 metros cuadrados.'
  ),
  makeBlock(
    'b20',
    'Estos rangos tienen implicaciones directas en la evaluación de una nave. Una operación de e-commerce de alto volumen instalada en una nave con ratio de manufactura pesada operará con cuellos de botella crónicos en recepción y embarque, independientemente de cuánto optimice sus procesos internos. El ratio de docas no es un parámetro negociable una vez firmado el contrato: modificarlo después tiene costos muy distintos a considerarlo desde el inicio.'
  ),
  makeBlock(
    'b21',
    'El software de dock scheduling puede mejorar los tiempos de rotación de camiones hasta en un 70%, según datos de proveedores especializados. Pero esa ganancia solo es alcanzable si el número físico de docas es suficiente para la demanda. Ninguna herramienta de gestión compensa la escasez de infraestructura física.'
  ),

  // --- H2: El costo de quedarse corto ---
  makeH2('h05', 'El costo de quedarse corto: retrofitting, rampas temporales y throughput perdido'),
  makeBlock(
    'b22',
    'Agregar una doca nueva a una nave existente no es un proceso sencillo ni barato. El costo de retrofitting incluye varias partidas que se suman rápidamente. El corte de fachada tiene un costo de $3,000 a $8,000 USD. La excavación y construcción del pit de concreto cuesta entre $5,000 y $12,000 USD. El nivelador hidráulico agrega $5,000 a $10,000 USD. La puerta y su operador cuestan de $3,500 a $6,000 USD. El dock seal o shelter, el vehicle restraint y los bumpers suman $2,000 a $5,000 USD adicionales. El total oscila entre $19,000 y $43,000 USD por doca nueva, más contingencias de entre 15% y 20% del presupuesto base.'
  ),
  makeBlock(
    'b23',
    'A estos costos directos se añade el factor tiempo. En México, el retrofitting de una doca requiere permiso de construcción municipal, cuyo proceso puede tomar entre dos y seis meses dependiendo del municipio y la carga administrativa del desarrollador. Durante ese período, la operación debe funcionar con la infraestructura disponible o con soluciones temporales.'
  ),
  makeBlock(
    'b24',
    'La alternativa temporal más común son las rampas portátiles o yard ramps, que permiten operar a nivel de piso con montacargas cuando no hay suficientes docas elevadas. Su costo de arrendamiento va de $1,500 a $5,000 USD mensuales. Son una solución funcional para picos de demanda o períodos de transición, pero no un sustituto eficiente para operaciones de alto volumen: aumentan los tiempos de ciclo, generan mayor desgaste del equipo y no eliminan los riesgos de seguridad asociados a operar en rampa.'
  ),
  makeBlock(
    'b25',
    'El throughput perdido por docas insuficientes no aparece en ninguna línea del contrato de arrendamiento, pero es cuantificable. Un shipper de tamaño mediano puede acumular hasta $11 millones USD anuales en multas OTIF (On-Time In-Full) por ineficiencias en doca, según datos de proveedores de soluciones logísticas. La cifra varía enormemente según el cliente y el contrato, pero ilustra el orden de magnitud del riesgo operativo.'
  ),

  // --- H2: Due diligence ---
  makeH2('h06', 'Due diligence en docas: la lista antes de firmar'),
  makeBlock(
    'b26',
    'La evaluación de las docas de una nave industrial requiere verificación directa sobre el terreno. Los puntos siguientes no son opcionales en ese proceso.'
  ),
  makeBlock(
    'b27',
    'Primero, medir la altura de cada doca con cinta métrica desde el nivel del patio. No aceptar la especificación del brochure. Verificar que todas las bahías estén a 48 pulgadas o confirmar qué variación existe y si es compatible con tu flota.'
  ),
  makeBlock(
    'b28',
    'Segundo, verificar el estado de los niveladores. Solicitar la fecha de instalación, el registro de mantenimiento y operar cada leveler manualmente para confirmar que el rango de ajuste cubre las variaciones reales de altura de los trailers con los que operarás.'
  ),
  makeBlock(
    'b29',
    'Tercero, inspeccionar bumpers y dock seals. Un dock seal deteriorado en una nave que se promociona como clase A indica que el mantenimiento no es una prioridad para el operador del parque. Evalúa lo que eso implica para el resto de la infraestructura.'
  ),
  makeBlock(
    'b30',
    'Cuarto, confirmar la presencia de vehicle restraints. Si no existen, el costo de instalarlos ($1,200 a $4,000 USD por unidad) debe considerarse como parte del costo de arranque, junto con el programa de capacitación requerido por la NOM-006-STPS-2023, vigente desde septiembre de 2024, que establece iluminación mínima de 300 lux en áreas de carga/descarga y capacitación certificada de operadores de montacargas.'
  ),
  makeBlock(
    'b31',
    'Quinto, medir la profundidad del truck court y verificar su pendiente. Un patio de menos de 120 pies con pendiente mayor al 2% puede ser operacionalmente restrictivo para trailers de 53 pies. Confirmar que el ancho de bahía sea mínimo de 12 pies, idealmente 14 pies centro a centro.'
  ),
  makeBlock(
    'b32',
    'Sexto, calcular el ratio de docas por superficie considerando tu tipo de operación real, no el uso genérico del espacio. Una nave con ratio adecuado para manufactura pesada puede estar significativamente subespecificada para un centro de distribución de alta rotación.'
  ),
  makeBlock(
    'b33',
    'Séptimo, verificar el tipo de puertas instaladas. Si tu operación supera los 30 ciclos por día por bahía, una puerta seccional estándar puede convertirse en un cuello de botella relevante. Calcular el costo de la diferencia entre puertas seccionales y de alta velocidad frente al valor del tiempo de operación recuperado.'
  ),

  // --- Cierre ---
  makeBlock(
    'b34',
    'Las docas de carga son el punto donde la logística se vuelve física. Todos los sistemas de planificación, los acuerdos de nivel de servicio y las inversiones en automatización de almacén dependen de que esa interfaz funcione correctamente. Una nave con altura de doca incorrecta, patio insuficiente o ausencia de vehicle restraints no es un activo con áreas de mejora: es un riesgo operativo y legal que tiene costos concretos, medibles y, en la mayoría de los casos, prevenibles con la verificación adecuada antes de firmar.'
  ),
  makeBlock(
    'b35',
    'En Grupo Nelson trabajamos con clientes que nos consultan estas especificaciones antes y durante el proceso de evaluación de nave. La revisión técnica de las docas forma parte del análisis que hacemos de cada espacio, porque sabemos que son los detalles que determinan si una operación arranca limpia o carga desde el primer día con restricciones que no estaban en el contrato.'
  ),

  // --- Fuentes ---
  makeBlock(
    'b_fuentes',
    'Fuentes: Occupational Safety and Health Administration — OSHA (osha.gov), 29 CFR 1910.178; National Institute of Standards and Technology — NIST; NOM-006-STPS-2023 (Diario Oficial de la Federación, vigente septiembre 2024); Rite-Hite Corporation; DuraServ; Beacon Industries; Loading Dock Supply; MBC Management; MetricRig; DockStar Industrial; Pentalift Equipment Corporation; Begley Overhead Doors; Rytec Corporation; WareCRE; FINSA; Cushman & Wakefield México; Arrivy; Mecalux.'
  ),
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
