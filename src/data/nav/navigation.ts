// Datos de navegación para Grupo Nelson
// Un desarrollador industrial con 58 años de historia en Mexicali

// === NOSOTROS ===
// Columna única: La Empresa
export const whyNelsonLinks = [
  {
    href: '/nelson/nuestra-historia',
    name: 'Nuestra Historia',
    description: '60 años de experiencia en desarrollo industrial',
    iconKey: 'history',
  },
  {
    href: '/nelson/diferencia-nelson',
    name: 'La Diferencia Nelson',
    description: 'Lo que nos distingue',
    iconKey: 'star',
  },
  {
    href: '/nelson/liderazgo',
    name: 'Liderazgo',
    description: 'Tres generaciones de experiencia',
    iconKey: 'users',
  },
  {
    href: '/nelson/trayectoria',
    name: 'Trayectoria Comprobada',
    description: 'Empresas Fortune 500 confían en nosotros',
    iconKey: 'trophy',
  },
];

// === PARQUES ===
// Columna 1: Mexicali
export const parksMexicaliLinks = [
  {
    href: '/parques-industriales-mexicali/nelson-ii',
    name: 'Parque Nelson II',
    description: 'Parque industrial de primer nivel',
    iconKey: 'building',
  },
  {
    href: '/parques-industriales-mexicali/nelson-i',
    name: 'Parque Nelson I',
    description: 'Centro industrial establecido',
    iconKey: 'building',
  },
  {
    href: '/parques-industriales-mexicali/vigia-i',
    name: 'Parque El Vigía I',
    description: 'Ubicación estratégica',
    iconKey: 'building',
  },
  {
    href: '/parques-industriales-mexicali/vigia-ii',
    name: 'Parque El Vigía II',
    description: 'Instalaciones modernas',
    iconKey: 'building',
  },
];

// Columna 2: Inventario
export const parksInventoryLinks = [
  {
    href: '/inventario/naves-disponibles',
    name: 'Naves Disponibles',
    description: 'Espacios listos para ocupar',
    iconKey: 'warehouse',
  },
  {
    href: '/inventario/terrenos',
    name: 'Terrenos Disponibles',
    description: 'Terrenos industriales disponibles',
    iconKey: 'map',
  },
  {
    href: '/parques-industriales-mexicali',
    name: 'Todos los Parques',
    description: 'Portafolio completo',
    iconKey: 'grid',
  },
];

// === CONSTRUCCIÓN ===
// Columna 1: Servicios de Construcción
export const solutionsServicesLinks = [
  {
    href: '/constructora/baumex',
    name: 'Baumex Constructora',
    description: 'Constructora in-house con 25+ años',
    iconKey: 'award',
  },
    {
    href: '/constructora/diseno-e-ingenieria',
    name: 'Ingeniería y Diseño',
    description: 'Ingeniería industrial bajo códigos internacionales',
    iconKey: 'compass',
  },
  {
    href: '/constructora/build-to-suit',
    name: 'Construcción Build-to-Suit',
    description: 'Naves diseñadas y construidas a la medida',
    iconKey: 'hammer',
  },
  {
    href: '/constructora/llave-en-mano',
    name: 'Soluciones Llave en Mano',
    description: 'Naves de inventario listas para operar',
    iconKey: 'key',
  }
];

// Columna 2: Calidad y Estándares
export const solutionsIndustryLinks = [
  {
    href: '/constructora/certificacion-leed',
    name: 'Certificación LEED',
    description: 'Construcción sustentable certificada',
    iconKey: 'leaf',
  },
  {
    href: '/constructora/estandares-internacionales',
    name: 'Estándares Internacionales',
    description: 'Códigos US, FM Global, NFPA',
    iconKey: 'globe',
  },
  {
    href: '/constructora/portafolio',
    name: 'Portafolio de Proyectos',
    description: 'Gulfstream, Honeywell, Hirsh, Direct Pack',
    iconKey: 'trophy',
  },

  {
    href: '/constructora/proyectos-especializados',
    name: 'Proyectos Especializados',
    description: 'Instalaciones aeroespaciales, túneles de viento, celdas',
    iconKey: 'hardHat',
  },
];

// === EXPERIENCIA ===
// Columna única: Resultados
// Redefinida para enfocarse en evidencia y resultados demostrados,
// no en capacidades (que ya están en Constructora).
// Ver: docs/porque-eliminamos-algunas-secciones-del-menu-de-navegacion.md
export const expertiseCapabilitiesLinks = [
  {
    href: '/experiencia/excelencia-operativa',
    name: 'Excelencia Operativa',
    description: 'Confiabilidad garantizada en la operación de parques',
    iconKey: 'settings',
  },
  {
    href: '/experiencia/casos-de-exito',
    name: 'Casos de Éxito',
    description: 'Gulfstream, Honeywell, Interiores Aéreos',
    iconKey: 'award',
  },
  {
    href: '/experiencia/certificaciones',
    name: 'Certificaciones Obtenidas',
    description: 'Logros verificables: LEED, FM Global',
    iconKey: 'award',
  },
];

// Columna 2: Vacía (se mantiene el export para no romper imports)
export const expertiseStandardsLinks: typeof expertiseCapabilitiesLinks = [];

// === RECURSOS ===
// Columna 1: Aprender
// Casos de Éxito se movió a Experiencia (ver docs/porque-eliminamos-algunas-secciones-del-menu-de-navegacion.md)
export const insightsLearnLinks = [
  {
    href: '/blog',
    name: 'Blog',
    description: 'Tendencias de la industria',
    iconKey: 'newspaper',
  },
  {
    href: '/recursos',
    name: 'Recursos',
    description: 'Guías y descargas',
    iconKey: 'download',
  },
];

// Columna 2: Conectar
// Eventos eliminado: no aplica para Grupo Nelson (no realizan eventos públicos)
export const insightsConnectLinks = [
  {
    href: '/noticias',
    name: 'Noticias',
    description: 'Últimos anuncios',
    iconKey: 'megaphone',
  },
];
