# Contexto del Proyecto

Este es un sitio web de cliente construido con componentes de `@brandpetram/componentes-2026`.

## Arquitectura

```
componentes-brandpetram/     <- Librería de componentes compartida
grupo-nelson/                <- Este proyecto (sitio del cliente)
```

## Dependencia Principal

El proyecto consume componentes de la librería Brandpetram:

```typescript
// Componentes de marketing (usan CDN de imágenes)
import { ... } from '@brandpetram/componentes-2026/marketing'

// Componentes Tailark Pro
import { ... } from '@brandpetram/componentes-2026/tailark'

// Componentes de Tailwind Templates
import { ... } from '@brandpetram/componentes-2026/templates'

// Pro Blocks
import { ... } from '@brandpetram/componentes-2026/pro-blocks'

// UI base
import { ... } from '@brandpetram/componentes-2026/ui'
```

## Desarrollo Local

Actualmente usa `file:../componentes-brandpetram` para desarrollo. Los cambios en la librería se reflejan inmediatamente.

**Antes de deploy:** Cambiar a versión del registro (`^0.0.6`).

## CDN de Imágenes

- `CDN_KEY_SECRET` está configurado en `.env.local`
- Solo componentes de `/marketing` usan el CDN (`img.brandpetram.com`)
- Los demás componentes (tailark, templates, pro-blocks) usan imágenes locales en `/public/`

## Reglas para Claude

### Componentes de la librería: Uso directo vs Detachment

**Uso directo** (sin modificaciones de estilo):
```typescript
import { RadiantHeader } from '@brandpetram/componentes-2026/templates'
```

**Detachment** (cuando necesitas modificar estilos/estructura):

1. Copiar el componente de brandpetram **manteniendo la misma estructura de carpetas**:
   ```
   componentes-brandpetram/src/components/from-tailwind-templates/radiant-ts-header/
                                          ↓
   grupo-nelson/src/components/from-tailwind-templates/radiant-ts-header-v1.1/
   ```

2. Copiar también las imágenes:
   ```
   grupo-nelson/public/from-tailwind-templates/radiant-ts-header-v1.1/
   ```

3. Importar la versión local:
   ```typescript
   import { Header as RadiantHeader } from '@/components/from-tailwind-templates/radiant-ts-header-v1.1'
   ```

4. Modificar libremente estilos y estructura

### Versionado de componentes detached

- Usar sufijo `-v1.1`, `-v1.2`, etc.
- Verificar en brandpetram cuál es la última versión antes de nombrar
- El versionado es global (no específico de este proyecto)

### Retorno a brandpetram

Cuando el componente esté listo para ser reutilizado:
1. Sanitizar textos (lorem ipsum)
2. Reemplazar imágenes por genéricas
3. Copiar a `componentes-brandpetram/` con la misma ruta
4. Ver instrucciones completas en `Proyectos/CLAUDE.md`

### Al agregar imágenes

- Imágenes del proyecto: `/public/` (rutas como `/mi-imagen.jpg`)
- Imágenes de componentes brandpetram: Ya usan CDN automáticamente
- Imágenes de templates/tailark: `/public/from-tailwind-templates/` o similar

### Estilos

Los estilos de la librería ya están importados en `globals.css`:
```css
@import "@brandpetram/componentes-2026/estilos";
```

No duplicar variables CSS ni clases de la librería.

## Stack

- Next.js 16 / React 19
- Tailwind CSS v4
- pnpm (siempre usar pnpm, no npm ni yarn)
