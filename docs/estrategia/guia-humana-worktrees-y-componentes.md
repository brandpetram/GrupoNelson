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

### Qué significa correr la app "desde un worktree"

Cada worktree puede levantar su propio `localhost`.

Importante: ese `localhost` no sirve "solo una página". Sirve **toda la app** como existe en esa branch.

Ejemplo:

- `main` en `3002`
- `section/excelencia-operativa` en `3003`
- `section/certificaciones` en `3004`

Si abres:

- `http://localhost:3003/experiencia/excelencia-operativa`

verás la versión de `excelencia-operativa` que vive en ese worktree.

Pero si abres:

- `http://localhost:3003/experiencia/certificaciones`

verás la versión de `certificaciones` que exista en la branch de `excelencia-operativa`. Si esa branch no toca `certificaciones`, se verá igual que `main`.

Regla mental:

- un puerto por worktree
- una branch por puerto
- cada puerto sirve toda la app de esa branch

## Cómo correr `localhost` por worktree

### Recomendación actual del proyecto

Hoy, la forma más robusta es:

- cada worktree con su propio `node_modules`
- `.env.local` puede vivir como symlink hacia `main`
- cada worktree levanta `next dev` en su propio puerto

### Qué no conviene hoy

No conviene symlinkear `node_modules` completo desde `main`.

Aunque puede parecer práctico, con `pnpm` + `Next` + `Turbopack` ese camino se vuelve frágil y puede romper resolución de módulos o crear symlinks inválidos.

### Setup recomendado por worktree

Dentro de cada worktree:

1. dejar `.env.local` apuntando al de `main` si hace falta
2. instalar dependencias localmente con `pnpm install --offline`
3. correr `next dev` con puerto explícito

Ejemplo:

```bash
cd /Users/lmuzquiz/Proyectos/grupo-nelson/.worktrees/excelencia-operativa
pnpm install --offline
pnpm exec next dev -p 3003
```

```bash
cd /Users/lmuzquiz/Proyectos/grupo-nelson/.worktrees/certificaciones
pnpm install --offline
pnpm exec next dev -p 3004
```

### Mapa sugerido de puertos

- `3002` → `main`
- `3003` → `section/excelencia-operativa`
- `3004` → `section/certificaciones`

### Errores comunes

#### "Se ve igual que main"

Probablemente estás viendo el puerto del worktree equivocado.

Ejemplo:

- `3003` no significa "la página de certificaciones"
- `3003` significa "la app servida desde la branch de excelencia-operativa"

#### `Unable to acquire lock ... .next/dev/lock`

Ya hay otra instancia de `next dev` corriendo en ese worktree.

La solución es:

- volver a la terminal donde arrancó
- hacer `Ctrl+C`
- y reiniciar

#### `sh: next: command not found`

Ese worktree todavía no tiene dependencias instaladas localmente.

La solución es:

```bash
pnpm install --offline
```

### Mejora futura deseable

Hoy esto funciona, pero todavía es manual.

Una mejora razonable para el futuro sería:

- extender `workspace-nelson.sh` para dejar listo cada worktree para desarrollo local
- o crear un script tipo `dev-worktrees.sh`
- o definir un `ecosystem` de `pm2` con puertos fijos por worktree

Si eso se implementa después, la meta sería:

- crear worktree
- instalar dependencias locales si faltan
- enlazar `.env.local`
- levantar dev server con puerto conocido

Pero hoy eso todavía no es infraestructura formal del proyecto.

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

## Verdad canónica en `MAIN` vs worktrees de sección

### La intuición correcta

Los worktrees sí funcionan casi como **dimensiones paralelas**.

Eso significa:

- `main` cambia algo
- `casos-de-exito` no lo ve automáticamente
- `certificaciones` no lo ve automáticamente
- `excelencia-operativa` no lo ve automáticamente

Un worktree solo "se entera" de un cambio de `MAIN` si haces una de estas cosas:

- se lo dices por prompt
- haces `merge`, `rebase` o `cherry-pick`
- o le permites leer un archivo de `main` como referencia externa

Entonces sí: **decírselo solo a `MAIN` no hace magia.**

### Entonces, ¿para qué sirve `MAIN`?

Sirve para algo muy importante:

**`MAIN` es el lugar donde se decide y se registra la verdad canónica, antes de bajarla al frente correcto.**

El workflow sano no es:

- contárselo manualmente a todos los worktrees
- esperar que todos entiendan lo mismo
- y terminar con versiones distintas del mismo hecho

El workflow sano es:

1. `MAIN` recibe la aclaración canónica
2. `MAIN` la registra
3. `MAIN` decide qué worktrees sí están afectados
4. `MAIN` te da el mensaje exacto para el worktree afectado
5. tú se lo pegas solo a ese worktree

### La regla corta

**`MAIN` no propaga automáticamente. `MAIN` coordina la propagación correcta.**

### Ejemplo real

Supón que llega una aclaración de negocio como esta:

- comercialmente debemos hablar de `Gulfstream Aerospace`
- `Interiores Aéreos, S.A. de C.V.` es una entidad interna / razón social local
- `Desarrollo Tecnológico` y `Desarrollo Industrial Colorado` no deben aparecer en el sitio comercial

Si esa aclaración solo vive en tu cabeza y se la mandas directo a varios worktrees:

- puedes darle una versión a `casos-de-exito`
- otra versión a `liderazgo`
- otra distinta a `diferencia-nelson`

Y ahí aparece el spaghetti.

Si primero pasa por `MAIN`:

- `MAIN` la deja como verdad canónica
- `MAIN` hace un impact scan
- `MAIN` decide qué frentes sí cambian
- y solo entonces baja la instrucción correcta al worktree afectado

### Qué NO hace `MAIN`

`MAIN` no hace que el worktree cambie automáticamente.

No reemplaza:

- `merge`
- `rebase`
- `cherry-pick`
- ni el prompt que le vas a pegar después al Claude del worktree

Su función no es sincronizar código por arte de magia.

Su función es:

- centralizar la verdad
- evitar contradicciones
- decidir impacto
- y coordinar a quién sí se le informa

### Regla operativa

Si descubres una aclaración nueva de negocio, de cliente, de naming o de estrategia:

- primero llévala a `MAIN`
- deja que `MAIN` la convierta en verdad canónica
- deja que `MAIN` determine qué worktrees sí están afectados
- y después baja la instrucción solo a esos worktrees

Así evitas:

- instrucciones duplicadas
- worktrees enterándose por versiones distintas
- y correcciones en cascada sin control

## Notas canónicas por worktree

### La idea

A veces parece que hace falta un "wormhole" entre `MAIN` y los worktrees de sección.

La necesidad es real:

- `MAIN` ya sabe una verdad nueva
- un worktree sigue trabajando con la verdad vieja
- y no quieres estar copiando contexto manualmente una y otra vez

La solución sana no es un sistema complicado de chat entre worktrees.

La solución sana es algo mucho más simple:

**tener una nota canónica por worktree, escrita desde `MAIN`, que funcione como inbox de coordinación.**

### Dónde vivirían

La ubicación recomendada para eso sería:

- `docs/continuidad/worktrees/`

Ejemplos:

- `docs/continuidad/worktrees/casos-de-exito.md`
- `docs/continuidad/worktrees/certificaciones.md`
- `docs/continuidad/worktrees/excelencia-operativa.md`

### Para qué sirven

Estas notas no reemplazan:

- `merge`
- `rebase`
- `cherry-pick`
- ni los prompts que luego le vas a pegar a cada Claude

Sirven para otra cosa:

- dejar una aclaración canónica visible
- registrar qué cambió
- dejar claro qué parte del trabajo quedó inválida
- dejar claro qué no debe hacer el worktree
- y preparar la siguiente instrucción correcta

### Qué resuelven

Resuelven el problema humano de coordinación:

- `MAIN` recibe una verdad nueva
- la baja a una nota canónica del worktree afectado
- y luego tú puedes decirle al Claude de esa sección:
  - "lee esta nota como referencia externa"

Eso no hace magia.

El worktree no cambia automáticamente.

Pero sí evita:

- perder contexto
- repetir la misma explicación en prompts largos
- y terminar con varias versiones distintas de la misma aclaración

### Quién las edita

La recomendación es simple:

- `MAIN` escribe esas notas
- los worktrees no las editan

Así conservas una sola voz de coordinación y evitas que la "memoria" del worktree se vuelva bidireccional o caótica.

### Qué tendría una nota de worktree

Versión mínima útil:

- verdad canónica vigente
- qué cambió
- qué partes del brief o layout quedan invalidadas
- qué no debe hacer el worktree
- siguiente instrucción sugerida
- bloqueos o dudas pendientes

### Qué NO conviene hacer

No conviene convertir esto en:

- un chat paralelo entre worktrees
- comentarios libres escritos por cualquiera
- o una capa más de complejidad que nadie mantenga

La meta no es inventar otra herramienta.

La meta es crear un lugar simple, auditable y estable donde `MAIN` pueda dejar contexto preciso para cada frente.

### Regla práctica

Si descubres una aclaración importante y piensas:

**"esto debería quedarle anotado a este worktree"**

entonces probablemente sí conviene dejar una nota canónica de worktree en `docs/continuidad/worktrees/`, escrita desde `MAIN`.

Después, el worktree no la verá solo.

Pero tú sí podrás decirle:

- "lee esta nota de coordinación"

Y eso te evita volver a explicar todo desde cero.

## Cómo correr `codex:review` y `codex:adversarial-review`

### Regla principal

Si quieres revisar trabajo de una sección, corre el review **dentro de la ventana de ese worktree**.

No lo corras desde `MAIN` para revisar implementación de sección, porque `MAIN` es orquestador, no ejecutor.

### Qué toma como contexto

El plugin de Codex toma como base el `cwd` actual y resuelve el repo raíz de ese worktree.

Eso significa que:

- en `CERTIFICACIONES`, revisa el diff de `section/certificaciones`
- en `EXCELENCIA_OPERATIVA`, revisa el diff de `section/excelencia-operativa`

No se mezcla automáticamente con el working tree sucio de `main`.

Sí puede leer otros archivos del mismo checkout para detectar inconsistencias reales.

Ejemplo:

- si en `certificaciones` cambias el estatus de LEED
- y en otras rutas de ese mismo checkout todavía dice "en proceso"

Codex puede señalar esa contradicción. Eso no es confusión: es una revisión útil.

### Cuándo usar `codex:review`

Úsalo para una revisión normal del diff actual del worktree.

Ejemplo:

```text
/codex:review --wait
```

Sirve cuando solo quieres:

- bugs
- regresiones
- inconsistencias
- riesgos de shipping

Importante:

- `codex:review` no acepta instrucciones extra ni foco editorial personalizado
- revisa el diff actual tal como está

### Cuándo usar `codex:adversarial-review`

Úsalo cuando además de revisar el diff quieres pasarle foco específico.

Ejemplo:

```text
/codex:adversarial-review --wait Review only the current worktree diff against docs/copy/angle-briefs/certificaciones.md and section ownership rules. Treat the LEED cross-page alignment as known follow-up unless this diff makes the contradiction worse.
```

Este modo sí sirve para meter comentarios como:

- "revísalo contra el brief aprobado"
- "vigila drift de territorio"
- "trata tal follow-up como deuda conocida"
- "marca invasión cross-section"

### Recomendación por tipo de worktree

#### En un worktree de sección

Lo normal es correr:

```text
/codex:review --wait
```

o, si quieres más precisión:

```text
/codex:adversarial-review --wait Review only the current worktree diff against the approved angle brief for this section. Flag ownership violations, territory drift, and contradictions with adjacent pages.
```

#### En `MAIN_ORQUESTADOR`

Usarlo solo para:

- revisar cambios de documentación de coordinación
- revisar cambios transversales
- revisar trabajo de sistema

No como sustituto del review dentro de cada worktree de sección.

### Regla práctica

- implementación de sección → review dentro de su worktree
- documentación de coordinación → review desde `MAIN`
- cambios compartidos del sistema → review desde el frente que realmente tocó esos archivos

### Qué gana el equipo con esto

- cada review ve el diff correcto
- el feedback se mantiene cerca del ownership correcto
- se reduce ruido de cambios no relacionados
- se pueden detectar contradicciones reales sin mezclar ramas

## Orden recomendado entre brief, Codex review y QA Copy

### El orden importa

Cuando una sección ya tiene brief aprobado, el flujo recomendado no es:

1. implementar
2. correr QA
3. obedecer ciegamente al QA

El flujo correcto es:

1. brief aprobado
2. Claude implementa
3. `codex:adversarial-review` para drift, ownership y contradicciones cross-page
4. `qa-copy` para reglas, tono, repetición y vocabulario
5. Claude corrige **contra el brief aprobado**
6. revisión visual final
7. si algo del QA contradice el brief, no se corrige en automático: se escala

### Por qué este orden existe

Porque el brief aprobado define:

- territorio
- ángulo
- tesis
- límites

Y las capas de QA vienen después.

Codex y `qa-copy` son capas de tensión sobre la ejecución. No son la fuente de verdad editorial.

### Qué revisa cada capa

#### `codex:adversarial-review`

Sirve sobre todo para detectar:

- drift de territorio
- invasión cross-section
- contradicciones con páginas vecinas
- claims que empeoran una deuda conocida

#### `qa-copy`

Sirve sobre todo para detectar:

- repetición excesiva
- tono extraño
- vocabulario prohibido
- headers mecánicos
- aperturas débiles
- fricción contra reglas del sistema de copy

### Riesgo real: degradar el ángulo por obedecer QA de forma mecánica

El riesgo aparece cuando el QA empuja hacia:

- keywords más genéricas
- más términos repetidos "porque SEO"
- headers más obvios pero menos potentes
- quitar formulaciones fuertes solo porque una regla mecánica se puso nerviosa

Por eso, después de correr `qa-copy`, no conviene decir:

**"arréglalo todo"**

Conviene decir:

**"clasifica findings contra el brief aprobado y corrige solo los válidos"**

### Regla de oro

**QA no reescribe la estrategia. QA solo tensiona la ejecución.**

## Cómo accionar findings de Codex cuando usamos worktrees

### Por qué hace falta esta sección

Cuando Codex encuentra un problema, la reacción natural es:

**"perfecto, ahora hay que arreglarlo"**

Eso es correcto, pero en este workflow falta una segunda pregunta:

**"¿quién debe arreglarlo y en qué frente?"**

Con worktrees, un finding puede ser:

- un problema local del diff actual
- un problema cross-page que solo se puede mitigar localmente
- una contradicción real que pertenece a otra sección
- una deuda conocida que se debe registrar, no resolver desde el worktree actual

Si no hacemos esta distinción, pasan dos cosas malas:

- un worktree termina tocando archivos fuera de su ownership
- `MAIN` empieza a implementar cosas de sección y deja de ser orquestador

Esta sección existe para evitar justo eso.

### La regla más importante

Un finding de Codex **no decide por sí solo** dónde se implementa el fix.

Codex te dice:

- qué riesgo ve
- dónde lo ve
- y por qué le preocupa

Pero el equipo todavía tiene que decidir:

- si el fix vive dentro del mismo worktree
- si solo cabe una mitigación local
- si el problema real pertenece a otra sección
- o si primero hay que documentarlo en `MAIN`

### Los 4 destinos posibles de un finding

#### 1. Fix local en el mismo worktree

Este es el caso ideal.

Pasa cuando:

- el problema vive dentro de archivos que ya pertenecen a ese worktree
- el worktree puede corregirlo sin tocar otras secciones
- el brief y el ownership siguen alineados

Ejemplo:

- `excelencia-operativa` deja un bloque de certificaciones demasiado visible dentro de `capacidades-inhouse.tsx`
- el fix es borrar ese bloque o subordinarlo dentro de la misma sección

Eso sí se le puede pedir directamente al Claude de esa ventana.

#### 2. Mitigación local en el worktree actual

Pasa cuando Codex detecta un problema real, pero la solución completa vive fuera de ese worktree.

Entonces el worktree actual no resuelve todo el problema.
Solo hace una **mitigación local** para no empeorarlo.

Ejemplo:

- `certificaciones` afirma que LEED ya fue obtenido
- pero `/constructora/leed` todavía dice "en proceso"

El worktree de `certificaciones` no debería editar `/constructora/leed`.

Lo correcto puede ser:

- volver el lenguaje de LEED más neutral en `certificaciones`
- quitar o suavizar el link contradictorio
- evitar un claim que la ruta enlazada desmiente

Y dejar el alineamiento total como follow-up separado.

#### 3. Follow-up documentado en `MAIN_ORQUESTADOR`

Pasa cuando el finding:

- afecta tracker, brief, memorias o plan
- requiere dejar un pendiente auditable
- o necesita registrarse como deuda conocida antes de merge o producción

Aquí `MAIN` no arregla el código de la sección.

Lo que hace es:

- registrar el hallazgo
- convertirlo en follow-up claro
- dejar ownership explícito
- y mantener visible la dependencia

Ejemplo:

- "alinear estatus de LEED en `/constructora/leed` antes de que ambas páginas convivan en producción"

Eso es tarea de coordinación y continuidad.

#### 4. Escalación cross-section o de sistema

Pasa cuando el fix ya no es local.

Ejemplos:

- hay que tocar otra sección
- hay que editar `src/components/`
- hay que mover ownership
- hay que decidir entre `localizar + reescribir`, `promover + reescribir` o `parametrizar + compartir`

En ese caso no se debe improvisar el fix desde la ventana de sección.

Primero hay que:

- clasificar el tipo de cambio
- confirmar ownership
- y decidir qué frente lo va a ejecutar

### Cómo decidir rápido qué hacer con un finding

Usa estas preguntas, en orden:

1. ¿El fix completo vive dentro de archivos que pertenecen a este worktree?
   Sí → fix local en el worktree

2. ¿El problema es real, pero la solución completa vive en otra sección?
   Sí → mitigación local + follow-up en `MAIN`

3. ¿El hallazgo obliga a tocar docs de coordinación?
   Sí → `MAIN_ORQUESTADOR`

4. ¿El hallazgo obliga a tocar algo compartido o cross-section?
   Sí → detenerse, clasificar y confirmar antes de implementar

### Qué sí le pides al Claude de un worktree

Sí le puedes pedir:

- "aplica los hallazgos de Codex que vivan dentro de este worktree"
- "mitiga localmente esta contradicción sin tocar otras secciones"
- "arregla el drift contra el brief"
- "haz una segunda pasada y limpia mentions residuales"

Ejemplo útil:

```text
Aplica solo los hallazgos de Codex que puedas resolver dentro de este worktree.

No toques otras secciones.
No toques docs.
Si el hallazgo completo vive fuera de ownership, aplica solo mitigación local y repórtala.
```

### Qué no le pides al Claude de un worktree

No le pidas:

- "arregla todo lo que dijo Codex" si eso incluye otras secciones
- "alinea todo el sitio" desde una branch de sección
- "corrige briefs, tracker y código" desde la misma ventana

Eso mezcla ownership y rompe el modelo de trabajo.

### Qué sí le pides a `MAIN_ORQUESTADOR`

`MAIN` no es el lugar para arreglar la UI o el copy de una sección.

`MAIN` sirve para:

- registrar el finding como follow-up
- convertir el finding en instrucción accionable para el worktree correcto
- clasificar si el fix es local, cross-section o de sistema
- decidir si hace falta promoción, localización o parametrización

Forma correcta de pensar `MAIN`:

- no es "otro implementador"
- es dispatcher, árbitro de ownership y memoria operativa

### Ejemplo 1: finding en `CERTIFICACIONES`

Caso:

- Codex dice que LEED ya se afirma como logrado aquí
- pero el link lleva a una página que todavía dice "en proceso"

Decisión correcta:

- `CERTIFICACIONES` puede hacer mitigación local
- `MAIN` registra o mantiene visible el follow-up de alineamiento global
- `/constructora/leed` no se toca desde `section/certificaciones`

### Ejemplo 2: finding en `EXCELENCIA_OPERATIVA`

Caso:

- Codex dice que `capacidades-inhouse.tsx` sigue sonando a catálogo de Baumex y abre una mini sección de certificaciones

Decisión correcta:

- eso sí vive dentro del ownership de `excelencia-operativa`
- entonces el fix se implementa ahí mismo
- `MAIN` no necesita intervenir salvo para coordinar o documentar si deja una deuda posterior

### Regla de oro

Si un finding cabe entero dentro del ownership del worktree, arréglalo ahí.

Si no cabe entero, no lo fuerces.

Haz una de estas dos cosas:

- mitigación local
- follow-up coordinado desde `MAIN`

### Objetivo final de este criterio

No estamos complicando el workflow por gusto.

Estamos escribiendo esto para proteger tres cosas al mismo tiempo:

- claridad de ownership
- auditabilidad del proceso
- calidad real del sitio sin que los worktrees se contaminen entre sí

Un finding bien manejado no solo mejora el código.
También mejora la disciplina del sistema de trabajo.

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
