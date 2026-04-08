# Diagnóstico — Narrative Copywriter — Normas, Certificaciones y Estándares v0

**Task:** `task-normas-certificaciones-estandares-v0.md`
**Fecha:** 2026-04-07
**Angle brief:** `angle-brief-normas-certificaciones-estandares-v0.md`
**Archivo modificado:** `src/app/experiencia/normas-certificaciones-estandares/page.tsx`

---

## Qué se hizo

Reestructuración completa del copy según la taxonomía de tres capas definida en el angle brief. La página anterior presentaba los estándares en lista plana. La nueva implementación los organiza en tres secciones con encuadre comercial diferenciado.

---

## Discrepancias detectadas (brief vs canon vs implementación previa)

### 1. "LEED Gold" → "certificación LEED" (LOCAL — resuelta)

**Dónde estaba:** La implementación previa decía "LEED Gold" en el stats strip, en el H2 de la sección LEED y en el CTA.

**Qué dice el canon:** Aclaraciones canónicas § 13 autoriza "Baumex puede construir desarrollos con certificación LEED" sin especificar nivel.

**Qué dice el brief:** "Certificación LEED en nave Gulfstream 550K. Actualmente 53-55 puntos, apuntando a Gold con paneles solares" y "En proceso — nivel exacto (Silver vs Gold) pendiente de confirmación." La sección "Mención subordinada, no protagonista."

**Resolución:** Se cambió a "certificación LEED" y "en proceso de certificación LEED" en toda la página. Se eliminó "Gold" de todos los contextos. Se alinea con el brief y con canon.

### 2. Cifra rectora Gulfstream: 52,200 m² → 550,000 ft² (LOCAL — resuelta)

**Dónde estaba:** La implementación previa usaba "52,200 m²" como cifra visible en los bloques de LEED y FM Global.

**Qué dice el canon:** Aclaraciones canónicas § 5: "La superficie oficial y rectora del sistema para la nave Gulfstream 550K es 550,000 ft²." También autorizado: "550K ft²" y "550 mil pies cuadrados." "No usar: 52,200 m² como cifra rectora principal del sistema."

**Qué dice el brief:** Usa "Gulfstream 550K (52,200 m²)" con m² en paréntesis, lo cual es aceptable como dato complementario. Pero para copy comercial visible, la cifra rectora debe ser en ft².

**Resolución:** Se cambió a "550,000 ft²" como cifra principal en todos los bloques comerciales. Se obedece canon § 5.

---

## Cambios estructurales respecto a la implementación previa

| Aspecto | Antes | Después |
|---------|-------|---------|
| Estructura | Lista plana: ISN → LEED → FM → BRB → NOM/NFPA/IBC agrupados | Tres capas: (1) Corporativa, (2) Ingeniería, (3) Regulatoria |
| IBC | Enterrado en lista de normativas al fondo | Capa 2 como bloque propio (estándar de ingeniería) |
| NFPA | Enterrado en lista de normativas al fondo | Capa 2 como bloque propio (protección de parque) |
| OSHA | Ausente | Capa 3 como bloque propio |
| BRB | Dos párrafos con narrativa del terremoto 2010 | Un párrafo, contexto sísmico condensado |
| LEED | Sección propia con "LEED Gold" | Subordinada dentro de Capa 1, sin nivel especificado |
| NOM-009 / NOM-027 / DC-3 | Lista de bullets | Grid de 4 bloques con encuadre de documentación rigurosa |
| CTA | Mencionaba "LEED Gold" | Lenguaje genérico de tres capas |
| Metadata | "Certificaciones \| Grupo Nelson", mencionaba "LEED Gold" | "Normas, Certificaciones y Estándares \| Grupo Nelson", sin nivel LEED |

---

## Decisiones narrativas

### Prominencia de headlines

- **ISN:** Marca (Honeywell) + validación ("Recomendado") en el H3. No en eyebrow.
- **LEED:** Subordinada. Certificación + proyecto de referencia (Gulfstream 550,000 ft²). Sin protagonismo.
- **FM Global:** Marca + evidencia (envolvente certificada) en H3.
- **IBC:** Hecho directo en H3: "códigos internacionales, no locales." La fuerza viene del contraste.
- **BRB:** "Primera implementación en Mexicali" en H3. No dice "certificación."
- **NFPA:** Encuadre de parque, no de nave individual.
- **Capa 3:** Cada norma con su propio bloque en grid. Encuadre introductorio que redefine el valor: no es que existan, es cómo se documentan.

### Distribución de peso

- Capa 1 (corporativa): ISN tiene el mayor peso individual de la página. LEED es breve con link de salida.
- Capa 2 (ingeniería): Cuatro bloques de peso similar. FM Global ligeramente más desarrollado por el argumento de primas.
- Capa 3 (regulatoria): Grid compacto. El peso está en el encuadre introductorio ("la diferencia es cómo se documenta"), no en cada norma individual.

---

## No se consultaron fuentes externas

No se consultó VF-report ni fuente primaria. Todos los facts vienen del angle brief, que ya los filtró y los alineó con canon. No hubo necesidad de spot-checks.
