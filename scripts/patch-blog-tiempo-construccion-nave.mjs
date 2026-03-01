/**
 * Parcha el post de blog: ¿Cuánto Tarda en Construirse una Nave Industrial? El Cronograma Real en México
 * Documento ID: 4lXD1QprlKmqniOHakmqKC
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmqKC'

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

const description = 'Un BTS simple dentro de parque industrial tarda 8 a 10 meses. Un greenfield fuera de parque puede extenderse 24 meses o más. La diferencia no está en la construcción: está en permisos, conexión CFE y backlog de desarrolladores. Esta guía desglosa cada fase, los cuellos de botella reales y el costo financiero de cada semana de retraso.'

const blocks = [
  // Apertura
  makeBlock('b01', 'La pregunta que todo VP de Operaciones hace cuando inicia un proyecto de nueva nave es "¿cuánto tarda en construirse?". Es la pregunta equivocada. La correcta es "¿qué es lo que realmente lo retrasa?". La respuesta determina si el cronograma que el desarrollador presentó en la primera reunión es una proyección informada o un número optimista diseñado para cerrar el trato.'),

  makeBlock('b02', 'La construcción física de una nave industrial —cimentación, estructura, cubierta, instalaciones, acabados— representa entre el 40% y el 60% del tiempo total de un proyecto. El resto lo consumen estudios previos, gestión de permisos, conexión de servicios y, en mercados con alta demanda como Baja California, el simple backlog del desarrollador para arrancar su siguiente proyecto. Un director de Supply Chain que planifica el inicio de operaciones sobre el cronograma de construcción, sin contemplar las fases previas, típicamente llega a su fecha objetivo con entre tres y nueve meses de retraso.'),

  makeBlock('b03', 'Lo que sigue es un desglose honesto de cada fase, con duraciones reales documentadas en el mercado mexicano, los factores que comprimen o extienden cada etapa, y el impacto financiero concreto de los retrasos. Incluye los datos negativos que pocas presentaciones de desarrolladores mencionan, porque son precisamente esos datos los que permiten planificar con precisión.'),

  makeH2('h01', 'El cronograma real: fases, duraciones y dónde se pierde el tiempo'),

  makeBlock('b04', 'El plazo total de un proyecto de nave nueva en México varía significativamente según el escenario. Un BTS simple dentro de parque industrial, de 5,000 a 10,000 m², puede entregarse en 8 a 10 meses. Un BTS para manufactura dentro de parque, de 10,000 a 20,000 m², requiere entre 12 y 15 meses. Proyectos con requerimientos especiales de 15,000 a 30,000 m² se extienden a 15–18 meses. Un greenfield fuera de parque, que implica gestión de terreno, permisos autónomos e infraestructura de servicios desde cero, rara vez se termina en menos de 18 a 24 meses. Mega-proyectos de 50,000 m² o más pueden superar los 36 meses.'),

  makeBlock('b05', 'American Industries reporta para BTS de 7,400 a 11,100 m² dentro de parque: entrega beneficiosa en el mes 6 y entrega final en el mes 7. Ese cronograma es real para proyectos que arrancan sin obstáculos de permisos ni backlog de desarrollador. Es también el escenario más favorable posible, no el escenario típico.'),

  makeBlock('b06', 'Las fases se distribuyen así: estudios previos en paralelo a gestión de terreno, semanas 1 a 8; diseño e ingeniería, traslapado con estudios, semanas 4 a 14; gestión de permisos, variable según ubicación, semanas 8 a 20 en parque o hasta semana 60 fuera de parque; cimentación, 3 a 8 semanas; estructura metálica o tilt-up, 3 a 14 semanas según sistema; instalaciones MEP, 6 a 12 semanas en paralelo con acabados; acabados y certificación de Protección Civil, 4 a 8 semanas. El traslape entre fases es donde los proyectos bien gestionados recuperan tiempo; es también donde los proyectos mal coordinados acumulan retrasos en cascada.'),

  makeBlock('b07', 'La mecánica de suelos —regulada por la norma NMX-C-430-ONNCCE-2011— tarda entre 3 y 5 semanas. La topografía requiere 2 a 4 semanas adicionales. El anteproyecto arquitectónico ocupa 2 a 4 semanas; el proyecto ejecutivo completo, incluyendo ingeniería estructural, hidráulica, eléctrica y de instalaciones especiales, requiere 4 a 8 semanas adicionales, y hasta 12 semanas en proyectos con requerimientos complejos de proceso. Estos plazos se pueden comprimir con equipos de ingeniería más grandes y más costosos, pero tienen un límite físico: los estudios de suelos no pueden acelerarse más allá de lo que permite el proceso de muestreo y laboratorio.'),

  makeH2('h02', 'Dentro de parque vs. terreno independiente: la diferencia que puede ser de 9 meses'),

  makeBlock('b08', 'La variable que más impacto tiene en el cronograma total, y la que con mayor frecuencia se subestima en la planificación inicial, es la ubicación: dentro de un parque industrial establecido versus en un terreno independiente fuera de parque.'),

  makeBlock('b09', 'Dentro de un parque industrial consolidado, los permisos de construcción funcionan en un sistema simplificado. La licencia de construcción LC-1 del Ayuntamiento de Mexicali, el visto bueno de uso de suelo y la aprobación de Protección Civil se gestionan en un entorno donde el parque ya tiene toda la infraestructura básica aprobada y donde el desarrollador tiene relaciones establecidas con las autoridades. El plazo total de permisos dentro de parque es de 4 a 8 semanas.'),

  makeBlock('b10', 'Fuera de parque, cada servicio y cada permiso se gestiona de forma autónoma. El uso de suelo, si no está ya autorizado para uso industrial, puede demorar meses en sí mismo. La Manifestación de Impacto Ambiental (MIA) ante SEMARNAT —obligatoria para proyectos fuera de parque industrial en la mayoría de las categorías— tiene plazos de revisión de 3 a 6 meses en condiciones normales, con posibilidad de información adicional que extiende ese plazo. Factibilidades de agua, electricidad y drenaje se tramitan de forma independiente ante CFE, CONAGUA y el municipio, cada una con sus propios tiempos de respuesta. El plazo total de permisos fuera de parque es de 3 a 12 meses.'),

  makeBlock('b11', 'La diferencia neta entre ambos escenarios —que puede alcanzar 9 meses en el peor caso— no aparece en los presupuestos de construcción. Tampoco aparece en la mayoría de los cronogramas que los desarrolladores de terrenos independientes presentan en las primeras reuniones. Aparece en el desempeño real del proyecto seis meses después de que se suponía que ya debería estar en construcción.'),

  makeBlock('b12', 'Existe además un factor adicional que afecta a proyectos en Baja California independientemente de su ubicación: el backlog de los propios desarrolladores de parques. En un mercado donde la absorción bruta impulsada por nearshoring alcanzó 1.7 millones de metros cuadrados en el tercer trimestre de 2024, los desarrolladores con mayor demanda tienen proyectos comprometidos con meses de anticipación. Un cliente nuevo puede esperar entre 3 y 6 meses para que el desarrollador tenga capacidad de arrancar su BTS, incluso si ya tiene el lote seleccionado y el contrato firmado. Esos meses no están en ningún cronograma de construcción.'),

  makeH2('h03', 'El cuello de botella que nadie menciona: CFE y la energía eléctrica'),

  makeBlock('b13', 'El factor que con mayor frecuencia convierte un proyecto de 10 meses en un proyecto de 18 meses en Baja California no es la construcción: es la conexión eléctrica. CFE tiene un backlog de 6 a 12 meses para conexiones de carga industrial superior a 500 kW en Mexicali y el resto de Baja California. En mayo de 2024, el CENACE —Centro Nacional de Control de Energía— declaró emergencia nacional por saturación de la red eléctrica. El boom de nearshoring generó una demanda de capacidad instalada que superó la velocidad a la que CFE puede ampliar su infraestructura de transmisión y distribución.'),

  makeBlock('b14', 'El impacto práctico para un proyecto industrial es concreto: una nave puede estar físicamente terminada, con estructura, instalaciones y acabados completos, y no poder iniciar operaciones porque la conexión eléctrica de alta tensión no está disponible. La nave existe; la energía para operarla, no. Este escenario —documentado en múltiples proyectos en el norte de México durante 2023 y 2024— es lo que los especialistas del sector denominan "dark buildings": edificios listos que no pueden operar.'),

  makeBlock('b15', 'Dentro de un parque industrial establecido, este riesgo está mitigado. El parque ya tiene su subestación instalada y su capacidad contratada con CFE; la conexión de una nueva nave al sistema del parque es un proceso interno de semanas, no una nueva gestión con CFE que dura meses. Esta es quizás la ventaja más subestimada de operar dentro de un parque consolidado frente a un terreno independiente: no solo los permisos son más rápidos, sino que la energía eléctrica está disponible cuando termina la construcción.'),

  makeBlock('b16', 'Para proyectos fuera de parque que requieren alta tensión, la recomendación de los especialistas en el sector es gestionar la factibilidad eléctrica ante CFE antes de comprometer el terreno, no después. Un terreno que no tiene factibilidad eléctrica garantizada para la demanda proyectada del proceso productivo no es un terreno viable, independientemente de su precio y su ubicación geográfica.'),

  makeH2('h04', 'Build-to-suit vs. nave existente: la ecuación correcta para cada perfil'),

  makeBlock('b17', 'El debate entre rentar una nave existente y encargar un BTS tiene una respuesta diferente según el perfil de la operación. Para entenderla, es necesario separar lo que cada opción ofrece realmente de lo que promete en papel.'),

  makeBlock('b18', 'Una nave existente ofrece disponibilidad inmediata. En el mercado de Mexicali con una vacancia de aproximadamente 6.3% en 2025 —alrededor de 250,000 m² disponibles sobre un inventario que creció de 25 millones de pies cuadrados en 2018 a 40 millones en 2024—, hay opciones en distintos rangos de superficie. La limitación es la especificidad: una nave de inventario rara vez cumple al 100% los requerimientos de una operación de manufactura especializada. Los tenant improvements —adaptaciones al espacio para el proceso productivo del inquilino— pueden ser significativos en costo y en tiempo de ejecución, y en algunos casos el costo de las adaptaciones acerca el total al costo de un BTS sin la ventaja de un espacio diseñado desde cero.'),

  makeBlock('b19', 'Un BTS ofrece la posibilidad de diseñar el espacio desde cero: clear height optimizado para el proceso, distribución de dock doors según el flujo de materiales, capacidad eléctrica dimensionada para la demanda real, sistemas de piso nivelados a los estándares FF/FL que requiere el equipo de manejo de materiales. En 2024, el 22% de la distribución de espacios en el mercado mexicano correspondió a BTS; las proyecciones indican que más del 55% de los edificios completados en 2026 serán BTS personalizados. La tendencia refleja que las operaciones de manufactura avanzada tienen requerimientos de instalación que pocas naves de inventario pueden satisfacer sin modificaciones mayores.'),

  makeBlock('b20', 'La ecuación correcta depende de cuánto tiempo puede esperar la operación para iniciar. Si el inicio de operaciones puede programarse con 10 a 15 meses de anticipación, un BTS dentro de parque ofrece un espacio optimizado para el proceso a un costo total comparable o menor que una nave existente más los tenant improvements. Si el inicio de operaciones es inmediato o en menos de seis meses, la nave existente es la única opción, con la aceptación explícita de sus limitaciones. Los inquilinos en México pre-alquilan naves hasta 18 meses antes de que estén disponibles precisamente porque entendieron esta ecuación.'),

  makeH2('h05', 'El costo de un mes de retraso: lo que no aparece en el presupuesto de obra'),

  makeBlock('b21', 'Los presupuestos de construcción documentan con precisión el costo de la obra: materiales, mano de obra, equipos, honorarios de ingeniería. Lo que rara vez aparece en esos presupuestos es el costo financiero de cada semana que el proyecto se extiende más allá del plazo comprometido. Para una operación de manufactura de mediana escala, ese costo puede ser el dato más relevante de toda la evaluación financiera del proyecto.'),

  makeBlock('b22', 'Para un proyecto de construcción de 10 a 20 millones de dólares, los costos directos de paralización —equipos detenidos, personal en espera, contratos suspendidos— se estiman entre 50,000 y 150,000 dólares por semana. Sobre un crédito de 10 millones de dólares, cada mes adicional de plazo representa entre 60,000 y 100,000 dólares en intereses no productivos. Las penalidades típicas en contratos BTS en México se estructuran como renta diferida en proporción uno a uno por día de retraso, o como porcentaje del valor total del proyecto entre 0.1% y 0.3% por día. Para un proyecto de 15 millones de dólares, eso representa entre 15,000 y 45,000 dólares por día de retraso.'),

  makeBlock('b23', 'El componente más significativo, y el menos visible en los modelos financieros, es el ingreso no generado por la operación que no inicia. Una operación de manufactura que genera entre 2 y 5 millones de dólares mensuales de ingreso pierde entre 500,000 y 1.25 millones de dólares en ingresos por cada semana de retraso en el inicio de operaciones. Ese número no aparece en el presupuesto de la obra porque no es un costo de construcción: es el costo de oportunidad del tiempo perdido. Para un VP de Operaciones o un CFO que evalúa el riesgo del proyecto, es frecuentemente el número más importante.'),

  makeBlock('b24', 'Los contratos de arrendamiento en México incluyen ampliamente cláusulas de fuerza mayor que el desarrollador puede invocar en caso de retrasos en permisos gubernamentales. Eso significa que el riesgo de los retrasos que provienen de CFE, de SEMARNAT o del Ayuntamiento, que son los más frecuentes y los más largos, puede no estar cubierto por las penalidades contractuales. Antes de firmar, la pregunta correcta es qué retrasos específicos están excluidos de las penalidades al desarrollador y quién absorbe el costo de esos retrasos.'),

  makeH2('h06', 'México vs. Asia: el tiempo total de puesta en marcha como ventaja comparativa'),

  makeBlock('b25', 'La comparativa entre México y Asia en tiempo de puesta en marcha de una nueva operación manufacturera rara vez se hace correctamente. Los análisis superficiales comparan la duración de la construcción de la nave —donde China tiene ventaja en plazos, con 6 a 12 meses frente a 9 a 14 meses en Baja California— y concluyen que Asia es más rápida. Esa comparativa ignora el componente que más tiempo consume en el proceso total: el movimiento y despacho del equipo productivo.'),

  makeBlock('b26', 'El tiempo de tránsito de equipo y maquinaria desde China hacia una planta en el norte de México toma de 3 a 5 semanas por vía marítima, más 5 a 15 días de despacho aduanal en el régimen general. El mismo equipo desde México hacia Estados Unidos tarda 3 a 7 días de tránsito terrestre, con despacho aduanal de 1 a 3 días bajo USMCA. Para una empresa que opera cadenas de suministro con destino en el mercado estadounidense, esa diferencia en tiempos de respuesta no es solo un dato logístico: es la diferencia entre un lead time de 10 semanas y uno de 3 semanas, según reporta un fabricante de muebles que completó la migración de China a México.'),

  makeBlock('b27', 'El tiempo total de puesta en marcha —desde decisión de inversión hasta inicio de producción— es de 12 a 18 meses en México versus 15 a 24 meses para una operación equivalente en China. La diferencia se amplía cuando se considera que una operación en México con tarifa de flete de contenedor de 40 pies Tijuana–Los Ángeles de aproximadamente 600 dólares compite con una tarifa equivalente desde China de 7,000 a 8,378 dólares. Los 3 a 6 meses de ventaja en tiempo de puesta en marcha en México, combinados con la reducción estructural en costos logísticos, son el argumento cuantitativo que los CFOs de empresas que evalúan nearshoring encuentran más difícil de ignorar.'),

  makeBlock('b28', 'La desventaja real de México en este contexto no es el plazo de construcción: es la escasez de mano de obra técnica especializada. El 35% de los fabricantes que operan en México reportan dificultades para conseguir trabajadores técnicos especializados, particularmente en electricidad industrial, controles, comisionamiento y HVAC. Esa escasez afecta tanto el plazo de construcción —la fase de instalaciones MEP es la más afectada por déficit de mano de obra calificada— como el inicio de operaciones de manufactura avanzada. Es un factor que los cronogramas optimistas rara vez incorporan.'),

  // Cierre con mención natural de Grupo Nelson
  makeBlock('b29', 'La planificación correcta de un proyecto de nave industrial en México parte de aceptar que el cronograma tiene más variables de las que aparecen en cualquier presentación inicial. El backlog de CFE, la capacidad del desarrollador para arrancar en el plazo comprometido, los plazos reales de permisos según la ubicación del proyecto, y la disponibilidad de mano de obra técnica especializada son factores que determinan si el inicio de operaciones ocurre en la fecha planeada o seis meses después. El equipo de Grupo Nelson, con cuatro millones de pies cuadrados desarrollados en Mexicali y experiencia en proyectos BTS para manufactura aeroespacial, manufactura electrónica y logística de alto volumen, trabaja con cronogramas que incorporan estos factores desde la primera reunión de planeación —no como contingencias a descubrir en la ejecución, sino como variables gestionables cuando se identifican con suficiente anticipación.'),

  // Bloque de fuentes
  makeBlock('b_fuentes', 'Fuentes: American Industries Group, BTS delivery timelines Mexicali; Ayuntamiento de Mexicali, Licencia de Construcción LC-1 e Información Catastral; CENACE, Declaratoria de emergencia red eléctrica nacional mayo 2024; Baker Institute for Public Policy, The Power Problem: Mexico\'s Energy Sector and Nearshoring (2024); CBRE Mexico, MarketView Industrial Baja California Q3–Q4 2024; JLL Mexico, Industrial Market Outlook México 2024–2025; Cushman & Wakefield, Mexico Industrial Report 2024; Solili, Mercado industrial Mexicali 2024–2025; BCG, Nearshoring in Mexico 2024; AMPIP, 128 parques industriales México; Mexico Business News, Labor shortage in Mexico\'s industrial sector (2024); NMX-C-430-ONNCCE-2011, Mecánica de suelos — Especificaciones; 360enconcreto, Construcción tilt-up en México; TACNA, México vs. China manufacturing comparison; Trangistics, Impacto financiero de retrasos en proyectos industriales; Sindma, Permisos industriales México; Sagepub / Climate Research, Temperatura promedio Mexicali; SEMARNAT, Manifestación de Impacto Ambiental procedimientos.'),
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
