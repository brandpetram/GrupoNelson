# Copy Workflow para Automatizar

## Para qué existe este documento

Este documento deja por escrito el workflow recomendado cuando una sección ya tiene:

- brief aprobado
- implementación en curso
- revisiones con Codex
- chequeos con `qa-copy`

La idea no es automatizar "todo".  
La idea es automatizar sin degradar el ángulo editorial.

## Regla base

El brief aprobado sigue siendo la fuente de verdad.

Ni `codex:review`, ni `codex:adversarial-review`, ni `qa-copy` reescriben la estrategia por sí solos.

Esas capas existen para tensionar la ejecución, no para sustituir:

- territorio
- ángulo
- tesis
- límites de la página

## Workflow recomendado

1. Brief aprobado
2. Claude implementa
3. `codex:adversarial-review` para drift, ownership y contradicciones cross-page
4. `qa-copy` para reglas, tono, repetición y vocabulario
5. Claude corrige **contra el brief aprobado**
6. revisión visual final
7. si algo del QA contradice el brief, no se corrige en automático; se escala

## Qué cambia si cambió la verdad canónica

Si cambió una verdad canónica importante, este workflow ya no entra directo en:

- implementación
- review
- QA

Antes hay que insertar un paso adicional:

1. `MAIN` registra la aclaración
2. `MAIN` hace impact scan
3. se corre `Angle Architect re-audit`
4. se actualiza brief y nota canónica si hace falta
5. solo después vuelve a entrar el workflow normal

Si ese caso aplica, usar estos documentos:

- [workflow-re-auditoria-cuando-cambia-verdad-canonica.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/workflow-re-auditoria-cuando-cambia-verdad-canonica.md)
- [prompt-template-angle-architect-re-audit.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/prompt-template-angle-architect-re-audit.md)

## Qué hace cada capa

### 1. Brief aprobado

Define:

- qué sí promete la página
- qué no promete
- cuál es la pregunta del comprador
- qué facts sostienen el argumento
- qué territorios vecinos no debe invadir

Sin brief aprobado, el resto del workflow se vuelve frágil.

### 2. Claude implementa

Claude de la sección:

- toma el brief aprobado como fuente de verdad
- implementa el copy en su worktree
- se mantiene dentro del ownership de esa sección

Aquí todavía no buscamos perfección.
Buscamos una primera ejecución fiel al brief.

### 3. `codex:adversarial-review`

Esta capa sirve para detectar problemas de alto valor que no siempre se ven a simple vista:

- drift de territorio
- invasión de otra sección
- contradicción con páginas vecinas
- overclaim
- problemas de ownership

Es especialmente útil cuando la página:

- comparte temas con otras rutas
- toca claims delicados
- o tiene riesgo de duplicar narrativas ya resueltas en otro lado

### 4. `qa-copy`

Esta capa sirve para detectar fricción más mecánica o editorial:

- repetición excesiva
- tono extraño
- vocabulario prohibido
- headers débiles o genéricos
- aperturas flojas
- uso de términos sensibles demasiadas veces

`qa-copy` ayuda mucho, pero no decide por sí solo qué debe cambiar.

### 5. Claude corrige contra el brief aprobado

Después de correr QA, el paso correcto no es:

**"fixéalo todo"**

El paso correcto es:

**"clasifica findings contra el brief aprobado y corrige solo los válidos"**

Eso obliga a distinguir entre:

- findings válidos
- falsos positivos
- deuda conocida
- tradeoffs estratégicos

## Qué sí hay que decirle a Claude después del QA

Una instrucción sana se parece a esto:

```text
Toma como fuente de verdad el brief aprobado de esta sección.

Quiero que clasifiques cada finding en:
1. corregir
2. no corregir
3. escalar / falso positivo

Reglas:
- el brief aprobado manda por encima del QA mecánico
- no conviertas la página en algo más genérico solo para pasar QA
- si un finding choca con el ángulo o con la función de la página, no lo apliques automáticamente
```

## Qué no hay que hacer

### No obedecer el QA de forma ciega

El mayor riesgo aparece cuando el QA empuja hacia:

- keywords más genéricas
- más términos repetidos "porque SEO"
- headers más obvios pero menos potentes
- copy más plano para satisfacer una regla mecánica

Eso puede hacer que la página "pase QA" y al mismo tiempo pierda:

- diferenciación
- tensión comercial
- legitimidad del ángulo

### No dejar que el QA reescriba la tesis

Si el QA empuja a un cambio que contradice:

- el territorio fijo
- la pregunta del comprador
- el ángulo rector
- o los límites del brief

ese cambio no se aplica en automático.

Primero se escala.

## Regla de oro

**QA no reescribe la estrategia. QA solo tensiona la ejecución.**

## Ejemplo mental de uso

### Caso sano

- el brief dice que la página debe hablar de capacidad demostrada
- `qa-copy` detecta repetición excesiva de una misma frase
- Claude varía wording sin mover la tesis

Resultado: mejora real

### Caso peligroso

- el brief aprueba un H1 fuerte, corto y comercial
- el QA pide meter una keyword genérica para pasar un check
- alguien la mete sin pensar

Resultado: la página puede volverse más obvia, menos potente y menos diferenciada

Aquí el fix no debe entrar en automático. Es un tradeoff estratégico.

## Orden correcto de autoridad

1. Brief aprobado
2. Ownership del worktree
3. Codex review / adversarial review
4. QA Copy
5. Optimización secundaria

Si dos capas chocan, manda la que está más arriba.

## Recomendación práctica para este proyecto

En Grupo Nelson, cuando trabajemos páginas con worktrees, usar este orden:

1. aprobar brief desde `MAIN`
2. implementar en el worktree de sección
3. correr `codex:adversarial-review`
4. correr `qa-copy`
5. pedir a Claude que clasifique findings contra el brief aprobado
6. corregir solo los findings válidos
7. hacer revisión visual final
8. documentar o escalar lo que sea follow-up cross-page

## Conclusión

Automatizar QA sí conviene.

Lo que no conviene es automatizar obediencia ciega.

El objetivo del sistema no es producir páginas que "pasen checks".
El objetivo es producir páginas con:

- buen ángulo
- ejecución consistente
- menos errores
- y criterio suficiente para distinguir entre una mejora real y un falso positivo mecánico
