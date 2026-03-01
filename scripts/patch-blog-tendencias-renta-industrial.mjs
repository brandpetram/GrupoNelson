/**
 * Parcha el post de blog: Tendencias de Renta Industrial en Mexicali y Baja California: Panorama 2025–2026
 * Documento ID: uqKP1CJoSsgXdCXPUwMDYH
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwMDYH'

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

const description = 'El mercado industrial de Baja California atraviesa su proceso de normalización más relevante en una generación. Vacancia en Mexicali en 6.2%, rentas que se sostienen por encima de 2023 y un entorno macroeconómico con más variables de riesgo que en 2022. Análisis con datos verificados para directores de operaciones y CFOs que toman decisiones de arrendamiento en 2025–2026.'

const blocks = [
  // --- Apertura ---
  makeBlock('b01', 'Entre 2020 y 2022, el mercado industrial de Baja California vivió un ciclo que difícilmente se repetirá en los próximos años. La combinación de nearshoring acelerado, demanda descomprimida post-pandemia y oferta que no alcanzaba a construirse con la velocidad que el mercado exigía produjo condiciones excepcionales: vacancia en mínimos históricos, rentas en ascenso sostenido y desarrolladores que colocaban espacio antes de completar la estructura.'),
  makeBlock('b02', 'Ese ciclo terminó. No de forma abrupta, sino con la lentitud característica de los mercados inmobiliarios: primero desacelerándose, luego estabilizándose, finalmente ajustando. El inventario que se construyó durante el boom sigue incorporándose al mercado. La demanda que lo impulsaba —en particular los anuncios de inversión nearshoring— ha caído de forma consistente desde su pico de 2023.'),
  makeBlock('b03', 'Lo que queda es un mercado en normalización: con más opciones para el arrendatario que en 2021, con rentas que se sostienen por encima de los niveles pre-boom y con un conjunto de riesgos estructurales —agua, energía, incertidumbre arancelaria— que cualquier análisis riguroso debe incorporar. Este artículo presenta los datos disponibles al cierre de 2025 y las tendencias que los datos permiten proyectar con razonable certeza hacia 2026.'),

  // --- H2 1 ---
  makeH2('h01', 'Del boom al equilibrio: cómo se movió la vacancia entre 2020 y 2025'),
  makeBlock('b04', 'La serie histórica de vacancia en Mexicali describe una curva que resume el ciclo completo del mercado industrial en Baja California. En diciembre de 2020, la vacancia era de 3.42%, un nivel normal para un mercado activo. En diciembre de 2021, había caído a 1.48%, impulsada por una demanda bruta que ese año creció más de 110% en términos anuales según datos de Solili. El mínimo del ciclo llegó en agosto de 2022: 0.9% de vacancia, un número que en términos prácticos equivale a no tener espacio disponible.'),
  makeBlock('b05', 'El ajuste comenzó desde ese punto. En diciembre de 2023, la vacancia había subido a 4.3%. En el primer trimestre de 2024 se ubicó en 4.0%. Para noviembre de 2025, el indicador marcó 6.3%, lo que representaba aproximadamente 250,000 metros cuadrados desocupados en el mercado y posicionaba a Mexicali como el segundo mercado con mayor vacancia en el país. El cierre del cuarto trimestre de 2025 consolidó ese nivel en 6.2%: el punto más alto en cinco años.'),
  makeBlock('b06', 'Tijuana siguió una trayectoria paralela pero más pronunciada. Entre 2022 y 2023 el mercado operó cerca de 0% de disponibilidad; para el cuarto trimestre de 2025 la vacancia alcanzó 7.34%, con registros que en algunos reportes del período llegaron a 8.1%. Según datos de Real Estate Market y Solili del cuarto trimestre de 2025, Tijuana cerró el año con la mayor tasa de vacancia a nivel nacional en ese período.'),
  makeBlock('b07', 'El incremento en vacancia no es consecuencia de un colapso de demanda, sino de la combinación de dos factores: la desaceleración de la demanda neta y la incorporación al inventario de metros cuadrados que se iniciaron durante el pico del ciclo. En ambos casos, la absorción neta de 2025 fue negativa o marginal. La absorción bruta de Tijuana en 2025 fue de 3.85 millones de pies cuadrados, pero la absorción neta resultó negativa en 637,622 pies cuadrados, lo que significa que se desocupó más espacio del que se ocupó en términos netos.'),

  // --- H2 2 ---
  makeH2('h02', 'Dónde están los precios hoy: Mexicali y Tijuana comparados'),
  makeBlock('b08', 'Las rentas en ambos mercados muestran un comportamiento diferente a la vacancia: han bajado menos de lo que el incremento en disponibilidad podría sugerir. En Mexicali, la renta promedio pasó de $5.90 USD por metro cuadrado por mes en junio de 2023 a $6.58 USD en junio de 2024, un incremento de 12% en doce meses según Solili. Los listados activos al cierre de 2025 ubican el rango en $6.50 a $7.00 USD por metro cuadrado mensual.'),
  makeBlock('b09', 'Esa cifra coloca a Mexicali por debajo del promedio nacional. En octubre de 2025, la renta promedio a nivel nacional fue de $7.33 USD por metro cuadrado mensual, de acuerdo con datos de Solili. Mexicali opera con un descuento de entre 5% y 10% respecto a ese promedio, lo que históricamente ha sido consistente con su posicionamiento como mercado de menor costo operativo dentro de la frontera norte.'),
  makeBlock('b10', 'Tijuana mantiene una prima significativa sobre Mexicali. En el primer trimestre de 2024, la renta promedio en Tijuana era de $8.15 USD por metro cuadrado mensual, según datos de Cushman & Wakefield. Los nuevos desarrollos especulativos que ingresaron al mercado en el cuarto trimestre de 2025 se listaron en torno a $8.50 USD, con espacio clase A de segunda generación en aproximadamente $8.18 USD por metro cuadrado.'),
  makeBlock('b11', 'El diferencial entre ambos mercados se mantiene consistente: Tijuana cobra entre $1.50 y $2.00 USD por metro cuadrado mensual más que Mexicali. En una operación de 10,000 metros cuadrados con contrato a 60 meses, esa diferencia se traduce en $750,000 a $1,000,000 de dólares en costo de renta acumulado. Es un número que merece figurar en cualquier análisis de costo total.'),
  makeBlock('b12', 'Para efectos de comparación más amplia: Ciudad Juárez opera en torno a $7.10 USD por metro cuadrado con una disponibilidad de alrededor del 11%; Monterrey ronda los $7.21 USD; Saltillo se ubica similar a Monterrey pero con vacancia por debajo del 2%, el nivel más bajo del país. Mexicali es, dentro de los mercados fronterizos activos, el que ofrece la combinación de disponibilidad razonable y precio por debajo del promedio nacional.'),

  // --- H2 3 ---
  makeH2('h03', 'Lo que explica la contracción de 2025: nearshoring, aranceles e incertidumbre'),
  makeBlock('b13', 'El superciclo de nearshoring que impulsó el mercado entre 2020 y 2023 no desapareció, pero se moderó de forma significativa. Los anuncios de inversión nearshoring en 2025 cayeron 23% respecto a 2024 y 49% respecto a 2023, que fue el año pico del ciclo, según datos de El Financiero. Esa contracción en anuncios se traduce con rezago en menor demanda de espacio industrial: las empresas que no confirman inversión no firman contratos de arrendamiento.'),
  makeBlock('b14', 'El contexto macroeconómico contribuyó a la cautela. El PIB de México se contrajo 0.6% en el cuarto trimestre de 2024. La revisión del T-MEC programada para 2026, los aranceles impuestos por la administración Trump y las reformas al poder judicial generaron un nivel de incertidumbre que históricamente inhibe las decisiones de inversión de mediano plazo. Las empresas que en 2022 habrían firmado contratos de arrendamiento de diez años en seis semanas, en 2025 extendieron sus procesos de evaluación o los suspendieron temporalmente.'),
  makeBlock('b15', 'El efecto en la construcción fue directo. A nivel nacional, la construcción industrial en agosto de 2025 era 20% inferior a la de 2024. El pipeline activo en octubre de 2025 mostró una reducción del 24% respecto a octubre de 2024. La demanda nacional del cuarto trimestre de 2025 se contrajo 13% respecto al año anterior. Estos no son indicadores de crisis, pero sí de un mercado que está absorbiendo el inventario existente antes de activar nueva construcción especulativa.'),
  makeBlock('b16', 'Hay un contrafactor relevante que los datos de 2025 no permiten cuantificar del todo, pero que varios analistas identifican como potencialmente positivo para Baja California: el efecto de los aranceles sobre las importaciones desde Asia. Mientras los productos fabricados en China enfrentan aranceles superiores al 10% en su ingreso a Estados Unidos, los productos manufacturados en México bajo T-MEC mantienen tasa 0%. Baja California, con su especialización en electrónica y componentes de precisión, ha sido identificada por análisis de Co-Production International y otros como una de las regiones que podría beneficiarse de la relocalización de producción asiática. El alcance real de ese efecto, sin embargo, depende de factores políticos que en el primer trimestre de 2026 siguen sin resolverse.'),

  // --- H2 4 ---
  makeH2('h04', 'Los factores que limitarán el crecimiento más allá de la demanda'),
  makeBlock('b17', 'La demanda de espacio industrial no es el único factor que determinará la trayectoria del mercado en Baja California. Hay dos restricciones estructurales que operan con independencia del ciclo económico y que los responsables de tomar decisiones de arrendamiento a largo plazo deben incorporar en su análisis.'),
  makeBlock('b18', 'El primero es el agua en Mexicali. El acuífero del Valle de Mexicali está clasificado como sobreexplotado desde 2015, con un déficit de 265.12 millones de metros cúbicos por año. La restricción no es un riesgo teórico: el caso Constellation Brands lo materializó de forma concreta. La empresa había obtenido todos los permisos regulatorios para construir una planta cervecera de $1,400 millones de dólares en Mexicali. La presión social generada por el uso de agua que implicaba la operación llevó a la cancelación del proyecto en 2020. El dato relevante para un director de operaciones es que los permisos regulatorios no garantizan la viabilidad operativa cuando el recurso hídrico está en disputa con la población local. Para manufactura aeroespacial, electrónica o de dispositivos médicos —sectores con bajo consumo de agua— el riesgo es manejable. Para operaciones con alta demanda hídrica, es un factor de exclusión que debe evaluarse explícitamente.'),
  makeBlock('b19', 'El segundo factor es la energía eléctrica. El 91% de los parques industriales en México han experimentado algún tipo de falla en el suministro eléctrico, según datos del sector. La CFE anunció un Plan de Fortalecimiento 2025–2030 con una inversión de aproximadamente 624,600 millones de pesos distribuidos en 66 proyectos de transmisión. El margen de reserva operativa subió de 6% en 2024 a 10% en 2025, lo que indica una mejora real pero desde un punto de partida bajo. Para operaciones que requieren suministro eléctrico continuo y de alta calidad —manufactura de semiconductores, procesamiento de datos, líneas de producción con tolerancias ajustadas— la evaluación de la infraestructura eléctrica del parque específico donde se va a instalar la operación es una diligencia que no puede omitirse.'),

  // --- H2 5 ---
  makeH2('h05', 'Mexicali vs. Tijuana vs. otros mercados fronterizos: qué dice la comparativa'),
  makeBlock('b20', 'El mercado industrial de la frontera norte de México no se analiza en aislamiento. Las empresas que evalúan Baja California están simultáneamente evaluando Monterrey, Ciudad Juárez, Saltillo y, en algunos casos, San Antonio o el corredor de Texas. La comparativa de datos del tercer y cuarto trimestre de 2025 ofrece un panorama que es útil para contextualizar las condiciones de Mexicali y Tijuana.'),
  makeBlock('b21', 'Tijuana es el mercado con mayor vacancia entre los destinos fronterizos activos: 7.34% al cierre de 2025, con registros de hasta 8.1% en algunos períodos del cuarto trimestre. Su renta promedio de $8.50 a $8.61 USD por metro cuadrado para nuevos desarrollos especulativos la posiciona como el mercado más caro de Baja California. A cambio, ofrece el inventario más grande de la región —el conjunto Tijuana más Tecate más Rosarito sumó 123 millones de pies cuadrados al cierre de 2025, equivalente a aproximadamente 11.4 millones de metros cuadrados— y el ecosistema de manufactura más denso.'),
  makeBlock('b22', 'Mexicali combina vacancia de 6.2%, renta de $6.50 a $7.00 USD y un inventario superior a 3.4 millones de metros cuadrados al segundo trimestre de 2024 según datos de Newmark y Solili. Es el mercado fronterizo con la renta más baja entre los que tienen disponibilidad activa relevante. Saltillo tiene rentas similares a Monterrey y la vacancia más baja del país (por debajo del 2%), pero eso implica menor disponibilidad inmediata. Ciudad Juárez opera con aproximadamente 11% de disponibilidad y rentas en torno a $7.10 USD; es el mercado con mayor disponibilidad relativa, pero con un perfil de riesgo de seguridad que algunas industrias evalúan de forma diferente.'),
  makeBlock('b23', 'El inventario nacional al cuarto trimestre de 2025 superó los 111 millones de metros cuadrados con un crecimiento anual del 7%. Eso significa que el mercado sigue incorporando nuevo espacio, aunque a un ritmo más lento que en 2022 y 2023. Para el arrendatario, el contexto es favorable: hay más opciones disponibles que hace dos años, las rentas no están en caída libre pero tampoco tienen la inercia alcista del boom, y los desarrolladores tienen mayor disposición a negociar condiciones de contrato que en 2021.'),

  // --- H2 6 ---
  makeH2('h06', 'Qué esperar en 2026: lo que los datos permiten inferir'),
  makeBlock('b24', 'Proyectar con certeza en un mercado afectado por variables políticas y arancelarias en curso es un ejercicio arriesgado. Lo que sí es posible es identificar las tendencias que los datos de 2025 sugieren con razonable consistencia.'),
  makeBlock('b25', 'La primera tendencia es el giro de especulativo a build-to-suit. Los desarrolladores que en 2022 construían naves sin arrendatario firmado, confiando en que el mercado las absorbería antes de la entrega, están reconvirtiendo esos proyectos a esquemas de construcción a la medida. En Tijuana, el inventario de terreno shovel-ready disponible para BTS al cierre de 2025 era de aproximadamente 2.9 millones de pies cuadrados. Ese dato es relevante porque indica que la capacidad de desarrollo existe, pero que los desarrolladores prefieren tener un arrendatario comprometido antes de iniciar. Para las empresas que evalúan instalarse, esto puede traducirse en condiciones de contrato más favorables a cambio de mayor plazo o especificaciones acordadas.'),
  makeBlock('b26', 'La segunda tendencia es la preferencia por expansión dentro del mismo parque industrial en lugar de reubicación. Las empresas que ya operan en Mexicali o Tijuana, ante la incertidumbre del entorno, están eligiendo crecer en el espacio que ya conocen —con la infraestructura eléctrica, los permisos y los proveedores locales ya establecidos— en lugar de iniciar un proceso de evaluación de nuevo mercado. Esto reduce la absorción neta de espacio nuevo pero también indica que la base instalada está activa y en crecimiento.'),
  makeBlock('b27', 'La tercera tendencia es la estabilización de rentas. Con vacancia en 6% a 8% en los principales mercados de BC, hay presión a la baja sobre precios. Sin embargo, los costos de construcción no han bajado al mismo ritmo que la demanda, lo que limita el margen de ajuste que los desarrolladores pueden absorber sin afectar la rentabilidad del proyecto. El escenario más probable para 2026 es un mercado con rentas estables o con descuentos selectivos en incentivos de arrendamiento —meses de gracia, mejoras a la nave a cargo del propietario— más que en el precio base por metro cuadrado.'),
  makeBlock('b28', 'La cuarta variable es la resolución —o falta de resolución— de la incertidumbre arancelaria. Si la revisión del T-MEC en 2026 confirma las condiciones actuales o las mejora, es probable que los anuncios de inversión nearshoring repunten en el segundo semestre del año, con efecto en demanda de espacio hacia 2027. Si el proceso de revisión genera más incertidumbre o resulta en condiciones desfavorables para México, la demanda seguirá siendo cautelosa. Es el factor con mayor impacto potencial sobre el mercado y el que menos datos actuales permiten proyectar con confianza.'),
  makeBlock('b29', 'En términos de posicionamiento para el arrendatario, el momento actual ofrece condiciones que hace tres años no existían: disponibilidad real de espacio, mayor disposición del desarrollador a negociar y un mercado que, aunque más lento, no está en contracción estructural. Para empresas que evaluaron Baja California en 2022 y no encontraron espacio disponible o no pudieron negociar condiciones aceptables, el primer semestre de 2026 puede representar una ventana de entrada diferente.'),

  // --- Cierre con mención de Grupo Nelson ---
  makeBlock('b30', 'Tomar decisiones de arrendamiento industrial en este entorno requiere más que datos de mercado: requiere conocimiento de la disponibilidad real en parques específicos, de los perfiles de infraestructura eléctrica e hídrica por zona y de las condiciones de contrato que los desarrolladores están dispuestos a ofrecer hoy. Grupo Nelson opera en Mexicali desde hace más de seis décadas y puede orientar a empresas que evalúan el mercado sobre qué ubicaciones y especificaciones se alinean con sus necesidades operativas. La decisión de arrendamiento, en todo caso, empieza con datos y termina con una visita al espacio.'),

  // --- Fuentes ---
  makeBlock('b_fuentes', 'Fuentes: Solili Reporte Industrial Mexicali y Tijuana 4T 2025 · Cushman & Wakefield Cross-Border Industrial Report 2024–2025 · Newmark Industrial Market Mexicali 2T 2024 · Real Estate Market Reporte Tijuana 4T 2025 · Co-Production International Q3 2025 Frontera Norte · El Financiero Nearshoring Investment Monitor 2025 · CONAGUA Acuífero Valle de Mexicali, Actualización 2023 · CFE Plan de Fortalecimiento del Sistema Eléctrico 2025–2030 · INEGI PIB México 4T 2024 · Secretaría de Economía IED Baja California 2024 · La Jornada / Infobaja IED Baja California 2024'),
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
