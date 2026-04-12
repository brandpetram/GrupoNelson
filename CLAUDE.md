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

## Reglas para Claude

### Worktrees, ownership y promoción de componentes

- Explicación humana y ejemplos del proyecto: `docs/estrategia/guia-humana-worktrees-y-componentes.md`.
- Regla principal: `local first, shared by promotion`.
- **MAIN = orquestador.** MAIN coordina, documenta y actualiza `docs/copy/*`, `docs/planes/*`, `docs/continuidad/*`. No ejecuta trabajo de sección.
- **Worktrees = ejecutores.** Cada worktree ejecuta trabajo solo en archivos de su sección. No edita documentación de coordinación.
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

### REGLAS DE WORKTREES (obligatorias para todo subagente)

1. Tu trabajo NO ESTÁ TERMINADO hasta que hayas hecho `git add -A && git commit`.
   Aunque el trabajo esté incompleto, roto, o feo: commitea con prefijo `wip:`.
   Un commit feo es infinitamente mejor que perder el trabajo.

2. NUNCA ejecutes ninguno de estos comandos, bajo ninguna circunstancia,
   ni siquiera si crees que estás "limpiando" o "ordenando":
   - `git reset --hard`
   - `git checkout .` / `git restore .`
   - `git clean`
   - `git worktree remove`
   - `git branch -d` / `-D`
   - `rm` sobre archivos del worktree que no creaste tú mismo en esta sesión

3. Al terminar tu tarea, tu último paso es SIEMPRE:
   a) `git status` (para confirmar que no queda nada sin commitear)
   b) `git log --oneline -5` (para confirmar que tus commits existen)
   c) Reportar al orquestador: rama, último SHA, y resumen.
   NO limpies nada. NO borres tu worktree. NO hagas housekeeping.
   El orquestador es el ÚNICO responsable de integrar y limpiar.

4. Si encuentras el worktree en mal estado al empezar, REPORTA y DETENTE.
   No intentes "arreglarlo" con resets.

### PROTOCOLO DE COMMITS EN WORKTREES (obligatorio)

Estás trabajando en un worktree. Cualquier archivo que no esté commiteado
NO EXISTE desde el punto de vista del orquestador. Se va a perder.

REGLA DURA: commitea CADA VEZ que termines de editar un archivo o grupo
de archivos relacionados. No esperes a "tener todo listo". No esperes a
"que compile". No esperes a "validar". Commitea inmediatamente con
mensaje `wip: <qué hiciste>`.

Cadencia mínima obligatoria:
- Después de crear o modificar más de 3 archivos: commit.
- Después de cada 5 minutos de trabajo: commit.
- ANTES de leer documentación larga, hacer búsquedas extensas, o
  cualquier operación que pueda consumir contexto: commit.
- ANTES de reportar progreso al orquestador: commit + git log -1 para
  confirmar el SHA en tu reporte.

Tu último mensaje al orquestador SIEMPRE debe incluir:
- Rama en la que trabajaste
- SHA del último commit (de `git log -1 --format=%H`)
- Output literal de `git status` (debe decir "nothing to commit")

Si tu git status muestra archivos sin commitear cuando vas a terminar,
PARA. Commitea. Vuelve a verificar. Solo entonces reporta terminado.

No existe el concepto de "lo iba a commitear al final". El final llega
sin avisar — timeout, context window, error, lo que sea. Commitea ahora.

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
