# Plan Maestro: Refactor del Sistema de Copy Brandpetram

Versión: 1.3 — Ronda 4 después de tercer review Codex
Fecha: 2026-04-03
Workspace operativo: grupo-nelson (generalización contemplada pero no diseñada aún)

---

## 1. Objetivo del refactor

Convertir el sistema actual de copywriting B2B de Brandpetram — que hoy es un proceso de 12 pasos centrado en la escritura — en un sistema de 3 capas donde la IA puede ejecutar autónomamente el pensamiento estratégico previo al copy, la generación del copy, y su validación.

**Principio rector:** El copy superficial describe hechos visibles. El copy profundo comprende el valor latente de esos hechos y comunica esa comprensión con relevancia comercial. El objetivo de este refactor es que el sistema produzca consistentemente copy profundo.

El sistema actual tiene reglas para CÓMO escribir (17 reglas + 5 storytelling + vocabularios). No tiene un proceso sistematizado para QUÉ decir ni POR QUÉ decirlo. Las dos investigaciones recientes (inferencia de estructura de valor + criterios de calidad) llenaron el vacío teórico. Este plan llena el vacío operativo.

---

## 2. Diagnóstico del sistema actual

### 2.1 Artefactos existentes

| # | Artefacto | Ubicación | Función actual |
|---|-----------|-----------|----------------|
| 1 | Reglas de copywriting | `copywriting-b2b/reglas.mdx` | 17 reglas de escritura (cómo escribir) |
| 2 | Reglas de storytelling | `copywriting-b2b/storytelling.mdx` | 5 reglas S1-S5 (cuándo/cómo narrar) |
| 3 | Vocabulario genérico | `copywriting-b2b/vocabulario-generico.mdx` | Verbos, sustantivos, calificadores, prohibidos |
| 4 | Vocabularios de sector | `copywriting-b2b/vocabularios/*.mdx` | Términos técnicos por industria |
| 5 | Plantilla de brief | `copywriting-b2b/plantillas/brief-de-quien-es.mdx` | 8 secciones para documentar quién es la empresa |
| 6 | Plantilla buyer persona | `copywriting-b2b/plantillas/buyer-persona.mdx` | 7 subsecciones del comprador |
| 7 | Plantilla de temario | `copywriting-b2b/plantillas/temario.mdx` | Temas comerciales con material, ángulo, datos, huecos |
| 8 | Plantilla desempaquetado | `copywriting-b2b/plantillas/desempaquetado.mdx` | Material crudo organizado por página |
| 9 | Sistema (flujo) | `copywriting-b2b/sistema.mdx` | Flujo de 12 pasos y modelo de carpetas |
| 10 | Correcciones de Luis | `copywriting-b2b/copy-de-luis-muzquiz.mdx` | 24 patrones de error con correcciones |
| 11 | Repetición entre páginas | `copywriting-b2b/repetir-ideas-entre-paginas.mdx` | Cuándo/cómo repetir temas entre páginas |
| 12 | Investigación: inferencia | `investigaciones/inferencia-estructura-valor.md` | Modelo de 4 operaciones, 7 antipatrones, escala inferencial |
| 13 | Investigación: calidad | `investigaciones/copywriting-b2b-repeticion-criterios-calidad.md` | 42 criterios (15 repetición + 12 relevancia + 15 calidad) |

### 2.2 Flujo actual (12 pasos de sistema.mdx)

```
1. Leer genéricos (reglas, vocab, plantillas)
2. Vocabulario de sector
3. Crear brief
4. Crear buyer persona
5. Crear temario
6. Crear ideas de copy
7. Crear desempaquetado
8. Escribir copy
9. QA (skill qa-copy)
10. Revisión humana
11. Corrección
12. Segunda pasada QA
```

### 2.3 Lo que el sistema actual hace bien

- Las 17 reglas de escritura son precisas, concretas y operacionalizables. Tienen señales de falla claras y ejemplos buenos/malos.
- Los vocabularios de sector son genuinamente útiles: capturan el lenguaje real del decisor.
- La plantilla de brief tiene buena estructura (8 secciones, incluyendo "Cuidado con").
- La plantilla de buyer persona distingue bien "qué lo frena" de "qué lo pierde".
- Las 24 correcciones de Luis son el activo más valioso del sistema: son patrones reales detectados en producción, no teoría.
- Las 5 reglas de storytelling resuelven problemas concretos (catálogo cerrado vs. capacidad abierta, no revelar la cocina).

---

## 3. Problemas detectados

### 3.1 Ausencia de capa estratégica

**El gap central.** El sistema actual salta del brief (quién es la empresa) al temario (de qué vamos a hablar) sin un paso intermedio que descomponga, infiera y reestructure la información. La investigación de inferencia de estructura de valor demostró que ese paso intermedio es el que marca la diferencia entre un inventario de servicios y una arquitectura de valor.

El temario tiene un campo "ángulo comercial" que intenta llenar este vacío, pero es un párrafo libre sin método. La plantilla dice "La interpretación: por qué este tema le importa al visitante" pero no dice CÓMO llegar a esa interpretación. El resultado depende enteramente de la experiencia del estratega.

### 3.2 Solapamiento entre temario y desempaquetado

El temario organiza por **tema comercial** y el desempaquetado por **página del sitio**. La plantilla de temario reconoce la diferencia explícitamente (hay una tabla comparativa en `temario.mdx:122-128`). Pero en la práctica:

- Ambos tienen campos de "material relevante" / "material crudo relevante"
- Ambos tienen "ángulo comercial"
- Ambos tienen "datos duros para el copy"
- Ambos tienen "huecos de información"

La única diferencia real es la unidad de organización (tema vs. página). Esto produce duplicación de trabajo: el mismo dato se documenta en el temario bajo un tema y luego se copia al desempaquetado bajo una página.

### 3.3 "Ideas de copy" es un documento sin proceso

El paso 6 del flujo (crear ideas de copy) dice "se alimenta continuamente — no tiene un momento fijo de creación." Es el único artefacto del sistema sin plantilla. En la práctica funciona como un cajón de sastre donde caen frases sueltas. No tiene criterios de calidad ni conexión formal con el resto del flujo. Las ideas valiosas que deberían emerger de un proceso de inferencia de valor se capturan de forma ad hoc.

### 3.4 Las investigaciones no están integradas al flujo

Las dos investigaciones produjeron:
- 4 operaciones cognitivas (descomposición, inferencia, reframing, arquitectura)
- 7 antipatrones de inferencia de valor
- Escala de fuerza inferencial (3 niveles)
- Taxonomía de 4 niveles de profundidad de lectura
- 42 criterios de evaluación (15 repetición + 12 relevancia + 15 calidad)
- Modelo de topoi comerciales adaptados de Aristóteles

Nada de esto está conectado a ningún paso del flujo de 12 pasos. Son conocimiento latente, no operacional.

### 3.5 QA evalúa escritura pero no estrategia

El skill qa-copy actual evalúa las 17 reglas de escritura (checks mecánicos: frases prohibidas, densidad de stats, headers). No evalúa:
- Si el copy tiene territorio propio vs. repetir lo que dicen otras páginas
- Si las promesas comerciales tienen fuerza inferencial legítima
- Si la arquitectura de mensajes es no-redundante
- Si el copy cae en alguno de los 7 antipatrones

### 3.6 Inconsistencias internas en el corpus

Detectadas por Codex review (2026-04-03):
1. `sistema.mdx:85-90` — Los paths en la tabla del flujo apuntan a archivos que no existen en este repo (`.md` en lugar de `.mdx`, nombres de archivo distintos).
2. `reglas.mdx:34-36` — Dice "Las 16 Reglas" en el heading pero el archivo define 17 reglas y el intro dice "17 reglas". Inconsistencia que propagaría errores a checklists automatizados.
3. `copy-de-luis-muzquiz.mdx:185-192` — Items 20 y 21 se contradicen: el 20 enseña a acortar copy para caber en componentes, pero su propio "Patrón detectado" dice que la solución correcta es crear una variante beta (que es lo que el item 21 enseña). Los dos items deberían consolidarse.

### 3.7 Los dos planes de skills (copy-architect y qa-copy v2) duplican estructura con el sistema existente

El plan de copy-architect propone crear `reference/topoi-comerciales.md`, `reference/escala-inferencial.md`, `reference/antipatrones.md` y `reference/taxonomia-niveles.md` dentro del skill. Pero esa información ya existe (o debería existir) como parte del corpus de copywriting-b2b. Si se crea en el skill Y en el corpus, hay dos fuentes de verdad.

El plan de qa-copy v2 propone crear `reference/criterios-repeticion.md`, `reference/criterios-relevancia.md`, etc. — que son extractos de la investigación de calidad. Misma duplicación: la fuente de verdad debería ser una sola.

---

## 4. Arquitectura objetivo propuesta

### 4.1 Modelo de 3 capas

```
CAPA 1: ESTRATÉGICA (pensar)
  Input:  Brief + Buyer Persona + Vocabulario de sector + Material crudo
          (Material crudo = notas de reuniones, entrevistas con dueños,
          declaraciones, investigación de mercado, presentaciones del
          cliente, capturas, correos relevantes. Todo lo que no cabe
          en el brief pero contiene facts o perspectiva.)
  Motor:  Topoi + Inferencia abductiva + Reframing
  Output: Arquitectura de mensajes (ángulos, territorios, mapa de páginas)

CAPA 2: TÁCTICA (escribir)
  Input:  Arquitectura de mensajes + Reglas + Vocabularios
  Motor:  Generación de copy por página según territorio asignado
  Output: Copy por página/sección

CAPA 3: EVALUACIÓN (validar)
  Input:  El skill SIEMPRE carga el contexto factual completo del
          proyecto. No hay pasadas que operen "solo con copy".

          Contexto factual completo (contrato único):
          - Copy de todas las páginas evaluadas
          - Corpus genérico (reglas, criterios, patrones, vocabularios)
          - Arquitectura de mensajes aprobada
          - Brief del cliente
          - Buyer persona
          - Desempaquetado

          Cada pasada USA un subconjunto de este contexto, pero el
          skill lo carga todo una vez al inicio. Esto evita que
          pasadas individuales operen sin acceso a información que
          necesitan.

  Motor:  4 pasadas (repetición → relevancia → calidad → arquitectura)
  Output: Reporte QA con score, acciones priorizadas y severidad
```

### 4.2 Principio arquitectónico: una sola fuente de verdad por concepto

Cada concepto del sistema tiene exactamente un lugar canónico donde se define. Los skills lo LEEN, no lo COPIAN.

| Concepto | Fuente de verdad | Quién lo lee |
|----------|-----------------|--------------|
| Reglas de escritura (17) | `copywriting-b2b/reglas.mdx` | Capa 2 (escritura) + Capa 3 (QA) |
| Reglas de storytelling (5) | `copywriting-b2b/storytelling.mdx` | Capa 2 + Capa 3 |
| Vocabulario genérico | `copywriting-b2b/vocabulario-generico.mdx` | Capa 2 + Capa 3 |
| Vocabularios de sector | `copywriting-b2b/vocabularios/*.mdx` | Capa 1 + Capa 2 |
| Topoi comerciales | `copywriting-b2b/topoi-comerciales.mdx` (NUEVO) | Capa 1 |
| Escala inferencial | `copywriting-b2b/escala-inferencial.mdx` (NUEVO) | Capa 1 + Capa 3 |
| Antipatrones de inferencia | `copywriting-b2b/antipatrones-inferencia.mdx` (NUEVO) | Capa 1 + Capa 3 |
| Criterios de evaluación (42) | `copywriting-b2b/criterios-evaluacion.mdx` (NUEVO) | Capa 3 |
| Patrones de error (24) | `copywriting-b2b/copy-de-luis-muzquiz.mdx` | Capa 3 |
| Repetición entre páginas | `copywriting-b2b/repetir-ideas-entre-paginas.mdx` | Capa 2 + Capa 3 |
| Plantilla de brief | `copywriting-b2b/plantillas/brief-de-quien-es.mdx` | Capa 1 (input) |
| Plantilla buyer persona | `copywriting-b2b/plantillas/buyer-persona.mdx` | Capa 1 (input) |

Los skills (`~/.claude/skills/copy-architect/`, `~/.claude/skills/qa-copy/`) contienen SOLO lógica de ejecución (SKILL.md) y configs (YAML con paths al corpus). No duplican contenido del corpus.

---

## 5. Rol exacto de cada artefacto del sistema

### 5.1 Artefactos que PERMANECEN intactos

| Artefacto | Rol en el sistema nuevo | Justificación |
|-----------|------------------------|---------------|
| `reglas.mdx` | Referencia canónica de las 17 reglas. Leída por Capa 2 y Capa 3. | Funciona bien, es preciso y operacionalizable. Solo necesita corregir el heading "16 Reglas" → "17 Reglas". |
| `storytelling.mdx` | 5 reglas complementarias para secciones narrativas. | Resuelve problemas reales, no se solapa con nada. |
| `vocabulario-generico.mdx` | Glosario obligatorio de verbos, sustantivos, calificadores. | Fundamental para la escritura. Sin cambios. |
| `vocabularios/*.mdx` | Términos técnicos por industria. | Se usan tanto en Capa 1 (para entender el dominio) como en Capa 2 (para escribir). |
| `repetir-ideas-entre-paginas.mdx` | Guía de cuándo/cómo repetir temas entre páginas. | Evidencia sólida, bien documentada. Leída por Capa 2 y Capa 3. |
| `copy-de-luis-muzquiz.mdx` | 24 patrones de error como checks negativos de QA. | El activo más valioso del sistema. Necesita consolidar items 20-21. |
| `plantillas/brief-de-quien-es.mdx` | Plantilla de input para Capa 1. | 8 secciones bien diseñadas. Sin cambios estructurales. |
| `plantillas/buyer-persona.mdx` | Plantilla de input para Capa 1. | 7 subsecciones que alimentan directamente el reframing. Sin cambios. |
| `{proyecto}/docs/copy/material-crudo/` (NUEVO) | Directorio canónico para fuentes desestructuradas del cliente: reuniones, entrevistas, declaraciones, presentaciones. | Resuelve el problema de que el brief no captura todo. El skill lee el directorio completo. Cada archivo tiene nombre descriptivo pero no se exige formato interno. |

### 5.2 Artefactos que CAMBIAN de rol

| Artefacto | Rol actual | Rol nuevo | Qué cambia |
|-----------|-----------|-----------|------------|
| `plantillas/temario.mdx` | Documento independiente de 5 subsecciones por tema | **SE ELIMINA como artefacto independiente.** Su función queda absorbida por la "arquitectura de mensajes", que es el único artefacto estratégico canónico entre el brief y el desempaquetado. | Lo que hoy se llama "temario" (temas comerciales con ángulo, material, datos, huecos) se convierte en una sección DENTRO de la arquitectura de mensajes — no en un documento separado. Ver sección 6 (flujo canónico) para el formato exacto del artefacto único. |
| `plantillas/desempaquetado.mdx` | Organizar material crudo por página | Se convierte en el puente entre Capa 1 y Capa 2. Toma la arquitectura de mensajes y la operacionaliza por página. | Ya no se crea "desde cero" a partir de material disperso. Se genera a partir de la arquitectura de mensajes. Cada bloque por página hereda: territorio asignado, ángulo principal, datos duros del brief, fuerza inferencial de cada promesa. |
| `sistema.mdx` | Flujo de 12 pasos | Se reescribe como flujo de 3 capas con los pasos internos de cada una. | El documento más afectado. El flujo de 12 pasos se reemplaza por el flujo de 3 capas. También se corrigen los paths a archivos que Codex detectó como incorrectos. |

### 5.3 Artefactos NUEVOS que se crean

| Artefacto | Contenido | Fuente |
|-----------|-----------|--------|
| `copywriting-b2b/topoi-comerciales.mdx` | 7+ preguntas generativas adaptadas de los topoi aristotélicos a contexto B2B industrial. Con ejemplos por pregunta. | Investigación: inferencia-estructura-valor.md, Hallazgo 4 |
| `copywriting-b2b/escala-inferencial.mdx` | 3 niveles de fuerza inferencial (verificable / fuerza media / hipótesis) con criterios y ejemplos. | Investigación: inferencia-estructura-valor.md, Hallazgo 5 |
| `copywriting-b2b/antipatrones-inferencia.mdx` | 7 antipatrones de inferencia de valor con test de detección para cada uno. | Investigación: inferencia-estructura-valor.md, Hallazgo 8 |
| `copywriting-b2b/criterios-evaluacion.mdx` | Los 42 criterios de evaluación consolidados (15 repetición + 12 relevancia + 15 calidad) como checklist operativo. | Investigación: copywriting-b2b-repeticion-criterios-calidad.md, Hallazgos 8-10 |
| `copywriting-b2b/plantillas/arquitectura-de-mensajes.mdx` | Template del artefacto estratégico único. Reemplaza a `temario.mdx`. Contiene: mensaje central, ángulos de valor, temas comerciales derivados, mapa de territorios, checklist de antipatrones, huecos. | Síntesis del plan de copy-architect + estructura del temario actual |

### 5.4 Artefactos que SE ELIMINAN

| Artefacto | Por qué |
|-----------|---------|
| `ideas-de-copy-{empresa}.md` (documento específico del cliente) | Las ideas de copy emergen como subproducto de la Capa 1 (inferencia abductiva) y se capturan dentro de la arquitectura de mensajes. No necesitan un documento separado sin proceso. Si durante la ejecución surgen ideas sueltas, se anotan directamente en el desempaquetado bajo la página correspondiente. |

---

## 6. Flujo canónico de trabajo de punta a punta

### Flujo nuevo: 3 capas, 9 pasos

```
═══════════════════════════════════════════════════════
 CAPA 1: ESTRATÉGICA  (skill: /copy-architect)
═══════════════════════════════════════════════════════

  Paso 1 — LEER CONTEXTO
  │  Leer genéricos: reglas, vocabulario genérico, topoi, escala
  │  inferencial, antipatrones.
  │  Leer de sector: vocabulario del sector del cliente.
  │  Leer específicos del cliente:
  │    - Brief (obligatorio) — `{proyecto}/docs/copy/brief-de-quien-es-{empresa}.md`
  │    - Buyer persona (obligatorio) — `{proyecto}/docs/copy/buyer-persona-{empresa}.md`
  │    - Material crudo (obligatorio si existe) — `{proyecto}/docs/copy/material-crudo/`
  │
  │  Contrato del material crudo:
  │  El directorio `material-crudo/` es la ubicación canónica para
  │  toda fuente desestructurada del cliente.
  │
  │  Nombre de archivos: descriptivo (ej:
  │    `reunion-2026-03-15-con-rodolfo.md`,
  │    `entrevista-dueño.md`,
  │    `presentacion-corporativa-baumex.pdf`).
  │
  │  Tipos de archivo y nivel de soporte:
  │    FIRST-CLASS (extracción completa y confiable):
  │    - .md / .mdx / .txt — texto plano, lectura directa
  │    - .pdf — lectura con herramienta Read (máx 20 págs)
  │
  │    BEST-EFFORT (extracción parcial, puede perder info):
  │    - .docx / .pptx — se intenta extraer texto pero
  │      puede fallar en formato complejo
  │    - .png / .jpg — se leen como imagen (multimodal)
  │      pero la extracción de texto depende de claridad
  │
  │    NO SOPORTADO (ignorar con warning):
  │    - .xlsx / .csv — tablas complejas, mejor convertir
  │      a .md antes de incluir
  │    - .mp4 / .mov — video, no procesable
  │    - Cualquier binario no listado arriba
  │
  │  Recomendación operativa: convertir todo lo posible a .md
  │  antes de colocarlo en material-crudo/. Un .md de notas
  │  de reunión es infinitamente más útil que un .docx con
  │  formato complejo.
  │
  │  Si el directorio no existe o está vacío, el skill procede
  │  solo con brief + buyer persona, pero emite un WARNING de
  │  que la Capa 1 operará con inputs limitados.
  │  El config YAML del proyecto apunta a este directorio.
  │
  Paso 2 — INVENTARIO DE FACTS
  │  Extraer de TODAS las fuentes (brief + buyer persona +
  │  material crudo) cada HECHO atómico. Un hecho es algo que
  │  alguien dijo, escribió o que puede observarse directamente.
  │  NO es una interpretación ni una inferencia — eso es Paso 3.
  │
  │  Clasificar cada fact:
  │    - Verificable (dato duro, comprobable: "52,000 m²",
  │      "certificación LEED Gold", "28 años en operación")
  │    - Declarado (el cliente lo afirma, no hay prueba
  │      independiente: "somos los mejores de la región",
  │      "nuestros clientes nos recomiendan")
  │    - Citado (dicho por alguien en una reunión o entrevista,
  │      registrado textualmente: "El dueño dijo: 'Gulfstream
  │      nos retó a sacar la certificación'")
  │    - Ausente (se necesita pero no se tiene)
  │
  │  IMPORTANTE: NO incluir inferencias como facts. "La empresa
  │  tiene capacidad de aprendizaje transferible" NO es un fact —
  │  es una inferencia que se derivará en Paso 3. "La empresa
  │  obtuvo 5 certificaciones en 10 años" SÍ es un fact.
  │  La frontera: si puedes señalar DÓNDE está el dato (documento,
  │  reunión, declaración), es un fact. Si necesitas RAZONAR para
  │  llegar a él, es una inferencia y va en Paso 3.
  │
  │  Output: lista numerada de facts con clasificación y fuente
  │  (ej: "Brief §3", "Reunión 2026-03-15", "Material crudo:
  │  presentacion-corporativa.pdf p.12").
  │
  Paso 3 — DESCOMPOSICIÓN + INFERENCIA
  │  Aplicar topoi comerciales a cada fact relevante.
  │  Para cada ángulo prometedor, ejecutar elaborative
  │  interrogation (¿por qué? ¿qué implica? ¿qué patrón?).
  │  Clasificar inferencias con escala de fuerza.
  │  Verificar contra antipatrones.
  │  Output: tabla de ángulos con fuerza inferencial.
  │
  Paso 4 — ARQUITECTURA DE MENSAJES
  │  Este paso produce EL ÚNICO artefacto estratégico del sistema.
  │  No hay un "temario" separado — la arquitectura de mensajes
  │  contiene todo lo que antes vivía en el temario (temas, ángulos,
  │  datos, huecos) más lo que el temario nunca tuvo (inferencias,
  │  fuerza inferencial, territorios, mapa de páginas, antipatrones).
  │
  │  Contenido del artefacto:
  │  1. Mensaje central (una frase)
  │  2. Ángulos de valor (3-5), cada uno con:
  │     - Lectura superficial vs. lectura profunda
  │     - Fuerza inferencial
  │     - Facts que lo sostienen (con clasificación)
  │     - Territorio asignado (página/sección)
  │  3. Temas comerciales derivados (lo que antes era el temario):
  │     - Cada tema con: material relevante, ángulo comercial,
  │       datos duros, huecos de información
  │     - Pero ahora cada tema está TRAZADO a un ángulo de valor
  │       y a facts específicos del inventario
  │  4. Mapa de territorios por página con capas Wynter
  │  5. Checklist de antipatrones verificados
  │  6. Huecos de información que bloquean la escritura
  │
  │  Output: documento único de arquitectura de mensajes.
  │
  ► REVIEW HUMANO: El usuario valida la arquitectura antes de continuar.

═══════════════════════════════════════════════════════
 CAPA 2: TÁCTICA  (skill: /copy-write o ejecución manual)
═══════════════════════════════════════════════════════

  Paso 5 — DESEMPAQUETADO POR PÁGINA
  │  Tomar la arquitectura de mensajes.
  │  Para cada página: territorio, ángulo, datos duros,
  │  fuerza de cada promesa, huecos.
  │  Output: desempaquetado listo para escribir.
  │
  Paso 6 — ESCRIBIR COPY
  │  Con el desempaquetado + reglas + vocabularios como contexto.
  │  Una página/sección a la vez.
  │  Output: copy por página.
  │
  ► REVIEW HUMANO: El usuario revisa el copy en el navegador.

═══════════════════════════════════════════════════════
 CAPA 3: EVALUACIÓN  (skill: /qa-copy)
═══════════════════════════════════════════════════════

  Paso 7 — QA AUTOMATIZADO (4 pasadas)
  │  Contexto factual completo cargado al inicio (contrato único):
  │  copy + corpus genérico + arquitectura aprobada + brief +
  │  buyer persona + desempaquetado.
  │  Todas las pasadas tienen acceso a TODO el contexto.
  │
  │  Pasada 1: Repetición (15 criterios + cross-page)
  │    Usa principalmente: copy de todas las páginas.
  │    Usa de apoyo: arquitectura (para verificar territorios).
  │  Pasada 2: Relevancia (12 criterios)
  │    Usa principalmente: copy + buyer persona.
  │    Usa de apoyo: arquitectura (para verificar que cada
  │    página habla al stakeholder asignado).
  │  Pasada 3: Calidad de escritura (17 reglas + 5 storytelling
  │            + 15 criterios + 24 patrones de error)
  │    Usa principalmente: copy + corpus genérico.
  │    Usa de apoyo: vocabulario de sector (para Regla 1).
  │  Pasada 4: Arquitectura e inferencia (7 antipatrones +
  │            escala inferencial)
  │    Usa principalmente: copy + arquitectura + brief.
  │    Usa de apoyo: buyer persona, desempaquetado.
  │    Evalúa: ¿cada promesa tiene sustento en facts del brief
  │    o del material crudo? ¿Se respetaron los territorios?
  │    ¿Hay promesas de fuerza débil presentadas como hechos?
  │
  │  Severidad de cada hallazgo:
  │    - BLOQUEANTE: No se puede publicar. Incluye:
  │      Reglas 1-17 que fallan (son gates, no sugerencias),
  │      antipatrones 1-3 (inflación retórica, repetición
  │      disfrazada, sobreinferencia),
  │      promesas de fuerza débil presentadas como hechos,
  │      frases prohibidas del vocabulario.
  │    - CORRECTIVA: Debería corregirse antes de publicar. Incluye:
  │      Criterios de relevancia que fallan,
  │      reglas de storytelling que fallan,
  │      antipatrones 4-7,
  │      repetición cross-page significativa.
  │    - ADVISORY: Recomendación de mejora. Incluye:
  │      Criterios de calidad de escritura que fallan sin
  │      afectar comprensión,
  │      patrones de error de Luis que son preferencias
  │      de estilo (no errores factuales),
  │      repetición menor dentro de una misma página.
  │
  │  Gate de publicación: si hay 1+ hallazgos BLOQUEANTES,
  │  el copy no pasa QA. Los CORRECTIVOS generan una segunda
  │  pasada obligatoria. Los ADVISORY se documentan pero no
  │  bloquean.
  │
  │  Output: reporte QA con score, acciones, severidad y
  │  decisión de gate (PASA / NO PASA / PASA CON CORRECTIVOS).
  │
  Paso 8 — CORRECCIÓN
  │  Ajustar copy según reporte QA.
  │
  Paso 9 — SEGUNDA PASADA QA
  │  Debe quedar limpio. Si no, repetir 8-9.
```

### Comparación con flujo actual

| Paso actual | Equivalente nuevo | Cambio |
|-------------|-------------------|--------|
| 1. Leer genéricos | Paso 1 (Leer contexto) | Se agregan topoi, escala, antipatrones a la lectura |
| 2. Vocabulario de sector | Parte de Paso 1 | Sin cambio |
| 3. Crear brief | Pre-requisito (no cambia) | Sin cambio |
| 4. Crear buyer persona | Pre-requisito (no cambia) | Sin cambio |
| 5. Crear temario | **ABSORBIDO por Pasos 2-4** | El temario ya no se crea manualmente; los temas y ángulos emergen del proceso estratégico |
| 6. Ideas de copy | **ELIMINADO como paso independiente** | Las ideas emergen dentro de Paso 3 (inferencia) |
| 7. Crear desempaquetado | Paso 5 (Desempaquetado por página) | Ya no se crea desde cero; se genera a partir de la arquitectura |
| 8. Escribir copy | Paso 6 | Sin cambio conceptual |
| 9. QA | Paso 7 (4 pasadas en vez de 1) | Se expande de checks de escritura a evaluación completa |
| 10. Revisión humana | Review humano después de Paso 6 | Sin cambio |
| 11. Corrección | Paso 8 | Sin cambio |
| 12. Segunda QA | Paso 9 | Sin cambio |

---

## 7. Qué archivos o capas quedarían intactos

**Intactos (cero cambios):**
- Las dos investigaciones (`docs/investigaciones/*`) — fuentes base, no editables
- `storytelling.mdx`
- `vocabulario-generico.mdx`
- `vocabularios/*.mdx`
- `plantillas/brief-de-quien-es.mdx`
- `plantillas/buyer-persona.mdx`
- `repetir-ideas-entre-paginas.mdx`

**Correcciones menores (contenido no cambia, solo fixes puntuales):**
- `reglas.mdx` — corregir heading "Las 16 Reglas" → "Las 17 Reglas"
- `copy-de-luis-muzquiz.mdx` — consolidar items 20 y 21 en un solo item coherente

---

## 8. Qué archivos o capas deberían cambiar después

| Archivo | Cambio | Prioridad | Fase |
|---------|--------|-----------|------|
| `sistema.mdx` | Reescribir flujo de 12 pasos → flujo de 3 capas. Corregir paths a archivos. | Alta | Fase 1 |
| `reglas.mdx` | Corregir heading "Las 16 Reglas" → "Las 17 Reglas" | Alta | Fase 1 |
| `copy-de-luis-muzquiz.mdx` | Consolidar items 20 y 21 en un solo item coherente | Media | Fase 1 |
| `plantillas/temario.mdx` | **ELIMINAR.** Se reemplaza por `plantillas/arquitectura-de-mensajes.mdx` (nuevo). El archivo viejo se borra — no se renombra ni se reutiliza. | Media | Fase 3 |
| `plantillas/desempaquetado.mdx` | Actualizar para que reciba input de la arquitectura de mensajes | Media | Fase 2 |
| `~/.claude/skills/copy-architect/SKILL.md` | Crear skill con lógica de Capa 1 que LEA del corpus en copywriting-b2b/ | Alta | Fase 2 |
| `~/.claude/skills/qa-copy/SKILL.md` | Actualizar con 4 pasadas que LEAN del corpus en copywriting-b2b/ | Alta | Fase 2 |
| Config YAML de grupo-nelson | Crear/actualizar con paths a todo el corpus | Media | Fase 2 |

---

## 9. Qué artefactos se fusionan, reemplazan o eliminan

| Acción | Artefacto | Detalle |
|--------|-----------|---------|
| **ABSORBER + ELIMINAR ARCHIVO** | Temario → Arquitectura de mensajes | El temario desaparece como documento independiente. Sus campos (temas, ángulos, datos, huecos) se convierten en una sección DENTRO de la arquitectura de mensajes. A nivel de archivos: `plantillas/temario.mdx` se BORRA y se reemplaza por `plantillas/arquitectura-de-mensajes.mdx` (nuevo). Los temarios ya creados para clientes existentes (`{proyecto}/docs/copy/temario-*.md`) se migran manualmente al formato de arquitectura cuando se trabaje ese cliente. |
| **ELIMINAR** | `ideas-de-copy-{empresa}.md` como artefacto independiente | Las ideas se capturan dentro de la arquitectura de mensajes y el desempaquetado. No necesitan un documento sin proceso. |
| **REEMPLAZAR** | Los `reference/*.md` propuestos en los planes de skills | En vez de crear archivos de referencia DENTRO de los skills, se crean como parte del corpus en `copywriting-b2b/`. Los skills los leen vía config YAML. |
| **REEMPLAZAR** | Los dos planes de skills existentes | Este plan maestro los subsume. `plan-para-skill-copy-architect.md` y `plan-para-skill-qa-copy-v2.md` quedan como referencia histórica pero la ejecución se guía por este plan. |
| **EVOLUCIONAR** | Desempaquetado | De "organizar material crudo por página" a "operacionalizar la arquitectura de mensajes por página". Mismo nombre, función refinada. |

---

## 10. Plan de migración por fases

### Fase 0: Correcciones al corpus (pre-requisito)
**Qué:** Corregir las 3 inconsistencias detectadas por Codex.
**Archivos:** `reglas.mdx`, `copy-de-luis-muzquiz.mdx`, `sistema.mdx` (solo los paths).
**Riesgo:** Ninguno. Son correcciones factuales.
**Criterio de completitud:** Codex review pasa sin hallazgos de inconsistencia interna.

### Fase 1: Crear documentos nuevos del corpus + actualizar plantillas
**Qué:** Antes de construir skills, establecer todo el corpus que los skills van a consumir.

Crear los 4 documentos nuevos:
1. `topoi-comerciales.mdx`
2. `escala-inferencial.mdx`
3. `antipatrones-inferencia.mdx`
4. `criterios-evaluacion.mdx`

Crear la plantilla nueva y eliminar la vieja:
5. `plantillas/arquitectura-de-mensajes.mdx` (NUEVO — reemplaza temario)
6. Eliminar `plantillas/temario.mdx`
7. Actualizar `plantillas/desempaquetado.mdx` para recibir input de arquitectura

Actualizar el flujo:
8. Reescribir `sistema.mdx` con el flujo de 3 capas y paths corregidos

**Restricción:** Estos documentos EXTRAEN y OPERACIONALIZAN contenido de las investigaciones. No modifican las investigaciones. Las plantillas de brief y buyer persona NO cambian.
**Criterio de completitud:** El corpus está completo, todas las plantillas son coherentes con el flujo nuevo, y un humano puede seguir el flujo documentado en sistema.mdx sin encontrar referencias a artefactos que ya no existen.

### Fase 2: Construir skills contra el corpus estable
**Qué:** Crear/actualizar los dos skills. En este punto, todo lo que los skills leen ya está creado y estable.
1. `/copy-architect` — Capa 1 (lee del corpus, no duplica contenido)
2. `/qa-copy` v2 — Capa 3 (lee del corpus, no duplica contenido)

**Restricción:** Los skills contienen SOLO lógica de ejecución y configs. Todo el conocimiento vive en `copywriting-b2b/`.
**Pre-requisito explícito:** Fase 1 completa. Los skills se construyen CONTRA artefactos ya estabilizados, no contra especificaciones en movimiento.
**Criterio de completitud:** Ambos skills funcionan con grupo-nelson como caso de prueba. El config YAML apunta a `{proyecto}/docs/copy/material-crudo/`, `{proyecto}/docs/copy/brief-*.md`, `{proyecto}/docs/copy/buyer-persona-*.md`.

### Fase 4: Prueba end-to-end con grupo-nelson
**Qué:**
1. Ejecutar `/copy-architect` sobre facts de Baumex
2. Generar desempaquetado a partir de la arquitectura
3. Escribir copy de una sección
4. Ejecutar `/qa-copy` sobre ese copy
5. Comparar con el copy actual del sitio

**Criterio de completitud:** El copy producido por el nuevo flujo es evaluablemente mejor que el actual según los criterios del propio sistema.

### Fase 5: Generalización (fuera de scope de este plan)
**Qué:** Extraer el corpus y los skills de grupo-nelson para que funcionen con cualquier cliente.
**Nota:** No se diseña en este plan. Solo se contempla que la arquitectura lo permite porque el corpus vive en `copywriting-b2b/` (portable) y los skills leen vía config YAML (reconfigurable por proyecto).

---

## 11. Riesgos y tradeoffs

### Riesgo 1: Sobre-ingeniería del proceso
**Descripción:** El flujo de 3 capas con topoi, inferencia abductiva y escalas inferenciales puede ser demasiado pesado para proyectos pequeños o clientes con información limitada.
**Mitigación:** La Capa 1 debe tener un modo "light" para clientes con pocos facts. Si hay menos de 10 facts atómicos, los topoi se aplican solo a los 3-4 más ricos, no a todos.
**Tradeoff aceptado:** Algo de overhead en proyectos pequeños a cambio de consistencia y calidad en todos.

### Riesgo 2: Dependencia de calidad del brief
**Descripción:** Todo el sistema depende de que el brief sea bueno. Si el brief es pobre (pocos datos, datos vagos), la Capa 1 no tiene materia prima para inferir.
**Mitigación:** El Paso 2 (inventario de facts) debe producir una lista de huecos explícitos que se escalan al cliente ANTES de continuar. No se permite avanzar a Paso 3 con más del 40% de facts marcados como "ausente".
**Tradeoff aceptado:** El proceso puede bloquearse esperando información del cliente.

### Riesgo 3: La arquitectura de mensajes se vuelve dogmática
**Descripción:** Si la Capa 1 produce una arquitectura rígida, el copywriter pierde flexibilidad para descubrir ángulos durante la escritura.
**Mitigación:** La arquitectura es una guía, no un contrato. El desempaquetado puede anotar "ángulos emergentes" que no estaban en la arquitectura original. Si son buenos, se retroalimentan. Las 24 correcciones de Luis demuestran que los mejores insights a veces emergen durante la escritura, no antes.
**Tradeoff aceptado:** La arquitectura puede quedar parcialmente obsoleta durante la escritura.

### Riesgo 4: Dos fuentes de verdad durante la migración
**Descripción:** En Fase 1 se reescribe sistema.mdx con el flujo de 3 capas, pero los skills aún no existen (se crean en Fase 2). Un usuario que lea el flujo nuevo no podrá ejecutar los skills referenciados.
**Mitigación:** Fase 1 reescribe sistema.mdx con el flujo nuevo pero marca los skills como "(pendiente de implementar — Fase 2)". El flujo ya es correcto conceptualmente; los skills se conectan en Fase 2. NO se mantiene el flujo viejo de 12 pasos — eso crearía dos versiones en conflicto. La secuencia es: primero estabilizar la especificación (Fase 1), luego implementar contra ella (Fase 2).
**Tradeoff aceptado:** Durante Fase 1, sistema.mdx describe un flujo que todavía no es ejecutable con skills. Se acepta porque el documento es la especificación, no la implementación.

### Riesgo 5: Pérdida de la función de "ideas de copy"
**Descripción:** Eliminar el documento de ideas de copy como artefacto independiente puede perder el espacio para capturar frases sueltas durante el proceso.
**Mitigación:** El desempaquetado tiene un campo "ideas/frases emergentes" por página. Las ideas no desaparecen — se capturan en contexto en lugar de en un cajón sin estructura.
**Tradeoff aceptado:** Se pierde el documento "libre" a favor de ideas contextualizadas por página.

---

## 12. Criterios de aceptación

El refactor se considera exitoso cuando:

1. **Trazabilidad completa.** Dado cualquier párrafo de copy en el sitio, se puede rastrear hacia atrás: párrafo → desempaquetado (página) → arquitectura (ángulo) → inferencia (topoi + fact). El fact puede venir de cualquier fuente legítima del sistema (brief, buyer persona, material crudo) — no solo del brief. El inventario de facts (Paso 2) documenta la fuente de cada fact, y esa fuente se propaga hasta el copy final. Si un párrafo no tiene trazabilidad a ninguna fuente, es copy sin fundamento.

2. **No-redundancia verificable.** Cada página del sitio tiene un territorio asignado en la arquitectura. El QA de Pasada 1 (repetición) confirma que no hay frases espejo ni headlines intercambiables entre páginas.

3. **Fuerza inferencial documentada.** Cada promesa comercial del sitio está clasificada (verificable / fuerza media / hipótesis). No hay promesas de fuerza débil presentadas como hechos.

4. **Un solo corpus, múltiples lectores.** Todo el conocimiento de copywriting vive en `copywriting-b2b/`. Los skills leen de ahí. No hay archivos `reference/` dentro de skills que dupliquen contenido del corpus.

5. **El flujo es ejecutable por IA sin intervención humana hasta los checkpoints.** La IA puede ejecutar Pasos 1-4 (Capa 1) autónomamente y presentar la arquitectura para review humano. Puede ejecutar Pasos 5-6 (Capa 2) autónomamente. Puede ejecutar Pasos 7-9 (Capa 3) autónomamente. Los únicos puntos de intervención humana son los reviews entre capas.

6. **El QA tiene gates explícitos.** Cada hallazgo tiene severidad (BLOQUEANTE / CORRECTIVO / ADVISORY). El reporte produce una decisión de gate (PASA / NO PASA / PASA CON CORRECTIVOS). Las Reglas 1-17 y los antipatrones 1-3 son BLOQUEANTES sin excepción.

7. **La Capa 3 carga el contexto factual completo.** El skill qa-copy carga al inicio: copy + corpus genérico + arquitectura aprobada + brief + buyer persona + desempaquetado. Todas las pasadas tienen acceso a TODO el contexto. No hay pasada que opere sin la información que necesita.

8. **Existe un solo artefacto estratégico entre el brief y el desempaquetado.** Se llama "arquitectura de mensajes". No coexiste con un temario separado. Contiene tanto la estructura de valor (ángulos, territorios, mapa de páginas) como los temas comerciales derivados (lo que antes era el temario).

9. **Codex review del corpus actualizado pasa sin hallazgos P2+.** Las inconsistencias internas detectadas están resueltas.

---

## 13. Preguntas abiertas o decisiones delicadas

### Decisión resuelta 1: El temario cambia de forma Y la Capa 1 acepta material crudo abierto
El temario pasa de input manual a output de la Capa 1. Para resolver el riesgo de perder temas que vienen de fuentes abiertas (ideas del dueño, reuniones, feedback de ventas), la Capa 1 ahora acepta "material crudo" como cuarto input además de brief, buyer persona y vocabulario. El Paso 2 (inventario de facts) extrae hechos de TODAS las fuentes, incluyendo las desestructuradas. Los temas que el dueño quiere incluir entran como facts con clasificación "declarado" y pasan por el mismo proceso de topoi/inferencia que los demás.

### Pregunta 2: ¿Dónde vive el corpus a largo plazo?
**Posición actual del plan:** En `grupo-nelson/docs/copywriting-b2b/` por ahora. Generalización en Fase 5 (fuera de scope).
**Tensión:** El corpus es de Brandpetram, no de grupo-nelson. Tenerlo en un proyecto cliente específico es incorrecto a largo plazo. La fuente canónica debería ser `/Proyectos/conocimiento/content/docs/copywriting-b2b/` (donde ya existe una copia).
**Decisión pendiente:** ¿Cuándo y cómo se mueve? ¿Se mantiene una copia en cada proyecto cliente o se lee siempre desde conocimiento?

### Pregunta 3: ¿Cuántos skills son: 2 o 3?
**Posición actual del plan:** 2 skills (copy-architect para Capa 1, qa-copy para Capa 3). La Capa 2 (escritura) no tiene skill propio — es ejecución directa de Claude con el desempaquetado como contexto.
**Alternativa:** Crear un tercer skill `/copy-write` que formalice la Capa 2 con sus propias reglas de ejecución (leer desempaquetado, aplicar reglas, generar copy por página).
**Tradeoff:** 2 skills = más simple, menos overhead. 3 skills = más control, el flujo completo es invocable con 3 comandos secuenciales.
**Decisión pendiente:** ¿2 o 3 skills?

### Pregunta 4: ¿Los 42 criterios de evaluación van en un solo archivo o separados por tipo?
**Posición actual del plan:** Un solo archivo `criterios-evaluacion.mdx` con 3 secciones (repetición, relevancia, calidad).
**Alternativa:** 3 archivos separados (`criterios-repeticion.mdx`, `criterios-relevancia.mdx`, `criterios-calidad.mdx`) para que cada pasada del QA cargue solo lo que necesita.
**Tradeoff:** 1 archivo = fuente de verdad más simple, pero el QA debe parsear secciones. 3 archivos = más archivos pero cada pasada es autónoma.
**Decisión pendiente:** ¿1 o 3 archivos?

### Pregunta 5: ¿Las correcciones de Luis siguen acumulándose en el mismo archivo?
**Posición actual del plan:** Sí. `copy-de-luis-muzquiz.mdx` sigue siendo el registro de correcciones reales.
**Tensión:** A medida que el archivo crezca (ya tiene 24 items), se vuelve pesado para el QA. Además, algunos patrones deberían graduarse a reglas formales (ej: "no usar lenguaje interno/administrativo en copy público" podría ser una Regla 18).
**Decisión pendiente:** ¿Se establece un proceso de "graduación" donde patrones recurrentes se promueven a reglas formales?

---

*Plan maestro v1.3 — 13 hallazgos de Codex incorporados (3 rondas), listo para ronda final*
