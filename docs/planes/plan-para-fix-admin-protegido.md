# Plan para proteger /admin — fail-open en proxy.ts

## Problema real

La protección de `/admin` **ya existe** en `src/proxy.ts` (líneas 8-41). El proxy verifica la cookie `admin-auth` contra un HMAC de `INSTRUCCIONES_PASSWORD` y redirige a `/admin/login` si no coincide.

Sin embargo, el proxy hace **fail-open** cuando `INSTRUCCIONES_PASSWORD` no está configurada (líneas 26-30): si la variable no existe, deja pasar a cualquiera. Esto significa que:

- En **producción**: protegido solo si `INSTRUCCIONES_PASSWORD` está en Vercel env vars.
- En **local**: abierto si `.env.local` no tiene la variable (que es el caso actual).

## Estado actual del código

| Archivo | Qué hace |
|---|---|
| `src/proxy.ts` (línea 8) | Intercepta `/admin/*`, verifica cookie HMAC, redirige a login si falla. Fail-open si falta env var. |
| `src/app/(admin)/admin/login/actions.ts` (línea 11) | Server Action que valida password, setea cookie `admin-auth` con HMAC. |
| `src/app/(admin)/admin/login/page.tsx` | Formulario de login. |
| `src/app/(admin)/layout.tsx` | Server component. Solo pone `noindex`. No hace auth (no debe — el proxy ya lo hace). |
| `src/app/(admin)/admin/layout.tsx` | `'use client'`. Sidebar + contenido. No hace auth (no puede — es client component). |

**`computeHmac` está duplicada** en `src/proxy.ts` (línea 4) y `src/app/(admin)/admin/login/actions.ts` (línea 7).

## Ownership

`src/proxy.ts` es un archivo de sistema (no pertenece a ninguna sección específica). Este fix debe ejecutarse desde MAIN, no desde un worktree de sección.

## Fix propuesto (4 pasos)

### Paso 1 — Extraer `computeHmac` a helper compartido

Crear `src/lib/admin-auth.ts` con la función `computeHmac` y exportarla. Actualizar `src/proxy.ts` y `src/app/(admin)/admin/login/actions.ts` para importarla desde ahí en vez de tener cada uno su copia.

```ts
// src/lib/admin-auth.ts
import { createHmac } from 'crypto'

export function computeHmac(password: string): string {
  return createHmac('sha256', password).update('admin-auth-v1').digest('hex')
}
```

### Paso 2 — Cerrar el fail-open en proxy.ts

Cambiar el comportamiento cuando `INSTRUCCIONES_PASSWORD` no está configurada: en vez de dejar pasar, responder con un error explícito de misconfiguración.

**No redirigir a `/admin/login`** porque el login también depende de `INSTRUCCIONES_PASSWORD` — sin la variable, `loginAction` en `actions.ts` (línea 13) siempre rechaza cualquier contraseña. Redirigir al login crearía un callejón sin salida donde el usuario ve el formulario pero nunca puede entrar.

```ts
// src/proxy.ts — líneas 26-30 actuales:
const password = process.env.INSTRUCCIONES_PASSWORD
if (!password) {
  return NextResponse.next()  // ← PROBLEMA: fail-open
}

// Cambiar a:
const password = process.env.INSTRUCCIONES_PASSWORD
if (!password) {
  // Sin password configurada, devolver error explícito (fail-closed)
  return new NextResponse(
    'Admin no disponible: INSTRUCCIONES_PASSWORD no está configurada.',
    { status: 503 }
  )
}
```

**Orden importante:** el chequeo de misconfiguración debe ir **antes** de exceptuar `/admin/login`. En el proxy actual, `/admin/login` se deja pasar en líneas 17-24 antes de revisar la env var en línea 26. Si no se reordena, `/admin/login` seguirá mostrando el formulario aunque nunca pueda autenticar (porque `loginAction` en `actions.ts` línea 13 también rechaza cuando falta la env var). El proxy debe quedar así:

```ts
// 1. Solo interceptar /admin/*
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

// 3. Ahora sí, dejar pasar login (la env var ya existe)
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
```

**Consecuencia:** en desarrollo local sin `.env.local`, cualquier ruta bajo `/admin` (incluyendo `/admin/login`) devuelve 503 con mensaje claro. Para trabajar en local hay que agregar `INSTRUCCIONES_PASSWORD` a `.env.local`.

### Paso 3 — Asegurar que `INSTRUCCIONES_PASSWORD` existe en todos los environments

1. Verificar que la variable está en Vercel env vars (Production, Preview, Development).
2. Agregar la variable a `.env.local` para desarrollo local.

## Paso 4 — Logout

Actualmente no hay forma de cerrar sesión. Agregar logout en dos partes:

### 4a — Server Action en `src/app/(admin)/admin/login/actions.ts`

Agregar `logoutAction` en el mismo archivo que `loginAction` para mantener toda la lógica de auth junta.

```ts
export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-auth')
  redirect('/admin/login')
}
```

### 4b — Botón en `src/app/(admin)/admin/layout.tsx`

Agregar un botón "Cerrar sesión" en el header del layout de admin que invoque `logoutAction`.

```tsx
import { logoutAction } from './login/actions'

// Dentro del header, junto a "Volver al sitio":
<form action={logoutAction}>
  <button type="submit" className="...">
    Cerrar sesión
  </button>
</form>
```

**Nota:** `src/app/(admin)/admin/layout.tsx` es `'use client'`. Para invocar una Server Action desde un client component se puede pasar la action directamente al `<form action={...}>` — Next.js lo soporta. No se necesita convertir el layout a server component.

**Dependencia:** el logout funciona correctamente solo después del Paso 2 (fail-closed). Si el proxy sigue en fail-open, el logout borra la cookie visualmente pero `/admin` sigue accesible sin ella.

## Mejoras opcionales (no bloquean el fix)

- **Validación en Server Actions:** Las Server Actions bajo `/admin` deben validar auth dentro de cada función, no depender solo del proxy. Las Server Functions se invocan como POST al mismo path y el proxy las cubre hoy, pero un cambio de matcher o un refactor puede quitar esa cobertura silenciosamente. La documentación de Next.js recomienda explícitamente validar auth dentro de cada Server Function (ver: Proxy docs, Mutating Data, Authentication guide).

## Verificación post-fix

1. Quitar cookie `admin-auth` del navegador → abrir `/admin` → debe redirigir a `/admin/login`
2. Entrar contraseña correcta → debe acceder a `/admin`
3. Abrir `/admin/blog`, `/admin/noticias`, etc. sin cookie → debe redirigir a login
4. En local sin `INSTRUCCIONES_PASSWORD` en `.env.local` → debe devolver 503 con mensaje de misconfiguración
5. Cerrar sesión (botón logout) → debe redirigir a `/admin/login` y volver a `/admin` debe pedir login de nuevo
6. La cookie dura 30 días — verificar que no se pierda al navegar entre páginas
