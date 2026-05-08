---
tipo: plan
ronda: 3
reviewer: codex
fecha: 2026-05-07T17:22
---

# Review Codex r03

## Hallazgos

### 1. [Media / edge case] Desktop y móvil no cubren igual las futuras landings de categoría

Los fixes de r02 quedaron bien incorporados: `CATEGORY_BASE_PATHS` en inglés ya usa `/experience` y quitó `/insights`; el móvil ya tiene cálculo concreto con `sectionStates`; y la comparación visual ya normaliza ambos lados.

Queda una inconsistencia pequeña: en desktop, `categoryHrefs` sí mezcla `CATEGORY_BASE_PATHS` con hrefs renderizados (líneas 103-112). Eso cubre landings como `/es/constructora` o `/construction` para prender el trigger.

En móvil, `sectionStates` se calcula solo con los hrefs renderizados:

```ts
const sectionHrefs = section.categories.flatMap((c) => c.links.map((l) => l.href));
const longestHref = findLongestPrefixHref(pathname, sectionHrefs);
```

Entonces una landing futura como `/es/constructora` prendería el trigger desktop por `CATEGORY_BASE_PATHS.constructora`, pero no prendería el tile móvil de `Constructora`, porque ningún link renderizado tiene href `/constructora`.

No bloqueo la implementación porque el propio plan documenta que esas landings no existen hoy y los casos reales de rutas profundas sí quedan cubiertos por links ancestro como `/constructora/leed` o `/en/construction/leed`. Pero si se quiere que la mitigación preventiva sea consistente en ambos layouts, conviene ajustar el plan para que `MobileMenuSection` tenga una llave estable o `baseHrefs`, o construir `sectionStates` desde el mismo mapa conceptual que desktop.

Recomendación pragmática: dejarlo como edge case aceptado en esta etapa, salvo que Luis quiera que el plan ya cubra explícitamente futuras landings también en móvil.

## Estado de r02

Los hallazgos de r02 quedaron resueltos:

- Base paths EN corregidos: `/experience` en lugar de `/expertise`, sin `/insights`.
- Cálculo móvil ya especificado con `sectionStates` y `longestActiveHref`.
- Comparación visual normalizada en `ListItem` y `MobileMenuLink`.
- Wording sobre `/en` y estimación de líneas actualizado.

## Resumen

No veo hallazgos relevantes sin resolver para bloquear implementación. El plan está suficientemente aterrizado para pasar a ejecución. El único punto pendiente es un edge case preventivo sobre futuras landings de categoría en móvil; hoy no afecta las rutas reales ni los casos principales de aceptación.
