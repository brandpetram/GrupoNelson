/**
 * Parcha el post de blog: Mexicali vs. Tijuana
 * Documento ID: uqKP1CJoSsgXdCXPUwM01Z
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwM01Z'

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

const description = 'Tijuana tiene más escala. Mexicali tiene más agilidad. Un análisis basado en datos de mercado, infraestructura fronteriza y especialización industrial para ayudarte a elegir dónde instalar tu operación en Baja California.'

const blocks = [
  makeBlock('b01', 'Cuando un director de operaciones de manufactura evalúa Baja California como destino de inversión, la pregunta que invariablemente surge en las primeras reuniones es: ¿Tijuana o Mexicali? La respuesta instintiva, basada en reputación y escala, casi siempre apunta a Tijuana. Y en muchos casos, esa respuesta es correcta.'),
  makeBlock('b02', 'Pero en otros casos, no lo es.'),
  makeBlock('b03', 'Este artículo no pretende declarar un ganador. Pretende algo más útil: ayudarte a identificar cuál de los dos mercados se alinea mejor con tu modelo de negocio, tu industria, tu perfil logístico y tu tolerancia al riesgo. Tijuana es el mercado consolidado, con más opciones y una cadena de proveedores más densa. Mexicali es el mercado ágil, con costos más bajos, menor competencia por espacio y acceso a una ruta logística hacia Los Ángeles que muchas empresas subestiman.'),
  makeBlock('b04', 'La pregunta correcta no es cuál ciudad es más grande. Es cuál es mejor para tu operación.'),

  makeH2('h01', 'Escala vs. agilidad: la diferencia que define la elección'),
  makeBlock('b05', 'Tijuana es, por inventario, el mercado industrial dominante de la frontera norte de Baja California. Con 85.7 millones de pies cuadrados de espacio industrial al primer trimestre de 2025 —según datos de Newmark— y más de 600 sitios de manufactura activos, ofrece algo que ningún otro mercado fronterizo puede igualar: opciones. Si una empresa necesita 50,000 pies cuadrados disponibles mañana, Tijuana tiene probabilidades más altas de tenerlos.'),
  makeBlock('b06', 'Mexicali opera en otra escala. Su inventario ronda los 40 millones de pies cuadrados, con aproximadamente 151 plantas en sectores de manufactura avanzada, de acuerdo con datos de Cushman & Wakefield. En términos absolutos, eso es considerablemente menos. Pero hay un matiz que los números brutos no capturan: Mexicali ha crecido un 60% en inventario desde 2018 —de 25 a 40 millones de pies cuadrados—, lo que habla de un mercado en expansión acelerada, no en estancamiento.'),
  makeBlock('b07', 'La vacancia también cuenta una historia interesante. Tijuana cerró 2024 con una vacancia de alrededor del 3.6%, lo que en términos prácticos significa que el mercado estaba casi sin espacio disponible. Para finales de 2025, esa cifra subió al 8%, en parte porque el ritmo de construcción superó la absorción. Mexicali reportó 4.5% de vacancia en el cuarto trimestre de 2024, subiendo a 6.3% hacia finales de 2025. Ambos mercados siguen siendo relativamente ajustados, pero Mexicali ofrece históricamente más margen de negociación para el arrendatario.'),
  makeBlock('b08', 'Los datos sugieren que si la prioridad de tu operación es velocidad de entrada y múltiples opciones de espacio disponible, Tijuana es el punto de partida natural. Si la prioridad es eficiencia en costos, menor presión competitiva sobre el espacio y un mercado con inercia positiva, Mexicali merece una evaluación seria.'),

  makeH2('h02', 'El corredor fronterizo: dos accesos, dos lógicas'),
  makeBlock('b09', 'La frontera no es un punto. Es una línea con múltiples cruces, y cada cruce tiene una lógica logística diferente.'),
  makeBlock('b10', 'Otay Mesa, el principal cruce comercial de Tijuana, procesó más de 1.4 millones de camiones en 2024, consolidándose como el segundo puerto de entrada comercial más activo de toda la frontera Estados Unidos-México, según datos del Bureau of Transportation Statistics. Eso no es solo volumen: es infraestructura de apoyo, agencias aduanales consolidadas, corredores de transporte maduros y tiempos de cruce con cierto nivel de predictibilidad histórica. Para operaciones con destino al sur de California —San Diego, el corredor del condado de Orange, los puertos de Long Beach y Los Ángeles vía autopista— Otay Mesa tiene la inercia logística establecida. El proyecto Otay Mesa East, en construcción desde noviembre de 2025 con apertura estimada en 2027, añadirá capacidad significativa a ese corredor.'),
  makeBlock('b11', 'Calexico East, el cruce comercial de Mexicali, procesó aproximadamente 453,000 camiones en 2024 —un tercio del volumen de Otay Mesa— y generó alrededor de 20 mil millones de dólares en comercio anual, de acuerdo con datos de CBP e Imperial County Transportation Commission. En octubre de 2024 se completó la expansión del puente con carriles comerciales adicionales, financiada por GSA. La diferencia logística clave no es solo el volumen: es la ruta que sigue el camión una vez que cruza.'),
  makeBlock('b12', 'Desde Calexico East, los vehículos de carga acceden directamente a la I-8 hacia el este y hacia el oeste. El trayecto a Los Ángeles desde Mexicali por la I-8 es de aproximadamente 130 millas —unas 2 a 3 horas en camión en condiciones normales— sin atravesar el área urbana de San Diego. Para operaciones con destino a Los Ángeles, el interior de California, Arizona o el corredor Phoenix-Tucson, esta ruta puede representar una ventaja logística real que rara vez aparece en las comparaciones de primer nivel.'),
  makeBlock('b13', 'La elección del cruce no es un detalle secundario. Define la lógica de toda la cadena de suministro.'),

  makeH2('h03', 'Industrias: cada ciudad tiene su especialización y eso importa'),
  makeBlock('b14', 'Si tu empresa manufactura dispositivos médicos, la conversación empieza y casi termina en Tijuana. La región concentra más de 75 plantas de medtech con más de 55,000 empleados directos en el sector, incluyendo operaciones de Medtronic, Johnson & Johnson, Stryker y Boston Scientific. Eso no es solo presencia de empresas grandes: es un ecosistema de proveedores de segundo y tercer nivel, técnicos especializados en manufactura limpia, certificaciones ISO y FDA que el mercado laboral ya conoce, y una cadena de suministro local que tarda décadas en construirse. Tijuana es, por los datos disponibles, el hub de medtech más grande de Norteamérica.'),
  makeBlock('b15', 'Mexicali tiene una especialización diferente, igualmente profunda: aeroespacial. El cluster aeroespacial de Mexicali tiene aproximadamente 50 años de historia —uno de los más antiguos de México— y genera alrededor de 40,000 empleos directos en el sector en Baja California. Las operaciones de Gulfstream (General Dynamics) en Mexicali son un referente: su planta en el parque industrial Nelson II representa una inversión de 370 millones de dólares, 540,000 pies cuadrados y 1,500 empleos, formalizada en 2024. Collins Aerospace, subsidiaria de RTX, también opera en la ciudad. En electrónica de precisión, Skyworks mantiene operaciones con alrededor de 6,000 empleados en Mexicali, manufacturando componentes de radiofrecuencia para la cadena de suministro de empresas como Apple.'),
  makeBlock('b16', 'La implicación práctica es directa: si tu industria ya tiene presencia en alguna de las dos ciudades, el costo de entrar a ese mercado es sustancialmente menor. No solo porque el espacio físico ya existe, sino porque el talento ya está entrenado, los proveedores locales ya existen, y las autoridades regulatorias ya conocen los requerimientos de tu sector.'),

  makeH2('h04', 'Costo total de operación: más allá de la renta por metro cuadrado'),
  makeBlock('b17', 'La renta es la métrica más visible, pero raramente es la más determinante en el costo total de una operación industrial.'),
  makeBlock('b18', 'Dicho eso, la diferencia en renta entre las dos ciudades es real y consistente. En Mexicali, la renta mensual para espacio industrial oscila entre $0.34 y $0.56 dólares por pie cuadrado —equivalente a aproximadamente $6.58 USD por metro cuadrado según datos de Cushman & Wakefield de mediados de 2024. En Tijuana, el rango es de $0.48 a $0.78 dólares por pie cuadrado, con un promedio reportado por Solili de alrededor de $8.68 USD por metro cuadrado hacia finales de 2025. Esa diferencia de 20 a 30% en renta base se acumula de forma significativa en operaciones de largo plazo.'),
  makeBlock('b19', 'El costo laboral, para propósitos de comparación directa entre ambas ciudades, es esencialmente el mismo: el salario mínimo en la zona frontera norte es de $419.88 pesos diarios en 2025, y el costo horario total en manufactura de nivel básico —incluyendo prestaciones— ronda los $5.44 dólares por hora, según datos de Tetakawi 2025. Donde sí existe diferencia es en rotación laboral. Tijuana reporta tasas de rotación de hasta el 8% mensual —lo que proyectado anualmente supera el 100%— y un déficit estimado de 14,000 empleados en el sector manufacturero, de acuerdo con Tijuana EDC y datos de Tetakawi. Mexicali presenta históricamente rotación más baja, aunque sin una cifra exacta verificada disponible. El costo real de la rotación —reclutamiento, inducción, pérdida de productividad durante la curva de aprendizaje— puede superar fácilmente la diferencia en renta.'),
  makeBlock('b20', 'Hay un factor de riesgo que cualquier análisis serio de Mexicali debe incluir: el agua. El 80% del agua del Río Colorado asignada a México se destina a uso agrícola en el Valle de Mexicali, y en 2025 la asignación total a México se redujo en 50,000 acre-pies según la Comisión Internacional de Límites y Aguas. El caso Constellation Brands —cuya planta cervecera de 1,400 millones de dólares fue cancelada en 2020 tras protestas ciudadanas por uso de agua, a pesar de contar con todos los permisos regulatorios— ilustra que la disponibilidad hídrica no es solo una variable técnica: es una variable política y social. Para operaciones con alto consumo de agua, este factor debe entrar explícitamente en el análisis de riesgo. Para manufactura aeroespacial o electrónica, el consumo hídrico es generalmente bajo y el riesgo es manejable.'),
  makeBlock('b21', 'En cuanto a beneficios fiscales, ambas ciudades operan bajo el mismo marco: la Zona Libre de la Frontera Norte establece una tasa de ISR del 20% —versus el 30% nacional— e IVA del 8% —versus el 16% nacional. El régimen fue renovado para 2026.'),

  makeH2('h05', 'Lo que Mexicali tiene que Tijuana no puede replicar fácilmente'),
  makeBlock('b22', 'Hay activos competitivos que se construyen en décadas y no se replican con inversión a corto plazo.'),
  makeBlock('b23', 'El cluster aeroespacial de Mexicali tiene 50 años de historia operativa. Eso significa generaciones de ingenieros y técnicos formados en manufactura de precisión, tolerancias aeroespaciales y estándares AS9100. Significa proveedores locales especializados. Significa que el talento senior ya existe en el mercado, no hay que importarlo ni formarlo desde cero. Para una empresa aeroespacial o de defensa evaluando su primera operación en México, ese ecosistema acumulado tiene un valor que no aparece en ninguna hoja de cálculo de renta comparada.'),
  makeBlock('b24', 'La ruta logística de la I-8 es otro activo difícil de replicar. No es solo una autopista: es una alternativa comprobada para acceder a Los Ángeles y al interior de Estados Unidos sin depender del corredor costal del sur de California, que incluye el paso por el área metropolitana de San Diego con su congestión correspondiente. Para ciertos perfiles de carga —aeroespacial, electrónica de alto valor, manufactura bajo demanda con ciclos de entrega ajustados— la predictibilidad de esa ruta tiene valor operativo real.'),
  makeBlock('b25', 'El momentum actual también es un indicador. La expansión de Calexico East completada en octubre de 2024, la inversión de Gulfstream en 2024, el crecimiento del 60% en inventario desde 2018: varios análisis apuntan a que Mexicali está en un ciclo de expansión sostenida respaldado por demanda real, no por especulación inmobiliaria.'),

  makeH2('h06', 'La pregunta que importa no es quién gana: es qué necesita tu operación'),
  makeBlock('b26', 'No existe una respuesta universal a la pregunta Mexicali vs. Tijuana. Existe una respuesta que es correcta para tu empresa, en este momento, dado tu modelo de operación.'),
  makeBlock('b27', 'Si tu industria es medtech y necesitas una cadena de proveedores especializada que ya existe, Tijuana es el punto de partida lógico. Si tu empresa es aeroespacial y valora la estabilidad laboral, la ruta hacia Los Ángeles y el costo de operación a largo plazo, los datos de Mexicali merecen una evaluación seria. Si tu perfil logístico depende de Otay Mesa y del corredor San Diego-Los Ángeles, Tijuana mantiene la ventaja de volumen. Si tu cadena de suministro apunta al interior de Estados Unidos o a California vía I-8, Calexico East puede ser más eficiente de lo que parece en una comparación superficial.'),
  makeBlock('b28', 'Lo que sí es claro es que reducir esta decisión a "Tijuana es más grande, entonces Tijuana" es un error que algunos directores de operaciones han pagado caro en rotación laboral, costos de renta y rutas logísticas subóptimas. La escala importa. Pero el fit estratégico importa más.'),
  makeBlock('b29', 'Desde nuestra experiencia operando en Mexicali durante seis décadas, Grupo Nelson puede orientar a empresas que evalúan ambas ciudades sobre qué especificaciones, ubicaciones y perfiles de operación se adaptan mejor a cada mercado. Pero la decisión, en última instancia, empieza con una pregunta que solo tu equipo puede responder: ¿qué necesita realmente tu operación para funcionar bien?'),

  makeBlock('b30', 'Fuentes: Cushman & Wakefield Cross-Border Expansion Report 2024 · Newmark Tijuana Industrial Market 1Q 2025 · Solili Reporte Industrial Q3 2025 · Bureau of Transportation Statistics Border Crossing Data 2024 · Tijuana EDC Manufacturing Profile 2024 · Tetakawi Manufacturing Wages Mexico 2025 · IBWC 2025 Colorado River Water Allocations · SANDAG Otay Mesa East Port of Entry · GSA Calexico East Land Port of Entry Expansion'),
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
