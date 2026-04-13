import { NextRequest, NextResponse } from 'next/server'
import { computeHmac } from '@/lib/admin-auth'

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  // 1. Solo interceptar rutas /admin/*
  if (!path.startsWith('/admin')) {
    return NextResponse.next()
  }

  // 2. Verificar que la env var existe ANTES de exceptuar login
  const password = process.env.INSTRUCCIONES_PASSWORD
  if (!password) {
    return new NextResponse(
      'Admin no disponible: INSTRUCCIONES_PASSWORD no está configurada.',
      { status: 503 }
    )
  }

  // 3. Dejar pasar login (la env var ya existe)
  if (path === '/admin/login' || path.startsWith('/admin/login/')) {
    return NextResponse.next()
  }

  // 4. Verificar cookie HMAC
  const cookie = request.cookies.get('admin-auth')
  const expectedHmac = computeHmac(password)

  if (!cookie || cookie.value !== expectedHmac) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
