# Plan para habilitar un worktree por sección

## 1. Objetivo

Preparar la arquitectura del proyecto Grupo Nelson para que **cada sección real del sitio web** tenga su propio **git worktree independiente**, permitiendo:

- **Un worktree por sección:** Cada sección del sitio tiene su propia rama y espacio de trabajo. La unidad es la **ruta de primer o segundo nivel** que el usuario percibe como sección diferenciada (ej: `/constructora/baumex`, `/inventario/naves-disponibles`, `/contacto`).
- **Trabajo paralelo seguro:** Dos o más sesiones (Claude, Codex, humano) editando secciones distintas sin colisiones de archivos.
- **Mínima superficie de conflicto:** Cada worktree toca solo los archivos de su sección; los archivos compartidos del sistema se editan en un worktree dedicado (`work-system`).
- **Integración controlada:** Los cambios se integran vía branches y pull requests con review.

**Principio rector:** Si una sección hoy no puede tener su propio worktree, no se agrupa con otra por comodidad — se marca como "bloqueada" con su refactor pendiente documentado.

### Definición de "sección"

La unidad de worktree es la **sección diferenciada del sitio**: una ruta (o cluster de sub-rutas) que tiene identidad propia y cuyos archivos no se superponen con los de otras secciones. En la práctica:

- `/contacto` y `/gracias` son secciones separadas (archivos distintos, funciones distintas).
- Cada sub-página de LEED (`/constructora/leed/calidad-ambiental`, etc.) es una sección propia.
- Cada parque individual (`/parques-industriales-mexicali/nelson-i`) es una sección propia.
- Cada sub-página de `/proyecto` es una sección propia.

Esto no significa que deba haber un worktree activo simultáneamente para cada una — significa que cada sección **puede** tener el suyo si se necesita.

---

## 2. Resumen ejecutivo

### ¿Está listo el proyecto hoy?

**Parcialmente.** Muchas secciones ya están suficientemente aisladas para tener worktree propio hoy. El bloqueante principal es la **Home page monolítica** y la necesidad de un **ownership map** formal que defina qué archivos pertenecen a qué sección.

### ¿Qué lo bloquea principalmente?

1. **Home page monolítica:** `src/app/page.tsx` compone 18+ componentes en un solo archivo. Dos personas trabajando en secciones distintas del home editarían el mismo archivo.
2. **Falta de ownership map:** No hay un documento que asigne cada componente a una sección o al sistema. Sin eso, no hay reglas claras sobre qué puede tocar cada worktree.
3. **Componentes `con-props/` usados por múltiples secciones:** Los 18 componentes en `brandpetram/con-props/` son infraestructura de diseño compartida. Si un worktree modifica uno, puede afectar otras secciones.

### ¿Qué tan lejos está?

- **40 secciones** pueden tener worktree propio hoy (contando cada sub-página de LEED, cada parque, cada sub-página de proyecto como sección independiente).
- **2 secciones** requieren cambios menores (resolver dependencia cross-section O1).
- **2 secciones** están bloqueadas (Home y English).
- **1 fase de documentación** (ownership map) + **1 fase de refactor** (Home) desbloquearían ~95% de los worktrees.

---

## 3. Correcciones sobre el estado actual del repo

El plan anterior (v1) contenía supuestos que no reflejaban el estado real del código. Aquí se documentan las correcciones y cómo cambian la priorización.

### Supuestos corregidos

| Supuesto del plan v1 | Estado real verificado | Impacto en priorización |
|---|---|---|
| `AlphaBP` tiene copy hardcodeado sin props | **Ya acepta prop `descripcion`** con default. Solo la imagen alt y src quedan hardcodeadas. | Baja prioridad C2 → eliminada del roadmap como refactor grande |
| `ScrollStorytelling` tiene copy embebido sin configurar | **Ya acepta `items` por props** con interfaz completa (`ContentItem[]`). Los `defaultItems` son fallback, no bloqueo. | Baja prioridad C3 → eliminada como refactor; solo necesita que la Home pase items explícitos al extraer secciones |
| `Header` necesita parametrizar su estructura de datos | **Ya consume `navigation.ts`** — todas las URLs, nombres y descripciones vienen de `src/data/nav/navigation.ts`. Header mapea `iconKey` a componentes React. | Elimina R2 y C6 del roadmap; Header ya está desacoplado de su contenido |
| `HeroVideoCover` es foco principal de extracción de copy comercial | **No tiene copy comercial propio.** Todo el contenido se pasa via `children` prop. Solo tiene un fallback de HTML5 video ("Tu navegador no soporta..."). | Elimina C4 del roadmap; no requiere trabajo |
| `globals.css` tiene 13,000+ líneas | **460 líneas.** Contiene breakpoints, temas, variables CSS y animaciones. Es compacto y estable. | Reduce riesgo de globals.css de "medio" a "bajo"; R1 se elimina del roadmap |
| Componentes griegos podrían estar compartidos entre secciones | **Confirmado: cada componente griego se usa en exactamente UNA página.** AlphaBP→Home, Beta/Gamma/Delta/Epsilon→build-to-suit, Zeta-Lambda→llave-en-mano, Mu-Psi→baumex. | Confirma que constructora ya es aislable por sub-sección |
| Header se importa directamente en todas las páginas | **Header se importa en layouts para Blog, Noticias y LEED**, no en las páginas individuales. Las páginas de estas secciones no tocan Header directamente. | Aumenta independencia real de Blog, Noticias y LEED |

### Cómo cambia la priorización

1. **El bloqueante #1 ahora es claramente la Home page monolítica**, no la extracción de copy de componentes.
2. **Los componentes principales ya aceptan props.** El problema no es que no se puedan configurar, sino que el Home los compone todos en un solo archivo.
3. **El Header no es un riesgo operativo alto** para worktrees de sección, porque su contenido ya viene de archivos de datos externos y muchas secciones lo reciben via layout.
4. **globals.css no es un problema real** — con 460 líneas y cambios poco frecuentes, no genera conflictos.
5. **Los componentes griegos son de un solo dueño**, lo que confirma que constructora puede tener worktrees por sub-sección.

---

## 4. Inventario de secciones del sitio

> **Nota sobre Header:** Header se importa de dos formas: (a) directamente en cada `page.tsx`, o (b) en un `layout.tsx` compartido que envuelve a las páginas. Ambas formas crean dependencia con `Header.tsx`, pero las secciones con Header en layout tienen mejor aislamiento porque las páginas individuales no lo tocan.

### 4.1 Home (/)

| Campo | Detalle |
|---|---|
| **Ruta** | `/` |
| **Archivos principales** | `src/app/page.tsx` (275 líneas, client component) |
| **Componentes usados** | Header, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, AlphaBP, ScrollStorytelling, Mosaico2ConProps, MosaicoInvertidoConProps, CirculosConProps, FaqSectionsThreeColumnsBPConProps, CincoCardsConProps, VirtualTourBP, BadgeAniversario, DiagonalDivider, LogoCloud, TickerOverflow, CuadritosLluvia, RadiantHeader |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Inline en page.tsx: FAQs (6 preguntas), textos de CirculosConProps, textos de CincoCardsConProps, textos de Mosaico2ConProps. AlphaBP y ScrollStorytelling reciben defaults via props. |
| **Nivel de independencia** | **Bajo.** Archivo monolítico con 18+ imports. Es el principal bloqueante para worktrees. |

### 4.2 Nelson — Nuestra Historia (/nelson/nuestra-historia)

| Campo | Detalle |
|---|---|
| **Ruta** | `/nelson/nuestra-historia` |
| **Archivos principales** | `src/app/nelson/nuestra-historia/page.tsx` (~119 líneas, server component) |
| **Componentes usados** | Header |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Placeholder lorem ipsum. Copy hardcodeado con enlace a Nelson II. |
| **Nivel de independencia** | **Alto.** Solo depende de Header. Página autocontenida. |

### 4.3 Nelson — Trayectoria (/nelson/trayectoria)

| Campo | Detalle |
|---|---|
| **Ruta** | `/nelson/trayectoria` |
| **Archivos principales** | `src/app/nelson/trayectoria/page.tsx` (~30 líneas, server component) |
| **Componentes usados** | Header, LogosGridBP2, StatsGridBPGamma, EditorialCascadaBP |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Mínimo en page.tsx; copy dentro de LogosGridBP2, StatsGridBPGamma, EditorialCascadaBP (hardcodeado en componentes) |
| **Ownership de componentes** | LogosGridBP2: **exclusivo** (confirmado). StatsGridBPGamma: **exclusivo** (confirmado). EditorialCascadaBP: **exclusivo** (confirmado: solo importada por trayectoria). |
| **Nivel de independencia** | **Alto.** Los 3 componentes BP son exclusivos de esta página. Todos los ownership resueltos. |

### 4.4 Nelson — Diferencia Nelson (/nelson/diferencia-nelson)

| Campo | Detalle |
|---|---|
| **Ruta** | `/nelson/diferencia-nelson` |
| **Archivos principales** | `src/app/nelson/diferencia-nelson/page.tsx` (~150 líneas, server component) |
| **Componentes usados** | Header, OffsetWithFeatureListBP, SplitSimpleBP, EditorialCascadaBeta |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Extenso y hardcodeado: "60+ años", "Ownership directo", "Constructora in-house", casos Gulfstream/Honeywell/Interiores Aéreos, CTAs |
| **Ownership de componentes** | SplitSimpleBP: **compartido** (confirmado: también usado por proyectos-especializados → sistema). OffsetWithFeatureListBP: **exclusivo** (confirmado: solo diferencia-nelson). EditorialCascadaBeta: **compartido** (confirmado: también usado por proyecto/bitacora). |
| **Nivel de independencia** | **Alto.** Copy inline. SplitSimpleBP y EditorialCascadaBeta son compartidos → sistema. OffsetWithFeatureListBP es exclusivo. Todos los ownership resueltos. |

### 4.5 Nelson — Liderazgo (/nelson/liderazgo)

| Campo | Detalle |
|---|---|
| **Ruta** | `/nelson/liderazgo` |
| **Archivos principales** | `src/app/nelson/liderazgo/page.tsx` (~170 líneas, server component) |
| **Componentes usados** | Header, MosaicoLiderazgo |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Extenso: nombres de familia Nelson, estadísticas de clientes, casos de estudio |
| **Ownership de componentes** | MosaicoLiderazgo: **exclusivo de esta página** (confirmado, no se usa en ninguna otra sección) |
| **Nivel de independencia** | **Alto.** Página autocontenida. MosaicoLiderazgo confirmado exclusivo. |

### 4.6 Constructora — Baumex (/constructora/baumex)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/baumex` |
| **Archivos principales** | `src/app/constructora/baumex/page.tsx` (~73 líneas, server component) |
| **Componentes usados** | Header, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi (12 componentes griegos exclusivos) |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Dentro de los 12 componentes griegos (hardcodeado). Page.tsx es composición pura. |
| **Nivel de independencia** | **Alto.** Los 12 componentes griegos son **confirmados exclusivos** de esta página. |

### 4.7 Constructora — Build to Suit (/constructora/build-to-suit)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/build-to-suit` |
| **Archivos principales** | `src/app/constructora/build-to-suit/page.tsx` (~90 líneas, server component) |
| **Componentes usados** | Header, HeroVideoCover, TarjetaHeroOriginalBeta, Beta, Gamma, Delta, Epsilon |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Hardcodeado en page.tsx: badge, título principal, descripción, heading. Componentes griegos exclusivos. |
| **Componentes compartidos** | HeroVideoCover (compartido con Home y English, estable via props), TarjetaHeroOriginalBeta (exclusivo confirmado) |
| **Nivel de independencia** | **Alto.** Componentes griegos exclusivos confirmados. TarjetaHeroOriginalBeta exclusiva confirmada. HeroVideoCover compartido pero estable. |

### 4.8 Constructora — Llave en Mano (/constructora/llave-en-mano)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/llave-en-mano` |
| **Archivos principales** | `src/app/constructora/llave-en-mano/page.tsx` (~51 líneas, server component) |
| **Componentes usados** | Header, Zeta, Eta, Teta, Iota, Kappa, Lamda (6 componentes griegos exclusivos) |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Dentro de componentes griegos. Page.tsx es composición pura. |
| **Nivel de independencia** | **Alto.** 6 componentes griegos **confirmados exclusivos**. |

### 4.9 Constructora — Diseño e Ingeniería (/constructora/diseno-e-ingenieria)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/diseno-e-ingenieria` |
| **Archivos principales** | `src/app/constructora/diseno-e-ingenieria/page.tsx` (~337 líneas, client component) |
| **Componentes usados** | Header, CuadriculaSectionConProps, GunLikeConProps, LineaLConProps, ParrafoBigConProps, BigNumberConProps, ImagenConEtiquetaConProps, CuadroCirculoConEscuadraConProps, Mosaico2ConProps, FaqSectionsThreeColumnsBPConProps, FeatureSection3BPConProps, FeatureSection5InvertedBPConProps, FeatureSection6BPConProps, SplitWithImageBPConProps, CuadritosLluviaDos, GridOverlay |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Extenso y hardcodeado en page.tsx: badge, títulos, descripciones de 6 disciplinas, FAQs, estadísticas de seguridad, CTAs. Todo el copy se pasa como props a componentes con-props. |
| **Componentes compartidos** | Usa 13 componentes `con-props/` — compartidos con Home y otras páginas de constructora |
| **Nivel de independencia** | **Medio.** El page.tsx es autocontenido (todo el copy vive ahí, no en los componentes), pero si alguien modifica un componente con-props, podría afectar esta página. |

### 4.10 Constructora — Estándares Internacionales (/constructora/estandares-internacionales)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/estandares-internacionales` |
| **Archivos principales** | `src/app/constructora/estandares-internacionales/page.tsx` (~148 líneas, server component) |
| **Componentes usados** | Header, ImagenRectangulo, CuadritosLluviaDos, GunLikeConProps, FeatureSection5InvertedBPConProps, SplitWithImageBPConProps |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Extenso y hardcodeado en page.tsx. Pasado como props a componentes con-props. |
| **Nivel de independencia** | **Medio-alto.** Copy en page.tsx, componentes via props. Riesgo solo si se modifica un con-props. |

### 4.11 Constructora — Proyectos Especializados (/constructora/proyectos-especializados)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/proyectos-especializados` |
| **Archivos principales** | `src/app/constructora/proyectos-especializados/page.tsx` (~303 líneas, server component) |
| **Componentes usados** | Header, CuadritosLluviaDos, GridOverlay, SplitSimpleBP |
| **Header** | Importado directamente en page.tsx |
| **Copy** | Muy extenso: 4 casos de estudio (Skyworks, Gulfstream, Honeywell, Deacero) con especificaciones técnicas detalladas |
| **Nivel de independencia** | **Alto.** Componentes mínimos, casi todo es HTML/JSX puro con copy inline. |

### 4.12 Constructora — Portafolio (/constructora/portafolio)

| Campo | Detalle |
|---|---|
| **Ruta** | `/constructora/portafolio` |
| **Archivos principales** | `src/app/constructora/portafolio/page.tsx` (~13 líneas), `page-client.tsx` |
| **Componentes usados** | PortafolioBaumexClient (local) |
| **Header** | Importado en `page-client.tsx` (confirmado: línea 6 importa Header, línea 18 lo renderiza) |
| **Componentes usados** | Header, TablaPortafolioBaumex, SidebarPortafolioBaumex |
| **Datos** | `src/data/proyectos-baumex.ts` |
| **Nivel de independencia** | **Alto.** Wrapper SSR + componente client local + datos propios. Header como sistema. |

### 4.13 Constructora — LEED (/constructora/leed/*)

| Campo | Detalle |
|---|---|
| **Rutas** | `/constructora/leed` + 7 sub-páginas |
| **Archivos principales** | `layout.tsx`, `page.tsx`, 7 sub-page.tsx |
| **Componentes usados** | LeedPageLayout, CarruselLeed |
| **Header** | En `layout.tsx` (no en páginas individuales) |
| **Copy** | En cada page.tsx y en LeedPageLayout |
| **Nivel de independencia** | **Muy alto.** Layout propio, Header en layout, componentes dedicados, sub-páginas independientes. |

### 4.14 Parques Industriales — Índice (/parques-industriales-mexicali)

| Campo | Detalle |
|---|---|
| **Ruta** | `/parques-industriales-mexicali` |
| **Archivos principales** | `src/app/parques-industriales-mexicali/page.tsx` |
| **Componentes usados** | Header, getIndustrialParks (Sanity) |
| **Header** | Importado directamente |
| **Datos** | Sanity CMS via `data/parks/parks-sanity.ts` |
| **Nivel de independencia** | **Alto.** |

### 4.15 Parques Individuales (/parques-industriales-mexicali/nelson-i, nelson-ii, vigia-i, vigia-ii)

| Campo | Detalle |
|---|---|
| **Rutas** | 4 rutas individuales |
| **Archivos principales** | 4 page.tsx |
| **Componentes usados** | Header, ParkHero, FichaTecnicaParque, VirtualTourBP, ParkMap (solo nelson-ii) |
| **Header** | Importado directamente |
| **Datos** | Sanity CMS via `getParkBySlug()` |
| **Componentes compartidos** | VirtualTourBP (compartido con Home — confirmado), componentes park-* (exclusivos de parques — confirmado) |
| **Nivel de independencia** | **Alto.** Componentes park-* son exclusivos. VirtualTourBP es estable (recibe `tourId` prop). |

### 4.16 Blog (/blog/*)

| Campo | Detalle |
|---|---|
| **Rutas** | `/blog`, `/blog/[slug]`, `/blog/category/[category]` |
| **Archivos principales** | `layout.tsx`, `(root)/layout.tsx`, `(root)/page.tsx`, `[slug]/page.tsx`, `category/[category]/page.tsx`, más 4 componentes locales en `src/app/blog/` |
| **Header** | En `layout.tsx` (no en páginas individuales) |
| **Datos** | Sanity CMS (server actions) |
| **Componentes compartidos** | `content-components.tsx` (compartido con Noticias — confirmado: solo 2 archivos lo importan) |
| **Nivel de independencia** | **Muy alto.** Layouts propios, componentes de listado locales, Header en layout. |

### 4.17 Noticias (/noticias/*)

| Campo | Detalle |
|---|---|
| **Rutas** | `/noticias`, `/noticias/[slug]`, `/noticias/category/[category]` |
| **Archivos principales** | `layout.tsx`, `page.tsx`, `[slug]/page.tsx`, `category/[category]/page.tsx`, más 4 componentes locales en `src/app/noticias/` |
| **Header** | En `layout.tsx` (no en páginas individuales) |
| **Datos** | Sanity CMS (server actions) |
| **Componentes compartidos** | `content-components.tsx` (compartido con Blog — confirmado) |
| **Nivel de independencia** | **Muy alto.** Misma estructura que Blog con copias locales de componentes de listado. |

### 4.18 Inventario — Naves Disponibles (/inventario/naves-disponibles)

| Campo | Detalle |
|---|---|
| **Ruta** | `/inventario/naves-disponibles` |
| **Archivos principales** | `page.tsx` (server), `page-client.tsx` (client) |
| **Header** | Importado en `page-client.tsx` (confirmado: línea 3 importa Header, línea 21 lo renderiza) |
| **Componentes usados** | Header, TablaModelosDeProductos, Drawer |
| **Datos** | Sanity CMS (`allNavesQuery`), `data/naves-industriales.ts` (tipo `NaveIndustrial`) |
| **Nivel de independencia** | **Alto.** Depende de Header (sistema) y datos propios. Componentes de tabla y drawer son locales a esta sección. |

### 4.19 Inventario — Terrenos (/inventario/terrenos)

| Campo | Detalle |
|---|---|
| **Ruta** | `/inventario/terrenos` |
| **Archivos principales** | `page.tsx` (server), `page-client.tsx` (client) |
| **Header** | Importado en `page-client.tsx` (confirmado: línea 4 importa Header) |
| **Componentes usados** | Header, TerrenoMiniMapDynamic |
| **Datos** | Sanity CMS (`allTerrenosQuery`), `data/terrenos-geo-lookup.ts` |
| **Nivel de independencia** | **Alto.** Depende de Header (sistema) y datos propios. |

### 4.20 Experiencia — Casos de Éxito (/experiencia/casos-de-exito)

| Campo | Detalle |
|---|---|
| **Ruta** | `/experiencia/casos-de-exito` |
| **Archivos principales** | `page.tsx` (~160 líneas, server component) |
| **Header** | Importado directamente |
| **Copy** | Extenso: 3 casos de estudio (Gulfstream, Honeywell, Interiores Aéreos) con estadísticas |
| **Nivel de independencia** | **Alto.** Página HTML pura con copy inline, sin componentes BP. |

### 4.21 Experiencia — Certificaciones (/experiencia/certificaciones)

| Campo | Detalle |
|---|---|
| **Ruta** | `/experiencia/certificaciones` |
| **Archivos principales** | `page.tsx` (~174 líneas, server component) |
| **Header** | Importado directamente |
| **Copy** | Extenso: ISN, LEED Gold, FM Global, BRB, especificaciones técnicas |
| **Nivel de independencia** | **Alto.** Página HTML pura con copy inline, sin componentes BP. |

### 4.22 Experiencia — Excelencia Operativa (/experiencia/excelencia-operativa)

| Campo | Detalle |
|---|---|
| **Ruta** | `/experiencia/excelencia-operativa` |
| **Archivos principales** | `page.tsx` (~159 líneas), `sections/` (5 archivos: logo-cloud-clientes, feature-cards-resultados, como-trabajamos, capacidades-inhouse, cta) |
| **Header** | Importado directamente en page.tsx |
| **Componentes compartidos** | ProductIllustration, TestimonialSection, NotesFeatures, TestimonialsSection — todos importados desde `(marketing)/product/sections/` |
| **Copy** | Extenso en page.tsx y sections/ |
| **Nivel de independencia** | **Medio.** Tiene secciones extraídas (bueno), pero importa componentes de `(marketing)/product/sections/` (cross-section dependency). |

### 4.23 Contacto (/contacto)

| Campo | Detalle |
|---|---|
| **Ruta** | `/contacto` |
| **Archivos principales** | `page.tsx`, `contact-form.tsx` |
| **Header** | Importado directamente |
| **API** | `src/app/api/submit-form/route.ts` |
| **Nivel de independencia** | **Muy alto.** Formulario autocontenido. |

### 4.24 Gracias (/gracias)

| Campo | Detalle |
|---|---|
| **Ruta** | `/gracias` |
| **Archivos principales** | `page.tsx` |
| **Header** | Importado directamente |
| **Nivel de independencia** | **Muy alto.** Página estática simple. |

### 4.25 English (/en)

| Campo | Detalle |
|---|---|
| **Ruta** | `/en` |
| **Archivos principales** | `page.tsx` (~97 líneas, client component), `layout.tsx` |
| **Componentes usados** | Header-en, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, DiagonalDivider, BadgeAniversario |
| **Componentes compartidos** | HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, DiagonalDivider, BadgeAniversario (todos compartidos con Home) |
| **Nivel de independencia** | **Bajo.** Comparte 5 componentes con Home. Cambios en esos componentes afectan ambas páginas. |

### 4.26 Productos (/productos/*)

| Campo | Detalle |
|---|---|
| **Rutas** | `/productos` + 6 sub-páginas |
| **Archivos principales** | 7 page.tsx en `src/app/productos/` |
| **Header** | No importado en ninguna página |
| **Datos** | `data/parks/` (compartido con Parques) |
| **Componentes** | CatalogoFiltradoParques, CatalogoAgrupadoParques, FichaTecnicaParque (variantes) |
| **Nivel de independencia** | **Medio.** Comparte datos y algunos componentes de ficha técnica con Parques. Funciona como explorador de diseño. |

### 4.27 Proyecto — Interno (/proyecto/*)

| Campo | Detalle |
|---|---|
| **Rutas** | `/proyecto` + 5 sub-páginas |
| **Header** | Importado directamente en algunas sub-páginas (proyecto, documentacion, fotografias, bitacora); NO en contenidos ni fase-2-baumex |
| **Nivel de independencia** | **Muy alto.** Páginas internas de gestión, autocontenidas. |

### 4.28 Secciones auxiliares

| Sección | Ruta | Header | Independencia |
|---|---|---|---|
| Studio (Sanity) | `/studio/[[...tool]]` | No | **Total** |
| QA Terrenos | `/qa/terrenos` | No | **Total** |
| Componentes (test) | `/componentes`, `/componentes-dos`, `/componentes-tres` | Sí (directo) | **Total** — páginas de prueba |
| Dev Fotos | `/dev/fotos` | No | **Total** |
| Marketing Product | `/(marketing)/product` | Sí (en layout, confirmado) | **Alta** — layout propio con Header, secciones locales |

---

## 5. Mapa de superficies de edición

| Sección | Archivos a editar | Archivos compartidos | Riesgo conflicto | ¿Worktree propio? | Motivo |
|---|---|---|---|---|---|
| Home | `app/page.tsx`, 18+ componentes | Header, con-props/*, VirtualTourBP, HeroVideoCover | **Alto** | **Bloqueado** | page.tsx monolítico; requiere extracción de secciones |
| Nelson — Nuestra Historia | `app/nelson/nuestra-historia/page.tsx` | Header | **Bajo** | **Listo** | Página autocontenida |
| Nelson — Trayectoria | `app/nelson/trayectoria/page.tsx` | Header (sistema), LogosGridBP2 (exclusivo), StatsGridBPGamma (exclusivo), EditorialCascadaBP (exclusivo) | **Muy bajo** | **Listo** | 3 componentes BP exclusivos confirmados en v6 |
| Nelson — Diferencia | `app/nelson/diferencia-nelson/page.tsx` | Header, SplitSimpleBP (sistema), EditorialCascadaBeta (sistema), OffsetWithFeatureListBP (exclusivo) | **Bajo** | **Listo** | Todos los ownership resueltos. Compartidos declarados como sistema. |
| Nelson — Liderazgo | `app/nelson/liderazgo/page.tsx` | Header (sistema), MosaicoLiderazgo (exclusivo confirmado) | **Muy bajo** | **Listo** | MosaicoLiderazgo exclusivo de esta página |
| Constructora — Baumex | `app/constructora/baumex/page.tsx`, 12 componentes griegos | Header | **Muy bajo** | **Listo** | Componentes griegos exclusivos confirmados |
| Constructora — Build to Suit | `app/constructora/build-to-suit/page.tsx`, 4 griegos | Header, HeroVideoCover | **Bajo** | **Listo** | Griegos exclusivos; HeroVideoCover estable (props) |
| Constructora — Llave en Mano | `app/constructora/llave-en-mano/page.tsx`, 6 griegos | Header | **Muy bajo** | **Listo** | Griegos exclusivos confirmados |
| Constructora — Diseño e Ingeniería | `app/constructora/diseno-e-ingenieria/page.tsx` | Header, 13 componentes con-props/ (sistema) | **Medio** | **Listo** | con-props/ declarados sistema en ownership map |
| Constructora — Estándares | `app/constructora/estandares-internacionales/page.tsx` | Header, 3 con-props/ | **Bajo** | **Listo** | Copy en page.tsx, pocos componentes compartidos |
| Constructora — Proyectos Esp. | `app/constructora/proyectos-especializados/page.tsx` | Header, SplitSimpleBP (compartido confirmado con diferencia-nelson → sistema) | **Bajo** | **Listo** | Casi todo HTML puro; SplitSimpleBP estable como sistema |
| Constructora — Portafolio | `app/constructora/portafolio/page.tsx`, `page-client.tsx` | Header (en page-client), `data/proyectos-baumex.ts` | **Bajo** | **Listo** | Header en page-client; datos propios |
| LEED (8 sub-páginas) | `app/constructora/leed/[sub]/page.tsx` cada una | Header (en layout) | **Muy bajo** | **Listo** | Layout propio; cada sub-página es worktree independiente |
| Parques — Índice | `app/parques-industriales-mexicali/page.tsx` | Header, `data/parks/` | **Bajo** | **Listo** | Datos compartidos con Productos pero estables |
| Parques — Individuales | 4 page.tsx | Header, VirtualTourBP, `data/parks/` | **Bajo** | **Listo** | Componentes park-* exclusivos confirmados |
| Blog | `app/blog/**` | Header (en layout), content-components.tsx | **Muy bajo** | **Listo** | Todo local excepto content-components |
| Noticias | `app/noticias/**` | Header (en layout), content-components.tsx | **Muy bajo** | **Listo** | Todo local excepto content-components |
| Inventario — Naves | `app/inventario/naves-disponibles/*` | Header (en page-client), Sanity client, `data/naves-industriales.ts` | **Bajo** | **Listo** | Header en page-client; datos propios |
| Inventario — Terrenos | `app/inventario/terrenos/*` | Header (en page-client), Sanity client, `data/terrenos-geo-lookup.ts` | **Bajo** | **Listo** | Header en page-client; datos propios |
| Experiencia — Casos de Éxito | `app/experiencia/casos-de-exito/page.tsx` | Header | **Muy bajo** | **Listo** | Página HTML pura |
| Experiencia — Certificaciones | `app/experiencia/certificaciones/page.tsx` | Header | **Muy bajo** | **Listo** | Página HTML pura |
| Experiencia — Excelencia Op. | `app/experiencia/excelencia-operativa/**` | Header, componentes de `(marketing)/product/sections/` | **Medio** | **Casi listo** | Dependencia cross-section con marketing |
| Contacto | `app/contacto/*`, `api/submit-form/` | Header | **Muy bajo** | **Listo** | Formulario autocontenido |
| Gracias | `app/gracias/page.tsx` | Header | **Muy bajo** | **Listo** | Página estática |
| English | `app/en/*` | Header-en, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, BadgeAniversario, DiagonalDivider | **Alto** | **Bloqueado** | Comparte 5 componentes con Home |
| Productos | `app/productos/**` | `data/parks/` (sistema), `ficha-tecnica-parque*.tsx` (sistema) | **Bajo** | **Listo** | Resuelto: ambos declarados sistema en ownership map |
| Proyecto (6 sub-páginas) | `app/proyecto/[sub]/page.tsx` cada una | Header (en algunas) | **Muy bajo** | **Listo** | Cada sub-página es worktree independiente |

---

## 6. Dependencias y puntos de acoplamiento

### Nivel de confianza

Cada dependencia se clasifica como:
- **Confirmada:** Verificada por lectura directa de imports.
- **Probable:** Inferida de la estructura pero no verificada línea por línea.
- **Incertidumbre:** Requiere verificación adicional.

### 6.1 Header.tsx — Dependencia del sistema (Confirmada)

- **Archivo:** `src/components/Header.tsx`
- **Usado por:** ~28 pages directamente + 4 layouts (blog, noticias, leed, marketing) + 3 page-client.tsx (inventario naves, inventario terrenos, portafolio).
- **Contenido:** Ya desacoplado — consume `src/data/nav/navigation.ts` para URLs, nombres y descripciones. El Header solo mapea `iconKey` a componentes React.
- **Riesgo real:** **Bajo para contenido**, medio para layout/estructura visual. Si se cambia la estructura del Header (no su contenido), afecta todo el sitio.
- **Mitigación:** Declarar Header como zona del sistema. Solo se edita en `work-system`.

### 6.2 Componentes `con-props/` — Infraestructura de diseño compartida (Confirmada)

- **Archivos:** 18 componentes en `src/components/brandpetram/con-props/`
- **Usado por:** Home (5+), Diseño e Ingeniería (13), Estándares Internacionales (3), otras páginas de constructora.
- **Riesgo real:** **Medio.** Si un worktree modifica la estructura visual de un con-props (no su contenido, que llega por props), afecta a todas las páginas que lo usan.
- **Mitigación:** Declarar con-props/ como zona del sistema. Las páginas solo pasan props; no modifican los componentes.

### 6.3 Home page monolítica — Bloqueante principal (Confirmada)

- **Archivo:** `src/app/page.tsx` (275 líneas, 18+ imports)
- **Problema:** Imposible que dos personas trabajen en secciones distintas del Home sin conflicto.
- **Mitigación:** Extraer a `(home)/sections/`.

### 6.4 VirtualTourBP — Compartido entre Home y Parques (Confirmada)

- **Archivos:** Usado por 5 páginas: Home + 4 parques individuales.
- **Riesgo real:** **Muy bajo.** Componente estable que recibe solo `tourId` como prop.
- **Mitigación:** Marcar como zona del sistema. No requiere cambios.

### 6.5 HeroVideoCover — Compartido entre Home, Build-to-Suit y English (Confirmada)

- **Riesgo real:** **Muy bajo.** Todo el contenido llega por props y children. No tiene copy comercial propio.
- **Mitigación:** Marcar como zona del sistema. No requiere cambios.

### 6.6 Datos y componentes de parques — Sistema (Confirmada)

- **Archivos:** `src/data/parks/types.ts`, `parks-data.ts`, `parks-sanity.ts`, `ficha-tecnica-parque.tsx` + 4 variantes (detalle, dinamica, horizontal, vertical)
- **Usado por:** Parques (páginas individuales) y Productos (catálogos y fichas). Uso cruzado confirmado.
- **Riesgo real:** **Bajo-medio.** Si se cambia el tipo `IndustrialPark` o la estructura de ficha-tecnica, ambas secciones se ven afectadas.
- **Mitigación:** Declarar `data/parks/` y `ficha-tecnica-parque*.tsx` como sistema (O2). Se editan solo desde `work-system`.

### 6.7 content-components.tsx — Compartido entre Blog y Noticias (Confirmada)

- **Archivo:** `src/components/content-components.tsx`
- **Usado por:** Exactamente 2 archivos: `blog/[slug]/page.tsx` y `noticias/[slug]/page.tsx`.
- **Riesgo real:** **Muy bajo.** Componente estable de renderizado de Portable Text.
- **Mitigación:** Marcar como zona del sistema.

### 6.8 Componentes de marketing/product/sections/ — Cross-section (Confirmada)

- **Archivos:** `src/app/(marketing)/product/sections/` (product-illustration, testimonial, testimonials-section, notes-features)
- **Usado por:** Exactamente 2 secciones: `(marketing)/product` (origen) y `experiencia/excelencia-operativa` (importa 4 componentes). Dependencia confirmada.
- **Riesgo real:** **Medio.** Si alguien edita marketing/product/sections/, puede romper excelencia-operativa.
- **Mitigación:** Decidir ownership en Fase 1: o bien declararlos como sistema, o bien moverlos a una carpeta compartida.

### 6.9 Componentes BP de Nelson (Resuelto)

Todos los componentes BP usados en secciones de Nelson han sido verificados:

| Componente | Ownership | Usado por |
|---|---|---|
| SplitSimpleBP | **Sistema** | diferencia-nelson, proyectos-especializados |
| EditorialCascadaBeta | **Sistema** | diferencia-nelson, proyecto/bitacora |
| EditorialCascadaBP | **Exclusivo** | trayectoria (mencionada en bitacora como texto, no importada) |
| OffsetWithFeatureListBP | **Exclusivo** | diferencia-nelson |
| MosaicoLiderazgo | **Exclusivo** | liderazgo |
| LogosGridBP2 | **Exclusivo** | trayectoria |
| StatsGridBPGamma | **Exclusivo** | trayectoria |
| TarjetaHeroOriginalBeta | **Exclusivo** | build-to-suit |

No quedan incertidumbres sobre componentes BP de Nelson.

> **Nota:** "Exclusivo" significa exclusivo *hoy* según el uso actual del repo. Si una sección futura necesita uno de estos componentes, debe pasar por el proceso de promoción descrito en §6.11.

### 6.10 Componentes compartidos Home ↔ English (Confirmada)

- **Componentes:** HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, DiagonalDivider, BadgeAniversario
- **Riesgo real:** **Alto para trabajo simultáneo.** Si ambos worktrees necesitan modificar estos componentes, hay conflicto.
- **Nota:** Estos componentes son estables y configurables por props, así que el riesgo es bajo si solo se cambia contenido. El riesgo es alto si se cambia layout/estructura visual.

---

## 6.11 Modelo conceptual de evolución de componentes

**Principio rector: `local first, shared by promotion`.**

Los componentes no nacen compartidos — se vuelven compartidos cuando el uso real lo justifica. Este modelo define cómo evoluciona una página desde copy inline hasta componentes reutilizables, sin sobre-ingeniería anticipada y sin préstamos informales entre secciones.

### Etapas de evolución

**Etapa 0 — Copy inline en `page.tsx`**

La página tiene todo su contenido y estructura directamente en el archivo. Es válido para páginas nuevas, simples o en construcción. El ownership es completamente de la sección. No requiere componentes compartidos.

**Etapa 1 — Componentización local**

La página se divide en archivos dentro de su propia carpeta (`sections/`, `content.ts`). Los componentes resultantes siguen siendo propiedad de la sección — no se consideran shared. Otros worktrees no deben importarlos.

**Etapa 2 — Promoción a shared/system**

Cuando un bloque demuestra utilidad real en otra sección (no utilidad hipotética), se promueve formalmente:

1. Se extraen props con una API clara y suficiente para instanciarse en distintos contextos.
2. Se cambia su ownership a **sistema** en el ownership map.
3. Desde ese momento, solo se edita desde `work-system` — los worktrees de sección pasan contenido por props.

> **Nota sobre "shared" vs "sistema":** No existe una categoría de ownership llamada "shared". Un componente promovido pasa a ser **sistema** — el mismo ownership que tienen Header, con-props/, VirtualTourBP, etc. La carpeta física donde viva (`components/brandpetram/`, `components/ui/`, o una futura `components/shared/`) es detalle de organización, no de ownership. Lo que importa es que se edita desde `work-system` y que las secciones lo consumen por props.

### Reglas

- **No asumir exclusividad eterna.** "Exclusivo" significa exclusivo *hoy*, según el uso actual del repo. Cualquier componente puede ser candidato a promoción si aparece necesidad real.
- **No promover antes de que exista necesidad real.** La reutilización futura se maneja con el proceso de promoción, no con sobre-generalización anticipada.
- **No importar componentes de otra sección directamente.** Si un worktree necesita un bloque que hoy pertenece a otra sección, primero debe pasar por promoción formal a shared/system.
- **Los componentes shared deben tener API por props.** Suficiente para usarse como instancias en distintas páginas sin editar el componente mismo.

### Ejemplo concreto: `experiencia/casos-de-exito`

Hoy esta página está en **Etapa 0**: todo el copy y la estructura viven inline en `page.tsx` (~160 líneas de HTML/JSX puro).

**Evolución sana hacia Etapa 1** (si la complejidad lo justifica):

```
src/app/experiencia/casos-de-exito/
├── page.tsx              # Composición: importa sections/
├── content.ts            # Copy estructurado
└── sections/
    ├── hero.tsx
    ├── stats-strip.tsx
    ├── case-study.tsx     # Reutilizado 3 veces con props distintos
    └── closing-cta.tsx
```

En esta etapa, `case-study.tsx` es propiedad de `experiencia/casos-de-exito`. Otro worktree no debe importarlo.

**Evolución a Etapa 2** (solo si se necesita):

Si mañana `nelson/liderazgo` necesita un bloque de caso de estudio similar, entonces `case-study.tsx` se promueve: se parametriza con props completos, se documenta en el ownership map como **sistema**, y se mueve a una ubicación apropiada en `src/components/` (por ejemplo `brandpetram/con-props/`). Desde ese momento se edita solo desde `work-system`.

No se promueve a sistema solo por anticipación abstracta.

---

## 7. Clasificación de secciones

### Secciones listas para worktree propio

| Sección | Por qué |
|---|---|
| **LEED** (8 sub-páginas: índice + 7 temas) | Layout propio con Header en layout. Componentes dedicados (LeedPageLayout, CarruselLeed). Cada sub-página es worktree independiente. |
| **Blog** | Layouts propios con Header en layout. Componentes de listado locales. Datos de Sanity. |
| **Noticias** | Misma estructura que Blog con componentes locales duplicados. |
| **Inventario — Naves** | Header en page-client (sistema). Componente client local. Datos Sanity propios. |
| **Inventario — Terrenos** | Header en page-client (sistema). Componente client local. Datos propios. |
| **Contacto** | Formulario autocontenido. API route propia. Header como sistema. |
| **Gracias** | Página estática simple. Header como sistema. |
| **Constructora — Baumex** | 12 componentes griegos exclusivos confirmados. Page.tsx es composición pura. |
| **Constructora — Build to Suit** | 4 componentes griegos exclusivos. HeroVideoCover compartido pero estable. |
| **Constructora — Llave en Mano** | 6 componentes griegos exclusivos confirmados. |
| **Constructora — Estándares** | Copy en page.tsx, pocos componentes compartidos estables. |
| **Constructora — Proyectos Esp.** | Casi todo HTML puro, mínimas dependencias. |
| **Constructora — Portafolio** | Datos propios, componente client local. |
| **Parques — Índice** | Datos Sanity, componentes propios. |
| **Parques — Individuales** | Componentes park-* exclusivos. VirtualTourBP estable. |
| **Experiencia — Casos de Éxito** | Página HTML pura, sin componentes BP. |
| **Experiencia — Certificaciones** | Página HTML pura, sin componentes BP. |
| **Nelson — Nuestra Historia** | Página autocontenida, solo Header. |
| **Nelson — Liderazgo** | Página autocontenida, un solo componente BP. |
| **Proyecto (interno)** | Páginas autocontenidas de gestión. |

### Secciones casi listas (cambios menores)

| Sección | Qué falta |
|---|---|
| ~~Nelson — Trayectoria~~ | **Promovido a "listo" en v6.** LogosGridBP2, StatsGridBPGamma y EditorialCascadaBP: los 3 exclusivos. |
| **Constructora — Diseño e Ingeniería** | Usa 13 componentes con-props/. El copy ya está en page.tsx (bueno). Solo necesita que con-props/ se declare zona del sistema. |
| **Experiencia — Excelencia Operativa** | Importa componentes de `(marketing)/product/sections/`. Necesita decidir: mover componentes compartidos o documentar dependencia. |
| **Productos** | Comparte `data/parks/` y `ficha-tecnica-parque*.tsx` con Parques. Declarar ambos como sistema (O2). |

### Secciones bloqueadas (requieren refactor)

| Sección | Qué bloquea |
|---|---|
| **Home** | page.tsx monolítico con 18+ imports. Requiere extracción a `(home)/sections/`. |
| **English** | Comparte 5 componentes con Home. Necesita que Home se refactorice primero, o que estos componentes se declaren como sistema estable (lo cual ya son, por ser props-based). Si se acepta que estos componentes son del sistema y no se van a modificar desde ningún worktree de sección, English podría estar **casi listo**. |

---

## 8. Inventario de trabajo necesario

> Repriorizado con base en el estado real del repo. Se eliminaron items que ya estaban resueltos.

### 8.1 Documentación (sin tocar código)

| # | Descripción | Esfuerzo | Prioridad |
|---|---|---|---|
| D1 | Crear ownership map: asignar cada componente a una sección o a "sistema" | Medio | **P0** |
| ~~D2~~ | **Resuelto en v6.** Todos los componentes BP de Nelson verificados: SplitSimpleBP (sistema), EditorialCascadaBeta (sistema), EditorialCascadaBP (exclusivo trayectoria), OffsetWithFeatureListBP (exclusivo diferencia-nelson), MosaicoLiderazgo (exclusivo liderazgo), TarjetaHeroOriginalBeta (exclusivo build-to-suit), LogosGridBP2 (exclusivo trayectoria), StatsGridBPGamma (exclusivo trayectoria). | — | ~~P0~~ Hecho |
| D3 | Documentar reglas de worktree (qué puede tocar cada uno) | Bajo | **P0** |
| D4 | Definir convención de branches (`section/*`, `system/*`) | Bajo | **P0** |

### 8.2 Refactor del Home (el único refactor grande necesario)

| # | Descripción | Archivos | Esfuerzo | Prioridad |
|---|---|---|---|---|
| H1 | Crear route group `(home)` con `page.tsx` compositor | `src/app/page.tsx` → `src/app/(home)/page.tsx` | Bajo | **P1** |
| H2 | Extraer secciones del Home a archivos individuales en `(home)/sections/` | Nuevo: ~8-10 archivos de secciones | Medio | **P1** |
| H3 | Extraer copy inline del Home a `(home)/content.ts` | Copy de FAQs, cards, círculos → archivo de datos | Medio | **P1** |

### 8.3 Decisiones de ownership (sin tocar código)

| # | Descripción | Secciones afectadas | Esfuerzo | Prioridad |
|---|---|---|---|---|
| O1 | Decidir si componentes de `(marketing)/product/sections/` son de marketing o de sistema | Excelencia operativa, Marketing | Bajo | **P1** |
| O2 | Declarar `data/parks/` y `ficha-tecnica-parque*.tsx` (5 variantes) como sistema — uso cruzado confirmado por Parques y Productos | Parques, Productos | Bajo | **P1** |
| O3 | Declarar `con-props/` como infraestructura del sistema | Múltiples | Bajo | **P1** |

### 8.4 Trabajo eliminado (ya resuelto)

| Descripción del plan v1 | Por qué se eliminó |
|---|---|
| "Extraer copy de AlphaBP a props" (C2) | Ya acepta `descripcion` como prop |
| "Extraer copy de ScrollStorytelling a props" (C3) | Ya acepta `items` como prop con interfaz completa |
| "Extraer copy de HeroVideoCover" (C4) | No tiene copy comercial; todo via children |
| "Parametrizar Header por sección" (R2, C6) | Ya consume `navigation.ts` |
| "Minimizar cambios a globals.css" (R1) | Solo tiene 460 líneas; no es problema |

---

## 9. Propuesta de estructura futura

```
src/
├── app/
│   ├── (home)/                          # Home refactorizado
│   │   ├── page.tsx                     # Composición: importa sections/
│   │   ├── content.ts                   # Copy del home (FAQs, textos, etc.)
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── alpha-about.tsx
│   │       ├── mosaicos.tsx
│   │       ├── scroll-storytelling.tsx
│   │       ├── circulos.tsx
│   │       ├── faq.tsx
│   │       ├── cinco-cards.tsx
│   │       └── virtual-tour.tsx
│   │
│   ├── nelson/                          # Sin cambios
│   ├── constructora/                    # Sin cambios
│   ├── parques-industriales-mexicali/   # Sin cambios
│   ├── blog/                            # Sin cambios
│   ├── noticias/                        # Sin cambios
│   ├── inventario/                      # Sin cambios
│   ├── experiencia/                     # Sin cambios
│   ├── contacto/                        # Sin cambios
│   ├── productos/                       # Sin cambios
│   ├── proyecto/                        # Sin cambios
│   ├── en/                              # Sin cambios
│   │
│   ├── layout.tsx                       # SISTEMA
│   └── globals.css                      # SISTEMA (460 líneas, estable)
│
├── components/
│   ├── Header.tsx                       # SISTEMA
│   ├── Header-en.tsx                    # SISTEMA
│   ├── hero-video-cover.tsx             # SISTEMA (todo via props)
│   ├── theme-provider.tsx               # SISTEMA
│   ├── content-components.tsx           # SISTEMA (usado por Blog + Noticias)
│   │
│   ├── brandpetram/
│   │   ├── con-props/                   # SISTEMA — infraestructura de diseño
│   │   ├── virtual-tour-bp.tsx          # SISTEMA (estable, solo tourId prop)
│   │   ├── park-hero.tsx                # PROPIO: Parques
│   │   ├── park-map.tsx                 # PROPIO: Parques
│   │   ├── park-specs-*.tsx             # PROPIO: Parques
│   │   ├── ficha-tecnica-parque*.tsx    # SISTEMA (usado por Parques + Productos)
│   │   ├── leed-page-layout.tsx         # PROPIO: LEED
│   │   ├── carrusel-leed.tsx            # PROPIO: LEED
│   │   ├── mu.tsx ... psi.tsx           # PROPIO: Baumex
│   │   ├── beta.tsx ... epsilon.tsx     # PROPIO: Build to Suit
│   │   ├── zeta.tsx ... lamda.tsx       # PROPIO: Llave en Mano
│   │   ├── alpha-bp.tsx                 # PROPIO: Home
│   │   ├── scroll-storytelling.tsx      # PROPIO: Home (usado con defaults)
│   │   └── [otros]                      # Ownership verificar en ownership map (D1)
│   │
│   └── ui/                              # SISTEMA
│
├── data/
│   ├── parks/                           # SISTEMA (compartido Parques + Productos)
│   ├── nav/                             # SISTEMA
│   ├── naves-industriales.ts            # PROPIO: Inventario Naves
│   ├── proyectos-baumex.ts              # PROPIO: Portafolio
│   └── terrenos-geo-lookup.ts           # PROPIO: Inventario Terrenos
│
└── lib/                                 # SISTEMA
```

---

## 10. Roadmap de implementación

### Fase 1: Ownership map y documentación (sin tocar código)

- **Objetivo:** Definir formalmente qué archivos pertenecen a cada sección y cuáles son del sistema.
- **Cambios:**
  - Crear `docs/ownership-map.md` con asignación de cada componente (los componentes BP de Nelson ya fueron verificados en este plan; el ownership map cubre el resto).
  - Documentar reglas de worktree y convención de branches.
- **Riesgos:** Ninguno.
- **Criterio de salida:** Ownership map completo. Todas las incertidumbres resueltas. Reglas de worktree documentadas.
- **Al terminar esta fase:** Todas las secciones marcadas como "listo" en la tabla de sección 12 pueden crear worktrees.

### Fase 2: Refactor del Home

- **Objetivo:** Dividir `src/app/page.tsx` en secciones independientes.
- **Cambios:**
  - Crear route group `(home)` con `page.tsx` compositor.
  - Extraer ~8-10 secciones a `(home)/sections/`.
  - Extraer copy a `(home)/content.ts`.
- **Riesgos:** Regresiones visuales. Probar en todos los viewports.
- **Criterio de salida:** Home renderiza idéntico. Cada sección es un archivo. El page.tsx solo compone.
- **Al terminar esta fase:** Home puede tener worktree propio. English queda desbloqueado.

### Fase 3: Resolución de dependencias cross-section

- **Objetivo:** Resolver las ~3-4 dependencias cross-section pendientes.
- **Cambios:**
  - Decidir ownership de componentes `(marketing)/product/sections/` (O1).
  - Si es necesario, mover componentes compartidos a carpeta de sistema o duplicarlos.
- **Riesgos:** Bajo. Son decisiones más que refactors.
- **Criterio de salida:** Todas las secciones marcadas como "casi listo" pasan a "listo".

### Fase 4: Prueba de worktrees

- **Objetivo:** Probar el modelo con 3-4 worktrees simultáneos.
- **Cambios:**
  - Crear worktrees de prueba: work-leed, work-blog, work-baumex, work-system.
  - Hacer cambios simultáneos. Mergear a main.
- **Riesgos:** Conflictos no previstos en archivos compartidos.
- **Criterio de salida:** Merge limpio de 3+ worktrees simultáneos.

### Fase 5: Workflow operativo Claude/Codex

- **Objetivo:** Documentar el flujo de trabajo completo.
- **Cambios:**
  - Workflow: Claude abre worktree de sección → hace cambios → crea PR → Codex revisa.
  - Scripts para crear/destruir worktrees.
  - Convención de branches y merge.
- **Criterio de salida:** Workflow documentado y probado con 3+ secciones simultáneas.

---

## 11. Recomendación final

### Postura operativa: cuándo abrir worktrees

**No abrir worktrees hasta completar Fase 1 (ownership map).** Aunque 40 secciones tienen archivos técnicamente aislados, sin un ownership map formal no hay reglas claras sobre qué puede tocar cada worktree y qué no. Sin esas reglas, dos worktrees podrían editar el mismo componente compartido sin saberlo.

La Fase 1 es solo documentación (no toca código) y se puede completar en una sesión. Una vez terminada, todas las secciones marcadas como "listo" en la tabla de sección 12 pueden abrir worktrees inmediatamente.

**Secuencia concreta:**
1. Completar Fase 1 (ownership map + reglas) → abrir worktrees para las 40 secciones "listo".
2. Completar Fase 2 (refactor Home) → abrir worktrees para Home y English.
3. Completar Fase 3 (resolver cross-section O1) → abrir worktrees para las 2 secciones "casi listo".

### Por dónde empezar

1. **Fase 1 (ownership map) es el primer paso obligatorio.** Cero riesgo, una sesión, desbloquea 40 worktrees.
2. **Fase 2 (refactor Home) es el único refactor importante.** Todo lo demás son decisiones de ownership, no cambios de código.

### Qué NO paralelizar todavía

- Home y English (comparten componentes; Home necesita refactor primero).
- Parques y Productos simultáneamente si ambos van a modificar componentes ficha-tecnica-parque.

### Qué refactors dan más retorno

1. **Ownership map** (Fase 1) — desbloquea todo sin tocar código.
2. **Dividir Home en secciones** (Fase 2) — desbloquea Home + English.

### Condiciones antes de crear worktrees

**Para cualquier sección (obligatorio antes de abrir el primer worktree):**
- [ ] Ownership map creado y revisado (Fase 1).
- [ ] Reglas de worktree documentadas (Fase 1).
- [ ] Convención de branches definida (Fase 1).

**Adicional para Home y English:**
- [ ] Refactor de Home completado (Fase 2).

---

## 12. Worktrees objetivo por sección

Tabla completa de todas las secciones reales del sitio con su worktree objetivo.

| Sección | Worktree objetivo | Estado | Archivos principales | Archivos compartidos conflictivos | Refactor previo | Notas operativas |
|---|---|---|---|---|---|---|
| Home | `work-home` | **Bloqueado** | `app/(home)/**` (futuro) | Header, con-props/*, VirtualTourBP, HeroVideoCover | Extraer page.tsx a sections/ (Fase 2) | Worktree más complejo; habilitar último |
| Nelson — Nuestra Historia | `work-nelson-historia` | **Listo** | `app/nelson/nuestra-historia/page.tsx` | Header (sistema) | Ninguno | Página autocontenida |
| Nelson — Trayectoria | `work-nelson-trayectoria` | **Listo** | `app/nelson/trayectoria/page.tsx` | Header (sistema), LogosGridBP2 (exclusivo), StatsGridBPGamma (exclusivo), EditorialCascadaBP (exclusivo) | Ninguno | 3 componentes BP exclusivos confirmados en v6 |
| Nelson — Diferencia | `work-nelson-diferencia` | **Listo** | `app/nelson/diferencia-nelson/page.tsx` | Header (sistema), SplitSimpleBP (sistema), EditorialCascadaBeta (sistema — compartida con proyecto/bitacora), OffsetWithFeatureListBP (exclusivo) | Ninguno | Todos los ownership resueltos en v5 |
| Nelson — Liderazgo | `work-nelson-liderazgo` | **Listo** | `app/nelson/liderazgo/page.tsx` | Header (sistema), MosaicoLiderazgo (exclusivo confirmado) | Ninguno | MosaicoLiderazgo verificado como exclusivo |
| Constructora — Baumex | `work-baumex` | **Listo** | `app/constructora/baumex/page.tsx`, 12 componentes griegos Mu-Psi | Header (sistema) | Ninguno | Griegos exclusivos confirmados |
| Constructora — Build to Suit | `work-build-to-suit` | **Listo** | `app/constructora/build-to-suit/page.tsx`, Beta, Gamma, Delta, Epsilon | Header, HeroVideoCover (sistema, estable) | Ninguno | Griegos exclusivos confirmados |
| Constructora — Llave en Mano | `work-llave-en-mano` | **Listo** | `app/constructora/llave-en-mano/page.tsx`, Zeta-Lambda | Header (sistema) | Ninguno | Griegos exclusivos confirmados |
| Constructora — Diseño e Ingeniería | `work-diseno-ingenieria` | **Listo** | `app/constructora/diseno-e-ingenieria/page.tsx` | Header, 13 con-props/ (sistema) | Ninguno | con-props/ declarados sistema en ownership map |
| Constructora — Estándares | `work-estandares` | **Listo** | `app/constructora/estandares-internacionales/page.tsx` | Header, 3 con-props/ (sistema) | Ninguno | |
| Constructora — Proyectos Esp. | `work-proyectos-especializados` | **Listo** | `app/constructora/proyectos-especializados/page.tsx` | Header, SplitSimpleBP (sistema) | Ninguno | Casi todo HTML puro |
| Constructora — Portafolio | `work-portafolio` | **Listo** | `app/constructora/portafolio/page.tsx`, `page-client.tsx` | Header (en page-client, sistema), `data/proyectos-baumex.ts` (propio) | Ninguno | Header en page-client; datos propios |
| LEED — Índice | `work-leed-indice` | **Listo** | `app/constructora/leed/page.tsx` | Header (en layout, sistema), LeedPageLayout | Ninguno | |
| LEED — Calidad Ambiental | `work-leed-calidad-ambiental` | **Listo** | `app/constructora/leed/calidad-ambiental/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Clima Extremo | `work-leed-clima-extremo` | **Listo** | `app/constructora/leed/clima-extremo/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Energía y Atmósfera | `work-leed-energia` | **Listo** | `app/constructora/leed/energia-atmosfera/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Materiales y Recursos | `work-leed-materiales` | **Listo** | `app/constructora/leed/materiales-recursos/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Proceso Certificación | `work-leed-proceso` | **Listo** | `app/constructora/leed/proceso-certificacion/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Sistemas Operativos | `work-leed-sistemas` | **Listo** | `app/constructora/leed/sistemas-operativos/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| LEED — Sitios Sostenibles | `work-leed-sitios` | **Listo** | `app/constructora/leed/sitios-sostenibles/page.tsx` | Header (en layout), LeedPageLayout | Ninguno | |
| Parques — Índice | `work-parques-indice` | **Listo** | `app/parques-industriales-mexicali/page.tsx` | Header, `data/parks/` (sistema) | Ninguno | |
| Parques — Nelson I | `work-parque-nelson-i` | **Listo** | `app/parques-industriales-mexicali/nelson-i/page.tsx` | Header, park-hero, ficha-tecnica, VirtualTourBP, `data/parks/` (todos sistema) | Ninguno | |
| Parques — Nelson II | `work-parque-nelson-ii` | **Listo** | `app/parques-industriales-mexicali/nelson-ii/page.tsx` | Header, park-hero, ficha-tecnica, ParkMap, VirtualTourBP, `data/parks/` | Ninguno | |
| Parques — Vigía I | `work-parque-vigia-i` | **Listo** | `app/parques-industriales-mexicali/vigia-i/page.tsx` | Header, park-hero, ficha-tecnica, VirtualTourBP, `data/parks/` | Ninguno | |
| Parques — Vigía II | `work-parque-vigia-ii` | **Listo** | `app/parques-industriales-mexicali/vigia-ii/page.tsx` | Header, park-hero, ficha-tecnica, VirtualTourBP, `data/parks/` | Ninguno | |
| Blog | `work-blog` | **Listo** | `app/blog/**` | Header (en layout), content-components.tsx (sistema) | Ninguno | Header en layout; páginas no lo tocan |
| Noticias | `work-noticias` | **Listo** | `app/noticias/**` | Header (en layout), content-components.tsx (sistema) | Ninguno | Header en layout; páginas no lo tocan |
| Inventario — Naves | `work-inventario-naves` | **Listo** | `app/inventario/naves-disponibles/*` | Header (en page-client, sistema), Sanity client, `data/naves-industriales.ts` | Ninguno | Header importado en page-client.tsx, no en page.tsx |
| Inventario — Terrenos | `work-inventario-terrenos` | **Listo** | `app/inventario/terrenos/*`, `data/terrenos-geo-lookup.ts` | Header (en page-client, sistema), Sanity client | Ninguno | Header importado en page-client.tsx, no en page.tsx |
| Experiencia — Casos de Éxito | `work-casos-exito` | **Listo** | `app/experiencia/casos-de-exito/page.tsx` | Header (sistema) | Ninguno | Página HTML pura |
| Experiencia — Certificaciones | `work-certificaciones` | **Listo** | `app/experiencia/certificaciones/page.tsx` | Header (sistema) | Ninguno | Página HTML pura |
| Experiencia — Excelencia Op. | `work-excelencia-operativa` | **Casi listo** | `app/experiencia/excelencia-operativa/**` | Header, componentes de `(marketing)/product/sections/` | Resolver ownership de componentes marketing (O1) | |
| Contacto | `work-contacto` | **Listo** | `app/contacto/*`, `api/submit-form/` | Header (sistema) | Ninguno | |
| Gracias | `work-gracias` | **Listo** | `app/gracias/page.tsx` | Header (sistema) | Ninguno | Página estática simple |
| English | `work-english` | **Bloqueado** | `app/en/*` | Header-en, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, BadgeAniversario, DiagonalDivider | Refactor Home primero (Fase 2), o declarar componentes compartidos como sistema estable | Si componentes compartidos son "sistema" (no se tocan desde secciones), podría pasar a "casi listo" |
| Productos | `work-productos` | **Listo** | `app/productos/**` | `data/parks/` (sistema), `ficha-tecnica-parque*.tsx` (sistema) | Ninguno | Resuelto: ambos declarados sistema en ownership map |
| Proyecto — Índice | `work-proyecto-indice` | **Listo** | `app/proyecto/page.tsx` | Header (sistema) | Ninguno | |
| Proyecto — Documentación | `work-proyecto-docs` | **Listo** | `app/proyecto/documentacion/page.tsx` | Header (sistema) | Ninguno | |
| Proyecto — Fotografías | `work-proyecto-fotos` | **Listo** | `app/proyecto/fotografias/page.tsx` | Header (sistema) | Ninguno | |
| Proyecto — Contenidos | `work-proyecto-contenidos` | **Listo** | `app/proyecto/contenidos/page.tsx` | Ninguno | Ninguno | Sin Header |
| Proyecto — Bitácora | `work-proyecto-bitacora` | **Listo** | `app/proyecto/bitacora/page.tsx` | Header (sistema), EditorialCascadaBeta (sistema — compartida con diferencia-nelson) | Ninguno | |
| Proyecto — Fase 2 Baumex | `work-proyecto-fase2` | **Listo** | `app/proyecto/fase-2-baumex/page.tsx` | Ninguno | Ninguno | Sin Header |
| Sistema compartido | `work-system` | **Siempre activo** | Header, Footer, layout.tsx, globals.css, `data/nav/`, con-props/, ui/, lib/, VirtualTourBP, HeroVideoCover, content-components.tsx, `data/parks/`, ficha-tecnica-parque*.tsx, SplitSimpleBP, EditorialCascadaBeta | N/A | N/A | Solo worktree que puede tocar archivos del sistema |
| Review | `work-review` | **Siempre activo** | Solo lectura | N/A | N/A | Para Codex o revisión humana |
| Scratch | `work-scratch` | **Según necesidad** | Cualquiera (desechable) | N/A | N/A | Prototipos y experimentación |

### Resumen de estados

| Estado | Cantidad | Ejemplos |
|---|---|---|
| **Listo** | 40 | Nelson (×4), Constructora (×7 incl. Diseño e Ingeniería), LEED (×8), Parques (×5), Blog, Noticias, Inventario (×2), Contacto, Gracias, Casos de Éxito, Certificaciones, Productos, Proyecto (×6), QA |
| **Casi listo** | 2 | Excelencia Operativa, Marketing Product (dep. cross-section O1) |
| **Bloqueado** | 2 | Home, English |

---

## Incertidumbres pendientes

### Resueltas en revisiones anteriores

| Componente | Resultado | Versión |
|---|---|---|
| SplitSimpleBP | **Compartido** (diferencia-nelson + proyectos-especializados) → sistema | v4 |
| MosaicoLiderazgo | **Exclusivo** de nelson/liderazgo | v4 |
| TarjetaHeroOriginalBeta | **Exclusivo** de build-to-suit | v4 |
| OffsetWithFeatureListBP | **Exclusivo** de diferencia-nelson | v5 |
| EditorialCascadaBeta | **Compartido** (diferencia-nelson + proyecto/bitacora) → sistema | v5 |
| Portafolio page-client.tsx Header | Confirmado: importa Header línea 6, renderiza línea 18 | v3 |
| LogosGridBP2 | **Exclusivo** de nelson/trayectoria | v6 |
| StatsGridBPGamma | **Exclusivo** de nelson/trayectoria | v6 |
| EditorialCascadaBP | **Exclusivo** de nelson/trayectoria (mencionada en bitacora como texto, no importada) | v6 |

### Pendientes

1. **Componentes de (marketing)/product/sections/:** Dependencia cross-section confirmada entre exactamente 2 secciones: `(marketing)/product` (origen) y `experiencia/excelencia-operativa` (consumidor). No es incertidumbre factual — es una decisión de ownership pendiente: declararlos como sistema o moverlos a carpeta compartida. Resolver en Fase 1.
