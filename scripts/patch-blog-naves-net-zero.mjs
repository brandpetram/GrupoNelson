/**
 * Parcha el post de blog: Naves Net Zero: Por Qué las Empresas Fortune 500 Están Reescribiendo Sus Contratos de Arrendamiento
 * Documento ID: 4lXD1QprlKmqniOHakmswD
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmswD'

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

const description = 'Las empresas Fortune 500 están incorporando cláusulas de sostenibilidad en sus contratos de arrendamiento industrial, y sus proveedores en México —incluidos los operadores de naves en Baja California— están en el centro de esa exigencia. Entender qué significa realmente una nave net zero, qué regulaciones lo están impulsando y qué herramientas existen en el mercado mexicano ya no es opcional: es una decisión de negocio.'

const blocks = [
  makeBlock('b01', 'Hace cinco años, preguntar si una nave industrial era "verde" era casi una curiosidad. Hoy, para un proveedor Tier 1 de Toyota, Apple o Honeywell, esa pregunta aparece en el checklist de due diligence antes de firmar o renovar un contrato de arrendamiento. Las grandes corporaciones con compromisos públicos de carbono no solo están midiendo sus propias emisiones: están auditando las de toda su cadena de suministro. Y eso incluye la nave donde su proveedor en Mexicali ensambla componentes, almacena producto o manufactura partes.'),

  makeBlock('b02', 'El mercado de naves industriales en México está respondiendo a esta presión con velocidad desigual. Los desarrolladores de Clase A ya ofrecen opciones certificadas; los propietarios de naves más antiguas están descubriendo que la falta de eficiencia energética puede convertirse en un problema de arrendabilidad en el mediano plazo. Para los directores de operaciones, CFOs y directores de planta que operan en parques industriales de Baja California, entender el lenguaje de la sostenibilidad ya es una competencia operativa, no un tema de relaciones públicas.'),

  makeH2('h01', 'Tres términos que no son lo mismo: NZE, NZC y carbono neutro'),

  makeBlock('b03', 'El primer problema es de vocabulario. Los términos se usan indistintamente en conversaciones comerciales, pero tienen implicaciones muy diferentes en contratos, reportes regulatorios y compromisos ante inversionistas. Una nave Net Zero Energy (NZE) es aquella que genera tanta energía como la que consume en el curso de un año: típicamente mediante paneles solares en techo que compensan el consumo de iluminación, climatización y equipos. Es un concepto técnico y medible, pero no captura todas las emisiones asociadas a la operación.'),

  makeBlock('b04', 'Net Zero Carbon (NZC) va más lejos: significa que las emisiones netas de carbono son cero considerando todo el ciclo de vida del edificio y su operación. No basta con generar energía renovable; hay que contabilizar las emisiones embebidas en los materiales de construcción, en el transporte de insumos y en los procesos productivos del inquilino. El término carbono neutro, por su parte, se refiere a compensar las emisiones residuales que no se pueden eliminar mediante la compra de offsets —créditos de carbono provenientes de proyectos de reforestación, captura de metano u otros mecanismos—. Es el nivel más básico y también el más criticado, porque no implica reducción real de emisiones, sino compensación contable. Cuando un cliente o regulador exige "net zero", vale la pena preguntar cuál de los tres.'),

  makeH2('h02', 'Por qué las regulaciones de Europa y EE.UU. afectan a una nave en Mexicali'),

  makeBlock('b05', 'La presión regulatoria sobre emisiones no es un fenómeno exclusivo de los mercados donde se aplica la norma. La Directiva de Reporte de Sostenibilidad Corporativa de la Unión Europea (CSRD, por sus siglas en inglés) exige que empresas con más de 500 empleados que operan en Europa o exportan a ese mercado reporten sus emisiones Scope 1, 2 y 3 a partir del período 2024–2026. Esto incluye a las subsidiarias mexicanas de multinacionales europeas: una planta en Mexicali que es parte de un grupo con operaciones en Alemania, Francia o España está técnicamente dentro del perímetro de reporte de su matriz.'),

  makeBlock('b06', 'En Estados Unidos, la SEC Climate Disclosure Rule aprobada en 2024 —aunque parcialmente suspendida por litigios— obliga a empresas cotizadas en bolsas estadounidenses a reportar emisiones Scope 1 y 2. Lo relevante para México es el efecto de segunda vuelta: las empresas cotizadas que compran a proveedores mexicanos deben reportar las emisiones de su cadena de suministro (Scope 3). Eso convierte al proveedor en una fuente de dato regulatorio para su cliente. Si el proveedor no puede acreditar qué energía usa y cuánto emite, el cliente tiene un problema de reporte ante la SEC.'),

  makeBlock('b07', 'El tercer vector de presión es la Science Based Targets initiative (SBTi), una iniciativa privada que agrupa a más de 8,000 empresas globales con compromisos de reducción de emisiones alineados con los límites del Acuerdo de París. Las empresas adheridas a SBTi tienen compromisos no solo sobre sus propias emisiones (Scope 1 y 2), sino sobre las de sus proveedores Tier 1 y Tier 2 (Scope 3). En la práctica, esto significa que un fabricante de electrónica con compromiso SBTi que compra partes a una empresa en Baja California puede exigir —y ya lo hace— que ese proveedor reporte y reduzca sus emisiones como condición contractual.'),

  makeH2('h03', 'Lo que el inquilino exige hoy: green leases y el reporte de Scope 2'),

  makeBlock('b08', 'El green lease, o arrendamiento verde, es el instrumento contractual donde convergen todas estas presiones. A diferencia de un contrato de arrendamiento tradicional, un green lease establece obligaciones mutuas entre propietario e inquilino en materia de consumo energético, certificaciones, reporte de emisiones y mejoras de sostenibilidad. El estándar es creciente en contratos de naves Clase A: los desarrolladores como Prologis —que ha comprometido net zero en todo su portafolio global para 2040 y tiene el 88% de su portafolio en México con algún nivel de certificación— ya incorporan estas cláusulas de forma habitual.'),

  makeBlock('b09', 'El elemento más concreto que los inquilinos con compromisos de carbono exigen es la trazabilidad del Scope 2, es decir, las emisiones indirectas generadas por la electricidad que consume su planta. En una nave industrial de manufactura, el consumo energético típico oscila entre 50 y 150 kWh por metro cuadrado al año, dependiendo del proceso productivo. Ese consumo, multiplicado por el factor de emisión de la red eléctrica, se convierte en una cifra de CO₂ que el inquilino debe reportar a su corporativo, a sus clientes o a los reguladores. Si la nave no puede demostrar que usa energía renovable —o si el propietario no provee esa información—, el inquilino tiene que reportar un Scope 2 más alto, lo que afecta sus métricas de carbono. Eso ya está cambiando decisiones de dónde arrendar.'),

  makeH2('h04', 'Las herramientas disponibles en México: CELs, I-RECs, solar y eficiencia'),

  makeBlock('b10', 'México ofrece un conjunto de instrumentos para que propietarios e inquilinos de naves industriales reduzcan su huella de Scope 2, aunque su adopción sigue siendo desigual. Los Certificados de Energía Limpia (CELs) son el instrumento mexicano para acreditar el consumo de energía renovable: una empresa puede comprar CELs para demostrar que la electricidad que consume proviene de fuentes limpias, aunque no esté físicamente conectada a un generador renovable. Para empresas multinacionales que reportan bajo el GHG Protocol —el estándar internacional de contabilidad de emisiones—, los I-RECs (International Renewable Energy Certificates) cumplen la misma función a nivel internacional.'),

  makeBlock('b11', 'La vía más directa de reducción es la generación solar propia mediante paneles instalados en el techo de la nave, combinada con mejoras de eficiencia energética (iluminación LED, sistemas de climatización eficientes, aislamiento térmico). Una cuarta opción son los Power Purchase Agreements (PPAs) con generadores renovables, contratos de largo plazo que permiten al inquilino o propietario comprar energía limpia a precio fijo directamente de un parque solar o eólico. En un contexto donde México genera aproximadamente el 20% de su electricidad de fuentes renovables —con una red eléctrica que sigue siendo mayoritariamente fósil—, la diferencia entre usar o no usar instrumentos de acreditación de energía limpia tiene un impacto directo en la cifra de Scope 2 que reporta el inquilino.'),

  makeBlock('b12', 'Para propietarios que quieren certificar naves ya construidas, LEED O+M (Operations and Maintenance) permite obtener certificación sobre edificios existentes sin necesidad de demoler ni reconstruir. Esta opción suele tener un costo premium de renta de entre 3 y 8% respecto a naves no certificadas según el mercado, pero la evidencia muestra menor rotación de inquilinos y mayor facilidad de arrendamiento a empresas con compromisos de sostenibilidad. El Sistema de Comercio de Emisiones (SCE) de México, que desde su fase piloto en 2020 avanza hacia su fase operativa, aplica a sectores industriales con emisiones superiores a 25,000 toneladas de CO₂ equivalente por año, lo que puede alcanzar a operaciones de manufactura de mediana y gran escala.'),

  makeH2('h05', 'El riesgo de los activos varados: naves sin certificación en 2030'),

  makeBlock('b13', 'En finanzas de activos inmobiliarios existe el concepto de stranded asset: un activo que pierde valor —o directamente deja de ser arrendable— por razones regulatorias o de mercado que no estaban en el horizonte al momento de la inversión. En el sector de bienes raíces industriales, el riesgo de activos varados por falta de eficiencia energética es una conversación que los fondos de inversión ya están teniendo. La pregunta no es si sucederá, sino cuándo y con qué velocidad.'),

  makeBlock('b14', 'Los sectores más exigentes ya están marcando la pauta. El automotriz —Toyota y GM tienen compromisos de Scope 3 que alcanzan a sus proveedores— y el electrónico —Apple y Samsung han establecido objetivos de carbono que se extienden a su cadena de suministro— son los que más aceleradamente están incorporando la sostenibilidad como criterio de selección de proveedores y, por extensión, de sus instalaciones. Una nave que en 2025 no puede acreditar consumo de energía renovable ni proporcionar datos de emisiones puede ser perfectamente arrendable a un inquilino sin compromisos de carbono, pero ese universo de inquilinos elegibles se está reduciendo en los sectores más dinámicos del nearshoring.'),

  makeBlock('b15', 'La estimación más conservadora de analistas del sector inmobiliario industrial es que en un horizonte de cinco a diez años, las naves sin eficiencia energética ni capacidad de reporte de emisiones enfrentarán dificultad creciente para atraer a inquilinos con compromisos SBTi. Esto no es un escenario catastrófico inmediato, pero sí una tendencia lo suficientemente clara como para que propietarios de naves con horizonte de inversión de 15 a 20 años deban incluirla en sus proyecciones. El costo de adaptar una nave hoy es significativamente menor que el descuento que puede representar arrendar una nave "no certificable" en 2030.'),

  makeH2('h06', 'Lo que esto implica para propietarios y desarrolladores en Baja California'),

  makeBlock('b16', 'Para los desarrolladores y propietarios de naves industriales en la región, la lectura práctica de todo lo anterior tiene tres niveles. El primero es de información: entender qué le están pidiendo sus inquilinos actuales y potenciales en términos de sostenibilidad, qué datos de consumo y emisiones necesitan para sus reportes corporativos, y si el contrato vigente contempla alguna cláusula verde. El segundo nivel es de inventario: auditar qué tienen hoy en términos de eficiencia energética, capacidad solar instalada o instalable, y si la nave cumple los requisitos técnicos para buscar una certificación LEED O+M. El tercero es estratégico: decidir cuánto y cuándo invertir en sostenibilidad como diferenciador competitivo frente a naves equivalentes en el mismo mercado.'),

  makeBlock('b17', 'La buena noticia es que Baja California tiene condiciones favorables: alta irradiación solar que hace rentable la generación fotovoltaica, proximidad a la frontera con EE.UU. que intensifica la presión de clientes norteamericanos con compromisos SEC y SBTi, y un mercado de nearshoring que está atrayendo precisamente a los sectores —automotriz, electrónico, aeroespacial— más avanzados en exigencias de sostenibilidad. Los desarrolladores que lean esa convergencia con anticipación tendrán una posición distinta en el mercado de los próximos diez años.'),

  makeBlock('b18', 'Desde Grupo Nelson acompañamos a empresas que están evaluando estas decisiones, tanto en la selección de espacios como en la comprensión del marco regulatorio y de mercado que rodea a las naves industriales en la región. El punto de partida, en casi todos los casos, es la misma pregunta: ¿qué necesita demostrar mi inquilino —o yo como inquilino— ante mi corporativo o mis clientes? Desde ahí, las opciones son más concretas de lo que parecen.'),

  makeBlock('b_fuentes', 'Fuentes: Prologis Sustainability Report 2023 (prologis.com/sustainability); Science Based Targets initiative, "Companies Taking Action" (sciencebasedtargets.org); European Financial Reporting Advisory Group, CSRD implementation timeline (efrag.org); U.S. Securities and Exchange Commission, "The Enhancement and Standardization of Climate-Related Disclosures for Investors" (sec.gov, 2024); USGBC, LEED O+M certification criteria (usgbc.org); Secretaría de Medio Ambiente y Recursos Naturales, Sistema de Comercio de Emisiones México (gob.mx/semarnat); Centro Nacional de Control de Energía, Informe de Generación Eléctrica por Fuente 2024 (cenace.gob.mx); GHG Protocol Corporate Standard, "A Corporate Accounting and Reporting Standard" (ghgprotocol.org); IREC Standard, "International REC Standard" (irecstandard.org).'),
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
