import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ImageField } from '@/data/parks/types'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

/**
 * Resuelve un ImageField (SanityImage o string legacy) a una URL.
 * - SanityImage → usa urlFor con width y quality
 * - string → devuelve tal cual (ruta en /public/)
 * - null/undefined → devuelve null (el componente debe condicionar el render)
 */
export function resolveImageUrl(img: ImageField | null | undefined, width = 800): string | null {
  if (!img) return null
  if (typeof img === 'string') return img
  return urlFor(img).width(width).quality(80).auto('format').url()
}
