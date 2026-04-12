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

---

## Aprendizajes acumulados

### 1. No asumir causa raíz sin medir después del fix (2026-04-12)

La animación `x: -100vw` parecía la causa obvia del LCP alto, y el plan original (del 10 de abril) la identificó como causa confirmada. Pero después de deshabilitarla, el LCP no mejoró. Lección: **siempre medir post-fix antes de declarar victoria**, incluso cuando la causa raíz parece clara.

### 2. PSI no siempre devuelve el LCP element (2026-04-12)

El campo `largest-contentful-paint-element` estuvo vacío en todas las corridas. Esto complica el diagnóstico. Para identificar el LCP element se puede:
- Usar Chrome DevTools > Performance > marcar "Web Vitals" y ver qué elemento se marca como LCP
- Usar Lighthouse CLI local que suele dar más detalle que la API
