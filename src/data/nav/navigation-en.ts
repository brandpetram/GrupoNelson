// Navigation data for Grupo Nelson (English)
// Industrial developer with 60 years of history in Mexicali
//
// Las rutas usan prefijo /en/ (estructura actual).
// En Fase 6, cuando se cree el route group (en)/, se quitará el prefijo
// y los slugs quedarán en la raíz (/about/..., /construction/..., etc.).

// === ABOUT ===
// Single column: The Company
export const whyNelsonLinks = [
  {
    href: '/en/about/track-record',
    name: 'Proven Track Record',
    description: 'Fortune 500 clients trust us',
    iconKey: 'trophy',
  },
  {
    href: '/en/about/difference',
    name: 'The Nelson Difference',
    description: 'What sets us apart',
    iconKey: 'star',
  },
  {
    href: '/en/about/leadership',
    name: 'Leadership',
    description: 'Four generations of expertise',
    iconKey: 'users',
  },
  {
    href: '/en/about/our-story',
    name: 'Our Story',
    description: '60 years pioneering industrial development',
    iconKey: 'history',
  },
];

// === PARKS ===
// Column 1: Mexicali
export const parksMexicaliLinks = [
  {
    href: '/en/industrial-parks/nelson-ii',
    name: 'Nelson II Park',
    description: 'Premier industrial park',
    iconKey: 'building',
  },
  {
    href: '/en/industrial-parks/nelson-i',
    name: 'Nelson I Park',
    description: 'Established industrial hub',
    iconKey: 'building',
  },
  {
    href: '/en/industrial-parks/vigia-i',
    name: 'El Vigía I Park',
    description: 'Strategic location',
    iconKey: 'building',
  },
  {
    href: '/en/industrial-parks/vigia-ii',
    name: 'El Vigía II Park',
    description: 'Modern facilities',
    iconKey: 'building',
  },
];

// Column 2: Inventory
export const parksInventoryLinks = [
  {
    href: '/en/inventory/available-buildings',
    name: 'Available Buildings',
    description: 'Move-in ready spaces',
    iconKey: 'warehouse',
  },
  {
    href: '/en/inventory/land',
    name: 'Land for Development',
    description: 'Prime industrial land',
    iconKey: 'map',
  },
  {
    href: '/en/industrial-parks',
    name: 'All Parks Overview',
    description: 'Complete portfolio',
    iconKey: 'grid',
  },
];

// === CONSTRUCTION ===
// Column 1: Construction Services
export const solutionsServicesLinks = [
  {
    href: '/en/construction/baumex',
    name: 'Baumex Construction',
    description: 'In-house construction firm with 25+ years',
    iconKey: 'award',
  },
  {
    href: '/en/construction/engineering-design',
    name: 'Engineering & Design',
    description: 'Industrial engineering under international codes',
    iconKey: 'compass',
  },
  {
    href: '/en/construction/build-to-suit',
    name: 'Build-to-Suit',
    description: 'Custom-designed and built facilities',
    iconKey: 'hammer',
  },
  {
    href: '/en/construction/turnkey',
    name: 'Turnkey Solutions',
    description: 'Move-in ready operations',
    iconKey: 'key',
  },
];

// Column 2: Quality & Standards
export const solutionsIndustryLinks = [
  {
    href: '/en/construction/leed',
    name: 'LEED Certification',
    description: 'Certified sustainable construction',
    iconKey: 'leaf',
  },
  {
    href: '/en/construction/international-standards',
    name: 'International Standards',
    description: 'US codes, FM Global, NFPA',
    iconKey: 'globe',
  },
  {
    href: '/en/construction/portfolio',
    name: 'Project Portfolio',
    description: 'Gulfstream, Honeywell, Hirsh, Direct Pack',
    iconKey: 'trophy',
  },
  {
    href: '/en/construction/specialized-projects',
    name: 'Specialized Projects',
    description: 'Aerospace facilities, wind tunnels, cells',
    iconKey: 'hardHat',
  },
];

// === EXPERIENCE ===
// Single column: Results
export const expertiseCapabilitiesLinks = [
  {
    href: '/en/experience/operational-excellence',
    name: 'Operational Excellence',
    description: 'Guaranteed reliability in park operations',
    iconKey: 'settings',
  },
  {
    href: '/en/experience/success-stories',
    name: 'Success Stories',
    description: 'Gulfstream, Honeywell, Interiores Aéreos',
    iconKey: 'award',
  },
  {
    href: '/en/experience/standards-certifications',
    name: 'Standards & Certifications',
    description: 'ISN, LEED, FM Global, NFPA, NOM, IBC',
    iconKey: 'award',
  },
];

// Column 2: Empty (kept for import compatibility)
export const expertiseStandardsLinks: typeof expertiseCapabilitiesLinks = [];

// === INSIGHTS ===
// Column 1: Learn
export const insightsLearnLinks = [
  {
    href: '/es/blog',
    name: 'Blog',
    description: 'Industry insights & trends',
    iconKey: 'newspaper',
  },
  {
    href: '/en/resources',
    name: 'Resources',
    description: 'Guides & downloads',
    iconKey: 'download',
  },
];

// Column 2: Connect
export const insightsConnectLinks = [
  {
    href: '/es/noticias',
    name: 'News & Updates',
    description: 'Latest announcements',
    iconKey: 'megaphone',
  },
];
