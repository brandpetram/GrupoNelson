# Cómo Evitar Que El Copy Siga Saliendo Mal

## Para qué existe este documento

Este documento existe para explicar, en lenguaje humano, por qué a veces el copy termina sonando raro, desbalanceado o menos convincente de lo que debería, incluso cuando:

- ya había un brief aprobado,
- el copy parecía bien encaminado,
- y el equipo estaba trabajando con cuidado.

El objetivo no es solo "arreglar esta página".

El objetivo es entender **qué parte del sistema falla** para que podamos dejar de repetir el mismo patrón.

---

## La confusión común

Cuando una página sale rara, la reacción natural es pensar:

- "faltó mejor copy"
- "faltó mejor QA"
- "Claude no escribió bien"
- "hay que corregir frases"

Eso a veces es cierto, pero muchas veces **el problema real no está en la frase, sino en la falta de un proceso claro que asegure la calidad antes de llegar a la frase**.

En copy comercial complejo, hay al menos 4 niveles distintos:

1. verdad canónica del negocio
2. ángulo de la página
3. arquitectura narrativa interna de la página
4. ejecución línea por línea

Si uno piensa que todo es "copy", termina tratando de arreglar en nivel 4 algo que realmente se rompió en nivel 1, 2 o 3.

---

## El caso real que nos enseñó esto

En `/experiencia/casos-de-exito` pasó algo muy útil para aprender:

- el ángulo general de la página seguía siendo bueno,
- pero cambió una verdad canónica importante,
- y ese cambio destruyó la independencia de una de las pruebas,
- sin que el sistema obligara a re-auditar la arquitectura narrativa antes de seguir construyendo.

Resultado:

- Gulfstream se volvió demasiado dominante,
- Honeywell quedó bien pero más delgado,
- DHL quedó metido a presión,
- y algunas transiciones empezaron a sonar raras.

Ejemplo del síntoma:

- se venía hablando de Honeywell Aerospace, ISN, filtro de selección y colaboración técnica,
- y luego aparecía algo como `No es solo aeroespacial. DHL...`

Eso no se siente mal porque "DHL esté mal".

Se siente mal porque **la función narrativa de DHL ya no estaba bien resuelta**.

O sea: el síntoma visible era una frase rara.
La enfermedad real era otra:

**la página perdió balance interno de prueba.**

---

## El problema no fue solo "se perdió el ángulo"

Decir "se perdió el ángulo" es parcialmente cierto, pero no es suficientemente preciso.

Lo que realmente pasó fue esto:

1. El ángulo general seguía siendo válido.
2. Cambió una verdad canónica de negocio.
3. Una prueba dejó de ser independiente.
4. La página siguió construyéndose como si nada hubiera cambiado.

Eso genera un problema muy específico:

**la arquitectura narrativa interna deja de corresponder a la realidad.**

Y ahí ya no basta con "escribir mejor".

---

## La diferencia entre ángulo y arquitectura narrativa

### Ángulo

El ángulo responde:

**¿Qué está demostrando esta página y desde qué excusa legítima?**

Ejemplo:

- "La exigencia del cliente valida a Nelson"

Eso puede seguir siendo correcto incluso si cambian algunos facts.

### Arquitectura narrativa interna

La arquitectura narrativa responde:

**¿Qué prueba carga cada bloque, cuánto peso tiene y por qué existe?**

Ejemplo:

- Gulfstream = permanencia + escala + confianza extrema
- Honeywell = validación por estándares
- DHL = diversidad de industria / validación fuera de aeroespacial

Si eso no está definido con claridad, la página puede mantener "buen ángulo general" y aún así salir mal.

---

## El error sistémico

El error sistémico es este:

**seguir construyendo layout o copy cuando la distribución de prueba entre bloques ya cambió y nadie la re-auditó.**

Eso produce páginas que:

- tienen un caso gigante,
- otro caso medio vivo,
- y un tercero o cierre que ya no sabe qué demostrar.

En ese momento aparecen frases raras, cierres flojos, bloques que sobran o stats que ya no calzan.

Y luego el equipo intenta arreglarlo con:

- QA,
- microcopy,
- mejores headlines,
- o una reescritura local.

Pero eso no arregla la causa raíz.

---

## Qué habría evitado este problema

No más QA.
No más "pulido".
No un prompt más agresivo.

Lo que lo habría evitado es un paso obligatorio:

## Re-auditoría cuando cambia la verdad canónica

Cada vez que cambie una verdad canónica importante, el sistema debe disparar una re-auditoría antes de seguir construyendo.

### ¿Qué cuenta como cambio de verdad canónica?

Ejemplos:

- cambia el nombre comercial correcto de un cliente
- una razón social interna no debe mostrarse públicamente
- dos entidades que parecían separadas en realidad son la misma
- una estadística deja de ser defendible
- una prueba deja de ser independiente
- un caso ya no puede vivir como caso separado
- una ubicación o naming interno no debe aparecer en el sitio

Si pasa cualquiera de esas cosas, **ya no basta con "ajustar copy"**.

Hay que revisar la arquitectura narrativa de la página.

---

## Qué debería pasar en ese momento

El flujo correcto sería:

1. `MAIN` recibe la aclaración canónica
2. `MAIN` la registra
3. `MAIN` hace un impact scan
4. se dispara `Angle Architect re-audit`
5. se redefine el mapa de prueba de la página
6. solo después se reescribe o se reconstruye

El error es saltarse el paso 4.

---

## Qué debe producir una re-auditoría

No basta con que diga "sí, el ángulo sigue bien".

Tiene que responder cosas más concretas:

1. ¿Sigue habiendo el mismo número de pruebas independientes?
2. ¿Qué prueba única carga cada bloque?
3. ¿Qué bloque absorbió demasiado peso?
4. ¿Qué bloque quedó sin función clara?
5. ¿Algún caso quedó demasiado corto para sentirse caso real?
6. ¿El cierre sigue demostrando algo o ya solo rellena?
7. ¿La jerarquía entre bloques sigue siendo correcta?

Sin esas respuestas, la implementación queda ciega.

---

## La pregunta más importante de todas

Cada bloque de una página debe poder responder esto:

**¿Qué prueba única cargo yo que no esté cargando otro bloque?**

Si un bloque no puede responder eso, probablemente:

- sobra,
- está mal ubicado,
- está demasiado corto,
- o está repitiendo algo que ya demostró otro caso.

Esta pregunta sola ya evitaría muchísimos problemas.

---

## Lo que sí debe hacer Angle Architect

El rol de `Angle Architect` no debería limitarse a "escoger ángulo" al inicio.

También debería existir un modo:

**`Angle Architect re-audit`**

Su trabajo sería revisar si la página sigue bien después de que cambió una verdad canónica.

No para escribir frases.
No para hacer polish.

Sí para decidir:

- si el ángulo sigue vivo,
- si la arquitectura narrativa sigue sana,
- y cómo debe redistribuirse el peso entre bloques.

---

## Lo que NO debe hacer el builder

El implementador visual o de sección no debería improvisar estas decisiones:

- cuánto debe pesar cada caso
- si un caso desaparece
- si un bloque de cierre necesita más narrativa
- si un dato deja de ser una stat y pasa a ser un párrafo

Esas no son decisiones de layout.
Son decisiones de arquitectura narrativa.

Si el builder las improvisa, el sitio se vuelve inestable.

---

## El papel correcto de cada capa

### `MAIN`

- centraliza verdad canónica
- hace impact scan
- decide qué frentes se afectan

### `Angle Architect`

- define ángulo
- re-audita la arquitectura narrativa cuando cambia la verdad

### `Visual Matchmaker`

- decide qué arquitectura visual le calza mejor al contenido aprobado

### `Visual Builder`

- construye el layout ya decidido

### `qa-copy`

- detecta repetición, tono raro, vocabulario, reglas de ejecución

### `codex:adversarial-review`

- detecta drift, ownership, contradicciones cross-page y riesgos de shipping

La jerarquía correcta es:

- verdad canónica
- arquitectura narrativa
- arquitectura visual
- ejecución
- QA

No al revés.

---

## El error más común: intentar que QA arregle estrategia

Cuando el sistema no está bien ordenado, aparece una tentación:

- que `qa-copy` arregle lo que en realidad es arquitectura narrativa
- que el builder arregle lo que en realidad es estrategia
- que una reescritura local arregle lo que en realidad es una verdad canónica mal entendida

Eso casi siempre degrada la página.

Por eso la regla sigue siendo:

**QA no reescribe la estrategia. QA solo tensiona la ejecución.**

Y la versión extendida de esa regla sería:

**El builder no rediseña la distribución de prueba. El builder ejecuta una distribución de prueba ya resuelta.**

---

## Cómo se evita que esto siga pasando

No existe una garantía mágica de "buen copy".

Pero sí podemos reducir muchísimo los errores si hacemos obligatorias estas 3 cosas:

### 1. Trigger obligatorio de re-auditoría

Si cambia una verdad canónica importante, no se sigue construyendo como si nada.

Se dispara re-auditoría.

### 2. Mapa de prueba por página

Cada página importante debería tener explícito:

- bloque
- qué prueba carga
- por qué existe
- qué no debe intentar probar
- peso relativo
- desarrollo narrativo mínimo

### 3. Prohibición de improvisar arquitectura desde layout

Si el builder siente que "algo ya no cuadra", no debe resolverlo solo con UI.

Debe escalarlo.

---

## Señales de alerta

Si ves cualquiera de estas cosas, probablemente el problema ya no es solo copy:

- un caso se comió a todos los demás
- una transición suena brusca o sin puente lógico
- un cierre ya no demuestra nada claro
- una tercera prueba se siente forzada
- un bloque existe "porque había que tener tres"
- una página ya no sabe si está contando casos, stats o reputación

Eso es señal para parar y re-auditar.

---

## Regla final

La regla práctica de este documento es:

**No se puede construir bien una página si sigue indefinida la distribución de prueba entre sus bloques.**

Y la consecuencia operativa es:

**cuando cambia la verdad canónica, primero se re-audita la arquitectura narrativa; después se vuelve a escribir o a construir.**

Si respetamos ese orden, el copy deja de salir raro "misteriosamente".

Empieza a salir bien porque el sistema ya no le está pidiendo a la capa equivocada que resuelva el problema equivocado.
