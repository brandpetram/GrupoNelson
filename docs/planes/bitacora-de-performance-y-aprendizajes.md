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

### 5. Videos duplicados en PSI: puede ser artefacto o bug real — no cerrar prematuramente (2026-04-12)

El video del hero (2.7 MB) aparece 6 veces en la lista de recursos de PSI. **Hipótesis sin confirmar:** puede ser que PSI cuente range requests por separado, o puede ser un bug real donde el código genera requests duplicados. `scroll-storytelling.tsx` crea un `<video>` temporal para generar poster (línea 68) y luego el reproductor visible hace `load()`/`play()` — eso podría causar descargas reales duplicadas. No asumir que es solo un artefacto de PSI hasta verificar en Network tab del browser.
