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

**Análisis:** El TTFB es perfecto. El problema es **element render delay de 2.3 segundos**. Incluso con `enableAnimations={false}`, el H1 tarda 2.3s en renderizarse. Esto se explica porque:

1. `home-client.tsx` es `'use client'` — todo el componente depende de JavaScript para renderizar
2. El hero (`hero-video-cover.tsx`) es un Client Component que necesita hidratación de React antes de pintar el H1
3. La animación de motion/react era un agravante, pero el delay fundamental viene de la hidratación del Client Component

**El H1 no se pinta en el servidor.** Aunque Next.js hace SSR de Client Components, el hero tiene dependencia de `motion/react` que puede retrasar el paint hasta que JS ejecute.

**Corrida adicional con LCP breakdown (post-deploy):**

| Score | LCP | FCP | Element render delay |
|---|---|---|---|
| 76 | 4.2s | 1.2s | 2,334ms |

**Siguiente paso:** El fix real debe hacer que el H1 del hero sea visible sin esperar hidratación de JS. Opciones:
- Separar el contenido textual del hero en un Server Component y mantener solo las animaciones/video como Client Component
- Usar CSS puro para el layout inicial del hero, sin depender de motion/react para la posición del H1
- Investigar si `hero-video-cover.tsx` puede renderizar el H1 sin `motion.div` wrapping

---

## Aprendizajes acumulados

### 1. No asumir causa raíz sin medir después del fix (2026-04-12)

La animación `x: -100vw` parecía la causa obvia del LCP alto, y el plan original (del 10 de abril) la identificó como causa confirmada. Pero después de deshabilitarla, el LCP no mejoró. Lección: **siempre medir post-fix antes de declarar victoria**, incluso cuando la causa raíz parece clara.

### 2. El LCP element de PSI está en `lcp-breakdown-insight`, no donde esperábamos (2026-04-12)

El campo `largest-contentful-paint-element` estuvo vacío en todas las corridas. Pero el audit `lcp-breakdown-insight` sí devuelve el elemento LCP como un nodo con selector, snippet y bounding rect. Usar este audit en vez del otro para diagnóstico.

### 3. Client Components retrasan el LCP aunque no tengan animaciones (2026-04-12)

Un `'use client'` en el componente raíz de la página hace que todo el contenido — incluyendo texto estático como un H1 — dependa de la hidratación de JavaScript para pintarse. El render delay de 2.3s no era de la animación, era de la hidratación. Para LCP óptimo, el elemento LCP debe poder renderizarse desde el servidor sin esperar JS.
