# Plan para trabajar en worktrees

## Objetivo

Activar el modelo de trabajo paralelo por secciones usando git worktrees. Cada sección del sitio se trabaja en su propio worktree con una instancia independiente de Claude Code, permitiendo que varias secciones avancen simultáneamente sin colisiones de archivos.

El primer caso de uso concreto es retomar las dos secciones pendientes de la memoria de trabajo del 2026-04-04:

1. **`/experiencia/excelencia-operativa`** — brief aprobado, pendiente de implementación
2. **`/experiencia/certificaciones`** — pendiente de brief + implementación

Ambas se trabajan en paralelo, cada una en su propio worktree.

## Contexto

- El [plan de worktrees](worktree.md) define el modelo arquitectónico: 40 secciones listas, 2 casi listas, 2 bloqueadas.
- El [ownership map](../ownership-map.md) asigna cada archivo a sistema o sección.
- La [memoria de trabajo 2026-04-04](../copy/memoria-de-trabajo-2026-04-04-rondas-de-copy.md) documenta qué quedó pendiente.
- El script `workspace-nelson.sh` crea worktrees y abre sesiones tmux con Claude Code.

## Infraestructura

### Estructura de worktrees

```
grupo-nelson/                    # Repo principal (main)
├── .worktrees/                  # Ignorado por git
│   ├── excelencia-operativa/    # Worktree: section/excelencia-operativa
│   └── certificaciones/         # Worktree: section/certificaciones
└── workspace-nelson.sh          # Script para crear y abrir worktrees
```

### Sesión tmux

```
Sesión: nelson
├── MAIN                  # Repo principal — coordinación, system, docs compartidos
├── EXCELENCIA_OPERATIVA  # Worktree — Claude implementando brief
└── CERTIFICACIONES       # Worktree — Claude creando brief + implementando
```

### Flujo de trabajo por worktree

1. El script crea branch `section/{slug}` desde main
2. Crea worktree en `.worktrees/{slug}`
3. Abre ventana tmux con Claude Code en ese directorio
4. Claude trabaja solo en archivos de esa sección (según ownership map)
5. Al terminar, se crea PR desde la branch de sección hacia main
6. Review (Codex o humano) en el repo principal
7. Merge a main

### Reglas operativas

- Cada worktree solo toca archivos asignados a su sección en el ownership map.
- Archivos de sistema no se editan desde worktrees de sección.
- Si un worktree necesita un cambio en sistema, se hace desde MAIN en branch `system/{slug}` y se mergea primero.
- Cada worktree trabaja de forma independiente — no depende de que el otro termine.

### Ownership de docs compartidos

Los archivos en `docs/copy/` no son propiedad de ningún worktree de sección. Son **documentación de coordinación** y se editan exclusivamente desde **MAIN**:

| Archivo | Quién lo edita | Cuándo |
|---|---|---|
| `docs/copy/angle-briefs/*.md` | MAIN | Al crear o aprobar un brief |
| `docs/copy/tracker-rondas-copy-grupo-nelson.md` | MAIN | Al cerrar una página o cambiar un estado |
| `docs/copy/memoria-de-trabajo-*.md` | MAIN | Al final de cada sesión de trabajo |

**Razón:** Si dos worktrees actualizan el tracker o crean briefs en paralelo, hay conflicto de merge garantizado. Centralizar en MAIN elimina ese riesgo.

**Flujo práctico:** El worktree de sección hace su trabajo en código. Cuando termina, el usuario cambia a la ventana MAIN de tmux para actualizar el brief, el tracker o la memoria de trabajo.

## Dependencia cross-section: excelencia-operativa y marketing

### El problema

Excelencia-operativa importa 4 componentes de `(marketing)/product/sections/`:
- `ProductIllustration`
- `TestimonialSection`
- `NotesFeatures`
- `TestimonialsSection`

Estos componentes tienen copy hardcodeado y pertenecen a la sección marketing según el ownership map. La memoria de trabajo dice "reescribir completamente" 3 de ellos. Eso viola la regla de ownership: un worktree de sección no puede editar archivos de otra sección.

### La solución: resolver O1 primero desde MAIN

Antes de abrir el worktree de excelencia-operativa, resolver la dependencia O1 desde MAIN:

1. **Declarar los 4 componentes como sistema** en el ownership map (ya es la recomendación del propio ownership map §3.1).
2. **Mover su edición a `work-system`** — o en este caso, hacerlo directamente desde MAIN antes de abrir worktrees.

**Secuencia concreta:**

```
Branch system/o1-excelencia-marketing (desde MAIN):
  1. Actualizar ownership-map.md y worktree.md: 4 componentes de marketing → sistema
  2. Reescribir copy de testimonial, notes-features, testimonials-section
  3. Crear brief de certificaciones en docs/copy/angle-briefs/
  4. Actualizar tracker
  5. PR → review → merge a main

Después, abrir worktrees:
  - work-excelencia-operativa: solo edita archivos locales de la sección
  - work-certificaciones: solo edita page.tsx de certificaciones
```

### Alternativa: limitar el worktree

Si no se quiere resolver O1 ahora, el worktree de excelencia-operativa puede limitarse a editar **solo archivos locales**:

| Archivo | ¿Se puede editar desde worktree? |
|---|---|
| `page.tsx` | Sí (propio de la sección) |
| `sections/logo-cloud-clientes.tsx` | Sí (local) |
| `sections/como-trabajamos.tsx` | Sí (local) |
| `sections/capacidades-inhouse.tsx` | Sí (local) |
| `sections/cta.tsx` | Sí (local) |
| `(marketing)/product/sections/testimonial.tsx` | **No** — otra sección |
| `(marketing)/product/sections/notes-features.tsx` | **No** — otra sección |
| `(marketing)/product/sections/testimonials-section.tsx` | **No** — otra sección |

Los 3 componentes de marketing se reescriben después desde MAIN o `work-system`.

## Trabajo a ejecutar

### Paso 0: Preparación desde MAIN (antes de abrir worktrees)

Se ejecuta en branch `system/o1-excelencia-marketing` desde MAIN. Es trabajo transversal y pasa por review antes de mergear a main.

```bash
git checkout -b system/o1-excelencia-marketing
```

| # | Acción | Archivo |
|---|---|---|
| 0.1 | Resolver O1: declarar 4 componentes de marketing como sistema | `docs/ownership-map.md` |
| 0.2 | Sincronizar worktree.md: Excelencia Operativa y Marketing Product → Listo | `docs/planes/worktree.md` |
| 0.3 | Reescribir copy de testimonial, notes-features, testimonials-section según brief de excelencia | `src/app/(marketing)/product/sections/*.tsx` |
| 0.4 | Crear angle brief de certificaciones | `docs/copy/angle-briefs/certificaciones.md` |
| 0.5 | Actualizar tracker | `docs/copy/tracker-rondas-copy-grupo-nelson.md` |
| 0.6 | PR → review → merge a main | — |

### Worktree 1: excelencia-operativa

**Branch:** `section/excelencia-operativa`
**Brief:** `docs/copy/angle-briefs/excelencia-operativa.md`
**Regla:** Solo copy, no layout (regla del 2026-04-04). Solo archivos locales de la sección.

| Archivo | Cambio |
|---|---|
| `src/app/experiencia/excelencia-operativa/page.tsx` | Ajustar secuencia de secciones al brief, verificar imports |
| `sections/logo-cloud-clientes.tsx` | Reemplazar logos por 10 palabras-artefacto |
| `sections/como-trabajamos.tsx` | Ajustar copy de 3 pasos: artefactos → consecuencia |
| `sections/capacidades-inhouse.tsx` | Reorientar a puntos de control transversales |
| `sections/cta.tsx` | Verificar cierre con tesis de excelencia operativa |

> Los componentes de marketing (testimonial, notes-features, testimonials-section) ya fueron reescritos en el Paso 0 desde MAIN.

### Worktree 2: certificaciones

**Branch:** `section/certificaciones`
**Brief:** Creado en Paso 0.4
**Ángulo base:** "No son trofeos; son filtros de acceso" (de la memoria 2026-04-03)

| Archivo | Cambio |
|---|---|
| `src/app/experiencia/certificaciones/page.tsx` | Implementar copy según brief |

> El brief y el tracker se actualizan desde MAIN, no desde este worktree.

## Criterio de salida

- [ ] O1 resuelto: 4 componentes de marketing declarados como sistema
- [ ] Componentes de marketing reescritos desde MAIN
- [ ] Brief de certificaciones creado desde MAIN
- [ ] Worktree excelencia-operativa: archivos locales implementados según brief
- [ ] Worktree certificaciones: page.tsx implementado según brief
- [ ] Ambas branches mergeadas a main sin conflictos
- [ ] Tracker de copy actualizado desde MAIN

## Cómo arrancar

```bash
# Paso 0: branch de sistema desde MAIN
cd ~/Proyectos/grupo-nelson
git checkout -b system/o1-excelencia-marketing
# → Resolver O1, reescribir marketing components, crear brief, actualizar tracker
# → PR, review, merge a main

# Después: abrir worktrees (ya en main con O1 resuelto)
./workspace-nelson.sh excelencia-operativa certificaciones
```

Esto abre la sesión tmux `nelson` con 3 ventanas (MAIN + 2 worktrees), cada una con Claude Code listo para trabajar.
