# Plan: Migrar imágenes de rutas string a assets nativos de Sanity

## Contexto

Los schemas de Sanity (parques, naves) almacenaban imágenes como strings con rutas de archivo (`type: 'string'`). Esto impedía que un usuario no-técnico subiera fotos desde Sanity Studio. El objetivo fue migrar a `type: 'image'` nativo de Sanity para drag & drop desde Studio.

## Estado actual (post-implementación)

Todos los cambios de código ya están aplicados. Falta ejecutar el script de migración de datos.

### Cambios completados

**Schemas** — ya usan `type: 'image'`:
- `src/sanity/schemaTypes/industrialParkType.ts` — `heroImage`, `gallery[].images[]`, `tenants[].logo`
- `src/sanity/schemaTypes/naveIndustrialType.ts` — `images[]`

**Types** — `src/data/parks/types.ts`:
- Nuevos tipos: `SanityImage`, `ImageField` (union `SanityImage | string` para retrocompatibilidad con datos estáticos)
- `IndustrialPark.heroImage`, `GalleryGroup.images`, `tenants[].logo` usan `ImageField`

**Helper** — `src/sanity/lib/image.ts`:
- `resolveImageUrl(img, width)` — acepta `ImageField | null`, devuelve URL string. Maneja SanityImage (vía `urlFor`) y strings legacy.

**Queries GROQ** — sin cambios. GROQ devuelve el objeto image completo y `urlFor()` lo resuelve.

**Componentes actualizados** (usan `resolveImageUrl`):
- `park-hero.tsx`, `ficha-tecnica-parque.tsx`, `ficha-tecnica-parque-dinamica.tsx`
- `logos-parque.tsx`, `catalogo-agrupado-parques.tsx`, `catalogo-filtrado-parques.tsx`
- `drawer.tsx` (naves industriales)
- `page.tsx` de parques (ES + EN)

**Admin** — `src/app/(admin)/admin/parques-industriales/page.tsx`: copy actualizado de "Logo (ruta)" a "Logo".

### Pendiente: ejecutar script de migración

```bash
node scripts/migrate-images-to-sanity-assets.mjs
```

El script:
1. Lee documentos de `industrialPark` y `naveIndustrial` (incluye drafts vía `perspective: 'raw'`)
2. Para cada imagen string, busca el archivo en `/public/`, lo sube al CDN de Sanity
3. Actualiza el documento con la referencia al asset
4. Preserva `_key` de arrays para no romper editabilidad en Studio
5. Si un upload falla, conserva la ruta string original (no destructivo)
6. Cache de uploads: si la misma ruta aparece en múltiples documentos, reutiliza el asset

## Verificación

- Sanity Studio → editar un parque → heroImage muestra uploader de imagen (no campo de texto)
- Sitio en dev → imágenes de parques, galerías y logos cargan desde cdn.sanity.io
- Subir una imagen nueva desde Studio → aparece en el sitio
