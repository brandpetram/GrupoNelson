import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/studio/',
        '/dev/',
        '/componentes/',
        '/componentes-dos/',
        '/componentes-tres/',
        '/product/',
        '/productos/',
        '/proyecto/',
        '/qa/',
      ],
    },
    sitemap: 'https://www.nelson.com.mx/sitemap.xml',
  }
}
