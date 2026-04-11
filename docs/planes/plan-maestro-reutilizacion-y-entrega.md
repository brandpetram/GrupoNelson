# Plan Maestro: Reutilización, Corrección y Traducción

> **Estado:** Borrador para revisión  
> **Fecha:** 2026-04-10  
> **Objetivo:** Ordenar el trabajo pendiente para que el sitio quede (1) con componentes reutilizables para futuros proyectos, (2) con CTAs y links correctos, (3) con sección de instrucciones protegida, y (4) con versión en inglés.

---

## Documentos de referencia

Este plan consolida y reorganiza tres planes existentes:

| Plan | Archivo | Estado |
|---|---|---|
| Versión en inglés | `docs/planes/plan-para-version-ingles.md` | Completo — investigación, arquitectura y fases definidas |
| Sección de instrucciones | `docs/planes/plan-para-seccion-instrucciones.md` | Completo — schemas revisados, estructura definida, protección diseñada |
| Auditoría de CTAs | `docs/planes/auditoria-ctas.md` | Completo — inventario de 37 secciones con hallazgos |
| Plan de terminación | `docs/planes/plan-para-terminar-grupo-nelson.md` | Parcialmente ejecutado — varias tareas completadas hoy |

Los planes individuales se conservan como referencia detallada. Este documento define el **orden de ejecución** y las **dependencias entre ellos**.

---

## Inventario del repo (verificado)

### Componentes brandpetram

| Categoría | Cantidad | Ubicación |
|---|---|---|
| Componentes sin props (originales) | 91 | `src/components/brandpetram/` |
| Componentes con props | 18 | `src/components/brandpetram/con-props/` |
| Templates detached | 1 (radiant-ts-header) | `src/components/from-tailwind-templates/` |
| UI/brandpetram | ~10 | `src/components/ui/brandpetram/` |
| Ilustraciones | ~5 | `src/components/illustrations/` |

### Páginas públicas

| Sección | Páginas | Conecta con Sanity |
|---|---|---|
| Home | 1 | No |
| Nelson (nosotros) | 4 | No |
| Parques | 5 | Sí (industrialPark) |
| Constructora | 7 | No |
| LEED | 8 | No |
| Experiencia | 3 | No |
| Inventario | 2 | Sí (naveIndustrial, terreno) |
| Blog/Noticias | 2 + dinámicas | Sí (post, noticia) |
| Contacto/Legal/Recursos | 7 | No |
| **Total público** | **~39** | |

### Páginas internas (no traducir, no reutilizar)

`/componentes`, `/componentes-dos`, `/componentes-tres`, `/dev`, `/qa`, `/proyecto`, `/productos`, `/studio`, `(marketing)/product`

---

## Clasificación de componentes

### Tier 1 — Reutilizables para otros proyectos (productizar)

Componentes que Brandpetram puede copiar a futuros proyectos cliente. Necesitan: sanitizar defaults, documentar interfaz, garantizar que funcionan sin props.

| Componente | Estado actual | Trabajo necesario |
|---|---|---|
| `scroll-storytelling.tsx` | Acepta `items` con defaults hardcodeados de GN | Sanitizar defaults, documentar interfaz |
| `alpha-bp.tsx` | Acepta `descripcion` | Completar props (título, imágenes) |
| `hexagon-features.tsx` | Sin props | Agregar prop `features[]` |
| `footer-1/` | Datos hardcodeados de GN | Agregar prop `lang` + `data` |
| `badge-aniversario.tsx` | Solo `className` | Props para número y texto |
| `hero-video-cover.tsx` | Ya recibe props | Listo — solo documentar |
| `editorial-cascada-bp.tsx` | Sin props | Props para texto editorial |
| `editorial-cascada-beta.tsx` | Sin props | Props para texto |
| `faq-sections-three-columns-bp.tsx` | Tiene versión con props | Listo |
| `mosaico-2-con-props.tsx` | Via props | Listo |
| `mosaico-invertido-con-props.tsx` | Via props | Listo |
| `split-with-image-bp-con-props.tsx` | Via props | Listo |
| `cinco-cards-con-props.tsx` | Via props | Listo |
| Todos los demás `con-props/` | Via props | Listos — 18 componentes |

### Tier 2 — Propeables para bilingüe (no necesariamente reutilizables)

Componentes con texto hardcodeado en español que se usan en páginas a traducir. Necesitan props para recibir contenido en inglés, pero no vale la pena productizarlos para otros proyectos.

| Componente | Dónde se usa | Qué necesita |
|---|---|---|
| `radiant-ts-header` (detached local) | Home | Props para stats y textos |
| `logos-grid-bp-2.tsx` | Trayectoria | Props para textos laterales |
| `stats-grid-bp-gamma.tsx` | Trayectoria | Props para números/labels |
| `mosaico-liderazgo.tsx` | Liderazgo | Props para cards (títulos, descripciones) |
| `contact-form.tsx` / `contact.tsx` | Contacto | Prop `lang` para labels/placeholders |
| `Header.tsx` | Todas | Prop `lang` (ya existe `Header-en.tsx` como referencia) |
| `language-flags.tsx` | Header | Actualizar lógica de routing |

### Tier 3 — Locales de Grupo Nelson (no propear, no reutilizar)

Componentes "griegos" y secciones específicas de una página. Están demasiado acoplados al contenido de GN. Para la versión inglés, se duplica la página con texto traducido inline.

91 componentes en `src/components/brandpetram/` menos los ~30 del Tier 1 y 2 = **~60 componentes locales**. Incluyen: `mu.tsx`, `nu.tsx`, `xi.tsx`, `omicron.tsx`, `sigma.tsx`, `tau.tsx`, `delta.tsx`, `epsilon.tsx`, `zeta.tsx`, `eta.tsx`, `teta.tsx`, `iota.tsx`, `kappa.tsx`, `lamda.tsx`, `phi.tsx`, `chi.tsx`, `psi.tsx`, `park-*`, `leed-*`, etc.

**Estrategia:** No se tocan. Para traducción, cada `page.tsx` inglés importa los mismos componentes y pasa texto en inglés via props (si los aceptan) o se crea copia local con texto traducido.

---

## Orden de ejecución

### Evaluación del orden propuesto por el usuario

El usuario propuso: (1) selección → (2) limpieza → (3) diseño de API → (4) propeado → (5) instrucciones → (6) CTAs → (7) traducción.

**Ajuste propuesto:** Mover CTAs antes de instrucciones. Razón: los CTAs rotos afectan el sitio público que ya está en producción. La sección de instrucciones es interna y puede esperar. Además, la corrección de CTAs es un prerequisito implícito de la traducción — no tiene sentido traducir botones que apuntan a `#contacto` o a rutas inexistentes.

El propeado (fase 4) y la limpieza (fase 2) se pueden fusionar — en la práctica, limpiar un componente y propearlo son parte del mismo trabajo.

### Orden final propuesto

```
Fase 1:   Selección y clasificación de componentes reutilizables ✅ COMPLETADA
Fase 2:   Limpieza + propeado de Tier 1 (reutilizables)          ✅ COMPLETADA
          ↳ incluye fix de CTAs de componentes Tier 1 (ej: scroll-storytelling)
Fase 3:   Corrección de CTAs y links rotos (resto del sitio)     ✅ COMPLETADA
Fase 3.5: Refactor de layout — sacar Footer del root             ✅ COMPLETADA
Fase 4:   Sección de instrucciones protegida                     ✅ COMPLETADA
Fase 5:   Propeado de Tier 2 (bilingüe) + infra de traducción   ✅ COMPLETADA
Fase 6:   Traducción página por página                           ✅ COMPLETADA
          ↳ 6a: reorganización de rutas + redirects              ✅ COMPLETADA (2026-04-11)
          ↳ 6b: crear páginas inglés (~36 páginas)               ✅ COMPLETADA (2026-04-11)
          ↳ 6c: localización de componentes Tier 3 (Baumex)      ✅ COMPLETADA (2026-04-11)
Fase 7:   SEO bilingüe y verificación final                      ✅ COMPLETADA (2026-04-11)
```

**Plan maestro completado el 2026-04-11.**
Extensión de polish en `docs/planes/plan-maestro-extension-polish.md` (Fases 8-12).

### Diagrama de dependencias

```
Fase 1 (clasificación) ─── ya completada
    │
    ▼
Fase 2 (limpieza Tier 1 + CTAs de esos componentes)
    │
    ├──▶ Fase 3 (CTAs del resto del sitio) ─── parcialmente paralelo con Fase 2
    │        │                                   excepción: scroll-storytelling se
    │        │                                   resuelve completo en Fase 2
    │        │
    │        ▼
    │    Fase 3.5 (refactor layout) ─── MAIN, un solo owner
    │        │                           desbloquea Fase 4 Y Fase 5
    │        │
    │        ├──▶ Fase 4 (instrucciones) ─── wt/instrucciones
    │        │       no necesita traducción
    │        │       paralelo con Fase 5
    │        │
    ▼        ▼
Fase 5 (propeado Tier 2 + infra traducción) ─── depende de Fase 2 + 3.5
    │
    ▼
Fase 6 (traducción) ─── depende de Fase 3 + Fase 5
    │   6a: rutas + redirects (deploy atómico, mismo commit)
    │   6b: páginas inglés sin Tier 3 primero (Home, Contacto, Legal)
    │   6c: páginas con Tier 3 después (Baumex, constructora — copias locales)
    │
    ▼
Fase 7 (SEO bilingüe + QA) ─── depende de Fase 6
```

---

## Fase 1: Selección y clasificación — COMPLETADA

Este plan es el entregable de la Fase 1. La clasificación en Tier 1/2/3 está arriba.

**Desde:** MAIN  
**Worktree:** No necesita

---

## Fase 2: Limpieza + propeado de componentes Tier 1

**Objetivo:** Los componentes del Tier 1 quedan listos para copiar a otros proyectos. Funcionan sin props (defaults genéricos), aceptan props para personalización, y tienen interfaz documentada.

**Desde:** MAIN (los componentes son archivos compartidos)

**Alcance:**
- ~10 componentes que necesitan trabajo (ver tabla Tier 1, columna "Trabajo necesario")
- ~18 componentes `con-props/` que solo necesitan revisión de consistencia
- NO se tocan los ~60 componentes Tier 3

**Entregable por componente:**
1. Props con tipos TypeScript claros y JSDoc
2. Defaults genéricos (lorem ipsum, no texto de Grupo Nelson)
3. El componente renderiza correctamente sin props
4. Las páginas actuales de GN que lo usan siguen funcionando (pasan valores por props o usan defaults que coinciden con lo actual)

**Riesgo:** Cambiar defaults puede romper páginas que dependen de ellos.  
**Mitigación:** Antes de cambiar un default, verificar qué páginas importan el componente sin pasar esa prop. Si alguna depende del default actual, pasarle el valor explícitamente en su `page.tsx` antes de cambiar el default.

**Estimación:** ~10 componentes × trabajo variable. Los `con-props/` ya están listos.

---

## Fase 3: Corrección de CTAs y links rotos

**Objetivo:** Todos los botones, links y CTAs del sitio apuntan a destinos correctos y tienen textos accionables.

**Desde:** MAIN (toca archivos de múltiples secciones)

**Fuente:** `docs/planes/auditoria-ctas.md` — inventario completo ya realizado.

**Hallazgos principales (de la auditoría):**

| Problema | Cantidad en Fase 3 | Ejemplo | Nota |
|---|---|---|---|
| CTAs con `#` o `#contacto` | ~19 (27 - 8 de ScrollStorytelling) | Footer, Baumex | Los 8 de ScrollStorytelling se corrigen en Fase 2 |
| Botones sin href (`<button>`) | 10 | Build-to-suit, Llave-en-mano | |
| Links a rutas inexistentes | 4+23 | `/contactanos` desde contacto | |
| Textos en inglés sin localizar | 5 componentes | FAQ base, carrusel LEED | |

**Excepción:** `scroll-storytelling.tsx` ya fue absorbido por Fase 2 (limpieza + CTAs del componente juntos). Fase 3 no lo toca.

**Priorización de fixes:**
1. **Urgente** — `#contacto` → `/contacto` en Footer y páginas de constructora
2. **Alto** — Botones sin href en constructora (parecen interactivos pero no hacen nada)
3. **Medio** — Links a rutas que no existen
4. **Bajo** — Textos en inglés en componentes base (no visibles si se usan con props)

**Regla:** Cada fix se verifica visualmente en el browser antes de commitear. No basta con cambiar el string.

---

## Fase 3.5: Refactor de layout — sacar Footer del root (prerequisito compartido)

**Objetivo:** Mover `Footer1` del root layout a route groups. Esto desbloquea tanto la sección de instrucciones (que no quiere footer de marketing) como la traducción (que necesita footer con prop `lang` en cada grupo).

**Desde:** MAIN — es un cambio en `src/app/layout.tsx` (archivo compartido)  
**Owner:** MAIN exclusivamente. Ni wt/instrucciones ni wt/ingles tocan este archivo.

**Secuencia (solo layout — no incluye proxy ni contraseña):**
1. Crear route group `(site)/layout.tsx` que renderiza `<Footer1 />`
2. Mover todas las páginas públicas actuales a `(site)/`
3. Actualizar root `layout.tsx` — quitar `<Footer1 />`, dejar solo `<html>`, `<body>`, fonts, ThemeProvider
4. Verificar que el sitio funciona igual

**Lo que NO se hace aquí:** `proxy.ts` y `INSTRUCCIONES_PASSWORD` son exclusivos de Fase 4 (instrucciones). Se ejecutan cuando wt/instrucciones esté listo para implementar, no antes. Mezclarlos aquí bloquearía Fase 5 innecesariamente por una decisión de contraseña.

**Por qué hacerlo antes de Fase 4 y 5:** Ambas fases necesitan el Footer fuera del root layout. Si cada worktree intenta hacer su versión, habrá conflictos en MAIN. Hacerlo una vez, en MAIN, antes de que los worktrees empiecen, elimina el punto de bloqueo.

**Después de este refactor:**
- wt/instrucciones puede crear su route group `(instrucciones)/` sin tocar layout raíz ni archivos de sistema
- wt/ingles puede crear `(en)/layout.tsx` y `es/layout.tsx` con Footer propio sin conflictos
- Fase 5 puede empezar sin esperar decisiones de la sección de instrucciones

---

## Fase 4: Sección de instrucciones protegida

**Objetivo:** Sección `/instrucciones` protegida por contraseña con guías para que Susana edite contenido en Sanity.

**Desde:** MAIN (proxy.ts + .env.local) → luego wt/instrucciones (route group y guías)

**Fuente:** `docs/planes/plan-para-seccion-instrucciones.md` — diseño completo.

**No necesita traducción.** Esta sección es interna, en español, para personal de Grupo Nelson.

**Puede ejecutarse en paralelo con Fase 5** porque toca archivos distintos (su propio route group `(instrucciones)/`).

**Prerequisito:** Fase 3.5 completada (layout refactoreado).

**`src/proxy.ts` y `INSTRUCCIONES_PASSWORD`:** Se crean desde MAIN exclusivamente — `proxy.ts` es archivo de sistema al nivel de `src/`, fuera del alcance de cualquier worktree. MAIN los ejecuta como primer paso de Fase 4, antes de que wt/instrucciones empiece a trabajar. Después de eso, wt/instrucciones trabaja solo dentro de `src/app/(instrucciones)/` sin tocar archivos de sistema.

**Decisiones pendientes (ver plan de instrucciones, sección 8):**
1. ¿Contraseña? — Definir antes de crear proxy.ts
2. ¿Videos en YouTube/Loom o archivos locales?

---

## Fase 5: Propeado Tier 2 + infraestructura de traducción

**Objetivo:** Los componentes compartidos (Header, Footer, nav) aceptan prop `lang`. La infraestructura de rutas está lista para crear páginas en inglés.

**Desde:** MAIN (archivos compartidos)

**Fuente:** `docs/planes/plan-para-version-ingles.md` — Fases 1-4.

**Subtareas:**
1. Header: unificar `Header.tsx` + `Header-en.tsx` con prop `lang` (ref: plan inglés, sección "Header y Footer con prop lang")
2. Footer: agregar prop `lang` con datos bilingües
3. Crear `src/glossary/terms.ts` (solo términos recurrentes y CTAs cortos, no diccionario de todo)
4. Crear `src/glossary/route-map.ts` (mapa bidireccional de rutas)
5. Actualizar `language-flags.tsx` con lógica de route-map
6. Actualizar `navigation-en.ts` (rutas sin prefijo `/en/`)
7. Propear componentes Tier 2 que se usarán en páginas inglés

**Depende de:** Fase 2 (Header y Footer ya limpiados/propeados como Tier 1) + Fase 3.5 (Footer ya fuera del root layout, route groups listos para recibir layouts con `lang`).

---

## Fase 6: Traducción página por página

**Objetivo:** Crear versión en inglés del sitio en rutas raíz (`/`), mover español a `/es/`.

**Desde:** Worktree `wt/ingles` (ya existe) + coordinación con MAIN para reorganización de rutas

**Fuente:** `docs/planes/plan-para-version-ingles.md` — Fases 3-7.

**Depende de:** Fase 3 (CTAs corregidos — no traducir botones rotos) y Fase 5 (componentes propeados).

### Subfase 6a: Reorganización de rutas + redirects (mismo corte)

Los redirects 301 deben desplegarse **en el mismo commit/deploy** que la reorganización de rutas. Si se ejecutan por separado, las URLs actuales se rompen temporalmente.

1. Mover páginas españolas a `src/app/es/`
2. Crear route group `(en)/` para inglés
3. Agregar redirects 301 en `next.config.ts`: `/nelson/*` → `/es/nelson/*`, `/blog/*` → `/es/blog/*`, etc.
4. Verificar que el sitio español funciona en `/es/*` **antes de pushear**
5. Actualizar `sitemap.ts` con las nuevas rutas

**Esto es un deploy atómico** — no se puede hacer el move sin los redirects ni los redirects sin el move.

### Subfase 6b: Crear páginas inglés (principales)

Orden por importancia de negocio (ver plan de inglés, Fases 5-7):
1. Home, Parques overview, Nelson II
2. Baumex, Build-to-Suit, About — Our Story, Contact
3. Resto de parques, constructora, LEED
4. Experiencia, About, Inventario
5. Legal, Resources, Thank you

### Subfase 6c: Localización de componentes Tier 3 para páginas inglés

**Problema:** Las páginas prioritarias como Baumex ensamblan 10+ componentes sin props (Mu, Nu, Xi, Phi, Chi, Psi, etc.). Duplicar `page.tsx` no basta — hay que crear copias locales de cada componente con texto en inglés.

**Estrategia por página:**

| Página | Componentes Tier 3 | Enfoque |
|---|---|---|
| Baumex | Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi (~12) | Inventariar cuáles tienen texto visible vs cuáles son puramente visuales. Los visuales se reusan sin cambios. Los de texto se copian como `mu-en.tsx`, etc. |
| Build-to-Suit | Delta, Epsilon, Zeta (~3) | Copias locales |
| Llave-en-Mano | Eta, Teta, Iota, Kappa, Lamda (~5) | Copias locales |
| LEED subpáginas | Componentes LEED específicos | Copias locales |
| Parques individuales | Park-hero, ficha-tecnica-parque (~2) | Estos leen de Sanity — solo traducir el shell |

**Estimación realista:** Baumex sola requiere revisar ~12 componentes y crear copias de los que tienen texto. Esto multiplica el trabajo de la Fase 6 significativamente. Las páginas que no usan componentes griegos (Home, Contacto, Legal) son mucho más rápidas.

**Recomendación:** Comenzar la Fase 6 con las páginas que NO tienen componentes Tier 3 (Home, Parques overview, Contacto, Legal). Esto da resultado visible rápido. Después atacar Baumex y constructora que son las más pesadas.

**Lo que NO se traduce:** Blog, Noticias (Sanity), datos técnicos de Sanity, páginas internas, sección de instrucciones.

---

## Fase 7: SEO bilingüe y verificación final

**Objetivo:** Verificación y pulido post-migración. Los redirects y el sitemap base ya se implementaron en Fase 6a — esta fase valida que todo funcione y agrega las capas de SEO bilingüe.

**Desde:** MAIN

**Fuente:** Plan de inglés, Fase 8.

**Subtareas (solo lo que NO se hizo en 6a):**
1. `createMetadata()` helper con alternates y hreflang para cada página
2. Actualizar `sitemap.ts` con alternates bilingües (6a creó las rutas, 7 agrega `<xhtml:link rel="alternate">`)
3. QA: verificar que toda ruta pública tiene canonical, alternates y hreflang correctos
4. QA: verificar que todos los redirects 301 de 6a funcionan en producción
5. Limpiar: eliminar `src/app/en/` (página de prueba vieja) y `Header-en.tsx` (absorbido en Header con prop `lang`)

**No incluye:** Redirects ni sitemap base — eso se hizo en Fase 6a como deploy atómico.

---

## Qué se puede hacer en paralelo

| Trabajo A | Trabajo B | ¿Paralelo? | Notas |
|---|---|---|---|
| Fase 2 (limpieza Tier 1) | Fase 3 (CTAs) | Parcial — con excepción | `scroll-storytelling.tsx` está en ambas fases (Tier 1 para limpieza + auditoría de CTAs). **Resolución:** se trabaja completo en Fase 2 (limpieza + fix de CTAs del componente juntos). Fase 3 lo marca como ya corregido y no lo toca. |
| Fase 4 (instrucciones) | Fase 5 (propeado Tier 2) | Sí | Archivos completamente distintos |
| Fase 4 (instrucciones) | Fase 6 (traducción) | Sí | Instrucciones no se traduce |
| Fase 2 | Fase 4 | Sí | Independientes |
| Fase 5 | Fase 6 | NO | Fase 6 depende de que Fase 5 esté completa |
| Fase 3 | Fase 6 | NO | No traducir CTAs rotos |

**Máximo paralelismo recomendado:**
- MAIN: Fase 2 + Fase 3 (si se coordinan archivos)
- wt/instrucciones: Fase 4
- wt/ingles: Espera hasta Fase 5 completada

---

## Asignación de worktrees

| Fase | Dónde se ejecuta | Por qué |
|---|---|---|
| Fase 1 | MAIN | Documentación — no toca código |
| Fase 2 | MAIN | Componentes son archivos compartidos |
| Fase 3 | MAIN | CTAs están en múltiples secciones |
| Fase 3.5 | MAIN | Layout raíz es archivo compartido (solo refactor de Footer) |
| Fase 4 | MAIN (proxy.ts) + wt/instrucciones (route group y guías) | proxy.ts es archivo de sistema, se ejecuta desde MAIN como parte del carril de instrucciones |
| Fase 5 | MAIN | Header, Footer, nav son compartidos |
| Fase 6a | MAIN | Reorganización de rutas + redirects = infraestructura |
| Fase 6b-c | wt/ingles | Páginas nuevas en rutas propias |
| Fase 7 | MAIN | SEO, sitemap, hreflang |

---

## Riesgos y mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Cambiar defaults de componentes rompe páginas actuales | Alta | Alto | Pasar valores explícitos en `page.tsx` antes de cambiar defaults |
| Reorganización de rutas (español → `/es/`) rompe SEO | Media | Alto | Redirects 301, inventario programático, QA post-migración |
| Componentes griegos sin props obligan a duplicar código | Alta | Medio | Aceptable — son locales de GN, no hay valor en propecarlos |
| Scope creep en propeado (querer propear todo) | Alta | Medio | Tier 3 NO se propea. Solo Tier 1 y 2 |
| Contraseña de instrucciones no definida al llegar a Fase 4 | Baja | Bajo | Solo bloquea proxy.ts, no el resto de Fase 4 (guías se pueden escribir sin protección) |

---

## Fuera de alcance

- Propear componentes Tier 3 (griegos y locales)
- Traducción de contenido de Sanity (blog, noticias, fichas de parques)
- Framework de i18n (next-intl, next-i18next)
- Diccionario global de todo el copy
- Detección automática de idioma del navegador
- Tercer idioma
- Migrar datos locales (portafolio Baumex, GeoJSON terrenos) a Sanity
- Tooling interno, studio, QA pages, páginas de desarrollo

---

## Decisiones pendientes

1. **¿Contraseña de instrucciones?** — Definir antes de empezar Fase 4. Se guarda en `INSTRUCCIONES_PASSWORD` en `.env.local`.

2. **¿Retornar componentes productizados a componentes-brandpetram/?** — Fase 2 limpia componentes. ¿Se copian de vuelta al monorepo de catálogo o solo se limpian aquí?

3. **¿Blog y noticias en versión inglés?** — El plan de inglés dice "se mueven a `/es/blog` sin traducir". Pero ¿la navegación inglesa los linkea o no?

4. **¿Videos de instrucciones en YouTube/Loom o archivos locales?** — Afecta peso del repo y facilidad de actualización.

### Decisiones ya tomadas en este plan

- **Footer en root layout:** Opción A — mover Footer a route groups. Se ejecuta en Fase 3.5 desde MAIN como prerequisito compartido de instrucciones y bilingüe.
- **Orden CTAs vs instrucciones:** CTAs primero (Fase 3) por impacto en producción. Instrucciones (Fase 4) corre en paralelo después de Fase 3.5.
- **scroll-storytelling.tsx en dos fases:** Se resuelve completo en Fase 2 (limpieza + CTAs del componente juntos). Fase 3 no lo toca.
