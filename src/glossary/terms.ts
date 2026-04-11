/**
 * Glosario bilingüe de términos recurrentes y CTAs cortos.
 *
 * Solo para textos que aparecen en múltiples páginas o componentes.
 * El copy largo de cada página vive en su propio page.tsx.
 * Los datos de navegación viven en src/data/nav/.
 * Los datos del footer viven en el componente footer-1/.
 */

export type Lang = 'en' | 'es'

export const terms = {
  en: {
    // --- CTAs recurrentes ---
    contactUs: 'Contact Us',
    learnMore: 'Learn More',
    viewSpecs: 'View Specifications',
    viewMore: 'View More',
    seeAll: 'See All',
    getInTouch: 'Get in Touch',
    requestQuote: 'Request a Quote',
    downloadBrochure: 'Download Brochure',

    // --- Términos de industria ---
    industrialPark: 'Industrial Park',
    industrialParks: 'Industrial Parks',
    warehouse: 'Industrial Building',
    warehouses: 'Industrial Buildings',
    buildToSuit: 'Build-to-Suit',
    turnkey: 'Turnkey',
    land: 'Land',
    availableBuildings: 'Available Buildings',
    landForDevelopment: 'Land for Development',
    construction: 'Construction',
    engineering: 'Engineering & Design',
    specializedProjects: 'Specialized Projects',
    internationalStandards: 'International Standards',
    portfolio: 'Portfolio',

    // --- Secciones / navegación de alto nivel ---
    about: 'About',
    experience: 'Experience',
    resources: 'Resources',
    contact: 'Contact',
    inventory: 'Inventory',

    // --- Legal ---
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    cookiePolicy: 'Cookie Policy',

    // --- Formulario de contacto ---
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    thankYou: 'Thank you for contacting us.',
    formError: 'There was an error. Please try again.',
  },
  es: {
    // --- CTAs recurrentes ---
    contactUs: 'Contáctanos',
    learnMore: 'Conocer más',
    viewSpecs: 'Ver especificaciones',
    viewMore: 'Ver más',
    seeAll: 'Ver todos',
    getInTouch: 'Ponerse en contacto',
    requestQuote: 'Solicitar cotización',
    downloadBrochure: 'Descargar brochure',

    // --- Términos de industria ---
    industrialPark: 'Parque Industrial',
    industrialParks: 'Parques Industriales',
    warehouse: 'Nave Industrial',
    warehouses: 'Naves Industriales',
    buildToSuit: 'Build-to-Suit',
    turnkey: 'Llave en Mano',
    land: 'Terrenos',
    availableBuildings: 'Naves Disponibles',
    landForDevelopment: 'Terrenos Disponibles',
    construction: 'Construcción',
    engineering: 'Diseño e Ingeniería',
    specializedProjects: 'Proyectos Especializados',
    internationalStandards: 'Estándares Internacionales',
    portfolio: 'Portafolio',

    // --- Secciones / navegación de alto nivel ---
    about: 'Nosotros',
    experience: 'Experiencia',
    resources: 'Recursos',
    contact: 'Contacto',
    inventory: 'Inventario',

    // --- Legal ---
    allRightsReserved: 'Todos los derechos reservados.',
    privacyPolicy: 'Aviso de Privacidad',
    termsOfUse: 'Términos de Uso',
    cookiePolicy: 'Política de Cookies',

    // --- Formulario de contacto ---
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    company: 'Empresa',
    message: 'Mensaje',
    send: 'Enviar',
    sending: 'Enviando...',
    thankYou: 'Gracias por contactarnos.',
    formError: 'Hubo un error. Por favor intenta de nuevo.',
  },
} as const

/** Helper para obtener los términos del idioma indicado */
export function t(lang: Lang) {
  return terms[lang]
}
