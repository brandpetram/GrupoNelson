/**
 * Consulta los 30 posts del blog en Sanity y muestra sus IDs, títulos y slugs.
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rnz30p1s',
  dataset: 'production',
  token: 'skKbbf02c0Kn0YNPIFeXqlQVhInH8dDRUQGOpLHxUWAMPYKplob7gMtDQSOwV9sCWVse8QAjPyr2EMTV0BwINLFiqJGefueLLcQRjANjphRhNd1XI6jo6cAJl94WyqG7wvLM6ytFkOee6chwFIs1Ybo1WFX8lH6njkrxwjobyrRUIHSsYPIw',
  apiVersion: '2026-02-27',
  useCdn: false,
})

const posts = await client.fetch(
  `*[_type == "post"] | order(_createdAt asc) {
    _id,
    "title": title[_key == "es"][0].value,
    "slug": slug.current,
    _createdAt
  }`
)

console.log(`Total posts encontrados: ${posts.length}\n`)
posts.forEach((post, i) => {
  console.log(`${String(i + 1).padStart(2, '0')}. [${post._id}]`)
  console.log(`    Título: ${post.title}`)
  console.log(`    Slug:   ${post.slug}`)
  console.log()
})
