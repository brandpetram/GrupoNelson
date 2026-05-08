---
tipo: plan
ronda: 2
reviewer: codex
fecha: 2026-05-06T07:16
---

# Review Codex r02

## Hallazgos

### 1. [Alta] El mapa de base paths en inglés todavía tiene rutas que no existen o no corresponden con la navegación real

La actualización resolvió el problema grande de normalización, pero el nuevo `CATEGORY_BASE_PATHS` introduce rutas inglesas incorrectas en las líneas 103-105:

```ts
experiencia: ['/expertise'], recursos: ['/resources', '/insights']
```

En el repo real, la categoría inglesa se llama `Experience` y sus rutas públicas son `/experience/...`, no `/expertise/...`. `src/data/nav/navigation-en.ts` también usa `/en/experience/...`, que normalizado queda `/experience/...`. Entonces una futura landing `/experience` no prendería el trigger `Experience`, justo el caso que `CATEGORY_BASE_PATHS` busca cubrir.

También `/insights` no aparece como ruta real ni como prefijo en `navigation-en.ts`. La navegación inglesa actual de Recursos usa `/en/resources` y, para blog/noticias, hrefs explícitos a `/es/blog` y `/es/noticias`. Incluir `/insights` agrega un prefijo fantasma que podría prender `Resources` en una ruta futura no relacionada con esta nav.

Recomendación: cambiar los base paths ingleses a los prefijos reales mínimos:

```ts
const CATEGORY_BASE_PATHS = lang === 'en'
  ? {
      nosotros: ['/about'],
      parques: ['/industrial-parks', '/inventory'],
      constructora: ['/construction'],
      experiencia: ['/experience'],
      recursos: ['/resources'],
    }
  : ...
```

Si se quiere que `/blog` o `/news` entren en `Resources` en inglés, eso debe decidirse explícitamente contra el modelo de contenido actual, porque hoy los links ingleses de blog/noticias apuntan a `/es/blog` y `/es/noticias`.

### 2. [Alta] La implementación móvil sigue subespecificada: no define cómo calcular `longestActiveHref` ni `active section` con la estructura actual

La sección 5 dice que `MobileMenuLink` usará:

```ts
const isVisuallyActive = href === longestActiveHref; // pasado desde el padre del dropdown móvil
```

Pero la sección 6 solo dice “Calcular si la categoría tiene algún sub-link activo” (líneas 193-195). No define el cálculo ni qué se pasa desde `MobileMenu` a cada `MobileMenuLink`.

Esto importa porque `MobileMenu` no usa claves estables de categoría; usa `section.name`, que cambia por idioma, y su data está anidada como:

- `MobileMenuSection`
- `categories`
- `links`

Para que el móvil quede consistente con desktop, el plan debe decir algo equivalente a:

```ts
const sectionHrefs = section.categories.flatMap((category) =>
  category.links.map((link) => link.href)
);
const sectionActiveHref = findLongestPrefixHref(pathname, sectionHrefs);
const isSectionActive = sectionActiveHref !== null;
```

Y dentro del submenu activo:

```tsx
const activeSectionHrefs = activeSection.categories.flatMap((category) =>
  category.links.map((link) => link.href)
);
const activeSectionLongestHref = findLongestPrefixHref(pathname, activeSectionHrefs);
...
<MobileMenuLink longestActiveHref={activeSectionLongestHref} ... />
```

Sin esa precisión, el implementador tiene que inventar el detalle durante ejecución y es fácil que el desktop quede con longest-prefix pero el móvil siga con prefix simple o con cálculo por subcategoría, reintroduciendo el doble activo de `Todos los Parques`.

### 3. [Media] La comparación visual de links debería usar normalización o la utilidad debería devolver una llave normalizada

`findLongestPrefixHref` devuelve el href original de la lista, y el plan usa `href === longestActiveHref` tanto en `ListItem` como en `MobileMenuLink` (líneas 165 y 188). Eso funciona mientras `longestActiveHref` siempre venga de la misma lista exacta que se usa para renderizar esos links.

Ese supuesto está bien en los snippets actuales, pero es frágil: si durante implementación se calcula el longest con una lista extendida que incluya base paths o hrefs normalizados, el active visual deja de prender aunque el matching sea correcto. El plan ya mete `CATEGORY_BASE_PATHS` junto con hrefs de links para categorías; conviene blindar esta diferencia.

Recomendación: elegir una de estas dos formas y documentarla:

- `findLongestPrefixHref` solo se usa con hrefs renderizados y devuelve el href original; entonces nunca mezclar `CATEGORY_BASE_PATHS` en el cálculo de sub-link activo.
- O cambiar la comparación a `normalizeNavPath(href) === normalizeNavPath(longestActiveHref)`.

Yo prefiero la segunda porque reduce el acoplamiento entre quien calcula y quien renderiza.

### 4. [Baja] El plan conserva wording viejo que puede confundir durante implementación

La línea 19 dice que aplica a `/es` y `/en` automáticamente, pero el propio plan actualizado explica que las URLs públicas inglesas ya no tienen `/en` y que `/en/:path*` redirige a `/:path*`. También la línea 199 sigue estimando “30 a 50 líneas netas”, pero el plan ahora añade archivo nuevo, normalización, longest-prefix, base paths, props nuevas para `ListItem` y `MobileMenuLink`, active state móvil y clases de trigger. Esa estimación ya quedó corta.

No bloquea, pero sí puede generar expectativas falsas. Recomiendo ajustar:

- “aplica a `/es` y a las rutas públicas inglesas sin `/en`, tolerando hrefs legacy con `/en`”.
- “entre 70 y 120 líneas netas”, o quitar el número.

## Estado de r01

Los hallazgos centrales de r01 quedaron mayormente atendidos:

- Normalización de `/es` y `/en`: resuelto conceptualmente.
- Doble activo padre/hijo: resuelto con longest-prefix, pero falta aterrizarlo bien en móvil.
- `aria-current`: resuelto con `isExactCurrent`.
- Estilo visual: mucho más concreto.

## Resumen

El plan ya está cerca de ejecutable, pero todavía dejaría dos decisiones técnicas importantes a la improvisación: corregir los base paths ingleses y especificar el cálculo móvil con la misma lógica de longest-prefix que desktop. Resolver eso debería bastar para pasar a implementación sin otra ronda larga.
