import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

/**
 * Webhook de revalidación para Sanity.
 * Sanity envía un POST cuando un documento cambia.
 * Revalida las páginas que consumen ese tipo de documento.
 *
 * Configurar en: manage.sanity.io → proyecto → API → Webhooks
 * URL: https://nelson.com.mx/api/revalidate
 * Secret: el valor de SANITY_REVALIDATE_SECRET en .env.local
 * Trigger on: Create, Update, Delete
 */

const PATHS_BY_TYPE: Record<string, string[]> = {
  industrialPark: [
    '/es/parques-industriales-mexicali',
    '/industrial-parks',
    '/es/parques-industriales-mexicali/nelson-i',
    '/es/parques-industriales-mexicali/nelson-ii',
    '/es/parques-industriales-mexicali/vigia-i',
    '/es/parques-industriales-mexicali/vigia-ii',
    '/industrial-parks/nelson-i',
    '/industrial-parks/nelson-ii',
    '/industrial-parks/vigia-i',
    '/industrial-parks/vigia-ii',
  ],
  naveIndustrial: [
    '/es/inventario/naves-disponibles',
    '/inventory/available-buildings',
  ],
  terreno: [
    '/es/inventario/terrenos',
    '/inventory/land',
  ],
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-webhook-secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const type = body?._type as string | undefined

    if (type && PATHS_BY_TYPE[type]) {
      for (const path of PATHS_BY_TYPE[type]) {
        revalidatePath(path)
      }
      return NextResponse.json({ revalidated: true, type, paths: PATHS_BY_TYPE[type] })
    }

    // Tipo no mapeado — revalidar todo por si acaso
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, type, paths: ['/ (all)'] })
  } catch (err) {
    return NextResponse.json({ message: 'Error parsing body' }, { status: 400 })
  }
}
