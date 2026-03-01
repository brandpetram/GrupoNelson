/**
 * Parcha el post de blog: Pisos Industriales: Por Qué FF100 y FL50 No Son Caprichos de Especificación
 * Documento ID: kllPxzrZvj3u6Zg4KwYNXY
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KwYNXY'

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
  'FF100 y FL50 no son estándares arbitrarios: son el umbral que separa una nave donde la automatización funciona de una donde no. Esta guía explica qué miden, qué cuestan y qué debe exigir antes de firmar un contrato de arrendamiento industrial.'

const blocks = [
  // --- Apertura ---
  makeBlock(
    'b01',
    'El contrato dice "piso de alta planicidad". El brochure del parque muestra fotografías de losas impecables. El representante de ventas menciona concreto de 250 kg/cm² y una capacidad de carga de 8 toneladas por metro cuadrado. Todo suena bien. El problema es que ninguno de esos datos le dice si sus AGVs van a funcionar, si su VNA turret truck va a poder operar a altura completa, o si en doce meses su sistema de automatización va a empezar a generar fallas que nadie sabrá diagnosticar.'
  ),
  makeBlock(
    'b02',
    'Los números FF y FL —Floor Flatness y Floor Levelness— son los indicadores que sí responden esas preguntas. Su ausencia en los materiales de marketing de la mayoría de los parques industriales en México no es un accidente: medirlos correctamente cuesta dinero, cumplirlos requiere mano de obra especializada, y verificarlos independientemente implica un proceso que pocos desarrolladores proponen por iniciativa propia. Este artículo explica qué significan esos números, por qué importan para operaciones con automatización, y qué debe incluir en su lista de verificación antes de comprometer capital en una nave industrial.'
  ),

  // --- H2 #1 ---
  makeH2(
    'h01',
    'Qué miden FF y FL: la diferencia que no aparece en el brochure del parque'
  ),
  makeBlock(
    'b03',
    'El sistema F-Number fue desarrollado por Allen Face en 1979 y adoptado por el American Concrete Institute (ACI) en 1990. La norma vigente de medición es ASTM E1155-23. A diferencia de métricas como la resistencia a la compresión, que describen una propiedad del material, FF y FL describen la geometría de la superficie terminada.'
  ),
  makeBlock(
    'b04',
    'FF (Floor Flatness) mide variaciones de elevación a corto plazo: las ondulaciones o irregularidades locales que ocurren en distancias de un metro a tres metros. Es el número que determina si una rueda de carga o una llanta de horquilla va a rebotar, vibrar o perder contacto con el piso. FL (Floor Levelness) mide la inclinación general de la losa en distancias más largas. Es el número que determina si el piso se inclina de forma progresiva en un pasillo o zona de trabajo.'
  ),
  makeBlock(
    'b05',
    'La distinción es importante porque una losa puede tener excelente FL —perfectamente nivelada a gran escala— pero un FF bajo, con ondulaciones frecuentes que generan problemas de estabilidad en equipos de mástil alto. Y a la inversa: una losa muy plana localmente pero con una pendiente general pronunciada puede comprometer la estabilidad de cargas apiladas a varios niveles. Para operaciones de automatización intensiva, ambos números deben cumplirse simultáneamente.'
  ),

  // --- H2 #2 ---
  makeH2(
    'h02',
    'La escala práctica: FF20 vs. FF50 vs. FF100 — lo que significa en milímetros reales'
  ),
  makeBlock(
    'b06',
    'Los valores numéricos son inversos a la tolerancia: un número mayor significa una superficie más plana. FF25 admite aproximadamente 6 mm de variación en una medición de 3 metros. FF50 reduce esa tolerancia a 3 mm. FF100 la lleva a 1.5 mm en el mismo tramo.'
  ),
  makeBlock(
    'b07',
    'La siguiente tabla resume los rangos mínimos recomendados según el tipo de operación:'
  ),
  makeBlock(
    'b08',
    'Almacén básico con montacargas contrapesado: FF mínimo 20, FL mínimo 15. Reach truck en pasillos anchos: FF mínimo 35, FL mínimo 25. AGVs o AMRs con tráfico aleatorio: FF mínimo 50, FL mínimo 35. Operaciones superflat con AGVs intensivos: FF 100, FL 50. VNA turret truck en pasillos definidos: sistema Fmin con rangos de 65 a 100 o más.'
  ),
  makeBlock(
    'b09',
    'Es importante aclarar la distinción entre "superflat" y el sistema Fmin. FF100/FL50 aplica para tráfico aleatorio —donde el equipo circula en cualquier dirección sobre la losa. Para VNA (Very Narrow Aisle) con tráfico definido —donde el equipo siempre recorre el mismo pasillo en la misma trayectoria— se usa el sistema Fmin, que mide planeza a lo largo de rutas específicas y opera con rangos típicos de Fmin 65 a 100 o más según la altura de operación. Confundir ambos sistemas es uno de los errores de especificación más comunes.'
  ),
  makeBlock(
    'b10',
    'La razón por la que estos milímetros importan en altura queda clara con un dato de geometría básica: una imperfección de 3 mm en el piso —el tope de FF50— puede traducirse en una inclinación del mástil de aproximadamente 15 centímetros a 18 metros de altura en un VNA turret truck. A esa inclinación, la tolerancia de colocación de pallets en posiciones altas desaparece.'
  ),

  // --- H2 #3 ---
  makeH2(
    'h03',
    'Automatización y el piso: por qué un AGV no miente sobre la calidad del concreto'
  ),
  makeBlock(
    'b11',
    'Un montacargas operado por un conductor humano tolera irregularidades de piso que el operador compensa de forma inconsciente: reduce velocidad, ajusta trayectoria, corrige la inclinación del mástil antes de colocar una carga. Un AGV no tiene esa capacidad de adaptación. El equipo opera según los parámetros que se le programaron asumiendo un piso dentro de especificación.'
  ),
  makeBlock(
    'b12',
    'Las consecuencias operativas de un piso fuera de especificación en entornos automatizados son concretas y documentadas. Primero, las imperfecciones del piso pueden ser interpretadas por los sensores lidar del AGV como obstáculos, generando paradas innecesarias que reducen la productividad y generan falsas alarmas en el sistema de gestión. Segundo, un piso desgastado o irregularmente deteriorado interrumpe los retornos del lidar, provocando desviaciones en la trayectoria programada. Tercero, las vibraciones acumuladas por circulación sobre superficies irregulares acortan la vida útil de componentes mecánicos y electrónicos del equipo.'
  ),
  makeBlock(
    'b13',
    'En el caso más severo, un sistema automatizado recién instalado simplemente no puede operar a la capacidad prometida por el proveedor del equipo. El integrador de automatización puede documentar que la instalación cumple especificaciones técnicas del equipo, y la causa raíz sigue siendo el piso. El diagnóstico tarda semanas. El correctivo —diamond grinding post-instalación— cuesta significativamente más que haber construido bien desde el inicio.'
  ),

  // --- H2 #4 ---
  makeH2(
    'h04',
    'El problema mexicano: especificar resistencia sin especificar planeza'
  ),
  makeBlock(
    'b14',
    'Las naves Clase A en México especifican con frecuencia pisos de concreto a 250 kg/cm² y capacidades de carga de 6 a 10 toneladas por metro cuadrado. Son datos relevantes para la integridad estructural de la losa. No son datos relevantes para la operación de equipos de mástil alto ni para la automatización.'
  ),
  makeBlock(
    'b15',
    'El umbral mínimo que la industria mexicana considera "alta especificación" es FF35/FL30. Es un piso adecuado para operaciones con reach truck en pasillos anchos. No es suficiente para AGVs de tráfico aleatorio, y está considerablemente lejos de los requisitos de operaciones superflat. Lo más relevante es que ese número —cuando existe— raramente aparece en materiales de marketing. El inversionista o arrendatario tiene que pedirlo explícitamente.'
  ),
  makeBlock(
    'b16',
    'Hay tres errores de especificación que se repiten con consistencia en el mercado mexicano. El primero es especificar solo resistencia (kg/cm²) sin especificar FF/FL. El segundo es especificar FF/FL sin definir un protocolo de verificación independiente: la norma ASTM E1155 exige que la medición se realice dentro de las 72 horas posteriores al vaciado, pero en la práctica muchos desarrolladores no realizan esa verificación con instrumental calibrado durante la construcción. El tercero —y quizá el más costoso— es especificar sin incluir penalidad contractual por incumplimiento. Si el piso no cumple el FF/FL especificado y no hay consecuencia contractual, la corrección queda a discreción del desarrollador.'
  ),
  makeBlock(
    'b17',
    'Este patrón no es exclusivo de desarrolladores de segunda categoría. Ocurre también en parques de primer nivel donde el piso se especifica correctamente en términos de resistencia y el equipo de ventas describe superficies de "alta calidad", pero donde la verificación de planeza con ASTM E1155 durante la construcción no forma parte del proceso estándar de control de calidad.'
  ),

  // --- H2 #5 ---
  makeH2(
    'h05',
    'El piso envejece — y la automatización lo nota primero'
  ),
  makeBlock(
    'b18',
    'Un dato que no aparece en las especificaciones de venta es la degradación de planeza en el tiempo. Un piso de concreto no mantiene indefinidamente los valores FF/FL medidos en las primeras 72 horas después del vaciado. La degradación puede ser significativa.'
  ),
  makeBlock(
    'b19',
    'Existe un caso documentado de una losa que midió FF 69/FL 73 al momento de la entrega —valores sólidos para la mayoría de aplicaciones— y que un año después registró FF 41/FL 37: una pérdida de aproximadamente 40 a 50 por ciento de sus valores originales. La causa principal en ese caso y en la mayoría de casos similares es el curling: la tendencia de la losa de concreto a curvarse en los bordes a medida que la superficie superior se seca más rápido que la parte inferior. El curling aparece típicamente entre 30 y 60 días después del vaciado y puede superar 25 mm en casos severos.'
  ),
  makeBlock(
    'b20',
    'En términos generales, se estima que un piso convencional puede perder hasta 50 por ciento de su planeza original en los primeros seis meses de vida, dependiendo del diseño de la losa, el espaciado de juntas y las condiciones ambientales durante el curado.'
  ),
  makeBlock(
    'b21',
    'Los sistemas de losa sin juntas —tecnologías como PrimX Composite o Twintec— abordan este problema de forma estructural al eliminar las juntas de contracción que son el punto de inicio del curling. Los datos de seguimiento para estas tecnologías muestran retención de 90 a 95 por ciento de la planeza original dos años después de la instalación. La losa sin juntas también elimina las restricciones de colocación de racks sobre juntas y reduce el tiempo de vaciado aproximadamente 30 por ciento. El costo adicional frente a una losa convencional es real —entre 9.70 y 16.15 dólares por metro cuadrado adicionales sobre el costo base— pero es una fracción del costo total de construcción de una nave Clase A, que en México promedia alrededor de 6,800 pesos por metro cuadrado.'
  ),
  makeBlock(
    'b22',
    'La implicación para operaciones automatizadas es directa: si el contrato de arrendamiento no especifica un valor FF/FL mínimo al momento de la entrega y un mecanismo de seguimiento durante los primeros dos años de operación, el arrendatario asume el riesgo de la degradación sin recurso contractual.'
  ),

  // --- H2 #6 ---
  makeH2(
    'h06',
    'Qué pedir antes de firmar el contrato de arrendamiento'
  ),
  makeBlock(
    'b23',
    'La verificación de planeza de piso en una negociación de nave industrial no requiere conocimiento técnico profundo de construcción de concreto. Requiere saber qué preguntar y qué incluir en el contrato. Los siguientes son los puntos mínimos que deben cubrirse.'
  ),
  makeBlock(
    'b24',
    'Primero, solicite los valores FF/FL específicos para la nave, medidos con ASTM E1155 dentro de las 72 horas posteriores al vaciado. Si el desarrollador no tiene esa medición, o si el piso ya existe y no hay registros históricos, solicite una medición independiente como condición previa a la firma. Laboratorios especializados en México —como GMIpsum— realizan mediciones de FF, FL, Fmin, TR-34 y DIN 18202 con instrumental calibrado.'
  ),
  makeBlock(
    'b25',
    'Segundo, verifique que los valores especificados correspondan a su tipo de operación. Para AGVs de tráfico aleatorio, el mínimo funcional es FF50/FL35. Para VNA, requiere el sistema Fmin medido sobre las trayectorias específicas de los pasillos, no un valor FF/FL general. Para operaciones superflat, el estándar es FF100/FL50.'
  ),
  makeBlock(
    'b26',
    'Tercero, incluya en el contrato una cláusula de penalidad por incumplimiento del valor FF/FL especificado, y defina quién realiza la medición de verificación, con qué equipo y bajo qué norma. Sin esta cláusula, la especificación es una declaración de intención sin consecuencia legal.'
  ),
  makeBlock(
    'b27',
    'Cuarto, si su operación incluye automatización, solicite información sobre el sistema de losa: ¿tiene juntas de contracción? ¿Con qué espaciado? ¿Se usó algún sistema jointless? Las juntas de contracción con espaciado estándar —24 veces el espesor de la losa, equivalente a juntas cada 4.8 metros en una losa de 20 cm— representan un riesgo de degradación acelerada y una restricción para la colocación de racks.'
  ),
  makeBlock(
    'b28',
    'Quinto, considere negociar una medición de seguimiento al año de ocupación. La degradación de planeza es predecible en su existencia, aunque variable en magnitud. Una medición a los 12 meses le permite identificar problemas antes de que afecten la operación y, si están dentro del período de garantía del desarrollador, exigir corrección.'
  ),

  // --- Cierre ---
  makeBlock(
    'b29',
    'Los pisos industriales son uno de los componentes con mayor impacto en la operación y menor visibilidad en la negociación de una nave. La razón es simple: el deterioro de un piso fuera de especificación no produce una falla catastrófica inmediata —produce ineficiencias graduales que se atribuyen a otras causas hasta que alguien mide. En operaciones manuales, esas ineficiencias son tolerables. En operaciones automatizadas, son el primer punto de falla del sistema.'
  ),
  makeBlock(
    'b30',
    'En Grupo Nelson, el análisis técnico de las condiciones de nave —incluyendo la verificación de especificaciones de piso para operaciones con automatización— forma parte del proceso de asesoría antes de cualquier negociación de arrendamiento. Las decisiones de largo plazo merecen datos de largo plazo.'
  ),

  // --- Fuentes ---
  makeBlock(
    'b_fuentes',
    'Fuentes: ASTM E1155-23 (Standard Test Method for Determining FF Floor Flatness and FL Floor Levelness Numbers); IFTI — International Concrete Repair Institute, ifti.com; Face Consultants, face-consultants.com; Allen Face, desarrollo original del sistema F-Number (1979); ACI — American Concrete Institute (adopción del sistema, 1990); Archtoolbox, guía de especificaciones de piso industrial; CoGri Group, estudios de degradación de planeza en losas de concreto; Mecalux / Interlake Mecalux, requerimientos de piso para sistemas VNA y AGV; Robotics 24/7, impacto de calidad de piso en operaciones automatizadas; Applied Flooring, especificaciones VNA y sistema Fmin; PrimX, tecnología de losa sin juntas (PrimX Composite); Twintec, sistemas de losa sin juntas; 360enconcreto, mercado de pisos industriales en México; Sapcon / Grupo Sapcon, construcción de pisos superplanos en México; GMIpsum, laboratorio de medición FF, FL, Fmin, TR-34, DIN 18202 en México; Spot2.mx, análisis de mercado inmobiliario industrial en México.'
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
