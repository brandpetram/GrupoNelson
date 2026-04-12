'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { ArrowLeft, Camera, FileImage, Globe, Menu, Badge, Component, PenTool, Building2, Search, LayoutGrid, FileText, Languages, Shield, GitBranch, Wrench, BookOpen } from 'lucide-react'

export default function BitacoraPage() {
  const entries = [
    {
      title: 'Corrección de Copy: Rheem reemplaza a General Dynamics',
      icon: PenTool,
      date: '11 Abril 2026',
      description: 'Gulfstream es subsidiaria de General Dynamics — mencionarlos como dos empresas separadas era incorrecto',
      details: [
        'Cambio en hero, círculos y FAQ del homepage (EN y ES):',
        '  • Antes: "Gulfstream, Honeywell, General Dynamics y DHL"',
        '  • Ahora: "Rheem, Honeywell, Gulfstream y DHL"',
        'Aclaración canónica 1b agregada a docs/copy/aclaraciones-canonicas.md',
        'Rheem seleccionada como reemplazo por ser marca reconocida internacionalmente y tenant real de los parques',
      ],
    },
    {
      title: 'SEO: Robots.txt, Sitemap y Google Search Console',
      icon: Search,
      date: '10-11 Abril 2026',
      description: 'Configuración de robots.txt, validación de sitemap con 114 URLs y plan para acceso programático a Google Search Console API',
      details: [
        'robots.ts agregado — genera robots.txt con referencia al sitemap',
        'Sitemap validado: 114 URLs totales en producción',
        'Plan para Google Search Console API:',
        '  • OAuth Client propio en proyecto GCP brandpetram-assets',
        '  • Script CLI para listar sitios, enviar sitemaps, inspeccionar URLs y consultar analítica',
        '  • Limitación: solicitar indexación NO es posible via API (solo UI)',
      ],
    },
    {
      title: 'Datos de Contacto Corregidos + Aclaraciones Canónicas',
      icon: Shield,
      date: '10-11 Abril 2026',
      description: 'Corrección de teléfono y dirección oficial de Grupo Nelson, más nuevas aclaraciones canónicas',
      details: [
        'Teléfono corregido: (686) 561-3535 → (686) 553-4088',
        'Dirección corregida: Blvd. Lázaro Cárdenas → Ave. Reforma #1699, Col. Nueva',
        'Aclaraciones canónicas nuevas:',
        '  • §14: NOM-009, NOM-027, IBC y DC-3 como capacidades de cumplimiento',
        '  • §15: 4 generaciones (no 3) — Humberto Jr. es cuarta generación',
        '  • §16: Teléfono oficial',
        '  • §17: Dirección oficial',
      ],
    },
    {
      title: 'Sitio Bilingüe Completo: Inglés + Español',
      icon: Languages,
      date: '3-9 Abril 2026',
      description: 'Extensión completa del sitio a inglés: 72 páginas, componentes bilingües, language switcher y SEO con hreflang',
      details: [
        'Reorganización de rutas: español bajo /es/, inglés en raíz /',
        'Fases de extensión ejecutadas:',
        '  • Fase 2: propear componentes Tier 1 para reutilización bilingüe',
        '  • Fase 3: auditoría y corrección de CTAs',
        '  • Fase 4: protección por contraseña para /instrucciones',
        '  • Fase 5: glosario bilingüe, route-map, Header y Footer con prop lang',
        '  • Fase 6a: reorganización de rutas con redirects 301',
        '  • Fase 6b: todas las páginas en inglés (About, Parks, Construction, Experience, Legal, Resources)',
        '  • Fase 6c: Baumex en inglés — 12 componentes Tier 3 traducidos',
        '  • Fase 7: SEO bilingüe — createMetadata helper + sitemap con hreflang',
        '  • Fase 8-10: componentes propeados, createMetadata en 72 páginas, footer EN',
        '  • Fase 11: language switcher con route-map inteligente',
        '  • Fase 13: 50+ componentes con prop lang bilingüe',
        'Redirects 301 para URLs antiguas de WordPress',
        'Redirects explícitos para parques — evitar atrapar imágenes de /public/',
      ],
      link: {
        text: 'Ver sitio en inglés',
        href: '/',
      },
    },
    {
      title: 'Sistema de Worktrees: Trabajo Paralelo por Sección',
      icon: GitBranch,
      date: '3-6 Abril 2026',
      description: 'Implementación de worktrees de Git para trabajo paralelo en secciones del sitio con roles de copywriting',
      details: [
        'Plan maestro de worktrees: MAIN como orquestador, worktrees como ejecutores',
        'Reglas de ownership: cada worktree solo edita archivos de su sección',
        'Secciones trabajadas en paralelo:',
        '  • section/excelencia-operativa',
        '  • section/certificaciones',
        '  • section/casos-de-exito',
        '  • wt/liderazgo',
        '  • wt/nuestra-historia',
        '  • wt/blog',
        '  • wt/instrucciones',
        '  • wt/revisar-ctas',
        '  • wt/ingles',
        'Sistema de roles de copywriting implementado:',
        '  • Context Curator → Value Finder → Angle Architect → Narrative Copywriter → QA Reviewers',
        '  • Angle briefs por sección con diagnóstico obligatorio',
        'Protocolo de commits en worktrees: commit cada 5 min o cada 3 archivos',
      ],
    },
    {
      title: 'Copy Comercial: 5 Secciones Reescritas',
      icon: PenTool,
      date: '2-6 Abril 2026',
      description: 'Reescritura completa del copy comercial de 5 secciones con angle briefs y QA',
      details: [
        'Secciones reescritas con sistema de roles:',
        '  • /nelson/diferencia-nelson — "Con Nelson, hablas con los dueños"',
        '  • /experiencia/casos-de-exito — Gulfstream, Honeywell, DHL',
        '  • /constructora/proyectos-especializados — 4 proyectos especializados de Baumex',
        '  • /experiencia/normas-certificaciones-estandares — taxonomía de tres capas',
        '  • /experiencia/excelencia-operativa — control de obra y avance medible',
        'Cada sección pasó por: angle brief → narrative copywriter → QA (18 chequeos)',
        'Copy de liderazgo reescrito con rediseño editorial minimalista',
        'Copy de nuestra-historia implementado con angle brief',
        'Homepage: copy canónico implementado según angle brief de index',
      ],
    },
    {
      title: 'Mejoras de UI: Contacto, Liderazgo, Blog y Navegación',
      icon: Wrench,
      date: '1-6 Abril 2026',
      description: 'Rediseños visuales, formulario de contacto mejorado, flyout menus con video y 69 fotos de nave Gulfstream',
      details: [
        'Formulario de contacto:',
        '  • Nuevo diseño Tailark Pro (contact-9)',
        '  • Estados Unidos como país por defecto',
        '  • Lista de países ampliada con economías emergentes y Asia',
        '  • Remitente cambiado a nelson.com.mx',
        'Navegación:',
        '  • Videos animados en flyout menus',
        '  • Fix: "Contact" → "Contact Us" en Header y hero',
        'Liderazgo:',
        '  • Rediseño editorial minimalista',
        '  • Hero con cuadrícula SVG y nube decorativa',
        '  • Corrección a 4 generaciones (no 3)',
        'Blog rediseñado con estilo Tailark Pro y columna sticky',
        '69 fotos de nave Gulfstream en Nelson II agregadas',
        'Favicon y metadata SEO optimizados en todas las páginas',
        'Footer: datos reales de Grupo Nelson reemplazan lorem ipsum',
        'Página de parques industriales rediseñada + fix flyouts nav bilingüe',
      ],
    },
    {
      title: 'Sección /instrucciones: Guías para el Cliente',
      icon: BookOpen,
      date: '3 Abril 2026',
      description: 'Portal de instrucciones protegido con contraseña para guiar al equipo de Nelson en el uso de Sanity CMS',
      details: [
        'Página /instrucciones con diseño elegante',
        'Guía de acceso a Sanity CMS para Susana',
        'Protegido por contraseña (no visible al público)',
      ],
      link: {
        text: 'Ver instrucciones',
        href: '/instrucciones',
      },
    },
    {
      title: 'Excelencia Operativa: Layout Tailark + Tabla de Control de Obra',
      icon: LayoutGrid,
      date: '31 Marzo 2026',
      description: 'Prototipo de página /experiencia/excelencia-operativa usando layout Grid-2 de Tailark Pro adaptado con datos reales de Baumex',
      details: [
        'Layout Tailark Pro (grid-2-product-two) descargado y adaptado:',
        '  • Header y footer de Grupo Nelson (no los de Tailark)',
        '  • Componente de tabla/spreadsheet convertido a "Control de Obra — Gulfstream 550K"',
        '  • 7 actividades reales: fabricación de acero, cimentación, HVAC, protección contra incendio, paneles solares 10MW',
        '  • Barras de progreso y badges de estatus por actividad',
        '  • Resumen: 78% avance, 404 días sin accidentes, 453 trabajadores',
        'Hero adaptado:',
        '  • Eyebrow: "Excelencia Operativa"',
        '  • H1: "Control de obra. Avance medible. Reportes semanales."',
        '  • Subtítulo con datos duros de Baumex (75 proyectos, 1,092,745 HHT)',
        'Concepto: mostrar "así es como trabajamos" en vez de "mira qué grandes somos"',
        'Datos fuente: docs/temario-sobre-baumex-constructora.md y docs/fase-2-desempaquetado-comercial-baumex.md',
        'Pendiente: adaptar resto de secciones de la página (features, testimonials, CTA)',
      ],
      link: {
        text: 'Ver prototipo',
        href: '/product',
      },
    },
    {
      title: 'DevOverlay + EditorialCascadaBeta + Nomenclatura Griega',
      icon: Component,
      date: '30 Marzo 2026',
      description: 'Sistema DevOverlay para inspeccionar componentes en el browser, nuevo componente EditorialCascadaBeta, y regla de nomenclatura con letras griegas',
      details: [
        'DevOverlay — Inspector visual de componentes:',
        '  • Etiquetas flotantes sobre cada componente en dev (Ctrl+Shift+D para toggle)',
        '  • Clic abre en Zed, botón copia nombre, botón Page abre/copia page.tsx',
        '  • Color fucsia (sin props) / verde (con props) / azul (page)',
        '  • Scripts predev/prebuild: producción queda limpia (0 atributos extra)',
        '  • Documentado en reglas/dev-overlay.md',
        'EditorialCascadaBeta:',
        '  • Evolución de EditorialCascadaBP: CTA reemplazado por 4 diferenciadores cualitativos',
        '  • Copy migrado desde FeatureSection8BP',
        '  • Dot pattern naranja→rojo en esquina superior derecha',
        'Nomenclatura de componentes simplificada:',
        '  • Eliminado sufijo -BP — no importa el origen del componente',
        '  • Evoluciones con letras griegas: Original → Beta → Gamma → Delta',
        '  • Documentado en reglas/nomenclatura-componentes.md',
        'Mejoras en diferencia-nelson:',
        '  • CuadritosLluvia en SplitSimpleBP con prop showCuadritos (posición y escala responsive)',
        '  • Spacers entre secciones para que los cuadritos tengan espacio',
        '  • overflow-x-clip para evitar scroll horizontal en mobile',
        'Mejoras LEED:',
        '  • Header agregado al layout de LEED (aplica a todas las subpáginas)',
        '  • Eyebrows personalizados por sección (ej: "LEED | Aire, luz y confort interior")',
        '  • Breadcrumb redundante eliminado',
        '  • Layout 2-col cambiado de lg: a xl: para que 1024 se vea como tablet',
        '  • CarruselLeed: dark mode corregido (bg-background, text-foreground, bordes visibles)',
      ],
      link: {
        text: 'Ver diferencia Nelson',
        href: '/nelson/diferencia-nelson',
      },
    },
    {
      title: 'Copy Comercial: Nelson Desarrolladora — 3 Páginas Nuevas',
      icon: PenTool,
      date: '18 Marzo 2026',
      description: 'Escritura de copy comercial B2B para las páginas de Grupo Nelson como desarrolladora',
      details: [
        'Desempaquetado comercial de Nelson Desarrolladora:',
        '  • Material organizado por página con datos duros, ángulos comerciales y decisiones de contenido',
        '  • Mapeo de temas → páginas para evitar repetición entre secciones',
        '  • Documento: docs/copy/desempaquetado-nelson-desarrolladora.md',
        'Página /nelson/diferencia-nelson:',
        '  • H1: "Con Nelson, hablas con los dueños"',
        '  • 3 diferenciadores: 60+ años, owner-operated, constructora in-house',
        '  • Infraestructura validada por Fortune 500 (Gulfstream, Honeywell, General Dynamics, DHL)',
        'Página /nelson/liderazgo:',
        '  • H1: "Hacemos nearshoring en Mexicali desde antes de que existiera la palabra"',
        '  • 80% repeat business, Gulfstream 35 años, Honeywell 30, Interiores Aéreos 110x',
        '  • Detalle de directiva familiar y sus roles',
        'Página /nelson/trayectoria:',
        '  • H1: "60 años construyendo naves industriales para empresas Fortune 500"',
        '  • Timeline 1965→hoy, 8 números impresionantes, placeholder grid 30 logos',
        '  • Diseño visual: números a la izquierda, logos a la derecha (pendiente componentes)',
        'Pendiente: QA de las 3 páginas y migración de copy a componentes visuales',
      ],
      link: {
        text: 'Ver diferencia Nelson',
        href: '/nelson/diferencia-nelson',
      },
    },
    {
      title: 'Copy Comercial: Proyectos Especializados (Tema G) + Regla 17',
      icon: PenTool,
      date: '18 Marzo 2026',
      description: 'Copy de 4 proyectos especializados de Baumex y nueva regla de copywriting',
      details: [
        'Página /constructora/proyectos-especializados:',
        '  • H1: "Construye tu nave industrial en Mexicali con ingeniería especializada"',
        '  • 4 proyectos: Puente Skyworks 95m, Gulfstream 550K 55,500m², Túnel de viento Honeywell 3,000HP, Planta Deacero 50,000m²',
        '  • Aprobado 18/18 en QA (rev02)',
        'Nueva Regla 17 — "Superioridad sin desprecio":',
        '  • Comunicar superioridad con datos propios, nunca con la incapacidad del competidor',
        '  • Agregada al sistema genérico de reglas (copywriting-b2b/)',
        '  • Integrada al skill QA como chequeo J13',
        'Mejoras al skill QA Copy:',
        '  • Ahora tiene 18 chequeos (5 mecánicos + 13 juicio)',
        '  • Soporte para --section: evaluar una sección específica del sitio',
        '  • YAML actualizado con 5 secciones: baumex, proyectos-especializados, diferencia-nelson, liderazgo, trayectoria',
        'Proceso de copywriting B2B formalizado:',
        '  • Desempaquetado agregado como paso obligatorio del proceso (Paso 2 de 7)',
        '  • Plantilla de desempaquetado creada (plantilla-desempaquetado.md)',
        '  • Git inicializado en /Proyectos/copywriting-b2b/',
      ],
      link: {
        text: 'Ver proyectos especializados',
        href: '/constructora/proyectos-especializados',
      },
    },
    {
      title: 'Sistema de Copywriting B2B Industrial',
      icon: FileText,
      date: '17 Marzo 2026',
      description: 'Construcción del sistema completo de reglas, vocabularios y QA para copywriting B2B',
      details: [
        'Documentos genéricos creados (en /Proyectos/copywriting-b2b/):',
        '  • 17 reglas de copywriting B2B industrial',
        '  • Vocabulario genérico B2B (verbos, sustantivos, prohibidas)',
        '  • Vocabulario sector parques industriales',
        '  • Vocabulario sector construcción industrial',
        '  • Plantilla de brief de cliente',
        '  • Documento de proceso: "Lo que necesitamos para hacer copy B2B"',
        'Documentos específicos Grupo Nelson (en docs/copy/):',
        '  • Brief de cliente actualizado con 30 clientes',
        '  • Buyer persona con 2 perfiles',
        '  • Temarios: desarrolladora (7 temas) y Baumex (7 temas)',
        '  • Desempaquetado comercial Baumex (7 temas con datos duros)',
        '  • Ideas de copy (4 conceptos Trumpianos con variaciones)',
        'Copy de Baumex Constructora (/constructora/baumex):',
        '  • 6 temas comerciales escritos y aprobados 17/17 QA',
        '  • Constructora propia, track record, project management, safety, certificaciones, ejecución completa',
        'Skill QA Copy construido:',
        '  • 5 scripts Python: banned_phrases, stats_density, emotional_register, headers, opening',
        '  • Orquestador qa_runner.py',
        '  • 12 chequeos de juicio ejecutados por Claude Code directamente',
        'Investigación previa:',
        '  • Deep research de copywriting B2B industrial (12 reglas, 24 frases modelo)',
        '  • Benchmarking de 20+ competidores',
      ],
      link: {
        text: 'Ver copy de Baumex',
        href: '/constructora/baumex',
      },
    },
    {
      title: 'Investigación y Documentación de Reuniones',
      icon: Search,
      date: '4-12 Marzo 2026',
      description: 'Notas de reuniones con equipo directivo y reunión con Armando Wilhelmy',
      details: [
        'Reunión con Armando Wilhelmy (12 marzo):',
        '  • Material crudo para Tema G: 4 proyectos especializados de Baumex',
        '  • Puente Skyworks, Gulfstream 550K, túnel de viento Honeywell, planta Deacero',
        'Reuniones de seguimiento (4, 6, 11 marzo):',
        '  • Definición de temas comerciales por sección del sitio',
        '  • Plan para recabar info de Baumex',
        '  • Decisiones de navegación: secciones eliminadas y reorganizadas',
        'Documentación generada:',
        '  • 10 temas comerciales de Grupo Nelson definidos',
        '  • Vocabulario estratégico aprobado',
        '  • Plan de contenido Baumex',
      ],
    },
    {
      title: 'Parques Industriales: Fichas Técnicas y Catálogos',
      icon: Building2,
      date: '12-15 Febrero 2026',
      description: 'Componentes de fichas técnicas de parques con logos de inquilinos y disponibilidad',
      details: [
        'Fichas técnicas de parques industriales:',
        '  • FichaTecnicaParque con especificaciones detalladas por edificio',
        '  • Disponibilidad de naves con highlights y detalles',
        '  • LogoCloud de inquilinos por parque',
        'Componentes de catálogo:',
        '  • Tabla de modelos con dark mode',
        '  • Drawer mejorado con dark mode y overflow',
        '  • Product table con mejor legibilidad',
        'Naves industriales:',
        '  • Galerías de imágenes drone para múltiples naves',
        '  • Viewer mejorado con interacciones',
        '  • Página de naves disponibles con data integration',
      ],
    },
    {
      title: 'Páginas LEED y Certificación',
      icon: Badge,
      date: '2-10 Febrero 2026',
      description: 'Sistema completo de páginas sobre certificación LEED con sub-secciones',
      details: [
        '7 sub-páginas de LEED creadas:',
        '  • /constructora/leed (índice)',
        '  • /constructora/leed/calidad-ambiental',
        '  • /constructora/leed/clima-extremo',
        '  • /constructora/leed/energia-atmosfera',
        '  • /constructora/leed/sistemas-operativos',
        '  • /constructora/leed/sitios-sostenibles',
        '  • /constructora/leed/proceso-certificacion',
        '  • /constructora/leed/materiales-recursos',
        'Scripts de generación:',
        '  • Script de generación de imágenes AI para visuales LEED',
        '  • Script batch para generación en lote',
        'Navegación actualizada para sección LEED completa',
      ],
      link: {
        text: 'Ver sección LEED',
        href: '/constructora/leed',
      },
    },
    {
      title: 'Blog y Noticias con Sanity CMS',
      icon: FileText,
      date: '28-31 Enero 2026',
      description: 'Sistema de blog multilingüe y noticias integrado con Sanity',
      details: [
        'Blog con Sanity CMS:',
        '  • Soporte multilingüe (es/en/zh)',
        '  • 30 posts de contenido',
        '  • Filtrado por categorías',
        '  • Paginación',
        '  • Componente Blog-7 con fondo animado',
        'Sección de noticias:',
        '  • /noticias con integración Sanity',
        '  • Tipo de contenido "noticia" separado del blog',
        'Scripts de contenido:',
        '  • Content patch scripts para Sanity',
      ],
    },
    {
      title: 'Homepage y Componentes de Marketing',
      icon: LayoutGrid,
      date: '27-28 Enero 2026',
      description: 'Componentes de marketing para homepage con logos, tickers y mosaicos',
      details: [
        'Homepage:',
        '  • LogoCloud responsive con 24 logos de clientes',
        '  • Ticker animado bidireccional con logos',
        '  • Mosaicos con props para soluciones industriales',
        '  • CincoCards con props',
        '  • Badge aniversario 60 años responsive',
        'HeroMarketing1:',
        '  • Soporte para emblema interior',
        '  • Responsive scaling mejorado',
        '  • Integración con ContentText1',
        'Mejoras generales:',
        '  • Videos optimizados 720p para ScrollStorytelling',
        '  • ParkMap con Google Maps',
        '  • Dark mode en drawer y tablas',
      ],
    },
    {
      title: 'Integración de Componentes Brandpetramizados y Mejoras en Header',
      icon: Component,
      date: '26 Enero 2026',
      description: 'Expansión de biblioteca de componentes responsive y optimización del header',
      details: [
        'Componentes brandpetramizados integrados:',
        '  • FeatureSection5InvertedBP - Sección con imagen izquierda y 4 features en grid 2×2',
        '  • FeatureSection3BP - Sección con 2 features y elementos decorativos "lluvia"',
        '  • FaqSectionsThreeColumnsBP - 9 preguntas frecuentes en grid responsive con gradiente oscuro',
        '  • CuadritosLluviaTres - Elemento decorativo con 5 cuadrados en colores cálidos (rojo/naranja)',
        'Animación agregada a TresCards:',
        '  • Entrada desde abajo (600px) con fade in',
        '  • Viewport trigger al 5% visible para entrada temprana',
        '  • Duration 0.5s con easing suave [0.25, 0.1, 0.15, 1]',
        '  • Z-index correcto para stacking con footer',
        'Mejoras en Header responsive:',
        '  • Logo scale responsive: reduce de 125% a 100% en desktop al hacer scroll',
        '  • Logo scale responsive: reduce de 100% a 90% en mobile al hacer scroll',
        '  • Botón Contacto con espaciado correcto del borde derecho',
        '  • Transición suave de 500ms sincronizada con contracción del header',
        '  • Solución: justify-center + translate-x-10 (-40px) al hacer scroll',
        'Componentes auxiliares copiados:',
        '  • Tagline con soporte para prop inverted (fondos oscuros)',
        '  • AspectRatio para mantener proporciones de imagen',
        'Todas las resoluciones optimizadas: 360px, 393px, 430px, 768px, 834px, 1024px, 1200px, 1280px, 1366px, 1440px, 1536px, 1728px, 1920px',
        'Sistema de "brandpetramización": 13 breakpoints granulares para textos y widths',
        'Headings con leading-none y tracking-tighter para tipografía compacta',
      ],
      link: {
        text: 'Ver página /componentes-dos actualizada',
        href: '/componentes-dos',
      },
    },
    {
      title: 'Desarrollo de Componentes UI para /componentes-dos',
      icon: Component,
      date: '22 Enero 2026',
      description: 'Construcción de 19 componentes optimizados para todas las resoluciones',
      details: [
        'Componentes principales construidos:',
        '  • CuadriculaSection1 - Grid animado de imágenes tipo mosaico con 20 fotografías',
        '  • HeroSection1 - Hero section con imagen, tagline y CTAs',
        '  • Mosaico2 - Layout de mosaico responsive con 3 imágenes y texto',
        '  • TresCards - Sistema de 3 tarjetas con video e imágenes',
        '  • Circulos - Componente D-C-G con 3 círculos animados y textos',
        '  • CuadroCirculoConEscuadra - Círculo 360° con checklist de 5 servicios',
        '  • ImagenConEtiqueta1 - Imagen con etiqueta grande posicionable',
        'Componentes UI helpers construidos:',
        '  • LineaL - Líneas decorativas en forma de L con múltiples orientaciones',
        '  • PoligonoTexto1 - Polígonos con texto personalizable y hover effects',
        '  • GradientBlob - Nubes decorativas con gradientes difuminados',
        '  • ImagenRectangulo - Imágenes con overlays y grid configurables',
        '  • TextoGradiente - Texto con efectos de gradiente animados',
        '  • CuadritosLluvia - Elementos decorativos en cascada',
        '  • CuadritosLluviaDos - Variante de elementos decorativos',
        'Optimizado para TODAS las resoluciones: 360px, 393px, 430px, 768px, 834px, 1024px, 1200px, 1280px, 1366px, 1440px, 1536px, 1728px, 1920px, 2240px, 2560px',
        'Sistema de diseño consistente con paleta azul de Grupo Nelson (blue-600/700)',
        'Componentes completamente responsive con tipografía adaptativa',
        'Animaciones implementadas con motion/react para transiciones fluidas',
        '30 fotografías integradas de parques industriales (fotos 251-280)',
        'Contenido optimizado con keywords estratégicos: Parques Industriales Mexicali, Naves Industriales, Built-to-Suit, Construcción Llave en Mano',
        'Vocabulario estratégico aplicado: turnkey, constructora in-house, 58 años de trayectoria, expertise fronterizo',
        'Build exitoso - página /componentes-dos lista para revisión',
      ],
      link: {
        text: 'Ver página /componentes-dos',
        href: '/componentes-dos',
      },
    },
    {
      title: 'Extracción de Fotografías de Videos',
      icon: Camera,
      date: '21 Enero 2026',
      description: 'Procesamiento automatizado de videos para generar biblioteca fotográfica',
      details: [
        'Se recibieron 86 videos del cliente',
        'Desarrollo de script personalizado para generar 1 captura por segundo',
        'Generación de aproximadamente 1,600 imágenes totales',
        'Revisión manual exhaustiva imagen por imagen',
        'Selección y curación de las 250 mejores fotografías',
        'Las fotografías representan situaciones reales de Grupo Nelson',
      ],
      link: {
        text: 'Ver fotografías reales (1-250)',
        href: '/proyecto/fotografias#reales',
      },
    },
    {
      title: 'Selección de Fotografías Profesionales',
      icon: FileImage,
      date: '21 Enero 2026',
      description: 'Adquisición de fotografías de stock de alta calidad',
      details: [
        'Compra de 211 fotografías profesionales (fotos 251-461)',
        'Criterio de selección: similitud con operaciones de Grupo Nelson',
        'Calidad fotográfica superior para comunicación comercial',
        'Imágenes cuidadosamente seleccionadas para elevar la presentación de marca',
        'Total combinado: 461 fotografías en catálogo general',
      ],
      link: {
        text: 'Ver fotografías profesionales (251-461)',
        href: '/proyecto/fotografias#profesionales',
      },
    },
    {
      title: 'Extracción y Procesamiento de Imágenes de PDFs',
      icon: FileImage,
      date: '21 Enero 2026',
      description: 'Procesamiento de documentación técnica de parques industriales',
      details: [
        'Extracción automatizada de imágenes desde PDFs técnicos',
        'Nelson II: 3 PDFs procesados → 3 imágenes extraídas',
        'El Vigía: 11 PDFs procesados → 11 imágenes extraídas',
        'El Vigía II: 2 PDFs procesados → 2 imágenes extraídas',
        'Nota: Nelson I no cuenta con documentación PDF disponible',
        'Procesamiento con Upscayl para mejorar resolución de imágenes de baja calidad',
        'Conversión a formato JPG optimizado para web',
        'Organización en estructura de carpetas por parque industrial',
      ],
      link: {
        text: 'Ver fotografías de parques',
        href: '/proyecto/fotografias#parques',
      },
    },
    {
      title: 'Preparación para Sitio Multilingüe',
      icon: Globe,
      date: '20 Enero 2026',
      description: 'Configuración de arquitectura para múltiples idiomas',
      details: [
        'Estructura de rutas preparada para español, inglés y chino',
        'Componente de banderas funcional para cambio de idioma',
        'Sistema de detección de idioma por URL',
        'Rutas: / (español), /en (inglés), /cn (chino)',
        'Base configurada para futuras traducciones',
      ],
    },
    {
      title: 'Sistema de Navegación',
      icon: Menu,
      date: '20 Enero 2026',
      description: 'Implementación y corrección del menú principal',
      details: [
        'Header con navegación completa de 5 secciones principales',
        'Menú dropdown con sub-navegación',
        'Menú móvil desarrollado con drill-down navigation completo',
        'Animaciones y transiciones fluidas en móvil',
        'Solución de problemas de interactividad',
        'Integración de banderas de idiomas',
        'Variantes de header para fondos claros y oscuros',
      ],
    },
    {
      title: 'Creación de Páginas Internas',
      icon: FileImage,
      date: '20 Enero 2026',
      description: 'Estructura de páginas para parques industriales',
      details: [
        'Página individual para cada parque industrial',
        'Rutas configuradas: /parques-industriales-mexicali/nelson-ii',
        'Rutas configuradas: /parques-industriales-mexicali/vigia-i',
        'Rutas configuradas: /parques-industriales-mexicali/vigia-ii',
        'Rutas configuradas: /parques-industriales-mexicali/nelson-i',
        'Páginas funcionales listas para contenido',
      ],
    },
    {
      title: 'Badge Conmemorativo "60 Años"',
      icon: Badge,
      date: '20 Enero 2026',
      description: 'Elemento visual celebrando aniversario de Grupo Nelson',
      details: [
        'Badge animado con efecto de entrada',
        'Diseño responsive (200px móvil, 280px tablet, 450px desktop)',
        'Posicionamiento estratégico en hero principal',
        'Rotación y animaciones sutiles',
        'Integración con diseño general del sitio',
      ],
    },
    {
      title: 'Catálogo de Componentes UI',
      icon: Component,
      date: '21 Enero 2026',
      description: 'Sistema de componentes reutilizables construidos desde cero',
      details: [
        'Desarrollamos 15+ componentes ready-to-use completamente funcionales',
        'Optimizados para TODAS las viewports: 393px, 430px, 768px, 834px, 1024px, 1200px, 1280px, 1366px, 1440px, 1536px, 1728px, 1920px, 2240px, 2560px',
        'Sistema de diseño consistente con paleta de colores azules de Grupo Nelson',
        'Componentes incluidos:',
        '  • HeroAnimado - Hero section con animaciones secuenciales',
        '  • GridPoligonos2x1x2 - Grid complejo de 5 columnas con polígonos',
        '  • SidebarSticky1 - Sidebar que permanece fijo en scroll',
        '  • BigNumber - Estadísticas con números grandes animados',
        '  • ConveyorsGridSection - Grid interactivo de 10 items',
        '  • Drawer - Panel lateral compartido para detalles',
        '  • CarruselConveyors - Carrusel de imágenes',
        '  • Masonry1 - Grid tipo masonry responsive',
        '  • HexagonFeatures - Features en diseño hexagonal',
        '  • HalfCircle (desktop) - Semicírculo con 7 secciones graduadas',
        '  • HalfCircleMobile (mobile) - Versión móvil del semicírculo',
        '  • TickerMarketing2 - Ticker animado infinito',
        '  • FAQs - Sección de preguntas frecuentes',
        '  • ScrollHighlightSDI - Componente de scroll con highlight',
        '  • LogosMarcas - Grid de parques y servicios',
        'Subcomponentes y utilidades:',
        '  • PoligonoImagen1 - Polígono con imagen y overlay',
        '  • PoligonoIcono1 - Polígono con ícono',
        '  • GridPoligonos2x1 - Grid de 3 columnas para drawer',
        '  • ItemConveyor - Item individual del grid',
        '  • StickyRevealContent - Sistema de reveal con scroll',
        'Sistema completamente responsive con tipografía adaptativa',
        'Animaciones con motion/react (Framer Motion)',
        'Se estiman ~20 componentes adicionales en desarrollo',
      ],
      link: {
        text: 'Ver catálogo de componentes en acción',
        href: '/componentes',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/proyecto"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portal del Proyecto
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bitácora de Avances
            </h1>
            <p className="text-xl text-muted-foreground">
              Registro detallado de todo el trabajo realizado en el desarrollo del sitio web de
              Grupo Nelson
            </p>
          </div>

          <div className="space-y-8">
            {entries.map((entry, index) => {
              const Icon = entry.icon
              return (
                <div
                  key={index}
                  className="border rounded-2xl p-8 bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-500 bg-opacity-10 p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                          {entry.date}
                        </div>
                        <h2 className="text-2xl font-bold">{entry.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-4">{entry.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-16">
                    {entry.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.link && (
                    <div className="ml-16 mt-4">
                      <Link
                        href={entry.link.href}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {entry.link.text}
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-12 p-6 border rounded-2xl bg-blue-50 dark:bg-blue-950/20">
            <h3 className="font-bold text-lg mb-2">Próximos Pasos</h3>
            <p className="text-sm text-muted-foreground">
              El sitio está preparado para recibir contenido final y traducciones. La estructura
              está completa y lista para producción.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
