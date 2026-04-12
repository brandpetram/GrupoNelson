# Plan para actualizar sitemap y notificar a Google

> **Fecha:** 2026-04-11 (corregido con findings de review)  
> **Estado:** Pendiente  
> **Prerequisito:** Plan de extensión (Fases 8-14) en progreso

---

## Estado actual del sitemap

El sitemap en producción (`https://www.nelson.com.mx/sitemap.xml`) contiene **114 URLs**:

| Tipo | Cantidad | hreflang |
|---|---|---|
| Rutas EN (inglés) | 35 | ✅ Todas con hreflang ES↔EN |
| Rutas ES (español) | 35 | ✅ Todas con hreflang ES↔EN |
| Blog posts (Sanity, ES) | ~30 | Sin hreflang (no hay versión EN) |
| Noticias (Sanity, ES) | ~12 | Sin hreflang (no hay versión EN) |

**Nota sobre conteo:** Son 35 pares bilingües, no 36. El par `/thank-you` ↔ `/es/gracias` existe en `route-map.ts` y `createMetadata()` genera alternates para ellos, pero `sitemap.ts` no los incluye como entradas porque ambas páginas tienen `robots: { index: false }`. Esto es correcto: no tiene sentido poner en el sitemap páginas que le pides a Google que no indexe.

### Lo que ya funciona

- Las 35 rutas bilingües tienen hreflang bidireccional correcto en el sitemap
- `createMetadata()` genera canonical + alternates en cada página (incluyendo thank-you/gracias con noindex)
- Blog y noticias correctamente excluidos de hreflang (no tienen versión EN)

---

## Acciones

### Acción 1: Verificar sitemap — ✅ Ya hecho

```bash
curl -s "https://www.nelson.com.mx/sitemap.xml" | grep -c '<url>'
# Resultado: 114 (incluye blog/noticias dinámicos de Sanity)
```

### Acción 2: Crear robots.txt

**Problema:** `https://www.nelson.com.mx/robots.txt` responde 404. El repo no tiene un archivo `robots.txt` ni un generador. Sin robots.txt, Google no tiene indicación de dónde está el sitemap.

**Trabajo:** Crear `src/app/robots.ts` (Next.js App Router genera robots.txt automáticamente):

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.nelson.com.mx/sitemap.xml',
  }
}
```

**Verificar después del deploy:** `curl -s "https://www.nelson.com.mx/robots.txt"` debe retornar contenido con la referencia al sitemap.

### Acción 3: Enviar sitemap a Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Verificar que la propiedad `nelson.com.mx` (o `www.nelson.com.mx`) está verificada
3. Ir a **Sitemaps** → enviar `https://www.nelson.com.mx/sitemap.xml`
4. Si el sitemap ya estaba enviado, Google lo re-procesa automáticamente en cada crawl

**Nota:** Google puede tardar días o semanas en procesar los cambios. Los redirects 301 aceleran el proceso pero no lo hacen instantáneo.

### Acción 4: Verificar redirects 301 con Google

Después de enviar el sitemap, monitorear en Google Search Console:

1. **Cobertura** → buscar errores de "URL no encontrada" o "redirect loop"
2. **Rendimiento** → verificar que las URLs nuevas (`/about/*`, `/construction/*`, etc.) empiezan a aparecer
3. **Eliminaciones** → verificar que las URLs viejas (`/nelson/*`, `/constructora/*`) se marcan como redirigidas, no como errores

### Acción 5: Solicitar indexación de URLs prioritarias

En Google Search Console → **Inspección de URLs** → solicitar indexación para:

1. `https://www.nelson.com.mx/` (home EN)
2. `https://www.nelson.com.mx/industrial-parks` (parques EN)
3. `https://www.nelson.com.mx/construction/baumex` (Baumex EN)
4. `https://www.nelson.com.mx/contact` (contacto EN)
5. `https://www.nelson.com.mx/es` (home ES nueva URL)

Google tiene una cuota de solicitudes por día (no publicada oficialmente).

---

## Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Google penaliza por cambio masivo de URLs | Medio | Redirects 301 están en producción — Google los procesa bien |
| URLs viejas pierden ranking temporalmente | Alto | Normal — el ranking se transfiere via 301 en 2-4 semanas |
| Contenido duplicado ES/EN | Bajo | hreflang bidireccional evita este problema |
| robots.txt inexistente | Medio | Acción 2 lo resuelve — sin él Google no descubre el sitemap automáticamente |

---

## Cronograma sugerido

| Cuándo | Qué |
|---|---|
| Inmediato | Acción 1 (verificar sitemap) — ✅ ya hecho |
| Siguiente sesión | Acción 2 (crear robots.ts) — requiere código + deploy |
| Después del deploy | Acción 3 (enviar sitemap a GSC) — manual |
| Esta semana | Acción 5 (solicitar indexación de URLs prioritarias) — manual |
| 2-4 semanas | Acción 4 (monitorear cobertura y rendimiento) — manual |
