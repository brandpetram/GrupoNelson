import { NextRequest, NextResponse } from 'next/server'
import { existsSync, mkdirSync, renameSync } from 'fs'
import { join, dirname } from 'path'
import { execSync } from 'child_process'

function isDev() {
  return process.env.NODE_ENV === 'development'
}

export async function POST(req: NextRequest) {
  if (!isDev()) return NextResponse.json({}, { status: 404 })

  const body = await req.json()
  const { path } = body as { path: string }

  if (!path || !path.startsWith('/')) {
    return NextResponse.json({ error: 'invalid path' }, { status: 400 })
  }

  const publicDir = join(process.cwd(), 'public')
  const sourcePath = join(publicDir, path)
  const discardPath = join(publicDir, '_descartes', path)

  if (!existsSync(sourcePath)) {
    return NextResponse.json({ error: 'file not found' }, { status: 404 })
  }

  // Crear directorio destino
  mkdirSync(dirname(discardPath), { recursive: true })

  // Mover a cuarentena
  renameSync(sourcePath, discardPath)

  // Regenerar inventario
  try {
    execSync('pnpm run inventory', { cwd: process.cwd(), stdio: 'pipe' })
  } catch {
    // El inventario se puede regenerar manualmente después
  }

  return NextResponse.json({ ok: true, movedTo: `_descartes${path}` })
}
