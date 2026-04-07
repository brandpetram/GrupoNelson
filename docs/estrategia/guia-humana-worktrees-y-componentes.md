# Guía Humana — Worktrees, Ownership y Componentes

## Para qué sirve este documento

Este documento existe para explicar, en lenguaje humano, cómo estamos trabajando con:

- worktrees por sección
- ownership de archivos
- componentes locales vs componentes del sistema
- decisiones como `localizar + reescribir`, `promover + reescribir` y `parametrizar + compartir`

La regla corta del proyecto es:

**`local first, shared by promotion`**

Eso significa:

- primero asumimos que algo es local de una sección
- solo lo volvemos compartido si el uso real lo justifica

## Las 3 capas del sistema

Para no mezclar conceptos, conviene pensar este workflow en 3 capas:

### 1. Infraestructura

Esta capa responde:

**¿Dónde trabajo esto?**

Aquí entran:

- `workspace-nelson.sh`
- `tmux` / Ghostty
- `git worktrees`
- ramas `section/{slug}`, `system/{slug}`, `scratch/{slug}`

Su función es abrir y aislar espacios de trabajo.

### 2. Ownership

Esta capa responde:

**¿Quién debe tocar este archivo?**

Aquí entran:

- `MAIN`
- worktrees de sección
- `work-system`
- `docs/copy/*` solo desde `MAIN`
- `docs/ownership-map.md`

Su función es evitar que dos frentes modifiquen el mismo archivo sin darse cuenta.

### 3. Decisión de componentes

Esta capa responde:

**¿Cómo modelamos este componente?**

Aquí entran:

- `promover + reescribir`
- `localizar + reescribir`
- `parametrizar + compartir`
- decidir si algo vive en `sections/`, `components/` o `src/components/brandpetram/`

Su función es decidir la arquitectura del bloque, no solo dónde se abre el trabajo.

## Qué es cada cosa

### `MAIN` — orquestador

Es el repo principal. Su rol es **orquestador**: coordina, documenta y decide. No ejecuta trabajo de sección.

Se usa para:

- coordinación entre worktrees
- documentación de coordinación: `docs/copy/*`, `docs/planes/*`, `docs/continuidad/*`
- cambios transversales y revisión
- actualizar tracker, briefs y memorias de trabajo
- decidir si una branch está lista para merge

**Regla:** MAIN nunca edita archivos que pertenecen a una sección (páginas y componentes locales dentro de `src/app/`). Los worktrees nunca editan documentación de coordinación (`docs/copy/*`, `docs/planes/*`, `docs/continuidad/*`).

### Worktree de sección

Es un espacio de trabajo aislado para una página o sección específica.

Ejemplos:

- `section/excelencia-operativa`
- `section/certificaciones`
- `section/casos-de-exito`

Ese worktree solo debe tocar archivos de su sección.

### `work-system`

Es el frente para cambios compartidos del sistema.

Ejemplos:

- `Header`
- `globals.css`
- componentes realmente reutilizados por varias secciones
- utilidades o infraestructura compartida

## Qué significa ownership

### Archivo de sección

Pertenece a una sola sección.

Normalmente vive en rutas como:

- `src/app/experiencia/casos-de-exito/...`
- `src/app/experiencia/certificaciones/...`
- `src/app/experiencia/excelencia-operativa/...`

Se puede editar desde el worktree de esa sección.

### Archivo de sistema

Lo usan varias secciones y ya fue reconocido como compartido.

No se edita desde un worktree de sección.
Se edita desde `MAIN` o `work-system`.

## Componentes locales

Un componente local es un componente que:

- vive dentro de la carpeta de una sola sección
- solo esa sección lo importa
- no se considera parte del sistema compartido

Sí, es totalmente válido crear carpetas para componentes locales.

Ejemplos válidos:

```text
src/app/experiencia/casos-de-exito/
  page.tsx
  sections/
    hero.tsx
    case-study.tsx
    stats-strip.tsx
```

```text
src/app/experiencia/certificaciones/
  page.tsx
  sections/
    hero.tsx
    cert-grid.tsx
    cta.tsx
```

```text
src/app/experiencia/excelencia-operativa/
  page.tsx
  sections/
    logo-cloud-clientes.tsx
    testimonial.tsx
    documentacion-auditable.tsx
    dimensiones-control.tsx
```

Regla práctica:

- si el bloque solo sirve para esa página hoy, déjalo local
- no lo subas a `src/components/` por anticipación

## Dónde vive un componente

Una de las decisiones más comunes es:

**¿Este bloque debe vivir en `sections/`, en `components/`, o en `src/components/brandpetram/`?**

La respuesta depende de dos cosas:

1. si el componente es local o compartido
2. si representa un bloque grande de página o una pieza más pequeña

### Usar `sections/`

Usa `sections/` cuando el componente:

- representa un bloque grande de una página
- tiene identidad editorial o visual propia dentro de esa página
- normalmente aparece una sola vez dentro del page

Ejemplos:

- hero
- testimonial principal
- bloque de casos
- proof block
- CTA final
- franja de logos

Ejemplo:

```text
src/app/experiencia/casos-de-exito/
  page.tsx
  sections/
    hero.tsx
    case-study.tsx
    closing-cta.tsx
```

Regla simple:

- si al verlo dices “esto es una sección del page”, probablemente va en `sections/`

### Usar `components/`

Usa `components/` dentro de una sección cuando el componente:

- sigue siendo local de esa sección
- pero es una pieza más pequeña o auxiliar
- se usa varias veces dentro del mismo page o dentro de varias secciones locales

Ejemplos:

- card local
- item row
- badge
- tabla auxiliar
- accordion local
- stat item
- wrapper chico

Ejemplo:

```text
src/app/experiencia/certificaciones/
  page.tsx
  sections/
    hero.tsx
    cert-grid.tsx
  components/
    cert-card.tsx
    stat-chip.tsx
```

Regla simple:

- si no es “una sección grande del page”, pero sí es una pieza reutilizada dentro de esa página, probablemente va en `components/`

### Usar `src/components/brandpetram/`

Usa `src/components/brandpetram/` solo cuando el componente:

- ya es claramente compartido por varias secciones reales
- dejó de pertenecer a una sola página
- ya pasó por una decisión consciente de promotion o parametrización

No subir algo ahí solo porque:

- “tal vez luego sirva”
- “se ve reusable”
- “ya lo tenemos hecho”

Eso sería promoción prematura.

Regla simple:

- si hoy solo una página lo necesita, no va aquí
- si dos o más secciones ya lo usan de verdad, entonces sí puede ser candidato

### Resumen rápido

- una sola página + bloque grande → `sections/`
- una sola página + pieza auxiliar → `components/`
- varias secciones reales + ownership compartido confirmado → `src/components/brandpetram/`

## Los 3 caminos posibles

### 1. `promover + reescribir`

Se usa cuando un bloque deja de ser de una sección y pasa a ser del sistema, y además necesitas cambiar su copy o contenido.

Sirve cuando:

- el bloque va a decir básicamente lo mismo en varias páginas
- quieres una versión canónica compartida

No sirve bien cuando:

- dos páginas necesitan la misma estructura visual pero mensajes distintos

### 2. `localizar + reescribir`

Se usa cuando una sección necesita un bloque parecido al de otra, pero en realidad necesita su propia versión.

Esto significa:

- no tocar el original de la otra sección
- crear una copia local dentro de la sección actual
- reescribir ahí el contenido

Este es el camino correcto cuando no hay reutilización real confirmada.

### 3. `parametrizar + compartir`

Se usa cuando varias páginas sí necesitan la misma estructura visual, pero con contenido distinto.

Aquí el componente compartido recibe datos o props diferentes por página.

Este camino sirve cuando la reutilización ya es real y estable.

## Regla para elegir camino

- mismo bloque + mismo mensaje en varias páginas: `promover + reescribir`
- mismo bloque + mensaje distinto por página: `parametrizar + compartir`
- todavía no sabemos si debe compartirse: `localizar + reescribir`

## Cómo decidir rápido

Si dudas, usa este orden:

1. ¿Solo una página lo necesita hoy?
   Sí → déjalo local

2. ¿Es un bloque grande del page?
   Sí → `sections/`

3. ¿Es una pieza local más pequeña?
   Sí → `components/`

4. ¿Ya lo usan varias secciones reales?
   Sí → evaluar `src/components/brandpetram/`

5. ¿Las páginas comparten estructura pero no mensaje?
   Sí → `parametrizar + compartir`

6. ¿No está claro todavía?
   Entonces no promociones: usa `localizar + reescribir`

## Ejemplo real del proyecto

En `excelencia-operativa` se detectó que tres bloques venían de:

- `src/app/(marketing)/product/sections/testimonial.tsx`
- `src/app/(marketing)/product/sections/notes-features.tsx`
- `src/app/(marketing)/product/sections/testimonials-section.tsx`

La solución correcta no fue promoverlos a sistema.

La solución correcta fue:

- restaurar los originales de marketing
- crear versiones locales en:
  - `src/app/experiencia/excelencia-operativa/sections/testimonial.tsx`
  - `src/app/experiencia/excelencia-operativa/sections/documentacion-auditable.tsx`
  - `src/app/experiencia/excelencia-operativa/sections/dimensiones-control.tsx`

¿Por qué?

Porque no había reutilización real. Solo había una estructura de template parecida, pero cada página necesitaba su propio contenido.

## Qué hacer si quiero cambiar el look de una página

### Caso A: el cambio vive solo en esa página

Hazlo dentro de la sección:

- crea componentes locales en `sections/` o `components/`
- trabaja desde el worktree de esa sección
- no lo subas a `src/components/brandpetram/` solo por anticipación

### Caso B: el cambio toca algo compartido

Si el cambio afecta algo como:

- `Header`
- `globals.css`
- `src/components/`
- un componente ya usado por varias páginas

entonces ya no es un cambio de sección.
Eso va por `MAIN` o `work-system`.

## Qué cosas se documentan en `MAIN`

En este proyecto, estos archivos se tratan como documentación de coordinación:

- `docs/copy/angle-briefs/*.md`
- `docs/copy/tracker-rondas-copy-grupo-nelson.md`
- `docs/copy/memoria-de-trabajo-*.md`

No se deben actualizar en paralelo desde worktrees de sección.

## Checklist antes de editar algo cross-section

Antes de editar un componente importado desde otra sección, hay que responder:

1. ¿Realmente se va a reutilizar en más de una página?
2. ¿El mensaje será el mismo o diferente?
3. ¿Conviene dejar el original intacto y crear una versión local?
4. ¿Esto pertenece a la sección o al sistema?

Si no está claro, la respuesta por defecto debe ser:

**no promover todavía**

y primero optar por:

**`localizar + reescribir`**

## Cheat sheet mental

- `workspace-nelson.sh` y `tmux` = infraestructura
- `ownership-map.md` = quién puede tocar qué
- `sections/` = bloques grandes locales
- `components/` = piezas locales pequeñas
- `src/components/brandpetram/` = sistema compartido real
- `localizar + reescribir` = opción por defecto cuando todavía no hay reutilización confirmada

## DevOverlay y limpieza de worktrees

### Qué es DevOverlay

DevOverlay agrega atributos `data-component`, `data-component-file` y `data-component-props` a los componentes para inspección visual en desarrollo. Esos atributos se agregan automáticamente al correr `pnpm dev` (via `predev`).

### Cómo correr dev

Usar siempre:

```bash
pnpm dev -- --port <puerto>
```

No usar `pnpm exec next dev -p <puerto>` porque eso salta el hook `predev` y DevOverlay no se activa.

### Reglas de limpieza

- **No ejecutar `pnpm run overlay:remove` durante trabajo normal.** El script edita archivos fuente en `src/components/` y produce cambios masivos en git que no tienen nada que ver con tu trabajo.
- **`overlay:remove` solo en contexto excepcional** y nunca dentro de un worktree de sección.
- **`pnpm build` no muta archivos fuente.** El `prebuild` automático fue eliminado para evitar cambios masivos accidentales.
- Los atributos `data-component` en producción no afectan funcionalidad ni rendimiento — son atributos HTML inertes.

### Si aparecen cambios masivos en `src/components/`

Si por alguna razón aparecen cambios de DevOverlay en `git status`, limpiar con:

```bash
git restore --worktree --staged src/components
```

Eso revierte los archivos sin perder trabajo real.

## Relación con otros documentos

- Documento maestro: `docs/planes/plan-maestro-worktrees.md`
- Guía operativa: `docs/planes/guia-operativa-worktrees.md`
- Ownership real del repo: `docs/ownership-map.md`
- Reglas para Claude: `CLAUDE.md`
