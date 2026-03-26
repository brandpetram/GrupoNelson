# Plan: Terminar las 8 secciones del flyout Constructora

> Documento vivo. Se actualiza conforme avanzamos.
> Este plan también es un **método** — cada paso que refinemos aquí se reutiliza en el siguiente flyout.
> Fecha de inicio: 2026-03-26

---

## Objetivo

Terminar completamente las 8 secciones del flyout "Constructora": copywriting aprobado + componentes Brandpetram correctos + responsive + revisado.

---

## Las 8 secciones y su estado actual

### Ya terminadas (solo revisión final al cierre)

| # | URL | Estado |
|---|-----|--------|
| 5 | `/constructora/certificacion-leed` + hub LEED | Terminada. Revisión final al cierre. |
| 7 | `/constructora/portafolio` | Terminada. Tabla de datos. |

### Tier 1 — Revisar y mejorar (las más avanzadas)

| # | URL | Componentes | Copy | Pendiente |
|---|-----|------------|------|-----------|
| 1 | `/constructora/baumex` | 12 componentes (Mu–Psi), hardcoded sin props | Copy nuevo aprobado en `nuevo-copy-para-secciones-baumex.md` — pendiente migrar a componentes. Algunos componentes tienen lorem ipsum (Omicron, Pi, Rho, Sigma, Phi fueron vaciados). | Migrar copy aprobado → componentes. Verificar que cada componente muestre el contenido correcto. Revisar responsive. |
| 2 | `/constructora/diseno-e-ingenieria` | 10+ componentes con props, copy real integrado | Copy nuevo aprobado en `nuevo-copy-para-secciones-baumex.md`. Copy ya migrado a componentes con props. | Revisar copy vs documento aprobado (¿coinciden?). Revisar responsive. Pulir detalles. |

### Tier 2 — Trabajo moderado

| # | URL | Componentes | Copy | Pendiente |
|---|-----|------------|------|-----------|
| 3 | `/constructora/build-to-suit` | 5 componentes (Hero video + Beta, Gamma, Delta, Epsilon), hardcoded | Copy nuevo aprobado en `nuevo-copy-para-secciones-baumex.md`. Hay copy sin usar almacenado (detalle de 4 proyectos). | Migrar copy aprobado → componentes. Los componentes son genéricos (letras griegas) — verificar si el contenido actual coincide con el copy aprobado. Decidir si los componentes actuales son los correctos o necesitan reemplazo. |
| 4 | `/constructora/llave-en-mano` | 6 componentes (Zeta–Lambda), hardcoded | Copy nuevo aprobado en `nuevo-copy-para-secciones-baumex.md`. | Mismo que build-to-suit: verificar contenido actual vs copy aprobado, migrar, decidir componentes. |

### Tier 3 — Más trabajo necesario

| # | URL | Componentes | Copy | Pendiente |
|---|-----|------------|------|-----------|
| 6 | `/constructora/estandares-internacionales` | CERO componentes Brandpetram. Copy en HTML crudo (`<h1>`, `<p>`, `<ul>`). | Buen copy directo en JSX (FM Global, NFPA, ISN, NOM, IBC). Status: borrador. | **Todo:** Aprobar copy → elegir componentes Brandpetram → migrar copy a componentes → responsive. Página secundaria = layout simple. |
| 8 | `/constructora/proyectos-especializados` | Mix: HTML crudo con copy arriba + componentes Brandpetram sin props abajo (con lorem ipsum). | Buen copy directo en JSX (Skyworks, Gulfstream, Honeywell, Deacero). Status: borrador. Componentes de abajo tienen lorem ipsum. | **Todo:** Aprobar copy → decidir si mantener componentes de abajo o simplificar → migrar → responsive. Página secundaria = layout simple. |

---

## Método por página (el proceso repetible)

Cada página pasa por estas fases en orden:

### Fase 1 — Copy

1. **Revisar copy existente** — ¿Existe copy aprobado en `/docs/copy/constructora/`? ¿El copy en la página coincide con el aprobado?
2. **Evaluar calidad** — Revisar contra reglas de copywriting B2B (`/Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md`). ¿Cumple las 17 reglas?
3. **Mejorar si es necesario** — Ajustar copy. Actualizar el documento en `/docs/copy/constructora/`.
4. **Aprobación del usuario** — El usuario revisa y aprueba el copy antes de tocar código.

### Fase 2 — Componentes

5. **Decidir componentes** — ¿Los componentes actuales son los correctos para esta página? ¿Necesitan reemplazo? Para páginas Tier 3 (secundarias), preferir layouts simples.
6. **Seleccionar de catálogo** — Revisar componentes disponibles en el catálogo Brandpetram. Proponer al usuario.
7. **Aprobación del usuario** — El usuario decide qué componentes se usan.

### Fase 3 — Integración

8. **Migrar copy → componentes** — Reemplazar lorem ipsum / contenido placeholder con el copy aprobado.
9. **Revisar responsive** — Verificar en todos los viewports (mobile, tablet, desktop, ultrawide).
10. **Usuario prueba en localhost:3000** — El usuario verifica visualmente.

### Fase 4 — Cierre

11. **Ajustes finales** — Correcciones menores que surjan de la revisión visual.
12. **Marcar como terminada** — Actualizar esta tabla.

---

## Orden de ejecución

La prioridad es terminar lo que necesita más trabajo primero, dejando las revisiones de Tier 1 para el final (porque ya están cerca).

| Orden | Página | Razón |
|-------|--------|-------|
| 1 | `estandares-internacionales` (Tier 3) | Cero componentes, necesita todo. Pero es página secundaria = layout simple. |
| 2 | `proyectos-especializados` (Tier 3) | Similar — copy crudo + lorem ipsum en componentes. Página secundaria. |
| 3 | `build-to-suit` (Tier 2) | Tiene componentes pero necesita verificar copy y migración. |
| 4 | `llave-en-mano` (Tier 2) | Mismo que build-to-suit. |
| 5 | `baumex` (Tier 1) | Avanzada pero con componentes vaciados que necesitan copy. |
| 6 | `diseno-e-ingenieria` (Tier 1) | La más avanzada — solo revisar y pulir. |
| 7 | `certificacion-leed` | Revisión final. |
| 8 | `portafolio` | Revisión final. |

---

## Recursos existentes

### Copy
- `/docs/copy/constructora/nuevo-copy-para-secciones-baumex.md` — Copy aprobado para las 4 páginas principales (Baumex, Diseño, Build-to-suit, Llave en Mano). Incluye distribución de datos duros sin repetición.
- `/docs/copy/constructora/benchmark-copy-constructoras-de-naves-industriales-europeas.md` — Benchmark de estilo europeo.
- `/docs/copy/constructora/el-error-que-estamos-cometiendo-al-hablar-demasiado-de-nosotros-mismos-en-lugar-de-lo-que-podemos-hacer.md` — Aprendizaje clave de tono.
- `/docs/copy/constructora/ingenieria/benchmark-ingenieria-constructoras-europeas.md` — Benchmark de ingeniería.

### Datos
- `/docs/fase-2-desempaquetado-comercial-baumex.md` — Desempaquetado de temas comerciales.
- `/docs/4-los-10-temas-comerciales-de-grupo-nelson.md` — Los 10 temas comerciales.
- `/docs/portafolio-completo-baumex.md` — Portafolio completo.

### Reglas
- `/Proyectos/copywriting-b2b/reglas-de-copywriting-b2b.md` — 17 reglas de copywriting B2B.
- `/Proyectos/reglas/design/visual-fingerprint.md` — Fingerprint visual Brandpetram.

---

## Notas del método (se actualiza conforme trabajamos)

_Aquí documentamos lo que aprendemos mientras trabajamos — decisiones, errores, mejores prácticas — para que el siguiente flyout sea más rápido._

- (vacío — se llena conforme avanzamos)

---

## Historial de cambios

| Fecha | Cambio |
|-------|--------|
| 2026-03-26 | Creación del plan. Auditoría de las 8 secciones. |
