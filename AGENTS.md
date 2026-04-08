# Contexto del Proyecto

Este es un sitio web de cliente construido con componentes de `@brandpetram/componentes-2026`.

## Orígenes de Componentes y Brandpetramización

### Biblioteca Multi-origen

Los componentes en este proyecto provienen de diferentes fuentes:

- **Tailark Pro** - Componentes premium de Tailark
- **shadcn Pro Blocks** - Bloques pro de shadcn
- **Tailwind UI** - Componentes oficiales de Tailwind
- **Templates de Tailwind** - Plantillas y ejemplos
- **Brandpetram** - Componentes brandpetramizados o construidos desde cero

### Proceso de Brandpetramización

**Brandpetramizar** significa tomar un componente de cualquier origen y adaptarlo al estilo Brandpetram.

Los componentes brandpetramizados se identifican con sufijo `-BP`:

```tsx
// Componente brandpetramizado
import { FaqsBP } from '@brandpetram/componentes-2026/brandpetram'

// Versión con props (si existe)
import { FaqsBPConProps } from '@brandpetram/componentes-2026/brandpetram'
```

**Nota:** Esta documentación es interna de Brandpetram y puede eliminarse del repositorio antes de entregar al cliente.

---

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

## Reglas para Codex

### Worktrees, ownership y promoción de componentes

- Explicación humana y ejemplos del proyecto: `docs/estrategia/guia-humana-worktrees-y-componentes.md`.
- Regla principal: `local first, shared by promotion`.
- Un worktree de sección solo puede editar archivos de su propia sección.
- `docs/copy/*` se edita solo desde `MAIN`.
- No promover componentes a `sistema/shared` por conveniencia.
- Solo promover un componente si ya existe reutilización confirmada en más de una página, o si el usuario lo pide explícitamente.
- Si una sección necesita un bloque de otra sección y no hay reutilización confirmada, crear una versión local dentro de la carpeta de esa sección.
- Promover resuelve ownership; no resuelve reutilización por sí mismo.
- Si varias páginas necesitan la misma estructura con copy distinto, parametrizar el componente en lugar de reescribir una sola versión compartida.
- Antes de editar un componente importado desde otra sección, clasificar explícitamente la decisión como `promover + reescribir`, `localizar + reescribir` o `parametrizar + compartir`.
- No continuar con la implementación de un componente cross-section hasta explicar esa clasificación y recibir confirmación explícita del usuario.
- Si un cambio obliga a editar archivos fuera de la sección actual, detenerse y pedir confirmación antes de seguir.
- Nunca hacer `git add`, `git commit`, `merge`, `push` o PR sin permiso explícito del usuario.

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
4. Ver instrucciones completas en `Proyectos/AGENTS.md`

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

## Documentación del proyecto

| Carpeta | Contenido | Ejemplos |
|---|---|---|
| `docs/planes/` | Planes maestros, runbooks, guías operativas y planes locales del proyecto | `plan-maestro-worktrees.md`, `guia-operativa-worktrees.md` |
| `docs/continuidad/` | Memorias de trabajo, bitácoras, handoff notes, documentación de continuidad entre sesiones | `memoria-de-trabajo-2026-04-05-paralelo-experiencia.md` |
| `docs/estrategia/` | Guías conceptuales y decisiones estratégicas del proyecto | `guia-humana-worktrees-y-componentes.md` |
| `docs/copy/` | Angle briefs, tracker de rondas, memorias de copywriting. Se edita solo desde MAIN. | `angle-briefs/*.md`, `tracker-rondas-copy-grupo-nelson.md` |

Usar estas carpetas por defecto cuando la documentación sea específica de Grupo Nelson. No mover archivos viejos solo por ordenar — aplicar la convención para documentos nuevos.

## Stack

- Next.js 16 / React 19
- Tailwind CSS v4
- pnpm (siempre usar pnpm, no npm ni yarn)
