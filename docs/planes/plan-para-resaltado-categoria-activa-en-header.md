# Plan para resaltado de categoría activa en el Header

> **Nombre corto:** "active-category breadcrumb visual" en el header del sitio.

## Contexto

Solicitud del cliente: cuando un visitante esté en una sub-ruta del sitio (por ejemplo `/construction/leed/sustainable-sites`), debería haber un indicador visual en el menú principal que muestre a qué **categoría top-level** pertenece esa página (en este caso, `Construction` debería verse iluminado / activo).

Hoy el sitio NO tiene ese marker en escritorio. La nav móvil tiene la mitad del trabajo hecho pero solo dispara el estilo activo cuando el path coincide al 100% con el `href` de un link.

## Objetivo

Agregar un estado **"categoría activa"** y **"link activo"** en el `Header.tsx`, basado en *prefix matching* del pathname:

- En desktop: el `<NavigationMenuTrigger>` correspondiente a la categoría que contiene la página actual queda resaltado.
- En desktop dentro del dropdown abierto: el sub-link específico de la página actual también queda resaltado.
- En móvil: el `<MobileMenuLink>` correspondiente queda resaltado, igual que hoy pero con prefix-match en vez de match exacto, y el tile de "categoría" en el menú principal móvil también muestra un indicador.

Bilingüe: la lógica vive en un solo `Header.tsx` y aplica al sitio en español (rutas bajo `/es/...`) y al sitio en inglés (rutas públicas en raíz, sin `/en` — `next.config.ts` redirige `/en/:path*` → `/:path*`). La utilidad `normalizeNavPath` tolera hrefs legacy con `/en` que aún existen en `navigation-en.ts`.

## Estado actual (antes del cambio)

- `Header.tsx:265` — ya hay `pathname = usePathname()`.
- `Header.tsx:458` — `MobileMenuLink` calcula `isCurrent = href === pathname || href === \`${pathname}/\``. **Match exacto, sin prefix.** Aplica clases activas (`bg-primary/10 text-primary`).
- `Header.tsx:611` — `NavMenu` (desktop). Ningún cálculo de active state. Los `<NavigationMenuTrigger>` no reciben info de pathname.
- `Header.tsx:231` (`ListItem`) — los sub-links del dropdown desktop usan `<NavigationMenuLink asChild><Link href={...}>...`. Sin cálculo de active.
- 5 categorías top-level: `Nosotros/About`, `Parques/Parks`, `Constructora/Construction`, `Experiencia/Experience`, `Recursos/Resources`.

## Propuesta técnica

### 1. Utilidad de matching

Crear archivo `src/lib/nav-active.ts` con utilidades puras. Importante: el repo tiene un mismatch real de prefijos de idioma (ver triaje hallazgo 1) que la utilidad debe resolver normalizando ambos lados antes de comparar:

```ts
// Quita /es y /en del inicio para comparar en el espacio canónico
// público (las URLs reales del sitio no tienen /en — hay redirect en
// next.config.ts; pero navigation-en.ts sí guarda hrefs con /en).
export function normalizeNavPath(p: string | null | undefined): string {
  if (!p) return '/';
  const noQs = p.split(/[?#]/)[0];
  const stripped = noQs
    .replace(/^\/es(?=\/|$)/, '')
    .replace(/^\/en(?=\/|$)/, '');
  if (stripped === '' || stripped === '/') return '/';
  // Sin trailing slash final para comparaciones uniformes.
  return stripped.replace(/\/+$/, '');
}

// Match exacto, ya normalizado.
export function isHrefExact(pathname: string, href: string): boolean {
  return normalizeNavPath(pathname) === normalizeNavPath(href);
}

// Match con prefix, ya normalizado. La barra final evita falsos
// positivos: "/construction" no matchea "/construction-x". El guard de
// href !== "/" evita que la home matchee todo.
export function isHrefActivePrefix(pathname: string, href: string): boolean {
  const p = normalizeNavPath(pathname);
  const h = normalizeNavPath(href);
  if (h === '/') return p === '/';
  return p === h || p.startsWith(`${h}/`);
}

// Una categoría está activa si CUALQUIERA de sus hrefs (sub-links + base
// paths opcionales) es prefix de la ruta actual.
export function isCategoryActive(pathname: string, hrefs: string[]): boolean {
  return hrefs.some((h) => isHrefActivePrefix(pathname, h));
}

// "longest prefix match": de la lista de hrefs visibles en un dropdown,
// devuelve el href más específico que es prefix de pathname (o null si
// ninguno). Esto evita que un padre y un hijo se prendan a la vez.
// Ejemplo: hrefs = ["/parques-industriales-mexicali",
// "/parques-industriales-mexicali/nelson-ii"], pathname =
// "/parques-industriales-mexicali/nelson-ii" → devuelve el segundo.
export function findLongestPrefixHref(pathname: string, hrefs: string[]): string | null {
  const matches = hrefs.filter((h) => isHrefActivePrefix(pathname, h));
  if (matches.length === 0) return null;
  return matches.reduce((a, b) =>
    normalizeNavPath(a).length >= normalizeNavPath(b).length ? a : b
  );
}
```

Edge cases cubiertos:
- Trailing slash en `pathname` o en `href`.
- `href === "/"` (home).
- Querystring/hash en `pathname`: `normalizeNavPath` los recorta.
- `/es` y `/en` en cualquiera de los lados.
- Padres y hijos en la misma lista: `findLongestPrefixHref` resuelve qué se pinta como activo.

### 2. Detección de categoría activa en desktop

En `NavMenu`, después de `buildNavLinks(lang)`. Se incluyen **base paths por categoría** (no solo sub-links) para cubrir landings top-level si llegaran a existir en el futuro y para que rutas profundas que no están en el dropdown — como `/construction/leed/sustainable-sites` — prendan el trigger correspondiente:

```ts
const pathname = usePathname();

// Base paths por idioma. Hoy estas landings no tienen page.tsx, pero
// declararlas hace el plan robusto contra rutas profundas que no están
// como sub-links en el dropdown (ej: /construction/leed/<slug>).
const CATEGORY_BASE_PATHS = lang === 'en'
  ? { nosotros: ['/about'], parques: ['/industrial-parks', '/inventory'], constructora: ['/construction'], experiencia: ['/experience'], recursos: ['/resources'] }
  : { nosotros: ['/nelson'], parques: ['/parques-industriales-mexicali', '/inventario'], constructora: ['/constructora'], experiencia: ['/experiencia'], recursos: ['/recursos'] };

const categoryHrefs = {
  nosotros: [...CATEGORY_BASE_PATHS.nosotros, ...whyNelsonLinks.map((l) => l.href)],
  parques: [...CATEGORY_BASE_PATHS.parques, ...parksMexicaliLinks.map((l) => l.href), ...parksInventoryLinks.map((l) => l.href)],
  constructora: [...CATEGORY_BASE_PATHS.constructora, ...solutionsServicesLinks.map((l) => l.href), ...solutionsIndustryLinks.map((l) => l.href)],
  experiencia: [...CATEGORY_BASE_PATHS.experiencia, ...expertiseCapabilitiesLinks.map((l) => l.href), ...expertiseStandardsLinks.map((l) => l.href)],
  recursos: [...CATEGORY_BASE_PATHS.recursos, ...insightsLearnLinks.map((l) => l.href), ...insightsConnectLinks.map((l) => l.href)],
};

const activeCategory = (Object.keys(categoryHrefs) as Array<keyof typeof categoryHrefs>)
  .find((k) => isCategoryActive(pathname, categoryHrefs[k])) ?? null;

// Por dropdown: cuál es el longest-prefix-match para iluminar UN solo sub-link.
const longestParques = findLongestPrefixHref(pathname, [...parksMexicaliLinks, ...parksInventoryLinks].map((l) => l.href));
// ... idem para las otras 4 categorías.
```

Luego pasar `data-active={activeCategory === 'constructora'}` al trigger correspondiente, y `longestActiveHref={longestParques}` al `<ListItem>` dentro del dropdown de Parques.

### 3. Estilo visual del activo

Decidido: **underline tipo tab activo, implementado con un pseudo-elemento `after:` posicionado**, no con `border-b` ni con la utilidad `underline`.

Razones (ver triaje hallazgo 5):
- `border-b` mueve layout 2px hacia arriba si no se reserva espacio en los inactivos.
- `underline` se ve inconsistente sobre texto en mayúsculas con tracking amplio (que es lo que tiene la nav).
- `after:absolute` es controlable, no afecta layout y se ve igual en los 3 estados visuales del trigger.

Implementación en el `<NavigationMenuTrigger>` activo:

```ts
className={cn(
  // Reservar espacio relativo + after layer
  'relative',
  // Subrayado visible solo cuando data-active está presente
  isActive && [
    'after:absolute after:left-3 after:right-3 after:bottom-1',
    'after:h-0.5 after:rounded-full',
    'after:bg-primary',
    // Cubre los 3 estados visuales del header sin pelear con las
    // clases globales **:data-[slot=...] de NavMenu.
    'data-[state=open]:after:bg-primary',
  ].join(' ')
)}
```

Los 3 estados visuales del header (light, dark, scrolled) NO afectan el color del subrayado porque `--primary` es un token consistente. Si en `dark` se ve poco contraste, intercambiar por `after:bg-blue-400` solo en `dark` con el modificador correspondiente. Validación visual obligatoria en localhost antes de commit.

### 4. Sub-link activo dentro del dropdown

`ListItem` debe distinguir dos flags (semántica accesible vs. estilo visual):

- **`isExactCurrent`** → para `aria-current="page"`. Solo cuando el href ES la página actual.
- **`isVisuallyActive`** → para el estilo visual. Verdadero solo si el href es el "longest prefix match" dentro de los hrefs visibles del dropdown abierto. Eso evita que en `/.../nelson-ii` se prendan a la vez "Parque Nelson II" y "Todos los Parques".

```ts
function ListItem({ title, description, children, href, longestActiveHref }: ListItemProps & { longestActiveHref: string | null }) {
  const pathname = usePathname();
  const isExactCurrent = isHrefExact(pathname, href);
  // Comparar normalizando ambos lados — desacopla "quien calcula"
  // (puede mezclar base paths y hrefs con/sin /en) de "quien renderiza".
  const isVisuallyActive =
    longestActiveHref !== null &&
    normalizeNavPath(href) === normalizeNavPath(longestActiveHref);
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          aria-current={isExactCurrent ? 'page' : undefined}
          className={cn(
            'grid grid-cols-[auto_1fr] gap-3',
            isVisuallyActive && 'bg-primary/5 ring-1 ring-primary/15 rounded-md'
          )}
        >
          ...
```

Por categoría, `NavMenu` calcula UNA sola vez `longestActiveHref` con todos los hrefs visibles del dropdown (incluyendo ambas columnas si las hay) y lo pasa al `<ListItem>` correspondiente. Para subrutas que no están en el dropdown (ej: `/construction/leed/sustainable-sites` cuando solo `/construction/leed` está como sub-link), el ancestro más cercano se ilumina — comportamiento deseado de "breadcrumb visual".

### 5. MobileMenuLink: separar exact y prefix

Reemplazar `Header.tsx:458` con dos flags:

```ts
const isExactCurrent = isHrefExact(pathname, href);
const isVisuallyActive =
  longestActiveHref !== null &&
  normalizeNavPath(href) === normalizeNavPath(longestActiveHref);
```

`aria-current="page"` solo cuando exact. El `closeMenu()` al click sigue usando `isExactCurrent` (cerrar solo si ya estás ahí). Las clases activas existentes (`bg-primary/10 text-primary`) se aplican con `isVisuallyActive`. `longestActiveHref` se calcula en `MobileMenu` y se propaga a cada `MobileMenuLink` (ver sección 6).

### 6. Categoría activa en menú móvil principal

En `MobileMenu` (línea 501) los botones de categoría (`<button onClick={() => setActiveSubmenu(section.name)}>`) no tienen estado activo hoy. Cálculo concreto, igual a desktop pero anidado por `MobileMenuSection` (que tiene `categories` que tienen `links`):

```ts
// En MobileMenu, antes del map de secciones:
const sectionStates = mobileMenuData.map((section) => {
  const sectionHrefs = section.categories.flatMap((c) => c.links.map((l) => l.href));
  const longestHref = findLongestPrefixHref(pathname, sectionHrefs);
  return { section, longestHref, isActive: longestHref !== null };
});
```

En el render, el botón de categoría usa `sectionStates[index].isActive` para mostrar un indicador (recomendado: punto azul sólido al inicio del nombre o el mismo `after:absolute` del trigger desktop, para mantener un solo lenguaje visual).

Cuando se entra al submenu (`activeSubmenu === section.name`), pasar el `longestHref` precalculado a cada `MobileMenuLink`:

```tsx
const activeSectionState = sectionStates.find(
  (s) => s.section.name === activeSubmenu
);
// dentro del map de links del submenu activo:
<MobileMenuLink
  longestActiveHref={activeSectionState?.longestHref ?? null}
  href={link.href}
  ...
/>
```

Resultado: en `nelson-ii`, la sección móvil "Parques" muestra el indicador en el botón principal, y al entrar al submenu solo "Nelson II" se ilumina (no "Todos los Parques"), mismo comportamiento que desktop.

## Archivos a tocar

- `src/components/Header.tsx` — cambios principales (estimado 70–120 líneas netas: cálculo de categoría activa en `NavMenu`, `longestActiveHref` por dropdown, `ListItem` con dos flags, `MobileMenu` con `sectionStates`, `MobileMenuLink` con dos flags, clases de trigger activo). Ningún breaking change.
- `src/lib/nav-active.ts` — archivo nuevo con las 3 utilidades puras (opcional; si Luis prefiere, se inlinea en Header).

No se tocan:
- `src/data/nav/navigation.ts` ni `navigation-en.ts` — la estructura de datos no cambia, solo se lee.
- Ningún otro componente.

## Casos de aceptación

Probar manualmente. Slugs corregidos contra el repo real (ver triaje hallazgo 1):

| Ruta pública (lo que ve el usuario) | Categoría activa esperada | Sub-link activo (longest prefix) | Notas |
|---|---|---|---|
| `/es` | ninguna (home) | ninguno | |
| `/` | ninguna (home) | ninguno | |
| `/es/constructora/build-to-suit` | `Constructora` | `Build-to-suit` (href `/constructora/build-to-suit`) | Mismatch ES: pathname trae `/es`, href no |
| `/construction/engineering-design` | `Construction` | `Engineering Design` (href `/en/construction/engineering-design`) | Mismatch EN: pathname sin `/en`, href con `/en` |
| `/construction/leed/sustainable-sites` | `Construction` | `LEED Certification` (href `/en/construction/leed`) | Sub-ruta NO está en dropdown; ancestro más cercano gana |
| `/es/parques-industriales-mexicali/nelson-ii` | `Parques` | `Nelson II` únicamente — **no** `Todos los Parques` | Verifica que `findLongestPrefixHref` evita el doble activo |
| `/es/nelson/trayectoria` | `Nosotros` | `Trayectoria` | |
| `/contacto` | ninguna (no hay trigger "Contacto" en nav top-level; el botón CTA es separado) | n/a | |
| `/es/constructora` (si existiera page.tsx) | `Constructora` | ninguno (no hay landing en sub-links) | Cubierto por `CATEGORY_BASE_PATHS` |
| `/es/parques-industriales-mexicali` | `Parques` | `Todos los Parques` (longest prefix exacto) | Sí debe pintarse aquí |

## Tradeoffs y decisiones

- **(tradeoff acknowledged) `Contacto` en la cabecera es CTA, no categoría.** Se decide no resaltar el CTA cuando estás en `/contacto` para no romper la jerarquía visual. Si el cliente lo pide, se agrega después.
- **(tradeoff acknowledged) Posible dependencia con futura ruta dinámica `/construction/[slug]`.** El prefix match ya cubre cualquier ruta hija, así que no requiere mantenimiento por ruta nueva — solo añadir el href base a los datos de nav cuando exista.
- **(tradeoff acknowledged) Hash/querystring no soportados en el plan inicial.** Si en el futuro hubiera links a `/page#section` y se usaran como hrefs de nav, hacer `pathname.split(/[?#]/)[0]` en la utilidad. Hoy no aplica.
- **(edge case) Home (`/` y `/es`) no marca nada.** Es el comportamiento que esperan los usuarios — la home no es "una categoría".
- **(nit) Color del underline.** Si Luis prefiere un azul más oscuro o una línea naranja para diferenciar, es un cambio de un solo token (`decoration-primary` vs `decoration-blue-700`). No afecta arquitectura.

## Fuera de alcance

- Migas de pan (breadcrumbs) reales con jerarquía completa al estilo `Home > Construction > LEED > Sustainable Sites`. El cliente describió "una especie de breadcrumb visual simplificado", lo que se interpreta como **active-state en la nav principal**, no como un componente de breadcrumbs separado.
- Active-state en el footer.
- Animación al cambiar de categoría (puede agregarse después con `transition-colors` que ya está en la nav).

## Riesgo

Bajo:
- Cambio aislado a `Header.tsx`.
- No toca lógica de routing ni de SSR.
- El `usePathname()` ya está en uso, así que no se introducen hooks nuevos.
- Si rompe algo visualmente, el revert es trivial (mismo archivo).

## Siguiente paso

1. Que Luis revise este plan.
2. Reviews externos con Codex y/o Gemini.
3. Triaje de hallazgos.
4. Decidir entre las opciones (a/b/c) de estilo visual.
5. Implementar y verificar contra la tabla de "Casos de aceptación" en localhost antes del commit.

---

## Triaje review r01-codex

Archivo: `plan-para-resaltado-categoria-activa-en-header.reviews/plan-r01-codex.md`.

Antes de triar verifiqué los puntos contra el repo real:
- `navigation.ts` (ES): hrefs sin `/es`. Confirmado.
- `navigation-en.ts` (EN): hrefs con `/en`. Confirmado.
- `next.config.ts`: redirige `/en/:path*` → `/:path*`. Confirmado.
- Slug real `engineering-design` (no `design-and-engineering`). Confirmado.
- No existen `page.tsx` en `/construction` ni `/es/constructora` hoy.
- `/parques-industriales-mexicali` está en `parksInventoryLinks` y `/parques-industriales-mexicali/nelson-ii` en `parksMexicaliLinks` → ambos prenderían en `nelson-ii` con prefix simple. Confirmado.

### Hallazgo 1 — Desalineación de prefijos de idioma → **relevante**

Cierto al 100%. Sin normalización el plan no funciona. **Resuelto en plan**: agregada función `normalizeNavPath(p)` que recorta `/es` y `/en` antes de comparar (sección "1. Utilidad de matching"). Slug corregido (`engineering-design`) en la tabla de casos de aceptación.

### Hallazgo 2 — Múltiples sub-links activos por padre/hijo → **relevante**

Cierto. **Resuelto en plan**: agregada utilidad `findLongestPrefixHref(pathname, hrefs)` que devuelve solo el href más específico. El `<ListItem>` recibe `longestActiveHref` desde `NavMenu` y compara por igualdad simple, no por prefix. Caso de aceptación añadido para `nelson-ii` que valida que **NO** se ilumine también `Todos los Parques`.

### Hallazgo 3 — Landings de categoría no cubiertas → **edge case con mitigación preventiva**

Hoy no existen `page.tsx` directos en `/construction`, `/es/constructora`, `/es/experiencia`, `/experience`, etc. Si se creara una landing, con prefix-match y solo sub-links no prendería el trigger.

**Resuelto en plan** de forma preventiva: agregado mapa `CATEGORY_BASE_PATHS` con los segmentos raíz por idioma. Ese mapa también es el mecanismo que cubre rutas profundas que no están en el dropdown (ej. `/construction/leed/sustainable-sites`). Costo: 5 líneas declarativas.

### Hallazgo 4 — `aria-current="page"` no debe seguir prefix → **relevante**

Cierto. Una página ancestro no es la página actual. **Resuelto en plan**: separación explícita entre `isExactCurrent` (alimenta `aria-current="page"` y la lógica de `closeMenu()` en móvil) y `isVisuallyActive` (alimenta el estilo). Aplicado en `<ListItem>` y `<MobileMenuLink>`.

### Hallazgo 5 — Estilo visual debe respetar 3 estados del header → **relevante**

Cierto. La nav usa selectores globales `**:data-[slot=navigation-menu-trigger]:...` que pueden anular clases ingenuas, y los 3 estados (light, dark, scrolled) requieren validación.

**Resuelto en plan**: cambié la recomendación visual de `border-b` / `underline` a `after:absolute` (sección "3. Estilo visual"), con justificación. Validación visual obligatoria en los 3 estados antes del commit, agregada al checklist.

### Preguntas abiertas que dejó Codex (necesitan input de Luis)

1. **¿Corregir `navigation-en.ts` para quitar `/en` ahora, o solo normalizar en runtime?** — Recomiendo **solo normalizar en runtime** en este plan, porque: (a) acotamos el scope, (b) cualquier consumidor de `navigation-en.ts` que esté usando `/en` directamente seguiría funcionando, (c) la limpieza de `/en` puede ser un plan separado. Tradeoff: la utilidad `normalizeNavPath` es la fuente de verdad — si después se limpia el data, hay que verificar que la utilidad tampoco sobre-normalice.
2. **En subrutas LEED no listadas (`/construction/leed/sustainable-sites`), ¿`LEED Certification` se ilumina como ancestro?** — Sí. `findLongestPrefixHref` lo logra naturalmente sin código extra. Esto es lo que el cliente describió como "breadcrumb visual simplificado".
3. **En `nelson-ii`, ¿"Todos los Parques" permanece neutral?** — Sí. `findLongestPrefixHref` resuelve a favor del más específico.

### Estado del plan tras r01

- 4 de 5 hallazgos eran **relevante** y están resueltos en el plan.
- 1 hallazgo era **edge case** (landings no existen hoy) y se cubrió de forma preventiva.
- 3 preguntas abiertas: 1 requiere decisión de Luis (la #1), las otras 2 ya tienen respuesta dentro del plan.

Según el flujo, **sigo iterando** mientras haya hallazgos `relevante` sin resolver. En este momento todos están resueltos en el plan, pero la actualización todavía no fue revisada — tiene sentido pasar el plan actualizado por una segunda ronda (Codex r02 o Gemini r01) antes de implementar, especialmente para verificar que la solución de normalización en runtime no introduce nuevos edge cases.

---

## Triaje review r02-codex

Archivo: `plan-para-resaltado-categoria-activa-en-header.reviews/plan-r02-codex.md`.

Verifiqué hallazgo 1 contra `navigation-en.ts`: confirmado que la categoría real es `/en/experience/...` (no `/expertise`) y que `/insights` no existe — ambos los puse mal en r01.

### Hallazgo 1 — Base paths EN incorrectos (`/expertise`, `/insights`) → **relevante**

Cierto. Error mío en la primera versión. **Resuelto en plan**: `/expertise` → `/experience`, eliminado `/insights`. Quedó `recursos: ['/resources']` solamente. Si en algún momento se decide que `/blog` o `/news` formen parte de Resources en EN, se decide explícitamente y se agrega; hoy no aplica.

### Hallazgo 2 — Cálculo móvil subespecificado → **relevante**

Cierto. La sección 6 era hand-wavy ("calcular si la categoría tiene algún sub-link activo"). **Resuelto en plan**: la sección 6 ahora trae código concreto que precalcula `sectionStates` con `findLongestPrefixHref` por sección, y propaga `longestActiveHref` al `MobileMenuLink` activo en el submenu. Mismo lenguaje que desktop, sin reintroducir doble activo en móvil.

### Hallazgo 3 — Comparación visual debería usar normalización → **relevante** (preventivo)

Cierto. Si en algún punto `findLongestPrefixHref` se llamara con una lista que mezcle base paths y hrefs legacy con `/en`, el valor devuelto podría no ser idéntico al `href` que rendiriza el `<ListItem>`, y `===` simple fallaría silenciosamente. **Resuelto en plan**: en `<ListItem>` y `<MobileMenuLink>` la comparación es ahora `normalizeNavPath(href) === normalizeNavPath(longestActiveHref)`. Desacopla quien calcula de quien renderiza.

### Hallazgo 4 — Wording viejo (estimación de líneas, frase "/es y /en") → **nit que vale arreglar**

Codex tiene razón en que puede confundir al implementador. **Resuelto en plan**: actualizada la frase "aplica a /es y /en automáticamente" para reflejar que `/en` no es público y que `normalizeNavPath` tolera los hrefs legacy. Estimación de líneas actualizada a 70–120 con desglose de cambios.

### Estado del plan tras r02

- 4 de 4 hallazgos eran **relevante** o **nit que vale arreglar**, todos resueltos.
- Codex en su resumen dice "el plan ya está cerca de ejecutable... resolver eso debería bastar para pasar a implementación sin otra ronda larga". Resueltos los dos puntos centrales (base paths EN y cálculo móvil), el plan queda listo para ejecución.

Según el criterio del flujo (dejar de iterar cuando ya no quedan hallazgos `relevante` sin resolver), el plan **ya cumple para pasar a implementación**. La decisión es de Luis: pasar a paso 6 (ejecución) o pedir una ronda más (Codex r03 o Gemini r01) antes de codear.

---

## Triaje review r03-codex

Archivo: `plan-para-resaltado-categoria-activa-en-header.reviews/plan-r03-codex.md`.

### Hallazgo único — Asimetría desktop/móvil con `CATEGORY_BASE_PATHS` → **edge case + tradeoff acknowledged**

Cierto. Desktop construye `categoryHrefs` mezclando `CATEGORY_BASE_PATHS` con los hrefs renderizados, así que si en el futuro se crea una landing top-level (`/es/constructora`, `/construction`, etc.), el trigger desktop sí prende. En móvil, `sectionStates` se calcula solo desde links renderizados, por lo que el tile móvil de la categoría correspondiente NO prendería en esa misma landing futura.

**Decisión**: dejarlo como **edge case aceptado** y no bloquear implementación. Razones:

- Hoy no existen `page.tsx` en esas rutas; la asimetría no afecta ningún caso de aceptación actual.
- Las rutas profundas reales (ej: `/construction/leed/sustainable-sites`) sí quedan cubiertas en móvil porque su ancestro `/construction/leed` está renderizado como sub-link.
- Codex recomendó explícitamente dejarlo como edge case salvo que se quiera paridad preventiva. Luis confirmó "no bloquear por eso".
- Costo de fix: extender `MobileMenuSection` con una llave estable de categoría que mapee a `CATEGORY_BASE_PATHS`. Es ~5 líneas pero introduce nueva estructura de datos que solo paga cuando exista una landing — dinero que no está pidiéndose hoy.

**Si en el futuro** se crea una landing top-level y se nota que el tile móvil no se ilumina, el fix es: agregar `key: 'constructora' | 'parques' | ...` a `MobileMenuSection`, leer `CATEGORY_BASE_PATHS[section.key]` al armar `sectionHrefs`, y listo.

### Estado del plan tras r03

- 0 hallazgos `relevante` sin resolver.
- 1 `edge case + tradeoff acknowledged` (asimetría móvil).
- Codex resumen: "el plan está suficientemente aterrizado para pasar a ejecución".

**Decisión: pasar a paso 6 (ejecución).**

---

## Bitácora de ejecución (paso 6)

Anotar aquí cómo avanza la implementación: ✅ hecho · ❌ saltado (con motivo) · 📍 decisión nueva tomada en vivo.

### Etapa 1 (única) — 2026-05-07

- ✅ Creado `src/lib/nav-active.ts` con `normalizeNavPath`, `isHrefExact`, `isHrefActivePrefix`, `isCategoryActive`, `findLongestPrefixHref`. Funciones puras, las dos últimas aceptan `readonly string[]` para tolerar `as const`.
- ✅ `Header.tsx` import añadido.
- ✅ `ListItem` reescrito con dos props nuevas (`pathname`, `longestActiveHref`), separación `isExactCurrent` (alimenta `aria-current="page"`) vs `isVisuallyActive` (compara con `normalizeNavPath` en ambos lados, alimenta el estilo). Estilo activo: bg/ring/text con `--primary`.
- ✅ `NavMenu` calcula `pathname`, `CATEGORY_BASE_PATHS` por idioma, `categoryHrefs`, `activeCategory`, y 5 `longest*` (uno por dropdown).
- ✅ Trigger activo via `triggerActiveClass` con `after:absolute` (pseudo-elemento, no `border-b` ni `underline`). Aplicado a los 5 `<NavigationMenuTrigger>` con `cn(activeCategory === '<X>' && triggerActiveClass)`.
- ✅ 9 `<ListItem>` actualizados con `pathname={pathname}` y `longestActiveHref={longest<X>}` correspondiente.
- ✅ `MobileMenuLink` reescrito igual que `ListItem` (dos flags, comparación normalizada).
- ✅ `MobileMenu` calcula `sectionStates` (longest-prefix por sección) y propaga `activeSectionState.longestHref` al `MobileMenuLink` activo. Botones de categoría móvil muestran punto azul + `text-primary` cuando `isActive`.
- ✅ `pnpm tsc --noEmit` pasa limpio.
- 📍 Decisión en vivo: en `nav-active.ts`, las firmas de `isCategoryActive` y `findLongestPrefixHref` aceptan `readonly string[]` (no `string[]`) para tolerar el `categoryHrefs` que se construye con `as const`. Mejor que quitar el `as const`.
- 📍 Decisión en vivo: para el indicador del botón de categoría móvil opté por un punto azul de 1.5px junto al nombre, no `after:absolute`. La opción `after:absolute` se eligió en el plan para los triggers desktop porque ahí pelea con clases globales del NavigationMenu; en móvil son `<button>` simples y un punto es más legible que un underline en un botón fullwidth.

Pendiente: validación visual en localhost en los 3 estados (light, dark, scrolled) y en las rutas de la tabla de "Casos de aceptación". Sin commit aún — espera review del diff por parte de Luis.

### Triaje review e01-r01-codex

Archivo: `plan-para-resaltado-categoria-activa-en-header.reviews/e01-r01-codex.md`.

- **Sin hallazgos funcionales que bloqueen.** Codex validó cobertura completa: normalización, `activeCategory` con base paths + hrefs renderizados, longest-prefix por dropdown, separación `aria-current` exacto vs visual, edge case móvil documentado.
- **Hallazgo único [Baja / scope]**: el diff incluye `src/components/brandpetram/scroll-storytelling.tsx` (atributos `data-component*` agregados por linter automático del proyecto). Fuera de alcance del plan. → **scope drift, no funcional**. Plan: excluir del commit con `git add` selectivo (no descartar el cambio — el linter lo regeneraría; simplemente dejarlo sin stagear).
- **Verificación**: `pnpm exec tsc --noEmit` pasó. `pnpm lint` está roto en el repo (script `next lint` interpreta `lint` como directorio); no aplica para este trabajo.
- **Pendiente antes del commit**: Luis valida visualmente contra los casos de aceptación.

### Ajuste post-review (mismo día)

- 📍 Luis pidió línea más delgada en el trigger activo. Cambiado `after:h-0.5` (2px) → `after:h-px` (1px). No requiere otra ronda de review — cambio de un token visual.
