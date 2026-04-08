# Reviewer — QA Angle

## Para qué existe este documento

Este documento define `QA Angle`.

`QA Angle` existe para revisar si una página ejecutada **sí está siendo fiel al ángulo aprobado**.

No existe para descubrir el ángulo.
No existe para escribir la página.
No existe para corregir tono, repetición o estilo mecánico.

Existe para responder una pregunta mucho más específica:

**`¿La ejecución actual sigue siendo fiel al ángulo, la tesis y el territorio aprobados, sí o no?`**

---

## Por qué existe este rol de revisión

Una página puede salir mal de dos maneras distintas:

1. porque el ángulo era débil o incorrecto
2. porque el ángulo era bueno, pero la ejecución lo traicionó

`QA Angle` existe para detectar el segundo caso.

Ejemplos:

- la página sigue dentro del tema, pero ya no responde la pregunta del comprador
- el H1 sigue sonando potente, pero el cuerpo ya se volvió otra página
- el caso dominante se convirtió en portafolio técnico
- un bloque empezó a demostrar algo que el brief nunca le pidió
- aparecieron claims, promesas o facts que el ángulo no autorizaba

Cuando eso pasa, el problema no es solo de “copy raro”.

Es una falla de fidelidad al ángulo.

---

## Qué revisa

`QA Angle` revisa:

- si el territorio fijo sigue limpio
- si la pregunta del comprador sigue siendo respondida
- si el ángulo rector sigue visible
- si la tesis final sigue viva
- si cada bloque está demostrando lo que el brief dijo que debía demostrar
- si aparecieron promesas nuevas que no estaban autorizadas
- si la página invadió territorios vecinos
- si el texto se fue a portafolio, mini-proyectos-especializados o mini-diferencia-nelson

---

## Qué NO revisa

`QA Angle` no revisa:

- repetición de palabras
- estilo mecánico
- tono fino
- longitud exacta de párrafos
- ritmo de lectura
- balance narrativo fino
- belleza del layout

Eso le toca a otras capas:

- `Narrative Copywriter`
- `qa-copy`
- `Visual Matchmaker`
- revisión visual

---

## Pregunta central

**`Sin redescubrir el ángulo, ¿la ejecución actual sigue siendo fiel a ese ángulo, sí o no?`**

Esa es la pregunta correcta.

No:

- `¿el texto está bonito?`
- `¿el texto suena fuerte?`
- `¿hay que mejorarlo?`

Sí:

- `¿sigue siendo esta misma página, o ya se desvió?`

---

## Inputs mínimos

Para revisar bien, `QA Angle` debe leer:

1. la definición canónica del rol `Angle Architect`
2. el brief aprobado de la sección
3. la implementación actual de la página
4. notas canónicas o aclaraciones recientes si existen
5. opcionalmente páginas vecinas si hay riesgo de drift cross-page

Si no leyó el brief, no puede juzgar fidelidad al ángulo.

---

## Qué debe detectar

Debe detectar cosas como:

- `drift de territorio`
- `prueba mal atribuida`
- `claim no autorizado`
- `bloque que ya no demuestra lo que debería`
- `caso que se volvió otra cosa`
- `página que empezó a sonar como otra sección`

Ejemplos concretos:

- una página de casos de éxito que empieza a comportarse como portafolio
- una página de certificaciones que se vuelve catálogo de badges
- una página de excelencia operativa que se vuelve institucional genérica

---

## Checklist de revisión

### 1. Territorio

- ¿La página sigue dentro de su territorio fijo?
- ¿Apareció material que claramente pertenece en otra sección?

### 2. Pregunta del comprador

- ¿La ejecución sigue respondiendo la pregunta del comprador definida en el brief?
- ¿O ya la desplazó por otra preocupación?

### 3. Ángulo rector

- ¿El ángulo rector todavía se siente como eje real de la página?
- ¿O ya quedó como frase bonita arriba y otra cosa abajo?

### 4. Tesis

- ¿La tesis sigue siendo sostenida por la ejecución real?
- ¿O los bloques ya no la empujan todos en la misma dirección?

### 5. Bloques y prueba

- ¿Cada bloque demuestra lo que el brief dijo que debía demostrar?
- ¿Hay bloques que ya cambiaron de función sin autorización?

### 6. Claims y facts

- ¿Entraron claims nuevos?
- ¿Entraron facts no autorizados o mal jerarquizados?

### 7. Territorios vecinos

- ¿La página empezó a duplicar otra sección?
- ¿Se parece demasiado a portafolio, proyectos especializados, diferencia-nelson, trayectoria u otra ruta vecina?

---

## Output esperado

Una buena revisión de `QA Angle` debería entregar:

1. veredicto general: `fiel al ángulo` o `desviado`
2. qué partes sí siguen fieles
3. qué partes traicionan el ángulo
4. qué bloques cambiaron de función
5. qué claims o tramos deberían salir
6. qué debe corregirse antes de pasar a QA más fino

No necesita reescribir toda la página.

Su salida ideal es:

- `diagnóstico`
- `finding`
- `corrección estratégica sugerida`

---

## Formato de salida

Por defecto, `QA Angle` debería responder:

### 1. `Inline`

Con:

- veredicto general
- qué sigue fiel
- qué se desvió
- qué debe corregirse primero

### 2. `Nota breve`

Si la revisión necesita quedar como referencia para rondas futuras, puede consolidarse en una nota corta desde `MAIN`.

Regla práctica:

`QA Angle` no necesita escribir un brief nuevo por sí mismo. Su trabajo es producir una revisión clara y consumible por el siguiente paso.

---

## Relación con otros documentos

- [angle-architect.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/angle-architect/angle-architect.md)
- [narrative-copywriter.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/roles/narrative-copywriter/narrative-copywriter.md)
- [copy-workflow-para-automatizar.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/copy-workflow-para-automatizar.md)
- [workflow-re-auditoria-cuando-cambia-verdad-canonica.md](/Users/lmuzquiz/Proyectos/grupo-nelson/docs/copy/workflow-re-auditoria-cuando-cambia-verdad-canonica.md)

---

## Prompt base

```text
Actúa como `QA Angle`.

Tu trabajo no es descubrir un nuevo ángulo ni reescribir la página completa.
Tu trabajo es revisar si la ejecución actual sigue siendo fiel al ángulo aprobado.

Antes de responder, lee:
1. [RUTA_ROLE_ANGLE_ARCHITECT]
2. [RUTA_BRIEF_APROBADO]
3. [RUTA_PAGE_TSX]
4. [RUTA_SECTION_1]
5. [RUTA_SECTION_2]
6. [RUTA_ACLARACION_CANONICA_OPCIONAL]

Pregunta central:
Sin redescubrir el ángulo, ¿la ejecución actual sigue siendo fiel a ese ángulo, sí o no?

Quiero que determines:
1. si la página sigue dentro de su territorio
2. si sigue respondiendo la pregunta del comprador
3. si el ángulo rector sigue visible en la ejecución
4. si la tesis sigue siendo sostenida por los bloques reales
5. si algún bloque cambió de función
6. si entraron claims o promesas no autorizadas
7. si la página empezó a invadir territorios vecinos

Entrégame:
1. veredicto general
2. qué sigue fiel
3. qué se desvió
4. qué debe corregirse primero
```

---

## Frase guía

**`QA Angle` no pregunta si la página suena bien. Pregunta si la página sigue siendo la página que el brief aprobó.**
