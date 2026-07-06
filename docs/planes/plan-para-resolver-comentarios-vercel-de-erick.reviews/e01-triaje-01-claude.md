---
tipo: triaje
de: e01-r01-codex.md
etapa: 1
ronda: 1
fecha: 2026-07-06
---

# Triaje de la review e01-r01 de Codex (diff pre-commit)

1. **[Alta] "zona sísmica 4" restante en `(dev)/proyecto/contenidos:437`** — relevante.
   **Fix aplicado**: → "zona sísmica". Era la página interna de inventario de contenidos
   (se despliega en /proyecto/contenidos), excluida a propósito en la primera pasada;
   Codex tiene razón en que es texto visible.
2. **[Media] Terminología EN mixta en standards-certifications (58, 144)** — relevante.
   **Fix aplicado**: las 2 frases nuevas que decían "our construction company" ahora usan
   "Our In-House Construction team …" — la misma página ya usaba esa forma en prosa, y la
   decisión 6.1 permite ambas; consistencia local gana.
3. **[Media] Claim LEED contradictorio (certificada vs en proceso)** — relevante, fix
   parcial + escalación. Erick pidió explícitamente "está certificada con" (fuente más
   nueva). **Aplicado**: unificados los claims simples a "certificada" (engineering-design
   feature+FAQ, sección LEED de normas ES+EN, metadata de /leed ES+EN). **NO tocado**: la
   página del proceso LEED (ES+EN) y el FAQ del sidebar, que traen detalle "53-55 puntos
   (Silver), apuntando a Gold" — convertirlos exigiría inventar puntaje/fecha. Escalado
   como pregunta prioritaria a Erick en el registro: si la certificación no está emitida,
   revertir los "certificada"; si sí, actualizar el detalle del proceso.
4. **[Media] Tarjeta DC-3 sin descripción** — tradeoff acknowledged. Erick pidió
   textualmente eliminar ese párrafo (thread rsCWhcaiZkmV, ancla verificada). La tarjeta
   conserva título + subtítulo. Restaurar copy contradiría la petición; anotado en el
   registro por si Erick quiere una descripción nueva.
5. **[Baja] Frase EN colgada "sandy soil, seismic zone."** — relevante.
   **Fix aplicado**: → "in collapsible sandy soil, in a seismic zone."

Post-fixes: `grep` de cadenas prohibidas = 0 en todo `src/`; `pnpm build` verde
(177 páginas). 4 relevantes con fix, 1 tradeoff acknowledged, 0 pendientes de código.
