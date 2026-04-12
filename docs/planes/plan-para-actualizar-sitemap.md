# Plan para actualizar sitemap y notificar a Google

> **Fecha:** 2026-04-11  
> **Estado:** Pendiente  
> **Prerequisito:** Plan de extensión (Fases 8-14) en progreso

---

## Estado actual del sitemap

El sitemap en producción (`https://www.nelson.com.mx/sitemap.xml`) contiene **114 URLs**:

| Tipo | Cantidad | hreflang |
|---|---|---|
| Rutas EN (inglés) | 36 | ✅ Todas con hreflang ES↔EN |
| Rutas ES (español) | 36 | ✅ Todas con hreflang ES↔EN |
| Blog posts (Sanity, ES) | ~30 | ❌ Sin hreflang (no hay versión EN) |
| Noticias (Sanity, ES) | ~12 | ❌ Sin hreflang (no hay versión EN) |

### Lo que ya funciona

- Las 36 rutas bilingües tienen hreflang bidireccional correcto
- `createMetadata()` genera canonical + alternates en cada página
- Blog y noticias correctamente excluidos de hreflang (no tienen versión EN)

### Lo que falta

1. **`/thank-you` y `/es/gracias`** no están en el sitemap — correcto porque tienen `robots: { index: false }`, pero verificar que no generen hreflang huérfano

2. **Google Search Console** — hay que notificar a Google del cambio de estructura:
   - Las URLs españolas cambiaron de `/nelson/*` a `/es/nelson/*`
   - Hay 36 URLs nuevas en inglés
   - Los redirects 301 están en producción pero Google tarda semanas en procesarlos

---

## Acciones

### Acción 1: Verificar sitemap (automático, no requiere cambios)

El sitemap actual (`src/app/sitemap.ts`) ya genera las entradas correctas. Verificar en producción:

```bash
curl -s "https://www.nelson.com.mx/sitemap.xml" | grep -c '<url>'
# Esperado: ~114 (36 EN + 36 ES + ~42 blog/noticias)
```

**Estado:** ✅ Ya verificado — 114 URLs, hreflang correcto.

### Acción 2: Enviar sitemap a Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Verificar que la propiedad `nelson.com.mx` (o `www.nelson.com.mx`) está verificada
3. Ir a **Sitemaps** → enviar `https://www.nelson.com.mx/sitemap.xml`
4. Si el sitemap ya estaba enviado, Google lo re-procesa automáticamente en cada crawl

**Nota:** Google puede tardar días o semanas en procesar los cambios. Los redirects 301 aceleran el proceso pero no lo hacen instantáneo.

### Acción 3: Verificar redirects 301 con Google

Después de enviar el sitemap, monitorear en Google Search Console:

1. **Cobertura** → buscar errores de "URL no encontrada" o "redirect loop"
2. **Rendimiento** → verificar que las URLs nuevas (`/about/*`, `/construction/*`, etc.) empiezan a aparecer
3. **Eliminaciones** → verificar que las URLs viejas (`/nelson/*`, `/constructora/*`) se marcan como redirigidas, no como errores

### Acción 4: Solicitar indexación de URLs prioritarias

En Google Search Console → **Inspección de URLs** → solicitar indexación para:

1. `https://www.nelson.com.mx/` (home EN)
2. `https://www.nelson.com.mx/industrial-parks` (parques EN)
3. `https://www.nelson.com.mx/construction/baumex` (Baumex EN)
4. `https://www.nelson.com.mx/contact` (contacto EN)
5. `https://www.nelson.com.mx/es` (home ES nueva URL)

Google tiene un límite de ~10 solicitudes por día.

### Acción 5: Verificar robots.txt

```bash
curl -s "https://www.nelson.com.mx/robots.txt"
```

Verificar que:
- No bloquea `/es/` ni las rutas EN
- Apunta al sitemap correcto: `Sitemap: https://www.nelson.com.mx/sitemap.xml`

### Acción 6 (opcional): Notificar a Google vía ping

```bash
curl "https://www.google.com/ping?sitemap=https://www.nelson.com.mx/sitemap.xml"
```

Esto notifica a Google que el sitemap cambió. No garantiza re-crawl inmediato pero ayuda.

---

## Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Google penaliza por cambio masivo de URLs | Medio | Redirects 301 están en producción — Google los procesa bien |
| URLs viejas pierden ranking temporalmente | Alto | Normal — el ranking se transfiere via 301 en 2-4 semanas |
| Contenido duplicado ES/EN | Bajo | hreflang bidireccional evita este problema |
| Blog/noticias sin hreflang | Ninguno | No tienen versión EN — correcto no tener hreflang |

---

## Cronograma sugerido

| Cuándo | Qué |
|---|---|
| Inmediato | Acción 1 (verificar sitemap) — ✅ ya hecho |
| Hoy | Acción 5 (verificar robots.txt) + Acción 6 (ping) |
| Hoy | Acción 2 (enviar sitemap a GSC) |
| Esta semana | Acción 4 (solicitar indexación de URLs prioritarias) |
| 2-4 semanas | Acción 3 (monitorear cobertura y rendimiento) |
