---
tipo: plan
ronda: 2
reviewer: codex
fecha: 2026-07-06T14:17
---

# Review Codex r02 - plan para resolver comentarios Vercel de Erick

## Hallazgos

### Alta - El snapshot completo de Vercel queda apuntado a una ruta versionable sin politica de redaccion

El plan ahora exige exportar los 69 threads completos a `docs/continuidad/threads-vercel-erick-2026-07-06.json` con ID, URL, fecha, status, selector, `data-component-file` y texto completo de mensajes (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:160-165`; tambien queda como criterio de listo en `:281`). Esa ruta no esta ignorada por `.gitignore`; las reglas actuales solo ignoran temporales, assets pesados y carpetas internas especificas (`.gitignore:58-72`).

Impacto: si el payload crudo del API incluye emails, IDs de usuario Vercel, URLs internas de deployment, URLs de screenshots/attachments, metadata de cuenta, o mensajes con informacion sensible, el plan empuja a versionarlo por accidente. El snapshot es buena idea, pero no deberia convertir una fuente externa en un dump crudo dentro del repo sin filtrar.

Recomendacion: ajustar el Paso 0 antes de ejecutar. Opcion segura: guardar el payload crudo en una ruta ignorada/privada y commitear solo un snapshot sanitizado con campos permitidos. Opcion mas simple: definir desde el plan un schema safe-list, por ejemplo `threadId`, `pagePath`, `createdAt`, `status`, `selector`, `componentFile`, `commentText`, `decision`, sin author metadata ni URLs de assets externos. El criterio de listo debe decir explicitamente "snapshot sanitizado" o "raw no versionado + resumen versionado".

### Media - El rename global todavia puede ejecutarse como reemplazo mecanico y romper copy visible

La decision bilingue del rename ya esta mucho mejor cerrada (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:227-236`), pero el plan sigue hablando de rename global de unas 60 apariciones sin prohibir un find/replace mecanico. En el codigo hay contextos que requieren reescritura gramatical, no sustitucion literal:

- `src/components/brandpetram/stats-grid-bp-beta.tsx:134`: "por la Constructora de Casa".
- `src/components/brandpetram/sigma.tsx:11`: "con Constructora de Casa".
- `src/components/brandpetram/sigma.tsx:15`: "clientes que construyen con Constructora de Casa".
- `src/components/brandpetram/upsilon.tsx:17`: "Con la Constructora de Casa".
- `src/components/brandpetram/kappa.tsx:8`: "la Constructora de Casa de Grupo Nelson".

Impacto: aplicar `Constructora de Casa -> Nuestra Constructora` de forma global dejaria frases como "por la Nuestra Constructora" o "con Nuestra Constructora", y tambien puede producir metadata/alt text poco natural. El riesgo es alto porque el rename toca copy visible, SEO y EN/ES.

Recomendacion: agregar una regla operativa explicita: no hacer search/replace global. Primero clasificar ocurrencias por contexto: titulo/nav/badge, prosa con articulo/preposicion, metadata, alt text, FAQ/testimonial. Despues reescribir por ocurrencia con patrones permitidos, por ejemplo "con nuestra constructora", "por nuestra constructora", "nuestra constructora de Grupo Nelson", y reservar "Nuestra Constructora" para etiquetas/titulos. En EN, mantener la distincion del plan: etiqueta "In-House Construction", prosa "our construction company" u "our In-House Construction team" segun frase.

### Media - El preflight de imagenes mezcla API key con un script local que usa Vertex AI

El plan dice que la opcion B reutiliza `scripts/generate-image.ts` con `@google/genai`, `gemini-2.5-flash-image` y "la API key ya configurada en `.env.local`" (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:206-212`). El script existente no usa API key directa: carga `.env.local` via `pnpm generate-image` (`package.json:14`) y construye el cliente con Vertex AI usando `GOOGLE_CLOUD_PROJECT` y `GOOGLE_CLOUD_LOCATION` (`scripts/generate-image.ts:35-49`). Ademas, el script actual es de generacion (`generateImages`), no de edicion con imagen de entrada.

Impacto: el lote D puede bloquearse tarde por auth o por asumir que el script existente ya cubre edicion/inpainting. Tambien puede llevar a agregar un segundo modo de autenticacion sin documentarlo, mezclando Vertex y Gemini API key en el mismo repo.

Recomendacion: precisar el preflight: antes de elegir opcion B, verificar el modo real de auth (`GOOGLE_CLOUD_PROJECT`/Vertex vs `GEMINI_API_KEY`) y confirmar con una prueba que el SDK/endpoint usado acepta imagen de entrada para edicion. Si se agrega script nuevo, nombrarlo como edicion y documentar env vars exactas. Si no, dejar Replicate como opcion primaria validada por `curl` y tratar `generate-image.ts` solo como referencia de estilo, no como tooling listo.

### Baja - Dos candidatos viejos etiquetados como "SI hacer" ya parecen aplicados

La seccion de viejos mantiene cuatro "Candidatos a SI hacer" (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:248-255`). Dos de ellos parecen ya resueltos en `dev`: el home ES ya dice "en Todo Mexicali" (`src/app/es/page.tsx:17`), y `nuestra-historia` ya usa `/parques-industriales-mexicali/nelson2/nave-industrial-en-parque-industrial-nelson2-8.jpeg` (`src/app/es/nelson/nuestra-historia/page.tsx:65`).

Impacto: el paso de verificacion probablemente lo atraparia, pero el encabezado "SI hacer" puede inducir a tocar codigo innecesariamente o a buscar un cambio que ya no existe.

Recomendacion: renombrar esa subseccion a "Verificar y aplicar solo si sigue pendiente" o preanotar los ya detectados como "probablemente aplicado; solo resolver en Vercel si confirma". Mantiene el criterio de Luis sin meter ruido al lote 5.

## Resumen

La r02 esta sustancialmente mejor que la version inicial: el mapeo EN, el override de worktrees, el snapshot y la decision del rename ya estan incorporados. Yo no bloquearia el plan por inventario, pero si corregiria estos tres puntos antes de ejecutar: snapshot sanitizado/no versionado, rename por ocurrencia y preflight real de imagenes. El cuarto hallazgo es limpieza para evitar trabajo duplicado con threads viejos.
