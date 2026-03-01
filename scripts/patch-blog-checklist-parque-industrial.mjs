/**
 * Parcha el post de blog: Cómo Evaluar un Parque Industrial en México
 * Documento ID: uqKP1CJoSsgXdCXPUwMCS8
 *
 * Audiencia: VPs de Operaciones, Directores de Supply Chain y CFOs de empresas
 * manufactureras norteamericanas evaluando instalarse en Baja California / México.
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMCS8'

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

// Descripción SEO del artículo (1-2 oraciones)
const description =
  'Una guía técnica y ejecutiva para evaluar un parque industrial en México: especificaciones físicas Clase A, servicios críticos, due diligence legal, certificaciones y los errores más costosos que cometen las empresas al instalarse en Baja California.'

const blocks = [
  // --- APERTURA ---
  makeBlock(
    'b01',
    'Un director de operaciones de una empresa automotriz de Tier 1 con sede en Michigan pasó cuatro meses negociando un contrato de arrendamiento en un parque industrial en Mexicali. El precio por metro cuadrado era competitivo, el brochure mostraba imágenes impecables y el desarrollador prometía entrega en seis meses. Lo que el brochure no mencionaba: la subestación eléctrica compartida operaba al 85% de su capacidad y la ampliación con CFE tomaba entre ocho y doce meses. La planta nunca arrancó en el plazo previsto. El costo del retraso, incluyendo penalizaciones con clientes en EE.UU., superó el ahorro proyectado del primer año de operación.'
  ),
  makeBlock(
    'b02',
    'Este escenario no es anecdótico. Con el auge del nearshoring, docenas de empresas manufactureras norteamericanas han acelerado su proceso de evaluación de parques industriales en México, muchas veces comprimiendo una due diligence de 90 días en tres semanas. El resultado predecible: decisiones basadas en materiales de marketing, no en especificaciones técnicas verificadas. Esta guía compila los criterios que los equipos de site selection rigurosos utilizan para evaluar un parque industrial antes de firmar cualquier contrato.'
  ),

  // --- H2: 1 ---
  makeH2('h01', 'Las especificaciones físicas que no son negociables'),
  makeBlock(
    'b03',
    'La primera pregunta que debe hacer cualquier equipo técnico no es sobre el precio por metro cuadrado, sino sobre el clear height. Para operaciones de manufactura avanzada o distribución con racks de alto apilamiento, el estándar mínimo de un parque Clase A es 9.75 metros de altura libre. Los proyectos nuevos en mercados competitivos como Mexicali o Monterrey superan los 10 a 12 metros (Datoz, 2025). Un clear height insuficiente no es negociable después de la firma: modificarlo implica rediseño estructural y costos que típicamente no están cubiertos en el contrato base.'
  ),
  makeBlock(
    'b04',
    'El sistema constructivo también importa. El estándar Clase A en México es Tilt-Up, paneles de concreto prefabricado que ofrecen mayor resistencia estructural, aislamiento térmico superior y tiempos de construcción más predecibles en proyectos Build-to-Suit. Exija que cualquier especificación de nave incluya el sistema constructivo de manera explícita.'
  ),
  makeBlock(
    'b05',
    'Para operaciones con montacargas de alta capacidad, el piso es un factor crítico que frecuentemente se subestima. En Estados Unidos el estándar para centros de distribución es FF50/FL35 (Flatness/Levelness); en México no existe una norma publicada equivalente con ese nivel de detalle, pero un parque Clase A debe poder acreditar resistencia de piso adecuada para las cargas operativas específicas de su proceso. Solicite la memoria de cálculo estructural, no solo el número genérico de "alta resistencia".'
  ),
  makeBlock(
    'b06',
    'En cuanto a logística de andenes, el ratio estándar para operaciones de manufactura y distribución es una doca por cada 500 a 700 metros cuadrados de piso. Los patios de maniobra deben tener entre 35 y 45 metros de profundidad para permitir la operación de tractocamiones de 53 pies, y las calles internas del parque no deben ser menores a 14 metros de ancho. Cualquier parque que no pueda documentar estas medidas en sus planos debe considerarse descalificado para operaciones de escala.'
  ),
  makeBlock(
    'b07',
    'Finalmente, verifique el sistema de protección contra incendio. El estándar para naves Clase A es ESFR (Early Suppression Fast Response), diseñado para responder antes de que un incendio escale. Este requerimiento puede ser determinante para las pólizas de seguro de su corporativo y para el cumplimiento de los requerimientos de C-TPAT.'
  ),

  // --- H2: 2 ---
  makeH2('h02', 'El checklist de servicios críticos: electricidad, agua y telecomunicaciones'),
  makeBlock(
    'b08',
    'La Norma Mexicana NMX-R-046-SCFI-2015 establece los parámetros mínimos que debe cumplir un parque industrial certificado. Para electricidad, el mínimo es 150 kVA por hectárea, con una recomendación de 250 kVA/ha en media tensión. Un parque Clase A debe contar con subestación eléctrica propia dentro del desarrollo, no depender únicamente de la red municipal. Este punto es, en la práctica, el más conflictivo del proceso de evaluación en el contexto actual.'
  ),
  makeBlock(
    'b09',
    'El problema de fondo con la electricidad en México es estructural: el 91% de los parques industriales del país ha experimentado fallas en el suministro eléctrico (Mexico Energy LLC), y más del 60% de la red de transmisión nacional opera cerca de su capacidad máxima (Baker Institute). La infraestructura eléctrica fue diseñada para la demanda de 2018, no para la expansión industrial derivada del nearshoring. Preguntar si el parque "tiene subestación" no es suficiente. La pregunta correcta es: ¿cuál es la capacidad disponible hoy versus la contratada, y cuál es el tiempo de espera real para una ampliación con CFE? Un desarrollador serio debe poder responder con documentación de CFE, no con estimaciones verbales.'
  ),
  makeBlock(
    'b10',
    'En materia de agua, la norma establece un mínimo de 0.5 litros por segundo por hectárea, con una recomendación de 1.0 l/s/ha. Sin embargo, el dato operativo más relevante no está en la norma: más del 45% de los acuíferos del norte de México están sobreexplotados (World Economic Forum, 2025). El caso de Constellation Brands es ilustrativo: la empresa había invertido en el diseño de una planta cervecera de 1,400 millones de dólares en Mexicali con todos los permisos en regla, y tuvo que cancelar el proyecto ante la presión social por el uso del agua. Los permisos oficiales no garantizan la viabilidad operativa a largo plazo. Para procesos con alto consumo de agua, el análisis de la cuenca regional y el contexto social es parte indispensable de la due diligence.'
  ),
  makeBlock(
    'b11',
    'En telecomunicaciones, la norma exige fibra óptica troncal con conexión disponible en cada lote. Verifique la redundancia: ¿existe más de un proveedor de fibra con acceso al parque? ¿Hay acuerdo de nivel de servicio (SLA) documentado? Para operaciones con sistemas MES, ERP en la nube o comunicación en tiempo real con plantas en EE.UU., una conexión sin redundancia es un riesgo operativo inaceptable.'
  ),

  // --- H2: 3 ---
  makeH2('h03', 'Las certificaciones que importan y por qué'),
  makeBlock(
    'b12',
    'No todas las certificaciones tienen el mismo peso operativo. Entender qué evalúa cada una permite priorizar en el proceso de selección.'
  ),
  makeBlock(
    'b13',
    'La certificación AMPIP Parque Industrial Seguro es la más exhaustiva del mercado mexicano. Evalúa 286 criterios distribuidos en 10 estándares de seguridad que incluyen OEA (Operador Económico Autorizado), C-TPAT y 10 normas ISO, además de la Norma Mexicana de Parques Industriales. El proceso de certificación dura aproximadamente 10 meses, lo que da una idea de la profundidad del análisis. Un parque que ostenta esta certificación ha pasado por una auditoría rigurosa de seguridad física, procesos y gestión. Para cadenas de suministro que cruzan hacia EE.UU., es el indicador más confiable disponible.'
  ),
  makeBlock(
    'b14',
    'C-TPAT (Customs-Trade Partnership Against Terrorism) es un programa voluntario administrado por la Oficina de Aduanas y Protección Fronteriza de EE.UU. (USCBP). Para un parque industrial que aspire a albergar empresas exportadoras a EE.UU., el cumplimiento de C-TPAT no es opcional en la práctica. Sus requerimientos incluyen barda sólida perimetral, alambre concertina, circuito cerrado de televisión (CCTV), sensores de detección, iluminación perimetral y control de acceso documentado con registros auditables. Preguntar si el parque "cumple con C-TPAT" es insuficiente; solicite el programa de seguridad por escrito y la documentación de los controles implementados.'
  ),
  makeBlock(
    'b15',
    'LEED (Leadership in Energy and Environmental Design) es relevante principalmente para empresas con compromisos ESG corporativos o que reportan bajo marcos como GRI o CDP. Varios parques Clase A en Mexicali ya ofrecen certificación LEED para sus naves. Si su empresa tiene metas de reducción de huella de carbono o requiere certificación para cumplimiento con clientes europeos o corporativos, este criterio debe estar en su checklist desde el inicio.'
  ),

  // --- H2: 4 ---
  makeH2('h04', 'Due diligence legal: lo que no aparece en el brochure'),
  makeBlock(
    'b16',
    'La revisión legal de un parque industrial en México requiere cubrir al menos cuatro áreas que raramente se mencionan en las presentaciones comerciales.'
  ),
  makeBlock(
    'b17',
    'Primero, las escrituras. Solicite la escritura pública del inmueble y verifique que el desarrollador tiene plena titularidad o los derechos de arrendamiento necesarios para suscribir el contrato que le propone. Revise también el Registro Público de la Propiedad en busca de gravámenes, hipotecas o litigios pendientes sobre el predio. Esta revisión puede hacerse antes de cualquier negociación formal y no requiere comprometer información confidencial de su empresa.'
  ),
  makeBlock(
    'b18',
    'Segundo, el Certificado Único de Zonificación de Uso de Suelo (CUZUS). Este documento certifica el uso de suelo autorizado para el predio y es el punto de partida para cualquier licencia de construcción, permiso ambiental o autorización de seguridad. Sin el CUZUS en orden, todos los demás permisos están en riesgo. Aquí un matiz crítico: distinga entre uso de suelo industrial puro y uso mixto. El uso mixto puede restringir operaciones de 24 horas o limitar el tipo de actividad industrial permitida, lo que puede ser incompatible con operaciones de manufactura continua.'
  ),
  makeBlock(
    'b19',
    'Tercero, la Manifestación de Impacto Ambiental (MIA) para su operación específica. Muchas empresas asumen que el parque industrial ya tiene resuelta la situación ambiental. El parque puede tener permisos generales; su operación específica, dependiendo del giro industrial y los materiales utilizados, puede requerir una MIA individual. Este trámite tiene tiempos variables y no debe subestimarse en la planeación del arranque.'
  ),
  makeBlock(
    'b20',
    'Cuarto, el contrato de arrendamiento en sí. En proyectos Build-to-Suit, el plazo promedio es de 10 a 12 años, suficiente para amortizar la inversión del desarrollador. Revise con detalle las cláusulas de escalación de renta, las condiciones de salida anticipada, las responsabilidades de mantenimiento, y quién carga con el costo de adecuaciones si sus requerimientos cambian durante el plazo del contrato.'
  ),

  // --- H2: 5 ---
  makeH2('h05', 'La lógica logística del parque: ubicación, cruces y conectividad'),
  makeBlock(
    'b21',
    'La ubicación de un parque industrial no se evalúa en kilómetros desde el centro de la ciudad; se evalúa en tiempos reales de tránsito hacia los puntos de conexión relevantes para su operación. Para empresas exportadoras desde Baja California, el análisis logístico gira en torno a los cruces fronterizos.'
  ),
  makeBlock(
    'b22',
    'El cruce Calexico East opera en horario de carga de 6:00 am a 8:00 pm de lunes a viernes, con horario reducido en fin de semana. Los menores tiempos de espera se concentran entre las 10:00 am y las 2:00 pm en días de semana, y en el rango de 4:00 am a 6:00 am. Para operaciones con ventanas de entrega ajustadas o compromisos just-in-time con clientes en California o Arizona, estos horarios deben integrarse al modelo de planeación logística antes de seleccionar la ubicación del parque, no después.'
  ),
  makeBlock(
    'b23',
    'Desde Mexicali, el acceso a la Interstate 8 conecta directamente con el corredor hacia San Diego y Phoenix, dos de los principales destinos de manufactura y distribución en el suroeste de EE.UU. La distancia real y el tiempo de tránsito desde el parque hasta el cruce fronterizo, y desde el cruce hasta el destino final, debe calcularse para los escenarios de mayor demanda, no para las condiciones ideales.'
  ),
  makeBlock(
    'b24',
    'También verifique el estado de las vialidades de acceso al parque desde la carretera principal. No es inusual encontrar parques con excelente conectividad interna pero con accesos exteriores que no soportan el tráfico de tractocamiones en condiciones de lluvia o que tienen restricciones de horario por ordenamientos municipales.'
  ),

  // --- H2: 6 ---
  makeH2('h06', 'Los errores más caros que cometen las empresas al instalarse'),
  makeBlock(
    'b25',
    'Con base en los patrones más frecuentes en el proceso de evaluación, estos son los errores con mayor impacto en costos y tiempos de arranque.'
  ),
  makeBlock(
    'b26',
    'No verificar la capacidad real de la subestación. El error más común y potencialmente más costoso. Un parque puede tener subestación propia y aun así no tener capacidad disponible para su carga. La ampliación de capacidad con CFE tiene tiempos que van de varios meses a más de un año, dependiendo de la región y el nivel de demanda de la red. Si su proceso requiere una carga eléctrica significativa, este punto debe cerrarse con documentación de CFE antes de firmar el contrato.'
  ),
  makeBlock(
    'b27',
    'Subestimar el estrés hídrico. El caso Constellation Brands demostró que tener todos los permisos en regla no es garantía de operación sin conflicto. Para procesos con alto consumo de agua en el norte de México, la evaluación debe incluir un análisis de la situación del acuífero local, el contexto social y los antecedentes de conflictos en la región. Este análisis no lo proporciona el desarrollador; requiere investigación independiente.'
  ),
  makeBlock(
    'b28',
    'No distinguir uso de suelo industrial puro de uso mixto. Este error aparece tarde en el proceso, frecuentemente cuando ya se han invertido semanas en negociación. La diferencia puede significar restricciones en horarios de operación, tipo de procesos permitidos o limitaciones en el manejo de ciertos materiales. Consulte el CUZUS desde el inicio.'
  ),
  makeBlock(
    'b29',
    'Asumir que los servicios municipales están garantizados. Un parque puede estar dentro de un polígono industrial con todos los servicios en papel, y aun así tener problemas de presión de agua, drenaje industrial insuficiente o vialidades de acceso en mal estado. Visite el parque en condiciones reales, hable con operadores existentes y verifique el estado real de los servicios, no el estado prometido.'
  ),
  makeBlock(
    'b30',
    'Subestimar el timeline total. El timeline estándar para un proyecto Build-to-Suit en México es de 6 a 9 meses desde la firma del contrato hasta la entrega de la nave. A ese plazo hay que sumar los tiempos de trámites de CFE, permisos de uso de suelo, MIA si aplica, y la instalación de equipo. Una empresa que comunica a sus clientes un arranque de operaciones en cuatro meses a partir de la selección del parque está operando con márgenes que no corresponden a la realidad del proceso.'
  ),

  // --- CIERRE ---
  makeBlock(
    'b31',
    'El mercado industrial de Mexicali cerró 2024-2025 con un inventario superior a los 40 millones de pies cuadrados, equivalente a un crecimiento del 60% desde 2018, y una tasa de vacancia del 6.3% (Solili, noviembre 2025). Hay opciones disponibles. El problema no es la oferta; es la capacidad de distinguir entre un parque que cumple en papel y uno que funciona en operación real. La diferencia entre ambos puede medirse en millones de dólares de costos no previstos.'
  ),
  makeBlock(
    'b32',
    'Un proceso de evaluación riguroso no toma más tiempo que uno superficial; simplemente ordena las preguntas correctas antes de que los contratos estén firmados. Equipos como Grupo Nelson acompañan a empresas manufactureras en este proceso de análisis en Baja California, desde la revisión técnica hasta la coordinación con desarrolladores y asesores legales locales.'
  ),

  // --- FUENTES ---
  makeBlock(
    'b_fuentes',
    'Fuentes: Datoz, "Mercado Industrial México 2025" (2025). Solili, "Reporte de Mercado Industrial Mexicali, noviembre 2025". Mexico Energy LLC, "Industrial Parks Energy Report". Baker Institute for Public Policy, "Mexico\'s Electricity Sector: Capacity and Constraints". World Economic Forum, "Water Risk in Northern Mexico" (2025). Mexico Business News, "Industrial Park Investment Report 2025". Centinela Property, "Industrial Development Portfolio Mexicali 2024". Asociación Mexicana de Parques Industriales Privados (AMPIP), "Parque Industrial Seguro: Criterios de Certificación". Norma Mexicana NMX-R-046-SCFI-2015, "Parques Industriales — Especificaciones". U.S. Customs and Border Protection (USCBP), "C-TPAT Program Overview".'
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
