---
tipo: plan
ronda: 1
reviewer: codex
fecha: 2026-05-06T06:57
---

# Review Codex r01

## Hallazgos

### 1. [Alta] El matching propuesto no matchea las rutas reales por desalineación de prefijos de idioma

El plan basa todo en `isHrefActivePrefix(pathname, href)` comparando strings crudos (líneas 35-52, 64-75). Eso falla contra el estado real del repo:

- En español, `usePathname()` devuelve rutas reales bajo `/es/...`, por ejemplo `/es/constructora/build-to-suit`.
- Pero `src/data/nav/navigation.ts` guarda hrefs sin `/es`, por ejemplo `/constructora/build-to-suit`.
- En inglés, las páginas viven en el route group `(en)`, por tanto la URL pública es `/construction/...`, pero `src/data/nav/navigation-en.ts` todavía guarda hrefs con `/en/...`.
- `next.config.ts` además redirige `/en/:path*` hacia `/:path*`, confirmando que `/en` no es el espacio canónico público.

Con el plan tal cual, estos casos de aceptación no prenderían:

- línea 135: `/es/constructora/build-to-suit` vs href `/constructora/build-to-suit`.
- línea 136: `/construction/design-and-engineering` ni siquiera coincide con el slug real del repo, que es `/construction/engineering-design`; además los hrefs ingleses están como `/en/construction/engineering-design`.
- línea 137: `/es/parques-industriales-mexicali/nelson-ii` vs href `/parques-industriales-mexicali/nelson-ii`.
- línea 138: `/es/nelson/trayectoria` vs href `/nelson/trayectoria`.

Recomendación: el plan debe agregar explícitamente una normalización antes de comparar, no solo una utilidad de prefix match. Por ejemplo: normalizar `pathname` y `href` al espacio canónico público, removiendo `/es` para comparar navegación española y removiendo `/en` para compatibilidad con `navigation-en.ts`, o bien corregir los hrefs de nav data como parte del alcance. Si se elige no tocar nav data, la utilidad debe aceptar `lang` o tener una función `normalizeNavPath(path)`.

### 2. [Alta] El prefix match marcaría más de un sub-link como activo cuando hay links padre e hijo en la misma categoría

La propuesta usa `isHrefActivePrefix` también para `ListItem` (líneas 91-107), pero hay hrefs que son prefijo de otros hrefs en la misma lista. Ejemplo real: `parksInventoryLinks` contiene `/parques-industriales-mexicali` ("Todos los Parques") y `parksMexicaliLinks` contiene `/parques-industriales-mexicali/nelson-ii`.

En la ruta `/es/parques-industriales-mexicali/nelson-ii`, después de resolver el problema de prefijos, quedarían activos al menos:

- `Parque Nelson II`
- `Todos los Parques`

Esto contradice el caso de aceptación de la línea 137, que espera un sub-link específico. También puede afectar rutas LEED: en `/construction/leed/sustainable-sites`, el link `/construction/leed` puede ser un padre legítimo, pero el plan no define si debe marcarse el padre, un hijo que no existe en el dropdown, o ambos.

Recomendación: separar dos conceptos:

- `isCategoryActive`: puede usar prefix.
- `isLinkCurrent`: debe ser exact match o "best/longest prefix match" dentro de todos los links visibles de la categoría.

Si se quiere que links padre como `LEED Certification` indiquen subpáginas LEED, documentar esa excepción. Para el resto, especialmente "Todos los Parques", evitar múltiples activos.

### 3. [Media] Las páginas landing de categoría no quedan cubiertas

La categoría activa se calcula solo a partir de sub-links (líneas 64-75). Eso no marca landings top-level como:

- `/es/constructora`
- `/construction`
- `/es/experiencia`
- `/experience`
- `/es/inventario` si se considera parte de `Parques`

El objetivo habla de categoría top-level activa, no solo de sublinks. Como las categorías del desktop son triggers sin `href`, la única forma de cubrir landings es incluir explícitamente los base paths de cada categoría en `categoryHrefs` o definir una tabla de prefixes por sección.

Recomendación: agregar casos de aceptación para landings de categoría y decidir si deben prender el trigger. Si sí, incluir base paths normalizados por idioma.

### 4. [Media] `aria-current="page"` no debería seguir el mismo criterio visual de prefix

El plan pone `aria-current={isActive ? 'page' : undefined}` usando prefix match en `ListItem` (líneas 95-103) y propone lo mismo para `MobileMenuLink` al reemplazar `isCurrent` por prefix (líneas 111-113). En rutas descendientes, un link ancestro no es la página actual. Esto produciría semántica incorrecta, por ejemplo `LEED Certification` con `aria-current="page"` en `/construction/leed/sustainable-sites`.

Recomendación: usar dos flags:

- `isExactCurrent` para `aria-current="page"` y para cerrar menú cuando el link exacto ya es la página.
- `isVisuallyActive` para el estado visual de categoría/ancestro cuando aplica.

### 5. [Media] La opción visual elegida necesita bajar a una regla concreta para no pelear con las clases globales del `NavigationMenu`

El plan recomienda underline (líneas 79-87) y luego dice pasar `data-active` al trigger (línea 77), pero `NavMenu` aplica estilos globales con selectores tipo `**:data-[slot=navigation-menu-trigger]:...`, además de estados `data-[state=open]` e `in-data-scrolled`. Si se agrega una clase ingenua, puede quedar anulada o comportarse distinto entre header oscuro, header claro y scrolled.

Recomendación: el plan debe fijar una implementación concreta para trigger activo en los tres estados:

- light inicial
- dark inicial
- scrolled

Y debe especificar si el underline viene con `after:` pseudo-elemento, `border-b`, o `underline`. `border-b` puede mover layout si no se reserva espacio; `underline` puede verse inconsistente con mayúsculas y tracking. Un `after:absolute` suele ser más controlable aquí.

## Preguntas abiertas

- ¿Queremos corregir `navigation-en.ts` para quitar `/en` como parte de este trabajo, o solo normalizar dentro del active-state para mantener el cambio acotado?
- En subrutas LEED que no existen en el dropdown, ¿debe marcarse `LEED Certification` como sub-link activo, o solo el trigger `Construction`?
- En `/es/parques-industriales-mexicali/nelson-ii`, ¿"Todos los Parques" debe permanecer neutral aunque comparta prefijo?

## Resumen

El objetivo es correcto, pero el plan todavía no es ejecutable con bajo riesgo porque omite la normalización de rutas real del proyecto. Ese es el bloqueo principal. Después conviene precisar la diferencia entre categoría activa, link exacto y link ancestro para evitar dobles activos y `aria-current` incorrecto.
