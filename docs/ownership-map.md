# Ownership Map — Grupo Nelson

Este documento asigna cada archivo relevante del proyecto a una categoría de ownership: **sistema** o **sección**. Es el entregable principal de la Fase 1 del [plan de worktrees](planes/worktree.md).

## Convenciones

### Categorías de ownership

| Categoría | Significado | Se edita desde |
|---|---|---|
| **Sistema** | Infraestructura compartida usada por múltiples secciones. | `work-system` únicamente |
| **Sección** | Propiedad de una sección específica. | El worktree de esa sección |

No existe una categoría intermedia "shared". Un componente promovido de sección a reutilizable pasa a **sistema** (ver §6.11 del plan: `local first, shared by promotion`).

### "Exclusivo" no es permanente

"Exclusivo hoy" significa que solo una sección lo importa según el estado actual del repo. Si otra sección lo necesita en el futuro, se promueve formalmente a sistema: se parametriza con props, se documenta aquí, y se mueve su edición a `work-system`.

### Convención de branches

| Patrón | Uso | Ejemplo |
|---|---|---|
| `section/{slug}` | Trabajo en una sección específica | `section/leed-calidad-ambiental` |
| `system/{slug}` | Cambios a infraestructura compartida | `system/header-nav-update` |
| `scratch/{slug}` | Experimentación desechable | `scratch/nuevo-hero-home` |

### Reglas de worktree

1. Un worktree de sección **solo puede editar** archivos asignados a esa sección en este documento.
2. Un worktree de sección **no puede editar** archivos de sistema ni archivos de otra sección.
3. Si un worktree necesita un cambio en un archivo de sistema, ese cambio se hace en `work-system` y se mergea primero.
4. Si un worktree necesita importar un componente de otra sección, primero debe promoverlo a sistema (ver §6.11 del plan).
5. `work-system` es el único worktree que puede editar archivos de sistema.
6. `work-review` es solo lectura.
7. `work-scratch` puede tocar cualquier cosa (es desechable).

---

## 1. Sistema

### 1.1 Layout y configuración global

| Archivo | Tipo | Consumido por |
|---|---|---|
| `src/app/layout.tsx` | Root layout | Todas las páginas |
| `src/app/globals.css` | Estilos globales (460 líneas) | Todas las páginas |
| `src/components/theme-provider.tsx` | ThemeProvider | layout.tsx |

### 1.2 Navegación

| Archivo | Tipo | Consumido por |
|---|---|---|
| `src/components/Header.tsx` | Header principal | ~28 pages + 4 layouts + 3 page-clients |
| `src/components/Header-en.tsx` | Header inglés | en/page.tsx |
| `src/data/nav/navigation.ts` | Datos de navegación ES | Header.tsx |
| `src/data/nav/navigation-en.ts` | Datos de navegación EN | Header-en.tsx |
| `src/data/nav/types.ts` | Tipos de navegación | navigation.ts, navigation-en.ts |
| `src/data/nav/conveyors-industriales.ts` | Navegación conveyors | Header.tsx |
| `src/components/language-flags.tsx` | Selector de idioma | Header.tsx, Header-en.tsx |
| `src/components/theme-toggle.tsx` | Toggle de tema | Header.tsx |
| `src/hooks/use-media.ts` | Media query hook | Header.tsx, Header-en.tsx |

### 1.3 Footer

| Archivo | Tipo | Consumido por |
|---|---|---|
| `src/components/brandpetram/footer-1/index.tsx` | Footer principal | layout.tsx |

### 1.4 Infraestructura de diseño — Componentes con props

Estos componentes reciben todo su contenido por props. Las secciones los consumen pero no los editan.

| Archivo | Consumido por |
|---|---|
| `src/components/brandpetram/con-props/big-number-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/cinco-cards-con-props.tsx` | Home |
| `src/components/brandpetram/con-props/circulos-con-props.tsx` | Home |
| `src/components/brandpetram/con-props/cuadricula-section-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/cuadro-circulo-con-escuadra-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props.tsx` | Home, diseno-e-ingenieria |
| `src/components/brandpetram/con-props/feature-section-3-bp-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/feature-section-5-inverted-bp-con-props.tsx` | diseno-e-ingenieria, estandares-internacionales |
| `src/components/brandpetram/con-props/feature-section-6-bp-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/gun-like-con-props.tsx` | diseno-e-ingenieria, estandares-internacionales |
| `src/components/brandpetram/con-props/imagen-con-etiqueta-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/linea-l-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/mosaico-2-con-props.tsx` | Home, diseno-e-ingenieria |
| `src/components/brandpetram/con-props/mosaico-invertido-con-props.tsx` | Home |
| `src/components/brandpetram/con-props/parrafo-big-con-props.tsx` | diseno-e-ingenieria |
| `src/components/brandpetram/con-props/parrafo-con-props.tsx` | (pendiente verificar) |
| `src/components/brandpetram/con-props/split-with-image-bp-con-props.tsx` | diseno-e-ingenieria, estandares-internacionales |
| `src/components/brandpetram/con-props/tres-cards-con-props.tsx` | (pendiente verificar) |

### 1.5 Componentes estables multi-sección

| Archivo | Consumido por | Notas |
|---|---|---|
| `src/components/hero-video-cover.tsx` | Home, build-to-suit, English | Todo via props + children |
| `src/components/brandpetram/virtual-tour-bp.tsx` | Home, nelson-i, nelson-ii, vigia-i, vigia-ii | Solo recibe `tourId` |
| `src/components/brandpetram/ficha-tecnica-parque.tsx` | Parques individuales | Uso cruzado Parques + Productos |
| `src/components/brandpetram/ficha-tecnica-parque-detalle.tsx` | productos/ficha-tecnica | Uso cruzado |
| `src/components/brandpetram/ficha-tecnica-parque-dinamica.tsx` | productos/ficha-tecnica/[slug] | Uso cruzado |
| `src/components/brandpetram/ficha-tecnica-parque-horizontal.tsx` | productos/horizontal | Uso cruzado |
| `src/components/brandpetram/ficha-tecnica-parque-vertical.tsx` | productos/vertical | Uso cruzado |
| `src/components/brandpetram/split-simple-bp.tsx` | diferencia-nelson, proyectos-especializados | Multi-sección confirmado |
| `src/components/brandpetram/editorial-cascada-beta.tsx` | diferencia-nelson, proyecto/bitacora | Multi-sección confirmado |
| `src/components/content-components.tsx` | blog/[slug], noticias/[slug] | Portable Text renderer |
| `src/components/tarjeta-hero-original.tsx` | Home, English | Multi-sección |
| `src/components/hexagon-features.tsx` | Home, English | Multi-sección |
| `src/components/diagonal-divider.tsx` | Home, English | Multi-sección |
| `src/components/badge-aniversario.tsx` | Home, English | Multi-sección |
| `src/components/container.tsx` | blog, excelencia-operativa, marketing | Multi-sección |
| `src/components/ui/breadcrumb.tsx` | blog/[slug], noticias/[slug], noticias/category | Multi-sección |
| `src/components/scroll-to-top.tsx` | blog/(root)/layout | Estable |

> **Nota:** `catalogo-agrupado-parques.tsx` y `catalogo-filtrado-parques.tsx` fueron reclasificados como propiedad de la sección Productos (ver §2.36). Solo los consume Productos hoy; si otra sección los necesita, se promueven a sistema por §6.11 del plan.

### 1.6 Datos compartidos

| Archivo | Consumido por | Notas |
|---|---|---|
| `src/data/parks/types.ts` | Parques, Productos, ficha-tecnica-parque* | Tipos de IndustrialPark |
| `src/data/parks/parks-data.ts` | Parques, Productos | Datos estáticos |
| `src/data/parks/parks-sanity.ts` | Parques, Productos | Queries Sanity |

### 1.7 Utilidades

| Archivo | Consumido por |
|---|---|
| `src/lib/utils.ts` | Múltiples componentes (cn function) |
| `src/lib/actions.ts` | Blog, Noticias (server actions) |
| `src/lib/format-date.ts` | Blog, Noticias |
| `src/lib/extract-headings.ts` | Blog |
| `src/lib/slugify.ts` | Blog |
| `src/lib/const.ts` | marketing/product (avatars) |

### 1.8 Sanity

| Archivo | Consumido por |
|---|---|
| `src/sanity/env.ts` | Sanity client |
| `src/sanity/lib/client.ts` | Inventario, Blog, Noticias, Parques |
| `src/sanity/lib/image.ts` | Componentes con imágenes Sanity |
| `src/sanity/lib/live.ts` | Suscripciones en vivo |
| `src/sanity/lib/queries/parks.ts` | data/parks/parks-sanity.ts |
| `src/sanity/lib/queries/naves.ts` | inventario/naves-disponibles |
| `src/sanity/lib/queries/terrenos.ts` | inventario/terrenos |
| `src/sanity/structure.ts` | Studio |
| `src/sanity/schemaTypes/*.ts` | Studio (7 schema types) |

### 1.9 Primitivos UI

| Archivo | Tipo |
|---|---|
| `src/components/ui/button.tsx` | Shadcn UI |
| `src/components/ui/accordion.tsx` | Shadcn UI |
| `src/components/ui/command.tsx` | Shadcn UI |
| `src/components/ui/dialog.tsx` | Shadcn UI |
| `src/components/ui/feature-card.tsx` | Card wrapper |
| `src/components/ui/dev-label.tsx` | DevOverlay |
| `src/components/ui/brandpetram/cuadritos-lluvia.tsx` | Decorativo |
| `src/components/ui/brandpetram/cuadritos-lluvia-dos.tsx` | Decorativo (multi-sección) |
| `src/components/ui/brandpetram/cuadritos-lluvia-tres.tsx` | Decorativo |
| `src/components/ui/brandpetram/grid.tsx` | GridOverlay (multi-sección) |
| `src/components/ui/brandpetram/titulo.tsx` | Tipografía |
| `src/components/ui/brandpetram/parrafo.tsx` | Tipografía |
| `src/components/ui/brandpetram/imagen-rectangulo.tsx` | Imagen con overlay |
| `src/components/ui/brandpetram/poligono-icono-1.tsx` | Decorativo |
| `src/components/ui/brandpetram/poligono-imagen-1.tsx` | Grid polígonos |
| `src/components/ui/brandpetram/poligono-imagen-carrusel-1.tsx` | Carrusel |
| `src/components/ui/brandpetram/poligono-texto-1.tsx` | Decorativo |
| `src/components/ui/brandpetram/linea-l.tsx` | Decorativo |
| `src/components/ui/brandpetram/linea-l-flex.tsx` | Decorativo |
| `src/components/ui/brandpetram/bloque-texto.tsx` | Bloque de texto |
| `src/components/ui/brandpetram/bloque-1.tsx` | Layout |
| `src/components/ui/brandpetram/circulo-decorativo.tsx` | Decorativo |
| `src/components/ui/brandpetram/dot-pattern.tsx` | Decorativo |
| `src/components/ui/brandpetram/flecha-1.tsx` | Decorativo |
| `src/components/ui/brandpetram/gradient-blob.tsx` | Decorativo |
| `src/components/ui/brandpetram/imagen-con-etiqueta.tsx` | Imagen |
| `src/components/ui/brandpetram/texto-con-botones.tsx` | Layout |
| `src/components/ui/brandpetram/texto-gradiente.tsx` | Decorativo |
| `src/components/ui/brandpetram/ticker-base.tsx` | Ticker |
| `src/components/ui/brandpetram/ticker-context.tsx` | Ticker |
| `src/components/ui/brandpetram/ticker-item-highlight.tsx` | Ticker |
| `src/components/ui/sticky-reveal.tsx` | Scroll behavior |
| `src/components/ui/aspect-ratio.tsx` | Layout |
| `src/components/ui/grid.tsx` | Layout |
| `src/components/ui/google-map.tsx` | Google Maps |
| `src/components/ui/svgs/*.tsx` | Logos SVG (24 archivos) |
| `src/components/ui/icons/sdi-emblema.tsx` | Logo SDI |

---

## 2. Por sección

### 2.1 Home (/)

**Worktree:** `work-home` | **Estado:** Bloqueado (requiere refactor Fase 2)

| Archivo | Tipo | Exclusivo hoy | Consumido por | Dependencias sistema |
|---|---|---|---|---|
| `src/app/page.tsx` | Página | Sí | — | Header, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, AlphaBP, ScrollStorytelling, Mosaico2ConProps, MosaicoInvertidoConProps, CirculosConProps, FaqConProps, CincoCardsConProps, VirtualTourBP, BadgeAniversario, DiagonalDivider, LogoCloud, TickerOverflow, CuadritosLluvia, RadiantHeader |
| `src/components/brandpetram/alpha-bp.tsx` | Componente | Sí | Home | Acepta prop `descripcion` |
| `src/components/brandpetram/scroll-storytelling.tsx` | Componente | Sí | Home | Acepta prop `items` |
| `src/components/motion-plus/logo-cloud.tsx` | Componente | Sí | Home | — |
| `src/components/motion-plus/ticker-overflow.tsx` | Componente | Sí | Home | — |
| `src/components/from-tailwind-templates/radiant-ts-header/*.tsx` | Componentes (4) | Sí | Home | header, container, text, animated-number |

### 2.2 Nelson — Nuestra Historia (/nelson/nuestra-historia)

**Worktree:** `work-nelson-historia` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/nelson/nuestra-historia/page.tsx` | Página | Sí | Header |

### 2.3 Nelson — Trayectoria (/nelson/trayectoria)

**Worktree:** `work-nelson-trayectoria` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/nelson/trayectoria/page.tsx` | Página | Sí | Header |
| `src/components/brandpetram/logos-grid-bp-2.tsx` | Componente | Sí | — |
| `src/components/brandpetram/stats-grid-bp-gamma.tsx` | Componente | Sí | — |
| `src/components/brandpetram/editorial-cascada-bp.tsx` | Componente | Sí | — |

### 2.4 Nelson — Diferencia Nelson (/nelson/diferencia-nelson)

**Worktree:** `work-nelson-diferencia` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/nelson/diferencia-nelson/page.tsx` | Página | Sí | Header, SplitSimpleBP (sistema), EditorialCascadaBeta (sistema) |
| `src/components/brandpetram/offset-with-feature-list-bp.tsx` | Componente | Sí | — |

### 2.5 Nelson — Liderazgo (/nelson/liderazgo)

**Worktree:** `work-nelson-liderazgo` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/nelson/liderazgo/page.tsx` | Página | Sí | Header |
| `src/components/brandpetram/mosaico-liderazgo.tsx` | Componente | Sí | — |

### 2.6 Constructora — Baumex (/constructora/baumex)

**Worktree:** `work-baumex` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/baumex/page.tsx` | Página | Sí | Header |
| `src/components/brandpetram/mu.tsx` | Componente | Sí | — |
| `src/components/brandpetram/nu.tsx` | Componente | Sí | — |
| `src/components/brandpetram/xi.tsx` | Componente | Sí | — |
| `src/components/brandpetram/omicron.tsx` | Componente | Sí | — |
| `src/components/brandpetram/pi.tsx` | Componente | Sí | — |
| `src/components/brandpetram/rho.tsx` | Componente | Sí | — |
| `src/components/brandpetram/sigma.tsx` | Componente | Sí | — |
| `src/components/brandpetram/tau.tsx` | Componente | Sí | — |
| `src/components/brandpetram/upsilon.tsx` | Componente | Sí | — |
| `src/components/brandpetram/phi.tsx` | Componente | Sí | — |
| `src/components/brandpetram/chi.tsx` | Componente | Sí | — |
| `src/components/brandpetram/psi.tsx` | Componente | Sí | — |

### 2.7 Constructora — Build to Suit (/constructora/build-to-suit)

**Worktree:** `work-build-to-suit` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/build-to-suit/page.tsx` | Página | Sí | Header, HeroVideoCover (sistema) |
| `src/components/tarjeta-hero-original-beta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/beta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/gamma.tsx` | Componente | Sí | — |
| `src/components/brandpetram/delta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/epsilon.tsx` | Componente | Sí | — |

### 2.8 Constructora — Llave en Mano (/constructora/llave-en-mano)

**Worktree:** `work-llave-en-mano` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/llave-en-mano/page.tsx` | Página | Sí | Header |
| `src/components/brandpetram/zeta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/eta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/teta.tsx` | Componente | Sí | — |
| `src/components/brandpetram/iota.tsx` | Componente | Sí | — |
| `src/components/brandpetram/kappa.tsx` | Componente | Sí | — |
| `src/components/brandpetram/lamda.tsx` | Componente | Sí | — |

### 2.9 Constructora — Diseño e Ingeniería (/constructora/diseno-e-ingenieria)

**Worktree:** `work-diseno-ingenieria` | **Estado:** Listo (con-props/ declarados como sistema en §1.4)

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/diseno-e-ingenieria/page.tsx` | Página | Sí | Header, 13 componentes con-props/ (sistema) |

### 2.10 Constructora — Estándares Internacionales (/constructora/estandares-internacionales)

**Worktree:** `work-estandares` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/estandares-internacionales/page.tsx` | Página | Sí | Header, GunLikeConProps, FeatureSection5InvertedBPConProps, SplitWithImageBPConProps (todos sistema), ImagenRectangulo, CuadritosLluviaDos |

### 2.11 Constructora — Proyectos Especializados (/constructora/proyectos-especializados)

**Worktree:** `work-proyectos-especializados` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/proyectos-especializados/page.tsx` | Página | Sí | Header, SplitSimpleBP (sistema), CuadritosLluviaDos, GridOverlay |

### 2.12 Constructora — Portafolio (/constructora/portafolio)

**Worktree:** `work-portafolio` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/portafolio/page.tsx` | Página | Sí | — |
| `src/app/constructora/portafolio/page-client.tsx` | Client wrapper | Sí | Header, TablaPortafolioBaumex, SidebarPortafolioBaumex |
| `src/components/brandpetram/tabla-portafolio-baumex.tsx` | Componente | Sí | data/proyectos-baumex.ts |
| `src/components/brandpetram/sidebar-portafolio-baumex.tsx` | Componente | Sí | — |
| `src/data/proyectos-baumex.ts` | Datos | Sí | — |

### 2.13–2.20 LEED (8 sub-páginas)

**Layout compartido:** `src/app/constructora/leed/layout.tsx` (incluye Header)

Componentes compartidos dentro de LEED (propiedad de la familia LEED, no del sistema):

| Archivo | Tipo | Consumido por |
|---|---|---|
| `src/components/brandpetram/leed-page-layout.tsx` | Layout de página LEED | 7 sub-páginas LEED |
| `src/components/brandpetram/carrusel-leed.tsx` | Carrusel LEED | leed/page.tsx |

#### 2.13 LEED — Índice (/constructora/leed)

**Worktree:** `work-leed-indice` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/constructora/leed/page.tsx` | Página | Sí | Header (en layout), HeroMarketing1, SidebarSticky1, CarruselLeed |
| `src/components/brandpetram/hero-marketing-1.tsx` | Componente | Sí | — |
| `src/components/brandpetram/sidebar-sticky-1.tsx` | Componente | Sí (+ componentes test) | — |

#### 2.14 LEED — Calidad Ambiental

**Worktree:** `work-leed-calidad-ambiental` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/calidad-ambiental/page.tsx` | Página | LeedPageLayout |

#### 2.15 LEED — Clima Extremo

**Worktree:** `work-leed-clima-extremo` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/clima-extremo/page.tsx` | Página | LeedPageLayout |

#### 2.16 LEED — Energía y Atmósfera

**Worktree:** `work-leed-energia` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/energia-atmosfera/page.tsx` | Página | LeedPageLayout |

#### 2.17 LEED — Materiales y Recursos

**Worktree:** `work-leed-materiales` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/materiales-recursos/page.tsx` | Página | LeedPageLayout |

#### 2.18 LEED — Proceso de Certificación

**Worktree:** `work-leed-proceso` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/proceso-certificacion/page.tsx` | Página | LeedPageLayout |

#### 2.19 LEED — Sistemas Operativos

**Worktree:** `work-leed-sistemas` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/sistemas-operativos/page.tsx` | Página | LeedPageLayout |

#### 2.20 LEED — Sitios Sostenibles

**Worktree:** `work-leed-sitios` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/constructora/leed/sitios-sostenibles/page.tsx` | Página | LeedPageLayout |

### 2.21 Parques — Índice (/parques-industriales-mexicali)

**Worktree:** `work-parques-indice` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/parques-industriales-mexicali/page.tsx` | Página | Sí | Header, data/parks/ (sistema) |

### 2.22 Parques — Nelson I

**Worktree:** `work-parque-nelson-i` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/parques-industriales-mexicali/nelson-i/page.tsx` | Página | Sí | Header, park-hero, ficha-tecnica-parque, VirtualTourBP, data/parks/ |

### 2.23 Parques — Nelson II

**Worktree:** `work-parque-nelson-ii` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/parques-industriales-mexicali/nelson-ii/page.tsx` | Página | Sí | Header, park-hero, ficha-tecnica-parque, ParkMap, VirtualTourBP, data/parks/ |
| `src/components/brandpetram/park-map.tsx` | Componente | Sí | Leaflet |

### 2.24 Parques — Vigía I

**Worktree:** `work-parque-vigia-i` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/parques-industriales-mexicali/vigia-i/page.tsx` | Página | Sí | Header, park-hero, ficha-tecnica-parque, VirtualTourBP, data/parks/ |

### 2.25 Parques — Vigía II

**Worktree:** `work-parque-vigia-ii` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/parques-industriales-mexicali/vigia-ii/page.tsx` | Página | Sí | Header, park-hero, ficha-tecnica-parque, VirtualTourBP, data/parks/ |

### 2.26 Blog (/blog/*)

**Worktree:** `work-blog` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/blog/layout.tsx` | Layout | Sí | Header |
| `src/app/blog/(root)/layout.tsx` | Sub-layout | Sí | CategoryFilter, ScrollToTop |
| `src/app/blog/(root)/page.tsx` | Página | Sí | BlogListWithPagination (local) |
| `src/app/blog/[slug]/page.tsx` | Página dinámica | Sí | content-components (sistema), Breadcrumb (sistema) |
| `src/app/blog/(root)/category/[category]/page.tsx` | Página dinámica | Sí | CategoryBlogListWithPagination (local) |
| `src/app/blog/blog-list-with-pagination.tsx` | Componente local | Sí | — |
| `src/app/blog/blog-post-grid.tsx` | Componente local | Sí | — |
| `src/app/blog/category-filter.tsx` | Componente local | Sí | — |
| `src/app/blog/category-blog-list-with-pagination.tsx` | Componente local | Sí | — |

### 2.27 Noticias (/noticias/*)

**Worktree:** `work-noticias` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/noticias/layout.tsx` | Layout | Sí | Header |
| `src/app/noticias/page.tsx` | Página | Sí | BlogListWithPagination (local), CategoryFilter (local) |
| `src/app/noticias/[slug]/page.tsx` | Página dinámica | Sí | content-components (sistema), Breadcrumb (sistema) |
| `src/app/noticias/category/[category]/page.tsx` | Página dinámica | Sí | CategoryBlogListWithPagination (local) |
| `src/app/noticias/blog-list-with-pagination.tsx` | Componente local | Sí | — |
| `src/app/noticias/blog-post-grid.tsx` | Componente local | Sí | — |
| `src/app/noticias/category-filter.tsx` | Componente local | Sí | — |
| `src/app/noticias/category-blog-list-with-pagination.tsx` | Componente local | Sí | — |

### 2.28 Inventario — Naves Disponibles (/inventario/naves-disponibles)

**Worktree:** `work-inventario-naves` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/inventario/naves-disponibles/page.tsx` | Página | Sí | Sanity client |
| `src/app/inventario/naves-disponibles/page-client.tsx` | Client wrapper | Sí | Header, TablaModelosDeProductos, Drawer |
| `src/components/brandpetram/tabla-modelos-de-productos.tsx` | Componente | Sí | — |
| `src/components/tailwind/drawer.tsx` | Componente | Sí | — |
| `src/data/naves-industriales.ts` | Datos | Sí | — |

### 2.29 Inventario — Terrenos (/inventario/terrenos)

**Worktree:** `work-inventario-terrenos` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/inventario/terrenos/page.tsx` | Página | Sí | Sanity client |
| `src/app/inventario/terrenos/page-client.tsx` | Client wrapper | Sí | Header, TerrenoMiniMapDynamic |
| `src/components/terreno-mini-map.tsx` | Componente | Sí | Leaflet |
| `src/components/terreno-mini-map-dynamic.tsx` | Componente | Sí | — |
| `src/data/terrenos-geo-lookup.ts` | Datos | Sí | — |

### 2.30 Experiencia — Casos de Éxito (/experiencia/casos-de-exito)

**Worktree:** `work-casos-exito` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/experiencia/casos-de-exito/page.tsx` | Página | Sí | Header |

### 2.31 Experiencia — Certificaciones (/experiencia/certificaciones)

**Worktree:** `work-certificaciones` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/experiencia/certificaciones/page.tsx` | Página | Sí | Header |

### 2.32 Experiencia — Excelencia Operativa (/experiencia/excelencia-operativa)

**Worktree:** `work-excelencia-operativa` | **Estado:** Casi listo (dependencia cross-section con marketing)

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/experiencia/excelencia-operativa/page.tsx` | Página | Sí | Header, Container (sistema), componentes de (marketing)/product/sections/ |
| `src/app/experiencia/excelencia-operativa/sections/logo-cloud-clientes.tsx` | Sección local | Sí | Container |
| `src/app/experiencia/excelencia-operativa/sections/feature-cards-resultados.tsx` | Sección local | Sí | FeatureCard |
| `src/app/experiencia/excelencia-operativa/sections/como-trabajamos.tsx` | Sección local | Sí | FeatureCard |
| `src/app/experiencia/excelencia-operativa/sections/capacidades-inhouse.tsx` | Sección local | Sí | motion/react |
| `src/app/experiencia/excelencia-operativa/sections/cta.tsx` | Sección local | Sí | Button |

### 2.33 Contacto (/contacto)

**Worktree:** `work-contacto` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/contacto/page.tsx` | Página | Sí | Header |
| `src/app/contacto/contact-form.tsx` | Componente local | Sí | — |
| `src/app/api/submit-form/route.ts` | API route | Sí | Resend |

### 2.34 Gracias (/gracias)

**Worktree:** `work-gracias` | **Estado:** Listo

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/gracias/page.tsx` | Página | Sí | Header |

### 2.35 English (/en)

**Worktree:** `work-english` | **Estado:** Bloqueado (comparte componentes con Home)

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/en/page.tsx` | Página | Sí | Header-en, HeroVideoCover, TarjetaHeroOriginal, HexagonFeatures, DiagonalDivider, BadgeAniversario (todos sistema) |
| `src/app/en/layout.tsx` | Layout | Sí | — |

### 2.36 Productos (/productos/*)

**Worktree:** `work-productos` | **Estado:** Listo (ficha-tecnica-parque* declarados sistema en §1.5, catálogos propios de la sección)

| Archivo | Tipo | Exclusivo hoy | Dependencias sistema |
|---|---|---|---|
| `src/app/productos/page.tsx` | Página índice | Sí | — |
| `src/app/productos/catalogo-agrupado/page.tsx` | Página | Sí | CatalogoAgrupadoParques (propio), data/parks (sistema) |
| `src/app/productos/catalogo-filtrado/page.tsx` | Página | Sí | CatalogoFiltradoParques (propio), data/parks (sistema) |
| `src/components/brandpetram/catalogo-agrupado-parques.tsx` | Componente | Sí | data/parks (sistema) |
| `src/components/brandpetram/catalogo-filtrado-parques.tsx` | Componente | Sí | data/parks (sistema) |
| `src/app/productos/horizontal/page.tsx` | Página | Sí | FichaTecnicaParqueHorizontal (sistema) |
| `src/app/productos/vertical/page.tsx` | Página | Sí | FichaTecnicaParqueVertical (sistema) |
| `src/app/productos/ficha-tecnica/page.tsx` | Página | Sí | FichaTecnicaParqueDetalle (sistema) |
| `src/app/productos/ficha-tecnica/[slug]/page.tsx` | Página dinámica | Sí | FichaTecnicaParqueDinamica (sistema), data/parks/ (sistema) |

### 2.37–2.42 Proyecto — Interno (6 sub-páginas)

#### 2.37 Proyecto — Índice (/proyecto)

**Worktree:** `work-proyecto-indice` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/page.tsx` | Página | Header |

#### 2.38 Proyecto — Documentación (/proyecto/documentacion)

**Worktree:** `work-proyecto-docs` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/documentacion/page.tsx` | Página | Header |

#### 2.39 Proyecto — Fotografías (/proyecto/fotografias)

**Worktree:** `work-proyecto-fotos` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/fotografias/page.tsx` | Página | Header |

#### 2.40 Proyecto — Contenidos (/proyecto/contenidos)

**Worktree:** `work-proyecto-contenidos` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/contenidos/page.tsx` | Página | Ninguna |

#### 2.41 Proyecto — Bitácora (/proyecto/bitacora)

**Worktree:** `work-proyecto-bitacora` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/bitacora/page.tsx` | Página | Header, EditorialCascadaBeta (sistema) |

#### 2.42 Proyecto — Fase 2 Baumex (/proyecto/fase-2-baumex)

**Worktree:** `work-proyecto-fase2` | **Estado:** Listo

| Archivo | Tipo | Dependencias sistema |
|---|---|---|
| `src/app/proyecto/fase-2-baumex/page.tsx` | Página | Ninguna |

### 2.43 Secciones auxiliares

#### Studio (Sanity)

**Worktree:** No necesita (autogenerado) | **Estado:** Listo

| Archivo | Tipo |
|---|---|
| `src/app/studio/[[...tool]]/page.tsx` | Sanity Studio |

#### QA Terrenos

**Worktree:** `work-qa-terrenos` | **Estado:** Listo

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/qa/terrenos/page.tsx` | Página | QaTerrenosClient |
| `src/app/qa/terrenos/qa-terrenos-client.tsx` | Client wrapper | QaMapDynamic, terrenos-geo.json |

#### Marketing Product

**Worktree:** `work-marketing-product` | **Estado:** Casi listo (4 secciones locales tienen dependencia cross-section pendiente con excelencia-operativa — resolver O1)

| Archivo | Tipo | Dependencias |
|---|---|---|
| `src/app/(marketing)/layout.tsx` | Layout | Header |
| `src/app/(marketing)/product/page.tsx` | Página | Secciones locales |
| `src/app/(marketing)/product/sections/expandable-features.tsx` | Sección local | — |
| `src/app/(marketing)/product/sections/how-it-works.tsx` | Sección local | Illustrations |
| `src/app/(marketing)/product/sections/notes-features.tsx` | Sección local | — |
| `src/app/(marketing)/product/sections/product-illustration.tsx` | Sección local | — |
| `src/app/(marketing)/product/sections/testimonial.tsx` | Sección local | — |
| `src/app/(marketing)/product/sections/testimonials-section.tsx` | Sección local | — |

#### Dev Fotos

No necesita worktree (herramienta interna de desarrollo).

#### Componentes Test (componentes, componentes-dos, componentes-tres)

No necesitan worktree (páginas de prueba/showcase).

---

## 3. Dependencias cross-section y decisiones de ownership

### 3.1 (marketing)/product/sections/ → excelencia-operativa (Decisión pendiente)

**Estado:** Dependencia cross-section confirmada.

`experiencia/excelencia-operativa/page.tsx` importa 4 componentes de `(marketing)/product/sections/`:
- ProductIllustration
- TestimonialSection
- NotesFeatures
- TestimonialsSection

**Opciones:**
1. Declarar esos 4 componentes como **sistema** → se editan desde `work-system`.
2. Duplicarlos en excelencia-operativa como componentes locales → cada sección tiene su copia.

**Recomendación:** Opción 1 (sistema). Son componentes estables y el costo de duplicación no se justifica.

### 3.2 Blog ↔ Noticias — Componentes duplicados

Blog y Noticias tienen componentes con lógica casi idéntica (pagination, grid, filter) pero cada uno tiene su copia local. **No es una dependencia cross-section** — es duplicación intencional que permite que cada sección evolucione independientemente.

No requiere acción.

### 3.3 RSS Feed — Referenciado por Blog y Noticias

`src/app/rss.xml/route.ts` genera el feed RSS. Es referenciado por links en blog y noticias.

**Decisión:** Asignar a **sistema** — es infraestructura compartida.

---

## 4. Resumen de estados

| Estado | Cantidad | Secciones |
|---|---|---|
| **Listo** | 40 | Nelson (×4), Constructora (×7 incl. Diseño e Ingeniería), LEED (×8), Parques (×5), Blog, Noticias, Inventario (×2), Contacto, Gracias, Casos de Éxito, Certificaciones, Proyecto (×6), Productos, QA |
| **Casi listo** | 2 | Excelencia Operativa (dep. cross-section O1), Marketing Product (dep. cross-section O1) |
| **Bloqueado** | 2 | Home, English |

---

## Apéndice A: Componentes sin uso confirmado

Estos componentes existen en `src/components/` pero no se encontraron importados por ninguna página del sitio (solo aparecen en páginas de test `/componentes*` o no se importan en absoluto).

| Archivo | Notas |
|---|---|
| `src/components/badge-sello.tsx` | No importado |
| `src/components/blog-3.tsx` | No importado |
| `src/components/blog-7.tsx` | No importado |
| `src/components/blog-command.tsx` | No importado |
| `src/components/footer.tsx` | No importado (se usa footer-1/) |
| ~~`src/components/language-flags.tsx`~~ | **Falso positivo — importado por Header.tsx y Header-en.tsx. Reclasificado como sistema (§1.2).** |
| `src/components/logo.tsx` | No importado directamente |
| `src/components/logo-white.tsx` | No importado |
| ~~`src/components/theme-toggle.tsx`~~ | **Falso positivo — importado por Header.tsx. Reclasificado como sistema (§1.2).** |
| `src/components/brandpetram/big-number.tsx` | Solo en test pages |
| `src/components/brandpetram/carrusel.tsx` | Solo en test pages |
| `src/components/brandpetram/circulos.tsx` | Solo en test pages |
| `src/components/brandpetram/cuadricula-section-1.tsx` | Solo en test pages |
| `src/components/brandpetram/cuadro-circulo-con-escuadra.tsx` | Solo en test pages |
| `src/components/brandpetram/feature-section-3-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/feature-section-5-inverted-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/feature-section-6-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/feature-section-8-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/faq-sections-three-columns-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/grid-poligonos-*.tsx` (6 variantes) | Solo en test pages |
| `src/components/brandpetram/half-circle.tsx` | Solo en test pages |
| `src/components/brandpetram/half-circle-mobile.tsx` | Solo en test pages |
| `src/components/brandpetram/hero-animado.tsx` | Solo en test pages |
| `src/components/brandpetram/hero-marketing-1-video.tsx` | Solo en test pages |
| `src/components/brandpetram/hexagon-features.tsx` | Solo en test pages |
| `src/components/brandpetram/imagen-con-etiqueta-1.tsx` | Solo en test pages |
| `src/components/brandpetram/item-conveyor.tsx` | No importado |
| `src/components/brandpetram/logos-grid-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/logos-parque.tsx` | Solo en test pages |
| `src/components/brandpetram/masonry-1.tsx` | Solo en test pages |
| `src/components/brandpetram/mosaico-2.tsx` | Solo en test pages |
| `src/components/brandpetram/plus-sign.tsx` | No importado |
| `src/components/brandpetram/split-with-image-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/stats-grid-bp.tsx` | Solo en test pages |
| `src/components/brandpetram/stats-grid-bp-beta.tsx` | Solo en test pages |
| `src/components/brandpetram/ticker-marketing-2.tsx` | Solo en test pages |
| `src/components/brandpetram/tres-cards.tsx` | Solo en test pages |
| `src/components/brandpetram/grid-marcas-de-conveyors.tsx` | Solo en test pages |
| `src/components/brandpetram/conveyors-grid-section.tsx` | Solo en test pages |
| `src/components/motion-plus/typewriter-clients.tsx` | No importado |
| `src/components/sdi/*.tsx` (7 archivos) | Solo en test pages |
| `src/components/pro-blocks/*.tsx` | Solo en test pages |
| `src/components/tailwind-ui/*.tsx` (4 archivos) | Solo en test pages |
| `src/components/tailarkpro/*.tsx` (2 archivos) | Solo en test pages |
| `src/components/illustrations/*.tsx` (8 archivos) | Solo en marketing/product |
| ~~`src/hooks/use-media.ts`~~ | **Falso positivo — importado por Header.tsx y Header-en.tsx. Reclasificado como sistema (§1.2).** |
