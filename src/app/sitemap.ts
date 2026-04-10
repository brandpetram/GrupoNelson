import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nelson.com.mx'

  // Páginas estáticas del sitio
  const staticPages = [
    '',
    '/nelson/trayectoria',
    '/nelson/diferencia-nelson',
    '/nelson/liderazgo',
    '/nelson/nuestra-historia',
    '/parques-industriales-mexicali',
    '/parques-industriales-mexicali/nelson-i',
    '/parques-industriales-mexicali/nelson-ii',
    '/parques-industriales-mexicali/vigia-i',
    '/parques-industriales-mexicali/vigia-ii',
    '/inventario/naves-disponibles',
    '/inventario/terrenos',
    '/constructora/baumex',
    '/constructora/build-to-suit',
    '/constructora/diseno-e-ingenieria',
    '/constructora/estandares-internacionales',
    '/constructora/llave-en-mano',
    '/constructora/portafolio',
    '/constructora/proyectos-especializados',
    '/constructora/leed',
    '/constructora/leed/proceso-certificacion',
    '/constructora/leed/sitios-sostenibles',
    '/constructora/leed/energia-atmosfera',
    '/constructora/leed/materiales-recursos',
    '/constructora/leed/calidad-ambiental',
    '/constructora/leed/clima-extremo',
    '/constructora/leed/sistemas-operativos',
    '/experiencia/excelencia-operativa',
    '/experiencia/casos-de-exito',
    '/experiencia/normas-certificaciones-estandares',
    '/blog',
    '/noticias',
    '/recursos',
    '/contacto',
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/parques-industriales') ? 0.9 : 0.7,
  }))
}
