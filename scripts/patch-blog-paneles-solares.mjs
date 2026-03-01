/**
 * Parcha el post de blog: Paneles Solares en Naves Industriales: Lo Que el Cálculo de CFE No Te Dice
 * Documento ID: uqKP1CJoSsgXdCXPUwMRAE
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMRAE'

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

const description = 'Mexicali tiene algunas de las mejores condiciones solares de Norteamérica, pero la mayoría de los análisis de retorno para naves industriales omiten variables críticas de la tarifa GDMTH, las restricciones de interconexión y el comportamiento real de los paneles a 45°C. Esto es lo que necesita saber antes de firmar cualquier propuesta.'

const blocks = [
  makeBlock('b01', 'Cuando un integrador solar le presenta un análisis de retorno para su nave industrial en Mexicali, el número suele verse bien: 5 años de payback, ahorro del 40% en la factura eléctrica, LCOE de $0.05 USD por kWh. El problema no es que esos números sean inventados. El problema es que frecuentemente son correctos en el vacío y engañosos en el contexto de su operación específica. Mexicali tiene una irradiación promedio de 6.0 kWh/m²/día y entre 5.5 y 6.0 horas solar pico diarias, lo que la coloca entre las zonas con mayor potencial solar de México y de toda Norteamérica. Ese recurso es real. Pero traducirlo correctamente a flujo de caja para una empresa industrial bajo tarifa GDMTH requiere un análisis considerablemente más fino del que suele aparecer en las primeras propuestas.'),

  makeBlock('b02', 'La generación distribuida en México creció 35% en 2024, alcanzando 4,447 MW de capacidad instalada acumulada según datos de SENER. Eso significa que hay mucha experiencia acumulada, pero también que hay muchos proyectos instalados con expectativas incorrectas. Este artículo cubre las variables que los cálculos simplificados omiten, sin descalificar la tecnología: los paneles solares en naves industriales pueden ser una de las mejores decisiones de largo plazo que puede tomar una empresa manufacturera en Baja California. El objetivo es que esa decisión se tome con información completa.'),

  makeH2('h01', 'Cómo Funciona Realmente la Tarifa GDMTH'),

  makeBlock('b03', 'La tarifa GDMTH (Gran Demanda en Media Tensión Horaria) aplica a instalaciones industriales con cargas superiores a 100 kW y es la tarifa más común para naves de manufactura, maquiladoras y centros de distribución en Mexicali. Su estructura tiene tres componentes que se facturan de manera independiente, y entender cuál pesa más en su factura es el punto de partida de cualquier análisis serio.'),

  makeBlock('b04', 'El primer componente es el cargo por energía, dividido en tres periodos horarios: base, intermedio y punta. Este es el componente que más intuitivamente se asocia con el ahorro solar, porque los paneles generan durante las horas del día que coinciden parcialmente con los periodos intermedio y punta. El segundo componente es el cargo por demanda máxima, que en 2025 ronda los $153 pesos por kW de demanda registrada en el mes. Este cargo no depende de cuánta energía consume, sino del pico más alto que registra su instalación en cualquier intervalo de 15 minutos durante el período de facturación. Es aquí donde está frecuentemente el mayor potencial de ahorro en instalaciones industriales, y también donde los análisis simplificados cometen el error más costoso. El tercer componente es el cargo por factor de potencia, que aplica penalización cuando el factor de potencia de la instalación cae por debajo de 0.90.'),

  makeBlock('b05', 'El punto crítico sobre el cargo por demanda es este: los paneles solares pueden reducirlo, pero solo si la generación fotovoltaica coincide temporalmente con el pico de demanda de su proceso. Si su nave tiene picos de demanda en horario nocturno, en arranques de equipos durante la mañana temprana antes de que el sol alcance su máximo, o en turnos nocturnos, la reducción en el cargo por demanda será marginal o nula. El análisis correcto requiere cruzar el perfil horario de consumo de su planta con la curva de generación solar estimada para Mexicali, no simplemente dividir el consumo mensual entre los días del mes.'),

  makeH2('h02', 'El Cálculo Correcto: Cuánto Puede Generar un Techo en Mexicali'),

  makeBlock('b06', 'Un sistema de 1 MW instalado en Mexicali genera aproximadamente entre 1,750 y 1,900 MWh por año, usando módulos bifaciales monocristalinos PERC de última generación con eficiencias de entre 21% y 23%. Esa cifra es sólida. El primer ajuste que debe aplicar es sobre el área disponible real de su cubierta. La capacidad instalable típica es de 80 a 120 Wp por metro cuadrado de área aprovechable, pero la palabra clave es "aprovechable". En la mayoría de las naves industriales, entre el 30% y el 60% del área de cubierta está ocupado por extractores de aire, equipos de HVAC, claraboyas, zonas de sombra por pretil o zonas de difícil acceso estructural. Dependiendo de la configuración de su nave, el área efectiva puede ser entre el 40% y el 70% del área bruta de techo.'),

  makeBlock('b07', 'El segundo ajuste crítico es por temperatura. Mexicali registra temperaturas promedio en verano de entre 40 y 45°C. Los módulos solares se especifican a 25°C, y pierden entre 0.3% y 0.5% de eficiencia por cada grado Celsius que superan esa temperatura de referencia. En un día típico de julio en Mexicali, la temperatura de celda puede alcanzar 65 a 70°C, lo que implica una pérdida de eficiencia de entre 12% y 22% respecto al valor nominal. Este no es un escenario excepcional: es el escenario cotidiano durante los meses de mayor irradiación del año. Los softwares de simulación como PVsyst incorporan este factor cuando se alimentan correctamente con datos meteorológicos reales de la zona, pero las hojas de cálculo simplificadas frecuentemente no lo incluyen.'),

  makeBlock('b08', 'Con estos ajustes aplicados, el LCOE real de un sistema solar industrial bien dimensionado en Mexicali se ubica entre $0.04 y $0.07 USD por kWh, dependiendo del tamaño del sistema, el modelo de contratación y los costos de financiamiento. Ese rango sigue siendo considerablemente competitivo frente a las tarifas GDMTH vigentes, pero el punto es que el número correcto requiere un análisis de ingeniería con datos reales de su instalación, no un estimado genérico.'),

  makeH2('h03', 'Modelos de Contratación: Trade-offs Reales'),

  makeBlock('b09', 'Existen cuatro modelos principales de contratación para sistemas solares industriales en México, y cada uno tiene un perfil de riesgo y beneficio diferente que debe evaluarse en función de la situación financiera y estratégica de su empresa.'),

  makeBlock('b10', 'La compra directa implica la mayor inversión inicial pero genera el mayor retorno de largo plazo. El payback típico en instalaciones industriales bien dimensionadas en Mexicali es de 3 a 5 años, después de los cuales la generación es esencialmente gratuita durante la vida útil del sistema, que se estima en 25 a 30 años. Esta opción tiene sentido cuando la empresa tiene acceso a capital a bajo costo y planea operar la nave por un horizonte de tiempo suficiente para capturar el beneficio completo.'),

  makeBlock('b11', 'El PPA (Power Purchase Agreement) permite que un desarrollador financie, instale y opere el sistema, y la empresa industrial simplemente compra la energía generada a una tarifa fija o con escalamiento predefinido, generalmente por debajo de la tarifa de CFE. La inversión inicial es cero, lo que lo convierte en la opción más accesible en términos de flujo de caja inmediato. El trade-off es que el desarrollador captura una porción importante del valor del proyecto a lo largo del contrato, que típicamente dura 15 a 20 años. También implica una relación contractual de largo plazo que debe analizarse cuidadosamente en términos de garantías de desempeño, condiciones de salida y transferencia de propiedad al final del contrato.'),

  makeBlock('b12', 'El arrendamiento financiero y el modelo ESCO (Energy Service Company) son variantes intermedias que ofrecen diferentes estructuras de pago y distribución de riesgo. Lo importante es que el modelo de contratación no es una decisión técnica: es una decisión financiera y estratégica que debe involucrar al CFO y al área legal de la empresa, no solo al equipo de operaciones.'),

  makeH2('h04', 'Lo Que el Análisis de Retorno No Incluye'),

  makeBlock('b13', 'Este es el apartado más importante para cualquier director de planta o CFO que esté evaluando propuestas. Hay cuatro variables que los análisis de retorno simplificados omiten con frecuencia, y cada una puede tener un impacto significativo en el resultado real del proyecto.'),

  makeBlock('b14', 'Primero, las restricciones de interconexión. El umbral para generación distribuida bajo interconexión simplificada en 2025 es de 700 kW bajo la Ley de la Industria Eléctrica. Proyectos menores a 500 kW tienen el proceso más expedito. Para sistemas mayores, el proceso de interconexión con CFE puede extenderse considerablemente y requerir estudios de impacto en la red, lo que afecta los tiempos de implementación del proyecto. CENACE declaró emergencia de red en mayo de 2024, y aunque Baja California Norte (donde se ubica Mexicali) opera en un sistema eléctrico separado del Sistema Eléctrico Nacional Interconectado (SEIN), las condiciones de la red local deben verificarse con CFE antes de dimensionar el sistema.'),

  makeBlock('b15', 'Segundo, el curtailment. Baja California Sur tiene restricciones documentadas de vertimiento de energía durante las horas de mayor generación solar. Baja California Norte opera en un sistema diferente, pero la capacidad de absorción de la red local es una variable que debe verificarse, especialmente para sistemas de mayor escala. Si CFE limita la inyección de energía a la red durante las horas de mayor producción solar, la generación que su sistema no puede exportar ni consumir internamente es generación perdida que no aparece en el análisis de retorno.'),

  makeBlock('b16', 'Tercero, el factor de potencia. CFE aplica penalización cuando el factor de potencia de su instalación es inferior a 0.90. Un malentendido común es que los paneles solares mejoran el factor de potencia. No lo hacen. Los inversores fotovoltaicos estándar operan a factor de potencia unitario para la energía que inyectan, pero no corrigen el factor de potencia inductivo de sus cargas. Si su nave tiene cargas inductivas importantes (motores, compresores, ventiladores) que generan un factor de potencia bajo, necesita bancos de capacitores para corregirlo, independientemente del sistema solar. Los sistemas de almacenamiento de energía (BESS) pueden contribuir a la gestión del factor de potencia, pero en México el BESS para aplicaciones industriales apenas empieza a ser económicamente viable a partir de 2024-2025, y agrega una capa de costo e inversión adicional que debe evaluarse por separado.'),

  makeBlock('b17', 'Cuarto, el coeficiente de temperatura ya mencionado. A diferencia de lo que sugiere el recurso solar excepcional de Mexicali, el calor extremo del verano local reduce el rendimiento de los módulos precisamente cuando el sol es más intenso. El análisis de producción debe realizarse con herramientas de simulación que incorporen datos de temperatura horaria real, no solo irradiación.'),

  makeH2('h05', 'Integración con la Nave Industrial: Cubierta, Estructura y Diseño'),

  makeBlock('b18', 'La instalación de un sistema fotovoltaico sobre una nave industrial no es únicamente una decisión energética. Es también una intervención estructural que debe evaluarse con ingeniería civil o estructural antes de comprometer ningún contrato.'),

  makeBlock('b19', 'La carga estructural adicional que agrega un sistema solar varía entre 10 y 25 kg/m², dependiendo de si el sistema utiliza estructura lastrada (sin perforaciones, mayor peso) o estructura anclada a la cubierta (menor peso, pero requiere perforaciones con sellado adecuado). Las cubiertas de naves industriales en México tienen especificaciones muy variables: algunas fueron diseñadas con márgenes de carga suficientes para soportar un sistema solar sin modificación estructural, otras no. Una nave con cubierta de lámina acanalada instalada hace 20 años puede requerir refuerzo estructural antes de instalar paneles, lo que es un costo que no aparece en el análisis inicial del integrador solar y que puede modificar significativamente el payback del proyecto.'),

  makeBlock('b20', 'El escenario óptimo es considerar la instalación solar desde el diseño de la nave. Una cubierta diseñada desde el inicio con orientación e inclinación apropiadas, sin obstáculos en las zonas de mayor irradiación y con capacidad estructural para la carga de paneles, puede maximizar la capacidad instalable y reducir los costos de instalación. En proyectos de retrofitting sobre naves existentes, el análisis estructural previo no es opcional: es el primer paso antes de cualquier cotización.'),

  makeH2('h06', 'Perspectiva de Largo Plazo: La Decisión Correcta Requiere el Análisis Correcto'),

  makeBlock('b21', 'Los paneles solares en naves industriales en Mexicali tienen sentido. El recurso solar es excepcional, la tarifa GDMTH tiene componentes donde la generación fotovoltaica puede generar ahorros significativos, y los módulos bifaciales monocristalinos PERC actuales ofrecen una tecnología madura con más de 25 años de vida útil esperada. Los proyectos bien dimensionados con análisis correcto tienen paybacks de 3 a 5 años y generan valor durante décadas.'),

  makeBlock('b22', 'Pero "bien dimensionado" y "análisis correcto" son las palabras clave. La diferencia entre un proyecto que entrega el retorno prometido y uno que decepciona está casi siempre en los detalles: el perfil de demanda real de la planta cruzado con la curva de generación, el área aprovechable real de la cubierta, el impacto del coeficiente de temperatura en la producción anual, la verificación de las condiciones de interconexión con CFE, y la capacidad estructural de la cubierta existente. Ninguno de esos factores aparece en una propuesta de dos páginas con una hoja de cálculo simplificada.'),

  makeBlock('b23', 'Si su empresa está evaluando un proyecto solar para su nave en Mexicali o en Baja California, el primer paso es un diagnóstico energético que cruce sus facturas históricas de CFE con un análisis de producción solar basado en datos meteorológicos reales de la zona. En Grupo Nelson trabajamos con empresas industriales en esta región en proyectos de instalación eléctrica y electromecánica, y parte de ese trabajo es asegurarnos de que las decisiones de infraestructura energética se tomen con información completa, incluyendo las variables que complican el análisis, no solo las que lo hacen atractivo.'),

  makeBlock('b_fuentes', 'Fuentes: SENER – Reporte de Avance de Energías Limpias 2024 (generación distribuida 4,447 MW acumulados, crecimiento 35%); CFE – Tarifas para suministro y venta de energía eléctrica (tarifa GDMTH, cargo por demanda máxima); Ley de la Industria Eléctrica – Disposiciones sobre generación distribuida y umbrales de interconexión simplificada (700 kW); CENACE – Declaratoria de emergencia de red mayo 2024; NREL – Global Solar Atlas, datos de irradiación Mexicali (6.0 kWh/m²/día); IEA-PVPS – Temperatura coefficient y performance ratio en sistemas fotovoltaicos industriales; IRENA – Renewable Power Generation Costs 2024 (LCOE solar $0.04–$0.07 USD/kWh); Norma NMX-J-098-ANCE – Módulos fotovoltaicos, clasificación y pruebas; ASHRAE – Cargas estructurales en cubiertas industriales con sistemas fotovoltaicos.'),
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
