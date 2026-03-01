/**
 * Parcha el post de blog: Clear Height: Por Qué 36 Pies Puede Transformar tu Operación de Almacenamiento
 * Documento ID: kllPxzrZvj3u6Zg4KwYLEy
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KwYLEy'

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

const description = 'El clear height no es un número cosmético en el contrato de arrendamiento. Es el parámetro que determina cuántos niveles de rack puedes instalar, qué montacargas puedes operar y si tu operación puede escalar sin cambiarse de nave. Este análisis descompone el impacto operativo real de cada pie de altura —y los casos donde 36 pies son más de lo que necesitas.'

const blocks = [
  makeBlock('b01', 'Un director de operaciones de una empresa de distribución de consumo firmó el contrato de arrendamiento de su nueva nave en Monterrey sin preguntar una sola pregunta sobre el clear height. El edificio tenía una eave height de 38 pies —lo decía en el brochure—. Parecía suficiente. Ocho semanas después, cuando el proveedor de racks llegó a hacer el levantamiento para instalar el sistema de almacenamiento, la noticia fue distinta: los sprinklers ESFR colgaban 26 pulgadas desde el techo, las vigas transversales bajaban otros 14 pulgadas en los tramos más críticos, y la altura libre efectiva quedaba en 33 pies. Un nivel de rack menos. Doce por ciento menos de capacidad de almacenamiento sobre la misma huella, en una nave que ya había firmado a 10 años.'),
  makeBlock('b02', 'Esa brecha entre eave height y clear height efectivo es el error más caro y más frecuente que cometen las empresas al evaluar propiedades industriales. Y es evitable con exactamente una pregunta al desarrollador antes de firmar.'),

  makeH2('h01', 'Qué es exactamente el clear height (y qué no es)'),
  makeBlock('b03', 'El clear height —o altura libre— es la distancia vertical desde el piso terminado hasta el punto más bajo de cualquier obstrucción interior. No es la altura del techo. No es la eave height. Es la distancia al obstáculo más cercano, sea este la cabeza de un sprinkler, un ducto de HVAC, una luminaria suspendida o una viga transversal.'),
  makeBlock('b04', 'La distinción importa porque un edificio con 40 pies de eave height puede tener solo 36 pies de clear height si los sprinklers ESFR cuelgan 2 pies y las vigas bajan otros 2 pies en los tramos centrales. Esa diferencia de 4 pies no es abstracta: es exactamente un nivel de rack de almacenamiento selectivo. En una nave de 100,000 pies cuadrados, esos 4 pies representan entre 800,000 y 1,200,000 pies cúbicos de capacidad que existen en el contrato pero no en la operación.'),
  makeBlock('b05', 'Los cuatro elementos que más reducen el clear height efectivo en una nave industrial moderna son los sprinkler heads ESFR (Early Suppression Fast Response), que por su geometría de cobertura deben instalarse a profundidades de 20 a 26 pulgadas bajo el techo; los ductos de HVAC y sus cajas de distribución; las luminarias de LED industriales suspendidas en tramos largos sin plafón; y las vigas transversales de la estructura metálica, especialmente en las crujías centrales. En una nave mal especificada, la combinación de estos cuatro elementos puede consumir entre 4 y 6 pies del espacio entre la eave height y el clear height utilizable.'),

  makeH2('h02', 'Cómo llegamos aquí: la evolución del estándar en 50 años'),
  makeBlock('b06', 'En los años setenta y principios de los ochenta, la mayoría de las naves industriales en América del Norte operaban por debajo de los 20 pies de clear height. Era el estándar de la manufactura fordista: producción en línea, movimiento horizontal, poca necesidad de altura. El almacenamiento era en su mayor parte en piso o con estantería baja. Los montacargas contrapesados de la época tenían una altura de levantamiento que raramente superaba los 15 pies.'),
  makeBlock('b07', 'En los años ochenta, 20 pies comenzó a percibirse como especificación premium. En los noventa, la expansión del comercio global y el crecimiento del retail moderno empujaron la demanda hacia 24 pies. La lógica era simple: más variedad de SKUs, mayor necesidad de espacio vertical para compensar la imposibilidad de crecer en huella dentro de los parques industriales consolidados. Para los 2000, el estándar Clase A en mercados maduros se había movido a 28 y 32 pies.'),
  makeBlock('b08', 'La tendencia actual en 2024-2025 es contundente: el 82% de los edificios industriales propuestos en Estados Unidos ya especifican 36 pies como clear height estándar, según datos de Commercial Real Estate Loans. Las instalaciones de e-commerce y cold storage de nueva generación empujan el horizonte hacia 40 y 45 pies. En México, el estándar Clase A arranca hoy en 9.75 metros (32 pies) en los mercados más maduros, pero los proyectos nuevos especifican entre 10.5 y 12 metros —equivalente a 34-39 pies— y algunos proyectos especializados de manufactura aeroespacial y centros de distribución automatizados alcanzan los 14 metros (45 pies).'),

  makeH2('h03', 'Lo que los números realmente dicen: la física del espacio cúbico'),
  makeBlock('b09', 'La capacidad de una nave industrial no es una función del área en planta. Es una función del volumen. Y el volumen es el producto de la huella por la altura utilizable. Esa matemática es elemental, pero sus implicaciones operativas con frecuencia no se calculan antes de firmar el arrendamiento.'),
  makeBlock('b10', 'Una nave de 100,000 pies cuadrados con 24 pies de clear height tiene 2.4 millones de pies cúbicos de volumen utilizable. La misma nave con 36 pies de clear height tiene 3.6 millones de pies cúbicos: un 50% más de capacidad de almacenamiento sobre exactamente la misma huella. Si el costo del terreno y la construcción en planta son los factores dominantes en el costo total por pie cuadrado, ese incremento de volumen tiene un costo marginal notablemente bajo.'),
  makeBlock('b11', 'La diferencia entre 32 y 36 pies —que a primera vista parece modesta— incrementa la capacidad de almacenamiento entre un 10% y un 25% sobre la misma huella, dependiendo del sistema de racks y el equipamiento utilizado. En términos prácticos, representa una posición adicional de pallet en altura en sistemas de rack selectivo convencional. Para una operación con 5,000 posiciones de pallet activas, esa posición adicional equivale a entre 500 y 1,250 pallets más de capacidad sin aumentar un metro cuadrado de área arrendada.'),
  makeBlock('b12', 'El costo adicional de construcción al pasar de 32 a 36 pies es de aproximadamente 1.25 a 1.50 dólares por pie cuadrado sobre el costo base de construcción. Sobre un costo base típico de 50 dólares por pie cuadrado, ese incremento representa solo entre el 2.5% y el 3% del costo total —para obtener entre el 10% y el 25% más de capacidad cúbica. En cualquier análisis de retorno sobre inversión que se haga con seriedad, esa relación costo-beneficio es difícil de ignorar.'),

  makeH2('h04', 'Los equipos que el clear height habilita (o no)'),
  makeBlock('b13', 'El clear height no solo determina cuántos niveles de rack caben en la nave. Determina qué categoría de equipo de manejo de materiales puede operar en ella, lo cual a su vez determina la densidad de almacenamiento, la velocidad de picking y el costo operativo por pallet movilizado.'),
  makeBlock('b14', 'Los montacargas contrapesados convencionales tienen un tope operativo típico de entre 4 y 7 metros (13 a 23 pies) en sus configuraciones estándar. Los modelos de mast alto alcanzan aproximadamente 20 pies. Son el equipo base de cualquier nave industrial, pero su limitación en altura los hace inadecuados para aprovechar clear heights superiores a 24 pies en todo su potencial.'),
  makeBlock('b15', 'Los reach trucks estándar alcanzan entre 8 y 12 metros de altura de levantamiento, con modelos que superan los 27.5 pies (8.4 metros). Son ideales para sistemas de rack selectivo de múltiple nivel en pasillos de aproximadamente 8 pies de ancho. Para aprovechar un clear height de 36 pies con rack selectivo convencional, el reach truck es el equipo de referencia —y 36 pies es exactamente el rango donde estos equipos operan en su máxima eficiencia sin requerir ingeniería especial de piso o sistemas de guiado.'),
  makeBlock('b16', 'Los sistemas VNA (Very Narrow Aisle) con montacargas turret o trilaterales elevan significativamente la densidad de almacenamiento al operar en pasillos de entre 56 y 72 pulgadas —menos de la mitad del pasillo de un reach truck convencional. La altura de levantamiento de estos equipos alcanza entre 40 y 49 pies (12 a 15 metros), lo que los hace operables únicamente en naves con clear heights superiores a 36 pies y preferentemente en el rango de 40 a 45 pies. Requieren sistemas de guiado de piso (wire guidance o rail guidance) y pisos con tolerancias de planimetría más estrictas, lo que implica inversión adicional en losa.'),
  makeBlock('b17', 'Los sistemas AS/RS (Automated Storage and Retrieval Systems) de tipo unit-load pueden operar desde aproximadamente 36 pies hasta más de 60 pies de clear height. Las versiones compactas son viables a partir de 36 pies; los sistemas de grúa apiladora de alta densidad requieren 50 pies o más. Para una operación que contempla automatización en el horizonte de tres a cinco años, la decisión del clear height hoy es la decisión de si esa automatización será posible sin mudarse de nave.'),

  makeH2('h05', 'El costo real de subir 4 pies (y cuándo no vale la pena)'),
  makeBlock('b18', 'Antes de entrar en los costos, conviene ser explícito sobre los casos donde 36 pies son más de lo que la operación necesita. Porque un análisis que solo presenta el caso a favor de mayor altura no es análisis técnico: es marketing.'),
  makeBlock('b19', 'Para manufactura ligera sin sistemas de rack alto, con 20 a 24 pies de clear height es suficiente. Para almacenamiento de granel en piso o estantería baja con picking manual de hasta 8 o 12 pies de altura, la inversión en clear height adicional no produce retorno medible. Para líneas de ensamblaje sin grúas ni equipos verticales, con 18 a 24 pies el espacio es adecuado. Para manufactura aeroespacial, cada proyecto es tan específico en función del tamaño de los jigs y fixtures que el requerimiento puede ir de 30 a 50 pies o más, y la decisión requiere ingeniería de proceso, no una tabla de referencia.'),
  makeBlock('b20', 'Para las operaciones donde sí aplica, los costos adicionales de escalar de 32 a 36 pies incluyen el incremento de construcción de 1.25 a 1.50 dólares por pie cuadrado mencionado anteriormente; el grosor de losa de piso que típicamente debe incrementarse de 6 pulgadas a mayor espesor para soportar las cargas de rack en mayor altura y los sistemas de guiado de VNA si se contemplan; y los sistemas de HVAC, que representan aproximadamente el 15% del consumo eléctrico en naves industriales y en alturas mayores requieren sistemas de destratificación (ventiladores de techo o jet fans) para evitar que el calor se acumule en la parte superior sin descender a nivel de operación.'),
  makeBlock('b21', 'El sistema de supresión de incendios también cambia. Los sprinklers ESFR son aplicables hasta 45 pies de techo y 40 pies de almacenamiento, y son entre un 30% y un 50% más baratos que los sistemas de sprinklers in-rack que requieren las naves con alturas de almacenamiento superiores o con categorías de producto de mayor riesgo de incendio. Para techos superiores a 40 pies, se requiere atención especial a las tablas de la NFPA 13, lo que puede encarecer el sistema contra incendio de forma significativa. 36 pies es el punto donde el ESFR funciona sin ingeniería especial y el costo adicional de supresión no erosiona el beneficio de la altura.'),

  makeH2('h06', 'El estándar actual en México y lo que el nearshoring está cambiando'),
  makeBlock('b22', 'El norte de México concentró el 84% de la demanda industrial generada por el nearshoring entre 2023 y 2024, absorbiendo aproximadamente 1.4 millones de metros cuadrados de los 1.7 millones de metros cuadrados de demanda nacional, según datos de CBRE México. Esa concentración tiene una causa estructural: la proximidad a la frontera con Estados Unidos reduce los lead times de exportación y el costo de transporte terrestre a los centros de distribución en el Sun Belt norteamericano.'),
  makeBlock('b23', 'El efecto del nearshoring sobre los estándares técnicos de las naves ha sido directo: las empresas multinacionales que relocalizan operaciones desde Asia traen consigo los estándares de sus mercados de origen, que son los estándares Clase A norteamericanos o europeos. Eso ha elevado el piso mínimo aceptable en los mercados industriales del norte del país. La brecha entre Clase A y Clase B se ha ampliado, y los activos que hace diez años se arrendaban sin dificultad hoy enfrentan mayor tiempo de absorción porque no cumplen los requerimientos técnicos de los inquilinos más activos del mercado.'),
  makeBlock('b24', 'En Baja California específicamente, el inventario industrial de Mexicali creció de aproximadamente 25 millones de pies cuadrados en 2018 a más de 40 millones de pies cuadrados en los últimos años, impulsado en gran parte por la demanda de manufactura electrónica, dispositivos médicos y producción aeroespacial. Los proyectos de nueva construcción en esta región especifican clear heights de entre 10.5 y 12 metros (34 a 39 pies) como estándar, alineados con los requerimientos de los inquilinos que están evaluando la frontera como plataforma de exportación hacia California, Arizona y Nevada.'),
  makeBlock('b25', 'Para un Director de Operaciones o Supply Chain Manager que está evaluando una nave en este mercado, la pregunta del clear height no es solo una especificación técnica. Es un indicador del horizonte de vida útil del activo para su operación. Una nave de 32 pies puede ser perfectamente adecuada hoy para la operación actual. La pregunta relevante es si seguirá siendo adecuada cuando la operación escale, cuando el mix de SKUs cambie, o cuando la presión competitiva exija automatizar el almacenamiento. Firmar a 10 años en un activo que no tiene el headroom para escalar es una decisión que se paga en mudanzas, interrupciones operativas y pérdida de eficiencia.'),
  makeBlock('b26', 'Grupo Nelson, con más de seis décadas operando en el mercado industrial de Mexicali, ha sido parte de esa evolución desde los estándares de los años setenta hasta las especificaciones actuales de sus parques. Para quienes están en proceso de evaluación de activos en Baja California y necesitan entender qué opciones existen hoy en el mercado —y cuáles cumplen con los requerimientos técnicos de una operación de distribución o manufactura moderna—, es un punto de referencia directo en la región.'),

  makeBlock('b_fuentes', 'Fuentes: Industrial Property Loan / Commercial Real Estate Loans — Clear Height Definition and Standards · SIOR Blog — Industrial Building Height Evolution and Market Trends · Edmonton Commercial Real Estate — Warehouse Height Historical Standards · Rooflifters — Clear Height Impact on Storage Capacity 2024 · Tolj Commercial Real Estate — Clear Height Analysis · Raymond Corporation — VNA Turret Truck Specifications · Crown Equipment — Trilateral Forklift Height Capabilities · Gregory Poole Lift — Reach Truck Specifications · Bradford Systems — AS/RS Unit Load Clear Height Requirements · Matco Distributors — Selective Rack Upright Heights · Hegel Engineering — ESFR Sprinkler Cost Analysis · NFPA 13 — Standard for the Installation of Sprinkler Systems · EUA Architects — 36-Foot Clear Height Industrial Standard · Spot2.mx — Mexico Industrial Real Estate Standards · Sedetec — Industrial Park Specifications Mexico · CBRE Mexico — Nearshoring Industrial Demand Report 2023-2024 · RealEstateMarket.com.mx — Nearshoring y Estándares Clase A · Cluster Industrial — Baja California Industrial Market 2024'),
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
