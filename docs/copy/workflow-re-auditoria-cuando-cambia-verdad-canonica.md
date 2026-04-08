# Workflow — Re-auditoría Cuando Cambia La Verdad Canónica

## Para qué existe este documento

Este documento explica, en lenguaje humano y operativo, qué hacer cuando cambia una verdad canónica del negocio y eso amenaza con romper una página que ya estaba en construcción.

La idea es evitar este patrón:

- cambia una verdad importante,
- nadie re-audita la arquitectura narrativa,
- el equipo sigue construyendo,
- y al final aparecen frases raras, stats raras o bloques que ya no saben qué demostrar.

Este workflow existe para cortar ese problema antes.

---

## Qué significa "verdad canónica"

Aquí hablamos de cosas como:

- cuál es el nombre comercial correcto de un cliente
- si una razón social interna debe o no ser visible
- si dos entidades que parecían separadas en realidad son la misma
- si una estadística sigue siendo defendible
- si una ubicación interna puede o no aparecer en el sitio
- si un caso todavía puede vivir como caso separado

No es un cambio menor de copy.

Es una aclaración que cambia lo que la página puede prometer, mostrar o usar como prueba.

---

## Cuándo se dispara este workflow

Se dispara cuando pase cualquiera de estas cosas:

- cambia un naming visible
- se fusionan dos entidades que antes parecían separadas
- un caso deja de ser independiente
- una stat deja de ser confiable
- una prueba fuerte pasa a ser subordinada
- una ubicación o término interno ya no debe aparecer
- el equipo descubre que una prueba estaba mal atribuida

Si el problema es solo:

- repetición,
- estilo,
- headers flojos,
- o tono,

entonces esto probablemente no hace falta. Ahí primero van `qa-copy`, `Codex review` o edición normal.

---

## Qué problema intenta prevenir

El problema no suele ser solo "mal copy".

Muchas veces lo que se rompe es esto:

- la distribución de prueba entre bloques
- la independencia real de los casos
- la jerarquía entre caso dominante, soporte y cierre
- la lógica que hace que un bloque exista

Cuando eso se rompe y nadie lo revisa, la página puede mantener un brief aparentemente correcto y aún así salir rara.

---

## Flujo recomendado

### 1. Llega la aclaración canónica

Ejemplo:

- `Interiores Aéreos` ya no debe ir visible
- `Gulfstream Aerospace` sí debe ir visible

Todavía no se reescribe nada en el worktree.

Primero se centraliza la verdad.

### 2. La aclaración va a `MAIN`

`MAIN` hace 3 cosas:

1. registra la nueva verdad
2. decide si es realmente canónica o solo una hipótesis
3. hace un impact scan

Esto evita que varias ramas empiecen a reaccionar con interpretaciones distintas.

### 3. `MAIN` identifica los frentes afectados

No todos los worktrees deben enterarse de todo.

`MAIN` decide:

- qué briefs están afectados
- qué páginas están afectadas
- qué worktrees sí necesitan nueva instrucción
- qué componentes compartidos podrían estar contaminados

### 4. Se dispara `Angle Architect re-audit`

Aquí todavía no se implementa.

Primero se corre una re-auditoría para responder:

- si el ángulo sigue vivo
- si cambió el número de pruebas independientes
- qué bloque demuestra qué
- qué caso absorbió demasiado peso
- qué bloque quedó sin función clara

Este es el paso que más se suele saltar. Y justo por eso luego el copy sale raro.

### 5. `MAIN` actualiza brief y nota canónica

Con el resultado del re-audit:

- se ajusta el brief si hace falta
- se actualiza la nota del worktree si hace falta
- se deja más clara la nueva estructura narrativa

Todavía no significa que el worktree "ya lo vio".

Solo significa que ya existe una fuente de verdad limpia.

### 6. `MAIN` baja la instrucción al worktree afectado

Esto no pasa solo.

El worktree:

- no ve automáticamente el brief nuevo
- no ve automáticamente la nota nueva
- no hereda automáticamente el cambio de `MAIN`

Entonces `MAIN` prepara el prompt correcto y el humano se lo pega al worktree afectado.

### 7. El worktree reimplementa

Ahora sí el worktree:

- corrige copy
- ajusta layout si hace falta
- rebalancea casos
- elimina pruebas inválidas
- reconstruye la página con la nueva estructura

### 8. Review normal

Después de reimplementar:

1. `codex:adversarial-review` para drift, contradicciones y ownership
2. `qa-copy` para repetición, tono, vocabulario y fricción mecánica
3. revisión visual final

---

## Quién hace qué

### `MAIN`

Responsable de:

- recibir la aclaración canónica
- decidir si ya es verdad suficientemente firme
- hacer impact scan
- correr o coordinar `Angle Architect re-audit`
- actualizar brief y nota canónica
- decidir qué worktrees sí deben enterarse
- redactar el prompt correcto para el worktree afectado

### `Angle Architect re-audit`

Responsable de:

- revisar si el ángulo sigue funcionando
- revisar si la arquitectura narrativa sigue sana
- redistribuir prueba entre bloques
- detectar qué quedó inválido

No es su trabajo:

- hacer implementation
- pulir microcopy
- cerrar layout

Definición canónica del rol:

- [roles/angle-architect/angle-architect.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/angle-architect/angle-architect.md)

### Worktree afectado

Responsable de:

- leer la nueva verdad desde `MAIN` cuando se le indique
- reescribir su sección
- ajustar layout si hace falta
- mantenerse dentro de su ownership

No es su trabajo:

- decidir por sí solo una nueva verdad canónica
- improvisar arquitectura narrativa sin re-audit

### `qa-copy`

Responsable de:

- tensionar ejecución
- no redefinir estrategia

### `codex:adversarial-review`

Responsable de:

- detectar drift
- detectar contradicciones
- detectar problemas cross-page
- detectar riesgos de ownership

---

## Inputs mínimos para correr bien el workflow

- la aclaración canónica nueva
- el brief actual de la sección
- la nota canónica del worktree si existe
- la implementación actual de la sección
- claridad sobre qué worktree está afectado

Sin esos inputs, la re-auditoría tiende a salir superficial.

---

## Output esperado al final

Si el workflow salió bien, al final debes tener:

1. una verdad canónica clara en `MAIN`
2. un brief ajustado si hacía falta
3. una nota de continuidad actualizada si hacía falta
4. una nueva distribución de prueba entre bloques
5. un prompt limpio para el worktree afectado
6. una implementación ya corregida
7. review editorial y visual encima de esa nueva base

---

## Señales de que sí necesitas re-audit

Estas son señales prácticas:

- "ya no sé qué demuestra este bloque"
- "el primer caso se comió toda la página"
- "el cierre se siente metido a fuerza"
- "esto antes eran 3 pruebas y ahora parecen 2 y media"
- "el layout todavía funciona, pero el argumento ya no"
- "si cambio este nombre, se me cae media página"

Si escuchas eso, probablemente no necesitas solo mejor copy.

Necesitas re-auditoría.

---

## Señales de que NO necesitas re-audit

- solo hay repetición de una palabra
- el H1 está un poco flojo
- el QA marcó una frase genérica
- hay que mejorar un CTA
- la página funciona, pero le falta polish

Ahí primero no metas este workflow.

---

## Regla práctica

Si cambió la verdad, primero se re-audita.

Si no cambió la verdad, primero se edita.

Esa sola regla ya evita muchísimos errores.

---

## Relación con otros documentos

- [copy-workflow-para-automatizar.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/copy-workflow-para-automatizar.md)
- [como-evitar-que-el-copy-siga-saliendo-mal.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/como-evitar-que-el-copy-siga-saliendo-mal.md)
- [prompt-template-angle-architect-re-audit.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/prompt-template-angle-architect-re-audit.md)

---

## Conclusión

Este workflow no existe para hacer el proceso más pesado.

Existe para evitar que el equipo trate de arreglar con frases o layout un problema que en realidad nació cuando cambió la verdad y nadie re-auditó la arquitectura narrativa antes de seguir construyendo.
