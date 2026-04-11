# Plan Maestro: Extensión — Polish Bilingüe

> **Estado:** En progreso — Fases 8-11 completadas, Fases 12-14 pendientes  
> **Fecha:** 2026-04-11  
> **Prerequisito:** Plan maestro original (Fases 1-7) completado  
> **Objetivo:** Cerrar los cabos sueltos que quedaron después de la traducción masiva.

---

## Resumen de estado

| Fase | Descripción | Estado |
|---|---|---|
| 8 | Propear FichaTecnicaParque, ParkMap, LeedPageLayout, CarruselLeed | ✅ COMPLETADA |
| 9 | Arreglar y adoptar createMetadata en 72 páginas | ✅ COMPLETADA |
| 10 | Navegación bilingüe (Footer, Header-en cleanup) | ✅ COMPLETADA |
| 11 | Language switcher con route-map | ✅ COMPLETADA |
| 12 | Auditoría de texto español residual + imágenes rotas | ✅ INVENTARIO HECHO — pendiente ejecutar fixes |
| 13 | Propear 100% de componentes usados en páginas EN | ⏸ DECISIÓN PENDIENTE (¿antes o después de terminar?) |
| 14 | QA visual bilingüe | ❌ PENDIENTE |

---

## Fase 8: Propear componentes con labels internos en español — ✅ COMPLETADA

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

**Ownership — dos pasos separados:**

**Paso 0 — Prerequisito: actualizar ownership canónico.**

El mapa de ownership actual clasifica `ParkMap` como exclusivo de Nelson II y `LeedPageLayout`/`CarruselLeed` como propiedad de la familia LEED. Con la versión bilingüe, estos componentes ahora se usan desde dos route groups (`es/` y `(en)/`), lo que los convierte de facto en compartidos. Antes de propearlos desde MAIN, hay que:

1. Actualizar el ownership-map para reclasificar estos componentes como compartidos/sistema
2. Documentar la razón: son consumidos por páginas en ambos idiomas, propearlos desde una sección rompe el otro consumidor

Si no se quiere reclasificar, el trabajo de propear se hace desde el owner actual de cada componente, no desde MAIN.

**Paso 1 — Owner correspondiente (solo después de paso 0):** Propear los componentes. Si paso 0 los reclasifica como compartidos → MAIN. Si no → el owner actual de cada componente propea el suyo.

| Componente | Ubicación | Owner actual | Owner propuesto |
|---|---|---|---|
| `FichaTecnicaParque` | `src/components/brandpetram/` | Compartido (ya es sistema) | Sin cambio |
| `ParkMap` | `src/components/brandpetram/` | Nelson II (exclusivo) | Compartido — lo usan 4 parks EN + 4 parks ES |
| `LeedPageLayout` | `src/components/brandpetram/` | Familia LEED | Compartido — lo usan 8 LEED EN + 8 LEED ES |
| `CarruselLeed` | `src/components/brandpetram/` | Familia LEED | Compartido — renderizado por LeedPageLayout |

Después de este paso, las páginas españolas siguen funcionando (default `'es'`) y las inglés siguen mostrando labels en español (no pasan `lang`). No hay regresión.

**Paso 2 — Sección (en):** Actualizar las páginas inglés para pasar `lang="en"` a los componentes propeados. Esto es trabajo de sección — los archivos viven en `src/app/(en)/`. Se ejecuta desde un worktree de sección o como agente con isolation worktree.

| Sección | Páginas afectadas |
|---|---|
| `(en)/industrial-parks/*` | 4 páginas (nelson-i, nelson-ii, vigia-i, vigia-ii) |
| `(en)/construction/leed/*` | 7 subpáginas + page.tsx principal |

**Estimación:** 4 componentes (paso 1) + 12 páginas (paso 2).

---

## Fase 9: Arreglar y adoptar `createMetadata()` — ✅ COMPLETADA

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

### Alcance (verificado contra el repo 2026-04-11)

**Universo de páginas:**
- 36 páginas en `(en)/` (conteo real de `find src/app/(en) -name page.tsx`)
- 43 páginas en `es/` (conteo real de `find src/app/es -name page.tsx`)
- Diferencia: 7 páginas solo-español (sin equivalente EN)

**Adoptar createMetadata (páginas bilingües con equivalente en route-map):**
- 36 páginas EN: Home, About (4), Industrial Parks (5), Construction (7 + Baumex), LEED (8), Experience (3), Inventory (2), Contact, Resources, Legal (3), Thank-you
- 36 páginas ES equivalentes (las 43 totales menos las 7 solo-español)
- **Total: 72 páginas**

**NO adoptar (7 páginas solo-español):**
- `es/blog/(root)/page.tsx` — index de blog (Sanity, sin equivalente EN)
- `es/blog/(root)/category/[category]/page.tsx` — categorías de blog
- `es/blog/[slug]/page.tsx` — posts individuales
- `es/noticias/page.tsx` — index de noticias
- `es/noticias/[slug]/page.tsx` — noticias individuales
- `es/noticias/category/[category]/page.tsx` — categorías de noticias
- `es/contactanos/page.tsx` — redirect legacy a contacto

**NO adoptar (páginas internas/fuera de alcance):**
- `(dev)/*` — 7 páginas internas
- `(instrucciones)/*` — 8 páginas internas protegidas
- `studio/*` — Sanity Studio

**Nota sobre thank-you/gracias:** Ambas tienen `robots: { index: false }` pero SÍ tienen equivalente bilingüe y SÍ se benefician de hreflang (para que buscadores no las indexen duplicadas). Se adoptan con `extra: { robots: { index: false } }` en el deep merge.

**No es un cambio mecánico** — cada página necesita verificar qué metadata extra tiene (robots, OG images, twitter) antes de migrar.

---

## Fase 10: Navegación bilingüe completa — ✅ COMPLETADA

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

El switcher funciona para las 36 pares de rutas en route-map pero falla en edge cases:

1. **Blog/noticias:** No están en route-map (no tienen versión inglés). Clicar la bandera USA desde `/es/blog/*` o `/es/noticias/*` lleva a `/` en vez de indicar que no hay traducción. **Fix:** Usar `hasTranslation()` para ocultar o deshabilitar la bandera del otro idioma cuando no hay equivalente.

2. **`/es/contactanos`:** Es un redirect legacy a `/es/contacto`, pero route-map solo mapea `/es/contacto` ↔ `/contact`. Desde `/es/contactanos` la bandera lleva a `/`. **Fix:** Agregar `/es/contactanos` al route-map apuntando a `/contact`, o normalizar la URL antes de buscar en el mapa.

**Nota:** Con esta fase, el sitio ya no depende de los redirects de `next.config.ts` para navegación interna. Los redirects se mantienen solo para URLs externas/bookmarks/SEO.

**Ownership:** Todos son archivos de sistema/compartidos. Se ejecuta desde MAIN.

---

## ~~Fase 11: Language switcher con route-map~~ → ✅ COMPLETADA (absorbida en Fase 10)

`language-flags.tsx` conectado con `toSpanish`/`toEnglish` del route-map (commit 6d499ca, 2026-04-11). Los edge cases pendientes (blog/noticias sin traducción, `/es/contactanos` sin mapeo) se resuelven en Fase 10.

---

## Fase 12: Auditoría de texto español residual en páginas EN — ✅ INVENTARIO HECHO

### Causa raíz

Dos tipos de error distintos:

**Tipo A — Componentes sin propear:** El componente tiene texto español hardcodeado y no acepta props para cambiarlo. Los agentes de Fase 6b los importaron "as-is" pensando que eran puramente visuales.

**Tipo B — Componentes propeados pero mal usados:** El componente SÍ acepta props o `lang`, pero la página EN no los usa correctamente — pasa rutas españolas, no traduce el botón, etc. Error de los agentes al crear las páginas.

### Inventario (auditoría 2026-04-11)

#### Tipo A — Necesitan propear

| Componente | Archivo | Texto español | Páginas EN afectadas | Fix |
|---|---|---|---|---|
| `LogoCloud` | `src/components/motion-plus/logo-cloud.tsx` | "Clientes y Proveedores que confían en Grupo Nelson..." | Home | Agregar prop `title` |
| `BadgeAniversario` | `src/components/badge-aniversario.tsx` | "CELEBRANDO" (SVG), default `textoInferior='años'` | Home | Agregar prop para texto SVG curvo. `textoInferior` ya acepta prop pero la home EN no lo pasa |

#### Tipo B — Props mal usados o faltantes

| Problema | Archivo | Detalle | Fix |
|---|---|---|---|
| Header CTA dice "Contacto" | `src/components/Header.tsx` | El botón de contacto no usa `lang` para su texto | Usar `lang` para seleccionar "Contact" vs "Contacto" |
| ScrollStorytelling rutas españolas | `src/app/(en)/page.tsx` (home) | Items pasan `/contacto`, `/constructora/*`, `/experiencia/*` | Cambiar a `/contact`, `/construction/*`, `/experience/*` |
| MosaicoInvertidoConProps rutas | `src/app/(en)/page.tsx` (home) | Segundo mosaico usa `/construccion/*` | Cambiar a `/construction/*` |
| BadgeAniversario "años" | `src/app/(en)/page.tsx` (home) | No pasa `textoInferior="years"` | Agregar prop |

#### Imágenes rotas en producción

| Página | Síntoma | Diagnóstico |
|---|---|---|
| `/about/difference` | Solo primera imagen carga, otras 3 no | Las imágenes existen en `/public/` y funcionan en localhost. Probable issue de deploy/cache en Vercel — no de código |

**Nota:** Las imágenes usan rutas absolutas (`/parques-industriales-mexicali/...`) y existen en `public/`. En localhost funcionan. El problema es exclusivo de producción → investigar deploy de Vercel.

### Trabajo

1. **Tipo A (propear):** Agregar props a LogoCloud y BadgeAniversario. Owner: MAIN (componentes compartidos). Prerequisito: reclasificar en ownership-map si es necesario.

2. **Tipo B (fix de uso):** Corregir la página home EN y el Header. La home es archivo de sección `(en)/`. El Header es archivo compartido (MAIN).

3. **Imágenes:** Investigar deploy de Vercel — no es problema de código. Posible re-deploy o invalidación de cache.

### Secuencia

```
1. Header CTA (MAIN — 1 archivo, 1 línea)
2. LogoCloud prop (MAIN — 1 componente)
3. BadgeAniversario prop SVG (MAIN — 1 componente)
4. Home EN fixes (sección — rutas + props)
5. Scan de otras páginas EN por hallazgos adicionales
6. Investigar imágenes en producción
```

**Ownership:** Header, LogoCloud, BadgeAniversario son MAIN. Home EN fixes son sección `(en)/`.

**Prerequisito:** Completar Fases 8-10 primero para no duplicar trabajo en componentes que ya se propearon.

---

## Fase 13: Propear el 100% de componentes usados en páginas EN — ⏸ DECISIÓN PENDIENTE

### Cambio de estrategia

El plan maestro original clasificó ~60 componentes como Tier 3 ("no propear, hacer copias locales"). Esa estrategia generó confusión: algunos componentes están propeados y otros no, lo que hace impredecible qué texto sale en cada idioma. Copias locales (`mu-en.tsx`, `nu-en.tsx`, etc.) duplican código y divergen del original con el tiempo.

**Nueva directriz:** Todo componente que se usa en páginas EN debe aceptar prop `lang` para sus textos visibles. Sin excepciones. Sin copias locales.

### Alcance

Todos los componentes importados por páginas EN que tengan texto visible hardcodeado y no acepten props para ese texto. Incluye:

- Componentes de la auditoría de Fase 12 (LogoCloud, BadgeAniversario, Header CTA)
- Componentes griegos de Baumex (Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi) — actualmente son copias locales (`*-en.tsx`), hay que propear los originales y eliminar las copias
- Cualquier otro componente descubierto en el QA visual

### Decisión pendiente: ¿cuándo propear?

**Opción A — Propear antes de terminar el sitio:**
- Ventaja: cada página nueva que se cree ya funciona bilingüe sin trabajo extra
- Desventaja: más trabajo upfront, retrasa el "terminado" del sitio
- Riesgo: propear componentes que quizá cambien de contenido antes de entregar

**Opción B — Propear después de terminar el sitio:**
- Ventaja: el contenido ya está estabilizado, se propea una sola vez
- Desventaja: mientras tanto, las páginas EN muestran mezcla de idiomas
- Riesgo: deuda técnica se acumula y las copias locales divergen más

**¿Cuál preferimos?** ← Decisión del usuario antes de ejecutar.

### Trabajo (una vez decidido el cuándo)

1. Inventariar todos los componentes con texto hardcodeado usados en páginas EN
2. Propear cada uno con `lang?: 'en' | 'es'` (default `'es'`)
3. Actualizar las páginas EN para pasar `lang="en"`
4. Eliminar copias locales (`*-en.tsx`) que ya no se necesiten
5. Verificar que páginas ES siguen funcionando (defaults)

---

## Fase 14: QA visual bilingüe — ❌ PENDIENTE

Recorrer las páginas inglés en el navegador y verificar:

1. **Texto sin traducir** — componentes que muestran español en página inglés (los que Fase 12 no atrapó)
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
Fase 10 (Navegación bilingüe) ──── Footer, Header, cleanup Header-en       ✅ COMPLETADA
    │
Fase 8 (Propear componentes Fase 1) ── FichaTecnicaParque, ParkMap,         ✅ COMPLETADA
    │                                   LeedPageLayout, CarruselLeed
    │
Fase 9 (createMetadata) ──── arreglar helper + adoptar en 72 páginas        ✅ COMPLETADA
    │
Fase 12 (Auditoría texto español) ── inventariar hallazgos                  ✅ INVENTARIO HECHO
    │
Fase 13 (Propear 100%) ──── propear todos los componentes restantes         ⏸ DECISIÓN PENDIENTE
    │                        + eliminar copias locales *-en.tsx
    │
Fase 14 (QA visual) ──── manual, después de todo lo demás
```

---

## Fuera de alcance (sin cambios respecto al plan original)

- Traducción de contenido de Sanity (blog, noticias, fichas de parques)
- Detección automática de idioma del navegador
- Tercer idioma
