# Task v0 — Angle Architect — Index (Homepage)

## Modo

Descubrimiento desde cero. No existe angle brief para la homepage.

---

## Orden de lectura antes de ejecutar

Lee estos documentos en este orden:

1. `docs/copy/constitucion-v0-copy-brandpetram.md`
2. `docs/copy/guia-fuentes-del-negocio-y-limites-de-lectura.md`
3. `docs/copy/roles/angle-architect/angle-architect.md`
4. `docs/copy/roles/context-curator/context-curator-report-v0.md`
5. `docs/copy/roles/value-finder/value-finder-report-v0.md`
6. `docs/copy/aclaraciones-canonicas.md`
7. Esta task
8. Paquete mínimo obligatorio de fuentes primarias (abajo)
9. Spot-check selectivo si hace falta

---

## Sección asignada

`/` — la homepage del sitio (`src/app/page.tsx`)

---

## Territorio

Esta página es la puerta de entrada. Es lo primero que ve el comprador. Su función no es argumentar, demostrar ni profundizar en ningún tema — eso lo hacen las páginas interiores. Su función es hacer que el comprador entienda en segundos quién es Grupo Nelson, qué hace, y por qué vale la pena seguir explorando.

No es un resumen ejecutivo de todo el sitio. No es un catálogo de servicios. No es un pitch de ventas. Es la primera impresión — y la primera impresión decide si el comprador sigue o se va.

Su territorio se define por exclusión de los 8 briefs existentes:

- No es diferenciación (eso argumenta los 3 diferenciadores verificables) → `docs/copy/angle-briefs/diferencia-nelson.md`
- No es casos de éxito (eso demuestra calibre de clientes por sus estándares) → `docs/copy/angle-briefs/casos-de-exito-experiencia.md`
- No es excelencia operativa (eso muestra el método de ejecución semana a semana) → `docs/copy/angle-briefs/excelencia-operativa.md`
- No es certificaciones / normas y estándares (eso demuestra cumplimiento normativo) → `docs/copy/angle-briefs/certificaciones.md` y `docs/copy/roles/angle-architect/angle-brief-normas-certificaciones-estandares-v0.md`
- No es proyectos especializados (eso cuenta 4 problemas sin solución estándar) → `docs/copy/angle-briefs/proyectos-especializados.md`
- No es LEED (eso vende la decisión de certificar) → `docs/copy/angle-briefs/leed.md`
- No es liderazgo (eso presenta a las personas que atienden el proyecto) → `docs/copy/roles/angle-architect/angle-brief-liderazgo-v0.md`

Lee esos briefs para saber qué territorio NO puedes invadir. La homepage puede **señalar** hacia esos territorios (como puerta de entrada que es), pero no debe **argumentar** lo que cada página ya argumenta por su cuenta.

---

## Contexto del estado actual

La homepage actual (`src/app/page.tsx`) tiene componentes montados pero con copy genérico o lorem ipsum en varios bloques (Mosaico2ConProps, MosaicoInvertidoConProps, CirculosConProps). Otros componentes tienen copy funcional pero no alineado a un ángulo definido (FAQs, CincoCards, HeroVideoCover + TarjetaHeroOriginal).

Tu trabajo como Angle Architect no es decidir layout ni componentes. Es descubrir el ángulo, la tesis y la secuencia conceptual que la homepage necesita. El Narrative Copywriter y el builder se encargarán después de traducir eso a copy y componentes reales.

---

## Paquete mínimo obligatorio de fuentes primarias

- `docs/copy/brief-de-cliente-grupo-nelson.md`
- `docs/estrategia/02-resumen-charlas-con-duenos.md`
- `docs/copy/buyer-persona-para-grupo-nelson.md`
- `docs/copy/temario-desarrolladora-grupo-nelson.md`
- `docs/copy/desempaquetado-nelson-desarrolladora.md`

---

## Fuentes disponibles para spot-check

Solo si un fact clave necesita validación o contexto extra:

- `docs/meetings/2026/Meeting started 2026_03_04 11_59 CST - Notes by Gemini.md`
- `docs/meetings/2026/Meeting started 2026_03_06 11_50 CST - Notes by Gemini.md`
- `docs/meetings/2026/Reunion-con-Armando-Wilhelmy-Meeting started 2026_03_12 17_02 CST - Notes by Gemini.md`
- `docs/copy/constructora/temario-baumex.md`
- `docs/copy/constructora/desempaquetado-comercial-baumex.md`
- `docs/copy/constructora/portafolio-proyectos-baumex.md`
- `docs/specs/portafolio-completo-baumex.md`
- `docs/specs/nelson-ii-especificaciones.md`
- `docs/enviados-por-susana/contexto-info-susana.md`

---

## Reglas

- No cambies el territorio. Descubre el ángulo que lo justifica.
- Obedece `aclaraciones-canonicas.md` sobre cualquier conflicto de datos.
- Si descubres un conflicto nuevo no cubierto por canon ni por CC-report, márcalo como riesgo nuevo — no lo resuelvas por tu cuenta.
- Puedes discrepar del ranking de Value Finder, pero explica por qué.
- No invadas territorio de las otras 8 secciones con brief.
- La homepage puede **señalar** territorios de las páginas interiores (como puerta de entrada), pero no debe **desarrollar** el argumento de ninguno. La frontera es: una línea que invita a explorar más → sí. Un párrafo que intenta convencer con el mismo argumento que la página interior → no.
- Declara qué fuentes primarias leíste y si hiciste spot-checks adicionales.
- Recuerda: el comprador de la homepage no es el mismo que ya está en una página interior. El de la homepage todavía no sabe si le interesa Grupo Nelson. Tu ángulo debe resolver eso.

---

## Recordatorio

El brief de esta task debe escribirse como `angle-brief-index-v0.md` en esta misma carpeta (`docs/copy/roles/angle-architect/`). La versión del brief siempre coincide con la versión de la task.
