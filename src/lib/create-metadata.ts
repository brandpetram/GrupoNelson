import { toSpanish, toEnglish } from '@/glossary/route-map'
import type { Metadata } from 'next'

/**
 * Helper para generar metadata bilingue con alternates y hreflang.
 * Uso: exportar generateMetadata en cada page.tsx llamando esta funcion.
 */
export function createMetadata(opts: {
  lang: 'en' | 'es'
  path: string
  title: string
  description: string
}): Metadata {
  const alternate =
    opts.lang === 'en' ? toSpanish(opts.path) : toEnglish(opts.path)
  const baseUrl = 'https://www.nelson.com.mx'

  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: `${baseUrl}${opts.path}`,
      languages: {
        en: `${baseUrl}${opts.lang === 'en' ? opts.path : alternate}`,
        es: `${baseUrl}${opts.lang === 'es' ? opts.path : alternate}`,
      },
    },
    openGraph: {
      locale: opts.lang === 'en' ? 'en_US' : 'es_MX',
    },
  }
}
