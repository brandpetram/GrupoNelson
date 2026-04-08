# Workflow de Match Visual — Para que lo comprenda un humano

## Para qué existe este documento

Este documento explica, en lenguaje humano, cómo usar el rol de `Visual Matchmaker` dentro del proyecto.

No es un prompt.
No es un skill.
No es una instrucción para Claude todavía.

Es un **workflow operativo para humanos**:

- para saber cuándo usar este rol
- en qué orden correrlo
- qué darle como input
- qué esperar como output
- y en qué momento sí o no dejar que implemente

El prompt para Claude debe salir **después** de este workflow, no al revés.

---

## Problema que resuelve

Cuando una sección ya tiene brief y copy razonablemente estables, aparece otro problema:

**¿qué arquitectura visual le queda mejor a este contenido?**

Si no se trabaja esto con método, suelen pasar dos cosas malas:

1. Se fuerza el texto para que “quepa” en un componente.
2. Se deforma un componente bonito solo para acomodar un texto que no fue pensado para él.

`Visual Matchmaker` existe para evitar esas dos mutilaciones.

---

## Regla base

El rol de `Visual Matchmaker` no inventa desde cero ni explora el universo entero.

Trabaja **solo entre propuestas dadas**.

Es decir:

- tú le das 2 a 5 propuestas
- esas propuestas pueden venir en código o en screenshot
- él evalúa solo esas opciones
- y elige la que mejor hace match con el contenido

---

## Qué necesita existir antes

Antes de correr este workflow, idealmente ya debe existir:

1. un brief aprobado o suficientemente estable
2. contenido implementado o al menos ya bastante claro
3. una sección con ownership claro
4. un worktree limpio para esa sección
5. entre 2 y 5 propuestas visuales candidatas

Sin eso, el rol se vuelve borroso y empieza a inventar.

---

## Qué cuenta como propuesta visual

Puede venir en dos formatos:

### Código

Ejemplos:

- componente de Tailwind UI
- bloque de Tailark
- pro-block
- componente ya existente del proyecto
- sección local copiada o descargada para evaluación

### Screenshot / imagen

Ejemplos:

- captura de un layout de referencia
- screenshot de un bloque existente
- mockup visual

En este caso, el rol no lo implementa tal cual todavía.
Primero lo evalúa como propuesta de arquitectura visual.

---

## Workflow completo

## Fase 1 — Definir el campo de juego

Antes de cualquier evaluación, el humano define:

- qué sección se está trabajando
- qué brief manda
- qué worktree es dueño
- cuáles son las propuestas visuales candidatas

Aquí todavía no se implementa nada.

Objetivo:

dejarle claro al rol que no tiene libertad infinita, sino un conjunto acotado de propuestas.

---

## Fase 2 — Entregar inputs

Al `Visual Matchmaker` se le entregan:

1. el brief aprobado
2. el contenido actual
3. la página actual
4. las propuestas visuales
5. las reglas

Las reglas importantes suelen ser:

- no reescribir estrategia
- no tocar otras secciones
- no tocar docs
- no mutilar el texto
- no mutilar el componente
- trabajar solo entre las propuestas dadas

---

## Fase 3 — Evaluación comparativa

Aquí el rol **todavía no implementa**.

Primero debe comparar:

- propuesta A
- propuesta B
- propuesta C

Y contestar algo como:

- cuál soporta mejor la jerarquía
- cuál deja escanear mejor la página
- cuál aguanta mejor la densidad real del contenido
- cuál exige menos mutilación
- cuál permite crecer sin romperse

Esta fase termina con una recomendación, no con código.

---

## Fase 4 — Selección

El output esperado aquí es:

1. evaluación breve de cada propuesta
2. cuál recomienda
3. por qué la recomienda
4. qué partes del contenido entran bien
5. qué partes faltan o sobran
6. dónde dejaría placeholder o Lorem Ipsum temporal
7. qué ajustes ligeros haría al componente sin deformarlo

Aquí el humano decide:

- `sí, implementa esa`
- `implementa otra`
- `compara nuevas propuestas`
- `combina rasgos de dos propuestas`

La idea importante:

**no dejar que implemente antes de decidir la dirección.**

---

## Fase 5 — Implementación

Solo después de aprobar una dirección visual:

- se implementa en el worktree de esa sección
- se mantiene el brief como fuente de verdad
- se toca solo esa sección
- se pueden crear `sections/` o `components/` locales si hace falta

En esta fase sí puede:

- reorganizar bloques
- ajustar grids
- cambiar spacing
- mover pesos visuales
- extender un componente de forma natural

Pero no puede:

- reescribir el ángulo
- salir del ownership
- convertir la ronda visual en una reescritura editorial total

---

## Fase 6 — Placeholder temporal cuando haga falta

A veces la mejor propuesta visual necesita más contenido del que hoy existe.

Eso no significa que haya que destruir el componente.

La regla correcta es:

- si el match es bueno
- y el faltante es solo de densidad o completitud
- se puede dejar placeholder o `Lorem Ipsum` temporal

Luego ese faltante lo resuelve copywriting en una ronda posterior.

Esto es preferible a:

- recortar brutalmente el componente
- o deformar la arquitectura solo porque hoy falta texto

---

## Fase 7 — Revisión visual humana

Después de implementar:

- se revisa en `localhost`
- se ve desktop, tablet y móvil si hace falta

Lo que se revisa aquí no es el ángulo.
Se revisa:

- jerarquía
- ritmo
- escaneo
- densidad
- fatiga visual
- peso de pruebas
- peso del CTA
- equilibrio entre contenido y layout

---

## Fase 8 — Review con Codex

Después de la revisión visual, conviene correr:

- `codex:adversarial-review` si quieres vigilar drift, ownership o contradicciones
- `codex:review` si quieres una pasada más general

Aquí Codex no decide el layout por sí solo.
Solo tensiona la implementación.

---

## Fase 9 — QA Copy solo si el copy cambió

Si la ronda visual sí obligó a:

- cambiar headings
- cambiar CTA
- tocar frases
- sustituir placeholders por texto real

entonces sí conviene correr `qa-copy`.

Si la ronda fue casi puro layout y estructura:

- no hace falta inmediatamente

---

## Fase 10 — Corrección y commit

Después de revisar:

- se corrigen findings válidos
- se mantiene el brief como autoridad
- se evita obedecer mecánicamente cualquier QA

Y solo entonces:

- se hace checkpoint commit del worktree

---

## Regla importante: dividir selección e implementación

Este workflow funciona mejor si se divide en dos etapas:

### Etapa A — Selección

El rol solo compara propuestas y recomienda una.

### Etapa B — Implementación

Ya aprobada la dirección, se implementa.

Esto es más seguro que pedirle:

**"revisa todo y ya implementa"**

Porque así se evitan decisiones apresuradas y layouts mal casados con el contenido.

---

## Qué no se debe hacer

No se debe:

- pedirle que elija e implemente todo en una sola tirada sin validación humana
- dejarlo buscar layouts fuera del set dado
- dejarlo reescribir el brief durante una ronda visual
- recortar texto solo para pasar una prueba visual
- deformar componentes buenos solo para acomodar un match mediocre

---

## Relación con otros documentos

### Rol

La definición del rol vive aquí:

- [visual-matchmaker.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/visual/roles/visual-matchmaker.md)

### Worktrees y ownership

Las reglas de ownership y uso de worktrees viven aquí:

- [guia-humana-worktrees-y-componentes.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/estrategia/guia-humana-worktrees-y-componentes.md)

### Workflow editorial / QA

La relación entre brief, Codex y QA Copy vive aquí:

- [copy-workflow-para-automatizar.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/copy-workflow-para-automatizar.md)

---

## Resumen operativo

En una línea:

1. brief estable
2. propuestas dadas
3. `Visual Matchmaker` compara
4. humano elige dirección
5. se implementa
6. se revisa visualmente
7. Codex tensiona
8. QA Copy solo si hubo cambio real de texto
9. commit

---

## Frase guía

Si este workflow tuviera una sola regla de oro, sería esta:

**Primero se decide el mejor match. Después se implementa. No al revés.**
