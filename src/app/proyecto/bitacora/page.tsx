'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { ArrowLeft, Camera, FileImage, Globe, Menu, Badge, Component } from 'lucide-react'

export default function BitacoraPage() {
  const entries = [
    {
      title: 'Extracción de Fotografías de Videos',
      icon: Camera,
      date: 'Fase 1',
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
      date: 'Fase 2',
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
      date: 'Fase 3',
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
      date: 'Desarrollo',
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
      date: 'Desarrollo',
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
      date: 'Desarrollo',
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
      date: 'Diseño',
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
      date: 'Desarrollo',
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
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold">{entry.title}</h2>
                        <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                          {entry.date}
                        </span>
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
