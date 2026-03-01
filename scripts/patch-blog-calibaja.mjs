/**
 * Parcha el post de blog: La Región CaliBaja
 * Documento ID: uqKP1CJoSsgXdCXPUwM1iP
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUwM1iP'

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

const description = 'CaliBaja es el único corredor verdaderamente binacional donde manufactura de costo competitivo y el mayor mercado de consumo del mundo están a horas de distancia, conectados por libre comercio. Un análisis de sus clústeres industriales, infraestructura y la lógica económica que lo sostiene.'

const blocks = [
  makeBlock('b01', 'Hay muy pocos lugares en el mundo donde una planta de manufactura de precisión puede estar a treinta minutos de distancia del mercado de consumo más grande del planeta. Donde los ingenieros cruzan la frontera en ambas direcciones cada mañana, donde los componentes fabricados a las 6 a.m. en Tijuana están ensamblados en San Diego antes del mediodía, y donde el comercio libre entre dos economías complementarias no es una aspiración política sino una realidad operativa con tres décadas de historia. CaliBaja es ese lugar. Posiblemente el único de su escala en el mundo.'),
  makeBlock('b02', 'La región no es un concepto de marketing ni una iniciativa de cámara de comercio. Es un corredor económico binacional con sus propias reglas de gravedad: manufactura de costo competitivo en el lado mexicano, infraestructura logística y acceso a mercado en el lado estadounidense, y libre comercio que convierte esa combinación en una ventaja estructural difícil de replicar. Para cualquier VP de Operaciones o Director de Cadena de Suministro que esté evaluando dónde instalar capacidad productiva en los próximos diez años, entender CaliBaja no es opcional.'),

  makeH2('h01', 'Qué es CaliBaja y cuánto vale realmente'),
  makeBlock('b03', 'El concepto CaliBaja se formalizó en junio de 2011 mediante un memorándum de entendimiento entre seis organizaciones de desarrollo económico binacionales, aunque los antecedentes de colaboración estructurada datan de 2008, cuando la U.S. Economic Development Administration financió las primeras iniciativas de articulación regional. La idea central era sencilla: San Diego County, Imperial County y Baja California forman un sistema económico integrado, y tiene más sentido analizarlos y promoverlos juntos que por separado.'),
  makeBlock('b04', 'La magnitud de ese sistema la documentó el Ahlers Center for International Business de la Universidad de San Diego en su reporte de febrero de 2022: el PIB combinado de las tres jurisdicciones alcanzaba aproximadamente $250 mil millones de dólares, con flujos de comercio transfronterizo de alrededor de $70 mil millones anuales y un promedio de $200 millones en mercancías cruzando la frontera cada día.'),
  makeBlock('b05', 'Esos datos, sin embargo, corresponden a un momento específico. La economía regional ha crecido desde entonces, y la honestidad intelectual exige actualizarlos. En febrero de 2026, el San Diego Union-Tribune reportó que San Diego County por sí solo ya tiene un PIB de $267 mil millones de dólares. Por su parte, el INEGI estimó el PIB de Baja California en aproximadamente $70-75 mil millones de dólares para 2023. Sumando Imperial County, el PIB combinado de la región CaliBaja hoy supera probablemente los $330 mil millones de dólares, una cifra que colocaría a esta región, si fuera un país independiente, entre las cuarenta economías más grandes del mundo.'),
  makeBlock('b06', 'Lo que no ha cambiado es la lógica estructural: dos economías complementarias, un régimen de libre comercio, y una frontera que separa geografía pero no cadenas de valor.'),

  makeH2('h02', 'La infraestructura que sostiene $2.3 mil millones diarios'),
  makeBlock('b07', 'Un corredor industrial solo funciona si puede mover mercancías. CaliBaja tiene siete puertos de entrada terrestres entre California y Baja California, y los datos de flujo de carga de los últimos años muestran que esa infraestructura no es decorativa.'),
  makeBlock('b08', 'Otay Mesa, en la zona metropolitana San Diego-Tijuana, procesó más de un millón de camiones entrantes en 2023, lo que representa el 14.1% del total de camiones que cruzaron toda la frontera EE.UU.-México ese año, según el Bureau of Transportation Statistics. Es el segundo puerto de entrada terrestre más grande de toda la frontera. Calexico East, que sirve al corredor del Valle Imperial y conecta con Mexicali, maneja alrededor de 453,000 camiones al año y aproximadamente $20 mil millones en comercio anual. Su expansión se completó en octubre de 2024.'),
  makeBlock('b09', 'Que estas cifras no sean suficientes queda claro en los proyectos que ya están en construcción. Otay Mesa East, un nuevo puerto de entrada cuya construcción inició en noviembre de 2025 con una inversión de $1.3 mil millones de dólares y una apertura estimada para 2027, tiene como propósito explícito descongestionar el cruce existente. El proyecto recibió un grant federal de $150 millones aprobado en abril de 2025. En paralelo, la modernización de Calexico West tiene un contrato de $173.6 millones adjudicado en julio de 2024, con finalización proyectada para el invierno de 2028.'),
  makeBlock('b10', 'El San Diego Regional EDC documentó en noviembre de 2025 que actualmente $2.3 mil millones en bienes cruzan la frontera CaliBaja cada día hábil, y que 95,000 empleos en San Diego e Imperial County dependen directamente del comercio con Baja California bajo el USMCA. Esos números no son proyecciones. Son el inventario de lo que ya existe.'),

  makeH2('h03', 'Tres clústeres industriales de clase mundial'),
  makeBlock('b11', 'Lo que distingue a CaliBaja de otras zonas fronterizas es la profundidad de sus especializaciones industriales. No es un corredor de maquila genérica. Es una región con tres clústeres de manufactura avanzada que tienen décadas de madurez y cadenas de suministro propias.'),
  makeBlock('b12', 'Aeroespacial. Baja California concentra el 21% de todas las empresas aeroespaciales de México, según Pro Mexico Industry, y alberga lo que puede considerarse el clúster aeroespacial más antiguo del país: sus raíces se remontan aproximadamente a cincuenta años, cuando Rockwell Collins estableció operaciones en Mexicali. Hoy el Baja Aerospace Cluster reúne aproximadamente 125 empresas certificadas, más de 40,000 empleos directos y una cadena de suministro de 339 proveedores. Las exportaciones aeroespaciales de Baja California alcanzaron $3.8 mil millones de dólares en 2024. Es un ecosistema que tomó medio siglo construirse y que no se replica en otro estado en una década.'),
  makeBlock('b13', 'Dispositivos médicos. Tijuana es, por número de empleados, el mayor hub de manufactura de dispositivos médicos de Norteamérica. Con más de 75 plantas de producción y más de 55,000 empleados directos solo en la ciudad, Baja California en su conjunto emplea entre 74,000 y 80,000 personas en el sector. La región representa más del 50% de las exportaciones mexicanas de dispositivos médicos, un sector que generó $12.5 mil millones de dólares en exportaciones para México en 2023, según la Secretaría de Economía. Las empresas presentes incluyen Medtronic, Johnson & Johnson, Stryker, Boston Scientific y Becton Dickinson.'),
  makeBlock('b14', 'Electrónica. Con más de 200 empresas y aproximadamente 150,000 empleados, el clúster de electrónica de Baja California generó $19.3 mil millones de dólares en ventas internacionales en 2024, de acuerdo con Co-Production International. Tijuana produce alrededor de 20 millones de televisores de alta tecnología al año, consolidándose como uno de los principales centros de manufactura de TV del mundo. En Mexicali, Skyworks emplea alrededor de 6,000 personas en la fabricación de semiconductores para los chips de iPhones de Apple. Infineon opera en Tijuana con aproximadamente 1,500 empleados. Samsung y LG tienen presencia manufacturera significativa en la región.'),
  makeBlock('b15', 'Estos tres clústeres no son independientes. Comparten talento, proveedores, logística y, sobre todo, la misma ventaja de ubicación.'),

  makeH2('h04', 'Por qué CaliBaja es única a nivel global'),
  makeBlock('b16', 'Existen otros corredores industriales de escala comparable. El Delta del Río Perla en China, el corredor Rin-Ruhr en Europa, el triángulo industrial de Stuttgart-Munich-Frankfurt. En términos de PIB agregado y densidad manufacturera, algunos son más grandes. Lo que ninguno tiene es la combinación específica de CaliBaja: manufactura de costo competitivo y mercado de consumo de alto poder adquisitivo separados por una frontera con libre comercio bilateral.'),
  makeBlock('b17', 'El Delta del Río Perla y el corredor Rin-Ruhr son, fundamentalmente, corredores dentro de un solo sistema económico nacional. Las ventajas de costo y de acceso a mercado están distribuidas a lo largo del mismo territorio, bajo las mismas instituciones, la misma moneda y el mismo marco regulatorio. En CaliBaja, las dos economías son genuinamente distintas —distintos costos laborales, distintas estructuras regulatorias, distintas monedas— y el USMCA permite que esas diferencias funcionen como complemento en lugar de fricción.'),
  makeBlock('b18', 'Un fabricante de dispositivos médicos en Tijuana paga salarios manufactureros competitivos y opera bajo normas de calidad FDA-equivalentes, mientras accede a materias primas y cadena de suministro de EE.UU. sin aranceles, y puede llevar su producto terminado al mercado más grande del mundo en horas. Esa ecuación no existe en ningún otro lugar del planeta con esta escala de capacidad instalada.'),

  makeH2('h05', 'El riesgo que todo inversionista debe incluir en su análisis'),
  makeBlock('b19', 'Sería intelectualmente deshonesto presentar CaliBaja sin hablar de su exposición a la política comercial de Estados Unidos.'),
  makeBlock('b20', 'En febrero de 2025, la amenaza de aranceles por parte de la administración Trump generó preocupación directa en la región, según reportó Axios San Diego. Una región donde $2.3 mil millones en bienes cruzan la frontera cada día no puede ignorar los efectos de un cambio en el régimen arancelario. Los riesgos son reales y deben estar en cualquier análisis serio de inversión.'),
  makeBlock('b21', 'Dicho esto, hay un dato estructural que merece atención: 95,000 empleos en San Diego e Imperial County dependen del comercio con Baja California. Eso significa que una disrupción comercial importante no solo afecta al lado mexicano del corredor. La dependencia es mutua, y la dependencia mutua crea incentivos en ambos lados de la mesa para preservar la integración. El comercio bilateral EE.UU.-México alcanzó $839.9 mil millones en 2024, según el Bureau of Transportation Statistics, y México se consolidó como el principal socio comercial de Estados Unidos por segundo año consecutivo. Las exportaciones de servicios de EE.UU. a México llegaron a $50.4 mil millones en 2024, un incremento del 54% desde la firma del USMCA, de acuerdo con la Brookings Institution.'),
  makeBlock('b22', 'La historia de CaliBaja ha atravesado varios ciclos políticos —incluyendo la renegociación del TLCAN, la pandemia y múltiples crisis bilaterales— y el volumen de comercio ha continuado creciendo. La pregunta relevante para un inversionista no es si habrá turbulencia política. La habrá. La pregunta es si la lógica económica fundamental —manufactura competitiva a minutos del mercado más grande del mundo, bajo libre comercio— sigue siendo sólida. Los datos de 2024 y 2025 sugieren que sí.'),

  makeH2('h06', 'La geografía no se negocia en Washington'),
  makeBlock('b23', 'CaliBaja no es una tendencia de nearshoring ni un fenómeno reciente. Es una realidad económica que lleva décadas construyéndose, capa por capa: primero los primeros ensambles de manufactura en los años sesenta, luego la especialización industrial en electrónica y aeroespacial, después la profundización de las cadenas de valor bajo el TLCAN, y hoy la integración de clústeres maduros con infraestructura fronteriza en expansión activa.'),
  makeBlock('b24', 'Para Mexicali específicamente, ser parte de este corredor representa una ventaja que ninguna ciudad del interior de México puede replicar: acceso directo a dos puertos de entrada terrestres, conectividad con el mercado californiano, y pertenencia a un ecosistema industrial —aeroespacial, electrónico, logístico— que tiene cincuenta años de profundidad. Grupo Nelson lleva sesenta años operando en el corazón de esta región y ha sido testigo de primera mano de cómo esa integración se construyó, crisis por crisis, inversión por inversión.'),
  makeBlock('b25', 'La geografía no se renegocia en Washington. El mercado de consumo más grande del mundo seguirá estando al norte de Baja California mañana, como lo estuvo ayer. Lo que cambia son las condiciones. Lo que no cambia es la lógica.'),

  makeBlock('b26', 'Fuentes: Ahlers Center for International Business, Universidad de San Diego — The CaliBaja Regional Economy 2022 · San Diego Regional EDC — Study: CaliBaja Trade under USMCA 2025 · Bureau of Transportation Statistics — TransBorder Freight Annual Report 2024 · SANDAG — Otay Mesa East Port of Entry · GSA — Calexico East Land Port of Entry Expansion · Baja Aerospace Cluster · Tijuana EDC — Medical Device Industry Baja California 2022 · Co-Production International · Brookings Institution — USMCA Forward 2024 · INEGI — PIB Estatal Baja California 2023 · San Diego Union-Tribune · Pro Mexico Industry'),
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
