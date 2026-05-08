---
tipo: etapa
etapa: 1
ronda: 1
reviewer: codex
fecha: 2026-05-07T22:32
diff_base: HEAD
---

# Review Codex e01 r01

## Hallazgos

No encontré hallazgos funcionales que bloqueen esta etapa.

### 1. [Baja / scope] El diff incluye un archivo fuera del alcance del plan

Además de `src/components/Header.tsx` y `src/lib/nav-active.ts`, el diff modifica:

- `src/components/brandpetram/scroll-storytelling.tsx`

El cambio solo agrega atributos `data-component`, `data-component-file` y `data-component-props` al wrapper, así que no parece riesgoso por sí mismo. Pero no pertenece al plan de active-state del header y puede ensuciar la revisión/commit de esta etapa.

Recomendación: excluirlo del commit de esta etapa salvo que Luis confirme que ese metadata change debe viajar junto con este trabajo.

## Cobertura revisada

Validé contra el diff y el plan:

- `src/lib/nav-active.ts` normaliza `/es`, `/en`, trailing slash y query/hash como estaba planeado.
- Desktop calcula `activeCategory` con base paths + hrefs renderizados.
- Desktop usa `findLongestPrefixHref` por dropdown y pasa `longestActiveHref` a todos los `ListItem`.
- `ListItem` separa `aria-current` exacto de estado visual por longest-prefix.
- Mobile calcula `sectionStates` por sección y propaga `longestActiveHref` al submenu activo.
- Mobile mantiene `aria-current` y `closeMenu()` ligados a exact match.
- El edge case aceptado en r03 quedó documentado en comentario: móvil no incluye `CATEGORY_BASE_PATHS` para futuras landings.

## Verificación

- `pnpm exec tsc --noEmit` pasó.
- `pnpm lint` no fue útil en este repo: el script actual corre `next lint` y Next lo interpreta como directorio `lint`, fallando con `Invalid project directory provided`.

## Resumen

La implementación sigue el plan y resuelve los hallazgos de las rondas de plan. Lista para que Luis haga validación visual/manual contra los casos de aceptación antes del commit.
