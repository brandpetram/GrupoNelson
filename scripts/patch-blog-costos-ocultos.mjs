/**
 * Parcha el post de blog: Los Costos Ocultos del Desarrollo Industrial en México que Tu Consultor No te Menciona
 * Documento ID: uqKP1CJoSsgXdCXPUwMBbi
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMBbi'

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

const description = 'El presupuesto de relocalización que tu consultor presentó en diapositivas tiene una brecha documentada con la realidad: el costo laboral real es 50-60% mayor al cotizado, la electricidad industrial aplica cargos mínimos que elevan el recibo 20-30%, y el timeline de 3-4 meses para operar es sistemáticamente incorrecto. Este artículo desglosa los números que no aparecen en las propuestas.'

const blocks = [
  // --- Apertura ---
  makeBlock('b01', 'La reunión de aprobación fue el punto de inflexión. El director de operaciones de un fabricante de componentes automotrices presentó al comité ejecutivo un modelo de costos para su primera planta en México: costo laboral por hora de $4.80 dólares, renta industrial a $0.38 por pie cuadrado, timeline de cuatro meses para iniciar producción. El comité aprobó. Dieciocho meses después, el costo laboral real había resultado ser $7.40 por hora fully burdened, la renta disponible estaba en $0.54, y habían pasado once meses antes de arrancar la primera línea.'),
  makeBlock('b02', 'El consultor de relocalización no mintió. Presentó datos reales: el salario base en Mexicali, la renta promedio de parques industriales, el timeline de una empresa similar que había entrado dos años antes. Lo que no presentó —o no sabía calcular con precisión— fue el gap entre el presupuesto de primer nivel y el costo de operación real.'),
  makeBlock('b03', 'Este artículo documenta ese gap. No es un argumento contra establecerse en México —los números fundamentales siguen siendo favorables— sino una guía para entrar con el modelo correcto desde el principio. Las empresas que están evaluando Mexicali y Baja California merecen los datos completos.'),

  // --- H2 #1: El error del presupuesto de primer nivel ---
  makeH2('h01', 'El error del presupuesto de primer nivel'),
  makeBlock('b04', 'Los modelos de costo de relocalización tienen un problema estructural: tienden a capturar los costos visibles y obvios, y a subvaluar o ignorar los costos que requieren conocimiento operativo local para cuantificar correctamente. El resultado es un presupuesto que es técnicamente correcto en cada línea que incluye, pero incompleto como modelo de decisión.'),
  makeBlock('b05', 'La tabla de divergencias entre lo que aparece en propuestas típicas y la realidad documentada es consistente a través de múltiples categorías de costo: el costo laboral por hora aparece entre $3.50 y $5.44 en propuestas estándar; el costo fully burdened real está entre $6.29 y $8.22 según el Tetakawi 2025-2026 Executive Benchmark Guide. La renta industrial aparece entre $0.35 y $0.42 por pie cuadrado; el dato de mercado real en Mexicali para Q4 2024 es $0.56, un incremento del 80% sobre niveles prepandemia. El timeline para iniciar operaciones aparece en 3-4 meses; la realidad documentada es 6-8 meses en escenario favorable, y 12 o más meses si hay obstáculos en permisos o conexión eléctrica.'),
  makeBlock('b06', 'El patrón no es aleatorio. Los costos que se subestiman sistemáticamente son aquellos que requieren experiencia local para calcular: las prestaciones extralegales que el mercado fronterizo impone en la práctica, los cargos eléctricos que no aparecen en tarifas publicadas, los pasivos laborales que se acumulan sin aparecer como costo corriente, y los costos aduanales de operación que ningún consultor incluye en el modelo inicial.'),

  // --- H2 #2: La brecha laboral ---
  makeH2('h02', 'La brecha laboral: de $5.44 a $8.22 por hora y lo que hay en el medio'),
  makeBlock('b07', 'El salario base en manufactura en Mexicali está en un rango de $3.50 a $5.44 dólares por hora. Ese es el número que aparece en la mayoría de las propuestas de relocalización. El costo fully burdened —lo que la empresa paga realmente por cada hora de trabajo— es entre $6.29 y $8.22 dólares por hora, según el Tetakawi 2025-2026 Executive Benchmark Guide. La diferencia no es un margen de error: es el costo de las obligaciones patronales que el marco legal mexicano establece y que el mercado fronterizo impone adicionalmente.'),
  makeBlock('b08', 'Las obligaciones patronales al IMSS representan aproximadamente el 25-32% del salario base, dependiendo de la prima de riesgo de trabajo de la industria. En manufactura, la prima mínima es del 2.54%. A eso se agregan las cuotas por enfermedad y maternidad, guarderías y prestaciones sociales. El INFONAVIT suma un 5% adicional sobre el Salario Base de Cotización. El SAR/AFORE agrega otro 2%. El Impuesto sobre Nómina en Baja California es del 4.25% sobre la nómina total —EY México reportó además la imposición de una sobretasa adicional en el estado.'),
  makeBlock('b09', 'Las prestaciones de ley añaden otra capa: el aguinaldo mínimo de 15 días de salario anual, la prima vacacional, y el efecto de la Reforma de Vacaciones Dignas de 2023, que subió los días de vacaciones de 6 a 12 el primer año y que eleva el Factor de Integración del Salario Base de Cotización. La PTU —Participación de los Trabajadores en las Utilidades— es quizá el costo más subestimado en los modelos iniciales: 10% de la utilidad fiscal. En los primeros dos años de operación, con pérdidas frecuentes, no genera impacto. En el año tres o cuatro, cuando la planta empieza a ser rentable, puede representar entre $500 y $2,000 dólares adicionales por trabajador al año. El cap de tres meses de salario o promedio de tres años fue ratificado como constitucional por la SCJN en 2024.'),
  makeBlock('b10', 'El mercado fronterizo agrega prestaciones extralegales que no aparecen en la ley pero que son obligatorias en la práctica si la empresa quiere reclutar y retener personal. El transporte de personal —rutas de autobús desde colonias hasta parques industriales— es práctica estándar en Mexicali y Tijuana. Una empresa que no lo ofrece enfrenta una rotación notablemente más alta que sus competidoras. Los vales de despensa y los bonos de puntualidad y asistencia son igualmente estándar; su ausencia coloca a la empresa en desventaja competitiva real en el mercado laboral local.'),
  makeBlock('b11', 'La rotación en ciudades fronterizas oscila entre 8% y 12% mensual, versus 3-6% en ciudades del interior. Cada ciclo de rotación tiene un costo de terminación que en México no existe como en el sistema at-will americano: 90 días de salario más 20 días por año trabajado más 12 días de prima de antigüedad por año —con cap en dos veces el salario mínimo— para separaciones sin causa justificada documentada. Cada trabajador con más de tres años en la empresa genera un pasivo creciente que no se registra como costo corriente pero que existe como obligación real.'),

  // --- H2 #3: La electricidad ---
  makeH2('h03', 'La electricidad que nadie cotiza bien'),
  makeBlock('b12', 'La electricidad industrial en México tiene un problema de presentación: la tarifa publicada no refleja el costo real. El precio promedio en parques industriales de Baja California está alrededor de $0.11 dólares por kWh cuando se incluyen todos los cargos aplicables. Las propuestas de relocalización frecuentemente citan un rango de $0.07 a $0.09 que corresponde a la tarifa base sin considerar los cargos por demanda máxima y el factor de potencia. La diferencia puede representar entre el 20% y el 30% sobre el costo cotizado inicialmente.'),
  makeBlock('b13', 'El mecanismo específico es el cargo por demanda máxima bajo la tarifa GDMTH, que aplica para instalaciones con demanda igual o mayor a 100 kW —prácticamente cualquier nave industrial. La tarifa establece que el recibo no puede ser menor al 60% de la demanda total conectada, independientemente del consumo real. Una planta que opera al 40% de su capacidad instalada durante parte del mes paga como si hubiera consumido al 60%. En operaciones con demanda variable por estacionalidad o ramp-up inicial, este cargo eleva el costo efectivo por kWh significativamente sobre la tarifa nominal. Las tarifas GDMTH subieron entre 8% y 12% en 2025, contra un 3% anual histórico.'),
  makeBlock('b14', 'El contexto estructural agrava el problema. En mayo de 2024, la demanda eléctrica nacional casi superó la capacidad disponible; CENACE emitió una declaración de emergencia nacional. Más del 60% de la red de transmisión opera cerca de su capacidad máxima, con cuellos de botella críticos en los estados fronterizos del norte. Baja California opera como isla eléctrica —desconectada del Sistema Eléctrico Nacional—, lo que aumenta su vulnerabilidad ante fallas de generación local.'),
  makeBlock('b15', 'La conexión eléctrica en zonas donde la red está saturada puede requerir que la empresa compre derechos de capacidad adicionales. Para una nave de 50,000 a 100,000 pies cuadrados, la subestación propia puede representar una inversión significativa que el desarrollador puede cargar al inquilino como mejora especial, y que no aparece en ninguna propuesta inicial. El rango va de cientos de miles a millones de dólares dependiendo de la ubicación y la demanda proyectada.'),

  // --- H2 #4: El cronograma ---
  makeH2('h04', 'El cronograma que ningún consultor cumple'),
  makeBlock('b16', 'La promesa estándar es cuatro meses para estar operando. La realidad documentada en Mexicali es seis a ocho meses en escenario favorable, y doce o más cuando hay obstáculos en el proceso de permisos o en la conexión eléctrica. La brecha no es imprevisión del consultor: es consecuencia de la estructura del ecosistema de permisos, donde la federación, el estado y el municipio tienen procesos que no siempre se sincronizan entre sí.'),
  makeBlock('b17', 'El ecosistema de permisos en Mexicali para una operación industrial nueva incluye, entre otros: el Dictamen de Uso de Suelo del municipio, la Licencia de Construcción Industrial, la Licencia Ambiental Municipal —cuyo plazo máximo de respuesta es 15 días hábiles pero que en la práctica depende de la carga del área—, la autorización de Protección Civil y Cuerpo de Bomberos, la Manifestación de Impacto Ambiental ante SEMARNAT para proyectos que superen ciertos umbrales —que puede tomar varios meses adicionales—, y el permiso IMMEX ante la Secretaría de Economía, que para empresas nuevas toma entre tres y seis meses.'),
  makeBlock('b18', 'El permiso IMMEX es crítico porque determina el régimen fiscal bajo el que opera toda la operación de importación temporal. Sin él, la empresa no puede importar insumos sin pagar aranceles completos. Si el proceso se inicia después de comenzar la construcción —como suele ocurrir cuando el consultor subestima el timeline—, la empresa puede encontrarse con una nave lista para operar y sin el régimen aduanal que necesita para hacerlo.'),
  makeBlock('b19', 'El costo de cada mes de retraso no es solo el overhead fijo de una planta no productiva. Es también el costo de oportunidad de compromisos de entrega hechos a clientes con base en el timeline original, el costo financiero del capital invertido en la instalación sin generar retorno, y el costo de personal contratado y entrenado que espera la línea de producción. Ninguno de estos costos aparece en el modelo de relocalización inicial.'),

  // --- H2 #5: Los costos de operación que aparecen en el mes 4 ---
  makeH2('h05', 'Los costos de operación que solo aparecen en el mes 4'),
  makeBlock('b20', 'Hay una categoría de costos que el primer presupuesto de relocalización no incluye porque parecen detalles operativos a resolver después. En la práctica, son costos fijos que aparecen desde el primer mes de operación real y que en conjunto pueden representar una diferencia significativa sobre el modelo financiero aprobado.'),
  makeBlock('b21', 'Los costos aduanales de operación son el ejemplo más claro. Para una operación IMMEX mediana, el Derecho de Trámite Aduanero es de $445 pesos por pedimento, la prevalidación de pedimento agrega $330 pesos, y el honorario del agente aduanal va de $1,500 a $4,000 pesos por pedimento en operaciones simples. Una operación mediana genera entre 20 y 80 pedimentos por mes —importaciones de insumos más exportaciones de producto terminado—. El costo mensual acumulado de agente aduanal está entre $30,000 y $150,000 pesos por mes. Raramente aparece en los modelos de costo de relocalización.'),
  makeBlock('b22', 'La implementación del sistema Anexo 24 —software especializado para el control de inventarios en régimen IMMEX que la ley requiere— tiene costos de configuración inicial que pueden superar $100,000 pesos más mantenimiento anual por actualizaciones regulatorias. La certificación OEA (Operador Económico Autorizado) tiene un fee oficial del SAT de $27,590 pesos, requiere entre 8 y 12 meses para obtenerla, y la asesoría especializada puede superar los $200,000 a $500,000 pesos. La certificación no es obligatoria, pero su ausencia implica un tratamiento aduanal más lento y más sujeto a revisiones que afectan los tiempos de importación.'),
  makeBlock('b23', 'La seguridad privada tampoco aparece en los modelos iniciales, aunque no hay operación industrial en Mexicali que la considere opcional. Un guardia en turno de 12 horas cuesta entre $8,000 y $14,000 pesos mensuales por elemento. Una nave de 100,000 pies cuadrados con dos o tres accesos requiere cuatro a seis guardias en rotación: entre $60,000 y $120,000 pesos por mes, o $3,000 a $6,000 dólares mensuales, solo en vigilancia. Los sistemas de CCTV y control de acceso agregan inversión inicial y mantenimiento mensual que tampoco aparecen en el primer presupuesto.'),
  makeBlock('b24', 'El agua es un costo que se subvalúa en términos de riesgo más que de precio. Mexicali depende del Río Colorado y del acuífero del Valle de Mexicali, ambos con sobreexplotación documentada —más del 45% de los acuíferos en la región norte están sobreexplotados según el World Economic Forum. Los costos específicos que no aparecen en propuestas incluyen los derechos de conexión al municipio o CESPM, la concesión CONAGUA que cada empresa debe gestionar individualmente con su costo y tiempo de tramitación, y el tratamiento de aguas residuales industriales que puede requerir planta propia o tarifas municipales especiales. El caso Constellation Brands —planta cervecera de $1,400 millones de dólares cancelada en 2020 por referéndum ciudadano a pesar de tener todos los permisos legales— ilustra que el riesgo del agua en la región no es solo regulatorio: es político y social.'),

  // --- H2 #6: Lo que Grupo Nelson puede decirte ---
  makeH2('h06', 'Lo que los datos públicos no capturan'),
  makeBlock('b25', 'Los datos que aparecen en este artículo son verificables: provienen de informes de Tetakawi, reportes de EY México, datos de Solili, tarifas publicadas del SAT y registros de CENACE. Son los mismos datos que cualquier equipo de due diligence puede encontrar con tiempo suficiente. Lo que los datos públicos no capturan es la granularidad que requiere una decisión de inversión real: qué parques industriales tienen capacidad eléctrica disponible hoy, qué zonas tienen presión de agua suficiente para producción industrial, cuáles son los tiempos reales de respuesta de la autoridad municipal en este momento, y qué nivel de turnover está experimentando el mercado laboral local en las categorías de puesto que la operación requiere.'),
  makeBlock('b26', 'Hay una diferencia entre conocer el mercado de Mexicali desde los reportes y conocerlo desde seis décadas de operación en él. Grupo Nelson ha visto construirse, escalarse y en algunos casos cerrarse las operaciones que hoy sirven como benchmarks en cualquier análisis de la región. Esa inteligencia no reemplaza el modelo financiero que cada empresa debe construir con sus propios datos —la PTU que una operación va a pagar depende de su utilidad fiscal específica, no de un promedio—, pero sí puede acelerar significativamente la fase de due diligence y evitar los errores de modelo que cuestan más caro que cualquier costo operativo mal cotizado.'),

  // --- Fuentes ---
  makeBlock('b_fuentes', 'Fuentes: Tetakawi — Mexico Manufacturing Labor Costs: 2025-2026 Executive Benchmark Guide · EY México — Impuesto sobre Nómina en Baja California, análisis de sobretasa 2024 · SCJN — Resolución sobre constitucionalidad del cap de PTU, 2024 · CENACE — Declaración de emergencia eléctrica nacional, mayo 2024 · GlobalPetrolPrices — Industrial Electricity Prices Mexico vs. United States 2023 · Comisión Federal de Electricidad — Tarifas GDMTH 2025 · Solili — Reporte de Mercado Industrial Mexicali Q4 2024 · SAT — Arancel de derechos OEA 2024 · SAT — Derechos de Trámite Aduanero vigentes 2025 · SEMARNAT — Procedimiento de Manifestación de Impacto Ambiental · World Economic Forum — Water Risk Report: Overexploited Aquifers Mexico 2024 · Reuters / La Jornada — Caso Constellation Brands Mexicali 2020 · Secretaría de Economía — Programa IMMEX: requisitos y tiempos de autorización · CONAGUA — Concesiones de extracción de agua: régimen de reformas recientes'),
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
