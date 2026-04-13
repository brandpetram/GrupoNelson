'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { computeHmac } from '@/lib/admin-auth'

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

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-auth')
  redirect('/admin/login')
}
