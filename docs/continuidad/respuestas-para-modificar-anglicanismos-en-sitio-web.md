# Respuestas de Grupo Nelson para modificar anglicismos en el sitio web

> Fecha de inicio: 2026-06-01.
> **Qué es:** registro de las preguntas/propuestas que Brandpetram (Luis) le envió a Grupo Nelson sobre qué anglicismos traducir en el sitio en español, con la respuesta del cliente a cada una, y la lista ejecutable de cambios que se deriva.
> **Estado:** ✅✅ **APROBADO — LUZ VERDE PARA EJECUTAR** (2026-06-01). El cliente confirmó por escrito la Sección A completa y cerró la Sección B (ver **Q11**). A1-A4 resueltos. Toda la tabla (A-G) es ejecutable. El sweep afecta metadatos SEO y el cliente lo autorizó explícitamente. **Solo sitio español** (`src/app/es/**` + bloques `es:` de componentes compartidos); no tocar `(en)/`, ni el lado `en:`, ni slugs/imports/CSS/comentarios.
> **Documentos relacionados:** `anglicanismos-master.md` (decisión editorial previa, subordinada a este doc), `anglicanismos-claude.md`, `anglicanismos-codex.md`, `anglicanismos-gemini.md`.

---

## Cómo leer este documento (instrucciones para una IA que lo procese)

**Precedencia de fuentes, de mayor a menor autoridad:**

1. **CANÓNICO** — Respuesta de Grupo Nelson (bloques `🟢 CLIENTE — CANÓNICO`). Cierra la duda. Manda sobre todo.
2. **HEREDADO** — `anglicanismos-master.md`. Vale solo donde el cliente no se pronunció.
3. **INFERENCIA** — Lectura nuestra (bloques `🔵 INFERENCIA`). NO es instrucción del cliente. Puede estar equivocada.

**Reglas duras:**

- **Nunca** ejecutes un cambio tratando un bloque `🔵 INFERENCIA` como orden del cliente. Si CANÓNICO e INFERENCIA chocan, gana CANÓNICO.
- Si dos respuestas del cliente chocan, **gana la más reciente y la más específica** (una decisión término-a-término vence a una regla general anterior).
- **La única lista ejecutable es la "Tabla de decisiones accionables" al final.** No ejecutes leyendo la prosa; ejecuta leyendo la tabla.
- Campo `fuente`: `cliente` (confirmado, ejecutable) · `maestro` (heredado, ejecutable) · `provisional` (propuesto por el cliente pero **pendiente de aprobación de directivos — NO ejecutar**) · `inferido` (tentativo, no ejecutar sin confirmación) · `pendiente` (sin resolver, no ejecutar).
- Si el cliente contradice al maestro, no lo "corrijas": marca `fuente: cliente` y anota el conflicto.

---

## ⭐ DECISIÓN FINAL DEL CLIENTE (gobierna todo el documento)

> **El sitio web en español NO tendrá anglicismos — salvo palabras cuya naturaleza no tenga traducción como tal.**
> — Grupo Nelson (Q5).

**Test operativo (Q3):** ¿el término tiene equivalente en español estándar reconocido por el comprador Clase A? **Sí →** traducir, una sola forma, uniforme en todo el sitio (P4). **No →** mantener en inglés.

**Matiz SEO (Q8, aprobado):** en los términos de **alta búsqueda en Google** (built-to-suit, nearshoring, cold storage, clear height) se traduce, pero se deja el inglés **entre paréntesis solo en la 1ª mención** de cada página; después, solo la forma en español.

**Excepciones a "cero anglicismos" autorizadas por el cliente:** intraducibles (normas, siglas, nombres propios) + **"Blog"** (Q6, avalado por RAE).

---

## Acciones pendientes de Brandpetram

| ID | Acción | Origen | Estado |
|----|--------|--------|--------|
| A1 | Paréntesis-SEO de nearshoring/built-to-suit/cold storage/clear height. | Q2/Q8 | ✅ resuelto (Q8). |
| A2 | *ownership* → forma final. | Q6/Q11 | ✅ resuelto — **"operación directa"** (Q11). |
| A3 | Autorización por escrito del sweep (afecta metadatos SEO). | Q6/Q11 | ✅ resuelto — **luz verde explícita** (Q11). |
| A4 | *Cross-dock, Shell, Greenfield, Brownfield* — aprobación. | Q9/Q11 | ✅ resuelto — aprobados (Q11); directivos validan sobre el diseño final, no bloquea. |
| A5 | Dar al cliente un **tiempo estimado** del sweep (lo pidió en Q11). | Q11 | ⏳ pendiente |

---

## Contexto: preguntas/propuestas enviadas y respuestas del cliente

### Q1 · Audiencia bilingüe — **🟢** *"nuestra página principal es la de inglés… el bilingüe tiene como primera opción el site en inglés."* → el ES queda para el lector hispanohablante; se traduce con más libertad.

### Q2 · SEO de términos en inglés — **🟢** *"…seguirán existiendo en la página en inglés… o nos equivocamos?"* → la traducción se confirma; el paréntesis-SEO se resolvió en Q8.

### Q3 · Sin equivalente + consistencia — **🟢** *"Los términos que carecen de una traducción estándar al español se mantendrán en inglés… mantenga la consistencia… (built to suit en un párrafo y construcción a la medida en otro)."* → P3 (sin equivalente→inglés) y P4 (una forma por término). ⚠️ Clear Height/Shell/Greenfield se citaron como ejemplos de "mantener inglés", pero las respuestas término-a-término posteriores (Q7/Q8/Q9) los **traducen** → gana lo más específico.

### Q4 · Cercanía vs. importación — **🟢** *"El inglés es nuestro idioma principal… complementamos con una versión en español para atender… a la industria nacional."* → refuerza Q1.

### Q5 · Decisión final — **🟢** *"Siempre y cuando la naturaleza de la palabra no tenga traducción como tal."* → cero anglicismos, salvo intraducibles. Es el banner.

---

### Q6 · Grupo 1 ("no hay problema en traducir")

- **Estado:** ✅ respondido (line-edits) · ⚠️ casi todo es propuesta NUESTRA; Luis marcó las líneas del cliente.

**Propuesta (Brandpetram):** built-to-suit→construcción a la medida · turnkey→llave en mano · in-house→interno/a · compliance→cumplimiento · brochure→folleto · track record→trayectoria · repeat business→clientes recurrentes · ownership→propiedad · accountability→responsabilidad · workflow→flujo de trabajo · brief→anteproyecto · Cost Engineer→ingeniero de costos · Project Executive/Manager→director/gerente de proyecto · crews→cuadrillas · Weekly Reports→informes semanales · Tenant Improvement→adecuaciones/mejoras del cliente · moat→ventaja competitiva · broker→asesor inmobiliario · leasing/Lease→arrendamiento · Landlord→arrendador · Developer→desarrollador · showroom→sala de exhibición · benchmark→referencia/estándar de desempeño · performance→desempeño · Blog→artículos.

**🟢 CLIENTE — CANÓNICO (verbatim):**

> - "construcción a la medida"
> - "estamos en duda si el término correcto es: propiedad" lo revisamos
> - "adecuaciones/mejoras del cliente"
> - "…estándar de desempeño dependiendo del contexto"
> - "Aunque la traducción más certera es Bitácora, el término Blog es anglicismo que está avalado por la RAE y se usa universalmente."

**🔵 INFERENCIA:** Las ~21 líneas no anotadas quedan **aceptadas sin objeción**. built-to-suit→"construcción a la medida" (confirmado). **ownership** queda **pendiente** (A2). **benchmark** varía por contexto (excepción a P4). **Blog** → el cliente decide **NO traducir** (excepción a P6). Tenant Improvement confirmado pero hay que elegir UNA forma.

---

### Q7 · Grupo 2 (técnicos de construcción)

- **Estado:** ✅ respondido (line-edits).

**Propuesta (Brandpetram):** layout→distribución · fire protection→protección contra incendios · submittals→entregables técnicos · long lead items→insumos de entrega prolongada · carports→marquesinas · fixtures→accesorios sanitarios · blower→soplador · dashboards→tableros de control · boards→consejos directivos · retrofit→modernización · predesign→prediseño · Design Review→revisión de diseño · Construction Review→revisión de construcción · scorecard→tabla de indicadores · sprinklers→rociadores · jet fans→ventiladores de impulso · checklist→lista de verificación · clear height→altura libre · eave height→altura al alero · vapor barrier→barrera de vapor · cold storage→almacenamiento en frío · last-mile→última milla · fulfillment→despacho · medtech→dispositivos médicos · **categorías LEED** (Water Efficiency→eficiencia del agua, Energy & Atmosphere→energía y atmósfera, Indoor Environmental Quality→calidad ambiental interior, Materials & Resources→materiales y recursos, Sustainable Sites→sitios sostenibles).

**🟢 CLIENTE — CANÓNICO (verbatim):**

> - "fase preliminar de diseño" *(predesign)*
> - "ventiladores de inducción" *(jet fans)*
> - "altura de muro lateral" *(eave height)*
> - "En construcción es cumplimiento de obra o Entrega integral hay que ver el contexto para definir la traducción correcta y no perder el significado." *(fulfillment)*
> - "Tecnología médica, también viendo que aplica mejor a la redacción" *(medtech)*
> - "LEED no se traduce es una sigla de certificación internacionalmente conocida y usaríamos traducción mixta. La categoría sí se traduce la certificación no." *(LEED)*

**🔵 INFERENCIA:**

- **predesign → "fase preliminar de diseño"** (no "prediseño"). · **jet fans → "ventiladores de inducción"** (no "de impulso"). · **eave height → "altura de muro lateral"** (corrige nuestra "altura al alero").
- **fulfillment** → **según contexto**: "cumplimiento de obra" / "entrega integral" / "despacho". Excepción a P4.
- **medtech** → **"tecnología médica"** (o "dispositivos médicos" según redacción). Contexto.
- **LEED** → **traducción mixta**: las categorías se traducen, la sigla LEED se mantiene.
- **clear height → "altura libre":** el cliente NO objetó esta línea → aceptado. Con Q8 queda "altura libre (clear height)" en 1ª mención. **Revierte la inferencia de Q3 de mantenerlo en inglés.**
- Resto del Grupo 2 sin objeción → aceptado.

---

### Q8 · Paréntesis-SEO en términos de alta búsqueda — **resuelve A1**

**Propuesta (Brandpetram):**

> En las palabras de mayor búsqueda en Google (built-to-suit, nearshoring, cold storage, clear height) proponemos dejar el término en inglés entre paréntesis solamente la primera vez que aparece en la página, para no romper el SEO. Ejemplo: "naves industriales a la medida (build-to-suit)" la primera vez, y después solo "a la medida".

**🟢 CLIENTE — CANÓNICO:**

> De acuerdo.

**🔵 INFERENCIA:** Resuelve **A1** (el cliente elige la opción b). Para esos 4 términos: traducir + inglés entre paréntesis **solo en la 1ª mención** de cada página; luego, solo la forma corta en español. Confirma de paso que **clear height se traduce** ("altura libre").

---

### Q9 · Grupo 3 (zona gris: Cross-dock, Shell, Greenfield, Brownfield)

- **Estado:** ✅ respondido · ⚠️ **provisional — pendiente de directivos (A4)**.

**Propuesta (Brandpetram):** mantener los cuatro **en inglés** (categorías de real estate sin equivalente reconocido por el comprador).

**🟢 CLIENTE — CANÓNICO (verbatim):**

> Nuestra propuesta a reserva de que los directivos lo aprueben:
> Cross-dock → Cruce de andén
> Shell → Nave en Obra gris
> Greenfield → Proyecto desde cero y podemos poner entre paréntesis la palabra en inglés greenfield.
> Brownfield → Reurbanización industrial de igual manera se puede poner la palabra en inglés brownfield.

**🔵 INFERENCIA:** El cliente **rechaza** nuestra recomendación de mantenerlos en inglés y propone **traducirlos**, pero **a reserva de aprobación de directivos** → `provisional`, **NO ejecutar** hasta que aprueben (A4). Greenfield/Brownfield llevarían el inglés entre paréntesis. **Revierte** las decisiones previas de "mantener inglés" para Shell/Greenfield/Brownfield/Cross-dock.

---

### Q10 · Grupo 4 (no traducir: normas, siglas, unidades) + casos especiales

- **Estado:** ✅ respondido — **aceptado entero**.

**Propuesta (Brandpetram):** mantener en inglés normas/certificaciones (LEED y niveles, NFPA/13/25, IBC, ASHRAE/62.1/90.1, OSHA, AISC 341, AS9100, NADCAP, C-TPAT, IMMEX, BREEAM, FloorScore). Más: **nearshoring**→relocalización industrial con "(nearshoring)"; **Fortune 500**→mantener sigla, pero "empresas Fortune 500"→"grandes corporaciones globales" donde el ranking no aporta; **HVAC**→"climatización" en copy comercial, "HVAC" en fichas técnicas; **HSE**→"SSMA".

**🟢 CLIENTE — CANÓNICO:**

> De acuerdo, de hecho es nuestra propuesta también, en los primeros párrafos lo mencionamos.

**🔵 INFERENCIA:** Acepta todo el Grupo 4. Quedan confirmados: las normas/siglas en inglés; **nearshoring**→traducir+"(nearshoring)"; **Fortune 500** contextual; **HVAC** según contexto (copy vs. ficha); **HSE→SSMA**.

---

### Q11 · Aprobación final del cliente (LUZ VERDE)

- **Estado:** ✅ **cierra todo** (respuesta al correo de confirmación).

**🟢 CLIENTE — CANÓNICO (verbatim, lo esencial):**

> Sobre la Sección A: ¡Totalmente de acuerdo! Queda aprobada la lista completa de la sección A tal y como la proponen. El dejar el término en inglés entre paréntesis la primera vez para conceptos de alta búsqueda (como nearshoring o built-to-suit) nos parece excelente.
>
> Ownership: De acuerdo con su sugerencia. Utilicemos "operación directa".
> Cross-dock / Shell / Greenfield / Brownfield: Quedan aprobados tal como los propusimos (Cruce de andén, Nave en obra gris, Proyecto desde cero [greenfield], Reurbanización industrial [brownfield]). Los directivos los validarán sobre el diseño final.
> Tenant Improvement: Queda aprobada su propuesta de unificarlo como "adecuaciones del cliente".
> Cluster: De acuerdo en mantenerlo como "clúster" (con acento).
>
> Con estas confirmaciones, tienen luz verde para arrancar con el sweep completo del sitio. Quedamos atentos a que nos indiquen el tiempo estimado.

**🔵 INFERENCIA:** Cierra A1-A4. Toda la tabla (A-G) queda ejecutable. Pendiente solo dar al cliente un **tiempo estimado** (A5); después el cliente hará una revisión final del ES antes de pasar al sitio en inglés.

---

## Principios rectores

| ID | Principio | Fuente |
|----|-----------|--------|
| P1 | El sitio ES es para el lector hispanohablante; el bilingüe entra por el sitio en inglés. | `cliente` (Q1) |
| P2 | El SEO en inglés lo cubre el sitio en inglés. | `cliente` (Q2) |
| P3 | Términos sin traducción estándar reconocida → inglés. | `cliente` (Q3) |
| P4 | Una sola forma por término, uniforme en todo el sitio. **Excepciones autorizadas (varían por contexto): benchmark, fulfillment, medtech, HVAC, Fortune 500.** | `cliente` (Q3/Q6/Q7/Q10) |
| P5 | El inglés es el idioma principal; el ES complementa para la industria nacional. | `cliente` (Q4) |
| **P6** | **Cero anglicismos en el ES, salvo palabras sin traducción "como tal".** Excepciones: intraducibles + "Blog". | `cliente` (Q5/Q6) |
| P7 | En términos de alta búsqueda (build-to-suit, nearshoring, cold storage, clear height): traducir + inglés entre paréntesis solo en 1ª mención. | `cliente` (Q8) |

---

## Tabla de decisiones accionables (ÚNICA lista ejecutable)

> La IA que ejecute el sweep lee **solo esta tabla**. No ejecutar filas `provisional`, `inferido` ni `pendiente`. Aplicar cada decisión **uniforme en todo el sitio** (P4), salvo las marcadas "según contexto".

### A) Traducir — forma única (ejecutables)

| Término | → Traducción | Fuente | Origen |
|---|---|---|---|
| turnkey | llave en mano | `cliente` (Q6) | G1 |
| in-house / in house | interno/a | `cliente` (Q6) | G1 |
| compliance | cumplimiento | `cliente` (Q6) | G1 |
| brochure | folleto | `cliente` (Q6) | G1 |
| track record | trayectoria | `cliente` (Q6) | G1 |
| repeat business | clientes recurrentes | `cliente` (Q6) | G1 |
| accountability | responsabilidad | `cliente` (Q6) | G1 |
| workflow | flujo de trabajo | `cliente` (Q6) | G1 |
| brief | anteproyecto | `cliente` (Q6) | G1 |
| Cost Engineer | ingeniero de costos | `cliente` (Q6) | G1 |
| Project Executive | director de proyecto | `cliente` (Q6) | G1 |
| Project Manager | gerente de proyecto | `cliente` (Q6) | G1 |
| crews | cuadrillas | `cliente` (Q6) | G1 |
| Weekly Reports | informes semanales | `cliente` (Q6) | G1 |
| Tenant Improvement | adecuaciones del cliente | `cliente` (Q6/Q11) | G1 |
| moat | ventaja competitiva | `cliente` (Q6) | G1 |
| broker / brokers | asesor(es) inmobiliario(s) | `cliente` (Q6) | G1 |
| leasing / Lease | arrendamiento | `cliente` (Q6) | G1 |
| Landlord | arrendador | `cliente` (Q6) | G1 |
| Developer | desarrollador | `cliente` (Q6) | G1 |
| showroom | sala de exhibición | `cliente` (Q6) | G1 |
| performance | desempeño | `cliente` (Q6) | G1 |
| layout / Layout | distribución | `cliente` (Q7) | G2 |
| fire protection | protección contra incendios | `cliente` (Q7) | G2 |
| submittals | entregables técnicos | `cliente` (Q7) | G2 |
| long lead items | insumos de entrega prolongada | `cliente` (Q7) | G2 |
| carports | marquesinas | `cliente` (Q7) | G2 |
| fixtures (sanitarios) | accesorios sanitarios | `cliente` (Q7) | G2 |
| blower / blowers | soplador(es) | `cliente` (Q7) | G2 |
| dashboards | tableros de control | `cliente` (Q7) | G2 |
| boards (corporativos) | consejos directivos | `cliente` (Q7) | G2 |
| retrofit | modernización | `cliente` (Q7) | G2 |
| predesign | **fase preliminar de diseño** | `cliente` (Q7) | G2 · corrige "prediseño" |
| Design Review | revisión de diseño | `cliente` (Q7) | G2 |
| Construction Review | revisión de construcción | `cliente` (Q7) | G2 |
| scorecard | tabla de indicadores | `cliente` (Q7) | G2 |
| sprinklers | rociadores | `cliente` (Q7) | G2 |
| jet fans | **ventiladores de inducción** | `cliente` (Q7) | G2 · corrige "de impulso" |
| checklist | lista de verificación | `cliente` (Q7) | G2 |
| eave height | **altura de muro lateral** | `cliente` (Q7) | G2 · corrige "altura al alero" |
| vapor barrier | barrera de vapor | `cliente` (Q7) | G2 |
| last-mile | última milla | `cliente` (Q7) | G2 |
| HSE | SSMA (Seguridad, Salud y Medio Ambiente) | `cliente` (Q10) | G4 |

### B) Traducir + paréntesis-SEO en 1ª mención (P7)

| Término | → 1ª mención / después | Fuente | Origen |
|---|---|---|---|
| built-to-suit / BTS / Build to Suit | "construcción a la medida (build-to-suit)" → luego "a la medida" | `cliente` (Q6/Q8) | G1 · 18+ archivos, incl. metadata SEO |
| nearshoring | "relocalización industrial (nearshoring)" → luego "relocalización industrial" | `cliente` (Q8/Q10) | G4 |
| cold storage | "almacenamiento en frío (cold storage)" → luego "almacenamiento en frío" | `cliente` (Q8) | G2 |
| clear height | "altura libre (clear height)" → luego "altura libre" | `cliente` (Q7/Q8) | G2 · ⚠️ revierte D4 (Q3 sugería inglés) |

### C) Traducir — según contexto (excepciones a P4)

| Término | Opciones según contexto | Fuente | Origen |
|---|---|---|---|
| benchmark | "referencia" o "estándar de desempeño" | `cliente` (Q6) | G1 |
| fulfillment | "cumplimiento de obra" · "entrega integral" · "despacho" | `cliente` (Q7) | G2 |
| medtech | "tecnología médica" · "dispositivos médicos" | `cliente` (Q7) | G2 |
| HVAC | "climatización" (copy comercial) · "HVAC" (fichas técnicas) | `cliente` (Q10) | G4 |
| Fortune 500 | "Fortune 500" (sigla del ranking) · "grandes corporaciones globales" (cuando el ranking no aporta) | `cliente` (Q10) | G4 |

### D) Categorías LEED — traducción mixta (categoría traducida, sigla LEED en inglés)

| Término | → Traducción | Fuente | Origen |
|---|---|---|---|
| Water Efficiency | eficiencia del agua | `cliente` (Q7) | G2 |
| Energy & Atmosphere | energía y atmósfera | `cliente` (Q7) | G2 |
| Indoor Environmental Quality | calidad ambiental interior | `cliente` (Q7) | G2 |
| Materials & Resources | materiales y recursos | `cliente` (Q7) | G2 |
| Sustainable Sites | sitios sostenibles | `cliente` (Q7) | G2 |

### E) Mantener en inglés (ejecutables)

| Término | Fuente | Origen | Notas |
|---|---|---|---|
| **Blog** (etiqueta de navegación) | `cliente` (Q6) | G1 | Difiere de nuestra rec ("artículos"). Excepción RAE. |
| LEED / LEED Gold / Silver / Certified / O+M | `cliente` (Q10) | G4 | Categorías sí se traducen (sección D). |
| NFPA / NFPA 13 / NFPA 25 | `cliente` (Q10) | G4 | |
| IBC, ASHRAE / 62.1 / 90.1, OSHA, AISC 341 | `cliente` (Q10) | G4 | |
| AS9100, NADCAP, C-TPAT, IMMEX, BREEAM, FloorScore | `cliente` (Q10) | G4 | |
| USGBC, GBCI, FM Global, ISN; unidades (ft, USD, °F, PSI…) | `maestro` (alineado con Q10) | maestro §B | No mencionados uno a uno, pero del mismo tipo. |

### F) Traducir — Grupo 3 (aprobado por el cliente en Q11, ejecutable)

> Los directivos los validan sobre el diseño final; no bloquea la ejecución. Greenfield/Brownfield llevan el inglés entre paréntesis.

| Término | → Traducción | Fuente | Origen |
|---|---|---|---|
| Cross-dock | cruce de andén | `cliente` (Q11) | G3 |
| Shell | nave en obra gris | `cliente` (Q11) | G3 |
| Greenfield | proyecto desde cero (greenfield) | `cliente` (Q11) | G3 |
| Brownfield | reurbanización industrial (brownfield) | `cliente` (Q11) | G3 |

### G) Resueltos en Q11 (ejecutables) + pendiente menor

| Término | Decisión | Fuente | Origen |
|---|---|---|---|
| ownership / Ownership directo | **operación directa** | `cliente` (Q11) | G1 |
| cluster | **clúster** (con acento; se conserva hispanizado) | `cliente` (Q11) | de Q5 |
| _Términos del maestro §A no mencionados (due diligence, high bay, edge of dock, in-rack, GDP, BMS, MEP, IoT, ESG, etc.)_ | Sin pronunciamiento explícito → siguen el maestro; revisar caso por caso durante el sweep. | `maestro` | maestro |
