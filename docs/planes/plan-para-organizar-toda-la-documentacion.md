# Plan para organizar toda la documentación de Grupo Nelson — v2

## Problema

La carpeta `docs/` tiene ~30 archivos sueltos en la raíz mezclando estrategia, copy, specs, meetings, research, aprendizajes y planes. Encontrar algo requiere leer nombres largos y adivinar dónde está.

## Principios de diseño

1. **Eje principal: tipo de documento.** Las carpetas de primer nivel se organizan por qué tipo de información contienen (estrategia, specs, research, meetings, etc.), no por unidad de negocio ni por fuente.
2. **Dominio como segundo nivel.** Dentro de cada tipo, subcarpetas por dominio cuando haga falta (`baumex/`, `grupo-nelson/`, etc.). Ejemplo: `specs/baumex/`, `specs/nelson-ii/`.
3. **Sin ambigüedad.** Un archivo solo puede vivir en un lugar. Si un doc toca dos categorías, va en la que mejor responde a "¿qué tipo de documento es?".
4. **Nombres kebab-case.** Todos los archivos y carpetas: minúsculas, guiones medios, sin espacios, sin mayúsculas. Esto se ejecuta como tarea, no como aspiración.

## Estructura propuesta

```
docs/
├── estrategia/                # Qué estamos haciendo, temas comerciales, keywords, vocabulario
├── copy/                      # Ya existe — copywriting, vocabulario por sector, temarios
│   └── constructora/          # Ya existe — copy específico de Baumex
├── research/                  # Investigaciones y benchmarks (cualquier dominio)
├── specs/                     # Especificaciones técnicas de naves y parques
│   ├── nelson-ii/             # PDFs de specs Nelson II
│   ├── vigia/                 # PDFs de specs El Vigía
│   └── vigia-ii/              # PDFs de specs El Vigía II
├── meetings/                  # Todas las reuniones, separadas por año
│   ├── 2025/                  # Reuniones 2025 (kickoff, comprensión, seguimiento)
│   └── 2026/                  # Reuniones 2026 (notas Gemini, otras)
├── enviados-por-susana/       # Se queda como está — data cruda del cliente
├── planes/                    # Ya creada — planes de trabajo
└── aprendizajes/              # Decisiones tomadas, errores, clarificaciones conceptuales
```

**Nota:** No hay carpeta `baumex/` de primer nivel. Los docs de Baumex van en la categoría que les corresponde por tipo:
- Desempaquetado comercial y temarios → `copy/constructora/`
- Portafolio-inventario (tabla de datos) → `specs/`
- Portafolio narrativo (copy comercial) → `copy/constructora/`
- Research de constructoras → `research/`

## Fases de ejecución

### Fase 0 — Limpieza previa

Antes de mover nada.

| Tarea | Detalle |
|---|---|
| Eliminar `.DS_Store` | 4 archivos: `docs/`, `docs/Specs de Naves Grupo Nelson/`, `docs/copy/`, `docs/enviados-por-susana/` |
| Agregar `.DS_Store` a `.gitignore` | Si no está ya |
| Eliminar `research-copywriting-b2b-industrial.html` | Es renderizado del `.md` — no aporta como archivo fuente. Confirmar con usuario antes de borrar. |

### Fase 1 — Consolidación de duplicados

Antes de mover, resolver qué versión es la canónica.

| Par de archivos | Diferencia real | Canónico | Acción |
|---|---|---|---|
| `4-los-10-temas-comerciales-de-grupo-nelson.md` vs `los-10-temas-comerciales-de-grupo-nelson.md` | Backticks sueltos en línea 18 de la versión sin número | `4-los-10-temas-...` (limpio, referenciado desde `temario-desarrolladora-grupo-nelson.md` y `desempaquetado-nelson-desarrolladora.md`) | Eliminar la versión sin número |
| `Especificaciones-Nelson-II.md` (raíz) vs `nelson-ii-especificaciones.md` (carpeta Specs) | Backticks sueltos en líneas 27 y 39 de la versión de carpeta | `Especificaciones-Nelson-II.md` (raíz, limpio) | Mover canónico a `specs/`, eliminar la otra versión |
| `Especificaciones-El-Vigia.md` (raíz) vs `vigia-especificaciones.md` (carpeta Specs) | Idénticos | Cualquiera — usar el nombre kebab-case | Mover uno a `specs/`, eliminar el otro |
| `Especificaciones-El-Vigia-II.md` (raíz) vs `vigia-ii-especificaciones.md` (carpeta Specs) | Idénticos | Cualquiera — usar el nombre kebab-case | Mover uno a `specs/`, eliminar el otro |
| `portafolio-completo-baumex.md` vs `portafolio-proyectos-baumex.md` | **No son duplicados.** `completo` es tabla/inventario técnico (75+ filas con superficies, años, clientes). `proyectos` es copy narrativo. | Van a carpetas distintas | `completo` → `specs/`, `proyectos` → `copy/constructora/` |

### Fase 2 — Renombrado a kebab-case

Aplicar convención de nombres a todos los archivos que se van a mover. No dejar nombres legacy.

| Nombre actual | Nombre nuevo |
|---|---|
| `1-que-es-lo-que-estamos-haciendo.md` | `01-que-estamos-haciendo.md` |
| `2-resumen-de-charlas-con-dueños-de-grupo-nelson.md` | `02-resumen-charlas-con-duenos.md` |
| `3-keywords-con-los-que-queremos-posicionar-a-grupo-nelson.md` | `03-keywords-posicionamiento.md` |
| `4-los-10-temas-comerciales-de-grupo-nelson.md` | `04-temas-comerciales.md` |
| `5-vocabulario-estrategico-que-debemos-usar-para-crear-el-copywriting-y-contenido-comercial-escrito-de-grupo-nelson.md` | `05-vocabulario-estrategico.md` |
| `que-estamos-haciendo-para-definir-los-temas-de-cada-seccion.md` | `proceso-definicion-temas.md` |
| `ElVigiaI_Mapeo_Naves.md` | `el-vigia-i-mapeo-naves.md` |
| `Especificaciones-Nelson-II.md` | `nelson-ii-especificaciones.md` |
| `Especificaciones-El-Vigia.md` | `vigia-especificaciones.md` |
| `Especificaciones-El-Vigia-II.md` | `vigia-ii-especificaciones.md` |
| `lo-que-estamos-aprendiendo-de-hacer-el-copy.md` | `aprendizajes-copy.md` |
| `porque-eliminamos-algunas-secciones-del-menu-de-navegacion.md` | `decision-eliminar-secciones-nav.md` |
| `turn-key-vs-built-to-suit.md` | `clarificacion-turnkey-vs-bts.md` |
| `fase-2-desempaquetado-comercial-baumex.md` | `desempaquetado-comercial-baumex.md` |
| `temario-sobre-baumex-constructora.md` | `temario-baumex.md` |
| `b2b-regular-terms-and-copywriting-best-practices.md` | `glosario-b2b-best-practices.md` |
| `email-humberto-geolocalizacion.md` | `email-humberto-geolocalizacion.md` (sin cambio, ya está en kebab) |
| `tours-virtuales.md` | `tours-virtuales.md` (sin cambio) |
| Carpeta `Specs de Naves Grupo Nelson/` | Se elimina después de extraer contenido |

### Fase 3 — Movimientos

Solo después de consolidar duplicados y renombrar.

#### → `docs/estrategia/`

| Archivo (nombre nuevo) | Origen |
|---|---|
| `01-que-estamos-haciendo.md` | raíz |
| `02-resumen-charlas-con-duenos.md` | raíz |
| `03-keywords-posicionamiento.md` | raíz |
| `04-temas-comerciales.md` | raíz |
| `05-vocabulario-estrategico.md` | raíz |
| `proceso-definicion-temas.md` | raíz |

#### → `docs/research/`

| Archivo (nombre nuevo) | Origen |
|---|---|
| `research-copywriting-b2b-industrial.md` | raíz |
| `glosario-b2b-best-practices.md` | raíz |

#### → `docs/specs/`

| Archivo (nombre nuevo) | Origen | Notas |
|---|---|---|
| `nelson-ii-especificaciones.md` | raíz (canónico) | Eliminar versión de carpeta Specs |
| `vigia-especificaciones.md` | raíz o carpeta Specs (idénticos) | Eliminar duplicado |
| `vigia-ii-especificaciones.md` | raíz o carpeta Specs (idénticos) | Eliminar duplicado |
| `el-vigia-i-mapeo-naves.md` | raíz | — |
| `specs/nelson-ii/*.pdf` | `Specs de Naves Grupo Nelson/NELSON II/` | — |
| `specs/vigia/*.pdf` | `Specs de Naves Grupo Nelson/Vigia/` | — |
| `specs/vigia-ii/*.pdf` | `Specs de Naves Grupo Nelson/Vigia II/` | — |

Después de extraer todo: eliminar `Specs de Naves Grupo Nelson/` completa.

#### → `docs/copy/constructora/`

| Archivo (nombre nuevo) | Origen | Notas |
|---|---|---|
| `desempaquetado-comercial-baumex.md` | raíz | Era `fase-2-desempaquetado-comercial-baumex.md` |
| `temario-baumex.md` | raíz | Era `temario-sobre-baumex-constructora.md` |
| `portafolio-proyectos-baumex.md` | raíz | Copy narrativo — sí va en `copy/constructora/` |

#### → `docs/specs/`  (adicional a los ya listados arriba)

| Archivo (nombre nuevo) | Origen | Notas |
|---|---|---|
| `portafolio-completo-baumex.md` | raíz | Tabla/inventario de 75+ proyectos con datos técnicos (superficies, años, clientes). Es datos fuente, no copy. |

#### → `docs/meetings/2025/`

Todos los archivos de `meetings-donde-hablamos-sobre-grupo-nelson/` (6 PDFs de 2025).

#### → `docs/meetings/2026/`

Todos los archivos de `otras-meetings/` (4 archivos `.md` de 2026).

Después: eliminar `meetings-donde-hablamos-sobre-grupo-nelson/` y `otras-meetings/`.

#### → `docs/aprendizajes/`

| Archivo (nombre nuevo) | Origen |
|---|---|
| `aprendizajes-copy.md` | raíz |
| `decision-eliminar-secciones-nav.md` | raíz |
| `clarificacion-turnkey-vs-bts.md` | raíz |

#### → Por decidir (requiere input del usuario)

| Archivo | Opciones |
|---|---|
| `tours-virtuales.md` | ¿`estrategia/`? ¿`specs/`? ¿Es referencia operativa o estratégica? |
| `email-humberto-geolocalizacion.md` | ¿Archivar? ¿Eliminar? ¿Ya se resolvió lo que pedía? |

### Fase 4 — Actualización de links Markdown y menciones internas de rutas

Hay dos tipos de referencias que se rompen:

**A) Links Markdown reales** (sintaxis `[texto](ruta)`):

| Archivo que referencia | Referencia actual | Referencia nueva |
|---|---|---|
| `estrategia/04-temas-comerciales.md` (línea 5) | `[3-keywords...](./3-keywords-con-los-que-queremos-posicionar-a-grupo-nelson.md)` | `[03-keywords...](./03-keywords-posicionamiento.md)` |
| `estrategia/05-vocabulario-estrategico.md` (línea 8) | `[3-keywords...](./3-keywords-con-los-que-queremos-posicionar-a-grupo-nelson.md)` | `[03-keywords...](./03-keywords-posicionamiento.md)` |

**B) Menciones de rutas en texto plano** (no son links clicables, pero sí referencia humana):

| Archivo que menciona | Línea | Ruta mencionada | Ruta nueva |
|---|---|---|---|
| `copy/temario-desarrolladora-grupo-nelson.md` | 12 | `docs/4-los-10-temas-comerciales-de-grupo-nelson.md` | `docs/estrategia/04-temas-comerciales.md` |
| `copy/temario-desarrolladora-grupo-nelson.md` | 13 | `docs/5-vocabulario-estrategico-...md` | `docs/estrategia/05-vocabulario-estrategico.md` |
| `copy/temario-desarrolladora-grupo-nelson.md` | 14 | `docs/2-resumen-de-charlas-con-dueños-de-grupo-nelson.md` | `docs/estrategia/02-resumen-charlas-con-duenos.md` |
| `copy/desempaquetado-nelson-desarrolladora.md` | 9 | `docs/2-resumen-de-charlas-con-dueños-de-grupo-nelson.md` | `docs/estrategia/02-resumen-charlas-con-duenos.md` |
| `copy/desempaquetado-nelson-desarrolladora.md` | 11 | `docs/4-los-10-temas-comerciales-de-grupo-nelson.md` | `docs/estrategia/04-temas-comerciales.md` |
| `copy/constructora/desempaquetado-comercial-baumex.md` | 5 | `docs/temario-sobre-baumex-constructora.md` | `docs/copy/constructora/temario-baumex.md` |
| `copy/constructora/desempaquetado-comercial-baumex.md` | 8 | `docs/4-los-10-temas-comerciales-de-grupo-nelson.md` | `docs/estrategia/04-temas-comerciales.md` |
| `copy/constructora/desempaquetado-comercial-baumex.md` | 9 | `docs/5-vocabulario-estrategico-...md` | `docs/estrategia/05-vocabulario-estrategico.md` |
| `estrategia/proceso-definicion-temas.md` | 67 | `docs/plan-para-recabar-info-de-constructora-baumex-...md` | `docs/planes/plan-para-recabar-info-de-constructora-baumex-...md` |
| `estrategia/proceso-definicion-temas.md` | 68 | `docs/temario-sobre-baumex-constructora.md` | `docs/copy/constructora/temario-baumex.md` |
| `estrategia/proceso-definicion-temas.md` | 87 | `docs/fase-2-desempaquetado-comercial-baumex.md` | `docs/copy/constructora/desempaquetado-comercial-baumex.md` |
| `aprendizajes/aprendizajes-copy.md` | 61 | `docs/research-copywriting-b2b-industrial.md` | `docs/research/research-copywriting-b2b-industrial.md` |

**Nota:** Los archivos de la columna izquierda ya usan su nombre post-migración (el que tendrán después de Fase 3). Las rutas mencionadas en el texto se actualizan para reflejar la nueva ubicación del archivo referenciado.

**Antes de ejecutar:** Buscar `](./`, `](../` y `docs/` en todos los `.md` de `docs/` para confirmar que no falta ninguna referencia adicional.

### Fase 5 — README por carpeta

Crear un `README.md` corto (3-5 líneas) en cada carpeta de primer nivel explicando qué contiene y qué NO va ahí. Ejemplo:

```markdown
# Specs
Especificaciones técnicas de naves y parques industriales.
PDFs de fichas por nave + resúmenes en Markdown.
No poner aquí: copy comercial, portafolios narrativos ni research.
```

## Reglas para mantener el orden

1. **Nuevo documento → clasificar antes de crear.** No tirar archivos en la raíz de `docs/`.
2. **Nombres en kebab-case.** Minúsculas, guiones medios, sin espacios. Aplicado, no aspiracional.
3. **Un archivo, un propósito.** Si un doc crece mucho, dividirlo.
4. **Duplicados prohibidos.** Si dos archivos dicen lo mismo, se consolida uno como canónico y se elimina el otro.
5. **El eje es tipo de documento, no dominio.** Research de Baumex va en `research/`, no en una carpeta `baumex/`.

## Estado

- [ ] **Fase 0:** Limpiar `.DS_Store`, agregar a `.gitignore`, decidir sobre `.html`
- [ ] **Fase 1:** Consolidar duplicados (5 pares resueltos — 4 eliminaciones + 1 separación a carpetas distintas)
- [ ] **Fase 2:** Renombrar archivos a kebab-case (18 archivos)
- [ ] **Fase 3:** Mover archivos a estructura nueva
- [ ] **Fase 4:** Actualizar links Markdown (2) y menciones de rutas en texto plano (12+). Barrido final con grep antes de cerrar.
- [ ] **Fase 5:** Crear README por carpeta (7 carpetas)
