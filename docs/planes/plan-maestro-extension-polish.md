# Plan Maestro: Extensión — Polish Bilingüe

> **Estado:** Pendiente  
> **Fecha:** 2026-04-11  
> **Prerequisito:** Plan maestro original (Fases 1-7) completado  
> **Objetivo:** Cerrar los cabos sueltos que quedaron después de la traducción masiva. Nada aquí es bloqueante — el sitio bilingüe ya funciona.

---

## Fase 8: Propear componentes con labels internos en español

Componentes compartidos que se usan en páginas inglés pero tienen texto hardcodeado en español. Necesitan prop `lang` para seleccionar labels.

| Componente | Dónde se usa (inglés) | Labels en español |
|---|---|---|
| `FichaTecnicaParque` | `/industrial-parks/*` (4 páginas) | "Datos generales", "Naves disponibles", "Superficie total", "Ubicación", etc. |
| `ParkMap` | `/industrial-parks/nelson-ii` | Textos internos del mapa |
| `LeedPageLayout` | `/construction/leed/*` (7 subpáginas) | Breadcrumb "Certificación LEED", CTAs "Cotiza tu nave LEED", "Ver todos los temas LEED", links a `/constructora/leed` y `/contacto` |
| `CarruselLeed` | `/construction/leed/*` (via LeedPageLayout) | Copy de cada slide y hrefs internos en español. LeedPageLayout renderiza CarruselLeed, así que propear solo LeedPageLayout no basta. |

**Trabajo por componente:**
1. Agregar prop `lang` con default `'es'`
2. Crear objetos de datos bilingües (como se hizo en Footer y Header)
3. Actualizar las páginas inglés para pasar `lang="en"`
4. Verificar que las páginas españolas siguen funcionando sin cambios

**Clasificación:** `parametrizar + compartir` — estos componentes ya son compartidos entre ES e EN, lo correcto es agregar prop `lang`, no crear copias locales.

**Ownership por componente:**

| Componente | Ubicación | Owner |
|---|---|---|
| `FichaTecnicaParque` | `src/components/brandpetram/` | MAIN — componente compartido de sistema |
| `ParkMap` | `src/components/brandpetram/` | MAIN — componente compartido de sistema |
| `LeedPageLayout` | `src/components/brandpetram/` | MAIN — componente compartido de sistema |
| `CarruselLeed` | `src/components/brandpetram/` | MAIN — componente compartido de sistema |
| Páginas EN que pasan `lang="en"` | `src/app/(en)/industrial-parks/*`, `src/app/(en)/construction/leed/*` | Pueden editarse desde MAIN porque el cambio es solo agregar prop `lang="en"` a imports existentes |

**Secuencia:** Propear los 4 componentes primero (MAIN), luego actualizar las páginas EN para pasar `lang="en"` (mismo commit o commit separado).

**Estimación:** 4 componentes + ~11 páginas que los consumen.

---

## Fase 9: Arreglar y adoptar `createMetadata()`

El helper `src/lib/create-metadata.ts` ya existe pero tiene problemas que impiden adopción directa.

### Problemas a resolver antes de adoptar

1. **URL base inconsistente:** El helper usa `https://www.nelson.com.mx` pero el root layout usa `https://nelson.com.mx` (sin www) como `metadataBase`. Decidir cuál es canónica y unificar.

2. **No preserva metadata existente:** `createMetadata()` solo genera `title`, `description`, `alternates` y `openGraph.locale`. Pero varias páginas tienen metadata adicional que no debe perderse:
   - `robots: { index: false }` en thank-you/gracias
   - `openGraph.images` en blog/noticias
   - `twitter` card config en algunas páginas
   
   **Fix:** Usar deep merge (no spread superficial) para combinar metadata generada con metadata adicional. Un spread `{ ...generated, ...extra }` pierde propiedades anidadas — si `extra` tiene `openGraph.images` y `generated` tiene `openGraph.locale`, el spread borra `locale`. Usar una utilidad de deep merge o construir el objeto manualmente por campo:
   ```typescript
   export function createMetadata(opts: {
     lang: 'en' | 'es'
     path: string
     title: string
     description: string
     extra?: Partial<Metadata>
   }): Metadata {
     const base = { /* title, description, alternates, openGraph.locale */ }
     return {
       ...base,
       ...extra,
       openGraph: {
         ...base.openGraph,
         ...extra?.openGraph,
       },
       alternates: {
         ...base.alternates,
         ...extra?.alternates,
       },
     }
   }
   ```
   Cada campo anidado (`openGraph`, `alternates`, `robots`) se mergea por separado. Campos planos (`title`, `description`) se sobreescriben normalmente.

3. **Hreflang falso en páginas solo-español:** `toEnglish('/es/blog/mi-post')` devuelve `/` (fallback), generando un hreflang que dice "la versión inglés de este post es la home". Esto es peor que no tener hreflang.
   
   **Fix:** Solo generar alternates si `hasTranslation(path)` devuelve `true`. Páginas sin equivalente (blog/[slug], noticias/[slug], noticias/category/[category]) no reciben alternates.

### Trabajo (después de los fixes)

1. Arreglar `createMetadata()` con los 3 fixes (URL base, deep merge, hasTranslation)
2. Adoptar en páginas bilingües que tienen equivalente en route-map

### Alcance exacto

**Adoptar (páginas con equivalente en route-map):**
- 33 páginas en `(en)/` — Home, About (4), Industrial Parks (5), Construction (7 + Baumex), LEED (8), Experience (3), Inventory (2), Contact, Resources, Legal (3), Thank-you
- 33 páginas equivalentes en `es/` — las mismas secciones

**Total: 66 páginas.**

**NO adoptar:**
- `es/blog/` — index, [slug], category/[category] (3 rutas, contenido de Sanity, sin equivalente EN)
- `es/noticias/` — index, [slug], category/[category] (3 rutas, contenido de Sanity, sin equivalente EN)
- `es/contactanos/` — redirect legacy a contacto, no necesita metadata propia
- `es/gracias/` — tiene `robots: { index: false }`, no necesita hreflang
- `(en)/thank-you/` — tiene `robots: { index: false }`, no necesita hreflang
- `(dev)/*` — páginas internas (componentes, qa, proyecto, productos, dev)
- `(instrucciones)/*` — sección interna protegida
- `studio/*` — Sanity Studio

**No es un cambio mecánico** — cada página necesita verificar qué metadata extra tiene (robots, OG images, twitter) antes de migrar. Las ~66 páginas bilingües son el universo, pero cada una puede tener particularidades.

---

## Fase 10: Navegación bilingüe completa

Actualizar **todos** los puntos de navegación que todavía usan rutas hardcodeadas del esquema viejo.

### Archivos a revisar

| Archivo | Problema | Fix |
|---|---|---|
| `footer-1/index.tsx` | `footerDataEn` tiene hrefs a rutas españolas | Actualizar hrefs a rutas inglés |
| `Header.tsx` | Hardcodes de rutas en español (`/contacto`, etc.) | Ya usa `navigation.ts`/`navigation-en.ts` por lang, pero verificar el CTA de contacto y otros links directos |
| `Header-en.tsx` | Si aún existe, eliminar (absorbido en Header con prop lang) | Verificar si algo lo importa, si no → eliminar |
| `navigation-en.ts` | hrefs con prefijo `/en/` | Ya corregido en Fase 5, verificar que no regresó |
| `language-flags.tsx` | Ya conectado con route-map (Fase 11 → absorbida aquí) | ✅ Ya hecho en esta sesión |

### Findings pendientes de language-flags (Codex review 2026-04-11)

El switcher funciona para las ~33 rutas en route-map pero falla en edge cases:

1. **Blog/noticias:** No están en route-map (no tienen versión inglés). Clicar la bandera USA desde `/es/blog/*` o `/es/noticias/*` lleva a `/` en vez de indicar que no hay traducción. **Fix:** Usar `hasTranslation()` para ocultar o deshabilitar la bandera del otro idioma cuando no hay equivalente.

2. **`/es/contactanos`:** Es un redirect legacy a `/es/contacto`, pero route-map solo mapea `/es/contacto` ↔ `/contact`. Desde `/es/contactanos` la bandera lleva a `/`. **Fix:** Agregar `/es/contactanos` al route-map apuntando a `/contact`, o normalizar la URL antes de buscar en el mapa.

**Nota:** Con esta fase, el sitio ya no depende de los redirects de `next.config.ts` para navegación interna. Los redirects se mantienen solo para URLs externas/bookmarks/SEO.

**Ownership:** Todos son archivos de sistema/compartidos. Se ejecuta desde MAIN.

---

## ~~Fase 11: Language switcher con route-map~~ → ✅ COMPLETADA (absorbida en Fase 10)

`language-flags.tsx` conectado con `toSpanish`/`toEnglish` del route-map (commit 6d499ca, 2026-04-11). Los edge cases pendientes (blog/noticias sin traducción, `/es/contactanos` sin mapeo) se resuelven en Fase 10.

---

## Fase 12: QA visual bilingüe

Recorrer las páginas inglés en el navegador y verificar:

1. **Texto sin traducir** — componentes que muestran español en página inglés
2. **Links rotos** — CTAs que apuntan a páginas inexistentes o que redirigen al idioma equivocado
3. **Layout roto** — texto inglés más largo/corto que rompe el diseño
4. **Imágenes** — alt text en español en páginas inglés
5. **Formularios** — labels, placeholders, mensajes de error
6. **Mobile** — responsive en todas las páginas nuevas
7. **Hreflang** — verificar con herramienta de crawl que no hay hreflang falsos

**Prioridad de QA:**
1. Home → Contact → Industrial Parks (las más visitadas)
2. Baumex → Construction pages
3. About → Experience
4. Legal → LEED → Inventory

---

## Orden de ejecución recomendado

```
Fase 10 (Navegación bilingüe) ──── Footer, Header, cleanup Header-en
    │
Fase 8 (Propear componentes) ──── FichaTecnicaParque, ParkMap, LeedPageLayout, CarruselLeed
    │
Fase 9 (createMetadata) ──── arreglar helper + adoptar en ~66 páginas bilingües
    │
Fase 12 (QA visual) ──── manual, después de todo lo demás
```

Fase 10 y 8 son independientes y pueden hacerse en paralelo.
Fase 9 depende de que el helper esté arreglado (los 3 fixes).
Fase 12 va al final.

---

## Fuera de alcance (sin cambios respecto al plan original)

- Traducción de contenido de Sanity (blog, noticias, fichas de parques)
- Detección automática de idioma del navegador
- Tercer idioma
- Propear componentes Tier 3 individualmente (ya se hicieron copias locales en Fase 6c)
