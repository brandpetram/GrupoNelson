import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const CURATION_PATH = join(process.cwd(), 'src', 'data', 'foto-curation.json')

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function readCuration(): Record<string, { status?: string; sections?: string[] }> {
  try {
    return JSON.parse(readFileSync(CURATION_PATH, 'utf-8'))
  } catch {
    return {}
  }
}

export async function GET() {
  if (!isDev()) return NextResponse.json({}, { status: 404 })
  return NextResponse.json(readCuration())
}

export async function POST(req: NextRequest) {
  if (!isDev()) return NextResponse.json({}, { status: 404 })

  const body = await req.json()
  const { path, status, sections } = body as {
    path: string
    status?: string
    sections?: string[]
  }

  if (!path) {
    return NextResponse.json({ error: 'path required' }, { status: 400 })
  }

  const curation = readCuration()

  if (status === null && sections === undefined) {
    // Eliminar entrada
    delete curation[path]
  } else {
    const existing = curation[path] || {}
    if (status !== undefined) existing.status = status
    if (sections !== undefined) existing.sections = sections
    curation[path] = existing
  }

  writeFileSync(CURATION_PATH, JSON.stringify(curation, null, 2))
  return NextResponse.json({ ok: true })
}
