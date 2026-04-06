# Memoria de trabajo — 2026-04-05 — Paralelo experiencia

Fecha: 2026-04-05
Propósito: dejar contexto claro para retomar mañana sin perder el hilo

---

## 1. Qué hicimos hoy

### Sistema de worktrees

- Creamos el **plan maestro de worktrees** (`docs/planes/plan-maestro-worktrees.md`): inventario de 44 secciones, mapa de dependencias verificado contra el código real, ownership de componentes, roadmap de 5 fases, política de evolución de componentes.
- Creamos el **ownership map** (`docs/ownership-map.md`): asignación de ~230 componentes a sistema o sección, reglas de worktree, convención de branches.
- Creamos la **guía operativa de worktrees** (`docs/planes/guia-operativa-worktrees.md`): workflow concreto para las 2 primeras secciones (excelencia-operativa y certificaciones).
- Creamos `workspace-nelson.sh`: script que crea worktrees, branches y sesión tmux con Claude Code por sección.
- Creamos la **guía humana de worktrees y componentes** (`docs/estrategia/guia-humana-worktrees-y-componentes.md`): explicación en lenguaje simple de las 3 capas (infraestructura, ownership, decisión de componentes).

### Resolución de O1 (dependencia cross-section)

- Excelencia-operativa importaba 4 componentes de `(marketing)/product/sections/`.
- Se resolvió por `localizar + reescribir` para 3 de ellos. Se crearon versiones locales en `excelencia-operativa/sections/`.
- Los archivos originales de marketing se restauraron a su versión previa (copy de template Tailark).
- `ProductIllustration` quedó como excepción temporal — sigue importándose desde marketing.

### Brief de certificaciones

- Se creó angle brief borrador en `docs/copy/angle-briefs/certificaciones.md`.
- Ángulo: "No son trofeos; son filtros de acceso".
- Pendiente de review antes de implementar.

### Convenciones actualizadas

- `CLAUDE.md` actualizado con reglas de worktrees, ownership, promoción de componentes, clasificación obligatoria de decisiones cross-section, y convenciones de documentación del proyecto.
- Se renombraron los documentos de plan: `worktree.md` → `plan-maestro-worktrees.md`, `plan-para-trabajar-en-worktrees.md` → `guia-operativa-worktrees.md`.

---

## 2. Decisiones importantes

### `local first, shared by promotion`

Esta es la regla principal del proyecto. Significa:

- Primero asumimos que algo es local de una sección.
- Solo lo volvemos compartido si el uso real lo justifica.
- No promover por conveniencia ni por anticipación.

### 3 caminos para componentes cross-section

Antes de editar un componente importado desde otra sección, hay que clasificar la decisión:

1. **`promover + reescribir`** — el bloque deja de ser de una sección y pasa a ser del sistema. Sirve cuando va a decir básicamente lo mismo en varias páginas.
2. **`localizar + reescribir`** — crear una copia local dentro de la sección actual. Sirve cuando no hay reutilización real confirmada. Es la opción por defecto.
3. **`parametrizar + compartir`** — el componente compartido recibe datos/props diferentes por página. Sirve cuando la reutilización ya es real y estable, pero el mensaje cambia.

### Dónde viven los componentes

- `sections/` → bloques grandes locales del page
- `components/` (dentro de la sección) → piezas auxiliares locales
- `src/components/brandpetram/` → sistema compartido real (solo si hay reutilización confirmada)

### Documentación de coordinación

- `docs/copy/*` se edita solo desde MAIN, nunca desde worktrees de sección.
- El tracker, los briefs y las memorias de copy son documentación de coordinación.

---

## 3. Aprendizajes de arquitectura

### El caso de excelencia-operativa

Inicialmente se tomó el camino de **promover + reescribir** para 3 componentes de marketing:
- Se declararon como "sistema" en el ownership map
- Se reescribieron directamente en los archivos de marketing
- Se actualizó la documentación como si fueran componentes del sistema

Después, al aplicar las reglas nuevas de `CLAUDE.md`, se corrigió:
- **La solución correcta fue `localizar + reescribir`**
- Los originales de marketing se restauraron (desde commit `c7f1011`)
- Se crearon 3 versiones locales en `excelencia-operativa/sections/`:
  - `testimonial.tsx` — Gulfstream 35 años como prueba del método
  - `documentacion-auditable.tsx` — sistema de documentación auditable
  - `dimensiones-control.tsx` — 3 dimensiones del control (tiempo, calidad, seguridad)
- `ProductIllustration` quedó como excepción temporal documentada

**Lección:** No todo componente que aparece en varias páginas necesita promoverse. Si dos secciones necesitan la misma estructura visual pero con copy completamente distinto, la respuesta es localizar, no promover.

---

## 4. Estado de las 3 secciones para mañana

### `/experiencia/excelencia-operativa`

- **Brief:** Aprobado (4 rondas Codex, 2026-04-04). Vive en `docs/copy/angle-briefs/excelencia-operativa.md`.
- **Componentes locales creados:** 8 archivos en `sections/` (logo-cloud-clientes, feature-cards-resultados, como-trabajamos, capacidades-inhouse, cta, testimonial, documentacion-auditable, dimensiones-control).
- **Copy implementado:** Los 3 componentes localizados (testimonial, documentacion-auditable, dimensiones-control) ya tienen copy del brief. Los otros 5 (page.tsx, logo-cloud-clientes, como-trabajamos, capacidades-inhouse, cta) todavía tienen copy anterior pendiente de actualizar según brief.
- **Excepción temporal:** `ProductIllustration` sigue importándose desde `(marketing)/product/sections/`. Pendiente de localizar en ciclo futuro.
- **Siguiente paso:** Implementar copy del brief en los 5 archivos locales restantes.

### `/experiencia/casos-de-exito`

- **Brief:** Aprobado (2 rondas Codex, 2026-04-04). Vive en `docs/copy/angle-briefs/casos-de-exito-experiencia.md`.
- **Implementación:** Aprobada por Codex (2026-04-04). La página fue cerrada como completa.
- **Estructura actual:** Solo `page.tsx` — todo es HTML/JSX puro con copy inline. No tiene `sections/` ni componentes locales.
- **Siguiente paso:** Si se quiere cambiar el look o agregar componentes visuales, se trabaja con componentes locales en `sections/` o `components/` dentro de la sección. No asumir que necesita componentes del sistema.

### `/experiencia/certificaciones`

- **Brief:** Borrador creado (2026-04-05). Vive en `docs/copy/angle-briefs/certificaciones.md`. Pendiente de review.
- **Implementación:** No iniciada. La página tiene copy borrador previo al angle brief.
- **Estructura actual:** Solo `page.tsx` — copy inline con la estructura de "filtros de acceso" (ISN, LEED, FM Global, BRB, NOM/NFPA).
- **Siguiente paso:** Review del brief → implementar copy según brief aprobado. Puede necesitar componentización local si la estructura visual lo justifica.

---

## 5. Lectura obligatoria para contextualizarse

| Documento | Qué contiene | Por qué leerlo |
|---|---|---|
| `CLAUDE.md` | Reglas del proyecto: worktrees, ownership, promoción de componentes, convenciones de documentación | **Obligatorio.** Define las reglas que Claude debe seguir. |
| `docs/estrategia/guia-humana-worktrees-y-componentes.md` | Explicación en lenguaje simple de las 3 capas (infraestructura, ownership, decisión de componentes) | Contexto conceptual para entender las reglas de CLAUDE.md. |
| `docs/planes/plan-maestro-worktrees.md` | Plan maestro: inventario de secciones, dependencias, ownership, roadmap | Referencia arquitectónica. No hace falta leerlo completo — consultar secciones relevantes. |
| `docs/planes/guia-operativa-worktrees.md` | Workflow concreto para excelencia-operativa y certificaciones | Describe el Paso 0 (completado) y los worktrees pendientes. |
| `docs/ownership-map.md` | Asignación de cada archivo a sistema o sección | Para saber qué puede tocar cada worktree. |
| `docs/copy/tracker-rondas-copy-grupo-nelson.md` | Estado de briefs e implementaciones de copy | Para saber el estado de cada página en el flujo de copywriting. |
| `docs/copy/memoria-de-trabajo-2026-04-04-rondas-de-copy.md` | Memoria del día anterior con detalle de las 4 páginas cerradas y las 2 pendientes | Contexto de lo que se hizo ayer en copy. |
| `docs/copy/angle-briefs/excelencia-operativa.md` | Brief aprobado para excelencia-operativa | El brief que guía la implementación. |
| `docs/copy/angle-briefs/certificaciones.md` | Brief borrador para certificaciones | El brief que necesita review antes de implementar. |
| `docs/copy/angle-briefs/casos-de-exito-experiencia.md` | Brief aprobado para casos de éxito | Contexto de lo que ya se implementó en esa página. |

---

## 6. Cómo debe arrancar el trabajo mañana

### Reglas para el Claude de mañana

1. **No empezar a editar de inmediato.** Primero leer los documentos de la sección 5.
2. **Resumir el estado real de las 3 secciones** verificando archivos y documentos, no asumiendo.
3. **Proponer un plan auditable para el día** antes de implementar. El plan debe separar:
   - Trabajo de copy (implementar briefs aprobados)
   - Trabajo de angle / brief (review o creación de briefs pendientes)
   - Trabajo de desarrollo visual / componentes (cambios de look, nuevos bloques)
   - Trabajo de sistema (solo si es necesario — no por defecto)
4. **No asumir componentes compartidos por defecto.** Si se van a meter componentes nuevos, empezar como locales a la sección (`sections/` o `components/`).
5. **Si un componente se necesita en más de una sección**, clasificar la decisión como `localizar + reescribir`, `promover + reescribir` o `parametrizar + compartir`, y pedir confirmación antes de implementar.
6. **No hacer commit, merge, push ni PR** sin permiso explícito del usuario.

### Flujo sugerido

```
1. Leer documentos de contexto
2. Resumir estado de las 3 secciones
3. Proponer plan del día → esperar aprobación
4. Abrir worktrees: ./workspace-nelson.sh excelencia-operativa certificaciones casos-de-exito
5. Trabajar en paralelo según plan aprobado
6. Al terminar cada sección: el usuario cambia a MAIN para actualizar tracker/docs
```

---

## 7. Riesgos / cosas a no olvidar

- **El tracker de copy tiene una discrepancia.** Las notas de excelencia-operativa en `docs/copy/tracker-rondas-copy-grupo-nelson.md` (líneas 66-70) todavía dicen "3 componentes Tailark YA REESCRITOS como sistema". Eso refleja el enfoque viejo de promoción. La realidad es que fueron localizados, no promovidos. Corregir el tracker desde MAIN antes o al inicio del trabajo de mañana.
- **ProductIllustration** sigue como excepción temporal en excelencia-operativa. Si mañana se toca esa parte del page.tsx, hay que decidir si localizarlo o dejarlo.
- **El brief de certificaciones es borrador.** Necesita review antes de implementar. No empezar implementación de certificaciones sin brief aprobado.
- **`workspace-nelson.sh` crea worktrees desde main.** Si hay cambios sin commit en main, los worktrees los heredan. Verificar que main esté limpio antes de crear worktrees.
- **Hay cambios sin commit en el working tree actual.** El branch `system/o1-excelencia-marketing` fue mergeado a main, pero los cambios de hoy (rename de documentos, correcciones de ownership, archivos locales nuevos, esta memoria) todavía no están commiteados. Hacer commit antes de abrir worktrees mañana.
