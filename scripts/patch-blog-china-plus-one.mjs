/**
 * Parcha el post de blog: La Estrategia China+1 y Por Qué Mexicali Es el Destino Preferido
 * Documento ID: 4lXD1QprlKmqniOHakmJJG
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmJJG'

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

const description = 'China+1 dejó de ser una estrategia de cobertura para convertirse en un imperativo ejecutivo. Este análisis explica por qué México supera a Vietnam e India como destino de relocalización, y qué hace a Mexicali el punto de entrada más competitivo dentro de México.'

const blocks = [
  makeBlock('b01', 'En 2018, la administración Trump impuso aranceles Section 301 que afectaron aproximadamente el 67% de las exportaciones chinas hacia Estados Unidos. Muchos directores de supply chain los trataron como un evento político transitorio. Planificaron en torno a ellos, absorbieron el costo incremental y esperaron. La administración Biden no los revirtió. La administración Trump 2.0 los profundizó. Para diciembre de 2025, el arancel efectivo promedio sobre importaciones chinas llegó a 33.4%, según datos del Peterson Institute for International Economics.'),
  makeBlock('b02', 'El cálculo que funcionó en 2019 —"esperamos que pase"— ya no es viable. Lo que era una estrategia de cobertura se convirtió en un imperativo estructural. China+1 no es una tendencia de nearshoring: es una reconfiguración de largo plazo de las cadenas de valor globales, y las empresas que la están ejecutando hoy tienen ventajas de posicionamiento sobre las que llevan dos años más en la lista de espera.'),
  makeBlock('b03', 'Este análisis examina los mecanismos concretos de esa reconfiguración: por qué México emerge como el destino más competitivo, qué hace a Mexicali diferente dentro de México, y qué riesgos reales debe incluir cualquier análisis serio antes de comprometer capital.'),

  makeH2('h01', 'De estrategia de riesgo a imperativo ejecutivo'),
  makeBlock('b04', 'La estrategia China+1 —mantener operaciones en China mientras se desarrolla capacidad productiva alternativa en un segundo país— se formalizó como concepto de gestión de riesgo alrededor de 2013, cuando varias empresas del sector electrónico comenzaron a desarrollar proveeduría complementaria en Vietnam y Tailandia. La guerra comercial de 2018 la aceleró. COVID-19 fue el catalizador definitivo.'),
  makeBlock('b05', 'Los datos del período post-pandemia reflejan un cambio de magnitud. Según Gartner, en 2020 el 33% de los líderes de supply chain ya habían movido manufactura fuera de China o tenían planes concretos de hacerlo. Para 2024, Gartner reportó que el 73% de las empresas habían añadido o removido locaciones de producción en los dos años previos. McKinsey documentó en 2023 que el 64% de las empresas estaban regionalizando su cadena de suministro —frente al 44% el año anterior—, y que el 89% de las empresas con dependencia concentrada en una sola región querían reducir esa dependencia. Deloitte encontró en 2024 que el 86.2% de los fabricantes habían trabajado activamente en de-risking de su cadena de suministro.'),
  makeBlock('b06', 'Estos no son datos de intención. Son datos de acción ejecutada. La variable que explica la aceleración no es solo arancelaria: es geopolítica. Un eventual bloqueo del Estrecho de Taiwán podría causar una disrupción estimada en 2.7 billones de dólares al PIB mundial —equivalente al 2.8% del producto global, según análisis de Bloomberg Economics—, y TSMC concentra el 62% de la producción mundial de semiconductores avanzados. Para un director de supply chain en el sector electrónico o aeroespacial, esa concentración es un riesgo sistémico que ningún CFO aprueba mantener indefinidamente en el balance.'),
  makeBlock('b07', 'La inversión extranjera directa hacia China cuenta la historia desde otro ángulo. En 2024, la IED en China cayó 29%, situándose 40% por debajo del pico de 2022. En el segundo trimestre de 2024, el flujo neto de IED en China fue de -14,800 millones de dólares: las salidas superaron las entradas. Foxconn redujo sus proyectos greenfield en China de 23 a 6. Samsung, de 9 a 1.'),

  makeH2('h02', 'Por qué México, no Vietnam ni India'),
  makeBlock('b08', 'Vietnam fue durante varios años la respuesta instintiva a la pregunta "¿dónde ponemos el +1?". Tiene costos laborales competitivos, una clase política que activamente corteja inversión manufacturera y un perfil geográfico cercano a los puertos del Pacífico. Pero tiene tres problemas estructurales que se vuelven críticos a escala.'),
  makeBlock('b09', 'El primero es energético. La demanda eléctrica en Vietnam crece entre 10.5% y 13% anual, según datos de la Agencia Internacional de Energía, y la infraestructura de generación no sigue ese ritmo. Los cortes programados y no programados afectan regularmente a parques industriales. Para manufactura de precisión —aeroespacial, electrónica, medtech—, la continuidad eléctrica no es negociable.'),
  makeBlock('b10', 'El segundo problema es que Vietnam, operativamente, no resuelve la dependencia de China: la resuelve en papel y la mantiene en práctica. La mayoría de sus cadenas de manufactura siguen dependiendo profundamente de insumos chinos, lo que significa que una disrupción en China también afecta la producción en Vietnam. China+1 con Vietnam como "+1" es, en muchos sectores, China+0.8.'),
  makeBlock('b11', 'India tiene un perfil diferente pero con sus propias fricciones estructurales. Sus costos logísticos representan el 13% del PIB —versus el 8% en China y el 7% en economías desarrolladas—, lo que erosiona de forma sistemática cualquier ventaja en costo laboral. Las regulaciones sobre escala de empleo —empresas con más de 100 trabajadores enfrentan restricciones significativas para reducir plantilla— complican los modelos de manufactura flexible. Y los tiempos de tránsito a Estados Unidos son 5-10% más lentos que desde China, sin contar el diferencial con México.'),
  makeBlock('b12', 'México ofrece una combinación que ninguno de los dos puede replicar. El costo laboral manufacturero es de aproximadamente 4.50 dólares por hora —por debajo de los 6.50 dólares de China—, con tránsito a Estados Unidos de 4 a 8 días por carretera versus 25 a 35 días de flete marítimo desde Asia. El acceso duty-free bajo USMCA elimina el componente arancelario que hace costosa la manufactura china. Y el programa IMMEX permite la importación temporal de insumos sin pago de aranceles ni IVA para operaciones de exportación, creando una estructura de costos que los modelos chinos con destino a EE.UU. ya no pueden igualar después de los aranceles Section 301.'),
  makeBlock('b13', 'El resultado visible: México superó a China como mayor importador de Estados Unidos en 2023 —475,000 millones de dólares versus 427,200 millones de China—, la primera vez en más de veinte años que eso ocurría. En 2025, la IED total hacia México alcanzó 40,900 millones de dólares, un nuevo récord histórico.'),

  makeH2('h03', 'Qué hace a Mexicali diferente dentro de México'),
  makeBlock('b14', 'México es un mercado de manufactura con alta dispersión interna de calidad. Monterrey, Saltillo, Querétaro, el Bajío y Baja California tienen perfiles industriales muy distintos en términos de profundidad de cluster, disponibilidad de talento técnico y acceso al mercado estadounidense. Dentro de Baja California, la ventaja de Mexicali frente a otras opciones del interior del país tiene componentes que no se improvisan.'),
  makeBlock('b15', 'El más difícil de replicar es el cluster aeroespacial. Mexicali tiene 50 años de historia en manufactura aeroespacial —el más antiguo de México—, con más de 100 empresas del sector en el corredor Tijuana-Mexicali y más de 30,000 empleos directos en la industria en el estado. Collins Aerospace lleva aproximadamente 50 años en la ciudad. Chromalloy, 72 años en la región. Honeywell opera un túnel de viento para pruebas de componentes para Boeing y Airbus. Gulfstream, que acaba de formalizar una inversión de 370 millones de dólares para una nueva planta de 540,000 pies cuadrados y 1,500 empleos en el Parque Nelson II, suma 65 años de presencia en Baja California.'),
  makeBlock('b16', 'Esos años no son una estadística ceremonial. Son décadas de ingenieros y técnicos formados en tolerancias aeroespaciales, proveedores locales calificados con certificaciones AS9100, y una cadena de suministro regional que una empresa nueva no puede construir en tres años de operación. Para un VP de Operaciones que evalúa dónde instalar capacidad de manufactura de precisión, ese ecosistema acumulado pesa diferente a un parque industrial nuevo con incentivos fiscales.'),
  makeBlock('b17', 'El sector en su conjunto refleja la tracción de ese ecosistema. Las exportaciones aeroespaciales de México alcanzaron un récord de 9,400 millones de dólares en 2023, con estimados superiores a 10,700 millones para 2024. México es hoy el cuarto mayor exportador mundial de productos aeroespaciales. El crecimiento anual promedio del sector en los últimos 10 años ha sido del 17.2%.'),
  makeBlock('b18', 'En términos de escala industrial directa, Mexicali alberga 124 maquiladoras registradas ante INDEX, con aproximadamente 80,000 empleos directos en manufactura. La proximidad al mercado estadounidense es estructural: la I-8 conecta Mexicali con Los Ángeles en aproximadamente 130 millas, con acceso directo sin atravesar el área metropolitana de San Diego. Para rutas hacia Los Ángeles, Arizona o el corredor Phoenix-Tucson, esa geografía tiene valor logístico que rara vez aparece en los análisis comparativos de primer nivel.'),

  makeH2('h04', 'Las empresas chinas también ejecutan China+1'),
  makeBlock('b19', 'Hay un ángulo de la relocalización que sorprende a quienes lo encuentran por primera vez en los datos: una porción significativa de la demanda de espacio industrial en México proviene de empresas chinas que están ejecutando su propia estrategia de salida de China.'),
  makeBlock('b20', 'Según datos de AMPIP —la Asociación Mexicana de Parques Industriales Privados—, aproximadamente el 40% del crecimiento en demanda de parques industriales en México en los últimos años proviene de empresas con origen chino. No es un fenómeno marginal. Es una reconfiguración estratégica: fabricantes chinos que construyen capacidad productiva en México para mantener acceso al mercado estadounidense bajo el paraguas del USMCA, que les permite evitar los aranceles Section 301 mientras continúan sirviendo a sus clientes norteamericanos.'),
  makeBlock('b21', 'La inversión extranjera directa de origen chino en México alcanzó su máximo de 13 años en 2023, con 5,600 millones de dólares. No toda esa inversión es manufactura —hay capital en logística, distribución y otros sectores—, pero el patrón es coherente con el movimiento de capacidad productiva hacia México como hub de acceso al mercado estadounidense.'),
  makeBlock('b22', 'Este fenómeno tiene implicaciones para las empresas que evalúan México como destino: la demanda de espacio industrial no está impulsada solo por empresas occidentales relocalizando desde China, sino también por el propio capital chino que busca posicionarse dentro del perímetro USMCA. Eso presiona la disponibilidad de espacio, particularmente en los mercados fronterizos más maduros. Para una empresa que está evaluando su entrada, el timing tiene implicaciones directas en las condiciones que encontrará disponibles.'),

  makeH2('h05', 'Los riesgos que hay que incluir en el análisis'),
  makeBlock('b23', 'Un análisis que no menciona los riesgos no es análisis: es promoción. México en general y Mexicali en particular tienen fricciones reales que deben entrar en cualquier modelo de decisión serio.'),
  makeBlock('b24', 'El primero es la velocidad de entrada de nuevos jugadores. Deloitte reportó en mayo de 2024 una caída del 75% en anuncios de inversión en México en el primer semestre de 2024 versus el mismo período de 2023. La interpretación más sólida de ese dato no es que el interés se evaporó —la IED ejecutada siguió creciendo—, sino que los nuevos entrantes entraron en modo de espera mientras procesaban los resultados electorales y las señales de política industrial del nuevo gobierno. Aproximadamente el 80% de la IED de 2024 provino de reinversión de utilidades de empresas ya establecidas. Las empresas que aún no están en México tuvieron menor actividad de entrada.'),
  makeBlock('b25', 'El segundo es la escasez de proveedores Tier 2 y Tier 3. En sectores como electrónica avanzada y aeroespacial de componentes complejos, la cadena de suministro local en México —incluyendo Mexicali— no tiene la profundidad que existe en el ecosistema chino, que tardó 30 años en construirse. Una empresa que asume que encontrará en Mexicali los mismos proveedores especializados que tiene en Shenzhen se va a decepcionar. El ecosistema existe, pero con alcance más limitado. México requiere inversión estimada de 400,000 millones de dólares en infraestructura para 2032 para atender adecuadamente la demanda proyectada.'),
  makeBlock('b26', 'El tercero, específico de Mexicali, es el agua. El Río Colorado está bajo presión creciente, y la asignación de agua para uso industrial en la región tiene una dimensión política que trasciende los permisos formales. El caso Constellation Brands —una planta cervecera de 1,400 millones de dólares cancelada en 2020 tras protestas ciudadanas sobre el uso del acuífero, a pesar de contar con todos los permisos en regla— es la ilustración más conocida de ese riesgo. Para manufactura aeroespacial o electrónica, el consumo hídrico es bajo y el riesgo es manejable. Para operaciones con alta demanda de agua, ese factor debe entrar explícitamente en el análisis de riesgo.'),
  makeBlock('b27', 'En cuanto a seguridad, el Crime Index de Mexicali es de 62.54 —por encima del promedio de ciudades mexicanas industriales, pero por debajo de Tijuana (71.30) y considerablemente por debajo de otras ciudades fronterizas de mayor visibilidad mediática. Las empresas establecidas en Mexicali operan con protocolos de seguridad privada estándar para la región, similares a los que aplican en otras ciudades industriales de México. No es un entorno sin riesgo, pero tampoco un entorno que disuada operaciones manufactureras establecidas.'),

  makeH2('h06', 'La pregunta que hay que responder antes de decidir'),
  makeBlock('b28', 'La mayor parte de los análisis de relocalización se estancan en el nivel de comparación de costos directos: costo laboral, renta industrial, aranceles diferenciales. Esos datos son necesarios pero no suficientes.'),
  makeBlock('b29', 'La pregunta que más frecuentemente determina si una relocalización funciona o no en los primeros tres años no es "¿cuánto cuesta el metro cuadrado?" sino "¿existe en este mercado el ecosistema de proveedores, talento técnico y certeza regulatoria que mi modelo de operación requiere para funcionar?" En el caso de manufactura aeroespacial o de alta precisión, la respuesta para Mexicali es sí —con la calificación importante de que ese ecosistema tiene profundidad en ciertos sectores y no en otros.'),
  makeBlock('b30', 'La segunda pregunta que define el éxito es de horizonte temporal. Las empresas que han construido operaciones exitosas en Mexicali —Collins Aerospace, Gulfstream, Chromalloy— llegaron con visión de décadas, no de ciclos presupuestales de tres años. El retorno de una operación industrial en la frontera se construye en cinco, diez, veinte años de profundización: talento que sube por la curva de aprendizaje, proveedores que se desarrollan a medida que la demanda crece, y una posición en el mercado inmobiliario industrial que se vuelve más costosa de replicar con cada año que pasa.'),
  makeBlock('b31', 'Para empresas que están comenzando ese análisis, la experiencia acumulada de un desarrollador con seis décadas en el mercado fronterizo puede acortar significativamente la curva de evaluación. Grupo Nelson ha visto llegar y escalar las mismas compañías que hoy sirven como referencia para cualquier análisis serio de Mexicali. Ese contexto tiene valor cuando las hojas de cálculo ya están completas y quedan preguntas que los datos públicos no responden.'),

  makeBlock('b_fuentes', 'Fuentes: Gartner Supply Chain Survey 2020 y 2024 · McKinsey Global Institute — Geopolitics and the Geometry of Global Trade 2023 · Deloitte 2024 Manufacturing Industry Outlook · Peterson Institute for International Economics — US-China Tariff Tracker 2025 · Bloomberg Economics — Taiwan Strait Disruption Scenario Analysis · McKinsey — Nearshoring: What Manufacturing Leaders Need to Know 2023 · AMPIP — Demanda de Parques Industriales en México 2024 · Secretaría de Economía — IED en México 2023 y 2025 · Agencia Internacional de Energía — Vietnam Electricity Demand Report 2025 · World Bank — Logistics Performance Index 2023 · INDEX Mexicali · American Industries Group — Exportaciones Aeroespaciales México 2024 · FEMIA — Industria Aeroespacial Mexicana 2023'),
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
