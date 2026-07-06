---
tipo: plan
ronda: 1
reviewer: codex
fecha: 2026-07-06T13:48
---

# Review Codex — plan para resolver comentarios Vercel de Erick

## Hallazgos

### Alta — El mapeo EN de `diseno-e-ingenieria` apunta a una ruta inexistente

El plan define el mapeo `diseno-e-ingenieria↔design-engineering` en la etapa de ejecución (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:160`). En el repo, la ruta real inglesa es `/construction/engineering-design`: existe como `src/app/(en)/construction/engineering-design/page.tsx`, y el `route-map` tambien la declara asi (`src/glossary/route-map.ts:37-42`).

Impacto: el lote 2 concentra 18 comentarios. Si el ejecutor sigue el plan literal, puede buscar o editar una pagina EN que no existe, saltarse la gemela inglesa, o crear una ruta incorrecta.

Recomendacion: corregir el mapeo a `diseno-e-ingenieria↔engineering-design` antes de ejecutar y usar el `route-map` como fuente para todos los pares ES/EN.

### Alta — El rename a "Nuestra Constructora" no define el equivalente EN ni las superficies del cambio

El plan pide decidir el alcance del rename de "Constructora de Casa" a "Nuestra Constructora" (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:57`, `:184`), pero solo plantea el alcance en español. En el rename anterior, el registro fue explicito: ES visible `Constructora de Casa`, EN `In-House Construction`, prosa `nuestra Constructora de Casa` / `our In-House Construction team`, y tambien se alinearon alt text y metadata (`docs/continuidad/registro-de-cambios-mejoras-sitio.md:73-78`).

Impacto: una ejecucion global sin decision EN puede dejar copy bilingue inconsistente, por ejemplo traduciendo literalmente "Nuestra Constructora" donde el sitio ya usa "our In-House Construction team". Tambien puede olvidar metadata, alt, nav y footer, repitiendo el tipo de barrido que el registro anterior ya tuvo que corregir.

Recomendacion: antes de ejecutar, agregar una decision cerrada:

- ES visible: forma exacta permitida.
- EN visible: forma exacta permitida.
- Superficies incluidas: copy visible, nav/footer, metadata SEO, alt text.
- Superficies excluidas: URLs, rutas de imagen, identificadores internos, igual que el rename anterior.

### Media — Falta congelar la fuente de verdad completa antes de editar

El plan reconoce que el API no trae Selected Text (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:34-36`) y que varios comentarios largos estan truncados en el inventario (`:81`, `:101`, `:126`, `:131`, `:222`). Aun asi, el proceso no exige un snapshot completo de cada thread antes de empezar los lotes.

Impacto: Vercel es una fuente externa y mutable. Si cambia el estado, se agregan replies, se resuelve algo a mano, o falla el API a media ejecucion, no queda evidencia reproducible de que se aplico exactamente lo que Erick pidio. Con selected text ausente, ese snapshot es todavia mas importante.

Recomendacion: agregar un paso 0 obligatorio: exportar los 69 threads con `get_toolbar_thread` a un archivo operativo no ambiguo (JSON o MD) con ID, URL, fecha, status, selector, `data-component-file`, comentario completo y decision inicial. El plan debe ejecutarse desde ese snapshot, y el re-pull final solo debe detectar deltas.

### Media — El plan no resuelve el conflicto con el modelo de ownership/worktrees del repo

El plan dice que todos los cambios van directo en `dev` y se agrupan por pagina (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:5`, `:146-154`). Pero las reglas del repo distinguen MAIN como coordinador y worktrees como ejecutores; ademas, piden clasificar cambios cross-section antes de editar componentes compartidos. Este plan toca `home`, `constructora`, `experiencia`, paginas EN, layout/footer compartido y componentes como `Eta`, `Teta`, `Iota`, `Kappa`, `HeroVideoCover`.

Impacto: un agente que lea las reglas locales puede detenerse, o peor, editar componentes compartidos sin la clasificacion requerida. El riesgo sube con items como footer/video, rename global, imagenes compartidas ES/EN y layout.

Recomendacion: declarar explicitamente el modo de ejecucion aprobado para este plan. Si Luis quiere ejecucion directa en `dev`, escribirlo como override consciente. Si no, separar por ownership o convertir los lotes en handoffs/worktrees.

### Media — El flujo de imagenes depende de Replicate sin preflight tecnico del repo

El plan propone Replicate y modelos concretos (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:170-180`), pero el repo ya trae dependencia y scripts de generacion con Google Vertex (`package.json`, `scripts/generate-image.ts`) y no hay tooling local evidente de Replicate. Puede usarse `curl`, pero entonces el plan debe decirlo y validar token/modelo antes de prometer 2-3 candidatas.

Impacto: el lote de imagenes puede bloquearse por credenciales, modelo no disponible, falta de pipeline de edicion/inpainting, o porque las imagenes finales salgan arriba de 500 KB. Ademas, si se editan archivos existentes compartidos, el cambio impacta ES y EN de golpe.

Recomendacion: agregar preflight para categoria D antes de ejecutar el lote: herramienta exacta, token requerido, comando/API, modelo confirmado, ruta de salida temporal, compresion, y criterio para decidir entre editar imagen vs sustituir por foto existente.

### Baja — El item del preview de video esta probablemente mal anclado a `footer-1`

El plan lista el comentario del preview como `(footer-1)` y sugiere un fix tipo `poster`/lazy-load (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:90`, `:189`). `footer-1` es un componente de links/logo/footer, no el dueño natural de videos; el selector puede estar cayendo ahi por layout o por cercania visual, no por causalidad.

Impacto: se puede perder tiempo parcheando el footer o agregando comportamiento en el lugar incorrecto.

Recomendacion: mantenerlo como investigacion, pero cambiar el texto del plan a "no asumir `footer-1`; localizar el `<video>` real y su `poster`/fallback por DOM y asset".

### Baja — La verificacion final deberia ser mas concreta que build + revision visual generica

El plan pide `pnpm build` o typecheck y revision visual local por pagina (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:162`, `:232`). El repo no declara script `typecheck`; `build` si existe. Para cambios de comentarios visuales, imagenes, EN/ES y redirects, "revision visual local" queda demasiado abierta.

Impacto: se pueden cerrar threads con build verde pero dejar roto un par EN, una imagen, un redirect viejo, o una traduccion fuera de la pagina gemela.

Recomendacion: por lote, listar URLs exactas ES y EN a abrir/smoke-testear, mas los redirects viejos relevantes cuando se toquen comments antiguos. Para D/E, incluir screenshots antes/despues o al menos checklist visual por viewport.

## Preguntas abiertas

- Para "Nuestra Constructora", ¿el cliente esta pidiendo una marca nueva o solo una frase local en dos secciones?
- Para los 15 viejos, ¿Luis quiere que los 4 candidatos se verifiquen dentro de este plan o prefiere cerrar primero los 54 activos y despues decidir viejos con menos ruido?
- Para marcar resolved en Vercel, conviene decidir si se resuelve por lote o solo al final; por lote reduce ruido, al final reduce riesgo de cerrar algo con una correccion parcial.

## Resumen

El plan esta bien inventariado y tiene buena disciplina de no adivinar cuando falte ancla. Yo no lo ejecutaria todavia: corregiria primero el mapeo EN, cerraria la decision bilingue del rename y congelaria los threads completos en un snapshot. Despues de eso, el plan ya queda suficientemente operativo para avanzar por lotes.
