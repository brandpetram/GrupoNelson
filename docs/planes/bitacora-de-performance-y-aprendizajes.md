# Bitácora de Performance y Aprendizajes

> Documento de trabajo que acompaña al plan de performance (`plan-para-lighthouse-100.md`).
> Cada página optimizada se documenta aquí con scores antes/después, decisiones, y aprendizajes.

---

## Cómo usar esta bitácora

1. **Antes de optimizar una página nueva:** leer los aprendizajes de las páginas anteriores
2. **Durante la optimización:** documentar decisiones y scores intermedios
3. **Al terminar:** registrar scores finales y aprendizajes nuevos

---

## Páginas optimizadas

### Homepage EN (`/`) — 2026-04-12

#### Baseline (antes de cualquier cambio)

| Corrida | Score | LCP | FCP |
|---|---|---|---|
| 1 | 70 | 9.5s | 1.5s |
| (medición única del plan) | | | |

#### Fix 1.1A: `enableAnimations={false}` en hero

**Cambio aplicado:** `enableAnimations={true}` → `enableAnimations={false}` en ambos `home-client.tsx` (EN + ES). Commit `219ac67`.

| Corrida | Score | LCP | FCP |
|---|---|---|---|
| 1 | 71 | 9.5s | 1.6s |
| 2 | 71 | 9.5s | 1.6s |
| 3 | 81 | 5.1s | 1.2s |
| **Mediana** | **71** | **9.5s** | **1.6s** |

**Top diagnostics:** Main-thread work 2.4s, Render blocking 710ms, Network payload 40,821 KiB

**LCP element:** PSI no lo devolvió en ninguna corrida.

**Conclusión:** El cambio de animación **no mejoró el LCP de forma consistente**. La mediana sigue en 9.5s (igual que el baseline). La hipótesis del plan era que la animación `x: -100vw` era la causa principal del LCP alto — eso no se confirmó. Posibles explicaciones:

1. El LCP element ya no es el H1 sino otro recurso (imagen del hero, video)
2. El `hero-video-cover.tsx` usa `<img>` nativo (no `<Image>` de Next.js) — sin optimización avif/webp
3. El payload de 40,821 KiB sigue sin explicar — el video local pesa 2.7 MB, algo más está cargando
4. PSI podría estar midiendo una versión cacheada del HTML (poco probable, el deploy tiene 10+ min)

**Siguiente paso:** Investigar qué es el LCP element actual. Si es la imagen del hero, el Fix 1.2 (migrar `<img>` a `<Image>`) pasa a ser la prioridad. También investigar el payload de 40 MB.

#### Investigación post-Fix 1.1A: identificación del LCP element

Se encontró que PSI sí devuelve el LCP element, pero en el audit `lcp-breakdown-insight`, no en `largest-contentful-paint-element` (que estuvo vacío).

**LCP element confirmado:** Sigue siendo el `<h1>` — "Industrial Parks and Built-to-Suit Buildings Across Mexicali"

```
selector: div.relative > div.container > div.max-w-md > h1.text-3xl
nodeLabel: "Industrial Parks and Built‑to‑Suit Buildings Across Mexicali"
```

**LCP breakdown:**

| Subpart | Duración |
|---|---|
| Time to first byte | ~0ms |
| Element render delay | **2,334ms** |

**Análisis:** El TTFB es perfecto. El problema es **element render delay de 2.3 segundos** — el tiempo entre que el HTML llega al browser y el H1 se pinta visualmente.

**Aclaración importante:** El H1 **sí existe en el HTML SSR** (verificado con `curl` en producción). El problema no es que el H1 dependa de hidratación para existir en el DOM — es que algo bloquea el paint del HTML que ya está ahí. El browser recibe el HTML pero no lo renderiza visualmente durante 2.3s.

Causas posibles del paint delay (por investigar):
- Render-blocking CSS (710ms reportados por PSI)
- Web fonts que bloquean el paint del texto hasta que se descargan
- Imágenes no-LCP que compiten por bandwidth y main thread (logo cloud, imágenes del header)
- El bundle JS bloquea el main thread durante parsing (2.4s reportados)

**Corrida adicional con LCP breakdown (post-deploy):**

| Score | LCP | FCP | Element render delay |
|---|---|---|---|
| 76 | 4.2s | 1.2s | 2,334ms |

**Siguiente paso:** El fix real debe hacer que el H1 del hero sea visible sin esperar hidratación de JS. Opciones:
- Separar el contenido textual del hero en un Server Component y mantener solo las animaciones/video como Client Component
- Usar CSS puro para el layout inicial del hero, sin depender de motion/react para la posición del H1
- Investigar si `hero-video-cover.tsx` puede renderizar el H1 sin `motion.div` wrapping

#### Experimentos de reducción de payload (commit `3394b8b`)

**Cambios aplicados:**
1. Video del hero: consolidado de 2 `<video>` tags a 1 con CSS media query para filtros. Quitado `autoPlay` del HTML, play via JS post-hidratación.
2. Scroll-storytelling: quitado `autoPlay` de los 4 videos (6.9 MB).
3. Banderas: reemplazadas de 2880px (472 KB) a 96px (7 KB).
4. TarjetaHeroOriginal: extraída como Server Component (patrón donut via prop en page.tsx).

**Mediciones post-fix (3 corridas + 1 adicional):**

| Corrida | Score | LCP | FCP | SI |
|---|---|---|---|---|
| 1 | (error PSI) | — | — | — |
| 2 | 71 | 9.5s | 1.6s | 5.1s |
| 3 | 71 | 9.5s | 1.6s | 5.1s |
| extra | 71 | 9.4s | 1.5s | — |
| **Mediana** | **71** | **9.5s** | **1.6s** | **5.1s** |

**Payload:** 38,943 KiB (antes: 40,821 KiB) — bajó ~1.8 MB

**LCP breakdown:** Element render delay sigue en 2,275ms. Sin cambio significativo.

**Hallazgo clave del payload:** El video del hero aparece **6 veces** en la lista de recursos pesados de PSI (6 × 2,810 KB = 16.8 MB). Los videos de scroll-storytelling también aparecen duplicados. Puede ser que PSI cuente requests de range/chunk por separado, o que el browser esté haciendo múltiples requests al mismo archivo.

**Conclusión:** Los cambios de media redujeron payload en ~2 MB pero no movieron el LCP. El cuello de botella sigue siendo element render delay de 2.3s. El HTML SSR del H1 ya existe en la respuesta inicial (verificado con curl), así que el problema es que **algo bloquea el paint** del HTML que ya está ahí.

**Siguiente paso:** Investigar qué bloquea el paint del H1 que ya existe en el HTML SSR. Ramas de investigación por prioridad:

1. **Imágenes no-LCP que compiten por recursos en el initial load:**
   - `logo-cloud.tsx` (línea 51) renderiza una nube de logos grande en móvil
   - `Header.tsx` (línea 82) emite varias imágenes `/Seleccionadas/*` crudas
   - Estas imágenes no son el LCP pero pueden estar consumiendo bandwidth y main thread antes de que el H1 se pinte
2. **Render-blocking CSS** (710ms reportados por PSI)
3. **Web fonts** que bloquean el paint del texto
4. **Main thread bloqueado** (2.4s) por bundle JS de motion/react durante parsing

**Pendiente de investigar:** Los videos duplicados en PSI. `scroll-storytelling.tsx` (línea 68) crea un `<video>` temporal fuera del DOM para generar poster, y luego el reproductor visible vuelve a `load()`/`play()` en línea 95. Esto podría causar requests duplicados reales, no solo un artefacto de conteo de PSI. Mantener como hipótesis abierta.

#### Fix de paint blockers (commit `41a251e`)

**Cambios aplicados:**
1. **Logo Cloud:** Agregado `loading="lazy"` y `decoding="async"` a los 27 logos (`logo-cloud.tsx`). Antes se descargaban todos en el initial load compitiendo por bandwidth con el LCP.
2. **Hero poster:** Migrado de `<img>` nativo a `<Image>` de Next.js con `priority` y `sizes="100vw"` (`hero-video-cover.tsx`). Esto habilita avif/webp automático y responsive sizing.

**Mediciones post-fix (3 corridas):**

| Corrida | Score | LCP | FCP | SI | Payload | Render delay |
|---|---|---|---|---|---|---|
| 1 | 92 | 3.2s | 1.2s | 3.2s | 32,351 KiB | 1,553ms |
| 2 | 93 | 3.2s | 1.2s | 2.4s | 29,541 KiB | 1,147ms |
| 3 | 90 | 3.4s | 1.2s | 3.0s | 31,949 KiB | 1,431ms |
| **Mediana** | **92** | **3.2s** | **1.2s** | **3.0s** | **31,949 KiB** | **1,431ms** |

**Comparación acumulada desde el baseline:**

| Métrica | Baseline | Post-Fix 1.1A | Post-payload | **Post-paint blockers** | Cambio total |
|---|---|---|---|---|---|
| Score | 70 | 71 | 71 | **92** | **+22 puntos** |
| LCP | 9.5s | 9.5s | 9.5s | **3.2s** | **-6.3s** |
| Render delay | 2,334ms | 2,334ms | 2,275ms | **1,431ms** | **-903ms** |
| Payload | 40,821 KiB | — | 38,943 KiB | **31,949 KiB** | **-8,872 KiB** |

**Análisis:** Este fue el fix que realmente movió las métricas. Los dos cambios clave fueron:
1. **Lazy load de logos:** 27 imágenes que antes se descargaban inmediatamente ahora esperan a estar en viewport. Esto liberó bandwidth y main thread para que el browser pudiera pintar el H1 más rápido.
2. **Hero poster como `<Image>`:** Next.js ahora sirve el poster en avif/webp optimizado con `priority`, lo que le da al preload scanner del browser una imagen más liviana y descubrible temprano.

El render delay bajó de 2,334ms a 1,431ms. Ambos cambios (lazy logos + poster como `<Image>`) se aplicaron juntos, así que no se puede aislar cuál tuvo más impacto. La mejora está correlacionada con estos fixes pero no confirmada como causal de uno solo de ellos.

**Estado actual:** El score de 92 **supera el target de 90+** para el homepage EN. El LCP de 3.2s todavía está por encima del target ideal de 2.5s pero dentro del rango "needs improvement" (2.5-4.0s), no "poor" (>4.0s).

**Siguiente paso para llegar a LCP <2.5s:**
- El render delay restante (1,431ms mediana, pero con corridas tan bajas como 385ms) sigue siendo el bloqueador
- **Imágenes no-LCP tempranas todavía presentes:** `ticker-overflow.tsx` (línea 30) renderiza logos con `motion.img` sin `loading="lazy"`. También hay preloads de `/logos-clientes/*.svg` que siguen apareciendo en producción. Y `Header.tsx` emite imágenes `/Seleccionadas/*` crudas. Antes de saltar a CSS, confirmar si estas fugas residuales siguen empujando el render delay.
- **Render-blocking CSS** (740ms): dos chunks CSS suman 50 KB y bloquean ~740ms. Es la siguiente rama si las imágenes tempranas ya no explican el delay restante.

#### Limpieza de imports muertos (commit `ea8f1f9`)

**Cambio aplicado:** Quitar imports de `TickerOverflow` y `HexagonFeatures` de ambos home-client (EN + ES). Se importaban pero no se renderizaban.

**Investigación de fugas residuales:**
- `ticker-overflow.tsx`: importado pero **no renderizado** en ninguno de los dos homepages. Import muerto, no fuga de imágenes. Eliminado.
- Header `/Seleccionadas/*`: verificado con grep — **no existen** imágenes `/Seleccionadas/*` en Header.tsx. El finding original no se confirma en el código actual.
- Mosaicos con `/Seleccionadas/*`: usan `<Image>` de Next.js via `ImagenRectangulo` y están below-the-fold con lazy loading automático. No son fuga.
- Logo cloud: ya tiene `loading="lazy"` del fix anterior.

**Hallazgo:** `TickerOverflow` era import muerto y Header.tsx no tiene `/Seleccionadas/*`. Pero `RadiantHeader` (`radiant-ts-header/header.tsx` línea 82) sí emite 4 `<img>` nativos con imágenes `/Seleccionadas/*` (1.5 MB total) sin `loading="lazy"` ni optimización. Este componente se renderiza below-the-fold en el home (después del hero + logo cloud + alpha). **La rama de imágenes tempranas NO está cerrada.**

**Mediciones post-fix (3 corridas):**

| Corrida | Score | LCP | FCP | SI | Render delay |
|---|---|---|---|---|---|
| 1 | 72 | 8.2s | 1.6s | 4.6s | 2,451ms |
| 2 | 93 | 3.2s | 1.2s | 2.5s | 1,186ms |
| 3 | 92 | 3.4s | 1.2s | 1.4s | 385ms |
| **Mediana** | **92** | **3.4s** | **1.2s** | **2.5s** | **1,186ms** |

Alta variabilidad de PSI en esta ronda. La mediana se mantiene en 92. La corrida 1 (score 72) es un outlier — PSI tiene esta variabilidad inherente. La corrida 3 muestra render delay de 385ms, lo que sugiere que el servidor y la red pueden entregar el paint rápido cuando no hay congestión.

#### Fix de RadiantHeader (commit `422c7e3`)

**Cambio aplicado:** 4 `<img>` nativos de `/Seleccionadas/*` (1.5 MB total) migrados a `<Image>` de Next.js con `width={800} height={800}` y `sizes` responsive. Esto habilita avif/webp + lazy loading automático (below-the-fold).

**Mediciones post-fix (3 corridas):**

| Corrida | Score | LCP | FCP | Payload | Render delay |
|---|---|---|---|---|---|
| 1 | 95 | 2.9s | 1.2s | 30,895 KiB | 1,127ms |
| 2 | 90 | 3.4s | 1.2s | 30,436 KiB | 1,469ms |
| 3 | 90 | 3.4s | 1.2s | 30,436 KiB | 1,469ms |
| **Mediana** | **90** | **3.4s** | **1.2s** | **30,436 KiB** | **1,469ms** |

**Comparación acumulada completa:**

| Métrica | Baseline | Post-animación | Post-payload | Post-logos+poster | **Post-RadiantHeader** |
|---|---|---|---|---|---|
| Score | 70 | 71 | 71 | 92 | **90** |
| LCP | 9.5s | 9.5s | 9.5s | 3.2s | **3.4s** |
| Payload | 40,821 KiB | — | 38,943 KiB | 31,949 KiB | **30,436 KiB** |

**Análisis:** El payload bajó ~1.5 MB más (ahora 30,436 KiB, -10 MB vs baseline). La mejor corrida llegó a **score 95 con LCP 2.9s**, rozando el target de 2.5s. La mediana se mantiene en 90/3.4s por variabilidad de PSI. El render delay no bajó significativamente (1,469ms vs 1,431ms anterior) — confirma que estas 4 imágenes contribuían al payload pero no eran el bloqueador principal del render delay.

**Estado de la rama de imágenes tempranas:** Las fugas conocidas están corregidas (logo-cloud, RadiantHeader). El render delay restante (~1.4s) ya no se explica por imágenes tempranas sin lazy. La siguiente rama es **render-blocking CSS** (740ms reportados por PSI).

### Homepage ES (`/es`) — 2026-04-12

Todos los fixes se aplicaron via componentes compartidos (hero-video-cover, logo-cloud, RadiantHeader, language-flags, tarjeta-hero-original) y cambios paralelos en `es/home-client.tsx` y `es/page.tsx`. No requirió cambios adicionales.

**Mediciones (3 corridas, primera medición de esta página):**

| Corrida | Score | LCP | FCP | Payload | Render delay |
|---|---|---|---|---|---|
| 1 | 92 | 3.2s | 1.2s | 30,415 KiB | 1,250ms |
| 2 | 92 | 3.2s | 1.2s | 30,415 KiB | 1,250ms |
| 3 | 83 | 4.3s | 1.5s | 30,436 KiB | 2,323ms |
| **Mediana** | **92** | **3.2s** | **1.2s** | **30,415 KiB** | **1,250ms** |

**Conclusión:** Score 92 supera el target de 90+. LCP 3.2s en el rango "needs improvement" (2.5-4.0s). Consistente con el homepage EN — los componentes compartidos ya estaban optimizados.

---

### Diseño e Ingeniería ES (`/es/constructora/diseno-e-ingenieria`) — 2026-04-15

#### Baseline (antes de cualquier cambio)

| Corrida | Score | LCP | FCP | SI | TBT | Render delay | Payload |
|---|---|---|---|---|---|---|---|
| 1 | 67 | 12.8s | 2.0s | 7.0s | 40ms | 2,554ms | 4,137 KiB |
| 2 | 77 | 5.9s | 1.2s | 3.2s | 90ms | 837ms | 4,137 KiB |
| 3 | 72 | 13.1s | 1.2s | 4.2s | 110ms | 832ms | 4,137 KiB |
| **Mediana** | **72** | **12.8s** | **1.2s** | **4.2s** | **90ms** | **837ms** | **4,137 KiB** |

**LCP element identificado (vía `lcp-breakdown-insight`):**

```
selector: div.relative > div.-translate-y-18 > div.md:-mr-120 > p.md:max-w-xl
nodeLabel: "Cimentaciones profundas en suelo colapsable. Sistemas antisísmicos BRB. Subesta…"
```

El LCP **no es una imagen del mosaico**. Es el `<p>` del hero — el párrafo de texto debajo del H1. Mismo patrón que el homepage: un elemento de texto SSR con render delay alto.

**LCP breakdown (corrida de identificación):**

| Subpart | Duración |
|---|---|
| Time to first byte | ~0ms |
| Element render delay | **2,392ms** |

**Top diagnostics:** Render blocking requests 430ms, Unused JS 47 KiB, Legacy JS 15 KiB.

**Alta variabilidad:** El LCP oscila entre 5.9s y 13.1s entre corridas. El render delay oscila entre 832ms y 2,554ms. Cuando el render delay es bajo, el score sube a 77. Cuando es alto, baja a 67.

**Análisis del componente `CuadriculaSectionConProps`:**
- 20 `<img>` HTML nativos (sin `<Image>` de Next.js, sin lazy, sin avif/webp)
- Animación `x: 300, opacity: 0` en 5 columnas con `staggerChildren: 0.08` (mismo patrón que homepage)
- Columna 5 tiene `className="hidden"` pero renderiza 3 imágenes (18, 19, 20) que se descargan sin mostrarse
- Tamaños fijos en px (136px a 500px) con `zoom: 0.35` en mobile — las imágenes se sirven mucho más grandes de lo que se muestran
- Toda la página es `'use client'` — no hay Server Components

**Siguiente paso:** Fix 2.1A — Migrar 17 imágenes visibles a `<Image>` con lazy, eliminar 3 imágenes hidden, medir post-fix.

### Engineering Design EN (`/construction/engineering-design`) — 2026-04-15

#### Baseline (antes de cualquier cambio)

| Corrida | Score | LCP | FCP | SI | TBT | Render delay | Payload |
|---|---|---|---|---|---|---|---|
| 1 | 73 | 6.6s | 1.2s | 5.2s | 40ms | 1,054ms | 4,139 KiB |
| 2 | 67 | 12.8s | 2.0s | 6.9s | 10ms | 2,401ms | 4,139 KiB |
| 3 | 77 | 6.0s | 1.2s | 2.8s | 80ms | 332ms | 4,139 KiB |
| **Mediana** | **73** | **6.6s** | **1.2s** | **5.2s** | **40ms** | **1,054ms** | **4,139 KiB** |

Usa el mismo componente `CuadriculaSectionConProps`. Cualquier fix al componente aplica a ambas URLs. Misma variabilidad de LCP observada.

---

## Aprendizajes acumulados

### 1. No asumir causa raíz sin medir después del fix (2026-04-12)

La animación `x: -100vw` parecía la causa obvia del LCP alto, y el plan original (del 10 de abril) la identificó como causa confirmada. Pero después de deshabilitarla, el LCP no mejoró. Lección: **siempre medir post-fix antes de declarar victoria**, incluso cuando la causa raíz parece clara.

### 2. El LCP element de PSI está en `lcp-breakdown-insight`, no donde esperábamos (2026-04-12)

El campo `largest-contentful-paint-element` estuvo vacío en todas las corridas. Pero el audit `lcp-breakdown-insight` sí devuelve el elemento LCP como un nodo con selector, snippet y bounding rect. Usar este audit en vez del otro para diagnóstico.

### 3. El HTML SSR existe pero el paint se retrasa — no confundir con "el H1 depende de hidratación" (2026-04-12)

El H1 sí viene en el HTML SSR (verificado con `curl`). El render delay de 2.3s no es porque el H1 no exista en el DOM, sino porque algo bloquea el primer paint visual. Posibles bloqueadores: CSS, fonts, imágenes no-LCP que compiten por recursos, o JS que bloquea main thread. No asumir "hidratación" como causa cuando el HTML ya está presente.

### 4. Reducir payload no reduce render delay (2026-04-12)

Bajar 2 MB de payload (video duplicado, banderas gigantes) no movió el LCP ni el element render delay. Son problemas independientes: payload afecta Speed Index y TTI, render delay afecta LCP. No confundir los dos.

### 5. Imágenes no-LCP tempranas correlacionan con render delay alto (2026-04-12)

27 logos SVG en `logo-cloud.tsx` no tenían `loading="lazy"` y se descargaban en el initial load. Después de agregar lazy loading + migrar el poster a `<Image>`, el render delay bajó de 2,334ms a 1,431ms y el score subió de 71 a 92. **Correlación fuerte, pero causalidad no aislada** — ambos cambios se aplicaron juntos. Se encontró una fuga adicional: `RadiantHeader` emite 4 `<img>` nativos de `/Seleccionadas/*` (1.5 MB) sin lazy loading — migrada a `<Image>` de Next.js.

### 6. Migrar `<img>` a `<Image>` de Next.js tiene impacto real en payload (2026-04-12)

El hero poster pasó de `<img>` nativo (183 KB JPEG sin optimización) a `<Image>` con `priority` (avif/webp optimizado + responsive). Combinado con el lazy loading de logos, el payload total bajó ~9 MB. `<Image>` de Next.js no es solo una buena práctica — es un fix de performance medible.

### 7. Los fixes que parecen obvios no siempre son los que mueven la aguja (2026-04-12)

La animación del hero, el video duplicado y el payload excesivo parecían las causas obvias. Ninguno movió el LCP significativamente. La combinación de lazy-loading de logos + migración de poster a `<Image>` correlacionó con la mejora real. **Medir después de cada fix, no asumir impacto por intuición.**

### 8. Videos duplicados en PSI: puede ser artefacto o bug real — no cerrar prematuramente (2026-04-12)

El video del hero (2.7 MB) aparece 6 veces en la lista de recursos de PSI. **Hipótesis sin confirmar:** puede ser que PSI cuente range requests por separado, o puede ser un bug real donde el código genera requests duplicados. `scroll-storytelling.tsx` crea un `<video>` temporal para generar poster (línea 68) y luego el reproductor visible hace `load()`/`play()` — eso podría causar descargas reales duplicadas. No asumir que es solo un artefacto de PSI hasta verificar en Network tab del browser.

### 9. El patrón "texto SSR con render delay" se repite en páginas sin video (2026-04-15)

En `/es/constructora/diseno-e-ingenieria` el LCP element es un `<p>` de texto (no una imagen del mosaico de 20 fotos). El render delay es 2,392ms con TTFB de ~0ms — idéntico al patrón del homepage. Esto confirma que **el cuello de botella no es payload ni imágenes específicas, sino algo que bloquea el paint del HTML que ya está en el DOM.** En esta página no hay video, el payload es bajo (4.1 MB vs 40 MB del homepage), y sin embargo el render delay es prácticamente igual (~2.4s). Esto apunta a causas globales del sitio (CSS blocking, fonts, bundle JS) más que a recursos específicos de cada página.

### 10. Elementos con `hidden` en CSS siguen descargando sus recursos (2026-04-15)

La columna 5 del mosaico (`CuadriculaSectionConProps`) tiene `className="hidden"` pero renderiza 3 `<img>` nativos que el browser descarga de todos modos. `display: none` (que es lo que `hidden` de Tailwind aplica) **no impide la descarga de imágenes en `<img>` HTML**. Si una imagen no se va a mostrar, no debe estar en el DOM. Opciones: renderizado condicional en React, o usar `<Image>` de Next.js con `loading="lazy"` que al menos posterga la descarga.

### 11. Payload bajo no implica buen LCP — el render delay es independiente del peso de la página (2026-04-15)

La página de diseño-e-ingeniería tiene payload de 4.1 MB (10x menor que el homepage con 40 MB), pero su LCP (12.8s) es **peor** que el del homepage (9.5s pre-fix). Esto refuerza el aprendizaje #4 pero con evidencia más fuerte: dos páginas con payloads dramáticamente diferentes tienen render delays casi idénticos (~2.3-2.4s). **El render delay es un problema del shell de la aplicación (CSS, fonts, JS), no de los recursos específicos de cada página.**

### 12. La variabilidad de PSI es extrema en páginas con muchas imágenes above-fold (2026-04-15)

En las 3 corridas de diseño-e-ingeniería ES, el LCP osciló entre 5.9s y 13.1s (variación de 2.2x). En el homepage pre-fix la variabilidad era menor (~9.3-9.5s). Hipótesis: cuando hay 17+ imágenes compitiendo por bandwidth en el initial load, el orden en que PSI las descarga varía entre corridas, lo que amplifica la variabilidad del render delay. **La regla de 3 corridas sigue siendo el mínimo, pero en páginas con muchas imágenes above-fold considerar 5 corridas si la varianza entre las 3 primeras es mayor a 2x.**

### 13. Siempre identificar el LCP element ANTES de planificar fixes (2026-04-15)

El plan original (del 12 de abril) asumía que el LCP era una de las 20 imágenes del mosaico y planificó fixes centrados en imágenes. La medición reveló que el LCP es el `<p>` de texto. Si hubiéramos ejecutado el plan sin medir primero, habríamos optimizado imágenes que no son el LCP element — repitiendo el error del homepage con la animación. **Regla: correr PSI con extracción de `lcp-breakdown-insight` antes de escribir una sola línea de fix.** Esto aplica a cada página nueva que se optimice.
