/**
 * Parcha la noticia "Automotriz, Aeroespacial y Medtech: Los Sectores que Más Demandan Naves Industriales en BC".
 * Documento ID: kllPxzrZvj3u6Zg4KymUtw
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KymUtw'

const p1 = 'Tres sectores concentran la mayor parte de la demanda de naves industriales en Baja California y definen el perfil de la manufactura del estado. El aeroespacial opera con 125 empresas que generan 40,000 empleos directos y exportaciones de 3,800 millones de dólares en 2024. El de dispositivos médicos agrupa a 82 fabricantes con más de 80,000 empleos directos y posiciona a BC como el clúster de medtech más grande de América Latina. Y el automotriz — con Toyota produciendo 167,000 unidades anuales de la Tacoma en Tecate y 55 empresas de autopartes activas en Tijuana — completa un ecosistema de manufactura avanzada que en 2025 rompió su récord de producción con un crecimiento del 30.5%. Estos tres sectores no solo explican por qué los parques industriales de BC operan con tasas de ocupación del 95% — también explican por qué el tipo de infraestructura que demandan es cualitativamente diferente al de la manufactura genérica.'

const p2 = 'La presencia de estos sectores en Baja California no es reciente. La industria aeroespacial lleva casi 50 años en la entidad, con una distribución que abarca toda la geografía fronteriza: 59 empresas en Tijuana, 32 en Mexicali, y el resto distribuidas en Tecate, Ensenada y Rosarito. Mexicali concentra específicamente 15,000 empleos directos en el sector, impulsados por empresas como Gulfstream, Honeywell y Collins Aerospace, que operan en el estado desde hace décadas. En FAMEX 2025, Baja California anunció la creación del Clúster Espacial y de Aeronáutica del estado (CEA-BC), una señal de madurez institucional del sector. El medtech sigue una trayectoria paralela: Tijuana alberga 48 de las 82 plantas de dispositivos médicos del estado y genera 49,000 de los más de 80,000 empleos directos del sector. Solo Medtronic opera allí con más de 11,500 trabajadores que fabrican cerca de 18 millones de dispositivos al año, incluyendo válvulas cardiacas para distribución global. En el automotriz, Toyota lleva más de dos décadas en Tecate y anunció en noviembre de 2024 una inversión de 1,450 millones de dólares para la nueva generación de la Tacoma híbrida eléctrica — la mayor apuesta automotriz reciente en la región fronteriza.'

const p3 = 'Lo que distingue a estos tres sectores en términos de demanda inmobiliaria industrial es que ninguno de ellos puede operar en una nave genérica. El aeroespacial requiere certificación AS9100, zonas de acceso controlado, tolerancias mínimas de vibración para ensamblaje de precisión y alturas libres de entre 12 y 15 metros para integrar grúas puente en líneas de manufactura pesada. La nueva planta de Gulfstream en el Parque Industrial Nelson II — 540,000 sq ft para consolidar operaciones de manufactura aeroespacial — ilustra la escala típica de un proyecto del sector. Los dispositivos médicos exigen cuartos limpios, climatización de precisión, sistemas eléctricos redundantes y cumplimiento simultáneo con normativa FDA y COFEPRIS. El automotriz necesita certificación ISO/TS 16949, control de humedad para proteger componentes metálicos y ventilación especializada para procesos de pintura. En todos los casos, el estándar mínimo es una nave Clase A: altura libre entre 9.75 y 14 metros, piso con resistencia de 8 toneladas por metro cuadrado, sistema eléctrico trifásico de 440 volts y rociadores de supresión rápida (ESFR). Esta especificación no es opcional para estos sectores — es el umbral de entrada. Y los parques que pueden ofrecerla de forma consistente, junto con la experiencia operativa de haber servido a estas industrias durante décadas, son los que capturan los contratos de mayor valor y mayor plazo.'

const p4 = 'Para los desarrolladores industriales, la coexistencia de tres sectores con perfiles de demanda distintos en el mismo mercado geográfico es una fuente de estabilidad. Cuando el automotriz enfrenta un ciclo adverso — como ocurrió en 2025 con el impacto arancelario — el aeroespacial y el medtech pueden compensar, porque sus cadenas de suministro y sus clientes finales no son los mismos. Baja California ofrece esa diversidad sectorial en un perímetro de pocos kilómetros, lo que convierte a sus parques industriales en activos con menor correlación con un solo ciclo industrial. Grupo Nelson, con más de 60 años de operación en Mexicali, ha construido su portafolio precisamente en esa intersección: naves que hoy ocupan empresas aeroespaciales como Gulfstream y Honeywell, con contratos que en algunos casos superan las tres décadas de continuidad. El récord de producción manufacturera de Baja California en 2025 — 68,000 millones de pesos, un 30.5% más que el año anterior — no es un accidente estadístico: es el resultado de décadas de inversión en infraestructura industrial especializada y en la formación de un capital humano que pocas regiones del mundo pueden replicar.'

const p5 = 'Fuentes: INDEX Mexicali, Solili, TijuanaEDC, MexicaliEDC, MedSummit 2024, Semanario ZETA, Vanguardia Industrial, Energy Magazine, AI Real Estate.'

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

const description = 'BC alberga el clúster medtech más grande de LatAm (80,000 empleos), 125 empresas aeroespaciales ($3.8B de exportaciones) y la planta Toyota de la Tacoma. Los tres sectores exigen naves Clase A.'

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
