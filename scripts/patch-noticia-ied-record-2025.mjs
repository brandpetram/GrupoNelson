/**
 * Parcha la noticia de IED récord 2025.
 * Documento ID: 4lXD1QprlKmqniOHamwXb7
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = '4lXD1QprlKmqniOHamwXb7'

const p1 = 'México captó USD 40,871 millones en Inversión Extranjera Directa durante 2025, una cifra récord que supera al año anterior en un 10.8% y consolida al país como uno de los principales destinos de capital extranjero en América Latina, de acuerdo con datos de la Secretaría de Economía. El resultado marca el quinto año consecutivo de crecimiento en los flujos de IED hacia México y llega en un contexto de reconfiguración global de cadenas de suministro que ha posicionado al país como beneficiario directo del nearshoring y el friendshoring. El sector manufacturero lideró la captación por destino sectorial, absorbiendo el 36% del total. Baja California se destacó como uno de los estados con mayor atracción de capital: durante el primer trimestre del año captó USD 4,112 millones — el 16% del total nacional — y generó más de 19,600 empleos directos derivados de inversión extranjera, el 30% de los nuevos empleos de ese tipo en todo el país.'

const p2 = 'El resultado de 2025 no es un evento aislado sino la culminación de un ciclo que arrancó con la entrada en vigor del T-MEC en 2020 y se aceleró con la decisión de corporaciones globales de acercar su manufactura al mercado norteamericano. La composición de la IED ofrece una señal especialmente relevante: aunque la reinversión de utilidades siguió siendo la categoría dominante (68% del total), las nuevas inversiones crecieron un 133% interanual para alcanzar USD 7,380 millones — lo que significa que empresas extranjeras no solo están manteniendo sus operaciones en México, sino instalando capacidades productivas nuevas. Los principales países de origen fueron Estados Unidos (USD 15,880 millones, 38.8%), España (USD 4,400 millones), Canadá (USD 3,300 millones), Países Bajos (USD 2,400 millones) y Japón (USD 2,300 millones). La presencia de Japón entre los cinco mayores inversores no es casual: refleja la tendencia de empresas asiáticas que buscan producir cerca de Estados Unidos para abastecer ese mercado sin las restricciones arancelarias que enfrentarían exportando directamente desde Asia.'

const p3 = 'Para el sector industrial de la frontera norte, los datos de IED tienen una lectura directa: más inversión en manufactura significa más demanda de infraestructura industrial, más contratos build-to-suit y mayor presión sobre el inventario disponible en mercados como Mexicali, Tijuana, Ciudad Juárez y Monterrey. Entre los sectores con mayor dinamismo en 2025 destacaron energía, infraestructura digital, automotriz y autopartes, farmacéutica, aeroespacial y manufactura especializada — todos con alta concentración en estados fronterizos. En Baja California, la gobernadora Marina del Pilar Ávila Olmeda atribuyó los resultados al "trabajo coordinado entre los tres órdenes de gobierno" y a políticas de certidumbre que han permitido atraer capital de largo plazo. Entre las inversiones destacadas en el estado figura el compromiso de Sempra Energy por USD 3,550 millones en infraestructura energética — una apuesta que refuerza la capacidad de Baja California para sostener operaciones industriales de gran escala en los próximos años. Desarrolladores industriales con portafolios establecidos en la región, como Grupo Nelson con seis décadas de operación en Mexicali, se encuentran posicionados para acompañar esa expansión con la infraestructura que las empresas entrantes requieren.'

const p4 = 'El récord de IED en 2025 llega acompañado de un matiz que los propios datos reflejan: la incertidumbre arancelaria impulsada por la política comercial estadounidense introdujo volatilidad en los flujos de inversión durante el año, y algunos proyectos en fase de evaluación pospusieron sus decisiones de localización. Sin embargo, la magnitud del resultado final — USD 40,871 millones — indica que la base estructural de atracción de inversión en México resistió ese contexto. Para Baja California y Mexicali en particular, los fundamentos de largo plazo siguen intactos: acceso al mercado estadounidense por la frontera con California y Arizona, un ecosistema de manufactura aeroespacial, automotriz y medtech con décadas de operación, y una fuerza laboral técnica que empresas como Gulfstream y Honeywell han formado durante generaciones. La IED no llega a mercados con infraestructura débil — llega donde ya existe una base probada, y Mexicali tiene más de 60 años de manufactura de exportación como evidencia.'

const p5 = 'Fuentes: Secretaría de Economía de México, Mexico News Daily, El Financiero, La Política Online.'

function makeBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

const result = await client
  .patch(DOC_ID)
  .set({
    description: [
      {
        _key: 'es',
        _type: 'internationalizedArrayTextValue',
        value: 'México alcanzó USD 40,871 millones en IED durante 2025, un récord histórico. Baja California captó el 16% del total nacional en Q1 y generó 19,600 empleos de capital extranjero.',
      },
    ],
    body: [
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
    ],
  })
  .commit()

console.log('✅ Noticia actualizada:', result._id)
console.log('   Título:', result.title?.[0]?.value)
