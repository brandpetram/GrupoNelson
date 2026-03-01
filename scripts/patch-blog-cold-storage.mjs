/**
 * Parcha el post de blog: Cold Storage en el Norte de México: El Segmento Industrial Más Subdesarrollado del Nearshoring
 * Documento ID: uqKP1CJoSsgXdCXPUwMW9V
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMW9V'

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

const description = 'El nearshoring llenó parques industriales en el norte de México —pero la infraestructura de almacenamiento en frío que la nueva economía exige sigue siendo el segmento más subdesarrollado del mercado. Un análisis técnico y comercial de los costos reales, los riesgos específicos de Mexicali y las dos demandas no satisfechas que definen la oportunidad.'

const blocks = [
  makeBlock('b01', 'Entre 2022 y 2024, el norte de México absorbió más de 1.4 millones de metros cuadrados anuales de demanda industrial impulsada por el nearshoring. Los parques industriales de Monterrey, Juárez, Tijuana y Mexicali respondieron con velocidad inusual: naves Clase A, especificaciones alineadas con estándares norteamericanos, infraestructura lista para manufactura electrónica, aeroespacial y dispositivos médicos. Esa historia de éxito es real y está documentada.'),
  makeBlock('b02', 'La historia que no está siendo contada con la misma claridad es la del cold storage. La misma diversificación productiva que requirió millones de metros cuadrados de nave seca también generó demanda de almacenamiento en frío para exportaciones agrícolas de alto valor, cadenas de suministro de alimentos procesados, fármacos y dispositivos médicos con requerimientos de temperatura controlada. Y ahí la respuesta del mercado ha sido notablemente más lenta. La brecha entre la demanda potencial y la oferta real de cold storage en el norte de México —especialmente en Baja California— es posiblemente la oportunidad industrial más subatendida de la región.'),

  makeH2('h01', 'Qué es cold storage: un ecosistema de temperatura, no un almacén más frío'),
  makeBlock('b03', 'El error de comprensión más frecuente cuando se habla de cold storage es tratarlo como una categoría homogénea. En realidad, el término agrupa al menos seis tipos de instalación con especificaciones técnicas, costos de construcción y mercados objetivo radicalmente distintos entre sí.'),
  makeBlock('b04', 'La refrigeración para producto fresco (frutas, verduras, lácteos) opera entre 1 y 8°C y es el segmento de menor complejidad técnica dentro del espectro. La cámara frigorífica para carnes frescas y mariscos mantiene rangos de 0 a 4°C con mayor control de humedad y requisitos de limpieza. La congelación estándar opera a -18°C o menos, lo que introduce la primera discontinuidad técnica importante: el piso debe calentarse desde abajo para prevenir el frost heave, el fenómeno por el cual el suelo congelado se expande y levanta la losa. La ultra-congelación, entre -25°C y -80°C, se usa para biológicos y vacunas, y requiere equipos de refrigeración de dos etapas o cascada con costos de instalación y operación que se alejan significativamente de las instalaciones convencionales.'),
  makeBlock('b05', 'Aparte de los rangos de temperatura por congelación, existen dos categorías con lógica propia. La temperatura controlada farmacéutica (2–8°C validado GDP) no es técnicamente más fría que una cámara frigorífica convencional, pero exige monitoreo continuo calibrado, mapeo térmico documentado y trazabilidad de cada excursión de temperatura —lo que convierte la operación en un proceso regulado, no en almacenamiento de commodities. Los cuartos de maduración, usados para aguacate y banano, operan en un rango diferente: el aguacate se almacena a 5–7°C y madura a 16–20°C; el banano requiere 16–18°C más inyección de etileno. Estas instalaciones no son cámaras de congelación, pero requieren control preciso de temperatura, concentración de gas y circulación de aire que no existe en una nave seca convencional. La tecnología de atmósfera controlada (CA), que combina temperatura de 1–7°C con reducción de oxígeno al 2–5% y elevación de CO₂ al 2–5%, puede extender la vida útil del aguacate hasta seis semanas —frente a las dos o tres semanas de la refrigeración convencional— con impacto directo en la viabilidad de exportaciones a mercados lejanos.'),

  makeH2('h02', 'Por qué cuesta 2x–3x más que una nave convencional'),
  makeBlock('b06', 'Una nave industrial seca de buena especificación en el norte de México se construye hoy en un rango de 750 a 900 dólares por metro cuadrado. Un cold storage refrigerado (0 a -5°C) parte de 1,400 dólares por metro cuadrado y puede llegar a 2,500. Un cold storage de congelación a -18°C oscila entre 2,500 y 3,800 dólares por metro cuadrado. Los sistemas automatizados ASRS de alta densidad superan los 3,700 dólares y pueden llegar a 5,400 o más. El multiplicador de 2x a 3x sobre el costo de nave seca no es una aproximación; es una realidad estructural explicable componente por componente.'),
  makeBlock('b07', 'El sistema de refrigeración representa entre el 35% y el 45% del costo total de construcción de un cold storage. No es una utilidad del edificio como el HVAC de una nave seca: es el componente central del activo. El aislamiento térmico —paneles tipo sándwich con núcleo de poliuretano (PUR) o poliisocianurato (PIR), siendo el PIR preferible por su mejor comportamiento ante incendio— representa entre el 20% y el 25% del costo total. El grosor requerido varía significativamente según el rango de temperatura: para instalaciones sobre 0°C se usan paneles de 100 a 125 mm; para congelación a -18°C, el estándar sube a 175–200 mm. El vapor barrier —la membrana de control de vapor que debe envolver toda la envolvente térmica del edificio sin interrupciones— no es un costo alto en sí mismo, pero su falla es catastrófica: la condensación que genera deteriora la estructura del panel desde adentro, generando procesos de corrosión que pueden comprometer la instalación en menos de cinco años sin que sea visible desde el exterior.'),
  makeBlock('b08', 'El piso calefaccionado bajo-losa es obligatorio en instalaciones de congelación. Su costo oscila entre el 8% y el 12% del presupuesto total. Las puertas de alta velocidad y los vestíbulos de temperatura, necesarios para mantener el diferencial térmico entre zonas durante el tránsito de equipos y personal, representan entre el 5% y el 8%. En México, la mano de obra en construcción tiene un descuento de entre el 20% y el 35% respecto a Estados Unidos, pero los materiales especializados —paneles PUR/PIR, compresores industriales, evaporadores, condensadores— son en su mayoría importados y se cotizan en dólares, lo que limita el beneficio del diferencial laboral sobre el costo total.'),

  makeH2('h03', 'La ecuación energética en Mexicali: el riesgo del verano y la ventaja del desierto'),
  makeBlock('b09', 'Mexicali tiene el verano más extremo de cualquier ciudad industrial de México. La temperatura máxima de agosto promedia 45°C en la ciudad, con récord histórico de 51°C. Ese dato no es relevante para una nave seca con HVAC convencional. Para un cold storage, es un parámetro de diseño crítico que afecta directamente el sistema de refrigeración, el costo operativo anual y la confiabilidad del suministro eléctrico.'),
  makeBlock('b10', 'Los condensadores enfriados por aire —el tipo más común en instalaciones de refrigeración de tamaño mediano— pierden eficiencia de forma no lineal cuando la temperatura ambiente supera los 35°C. A 45°C, la penalización de eficiencia puede ser del 25% o más, lo que significa que el sistema debe sobredimensionarse para mantener los rangos de temperatura requeridos durante los meses de verano. Los condensadores evaporativos, que en lugar de disipar calor al aire lo hacen a través de la evaporación de agua, son notablemente más eficientes en climas áridos de alta temperatura: en Mexicali, donde la humedad relativa es baja y la evaporación es rápida, el ahorro energético respecto a condensadores de aire puede ser del 15% al 20%. El clima árido del desierto de Sonora, que representa el mayor riesgo en términos de temperatura extrema, es paradójicamente la condición que hace más eficiente la condensación evaporativa.'),
  makeBlock('b11', 'La refrigeración consume más del 70% de la electricidad total de un cold storage. En instalaciones modernas de 100,000 metros cúbicos, el benchmark de consumo es de aproximadamente 10 kWh por metro cúbico al año solo en refrigeración. El costo de la energía representa entre el 9% y el 18% de los ingresos brutos de una operación de cold storage —con un promedio que supera el 11%— lo que lo convierte en el segundo mayor costo operativo después de la mano de obra. En Mexicali, la tarifa GDMTH de CFE incluye un cargo de demanda en punta (18:00 a 23:00 horas) que en 2025 puede superar los 4.10 pesos por kWh, un nivel que obliga a optimizar el perfil de carga del sistema de refrigeración. La red eléctrica de Baja California Norte está interconectada con el sistema CAISO de California —no con el Sistema Interconectado Nacional mexicano— lo que implica una vulnerabilidad específica a los eventos de apagón del sistema californiano, particularmente en los picos de demanda del verano. La generación de respaldo no es una opción en cold storage: es un requisito operativo y en muchos casos contractual.'),

  makeH2('h04', 'Dos demandas no satisfechas en Baja California: agricultura y medtech'),
  makeBlock('b12', 'La Cédula Agrícola 2024–2025 del Valle de Mexicali registra 140,795 hectáreas planificadas, con espárragos como el cultivo de mayor valor exportable: 1,375 hectáreas cultivadas y exportaciones que alcanzaron 49.6 millones de dólares en 2024. El tomate suma 674 hectáreas adicionales, y el valle produce col, cebollín, kale, mizuna orgánica y otros cultivos con demanda creciente en el mercado norteamericano. Toda esa producción tiene un cuello de botella común: la falta de infraestructura de pre-cooling y cold storage accesible para exportadores medianos y pequeños en la región. El pre-cooling —el proceso de reducir rápidamente la temperatura del producto en campo antes del transporte— es tan crítico para la vida de anaquel del espárrago como el almacenamiento en frío posterior, y es precisamente donde la infraestructura disponible resulta más escasa para productores que no tienen escala suficiente para costear sus propias instalaciones.'),
  makeBlock('b13', 'El sector de dispositivos médicos y farmacéuticos representa la segunda demanda estructural no resuelta. Baja California alberga más de 75 fabricantes de dispositivos médicos y concentra el 50% de las exportaciones de medtech de México. Muchos de estos fabricantes —y sus cadenas de suministro— requieren almacenamiento con temperatura controlada validada bajo Good Distribution Practice (GDP): rangos de 2–8°C con monitoreo continuo calibrado, mapeo térmico documentado y trazabilidad de cada evento de excursión. La distinción entre un cold storage farmacéutico GDP-compliant y un cold storage de alimentos refrigerado no es trivial: implica protocolos de calificación de instalación (IQ), operación (OQ) y performance (PQ) que agregan tiempo y costo al proceso de puesta en marcha. La oferta de cold storage GDP-compliant en Tijuana y Mexicali es escasa en relación con la demanda potencial de un clúster medtech de la escala que existe en la región.'),
  makeBlock('b14', 'El dato más revelador sobre la brecha de oferta es la ausencia de operadores de cold storage de escala con presencia documentada en Mexicali. Frialsa Frigoríficos, el líder nacional con 23 instalaciones y más de 3.5 millones de metros cúbicos de capacidad, tiene presencia principalmente en los principales mercados costeros y agroindustriales. Emergent Cold LatAm, que adquirió Qualianz en febrero de 2023 y opera 33 instalaciones en México incluyendo Tijuana, con 194,000 posiciones de pallet, es el operador con presencia más cercana a la región. La alianza de CPKC con Americold, anunciada en diciembre de 2024 para expandir cold storage ferroviario entre México y Estados Unidos, apunta a corredores logísticos, no necesariamente a capacidad de almacenamiento local en ciudades fronterizas del noroeste. El acuerdo firmado en marzo de 2025 entre ANETIF y la Global Cold Chain Alliance (GCCA) reconoció explícitamente la existencia de "regiones con capacidad insuficiente" en la cadena de frío mexicana —una señal de que la brecha es reconocida por los propios operadores del sector, no solo una percepción de demanda potencial.'),

  makeH2('h05', 'Por qué reconvertir una nave existente rara vez tiene sentido'),
  makeBlock('b15', 'Una pregunta frecuente de propietarios de naves industriales convencionales es si tiene sentido reconvertir el activo para cold storage. La respuesta, en la mayoría de los casos, es que el costo de reconversión oscila entre el 80% y el 110% del costo de construcción nueva —sin obtener los beneficios de un diseño optimizado desde el origen.'),
  makeBlock('b16', 'Los problemas estructurales de la reconversión son acumulativos. La losa existente no tiene calefacción bajo-losa, lo que la hace inadecuada para congelación a -18°C sin demolerla y reconstruirla. El vapor barrier, ausente en toda la envolvente original, debe instalarse de forma continua sin interrupciones en paredes, techo y piso —una operación de alta dificultad técnica en una estructura ya construida. La estructura de la nave convencional típicamente no está calculada para soportar la carga adicional de los paneles de aislamiento (60 a 80 kg por metro cuadrado adicionales) más la carga de los sistemas de refrigeración suspendidos. La acometida eléctrica es quizás el obstáculo más costoso: una nave seca convencional tiene acometidas de 200 a 400 amperes; un cold storage de tamaño mediano requiere 4,000 a 8,000 amperes, una diferencia que implica una inversión en infraestructura eléctrica que frecuentemente no es viable en el predio existente. La reconversión solo resulta razonablemente viable para refrigeración moderada (0 a 8°C, sin calefacción de piso), en naves con clear height superior a 10 metros y con estructura comprobada mediante análisis de capacidad de carga. Para congelación, la reconversión es en la práctica inviable desde una perspectiva económica.'),

  makeH2('h06', 'La oportunidad que no está siendo atendida a escala'),
  makeBlock('b17', 'El mercado de cadena de frío en México fue valorado en 2024 entre 4.06 y 4.75 mil millones de dólares, con una tasa de crecimiento anual proyectada de 12.36% para el período 2024–2029 —una de las tasas más altas dentro del sector logístico. México tiene 443 establecimientos TIF, 110 bodegas certificadas y 110 instalaciones de frío registradas, cifras que las propias autoridades reconocen como insuficientes para la demanda actual y proyectada. El nearshoring requiere aproximadamente 2.5 millones de metros cuadrados nuevos de almacenamiento por año; la porción de ese total que corresponde a cold storage sigue siendo el segmento con mayor déficit de oferta.'),
  makeBlock('b18', 'La combinación de alta barrera técnica de entrada, costos de construcción 2x–3x superiores a nave seca, operación energéticamente intensiva y requerimiento de personal técnico especializado en refrigeración industrial —escaso en Mexicali— explica por qué el capital privado ha sido más lento en responder a esta demanda que al segmento de nave seca convencional. Pero esa misma combinación de factores es la que construye ventajas competitivas duraderas para quienes desarrollen capacidad de cold storage en la región: una nave seca tiene sustitutos razonablemente accesibles; una instalación de cold storage GDP-compliant en Mexicali con generación de respaldo y condensadores evaporativos, a la distancia adecuada del cruce fronterizo, no tiene sustituto local hoy.'),
  makeBlock('b19', 'Para inversores y desarrolladores que evalúan el norte de México como mercado de oportunidad, cold storage representa el segmento con mayor desajuste entre demanda estructural y oferta disponible. No es un nicho especulativo: es la consecuencia lógica de un clúster agrícola de exportación, un clúster medtech de clase mundial y una cadena de alimentos procesados en expansión que operan sin la infraestructura de temperatura controlada que su escala exige. Grupo Nelson, con décadas de experiencia en el desarrollo industrial de Mexicali y Baja California, es un punto de contacto directo para quienes estén evaluando proyectos en esta región.'),

  makeBlock('b_fuentes', 'Fuentes: GCCA — Global Cold Chain Alliance, México Cold Chain Market Report 2024 · ANETIF — Acuerdo ANETIF-GCCA marzo 2025 para fortalecimiento de cadena de frío en México · Mordor Intelligence — Mexico Cold Chain Logistics Market Size 2024–2029 · SAGARPA / SENASICA — Establecimientos TIF y Capacidad Frigorífica Nacional · SEFOA Baja California — Cédula Agrícola Valle de Mexicali 2024–2025, Espárragos y Exportaciones · CANIRAC / Secretaría de Economía — Exportaciones de espárragos BC 2024 · Cluster Medtech Baja California — Directorio de Fabricantes de Dispositivos Médicos BC · CBRE México — Nearshoring Industrial Demand Report 2023–2024 · Emergent Cold LatAm — Adquisición Qualianz 2023, Expansión LatAm USD 500M dic 2023 · CPKC + Americold — Alianza cold storage ferroviario México-EE.UU. dic 2024 · Frialsa Frigoríficos — Capacidad instalada nacional · CFE — Tarifa GDMTH 2025, Cargos en punta Baja California Norte · CAISO — California Independent System Operator, Interconexión Baja California · European Cold Chain Confederation — Panel PUR vs PIR specifications · ASHRAE — Refrigeration Handbook, Evaporative vs Air-Cooled Condenser Efficiency · NFPA — Vapor Barrier and Cold Storage Construction Standards · IIAR — International Institute of Ammonia Refrigeration, NH3 Systems Guidelines · WHO GDP Guidelines — Good Distribution Practice for Pharmaceutical Products · FDA — 21 CFR Part 211, Cold Storage Pharmaceutical Requirements · RS&H / Ware Malcomb — Cold Storage Construction Cost Benchmarks 2024'),
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
