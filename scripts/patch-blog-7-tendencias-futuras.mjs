/**
 * Parcha el post de blog: Las 7 Tendencias que Definirán el Mercado Industrial de Baja California en los Próximos 10 Años
 * Documento ID: 4lXD1QprlKmqniOHakmxmX
 */
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmxmX'

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
  'Un análisis prospectivo de las siete fuerzas estructurales que determinarán el mercado de naves industriales en Baja California durante la próxima década: desde la segunda ola del nearshoring hasta la consolidación institucional del sector.'

const blocks = [
  makeBlock(
    'b01',
    'Este es el artículo treinta de una serie que comenzó con una pregunta concreta: ¿qué está pasando realmente en el mercado industrial de Baja California? Lo que encontramos a lo largo de estos meses no fue un ciclo de auge temporal impulsado por una coyuntura política. Encontramos una transformación estructural en curso, con múltiples capas, que responde a fuerzas globales de largo plazo y que se está materializando en concreto, acero y decisiones de inversión con horizontes de 10 a 20 años.'
  ),
  makeBlock(
    'b02',
    'Este artículo de cierre no pretende resumir los 29 anteriores. Pretende algo más útil: identificar las siete tendencias que consideramos más determinantes para el mercado industrial de Baja California en la próxima década. No son predicciones especulativas. Son el resultado visible de lo que ya está en construcción, ya está siendo regulado o ya está siendo financiado. El trabajo del tomador de decisiones —director de operaciones, CFO, desarrollador, inversionista— es entender qué significan estas tendencias para su posición específica.'
  ),

  makeH2('h01', 'Nearshoring 2.0: La segunda ola todavía no llegó completa'),
  makeBlock(
    'b03',
    'La inversión extranjera directa en México durante los primeros nueve meses de 2025 alcanzó USD $40.9 mil millones, un incremento de 14.5% respecto al mismo periodo del año anterior y un récord histórico. BCG proyecta que el comercio bilateral México–Estados Unidos crecerá USD $315 mil millones adicionales para 2033, con una tasa compuesta de crecimiento anual del 4%. Estos números confirman que la tesis del nearshoring no fue una narrativa de pandemia.'
  ),
  makeBlock(
    'b04',
    'Sin embargo, la ejecución ha sido desigual. Desde 2021 se han anunciado proyectos por aproximadamente USD $40 mil millones, pero según el Monitor de Inversiones de Deloitte, solo el 60% ha iniciado construcción. Los anuncios de nueva inversión cayeron 75% en los primeros ocho meses de 2024 respecto a 2023. Esto no es el fin del ciclo: es una pausa de consolidación antes de la segunda ola.'
  ),
  makeBlock(
    'b05',
    'La segunda ola será diferente. El gobierno mexicano está orientando sus incentivos fiscales hacia sectores de mayor valor agregado: semiconductores, electromovilidad, equipo eléctrico y electrónico, dispositivos médicos y farmacéuticos, y agroindustria avanzada. Las exportaciones manufactureras de México se proyectan en USD $609 mil millones para 2028, desde los USD $455 mil millones de 2023. Para Baja California, posicionada geográficamente para manufactura médica, electrónica y aeroespacial, esta segunda ola representa la oportunidad más significativa en décadas.'
  ),

  makeH2('h02', 'La energía como activo estratégico del parque, no como servicio básico'),
  makeBlock(
    'b06',
    'Más del 60% de la red de transmisión eléctrica nacional opera cerca de su capacidad máxima. Este dato, proveniente del análisis de la infraestructura de la CFE, explica por qué la energía ha dejado de ser un servicio que se da por sentado en la decisión de ubicación industrial para convertirse en un factor diferenciador de primer orden.'
  ),
  makeBlock(
    'b07',
    'El Plan de Expansión de la CFE 2025–2030 contempla una inversión de USD $8 a $9 mil millones, con 275 nuevas líneas de transmisión, 524 subestaciones y 21,846 MW de nueva capacidad. Mientras esa infraestructura se construye, las tarifas industriales para grandes consumidores —segmentos GDMTH, DIST y DIT— registraron en 2025 el mayor incremento en cinco años: entre 8% y 12%. El costo de la energía está subiendo al mismo tiempo que la confiabilidad de suministro se vuelve menos predecible.'
  ),
  makeBlock(
    'b08',
    'En este contexto, los parques industriales que pueden ofrecer capacidad eléctrica garantizada —mediante combinaciones de generación solar, almacenamiento en baterías (BESS) y cogeneración— tienen una ventaja competitiva directa y cuantificable. El mercado de microredes en México pasará de USD $808 millones en 2024 a USD $2,867 millones en 2033, con una CAGR del 15.1%. La publicación en el DOF del 7 de marzo de 2025 del primer marco regulatorio explícito para almacenamiento en baterías marca el inicio de la institucionalización de esta tendencia. En los próximos 10 años, "¿cuánta energía garantizada puede ofrecerme el parque?" será una pregunta estándar en cualquier proceso de due diligence.'
  ),

  makeH2('h03', 'Las naves del próximo ciclo se están diseñando diferente'),
  makeBlock(
    'b09',
    'El mercado global de sistemas automáticos de almacenamiento y recuperación (ASRS) crecerá de USD $11.15 mil millones en 2024 a USD $19.76 mil millones en 2033. Los vehículos de guía autónoma (AGV) y los robots móviles autónomos (AMR) están dejando de ser tecnología experimental para convertirse en infraestructura operativa estándar en manufactura avanzada y centros de distribución de alto volumen. Esto tiene consecuencias directas sobre las especificaciones físicas de las naves industriales.'
  ),
  makeBlock(
    'b10',
    'Una nave automation-ready requiere clear height mínimo de 36 a 40 pies (entre 11 y 12 metros) para AMRs; los sistemas ASRS de grúa requieren 15 metros o más. La capacidad eléctrica necesaria es de 2,000 a 4,000 amperios, frente a los 800 a 1,200 amperios de una nave convencional. Las losas deben ser de 6 a 8 pulgadas de alta resistencia. Las naves build-to-suit diseñadas para automatización son el segmento de mayor crecimiento en requerimientos técnicos. El inventario existente con clear height inferior a 30 pies o capacidad eléctrica menor a 1,000 amperios enfrentará dificultades crecientes para reletting en la próxima década.'
  ),

  makeH2('h04', 'Cuando la sostenibilidad deja de ser diferenciador y se vuelve requisito de entrada'),
  makeBlock(
    'b11',
    'La Directiva de Reporte de Sostenibilidad Corporativa de la Unión Europea (CSRD) obliga a las filiales mexicanas de empresas europeas a reportar emisiones Scope 1, 2 y 3 a partir de los reportes del ejercicio 2025. En México, el reporte de sostenibilidad obligatorio para emisores de valores entrará en vigor en 2026. Estas regulaciones no son aspiracionales: tienen fechas, mecanismos de cumplimiento y consecuencias contractuales.'
  ),
  makeBlock(
    'b12',
    'Al corte de junio de 2024, México contaba con más de 800 proyectos certificados EDGE y más de un millón de metros cuadrados certificados. Investigaciones académicas de 2025 documentan un sobreprecio de renta del 4% para edificios con certificación LEED. La IFC espera que los proyectos de nearshoring con criterios verdes representen el 50% de su portafolio de USD $1 mil millones en México. El green lease, que hace dos años era una iniciativa voluntaria del arrendador sofisticado, se está convirtiendo en una exigencia contractual del inquilino multinacional. Para el desarrollador que no haya comenzado a integrar criterios de sostenibilidad en su proceso de diseño y construcción, el costo de ponerse al día en 2028 será significativamente mayor que el de comenzar hoy.'
  ),

  makeH2('h05', 'China+1 en Baja California: oportunidad real con riesgo arancelario real'),
  makeBlock(
    'b13',
    'En 2023, por primera vez en 20 años, México superó a China como principal exportador a Estados Unidos, según datos del Dallas Fed. Esta es la señal más clara del reordenamiento del comercio global que el nearshoring representa. La estrategia China+1 —diversificar manufactura fuera de China hacia mercados con acceso preferencial a EE.UU.— está llevando a empresas chinas a establecer operaciones en México para acceder al mercado norteamericano bajo las reglas de origen del T-MEC. Lingong Machinery Group anunció una inversión de USD $5 mil millones en Nuevo León; Trina Solar planea una planta solar por USD $1 mil millones en México.'
  ),
  makeBlock(
    'b14',
    'El riesgo arancelario es real y no debe minimizarse. Los aranceles del "Liberation Day" de abril de 2025 establecieron una base del 10% para casi todos los países, con amenaza de 25% para México y 145% para China en categorías específicas. Nueve meses después de su anuncio, estos aranceles no han generado el reshoring masivo hacia Estados Unidos que algunos predijeron: las empresas siguen buscando alternativas externas a China, y México sigue siendo la opción más viable para manufactura con acceso al mercado norteamericano. La segunda ola del nearshoring en Baja California será de manufactura avanzada, semiconductor-adjacent y medtech —sectores menos sensibles a los diferenciales de tarifa y más sensibles a la disponibilidad de talento técnico y la proximidad logística a California.'
  ),

  makeH2('h06', 'Otay Mesa East y la transformación de los flujos logísticos regionales'),
  makeBlock(
    'b15',
    'El Puerto de Entrada Otay Mesa East es, probablemente, el proyecto de infraestructura con mayor impacto potencial sobre el mercado industrial de Tijuana y la zona fronteriza en la próxima década. Con USD $150 millones en fondos INFRA aprobados y construcción iniciada, su apertura está proyectada entre 2027 y 2028. El diseño está orientado primordialmente a vehículos comerciales, lo que lo diferencia del puerto actual de Otay Mesa y lo convierte en un habilitador directo del movimiento de mercancías industriales.'
  ),
  makeBlock(
    'b16',
    'El impacto de esta infraestructura sobre los valores de renta y la demanda de espacio industrial ya se está anticipando en los precios del mercado. Tijuana registra 102 millones de pies cuadrados de inventario industrial, con renta de USD $0.80 por pie cuadrado por mes en el tercer trimestre de 2025 y un incremento del 14% en construction starts. Mexicali, con un inventario que creció de aproximadamente 25 millones de pies cuadrados en 2018 a más de 40 millones en 2024, registra una renta de USD $0.56 por pie cuadrado en el cuarto trimestre de 2024 —un aumento del 80% desde los niveles prepandemia de USD $0.31. La apertura de Otay Mesa East reordenará los flujos logísticos de la región y potencialmente redistribuirá demanda entre submercados.'
  ),

  makeH2('h07', 'Consolidación del mercado: quiénes quedarán y quiénes no'),
  makeBlock(
    'b17',
    'México cuenta con 477 parques industriales activos al segundo trimestre de 2025, según AMPIP, con más de 4,000 empresas inquilinas y 3.7 millones de empleos directos. La inversión en parques industriales en 2025 asciende a USD $6.14 mil millones, un incremento del 12.1% respecto a 2024. El sector está en expansión, pero también en consolidación.'
  ),
  makeBlock(
    'b18',
    'La adquisición por parte de FIBRA Prologis del 77.14% de FIBRA Terrafina —que añade 42.2 millones de pies cuadrados a su portafolio— es la consolidación más grande en la historia del mercado industrial mexicano. FIBRA Prologis opera 4.3 millones de metros cuadrados de GLA; Vesta, 3.4 millones; FIBRA Monterrey, 1.4 millones. En Baja California, los desarrolladores activos incluyen FINSA, Prologis, Vesta, Grupo Nelson y Atisa. El nearshoring representa el 35% del espacio industrial rentable en México al cierre de 2024, con 59.2 millones de pies cuadrados de GRA rentable.'
  ),
  makeBlock(
    'b19',
    'La bifurcación del mercado es la tendencia más relevante para los próximos 10 años: los desarrolladores institucionales con capacidad para ofrecer naves automation-ready, energía garantizada y certificaciones de sostenibilidad captarán la demanda de manufactura avanzada. El inventario especulativo convencional —construido sin estas especificaciones— enfrentará presión de vacancia creciente conforme los inquilinos de mayor valor migren hacia espacios más sofisticados. Esta no es una predicción: es la dirección que ya están tomando las solicitudes de propuesta en el segmento corporativo.'
  ),

  makeBlock(
    'b_cierre',
    'Treinta artículos después, la conclusión es más sencilla de lo que parece: Baja California no es solo un destino de manufactura de bajo costo. Es una plataforma industrial en transición hacia mayor complejidad, mayor valor agregado y mayor integración con las cadenas de suministro de América del Norte. Las siete tendencias descritas en este artículo no son proyecciones de analistas: son el resultado visible de decisiones de inversión, marcos regulatorios y transformaciones tecnológicas que ya están en marcha. Para Grupo Nelson, con más de 60 años siendo parte activa de este mercado, estas tendencias no son noticias: son el contexto en el que hemos operado y seguiremos operando. El mercado industrial de Baja California tiene una década extraordinaria por delante para quienes sepan leer las señales correctas.'
  ),

  makeBlock(
    'b_fuentes',
    'Fuentes: Secretaría de Economía de México, Informe de IED enero–septiembre 2025; BCG, "Nearshoring in Mexico: The Next Wave", 2024; Deloitte Investment Monitor, 2024; CFE, Plan de Expansión del Sistema Eléctrico Nacional 2025–2030; MarketsandMarkets, "Microgrids Market – Global Forecast to 2033", 2024; Grand View Research, "ASRS Market Size & Share Report, 2033"; European Commission, Corporate Sustainability Reporting Directive (CSRD); Comisión Nacional Bancaria y de Valores (CNBV), Lineamientos de Reporte de Sostenibilidad 2026; IFC, Mexico Nearshoring Portfolio Report, 2024; Dallas Fed, "Mexico Surpasses China as Top US Trading Partner", 2024; AMPIP, Reporte del Mercado Industrial Mexicano Q2 2025; CBRE, Mexico Industrial Market Statistics Q4 2024 y Q3 2025; Diario Oficial de la Federación, Regulación BESS, 7 de marzo de 2025; U.S. Department of Transportation, INFRA Grants – Otay Mesa East Port of Entry, 2024; FIBRA Prologis, Comunicado de adquisición FIBRA Terrafina, 2024.'
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
  const result = await client.patch(DOC_ID).set({ body, description: descriptionField }).commit()
  console.log('✅ Post actualizado:', result._id)
} catch (err) {
  console.error('❌ Error:', err.message)
}
