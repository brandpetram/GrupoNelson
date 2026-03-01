/**
 * Parcha el post de blog: Sismicidad en Baja California: Lo que Todo Ingeniero de Planta Debe Saber Antes de Firmar
 * Documento ID: uqKP1CJoSsgXdCXPUwMM5i
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMM5i'

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

const description = 'Baja California concentra algunas de las fallas más activas de México. Antes de firmar un contrato de arrendamiento o compra de nave industrial en Mexicali o Tijuana, un ingeniero de planta necesita entender qué dice la norma, qué ocurrió en 2010 y qué cinco preguntas no puede dejar sin respuesta.'

const blocks = [
  // Apertura
  makeBlock('b01', 'El 4 de abril de 2010, a las 15:40 hora local, un sismo de magnitud Mw 7.2 sacudió el sur del Valle de Mexicali. La ruptura, conocida como El Mayor-Cucapah, liberó energía equivalente a miles de bombas atómicas y provocó daños totales superiores a 8,644 millones de pesos —cerca de 684 millones de dólares en valores de 2010—. Una planta aeroespacial manufacturera ubicada en Mexicali proyectó pérdidas de más de un millón de dólares por cada día de cierre. La nave no había colapsado. El problema no era estructural: era la interrupción de electricidad, agua y cadena de suministro. Ese es el dato que los modelos de ocupación de naves industriales rara vez incorporan, y es también el punto de partida correcto para cualquier ingeniero de planta evaluando instalaciones en Baja California.'),

  makeH2('h01', 'Baja California sobre el mapa sísmico: qué hace única a esta región'),

  makeBlock('b02', 'La mayoría de los sismos destructivos de México —Guerrero, Oaxaca, Chiapas— se originan en zonas de subducción: la Placa de Cocos hundiéndose bajo la Placa Norteamericana. Baja California es estructuralmente diferente. El estado opera sobre una frontera transformante, el mismo tipo de límite que define la Falla de San Andrés en California. Aquí las placas del Pacífico y Norteamérica se deslizan lateralmente una contra la otra, sin subducción de por medio.'),

  makeBlock('b03', 'Ese deslizamiento lateral se concentra en un sistema de fallas activas que atraviesa la región. La Falla Cerro Prieto, que cruza el Valle de Mexicali, acumula una tasa de deslizamiento de entre 28.2 y 40 milímetros por año dependiendo del segmento —una de las tasas más altas medidas en México—. La Falla Imperial registra 32.7 ± 0.9 mm/año. El sistema San Miguel-Vallecitos, que afecta la zona de Tijuana, acumula entre 4 y 6 mm/año a lo largo de unos 220 kilómetros de extensión. En conjunto, las fallas Cerro Prieto y Laguna Salada concentran aproximadamente el 90% del movimiento relativo total entre ambas placas en esta región.'),

  makeBlock('b04', 'Esta geometría tiene consecuencias directas para el diseño estructural: los sismos son relativamente superficiales, las aceleraciones en campo cercano son elevadas, y el suelo del Valle de Mexicali amplifica las ondas sísmicas de manera significativa. No es una variable que se pueda ignorar en la evaluación de una nave.'),

  makeH2('h02', 'La frecuencia que los modelos actuariales sí calculan'),

  makeBlock('b05', 'El Municipio de Mexicali registra aproximadamente 2,700 sismos por año de todos los tamaños. La mayoría son microsismos imperceptibles. Lo relevante para la operación industrial es la frecuencia de eventos moderados y grandes: un sismo de magnitud Mw ≥ 5.0 ocurre en promedio cada 1.3 años en la región —casi una vez al año—. Un evento Mw ≥ 6.0 ocurre aproximadamente cada 6.4 años. Un evento Mw ≥ 7.0, de consecuencias potencialmente severas, tiene una frecuencia estimada de una vez cada 62.5 años en promedio.'),

  makeBlock('b06', 'Para Tijuana, la actividad sísmica moderada es menos frecuente pero no despreciable: se han documentado al menos cinco sismos de magnitud mayor a 5.0 desde 1970, con una ocurrencia estimada cada 10 a 15 años para ese umbral. Ninguna de estas cifras es alarmante por sí sola —muchas regiones industriales del mundo operan con peligro sísmico comparable—. El punto es que los modelos actuariales de aseguradoras industriales como FM Global sí incorporan estas frecuencias en sus cálculos de Probable Maximum Loss. Un ingeniero de planta que firma un contrato de arrendamiento sin conocerlas está operando con información incompleta.'),

  makeBlock('b07', 'La historia registrada confirma la magnitud del riesgo. En 1892, un sismo M 7.3 en Laguna Salada fue el mayor evento histórico de la región antes de 2010. En 1940, un sismo de M 6.9 a 7.1 en el Valle de Mexicali causó daños estructurales severos. En 1956, la ruptura de la Falla San Miguel generó 20 kilómetros de fractura superficial con un desplazamiento lateral de 115 centímetros. El catálogo sísmico de Baja California no es un registro de eventos aislados; es un patrón sistemático.'),

  makeH2('h03', 'El Mayor-Cucapah 2010: lo que los datos de campo enseñaron'),

  makeBlock('b08', 'El sismo de 2010 es el evento de referencia obligado para cualquier análisis de riesgo en Baja California, no por su singularidad, sino porque generó el conjunto de datos de campo más completo disponible para la región. El epicentro se ubicó aproximadamente 60 kilómetros al sur-sureste de Mexicali, a unos 10 kilómetros de profundidad —condición de campo cercano con aceleraciones elevadas—.'),

  makeBlock('b09', 'Los efectos documentados por el Geo-Engineering Extreme Events Reconnaissance (GEER) y el USGS incluyeron licuefacción generalizada en prácticamente todo el Valle de Mexicali: hundimientos diferenciales, volcanes de arena, fisuras longitudinales. El acueducto principal que conduce agua del Río Colorado a Tijuana se fracturó, interrumpiendo el suministro. Una línea de transmisión eléctrica hacia Tijuana resultó dañada, así como la subestación Rosita. Más de 60,000 hectáreas de cultivos en el Valle de Mexicali fueron afectadas.'),

  makeBlock('b10', 'Las inspecciones post-sismo identificaron cuatro factores recurrentes en los daños a estructuras industriales: espectros de diseño inapropiados para el tipo de suelo del sitio, errores constructivos, supervisión deficiente durante la obra, y calidad de materiales por debajo de especificación. Ninguno de estos factores era inevitable. Todos eran verificables antes del evento con una revisión técnica adecuada. El dato relevante para un ingeniero de planta: un análisis publicado en MDPI Applied Sciences (2024) sobre espectros específicos de sitio en Mexicali encontró que los registros del evento 2010 superaron las predicciones del espectro normativo de la CFE para estructuras rígidas —es decir, para períodos cortos característicos de estructuras de acero—. El espectro de diseño estándar no era representativo del comportamiento real del suelo en esa región para ese tipo de estructuras.'),

  makeH2('h04', 'Zona D, Suelo Tipo III: lo que dice la norma y lo que implica en obra'),

  makeBlock('b11', 'Baja California está clasificada como Zona Sísmica D bajo las Normas Técnicas Complementarias de Diseño Sísmico de SIDURT BC (2017) —el nivel de mayor peligro sísmico en México—. Esta clasificación establece coeficientes sísmicos de diseño que varían según el tipo de suelo del sitio. Para edificios industriales (Grupo B), los coeficientes son: Suelo Tipo I (roca) 0.29, Suelo Tipo II (transición) 0.36, y Suelo Tipo III (suelo blando, condición predominante en el Valle de Mexicali) 0.44.'),

  makeBlock('b12', 'Traducido a términos de ingeniería de obra: una nave industrial ubicada en Zona D con suelo Tipo III debe ser capaz de resistir fuerzas laterales equivalentes al 44% de su peso total. Eso no es un detalle de diseño marginal; define el dimensionamiento de las conexiones, el sistema de diafragma de cubierta y el detallado de los vínculos muro-cubierta en construcciones tilt-up.'),

  makeBlock('b13', 'El suelo del Valle de Mexicali tiene una velocidad de onda de corte promedio (VS30) de aproximadamente 155 m/s, lo que lo clasifica como Suelo Tipo E bajo la norma NEHRP —clasificación de consistencia intermedia a blanda—. El período natural del sitio se estima en 0.77 segundos, lo que significa que estructuras con períodos naturales cercanos a ese valor están expuestas a amplificación resonante. La profundidad al basamento rocoso varía entre 42 y 926 metros dependiendo de la zona del municipio: esa variabilidad importa para el diseño específico del sitio.'),

  makeBlock('b14', 'En términos de costo, la diferencia entre diseñar correctamente para Zona D con Suelo Tipo III versus diseñar para una zona de menor peligro sísmico representa aproximadamente un 10 a 20% adicional en el costo de la estructura. Es una cifra relevante, pero que debe compararse con las pérdidas potenciales de una interrupción operativa de varios días. Desarrolladores internacionales como Prologis y FIBRA Monterrey con operaciones en la región frecuentemente aplican ASCE 7-22 como referencia complementaria a la norma mexicana.'),

  makeBlock('b15', 'Dos sistemas constructivos predominan en la nave industrial de BC: tilt-up y estructura metálica. En tilt-up, el elemento crítico bajo carga sísmica es la conexión entre el panel de concreto y el diafragma horizontal de cubierta. Un tilt-up mal detallado en Zona D puede colapsar por separación del muro —el panel "vuela" hacia afuera—, mecanismo de falla documentado en California durante los años setenta y noventa antes de que se actualizaran los códigos. Con el detallado correcto, el historial de desempeño sísmico del tilt-up en California —zona sísmica comparable— es sólido. En estructura metálica, la ductilidad del acero es la ventaja principal: el material se deforma antes de colapsar, disipando energía sísmicamente. Los marcos a momento resistente proporcionan mayor disipación de energía que el arriostramiento simple, y son la solución preferida cuando el presupuesto y el programa lo permiten.'),

  makeH2('h05', 'Lo que la estructura no protege: pérdidas no estructurales en un sismo real'),

  makeBlock('b16', 'El caso de la planta aeroespacial de Mexicali en 2010 ilustra una distinción que los seguros estructurales tradicionales no cubren adecuadamente: la diferencia entre colapso estructural y pérdida operativa. La nave no colapsó. El proceso de manufactura se detuvo igual.'),

  makeBlock('b17', 'Las fuentes de interrupción no estructural en un sismo de magnitud relevante incluyen: corte del suministro eléctrico por daño a subestaciones o líneas de transmisión (plantas sin generación de emergencia quedan fuera de operación independientemente del estado de su estructura), interrupción del suministro de agua por fractura de acueductos regionales, daño a equipos de producción no anclados sísmicamente, colapso de racks de almacenamiento, ruptura de tuberías de proceso, y daño a sistemas de supresión de incendios.'),

  makeBlock('b18', 'FM Global Data Sheet 1-2 (2024) establece criterios específicos para la protección sísmica de equipos, sistemas de racks, tuberías y elementos no estructurales en instalaciones industriales. El FM Global Approval Standard 1950 define requerimientos para componentes no estructurales resistentes a sismos. Estos documentos no son referencias opcionales para instalaciones de manufactura o logística en Zona D: definen el estándar mínimo que las aseguradoras industriales exigen para mantener cobertura plena en un evento sísmico. Un ingeniero de planta que negocia condiciones de arrendamiento sin revisar si la instalación cumple con estos estándares no estructurales está transfiriendo un riesgo financiero no cuantificado a su empresa.'),

  makeH2('h06', 'Due diligence sísmico antes de firmar: cinco preguntas no negociables'),

  makeBlock('b19', 'La evaluación de riesgo sísmico de una nave industrial en Baja California no requiere contratar un estudio geotécnico adicional para cada transacción —aunque en casos de inversión significativa ese paso es justificable—. Requiere, como mínimo, solicitar y revisar documentación específica y formular cinco preguntas al desarrollador o propietario antes de firmar.'),

  makeBlock('b20', 'Documentos mínimos a solicitar: primero, la memoria de cálculo estructural con el espectro de diseño utilizado, la zona sísmica asignada y los coeficientes empleados —si el documento no especifica zona sísmica y tipo de suelo, no es una memoria completa—. Segundo, los planos estructurales con sello de Director Responsable de Obra (DRO) con especialidad en estructuras. Tercero, el estudio de mecánica de suelos con análisis explícito de potencial de licuefacción —en suelos del Valle de Mexicali este análisis no es opcional, es obligatorio para una evaluación técnicamente responsable—. Cuarto, el certificado de terminación de obra emitido por SIDURT o el municipio correspondiente. Quinto, el proyecto ejecutivo de instalaciones MEP con arriostramiento sísmico explícito —no basta con que los sistemas existan; deben estar diseñados para resistir aceleraciones sísmicas—.'),

  makeBlock('b21', 'Las cinco preguntas que el desarrollador debe poder responder sin titubear:'),

  makeBlock('b22', 'Primera: ¿Qué coeficiente sísmico de diseño se utilizó y para qué tipo de suelo? Si la nave está ubicada en el Valle de Mexicali y la respuesta menciona Suelo Tipo I, hay una discrepancia que requiere explicación antes de continuar la conversación.'),

  makeBlock('b23', 'Segunda: ¿El estudio de mecánica de suelos incluye análisis de licuefacción? Un estudio que no lo incluya no es representativo de las condiciones del Valle de Mexicali.'),

  makeBlock('b24', 'Tercera: ¿La memoria de cálculo fue revisada por un DRO con especialidad estructural independiente del despacho que la elaboró? La revisión independiente es la diferencia entre una memoria firmada y una memoria verificada.'),

  makeBlock('b25', 'Cuarta: ¿Qué sistema estructural se utilizó y cuál es el factor de ductilidad Q considerado en el diseño? Un Q bajo implica que la estructura fue diseñada para respuesta prácticamente elástica; un Q alto implica que se confía en la ductilidad del sistema para disipar energía. Ambos son válidos, pero tienen implicaciones distintas para el comportamiento esperado durante un sismo severo.'),

  makeBlock('b26', 'Quinta: ¿Los sistemas MEP tienen arriostramiento sísmico explícito documentado en el proyecto ejecutivo? Si la respuesta es "sí, cumplimos con la norma" sin poder mostrar el documento, no es una respuesta técnica suficiente.'),

  makeBlock('b27', 'En inspección visual, las señales de alerta que justifican solicitar información adicional antes de avanzar incluyen: fisuras diagonales en las esquinas de paneles de concreto, desalineación de columnas respecto a los ejes de proyecto, conexiones muro-cubierta sin placa metálica visible o con corrosión avanzada, paneles tilt-up sin juntas de expansión selladas, y rellenos de fisuras previas sin registro documental.'),

  makeBlock('b28', 'Para transacciones de mayor escala, la metodología PML (Probable Maximum Loss) proporciona un marco cuantitativo: el SEL (Scenario Expected Loss) estima la pérdida media para el escenario sísmico de diseño, mientras que el SUL (Scenario Upper Loss) corresponde al percentil 90 de pérdidas esperadas. Estas métricas son el lenguaje que los departamentos de riesgos corporativos y las aseguradoras industriales usan para evaluar exposición; un ingeniero de planta que maneja esta terminología en la negociación técnica opera en el mismo registro que sus contrapartes.'),

  // Cierre con mención natural de Grupo Nelson
  makeBlock('b29', 'Evaluar una nave industrial en Baja California con rigor sísmico no es un ejercicio académico ni una exigencia burocrática. Es la diferencia entre una operación que resiste un evento Mw 6.5 con días de interrupción gestionable y una que enfrenta semanas de cierre no planificado por daños evitables. El análisis correcto empieza antes de firmar: con los documentos correctos sobre la mesa, las preguntas correctas formuladas y la claridad de que la estructura es solo una parte del riesgo total. Grupo Nelson trabaja con sus clientes para incorporar este nivel de análisis técnico desde la evaluación inicial de sitio, antes de que los plazos de negociación acorten el espacio para la diligencia debida.'),

  // Bloque de fuentes
  makeBlock('b_fuentes', 'Fuentes: CICESE Red de Acelerógrafos del Noroeste de México (RANM); CENAPRED, Impacto Socioeconómico de los Principales Desastres Ocurridos en México 2021; GEER Association, Preliminary Reconnaissance Report: 4 April 2010 Mw 7.2 El Mayor-Cucapah Earthquake; USGS, Liquefaction Observations During the April 4, 2010 El Mayor-Cucapah Earthquake; MDPI Applied Sciences 2024, Site-Specific Seismic Hazard and Spectra for Mexicali Valley; Temblor.net, Seismic Hazard Baja California; SIDURT BC, Normas Técnicas Complementarias Diseño Sísmico 2017; First Onsite, Industrial Plant Earthquake Impact Case Study Mexicali; FM Global Data Sheet 1-2, Earthquake Protection, 2024; FM Global Approval Standard 1950, Seismic Resistant Non-Structural Components; SGH, Seismic Risk Assessments for Industrial Facilities; VolcanoDiscovery, Estadísticas Sísmicas Mexicali; ASCE/SEI 7-22, Minimum Design Loads and Associated Criteria for Buildings and Other Structures; Wikipedia, Terremoto de Baja California de 2010.'),
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
