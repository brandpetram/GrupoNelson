---
tipo: triaje
de: plan-r01-codex.md
ronda: 1
fecha: 2026-07-06
---

# Triaje de la review r01 de Codex

Las 7 afirmaciones factuales de Codex se verificaron contra el repo antes de triar.
Todas verifican. Categorías según `flujo-planes.mdx`.

## Hallazgos

### 1. Mapeo EN incorrecto (`design-engineering` vs `engineering-design`) — **relevante**

Verificado: existe `src/app/(en)/construction/engineering-design/page.tsx` y
`src/glossary/route-map.ts:40` declara `'/construction/engineering-design':
'/es/constructora/diseno-e-ingenieria'`. El plan tenía el par inventado al revés.
**Fix aplicado**: pares ES/EN tomados literalmente de `route-map.ts` y ese archivo
declarado como fuente de verdad en el plan.

### 2. Rename sin equivalente EN ni superficies — **relevante**

Además, Luis aportó contexto nuevo (2026-07-06): el consejo de administración decidió
el nombre "Nuestra Constructora"; Baumex desapareció del sitio. Y Luis definió la regla
general: el sitio EN se ajusta a los comentarios ES de Erick (es ~una traducción).
**Fix aplicado**: decisión cerrada en el plan con formas exactas ES/EN y tabla de
superficies incluidas/excluidas (mismas del rename anterior según
`registro-de-cambios-mejoras-sitio.md`). La forma exacta EN queda con recomendación
de Claude pendiente de un OK de una línea de Luis.

### 3. Falta congelar snapshot de threads — **relevante**

Vercel es fuente mutable y el payload ya vive solo en un tool-result de sesión
(efímero). **Fix aplicado**: nuevo Paso 0 obligatorio — exportar los 69 threads
completos a `docs/continuidad/threads-vercel-erick-2026-07-06.json` antes del lote 1;
el plan se ejecuta desde ese snapshot; el re-pull final solo detecta deltas.

### 4. Conflicto con ownership/worktrees — **relevante**

Las reglas del repo (MAIN=orquestador, worktrees=ejecutores) son de la fase paralela.
**Fix aplicado**: sección nueva "Modo de ejecución" que declara override consciente:
ejecución secuencial directa en `dev` desde MAIN, igual que los lotes 1–7 de mejoras,
citando la instrucción de Luis ("debemos hacer TODOS los cambios en dev"). El override
queda sujeto a veto de Luis en la ronda 2 de review.

### 5. Replicate sin preflight técnico — **relevante**

Verificado: no hay tooling Replicate en el repo; sí existe `scripts/generate-image.ts`
con `@google/genai` (Imagen 3, solo generación). **Fix aplicado**: subsección de
preflight para la categoría D con checklist (token, modelo, prueba con 1 imagen antes
de prometer candidatas) y una alternativa que Codex destapó sin querer: usar
`@google/genai` local con `gemini-2.5-flash-image` (nano-banana) para edición,
reutilizando el patrón del script existente. El preflight decide Replicate vs genai.

### 6. Preview de video mal anclado a `footer-1` — **relevante** (baja)

Cierto: `footer-1` no es dueño natural de un video; el selector puede caer ahí por
layout. **Fix aplicado**: reword a "no asumir footer-1; localizar el `<video>` real y
su `poster`/fallback por DOM y asset".

### 7. Verificación final poco concreta / `typecheck` inexistente — **relevante** (baja)

Verificado: `package.json` no tiene script `typecheck`; `build` sí. **Fix aplicado**:
verificación por lote = `pnpm build` + smoke de URLs exactas ES y EN del lote
(pares del route-map) + screenshots antes/después para ítems D/E.

## Preguntas abiertas de Codex

- **¿Marca nueva o frase local?** Respondida por Luis: decisión del consejo de admin,
  el nombre es "Nuestra Constructora" → rename global. Incorporado al plan.
- **¿Viejos dentro del plan o después?** El plan ya los pone al final (Lote 5) y solo
  los 4 triviales+claros. Se mantiene: cerrar los 54 activos primero. — *tradeoff
  acknowledged* (ruido diferido a cambio de foco).
- **¿Resolved por lote o al final?** Recomendación de Claude en el plan: por lote,
  solo después de commit + smoke del lote, con OK de Luis. Decisión final de Luis.
  — *pendiente de decisión, no bloquea ejecución de lotes*.

## Resultado

7/7 hallazgos **relevantes** → todos con fix aplicado en el plan (misma fecha).
Quedan 0 hallazgos sin atender. Lista para ronda 2 de Codex.
