---
tipo: etapa
etapa: 1
ronda: 1
reviewer: codex
fecha: 2026-07-06T15:26:08-0600
diff_base: HEAD
---

## 1. JSX/syntax or broken props

Sin hallazgos.

## 2. ES/EN consistency

- [Media] src/app/(en)/experience/standards-certifications/page.tsx:58 y src/app/(en)/experience/standards-certifications/page.tsx:144 — Descripción: el mirror en inglés traduce "Nuestra Constructora" como "our construction company", pero el contexto dado para la etapa dice que EN debe conservar la terminología "In-House Construction". Además, el resto de la misma página sigue usando "Our In-House Construction team", lo que deja terminología mixta. Recomendación: cambiar ambas frases a "our In-House Construction team" o una formulación equivalente con "In-House Construction".
- [Baja] src/app/(en)/construction/specialized-projects/page.tsx:159 — Descripción: la corrección de "seismic zone 4" quedó como "in collapsible sandy soil, seismic zone.", que no es una traducción natural del ES "zona sísmica" y queda gramaticalmente cortada en inglés. Recomendación: usar "in collapsible sandy soil, in a seismic zone." o reescribir la cláusula para que la frase no quede colgada.

## 3. Spanish grammar/naturalness

Sin hallazgos.

## 4. Unintentional regressions

- [Media] src/app/es/constructora/diseno-e-ingenieria/page.tsx:226 y src/app/(en)/construction/engineering-design/page.tsx:226 — Descripción: el diff cambia el estado de Gulfstream 550K a "está certificada con LEED Gold" / "is LEED Gold certified", pero el sitio conserva otros textos vigentes que dicen que Gulfstream está "en proceso" o "currently pursuing" LEED Gold. Si el certificado no está emitido, esto introduce un claim factual incorrecto; si sí está emitido, faltan actualizar las demás referencias. Recomendación: confirmar el estado real con el cliente y dejar todas las páginas en el mismo estado ("en proceso/apuntando" o "certificada").
- [Media] src/app/es/experiencia/normas-certificaciones-estandares/page.tsx:232 y src/app/(en)/experience/standards-certifications/page.tsx:220 — Descripción: al borrar el párrafo de la tarjeta DC-3, la tarjeta quedó solo con título y subtítulo, a diferencia de las tarjetas contiguas que sí explican el estándar. Esto se ve como una eliminación excesiva de contenido, no como una tarjeta terminada. Recomendación: restaurar una descripción breve aprobada para DC-3 o retirar/compactar la tarjeta para que el grid no tenga un bloque incompleto.

## 5. Leftover forbidden strings

- [Alta] src/app/(dev)/proyecto/contenidos/page.tsx:437 — Descripción: queda una ocurrencia visible de la cadena prohibida "zona sísmica 4" bajo `src/`. No está en una ruta `/baumex` ni en un archivo `*-baumex.tsx`, por lo que no cae en la exclusión indicada. Recomendación: cambiar esa frase a "zona sísmica" o moverla fuera del contenido visible si la página `(dev)` debe conservar referencia histórica.
