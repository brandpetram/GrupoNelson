# Plan para Performance del sitio web

> **Última actualización:** 2026-04-12
> **Herramienta:** PageSpeed Insights API v5 (producción, mobile)
> **API Key:** PageSpeed Insights en brandpetram-assets (ver `~/.secrets/tokens.md`)

---

## Estado actual (2026-04-12)

### Scores por página (producción, mobile)

| Página | Perf | FCP | LCP | TBT | CLS | SI | TTI | Payload |
|---|---|---|---|---|---|---|---|---|
| **Homepage** | 70 | 1.5s | **9.5s** | 20ms | 0 | 5.5s | 10.0s | 40,821 KiB |
| **/es/constructora/diseno-e-ingenieria** | 66 | 2.0s | **14.0s** | 30ms | 0 | 7.9s | 15.0s | 4,602 KiB |

**Accessibility, Best Practices y SEO ya están en 100 en ambas páginas.** El único problema es Performance, y la causa principal es el **LCP catastrófico**.

### Lo que ya funciona bien

- **TBT:** 20-30ms (score 100) — el JS no bloquea el hilo principal
- **CLS:** 0 (score 100) — no hay layout shifts
- **FCP:** 1.5-2.0s (score 85-95) — el primer paint es razonable

### Lo que está roto

- **LCP:** 9.5-14.0s (score 0) — esto solo destruye el score de Performance
- **Speed Index / TTI:** derivados del LCP lento
- **Imágenes:** ~2+ MB ahorrable por página en delivery
- **Network payload homepage:** 40 MB (video de 40 MB incluido)

---

## Diagnóstico por página

### Homepage — LCP 9.5s (empeoró desde 5.3s el 10 de abril)

**Elemento LCP:** El `<h1>` del hero — "Parques Industriales y Naves Built-to-Suit en Todo Mexicali"

**Causa raíz confirmada:** Animación `leftVariants` en `hero-video-cover.tsx` (línea 76-87):
```
hidden: { x: '-100vw' }    ← el contenido arranca fuera del viewport
visible: { x: 0, transition: { duration: 0.8, delay: 0.8 } }
```

El H1 existe en el DOM desde SSR pero motion/react lo mueve a `x: -100vw` antes de animarlo. Lighthouse mide cuándo es visualmente visible, no cuándo existe en el DOM.

**Problemas secundarios:**
- Video `nelson-3-optimizado.mp4` (40 MB) en el ScrollStorytelling below-the-fold — infla el network payload
- Imágenes: 2,067 KiB ahorrable en delivery
- Render blocking CSS: 600ms
- Unused JS: 47 KiB
- Legacy JS: 15 KiB

### /es/constructora/diseno-e-ingenieria — LCP 14.0s

**Causa probable:** Página con muchos componentes pesados (mosaicos, grids de imágenes, features sections). El LCP element probablemente es una imagen grande o un componente animado above-the-fold que tarda en renderizar. Necesita diagnóstico específico del elemento LCP.

**Problemas reportados:**
- Imágenes: 2,327 KiB ahorrable en delivery
- Network payload: 4,602 KiB
- Render blocking CSS: 430ms

---

## Estrategia: Fixes ordenados por impacto

### Fase 1: LCP del homepage (9.5s → <2.5s)

**Fix 1.1 (CRÍTICO): Resolver la animación del hero**

Opciones de menor a mayor intervención:

| Opción | Cambio | Riesgo | Impacto esperado |
|---|---|---|---|
| A | `enableAnimations={false}` en `page.tsx` | Cero | LCP baja a ~1.5s |
| B | Cambiar `x: '-100vw'` por `opacity: 0` → `opacity: 1` | Bajo | LCP baja a ~1.5-2s, mantiene animación visual |
| C | Reducir delay a 0 y duration a 0.3s | Bajo | LCP baja parcialmente |
| D | CSS `@keyframes` en vez de motion/react | Medio | LCP óptimo, no depende de JS |

**Recomendación:** Probar A para confirmar que el LCP baja. Luego implementar B o D como solución definitiva si se quiere mantener animación.

**Fix 1.2 (ALTO): Optimizar imagen hero**

2,067 KiB ahorrable. Verificar que la imagen del hero usa `<Image>` de Next.js con `priority` y que el formato avif/webp se está sirviendo correctamente. Si la imagen es de `/public/`, Next.js la optimiza via `/_next/image` — pero si es muy grande el original, la optimización puede no ser suficiente. Considerar comprimir el original.

**Fix 1.3 (MEDIO): Verificar que el video no se pre-descarga**

El video de 40 MB inflama el payload a 40,821 KiB. Verificar:
- `preload="none"` en el `<video>` tag
- Que no hay un `<link rel="preload">` para el video
- Que el ScrollStorytelling no monta el video hasta que está en viewport (intersection observer o similar)

### Fase 2: LCP de páginas interiores

**Fix 2.1: Diagnóstico del elemento LCP de /es/constructora/diseno-e-ingenieria**

Correr PSI con detalle completo para identificar qué elemento es el LCP en esta página. Puede ser:
- Una imagen grande del hero/mosaico sin `priority`
- Un componente animado (como en el homepage)
- Una imagen de Sanity sin optimización

**Fix 2.2: Auditar las demás páginas pesadas**

Correr PSI en batch sobre las páginas más probables de tener problemas:
- `/es/constructora/portafolio-baumex`
- `/es/parques-industriales-mexicali/nelson-ii`
- `/es/experiencia/liderazgo`
- `/about/leadership`
- Homepage EN (`/`)

Documentar LCP element y score de cada una. Priorizar las que tengan LCP > 4s.

### Fase 3: Optimización de imágenes (site-wide)

**Fix 3.1: Auditar tamaños de imágenes en `/public/`**

Muchas imágenes originales pueden ser excesivamente grandes (4000x3000+). Next.js las optimiza al servirlas, pero:
- La optimización on-the-fly tiene límite (el original muy grande = más tiempo de procesamiento en el primer request)
- Hay que verificar que todas las imágenes usan `<Image>` de Next.js, no `<img>` nativo
- Verificar que `sizes` está configurado correctamente (no `sizes="100vw"` cuando el elemento solo ocupa 50vw)

**Fix 3.2: Verificar `sizes` prop en todos los `<Image>`**

Un `sizes="100vw"` en una imagen que solo ocupa 33% del viewport hace que Next.js sirva una imagen 3x más grande de lo necesario. Esto es un patrón común que desperdicia bandwidth.

**Fix 3.3: Agregar `priority` a imágenes LCP**

Solo la imagen above-the-fold más grande de cada página debe tener `priority`. Verificar que no se está usando `loading="lazy"` en imágenes LCP.

### Fase 4: Prefetch y velocidad de navegación SPA

**Fix 4.1: Verificar que prefetch funciona en producción**

Next.js hace prefetch automático de las rutas visibles en el viewport. Si la navegación tarda 10-15 segundos entre páginas, puede ser que:
- El prefetch esté deshabilitado (`prefetch={false}` en los `<Link>`)
- Las páginas destino tengan data fetching lento (llamadas a Sanity, etc.)
- Las páginas sean estáticas pero muy pesadas en JS

**Fix 4.2: Verificar que las páginas estáticas se sirven como estáticas**

En el build output, verificar que las páginas marcadas con `○ (Static)` realmente se sirven como HTML estático desde el edge, no como server-rendered on demand.

### Fase 5: Optimizaciones de bundle

**Fix 5.1: Unused JavaScript (47 KiB)**

Identificar qué JS no se usa. Probablemente polyfills o librerías importadas pero no utilizadas en la página.

**Fix 5.2: Legacy JavaScript (15 KiB)**

Next.js debería manejar esto automáticamente con `browserslist`. Verificar configuración.

**Fix 5.3: Render blocking CSS (430-600ms)**

Next.js inlinea CSS crítico automáticamente. Si hay 430-600ms de bloqueo, puede ser que haya imports CSS globales pesados o fonts bloqueantes. Verificar `globals.css` y la carga de fuentes.

---

## Orden de ejecución

| Fase | Prioridad | Impacto esperado | Complejidad |
|---|---|---|---|
| 1.1 | Urgente | LCP homepage de 9.5s a <2.5s | Trivial (1 línea) a Baja |
| 1.2 | Alta | Reduce payload ~2 MB | Baja |
| 1.3 | Alta | Reduce payload ~40 MB | Baja (verificación) |
| 2.1 | Alta | LCP diseño de 14s a <4s | Media (diagnóstico + fix) |
| 2.2 | Media | Baseline de todo el sitio | Baja (solo auditoría) |
| 3.1-3.3 | Media | Mejora global de imágenes | Media |
| 4.1-4.2 | Media | Navegación SPA más rápida | Baja (verificación) |
| 5.1-5.3 | Baja | ~60 KiB menos + 400ms menos blocking | Baja |

---

## Cómo medir

**Request reproducible para cualquier página:**
```
GET https://www.googleapis.com/pagespeedonline/v5/runPagespeed
  ?url=https://www.nelson.com.mx/{path}
  &strategy=mobile
  &category=performance
  &key=<PSI_KEY de ~/.secrets/tokens.md>
```

**Regla de verificación:** Los scores de PSI varían entre corridas. Para cualquier medición baseline o post-fix, correr la API **3 veces** y tomar la **mediana** del score de Performance. No tomar decisiones basadas en una sola corrida.

---

## Targets

| Métrica | Actual (peor caso) | Target | Criterio |
|---|---|---|---|
| Performance | 66 | 90+ | Todas las páginas principales |
| LCP | 14.0s | < 2.5s | Ninguna página arriba de 4s |
| Accessibility | 100 | 100 | Mantener |
| Best Practices | 100 | 100 | Mantener |
| SEO | 100 | 100 | Mantener |

---

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Quitar animación del hero reduce calidad visual | Probar sin animación (Fix 1.1A), luego considerar fade (Fix 1.1B) |
| Variabilidad de PSI da falsos positivos/negativos | Regla de 3 corridas + mediana |
| Optimizar imágenes degrada calidad | avif/webp con quality 80+ (ya configurado en next.config) |
| 100 en Performance es difícil de mantener | Target realista: 90+ sostenido |
| Fix de una página no aplica a todas | Auditar las 6-8 páginas más visitadas individualmente |
