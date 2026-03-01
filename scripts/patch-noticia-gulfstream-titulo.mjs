import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const DOC_ID = 'kllPxzrZvj3u6Zg4KymSSy'

const result = await client
  .patch(DOC_ID)
  .set({
    title: [
      {
        _key: 'es',
        _type: 'internationalizedArrayStringValue',
        value: 'Gulfstream Invierte USD 370 Millones en Nave Industrial en el Parque Nelson II de Mexicali',
      },
    ],
    slug: {
      _type: 'slug',
      current: 'gulfstream-invierte-usd-370-millones-nave-industrial-parque-nelson-ii-mexicali',
    },
  })
  .commit()

console.log('✅ Título y slug actualizados:', result.title?.[0]?.value)
