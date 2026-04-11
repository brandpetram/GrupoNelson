# Plan para Lighthouse 100/100/100/100

> **Fecha:** 2026-04-10  
> **Página auditada:** Homepage (`localhost:3002`)  
> **Herramienta:** Lighthouse 13.1.0 via CLI (mobile emulation)

---

## Scores actuales

| Métrica | Score | Estado |
|---|---|---|
| **Performance** | 38 | Crítico |
| **Accessibility** | 97 | Casi perfecto |
| **Best Practices** | 100 | Perfecto |
| **SEO** | 100 | Perfecto |

---

## Performance (38 → 100)

### Métricas individuales

| Métrica | Valor actual | Target | Score |
|---|---|---|---|
| First Contentful Paint | 1.1s | < 1.8s | 100 |
| Largest Contentful Paint | **12.0s** | < 2.5s | 0 |
| Total Blocking Time | **5,400ms** | < 200ms | 0 |
| Cumulative Layout Shift | 0 | < 0.1 | 100 |
| Speed Index | 7.4s | < 3.4s | 28 |

**Los dos problemas principales son LCP (12s) y TBT (5.4s).** FCP y CLS ya son perfectos.

### Causa raíz: LCP (12 segundos)

El LCP es probablemente un video o imagen hero grande que tarda en cargar. En la homepage, el hero usa un video de fondo y/o imágenes pesadas.

**Fixes:**
1. **Identificar el elemento LCP** — Correr Lighthouse con `--output html` para ver exactamente qué elemento es el LCP
2. **Si es un video:** Agregar `poster` con imagen ligera, usar `preload="none"`, y asegurar que el video no bloquee el LCP
3. **Si es una imagen:** Usar `<Image priority>` de Next.js en la imagen hero, verificar que use formatos modernos (avif/webp — ya configurados en next.config)
4. **Optimizar tamaño de imágenes:** Las imágenes del homepage deben estar en resolución adecuada para el viewport, no originales de 4K
5. **Preconnect** a CDNs externos si se usan

### Causa raíz: TBT (5,400ms)

5.4 segundos de bloqueo del main thread es extremo. Causas probables:
- `motion/react` (framer-motion) inicializando muchas animaciones al cargar
- Componentes `'use client'` con `useEffect` pesados
- ScrollStorytelling con 8 items y videos/observers
- Múltiples IntersectionObservers y event listeners

**Fixes:**
1. **Lazy load de componentes below-the-fold:** El ScrollStorytelling, FAQs, CirculosConProps, etc. no necesitan cargarse al inicio. Usar `dynamic(() => import(...), { ssr: false })` o `React.lazy`
2. **Reducir JS del bundle:**
   - Lighthouse reporta 296 KiB de JS sin usar — revisar qué se importa pero no se renderiza
   - Lighthouse reporta 232 KiB de JS sin minificar — verificar que el build de producción minifica correctamente
3. **Diferir motion/react:** Las animaciones de scroll no necesitan ejecutarse hasta que el usuario llegue a esa sección
4. **Audit de imports:** Verificar si hay imports pesados que se cargan en el client bundle innecesariamente (ej: toda la librería de iconos cuando solo se usan 8)
5. **Revisar `TickerOverflow` (motion-plus):** Si es una animación continua, puede estar consumiendo CPU

### Oportunidades reportadas por Lighthouse

| Oportunidad | Ahorro estimado |
|---|---|
| Minify JavaScript | 232 KiB / 1,250ms |
| Reduce unused JavaScript | 296 KiB / 1,920ms |

### Diagnósticos adicionales

| Diagnóstico | Estado |
|---|---|
| Forced reflow | Fallido — hay reflows forzados |
| Image delivery | Fallido — imágenes no optimizadas |
| Legacy JavaScript | Fallido — JS legacy en el bundle |
| Render blocking requests | Fallido — recursos bloquean el render |

---

## Accessibility (97 → 100)

### Único problema: contraste de color

**Elementos afectados:** Textos con clase `text-gray-500` y `text-gray-600` sobre fondo blanco. Específicamente en el componente RadiantHeader (stats).

**Fix:**
- Cambiar `text-gray-500` → `text-gray-600` o `text-gray-700` en los elementos afectados
- Cambiar `text-gray-600` → `text-gray-700` donde el contraste no cumple WCAG AA (4.5:1)
- Los elementos reportados son `<h2>`, `<dt>` con clases de Tailwind que usan grises claros

**Estimación:** 1 commit, ~5 archivos.

---

## Best Practices (100) — Ya perfecto

Nada que hacer.

---

## SEO (100) — Ya perfecto

Nada que hacer.

---

## Orden de ejecución

### Fase A: Accesibilidad (97 → 100) — Rápido

1. Buscar todos los `text-gray-500` y `text-gray-600` en componentes del homepage
2. Subir el contraste donde no cumple WCAG AA
3. Verificar con Lighthouse que sube a 100

**Estimación:** 30 minutos. Un commit.

### Fase B: Performance — LCP (12s → <2.5s)

1. Identificar el elemento LCP exacto
2. Si es imagen: agregar `priority`, optimizar tamaño, preload
3. Si es video: agregar poster ligero, `preload="none"`
4. Verificar que LCP baja a <2.5s

**Estimación:** 1-2 horas. Depende de qué elemento es el LCP.

### Fase C: Performance — TBT (5.4s → <200ms)

1. Lazy load de componentes below-the-fold con `dynamic()`
2. Audit de bundle size — identificar qué pesa más
3. Diferir carga de motion/react para animaciones de scroll
4. Reducir unused JS

**Estimación:** 2-4 horas. Es el más complejo — requiere profiling del bundle.

### Fase D: Performance — Verificación final

1. Correr Lighthouse en modo CI (3 corridas, promediar)
2. Verificar en mobile y desktop
3. Probar en las páginas más pesadas (Homepage, Baumex, Parques)

---

## Riesgos

| Riesgo | Mitigación |
|---|---|
| Lazy load rompe la experiencia visual (flash de contenido) | Usar skeletons o min-height para evitar CLS |
| Quitar animaciones reduce la calidad visual | No quitar — solo diferir la carga del JS hasta que se necesite |
| Optimizar imágenes degrada calidad | Usar avif/webp con quality 80+ (ya configurado en next.config) |
| Lighthouse en localhost ≠ producción | Correr también contra el deploy de Vercel |
| 100 en performance es difícil de mantener | Es un target — 90+ sostenido es más realista en producción |

---

## Nota importante

**100 en Performance es extremadamente difícil** para un sitio con videos, animaciones motion/react y muchas imágenes. El target realista es:

| Métrica | Target realista | Target ideal |
|---|---|---|
| Performance | 90+ | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Llegar a 100 en Performance requiere compromisos agresivos en la experiencia visual (quitar videos, reducir animaciones). 90+ es alcanzable sin sacrificar diseño.
