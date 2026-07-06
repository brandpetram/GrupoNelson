# Plan para resolver los comentarios de Vercel de Erick (ronda jun-2026)

> Fecha: 2026-07-06
> Estado: **convergido tras 3 rondas de review de Codex** (13/13 hallazgos atendidos; triajes en `plan-para-resolver-comentarios-vercel-de-erick.reviews/plan-triaje-0{1,2,3}-claude.md`; r03 sin bloqueos → listo para ejecutar)
> Rama de trabajo: `dev` (todos los cambios van ahí)
> Autor del feedback: Erick Martínez (`emartinez-7423`), vía sistema de comentarios del toolbar de Vercel

## 1. Qué estamos queriendo hacer

Erick dejó comentarios de revisión sobre el sitio de Grupo Nelson usando el toolbar de comentarios de Vercel. Queremos **procesar todos los comentarios unresolved**, aplicando los cambios en `dev`, siguiendo el proceso ya establecido para "mejoras de Erick":

1. Cada cambio se aplica en **ES y EN**. Regla explícita de Luis (2026-07-06): el sitio EN es ~una traducción del ES, así que **el 100% de lo que Erick pide en español se aplica también en inglés por default** — tanto los triviales ("30" → "+30") como el copy nuevo (traducido a partir de la versión corregida). **Única excepción**: si un cambio no tendría sentido para un lector americano/en inglés, se reporta a Luis para preguntar qué hacer en EN (no se bloquea el cambio ES). Los pares de rutas ES/EN se toman de `src/glossary/route-map.ts`, que es la fuente de verdad.
2. La ortografía del copy de Erick **se corrige** (acentos, typos, gramática) respetando su contenido — confirmado por Luis; mismo criterio que el sweep de anglicismos.
3. Cada cambio se registra en `docs/continuidad/registro-de-cambios-mejoras-sitio.md` (ese registro es la base del correo de cierre al cliente).
4. Peticiones que dañen el sitio o cambien la arquitectura **se escalan a Luis** antes de ejecutarse (regla existente del proyecto).
5. Nada se commitea sin permiso explícito de Luis; commits por lote para que el diff sea revisable con Codex/Gemini.

## 2. Fuente de datos y universo de trabajo

Los comentarios se obtuvieron directamente del API de Vercel (MCP `list_toolbar_threads`, filtro `status: unresolved`, proyecto `grupo-nelson`). Total: **69 threads unresolved**, que se dividen en dos universos con tratamiento distinto:

### 2a. Universo activo: 54 threads en rama `dev` (2026-05-08 → 2026-06-26)

Son la ronda actual de feedback de Erick. **Se procesan todos** (aplicar, escalar, o devolver pregunta a Erick).

### 2b. Universo viejo: 15 threads en `main` y worktrees (2026-03-31 → 2026-04-17)

Son de la época de los lotes 1–7 de mejoras. Criterio de Luis (regla dura):

> **NO hacerlos**, a menos que sean **TRIVIALES y SUPER CLARO que son mejoras**. Es posible que algunos hayan sido deliberadamente no-resueltos por Luis; también es posible que se hayan pasado.

Cada uno de los 15 lleva recomendación individual en la sección 7. Los que no cumplan el criterio quedan listados para que Luis decida (o se ignoran).

### Limitación conocida del API

El payload del API **no incluye el "Selected Text"** que sí aparece al copiar un comentario manualmente desde el toolbar. Sí incluye: texto del comentario, página, selector CSS, y árbol de componentes React (con `data-component-file` cuando el elemento cae dentro de un componente instrumentado, ej. `src/components/brandpetram/eta.tsx`). Mitigación: anclar cada cambio cruzando selector + componente + código actual; cuando la ambigüedad persista, preguntar a Luis (que puede ver el comentario en el toolbar con su texto seleccionado).

## 3. Clasificación de los 54 activos

Categorías:

- **A — Copy trivial**: cambio puntual de texto (una palabra/cifra/frase corta).
- **B — Copy nuevo**: Erick escribió un párrafo/frase de reemplazo; se aplica con ortografía corregida.
- **C — Eliminación**: quitar texto/elemento señalado.
- **D — Imagen**: cambiar o editar fotografía (ver sección 5, flujo Replicate).
- **E — Layout/estructura**: espaciados, alineaciones, orden de secciones, botones nuevos. **Se escalan a Luis** antes de ejecutar (varios cambian estructura).
- **F — Pregunta/duda**: requieren interpretación, respuesta a Erick, o inspección para saber qué señalan.

### Inventario completo (54)

Columnas: ID (para rastrear y marcar resolved al final), fecha, categoría, comentario (resumen), acción propuesta.

#### `/es` — 1 comentario

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| twqOZDFiJ7mQ | 06-09 | A | "Corregir El titulo en Constructora de Casa por Nuestra Constructora" | Rename ronda 2 — **aplicar la decisión cerrada de la sección 6.1**: global, por ocurrencia, sin find/replace. |

#### `/es/constructora/build-to-suit` — 5 comentarios

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| OzWJmDqBkzqg | 06-18 | A | "550k ft2" (hero-video-cover) | Cambiar la cifra del hero a "550k ft²". Verificar ancla en código. |
| k6N2_Uh2nbFq | 06-18 | A | "550k ft2" (beta.tsx) | Ídem en sección beta. |
| bC0yFc72MYJ2 | 06-18 | A/F | "Construidas" (gamma.tsx) | Probable corrección de concordancia de género. Cruzar con código para ubicar la palabra exacta. |
| B-TOeN8ydaqv | 06-18 | B | "Tu Nave Industrial a la medida de tu operacion." (delta.tsx) | Reemplazar el headline de delta por esta frase (corregida: "a la medida de tu operación"). |
| pKhiOx_to4-Q | 06-18 | E | "Revisar tamaño de letra extremadamente chica" (beta.tsx) | Subir tamaño de fuente del texto señalado. Proponer valor a Luis antes de aplicar. |

#### `/es/constructora/diseno-e-ingenieria` — 18 comentarios

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| XB4pV6h1Up1E | 06-17 | C | "eliminar 4" (seleccionó un "4") | Quitar el "4" suelto. |
| m9ayfF7_v1u8 | 06-17 | C | "eliminar 4" | Duplicado del anterior (mismo elemento). Un solo fix cubre ambos threads. |
| uKOq4MZEoeec | 06-17 | C | "eliminar" | Ubicar por selector qué se elimina. |
| lhEF5NNOmIiq | 06-17 | B | "Donde la ingenieria convencional se detiene, nosotros comenzamos." | Reemplazo de frase (corregida: "ingeniería"). |
| 49zm_eqvliiL | 06-17 | B | "Creamos la ingenieria que MExicali no tenia: sistemas antisismicos unicos, puentes sin columnas sobre drenes federales y tunes de viento con potencia de 3000HP…" | Reemplazo de párrafo. Corregir: "ingeniería", "Mexicali", "tenía", "antisísmicos únicos", "túneles de viento". ⚠ "tunes" → asumo "túneles"; confirmar si hay duda. |
| boJlvMq8zbIU | 06-17 | A | "550k ft2" | Cambiar cifra a "550k ft²". |
| G2h-YLiYfXtI | 06-17 | C | "eliminar esta texto ya que no tiene el contexto de lo que menciona. Lleva a otra pagina de construccion NO como se realizo Gulfstream." | Eliminar el texto/link señalado (apunta a página incorrecta). |
| GybYwpb-8Mf5 | 06-17 | C/F | "Eliminar texto de relleno, repetido mas de 3 veces.... o es intencional para fines del sitio??" | Hay texto de relleno repetido. Ubicarlo; si es placeholder olvidado, eliminar/sustituir; si es patrón de diseño, responder a Erick. |
| PUPSXjLyfRM1 | 06-17 | B | "Garantizamos el cumplimiento normativo desde el proyecto ejecutivo. Diseñar con las certificaciones en mente desde el primer dia, elimina retrabajos, optimiza la inversion y asegura la reduccion de la…" | Reemplazo de párrafo (recuperar texto completo del thread al ejecutar; el resumen está truncado). |
| 1R3mTME4Nr4i | 06-17 | A | "y sistema contraincendio." | Ajuste puntual de frase (ubicar por selector). |
| IYQ6dCXfxYnm | 06-17 | A | "certificada con" | Ajuste puntual (probable concordancia). Ubicar por selector. |
| N0LitTJix6mw | 06-17 | D | "cambiar foto desenfocada..." | Sustituir por otra foto nítida del inventario en `/public`. Proponer candidata a Luis. |
| 8W67Ew7WDWQO | 06-18 | B | "Si tu corporativo realiza auditorias de sguridad antes de autorizar a un constructor, te respaldamos con nuestros resultados: +1M horas-hombre sin fatalidades. +400 dias sin accidentes." | Reemplazo de bloque (corregido: "auditorías de seguridad", "días"). Nota: Erick usa "fatalidades" aquí — ver conflicto con thread viejo en sección 7. |
| 2CrTyrWtiX7T | 06-18 | A | "+400" | Cambiar cifra a "+400" (consistente con el bloque anterior). |
| jZdiNQpdeiiB | 06-18 | F | "Y esto ????" | Inspeccionar qué señala el selector (probable elemento roto o placeholder). Resolver o escalar. |
| PmZ3jBaCBFcB | 06-18 | E | "Deberia de haber un boton dirijido al formulario: Habla con un experto." | Agregar CTA "Habla con un experto" → formulario de contacto. Usar el patrón de botón existente del sitio. Confirmar ubicación con Luis. |
| trTRL9gGNspr | 06-18 | A/F | "español" | Algo quedó en inglés en la página ES. Ubicar por selector y traducir. |
| GKE6_bY7gR7o | 06-18 | E/F | "Deberia ver un preview del video.." | **No asumir `footer-1`** (el selector puede caer ahí por layout, no por causalidad): localizar el `<video>` real y su `poster`/fallback por DOM y asset. Proponer fix a Luis. |

#### `/es/constructora/llave-en-mano` — 17 comentarios

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| xtsKBg2GYOmB | 06-19 | A | "+30" (seleccionó "30") | "30 corporaciones internacionales" → "+30 corporaciones internacionales". |
| ITBXfPTEi1ue | 06-26 | A | "El sistema contraincendio" (iota.tsx) | "El contraincendio central ahorra 60%…" → "El sistema contraincendio ahorra 60%…" (confirmado por screenshot de Luis). |
| PjQ9NHjuIQxC | 06-26 | A | "Nuestra Constructora en" (kappa.tsx) | Parte del rename ronda 2 (ligado a twqOZDFiJ7mQ) — **aplicar la decisión cerrada de la sección 6.1**. |
| ek1qw8ORq8q7 | 06-26 | A | "Consulta nuestro inventario....." | "Consulta el inventario disponible en Mexicali" → "Consulta nuestro inventario" (selected text confirmado por screenshot). |
| Bte6b9EGlKrT | 06-26 | B | Copy nuevo de El Vigía / Nelson II ("Parque Industrial El Vigia es el parque pionero… En contra parte Parque Industrial Nelson II… bajo el modelos BTS.") (eta.tsx) | Reemplazar la descripción de los parques. Corregir: "El Vigía", "más competitivos", "incubar" (por "encubar"), "estratégicos", "En contraparte", "Está diseñado", "mayoría", "el modelo BTS". |
| dsIz5Nh5F9Qd | 06-26 | B | "Con el respaldo de +30 clientes operando con nosotros estamos listos para arrancar tu proximo proyecto. Te ofrecemos naves de inventario Llave en mano, listas para habitar o desarrollos A la medida en…" | Reemplazo de párrafo (recuperar texto completo; corregir "próximo", "a la medida", "reservas"). |
| iKVFO4oP_qXh | 06-26 | C | "Eliminar esta parte." (teta.tsx) | Eliminar "El 80% de los clientes de Grupo Nelson son recurrentes." |
| lRHBxZctNZaR | 06-26 | C | "eliminar" | Eliminar "Naves desde 5,000 ft² hasta infraestructura Fortune 500" (selected text confirmado por screenshot). |
| cadwjnX2_vFf | 06-26 | D | "Cambiar fotografia por alguna nave industrial." (eta.tsx) | Sustituir por foto de nave industrial del inventario. Proponer candidata. |
| _0qQIiwk6x81 | 06-26 | D | "cambiar de foto" (kappa.tsx) | Sustituir foto. Proponer candidata. |
| vuD8ME1DmUkl | 06-26 | D✨ | "Limpiar foto (persona caminando)" (teta.tsx) | Edición con Replicate: eliminar la persona, todo lo demás igual. |
| v-FV1OGEDTnQ | 06-26 | D✨ | "Se podra limpiar esta foto, eliminando o difulminando la empresa de CASTORES que aparece al fondo." | Edición con Replicate: quitar/difuminar el logo de CASTORES del fondo. |
| hjv0ZKlV3TR4 | 06-26 | D✨ | "Visualmente el cielo se ve contaminado..." | Edición con Replicate: cielo azul despejado, resto de la imagen intacto. |
| 2otVyDvzinDi | 06-26 | F | "Es intencional el espacio que existe entre fotografia y texto?" | Pregunta. Evaluar el espacio; si es defecto, ajustar; si es diseño, responder a Erick vía Luis. |
| A_RzAux3sKII | 06-26 | E | "Modificar la alineacion del texto., probablemente centrado o que se extienda hasta el inicio del texto del parrafo a la derecha." | Ajuste de alineación. Proponer opción a Luis antes de aplicar. |
| DNggMxSapbBR | 06-26 | E⚠ | "Pregunta tecnica: Sentimos que queda mucho espacio en blanco, lo cual nos obliga hacer de mas el scroll, se puede hacer mas compacto…" | Rediseño de espaciado (afecta varias secciones). **Escalar a Luis**: cambio de diseño global, no puntual. |
| yHLo0G3JphQS | 06-26 | E⚠ | "La seccion Soluciones Llave en Mano, moverla dentro de la seccion de Parques y antes de la seccion Naves Disponibles." | Reordenar secciones de la página. **Escalar a Luis**: cambio estructural. |

#### `/es/experiencia/excelencia-operativa` — 1 comentario

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| MO5GYXKQiNYn | 05-08 | A✅? | "40" (seleccionó "35") | Gulfstream/antigüedad 40 años. **Probablemente ya aplicado** en lotes 5–7 (commits de junio). Verificar contra código; si ya está, solo marcar como resuelto. |

#### `/es/experiencia/normas-certificaciones-estandares` — 12 comentarios

| ID | Fecha | Cat | Comentario | Acción propuesta |
|---|---|---|---|---|
| 7ToQgPEsKNvp | 06-10 | A/F | "Cambiar texto. niveles" | Ubicar por selector; ajuste puntual con "niveles". |
| x9JPwMyTv80X | 06-10 | B | "Resultados comprobables en proyectos reales." | Reemplazo de frase. |
| 8F-zvJUAMcrH | 06-10 | B | "Todo proyecto insdustrial demanda el cumplimiento de tres frentes claves: Estandares corporativos, requerimientos de aseguradoras y normatividad regulatoria. En Nuestra Constructora se garantiza el e…" | Reemplazo de párrafo (recuperar completo; corregir "industrial", "clave", "estándares"). |
| RqrZlDHPM4y3 | 06-10 | B | "En Nuestra Constructora alineamos cada obra bajo estandares internacionales." | Reemplazo de frase (corregir "estándares"). Nota: usa "Nuestra Constructora" — refuerza el rename global. |
| iGqyDaFOpN1Z | 06-10 | B | "Diseñamos y construimos bajo los lineamientos del IBC, integrandolso extrictamente con el reglamento de construccion de Baja California…" | Reemplazo de párrafo (corregir "integrándolos estrictamente", "construcción"). |
| b71xAoaASHgD | 06-10 | B | "Esta solida infraestructura esta integrada directamente al parque garantizando el maximo respaldo y seguridad para tus operaciones." | Reemplazo de frase (corregir "sólida", "está", "máximo"). |
| xPEPmTOnOZUg | 06-10 | B | "Cumplimiento normativo con evidencia verificable" | Reemplazo de título/frase. |
| ClVNh9md5ZMc | 06-10 | B | "Nos aseguramos de que cada proyecto cumpla estrictamente con las normas mexicanas de seguridad. Marcamos la diferencia a traves de una gestion transparente, sustentada en permisos diarios, matrices de…" | Reemplazo de párrafo (recuperar completo; corregir acentos). |
| rsCWhcaiZkmV | 06-10 | C | "eliminar" | Ubicar por selector y eliminar. |
| JJQY4eQgY8p5 | 06-10 | C | "eliminar" | Ubicar por selector y eliminar. |
| K_kQHb73gL52 | 06-10 | A | "internacional" | Ajuste puntual de palabra. |
| FmSy_ZKLJYrw | 06-10 | B | "la seguridad en obra cumple con los criterios mas estrictos y reconocidos a nivel global." | Reemplazo de frase (corregir "más"). |

### Resumen por categoría (54 activos)

- **A (copy trivial):** 14 — incluye 2 del rename "Nuestra Constructora" (decisión ya cerrada en la sección 6.1; aplicar por ocurrencia).
- **B (copy nuevo):** 17
- **C (eliminación):** 9 (8 fixes reales; 1 duplicado)
- **D (imagen):** 7 — 3 con edición Replicate ✨, 4 de sustitución simple
- **E (layout/estructura):** 7 — todos pasan por confirmación de Luis; 2 marcados ⚠ como estructurales fuertes
- **F (pregunta/duda):** los solapados con A/C/E ya contados; puros: 2 ("Y esto ????", "Es intencional el espacio…")

## 4. Proceso de ejecución por lotes

### Modo de ejecución (override consciente de las reglas de worktrees)

Las reglas del repo (MAIN=orquestador, worktrees=ejecutores por sección) son de la fase
de construcción paralela. Este plan se ejecuta **secuencialmente, directo en `dev`,
desde MAIN, sin worktrees** — igual que los lotes 1–7 de mejoras de Erick — por
instrucción de Luis ("debemos hacer TODOS los cambios en dev"). Eso incluye tocar
componentes de varias secciones (`Eta`, `Teta`, `Iota`, `Kappa`, `HeroVideoCover`,
footer) y páginas EN: la aprobación de este plan por Luis cubre esa clasificación
cross-section; no se re-pregunta por ítem, solo se registra por lote.

### Paso 0 (obligatorio): congelar snapshot **sanitizado** de threads

Antes del lote 1, exportar los **69 threads** a
`docs/continuidad/threads-vercel-erick-2026-07-06.json` con **schema safe-list**
(solo estos campos): `threadId`, `branch`, `pagePath`, `createdAt`, `status`,
`selector`, `componentFile`, `componentTree` (árbol React completo del contexto — no
sensible y clave para anclar comments ambiguos tipo "eliminar" cuando `componentFile`
tiene varias ocurrencias o el selector ya no resuelve), `commentText[]` (texto
completo de todos los mensajes), `decision`, `anchorNotes` (lo llena el ejecutor al
validar el ancla). **El payload crudo del API no se versiona**: trae author metadata,
userAgent del device y URLs de deployments que no deben quedar en el repo. Vercel es
fuente externa y mutable: el snapshot sanitizado es la fuente de verdad de la
ejecución y la evidencia de qué pidió Erick exactamente. El re-pull final (cierre
global) solo detecta deltas contra este archivo. Los textos largos se toman del
snapshot, no de los resúmenes de este plan.

### Lotes

Lotes por página (mantiene el diff revisable y el contexto compacto):

1. **Lote 1** — `/es/constructora/llave-en-mano` (17): la página con más volumen y donde ya tenemos 4 ítems pre-analizados.
2. **Lote 2** — `/es/constructora/diseno-e-ingenieria` (18).
3. **Lote 3** — `/es/experiencia/normas-certificaciones-estandares` (12).
4. **Lote 4** — `/es/constructora/build-to-suit` (5) + `/es` (1) + excelencia-operativa (1).
5. **Lote 5** — viejos aprobados de la sección 7 (si Luis aprueba alguno) + ítems E escalados que Luis haya decidido.

Para cada ítem del lote:

1. **Verificar vigencia**: cruzar contra el código actual de `dev` — algunos pueden estar ya aplicados por lotes previos (ej. MO5GYXKQiNYn). Los ya-aplicados se marcan y van a la lista de "resolver en Vercel" sin tocar código.
2. **Anclar**: ubicar archivo/línea vía `data-component-file`, selector CSS y grep del texto actual. **Regla de Sanity** (Luis, 2026-07-06): si al anclar resulta que el contenido viene de Sanity y no del código, el ítem **no se ejecuta** — se acumula en una lista explícita que se reporta a Luis para decidir (Erick lo cambia en el Studio, o Luis autoriza algo puntual). Nada que toque Sanity se hace silently.
3. **Aplicar** en ES y en la página gemela EN. Pares tomados de `src/glossary/route-map.ts` (verificados contra el repo):
   - `/es/constructora/llave-en-mano` ↔ `/construction/turnkey`
   - `/es/constructora/diseno-e-ingenieria` ↔ `/construction/engineering-design`
   - `/es/constructora/build-to-suit` ↔ `/construction/build-to-suit`
   - `/es/experiencia/normas-certificaciones-estandares` ↔ `/experience/standards-certifications`
   - `/es/experiencia/excelencia-operativa` ↔ `/experience/operational-excellence`
   - `/es` ↔ `/`
   El copy EN se traduce del copy corregido de Erick.
4. **Registrar** en `docs/continuidad/registro-de-cambios-mejoras-sitio.md` (mismo formato de los lotes 1–7).
5. Al cierre del lote (no existe script `typecheck`; `build` compila y typechequea):
   - `pnpm build` verde.
   - **Smoke visual de las URLs exactas del lote**, ES y EN (el par completo del route-map), en dev server local.
   - Para ítems D y E: screenshot antes/después.
   - Reporte a Luis → **Luis autoriza commit** → commit del lote.

Cierre global:

- Re-pull de threads unresolved al final (pueden haber llegado nuevos mientras trabajamos).
- Lista final de thread IDs procesados. **Marcar resolved en Vercel solo con autorización de Luis** (existe la herramienta MCP para hacerlo; también puede marcarlos Erick/Luis a mano — decidir en review).
- Los ítems F que queden como preguntas se compilan en un mini-doc para que Luis se las mande a Erick (mismo patrón que el correo de cierre de anglicismos).

## 5. Flujo de imágenes editadas por AI (categoría D✨)

### Preflight (obligatorio antes del lote que incluya ítems D✨)

El repo **no** tiene tooling de Replicate; sí tiene `scripts/generate-image.ts` con
`@google/genai` (Imagen 3, solo generación, no edición). Antes de prometer candidatas:

1. Elegir herramienta entre dos opciones y validarla con **1 imagen de prueba**:
   - **Opción A (primaria) — Replicate** vía `curl` (token en `~/lmuzquiz/.secrets/tokens.md`): modelo de edición por instrucción `google/nano-banana` o `black-forest-labs/flux-kontext-pro`. Confirmar nombre/disponibilidad exacta del modelo en el momento.
   - **Opción B — `@google/genai` local** con `gemini-2.5-flash-image` (nano-banana por vía Google directa). **Precisión de la r02**: el script existente `scripts/generate-image.ts` autentica con **Vertex AI** (`GOOGLE_CLOUD_PROJECT`/`GOOGLE_CLOUD_LOCATION`, no `GEMINI_API_KEY`) y es **solo generación** — sirve como referencia de estilo, no como tooling listo. Elegir esta opción exige confirmar en el preflight: (a) el modo real de auth disponible, y (b) que el endpoint acepta imagen de entrada para edición. Si eso no se valida rápido, se ejecuta con la Opción A. Cualquier script nuevo se nombra como edición y documenta sus env vars exactas.
2. Confirmar: token/key válida, ruta de salida temporal (fuera de `/public` hasta aprobación), y pipeline de compresión (webp, <500 KB).
3. Si la imagen de prueba no logra edición limpia (sin artefactos), escalar a Luis antes del lote: la alternativa es sustituir por otra foto del inventario.

### Ejecución por imagen (cielo contaminado, persona caminando, logo CASTORES)

1. Identificar el archivo original en `/public` (vía componente que lo renderiza).
2. Editar con la herramienta elegida en preflight. Instrucción tipo: "misma imagen, cielo azul despejado, todo lo demás idéntico".
3. Generar 2–3 candidatas por imagen; **Luis aprueba visualmente** antes de sustituir.
4. Optimizar la aprobada (webp, mismo tamaño en px que la original, ideal <500 KB) y guardarla siguiendo el naming SEO existente (`grupo-nelson-…`). La original **no se borra** del repo hasta que el cambio esté aprobado y commiteado.
5. Regla de higiene: no commitear archivos >500 KB; si la imagen final excede, comprimir más o pedir excepción explícita a Luis.

Para los 4 casos de sustitución simple (D sin ✨): proponer candidatas desde las fotos existentes en `/public` (hay inventario amplio de fotos de naves/parques); si ninguna sirve, escalar a generación/curaduría con Luis.

## 6. Ítems que requieren decisión de Luis antes de ejecutarse

1. **Rename "Nuestra Constructora"** (twqOZDFiJ7mQ, PjQ9NHjuIQxC) — **DECIDIDO en lo principal** (Luis, 2026-07-06): el consejo de administración de Grupo Nelson decidió el nombre; el rename es **global** (~60 apariciones de "Constructora de Casa" en `src/`). Decisión cerrada por superficie, replicando el alcance del rename anterior (`registro-de-cambios-mejoras-sitio.md`, entrada 2026-06-04):

   | Superficie | ES | EN |
   |---|---|---|
   | Títulos/nav/badges | "Nuestra Constructora" | "In-House Construction" (se conserva: mayor punch comercial en inglés; comunica el diferenciador de construcción propia) |
   | Prosa | "nuestra constructora" (descriptor, minúsculas; ya hay ~42 usos así) | "our construction company" (traducción natural del descriptor; convive con la etiqueta) |
   | Alt de imágenes y metadata SEO | incluidas | incluidas |
   | URLs (`/constructora/baumex`), rutas de imagen en disco, identificadores de código, imports | **NO se tocan** (igual que el rename anterior) | **NO se tocan** |

   *Decisión de trabajo acordada entre Luis y Claude (2026-07-06): ambos términos EN conviven con roles distintos — etiqueta vs prosa. Tradeoff aceptado: los títulos EN no son espejo literal del ES; si el cliente pide simetría exacta, se cambia la etiqueta a "Our Construction Company" con un sweep acotado.*

   **Regla operativa del rename (r02 de Codex): prohibido el search/replace global.** Hay ocurrencias con artículo/preposición que se rompen con sustitución literal ("por la Constructora de Casa" → "por la Nuestra Constructora" ✗). Proceso: clasificar las ~60 ocurrencias por contexto (etiqueta/título/nav · prosa con artículo o preposición · metadata SEO · alt text · testimonial/FAQ) y **reescribir por ocurrencia** con patrones permitidos: "con nuestra constructora", "por nuestra constructora", "nuestra constructora de Grupo Nelson", reservando "Nuestra Constructora" para etiquetas y títulos. En EN, misma disciplina con "our construction company" / "our in-house construction team" según la frase. (Coherente con la regla existente de Luis: nada de scripts de transformación masiva.)
2. **Mover la sección "Soluciones Llave en Mano"** dentro de Parques (yHLo0G3JphQS): cambio estructural de la página.
3. **Compactar espacios en blanco** (DNggMxSapbBR): afecta el diseño global de scroll-storytelling; Erick dice que lo detectó "en varias secciones".
4. **Botón "Habla con un experto"** (PmZ3jBaCBFcB): agregar CTA nuevo — dónde y con qué estilo.
5. **Alineación de texto** (A_RzAux3sKII) y **tamaño de letra** (pKhiOx_to4-Q): ajustes visuales; propongo opciones concretas al llegar al lote.
6. **Preview del video del footer** (GKE6_bY7gR7o): fix técnico a investigar; puede ser no-trivial.
7. **Política de marcar resolved en Vercel**: ¿los marco yo vía API, o los marcan Erick/tú a mano? Recomendación (tras pregunta de Codex r01): **por lote**, solo después de commit + smoke del lote — reduce ruido para Erick sin riesgo de cerrar threads con correcciones a medias. Decisión de Luis.

## 7. Los 15 viejos (marzo–abril) — recomendación individual

Criterio: solo se hacen los **triviales y súper claramente mejoras**. El resto queda para decisión de Luis o se ignora.

### Verificar y aplicar solo si sigue pendiente (triviales + claros) — 4

| ID | Fecha | Página | Comentario | Estado |
|---|---|---|---|---|
| 3Klzwqf0vi9k | 04-10 | `/` | "Que diga en Todo Mexicali en lugar de solo Mexicali" | **Probablemente ya aplicado** (r02: `src/app/es/page.tsx:17` ya dice "en Todo Mexicali"). Solo confirmar (ES y EN) y resolver en Vercel. |
| OPBUI49rAhKw | 04-12 | `/construction/build-to-suit` | "este texto sigue en español en el sitio en ingles" | Bug objetivo de i18n. Verificar si aún reproduce; si sí, traducir. |
| 0fxt4hlPs2iR | 04-08 | `/constructora/llave-en-mano` | "cambiar por public/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg" | Instrucción exacta con ruta de archivo. Verificar que la foto exista y el slot siga vigente. |
| DnZyX1IkFzI0 | 04-10 | `/nelson/nuestra-historia` | "usar la foto nave-industrial-en-parque-industrial-nelson2-8" | **Probablemente ya aplicado** (r02: `nuestra-historia/page.tsx:65` ya usa esa foto). Solo confirmar y resolver en Vercel. |

### NO hacer (con motivo) — 11

| ID | Página | Comentario | Motivo |
|---|---|---|---|
| jK0MKP4zjgiK | excelencia-operativa | "cambiar fatalidades por accidentes" | **Conflicto resuelto por doc más nuevo**: el copy de Erick del 06-18 (8W67Ew7WDWQO) dice "+1M horas-hombre sin fatalidades". El comentario nuevo gana; este queda obsoleto. |
| DLT0vKnMxz6m, omKULwAT3zqS | `/` | "decir lo mismo con menos palabras" (x2) | Vago, sin copy propuesto; el home ya pasó por varias rondas desde abril. |
| iqSSKKpzMg9m, biozz_ZBlniY | `/` | "agregar 8 palabras que tengan sentido" (x2) | Ídem: vago y probablemente obsoleto. |
| q52JPnpW-m-h | build-to-suit EN | Textos móvil "muy a la derecha" (translate/margin) | Fix CSS no trivial; verificar si aún reproduce solo si Luis quiere. |
| sRxQUw0Gt59R | build-to-suit EN | "translate y negativo… en móvil" | Ídem. |
| WTPkd2tUL40M | turnkey EN | Fondo del div opuesto al dark/light mode | Decisión de diseño, no trivial. |
| EOwKQOB6Mczt | turnkey EN | "esta foto se repite hay que cambiarla" | Cambio de foto sin candidata definida; posible que ya cambió desde abril. Verificar solo si Luis quiere. |
| f8VmlLmadCP- | operational-excellence EN | "En localhost tambien esta broken" | Sin contexto de qué estaba roto; 3 meses viejo. |
| Qc8Kf5atgNJG | diferencia-nelson | "borrar este texto" | Trivial pero **no** es súper claro que sea mejora vigente (Luis pudo decidir no hacerlo). Queda a decisión de Luis. |

## 8. Riesgos y edge cases aceptados

- **Anclaje sin Selected Text**: algunos ítems A/C ("eliminar", "internacional", "certificada con") dependen del selector CSS para saber qué tocar. Si el DOM cambió desde que Erick comentó, el selector puede no resolver — en ese caso se pregunta a Luis con screenshot en vez de adivinar.
- **Threads con texto truncado en el inventario**: los párrafos largos de Erick se toman del snapshot del Paso 0 (texto completo), nunca de los resúmenes de este plan.
- **Comentarios nuevos durante la ejecución**: se detectan con el re-pull final; no bloquean los lotes.
- **Ediciones Replicate**: la calidad no está garantizada al primer intento; presupuestar 2–3 iteraciones por imagen. Si el modelo no logra limpiar sin artefactos, escalar a Luis (alternativa: otra foto del inventario).
- **Duplicados**: XB4pV6h1Up1E y m9ayfF7_v1u8 son el mismo fix; ambos threads se marcan resolved con un solo cambio.

## 9. Listo cuando

- [ ] Paso 0 ejecutado: snapshot **sanitizado** (schema safe-list, sin author metadata ni URLs de deployments) de los 69 threads en `docs/continuidad/threads-vercel-erick-2026-07-06.json`; el payload crudo no se versionó.
- [ ] Ítems cuyo contenido venga de Sanity: reportados a Luis en lista explícita, ninguno ejecutado silently.
- [ ] Los 54 threads activos están procesados: cambio aplicado (ES+EN), o escalado con decisión registrada, o convertido en pregunta para Erick.
- [ ] Los 4 viejos "candidatos a sí" verificados y aplicados (o descartados con motivo); los 11 restantes documentados como no-hechos.
- [ ] `registro-de-cambios-mejoras-sitio.md` actualizado con todos los cambios.
- [ ] `pnpm build` verde en `dev`.
- [ ] Commits por lote hechos **con autorización explícita de Luis** en cada uno.
- [ ] Lista de thread IDs lista para marcar resolved (ejecutada solo si Luis autoriza la política de la sección 6.7).

## 10. Anotaciones de ejecución

*(Se llena durante el paso 6 del flujo: ✅ hecho / ❌ saltado con motivo / 📍 decisión en vivo.)*

- ✅ **Paso 0 (2026-07-06)**: snapshot sanitizado generado en `docs/continuidad/threads-vercel-erick-2026-07-06.json` — 69 threads (54 dev, 18 con `componentFile`), 93 KB. Verificado: 0 author metadata, 0 userAgent, 0 URLs absolutas/deployments (greps sobre el archivo final). Incluye `componentTree` y `anchorNotes` según r03.
- 📍 **Decisión en vivo (2026-07-06)**: el rename global "Nuestra Constructora" (~60 ocurrencias, threads twqOZDFiJ7mQ y PjQ9NHjuIQxC) se ejecutará como **etapa propia (Lote 6)**, no dentro del lote de su página — mezcla ~20 archivos de todas las secciones y contaminaría el diff de cualquier lote de página. Los lotes 1–5 no tocan "Constructora de Casa"; el Lote 6 hace el sweep por ocurrencia al final, con su propio commit y review.
- ✅ **Lotes 1–4 (2026-07-06)**: ejecutados con 4 agentes paralelos (páginas disjuntas). 35 ítems procesados: 24 aplicados ES+EN, 4 verificados ya vigentes, 7 documentados con hallazgo/propuesta (D imágenes identificadas, E/F con propuesta). Detalle por thread en el snapshot (`decision`).
- ✅ **Lote 6 — rename (2026-07-06)**: 3 agentes paralelos, ~58 ocurrencias en 35 archivos reescritas por ocurrencia; `grep "Constructora de Casa"` = 0 en `src/`. EN intacto ("In-House Construction").
- 📍 **Decisiones en vivo**: (a) "zona sísmica 4" → "zona sísmica" extendido a las 12 menciones no ancladas (ES+EN+dev) por consistencia con los 2 anclados de Erick; (b) claim LEED de Gulfstream unificado a "certificada" (petición de Erick) en claims simples, dejando el detalle del proceso (53-55 pts) intacto — escalado como pregunta prioritaria; (c) font-size de beta aplicado (E) con los valores propuestos; (d) en standards-certifications EN la prosa nueva usa "Our In-House Construction team" por consistencia local de página; (e) los threads duplicados "eliminar 4" resultaron ser 2 anclas distintas de "zona sísmica 4", no duplicados.
- ✅ **Verificación (2026-07-06)**: `pnpm build` verde (177 páginas) + smoke de 19 strings en 9 rutas ES/EN (server de producción local). Preflight de imágenes: token de Replicate presente; edición pospuesta a sesión conjunta con Luis (aprobación visual).
- ✅ **Review de etapa (2026-07-06)**: Codex sobre el diff pre-commit (`e01-r01-codex.md`): 5 hallazgos → 4 relevantes con fix + 1 tradeoff acknowledged (`e01-triaje-01-claude.md`). Re-build verde post-fixes.
- ❌ **No ejecutados en esta etapa** (25 threads, decisión registrada en snapshot y registro): 6 de imágenes (archivos identificados; requieren candidatas + aprobación visual de Luis), 8 de layout/preguntas (propuestas documentadas; requieren decisión de Luis/Erick), 11 viejos no realizados por criterio de Luis.
