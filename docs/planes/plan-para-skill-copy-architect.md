# Plan para Skill copy-architect

## Contexto

Brandpetram tiene un sistema de copywriting B2B documentado (17 reglas, 5 reglas de storytelling, vocabularios, plantillas, flujo de 12 pasos). La investigación "Inferencia de estructura de valor" descubrió que la capacidad de transformar información plana en arquitectura de contenido opera en 4 pasos: descomposición (topoi), inferencia abductiva, reframing estratégico, y arquitectura de mensajes no redundante.

**Problema:** El sistema actual tiene reglas de escritura (cómo escribir) pero no tiene un proceso sistematizado para el paso ANTERIOR: cómo pensar arquitectónicamente antes de escribir.

**Objetivo:** Crear un skill de Claude Code que tome facts planos de una empresa B2B y produzca una arquitectura de mensajes estratégica antes de que se escriba una sola línea de copy.

Se prueba primero con grupo-nelson y luego se generaliza para cualquier cliente.

---

## Archivos fuente (ya existen, no se crean)

### Sistema de copywriting B2B
- `grupo-nelson/docs/copywriting-b2b/reglas.mdx` — 17 reglas obligatorias
- `grupo-nelson/docs/copywriting-b2b/storytelling.mdx` — 5 reglas de storytelling
- `grupo-nelson/docs/copywriting-b2b/vocabulario-generico.mdx` — vocabulario B2B
- `grupo-nelson/docs/copywriting-b2b/vocabularios/*.mdx` — vocabularios de sector
- `grupo-nelson/docs/copywriting-b2b/sistema.mdx` — flujo de 12 pasos
- `grupo-nelson/docs/copywriting-b2b/plantillas/*.mdx` — 4 plantillas (brief, buyer persona, temario, desempaquetado)
- `grupo-nelson/docs/copywriting-b2b/copy-de-luis-muzquiz.mdx` — 24 correcciones con patrones

### Investigación base
- `grupo-nelson/docs/investigaciones/inferencia-estructura-valor.md` — modelo de 4 operaciones, taxonomía de niveles, 7 antipatrones, escala de fuerza inferencial

---

## Qué hace el skill

Toma información plana de una empresa B2B (facts, credenciales, servicios, trayectoria) y produce una arquitectura de mensajes estratégica antes de que se escriba una sola línea de copy.

## Ubicación

`~/.claude/skills/copy-architect/`

## Estructura de archivos a crear

```
~/.claude/skills/copy-architect/
├── SKILL.md                          # Definición del skill
├── reference/
│   ├── topoi-comerciales.md          # Los topoi aristotélicos adaptados a B2B (preguntas generativas)
│   ├── escala-inferencial.md         # 3 niveles de fuerza inferencial
│   ├── antipatrones.md               # 7 antipatrones de inferencia de valor
│   └── taxonomia-niveles.md          # 4 niveles de profundidad de lectura
└── templates/
    └── arquitectura-output.md        # Template del entregable
```

## Flujo de ejecución (contenido de SKILL.md)

**Triggers:** `/copy-architect`, "arquitectura de copy", "pensar el copy", "analizar facts", "estructura de mensajes"

**Inputs requeridos:**
- Brief de quién es la empresa (o facts crudos si no hay brief)
- Buyer persona (si existe)
- Vocabulario de sector (si existe)

**Proceso de 5 fases:**

### Fase 1: Inventario de facts
- Leer toda la información disponible del cliente
- Listar cada fact como dato atómico (un hecho = una línea)
- Clasificar: dato verificable / dato declarado sin verificar / dato ausente

### Fase 2: Descomposición topológica
- Aplicar los topoi comerciales (reference/topoi-comerciales.md) a cada fact:
  - Definición: ¿qué es realmente este servicio/capacidad?
  - División (partes/todo): ¿qué dimensiones contiene?
  - Causa/efecto: ¿qué causó esta trayectoria? ¿qué efecto tiene para el cliente?
  - Comparación: ¿cómo se compara con la industria/competencia?
  - Grado: ¿qué es más notable del dato?
  - Temporalidad: ¿qué era antes? ¿qué cambió? ¿qué implica para el futuro?
  - Testimonio: ¿qué evidencia concreta respalda esto?
- Output: tabla de facts × topoi con los ángulos que emergen

### Fase 3: Inferencia abductiva
- Para cada ángulo prometedor de Fase 2, ejecutar elaborative interrogation:
  - ¿Por qué tiene este dato? ¿Qué implica?
  - ¿Qué patrón revela esta trayectoria?
  - ¿Qué capacidad futura sugiere este historial?
- Clasificar cada inferencia con la escala de fuerza (reference/escala-inferencial.md):
  - Verificable / Fuerza media / Hipótesis débil
- Descartar hipótesis débiles o marcarlas como aspiracionales
- Verificar contra los 7 antipatrones (reference/antipatrones.md)

### Fase 4: Reframing estratégico
- Seleccionar los 3-5 ángulos de mayor valor comercial
- Para cada uno, formular: "El mensaje no es [lectura superficial] sino [lectura profunda]"
- Conectar cada ángulo con el buyer persona (si existe): ¿qué job/pain/gain del comprador resuelve?
- Asignar territorio por página: cada ángulo alimenta una sección diferente del sitio

### Fase 5: Arquitectura de mensajes
- Organizar los ángulos en jerarquía: mensaje principal → mensajes de soporte → evidencia
- Verificar no-redundancia: cada ángulo debe agregar una dimensión genuinamente nueva (test de amplificatio)
- Asignar propósito narrativo por página (según Wynter layers):
  - Homepage: claridad + diferenciación
  - Servicios: relevancia + valor
  - About: credibilidad + historia
  - Casos: evidencia + transformación
- Output: documento de arquitectura siguiendo template/arquitectura-output.md

## Template del entregable

```markdown
# Arquitectura de Mensajes — {Empresa}

## Mensaje central
[Una frase que captura la promesa diferenciada]

## Ángulos de valor (3-5)
### Ángulo 1: {nombre}
- **Lectura superficial:** {lo que la empresa dice de sí misma}
- **Lectura profunda:** {lo que realmente implica para el cliente}
- **Fuerza inferencial:** Verificable / Media / Hipótesis
- **Territorio:** {página o sección que alimenta}
- **Evidencia:** {datos duros que lo sostienen}

[Repetir para cada ángulo]

## Mapa de territorios por página
| Página | Propósito narrativo | Ángulo principal | Ángulos de soporte |
|--------|--------------------|-----------------|--------------------|

## Antipatrones verificados
- [ ] Sin inflación retórica
- [ ] Sin repetición disfrazada
- [ ] Sin sobreinferencia
- [ ] Sin abstracción vacía
- [ ] Sin inventio sin frame
- [ ] Sin frame sin descomposición
- [ ] Sin copy-paste de frameworks genéricos

## Huecos de información
[Facts que faltan para completar la arquitectura]
```

---

## Orden de ejecución

1. Crear estructura de carpetas
2. Escribir `reference/topoi-comerciales.md` — adaptar topoi aristotélicos a preguntas B2B concretas
3. Escribir `reference/escala-inferencial.md` — 3 niveles con ejemplos
4. Escribir `reference/antipatrones.md` — 7 antipatrones con tests
5. Escribir `reference/taxonomia-niveles.md` — 4 niveles de profundidad
6. Escribir `templates/arquitectura-output.md` — template del entregable
7. Escribir `SKILL.md` — definición completa del skill con las 5 fases
8. Probar con grupo-nelson/Baumex
9. Iterar según feedback
10. Generalizar para cualquier cliente

## Verificación

- [ ] `/copy-architect` produce arquitectura de mensajes desde facts planos de grupo-nelson
- [ ] La arquitectura producida es más rica que un inventario de servicios
- [ ] El skill funciona sin hardcodear paths de grupo-nelson
