/**
 * Parcha el post de blog: Total Landed Cost: Por Qué México Gana a China en el Análisis Real de Costos
 * Documento ID: 4lXD1QprlKmqniOHakmITt
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmITt'

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

const description = 'El costo del producto es solo el 50-65% del costo total de lo que compras en China. Este análisis descompone todos los componentes del Total Landed Cost —aranceles, flete, capital inmovilizado, disrupciones— y muestra por qué la ecuación cambió estructuralmente a favor de México.'

const blocks = [
  makeBlock('b01', 'En el verano de 2021, un director de supply chain de un fabricante mediano de electrónica industrial describió la situación en estos términos: "Pagamos el producto en China, pagamos el flete, pagamos los aranceles, y todavía así era más barato que producir aquí. Eso fue en 2018. En 2021 me di cuenta de que había estado calculando mal durante tres años." Lo que había calculado mal no era aritmética. Era el modelo.'),
  makeBlock('b02', 'La comparación de "costo del producto en China versus costo del producto en México" es el error analítico más común en la evaluación de decisiones de sourcing. El costo del producto —la manufactura directa— representa entre el 50% y el 65% del costo total de lo que esa empresa pone en su almacén en Chicago o Dallas. El resto son componentes que con frecuencia no aparecen en la misma hoja de cálculo, y algunos no aparecen en ninguna hoja de cálculo hasta que se materializan como pérdida.'),
  makeBlock('b03', 'El Total Landed Cost (TLC) es el framework que corrige ese error. Incluye todos los costos desde el momento en que el producto sale de la fábrica hasta que entra al almacén del comprador. La diferencia entre operar con TLC y operar con costo de producto no es una distinción académica: es la diferencia entre tomar decisiones de sourcing correctas e incorrectas. Y en el entorno post-2018, casi todos los componentes del TLC se movieron en la misma dirección: en contra de China y a favor de México.'),

  makeH2('h01', 'El error del análisis de una línea: costo de producto versus costo total'),
  makeBlock('b04', 'El BCG Manufacturing Cost-Competitiveness Index —una de las referencias más citadas en comparaciones de costos de manufactura— excluye explícitamente los costos de transporte y logística de su metodología. Eso es una decisión técnica válida para medir competitividad de manufactura directa. Pero cuando una empresa usa ese índice para decidir dónde producir, está tomando una decisión de costo total con datos de costo parcial.'),
  makeBlock('b05', 'Los componentes del TLC con sus rangos típicos de participación sobre el costo total son: manufactura directa (50-65%), aranceles e impuestos de importación (0-25% o más), flete internacional (5-15%), seguro de carga (0.5-2%), manejo en puerto y despacho aduanal (1-3%), transporte interno en destino (2-5%), costo de inventario en tránsito o capital inmovilizado (3-8%), almacenamiento (2-5%), control de calidad e inspección (1-3%), y overhead de gestión y viajes (1-3%).'),
  makeBlock('b06', 'La suma de los componentes distintos a la manufactura directa puede representar entre el 35% y el 50% del costo total. Es decir: una empresa que tiene una ventaja de manufactura del 15% en China pero carga un diferencial logístico y arancelario del 30% sobre México, está operando con una desventaja estructural que no aparece en el análisis de primer nivel. El BCG señaló en 2024 que México es ya 4 puntos porcentuales más barato que China en costos directos de manufactura —una reversión frente a la situación de una década anterior, cuando China era 6 puntos más barato—. Con logística incluida, esa brecha se amplía aún más.'),

  makeH2('h02', 'El componente que más cambia la ecuación: aranceles Section 301'),
  makeBlock('b07', 'Hasta 2017, el arancel efectivo promedio sobre importaciones chinas hacia Estados Unidos era aproximadamente del 3%. Esa era la tasa base MFN (Most Favored Nation) que China había negociado como miembro de la OMC desde 2001. En 2018, la administración Trump impuso aranceles Section 301 sobre aproximadamente 370,000 millones de dólares en importaciones chinas, cubriendo más de 5,700 categorías de productos. La administración Biden no los revirtió. La administración Trump 2.0 los profundizó.'),
  makeBlock('b08', 'El arancel efectivo promedio sobre importaciones chinas llegó en 2024 a aproximadamente 20.7%, según el Peterson Institute for International Economics —casi siete veces el nivel histórico de 3%. En categorías específicas los números son más drásticos: maquinaria industrial y electrónica industrial al 25%, semiconductores con tasas que escalaron al 50% en enero de 2025, y categorías selectas que llegaron al 145% en el pico de 2025.'),
  makeBlock('b09', 'Para un producto que cuesta 100 dólares fabricar en China, el solo componente arancelario puede agregar 20 a 25 dólares antes de que se cargue un solo dólar de flete. México, bajo USMCA, tiene arancel de 0% para productos que califican bajo las reglas de origen del tratado. El diferencial arancelario entre China y México es hoy el componente individual de mayor peso en el análisis de TLC para la mayoría de las categorías de manufactura industrial.'),
  makeBlock('b10', 'Esta asimetría no es transitoria. Los aranceles Section 301 sobrevivieron dos administraciones de partidos diferentes. La tendencia bipartidista hacia la presión comercial sobre China sugiere que cualquier modelo de decisión que asuma normalización arancelaria en un horizonte de tres a cinco años está asumiendo un riesgo político que la evidencia histórica reciente no justifica.'),

  makeH2('h03', 'El componente invisible: capital inmovilizado en tránsito y safety stock'),
  makeBlock('b11', 'El costo de inventario en tránsito es el componente del TLC que con mayor frecuencia se omite de los análisis, y también uno de los que tiene mayor impacto a escala. La lógica financiera es directa: el inventario que está en un barco cruzando el Pacífico es capital que no produce retorno. Ese capital tiene un costo implícito que se calcula con el WACC de la empresa.'),
  makeBlock('b12', 'La fórmula estándar es: Costo de capital = Valor del inventario × (WACC anual / 365) × Días en tránsito. Con un inventario de 1,000,000 de dólares, un WACC del 8% anual y 40 días de tránsito desde China a Los Ángeles, el costo de capital inmovilizado por ciclo es de 8,767 dólares. El mismo cálculo para Mexicali a Los Ángeles —2 días de tránsito terrestre— produce 438 dólares. El diferencial es de 8,329 dólares por cada millón de dólares en inventario, por ciclo.'),
  makeBlock('b13', 'A eso hay que sumarle el safety stock. La mayor variabilidad en lead time desde China —disrupciones en puertos, congestión marítima, eventos climáticos, inspecciones aduanales— obliga a las empresas a mantener entre un 15% y un 30% más de inventario de seguridad para lograr la misma cobertura de servicio que con un proveedor en México. Ese inventario adicional tiene costo de capital, costo de almacenamiento y, en categorías con vida de producto corta o componentes con obsolescencia tecnológica, riesgo de depreciación.'),
  makeBlock('b14', 'Para empresas con rotaciones de inventario altas y WACCs elevados —condiciones estándar en manufactura industrial competitiva—, el componente de capital inmovilizado puede representar 3 a 5 puntos porcentuales de diferencia en el TLC total. Es más que suficiente para invertir una ventaja de manufactura directa que parezca favorable a China en el análisis de primer nivel.'),

  makeH2('h04', 'El factor de disrupciones: el costo que nadie presupuesta hasta que lo vive'),
  makeBlock('b15', 'En marzo de 2021, el portacontenedores Ever Given encalló en el Canal de Suez durante seis días. El costo económico fue de 9,600 millones de dólares en comercio detenido por día, según estimaciones de la firma Lloyd\'s List. El Canal de Suez maneja aproximadamente el 12% del comercio mundial. El impacto de ese evento —un barco, seis días— fue global y afectó cadenas de suministro sin relación directa con el Mediterráneo.'),
  makeBlock('b16', 'El año 2021 en su conjunto produjo disrupciones logísticas con un impacto estimado de 230,000 millones de dólares en comercio global. Las grandes corporaciones perdieron en promedio 182 millones de dólares en ingresos ese año por interrupciones en su cadena de suministro, según datos de McKinsey. El flete marítimo desde China, que en 2019 costaba entre 1,500 y 2,000 dólares por contenedor de 40 pies, llegó a 32,000 dólares en el pico de la pandemia según FreightWaves. En febrero de 2026, el Drewry World Container Index registra un rango de 1,700 a 2,400 dólares —más cerca de los niveles prepandemia—, pero el mercado marítimo ha demostrado que puede escalar un orden de magnitud en meses cuando ocurre un evento suficientemente disruptivo.'),
  makeBlock('b17', 'El transporte terrestre desde México tiene una volatilidad estructuralmente menor. Los precios varían, pero no tienen la exposición a eventos catastróficos de ruta única que caracteriza al flete marítimo transpacífico. El tráiler de 53 pies estándar en México tiene además una ventaja de capacidad: transporta hasta un 50% más de carga que un contenedor marítimo de 40 pies por viaje equivalente, lo que reduce el costo por unidad en categorías con producto de volumen.'),
  makeBlock('b18', 'Las disrupciones no son costos que aparecen en el presupuesto. Aparecen en el P&L como pérdida de ventas, expediting costs, penalizaciones por incumplimiento de contrato o pérdida de participación de mercado cuando un competidor mejor posicionado logísticamente captura al cliente durante la disrupción. Ningún modelo de TLC que no incluya un factor de riesgo de disrupción —aunque sea conservador— está capturando la realidad completa del costo de sourcing transoceánico.'),

  makeH2('h05', 'Donde México no gana: la sección que hay que leer antes de la siguiente'),
  makeBlock('b19', 'Un análisis que solo presenta evidencia favorable a una conclusión no es análisis útil. Hay categorías y condiciones específicas donde China mantiene ventajas reales que México no puede replicar hoy, y donde ningún modelo de TLC debería concluir a favor de México sin examinarlo primero.'),
  makeBlock('b20', 'La más importante es profundidad de cadena de suministro. China tiene aproximadamente cinco veces más proveedores de electrónica que Japón, el segundo ecosistema más profundo de la región. Shenzhen y el delta del Río Pearl concentran la mayor densidad de manufactura de componentes electrónicos del mundo —resistencias, capacitores, conectores, PCBs, displays—. Para una empresa que fabrica electrónica de consumo masivo con componentes altamente especializados y proveedores Tier 2 y Tier 3 integrados en ese ecosistema, la lógica de relocalización a México implica reconstruir esa cadena, lo cual lleva años y requiere inversión que no siempre aparece en el análisis de TLC inicial.'),
  makeBlock('b21', 'Las categorías donde China sigue siendo preferida incluyen electrónica de consumo masivo de alto volumen —China produjo 1,670 millones de smartphones en 2024—, textiles de bajo valor, plásticos de consumo, juguetes, y componentes electrónicos pasivos de bajo costo. En estas categorías, la escala de China, la profundidad de proveedores y los costos de manufactura hacen que el diferencial arancelario no sea suficiente para cambiar la ecuación.'),
  makeBlock('b22', 'Los datos de México también incluyen señales de advertencia que deben entrar en el análisis. Solo la mitad de las empresas que han nearshoreado lograron sus objetivos de costo unitario, según BCG 2023. Los salarios en México aumentaron aproximadamente un 12% en 2025 como resultado del incremento del salario mínimo, lo que erosiona parcialmente la ventaja de costo laboral —ventaja que de todas formas nunca fue tan dramática como se asume: el costo laboral fully burdened en México para operadores de entrada es de aproximadamente 5.44 dólares por hora, versus 6.50 a 8.00 dólares en China, una diferencia del 10 al 21%, no de 50% o 60% como se escucha frecuentemente en conversaciones de nearshoring. México requiere una inversión estimada de 400,000 millones de dólares en infraestructura para 2032 para manejar el volumen proyectado. Esa brecha de infraestructura es real y crea fricciones que no aparecen en el análisis de TLC de corto plazo.'),

  makeH2('h06', 'El análisis que hay que construir antes de decidir'),
  makeBlock('b23', 'El TLC no es un número que se busca en una tabla. Es un modelo que se construye con los parámetros específicos de la empresa: su WACC, su mix de productos, sus SKUs de mayor rotación, sus lead times actuales, su exposición arancelaria por código HTS, y su historial de disrupciones en los últimos cinco años. Dos empresas del mismo sector pueden llegar a conclusiones diferentes porque tienen perfiles de inventario distintos o porque sus categorías de producto tienen tasas arancelarias distintas.'),
  makeBlock('b24', 'La secuencia metodológica mínima para un análisis serio incluye: primero, mapear todos los componentes del TLC para el origen actual —China o el que sea—, incluyendo los costos de disrupción con algún factor de probabilidad aunque sea conservador; segundo, construir el mismo modelo para el origen alternativo considerado, usando datos reales de flete terrestre, aranceles USMCA y tiempos de tránsito específicos de la ruta; tercero, calcular el diferencial de capital inmovilizado con el WACC real de la empresa y los días de tránsito reales de cada ruta; y cuarto, hacer análisis de sensibilidad sobre los supuestos más inciertos —particularmente aranceles y flete marítimo, ambos con alta volatilidad histórica.'),
  makeBlock('b25', 'El Kearney Reshoring Index 2024 documentó que las importaciones de 14 países asiáticos de bajo costo cayeron de 1.022 billones de dólares en 2022 a 878,000 millones en 2023 —una reducción de 144,000 millones en un año—. México superó a China como mayor exportador a Estados Unidos en 2023, con 506,000 millones de dólares en 2024 versus 438,000 millones de China. Esos flujos comerciales no se mueven por narrativa: se mueven porque las empresas que hicieron el análisis de TLC completo llegaron a conclusiones que los datos respaldaban.'),
  makeBlock('b26', 'Para empresas que están en ese proceso de análisis y evalúan específicamente el mercado fronterizo de Baja California, la experiencia de un desarrollador industrial con seis décadas en Mexicali puede acelerar significativamente la fase de due diligence. Grupo Nelson ha visto construirse y escalar las mismas operaciones que hoy sirven como benchmarks en cualquier análisis serio de la región. El modelo de TLC lo construye cada empresa con sus propios datos. La inteligencia de mercado sobre disponibilidad de naves, condiciones de parques industriales y dinámica de talento local es algo que los datos públicos no capturan con la granularidad que requiere una decisión de inversión real.'),

  makeBlock('b_fuentes', 'Fuentes: BCG Manufacturing Cost-Competitiveness Index 2024 · Tetakawi — Mexico Manufacturing Labor Costs 2025 · Peterson Institute for International Economics — US-China Trade War Tariff Tracker 2025 · FreightWaves — Container Shipping Rate Analysis 2021-2024 · Drewry World Container Index, febrero 2026 · Deloitte / Visigistics — Nearshoring Freight Analysis 2024 · BCG — Nearshoring: Lessons from Early Movers 2023 · McKinsey Global Institute — Supply Chain Disruption Cost Analysis 2021 · Lloyd\'s List — Ever Given Canal de Suez Economic Impact 2021 · FBI — Annual Report to Congress: Chinese IP Theft 2024 · CNBC Global CFO Council Survey 2023 · Kearney Reshoring Index 2024 · Secretaría de Economía — Exportaciones México a EE.UU. 2024'),
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
