# Plan para comenzar trabajo en los primeros worktrees

Fecha: 2026-04-06
Contexto: primera activación real de worktrees paralelos en Grupo Nelson

---

## Objetivo

Activar 2 worktrees de sección + MAIN como orquestador para avanzar excelencia-operativa y certificaciones en la siguiente hora. El trabajo es de copy — implementar briefs en archivos locales de cada sección.

Casos-de-exito no se abre como worktree: está cerrada en el tracker (brief + implementación aprobados por Codex, 2026-04-04). No hay trabajo de copy pendiente ahí.

---

## Modelo operativo: MAIN como orquestador

Esta es la convención operativa del proyecto a partir de este plan. Está formalizada también en `CLAUDE.md` y `docs/estrategia/guia-humana-worktrees-y-componentes.md`.

### 3 ventanas, 3 roles

| Ventana tmux | Rol | Qué hace | Qué NO hace |
|---|---|---|---|
| **MAIN_ORQUESTADOR** | Coordinar, documentar, actualizar docs de coordinación | Edita `docs/copy/*`, `docs/planes/*`, `docs/continuidad/*`, tracker, briefs, memorias. Corrige discrepancias. Decide orden. Aprueba briefs. | No toca archivos de sección. No implementa copy en pages. |
| **EXCELENCIA_OPERATIVA** | Ejecutar trabajo local de sección | Edita `page.tsx` y `sections/*` de excelencia-operativa. Solo archivos asignados en ownership map. | No toca docs/copy. No toca archivos de otra sección ni de sistema. |
| **CERTIFICACIONES** | Ejecutar trabajo local de sección | Edita `page.tsx` de certificaciones. Solo archivos asignados en ownership map. | No toca docs/copy. No toca archivos de otra sección ni de sistema. |

### Regla central

```
MAIN coordina, documenta y actualiza docs/copy/*
Los worktrees ejecutan trabajo por sección
```

Esta separación no es implícita — es convención operativa del proyecto. MAIN nunca ejecuta trabajo de sección. Los worktrees nunca editan documentación de coordinación.

### Flujo de comunicación

1. MAIN define qué trabajo hace cada worktree (brief aprobado, instrucciones concretas)
2. Cada worktree ejecuta su trabajo en aislamiento
3. Al terminar, el usuario vuelve a MAIN para actualizar tracker, briefs y memorias
4. MAIN decide si el trabajo está listo para merge o necesita ajustes

---

## Estado verificado de las 2 secciones activas

### `/experiencia/excelencia-operativa`

- **Brief:** Aprobado (4 rondas Codex, 2026-04-04). Vive en `docs/copy/angle-briefs/excelencia-operativa.md`.
- **Implementación:** Parcial
  - 3 archivos con copy del brief: `testimonial.tsx`, `documentacion-auditable.tsx`, `dimensiones-control.tsx`
  - 4 archivos con copy anterior pendiente de actualizar: `logo-cloud-clientes.tsx`, `como-trabajamos.tsx`, `capacidades-inhouse.tsx`, `cta.tsx`
  - `page.tsx` pendiente de ajustar secuencia e imports
  - `feature-cards-resultados.tsx` — el brief dice que funcionan bien y no requieren cambio de ángulo (solo verificar coherencia)
- **Excepción temporal:** `ProductIllustration` sigue importándose desde marketing. Se deja así — localizar es trabajo de componente, no de copy.
- **Tipo de trabajo:** Copy (implementar brief aprobado)
- **Listo para arrancar:** Sí, sin bloqueos

### `/experiencia/certificaciones`

- **Brief:** Borrador (2026-04-05). Pendiente de review y aprobación.
- **Implementación:** No iniciada. La página ya tiene copy con buen ángulo ("filtros de acceso").
- **Tipo de trabajo:** Review de brief (MAIN) → ajuste de copy (worktree)
- **Bloqueo:** No se implementa sin brief aprobado. MAIN debe aprobar primero.

### `/experiencia/casos-de-exito` — no se trabaja

- **Estado:** Cerrada. Brief aprobado + implementación aprobada por Codex (2026-04-04).
- No se abre worktree. No hay trabajo de copy pendiente.

---

## Plan de ejecución

### Fase 0 — MAIN prepara (antes de abrir worktrees)

| # | Acción | Estado |
|---|---|---|
| 0.1 | Corregir discrepancia del tracker (snapshot: "sistema reescritos" → "localizados") | Hecho (2026-04-06) |
| 0.2 | Formalizar MAIN=orquestador en `CLAUDE.md` y `guia-humana-worktrees-y-componentes.md` | Hecho (2026-04-06) |
| 0.3 | Actualizar `workspace-nelson.sh`: renombrar ventana a `MAIN_ORQUESTADOR` | Hecho (2026-04-06) |
| 0.4 | Reescribir este plan (quitar casos-de-exito, corregir archivos pendientes) | Hecho (2026-04-06) |
| 0.5 | Review del brief de certificaciones — decidir si se aprueba o se piden cambios | Hecho — aprobado (2026-04-06, reescritura completa v2) |
| 0.6 | Commit de Fase 0 + verificar que main queda limpio | Pendiente |

**Crítico:** No abrir worktrees hasta que 0.6 esté completo. Los worktrees se crean desde main y heredan su estado.

### Fase 1 — Abrir worktrees

```bash
./workspace-nelson.sh excelencia-operativa certificaciones
```

Resultado: sesión tmux `nelson` con 3 ventanas:
- `MAIN_ORQUESTADOR` — repo principal
- `EXCELENCIA_OPERATIVA` — worktree de sección
- `CERTIFICACIONES` — worktree de sección

### Fase 2 — Trabajo paralelo por sección

#### Worktree: excelencia-operativa

**Tipo:** Copy — implementar brief aprobado
**Branch:** `section/excelencia-operativa`
**Brief:** `docs/copy/angle-briefs/excelencia-operativa.md`

| Archivo | Cambio |
|---|---|
| `page.tsx` | Ajustar secuencia de secciones al brief, verificar imports |
| `sections/logo-cloud-clientes.tsx` | Reemplazar logos por 10 palabras-artefacto del método |
| `sections/como-trabajamos.tsx` | Ajustar copy: traducir artefactos a consecuencia |
| `sections/capacidades-inhouse.tsx` | Reorientar de catálogo de servicios a puntos de control transversales |
| `sections/cta.tsx` | Verificar cierre con tesis de excelencia operativa |

**No tocar:**
- `testimonial.tsx`, `documentacion-auditable.tsx`, `dimensiones-control.tsx` — ya tienen copy del brief
- `feature-cards-resultados.tsx` — el brief dice que funcionan bien sin cambio de ángulo (verificar coherencia, no reescribir)

**Excepción:** `ProductIllustration` se deja como está.

#### Worktree: certificaciones

**Tipo:** Copy — ajustar según brief (si se aprueba en Fase 0.5)
**Branch:** `section/certificaciones`
**Brief:** `docs/copy/angle-briefs/certificaciones.md`

| Archivo | Cambio |
|---|---|
| `page.tsx` | Reforzar "filtro de acceso" en cada sección. Agregar metadata SEO. |

**Bloqueado hasta:** brief aprobado por el usuario desde MAIN.

### Fase 3 — MAIN cierra

| # | Acción | Desde |
|---|---|---|
| 3.1 | Actualizar tracker con estado de cada sección | MAIN |
| 3.2 | Crear memoria de trabajo del día | MAIN |
| 3.3 | Review de branches antes de merge | MAIN |

---

## Dependencias y bloqueos

| Bloqueo | Afecta a | Se resuelve con |
|---|---|---|
| ~~Brief de certificaciones en borrador~~ | ~~Worktree certificaciones~~ | ~~Resuelto — brief aprobado (2026-04-06)~~ |
| Fase 0 sin commit | Ambos worktrees | Commit + verificar main limpio (Fase 0.6) |

**No hay bloqueos entre worktrees.** Las 2 secciones son completamente independientes.

### Follow-up priorizado (no bloquea worktrees, pero resolver antes de merge)

| Follow-up | Afecta a | Prioridad |
|---|---|---|
| Alinear estatus de LEED en `docs/copy/angle-briefs/leed.md` y `src/app/constructora/leed/page.tsx` | Coherencia cross-page: certificaciones dice LEED Gold logrado, LEED dice "en proceso" | Alta — resolver desde MAIN antes de que ambas páginas convivan en producción |

---

## Archivos que toca cada frente

### MAIN / ORQUESTADOR

- `docs/copy/tracker-rondas-copy-grupo-nelson.md` — corrección (hecha) + actualización final
- `docs/copy/angle-briefs/certificaciones.md` — aprobado (2026-04-06)
- `docs/copy/angle-briefs/leed.md` — follow-up: alinear estatus LEED (alta prioridad, antes de merge)
- `docs/continuidad/memoria-de-trabajo-2026-04-06-*.md` — al cerrar
- `CLAUDE.md` — formalización de MAIN=orquestador (hecha)
- `docs/estrategia/guia-humana-worktrees-y-componentes.md` — formalización de MAIN=orquestador (hecha)
- `workspace-nelson.sh` — rename de ventana (hecho)

### Worktree excelencia-operativa

- `src/app/experiencia/excelencia-operativa/page.tsx`
- `src/app/experiencia/excelencia-operativa/sections/logo-cloud-clientes.tsx`
- `src/app/experiencia/excelencia-operativa/sections/como-trabajamos.tsx`
- `src/app/experiencia/excelencia-operativa/sections/capacidades-inhouse.tsx`
- `src/app/experiencia/excelencia-operativa/sections/cta.tsx`

### Worktree certificaciones

- `src/app/experiencia/certificaciones/page.tsx`

---

## Convenciones que se formalizan con este plan

1. **MAIN = orquestador.** No ejecuta trabajo de sección. Coordina, documenta, decide. Formalizado en `CLAUDE.md` y `guia-humana-worktrees-y-componentes.md`.
2. **Worktrees = ejecutores.** No editan documentación de coordinación. Solo archivos de su sección.
3. **`docs/copy/*` se edita exclusivamente desde MAIN.** Sin excepciones.
4. **Ningún worktree hace commit, merge o push sin permiso explícito del usuario.**
5. **La ventana de MAIN en tmux se llama `MAIN_ORQUESTADOR`** para que el rol sea visible.
6. **Brief aprobado = requisito para implementar.** Certificaciones no arranca sin aprobación.
7. **No abrir worktrees sobre una base sucia.** Fase 0 debe completarse y commitearse antes de Fase 1.
