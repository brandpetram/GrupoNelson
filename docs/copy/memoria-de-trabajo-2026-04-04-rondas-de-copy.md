# Memoria de Trabajo — Rondas de Copy 2026-04-04

Fecha: 2026-04-04
Propósito: dejar contexto claro para retomar mañana sin perder el hilo

---

## 1. Qué se hizo hoy

### Páginas cerradas (4)

1. **`/nelson/diferencia-nelson`** — 3 diferenciadores (permanencia, ownership directo, constructora in-house) + bloque de validación (Fortune 500, nave más grande, 80% repeat business, Interiores Aéreos 110x). Brief + implementación + review de Codex. Aprobada.

2. **`/constructora/proyectos-especializados`** — 4 casos con narrativas completas (Skyworks carritos de golf, Gulfstream terremoto→BRB, Honeywell túnel/puertas antisonido, Deacero precisión milimétrica). Reestructurado de cards de 2 líneas a SplitSimpleBP. Brief + implementación + review de Codex. Aprobada.

3. **`/constructora/leed`** — argumento de negocio + moat de clima extremo. Ruta legacy `/constructora/certificacion-leed` eliminada. Copy reescrito dentro del layout existente (HeroMarketing1 + SidebarSticky1 + CarruselLeed). Grids con lorem ipsum limpiados. Brief + implementación + review de Codex. Aprobada.

4. **`/experiencia/casos-de-exito`** — 3 casos fuertes (Gulfstream confianza 35 años, Honeywell ISN Recomendado, Interiores Aéreos 110x) + DHL como caso menor. Cada caso desde la exigencia del cliente, no desde Nelson. Brief + implementación + review de Codex. Aprobada.

### Briefs aprobados pendientes de implementación (1)

5. **`/experiencia/excelencia-operativa`** — brief aprobado con 4 rondas de Codex. Pendiente de implementación.

### Briefs pendientes de crear (1)

6. **`/experiencia/certificaciones`** — no se ha iniciado.

---

## 2. Dónde quedamos

El brief de excelencia operativa está aprobado y listo para bajar a `page.tsx`.

Es la página más compleja de las que hemos trabajado porque tiene:
- franja tipográfica de palabras-artefacto (reemplaza logos por palabras, mismo componente)
- 3 secciones Tailark conservadas que se reescriben completamente
- múltiples componentes propios que necesitan ajuste de copy

---

## 3. Qué sigue mañana

### Paso 1: Implementar `/experiencia/excelencia-operativa`

Leer primero: `docs/copy/angle-briefs/excelencia-operativa.md`

Componentes que se tocan (solo copy, no layout):

1. **`page.tsx`** — quitar imports de `ProductIllustration` si no aplica. Verificar que la secuencia de secciones coincida con el brief.

2. **`logo-cloud-clientes.tsx`** — reemplazar logos por palabras-artefacto. Mismo componente, mismo espacio. Las 10 palabras: ruta crítica, reportes semanales, minutas firmadas, submittals, long lead items, permisos diarios, scorecard HSE, control de calidad, responsables asignados, avance medible.

3. **`como-trabajamos.tsx`** — ajustar copy de los 3 pasos para traducir artefactos a consecuencia ("el reporte llega sin que lo pidas"). Acentos pendientes.

4. **`capacidades-inhouse.tsx`** — reorientar de catálogo de servicios a puntos de control transversales. Reemplazar imágenes Unsplash por fotos reales si existen.

5. **`testimonial.tsx` (Tailark rescatada)** — reescribir completamente. Nueva función: la voz del resultado. Gulfstream 35 años como prueba del método. No debe parecer cita inventada — debe leerse como hecho destacado.

6. **`notes-features.tsx` (Tailark rescatada)** — reescribir completamente. Nueva función: sistema de documentación. Los 4 artefactos que cada proyecto genera (submittals, long lead items, minutas firmadas, ensayos EPGC).

7. **`testimonials-section.tsx` (Tailark rescatada)** — reescribir completamente. Nueva función: 3 dimensiones del control (tiempo, calidad, seguridad). No 3 proyectos ni 3 clientes.

8. **`cta.tsx`** — verificar que el copy cierre con la tesis de excelencia operativa.

### Paso 2: Review de Codex

Después de implementar, mandar a review.

### Paso 3: Brief de `/experiencia/certificaciones`

Si hay tiempo después de cerrar excelencia operativa:
- el ángulo base ya apareció en la memoria del 2026-04-03: "no son trofeos; son filtros de acceso"
- posibles ángulos: estándares que permiten que corporativos globales te aprueben, pruebas de que la obra resiste auditoría

---

## 4. Reglas operativas que se establecieron hoy

### Regla de layout vs copy

Las rondas de copy NO cambian layout ni componentes por defecto. Solo excepción justificada si: (1) el layout no puede expresar el ángulo, (2) hay limitación real del componente, (3) se explica antes de implementar.

Origen: error con LEED donde se reemplazó el layout completo por confusión sobre la URL activa.

Documentada en: `docs/copy/critic-loop-v0-copy-brandpetram.md` (sección 10) y memoria persistente.

### Concepto de relevancia operacionalizado

No basta con que un ángulo sea poderoso — también debe ser relevante. Integrado al critic loop como criterio de evaluación, tipo de hallazgo ("ángulo desplazado") y regla del crítico (regla 7).

---

## 5. Cambio de prioridad registrado

Las 3 páginas prioritarias son:
1. `/experiencia/casos-de-exito` — **cerrada**
2. `/experiencia/excelencia-operativa` — brief aprobado, **siguiente en implementar**
3. `/experiencia/certificaciones` — pendiente de brief, **después de excelencia**

Orden de ejecución mañana: primero implementar excelencia-operativa, después brief de certificaciones. No al revés.

La cola anterior (`diseno-e-ingenieria`, `nuestra-historia`, `liderazgo`, etc.) está detenida hasta cerrar estas 3.

---

## 6. Estado del tracker

- `5` angle briefs aprobados
- `4` implementaciones hechas
- `4` páginas totalmente aprobadas
- `1` implementación pendiente (excelencia-operativa)
- `1` brief pendiente de crear (certificaciones)

Tracker vive en: `docs/copy/tracker-rondas-copy-grupo-nelson.md`
