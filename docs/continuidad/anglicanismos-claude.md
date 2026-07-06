# Anglicismos en el sitio ES — clasificación y decisión de traducción

> Fecha: 2026-05-11. Documento de trabajo para el sweep de traducción ES.
> Búsqueda exhaustiva sobre `src/app/es/**`, `src/components/**` (defaults bilingües) y `src/data/**`.

El cliente pidió que el sitio en español no tenga anglicismos. La auditoría detectó ~60 términos únicos. No todos conviene traducirlos: algunos son marcas registradas, normas internacionales o nombres propios de instituciones que en español se mencionan exactamente igual que en inglés. Este documento separa las dos listas y fija **una sola sustitución por palabra** para los que sí se van a traducir.

---

## Lista A — anglicismos que SÍ se traducen

Cada entrada da una única decisión de reemplazo. La regla es: si la palabra inglesa tiene una traducción natural que un lector hispanohablante usaría espontáneamente, se traduce.

### A.1 — Comerciales y de negocio

| Anglicismo | Reemplazo |
|---|---|
| built-to-suit / Built-to-Suit / BUILT-TO-SUIT / BTS | **a la medida** |
| nearshoring | **relocalización industrial** |
| turnkey | **llave en mano** |
| in-house / in house | **interno** |
| compliance | **cumplimiento** |
| due diligence | **evaluación previa** |
| brief / Brief | **anteproyecto** |
| brochure | **folleto** |
| repeat business | **clientes recurrentes** |
| ownership / Ownership directo | **operación directa** |
| accountability | **responsabilidad** |
| track record / Track Record | **trayectoria** |
| moat | **ventaja competitiva** |
| Cost Engineer | **ingeniero de costos** |
| Project Executive / Project Executives | **director de proyecto** / **directores de proyecto** |
| Project Manager | **gerente de proyecto** |
| crews | **cuadrillas** |
| Weekly Reports | **reportes semanales** |
| Tenant Improvement | **obra interior** |
| workflow | **flujo de trabajo** |

### A.2 — Técnicos de construcción

| Anglicismo | Reemplazo |
|---|---|
| HVAC | **climatización** |
| layout / Layout | **distribución** |
| fire protection | **protección contra incendios** |
| submittal / submittals | **entregables técnicos** |
| long lead items | **equipos de larga entrega** |
| carports | **marquesinas** |
| fixtures (sanitarios) | **accesorios sanitarios** |
| blower / blowers | **soplador** / **sopladores** |
| dashboards / boards | **tableros** |
| retrofit | **remodelación** |
| predesign | **anteproyecto** |
| scorecard / Scorecard de Seguridad / Scorecard HSE | **tabla de indicadores** |
| HSE | **SSMA** (Seguridad, Salud y Medio Ambiente) |

### A.3 — Técnicos con traducción aceptada

Acrónimos en inglés que ya tienen un equivalente español de uso común en el sector. Se reemplazan sin perder precisión técnica.

| Anglicismo | Reemplazo |
|---|---|
| ESG | **ASG** (Ambiental, Social y Gobernanza) |
| EPD / EPDs | **DAP** / **DAP** (Declaración Ambiental de Producto) |
| HPD / HPDs | **DPS** (Declaración de Producto Saludable) |
| IoT | **Internet de las cosas** |
| MEP | **mecánica, eléctrica y plomería** |
| BMS | **sistema de gestión del edificio** |
| SRI | **índice de reflectancia solar** |

---

## Lista B — anglicismos que NO se traducen

Estos no se reemplazan. Son nombres propios de instituciones, marcas registradas, normas internacionales o estándares cuya forma original es la que el sector usa en español. Cambiarlas confundiría al lector técnico y rompería el SEO sin ganar nada.

### B.1 — Certificaciones y normas internacionales

| Término | Por qué se conserva |
|---|---|
| **LEED** | Norma internacional del USGBC. En todo el sector de construcción sustentable en español se dice "LEED". |
| **NFPA** | Estándar internacional de protección contra incendios. Se cita siempre así. |
| **IBC** | International Building Code. Se referencia como norma técnica con su acrónimo original. |
| **OSHA** | Institución reguladora de EE. UU. Se nombra tal cual cuando se cita. |
| **ASHRAE** | Sociedad técnica internacional. Sus estándares se citan con la sigla. |
| **AISC** / **AISC 341** | Norma técnica de acero estructural. Se cita con acrónimo. |
| **ICC** | International Code Council. Institución, no se traduce. |
| **BD+C** | Subcategoría LEED ("Building Design and Construction"). Jerga propia de LEED. |
| **TPO** | Tipo de membrana de cubierta (Thermoplastic Polyolefin). Es nombre del material. |
| **BRB** / **Buckling-Restrained Braces** | Término técnico estructural especializado, aceptado en literatura estructural en español. Se conserva el acrónimo BRB. La 1ª aparición se acompaña de "arriostres de pandeo restringido" entre paréntesis. |
| **FloorScore** | Marca registrada de certificación de pisos. |

### B.2 — Marcas, productos e instituciones

| Término | Por qué se conserva |
|---|---|
| **FM Global** / **FM Approvals** | Marca comercial de la aseguradora. Es el nombre del proveedor del estándar; cambiarlo lo hace irreconocible. |
| **USGBC** | U.S. Green Building Council. Institución que emite LEED. |
| **GBCI** | Green Business Certification Inc. Institución certificadora. |
| **ISN** / **ISNetworld** | Plataforma comercial de validación de contratistas. Nombre de producto. |
| **Fortune 500** | Nombre propio del ranking de la revista Fortune. No tiene traducción. |
| **Honeywell Mission** (Mission 1, 2, 3) | Nombre propio de las naves del cliente Honeywell. Igual que cualquier topónimo. |

### B.3 — Acrónimos del LEED que se quedan tal cual

Estos forman parte del vocabulario LEED tal como se usa en su versión en español publicada por el USGBC. No se traducen ni se expanden en el copy.

- **HHT** (horas hombre trabajadas) — siglas en español, ya estaba bien.
- Unidades imperiales (**ft**, **ft²**, **HP**, **MW**, **kWh**, **°F**) — son unidades, no anglicismos.

---

## Notas para la ejecución

1. **Metadatos SEO.** Los `description` de metadata (en `parques-industriales-mexicali/*/page.tsx`, `nelson/*/page.tsx`, `constructora/*/page.tsx`, `noticias/page.tsx`, `blog/(root)/layout.tsx`) llevan "built-to-suit" 8+ veces. Cambiarlos cambia las descripciones que aparecen en Google. Es una decisión deliberada — no un descuido — y vale la pena hacerla en una sola tanda para que el cambio de SEO sea consistente.

2. **Primera mención de acrónimos conservados.** Cuando una página menciona por primera vez **LEED**, **NFPA**, **IBC**, **FM Global**, **ISN**, **BRB**, conviene expandir en español entre paréntesis. Ejemplo: "certificación LEED (Liderazgo en Energía y Diseño Ambiental)" la primera vez en la página, y luego solo "LEED". Esta es una regla de copy, no un cambio de cada ocurrencia.

3. **Bilingüe ES/EN.** Casi todos los reemplazos solo aplican al lado español. La regla bilingüe del proyecto (lo que cambia en /es no replica en /en automáticamente cuando se trata de traducir anglicismos) **vale en este caso**: el inglés conserva su vocabulario en inglés. Solo se editan los bloques `text.es` (no `text.en`) y los archivos bajo `src/app/es/`.

4. **Excepciones puntuales que conviene revisar caso por caso:**
   - "Project Manager", "Project Executive", "crews" — el copy actual los usa como cargos formales internos de Baumex. Antes de reemplazar conviene confirmar con el cliente que los puestos en su organigrama interno también se nombran en español (es probable que sí — "Director de Proyecto", "Gerente de Proyecto", "Cuadrillas").
   - "Honeywell Mission" se conserva (nombre del proyecto del cliente).
   - "Fortune 500" se conserva, pero la frase "empresas Fortune 500" puede sustituirse contextualmente por "grandes corporaciones globales" cuando no aporta el ranking en sí — esto es decisión editorial caso por caso, no reemplazo automático.

5. **Términos del comentario interno / dev.** En `casos-de-exito/page.tsx:25` hay un "layout en construcción" dentro de un comentario `/* */`. Es comentario interno, no se ve en pantalla; no se toca.

---

## Resumen para reportar al cliente

- **~45 términos en la lista A**: se traducen al español con una sustitución única definida.
- **~16 términos en la lista B**: se conservan en inglés porque son normas, marcas o instituciones internacionales cuyo nombre español no existe o no es reconocible en el sector.
- El término con mayor impacto operativo es **"built-to-suit"**: aparece en 18+ archivos, incluyendo metadata SEO. Cambiarlo a "a la medida" es la decisión más visible de toda la operación.
