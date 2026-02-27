import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const AUTOR_ID = '4lXD1QprlKmqniOHakgCyU'

const IDS = [
  'kllPxzrZvj3u6Zg4KymSSy',
  'kllPxzrZvj3u6Zg4KymSs8',
  '4lXD1QprlKmqniOHamwWCB',
  'kllPxzrZvj3u6Zg4KymTke',
  '4lXD1QprlKmqniOHamwX5V',
  'kllPxzrZvj3u6Zg4KymUtw',
  '4lXD1QprlKmqniOHamwXb7',
  'uqKP1CJoSsgXdCXPUz2gvH',
  'uqKP1CJoSsgXdCXPUz2hlh',
  'uqKP1CJoSsgXdCXPUz2j7Z',
  'uqKP1CJoSsgXdCXPUz2jxz',
  '4lXD1QprlKmqniOHamwYMX',
]

async function main() {
  console.log('\nCorrigiendo _key en authors y body de 12 noticias...\n')

  for (let i = 0; i < IDS.length; i++) {
    const id = IDS[i]
    const num = String(i + 1).padStart(2, '0')
    process.stdout.write(`[${num}/12] ${id} ... `)

    try {
      await client
        .patch(id)
        .set({
          authors: [
            { _key: 'author-0', _type: 'reference', _ref: AUTOR_ID },
          ],
        })
        .commit()
      console.log('✓')
    } catch (err) {
      console.log(`✗ ERROR: ${err.message}`)
    }
  }

  console.log('\n¡Listo! Los _key están corregidos.')
}

main()
