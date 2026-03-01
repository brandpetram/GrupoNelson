/**
 * Parcha el post de blog: ESFR vs. Sprinklers Convencionales:
 * Lo que Nadie te Dice sobre Fire Protection
 * Documento ID: 4lXD1QprlKmqniOHakmnGW
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmnGW'

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

const description = 'El contrato dice "ESFR conforme a NFPA 13" — pero ese dato por sí solo no garantiza que el sistema proteja tu operación. Si cambias la mercancía, introduces plásticos del Grupo A o superas la altura de almacenamiento para la que fue diseñado el sistema, los sprinklers pueden quedar incapaces de controlar un incendio. Este análisis explica la diferencia real entre control y supresión, cómo funciona el K-factor, las limitaciones críticas del ESFR y la pregunta correcta que todo Director de Operaciones e Ingeniero de Planta debe hacer antes de firmar un contrato de arrendamiento.'

const blocks = [
  makeBlock('b01', 'El contrato de arrendamiento de la nave dice "sistema contra incendio ESFR conforme a NFPA 13". El brochure del parque repite la misma línea. Y en la reunión de evaluación, el dato se da por bueno: tiene ESFR, clasifica como Clase A, listo. El problema es que esa cadena de validación omite la pregunta más importante: ¿para qué mercancía específica fue diseñado ese sistema y a qué altura máxima de almacenamiento?'),
  makeBlock('b02', 'La respuesta a esa pregunta determina si el sistema de fire protection de la nave protege de verdad tu operación, o si simplemente cumple con un checkbox en la clasificación del parque. Para directores de operaciones, ingenieros de planta y responsables de EHS que evalúan naves industriales en México, entender la diferencia no es un ejercicio académico: es un factor que afecta la cobertura de seguro, la continuidad operativa y la responsabilidad ante un siniestro real.'),

  makeH2('h01', 'Control vs. supresión — la diferencia que define cómo responde tu seguro'),
  makeBlock('b03', 'Los sistemas de sprinklers se diseñan con uno de dos objetivos: control o supresión. La distinción no es semántica. Define el mecanismo de actuación del sistema, el tipo de cabezal instalado, los cálculos hidráulicos detrás de la infraestructura y, en consecuencia, lo que ocurre en los primeros minutos de un incendio real.'),
  makeBlock('b04', 'Un sistema de control —también llamado CMDA (Control Mode Density/Area), que es la categoría que incluye los sprinklers convencionales— no tiene como objetivo apagar el fuego. Su objetivo es limitar el tamaño del incendio distribuyendo agua para reducir la tasa de liberación de calor, manteniéndolo manejable hasta que lleguen los servicios de emergencia. El fuego sigue activo; el sistema lo contiene. La extinción es responsabilidad de los bomberos, no del sistema.'),
  makeBlock('b05', 'Un sistema ESFR —Early Suppression Fast Response— tiene un objetivo radicalmente diferente: apagar el fuego antes de que se desarrolle plenamente. El mecanismo de supresión reduce drásticamente la tasa de liberación de calor y previene la regrowth —el rebrote del fuego después de la activación inicial. El objetivo de diseño es la extinción, no la contención. Esa diferencia de objetivo se traduce en una diferencia de infraestructura, de demanda hidráulica y de cobertura aseguradora.'),
  makeBlock('b06', 'Para un responsable de EHS o un director de operaciones, la distinción importa en términos muy concretos. Las aseguradoras como FM Global, Zurich y AIG no tratan igual un sistema de control que uno de supresión al calcular la prima o las condiciones de cobertura. Un siniestro en una nave con sistema de control que "funcionó según diseño" pero no evitó pérdidas mayores puede tener consecuencias en la renovación de la póliza o en la liquidación del siniestro que un sistema de supresión habría evitado.')  ,

  makeH2('h02', 'Cómo funciona el ESFR: el K-factor y por qué importa'),
  makeBlock('b07', 'El mecanismo del ESFR se basa en tres elementos combinados: cabezales con orificios de gran tamaño —aproximadamente tres cuartos de pulgada—, un K-factor elevado y gotas de agua de gran tamaño con mayor momentum. Ese momentum es lo que permite que el agua penetre el plume de fuego —la columna de gases calientes y combustión ascendente— y llegue a la base del incendio con suficiente energía para suprimirlo. Un cabezal ESFR puede descargar hasta 100 galones por minuto (GPM), comparado con los 25 a 30 GPM de un cabezal convencional CMDA.'),
  makeBlock('b08', 'El K-factor es el número que define el sistema. La fórmula es Q = K × √P, donde Q es el caudal en GPM y P es la presión en PSI. A mayor K-factor, mayor caudal para la misma presión. Los rangos estándar del mercado tienen una lógica directa: K-5.6 es el cabezal convencional de oficinas y riesgo ligero. K-8.0 cubre riesgo ordinario a extra hazard. K-11.2 marca el inicio del rango ESFR y se usa en almacenamiento. K-14.0 es ESFR para almacenamiento hasta 45 pies de techo, con presión mínima de 50 PSI —o 75 PSI si el techo supera los 35 pies. K-16.8 requiere presión mínima de 32 PSI. K-25.2 es el ESFR de alta prestación para plásticos del Grupo A, con presión mínima de 15 PSI.'),
  makeBlock('b09', 'La demanda hidráulica total del sistema no es trivial. Un sistema ESFR típico está diseñado sobre un área de 12 cabezales —4 en cada uno de 3 ramales— con una demanda agregada que frecuentemente alcanza 1,800 GPM a 70 PSI. Esa demanda requiere infraestructura hidráulica que los sistemas convencionales de control no necesitan: bombas de incendio booster, tuberías de mayor diámetro y un suministro de agua garantizado para el tiempo de actuación del sistema. No todas las naves tienen esa infraestructura instalada correctamente, y la verificación de su estado de mantenimiento es parte del due diligence de evaluación de una nave.'),

  makeH2('h03', 'Las limitaciones del ESFR que el brochure del parque no menciona'),
  makeBlock('b10', 'Aquí está el dato que prácticamente ningún brochure de parque industrial menciona: el ESFR tiene limitaciones de mercancía y de altura que, si no se respetan, convierten el sistema en ineficaz para el incendio real que puede ocurrir en tu operación. El sistema fue diseñado y calculado para una mercancía específica, a una altura de almacenamiento específica. Si cambias cualquiera de esas variables, el diseño original puede quedar insuficiente.'),
  makeBlock('b11', 'Las limitaciones de altura son precisas según NFPA 13 Capítulo 23: el techo de la nave no puede superar 45 pies (13.7 metros). La altura de almacenamiento no puede superar 40 pies (12.2 metros). Y existe un clearance mínimo obligatorio de 36 pulgadas entre el cabezal ESFR y el tope del almacenamiento. Si los racks de tu operación están más altos que el diseño original del sistema, el clearance se reduce por debajo del mínimo y la activación del cabezal puede verse comprometida.'),
  makeBlock('b12', 'Las limitaciones de mercancía son donde el problema se vuelve crítico para operaciones manufactureras. Los plásticos del Grupo A no encajonados —exposed Group A plastics— solo pueden protegerse con cabezales K-25.2 a un mínimo de 60 PSI. Los plásticos expandidos expuestos tienen una altura máxima de almacenamiento de 25 pies. Los líquidos inflamables solo están cubiertos hasta 14 pies de almacenamiento y 24 pies de techo, y requieren sistemas in-rack adicionales. Los aerosoles tienen sus propias restricciones según el nivel de clasificación del producto. Y el ESFR es completamente incompatible con draft curtains —cortinas de humo— porque esas cortinas interfieren con el flujo térmico que activa los cabezales.'),
  makeBlock('b13', 'El riesgo concreto que pocos explican con claridad es este: si el tenant cambia la mercancía a una de mayor riesgo que la mercancía para la que fue diseñado el sistema, los sprinklers existentes pueden quedar incapaces de controlar el incendio. El contrato de arrendamiento típicamente especifica "ESFR conforme a NFPA 13" pero no indica para qué mercancía específica fue calculado el sistema ni cuál es la altura máxima de almacenamiento permitida para mantener la validez del diseño. Esa omisión crea una exposición real que ni el arrendador ni el tenant suelen identificar hasta que ocurre un siniestro.'),

  makeH2('h04', 'In-rack vs. ESFR: el trade-off que afecta tu flexibilidad operativa'),
  makeBlock('b14', 'Una de las ventajas operativas del ESFR que sí suele mencionarse en los brochures es la eliminación de los sprinklers in-rack. En un sistema convencional diseñado para almacenamiento de alta densidad, los cabezales no están solo en el techo: están integrados en cada nivel de los racks de almacenamiento. Eso significa que cualquier reorganización de la estructura de racks —un cambio de layout de warehouse, una reconfiguración de zonas de picking, una ampliación de la altura de almacenamiento— requiere modificar la plomería del sistema de fire protection, con el costo y el tiempo de inactividad que eso implica.'),
  makeBlock('b15', 'El ESFR, al colocar todos los cabezales en el techo, elimina esa restricción de flexibilidad operativa. Puedes reorganizar los racks sin tocar el sistema de fire protection, siempre que te mantengas dentro de los parámetros de mercancía y altura para los que fue diseñado el sistema. Esa flexibilidad tiene un valor real para operaciones con variabilidad estacional de inventario, cambios de producto o layouts de warehouse que evolucionan con el negocio.'),
  makeBlock('b16', 'En términos de costo, la ecuación es contraintuitiva para muchos: el ESFR puede ser entre 30 y 50 por ciento más económico que un sistema convencional con in-rack para el mismo almacenamiento de alta densidad. La razón es que la eliminación de los cabezales de in-rack —que requieren plomería en cada nivel de cada rack— reduce significativamente el costo de instalación, aunque la infraestructura hidráulica de techo del ESFR es más robusta. En retrofit —instalación del sistema en un edificio existente que no fue construido con la infraestructura hidráulica adecuada— el costo puede escalar a USD $4 a $10 o más por pie cuadrado, comparado con USD $1 a $2 por pie cuadrado en nueva construcción. Una nave de 10,000 m² con ESFR nuevo tiene un costo estimado de USD $215,000 a $430,000 según rangos de la industria.'),
  makeBlock('b17', 'El trade-off operativo tiene dos caras. La flexibilidad de reorganizar racks libremente es una ventaja real del ESFR. Pero esa flexibilidad tiene un límite preciso: la mercancía y la altura para los que fue diseñado el sistema. Si la operación evoluciona hacia mercancías de mayor riesgo o hacia alturas de almacenamiento más elevadas, el sistema in-rack —aunque más restrictivo en layout— puede ser la opción correcta porque se diseña específicamente para la mercancía y la altura de cada nivel de rack. En esos casos, elegir ESFR por la flexibilidad operativa puede crear una falsa sensación de seguridad que no resiste el análisis técnico.'),

  makeH2('h05', 'NFPA 13 en México y el papel de FM Global'),
  makeBlock('b18', 'La primera aclaración que todo responsable de EHS en México debe tener clara es la siguiente: NFPA 13 no es obligatoria por ley en México. La norma obligatoria es la NOM-002-STPS-2010, emitida por la Secretaría del Trabajo y Previsión Social. Sin embargo, todos los desarrolladores de naves industriales Clase A y las aseguradoras más relevantes del mercado —FM Global, Zurich, AIG— adoptan NFPA 13 como estándar de facto de manera voluntaria. La edición vigente es la de 2025, y el Capítulo 23 regula específicamente los sistemas ESFR.'),
  makeBlock('b19', 'NFPA 13 también establece las frecuencias de mantenimiento que determinan el costo operativo real del sistema a lo largo del contrato de arrendamiento: pruebas de bombas semanales, inspección de válvulas trimestral, inspección completa anual, inspección interna de tuberías cada cinco años y reemplazo de cabezales Fast-Response —como los ESFR— a los 25 años. NFPA 25 es la norma que rige específicamente el mantenimiento. Verificar el cumplimiento de este calendario en una nave de segunda mano o con años de operación es parte del due diligence técnico antes de firmar el contrato.'),
  makeBlock('b20', 'FM Global introduce una capa adicional de complejidad que el mercado frecuentemente subestima. Cuando la aseguradora del tenant es FM Global, sus estándares son más conservadores que los de NFPA 13. En caso de conflicto entre ambos, el sistema debe cumplir el más estricto —que generalmente es FM Global. La aseguradora tiene sus propios Data Sheets para almacenamiento industrial: DS 8-9 y DS 2-0 son los más relevantes para naves de manufactura y logística. Las diferencias respecto a NFPA 13 no son cosméticas: pueden cambiar la clasificación de riesgo de la operación, el cálculo hidráulico completo, el tipo de cabezal requerido y el diámetro de las tuberías. Una nave que cumple con NFPA 13 puede no cumplir con los requisitos de FM Global para la póliza del tenant —y esa discrepancia solo se descubre cuando el área de riesgos de la aseguradora hace la inspección del inmueble.'),
  makeBlock('b21', 'En el contexto del mercado mexicano de naves industriales, el ESFR ya no es un diferenciador: es el piso mínimo de clasificación Clase A. Aproximadamente el 95 por ciento del ABR —Área Bruta Rentable— programado para entrega en México es Clase A, y toda nueva nave en ese segmento incorpora ESFR como estándar. Con más de 400 nuevas naves programadas para entrega en 2024, con un promedio de 23,000 m² por nave, el volumen de sistemas ESFR instalados en el mercado mexicano es significativo. El dato de "tiene ESFR" dejó de ser información diferenciadora hace tiempo; la información relevante es para qué mercancía y a qué altura fue diseñado cada sistema específico.'),

  makeH2('h06', 'La pregunta correcta al evaluar una nave: no "¿tiene ESFR?" sino "¿para qué mercancía fue diseñado el sistema?"'),
  makeBlock('b22', 'El cambio de pregunta no es trivial. Preguntando "¿tiene ESFR?" obtienes un sí o no que tiene valor de clasificación pero no valor de protección real para tu operación específica. Preguntando "¿para qué mercancía está diseñado el sistema y cuál es la altura máxima de almacenamiento permitida?" obtienes la información que determina si el sistema protege de verdad lo que vas a almacenar o fabricar en esa nave.'),
  makeBlock('b23', 'Las preguntas concretas que el equipo técnico debe hacer en la evaluación de una nave industrial son las siguientes. Primero: ¿cuál es la memoria de cálculo del sistema de fire protection? Ese documento, generado por el ingeniero que diseñó el sistema, especifica la mercancía para la que fue calculado, la altura de almacenamiento máxima, el K-factor de los cabezales instalados y la demanda hidráulica del sistema. Si el arrendador no tiene ese documento o no puede facilitarlo, es una señal de alerta importante.'),
  makeBlock('b24', 'Segundo: ¿cuál es el historial de mantenimiento del sistema según NFPA 25? Las fechas de las últimas inspecciones, pruebas de bombas e inspecciones de válvulas deben estar documentadas. Un sistema sin mantenimiento al día puede tener cabezales caducados, tuberías con sedimento que reduce el flujo efectivo o bombas que no alcanzan la presión de diseño. Tercero: ¿existe compatibilidad entre el sistema instalado y la mercancía de tu operación? Si tu proceso involucra plásticos del Grupo A, líquidos inflamables, aerosoles o cualquier mercancía de riesgo elevado, la respuesta a esa pregunta debe venir de un ingeniero de fire protection, no del agente inmobiliario.'),
  makeBlock('b25', 'Cuarto: ¿cuál es la aseguradora con la que trabajas y qué estándar aplica para la inspección del inmueble? Si es FM Global, la inspección de la aseguradora puede identificar discrepancias entre el sistema instalado y los requisitos de tu póliza que el landlord no ha identificado o no ha comunicado. Resolver esas discrepancias puede ser responsabilidad del tenant, del landlord, o de ambos, dependiendo del contrato —y ese punto debe quedar explícito en la negociación antes de la firma.'),
  makeBlock('b26', 'Quinto: ¿qué ocurre contractualmente si necesitas cambiar la mercancía o aumentar la altura de almacenamiento? El contrato debe especificar el proceso para modificar los parámetros de operación que afectan al sistema de fire protection —incluyendo quién asume el costo de las modificaciones necesarias al sistema si los nuevos parámetros superan los del diseño original. Un contrato que no aborda ese punto deja una exposición operativa y financiera abierta que puede materializarse en cualquier momento en que el negocio evolucione.'),

  makeBlock('b27', 'Grupo Nelson asesora a empresas manufactureras y logísticas en la evaluación técnica y comercial de naves industriales en Baja California desde hace más de seis décadas. Si tu equipo está evaluando una nave y necesita validar el sistema de fire protection, revisar la memoria de cálculo o entender las implicaciones contractuales de los parámetros de diseño, podemos acompañarte con el análisis necesario para tomar la decisión con información completa.'),

  makeBlock('b_fuentes', 'Fuentes: QRFS (qrfs.com) — ESFR Sprinkler Systems: What They Are and How They Work; Control Mode vs. Suppression Mode Sprinklers · Viking Sprinkler (vikingsprinklers.com) — ESFR Technical Data Sheets · VFS Fire (vfsfire.com) — K-factor Sprinkler Selection Guide · NFPA 13 (Standard for the Installation of Sprinkler Systems, edición 2025) — Capítulo 23: Early Suppression Fast-Response (ESFR) Sprinkler Systems · NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) · NOM-002-STPS-2010 — Condiciones de seguridad contra incendio en los centros de trabajo (STPS México) · MeyerFire (meyerfire.com) — ESFR Sprinkler Design and Limitations · phcppros.com — When ESFR Sprinklers Fail: Occupancy Changes and System Adequacy · Klausbruckner & Associates — ESFR System Design Considerations · BlaZeMaster (blazemaster.com) — NFPA 13 Adoption in Mexico · Koltek Fire Protection (koltek.com) — Fire Protection Standards in Mexican Industrial Facilities · FM Global Data Sheet DS 8-9: Storage of Class 1, 2, 3, 4 and Plastic Commodities · FM Global Data Sheet DS 2-0: Installation Guidelines for Automatic Sprinklers · J.F. Ahern Co. (jfahern.com) — FM Global vs. NFPA 13: Key Differences · AFSA Florida (afsa.org) — Understanding FM Global Sprinkler Requirements · Hegel Engineering — ESFR vs. In-Rack Cost Comparison · HomeGuide (homeguide.com) — Fire Sprinkler System Cost Guide · SmokeguardBlog — Retrofit Fire Suppression System Costs · AI Real Estate Mexico — Reporte de mercado industrial Clase A México 2024 · Real Estate Market MX — Mercado industrial México: naves Clase A y ESFR · Logística Press — Naves industriales en México: entregas programadas 2024 · USACE (United States Army Corps of Engineers) — Fire Protection Engineering Design')
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
