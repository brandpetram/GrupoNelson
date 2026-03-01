/**
 * Parcha el post de blog: LEED en Naves Industriales: Diferenciador Real o Gasto de Marketing
 * Documento ID: kllPxzrZvj3u6Zg4KwYQzQ
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KwYQzQ'

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

const description = 'Más del 70% de los inquilinos corporativos ya incluye certificación verde en sus criterios de arrendamiento. La pregunta ya no es si LEED importa: es si el certificado en la fachada corresponde a ahorros reales en la operación. Este análisis desglosa el sistema de puntuación, los datos de adopción en México, la presión regulatoria ESG que convirtió a LEED en requisito de facto, y la brecha documentada entre diseño certificado y consumo energético real.'

const blocks = [
  // Apertura
  makeBlock('b01', 'Más del 70% de los inquilinos corporativos incluye requerimientos de certificación verde en sus criterios de arrendamiento, según datos de CBRE. La pregunta que un VP de Operaciones o un CFO debería hacerse ya no es si LEED importa: es si el certificado en la fachada de una nave industrial corresponde a ahorros reales en la operación, o si se trata de un argumento de marketing que suma puntos de baja relevancia energética para alcanzar un umbral mínimo.'),

  makeBlock('b02', 'La respuesta honesta es que depende. LEED puede representar una reducción documentada de entre el 25% y el 50% en consumo energético versus una nave convencional. También puede ser un edificio con estacionamiento para bicicletas y carteles educativos sobre ahorro de agua que sumaron los puntos suficientes para alcanzar la certificación Silver sin ninguna mejora sustancial en su eficiencia energética real. Distinguir uno del otro requiere saber exactamente qué mide el sistema, qué no mide, y cuáles son las preguntas que hay que hacerle al desarrollador antes de firmar.'),

  makeH2('h01', 'Qué certifica realmente LEED en una nave industrial (y qué no certifica)'),

  makeBlock('b03', 'LEED —Leadership in Energy and Environmental Design— es un sistema de puntuación desarrollado por el U.S. Green Building Council que evalúa edificios en categorías como eficiencia energética, eficiencia hídrica, calidad del ambiente interior, materiales y ubicación. La certificación se otorga en cuatro niveles: Certified (40–49 puntos), Silver (50–59), Gold (60–79) y Platinum (80 o más).'),

  makeBlock('b04', 'Para naves industriales existen distintos rating systems. El más utilizado por desarrolladores especulativos —es decir, los que construyen sin inquilino preidentificado— es BD+C Core & Shell, que evalúa la envolvente del edificio y los sistemas base, pero no el proceso productivo ni los equipos del inquilino. Existe también BD+C Warehouses & Distribution Centers, LEED for Manufacturing para instalaciones de producción, y O+M Existing Buildings para edificios ya en operación. La versión v4.1, la más extendida actualmente, usa el estándar ASHRAE 90.1-2016 para eficiencia energética e introduce métricas de carbono operacional. LEED v5, aún en beta, fue piloteado por primera vez en el mundo en Tlalnepark IV en México durante 2024.'),

  makeBlock('b05', 'Lo que LEED no certifica es igualmente relevante: no mide el carbono incorporado en los materiales de construcción —que puede representar más del 50% de las emisiones totales del ciclo de vida de un edificio, considerando acero y concreto—, no garantiza el desempeño energético real en operación cuando el rating system es BD+C, y no es resistente a la acumulación estratégica de puntos de bajo impacto. Bob Berkebile, uno de los cofundadores del sistema, ha señalado públicamente que LEED puede "gamificarse": créditos como señalización de bicicletas o carteles educativos suman hacia la certificación sin ningún efecto medible en el consumo energético del edificio.'),

  makeH2('h02', 'México entre los líderes mundiales: dónde está el industrial'),

  makeBlock('b06', 'En 2024, México ocupó el lugar número seis en el ranking mundial de certificaciones LEED, con 104 proyectos y más de 2.2 millones de metros cuadrados certificados en ese año solo —un incremento del 21% en número de proyectos y del 37% en superficie respecto a 2023. El acumulado histórico supera los 1,800 proyectos LEED certificados en el país.'),

  makeBlock('b07', 'El sector industrial es el motor de esa adopción. El primer edificio industrial LEED en México fue EcoLogistics 1 de Hines en San Luis Potosí, certificado Core & Shell, con resultados documentados de 19% de ahorro en costo energético versus línea base y 20% de reducción en consumo de agua interior. En 2024, Tlalnepark IV Nave 2 —de aproximadamente 34,835 m², propiedad de FUNO con Axo como inquilino, en Tlalnepantla— se convirtió en el primer proyecto industrial de manufactura LEED v5 beta Gold del mundo. En Monterrey, la planta Genie/Terex opera con certificación LEED Gold manufactura con 10 líneas de producción activas.'),

  makeBlock('b08', 'Los desarrolladores institucionales lideran la adopción a escala. Prologis opera desde 2002 en México; al tercer trimestre de 2024 tenía 25 edificios certificados de 28 registrados, representando el 88% de su portafolio activo, y utiliza el LEED Volume Program para reducir costos de certificación mediante procesos estandarizados. VESTA sumó 11 nuevos edificios LEED más 20 certificaciones EDGE en 2024, con aproximadamente el 39% de su GLA total con alguna certificación verde. En Baja California, Prologis Tijuana Gateway 1 —de 33,000 m² aproximadamente— alcanzó 42 puntos LEED v4 BD+C Core & Shell; los parques top de Tijuana (Atisa, FINSA, VESTA, Prologis) incorporan LEED como estándar en construcción nueva.'),

  makeH2('h03', 'La presión ESG que convirtió LEED de opción a requisito'),

  makeBlock('b09', 'La razón por la que LEED pasó de diferenciador premium a requisito operativo en menos de cinco años no está en la física del ahorro energético: está en la presión regulatoria sobre los inquilinos corporativos. La Corporate Sustainability Reporting Directive de la Unión Europea, en vigor desde 2024 para grandes empresas y aplicable desde 2026 para medianas, exige reportar emisiones de Scope 1, 2 y 3 incluyendo instalaciones arrendadas. Una empresa alemana con una nave de manufactura en Tijuana tiene que incluir las emisiones de esa nave en su reporte CSRD, sin excepción.'),

  makeBlock('b10', 'El mecanismo práctico es directo: si el edificio no tiene datos de desempeño energético certificados por un tercero —lo que LEED, en su alcance, provee—, el inquilino tiene que usar factores de emisión estimados, que son más conservadores y generan un reporte de mayor huella de carbono. Un edificio LEED, especialmente bajo v4.1 o v5, facilita el reporte de emisiones con datos verificados, lo que reduce la huella reportable y el riesgo de auditoría regulatoria.'),

  makeBlock('b11', 'En los mercados de capitales, la presión viene de los grandes inversionistas institucionales. BlackRock, Vanguard y fondos similares han formalizado criterios ESG en sus políticas de inversión. La SEC ha avanzado en requerimientos de divulgación climática para empresas cotizadas en Estados Unidos. En México, la CNBV adoptó los estándares del ISSB y la Bolsa Mexicana de Valores ya incluye recomendaciones ESG en sus lineamientos de gobierno corporativo. El resultado es que los directores de Supply Chain que alquilan naves en México están recibiendo presión de sus corporativos para operar en edificios con certificación verificable, y esa presión llega a los contratos de arrendamiento como cláusula, no como preferencia.'),

  makeH2('h04', 'Lo que el certificado no garantiza: la brecha entre diseño y operación'),

  makeBlock('b12', 'El argumento más importante que un CFO o un director de Supply Chain debería conocer antes de asignar valor a una certificación LEED es el siguiente: la mayoría de las certificaciones industriales en México corresponden al rating system BD+C —Buildings Design and Construction—, que evalúa el edificio tal como fue diseñado, no tal como opera. Un edificio puede ser certificado LEED Gold en diseño y consumir energía como un edificio convencional una vez que el inquilino instala su proceso productivo, sus equipos de HVAC específicos, y modifica los sistemas de iluminación para adaptarlos a sus turnos de operación.'),

  makeBlock('b13', 'Un estudio de la Universidad de Maryland que analizó 10,557 edificios no encontró diferencia estadísticamente significativa en consumo real de agua entre edificios LEED y edificios convencionales. La brecha entre lo que el diseño prometía y lo que la operación entregó fue consistente en la muestra. Este hallazgo no invalida a LEED como sistema —los datos de ahorro energético documentados en proyectos como EcoLogistics 1 son reales—, pero señala que el certificado es una condición necesaria para el ahorro, no una condición suficiente. La operación del inquilino determina si el desempeño proyectado en diseño se materializa o no.'),

  makeBlock('b14', 'LEED v5, actualmente en beta, está diseñado específicamente para cerrar esta brecha: incorpora métricas de desempeño en operación real, no solo en diseño. Hasta que v5 sea el estándar dominante, la pregunta correcta que un arrendatario debería hacerle al desarrollador no es "¿tiene LEED?", sino "¿cuántos puntos obtuvo en la categoría de Energía y Atmósfera, y puedo ver el scorecard completo?". Un edificio con 18 puntos en esa categoría es estructuralmente diferente a uno con 6 puntos, aunque ambos estén certificados Silver.'),

  makeH2('h05', 'El cálculo para el CFO: prima de renta versus ahorro real'),

  makeBlock('b15', 'El costo de obtener y construir con certificación LEED es cuantificable. Las tasas del USGBC para registro y certificación de una nave de 10,000 m² rondan los 4,800 a 5,900 dólares. El costo de un consultor LEED oscila entre 10,000 y 50,000 dólares según la complejidad del proyecto. La prima de construcción varía por nivel: Certified añade entre 1% y 3% al costo base, Silver entre 2% y 5%, Gold entre 3% y 8%, y Platinum puede superar el 15%. Para una nave de 10,000 m² con un costo base de aproximadamente 600 dólares por metro cuadrado, alcanzar la certificación Silver implica entre 32,000 y 90,000 dólares adicionales sobre el costo de construcción convencional. El USGBC estima que el costo total de certificación equivale a aproximadamente el 2% del costo total de construcción.'),

  makeBlock('b16', 'Del lado del beneficio, los datos del mercado mexicano muestran una prima de renta de hasta 11% para naves LEED versus convencionales —dato de MLC. En Tijuana, donde la renta de clase A para naves convencionales se ubica en el rango de 7.50 a 9.00 dólares por metro cuadrado al mes, una nave LEED puede ubicarse en el extremo superior o por encima de ese rango. Para un espacio de 5,000 m², la diferencia puede representar aproximadamente 4,400 dólares mensuales adicionales versus una nave convencional equivalente. Los edificios LEED también presentan en promedio 10.1% menos gastos operativos versus convencionales, según un estudio de CBRE de 2018.'),

  makeBlock('b17', 'El análisis correcto para un CFO es el de retorno sobre el costo adicional. Si el ahorro energético real para una operación de 5,000 m² se ubica entre 3,000 y 5,000 dólares mensuales —rango consistente con la reducción del 25% al 50% en consumo documentada en naves LEED de manufactura—, ese ahorro puede compensar o incluso superar la prima mensual de renta. El umbral de rentabilidad depende de la intensidad energética del proceso productivo del inquilino: una operación de manufactura electrónica con alta densidad de maquinaria y aires acondicionados de precisión obtiene más beneficio de la envolvente eficiente de un edificio LEED que una operación de almacenamiento de baja intensidad energética.'),

  makeH2('h06', 'La pregunta correcta al evaluar una nave certificada'),

  makeBlock('b18', 'La evaluación rigurosa de una nave LEED requiere ir más allá del nivel de certificación. El primer paso es solicitar el scorecard completo, que desglosa los puntos obtenidos categoría por categoría. Los créditos de alta relevancia operativa son los de Energía y Atmósfera —que incluyen eficiencia en el sistema de iluminación, eficiencia en sistemas HVAC, monitoreo de desempeño energético y uso de energías renovables— y los de Eficiencia Hídrica. Los créditos de baja relevancia operativa incluyen acceso a transporte público, estacionamiento preferencial para vehículos eléctricos, o señalización educativa sobre sostenibilidad. Ambos grupos suman hacia la certificación; solo el primero tiene impacto en los costos operativos del inquilino.'),

  makeBlock('b19', 'El segundo factor es el rating system utilizado. Un BD+C Core & Shell certifica el diseño del edificio base; un LEED O+M certifica la operación real. Para un arrendatario que ya está en un edificio y quiere validar el desempeño real, la ruta correcta es O+M. Para un arrendatario evaluando un edificio nuevo, la distinción relevante es si el desarrollador ha incorporado sistemas de monitoreo continuo de energía —subcontadores por área, tableros de desempeño accesibles—, que son los que permiten verificar en operación que el diseño está entregando los ahorros proyectados.'),

  makeBlock('b20', 'Existe también la alternativa EDGE —de IFC y el Banco Mundial—, que exige una mejora mínima del 20% en energía, agua y materiales, con un costo de certificación significativamente menor que LEED. VESTA tiene 20 edificios certificados EDGE en su portafolio. La limitación de EDGE es su reconocimiento internacional más restringido: para empresas que necesitan reportar bajo CSRD o ante inversionistas institucionales estadounidenses, LEED tiene mayor aceptación como estándar verificable. Para operaciones sin esa presión regulatoria, EDGE puede ofrecer los ahorros operativos a menor costo de certificación.'),

  // Cierre con mención natural de Grupo Nelson
  makeBlock('b21', 'El mercado industrial en Baja California —donde los desarrolladores líderes incorporan LEED como estándar en construcción nueva— ofrece actualmente la combinación de oferta certificada y presión regulatoria que hace de esta pregunta algo concreto, no académico. Evaluar una nave industrial hoy significa evaluar si su certificación corresponde a ahorros reales o a puntos de cumplimiento, si el scorecard muestra solidez en energía o en categorías de bajo impacto operativo, y si el desarrollador puede entregar datos de desempeño verificados en operación. El equipo de Grupo Nelson, con experiencia en el mercado industrial de Mexicali y Baja California, trabaja con esta información desde la etapa de evaluación de espacios —porque la diferencia entre un LEED que ahorra y uno que solo certifica puede representar decenas de miles de dólares anuales en costos operativos.'),

  // Bloque de fuentes
  makeBlock('b_fuentes', 'Fuentes: GBCI, ranking mundial de certificaciones LEED 2024; USGBC, fees de registro y certificación v4.1; Hines, EcoLogistics 1 San Luis Potosí — resultados documentados; GBCI, Tlalnepark IV Nave 2 LEED v5 beta Gold (2024); Prologis Mexico / FIBRA Prologis, Q3 2024 portfolio report; VESTA, reporte anual Q4 2024; CBRE, Green Premium in Industrial Real Estate (2018); CBRE, green leasing criteria survey; Universidad de Maryland, estudio comparativo LEED vs. no-LEED consumo agua (10,557 edificios); MLC, prima de renta naves LEED México; ERKE Consultancy, LEED v4 vs. v4.1 — ASHRAE 90.1-2016; IFC / GBCI, EDGE certification program; Comisión Europea, Corporate Sustainability Reporting Directive (CSRD) 2024; SEC, Climate-Related Disclosures Rule; CNBV, adopción estándares ISSB México; Bolsa Mexicana de Valores, lineamientos ESG; Tijuana EDC, industrial market data Baja California 2024; Solili, Mercado industrial Tijuana — rentas clase A 2024.'),
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
