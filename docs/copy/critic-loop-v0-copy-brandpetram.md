# Critic Loop v0 para Copy Brandpetram

Versión: 0.1  
Fecha: 2026-04-03  
Uso: sistema simple de producción y crítica iterativa de copy

---

## 1. Objetivo

Este critic loop existe para que el trabajo de copy no dependa de una sola pasada ni de una sola intuición.

La idea es simple:

- alguien propone,
- alguien lo reta,
- se ajusta,
- se vuelve a retar,
- y se cierra cuando el texto realmente ganó claridad, relevancia y fuerza.

Este loop no es todavía un skill.
Es un método de trabajo.

---

## 2. Qué necesita para funcionar

El loop necesita dos cosas antes de empezar:

1. una **constitución de copy**  
   fuente actual: `docs/copy/constitucion-v0-copy-brandpetram.md`

2. una **rúbrica de auditoría arquitectónica**  
   fuente actual: `docs/copy/rubrica-v0-auditoria-arquitectonica-grupo-nelson.md`

Sin constitución, el crítico opina.
Con constitución, el crítico juzga contra un criterio.

---

## 3. Roles del loop

### Rol 1 — Arquitecto

Su trabajo es definir:

- qué debe comunicar la sección,
- qué valor debe dominar,
- qué facts son relevantes,
- qué ángulos son legítimos,
- qué no debe repetirse ahí,
- y si el ángulo elegido es relevante para esta página, no solo poderoso en general.

No empieza escribiendo párrafos.
Empieza definiendo la tesis de la página.

El arquitecto no debe optimizar solo por fuerza.
Debe buscar ángulos que cumplan las cuatro condiciones:

- poderosos,
- relevantes,
- legítimos,
- y limpios en territorio.

Un ángulo poderoso pero desplazado es peor que un ángulo modesto pero exacto.
La prueba rápida: ¿el lector de esta página sentiría "esto es lo que esperaba encontrar aquí" o "esto es interesante pero no sé qué tiene que ver con esta página"?

### Rol 2 — Constructor

Su trabajo es convertir la arquitectura en copy:

- headlines,
- estructura,
- párrafos,
- bullets,
- CTAs,
- transiciones.

No decide solo el territorio.
Lo ejecuta.

### Rol 3 — Crítico

Su trabajo es retar el resultado usando la constitución.

No sugiere cambios cosméticos primero.
Primero detecta:

- superficialidad,
- repetición,
- promesas no ganadas,
- facts desaprovechados,
- y territorios débiles.

### Rol 4 — Editor final

Su trabajo es cerrar:

- priorizar qué sí se cambia,
- limpiar excesos,
- y asegurar que el texto final no perdió fuerza por sobreedición.

---

## 4. Dos niveles de crítica

### Nivel A — Crítica arquitectónica

Pregunta:

`¿La página está diciendo lo correcto?`

Evalúa:

- territorio,
- tesis,
- facts,
- ángulos,
- relevancia del ángulo elegido (¿pertenece aquí o está desplazado?),
- valor no explotado,
- repetición cross-page,
- promesa legítima.

### Nivel B — Crítica de ejecución

Pregunta:

`¿La página está diciendo bien lo que ya decidió decir?`

Evalúa:

- headline,
- apertura,
- densidad factual,
- scanning,
- claridad,
- fuerza verbal,
- tono,
- clichés,
- y competencia diferenciada.

El error común es querer corregir Nivel B cuando Nivel A está mal planteado.

---

## 5. Flujo base del critic loop

### Paso 1 — Definir territorio

El arquitecto responde:

- ¿qué función tiene esta página?
- ¿qué pregunta del comprador responde?
- ¿qué facts son más valiosos aquí?
- ¿qué NO debe ocupar esta página?

### Paso 2 — Formular tesis

Antes de escribir, se formula:

- tesis principal,
- 2-4 pruebas,
- ángulo dominante,
- promesa legítima,
- y verificación de relevancia: ¿este ángulo responde a lo que el lector de esta página vino a buscar, o es un ángulo poderoso que pertenece en otra página?

### Paso 3 — Construir primera versión

El constructor escribe la página o sección.

### Paso 4 — Primera crítica: arquitectura

El crítico no toca todavía microcopy.
Responde:

- ¿esta página comunica bien su territorio?
- ¿el ángulo elegido es relevante para esta página o está desplazado?
- ¿qué valor no está explotando?
- ¿qué facts están mal usados o sobreusados?
- ¿qué está repitiendo que otra página ya dijo?

### Paso 5 — Reescritura estratégica

Se corrige la estructura y la tesis de la página.

### Paso 6 — Segunda crítica: ejecución

Ahora sí se revisa:

- claridad,
- tono,
- apertura,
- ritmo,
- evidencia,
- redundancias locales,
- y fuerza verbal.

### Paso 7 — Edición final

Se limpia el texto y se decide si pasa.

---

## 6. Formato de salida del crítico

El crítico no debe responder con comentarios vagos tipo:

- "puede mejorar"
- "suena raro"
- "está repetitivo"

Debe responder con hallazgos estructurados:

### Formato por hallazgo

- `Tipo de hallazgo`
- `Severidad`
- `Qué está pasando`
- `Por qué es problema`
- `Contra qué principio de la constitución falla`
- `Qué debería pasar en cambio`

### Tipos permitidos de hallazgo

- territorio mal resuelto
- ángulo desplazado (poderoso pero irrelevante para esta página)
- valor no explotado
- repetición real
- promesa débil o inflada
- copy superficial
- valor enterrado
- tono genérico
- evidencia insuficiente

### Severidad

- `crítico`
- `importante`
- `mejora`

---

## 7. Reglas del crítico

### Regla 1

No empieces corrigiendo estilo si el territorio está mal.

### Regla 2

No confundas repetición de facts con repetición de significado.

### Regla 3

No exijas más agresividad comercial si el problema real es falta de evidencia.

### Regla 4

No pidas “más storytelling” por inercia.
Solo cuando la historia realmente transfiera valor o confianza.

### Regla 5

No critiques desde gusto personal.
Critica contra la constitución.

### Regla 6

Todo hallazgo debe poder explicarse de forma comercial, no solo estilística.

### Regla 7

No confundas poder con relevancia.

Un ángulo puede ser fascinante y aun así no pertenecer a esta página. Antes de defender un ángulo por su fuerza, pregunta: ¿el lector que llegó aquí sentiría "esto es lo que vine a buscar" o "esto es interesante pero no sé qué tiene que ver"? Si la respuesta es la segunda, el ángulo necesita moverse o reconectarse con el territorio.

---

## 8. Prompt base para el rol de crítico

```text
Actúa como crítico de copy comercial B2B de Brandpetram.

No actúes como editor de estilo genérico.
Tu trabajo es retar el copy contra la constitución de copy y contra la función comercial de la sección.

Lee primero:
- docs/copy/constitucion-v0-copy-brandpetram.md
- docs/copy/rubrica-v0-auditoria-arquitectonica-grupo-nelson.md
- el contexto del proyecto relevante
- el copy de la página o sección

Evalúa en este orden:
1. territorio de la página
2. tesis y ángulo dominante
3. relevancia del ángulo: ¿pertenece a esta página o está desplazado?
4. facts usados y facts desperdiciados
5. promesa legítima vs exageración
6. repetición con otras páginas
7. calidad de ejecución del copy

No empieces por redacción cosmética.
Empieza por descubrir si la página está comunicando el valor correcto.
Y antes de defender un ángulo por su fuerza, verifica que sea relevante aquí.

Entrega solo hallazgos de alto valor:
- tipo
- severidad
- problema
- por qué importa
- principio violado
- dirección de corrección
```

---

## 9. Prompt base para el rol de constructor

```text
Actúa como constructor de copy Brandpetram.

No inventes la arquitectura de la página.
Primero toma como input:
- territorio de la página
- pregunta del comprador
- tesis principal
- facts relevantes
- ángulo dominante
- límites de lo que NO debe repetir

Luego escribe copy que:
- parta de evidencia,
- suba de fact a significado comercial,
- mantenga promesa legítima,
- y respete la constitución de copy Brandpetram.

No escribas para sonar publicitario.
Escribe para transferir confianza, claridad y diferenciación.
```

---

## 10. Regla de layout vs copy

**Por defecto, las rondas de Angle Architect y bajada de copy NO cambian layout ni componentes.**

El flujo normal es: preservar el layout existente de la página y bajar el ángulo a copy dentro de esa estructura. Los componentes se quedan. La estructura visual se queda. Solo cambia el texto.

**Solo se permite cambiar layout o componentes si se cumplen las tres condiciones:**

1. El layout actual no puede expresar el ángulo aprobado.
2. Hay una limitación real del componente (ej: un card de 2 líneas no puede contener una narrativa de 3 párrafos).
3. Se explica al usuario antes de implementar — no después.

**Cambio de copy = normal. Cambio de layout = excepción justificada.**

**Origen de la regla:** En la ronda de LEED (2026-04-04), una confusión sobre cuál URL era la activa llevó a reemplazar el layout completo de la página en vez de actualizar el copy dentro de los componentes existentes. El layout original (HeroMarketing1 + SidebarSticky1 + CarruselLeed) podía contener perfectamente el copy del brief. No había razón para cambiarlo.

---

## 11. Cómo usarlo ya en Grupo Nelson

### Caso 1 — Diagnóstico del sitio actual

Usar:

- la rúbrica arquitectónica,
- la constitución,
- y el prompt del crítico.

Objetivo:

detectar qué páginas están flojas antes de reescribir.

### Caso 2 — Reescritura de una página

Usar:

1. arquitecto define territorio y tesis,
2. constructor escribe,
3. crítico reta,
4. editor final cierra.

### Caso 3 — Ronda rápida antes de entrega

Si no hay tiempo para el loop completo:

1. crítica arquitectónica breve,
2. corrección de lo más grave,
3. crítica de ejecución,
4. cierre.

---

## 12. Qué buscamos probar con esta v0

Si este loop funciona, debería producir:

- hallazgos más útiles que un QA superficial,
- menos reescrituras ciegas,
- mejor diferenciación entre páginas,
- y mejor aprovechamiento del valor que ya está documentado en Grupo Nelson.

Si no produce eso, la siguiente versión debe cambiar.

---

## 13. Qué viene después si esta v0 sirve

Si funciona, el siguiente paso natural sería:

- formalizar mejor la constitución,
- convertir el crítico en skill o comando,
- separar prompts por rol,
- y conectar esto con el sistema maestro de arquitectura, escritura y QA.
