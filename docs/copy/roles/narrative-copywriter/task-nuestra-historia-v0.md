# Task v0 — Narrative Copywriter — Nuestra Historia

## Rol

Ejecuta esta task como **Narrative Copywriter**. Lee su definición completa en `docs/copy/roles/narrative-copywriter/narrative-copywriter.md` y adopta ese rol antes de continuar.

---

## Modo

Implementación. La página existe en `src/app/nelson/nuestra-historia/page.tsx`. El angle brief ya fue producido.

---

## Orden de lectura antes de ejecutar

Lee estos documentos en este orden:

1. `docs/copy/constitucion-v0-copy-brandpetram.md`
2. `docs/copy/guia-fuentes-del-negocio-y-limites-de-lectura.md`
3. `docs/copy/aclaraciones-canonicas.md`
4. `docs/copy/roles/narrative-copywriter/narrative-copywriter.md`
5. Esta task
6. `docs/copy/roles/angle-architect/angle-brief-nuestra-historia-v0.md`
7. `src/app/nelson/nuestra-historia/page.tsx` (implementación actual)

---

## Sección asignada

`/nelson/nuestra-historia` — http://localhost:3000/nelson/nuestra-historia

---

## Angle brief vigente

`docs/copy/roles/angle-architect/angle-brief-nuestra-historia-v0.md`

Ese brief es tu contrato editorial. Define el territorio, el ángulo rector, la tesis, qué facts sostienen el ángulo, qué sale, la secuencia de página y los límites.

---

## Estado actual de la página

La página tiene un layout de 3 columnas con contenido casi 100% placeholder (lorem ipsum). Incluye una foto del fundador, una card del Parque Industrial Nelson II, un bloque "Naves Industriales Built-to-Suit" y un componente `StandardsPoster`. El layout existe pero el copy no.

---

## Instrucciones

- Toma el angle brief como contrato editorial. No redefinas el ángulo ni el territorio.
- Convierte la perspectiva, el ángulo y la tesis en copy real implementado en los archivos .tsx de la sección.
- Distribuye peso narrativo entre bloques según lo que indica el brief.
- Comunica valor concreto: cada bloque debe poder señalar qué prueba concreta lo sostiene.
- Recuerda: la historia solo importa si transfiere confianza presente (Axioma 7). Cada dato histórico debe responder la pregunta implícita del comprador: "¿y eso qué me dice sobre lo que va a pasar con mi contrato de 15 años?"
- No conviertas la página en un timeline genérico. La secuencia de la página (brief § 11) pide decisiones con significado, no años con eventos.
- No invadas territorio de liderazgo (quiénes operan hoy), diferencia-nelson (los 3 diferenciadores como argumento) ni casos de éxito (narrativas de clientes desplegadas).
- Presta atención a § 15 de aclaraciones canónicas (Humberto Jr. es tercera generación, el fundador es su abuelo).
- Obedece `aclaraciones-canonicas.md` sobre cualquier dato. Si detectas discrepancia con el brief:
  - **Local** (naming, cifra, wording): obedece el canon, anota en diagnóstico, sigue.
  - **Estructural** (afecta ángulo, tesis o distribución de prueba): detente y escala.
- Si consultas VF-report o fuente primaria, crea diagnóstico obligatorio.
- Si no ocurre ninguna consulta externa ni discrepancia, no hace falta diagnóstico.

---

## Output

**Principal:** copy implementado en `src/app/nelson/nuestra-historia/page.tsx` (y archivos de sección que hagan falta).

**Secundario (si aplica):** `docs/copy/roles/narrative-copywriter/narrative-copywriter-diagnostico-nuestra-historia-v0.md`

---

## Recordatorio

La versión del diagnóstico (si se crea) coincide con la versión de esta task: v0.
