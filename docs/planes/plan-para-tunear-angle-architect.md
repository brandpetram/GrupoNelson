# Plan para tunear Angle Architect

Fecha: 2026-04-08
Estado: pendiente de revisión

---

## Contexto

### Qué es Angle Architect y por qué existe

`Angle Architect` no decide el tema. Descubre la excusa legítima, la perspectiva correcta, el ángulo rector y la tesis que hacen que ese tema merezca existir dentro de su territorio fijo.

No cambia la sección. No redefine el territorio. Lo que hace es:

- descubrir cómo ese territorio se vuelve comercialmente relevante, legítimo y propio de esa página
- decidir desde qué enfoque debe contarse
- decidir qué facts sostienen ese enfoque
- decidir qué debe quedarse fuera para no invadir otras secciones

Su output es un **angle brief**: el documento que deja la página pensada para que escribirla sea más fácil y más consistente.

Es el rol que formula perspectiva, ángulo y tesis. Todo lo demás — reportes de CC y VF, aclaraciones canónicas, lectura primaria — son insumos que alimentan esa formulación, no la reemplazan.

### Dónde estamos

Context Curator y Value Finder ya operan como roles independientes con tasks, reportes y contrato de lectura explícito. Angle Architect es el primer rol que, a partir de esos insumos + fuente primaria selectiva + aclaraciones canónicas, **formula la perspectiva, el ángulo y la tesis** que le dan sentido comercial a cada sección del sitio.

Ya existen **6 angle briefs históricos** en `docs/copy/angle-briefs/`, aprobados e implementados antes de que existieran los reportes de CC y VF. **Liderazgo** es la única sección con worktree activo que no tiene brief.

| Brief | Estado | Worktree |
|---|---|---|
| `casos-de-exito-experiencia.md` | implementado (2026-04-04) | `section/casos-de-exito` |
| `certificaciones.md` | aprobado, reescrito (2026-04-06) | `section/certificaciones` |
| `excelencia-operativa.md` | aprobado (2026-04-04) | `section/excelencia-operativa` |
| `leed.md` | implementado (2026-04-04) | sin worktree |
| `proyectos-especializados.md` | implementado (2026-04-04) | sin worktree |
| `diferencia-nelson.md` | implementado (2026-04-04) | sin worktree |

Los briefs históricos son trabajo previo valioso pero no son parte de la definición del rol. Si en algún momento se decide revisarlos o reemplazarlos, eso será una tarea de transición, no la razón de ser de Angle Architect.

---

## 1. Archivos a revisar para implementar el tuning

### Definición del rol

- `docs/copy/roles/angle-architect/angle-architect.md` — ya leído

### Insumos que consumirá

- `docs/copy/roles/context-curator/context-curator-report-v0.md` — 49 facts, 8 conflictos, 7 ambigüedades, 7 anomalías
- `docs/copy/roles/value-finder/value-finder-report-v0.md` — 28 facts de valor con fuerza, fuente y riesgo

### Capa canónica

- `docs/copy/aclaraciones-canonicas.md` — 13 decisiones canónicas que mandan sobre cualquier conflicto

### Briefs históricos (referencia, no parte del rol)

- `docs/copy/angle-briefs/casos-de-exito-experiencia.md`
- `docs/copy/angle-briefs/certificaciones.md`
- `docs/copy/angle-briefs/excelencia-operativa.md`
- `docs/copy/angle-briefs/leed.md`
- `docs/copy/angle-briefs/proyectos-especializados.md`
- `docs/copy/angle-briefs/diferencia-nelson.md`

---

## 2. Preguntas de diseño

### 2.1 Angle Architect opera por sección, no por negocio

CC y VF leen todo el negocio y producen un reporte global. Angle Architect es distinto: descubre la perspectiva, el ángulo rector y la tesis de **una página específica** — la excusa legítima para que ese territorio merezca existir. Su output es un angle brief por sección.

**Propuesta:** Task por sección. Nomenclatura: `task-{seccion}-v0.md`. Reportes: `angle-brief-{seccion}-v0.md`.

### 2.2 Lectura primaria obligatoria + spot-check

Angle Architect no relee todo el corpus, pero tampoco trabaja solo con reportes.

Cada task define dos capas de lectura primaria:

1. **Paquete mínimo obligatorio** — fuentes primarias que Angle Architect DEBE leer para formar criterio propio sobre el ángulo de esa sección. Se seleccionan por task según el territorio. No es todo el corpus; son las fuentes más relevantes para esa sección.

2. **Fuentes disponibles para spot-check** — el resto del corpus primario. Se consultan solo cuando un fact clave necesita validación o contexto extra.

La razón: si Angle Architect solo lee reportes de otros roles, hereda su juicio en vez de formar el suyo. El paquete mínimo le da base propia para escuchar la voz del negocio y formular una perspectiva que esté sostenida por lo que el negocio realmente dice de sí mismo.

**Diseño de paquetes mínimos por sección:** Se definen al crear cada task. El criterio es: ¿qué fuentes primarias contienen la información más directa sobre el territorio de esta sección? Ejemplo para casos-de-exito: las fuentes donde los dueños hablan de sus clientes principales. Ejemplo para liderazgo: las fuentes donde se describe la estructura familiar y la operación directa.

### 2.3 Jerarquía de autoridad sobre facts

Cuando hay conflicto entre fuentes:

1. **Aclaraciones canónicas manda.** Si ya resolvió el dato, no se reabre.
2. **CC-report para conflictos no resueltos.** Si CC detectó un conflicto que aclaraciones canónicas no cubre, Angle Architect debe marcarlo como riesgo, no resolverlo por su cuenta.
3. **VF-report para ranking de valor.** Angle Architect puede discrepar del ranking de VF, pero debe explicar por qué.

---

## 3. Ambigüedades y contradicciones en el rol actual

### Secciones obsoletas

- **"Inputs mínimos" (línea 138):** Lista genérica ("briefs de cliente o buyer persona cuando existan"). No refleja el sistema de reportes CC/VF ni aclaraciones canónicas. Debe reescribirse como contrato de lectura explícito.

- **"Lectura obligatoria por defecto" (línea 153):** Menciona "brief aprobado de la sección" sin distinguir si es un angle brief histórico o un brief del cliente. Ambiguo.

- **"Formato de salida" (línea 216):** Apunta a `docs/copy/angle-briefs/` como destino, pero la sección "Dónde escribe sus reportes" (línea 5) apunta a `docs/copy/roles/angle-architect/`. Contradicción directa.

- **"Regla de seguridad" (línea 183):** Menciona Context Curator pero no Value Finder. Incompleto.

### Referencias rotas

- Línea 270: ruta a `narrative-copywriter.md` ya no existe (se movió a subcarpeta).
- Líneas 339-340: verificar si las rutas a `prompt-template-angle-architect-re-audit.md` y `workflow-re-auditoria-cuando-cambia-verdad-canonica.md` siguen siendo correctas.

### Modo re-audit

El rol documenta un modo `Angle Architect re-audit`. Ese modo **no es parte constitutiva del rol** — es un modo de operación opcional que se activa cuando cambia una verdad canónica, una stat deja de ser defendible, o un ángulo ya construido necesita revisión. En el tuning, debe quedar marcado como trabajo opcional de transición, no como la función principal.

### Facts desactualizados en los briefs históricos vs canon

Esto es relevante para una eventual tarea de transición, no para la definición del rol:

| Dato en briefs | Canon actual | Briefs afectados |
|---|---|---|
| "28 años" Baumex | "30 años" / "más de 3 décadas" | diferencia-nelson, leed, excelencia-operativa |
| "52,200 m²" como cifra principal | "550,000 ft²" como cifra rectora | proyectos-especializados, diferencia-nelson, certificaciones |
| "30 corporaciones" | "33 corporaciones" | diferencia-nelson, casos-de-exito |
| "Interiores Aéreos" nombrado | Prohibido en copy comercial | diferencia-nelson, casos-de-exito |

---

## 4. Contrato de lectura propuesto

### Principio de independencia

Angle Architect formula perspectiva, ángulo y tesis. Para eso necesita criterio propio, no solo insumos digeridos por otros roles. Si solo lee reportes de CC y VF, hereda el juicio de esos roles en vez de formar el suyo — y un ángulo construido sobre juicio heredado es frágil.

Los reportes de CC y VF le dan un mapa de facts confirmados, conflictos y valor. Las aclaraciones canónicas le dan certeza sobre datos resueltos. Pero la lectura primaria obligatoria es lo que le permite escuchar directamente la voz del negocio y decidir si la perspectiva que propone está sostenida por lo que el negocio realmente dice de sí mismo — no por lo que otro rol decidió que era importante.

### Orden de lectura obligatorio (en cada task)

1. `docs/copy/constitucion-v0-copy-brandpetram.md`
2. `docs/copy/guia-fuentes-del-negocio-y-limites-de-lectura.md`
3. `docs/copy/aclaraciones-canonicas.md`
4. `docs/copy/roles/angle-architect/angle-architect.md`
5. `docs/copy/roles/context-curator/context-curator-report-v0.md`
6. `docs/copy/roles/value-finder/value-finder-report-v0.md`
7. La task específica (le dice cuál es el territorio, qué fuentes primarias leer y cuáles están disponibles para spot-check)
8. **Paquete mínimo obligatorio de fuentes primarias** (definido en la task)
9. Spot-check selectivo si hace falta

### Lectura primaria: dos capas

**Capa 1 — Paquete mínimo obligatorio.** Fuentes primarias que Angle Architect DEBE leer para formar criterio propio sobre el ángulo de esa sección. Se seleccionan deliberadamente por task — no es el corpus completo, son las fuentes que más información aportan al territorio de esa sección específica.

**Capa 2 — Fuentes disponibles para spot-check.** El resto de fuentes primarias del negocio (la misma lista de CC/VF task-v0). No las lee por defecto. Las consulta solo cuando un fact clave que va a sostener el ángulo necesita validación o contexto extra. Declara en su reporte qué fuentes de spot-check consultó y por qué.

### Lectura condicional adicional

- Angle briefs de OTRAS secciones — para verificar fronteras cross-page cuando hay riesgo de colisión

### NO debe leer por defecto

- El corpus completo de fuente primaria de una sola vez
- Memorias de trabajo, workflows, planes operativos
- Outputs de Narrative Copywriter o reviewers

---

## 5. Output: el angle brief

El output de Angle Architect es un **angle brief** — el documento que deja la página pensada. No es un diagnóstico, no es una auditoría, no es un checklist de facts. Es la formulación de la perspectiva, el ángulo y la tesis de una sección.

### Formato del angle brief

1. Territorio fijo
2. Pregunta del comprador
3. Ángulo rector
4. Por qué es poderoso
5. Por qué es relevante en esta página
6. Por qué es legítimo
7. Facts que sostienen el ángulo (con fuente, fuerza y seguridad)
8. Facts que salen (con razón y destino)
9. Riesgos de ángulo desplazado
10. Tesis final
11. Secuencia de página
12. Límites: qué no debe intentar decir esta página
13. Fuentes primarias leídas (paquete mínimo + spot-checks con razón)
14. Dependencias canónicas

### Nomenclatura

`angle-brief-{seccion}-v{version}.md`

### Regla de versión

La versión del brief coincide con la versión de la task.

---

## 6. Tasks necesarias

Cada sección necesita una task que le diga a Angle Architect: este es tu territorio, estos son tus insumos, descubre el ángulo.

- `task-casos-de-exito-v0.md`
- `task-certificaciones-v0.md`
- `task-excelencia-operativa-v0.md`
- `task-leed-v0.md`
- `task-proyectos-especializados-v0.md`
- `task-diferencia-nelson-v0.md`
- `task-liderazgo-v0.md`

### Contenido de cada task

- Orden de lectura obligatorio (los 9 pasos definidos en la sección 4)
- Territorio fijo asignado
- **Paquete mínimo obligatorio de fuentes primarias** — seleccionado por relevancia al territorio de la sección
- **Lista de fuentes disponibles para spot-check** — el resto del corpus primario
- Recordatorio de versión del brief

### Sobre los briefs históricos

Existen 6 angle briefs históricos en `docs/copy/angle-briefs/`. Esos briefs son trabajo previo valioso: tienen territorio claro, límites cross-page, secuencia y riesgos bien pensados.

Si en la fase de ejecución se decide que Angle Architect puede leer un brief histórico como referencia antes de producir el suyo, eso se indica en la task concreta de esa sección. Pero no es un requisito constitutivo del rol. Angle Architect existe para **producir** angle briefs, no para auditar los existentes.

Si en algún momento se decide revisar o actualizar los briefs históricos para alinearlos con aclaraciones canónicas y los reportes de CC/VF, eso será una **tarea de transición documental** — no la definición central del rol.

### Orden de ejecución

Se decide en la fase de ejecución, no en el tuning del rol.

---

## 7. Ambigüedades y contradicciones que resolver en `angle-architect.md`

Al implementar el tuning, hay que:

1. Reescribir "Inputs mínimos" y "Lectura obligatoria" como contrato de lectura explícito con el orden de los 8 documentos
2. Resolver la contradicción de destino (`angle-briefs/` vs `roles/angle-architect/`) y alinear nomenclatura a `angle-brief-{seccion}-v{version}.md`
3. Agregar Value Finder a la regla de seguridad
4. Corregir referencias rotas (ruta de narrative-copywriter, rutas de re-audit)
5. Agregar sección de alcance (opera por sección, no por negocio)
6. Agregar sección de "Qué debe leer y qué no" análoga a CC y VF
7. Marcar el modo re-audit como modo opcional de transición, no como función principal
8. Agregar la regla de versión task=brief

---

## 8. Decisiones que deben tomarse antes de tocar Narrative Copywriter

1. **¿Dónde viven los angle briefs nuevos?** Propuse `docs/copy/roles/angle-architect/`. Los históricos quedan en `docs/copy/angle-briefs/` como referencia.

2. **¿Qué pasa con los briefs históricos ya implementados?** Si se produce un brief nuevo para una sección que ya tiene brief histórico, ¿el nuevo reemplaza al viejo o coexisten? Propuesta: el nuevo es la versión vigente, el histórico queda como referencia.

3. **¿Narrative Copywriter lee aclaraciones canónicas?** Sí, obligatoriamente.

4. **¿Narrative Copywriter lee CC y VF?** No por defecto. Lee el angle brief, que ya formuló la perspectiva y decidió qué facts usar.

5. **¿Dónde vive el output de Narrative Copywriter?** Su output real es copy implementado en archivos de sección. Hay que definir si necesita diagnóstico previo y dónde va.

---

## Secuencia de implementación del tuning

1. Resolver las preguntas pendientes de este plan con el usuario
2. Reescribir `angle-architect.md`: alcance, misión, contrato de lectura, qué debe/no debe leer, output, relaciones actualizadas, modo re-audit como opcional
3. Limpiar secciones obsoletas, referencias rotas y contradicciones
4. Crear las 7 tasks por sección
5. Fase de ejecución (fuera del alcance de este plan de tuning)
