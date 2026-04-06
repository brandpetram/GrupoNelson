# Guía operativa de worktrees

## Objetivo

Activar el modelo de trabajo paralelo por secciones usando git worktrees. Cada sección del sitio se trabaja en su propio worktree con una instancia independiente de Claude Code, permitiendo que varias secciones avancen simultáneamente sin colisiones de archivos.

El primer caso de uso concreto es retomar las dos secciones pendientes de la memoria de trabajo del 2026-04-04:

1. **`/experiencia/excelencia-operativa`** — brief aprobado, pendiente de implementación
2. **`/experiencia/certificaciones`** — pendiente de brief + implementación

Ambas se trabajan en paralelo, cada una en su propio worktree.

## Contexto

- El [plan maestro de worktrees](plan-maestro-worktrees.md) define el modelo arquitectónico: 41 secciones listas (+1 con excepción temporal), 2 bloqueadas.
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
├── MAIN_ORQUESTADOR      # Repo principal — coordina, documenta, actualiza docs/copy/*
├── EXCELENCIA_OPERATIVA  # Worktree — implementando brief aprobado
└── CERTIFICACIONES       # Worktree — implementando brief (requiere aprobación previa desde MAIN)
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
- Si un worktree necesita un componente de otra sección, clasificar la decisión como `localizar + reescribir`, `promover + reescribir` o `parametrizar + compartir` (ver CLAUDE.md). No promover por defecto.
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

## Dependencia cross-section: excelencia-operativa y marketing (resuelta)

### El problema original

Excelencia-operativa importaba 4 componentes de `(marketing)/product/sections/`:
- `ProductIllustration`
- `TestimonialSection`
- `NotesFeatures`
- `TestimonialsSection`

Estos componentes tenían copy de template Tailark y pertenecían a la sección marketing. La memoria de trabajo pedía "reescribir completamente" 3 de ellos para excelencia-operativa, lo cual violaba la regla de ownership.

### La solución adoptada: `localizar + reescribir`

Se resolvió creando versiones locales en `excelencia-operativa/sections/`, no promoviendo a sistema:

| Componente original | Solución | Archivo local |
|---|---|---|
| TestimonialSection | `localizar + reescribir` | `sections/testimonial.tsx` — Gulfstream 35 años como prueba del método |
| NotesFeatures | `localizar + reescribir` | `sections/documentacion-auditable.tsx` — sistema de documentación |
| TestimonialsSection | `localizar + reescribir` | `sections/dimensiones-control.tsx` — 3 dimensiones del control |
| ProductIllustration | **Excepción temporal** | Sigue importándose desde marketing — pendiente de localizar en ciclo futuro |

Los archivos originales de marketing se restauraron a su versión previa (copy de template Tailark). Marketing Product conserva sus archivos intactos.

## Trabajo a ejecutar

### Paso 0: Preparación desde MAIN (completado en working tree, pendiente de commit/merge)

Se ejecutó en branch `system/o1-excelencia-marketing` desde MAIN.

| # | Acción | Estado |
|---|---|---|
| 0.1 | Crear 3 versiones locales en `excelencia-operativa/sections/` con copy del brief | Hecho |
| 0.2 | Restaurar 3 archivos de marketing a versión original (desde c7f1011) | Hecho |
| 0.3 | Actualizar imports en `excelencia-operativa/page.tsx` | Hecho |
| 0.4 | Crear angle brief de certificaciones | Hecho |
| 0.5 | Actualizar tracker | Hecho |
| 0.6 | Actualizar ownership-map.md y plan maestro | Hecho |

**ProductIllustration** queda como excepción temporal documentada. Se localiza en ciclo futuro.

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
| `sections/testimonial.tsx` | Ya contiene copy de Gulfstream 35 años (creado en Paso 0) |
| `sections/documentacion-auditable.tsx` | Ya contiene copy de sistema de documentación (creado en Paso 0) |
| `sections/dimensiones-control.tsx` | Ya contiene copy de 3 dimensiones del control (creado en Paso 0) |

> **Nota:** ProductIllustration sigue importándose desde `(marketing)/product/sections/`. Es una excepción temporal documentada.

### Worktree 2: certificaciones

**Branch:** `section/certificaciones`
**Brief:** `docs/copy/angle-briefs/certificaciones.md` (borrador creado en Paso 0.4)
**Ángulo base:** "No son trofeos; son filtros de acceso" (de la memoria 2026-04-03)
**Requisito:** Brief aprobado por el usuario desde MAIN_ORQUESTADOR antes de implementar.

| Archivo | Cambio |
|---|---|
| `src/app/experiencia/certificaciones/page.tsx` | Implementar copy según brief aprobado |

> El brief y el tracker se actualizan desde MAIN_ORQUESTADOR, no desde este worktree.

## Criterio de salida

- [x] O1 resuelto: 3 componentes localizados en `excelencia-operativa/sections/`
- [x] Archivos de marketing restaurados a versión original
- [x] ProductIllustration documentado como excepción temporal
- [x] Brief de certificaciones creado desde MAIN
- [ ] Worktree excelencia-operativa: archivos locales implementados según brief
- [ ] Worktree certificaciones: page.tsx implementado según brief
- [ ] Ambas branches mergeadas a main sin conflictos
- [ ] Tracker de copy actualizado desde MAIN

## Cómo arrancar

```bash
cd ~/Proyectos/grupo-nelson
./workspace-nelson.sh excelencia-operativa certificaciones
```

Esto abre la sesión tmux `nelson` con 3 ventanas (MAIN + 2 worktrees), cada una con Claude Code listo para trabajar.
