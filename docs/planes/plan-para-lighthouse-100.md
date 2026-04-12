# Plan para Performance del sitio web

> **Última actualización:** 2026-04-12
> **Herramienta:** PageSpeed Insights API v5 (producción, mobile)
> **API Key:** PageSpeed Insights en brandpetram-assets (ver `~/.secrets/tokens.md`)

---

## Estado actual (2026-04-12)

### Scores por página (producción, mobile)

| Página | URL PSI | Perf | FCP | LCP | TBT | CLS | SI | TTI | Payload |
|---|---|---|---|---|---|---|---|---|---|
| **Homepage EN** | `https://www.nelson.com.mx` | 70 | 1.5s | **9.5s** | 20ms | 0 | 5.5s | 10.0s | 40,821 KiB |
| **Diseño e Ingeniería ES** | `https://www.nelson.com.mx/es/constructora/diseno-e-ingenieria` | 66 | 2.0s | **14.0s** | 30ms | 0 | 7.9s | 15.0s | 4,602 KiB |

**Nota sobre URLs:** `/` es la homepage EN (`src/app/(en)/page.tsx` → `home-client.tsx`). `/es` es la homepage ES (`src/app/es/page.tsx` → `home-client.tsx`). El baseline de arriba mide `/` (EN). La homepage ES no se ha medido aún — agregar en la batch de Fase 2.

**Accessibility, Best Practices y SEO ya están en 100 en ambas páginas.** El único problema es Performance, y la causa principal es el **LCP catastrófico**.

### Lo que ya funciona bien

- **TBT:** 20-30ms (score 100) — el JS no bloquea el hilo principal
- **CLS:** 0 (score 100) — no hay layout shifts
- **FCP:** 1.5-2.0s (score 85-95) — el primer paint es razonable

### Lo que está roto

- **LCP:** 9.5-14.0s (score 0) — esto solo destruye el score de Performance
- **Speed Index / TTI:** derivados del LCP lento
- **Imágenes:** ~2+ MB ahorrable por página en delivery
- **Network payload homepage EN:** 40,821 KiB (PSI lo reporta así; verificar origen — el video local pesa ~2.7 MB con `preload="none"`, ver nota en Fase 1.3)

---

## Diagnóstico por página

### Homepage EN (`/`) — LCP 9.5s (empeoró desde 5.3s el 10 de abril)

**Elemento LCP:** El `<h1>` del hero — el texto varía por idioma, pero el mecanismo es el mismo en ambos homes.

**Causa raíz confirmada:** Animación `leftVariants` en `hero-video-cover.tsx` (línea 80):
```
hidden: { x: '-100vw' }    ← el contenido arranca fuera del viewport
visible: { x: 0, transition: { duration: 0.8, delay: 0.8 } }
```

`enableAnimations={true}` está activo en `home-client.tsx` (línea 51 EN).

El H1 existe en el DOM desde SSR pero motion/react lo mueve a `x: -100vw` antes de animarlo. Lighthouse mide cuándo es visualmente visible, no cuándo existe en el DOM.

**Problemas secundarios:**
- Imágenes: 2,067 KiB ahorrable en delivery
- Render blocking CSS: 600ms
- Unused JS: 47 KiB
- Legacy JS: 15 KiB

### /es/constructora/diseno-e-ingenieria — LCP 14.0s

**Causa raíz identificada:** El hero es `CuadriculaSectionConProps` (`cuadricula-section-con-props.tsx` línea 57), que renderiza **20 `<img>` crudos** (no `<Image>` de Next.js) dentro del viewport con animaciones de motion/react (líneas 224-420). Cada imagen tiene animación de entrada con `motion.div`, y el componente monta las 20 imágenes above-the-fold simultáneamente.

Esto es el mismo patrón que el homepage: contenido animado con motion/react que retrasa el LCP. Pero aquí es peor porque son 20 imágenes crudas sin optimización de Next.js, más las animaciones.

**Problemas reportados:**
- Imágenes: 2,327 KiB ahorrable en delivery (20 imágenes crudas sin avif/webp)
- Network payload: 4,602 KiB
- Render blocking CSS: 430ms

---

## Estrategia

### Enfoque: página por página, con aprendizajes acumulados

No vamos a optimizar todo el sitio de golpe. Vamos a ir **página por página**, comenzando por el homepage. Cada página optimizada genera aprendizajes que se aplican a la siguiente — patrones que se repiten, fixes que se pueden replicar, trampas que hay que evitar.

**Dos documentos de trabajo:**

| Documento | Propósito |
|---|---|
| **Este plan** (`plan-para-lighthouse-100.md`) | Qué hacer, en qué orden, qué medir |
| **Bitácora** (`docs/planes/bitacora-de-performance-y-aprendizajes.md`) | Qué hicimos en cada página, qué aprendimos, qué cambiaríamos |

El plan define la estrategia. La bitácora documenta la ejecución real — decisiones tomadas, scores antes/después, sorpresas, y aprendizajes que informan las siguientes páginas. Antes de optimizar una página nueva, revisar la bitácora para no repetir errores y reutilizar lo que funcionó.

**Orden de páginas:**
1. Homepage EN (`/`) — comenzar aquí porque tiene el diagnóstico más completo
2. Homepage ES (`/es`) — aplicar los mismos aprendizajes del EN
3. `/es/constructora/diseno-e-ingenieria` — caso más severo (LCP 14s), pero requiere fix de componente compartido
4. Resto de páginas pesadas (batch de Fase 2)

---

## Fixes ordenados por impacto

### Fase 1: LCP del homepage (9.5s → <2.5s)

**Fix 1.1 (CRÍTICO): Resolver la animación del hero**

Opciones de menor a mayor intervención:

| Opción | Cambio | Riesgo | Impacto esperado |
|---|---|---|---|
| A | `enableAnimations={false}` en ambos `home-client.tsx` | Cero | LCP baja a ~1.5s |
| B | Cambiar `x: '-100vw'` por `opacity: 0` → `opacity: 1` | Bajo | LCP baja a ~1.5-2s, mantiene animación visual |
| C | Reducir delay a 0 y duration a 0.3s | Bajo | LCP baja parcialmente |
| D | CSS `@keyframes` en vez de motion/react | Medio | LCP óptimo, no depende de JS |

**Recomendación:** Probar A para confirmar que el LCP baja. Luego implementar B o D como solución definitiva si se quiere mantener animación.

**Fix 1.2 (ALTO): Optimizar imagen hero**

2,067 KiB ahorrable. El hero hoy usa `<img>` nativo en `hero-video-cover.tsx` (línea 175), no `<Image>` de Next.js — por lo tanto no recibe optimización avif/webp ni responsive sizing.

**Decisión necesaria:** migrar a `<Image>` de Next.js (habilita avif/webp + responsive) o mantener `<img>` nativo y optimizar el asset manualmente (comprimir original, servir en formato óptimo). Migrar a `<Image>` es la opción recomendada porque resuelve el problema de forma automática y consistente.

**Fix 1.3 (MEDIO): Investigar el network payload de 40,821 KiB**

PSI reporta 40,821 KiB de payload total, pero el video local (`parques-industriales-mexicali-nelson-3-optimizado.mp4`) pesa ~2.7 MB, no 40 MB. El video ya tiene `preload="none"` en `hero-video-cover.tsx` (líneas 200, 235) y en `scroll-storytelling.tsx` (línea 141), con IntersectionObserver (línea 317). 

**Pendiente:** Investigar qué compone los 40 MB de payload. Puede ser que PSI esté contando assets que se cargan después del initial load, o que haya otros recursos pesados no identificados. No asumir que es el video hasta verificar con el detalle del reporte PSI.

### Fase 2: LCP de /es/constructora/diseno-e-ingenieria (14.0s → <2.5s)

**Fix 2.1 (CRÍTICO): Resolver las 20 imágenes crudas del hero mosaic**

El componente `CuadriculaSectionConProps` en `cuadricula-section-con-props.tsx` renderiza 20 `<img>` HTML nativos con animaciones de motion/react above-the-fold. Esto causa:
- 20 requests de imágenes sin optimización (sin avif/webp, sin responsive sizes)
- Animaciones que retrasan la visibilidad del contenido LCP
- Payload de imágenes innecesariamente grande

**Opciones:**
- A) Reemplazar `<img>` por `<Image>` de Next.js con `sizes` apropiados — reduce payload y habilita avif/webp
- B) Reducir la cantidad de imágenes above-the-fold (cargar solo las visibles, lazy load el resto)
- C) Cambiar animaciones de motion a opacity/CSS para no retrasar LCP

**Recomendación:** Hacer A + B + C combinados.

**Alcance:** Este fix afecta ambas rutas que usan el componente — `/es/constructora/diseno-e-ingenieria` y `/construction/engineering-design` (EN). La verificación post-fix debe medir ambas URLs.

**Fix 2.2: Auditar las demás páginas pesadas**

Correr PSI en batch sobre las páginas más probables de tener problemas:
- `/es` (homepage ES — no medida aún)
- `/es/constructora/baumex`
- `/es/constructora/portafolio`
- `/es/parques-industriales-mexicali/nelson-ii`
- `/es/nelson/liderazgo`
- `/about/leadership`

Documentar LCP element y score de cada una. Priorizar las que tengan LCP > 2.5s.

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

### Fase 4: Optimizaciones de bundle

**Fix 4.1: Unused JavaScript (47 KiB)**

Identificar qué JS no se usa. Probablemente polyfills o librerías importadas pero no utilizadas en la página.

**Fix 4.2: Legacy JavaScript (15 KiB)**

Next.js debería manejar esto automáticamente con `browserslist`. Verificar configuración.

**Fix 4.3: Render blocking CSS (430-600ms)**

Next.js inlinea CSS crítico automáticamente. Si hay 430-600ms de bloqueo, puede ser que haya imports CSS globales pesados o fonts bloqueantes. Verificar `globals.css` y la carga de fuentes.

---

## Fuera de la ruta crítica para score PSI

### Prefetch y navegación SPA

PSI/Lighthouse mide carga fría de URL, no transiciones internas. Mejorar la velocidad de navegación SPA (prefetch, etc.) mejora la UX real del usuario pero **no afecta el score de Lighthouse**. No incluir en la ruta crítica para "90+".

Si se quiere trabajar en navegación SPA como proyecto separado:
- Verificar que prefetch funciona en producción
- Verificar que las páginas estáticas se sirven como estáticas desde el edge
- Investigar si hay data fetching lento (Sanity, etc.) en las transiciones

---

## Orden de ejecución

| Fase | Prioridad | Impacto esperado | Complejidad |
|---|---|---|---|
| 1.1 | Urgente | LCP homepage de 9.5s a <2.5s | Trivial (1 línea) a Baja |
| 1.2 | Alta | Reduce payload ~2 MB | Baja |
| 1.3 | Media | Investigación de payload | Baja (solo análisis) |
| 2.1 | Urgente | LCP diseño de 14s a <2.5s | Media (20 imgs + animaciones) |
| 2.2 | Media | Baseline de todo el sitio | Baja (solo auditoría) |
| 3.1-3.3 | Media | Mejora global de imágenes | Media |
| 4.1-4.3 | Baja | ~60 KiB menos + 400ms menos blocking | Baja |

---

## Cómo medir

### Setup

Cargar la API key como variable de entorno (el valor está en `~/.secrets/tokens.md` bajo "PageSpeed Insights API"):

```bash
export PSI_KEY="<copiar de ~/.secrets/tokens.md>"
```

### Comando reproducible

```bash
curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.nelson.com.mx&strategy=mobile&category=performance&key=$PSI_KEY" \
| jq '{
  score: (.lighthouseResult.categories.performance.score * 100),
  metrics: {
    FCP: .lighthouseResult.audits["first-contentful-paint"].displayValue,
    LCP: .lighthouseResult.audits["largest-contentful-paint"].displayValue,
    TBT: .lighthouseResult.audits["total-blocking-time"].displayValue,
    CLS: .lighthouseResult.audits["cumulative-layout-shift"].displayValue,
    SI:  .lighthouseResult.audits["speed-index"].displayValue,
    TTI: .lighthouseResult.audits["interactive"].displayValue
  },
  lcp_element: (.lighthouseResult.audits["largest-contentful-paint-element"].details.items[0]?
    // null | if . then {node: .node.snippet, type: .node.nodeLabel} else "no disponible en esta corrida" end),
  opportunities: [.lighthouseResult.audits | to_entries[]
    | select(.value.details.type? == "opportunity" and .value.score? != null and .value.score < 0.9)
    | {title: .value.title, savings: .value.displayValue, score: .value.score}]
    | sort_by(.score) | .[0:5],
  diagnostics: [.lighthouseResult.audits | to_entries[]
    | select(.value.details? != null and (.value.score? == null or .value.score < 0.9))
    | select(.key | startswith("largest-contentful") or startswith("render-blocking") or
      startswith("unused-") or startswith("legacy-") or startswith("total-byte") or
      startswith("dom-size") or startswith("network-") or startswith("mainthread-") or
      startswith("bootup-") or startswith("font-display") or startswith("uses-"))
    | {title: .value.title, detail: .value.displayValue, score: .value.score}]
    | .[0:8]
}'
```

Para medir otra página, cambiar la URL en el parámetro `url=`. Ejemplo: `url=https://www.nelson.com.mx/es/constructora/diseno-e-ingenieria`.

### Regla de 3 corridas

Los scores de PSI varían entre corridas. Para cualquier medición baseline o post-fix:

1. Correr el comando **3 veces**
2. Tomar la **mediana** del score de Performance
3. No tomar decisiones basadas en una sola corrida

### Registro de mediciones

Cada medición se registra en `docs/planes/bitacora-de-performance-y-aprendizajes.md` con este formato:

```markdown
### [página] — [fecha]

**Contexto:** [baseline | post-fix de X]

| Corrida | Score | LCP | FCP |
|---|---|---|---|
| 1 | 70 | 9.5s | 1.5s |
| 2 | 68 | 10.1s | 1.6s |
| 3 | 71 | 9.3s | 1.5s |
| **Mediana** | **70** | **9.5s** | **1.5s** |

**Top opportunities:** [listar las 2-3 principales]

**Cambio aplicado:** [qué se hizo, o "baseline — sin cambios"]

**Conclusión:** [qué aprendimos, qué sigue]
```

Opcionalmente, guardar el JSON completo de cada corrida para referencia futura (`docs/planes/psi-runs/[página]-[fecha]-[n].json`), pero la bitácora en Markdown es la fuente principal.

---

## Targets

**Definición canónica de éxito para LCP:** el target es **< 2.5s** en todas las páginas principales. Ese es el umbral "bueno" de Core Web Vitals y el que mueve el score de Performance a 90+. No hay un segundo umbral de "aceptable a 4s" — si una página queda arriba de 2.5s, sigue en la lista de trabajo.

| Métrica | Actual (peor caso) | Target |
|---|---|---|
| Performance | 66 | 90+ en todas las páginas principales |
| LCP | 14.0s | < 2.5s en todas las páginas principales |
| Accessibility | 100 | Mantener |
| Best Practices | 100 | Mantener |
| SEO | 100 | Mantener |

---

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Quitar animación del hero reduce calidad visual | Probar sin animación (Fix 1.1A), luego considerar fade (Fix 1.1B) |
| Variabilidad de PSI da falsos positivos/negativos | Regla de 3 corridas + mediana |
| Optimizar imágenes degrada calidad | avif/webp con quality configurado en Next.js (nota: `next.config.ts` no define `quality` global, se usa el default de 75; subir a 80+ si la calidad visual no es suficiente) |
| 100 en Performance es difícil de mantener | Target realista: 90+ sostenido |
| Fix de una página no aplica a todas | Auditar las 6-8 páginas más visitadas individualmente |
