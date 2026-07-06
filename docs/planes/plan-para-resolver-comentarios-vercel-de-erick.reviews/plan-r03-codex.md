---
tipo: plan
ronda: 3
reviewer: codex
fecha: 2026-07-06T14:23
---

# Review Codex r03 - plan para resolver comentarios Vercel de Erick

## Hallazgos

### Media - El snapshot sanitizado puede quedarse corto para anclar comentarios ambiguos

La r02 corrigio el riesgo de versionar payload crudo: ahora el plan pide un snapshot safe-list sin author metadata ni URLs de deployments (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:158-169`, `:287`). El problema residual es que el schema propuesto reduce el contexto de anclaje a `selector`, `componentFile` y `commentText[]` (`:160-164`), mientras que el propio plan reconoce que el API tambien trae arbol de componentes React y que no trae Selected Text (`:34-36`).

Impacto: para comments tipo "eliminar", "Y esto ????", "internacional" o "certificada con", `componentFile` singular puede no bastar si hay varias ocurrencias dentro del mismo componente, si el selector cambia con el DOM, o si el target venia de un nodo interno dentro del arbol de componentes. Al sanitizar demasiado, se evita filtrar metadata sensible pero se pierde evidencia util justamente donde el toolbar ya no da selected text.

Recomendacion: mantener el snapshot sanitizado, pero ampliar el safe-list con campos no sensibles de anclaje: `componentTrace[]` o `componentTree[]` sanitizado, `targetElement`/`targetAttributes` si existen, `targetText` si el API lo trae, y opcionalmente una nota `anchorNotes` que el ejecutor llene al validar. No incluir author metadata, userAgent, deployment URLs ni attachment URLs.

### Baja - El inventario todavia dice que el rename requiere decidir alcance aunque ya quedo decidido

La seccion de decision ya cierra el rename global y define superficies, EN y regla operativa por ocurrencia (`docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md:231-242`). Pero el inventario conserva textos anteriores: el thread del home sigue diciendo "Decidir alcance con Luis" (`:57`), el thread de `kappa.tsx` dice "Mismo alcance a decidir" (`:98`), y el resumen de categoria A dice que los 2 rename "requieren decision de alcance" (`:139`).

Impacto: no es un bug de fondo, pero puede hacer que el ejecutor reabra una decision cerrada, retrase el lote 4, o registre el rename como pendiente cuando la regla real esta en la seccion 6.

Recomendacion: actualizar esas tres referencias para que apunten a "aplicar decision de seccion 6" en vez de "decidir alcance". Asi el plan queda consistente de arriba a abajo.

## Resumen

Las correcciones de r01 y r02 quedaron razonablemente integradas. No veo un bloqueo fuerte para ejecutar el plan: mapeos, worktrees, snapshot seguro, rename por ocurrencia, imagenes y viejos aplicados ya estan cubiertos. Ajustaria los dos puntos anteriores antes de arrancar para reducir ambiguedad operativa, pero esta version ya esta cerca de ejecutable.
