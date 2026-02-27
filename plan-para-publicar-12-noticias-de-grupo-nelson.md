# Plan para publicar 12 noticias en Grupo Nelson

## Decisiones previas

### Categorías (a dar de alta en Sanity como tipo `noticia`)

| Categoría | Slug | Descripción |
|---|---|---|
| Grupo Nelson | `grupo-nelson` | Noticias propias de la empresa |
| Industria Maquiladora | `industria-maquiladora` | Nearshoring, inversión, parques, Mexicali/BC |
| Negocios | `negocios` | Noticias corporativas y económicas generales |
| Construcción | `construccion` | Sector constructivo, naves, materiales, tendencias |
| Internacional | `internacional` | Tarifas, empresas globales, reshoring, geopolítica |
| Tecnología y Sostenibilidad | `tecnologia-sostenibilidad` | LEED, solar, automatización, smart buildings |

---

### Estructura de cada noticia

**~800 palabras divididas en 4 párrafos:**

| Párrafo | Contenido | Palabras aprox. |
|---|---|---|
| 1 — Lead | Hecho principal, quién, qué, cuándo, dónde | ~150 |
| 2 — Contexto | Antecedentes, por qué es relevante | ~200 |
| 3 — Desarrollo | Detalles, cifras, declaraciones, implicaciones | ~250 |
| 4 — Cierre | Relevancia para Mexicali / el sector / perspectiva | ~200 |

**Sin headers h2 dentro del cuerpo** — a diferencia del blog, las noticias son flujo continuo de 4 párrafos, como una nota periodística.

---

### Estrategia de contenido

- Las noticias de Grupo Nelson son contenido original (hechos reales de la empresa).
- Las noticias de industria/internacional se basan en noticias reales publicadas en medios. Se leen las fuentes, se extrae la información, y se redacta con otras palabras — **nunca copiar textual**.
- Fuentes recomendadas: Reuters, Bloomberg, El Financiero, El Economista, CBRE Industrial Reports, JLL Market Reports, ProMéxico/SE comunicados.

---

## Las 12 noticias — parrilla final

### Grupo Nelson (3 noticias)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 1 | Gulfstream Invierte USD 350 Millones en Nave Industrial en el Parque Nelson II de Mexicali | Grupo Nelson | 15 ene 2026 |
| 2 | Grupo Nelson Lanza su Nuevo Sitio Web Corporativo con Enfoque en el Mercado Internacional | Grupo Nelson | Feb 2026 |
| 3 | Grupo Nelson Celebra 60 Años como Pioneros de la Industria Maquiladora en México | Grupo Nelson | Mar 2026 |

### Industria Maquiladora (3 noticias)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 4 | Mexicali Mantiene Tasas de Vacancia Históricamente Bajas en Parques Industriales: Panorama 2025–2026 | Industria Maquiladora | Feb 2026 |
| 5 | El Nearshoring Impulsa la Creación de Empleos Industriales en Baja California: Cifras y Perspectivas | Industria Maquiladora | Feb 2026 |
| 6 | Automotriz, Aeroespacial y Medtech: Los Sectores que Más Demandan Naves Industriales en BC | Industria Maquiladora | Mar 2026 |

### Negocios (2 noticias)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 7 | México Rompe Récord de Inversión Extranjera Directa en 2025: Lo que Significa para el Sector Industrial | Negocios | Feb 2026 |
| 8 | Otra Empresa de la Lista Fortune 500 Elige Baja California para su Expansión en México | Negocios | Mar 2026 |

### Internacional (2 noticias)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 9 | Tarifas Arancelarias de EE.UU.: Impacto Real en la Manufactura y la Inversión en México | Internacional | Feb 2026 |
| 10 | Por Qué Empresas de Corea, Taiwán y Japón Están Eligiendo México sobre Otros Destinos | Internacional | Mar 2026 |

### Construcción (1 noticia)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 11 | La Demanda de Naves Clase A Transforma el Desarrollo Industrial en Mexicali y Baja California | Construcción | Mar 2026 |

### Tecnología y Sostenibilidad (1 noticia)

| # | Título | Categoría | Fecha sugerida |
|---|---|---|---|
| 12 | Certificación LEED en Parques Industriales: El Estándar que las Multinacionales Ya Exigen en México | Tecnología y Sostenibilidad | Abr 2026 |

---

## Plan de publicación paso a paso

### Paso 1 — Dar de alta en Sanity (antes de publicar)

1. Abrir el Studio: `http://localhost:3000/studio`
2. Ir a la sección **Noticias** (no Blog)
3. Crear las **6 categorías** con los slugs exactos de la tabla de arriba
4. Verificar que el autor de Grupo Nelson ya existe (si no, crearlo)

### Paso 2 — Publicar las 12 noticias con Lorem Ipsum

Para cada noticia crear en Sanity con estos campos:

- **Title:** el título de la parrilla (en español)
- **Slug:** generado automáticamente desde el título
- **Description:** 1–2 oraciones de Lorem Ipsum (el extracto que aparece en la card del índice)
- **Authors:** el autor Grupo Nelson
- **Category:** la categoría correspondiente
- **Cover image:** imagen placeholder
- **Published At:** la fecha sugerida en la parrilla
- **Body:** 4 párrafos de Lorem Ipsum (~800 palabras en total)
  - Párrafo 1: ~150 palabras
  - Párrafo 2: ~200 palabras
  - Párrafo 3: ~250 palabras
  - Párrafo 4: ~200 palabras

Publicar las 12 en una sola sesión.

### Paso 3 — Verificar que /noticias se vea bien

Antes de escribir el contenido real, verificar visualmente:

- `/noticias` — índice con cards y posts destacados
- `/noticias/category/grupo-nelson` — filtro de categoría funciona
- `/noticias/[cualquier-slug]` — noticia individual con autor, imagen de portada y 4 párrafos

### Paso 4 — Colocar imágenes reales

Antes de reemplazar el Lorem Ipsum, agregar la imagen de portada definitiva a cada noticia en Sanity. Esto permite revisar cómo quedan las cards visualmente antes del texto final.

Fuentes de imágenes sugeridas:
- Fotos propias del proyecto Gulfstream / Parque Nelson II
- Unsplash / Pexels para noticias de industria (términos: industrial park, warehouse, manufacturing)
- Fotografías aéreas de Mexicali si están disponibles

### Paso 5 — Reemplazar Lorem Ipsum con contenido real

Para cada noticia, buscar 2–3 fuentes reales sobre el tema, leerlas, y redactar los 4 párrafos con otras palabras. No copiar textual.

El orden sugerido para redactar (de más fácil a más complejo):

1. Noticia 1 (Gulfstream) — datos reales de Grupo Nelson, no requiere investigación externa
2. Noticia 3 (60 años) — historia interna de la empresa
3. Noticia 2 (sitio web) — redacción directa
4. Noticias 4–12 — requieren investigación en fuentes externas

---

## Notas

- Las noticias de Grupo Nelson (1, 2, 3) son las más urgentes — generan credibilidad inmediata.
- La noticia de Gulfstream (USD 350M) es potencialmente la inversión individual más grande en la historia de Mexicali — vale la pena investigar si hay un récord oficial que respalde esa afirmación antes de publicarla.
- Las categorías Construcción y Tecnología arrancan con 1 noticia cada una. Se irán llenando con publicaciones futuras.
- A diferencia del blog (evergreen), las noticias tienen fecha — el `publishedAt` debe reflejar cuándo sucedió el hecho, no cuándo se publicó en el sitio.
