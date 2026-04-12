'use server'

import { cookies } from 'next/headers'
import { createHmac } from 'crypto'
import { redirect } from 'next/navigation'

function computeHmac(password: string): string {
  return createHmac('sha256', password).update('admin-auth-v1').digest('hex')
}

export async function loginAction(formData: FormData) {
  const password = formData.get('password') as string
  const envPassword = process.env.INSTRUCCIONES_PASSWORD

  if (!envPassword || password !== envPassword) {
    redirect('/admin/login?error=1')
  }

  const hmac = computeHmac(envPassword)
  const cookieStore = await cookies()

  cookieStore.set('admin-auth', hmac, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 días
    path: '/',
  })

  redirect('/admin')
}
