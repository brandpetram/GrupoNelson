import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'

function computeHmac(password: string): string {
  return createHmac('sha256', password).update('instrucciones-auth-v1').digest('hex')
}

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Solo interceptar rutas /instrucciones/*
  if (!path.startsWith('/instrucciones')) {
    return NextResponse.next()
  }

  // Dejar pasar la página de login (evita loop de redirect)
  if (path === '/instrucciones/login') {
    return NextResponse.next()
  }

  // Dejar pasar la API action de login
  if (path.startsWith('/instrucciones/login/')) {
    return NextResponse.next()
  }

  const password = process.env.INSTRUCCIONES_PASSWORD
  if (!password) {
    // Si no hay contraseña configurada, dejar pasar (dev sin .env.local)
    return NextResponse.next()
  }

  // Verificar cookie HMAC
  const cookie = request.cookies.get('instrucciones-auth')
  const expectedHmac = computeHmac(password)

  if (!cookie || cookie.value !== expectedHmac) {
    return NextResponse.redirect(new URL('/instrucciones/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/instrucciones/:path*'],
}
