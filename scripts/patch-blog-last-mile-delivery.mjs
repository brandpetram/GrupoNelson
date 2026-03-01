/**
 * Parcha el post de blog: Last-Mile Delivery en Mexicali: La Infraestructura Logística que el Boom Manufacturero Todavía No Ha Construido
 * Documento ID: uqKP1CJoSsgXdCXPUwMYLn
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMYLn'

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

const description = 'Mexicali concentra más de 40 millones de pies cuadrados de espacio industrial y una población de 1.1 millones de habitantes, pero no tiene un hub de última milla propio. Este análisis descompone por qué la infraestructura logística no siguió el ritmo del boom manufacturero y qué representa esa brecha para operadores e inversores en la región.'

const blocks = [
  makeBlock('b01', 'Entre 2020 y 2024, Mexicali absorbió una cantidad inédita de inversión industrial. Las plantas que llegaron atraídas por el nearshoring —manufactura aeroespacial, dispositivos médicos, electrónica, autopartes— llenaron parques industriales que hace cinco años tenían vacancia de dos dígitos. El mercado industrial de Baja California sumó más de 18 millones de pies cuadrados en desarrollo activo para 2024, y Mexicali concentra una porción significativa de ese inventario. La narrativa dominante fue de éxito logístico: maquiladoras cruzando componentes por Calexico, exportaciones llegando a El Paso y San Diego en horas, no días.'),
  makeBlock('b02', 'Lo que esa narrativa no capturó es que toda esa infraestructura manufactura, consolida y exporta. Ninguna parte de ella fue diseñada para entregar pedidos a domicilio en la colonia Cuauhtémoc o para abastecer una dark store en el centro de Mexicali. El boom manufacturero y el boom del e-commerce ocurrieron en paralelo y en la misma ciudad, pero construyeron infraestructuras completamente distintas que todavía no se han encontrado. La última milla —el segmento más caro y más intensivo en operación de toda la cadena logística— sigue siendo, en Mexicali, una infraestructura que nadie ha construido todavía.'),

  makeH2('h01', 'Por qué la última milla es el segmento más caro de la cadena de suministro'),
  makeBlock('b03', 'En 2018, la última milla representaba el 41% del costo total de envío. Para 2024, ese porcentaje escala al 53% del costo total de la cadena de suministro. No es una anomalía: es el resultado de una estructura operativa que ninguna eficiencia en el primer o segundo tramo puede compensar por completo. El primer y segundo tramo de la logística —transporte de origen, consolidación en CD regional— opera con economías de escala claras: un trailer lleno de 33 pallets que recorre 400 kilómetros distribuye su costo entre miles de unidades. La última milla, en cambio, fragmenta ese trailer en decenas de vans que cada una entrega entre 80 y 150 paquetes en rutas urbanas con semáforos, tráfico y direcciones difíciles de localizar.'),
  makeBlock('b04', 'El mercado de última milla en México alcanzó USD $15,630 millones en 2025, con una tasa de crecimiento compuesto anual proyectada del 11.81% hasta 2030, cuando se estima llegará a USD $27,310 millones. Ese crecimiento no es una tendencia de nicho: es la consecuencia directa de un e-commerce que en 2024 generó MX$789,700 millones en ventas totales, con un crecimiento del 20% interanual y un CAGR histórico 2019–2024 del 33.8% —el más alto a nivel mundial. El 84% de las empresas de comercio electrónico en México reportaron incrementos de costo en última milla en el último año. Eso no es un problema de eficiencia operativa. Es el signo de un mercado donde la demanda creció más rápido que la infraestructura capaz de servirla.'),
  makeBlock('b05', 'La penetración del e-commerce en México llegó al 17.7% del retail total en 2025, superando a Estados Unidos por primera vez. Amazon México recibe 121 millones de visitas mensuales; MercadoLibre, 99 millones. Juntos no controlan el mercado: el 60% del volumen es terreno disputado entre ambos actores y docenas de operadores verticales. MercadoLibre comprometió USD $3,400 millones de inversión en México para 2025, con logística como eje central. Walmart México planea un capex de USD $6,000 millones, incluyendo dos nuevos centros de distribución. Esas inversiones no se dirigen principalmente a Mexicali. Se dirigen a donde la infraestructura ya existe.'),

  makeH2('h02', 'El mercado que la demanda no ve: Mexicali como ciudad de 1.1 millones sin hub propio'),
  makeBlock('b06', 'Mexicali tiene una población de 1.1 millones de habitantes con ingreso per cápita superior al promedio nacional, una clase media manufacturera con empleo formal en plantas de exportación y un patrón de consumo creciente de comercio electrónico. Por cualquier métrica de mercado, justifica infraestructura de última milla propia. Sin embargo, la ciudad recibe servicio como si fuera la "cola" de una ruta que comienza en Tijuana.'),
  makeBlock('b07', 'El Centro de Distribución de Amazon en Tijuana —32,000 m² construidos sobre la autopista Alamar, abierto en 2021— ofrece entrega same-day en Tijuana y next-day a Mexicali, Tecate, Ensenada y Rosarito. DHL, DSV, G-Global, Logistik y MercadoLibre tienen bodegas logísticas en el submercado de Otay, también en Tijuana. El modelo operativo es consistente: consolidar en Tijuana y despachar hacia Mexicali como destino secundario, con lead times y tarifas que reflejan esa posición periférica. No existe en Mexicali un hub de última milla propio —una instalación diseñada específicamente para sorting urbano y despacho de vans— capaz de ofrecer same-day dentro de la ciudad.'),
  makeBlock('b08', 'Los carriers que operan en Mexicali —Estafeta, FedEx, DHL— lo hacen con tarifas estructuralmente más altas que en CDMX o Guadalajara, por una razón simple: el volumen no justifica la inversión en infraestructura local, y la infraestructura local inexistente perpetúa el costo alto que inhibe el volumen. Es una trampa de bajo equilibrio. La manera de romperla es con una instalación diseñada para el mercado —no un CD regional repropuesto, sino un spoke urbano o micro-fulfillment con las especificaciones correctas para operación de última milla— que haga viable el same-day a un costo que el mercado absorba.'),

  makeH2('h03', 'Cross-border last-mile: la oportunidad específica del eje Mexicali–Calexico'),
  makeBlock('b09', 'El comercio total entre Estados Unidos y México en los primeros nueve meses de 2024 alcanzó USD $632,300 millones, un incremento del 36.5% respecto al mismo período de 2019. El puerto de entrada de Otay Mesa —el más relevante para carga en el corredor California–Baja California— procesó en enero–agosto de 2025 un total de 815,510 contenedores, con exportaciones anuales de USD $13,500 millones e importaciones de USD $37,400 millones. Esos flujos son manufactureros: cruzan componentes y producto terminado de exportación. La última milla cross-border es un mercado diferente.'),
  makeBlock('b10', 'El eje Mexicali–Calexico tiene características únicas para last-mile cross-border. Es el segundo puerto de entrada más activo de California por volumen vehicular, conecta directamente con el Valle Imperial y el sur de California, y tiene una demografía binacional —familias con miembros a ambos lados de la frontera— que genera patrones de compra y entrega sin equivalente en otros cruces. Los sistemas ACE y MEP han reducido los tiempos de procesamiento aduanal entre 30 y 40% en los últimos años. Operadores como Koh Logistics, Visigistics y las divisiones express de FedEx, DHL y UPS cubren el corredor, pero ninguno opera infraestructura de última milla local en Mexicali.'),
  makeBlock('b11', 'La distinción entre last-mile doméstico y cross-border es operativamente crítica. La última milla doméstica —entrega dentro de México a compradores mexicanos— no requiere interacción con CBP, USMCA ni clasificación arancelaria. Es un problema de logística urbana puro. El cross-border last-mile —entrega de producto comprado en EE.UU. a dirección en México, o envíos urgentes de componentes de un lado al otro— involucra aduana, documentación de Section 321 para de minimis, y coordinación con agentes aduanales. Son dos operaciones distintas que comparten infraestructura física pero requieren capacidades documentales diferentes. Una instalación en Mexicali bien diseñada puede servir ambos mercados simultáneamente.'),

  makeH2('h04', 'Qué necesita una nave last-mile: especificaciones distintas a los CDs de manufactura'),
  makeBlock('b12', 'El error más común al evaluar infraestructura last-mile es asumir que un Centro de Distribución regional convencional puede repropuparse para operación de última milla. La geometría operativa es fundamentalmente distinta. Un CD regional de manufactura o importación —entre 50,000 y 200,000 m²— está optimizado para recibir trailers completos, almacenar pallets en altura y despachar a destinos intermedios con frecuencia baja. Un hub de última milla opera en sentido inverso: alta frecuencia de entrada, fragmentación extrema de salida, y un ciclo operativo que puede durar menos de cuatro horas desde que llega el producto hasta que sale el primer van.'),
  makeBlock('b13', 'Las especificaciones de una nave last-mile reflejan esa diferencia. La superficie necesaria está entre 3,000 y 20,000 m² —significativamente menor que un CD regional—, porque el objetivo no es almacenar sino transitar. El clear height requerido es de 7 a 10 metros: suficiente para operación eficiente, sin necesidad de los racks altos de un centro de almacenamiento masivo. El ratio de dock doors es de una puerta por cada 200 a 400 m², una densidad muy superior a la de un CD manufacturero, porque se necesita capacidad para cargar múltiples vans simultáneamente en la ventana de despacho matutino. El área de staging —zona de sorting por ruta antes de cargar los vehículos— debe representar entre el 30 y el 40% del área total, lo que es inusualmente alto para un CD convencional.'),
  makeBlock('b14', 'La operación de flota define otros dos requerimientos que frecuentemente no aparecen en los planos iniciales. El estacionamiento debe acomodar entre 30 y 100 vans o más, dependiendo del volumen, con espacio para maniobra eficiente en el cambio de turno. El truck court debe tener una profundidad mínima de 30 a 35 metros para permitir que trailers de 53 pies maniobren en la zona de recepción sin interferir con el área de despacho de vans. Idealmente, la nave tiene docks de doble altura: muelles estándar para trailers en el flanco de recepción, y muelles bajos o rampas en el flanco de despacho para vans y vehículos de carga ligera. La ubicación debe ser urbana o intraurbana, con acceso directo a arterias viales principales para minimizar el tiempo muerto antes de que la ruta comience.'),
  makeBlock('b15', 'Ninguna de esas especificaciones es compatible con la nave industrial estándar de Mexicali —diseñada para manufactura de exportación con clear heights de 12 metros, docks para trailers, y ubicación en parque industrial periurbano—. La brecha no es de disponibilidad: hay metros cuadrados en Mexicali. La brecha es de tipología. La infraestructura correcta para last-mile todavía no se ha construido.'),

  makeH2('h05', 'Cómo el nearshoring genera demanda last-mile B2B que nadie ha cuantificado aún'),
  makeBlock('b16', 'La conversación sobre last-mile en México se centra en e-commerce residencial: paquetes a domicilio, entregas de Mercado Libre y Amazon, el comprador individual esperando su pedido. Esa es la parte visible del mercado. Hay otra capa que el nearshoring está creando en Mexicali y que aún no tiene infraestructura dedicada: la última milla B2B intraurbana generada por el ecosistema manufacturero mismo.'),
  makeBlock('b17', 'Las plantas industriales que llegaron a Mexicali no operan en vacío. Consumen Mantenimiento, Reparación y Operaciones —MRO supply— de manera constante: refacciones, consumibles, herramientas especializadas que con frecuencia se necesitan en horas, no en días. Los proveedores Tier 2 y Tier 3 que orbitan alrededor de los OEM grandes necesitan entregas frecuentes de componentes entre plantas. Los servicios corporativos —catering, uniformes, equipo de seguridad, suministros de oficina— tienen demanda diaria que no puede absorberse desde un CD en Tijuana con lead time de 24 horas. Y cuando una línea de producción para porque falta una pieza, el costo del tiempo muerto supera con frecuencia el costo de cualquier solución logística urgente.'),
  makeBlock('b18', 'La inversión manufacturera en México representó el 54% del total de Inversión Extranjera Directa en 2024, versus el 34% en 2022. La demanda industrial de espacio logístico creció un 39% en el primer semestre de 2024 respecto al mismo período de 2023, totalizando 1,200,000 m² absorbidos en ese período. Meor y Cushman & Wakefield tienen activos 13 proyectos industriales en la frontera norte, con 18 millones de pies cuadrados en desarrollo, incluyendo Mexicali. Esas plantas, cuando arrancan, necesitan cadenas de suministro locales que todavía no existen. El last-mile B2B es la capa logística que conecta ese ecosistema manufacturero consigo mismo.'),
  makeBlock('b19', 'La lógica financiera es diferente a la del e-commerce residencial. El B2B manufactura tolera tarifas más altas —el costo de un envío urgente de MRO es irrelevante comparado con el costo de parar una línea—, opera con contratos de volumen que dan predictibilidad al operador logístico, y tiene demanda geográficamente concentrada en los parques industriales. Es un mercado que puede sostener la inversión en infraestructura last-mile antes de que el volumen residencial lo justifique por sí solo. En otras palabras: el nearshoring no solo crea demanda residencial indirecta —más trabajadores con más ingreso comprando en línea—. Crea demanda B2B directa que ningún operador está cuantificando todavía en Mexicali.'),

  makeH2('h06', 'La brecha como oportunidad: lo que el mercado todavía no ha construido'),
  makeBlock('b20', 'Las brechas de infraestructura logística en mercados emergentes tienen un patrón conocido: la demanda crea el mercado antes de que la oferta lo sirva, y quien construye la oferta en el momento correcto captura una posición difícil de desplazar. ProximityParks —el principal operador de parques logísticos last-mile en México— ha desarrollado su red en CDMX, Monterrey y Guadalajara porque esos mercados tenían la densidad poblacional y el volumen e-commerce para justificar la inversión. Mexicali no ha entrado en esa lógica todavía. Pero sus fundamentales —1.1 millones de habitantes, ecosistema manufacturero en expansión, conexión fronteriza con Calexico, población con ingreso formal y poder de compra creciente— son los de un mercado que está maduro para esa conversión.'),
  makeBlock('b21', 'La ventana de oportunidad en infraestructura logística tiene una duración limitada. Cuando los carriers de escala nacional decidan que el volumen de Mexicali justifica infraestructura propia —y ese momento llega cuando la penetración de e-commerce alcanza un umbral crítico, estimado entre el 20 y el 25% del retail total, y México está ya en 17.7%— el activo que esté en la ubicación correcta con la tipología correcta captura la demanda. Los activos mal posicionados o con la geometría equivocada quedan fuera de esa ola aunque estén a dos kilómetros de distancia.'),
  makeBlock('b22', 'Para directores de supply chain evaluando la región, el dato relevante es que Mexicali puede ofrecer hoy algo que Tijuana no puede para operaciones de distribución urbana: terreno más barato, menor congestión vial, y una demografía de consumo menos servida y por tanto con menor competencia en precio de entrega. Para inversores en logística, la ausencia de un hub last-mile propio en una ciudad de 1.1 millones con ecosistema manufacturero en expansión no es una señal de mercado débil. Es la descripción exacta de una oportunidad que nadie ha ejecutado todavía. Grupo Nelson lleva seis décadas desarrollando el mercado industrial de Mexicali y puede orientar a operadores logísticos e inversores en la evaluación de activos con la tipología correcta para esta demanda específica.'),

  makeBlock('b_fuentes', 'Fuentes: Mordor Intelligence — Mexico Last-Mile Delivery Market Size & Share 2025–2030 · AMVO — Estudio de Venta Online en México 2024 · Statista — E-commerce México: Revenue and Penetration 2024–2027 · Business of Apps — Amazon Mexico Statistics 2024 · Business of Apps — MercadoLibre Statistics 2024 · INEGI — Población Mexicali, Baja California 2020 · US Census Bureau — US–Mexico Trade Statistics enero–septiembre 2024 · CBP — Otay Mesa Port Statistics 2025 · Meor / Cushman & Wakefield — Industrial Real Estate Mexico Border Report 2024 · CBRE — Industrial Demand Mexico 1S 2024 · Secretaría de Economía — IED en México 2024 · ProximityParks — Red Logística Last-Mile México 2025 · Supply Chain Dive — Last-Mile Cost as % of Total Delivery Cost 2024 · Pitney Bowes — Parcel Shipping Index 2024 · Statista — Dark Store Market LATAM Share 2024'),
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
