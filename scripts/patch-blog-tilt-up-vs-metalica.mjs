/**
 * Parcha el post de blog: Tilt-Up vs. Estructura Metálica:
 * Cuál es la Mejor Opción para tu Nave Industrial
 * Documento ID: 4lXD1QprlKmqniOHakmmBL
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmmBL'

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

const description = 'Tilt-Up o estructura metálica: la pregunta que todo director de operaciones hace al evaluar una nave industrial en México. Este análisis compara costos, velocidad de construcción, mantenimiento, capacidad de expansión y resistencia sísmica —el factor que Baja California pone sobre la mesa— para ayudarte a tomar la decisión correcta según tu operación real.'

const blocks = [
  makeBlock('b01', 'En la primera reunión de evaluación de un parque industrial, la pregunta llega invariablemente: ¿la nave es tilt-up o estructura metálica? Los VPs de Operaciones la hacen porque saben, por experiencia o por intuición, que la respuesta afecta más que la estética del inmueble. Afecta el costo inicial, los costos de mantenimiento a 10 años, la velocidad con la que pueden operar, la capacidad de expandir cuando el negocio lo exija, y —en el caso de Baja California— el comportamiento del edificio ante un sismo de magnitud real.'),
  makeBlock('b02', 'La respuesta honesta es que no hay una opción universalmente mejor. Hay una opción correcta según el tamaño de la nave, el presupuesto, el uso industrial específico, el horizonte de permanencia y la ubicación geográfica. Este análisis descompone los factores que realmente importan, con datos del mercado mexicano y del mercado de referencia en Estados Unidos, para que el equipo técnico y ejecutivo pueda tomar una decisión con base, no con suposiciones.'),

  makeH2('h01', 'Cómo funciona el Tilt-Up y por qué domina el mercado Clase A'),
  makeBlock('b03', 'El tilt-up es un método constructivo donde los paneles de concreto se cuelan directamente sobre la losa de la nave, en sitio, y se levantan con grúa especializada una vez que alcanzan la resistencia de diseño —entre 2,500 y 3,500 psi, lo que toma un mínimo de 5 a 10 días de curado. Una vez levantados y conectados a la estructura del techo, forman los muros perimetrales definitivos del edificio. El proceso fue desarrollado y documentado por la Tilt-Up Concrete Association (TCA), que hoy registra más de 650 millones de pies cuadrados de construcción tilt-up al año solo en Estados Unidos, con un crecimiento anual de aproximadamente 20%.'),
  makeBlock('b04', 'Una estructura de 60,000 pies cuadrados con sistema tilt-up puede quedar cerrada —con techo y muros— en aproximadamente cuatro semanas desde el inicio del levantamiento de paneles. El tiempo total del proyecto, desde diseño hasta entrega operativa, se ubica entre 4 y 6 meses según Construct Two Group. La vida útil del sistema, con mantenimiento mínimo, alcanza los 100 años según la TCA. La resistencia al fuego de los paneles de concreto va de 1 a 4 horas dependiendo del grosor, sin necesidad de recubrimientos adicionales contra incendio —una ventaja directa sobre el acero estructural expuesto, que sí requiere protección adicional para cumplir con las mismas clasificaciones de fuego.'),
  makeBlock('b05', 'En el mercado de Baja California, el tilt-up se ha consolidado como el sistema constructivo estándar en el segmento Clase A. ATISA Industrial fue pionero del método en México, con más de 35 años usándolo desde Tijuana, donde su Parque Industrial Pacífico —iniciado hacia 1990— fue uno de los primeros proyectos a gran escala con tilt-up en el país. Hoy, los desarrolladores más activos en la región —Vesta, IAMSA, Finsa, Prologis— construyen sus naves Clase A con muros tilt-up como estándar. La especificación típica en Mexicali y Tijuana incluye muros tilt-up, clear height de 6.7 a 12 metros o más, piso de concreto de 5 pulgadas y cubierta KR-18.'),
  makeBlock('b06', 'La limitación principal del tilt-up es económica y de escala: no es viable en naves menores de aproximadamente 50,000 pies cuadrados (cerca de 4,645 m²). Los costos fijos —particularmente el de la grúa especializada necesaria para el levantamiento— hacen que el costo por metro cuadrado sea prohibitivo en proyectos pequeños. Para ese rango de superficie, la estructura metálica tiene ventaja de costo inicial.'),

  makeH2('h02', 'Cómo funciona la estructura metálica y cuándo tiene sentido'),
  makeBlock('b07', 'Los edificios de estructura metálica prefabricada —conocidos en la industria como Pre-Engineered Buildings (PEB) o Steel Buildings— se fabrican en planta con componentes diseñados específicamente para cada proyecto: vigas, columnas, correas, paneles de cubierta y fachada. Los elementos se transportan al sitio y se ensamblan. La velocidad de erección de la estructura misma es notable: 1 a 3 semanas para la estructura en proyectos estándar. El tiempo total del proyecto, incluyendo cimentación y acabados, va de 8 a 16 semanas en proyectos sin complejidades extraordinarias.'),
  makeBlock('b08', 'La flexibilidad de claro libre es una fortaleza real del sistema. Los claros libres estándar van de 12 a 30 metros sin columnas intermedias. Con ingeniería especializada, es posible llegar a 60 metros o más, lo que lo hace el sistema preferido para almacenamiento de alto volumen, hangares y aplicaciones donde la ausencia total de columnas en el piso es crítica para la operación. Fabricantes como NUCOR Building Systems —con más de 1,400 constructores autorizados en América— BlueScope Steel, Zamil Steel y KIRBY Building Systems han desarrollado sistemas modulares que permiten una gran variedad de configuraciones.'),
  makeBlock('b09', 'Las limitaciones del sistema metálico son igualmente reales. El acero expuesto requiere protección adicional contra incendio —pintura intumescente, recubrimientos especiales o encasillado— para cumplir las mismas clasificaciones que el concreto obtiene por geometría. La corrosión en entornos con humedad o agentes químicos exige mantenimiento periódico con un costo estimado de $2 a $6 USD por metro cuadrado al año, según datos de Havit Steel. La expansión térmica del acero exige juntas de expansión en el diseño. Y la expansión longitudinal del edificio —si la operación crece y requiere más superficie— aunque posible, implica considerar desde el diseño original la capacidad de la estructura para soportar ampliaciones futuras.'),

  makeH2('h03', 'La comparativa que importa: costos, velocidad, mantenimiento y expansión'),
  makeBlock('b10', 'En términos de costo de construcción en México para 2024-2025, los rangos publicados por Constructores Rivera ofrecen una referencia de mercado. Una nave ligera con estructura metálica básica se ubica entre $4,500 y $7,000 MXN por metro cuadrado, equivalente a aproximadamente $225–$350 USD/m². Una nave estándar para manufactura o logística, entre $6,000 y $8,500 MXN/m² ($300–$425 USD/m²). Una nave especializada Clase A con tilt-up va de $8,500 a $15,000 MXN/m² o más ($425–$750+ USD/m²). En el mercado de referencia de Estados Unidos, el tilt-up cuesta entre $25 y $55 USD por pie cuadrado; la estructura metálica, entre $10 y $20 USD/sq ft, según estimaciones de CSI Estimation LLC.'),
  makeBlock('b11', 'La lectura superficial de esos números lleva a una conclusión incorrecta: que la estructura metálica siempre es más barata. La conclusión correcta considera el ciclo de vida total. En proyectos menores de 5,000 m², la estructura metálica tiene ventaja de costo inicial clara. En proyectos mayores de 5,000 m², el tilt-up se vuelve competitivo y frecuentemente más económico en ciclo de vida total, una vez que se suman los menores costos de mantenimiento, la mayor durabilidad y la resistencia al fuego sin recubrimientos adicionales. La estructura metálica tiene un costo de mantenimiento recurrente que el tilt-up no tiene en la misma magnitud.'),
  makeBlock('b12', 'En velocidad de construcción, la estructura metálica gana en tiempo total de entrega para proyectos estándar: 8 a 16 semanas vs. 4 a 6 meses del tilt-up. Para operaciones que necesitan entrar en producción en el menor tiempo posible, esa diferencia es un factor real. Para proyectos que operarán durante décadas y donde el plazo de arranque es parte de un plan a largo plazo, la diferencia se diluye frente a las ventajas de ciclo de vida del tilt-up.'),
  makeBlock('b13', 'En flexibilidad de expansión, la estructura metálica tiene ventaja neta. Extender longitudinalmente un edificio metálico implica agregar módulos en la dirección del caballete sin demoler la estructura existente —un proceso relativamente directo. Expandir una nave tilt-up implica alterar o demoler paneles de concreto, lo cual es más complejo y costoso. Para operaciones con alta probabilidad de crecimiento de superficie en 5 a 10 años, este factor debe pesar en la evaluación desde el día cero.'),

  makeH2('h04', 'El factor que Baja California pone sobre la mesa: la sismicidad'),
  makeBlock('b14', 'Baja California es una de las zonas sísmicas más activas de México. El estado se ubica sobre el sistema de fallas de la frontera entre las placas del Pacífico y Norteamérica. En Mexicali, las fallas principales son Cerro Prieto e Imperial; en Tijuana, las fallas San Miguel y Vallecitos son las de mayor relevancia. Mexicali registra más de 150 eventos de magnitud mayor a 5.0 Mw en los últimos 100 años, según datos de Temblor.net. El evento de referencia más reciente es el terremoto El Mayor-Cucapah del 4 de abril de 2010, con magnitud 7.2, epicentro 25 kilómetros al sur de Guadalupe Victoria, BC. Ese evento causó daño estructural o colapso parcial en más de 103 edificios en Mexicali, según reportes del USGS.'),
  makeBlock('b15', 'La clasificación oficial es Zona Sísmica D —el nivel de mayor riesgo en la escala mexicana—, conforme al SIDURT BC y las Normas Técnicas 2017. El coeficiente sísmico de diseño para edificios industriales en Zona D va de 0.29 en suelo tipo I a 0.44 en suelo tipo III. Un estudio publicado en MDPI en 2024 advierte que el efecto de sitio en los suelos blandos del Valle de Mexicali puede amplificar significativamente la demanda sísmica más allá de los valores base. El diseño sísmico específico al sitio no es opcional: es obligatorio, y eleva los costos de ingeniería para ambos sistemas constructivos.'),
  makeBlock('b16', 'La pregunta natural es: ¿cuál sistema resiste mejor un sismo? La respuesta honesta es que ambos son viables en Baja California con el diseño correcto —y que la diferencia real no es el material, sino el diseño. La estructura metálica tiene ventaja por ductilidad: el acero se deforma antes de colapsar, absorbiendo energía sísmica de forma gradual, según BuildSteel.org. El tilt-up es más rígido, pero tiene un historial sísmico sólido en California —una de las zonas de mayor actividad sísmica en América del Norte— cuando los paneles están correctamente conectados a la estructura del techo y el diseño fue ejecutado conforme a las normas aplicables.'),
  makeBlock('b17', 'Lo que los datos sísmicos de BC realmente implican para un director de operaciones no es elegir un sistema por sobre el otro basado en el material. Implica tres cosas concretas: primero, no economizar en ingeniería estructural —el diseño sísmico específico al sitio es una inversión que no debe recortarse. Segundo, revisar que el desarrollador o constructor acredite experiencia en diseño sísmico en Zona D, no solo en zonas de menor demanda. Tercero, considerar que en un evento sísmico mayor, el tiempo de inactividad operativa depende más de la calidad del diseño y ejecución que del material estructural elegido.'),

  makeH2('h05', 'La pregunta correcta no es cuál es mejor, sino cuál encaja con tu operación'),
  makeBlock('b18', 'El análisis anterior lleva a una conclusión que los directores de operaciones con más experiencia en evaluación de naves industriales ya conocen: la pregunta no es abstracta. Es específica. La respuesta correcta depende de al menos cinco variables de la operación concreta.'),
  makeBlock('b19', 'Primera variable: el tamaño de la nave. Por debajo de 5,000 m², la estructura metálica tiene ventaja económica clara en costo inicial. Por encima de 5,000 m², el tilt-up empieza a ser competitivo en costo total y superior en durabilidad. Para naves de 10,000 m² o más en un parque Clase A, el tilt-up es el estándar de mercado por razones que van más allá de la preferencia estética.'),
  makeBlock('b20', 'Segunda variable: el tipo de uso industrial. Manufactura pesada, industria aeroespacial, dispositivos médicos, almacenamiento de gran volumen con racks de alta densidad: el tilt-up es el sistema preferido por su rigidez estructural, su resistencia al fuego sin recubrimientos adicionales y su compatibilidad con las especificaciones de estos sectores. Manufactura ligera, ensamble de componentes, bodega de distribución de corto plazo, operaciones con presupuesto de capital limitado: la estructura metálica puede ser la opción correcta, especialmente si el horizonte de ocupación es menor a 10 años.'),
  makeBlock('b21', 'Tercera variable: el horizonte de permanencia. Una empresa que firma un contrato de 5 años con opciones de renovación tiene un análisis diferente al de una empresa que planea operar en la misma nave durante 20 años. Para horizontes largos, el menor costo de mantenimiento y la mayor durabilidad del tilt-up pesan fuertemente. Para horizontes cortos o con alta incertidumbre de permanencia, la velocidad de construcción y el menor costo inicial de la estructura metálica pueden ser decisivos.'),
  makeBlock('b22', 'Cuarta variable: los planes de expansión. Si la operación tiene alta probabilidad de crecer en superficie en los próximos 5 a 10 años, la estructura metálica facilita esa expansión longitudinal. Si el crecimiento esperado es en altura —más niveles de almacenamiento, mezanines— ambos sistemas lo permiten, aunque el tilt-up ofrece mayor capacidad de carga en muros perimetrales sin modificación estructural mayor. Si el crecimiento no está contemplado o se planea a través de nuevas naves independientes, este factor es neutro.'),
  makeBlock('b23', 'Quinta variable: la ubicación específica dentro de BC. En un parque Clase A consolidado de Mexicali o Tijuana, el tilt-up es prácticamente el único sistema disponible: los desarrolladores institucionales construyen en ese estándar y no ofrecen naves metálicas en su inventario Clase A. En parques industriales de menor clasificación, en municipios con menor actividad industrial institucional, o en proyectos de construcción propia fuera de un parque establecido, la estructura metálica abre opciones de costo y velocidad que el tilt-up no ofrece en esos contextos.'),
  makeBlock('b24', 'Una lectura rápida del mercado de Baja California en 2024 ilustra el punto. Tijuana cerró 2024 con un inventario de más de 118.4 millones de pies cuadrados de espacio industrial, con un crecimiento superior al 20.6% desde 2019. Mexicali pasó de 25 millones de pies cuadrados en 2018 a más de 40 millones en 2024. El norte de México concentra el 40% del arrendamiento de naves industriales a nivel nacional, según datos de FINSA, y el 67% de los espacios comercializados en México en el tercer trimestre de 2024 provinieron de mercados fronterizos del norte. Ese crecimiento se construyó predominantemente en tilt-up Clase A —no porque sea el único sistema posible, sino porque es el que responde mejor a la escala, los estándares internacionales y los requerimientos de los inquilinos más grandes que llegan a la región.'),
  makeBlock('b25', 'Para operaciones de manufactura establecidas que evalúan una nave en un parque Clase A de Mexicali o Tijuana, la pregunta práctica no es tilt-up vs. metálica —en ese contexto ya está respondida por el mercado. La pregunta real es: ¿la nave específica que estamos evaluando cumple con las especificaciones sísmicas del sitio, con el clear height que necesita nuestra operación, con la capacidad de piso para nuestra maquinaria y con las condiciones de contrato que permiten planificar a 10 años? Esas preguntas requieren revisión técnica, no solo comparación de sistemas constructivos en abstracto.'),

  makeBlock('b26', 'Grupo Nelson asesora a empresas manufactureras en la evaluación y selección de naves industriales en Baja California desde hace más de seis décadas. Si tu equipo está en proceso de evaluación de un parque o nave específica en la región, podemos acompañarte con la información de mercado y el análisis técnico necesario para tomar la decisión con datos reales.'),

  makeBlock('b_fuentes', 'Fuentes: Tilt-Up Concrete Association (TCA) — tilt-up.org · Construct Two Group — constructtwogroup.com · Rhino Steel Building Systems — rhinobldg.com · Havit Steel — havitsteel.com · BuildSteel.org — Seismic Performance of Steel Buildings · CSI Estimation LLC — csiestimation.com · Constructores Rivera — Costos de construcción industrial México 2024-2025 · NUCOR Building Systems — nucorbuildingsystems.com · ATISA Industrial — atisa.com.mx · Vesta — Reporte de Inversión Vesta Park Mega Region Tijuana · Temblor.net — Seismicity data Mexicali · USGS — El Mayor-Cucapah Earthquake, April 4 2010 · Wikipedia — Terremoto de Baja California de 2010 · SIDURT BC / Normas Técnicas de Diseño Sísmico 2017 · MDPI (2024) — Site effects in the Mexicali Valley · FINSA — Reporte de Mercado Industrial Norte de México · Solili — Reportes de mercado industrial Mexicali y Tijuana 2024'),
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
