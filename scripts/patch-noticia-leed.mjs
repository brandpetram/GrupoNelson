/**
 * Parcha la noticia "Certificación LEED en Parques Industriales: El Estándar que las Multinacionales Ya Exigen en México".
 * Documento ID: 4lXD1QprlKmqniOHamwYMX
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHamwYMX'

const p1 = 'México ocupó el sexto lugar mundial en certificación LEED en 2024, según el Green Building Certification Institute (GBCI), con 104 proyectos certificados y 2.2 millones de metros cuadrados bajo ese estándar en el año — el mayor volumen de su historia y la posición más alta de cualquier país de América Latina. El primer edificio industrial del mundo en alcanzar la certificación LEED v5 se ubica en México. El 57% de los parques industriales afiliados a la Asociación Mexicana de Parques Industriales Privados (AMPIP) tiene algún tipo de certificación ambiental activa en sus instalaciones, y el 73% de los contratos de arrendamiento industrial en México ya incluye cláusulas ESG, según el informe de la asociación al cierre de 2023. La certificación LEED dejó de ser un diferenciador premium para convertirse en un requisito de entrada en los segmentos de mayor valor del mercado industrial — y la velocidad con que ese cambio ocurrió en México es mayor de lo que la mayoría de los desarrolladores anticipaba.'

const p2 = 'La exigencia de sustentabilidad en instalaciones industriales no llega desde el mercado local — llega desde los corporativos de las empresas multinacionales que deciden dónde instalarse. Gulfstream Aerospace tiene una política formal que establece que todos sus nuevos edificios corporativos deben ser certificados LEED; cuenta actualmente con diez instalaciones bajo LEED o BREEAM, con más de 2.2 millones de pies cuadrados certificados. Boeing integró criterios de sustentabilidad en su programa Supplier of the Year y colabora con proveedores a través del CDP Climate Change para reducir emisiones en la cadena de suministro. Cerca del 50% de las empresas del Fortune 500 tiene al menos un compromiso climático mayor documentado, según el análisis de David Gardiner & Associates para 2023. La consecuencia práctica para el mercado inmobiliario industrial es directa: cuando un corporativo con esos mandatos evalúa dónde instalar su siguiente planta, la certificación de la infraestructura que ocupa forma parte de los criterios de selección — y la ausencia de certificación puede descalificar a un parque antes de que llegue a la negociación de precio. El International Finance Corporation (IFC) otorgó a Vesta una facilidad crediticia de 545 millones de dólares en 2024 específicamente para el desarrollo de parques industriales verdes en México, una señal de que la demanda de capital también fluye preferentemente hacia activos certificados.'

const p3 = 'En Baja California, la adopción de LEED en el segmento industrial es visible y creciente. Vesta certificó LEED su centro de distribución en el Parque Alamar de Tijuana — una nave de 18,775 m² cuya operación elimina 63,000 litros de diesel y 164,430 kilogramos de CO2 por año respecto a un edificio convencional equivalente. En octubre de 2024, el Parque Mega Region de Vesta en Tijuana obtuvo certificación LEED Gold con 61 puntos sobre 110 posibles. En noviembre del mismo año, FINSA certificó bajo LEED v4 una nave de 376,251 pies cuadrados en el corredor Tijuana Noreste. Estos casos documentan un patrón: los desarrolladores de mayor escala en BC están certificando su inventario activo, no solo sus nuevas construcciones. Lo que hace viable esa estrategia desde el punto de vista financiero es que el sobrecosto de construir bajo estándares LEED es menor de lo que se asume: entre el 1% y el 5% sobre el costo total del proyecto para niveles Certified y Silver, recuperable a través del ahorro energético que el edificio genera — entre 18% y 39% menos consumo que una nave convencional equivalente, según la USGBC. La nueva planta de Gulfstream en el Parque Industrial Nelson II en Mexicali incluye paneles solares sobre techos y cubiertas de estacionamiento, en línea con la política corporativa de la empresa de certificar todas sus instalaciones nuevas.'

const p4 = 'Para los desarrolladores industriales, la implicación estratégica de LEED va más allá del argumento ambiental. Un parque certificado atrae al segmento de inquilinos con mayor capacidad de pago, mayor estabilidad contractual y mayor alineación de largo plazo — precisamente porque esos inquilinos necesitan la certificación para cumplir sus propios compromisos corporativos. Atrae también financiamiento institucional en condiciones favorables, como demostró el crédito de IFC a Vesta. Y posiciona el activo para la siguiente generación de regulación, que en la mayoría de los mercados avanzados tiende hacia la obligatoriedad de estándares que hoy son voluntarios. El porcentaje de empresas Fortune 500 con compromisos climáticos crece cada año. El porcentaje de contratos industriales con cláusulas ESG — ya en el 73% en México — seguirá aumentando. Grupo Nelson, con infraestructura certificable bajo estándares LEED en su parque Nelson 2 y con clientes como Gulfstream cuya política corporativa exige esos estándares, opera en la intersección exacta donde la demanda de sustentabilidad y la oferta de infraestructura industrial de largo plazo convergen.'

const p5 = 'Fuentes: Green Building Certification Institute (GBCI), AMPIP Informe ESG 2022-2023, El Financiero, Vesta, FINSA, GEG, Gulfstream Aerospace, IFC, David Gardiner & Associates, USGBC.'

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

const description = 'México es #6 mundial en LEED y el primer edificio industrial LEED v5 del mundo está en el país. El 73% de los contratos industriales ya incluye cláusulas ESG. Gulfstream exige LEED en todos sus edificios nuevos.'

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
