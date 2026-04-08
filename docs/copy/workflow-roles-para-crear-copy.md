# Workflow — Roles Para Crear Copy

## Para qué existe este documento

Este documento deja por escrito el orden recomendado de roles para crear copy dentro de este proyecto.

Su objetivo es evitar una falla muy común:

- empezar a escribir demasiado pronto
- descubrir tarde que faltaba contexto
- descubrir todavía más tarde que el ángulo estaba bien pero el copy salió débil
- y terminar corrigiendo con QA cosas que debieron resolverse antes

En resumen:

**primero se construye la base del pensamiento; después se escribe; después se revisa.**

---

## Regla de oro

**Primero manda el brief. Luego manda el QA.**

Eso significa:

- primero se limpia contexto
- luego se encuentra valor
- luego se fija el ángulo
- luego se escribe
- y solo después entran los reviewers y el QA mecánico

`QA` no reescribe la estrategia.
`QA` tensiona la ejecución.

---

## Versión corta del orden

1. `Context Curator`
2. `Value Finder`
3. `Angle Architect`
4. `Narrative Copywriter`
5. `QA Angle`
6. `QA Narrative`
7. `QA Structure`
8. `QA Prominence`
9. `qa-copy`
10. revisión humana final

Versión resumida:

**contexto -> valor -> ángulo -> narrativa -> QA estratégico -> QA narrativo -> QA estructural -> QA de prominencia -> QA mecánico**

---

## Orden recomendado, explicado

### 1. `Context Curator`

Documento:

- [roles/context-curator.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/context-curator.md)

Pregunta que resuelve:

**`¿Qué está limpio, qué está en conflicto y qué necesita saber el siguiente rol antes de pensar?`**

Qué entrega:

- facts confirmados
- conflictos
- ambigüedades
- anomalías
- paquete mínimo recomendado para el siguiente rol

Cuándo usarlo:

- cuando el material está sucio
- cuando hay naming ambiguo
- cuando hay contradicciones
- cuando hay demasiadas fuentes mezcladas

Cuándo se puede saltar:

- cuando ya existe verdad canónica limpia y suficiente

---

### 2. `Value Finder`

Documento:

- [roles/value-finder.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/value-finder.md)

Pregunta que resuelve:

**`¿Qué facts aquí comunican valor real y cuáles son puro contexto o ruido?`**

Qué entrega:

- facts de valor priorizados
- tipo de valor
- fuerza del fact
- por qué impresiona
- wording seguro sugerido
- riesgos o constraints

Cuándo usarlo:

- cuando hay mucha data y no está claro qué realmente vale
- cuando el equipo corre riesgo de escribir copy correcto pero sin caché
- cuando conviene separar contexto de prueba

Cuándo se puede saltar:

- cuando el valor principal ya es demasiado obvio y está bien identificado

---

### 3. `Angle Architect`

Documento:

- [roles/angle-architect/angle-architect.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/angle-architect/angle-architect.md)

Pregunta que resuelve:

**`¿Cuál es la excusa legítima para que esta página exista dentro de su territorio fijo?`**

Qué entrega:

- territorio
- pregunta del comprador
- ángulo rector
- tesis
- por qué ese ángulo es poderoso
- qué facts se quedan
- qué facts salen
- riesgos de drift
- límites de la página

Destino habitual:

- `docs/copy/angle-briefs/*.md`

Cuándo usarlo:

- prácticamente siempre que una página vaya a definirse o redefinirse

Cuándo se puede saltar:

- casi nunca
- solo si el brief ya existe, está aprobado y no hay cambio estratégico

---

### 4. `Narrative Copywriter`

Documento:

- [roles/narrative-copywriter/narrative-copywriter.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/narrative-copywriter/narrative-copywriter.md)

Pregunta que resuelve:

**`¿Cómo se escribe esta página para que el ángulo sí se sienta vivo en la lectura real?`**

Qué entrega:

- copy narrativamente ejecutado
- peso distribuido entre bloques
- transiciones
- jerarquía verbal
- valor visible sin humo

Cuándo usarlo:

- cuando ya existe brief aprobado
- cuando ya se sabe qué valor importa

Cuándo se puede saltar:

- nunca si lo que se va a producir es copy nuevo o reescrito

---

## Reviewers y QA

Una vez que el copy ya existe, entran las capas de revisión.

El orden importa.

### 5. `QA Angle`

Documento:

- [reviewers/qa-angle.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/reviewers/qa-angle.md)

Pregunta que resuelve:

**`¿La ejecución sigue obedeciendo el ángulo aprobado o ya se desvió?`**

Detecta cosas como:

- drift
- invasión de otro territorio
- pérdida de tesis
- facts que ya no sostienen el argumento correcto

---

### 6. `QA Narrative`

Documento:

- [reviewers/qa-narrative.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/reviewers/qa-narrative.md)

Pregunta que resuelve:

**`Independientemente de que el ángulo sea correcto, ¿la página está narrativamente bien ejecutada?`**

Detecta cosas como:

- monólogos
- bloques famélicos
- mala distribución de densidad
- transiciones torpes
- cierres débiles

---

### 7. `QA Structure`

Documento:

- [reviewers/qa-structure.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/reviewers/qa-structure.md)

Pregunta que resuelve:

**`¿La estructura visible de la página está bien clasificada y es consistente?`**

Detecta cosas como:

- patrones de items rotos
- bloques híbridos
- jerarquías mal separadas
- casos que parecen cierres
- cierres que parecen casos

Regla importante:

Si una sección se presenta como patrón de items, los items deben mantener una estructura equivalente de escaneo salvo justificación explícita.

---

### 8. `QA Prominence`

Documento:

- [reviewers/qa-prominence.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/reviewers/qa-prominence.md)

Pregunta que resuelve:

**`¿La página está poniendo en grande lo que más prestigio, credibilidad o fuerza de prueba aporta?`**

Detecta cosas como:

- marcas fuertes escondidas en el eyebrow
- headings abstractos que tapan la prueba real
- prominencia invertida
- señales valiosas ocultas en slots secundarios

Frase guía:

**`El eyebrow sirve para dar contexto. El heading sirve para impresionar.`**

---

### 9. `qa-copy`

Skill:

- `qa-copy`

Pregunta que resuelve:

**`¿El texto cumple reglas mecánicas de copy, tono, repetición y vocabulario?`**

Detecta cosas como:

- repeticiones
- vocabulario problemático
- fórmulas mecánicas
- frases prohibidas o débiles
- ruido de SEO mal entendido

Debe correr:

- al final
- nunca antes del brief
- nunca como sustituto de los roles anteriores

---

### 10. Revisión humana final

La última capa sigue siendo humana.

Pregunta que resuelve:

**`¿Esto realmente comunica valor, verdad comercial y prestigio sin volverse tonto, genérico o inflado?`**

Aquí se revisa:

- fuerza real
- verdad del negocio
- si el texto se siente convincente de verdad
- si algo todavía “huele raro” aunque todos los reviewers pasen

---

## Cuándo se puede usar una versión corta

No siempre hace falta correr todas las capas.

### Workflow mínimo útil

Sirve cuando:

- el contexto ya está limpio
- el valor principal ya es evidente
- el brief ya existe y está aprobado

Orden:

1. `Angle Architect` o brief ya existente
2. `Narrative Copywriter`
3. `QA Angle`
4. `QA Narrative`
5. `qa-copy`
6. revisión humana

### Workflow completo

Conviene cuando:

- hay cambio estratégico
- hay conflicto factual
- el material está disperso
- la página es importante
- o la ronda anterior salió mal

Orden:

1. `Context Curator`
2. `Value Finder`
3. `Angle Architect`
4. `Narrative Copywriter`
5. `QA Angle`
6. `QA Narrative`
7. `QA Structure`
8. `QA Prominence`
9. `qa-copy`
10. revisión humana final

---

## Qué error evita cada capa

- `Context Curator`: evita pensar sobre terreno sucio
- `Value Finder`: evita que lo valioso quede enterrado
- `Angle Architect`: evita páginas sin excusa legítima
- `Narrative Copywriter`: evita copy correcto pero mal ejecutado
- `QA Angle`: evita drift
- `QA Narrative`: evita páginas desbalanceadas
- `QA Structure`: evita rarezas visibles de patrón y función
- `QA Prominence`: evita esconder lo que más impresiona
- `qa-copy`: evita ruido mecánico y degradación de tono
- revisión humana: evita que el sistema se autoengañe

---

## Regla práctica para MAIN

Si algo cambió en la verdad canónica:

- primero se corrige o registra en `MAIN`
- luego se decide qué roles deben re-ejecutarse
- y solo después se baja instrucción al worktree afectado

No se corrige una página importante solo por intuición local del worktree si lo que cambió afecta:

- facts
- naming
- valor comercial
- o ángulo

---

## Frase guía final

**No se empieza escribiendo. Se empieza entendiendo qué es verdad, qué vale, qué ángulo conviene y recién entonces se escribe.**
