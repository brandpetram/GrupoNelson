# Inventario de Componentes Tier 3 para Traducción al Inglés

> **Fecha:** 2026-04-10
> **Propósito:** Preparar la Subfase 6c del plan maestro. Para cada página prioritaria,
> listar qué componentes importa, cuáles tienen texto hardcodeado y cuáles son puramente
> visuales o ya reciben props de texto.
> **Fuente:** Lectura directa de cada `page.tsx` y cada componente del repo.

---

## Cómo leer las tablas

| Columna | Significado |
|---------|-------------|
| **Texto ES** | ¿El componente tiene texto en español visible al usuario? |
| **Props de texto** | ¿El texto se puede cambiar via props, o está hardcodeado en el JSX? |
| **Acción para inglés** | Qué hay que hacer para que funcione en la versión inglés |

**Acciones posibles:**
- **Reusar** — No tiene texto visible, se importa sin cambios
- **Props** — Ya acepta props de texto, pasar valores en inglés desde el `page.tsx`
- **Propear** — Agregar prop `lang` o props de texto (trabajo de Fase 5)
- **Copiar** — Crear versión local con texto en inglés (ej: `mu-en.tsx`)

---

## 1. Baumex (`/constructora/baumex`) — 12 componentes

La página más pesada del sitio. 12 componentes griegos, todos sin props de texto.

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `mu.tsx` | Sí — hero "Baumex", "Constructora in-house de Grupo Nelson", typewriter de clientes, 2 CTAs | No | Hero full-screen con imagen fija, overlay oscuro, badge, typewriter animado | Copiar |
| `nu.tsx` | Sí — "Construcción Industrial de Clase Mundial", párrafo, "Disciplinas de ingeniería in-house", lista de 3 disciplinas | No | Tres columnas: título, texto, caja con checkmarks | Copiar |
| `xi.tsx` | Sí — "Track record", "33 corporaciones internacionales en 28 años", lista de m²/sectores/ciudades, botón "Contáctanos" | No | Split: imagen izquierda + texto con lista y botón | Copiar |
| `omicron.tsx` | Sí — "Construcción Industrial", "Proyectos Especiales", "Estándares Internacionales" con párrafos largos | No | Tres filas numeradas (1-2-3) con título y párrafo | Copiar |
| `pi.tsx` | Sí — párrafo sobre LEED, "Arquitectura Industrial", "Funciona y se Ve Bien" | No | Texto statement + imagen con tarjeta superpuesta | Copiar |
| `rho.tsx` | Sí — cita testimonial, "Director de Planta — Empresa Fortune 500", 6 celdas con disciplinas de ingeniería | No | Sección azul diagonal, testimonio, "BAUMEX" decorativo, grid 3x2 | Copiar |
| `sigma.tsx` | Sí — "De brief a entrega", 3 fases de proceso, 2 features de comunicación (datos en arrays internos) | No | Side-by-side con iconos y proceso en 3 fases | Copiar |
| `tau.tsx` | Sí — "Servicios", "Diseño e Ingeniería", "Build-to-Suit", "Llave en Mano", "Portafolio" | No | Mosaico 2x2 de celdas: fotos + tarjetas de servicios | Copiar |
| `upsilon.tsx` | Sí — "Necesitas una constructora con experiencia en:", 13 pills de especialidades, texto con tachado | No (pills en array interno) | Pills/badges de especialidades + imagen + texto tachado | Copiar |
| `phi.tsx` | Sí — "Construcción ordenada. Reportes semanales.", lista de servicios, botones "Ver más" | No | Imagen circular grande + texto con lista y botones | Copiar |
| `chi.tsx` | Sí — "404 días sin accidentes. 1,092,745 horas hombre.", botón "Contáctanos" | No | CTA banner azul centrado | Copiar |
| `psi.tsx` | Sí — "Preguntas frecuentes", 9 FAQs completas (en array interno `faqs`) | No | FAQ con título y 9 pares pregunta/respuesta | Copiar |

**Resumen Baumex:** 12 copias locales. Ningún componente es reutilizable ni visual puro.
**Dependencia externa:** `mu.tsx` importa `TypewriterClients` de `@/components/motion-plus/typewriter-clients` — hay que verificar si tiene texto hardcodeado.
**Texto en page.tsx:** Solo metadata (título, descripción). El resto del texto vive en los componentes.

---

## 2. Build-to-Suit (`/constructora/build-to-suit`) — 4 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `beta.tsx` | Sí — "Nave a la medida vs. nave especulativa", párrafo sobre Gulfstream/Skyworks, letras "BTS" | No | 2 columnas con imágenes superpuestas, texto comparativo | Copiar |
| `gamma.tsx` | Sí — "Naves Industriales Fabricadas a la Medida", "¿Cuántos Megawatts?" | No | Imagen central + tarjeta naranja superpuesta | Copiar |
| `delta.tsx` | Sí — "Tu Nave Como Siempre la Quisiste" | No | Imagen + título grande | Copiar |
| `epsilon.tsx` | Sí — 20 items de lista (beneficios BTS), letras "BTS" gigantes | No | Fondo degradado con lista en 2 columnas | Copiar |

**Texto adicional en page.tsx:** Props de `TarjetaHeroOriginalBeta` (badge1, badge2, título, descripción), un `<h2>` inline, metadata.

---

## 3. Llave en Mano (`/constructora/llave-en-mano`) — 6 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `zeta.tsx` | Sí — "Naves listas para operar en Mexicali", lista de parques, párrafo | No | Hero animado con polígono, lista de parques | Copiar |
| `eta.tsx` | Sí — "Selecciona el parque...", párrafo, botón "Contáctanos" | No | Split imagen + contenido | Copiar |
| `teta.tsx` | Sí — "Arranca producción sin esperar 12-24 meses", párrafo nearshoring | No | 2 columnas asimétricas con imágenes | Copiar |
| `iota.tsx` | Sí — "Reduce tu inversión inicial", párrafo sobre infraestructura, botón | No | 2 columnas 50/50 con línea divisoria | Copiar |
| `kappa.tsx` | Sí — "¿No encuentras lo que necesitas?", párrafo sobre Baumex | No | Imagen centrada con texto y nota lateral | Copiar |
| `lamda.tsx` | Sí — "4 parques industriales con naves disponibles", botones | No | 2 columnas con imágenes + sección full-width negra | Copiar |

---

## 4. Diseño e Ingeniería (`/constructora/diseno-e-ingenieria`) — 15 componentes

**Página atípica:** Casi todos los componentes ya tienen props de texto (`con-props/`).

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `CuadriculaSectionConProps` | Sí | Sí | Hero mosaico con badge, título, párrafo, botones | Props |
| `GunLikeConProps` | Sí | Sí | Intro con polígono, título y párrafo | Props |
| `ImagenConEtiquetaConProps` | Sí | Sí | Imagen con etiqueta de texto | Props |
| `LineaLConProps` | No | No | Línea decorativa en forma de L | Reusar |
| `BigNumberConProps` | Sí | Sí | Número grande con título y subtítulo | Props |
| `CuadroCirculoConEscuadraConProps` | Sí | Sí | Cuadro con círculo, título, párrafo, items | Props |
| `Mosaico2ConProps` | Sí | Sí | Layout 2x2 con títulos y links | Props |
| `ParrafoBigConProps` | Sí | Sí (children) | Párrafo grande | Props |
| `FeatureSection6BPConProps` | Sí | Sí | 2 features con imagen, badge, título | Props |
| `FeatureSection5InvertedBPConProps` | Sí | Sí | 4 features con imagen y tagline | Props |
| `FeatureSection3BPConProps` | Sí | Sí | 2 features con imagen y tagline | Props |
| `SplitWithImageBPConProps` | Sí | Sí | Split imagen + texto con features | Props |
| `FaqSectionsThreeColumnsBPConProps` | Sí | Sí | FAQs con título y array de preguntas | Props |
| `GridOverlay` | No | No | Cuadrícula decorativa SVG | Reusar |
| `CuadritosLluviaDos` | No | No | Elemento decorativo | Reusar |

**Resumen:** 0 copias, 10 via props, 3 reusar, 2 decorativos. Esta es la página más fácil de traducir — solo hay que pasar props en inglés desde el `page.tsx`.

---

## 5. Proyectos Especializados (`/constructora/proyectos-especializados`) — 3 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `SplitSimpleBP` | Parcial | Parcial — `tagline` y `title` sí, body es `children` | Split imagen + texto | Props (body en page.tsx) |
| `GridOverlay` | No | No | Cuadrícula decorativa | Reusar |
| `CuadritosLluviaDos` | No | No | Elemento decorativo | Reusar |

**Nota:** El hero y varios bloques de esta página son HTML inline en el `page.tsx`, no componentes brandpetram. Para traducir, se duplica el `page.tsx` con texto inglés.

---

## 6. Estándares Internacionales (`/constructora/estandares-internacionales`) — 5 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `ImagenRectangulo` | No | No | Imagen con overlay y grid | Reusar |
| `CuadritosLluviaDos` | No | No | Decorativo | Reusar |
| `GunLikeConProps` | Sí | Sí | Polígono + título + párrafo | Props |
| `FeatureSection5InvertedBPConProps` | Sí | Sí | 4 features con imagen y tagline | Props |
| `SplitWithImageBPConProps` | Sí | Sí | Split imagen + texto con features | Props |

**Nota:** El `h1` sobre la imagen es HTML inline hardcodeado en el `page.tsx`.

---

## 7. Portafolio Baumex (`/constructora/portafolio`) — 2 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `TablaPortafolioBaumex` | Sí — headers de columnas hardcodeados | Parcial — recibe `proyectos` como data pero headers en ES | Tabla de proyectos completados | Propear (agregar `lang`) |
| `SidebarPortafolioBaumex` | Sí — títulos y párrafos hardcodeados | Parcial — números via props, textos no | Sidebar con métricas y resumen | Propear (agregar `lang`) |

---

## 8. LEED principal (`/constructora/leed`) — 3 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `HeroMarketing1` | Sí — título, párrafo, sidebar labels | No | Hero de marketing con sidebar | Propear o copiar |
| `SidebarSticky1` | Sí — encabezados, párrafos, links, datos clave | No | Sidebar sticky con navegación LEED | Propear o copiar |
| `CarruselLeed` | Sí — título "Certifica tu Nave", 7 items con title/subtitle/etiqueta | No (array interno `leedCarruselItems`) | Carrusel de pilares LEED | Propear |

**Nota:** `SidebarSticky1` también importa `GridPoligonos2x1TextoVertical` y `GridPoligonos1x2TextoLargo` internamente — esos componentes anidados probablemente tienen texto hardcodeado adicional.

---

## 9. LEED subpáginas (7 páginas) — 1 componente compartido

Las 7 subpáginas (sitios-sostenibles, energía-atmósfera, calidad-ambiental, materiales-recursos, clima-extremo, sistemas-operativos, proceso-certificación) usan el mismo componente:

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `LeedPageLayout` | Parcial | Parcial — recibe copy principal via props pero tiene texto interno hardcodeado | Layout de página LEED con breadcrumb, hero, features, CTA | Propear (agregar `lang`) |

**Texto hardcodeado dentro de `LeedPageLayout`:**
- "Certificación LEED" (breadcrumb)
- "Fuentes: " (label)
- "Cotiza tu nave LEED" (botón CTA)
- "Ver todos los temas LEED" (botón secundario)
- Incluye `<CarruselLeed />` internamente (7 items hardcodeados)

**Texto via props desde cada page.tsx:** `eyebrow`, `titulo`, `intro`, `parrafos[]`, `features[]`, `subtituloSeccion`, `parrafoCierre`, `fuentes` — todo en español en cada `page.tsx`.

**Para traducir:** Propear `LeedPageLayout` con `lang` para los textos internos, y pasar valores en inglés desde cada `page.tsx`.

---

## 10. Parques individuales (4 páginas) — 3 componentes compartidos

Nelson II, Nelson I, Vigía I y Vigía II usan los mismos componentes:

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `ParkHero` | Parcial — labels de badges hardcodeados ("Desde", "hectáreas", "empresas establecidas", "naves") | Parcial — datos de Sanity via `park` | Hero con imagen, nombre del parque, badges | Propear (agregar `lang` para labels) |
| `FichaTecnicaParque` | Sí — ~30 labels hardcodeados ("Especificaciones del parque", "Datos generales", "Año de operación", "Superficie total", "Disponible", "Ocupada", etc.) | Parcial — datos de Sanity, pero todos los labels en ES | Ficha técnica completa del parque | Propear (agregar `lang` para labels) |
| `ParkMap` | Sí — "Ubicación", "Abrir en Google Maps" | Parcial — parkName y address via props | Mapa con ubicación | Propear (agregar `lang`) |
| `VirtualTourBP` | No (defaults, pero se sobreescriben) | Sí — title, subtitle via props | Tour virtual 360° embebido | Props |

**Datos de Sanity:** Los datos de negocio (nombre del parque, superficie, edificios, specs de cada nave) vienen de Sanity via `getParkBySlug()`. No se traducen. Solo hay que traducir los labels de UI.

---

## 11. Nelson — Diferencia Nelson (`/nelson/diferencia-nelson`) — 4 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `EditorialCascadaBeta` | Sí — título, párrafo, stats, botones | No | Editorial con cascada de cubos | Propear o copiar |
| `SplitSimpleBP` | Parcial | Parcial — tagline/title sí, body es children | Split imagen + texto | Props (body en page.tsx) |
| `OffsetWithFeatureListBP` | Sí — features con títulos, descripciones, nombres | No | Lista de features offset | Propear o copiar |
| `MosaicoLiderazgo` | Sí — grid con títulos y descripciones | No | Grid de imágenes y cards de liderazgo | Propear o copiar |

---

## 12. Nelson — Liderazgo (`/nelson/liderazgo`) — 1 componente

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `MosaicoLiderazgo` | Sí — grid con títulos y descripciones | No | Grid de imágenes y cards | Propear o copiar |

**Nota:** El resto del contenido de esta página es HTML inline en el `page.tsx`.

---

## 13. Nelson — Nuestra Historia (`/nelson/nuestra-historia`) — 2 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `StandardsPoster` | Parcial — siglas internacionales (LEED, FM Global) | Parcial — `standards` via props | Lista de estándares/certificaciones | Props |
| `CursorTrailGrupoNelson` | No | No | Trail de imágenes siguiendo el cursor | Reusar |

**Nota:** Todo el contenido textual visible es HTML inline en el `page.tsx`.

---

## 14. Nelson — Trayectoria (`/nelson/trayectoria`) — 3 componentes

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `LogosGridBP2` | Sí — textos del lado izquierdo | No | Grid de logos de clientes con texto lateral | Propear (Tier 2) |
| `StatsGridBPGamma` | Sí — números y labels | No | Grid de estadísticas animadas | Propear (Tier 2) |
| `EditorialCascadaBP` | Sí — texto editorial largo | No | Editorial con cascada de cubos 3D | Propear (Tier 1/2) |

---

## 15. Experiencia — 3 páginas

### Excelencia Operativa
**No importa componentes de `brandpetram/`.** Usa componentes locales en `./sections/`. Todo el texto visible es HTML inline en el `page.tsx`.

### Casos de Éxito
**No importa componentes de `brandpetram/`.** Usa componentes locales en `./sections/`. Todo el texto visible es HTML inline en el `page.tsx`.

### Normas, Certificaciones y Estándares — 1 componente

| Componente | Texto ES | Props de texto | Descripción visual | Acción |
|------------|----------|----------------|--------------------|--------|
| `HeroMotionPlus` | Sí | Sí — badge, headlines, subtitle, botones, métricas via props | Hero animado con métricas | Props |

**Nota:** El resto del contenido es HTML inline en el `page.tsx`.

---

## Resumen Ejecutivo

### Esfuerzo por página (de menor a mayor)

| Página | Componentes brandpetram | Copiar | Propear | Props | Reusar | Esfuerzo |
|--------|------------------------|--------|---------|-------|--------|----------|
| Diseño e Ingeniería | 15 | 0 | 0 | 10 | 3 | **Bajo** — solo pasar props en inglés |
| Estándares Internacionales | 5 | 0 | 0 | 3 | 2 | **Bajo** |
| Normas/Certificaciones | 1 | 0 | 0 | 1 | 0 | **Bajo** |
| Excelencia Operativa | 0 | 0 | 0 | 0 | 0 | **Bajo** — solo HTML inline |
| Casos de Éxito | 0 | 0 | 0 | 0 | 0 | **Bajo** — solo HTML inline |
| Nuestra Historia | 2 | 0 | 0 | 1 | 1 | **Bajo** |
| Proyectos Especializados | 3 | 0 | 0 | 1 | 2 | **Bajo** |
| LEED subpáginas (×7) | 1 cada una | 0 | 1 | 0 | 0 | **Medio** — propear LeedPageLayout una vez, luego 7 page.tsx |
| Parques individuales (×4) | 3-4 cada uno | 0 | 3 | 1 | 0 | **Medio** — propear ParkHero/FichaTecnica/ParkMap una vez |
| Portafolio | 2 | 0 | 2 | 0 | 0 | **Medio** |
| Liderazgo | 1 | 0 | 1 | 0 | 0 | **Medio** |
| Diferencia Nelson | 4 | 0 | 3-4 | 0-1 | 0 | **Medio-Alto** |
| Trayectoria | 3 | 0 | 3 | 0 | 0 | **Medio** — los 3 son Tier 2 |
| LEED principal | 3 | 0 | 3 | 0 | 0 | **Alto** — componentes complejos |
| Build-to-Suit | 4 | 4 | 0 | 0 | 0 | **Alto** — 4 copias locales |
| Llave en Mano | 6 | 6 | 0 | 0 | 0 | **Alto** — 6 copias locales |
| Baumex | 12 | 12 | 0 | 0 | 0 | **Muy alto** — 12 copias locales |

### Conteo total de acciones

| Acción | Cantidad | Descripción |
|--------|----------|-------------|
| **Copiar** (crear versión inglés) | ~22 componentes | Griegos de Baumex (12), Build-to-Suit (4), Llave en Mano (6) |
| **Propear** (agregar `lang` o props) | ~13 componentes | ParkHero, FichaTecnicaParque, ParkMap, LeedPageLayout, CarruselLeed, HeroMarketing1, SidebarSticky1, TablaPortafolioBaumex, SidebarPortafolioBaumex, EditorialCascadaBeta, OffsetWithFeatureListBP, MosaicoLiderazgo, LogosGridBP2 (+3 ya en Tier 2) |
| **Props** (ya aceptan, solo pasar valores) | ~18 componentes | Todos los `con-props/` + HeroMotionPlus + VirtualTourBP + StandardsPoster |
| **Reusar** (sin cambios) | ~8 componentes | GridOverlay, CuadritosLluviaDos, LineaLConProps, ImagenRectangulo, CursorTrailGrupoNelson |

### Componentes que aparecen en múltiples páginas

| Componente | Páginas | Nota |
|------------|---------|------|
| `MosaicoLiderazgo` | Diferencia Nelson, Liderazgo | Propear una vez, se reutiliza |
| `EditorialCascadaBeta` | Diferencia Nelson | Solo aquí (la versión `EditorialCascadaBP` está en Trayectoria) |
| `SplitSimpleBP` | Diferencia Nelson, Proyectos Especializados | Props parciales (tagline/title sí, body es children) |
| `GridOverlay` | Diseño e Ingeniería, Proyectos Especializados, Estándares | Decorativo, reusar |
| `CuadritosLluviaDos` | Diseño e Ingeniería, Proyectos Especializados, Estándares | Decorativo, reusar |

### Orden recomendado de traducción (actualización al plan)

El plan maestro recomienda empezar con páginas sin Tier 3. Este inventario confirma
esa recomendación y la refina:

**Ronda 1 — Páginas sin copias locales (esfuerzo bajo):**
1. Home (componentes Tier 1/2 ya propeados en Fase 5)
2. Contacto (formulario con `lang`)
3. Legal (3 páginas de texto)
4. Diseño e Ingeniería (todo via props)
5. Estándares Internacionales (todo via props)
6. Experiencia — Excelencia Operativa (HTML inline)
7. Experiencia — Casos de Éxito (HTML inline)
8. Experiencia — Normas/Certificaciones (1 componente via props)
9. Nuestra Historia (1 via props, 1 reusar)

**Ronda 2 — Páginas que requieren propear componentes compartidos:**
10. Parques overview
11. Parques individuales (×4) — requiere propear ParkHero, FichaTecnicaParque, ParkMap
12. LEED subpáginas (×7) — requiere propear LeedPageLayout + CarruselLeed
13. LEED principal — requiere propear HeroMarketing1, SidebarSticky1
14. Portafolio — requiere propear TablaPortafolioBaumex, SidebarPortafolioBaumex
15. Trayectoria — requiere propear LogosGridBP2, StatsGridBPGamma, EditorialCascadaBP
16. Diferencia Nelson — requiere propear EditorialCascadaBeta, OffsetWithFeatureListBP, MosaicoLiderazgo
17. Liderazgo — requiere propear MosaicoLiderazgo (si ya se propeó en Diferencia Nelson, reusar)

**Ronda 3 — Páginas que requieren copias locales (esfuerzo alto):**
18. Build-to-Suit (4 copias)
19. Llave en Mano (6 copias)
20. Proyectos Especializados (HTML inline + 1 via props)
21. Baumex (12 copias)

---

## Decisiones pendientes

1. **¿Propear o copiar los componentes de LEED principal?** (`HeroMarketing1`, `SidebarSticky1`, `CarruselLeed`). Son complejos y solo se usan en una página. Propear es más limpio pero más trabajo; copiar es más rápido pero duplica código.

2. **¿Los ~13 componentes de la columna "Propear" se absorben en Fase 5 (Tier 2) o se hacen en Fase 6c?** El plan maestro asigna el propeado de Tier 2 a Fase 5, pero este inventario revela componentes adicionales que no estaban en la tabla Tier 2 original (ej: `ParkHero`, `FichaTecnicaParque`, `LeedPageLayout`).

3. **`TypewriterClients` en `mu.tsx`** — ¿tiene texto hardcodeado que también hay que traducir?

4. **Componentes anidados en `SidebarSticky1`** — importa `GridPoligonos2x1TextoVertical` y `GridPoligonos1x2TextoLargo`. ¿Tienen texto hardcodeado adicional?
