import { loginAction } from './actions'
import { LogoNelson } from '@/components/logo-nelson'
import { PasswordInput } from './password-input'

export const metadata = {
  title: 'Acceso — Instrucciones',
  robots: 'noindex, nofollow',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <LogoNelson width={120} className="mx-auto" />
          <h1 className="mt-6 text-xl font-semibold tracking-tight">Instrucciones</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Ingresa la contraseña para acceder a las guías de edición.
          </p>
        </div>

        <form action={loginAction} className="space-y-4">
          <PasswordInput />

          {error && (
            <p className="text-sm text-red-500">
              Contraseña incorrecta. Intenta de nuevo.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Acceder
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          ¿No tienes la contraseña? Contacta a{' '}
          <a href="mailto:luis@brandpetram.com" className="underline underline-offset-2">
            luis@brandpetram.com
          </a>
        </p>
      </div>
    </div>
  )
}
