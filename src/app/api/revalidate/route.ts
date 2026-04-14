import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/**
 * Webhook de revalidación para Sanity.
 * Usa parseBody de next-sanity/webhook para validar la firma.
 *
 * Configurar en: manage.sanity.io → proyecto → API → Webhooks
 * URL: https://www.nelson.com.mx/api/revalidate
 * Secret: el valor de SANITY_REVALIDATE_SECRET
 * Dataset: production
 * Trigger on: Create, Update, Delete
 * Filter: _type in ["industrialPark", "naveIndustrial", "terreno"]
 * Projection: {_type}
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

type WebhookPayload = {
  _type?: string
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response('Missing SANITY_REVALIDATE_SECRET', { status: 500 })
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // esperar propagación en Content Lake
    )

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    const type = body?._type

    if (type && PATHS_BY_TYPE[type]) {
      for (const path of PATHS_BY_TYPE[type]) {
        revalidatePath(path)
      }
      return NextResponse.json({ revalidated: true, type, paths: PATHS_BY_TYPE[type] })
    }

    // Tipo no mapeado — ignorar
    return NextResponse.json({ revalidated: false, type, message: 'Type not mapped' })
  } catch (err: unknown) {
    console.error(err)
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 })
  }
}
