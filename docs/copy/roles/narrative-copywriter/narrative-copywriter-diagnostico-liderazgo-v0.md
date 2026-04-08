# Diagnóstico — Narrative Copywriter — Liderazgo v0

**Task:** `task-liderazgo-v0.md`
**Angle brief:** `angle-brief-liderazgo-v0.md`
**Fecha:** 2026-04-07

---

## Razón del diagnóstico

La página tenía copy existente que necesitaba reescritura completa. Se detectaron múltiples violaciones canónicas y desalineación estructural con el angle brief.

---

## Estado previo de la página

La página estaba implementada como una secuencia de casos de éxito (Gulfstream, Honeywell, Interiores Aéreos) seguida de un listado de 30 corporaciones. Esto invadía directamente el territorio de casos-de-éxito y trayectoria. Solo un bloque ("Liderazgo familiar") correspondía al territorio asignado por el brief.

---

## Violaciones canónicas detectadas en el copy previo

| Violación | Canon | Copy previo | Corrección aplicada |
|-----------|-------|-------------|---------------------|
| Uso de "Interiores Aéreos" como nombre visible | § 1: prohibido en copy comercial | H2 "Interiores Aéreos: de 5,000 a 550,000..." + párrafos | Eliminado. El caso completo salió de la página (pertenece a casos-de-éxito). |
| "52,200 m²" como cifra principal | § 5: cifra rectora es "550,000 ft²" | "La más reciente: 52,200 m² con certificación LEED Gold" | Eliminado. Los detalles constructivos de Gulfstream salen de esta página. |
| "30 corporaciones" como cifra | § 9: cifra oficial es "33 corporaciones internacionales" | H2 "30 corporaciones internacionales en 7 sectores" | Eliminado. La sección completa de listado de clientes salió de la página. |
| "30 años con Honeywell" | § 12: formulación oficial es "más de 3 décadas" | Stats bar: "30+ años con Honeywell" | Corregido a "más de 3 décadas" en bloque de resultados. |

**Tipo de discrepancias:** Todas locales (naming, cifra, wording). Ninguna afecta la arquitectura del ángulo. Se aplicó la corrección y se sigue.

---

## Discrepancias brief vs canon

| Punto | Brief dice | Canon dice | Acción |
|-------|-----------|------------|--------|
| Antigüedad Baumex | "30 años" (fact #2) | § 6: "30 años" | Sin discrepancia. |
| Gulfstream | "más de 35 años" (fact #3) | § 11: "más de 35 años" | Sin discrepancia. |
| Honeywell | "más de 3 décadas" (fact #9) | § 12: "más de 3 décadas" | Sin discrepancia. |

No hubo discrepancias entre el brief y el canon.

---

## Cambios estructurales aplicados

### Bloques eliminados (salieron de la página)

1. **Caso Gulfstream completo** — Incluía detalles constructivos (LEED Gold, BRB, 10 MW, 52,200 m²). Esos facts pertenecen a proyectos-especializados, LEED y Baumex. Lo que se conserva de Gulfstream es solo el dato de relación: 35 años + asignación directa, como prueba de lo que produce el modelo de liderazgo.

2. **Caso Honeywell completo** — Incluía túnel de viento (3,000 HP, ductos de placa), ISN "Recomendado", Mission 1/2/3. Esos facts pertenecen a proyectos-especializados, certificaciones y casos-de-éxito. Lo que se conserva es la mención breve de permanencia (más de 3 décadas).

3. **Caso Interiores Aéreos** — Nombre prohibido por canon § 1. Además, el caso de crecimiento 110x pertenece a casos-de-éxito. Eliminado completamente de esta página.

4. **Listado de 30/33 corporaciones** — Es trayectoria. Eliminado.

### Bloques nuevos (implementados desde el brief)

1. **Hero + tesis** — Comunica la tesis del brief: la persona que negocia es la que decide, supervisa y va a seguir ahí. Stats: 60+ años, 4 dueños, 3 generaciones, 80% repeat.

2. **Quiénes son** — 4 cards con nombre, rol y consecuencia para el comprador. Cada card traduce el rol a lo que significa para el proyecto del comprador.

3. **La continuidad que no se rota** — Armando Wilhelmy (30 años, co-fundador de Baumex) + tercera generación activa. Extiende la continuidad más allá de la familia.

4. **Lo que produce este modelo** — 3 cards de resultado: Gulfstream (relación, no construcción), Honeywell (mención breve), 80% repeat business. Framed como consecuencias del modelo de liderazgo, no como casos independientes.

5. **Cierre + CTA** — "Conoce al equipo que va a atender tu proyecto" + botón de contacto.

### MosaicoLiderazgo (componente visual)

Se actualizaron las 4 cards del mosaico para alinearse con el territorio de liderazgo:
- Card "60 años desarrollando..." → "La familia fundadora sigue operando"
- Card "80% de clientes regresan" → Actualizada con formulaciones canónicas (35 años, 3 décadas)
- Card "Tres generaciones, un mismo compromiso" → "Tres generaciones, cuatro dueños operando" + nombres
- Card "De 5,000 a 550,000 ft²" (Interiores Aéreos) → "30 años dirigiendo la construcción" (Armando Wilhelmy)

Se corrigió la violación canónica de "Interiores Aéreos" que existía en la card original.

---

## Consultas externas

No se consultó VF-report ni fuente primaria durante la implementación. Toda la información necesaria estaba en el angle brief y en aclaraciones canónicas.

---

## Decisiones narrativas

### Prominencia en headings

- **H1:** La tesis del brief directamente — "Quien negocia tu contrato es quien decide..." No la marca Gulfstream (eso desplazaría a casos-de-éxito). No "empresa familiar" (sentimentalismo). El heading comunica la consecuencia operativa.

- **H2 del bloque de personas:** "Las personas que van a atender tu proyecto — con nombre, rol y autoridad". Directo, operativo. No "Nuestro equipo" ni "La familia Nelson".

- **H2 del bloque Armando:** Su nombre propio en el heading. Es el dato de prominencia más fuerte de ese bloque: una persona con 30 años de continuidad.

- **H2 del bloque de resultados:** Gulfstream en el heading porque es la prueba más fuerte de lo que produce el modelo. Pero enmarcada como relación ("con los mismos dueños — y dejó de licitar"), no como caso constructivo.

### Distribución de peso

- **Bloque más pesado:** "Quiénes son" (4 cards). Ocupa más espacio visual porque es el dato central de la página según el brief.
- **Bloque más ligero:** "Continuidad" (Armando + tercera generación). Dos párrafos. Suficiente para comunicar el punto sin convertirse en biografía.
- **Bloque de resultados:** Peso intermedio. 3 cards compactas que demuestran consecuencia sin desplegar narrativa de caso.
