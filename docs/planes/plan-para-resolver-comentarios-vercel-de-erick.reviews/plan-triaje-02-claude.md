---
tipo: triaje
de: plan-r02-codex.md
ronda: 2
fecha: 2026-07-06
---

# Triaje de la review r02 de Codex

Las 4 afirmaciones factuales se verificaron contra el repo. Todas verifican.

## Hallazgos

### 1. Snapshot crudo en ruta versionable sin redacción — **relevante** (alta)

Verificado: `.gitignore` no cubre `docs/continuidad/*.json`, y el payload crudo del API
trae author metadata (username, avatar URL), userAgent del device y hrefs de
deployments. **Fix aplicado**: el Paso 0 ahora versiona **solo un snapshot sanitizado**
con schema safe-list (`threadId`, `branch`, `pagePath`, `createdAt`, `status`,
`selector`, `componentFile`, `commentText[]`, `decision`); el payload crudo NO se
versiona (se queda en el tool-result efímero de la sesión). Criterio de listo
actualizado a "snapshot sanitizado".

### 2. Rename global ejecutable como find/replace mecánico — **relevante** (media)

Verificado: existen contextos con artículo/preposición ("por la Constructora de Casa",
"con Constructora de Casa", "la Constructora de Casa de Grupo Nelson") donde la
sustitución literal rompe la gramática. **Fix aplicado**: regla operativa en la
decisión del rename — prohibido search/replace global; clasificar las ~60 ocurrencias
por contexto (etiqueta / prosa con artículo / metadata / alt / testimonial) y
reescribir por ocurrencia con patrones permitidos. Coherente con la regla previa de
Luis de no usar scripts de transformación masiva.

### 3. Preflight de imágenes mezcla API key con script que usa Vertex — **relevante** (media)

Verificado: `scripts/generate-image.ts:36-49` construye `GoogleGenAI({vertexai: true,
project, location})` con `GOOGLE_CLOUD_PROJECT`; no usa `GEMINI_API_KEY`, y es solo
generación (sin imagen de entrada). **Fix aplicado**: la Opción B ahora dice
explícitamente que el modo de auth real es Vertex, que el script existente es solo
referencia de estilo (no tooling listo para edición), y que el preflight debe
confirmar auth + endpoint de edición con imagen de entrada; si eso no se valida
rápido, Replicate vía `curl` pasa a ser la opción primaria.

### 4. Dos candidatos viejos "SÍ hacer" ya aplicados — **relevante** (baja)

Verificado: `src/app/es/page.tsx:17` ya dice "en Todo Mexicali" y
`src/app/es/nelson/nuestra-historia/page.tsx:65` ya usa
`nave-industrial-en-parque-industrial-nelson2-8.jpeg`. **Fix aplicado**: subsección
renombrada a "Verificar y aplicar solo si sigue pendiente"; ambos ítems preanotados
como "probablemente aplicado — solo confirmar y resolver en Vercel".

## Adición fuera de review (pregunta de Luis, 2026-07-06)

📍 **Regla de Sanity agregada al plan**: si al anclar un comentario el contenido
resulta venir de Sanity (no del código), el ítem **no se ejecuta silently** — se
reporta a Luis con la lista explícita de esos ítems para decidir (Erick lo cambia en
el Studio, o Luis autoriza algo puntual). Consistente con la regla del proyecto de no
modificar Sanity sin aprobación.

## Resultado

4/4 relevantes → fixes aplicados. Codex declaró en su resumen que no bloquearía el
plan por inventario; con estos fixes no queda ningún hallazgo pendiente de ronda 1 ni
2. Según el criterio del flujo (iterar mientras haya "relevantes" nuevos), una ronda 3
corta confirmaría convergencia; si Luis prefiere, el plan ya está operativo para
ejecutar.
