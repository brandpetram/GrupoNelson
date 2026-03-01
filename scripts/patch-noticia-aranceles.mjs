/**
 * Parcha la noticia de aranceles de EE.UU. e impacto en manufactura e inversión en México.
 * Documento ID: uqKP1CJoSsgXdCXPUz2hlh
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'uqKP1CJoSsgXdCXPUz2hlh'

const p1 = 'En 2025, México enfrentó los aranceles más altos impuestos por Estados Unidos en décadas — y aun así cerró el año con exportaciones récord de 664,837 millones de dólares, una inversión extranjera directa histórica de 40,871 millones y la posición de principal proveedor de bienes a EE.UU. por encima de China, según datos de la Secretaría de Economía y reportes del Wall Street Journal. El contraste entre el impacto sectorial real de las tarifas y los resultados agregados de la economía mexicana define el panorama que enfrentan hoy los inversores industriales: un contexto de mayor costo arancelario que afectó sectores específicos con dureza, pero que no revirtió la ventaja estructural de México como destino de manufactura para el mercado norteamericano.'

const p2 = 'El ciclo arancelario de 2025 comenzó el 4 de marzo, cuando entraron en vigor aranceles del 25% sobre las importaciones mexicanas bajo la Ley IEEPA, vinculados al tráfico de fentanilo. En junio los aranceles al acero y aluminio escalaron al 50%. En julio, Trump anunció una tarifa del 30% adicional, pero tras una conversación entre los presidentes Trump y Sheinbaum, el arancel se mantuvo en 25% con una prórroga de 90 días. La estructura resultante —vigente hasta inicio de 2026— fue: 25% general por IEEPA, 25% a vehículos y autopartes fuera de T-MEC, 50% a acero, aluminio y cobre, y exención para productos que cumplen con reglas de origen del T-MEC. En febrero de 2026, la Suprema Corte de EE.UU. determinó que los aranceles IEEPA aplicados por razones de fentanilo son ilegales, aunque otros aranceles sectoriales continúan vigentes. El T-MEC demostró ser el principal escudo para las exportaciones mexicanas que cumplen sus reglas de origen — y precisamente por eso, las industrias con mayor integración en la cadena norteamericana resistieron mejor la turbulencia.'

const p3 = 'El impacto sectorial fue real y desigual. La industria automotriz fue la más golpeada: México produjo 3.95 millones de vehículos en 2025 — un 0.9% menos que el año anterior — y las exportaciones cayeron 2.7%, con casos extremos como Mazda (-37.6%) y Honda (-20.5%). El sector aeroespacial desaceleró su crecimiento a 9% anual en el primer semestre de 2025, por debajo de su promedio histórico del 13 al 16%. Los aranceles al acero y aluminio al 50% incrementaron los costos de producción entre 10% y 15% para industrias que dependen de estos materiales. En Baja California, el impacto laboral fue agudo en Tijuana, que perdió 9,734 empleos en manufactura en un año, mientras que Mexicali registró un comportamiento distinto: ganó 1,300 puestos en el mismo período, reflejando una composición sectorial diferente y contratos industriales de mayor plazo. A nivel nacional, el empleo manufacturero cayó 2% en 2025, el tercer año consecutivo de retroceso. Sin embargo, el portafolio de inversiones de nearshoring en proceso — valorado en 298,061 millones de dólares — no registró cancelaciones formales, solo pausas y retrasos de hasta ocho meses en la toma de decisiones.'

const p4 = 'La narrativa de 2025 no es la de un México derrotado por los aranceles, sino la de un mercado que absorbió un golpe severo sin perder su posición relativa frente a sus competidores. El arancel promedio ponderado que México paga hacia EE.UU. se ubica en 4.58% — comparado con el 145% aplicado a China — lo que mantiene la ecuación del nearshoring favorable para empresas que buscan producir cerca del mercado estadounidense. Para los mercados industriales de la frontera norte, el período 2025-2026 es de ajuste, no de retroceso estructural. Los desarrolladores con contratos de largo plazo y portafolios diversificados en sectores con distinta exposición arancelaria — como aeroespacial, medtech y logística, menos dependientes de los aranceles al automotriz — atravesaron este ciclo con menor volatilidad. Grupo Nelson, con más de 60 años en Mexicali y clientes en sectores como el aeroespacial y la manufactura de precisión, opera en ese perfil: el de un mercado que históricamente ha demostrado que la demanda industrial de largo plazo sobrevive a los ciclos arancelarios.'

const p5 = 'Fuentes: El Financiero, Expansión, Cluster Industrial, Mexico Como Vamos, Semanario ZETA, Industrial News BC, Modern Machine Shop Mexico, Wall Street Journal, Secretaría de Economía.'

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

const description = 'México cerró 2025 con exportaciones récord de $665,000 millones a pesar de los aranceles del 25-50% de EE.UU. El automotriz fue el más golpeado; Mexicali ganó empleos mientras Tijuana los perdía.'

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
