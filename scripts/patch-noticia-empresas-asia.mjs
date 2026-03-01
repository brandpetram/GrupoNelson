/**
 * Parcha la noticia "Por Qué Empresas de Corea, Taiwán y Japón Están Eligiendo México sobre Otros Destinos".
 * Documento ID: uqKP1CJoSsgXdCXPUz2j7Z
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUz2j7Z'

const p1 = 'La inversión extranjera directa de origen asiático en México creció un 75.8% en 2024, alcanzando 6,303 millones de dólares y representando el 17.1% del total de IED que recibió el país — frente al 9.8% del año anterior, según datos de la Secretaría de Economía. Japón se consolidó como el segundo mayor inversor en México ese año con 4,287 millones de dólares, detrás de Estados Unidos. En el primer semestre de 2024, 29 empresas de origen asiático demandaron espacios industriales en México, absorbiendo 2.88 millones de pies cuadrados de nave industrial. El contraste con años anteriores es marcado: antes de 2020, las empresas de Asia promediaban alrededor de dos proyectos de inversión anunciados por año en México; entre 2021 y 2024, el promedio subió a 24 proyectos anuales. La aritmética arancelaria explica en gran parte el cambio: exportar desde China a Estados Unidos implica hoy un arancel del 145%; hacerlo desde México bajo el T-MEC, para productos que cumplen reglas de origen, implica un arancel del 0%.'

const p2 = 'La presencia asiática en México no es nueva — lo que cambió es su intensidad y su perfil. Japón acumula más de 37,000 millones de dólares de inversión en México desde 1999 y tiene aproximadamente 1,500 empresas operando en el país. En Baja California específicamente, la inversión japonesa acumulada supera los 592 millones de dólares, con nombres como Sony, Panasonic y Sharp que llevan décadas produciendo electrónica en Tijuana: el clúster electrónico de esa ciudad reúne a 120 empresas transnacionales con alrededor de 90,000 trabajadores directos. Corea del Sur tiene más de 1,900 empresas activas en México y una inversión acumulada cercana a los 9,250 millones de dólares; Hyundai lleva más de 20 años en Tijuana y anunció una nueva planta de aluminio Die Cast de 131 millones de dólares en la ciudad. Taiwán suma 300 empresas con 70,000 empleados en el país. Lo que distingue el ciclo 2023-2025 es que estas mismas empresas — y nuevas entrantes — están comprometiendo en México las operaciones de mayor valor añadido de su portafolio global, no solo las líneas de ensamblaje de menor complejidad.'

const p3 = 'El caso más representativo de ese cambio cualitativo es taiwanés. Foxconn — el mayor fabricante por contrato de electrónica en el mundo — invirtió 241 millones de dólares en una planta de servidores de inteligencia artificial en Ciudad Juárez, Chihuahua, y construye simultáneamente una mega-planta de 900 millones de dólares en Jalisco que será la instalación más grande del mundo para ensamblar los superchips Nvidia GB200, destinados al Proyecto Stargate. Quanta Computer comprometió 1,000 millones de dólares en Nuevo León para componentes de vehículos eléctricos y servidores. Pegatron, el segundo fabricante por contrato más grande de Taiwán, inició producción en masa de servidores de IA en México en el tercer trimestre de 2025. Estos no son proyectos de ensamblaje convencional — son operaciones de manufactura avanzada que en otro momento del ciclo tecnológico global habrían permanecido en Asia. La razón del traslado es explícita: ejecutivos de empresas asiáticas han declarado que "ya les sale muy caro exportar desde China a sus clientes en Estados Unidos, que representan el 40%, 50% o 60% de sus ventas globales", según reportes de Proceso. México capturó un cuarto de la participación de mercado que China perdió en las importaciones estadounidenses, y las exportaciones de equipos de cómputo y electrónica desde México hacia EE.UU. crecieron un 49% interanual en el primer semestre de 2025.'

const p4 = 'Para Baja California, la pregunta relevante no es si la inversión asiática continuará llegando a México — los datos de 2024 y 2025 responden esa pregunta con claridad — sino qué operaciones eligirán la frontera norte frente al interior del país. Las mega-plantas de Foxconn y Quanta optaron por Jalisco y Chihuahua por razones de espacio y costo. Pero las operaciones que necesitan estar cerca del mercado estadounidense para minimizar tiempos de entrega — componentes aeroespaciales, dispositivos médicos, electrónica de precisión — tienden consistentemente hacia los corredores fronterizos. Tijuana ya recibe el grueso de esa demanda con su clúster electrónico maduro. Mexicali, con su posición en la frontera con California y Arizona y su ecosistema de manufactura aeroespacial y medtech, es el destino natural para empresas asiáticas que necesitan integrarse en cadenas de suministro cuyo cliente final está en el sur de California o en el suroeste de Estados Unidos. Los parques industriales con décadas de experiencia operando con clientes de manufactura de precisión — como Grupo Nelson con más de 60 años en Mexicali — representan el tipo de infraestructura que estas empresas buscan: no solo el metro cuadrado, sino el historial de saber operar con los estándares que la manufactura avanzada exige.'

const p5 = 'Fuentes: El CEO, Secretaría de Economía, Mexico Industry, Mexico Business News, Mexico News Daily, Bloomberg, Focus Taiwan, The Diplomat, Proceso, La Jornada.'

function makeBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

const body = [
  {
    _key: 'es',
    _type: 'internationalizedArrayBlockContentValue',
    value: [
      makeBlock('p1', p1),
      makeBlock('p2', p2),
      makeBlock('p3', p3),
      makeBlock('p4', p4),
      makeBlock('p5', p5),
    ],
  },
]

const description = 'La IED asiática en México creció 75.8% en 2024 hasta $6,300M. Foxconn construye la mayor planta de chips Nvidia del mundo en Jalisco. Japón, Corea y Taiwán eligen México mientras China paga 145% de arancel a EE.UU.'

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

  console.log('✅ Noticia actualizada:', result._id)
  console.log('   Título:', result.title?.[0]?.value)
} catch (err) {
  console.error('❌ Error:', err.message)
}
