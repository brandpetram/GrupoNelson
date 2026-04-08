# Plan para tunear Narrative Copywriter

Fecha: 2026-04-08
Estado: implementado

---

## Contexto

### Qué es Narrative Copywriter y por qué existe

`Narrative Copywriter` convierte un angle brief aprobado en una página que funciona al leerse.

No descubre el territorio. No descubre el ángulo. No descubre qué facts valen. Todo eso ya llegó resuelto en el angle brief. Lo que hace es:

- tomar el brief como contrato editorial
- convertir la perspectiva, el ángulo y la tesis en narrativa real
- decidir cuánto peso darle a cada bloque
- asegurar que cada caso tenga suficiente arco para sentirse caso real
- distribuir densidad, ritmo y respiración entre bloques
- decidir qué merece vivir en el heading, qué en el eyebrow, qué en el párrafo
- escribir transiciones que funcionen
- mantener la tensión comercial sin caer en frases huecas

Su output es **copy implementado en archivos de sección** — no un documento teórico.

La pregunta que resuelve es: `¿Cómo se escribe esta página para que el ángulo sí se sienta vivo en la lectura real?`

### Qué problema resuelve exactamente

Una página puede respetar el ángulo, no inventar facts, seguir el brief y mantenerse en su territorio — y aun así estar mal escrita. Eso pasa cuando:

- un caso dominante se come toda la página
- otro caso queda famélico
- el cierre entra a presión
- las transiciones se sienten torpes
- la densidad está mal repartida
- los facts están ahí pero no están convertidos en secuencia persuasiva
- la prueba más fuerte quedó escondida en el eyebrow mientras el heading dice una abstracción

Ese es el hueco que Narrative Copywriter resuelve: la distancia entre un brief bien pensado y una página que sí funciona al leerse.

### Dónde estamos

Context Curator, Value Finder y Angle Architect ya fueron tuneados. Narrative Copywriter es el último rol de producción antes de que entren los reviewers y el QA. Es el rol que toca archivos reales en worktrees reales.

---

## 1. Archivos revisados para este plan

- `docs/copy/roles/narrative-copywriter/narrative-copywriter.md` — definición actual del rol
- `docs/copy/constitucion-v0-copy-brandpetram.md` — principios de copy
- `docs/copy/guia-fuentes-del-negocio-y-limites-de-lectura.md` — criterio de fuentes
- `docs/copy/aclaraciones-canonicas.md` — canon operativo
- `docs/copy/roles/angle-architect/angle-architect.md` — rol del que depende directamente
- `docs/copy/workflow-roles-para-crear-copy.md` — orden de roles en el sistema

---

## 2. Misión y razón de ser

Narrative Copywriter existe para convertir un ángulo bien pensado en una página que sí funcione como página real.

No es un "mejorador de frases". No es un segundo Angle Architect. Es el rol que baja la arquitectura editorial a copy vivo, balanceado y convincente.

El contrato es claro:

- **Angle Architect responde:** qué debe demostrar la página
- **Narrative Copywriter responde:** cómo debe estar escrita para que sí lo demuestre

---

## 3. Qué sí hace y qué no hace

### SÍ hace

- Toma el angle brief como contrato editorial
- Convierte el ángulo en narrativa ejecutable
- Decide cuánto peso narrativo merece cada bloque
- Distribuye densidad, ritmo y respiración
- Decide qué merece vivir en heading, eyebrow, párrafo o bullets
- Escribe transiciones que tengan función narrativa
- Comunica valor concreto (no describe correctamente — impresiona con prueba)
- Detecta si un bloque está sobre-escrito o sub-escrito
- Preserva el orden de prueba definido por el brief

### NO hace

- No cambia el territorio de la página
- No inventa un ángulo nuevo
- No mete facts no confirmados ni no canónicos
- No resuelve con más texto un problema de layout
- No resuelve con layout un problema de narrativa
- No vuelve simétricos todos los casos por comodidad
- No es un QA de estilo ni un pulidor de headlines

---

## 4. Contrato de lectura propuesto

### Principio

Narrative Copywriter no necesita independencia de juicio sobre el negocio como CC o VF. No necesita formular perspectiva como AA. Necesita entender perfectamente **qué decidió el brief** y **qué datos están autorizados** — y después ejecutar.

### Orden de lectura obligatorio (en cada task)

1. `docs/copy/constitucion-v0-copy-brandpetram.md` — principios de copy
2. `docs/copy/aclaraciones-canonicas.md` — canon operativo (facts autorizados, naming, cifras)
3. `docs/copy/roles/narrative-copywriter/narrative-copywriter.md` — definición del rol
4. El angle brief vigente de la sección (en `docs/copy/roles/angle-architect/`)
5. La task específica de la sección
6. La implementación actual de la página (los archivos .tsx del worktree)

### NO debe leer por defecto

- Reportes de Context Curator — el brief ya filtró qué facts importan
- Reportes de Value Finder — el brief ya decidió qué valor usar y con qué fuerza
- Fuente primaria del negocio — no es su trabajo formar juicio sobre el negocio
- Memorias de trabajo, workflows, planes operativos
- Angle briefs de OTRAS secciones (salvo que la task lo indique para verificar fronteras)

### Cuándo SÍ puede consultar VF-report

Solo si el angle brief menciona un fact con poca explicación y Narrative Copywriter necesita contexto para decidir cómo comunicarlo con fuerza. En ese caso, consulta el VF-report como referencia, no como input primario. Declara en su output qué consultó y por qué.

### Cuándo SÍ puede consultar fuente primaria

Solo si necesita el tono, la voz o un detalle narrativo que el brief no detalla. Ejemplo: el brief dice "Gulfstream 35 años, asignación directa" pero NC necesita saber cómo lo dijo el dueño para decidir el tono del bloque. En ese caso, puede consultar la fuente primaria específica. Pero no relee todo el corpus.

### Jerarquía de autoridad

1. **Aclaraciones canónicas manda.** Si el brief usa un dato que aclaraciones canónicas ya corrigió, NC obedece el canon, no el brief. Si detecta esa discrepancia, la señala.
2. **El angle brief manda sobre todo lo demás** (perspectiva, ángulo, tesis, qué facts usar, qué sale).
3. **NC no inventa canon nuevo.** Si necesita un dato que no está resuelto, lo marca como pendiente.

---

## 5. Output real

### Output principal: copy implementado

El output real de Narrative Copywriter es **copy implementado en los archivos de la sección dentro del worktree**. No es un documento teórico — son cambios en archivos .tsx reales.

### Output secundario: diagnóstico previo (cuando aplica)

Antes de implementar, NC puede producir un diagnóstico que dice:

- qué está sobre-escrito
- qué está sub-escrito
- qué transiciones fallan
- cómo debe rebalancearse la página
- qué archivos necesitan cambios

Este diagnóstico va en `docs/copy/roles/narrative-copywriter/` con la nomenclatura:

`narrative-copywriter-diagnostico-{seccion}-v{version}.md`

### Cuándo se necesita diagnóstico vs implementación directa

- **Diagnóstico primero** cuando la página ya existe y tiene copy implementado que necesita corrección o rebalanceo significativo
- **Implementación directa** cuando la página está vacía o tiene copy placeholder y el brief ya está aprobado

### Regla de versión

La versión del diagnóstico coincide con la versión de la task.

### Lo que NO es output

- Un "mejoraría esto" vago
- Un documento que describe qué haría sin hacerlo
- Un reporte que se queda en teoría editorial

NC debe dejar o diagnóstico accionable, o copy ya implementado.

---

## 6. Tasks por sección

Sí necesita tasks por sección, análogas a las de Angle Architect.

### Nomenclatura

`task-{seccion}-v0.md`

### Contenido de cada task

- Orden de lectura obligatorio (los 6 documentos)
- Sección asignada
- Ruta del angle brief vigente de esa sección
- Rutas de los archivos .tsx de la página actual
- Modo: diagnóstico, implementación, o diagnóstico + implementación
- Si hay copy existente: qué se espera (corrección, rebalanceo, reescritura completa)
- Si no hay copy: indicar que es página nueva
- Recordatorio de nomenclatura del output

### Lista de tasks

- `task-casos-de-exito-v0.md`
- `task-certificaciones-v0.md`
- `task-excelencia-operativa-v0.md`
- `task-leed-v0.md`
- `task-proyectos-especializados-v0.md`
- `task-diferencia-nelson-v0.md`
- `task-liderazgo-v0.md`

### Orden de ejecución

Se decide en la fase de ejecución, no en el tuning del rol. Depende de en qué orden se produzcan los angle briefs de Angle Architect.

---

## 7. Contradicciones, ambigüedades y omisiones en el doc actual

### Nomenclatura del output contradice la naturaleza del rol

El doc actual dice `narrative-copywriter-report-v{version}.md`. Pero el output principal de NC no es un "report" — es copy implementado o un diagnóstico previo. La nomenclatura debe reflejar eso.

**Corrección:** cambiar a `narrative-copywriter-diagnostico-{seccion}-v{version}.md` para diagnósticos. El copy implementado no tiene nomenclatura propia porque va directo a los archivos .tsx.

### "Inputs mínimos" es genérico

Línea 488: dice "brief aprobado, nota canónica, implementación actual, aclaraciones canónicas, observaciones de AA". Esto debe reescribirse como contrato de lectura explícito con orden, análogo a CC, VF y AA.

### No tiene sección de alcance

CC, VF y AA ya tienen una sección de "Alcance" que dice si operan por negocio o por sección. NC opera por sección pero no lo dice explícitamente.

### No tiene sección de "Qué debe leer y qué no"

Los otros 3 roles ya tienen esta sección con principio de independencia, capas de lectura y lista de NO. NC necesita la suya propia — con un principio diferente (no necesita independencia de juicio sobre el negocio, necesita fidelidad al brief + canon).

### Formato de salida tiene rutas obsoletas

Líneas 544-573 hablan de 3 formatos (diagnóstico inline, plan de reescritura, copy implementado) pero no mencionan dónde va el diagnóstico ni con qué nomenclatura. Ahora que la carpeta `docs/copy/roles/narrative-copywriter/` existe, debe quedar claro.

### Relación con Angle Architect tiene ruta rota

No referencia la ruta actual de angle-architect. Debe apuntar a `docs/copy/roles/angle-architect/angle-architect.md`.

### La sección de "valor concreto" es muy extensa

Líneas 189-468 tienen una guía completa de cómo comunicar valor, con ejemplos, tests, heurísticas y listas. Esto es valioso pero ocupa más de la mitad del documento y podría confundirse con la función de Value Finder. Propuesta: conservar la regla central y las preguntas de control, pero mover los ejemplos extensos y la lista de "cosas que impresionan" a un apéndice o referencia separada.

**Decisión para el usuario:** ¿Reducimos esa sección en el doc del rol, o la dejamos como está porque es útil como guía operativa para el agente que ejecuta?

### No menciona la guía de fuentes

Los otros 3 roles leen `guia-fuentes-del-negocio-y-limites-de-lectura.md`. NC probablemente no necesita leerla (no lee fuente primaria por defecto), pero debería quedar explícito que NO la lee y por qué.

### No tiene regla de versión task=output

Los otros 3 roles tienen esta regla. NC necesita la suya.

---

## 8. Decisiones pendientes antes de implementar

1. **¿NC lee la guía de fuentes?** Propuesta: no, porque no lee fuente primaria por defecto. Pero si una task le pide consultar fuente primaria para tono/voz, debería saber que existe.

2. **¿La sección extensa de "valor concreto" se reduce o se deja?** Es útil como guía operativa pero ocupa mucho espacio en el doc del rol. Opciones: dejar como está, mover a apéndice, o condensar.

3. **¿NC necesita leer la constitución?** Propuesta: sí, porque define principios de copy que NC debe seguir al escribir (axiomas, reglas de escritura, qué es buen/mal copy).

4. **¿Qué pasa cuando NC detecta que el brief tiene un dato que contradice aclaraciones canónicas?** Propuesta: NC obedece el canon, no el brief. Señala la discrepancia pero no la resuelve. MAIN decide si el brief necesita actualización.

---

## Secuencia de implementación del tuning

1. Resolver las decisiones pendientes con el usuario
2. Reescribir `narrative-copywriter.md`: alcance, misión, contrato de lectura, qué debe/no debe leer, output, nomenclatura, relaciones actualizadas
3. Limpiar secciones obsoletas, rutas rotas y contradicciones
4. Crear las 7 tasks por sección (después de que existan los angle briefs de AA)
5. Fase de ejecución (fuera del alcance de este plan de tuning)
