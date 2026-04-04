# Plan para Skill qa-copy v2

## Contexto

Brandpetram tiene un skill de QA de copy existente (`~/.claude/skills/qa-copy/`) que evalúa copy contra las 17 reglas de escritura B2B con scripts Python para checks mecánicos. Dos investigaciones recientes produjeron material nuevo que necesita integrarse:

1. **Copywriting B2B repetición y calidad** — 42 criterios operativos: 15 de repetición, 12 de relevancia, 15 de calidad de escritura.
2. **Inferencia de estructura de valor** — 7 antipatrones de inferencia de valor y escala de fuerza inferencial de 3 niveles.

Además, el documento de correcciones de Luis Muzquiz contiene 24 patrones de error detectados en la práctica real.

**Problema:** El skill actual evalúa reglas de escritura pero no evalúa repetición cross-page, relevancia para el comprador, fuerza de promesas comerciales, ni antipatrones de inferencia de valor.

**Objetivo:** Actualizar el skill qa-copy para que evalúe copy contra TODAS las reglas, criterios y antipatrones documentados, en 4 pasadas priorizadas.

Se prueba primero con grupo-nelson y luego se generaliza para cualquier cliente.

---

## Archivos fuente (ya existen, no se crean)

### Sistema de copywriting B2B
- `grupo-nelson/docs/copywriting-b2b/reglas.mdx` — 17 reglas obligatorias
- `grupo-nelson/docs/copywriting-b2b/storytelling.mdx` — 5 reglas de storytelling (S1-S5)
- `grupo-nelson/docs/copywriting-b2b/vocabulario-generico.mdx` — vocabulario B2B
- `grupo-nelson/docs/copywriting-b2b/vocabularios/*.mdx` — vocabularios de sector
- `grupo-nelson/docs/copywriting-b2b/copy-de-luis-muzquiz.mdx` — 24 correcciones con patrones
- `grupo-nelson/docs/copywriting-b2b/repetir-ideas-entre-paginas.mdx` — cuándo/cómo repetir

### Investigaciones
- `grupo-nelson/docs/investigaciones/inferencia-estructura-valor.md` — 7 antipatrones, escala de fuerza inferencial
- `grupo-nelson/docs/investigaciones/copywriting-b2b-repeticion-criterios-calidad.md` — 42 criterios (15 repetición + 12 relevancia + 15 calidad)

### Skill existente
- `~/.claude/skills/qa-copy/SKILL.md` — skill actual de QA
- `~/.claude/skills/qa-copy/configs/` — configs YAML por proyecto
- `~/.claude/skills/qa-copy/scripts/` — scripts Python de checks mecánicos

---

## Qué hace el skill actualizado

Evalúa copy existente contra TODAS las reglas, criterios y antipatrones documentados. Produce un reporte estructurado con pass/fail por criterio y recomendaciones específicas de corrección.

## Ubicación

Actualizar el skill existente: `~/.claude/skills/qa-copy/`

## Cambios respecto al skill actual

El skill actual ya tiene:
- 17 reglas de copywriting como checks
- Scripts Python para checks mecánicos (frases prohibidas, densidad de stats, headers)
- Configs YAML por proyecto

Lo que se agrega:
- **42 criterios nuevos** de la investigación de repetición/calidad (15 repetición + 12 relevancia + 15 calidad)
- **7 antipatrones** de la investigación de inferencia de valor
- **5 reglas de storytelling**
- **24 patrones de error** del documento de correcciones de Luis
- **Escala de fuerza inferencial** como check de promesas
- **Evaluación cross-page** (no solo página por página sino relación entre páginas)

## Estructura de archivos a modificar/crear

```
~/.claude/skills/qa-copy/
├── SKILL.md                          # MODIFICAR: agregar nuevas fases de evaluación
├── reference/
│   ├── criterios-repeticion.md       # CREAR: 15 criterios de repetición
│   ├── criterios-relevancia.md       # CREAR: 12 criterios de relevancia
│   ├── criterios-calidad.md          # CREAR: 15 criterios de calidad de escritura
│   ├── antipatrones-inferencia.md    # CREAR: 7 antipatrones de inferencia de valor
│   ├── patrones-error-luis.md        # CREAR: 24 patrones de error detectados
│   └── reglas-storytelling.md        # CREAR: 5 reglas S1-S5
├── configs/
│   ├── grupo-nelson.yaml             # MODIFICAR: agregar paths a nuevos docs
│   └── [otros proyectos].yaml
├── scripts/
│   ├── [scripts existentes]          # MANTENER
│   ├── check_cross_page.py           # CREAR: detectar repetición entre páginas
│   └── check_inferential_strength.py # CREAR: evaluar fuerza de promesas
└── reports/                          # Sin cambios
```

## Flujo de ejecución actualizado

**Triggers:** `/qa-copy`, "qa copy", "validate copy", "check copy", "review copy"

**Proceso de 4 pasadas (orden de prioridad):**

### Pasada 1: Repetición (15 criterios)
- Evaluar cross-page: ¿hay frases espejo entre páginas?
- Evaluar por página: ¿hay aperturas idénticas, headlines intercambiables?
- Test de progresión narrativa: ¿cada página enseña algo nuevo?
- Output: lista de repeticiones detectadas con ubicación y severidad

### Pasada 2: Relevancia (12 criterios)
- Test de 10 segundos por página
- Test de outcomes vs features
- Test de stakeholder específico
- Test del competidor intercambiable (Regla 9 existente + criterio nuevo)
- Output: criterios que pasan/fallan con citas del copy

### Pasada 3: Calidad de escritura (15 criterios + 17 reglas + 5 storytelling + 24 patrones)
- Las 17 reglas existentes del sistema de copywriting
- Las 5 reglas S1-S5 de storytelling
- Los 15 criterios de calidad de escritura de la investigación
- Los 24 patrones de error de Luis (checks negativos)
- Output: violations por regla con línea específica y sugerencia de fix

### Pasada 4: Arquitectura e inferencia (7 antipatrones + escala inferencial)
- Verificar que el copy no caiga en los 7 antipatrones
- Evaluar fuerza inferencial de cada promesa comercial
- Verificar que cada página tiene territorio propio
- Output: antipatrones detectados + promesas clasificadas por fuerza

## Formato del reporte de salida

```markdown
# QA Copy — {Empresa} — {Sección} — rev{NN} — {YYYY-MM-DD}

## Resumen
- **Score global:** {A/B/C/D}
- **Repetición:** {X de 15 criterios pasan}
- **Relevancia:** {X de 12 criterios pasan}
- **Calidad:** {X de 47 reglas/criterios pasan}
- **Arquitectura:** {X de 7 antipatrones libres}

## Pasada 1: Repetición
[Detalle por criterio]

## Pasada 2: Relevancia
[Detalle por criterio]

## Pasada 3: Calidad de escritura
[Detalle por regla]

## Pasada 4: Arquitectura e inferencia
[Detalle por antipatrón]

## Acciones recomendadas (priorizadas)
1. [Acción más urgente]
2. ...
```

---

## Orden de ejecución

1. Crear archivos en `reference/` con los criterios nuevos
2. Crear scripts Python nuevos (cross-page, inferential strength)
3. Actualizar `SKILL.md` con las 4 pasadas
4. Actualizar config de grupo-nelson con nuevos paths
5. Probar con el copy actual de grupo-nelson
6. Revisar reporte con el usuario
7. Iterar según feedback
8. Generalizar para cualquier cliente

## Verificación

- [ ] `/qa-copy` detecta las 4 categorías de problemas (repetición, relevancia, calidad, arquitectura)
- [ ] El reporte de QA tiene acciones priorizadas y accionables
- [ ] Los scripts Python nuevos funcionan correctamente
- [ ] El skill funciona sin hardcodear paths de grupo-nelson
