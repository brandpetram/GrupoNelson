# Plan para Versión en Inglés del Sitio

## Estrategia General

**Sin frameworks de i18n.** No usamos next-intl, next-i18next ni ningún otro.
Dos árboles de páginas independientes que comparten los mismos componentes:

| Idioma | Ruta | `lang` en `<html>` |
|--------|------|---------------------|
| Inglés (default) | `/` | `en` |
| Español | `/es/*` | `es` |

El cambio de idioma se hace con las banderas USA/México que ya existen en el Header.

---

## Estado Actual (verificado contra el repo)

### Lo que ya existe

- `src/app/en/` — página de prueba con Hero básico (usa `Header-en`)
- `src/components/Header-en.tsx` — copia del Header con imports de `navigation-en.ts`
- `src/data/nav/navigation-en.ts` — datos de navegación traducidos (rutas con prefijo `/en/`)
- `src/components/language-flags.tsx` — selector de idioma con banderas (solo navega a `/` o `/en`)

### Patrones actuales del repo

**Header en cada page.tsx, no en el layout:**
Todas las páginas (`trayectoria`, `baumex`, `parques`, etc.) importan `<Header />`
directamente en su `page.tsx`. El `layout.tsx` raíz solo tiene Footer, ThemeProvider y fonts.
Esto es relevante porque el plan necesita decidir si se mantiene este patrón o se migra
el Header al layout.

**Componentes con texto hardcodeado (sin props):**
La mayoría de los componentes brandpetram tienen texto en español hardcodeado.
Algunos ya reciben props parciales (como `AlphaBP` con `descripcion`).
`ScrollStorytelling` acepta `items` como prop con defaults hardcodeados.

**Componentes "griegos" locales:**
Las páginas como Baumex usan componentes con nombres griegos (`Mu`, `Nu`, `Xi`, `Omicron`...)
que son secciones específicas de esa página con texto hardcodeado. No son reutilizables
en otros proyectos — son locales de Grupo Nelson.

**Datos de Sanity en páginas públicas:**
`parques-industriales-mexicali/page.tsx` usa `getIndustrialParks()` de Sanity.
Las páginas de parques individuales también consumen data de Sanity para specs y detalles.

### Inventario de páginas públicas

| Sección | Rutas | Páginas |
|---------|-------|---------|
| Home | `/` | 1 |
| Nelson (nosotros) | `/nelson/trayectoria`, `/nelson/diferencia-nelson`, `/nelson/liderazgo`, `/nelson/nuestra-historia` | 4 |
| Parques | `/parques-industriales-mexicali` + 4 parques individuales | 5 |
| Constructora | `/constructora/baumex`, `/build-to-suit`, `/llave-en-mano`, `/diseno-e-ingenieria`, `/proyectos-especializados`, `/estandares-internacionales`, `/portafolio` | 7 |
| LEED | `/constructora/leed` + 7 subpáginas | 8 |
| Experiencia | `/experiencia/excelencia-operativa`, `/casos-de-exito`, `/normas-certificaciones-estandares` | 3 |
| Inventario | `/inventario/naves-disponibles`, `/inventario/terrenos` | 2 |
| Contacto | `/contacto`, `/contactanos`, `/gracias` | 3 |
| Recursos | `/recursos` | 1 |
| Legal | `/aviso-de-privacidad`, `/terminos`, `/politica-de-cookies` | 3 |
| **Total a traducir** | | **~37** |

**Se mueven bajo `/es/` sin traducir:** `/blog/*`, `/noticias/*` (Sanity)

**Fuera del alcance bilingüe (internas/dev):**
`/productos/*`, `/proyecto/*`, `/componentes*`, `/dev/*`, `/qa/*`, `/studio/*`, `(marketing)/product`

**Nota:** El inventario final para route-map, redirects y QA se deriva programáticamente
de los `page.tsx` reales, no de esta tabla.

---

## Clasificación de Componentes

### Componentes públicos reutilizables (candidatos a productizar)

Componentes que Brandpetram puede reutilizar en otros proyectos cliente.
La Fase 0 los limpia y la Fase 1 los propea.

| Componente | Estado actual | Qué falta |
|------------|---------------|-----------|
| `scroll-storytelling.tsx` | Acepta `items` con defaults | Sanitizar defaults, documentar interfaz |
| `alpha-bp.tsx` | Acepta `descripcion` | Agregar props para título, imágenes |
| `hexagon-features.tsx` | Sin props | Agregar prop `features: Feature[]` |
| `footer-1/index.tsx` | Sin props | Agregar prop `lang` con datos bilingües |
| `badge-aniversario.tsx` | Solo `className` | Agregar props para número y texto |
| `hero-video-cover.tsx` | Ya recibe props | Listo |
| `virtual-tour-bp.tsx` | Solo `tourId` | Agregar props para labels UI |
| `faq-sections-three-columns-bp` | Ya tiene versión con props | Listo |
| Componentes `con-props/` | Todos via props | Listos |

### Componentes que conviene propear (para bilingüe, no necesariamente reutilizables)

Componentes que tienen texto en español hardcodeado y que se usan en las páginas
a traducir. Necesitan props para poder recibir contenido en inglés.

| Componente | Dónde se usa | Texto hardcodeado |
|------------|-------------|-------------------|
| `radiant-ts-header` (local) | Home | Stats, textos descriptivos |
| `logos-grid-bp-2.tsx` | Trayectoria | Textos del lado izquierdo |
| `stats-grid-bp-gamma.tsx` | Trayectoria | Números y labels |
| `editorial-cascada-bp.tsx` | Trayectoria | Texto editorial largo |
| `logo-cloud.tsx` (motion-plus) | Home | Labels opcionales |
| `contact.tsx` / `contact-form.tsx` | Contacto | Labels, placeholders, mensajes |

### Componentes locales (no vale la pena abstraer)

Componentes que son específicos de una página de Grupo Nelson. Tienen texto hardcodeado
pero NO se reutilizan en otros proyectos. Para la versión inglés, se duplica la página
entera con su texto traducido — no se propean.

| Componente | Página |
|------------|--------|
| `mu.tsx`, `nu.tsx`, `xi.tsx`, `omicron.tsx`, `pi.tsx`, `rho.tsx`, `sigma.tsx`, `tau.tsx`, `upsilon.tsx`, `phi.tsx`, `chi.tsx`, `psi.tsx` | Baumex |
| `delta.tsx`, `epsilon.tsx`, `zeta.tsx`, `eta.tsx`, `teta.tsx`, `iota.tsx`, `kappa.tsx`, `lamda.tsx` | Otras páginas de constructora |
| Componentes de `park-*` | Páginas de parques individuales |
| Componentes de `leed-*` | Páginas LEED |

**Estrategia para estos:** En la versión inglés, cada `page.tsx` importa los mismos
componentes pero les pasa texto en inglés via props (si los tienen) o se hace una copia
local de la página con el texto traducido inline.

---

## Arquitectura de Layouts

### Estructura de rutas

```
src/app/
├── layout.tsx              ← Root layout único: <html>, <body>, fonts, ThemeProvider
│                              NO renderiza Header ni Footer
│                              lang se resuelve por segmento (ver abajo)
│
├── (en)/                   ← Route group: páginas públicas en inglés
│   ├── layout.tsx          ← Layout anidado: Footer inglés, metadata default EN
│   ├── page.tsx            ← Home en inglés (/)
│   ├── about/
│   │   ├── our-story/
│   │   ├── difference/
│   │   ├── leadership/
│   │   └── track-record/
│   ├── industrial-parks/
│   │   ├── nelson-ii/
│   │   ├── nelson-i/
│   │   ├── vigia-i/
│   │   └── vigia-ii/
│   ├── construction/
│   │   ├── baumex/
│   │   ├── build-to-suit/
│   │   ├── turnkey/
│   │   ├── engineering-design/
│   │   ├── specialized-projects/
│   │   ├── international-standards/
│   │   ├── portfolio/
│   │   └── leed/
│   │       └── (subpáginas)
│   ├── experience/
│   │   ├── operational-excellence/
│   │   ├── success-stories/
│   │   └── standards-certifications/
│   ├── inventory/
│   │   ├── available-buildings/
│   │   └── land/
│   ├── contact/
│   ├── thank-you/
│   ├── privacy-policy/
│   ├── terms/
│   └── cookie-policy/
│
├── es/                     ← Segmento real: todas las URLs empiezan con /es/
│   ├── layout.tsx          ← Layout anidado: Footer español, metadata default ES
│   ├── page.tsx            ← Home en español (/es)
│   ├── nelson/
│   ├── parques-industriales-mexicali/
│   ├── constructora/
│   ├── experiencia/
│   ├── inventario/
│   ├── contacto/
│   ├── (legal)/
│   ├── blog/
│   ├── noticias/
│   └── ...
│
├── api/                    ← API routes (sin layout de idioma)
│   ├── submit-form/
│   └── dev/
│
├── studio/                 ← Sanity Studio (sin layout de idioma)
│
└── (dev)/                  ← Route group: páginas internas/dev
    ├── componentes/
    ├── componentes-dos/
    ├── componentes-tres/
    ├── dev/
    ├── qa/
    └── proyecto/
```

### Estrategia de `lang` en `<html>`

**Un solo root layout** (`app/layout.tsx`) con `<html>` y `<body>`.

Para resolver `lang` sin hacer la app dinámica, el root layout usa un parámetro
estático derivado del segmento de la URL:

```typescript
// src/app/layout.tsx
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang?: string }
}) {
  // No usa headers() — no fuerza rendering dinámico
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontClasses}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Problema: el root layout no recibe `params` del segmento `es/`.**
En App Router, `params` solo está disponible para layouts que están dentro de
un segmento dinámico `[lang]/`, no para layouts superiores a un segmento estático.

**Solución pragmática:** El root layout usa `lang="en"` por defecto (inglés es el idioma
principal). El `es/layout.tsx` sobreescribe el `lang` del `<html>` con un script
inline mínimo o un client component que ejecuta `document.documentElement.lang = 'es'`
en el primer render. Esto es un trade-off menor: el HTML inicial dice `en` pero se
corrige inmediatamente en el cliente para las rutas `/es/*`.

```typescript
// src/app/es/layout.tsx
import { SetLang } from '@/components/set-lang'

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetLang lang="es" />
      {children}
      <Footer1 lang="es" />
    </>
  )
}
```

```typescript
// src/components/set-lang.tsx
'use client'
import { useEffect } from 'react'

export function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}
```

**¿Por qué no múltiples root layouts?**
Eliminar `app/layout.tsx` y tener root layouts en `(en)/` y `es/` es técnicamente
posible pero crea problemas reales:
- API routes, studio, y páginas de dev quedan huérfanas sin root layout
- Hay que agrupar TODO bajo route groups (incluyendo api, studio, etc.)
- Next.js genera bundles separados por root layout — fonts y CSS se duplican
- Navegación entre root layouts es una navegación completa (hard navigation),
  no una transición suave — el language switcher haría un page reload

Un solo root layout con corrección de `lang` en el cliente es más simple y robusto.

### Header en page.tsx vs layout

**Decisión: mantener el Header en cada page.tsx.** No mover al layout.

Razones:
- Así funciona hoy — cambiar esto requiere editar ~37 páginas solo por refactor
- Algunas páginas usan `variant="dark"` y otras no — el Header tiene variantes por página
- Al crear las páginas inglés, cada una importa `<Header lang="en" />` directamente
- Las páginas españolas migradas siguen con `<Header />` (que default a español)

### Footer en el layout

**Decisión: mover el Footer al layout anidado de cada grupo.**

El Footer ya está en el root layout actual. Al crear `(en)/layout.tsx` y `es/layout.tsx`,
cada uno renderiza su Footer con el prop `lang` correspondiente. Esto evita que cada
`page.tsx` tenga que importar el Footer.

---

## Glosario de Términos Clave

Solo para términos recurrentes y CTAs cortos. No es un diccionario de todo el copy.

```
src/glossary/
├── terms.ts     ← Términos de industria bilingües
└── route-map.ts ← Mapa bidireccional de rutas
```

```typescript
// src/glossary/terms.ts
export const terms = {
  en: {
    buildToSuit: 'Build-to-Suit',
    turnkey: 'Turnkey',
    industrialPark: 'Industrial Park',
    warehouse: 'Industrial Building',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    viewSpecs: 'View Specifications',
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    cookiePolicy: 'Cookie Policy',
  },
  es: {
    buildToSuit: 'Build-to-Suit',
    turnkey: 'Llave en Mano',
    industrialPark: 'Parque Industrial',
    warehouse: 'Nave Industrial',
    learnMore: 'Conocer más',
    contactUs: 'Contáctanos',
    viewSpecs: 'Ver especificaciones',
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Aviso de Privacidad',
    termsOfUse: 'Términos de Uso',
    cookiePolicy: 'Política de Cookies',
  },
} as const
```

El copy largo de cada página vive en su propio `page.tsx` o en objetos de contenido
pasados por props. Header y Footer NO dependen de este glosario — usan sus propios
datos de `navigation.ts` / `navigation-en.ts` y datos internos respectivamente.

---

## Route-map y Language Switcher

**Mapa bidireccional** (en `src/glossary/route-map.ts`):

```typescript
// Rutas inglés → español
const enToEs: Record<string, string> = {
  '/': '/es',
  '/about/our-story': '/es/nelson/nuestra-historia',
  '/about/leadership': '/es/nelson/liderazgo',
  '/about/difference': '/es/nelson/diferencia-nelson',
  '/about/track-record': '/es/nelson/trayectoria',
  '/industrial-parks': '/es/parques-industriales-mexicali',
  '/industrial-parks/nelson-ii': '/es/parques-industriales-mexicali/nelson-ii',
  // ... se genera del inventario programático
}

// Inverso automático
const esToEn = Object.fromEntries(
  Object.entries(enToEs).map(([en, es]) => [es, en])
)

export function toSpanish(path: string): string { return enToEs[path] ?? '/es' }
export function toEnglish(path: string): string { return esToEn[path] ?? '/' }
```

**Language switcher** (`language-flags.tsx` actualizado):

```typescript
const getLanguageUrl = (targetLang: string) => {
  if (targetLang === 'es') {
    if (pathname.startsWith('/es')) return pathname
    return toSpanish(pathname)
  }
  if (targetLang === 'en') {
    if (!pathname.startsWith('/es')) return pathname
    return toEnglish(pathname)
  }
  return '/'
}
```

---

## Header y Footer con prop `lang`

**Header:** Unificar `Header.tsx` + `Header-en.tsx` en un solo componente con prop `lang`.
Ambos archivos son idénticos en estructura — la única diferencia es el import de
`navigation.ts` vs `navigation-en.ts`. Con `lang`, el Header selecciona el array correcto:

```typescript
import * as navEs from '@/data/nav/navigation'
import * as navEn from '@/data/nav/navigation-en'

export default function Header({ lang = 'es', variant }: HeaderProps) {
  const nav = lang === 'en' ? navEn : navEs
  // ... resto del componente igual
}
```

**Footer:** `Footer1` recibe prop `lang` y selecciona sus datos internos según idioma.
Los arrays `footerData`, `legalLinks`, etc. se duplican con versión inglés dentro del
mismo archivo:

```typescript
const footerData = {
  en: [{ heading: 'Industrial Parks', ... }],
  es: [{ heading: 'Parques Industriales', ... }],
}

export default function Footer1({ lang = 'es' }: { lang?: 'en' | 'es' }) {
  const data = footerData[lang]
  // ...
}
```

**Datos de navegación:** siguen en `src/data/nav/navigation.ts` y `navigation-en.ts`.
No dependen del glosario. Las rutas en `navigation-en.ts` se actualizan para apuntar
a las rutas nuevas (sin prefijo `/en/`).

---

## Decisiones Arquitectónicas

### Blog y Noticias

Se mueven bajo `/es/blog` y `/es/noticias`. No se traducen. La navegación inglesa no los
linkea. Si un usuario llega desde buscador, verá la versión española con el shell español
correcto.

### Rutas en inglés vs español

Las rutas inglés usan slugs en inglés (`/about/leadership`). Las rutas español mantienen
sus slugs actuales dentro de `/es/` (`/es/nelson/liderazgo`).

### Páginas con datos de Sanity

Algunas páginas públicas (`parques-industriales-mexicali`) leen datos de Sanity.
Los datos de Sanity (nombres de parques, specs de naves) están en español y no se
traducen. Las páginas inglés de parques:
- Usan los mismos datos de Sanity para información técnica (m², ft², addresses)
- Traducen solo el copy hardcodeado de la página (hero, descriptions, CTAs)
- Los nombres propios de los parques no se traducen ("Nelson II", "El Vigía I")

### Componentes con texto hardcodeado

Tres tratamientos según la clasificación:

1. **Reutilizables** → se propean en Fase 1
2. **Propeables para bilingüe** → se propean en Fase 1
3. **Locales (griegos, etc.)** → la página inglés reimporta el mismo componente
   y le pasa texto traducido via props si los tiene, o se crea una copia local
   de la sección con texto en inglés

---

## Orden de Ejecución

### Fase 0: Productizar componentes reutilizables

**Objetivo:** Limpiar los componentes públicos que Brandpetram puede reutilizar en otros
proyectos. No se traduce nada todavía — solo se prepara la base.

1. Revisar cada componente de la tabla "públicos reutilizables"
2. Sanitizar defaults (reemplazar texto de Grupo Nelson por lorem ipsum genérico)
3. Documentar interfaz de props con JSDoc o comentarios
4. Verificar que el componente funciona sin props (los defaults son coherentes)
5. Si el componente ya tiene versión `con-props/`, verificar que la interfaz es consistente
6. Opcional: retornar componentes productizados a `componentes-brandpetram/`

**No se hace en esta fase:** Traducciones, cambio de rutas, nada de inglés.

### Fase 1: Propear componentes para bilingüe

**Objetivo:** Agregar props de texto a los componentes que se usarán en las páginas
inglés. Esto incluye los reutilizables + los que conviene propear.

1. **`hexagon-features.tsx`** — agregar prop `features: Feature[]`
2. **`badge-aniversario.tsx`** — agregar props para número y texto
3. **`radiant-ts-header` (local)** — agregar props para stats y textos
4. **`logos-grid-bp-2.tsx`** — agregar props para texto del lado izquierdo
5. **`stats-grid-bp-gamma.tsx`** — agregar props para números y labels
6. **`editorial-cascada-bp.tsx`** — agregar props para texto editorial
7. **`contact-form.tsx`** — agregar prop `lang` para labels y placeholders
8. **`footer-1/index.tsx`** — agregar prop `lang` para datos bilingües
9. **`Header.tsx`** — agregar prop `lang`, eliminar `Header-en.tsx`

**Regla:** Cada componente propeado sigue funcionando sin props (defaults en español).
Las páginas actuales no se tocan — siguen usando los defaults.

**Componentes griegos (Mu, Nu, Xi...): no se propean.** Son demasiados y demasiado
específicos. La estrategia para las páginas que los usan se define en la Fase 3.

### Fase 2: Infraestructura de rutas

1. **Inventario programático** — derivar lista completa de rutas de los `page.tsx` reales
2. **Crear `src/glossary/terms.ts`** — glosario de términos
3. **Crear `src/glossary/route-map.ts`** — mapa bidireccional de rutas
4. **Actualizar `language-flags.tsx`** — lógica de cambio de idioma con route-map
5. **Actualizar `navigation-en.ts`** — rutas sin prefijo `/en/` (ahora apuntan a `/about/...`)

### Fase 3: Reorganizar rutas

1. **Crear `src/app/(en)/layout.tsx`** — layout anidado con Footer inglés y metadata EN
2. **Crear `src/app/es/layout.tsx`** — layout anidado con Footer español y metadata ES
3. **Crear `src/components/set-lang.tsx`** — componente para corregir `lang` en rutas `/es/`
4. **Actualizar `src/app/layout.tsx`** — root layout neutro con `lang="en"` default,
   sin Header, sin Footer (Footer pasa a los layouts anidados)
5. **Mover páginas públicas** a `src/app/es/` (incluyendo blog y noticias)
6. **Mover páginas internas** a `src/app/(dev)/`
7. Verificar que el sitio español funciona en `/es/*`
8. **Redirects** en `next.config`: `/nelson/*` → `/es/nelson/*`, `/blog/*` → `/es/blog/*`, etc.

**API routes se quedan en `src/app/api/`** — no necesitan layout de idioma.

### Fase 4: Metadata — definir patrón

**Antes de crear páginas inglés.** Cada página necesita metadata correcta desde el día 1.

1. **Crear helper** `src/lib/create-metadata.ts`:
   ```typescript
   import { toSpanish, toEnglish } from '@/glossary/route-map'

   export function createMetadata(opts: {
     lang: 'en' | 'es'
     path: string
     title: string
     description: string
   }): Metadata {
     const alternate = opts.lang === 'en' ? toSpanish(opts.path) : toEnglish(opts.path)
     return {
       title: opts.title,
       description: opts.description,
       alternates: {
         canonical: opts.path,
         languages: {
           'en': opts.lang === 'en' ? opts.path : alternate,
           'es': opts.lang === 'es' ? opts.path : alternate,
         },
       },
       openGraph: { locale: opts.lang === 'en' ? 'en_US' : 'es_MX' },
     }
   }
   ```
2. **Actualizar metadata de páginas españolas** — canonical nuevo en `/es/...`
3. **Cada página inglés** usa `createMetadata()` al crearse

### Fase 5: Crear páginas inglés (principales)

Orden por importancia de negocio. Cada página importa `<Header lang="en" />`
y usa el helper de metadata:

| Prioridad | Página | Notas |
|-----------|--------|-------|
| 1 | Home (`/`) | Pasa texto inglés via props a todos los componentes |
| 2 | Parques overview (`/industrial-parks`) | Texto hardcodeado + datos Sanity |
| 3 | Nelson II (`/industrial-parks/nelson-ii`) | Texto + specs Sanity |
| 4 | Baumex (`/construction/baumex`) | Componentes griegos — copiar con texto inglés |
| 5 | Build-to-Suit (`/construction/build-to-suit`) | Texto hardcodeado |
| 6 | About — Our Story (`/about/our-story`) | Texto hardcodeado |
| 7 | Contact (`/contact`) | Formulario con `lang="en"` |

**Para páginas con componentes griegos (Baumex, etc.):**
Crear la `page.tsx` inglés importando los mismos componentes griegos. Si el componente
acepta props, pasar texto inglés. Si no, crear una copia local del componente con texto
en inglés (ej: `mu-en.tsx`). Esto solo aplica a los componentes que realmente tienen
texto visible — algunos son puramente visuales y se reusan sin cambios.

### Fase 6: Crear páginas inglés (secundarias)

| Prioridad | Páginas |
|-----------|---------|
| 8 | Resto de parques (Nelson I, Vigía I, Vigía II) |
| 9 | Resto de constructora (turnkey, engineering, etc.) |
| 10 | LEED y subpáginas |
| 11 | Experiencia (3 páginas) |
| 12 | About (difference, leadership, track-record) |
| 13 | Inventario (naves, terrenos) |

### Fase 7: Crear páginas inglés (terciarias)

| Prioridad | Páginas |
|-----------|---------|
| 14 | Legal (privacy, terms, cookies) |
| 15 | Thank you page |
| 16 | Resources |

### Fase 8: SEO final y verificación

1. **Actualizar `sitemap.ts`** — rutas en ambos idiomas con alternates
2. **Verificar redirects** — todas las rutas viejas redirigen correctamente
3. **QA** — verificar con el inventario que toda ruta pública tiene canonical,
   alternates y hreflang correctos
4. **Limpiar** — eliminar `src/app/en/` (página de prueba vieja),
   eliminar `Header-en.tsx` (absorbido en `Header.tsx`)

---

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Rutas rotas al mover español a `/es/` | Redirects 301 en `next.config`, inventario programático, QA |
| SEO drop por cambio de URLs | Redirects 301, `createMetadata()` (Fase 4), hreflang |
| Componentes griegos sin props | Copias locales con texto inglés donde sea necesario |
| `lang="en"` en root layout para rutas `/es/` | `SetLang` corrige a `es` en el cliente |
| Bundle inflado en Header/Footer | Selección de datos por `lang`, no import de glosario global |
| Muchas páginas a traducir | Priorización por importancia de negocio |
| Datos de Sanity en español en páginas inglés | Solo se traducen textos hardcodeados, no datos de Sanity |

---

## Fuera de Alcance

- Traducción de contenido de Sanity (blog, noticias, fichas de parques)
- Detección automática de idioma del navegador
- Tercer idioma
- Documentación interna (`docs/`)
- Propear componentes griegos individualmente
