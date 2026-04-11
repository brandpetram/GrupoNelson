import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nelson.com.mx'

  // Páginas estáticas del sitio
  const staticPages = [
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
    '/es/blog',
    '/es/noticias',
    '/es/recursos',
    '/es/contacto',
    '/es/aviso-de-privacidad',
    '/es/terminos',
    '/es/politica-de-cookies',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/es' ? 'weekly' : 'monthly',
    priority: path === '/es' ? 1 : path.includes('/parques-industriales') ? 0.9 : 0.7,
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

  return [...staticEntries, ...blogEntries, ...noticiasEntries]
}
