import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { toEnglish } from '@/glossary/route-map'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nelson.com.mx'

  // Páginas estáticas en español (tienen equivalente en inglés via route-map)
  const spanishPages = [
    '/es',
    '/es/nelson/trayectoria',
    '/es/nelson/diferencia-nelson',
    '/es/nelson/liderazgo',
    '/es/nelson/nuestra-historia',
    '/es/parques-industriales-mexicali',
    '/es/parques-industriales-mexicali/nelson-i',
    '/es/parques-industriales-mexicali/nelson-ii',
    '/es/parques-industriales-mexicali/vigia-i',
    '/es/parques-industriales-mexicali/vigia-ii',
    '/es/inventario/naves-disponibles',
    '/es/inventario/terrenos',
    '/es/constructora/baumex',
    '/es/constructora/build-to-suit',
    '/es/constructora/diseno-e-ingenieria',
    '/es/constructora/estandares-internacionales',
    '/es/constructora/llave-en-mano',
    '/es/constructora/portafolio',
    '/es/constructora/proyectos-especializados',
    '/es/constructora/leed',
    '/es/constructora/leed/proceso-certificacion',
    '/es/constructora/leed/sitios-sostenibles',
    '/es/constructora/leed/energia-atmosfera',
    '/es/constructora/leed/materiales-recursos',
    '/es/constructora/leed/calidad-ambiental',
    '/es/constructora/leed/clima-extremo',
    '/es/constructora/leed/sistemas-operativos',
    '/es/experiencia/excelencia-operativa',
    '/es/experiencia/casos-de-exito',
    '/es/experiencia/normas-certificaciones-estandares',
    '/es/recursos',
    '/es/contacto',
    '/es/aviso-de-privacidad',
    '/es/terminos',
    '/es/politica-de-cookies',
  ]

  // Páginas solo en español (sin equivalente en inglés)
  const spanishOnlyPages = [
    '/es/blog',
    '/es/noticias',
  ]

  // Entradas bilingues con alternates hreflang
  const bilingualEntries: MetadataRoute.Sitemap = spanishPages.flatMap((esPath) => {
    const enPath = toEnglish(esPath)
    const isHome = esPath === '/es'
    const isParks = esPath.includes('/parques-industriales')
    const freq = isHome ? 'weekly' as const : 'monthly' as const
    const prio = isHome ? 1 : isParks ? 0.9 : 0.7

    return [
      {
        url: `${baseUrl}${esPath}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority: prio,
        alternates: {
          languages: {
            es: `${baseUrl}${esPath}`,
            en: `${baseUrl}${enPath}`,
          },
        },
      },
      {
        url: `${baseUrl}${enPath}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority: prio,
        alternates: {
          languages: {
            es: `${baseUrl}${esPath}`,
            en: `${baseUrl}${enPath}`,
          },
        },
      },
    ]
  })

  // Entradas solo en español (blog, noticias index)
  const spanishOnlyEntries: MetadataRoute.Sitemap = spanishOnlyPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Rutas dinámicas desde Sanity
  const [posts, noticias] = await Promise.all([
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){"slug": slug.current, "updatedAt": _updatedAt}`
    ),
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "noticia" && defined(slug.current)]|order(publishedAt desc){"slug": slug.current, "updatedAt": _updatedAt}`
    ),
  ])

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/es/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const noticiasEntries: MetadataRoute.Sitemap = noticias.map((noticia) => ({
    url: `${baseUrl}/es/noticias/${noticia.slug}`,
    lastModified: new Date(noticia.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...bilingualEntries, ...spanishOnlyEntries, ...blogEntries, ...noticiasEntries]
}
