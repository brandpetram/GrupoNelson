# Correcciones Vercel — 2026-05-08

Branch: `dev`. Estado inicial: limpio, `dev` y `main` sincronizados con `origin` tras el commit `809e1e9` (feature de active-state en Header).

---

## #1 — `/es/parques-industriales-mexicali/nelson-ii` — h2 "Especificaciones del parque" → "Especificaciones del parque industrial"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/ficha-tecnica-parque.tsx:31` (default ES) — "Especificaciones del parque industrial".
- `src/components/brandpetram/ficha-tecnica-parque.tsx:79` (default EN) — "Industrial park specifications".
- `src/components/brandpetram/ficha-tecnica-parque-dinamica.tsx:193` (hardcoded ES).
- `src/components/brandpetram/ficha-tecnica-parque-detalle.tsx:201` (hardcoded ES).

## #2 — Ficha técnica del parque — eliminar fila "Disponibilidad inmediata"

ES + EN. ✅ Hecho. Aplica a todos los parques que usan `FichaTecnicaParque` (componente bilingüe).
- `src/components/brandpetram/ficha-tecnica-parque.tsx` — eliminado el bloque de la fila en `buildEspecificaciones` (`label: t.disponibilidadInmediata` y su valor). Las labels `disponibilidadInmediata` en `labels.es` y `labels.en` quedan declaradas pero ya no se usan; las dejé sin tocar para evitar churn.
- `ficha-tecnica-parque-dinamica.tsx` y `-detalle.tsx`: sin ocurrencias, no aplica.

## #3 — Ficha técnica del parque — eliminar fila "Ubicación"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/ficha-tecnica-parque.tsx:155` — eliminada la fila `{ label: t.ubicacion, valor: park.location }` en `buildEspecificaciones`. La fila "Dirección" siguiente se conserva. Labels `ubicacion` en `labels.es`/`labels.en` quedan declaradas (sin uso); las dejé.
- Componentes `-dinamica`, `-detalle` y `-vertical` viven solo en páginas `/app/(dev)/productos/...` (herramientas internas de desarrollo, fuera del sitio público) — no se tocan.

## #4 — Auditoría ortográfica — sección "Nosotros" (sitio ES)

✅ Hecho. Revisión de las 4 páginas y todos los componentes que renderizan su copy visible en español.

**Secciones revisadas (4):**
- `/es/nelson/trayectoria` — `LogosGridBP2`, `StatsGridBPGamma`, `EditorialCascadaBP`.
- `/es/nelson/diferencia-nelson` — `EditorialCascadaBeta`, `SplitSimpleBP` (3 instancias con copy local), `OffsetWithFeatureListBP`.
- `/es/nelson/liderazgo` — copy local en `page.tsx` (hero, equipo, continuidad, resultados, CTA), `MosaicoLiderazgo`.
- `/es/nelson/nuestra-historia` — copy local en `page.tsx` (3 columnas), `StandardsPoster`, `CursorTrailGrupoNelson`.

**Errores ortográficos corregidos (1):**
- `src/app/es/nelson/liderazgo/page.tsx:198` — "co-fundada" → "cofundada" (RAE Ortografía 2010: el prefijo "co-" se escribe sin guión cuando antecede a la palabra base).

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- Inconsistencias factuales remanentes (1967 vs 1956, 33 vs 30+, 28 vs 30 años, "Barbara"/"Bárbara") — son datos/cifras y requieren decisión explícita de Luis caso por caso.
- Anglicismos sueltos en /es ("due diligence", "compliance", "repeat business", "ownership", "accountability", "built-to-suit" en metadatas) — pendientes de un sweep separado, no son ortografía.
- Typos de clases CSS (`text:xl` en lugar de `text-xl` en `nuestra-historia/page.tsx:42, 52, 76`) — bug visual, no ortografía.

## #5 — Auditoría ortográfica — index `/es` (homepage)

✅ Hecho. Revisión de todo el copy visible en español del index.

**Archivos revisados (16):**
- `src/app/es/page.tsx` (metadata + override de hero).
- `src/app/es/home-client.tsx` (overrides de todos los componentes del index).
- `src/components/tarjeta-hero-original.tsx` (defaults ES del hero).
- `src/components/brandpetram/alpha-bp.tsx` (default ES).
- `src/components/brandpetram/scroll-storytelling.tsx` (defaults ES de las 8 fases).
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx` (defaults ES: headline, lead, sectionTitle, paragraphs, paragraphTitles, statsHeading, stats).
- `src/components/brandpetram/con-props/mosaico-invertido-con-props.tsx` (defaults ES — solo aplica a otros sitios; el index pasa overrides).
- `src/components/brandpetram/con-props/circulos-con-props.tsx` (defaults ES — el index pasa overrides).
- `src/components/brandpetram/con-props/cinco-cards-con-props.tsx` (overrides desde index).
- `src/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props.tsx` (trailingText ES + overrides desde index).
- `src/components/brandpetram/virtual-tour-bp.tsx` (defaults ES de title/subtitle).
- `src/components/badge-aniversario.tsx` (defaults ES "CELEBRANDO" / "años").
- `src/components/motion-plus/ticker-overflow.tsx` (texto ES del ticker).
- `src/data/nav/navigation.ts` (todas las labels y descriptions ES del nav, visibles en el header del index).
- `src/components/brandpetram/footer-1/index.tsx` (todas las secciones ES del footer del index, visibles en el layout `/es`).
- `src/components/Header.tsx` (navLabels ES, aria-labels, CTA "Contacto").

**Errores ortográficos corregidos (0):** copy ES del index limpio.

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- "Built‑to‑Suit" remanente en `page.tsx:17` (override del título del hero) y default de `tarjeta-hero-original.tsx:16` — anglicismo que escapó del sweep #21 anterior, no ortografía.
- "1967" en RadiantHeader headline default (`header.tsx:51`), Circulos circulo1 (`home-client.tsx`), AlphaBP override — inconsistencia factual con #5/6 anterior, no ortografía.
- "Nearshoring" en circulo1Descripcion del index — anglicismo, no ortografía.

## #6 — Auditoría ortográfica — sección "Servicios de Construcción" (sitio ES)

✅ Hecho. Revisión de las 4 páginas y todos los componentes que renderizan su copy visible en español.

**Secciones revisadas (4):**
- `/es/constructora/baumex` — `page.tsx` + componentes Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi (12 componentes con copy ES bilingüe).
- `/es/constructora/diseno-e-ingenieria` — `page.tsx` (copy local hardcoded en hero, secciones, FAQ).
- `/es/constructora/build-to-suit` — `page.tsx` + componentes Beta, Gamma, Delta, Epsilon, TarjetaHeroOriginalBeta.
- `/es/constructora/llave-en-mano` — `page.tsx` + componentes Zeta, Eta, Teta, Iota, Kappa, Lamda (6 componentes).

**Errores ortográficos corregidos (1):**
- `src/components/brandpetram/xi.tsx:11` (Baumex p1) — "obtienes **Dos** Project Executives" → "obtienes **dos** Project Executives". El numeral "dos" debe ir en minúscula, igual que los otros cuantificadores del mismo párrafo ("un Director Administrativo", "un Project Manager").

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- "Built-to-Suit" / "built-to-suit" remanentes en metadata de `build-to-suit/page.tsx:13,14` y en `alt="Built to Suit"` (línea 26) — anglicismo escapado del sweep #21, no ortografía.
- "Megawatts" (Gamma) — anglicismo gráfico, RAE prefiere "megavatios", pero "megawatts" es uso común en el sector industrial mexicano.
- Anglicismos sueltos en /es ("layout", "carports", "blowers", "long lead items", "submittals", "tenant improvement", "fire protection", "scorecard", "track record", "due diligence", "nearshoring", "brief", "Project Executives", "Project Manager", "crews", "Weekly Reports", "BUILT-TO-SUIT", "BTS") — pendientes de un sweep separado.
- Alts placeholder olvidados ("Placeholder ipsum dolor consectetur" en `beta.tsx:66` y `gamma.tsx:62`, "Placeholder verticorum" en `zeta.tsx:181`, "Imagen decorativa" en `iota.tsx:39`, "Ventana con vista al bosque" en `eta.tsx:34`) — bug de implementación, no ortografía.
- "33 corporaciones internacionales" / "28 años" en Mu, Xi, Psi — datos inconsistentes con sweeps anteriores (ahora "30+" / "30 años" en otros lados), no ortografía.

## #7 — Auditoría ortográfica — sección "Calidad y Estándares" (sitio ES)

✅ Hecho. Revisión de las 4 páginas y todos los componentes que renderizan su copy visible en español.

**Secciones revisadas (4):**
- `/es/constructora/leed` — `page.tsx`, `layout.tsx`, las 7 subpáginas (`calidad-ambiental`, `clima-extremo`, `energia-atmosfera`, `materiales-recursos`, `proceso-certificacion`, `sistemas-operativos`, `sitios-sostenibles`), `LeedPageLayout`, `HeroMarketing1`, `SidebarSticky1`, `CarruselLeed`.
- `/es/constructora/estandares-internacionales` — copy local en `page.tsx`.
- `/es/constructora/portafolio` — `page.tsx`, `page-client.tsx`, `TablaPortafolioBaumex`, `SidebarPortafolioBaumex`, `data/proyectos-baumex.ts`.
- `/es/constructora/proyectos-especializados` — copy local en `page.tsx` (3 casos: Skyworks, Gulfstream, Honeywell).

**Errores ortográficos corregidos (2):**
- `src/app/es/constructora/portafolio/page-client.tsx:56` — "+75 proyectos. <br/> en 28 años." → "+75 proyectos <br/> en 28 años.". Sobraba el punto después de "proyectos": rompía la regla de mayúscula tras punto (le seguía "en" en minúscula), y el período correcto cierra el bloque después de "años".
- `src/app/es/constructora/proyectos-especializados/page.tsx:149` y `:166` (caso Skyworks) — "boulevard" → "bulevar" (×2). DPD/RAE: "Debe evitarse la grafía boulevard, que es la francesa, así como la inglesa boulevar"; en español la forma correcta es "bulevar".

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- Anglicismos sueltos en /es ("LEED", "USGBC", "EPDs", "MEP", "moat", "fixtures", "submittals", "blower", "punch list", "track record", "Project Executives", "kickoff") — pendientes de un sweep separado.
- "75+ proyectos" / "28 años" / "30+" / "30 años" — inconsistencias factuales con sweeps anteriores (cifras y años), requieren decisión explícita de Luis caso por caso, no ortografía.

## #8 — Auditoría ortográfica — sección "Resultados" (sitio ES)

✅ Hecho. Revisión de las 3 páginas y todos los componentes que renderizan su copy visible en español.

**Secciones revisadas (3):**
- `/es/experiencia/excelencia-operativa` — `page.tsx` + 8 sections (`logo-cloud-clientes`, `feature-cards-resultados`, `como-trabajamos`, `capacidades-inhouse`, `cta`, `testimonial`, `dimensiones-control`, `documentacion-auditable`).
- `/es/experiencia/casos-de-exito` — `page.tsx` + 3 sections (`hero-marketing-1-beta`, `split-sticky-casos`, `mosaico-casos`).
- `/es/experiencia/normas-certificaciones-estandares` — copy local en `page.tsx` + override de `HeroMotionPlus` (defaults ya revisados en sweep #5).

**Errores ortográficos corregidos (0):** copy ES de las 3 secciones limpio.

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- Anglicismos sueltos en /es ("Submittals", "Long lead items", "Scorecard HSE", "Cost Engineer", "Scorecard de Seguridad", "Track Record", "compliance", "due diligence", "repeat business", "brochure", "Buckling-Restrained Braces", "Honeywell Aero-Mexicali", "Mexico-Corporate", "ISNetworld") — pendientes de un sweep separado.
- Capitalización tipo título inglés en H2 de `split-sticky-casos.tsx:30,93` ("35 Años Confiando en Nelson", "Corporación Global que Confía en los Expertos en Parques Industriales") — convención tipográfica calcada del inglés; en español lo canónico es solo mayúscula inicial. Es estilo/decisión editorial, no ortografía estricta.
- "30 corporaciones internacionales" en `split-sticky-casos.tsx:147-148` y `mosaico-casos.tsx:123` — inconsistente con "33" usado en otros lugares (Mu, Xi, Psi de Baumex), no ortografía.
- "30+ años" Honeywell vs "30 años" — inconsistencia factual entre archivos, no ortografía.

## #9 — Auditoría ortográfica — pilares LEED (sitio ES)

✅ Hecho. Revisión a fondo de las 7 subpáginas LEED y todos los componentes que renderizan su copy visible en español.

**Secciones revisadas (7):**
- `/es/constructora/leed/clima-extremo` — `page.tsx` (props del `LeedPageLayout`).
- `/es/constructora/leed/energia-atmosfera` — `page.tsx`.
- `/es/constructora/leed/sitios-sostenibles` — `page.tsx`.
- `/es/constructora/leed/calidad-ambiental` — `page.tsx`.
- `/es/constructora/leed/materiales-recursos` — `page.tsx`.
- `/es/constructora/leed/sistemas-operativos` — `page.tsx`.
- `/es/constructora/leed/proceso-certificacion` — `page.tsx`.

**Componentes compartidos revisados (4):**
- `src/components/brandpetram/leed-page-layout.tsx` — labels bilingües (`leedShort`, `certificacionLeed`, `cotizaTuNaveLeed`, `verTodosLosTemasLeed`, `fuentes`).
- `src/components/brandpetram/carrusel-leed.tsx` — los 7 items del carrusel ES (heading + title + subtitle + etiqueta).
- `src/components/brandpetram/sidebar-sticky-1.tsx` — copy ES del index `/es/constructora/leed` (3 H2 + 6 párrafos + sidebar links + datos clave).
- `src/components/brandpetram/hero-marketing-1.tsx` — defaults ES del hero LEED.

**Errores ortográficos corregidos (0):** copy ES de las 7 subpáginas y sus componentes compartidos limpio.

**Fuera de alcance (no son errores ortográficos, no se tocaron):**
- "contraincendio" (singular, sin S) usado consistentemente en `sitios-sostenibles/page.tsx:8,16,21,22,30` y en `normas-certificaciones-estandares/page.tsx:28,38,74` — la forma normativa RAE es "contraincendios" (adjetivo invariable, junto, con S) o "contra incendios" (separado, en plural). Es inconsistencia léxica/gramatical, no ortografía estricta. Además choca con "bombas contra incendio" (separado, sin S) en `excelencia-operativa/sections/como-trabajamos.tsx:32`. Requiere decisión editorial explícita de Luis para estandarizar todo el sitio.
- Anglicismos sueltos en /es ("BMS", "Building Management Systems", "submittals", "fixtures", "dashboards", "boards", "carports", "predesign", "retrofit", "moat", "nearshoring", "Cost Engineer", "ESG", "BD+C", "ASHRAE", "FloorScore", "EPDs", "HPDs", "USGBC", "GBCI", "MEP", "IoT", "Design Review", "Construction Review", "LEED Online", "Buckling-Restrained Braces", "BRB", "TPO", "SRI") — pendientes de un sweep separado, no ortografía.
- "550K" / "Gulfstream 550K" — abreviatura informal de pies cuadrados, decisión editorial.
- "EPD verificada" (`materiales-recursos`) vs "EPDs verificadas" (`carrusel-leed.tsx:98`) — inconsistencia léxica del plural (en español sería "DAP" o se mantiene la forma sin S "EPD"), no ortografía.
- "30 corporaciones internacionales" en `calidad-ambiental/page.tsx:39` — inconsistente con "33" usado en otros sweeps anteriores (Mu, Xi, Psi de Baumex), no ortografía.
