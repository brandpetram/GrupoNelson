import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'

/**
 * Webhook de revalidación para Sanity.
 * Sanity envía un POST cuando un documento cambia.
 * Revalida las páginas que consumen ese tipo de documento.
 *
 * Configurar en: manage.sanity.io → proyecto → API → Webhooks
 * URL: https://www.nelson.com.mx/api/revalidate (usar www para evitar redirect)
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

/**
 * Verifica la firma HMAC-SHA256 que Sanity envía en el header x-sanity-signature.
 * Sanity firma el body con el secret configurado en el webhook.
 */
function isValidSignature(body: string, signature: string | null, secret: string): boolean {
  if (!signature) return false
  const hmac = createHmac('sha256', secret)
  hmac.update(body)
  const digest = hmac.digest('hex')
  return signature === digest
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'Secret not configured' }, { status: 500 })
  }

  const rawBody = await req.text()
  const signature = req.headers.get('x-sanity-signature')

  if (!isValidSignature(rawBody, signature, secret)) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
  }

  try {
    const body = JSON.parse(rawBody)
    const type = body?._type as string | undefined

    if (type && PATHS_BY_TYPE[type]) {
      for (const path of PATHS_BY_TYPE[type]) {
        revalidatePath(path)
      }
      return NextResponse.json({ revalidated: true, type, paths: PATHS_BY_TYPE[type] })
    }

    // Tipo no mapeado — ignorar (el filtro del webhook debería evitar esto)
    return NextResponse.json({ revalidated: false, type, message: 'Type not mapped' })
  } catch {
    return NextResponse.json({ message: 'Error parsing body' }, { status: 400 })
  }
}
