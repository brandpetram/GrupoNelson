/**
 * Parcha el post de blog: Por Qué las Empresas Fortune 500 Eligen Mexicali
 * Documento ID: 4lXD1QprlKmqniOHakmGZL
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHakmGZL'

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

const description = 'Análisis de los cinco factores estructurales que explican por qué empresas como Gulfstream y Collins Aerospace llevan décadas en Mexicali y siguen expandiéndose: proximidad, cluster aeroespacial, USMCA, mercado inmobiliario y lógica de largo plazo.'

const blocks = [
  makeBlock('b01', 'En agosto de 2024, Gulfstream Aerospace anunció una inversión de 370 millones de dólares en una nueva planta de 540,000 pies cuadrados en Mexicali. La noticia circuló en medios especializados como dato de tendencia, como un capítulo más en la narrativa del nearshoring mexicano. Pero quienes conocen la región saben que esa inversión no fue una apuesta por una moda —fue la continuación lógica de una relación que lleva más de 30 años.'),
  makeBlock('b02', 'La pregunta que vale la pena hacerse no es "¿por qué Gulfstream invirtió en Mexicali?" sino "¿qué vieron hace tres décadas que los mantiene aquí y los hace escalar en lugar de salir?" La respuesta no tiene que ver con incentivos puntuales ni con discursos de funcionarios. Tiene que ver con cinco factores estructurales que, cuando se combinan, crean condiciones difíciles de replicar en cualquier otro mercado. Entender esos factores es lo que separa una decisión de localización sólida de una que parece razonable en el papel pero que genera fricciones operativas durante años.'),

  makeH2('h01', 'El argumento que los CFOs no pueden ignorar: tiempo y proximidad'),
  makeBlock('b03', 'Hay una métrica que no aparece en los análisis de costo por hora laboral pero que determina la viabilidad de ciertos modelos de manufactura: el tiempo de tránsito al cliente final.'),
  makeBlock('b04', 'Mexicali está a aproximadamente 130 millas de Los Ángeles por la I-8. En condiciones normales, un camión hace ese trayecto en dos a tres horas. El puerto de entrada Calexico East —que procesó 453,000 camiones comerciales y 20,000 millones de dólares en comercio en el último ciclo fiscal reportado, con una expansión completada en octubre de 2024— cuenta con carriles FAST del programa C-TPAT que reducen tiempos de cruce para operadores certificados.'),
  makeBlock('b05', 'Compárese con la ruta Shanghai-Los Ángeles: 15 a 20 días de ocean freight en condiciones normales, sin contar los eventos de disrupción que el sector manufacturero aprendió a cotizar muy caro entre 2020 y 2023. Para manufactura aeroespacial, automotriz o electrónica de precisión, donde los programas de producción tienen tolerancias ajustadas, esa diferencia no es un detalle logístico —es un parámetro de diseño del modelo operativo completo.'),
  makeBlock('b06', 'Según datos de Tetakawi y Visigistics, el costo laboral manufacturero en Mexicali ronda los 4.50 a 4.90 dólares por hora, frente a aproximadamente 6.50 dólares en Shanghai. La brecha de costo laboral entre México y China se ha comprimido considerablemente —China ha registrado incrementos salariales de alrededor del 7% anual durante una década— pero la combinación de costo, proximidad y acceso preferencial al mercado estadounidense bajo USMCA crea una ecuación que los modelos de optimización de cadena de suministro difícilmente superan con origen asiático.'),

  makeH2('h02', '50 años de cluster aeroespacial: ventaja que no se improvisa'),
  makeBlock('b07', 'Cuando Collins Aerospace —en ese entonces todavía Rockwell Collins— estableció operaciones en Mexicali hace aproximadamente cinco décadas, estaba sembrando algo que con el tiempo se convertiría en el cluster aeroespacial más antiguo y maduro de México.'),
  makeBlock('b08', 'Hoy, Baja California concentra el 21% de todas las empresas aeroespaciales del país, según datos de Pro Mexico Industry, con más de 40,000 empleos directos en el sector. Collins Aerospace mantiene dos instalaciones en Mexicali —una de aerostructuras y una de avionics— con aproximadamente 1,100 empleados, y fabrica componentes críticos como thrust reversers para el Boeing 787 Dreamliner. Gulfstream, por su parte, produce en la región arneses eléctricos, componentes de lámina, subensambles estructurales y piezas maquinadas para jets ejecutivos.'),
  makeBlock('b09', 'Estos no son casos de empresas que llegaron por un incentivo fiscal y se quedaron por inercia. Son operaciones que han pasado décadas depurando procesos, formando cuadros técnicos locales y construyendo cadenas de proveeduría regional. El resultado es un ecosistema que un ejecutivo de supply chain puede valorar en términos concretos: proveedores calificados disponibles localmente, técnicos con certificaciones aeroespaciales formados en universidades de la región, y un marco regulatorio que el sector conoce de memoria.'),
  makeBlock('b10', 'México ocupa el 12° lugar mundial en manufactura aeroespacial y el 4° entre los exportadores globales del sector, con exportaciones estimadas en 10,700 millones de dólares en 2024, según datos de American Industries Group. Esa posición no se construye en cinco años. Y el cluster de Baja California es parte central de esa historia.'),
  makeBlock('b11', 'Para una empresa que está evaluando una nueva ubicación de manufactura, la pregunta relevante no es solo "¿hay espacio industrial disponible?" sino "¿hay proveedores, técnicos y subcontratistas con los estándares que necesito a 30 kilómetros de mi planta?" En Mexicali, para varios sectores, la respuesta es sí. En muchos otros mercados que compiten por la misma inversión, la respuesta honesta es "en construcción".'),

  makeH2('h03', 'USMCA y Zona Libre Frontera Norte: el marco que hace viable el modelo'),
  makeBlock('b12', 'El marco regulatorio no es glamoroso, pero es lo que determina si un modelo de manufactura es rentable en el largo plazo o si está construido sobre condiciones que pueden cambiar con el siguiente ciclo político.'),
  makeBlock('b13', 'Baja California concentra aproximadamente el 17.6% de todos los establecimientos IMMEX de México —la mayor concentración por estado, según datos de CEIC Data y la Secretaría de Economía. El programa IMMEX permite la importación temporal de insumos sin pago de aranceles ni IVA, siempre que los productos resultantes se exporten. Para manufactura orientada al mercado estadounidense, ese mecanismo es estructuralmente central al modelo de costos.'),
  makeBlock('b14', 'A esto se suma la Zona Libre Frontera Norte, que aplica en Mexicali y otras ciudades fronterizas: ISR al 20% frente al 30% nacional, e IVA al 8% frente al 16% estándar. El gobierno federal renovó este esquema para 2026, lo que da visibilidad regulatoria a mediano plazo.'),
  makeBlock('b15', 'Vale la pena mencionar un matiz importante: en 2024, el gobierno mexicano introdujo modificaciones a las reglas IMMEX que incluyen aranceles sobre ciertos bienes terminados, con tasas que en algunas categorías llegan al 25-35%. Estos cambios requieren un análisis cuidadoso por giro y tipo de producto. Los datos sugieren que las empresas con mayor experiencia operativa en la región —y con asesoría especializada en comercio exterior— han navegado estos cambios con menor fricción que aquellas que llegaron más recientemente sin ese contexto.'),
  makeBlock('b16', 'Bajo USMCA, los productos que cumplen las reglas de origen aplicables acceden al mercado estadounidense sin aranceles. En un entorno donde las tarifas sobre manufactura asiática han subido consistentemente en los últimos años, esa condición representa una ventaja competitiva que se aprecia especialmente en sectores donde el margen ya es ajustado.'),

  makeH2('h04', 'El mercado inmobiliario en 2025: una ventana de oportunidad'),
  makeBlock('b17', 'Entre 2020 y 2022, el mercado inmobiliario industrial de Mexicali vivió uno de sus ciclos más comprimidos. La vacancia llegó a mínimos históricos de 1.7% —prácticamente sin espacio disponible— y empresas que buscaban instalarse tuvieron que esperar o pagar condiciones que el propietario podía imponer con comodidad.'),
  makeBlock('b18', 'Ese ciclo se normalizó. Según datos de Solili correspondientes al cuarto trimestre de 2025, la vacancia en Mexicali se sitúa en 6.3%, sobre un inventario que supera los 40 millones de pies cuadrados —un crecimiento de aproximadamente el 60% respecto a 2018, según Cushman & Wakefield. La renta promedio se ubica en torno a los 6.58 USD por metro cuadrado, con un incremento anual de alrededor del 12%.'),
  makeBlock('b19', 'Para quienes llegaron tarde al ciclo anterior o estaban en lista de espera, este momento representa condiciones que en 2022 eran simplemente inaccesibles: opciones disponibles, posibilidad de negociar plazos y condiciones, y desarrolladores con incentivo para cerrar contratos. Las rentas son más altas que hace cinco años —el mercado se revalorizó estructuralmente— pero desde nuestra experiencia en el mercado fronterizo, siguen siendo 20 a 30% más competitivas que en Tijuana, que ha absorbido una mayor proporción de la IED de la región.'),
  makeBlock('b20', 'Baja California captó 1,998 millones de dólares en inversión extranjera directa entre enero y septiembre de 2024 —un incremento del 68% respecto al mismo período del año anterior— posicionándose como el tercer estado con mayor IED en México, según datos de Infobaja y La Jornada. Es relevante anotar que Tijuana concentra aproximadamente el 74% de esa IED estatal; Mexicali recibe el 26% restante. Eso significa que la competencia por espacio en Mexicali, si bien creció, no alcanzó los niveles de saturación que se registran en la franja Tijuana-Tecate.'),

  makeH2('h05', 'Lo que el caso Gulfstream enseña sobre la lógica de las Fortune 500'),
  makeBlock('b21', 'Una inversión de 370 millones de dólares no se autoriza en un comité de capital porque el mercado está de moda. Esas decisiones pasan por múltiples capas de validación interna —análisis de riesgo operativo, revisión de cadena de suministro, evaluación de capacidad de talento local, proyecciones de costo total de propiedad a 10 y 20 años.'),
  makeBlock('b22', 'Lo que Gulfstream demostró en agosto de 2024 es la curva que varias Fortune 500 han seguido en Mexicali: una primera operación modesta, validación del modelo durante varios años, expansión gradual conforme los indicadores internos confirman el desempeño, y finalmente una inversión de escala cuando la operación está suficientemente probada. Esa curva no se recorre en dos años. La nueva planta de Gulfstream en Nelson II —540,000 pies cuadrados y 1,500 empleos nuevos, llevando el total de la compañía en Baja California a más de 5,000 empleados— es el resultado de tres décadas de resultados consistentes.'),
  makeBlock('b23', 'Collins Aerospace sigue la misma lógica: dos plantas, talento técnico consolidado, integración con cadenas de proveeduría regionales. No es expansión oportunista —es profundización de una apuesta estratégica que ha entregado resultados verificables.'),
  makeBlock('b24', 'Los datos sugieren que las empresas que toman decisiones de manufactura con horizonte de largo plazo tienden a evaluar no solo las condiciones actuales sino la trayectoria del mercado y la confiabilidad del ecosistema institucional y de proveedores. En ese análisis, un mercado con 50 años de manufactura aeroespacial pesa diferente a uno que ofrece incentivos temporales sin historial probado.'),

  makeH2('h06', 'Hacia adelante: integración productiva como dato estructural'),
  makeBlock('b25', 'Que México sea el socio comercial número uno de Estados Unidos por segundo año consecutivo, con 840,000 millones de dólares en comercio bilateral durante 2024 —el mayor registro histórico entre cualquier par de países para Estados Unidos, según FreightWaves y el Bureau of Transportation Statistics— no es una estadística de ciclo corto. Es el resultado visible de décadas de integración productiva que el TLCAN primero y el USMCA después formalizaron, pero que en la práctica se construyó planta por planta, contrato por contrato, a lo largo de la frontera norte.'),
  makeBlock('b26', 'Deloitte proyecta que el nearshoring podría sumar tres puntos porcentuales al PIB mexicano en los próximos cinco años, crear 1.1 millones de empleos adicionales y añadir 2.4 puntos porcentuales a la producción manufacturera. BCG estima que el comercio bilateral EE.UU.-México crecerá 315,000 millones de dólares adicionales para 2033, a una tasa compuesta del 4% anual. Esas proyecciones implican que la integración que hoy existe seguirá profundizándose —y que las empresas posicionadas en esa cadena estarán mejor ubicadas que las que lleguen después.'),
  makeBlock('b27', 'Para empresas que están evaluando Mexicali como destino de manufactura, la experiencia acumulada en el mercado local —su historial con inquilinos internacionales, su comprensión de las dinámicas regulatorias y su conocimiento del ecosistema de proveedores— puede ser un punto de referencia útil al momento de traducir análisis estratégicos en decisiones operativas concretas. Grupo Nelson lleva 60 años en ese mercado. Los números de Gulfstream hablan del tipo de socios que ha formado.'),

  makeBlock('b28', 'Fuentes: Mexico News Daily · Mexico Business News · Collins Aerospace / RTX · Pro Mexico Industry · American Industries Group · Cushman & Wakefield Cross-Border Expansion Report 2024 · Solili Reporte Industrial Q4 2025 · FreightWaves · Deloitte Nearshoring in Mexico 2024 · BCG The Shifting Dynamics of Nearshoring in Mexico 2024 · CBP · Tetakawi Manufacturing Wages Mexico 2025 · Infobaja · Bureau of Transportation Statistics · CEIC Data · Visigistics'),
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
