/**
 * Parcha el post de blog: ¿Qué Hace Realmente Clase A a una Nave Industrial? La Guía Técnica Definitiva
 * Documento ID: kllPxzrZvj3u6Zg4KwYKMS
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KwYKMS'

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

const description = 'El término "Clase A" es el más usado —y el más abusado— en el mercado de naves industriales en México. No existe ninguna norma oficial que lo defina. Esta guía técnica descompone los criterios reales que separan una nave Clase A genuina de un inmueble que solo lleva esa etiqueta en el brochure: clear height, pisos FF/FL, estructura tilt-up, sistemas ESFR, certificaciones LEED y lo que el nearshoring está cambiando en el estándar de Baja California.'

const blocks = [
  makeBlock('b01', 'Cuando un VP de Operaciones de una empresa norteamericana que está evaluando nearshoring en Baja California pide una lista de naves Clase A disponibles en Mexicali, recibe exactamente lo que esperaría: un catálogo extenso de propiedades que se describen a sí mismas como Clase A, con fotografías de fachadas tilt-up, docas con sellos y patios amplios. Lo que rara vez recibe es una explicación de qué significa técnicamente esa clasificación, quién la otorgó, bajo qué criterios y si esos criterios son compatibles con los requerimientos de su operación específica.'),
  makeBlock('b02', 'La respuesta honesta que muy pocos brokers ofrecen voluntariamente es esta: en México no existe ninguna norma oficial que defina qué hace a una nave industrial "Clase A". La clasificación es autodeclarada por el desarrollador, validada (o no) por el broker, y adoptada por convención del mercado internacional —particularmente de los criterios que utilizan firmas como CBRE, JLL y Cushman & Wakefield. Esta guía descompone qué hay detrás de esa etiqueta cuando el inmueble la merece, y qué falta cuando no.'),

  makeH2('h01', 'La verdad incómoda: "Clase A" en México no tiene definición oficial'),
  makeBlock('b03', 'La NMX-R-046-SCFI-2015 es la norma mexicana que más se menciona en el contexto de la clasificación industrial. Sin embargo, lo que esa norma regula son los parques industriales —el contenedor, la infraestructura urbana, los servicios del parque— no las especificaciones técnicas de las naves individuales dentro de él. Un parque puede cumplir la NMX-R-046 y contener naves con clear heights de 7 metros, pisos de baja planimetría y sistemas contra incendio inexistentes. La norma del parque no dice nada sobre la nave.'),
  makeBlock('b04', 'La clasificación A, B y C que el mercado utiliza es una convención adoptada de los estándares de brokers internacionales y sistematizada por plataformas como Spot2, Propty y AI Real Estate. No existe un organismo certificador, no existe una auditoría obligatoria, no existe consecuencia legal por autodeclarar una nave como Clase A cuando no cumple los criterios de mercado. Esto importa porque en un mercado donde el nearshoring ha ampliado la brecha entre lo que se comercializa como Clase A y lo que exigen las empresas norteamericanas que están llegando a México, la diferencia puede costar millones de dólares en ineficiencias operativas, retrofits costosos o mudanzas anticipadas.'),
  makeBlock('b05', 'La tabla de referencia del mercado es la siguiente: Clase A corresponde a naves con menos de 10 años de antigüedad, clear height de 9.75 metros o más, construcción tilt-up, sistema ESFR, docas mecánicas o hidráulicas con sellos, y patio de concreto con 35 metros o más de profundidad. Clase B abarca naves de 10 a 20 años, clear height de 7 a 9 metros, estructura convencional, sprinklers tradicionales y docas básicas. Clase C corresponde a naves de más de 20 años, clear height inferior a 7 metros, mampostería u obsolescencia estructural, sin sistema contra incendio y sin docas formales. La distancia entre A y C no es de matiz: es funcional.'),

  makeH2('h02', 'Las especificaciones físicas que definen la diferencia real'),
  makeBlock('b06', 'El clear height —altura libre desde el piso terminado hasta el punto más bajo de cualquier obstrucción, sea una viga, un sprinkler o un ducto— es el parámetro que más directamente determina la capacidad cúbica de almacenamiento y el equipamiento de manejo de materiales que puede operar en la nave. El rango típico en naves Clase A de nueva construcción en México es de 9.75 metros (32 pies) a 14 metros (45 pies); la construcción nueva más común especifica entre 11 y 12 metros. El estándar anterior —vigente hasta mediados de la década pasada— era de 8 metros, y el nearshoring lo ha vuelto insuficiente para los requerimientos de manufactura y distribución de las empresas multinacionales que están llegando.'),
  makeBlock('b07', 'La diferencia práctica entre una nave de 9.75 metros y una de 12 metros no es de 2.25 metros abstractos: es la diferencia entre instalar cuatro o cinco niveles de rack selectivo en la misma huella. Un análisis de capitallinks.com.mx estima que una nave Clase A puede almacenar hasta 40% más producto en el mismo footprint que una nave Clase B equivalente, precisamente por la diferencia de altura útil. Para una operación de distribución con 80,000 posiciones de pallet activas, ese diferencial se traduce directamente en metros cuadrados que no necesita arrendar.'),
  makeBlock('b08', 'Los pisos industriales se especifican con dos métricas medidas bajo el estándar ASTM E1155: FF (Floor Flatness, que mide variaciones en la superficie) y FL (Floor Levelness, que mide la inclinación relativa al nivel de referencia). Para operaciones con reach trucks convencionales, el mínimo funcional es FF 35 / FL 25. Para sistemas VNA (Very Narrow Aisle) o automatización de almacenamiento, los requerimientos escalan a FF 60+ / FL 50+. Las naves Clase A en México especifican típicamente FF 35–50 / FL 25–35, con resistencia de losa de 6 a 10 toneladas por metro cuadrado. Una nave cuyo brochure no menciona las métricas FF/FL —o que las menciona sin el método de medición— es una señal de alerta: o no se midieron o no se quiere que el inquilino las sepa.'),
  makeBlock('b09', 'La construcción tilt-up —paneles de concreto colados en el sitio y erigidos con grúa— es el método constructivo que define estructuralmente a las naves Clase A. Sus ventajas sobre la estructura metálica convencional o la mampostería son funcionales y financieras: mayor resistencia al fuego, menor mantenimiento a largo plazo, mejor inercia térmica para el control de temperatura interior, y según la Tilt-Up Concrete Association, una reducción de hasta 10% en costos de construcción en proyectos de gran escala. Para el inquilino, la construcción tilt-up es también un indicador de vida útil del activo: una nave tilt-up bien construida tiene un horizonte de 40 a 50 años con mantenimiento normal.'),
  makeBlock('b10', 'Las docas de carga son el punto de contacto entre la nave y la cadena de suministro, y sus especificaciones tienen impacto directo en la velocidad de carga y descarga, la seguridad operativa y la compatibilidad con los trailers que el inquilino opera. El estándar Clase A especifica un ratio de una doca por cada 800 a 1,000 metros cuadrados de nave, con dock levelers mecánicos o hidráulicos, dock seals laterales y superiores, y bumpers de impacto. La altura de la plataforma de doca es 1.20 metros sobre el nivel del patio —el estándar para trailers de 53 pies. El patio debe tener al menos 35 metros de profundidad para que un trailer de 53 pies pueda maniobrar; 38 a 45 metros es el rango recomendado. El material importa: concreto, no asfalto. El asfalto en patios industriales activos se deteriora en tres a cinco años bajo la carga de trailers pesados y requiere inversión recurrente en reparaciones.'),

  makeH2('h03', 'Los sistemas técnicos que separan lo real de lo comercializado'),
  makeBlock('b11', 'El sistema contra incendio es el diferenciador técnico más costoso de retrofitar si la nave no lo tiene desde la construcción, y el más relevante para la cobertura de seguros y el cumplimiento de las políticas de seguridad de las multinacionales. La diferencia entre Clase A y todo lo demás está en el tipo de sistema: ESFR (Early Suppression Fast Response) versus sprinkler convencional CMDA.'),
  makeBlock('b12', 'Un sprinkler convencional descarga entre 30 y 60 GPM (galones por minuto) por cabeza cuando se activa. Un sistema ESFR descarga hasta 100 GPM, activando un número menor de cabezas con mayor caudal para suprimir el incendio en su fase inicial en lugar de intentar controlarlo cuando ya se propagó. La norma aplicable es NFPA 13, Capítulo 23; el mantenimiento bajo NFPA 25. Los límites de aplicación del ESFR son techo máximo de 13.7 metros (45 pies) y almacenamiento máximo a 12.2 metros (40 pies), lo que es compatible con el rango de clear heights Clase A más comunes. La ventaja operativa más valorada por los inquilinos es que el ESFR elimina la necesidad de sprinklers in-rack, lo que reduce el costo del sistema de supresión entre un 30% y un 50% respecto a una solución in-rack convencional, y simplifica radicalmente cualquier reconfiguración del layout de racks.'),
  makeBlock('b13', 'La iluminación en naves Clase A se especifica con LED y sensores de movimiento u ocupación. Los niveles de referencia según el estándar IES RP-7-21 son: 20 a 30 foot-candles (200 a 325 lux) para almacén general; 50 foot-candles (540 lux) para manufactura de partes medianas; 100 foot-candles (1,080 lux) para ensamble e inspección de precisión; y 10 a 20 foot-candles en pasillos de tránsito. Una nave que todavía usa luminarias de vapor de sodio o metal halide es, independientemente de cualquier otra especificación, una nave con costos operativos de iluminación significativamente mayores y con un programa de mantenimiento que es un pasivo operativo constante.'),
  makeBlock('b14', 'La infraestructura eléctrica en naves Clase A incluye subestación propia dentro del parque o dedicada a la nave, con capacidad suficiente para las cargas industriales del inquilino. En México, la tarifa aplicable a instalaciones industriales con demanda igual o superior a 100 kW es la GDMTH (Gran Demanda en Media Tensión Horaria), con un costo promedio de aproximadamente 0.11 dólares por kWh. Baja California opera en un sistema eléctrico aislado de la red nacional —interconectado con la red de California, Estados Unidos—, lo que lo diferencia del resto del país en términos de tarifas, confiabilidad y gestión de capacidad. Este factor es específico de la región y debe considerarse en el análisis de costos operativos de cualquier nave en el estado.'),

  makeH2('h04', 'Las certificaciones que un inquilino exigente debería solicitar'),
  makeBlock('b15', 'LEED (Leadership in Energy and Environmental Design) es el sistema de certificación de edificación sostenible más reconocido internacionalmente, con cuatro niveles: Certified (40–49 puntos), Silver (50–59), Gold (60–79) y Platinum (80 o más). En el contexto industrial, la certificación va más allá de la responsabilidad ambiental: tiene impacto directo en el costo operativo del edificio vía eficiencia energética e hídrica, en la capacidad de atraer talento en mercados competitivos y en el cumplimiento de las políticas ESG corporativas de las multinacionales.'),
  makeBlock('b16', 'México ocupa el sexto lugar mundial en proyectos certificados LEED, con 104 proyectos y más de 2.2 millones de metros cuadrados certificados en 2024, según datos del GBCI. Prologis México lidera el sector industrial con 25 edificios certificados, incluyendo 7 Gold y 8 Silver. El dato más relevante de 2024 en este ámbito es que el Tlanelpark IV en la Ciudad de México se convirtió en el primer proyecto industrial manufacturero del mundo en obtener la certificación LEED v5. La relevancia práctica para quienes evalúan naves es directa: empresas Tier 1 como Tesla, BMW y Johnson Controls exigen como mínimo LEED Silver o su equivalente EDGE en las naves que arriendan, y esa exigencia está bajando en la cadena de proveedores.'),
  makeBlock('b17', 'C-TPAT (Customs-Trade Partnership Against Terrorism) es un programa voluntario de la CBP (Customs and Border Protection) de Estados Unidos relevante para cualquier operación que exporte a ese mercado. Para fabricantes mexicanos, el acceso es por invitación. El beneficio operativo es concreto: empresas certificadas tienen entre cuatro y seis veces menos probabilidad de ser sujetas a inspección en la frontera, según datos de la CBP, lo que reduce tiempos de cruce y costos de inventario en tránsito. México fue el primer país en establecer un programa equivalente por decreto, en 2016, por iniciativa de AMPIP con el SAT. Una nave en un parque con certificación C-TPAT o con infraestructura de seguridad compatible no es un lujo: es un requisito de la cadena de suministro de cualquier empresa que exporte a Norteamérica bajo estándares de seguridad fronteriza modernos.'),

  makeH2('h05', 'Lo que se comercializa como Clase A pero no lo es — la lista honesta'),
  makeBlock('b18', 'El problema operativo con la clasificación autodeclarada es que produce un segmento de mercado que técnicamente no corresponde ni a A ni a B: naves construidas en los últimos 10 años que tienen la apariencia exterior de Clase A —fachada tilt-up, parque cerrado, acceso controlado— pero que no cumplen las especificaciones internas que definen la clasificación. Para un Director de Supply Chain que evalúa propiedades bajo presión de tiempo y con información de marketing como única fuente, identificar estas brechas requiere un checklist técnico específico.'),
  makeBlock('b19', 'Las especificaciones que con mayor frecuencia se sobrevaloran o se omiten en propiedades que se comercializan como Clase A son las siguientes. Clear height de 8 a 9 metros: insuficiente para racks modernos de cinco o seis niveles y para la operación de reach trucks de alta capacidad; en el mercado actual se comercializa como Clase A lo que debería clasificar como Clase B por altura. Patios de asfalto en lugar de concreto: generan costos de mantenimiento recurrentes, se deterioran bajo carga pesada y son señal de una construcción que no siguió los estándares completos. Sprinklers convencionales en lugar de ESFR: el sistema convencional no cumple los requerimientos de seguridad de la mayoría de las pólizas industriales de multinacionales y obliga a sistemas in-rack que complican cualquier reconfiguración de layout.'),
  makeBlock('b20', 'Infraestructura eléctrica sin subestación dedicada o con potencia insuficiente para cargas industriales: este déficit no siempre es visible en el recorrido de la nave y puede descubrirse tardíamente, cuando la instalación de maquinaria o el escalamiento de la operación requieren capacidad adicional que no existe ni en la nave ni en el parque. Métricas FF/FL sin especificar o por debajo de FF 35/FL 25: la ausencia de estas cifras en la documentación técnica de la nave debe tratarse como que no se midieron, no como que son satisfactorias. Sin certificación LEED ni auditoría de seguridad independiente: en un mercado donde las multinacionales de primer nivel exigen documentación de sostenibilidad y seguridad, la ausencia de estas certificaciones reduce el universo de inquilinos potenciales y aumenta el tiempo de absorción del activo.'),

  makeH2('h06', 'El estándar en Mexicali y lo que el nearshoring está cambiando'),
  makeBlock('b21', 'Mexicali es hoy uno de los mercados industriales de mayor dinamismo en México. El inventario de la ciudad se sitúa entre 3.4 y 3.7 millones de metros cuadrados (aproximadamente 40 millones de pies cuadrados), con una renta promedio de 6.58 dólares por metro cuadrado al mes en el segundo trimestre de 2024 —un incremento interanual del 12%— y una vacancia del 6.3% a noviembre de 2025. El diferencial de renta entre Clase A y Clase B a nivel nacional se ubica en torno al 8.5% (7.18 vs. 6.62 dólares por metro cuadrado al mes en el primer trimestre de 2024), aunque en algunos submercados de Monterrey ese diferencial llega al 96% para activos con especificaciones superiores.'),
  makeBlock('b22', 'El nearshoring ha tenido un efecto directo y medible sobre los estándares técnicos que se demandan en el mercado. Las empresas multinacionales que relocalizan operaciones desde Asia traen consigo los estándares de sus mercados de origen —norteamericanos o europeos— y los aplican como condición no negociable en la selección de activos. Esto ha elevado el piso mínimo funcional en los mercados del norte del país: una nave con 8 metros de clear height que hace diez años absorbía sin dificultad hoy enfrenta ciclos de comercialización más largos porque no cumple los requerimientos de los inquilinos más activos.'),
  makeBlock('b23', 'En Baja California específicamente, la demanda de manufactura electrónica, dispositivos médicos y producción aeroespacial —sectores donde la región tiene una concentración histórica y donde el nearshoring está añadiendo volumen— exige naves con especificaciones precisas: clear heights de 10.5 a 12 metros, pisos con FF mínimo de 35 y resistencia de losa superior a 6 toneladas por metro cuadrado, sistemas ESFR funcionales, subestación eléctrica dedicada con capacidad para demandas industriales de media tensión, y acceso a certificaciones C-TPAT o equivalentes para operaciones de exportación. Los proyectos de nueva construcción en el mercado están especificando estos valores como punto de partida, no como diferenciador premium.'),
  makeBlock('b24', 'Para un ejecutivo que está evaluando opciones en este mercado, la pregunta relevante no es solo si una nave se describe como Clase A, sino cuáles de las especificaciones anteriores están documentadas, medidas por terceros y verificables en el contrato. La clasificación es un punto de partida para la conversación técnica, no el final de ella. Grupo Nelson, con más de seis décadas operando en el mercado industrial de Mexicali, puede proporcionar la documentación técnica específica de sus naves para que esa conversación se base en datos, no en brochures.'),

  makeBlock('b_fuentes', 'Fuentes: Propty Real Estate — Clasificación de naves industriales en México (Clase A, B, C) · NMX-R-046-SCFI-2015 — Parques Industriales: Requisitos · Real Estate Market MX — Nearshoring y el nuevo estándar Clase A industrial · Cluster Industrial — Clear height en naves industriales de México · Spot2.mx — Criterios de clasificación industrial A/B/C · Sedetec — Especificaciones técnicas de naves Clase A en México · AI Real Estate — Clasificación de inmuebles industriales · IFTI Flooring Experts — FF/FL Floor Flatness and Levelness Standards · ASTM E1155 — Standard Test Method for Determining FF Floor Flatness and FL Floor Levelness Numbers · QRFS — ESFR Sprinkler Systems: How They Work and When to Use Them · TERPconsulting — ESFR vs. In-Rack Sprinkler Systems · Hegel Engineering — ESFR Cost Analysis vs. Conventional Sprinkler Systems · NFPA 13 — Standard for the Installation of Sprinkler Systems (Capítulo 23) · NFPA 25 — Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems · IES RP-7-21 — Recommended Practice for Lighting Industrial Facilities · Tilt-Up Concrete Association — Tilt-Up Construction Cost and Performance Data · GBCI — LEED in Mexico 2024: Country Market Brief · USGBC — Tlanelpark IV LEED v5 Certification · CBP (U.S. Customs and Border Protection) — C-TPAT Program Overview · AMPIP — Programa C-TPAT México / SAT · SiiLA — Office Ratio in Mexican Industrial Properties · capitallinks.com.mx — Clase A vs Clase B: Diferencial de capacidad de almacenamiento · Tetakawi — Industrial Energy Costs in Mexico · Denali Energy Partners — GDMTH Tariff Analysis Mexico · CBRE Mexico — Nearshoring Industrial Demand 2023–2024 · Cluster Industrial — Baja California Industrial Market Outlook 2024–2025'),
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
