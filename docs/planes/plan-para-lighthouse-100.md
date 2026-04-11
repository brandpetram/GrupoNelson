# Plan para Lighthouse 100/100/100/100

> **Fecha:** 2026-04-10  
> **Página auditada:** Homepage  
> **Herramientas:** Lighthouse 13.1.0 CLI (localhost) + PageSpeed Insights API v5 (producción)  
> **API Key:** PageSpeed Insights en brandpetram-assets (ver `~/.secrets/tokens.md`)

---

## Scores actuales

### Producción (nelson.com.mx — PageSpeed Insights API, mobile)

**Request reproducible:**
```
GET https://www.googleapis.com/pagespeedonline/v5/runPagespeed
  ?url=https://www.nelson.com.mx
  &strategy=mobile
  &category=performance
  &category=accessibility
  &category=best-practices
  &category=seo
  &key=<PSI_KEY de ~/.secrets/tokens.md>
```

| Métrica | Score | Estado |
|---|---|---|
| **Performance** | 71 | Mejorable |
| **Accessibility** | 100 | Perfecto |
| **Best Practices** | 100 | Perfecto |
| **SEO** | 100 | Perfecto |

### Localhost (Lighthouse CLI, mobile)

| Métrica | Score | Estado |
|---|---|---|
| **Performance** | 38 | Crítico (no representativo — sin CDN ni compresión) |
| **Accessibility** | 97 | Casi perfecto |
| **Best Practices** | 100 | Perfecto |
| **SEO** | 100 | Perfecto |

---

## Performance (71 → 90+)

### Métricas de producción (PageSpeed Insights API, mobile)

| Métrica | Valor actual | Target | Score |
|---|---|---|---|
| First Contentful Paint | ~1.5s | < 1.8s | 95 |
| Largest Contentful Paint | **5.3s** | < 2.5s | 22 |
| Total Blocking Time | 20ms | < 200ms | 100 |
| Cumulative Layout Shift | 0 | < 0.1 | 100 |
| Speed Index | 5.1s | < 3.4s | 62 |
| Time to Interactive | 5.5s | < 3.8s | 70 |

**FCP, TBT y CLS ya son perfectos en producción.** El único problema real es **LCP de 5.3 segundos**.

### Causa raíz identificada: LCP

**Elemento LCP:** El `<h1>` del hero — `"Parques Industriales y Naves Built‑to‑Suit en Todo Mexicali"`  
**Selector:** `div.container > div > div.max-w-md > h1.text-3xl`

**Breakdown del LCP:**
- Time to first byte: **0.6s** (excelente)
- Element render delay: **2,469ms** (el problema)

**Causa raíz real: la animación del hero mueve el H1 fuera de pantalla al inicio.**

En `src/components/hero-video-cover.tsx` (línea 76-87), `leftVariants` define:
```
hidden: { x: '-100vw' }    ← el contenido arranca fuera del viewport
visible: { x: 0, transition: { duration: 0.8, delay: 0.8 } }
```

Y en `src/app/(site)/page.tsx` (línea 51): `enableAnimations={true}`.

El flujo real es:
1. TTFB llega en 0.6s
2. React hydration ejecuta
3. motion/react inicializa y posiciona el H1 en `x: -100vw` (fuera de pantalla)
4. Después de 0.8s de delay, comienza la animación de 0.8s
5. El H1 se vuelve visible en su posición final ~2.2s después de hydration

**El H1 técnicamente existe en el DOM desde el SSR, pero motion/react lo mueve fuera del viewport antes de que el usuario lo vea.** Lighthouse mide cuándo el elemento es visualmente pintado en el viewport, no cuándo existe en el DOM.

**LCP Request Discovery = score 0:** El browser no puede determinar que el H1 será el LCP element porque su posición visual depende de JavaScript.

### Problemas secundarios encontrados

| Problema | Impacto | Detalle |
|---|---|---|
| **Imagen hero no en formato óptimo** | 1,420 KiB ahorrable | `parque-industrial-mexicali...` debería servirse en avif/webp más agresivo |
| **Imagen de bandera `/eua.jpg`** | Menor | No usa Next Image, no está optimizada |
| **Video de 40 MB en network** | Network payload | `nelson-3-optimizado.mp4` se referencia en el homepage |
| **Render blocking CSS** | 740ms | 2 chunks CSS bloquean el render inicial |
| **Unused JS** | 47 KiB | JS cargado pero no usado |
| **Legacy JavaScript** | 15 KiB | Polyfills innecesarios en el bundle |

### Fixes ordenados por impacto

**Fix 1 (CRÍTICO): Eliminar o reducir la animación de entrada del hero**

La animación `leftVariants` con `x: '-100vw'` y `delay: 0.8` es la causa directa del LCP de 5.3s. El H1 está en el DOM pero fuera del viewport hasta que la animación termina.

Opciones (de menor a mayor intervención):
- A) **Cambiar `enableAnimations={false}`** en `page.tsx` línea 51. Impacto inmediato, cero riesgo. El hero aparece sin animación. Verificar con PSI si el LCP baja a ~1.5s.
- B) **Cambiar la animación para que no mueva el contenido fuera del viewport.** En vez de `x: '-100vw'`, usar `opacity: 0` → `opacity: 1`. El elemento ocupa su posición desde el inicio y Lighthouse lo detecta como visible. La animación visual se mantiene pero como fade en vez de slide.
- C) **Reducir el delay.** Cambiar `delay: 0.8` → `delay: 0` y `duration: 0.8` → `duration: 0.3`. El contenido aparece más rápido sin eliminar la animación.
- D) **Usar CSS animation en vez de motion/react.** El CSS `@keyframes` se aplica desde el HTML inicial sin esperar JS. Más complejo pero más correcto.

**Recomendación:** Probar A primero (5 segundos de cambio). Si el LCP baja a <2.5s, el problema está resuelto y se decide después si se quiere una animación alternativa (B, C o D).

**Fix 2 (ALTO): Optimizar imagen hero**

La imagen del hero pierde 1,420 KiB por no estar en formato óptimo. Next.js ya tiene `formats: ['image/avif', 'image/webp']` configurado — verificar que la imagen del hero usa `<Image>` de Next.js con `priority`.

**Fix 3 (MEDIO): Lazy load del video**

El video `nelson-3-optimizado.mp4` (40 MB) se referencia en el ScrollStorytelling que está below-the-fold. Con `preload="none"` (que ya tiene) no debería afectar el LCP, pero sí el network payload total. Verificar que no se descarga hasta que el usuario scrollea.

**Fix 4 (BAJO): CSS render blocking**

740ms de bloqueo por CSS. Next.js maneja esto automáticamente — verificar si hay imports CSS globales innecesarios o si se puede inline el CSS crítico.

---

## Accessibility (100 en producción)

Ya perfecto en producción. En localhost hay un issue menor de contraste (`text-gray-500`/`text-gray-600`) que Vercel/producción no reporta — posiblemente porque la versión deployeada tiene dark mode/theme distinto. Monitorear pero no bloquea.

---

## Best Practices (100) — Ya perfecto

Nada que hacer.

---

## SEO (100) — Ya perfecto

Nada que hacer.

---

## Orden de ejecución

### Fase A: Accesibilidad — Ya 100 en producción

No requiere acción. Monitorear en futuros deploys.

### Fase B: Performance — LCP (5.3s → <2.5s)

**Causa raíz confirmada:** Animación `leftVariants` en hero-video-cover.tsx.

1. Probar Fix 1A: cambiar `enableAnimations={false}` en `page.tsx`
2. Deploy a preview de Vercel
3. Correr PSI contra el preview URL
4. Si LCP < 2.5s → decidir si se quiere animación alternativa (Fix 1B/C/D) o se deja sin animación
5. Si LCP sigue alto → investigar si hay otra causa (imagen hero, CSS blocking)

**Estimación:** 15 minutos para el test. La decisión sobre la animación puede tomar más.

### Fase C: Performance — Optimizaciones secundarias

Solo si Fase B no lleva el score a 90+:

1. Optimizar imagen hero (1,420 KiB ahorrable en delivery)
2. Verificar que video `nelson-3-optimizado.mp4` no se pre-descarga
3. Reducir unused JS (47 KiB)
4. Evaluar CSS render blocking (740ms)

**Nota:** TBT ya es 20ms en producción (score 100). No requiere trabajo.

### Fase D: Verificación

1. Correr PSI contra producción (mobile + desktop) — **3 corridas, tomar la mediana**
2. Verificar en las páginas más pesadas (Homepage, Baumex, Parques)
3. Documentar scores finales

**Regla de verificación para PSI:** Los scores de PSI varían entre corridas. Para cualquier medición baseline o post-fix, correr la API **3 veces** y tomar la **mediana** del score de Performance. No tomar decisiones basadas en una sola corrida.

---

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Quitar animación del hero reduce calidad visual | Probar primero sin animación (Fix 1A), luego considerar fade (Fix 1B) como alternativa |
| Variabilidad de PSI da falsos positivos/negativos | Regla de 3 corridas + mediana para cualquier decisión |
| Optimizar imágenes degrada calidad | Usar avif/webp con quality 80+ (ya configurado en next.config) |
| 100 en Performance es difícil de mantener | Target realista: 90+ sostenido. 100 requiere cero animaciones JS en above-the-fold |

---

## Nota importante

Tres de cuatro métricas ya están en 100 en producción. El único trabajo real es bajar el LCP de 5.3s a <2.5s, y la causa raíz ya está identificada (animación del hero).

| Métrica | Actual (prod) | Target | Trabajo necesario |
|---|---|---|---|
| Performance | 71 | 90+ | Fix de animación hero (LCP) |
| Accessibility | 100 | 100 | Ninguno |
| Best Practices | 100 | 100 | Ninguno |
| SEO | 100 | 100 | Ninguno |

100 en Performance requiere que no haya animaciones JS en el above-the-fold. 90+ es alcanzable con una animación de fade (opacity) en vez del slide actual (translateX).
