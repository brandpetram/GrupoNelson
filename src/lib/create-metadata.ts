import { toSpanish, toEnglish, hasTranslation } from '@/glossary/route-map'
import type { Metadata } from 'next'

/**
 * Helper para generar metadata bilingue con alternates y hreflang.
 * Uso: exportar metadata en cada page.tsx llamando esta funcion.
 *
 * - Genera canonical siempre.
 * - Solo genera hreflang (alternates.languages) si la ruta tiene traduccion.
 * - Acepta `extra` para deep-merge campos adicionales (robots, openGraph.images, etc.).
 */
export function createMetadata(opts: {
  lang: 'en' | 'es'
  path: string
  title: string
  description: string
  extra?: Partial<Metadata>
}): Metadata {
  const baseUrl = 'https://www.nelson.com.mx'

  const alternates: Metadata['alternates'] = {
    canonical: `${baseUrl}${opts.path}`,
  }

  if (hasTranslation(opts.path)) {
    const alternate =
      opts.lang === 'en' ? toSpanish(opts.path) : toEnglish(opts.path)
    alternates.languages = {
      en: `${baseUrl}${opts.lang === 'en' ? opts.path : alternate}`,
      es: `${baseUrl}${opts.lang === 'es' ? opts.path : alternate}`,
    }
  }

  const base: Metadata = {
    title: opts.title,
    description: opts.description,
    alternates,
    openGraph: {
      type: 'website',
      siteName: 'Grupo Nelson',
      locale: opts.lang === 'en' ? 'en_US' : 'es_MX',
    },
  }

  if (!opts.extra) return base

  return {
    ...base,
    ...opts.extra,
    openGraph: { ...base.openGraph, ...opts.extra.openGraph },
    alternates: { ...base.alternates, ...opts.extra.alternates },
  }
}
