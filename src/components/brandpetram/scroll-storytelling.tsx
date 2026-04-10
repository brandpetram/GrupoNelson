'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Compass, Ruler, Hammer, CheckCircle, Shield, Wrench, TrendingUp, Play, Star } from 'lucide-react'

interface ContentItem {
  caption: string
  title: React.ReactNode
  description: string
  image?: string
  video?: string | string[] // Puede ser un video o array de videos
  videoPoster?: string // Imagen poster para el video (opcional, se genera automáticamente)
  tag?: {
    icon?: React.ReactNode
    text: string
    href?: string
    gradientFrom?: string
    gradientTo?: string
  }
  buttons?: Array<{
    text: string
    href: string
    primary?: boolean
  }>
}

interface ScrollStorytellingProps {
  items?: ContentItem[]
  className?: string
  mediaAspectRatio?: string // e.g. 'aspect-video', 'aspect-square', 'aspect-[16/9]', 'aspect-[4/3]'
}

// Componente para manejar múltiples videos en secuencia con lazy loading
function VideoPlayer({
  videos,
  className,
  poster
}: {
  videos: string | string[]
  className?: string
  poster?: string
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [generatedPoster, setGeneratedPoster] = useState<string | null>(null)
  const isFirstLoad = useRef(true)

  const videoArray = Array.isArray(videos) ? videos : [videos]
  const hasMultipleVideos = videoArray.length > 1

  // Esperar a que la página cargue completamente
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true)
    } else {
      const handleLoad = () => setIsPageLoaded(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Generar poster del primer frame del video
  useEffect(() => {
    if (!poster && videoArray[0]) {
      const video = document.createElement('video')
      video.crossOrigin = 'anonymous'
      video.src = videoArray[0]
      video.muted = true
      video.playsInline = true

      video.addEventListener('loadeddata', () => {
        video.currentTime = 0.5 // Capturar frame en el segundo 0.5
      })

      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          setGeneratedPoster(canvas.toDataURL('image/jpeg', 0.8))
        }
      })
    }
  }, [poster, videoArray])

  // Iniciar reproducción cuando la página cargue
  useEffect(() => {
    if (isPageLoaded && videoRef.current) {
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Ignorar errores de autoplay
          })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPageLoaded])

  const handleVideoEnd = () => {
    if (hasMultipleVideos) {
      // Pasar al siguiente video
      setCurrentVideoIndex((prev) => (prev + 1) % videoArray.length)
    } else {
      // Si solo hay un video, reiniciarlo (loop manual)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {})
      }
    }
  }

  // Reiniciar cuando cambia el video (para múltiples videos)
  useEffect(() => {
    if (isPageLoaded && videoRef.current && hasMultipleVideos) {
      // Saltar la primera carga (ya se maneja en el otro useEffect)
      if (isFirstLoad.current) {
        isFirstLoad.current = false
        return
      }
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [currentVideoIndex, isPageLoaded, hasMultipleVideos])

  const posterImage = poster || generatedPoster || undefined

  return (
    <video
      ref={videoRef}
      src={videoArray[currentVideoIndex]}
      poster={posterImage}
      preload="none"
      autoPlay
      loop={!hasMultipleVideos}
      muted
      playsInline
      onEnded={handleVideoEnd}
      className={className}
    />
  )
}

const defaultItems: ContentItem[] = [
  {
    caption: 'Fase 1: Planificación',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">1</span><div>Elección de Sitio en <br/>Méxicalí y Consultoría</div></div>,
    description:
      'Analizamos sus requerimientos operativos — capacidad eléctrica, altura de nave, superficie, especificaciones técnicas — y le presentamos la ubicación exacta que su operación necesita en Mexicali.',
    image: '/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-3.jpg',
    tag: {
      icon: <Compass className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Consultoría',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Contactar consultor', href: '#contacto', primary: true },
      { text: 'Más información', href: '/parques-industriales-mexicali', primary: false },
    ],
  },
  {
    caption: 'Fase 2: Desarrollo',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">2</span><div>Diseño y Desarrollo <br/>de la Ingeniería</div></div>,
    description:
      'Nuestro equipo de arquitectos e ingenieros traduce sus especificaciones en un proyecto ejecutivo completo: estructural, eléctrico, mecánico y civil. Cada metro cuadrado se diseña alrededor de su proceso productivo.',
    image: '/tunel-honeywell.jpg',
    tag: {
      icon: <Ruler className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Diseño Ejecutivo',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Ver proyectos realizados', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Solicitar diseño', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 3: Ejecución',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">3</span><div>Construcción<br/>Build-to-Suit</div></div>,
    description:
      'Nuestra constructora interna ejecuta su proyecto de principio a fin — desde movimiento de tierras y cimentación hasta instalaciones electromecánicas — con los estándares de calidad que exigen empresas como Gulfstream, DHL y Honeywell.',
    video: '/scroll-storytelling/entrega-llave-en-mano.mp4',
    tag: {
      icon: <Hammer className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Construcción',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Conocer nuestras obras', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Proyectos en progreso', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 4: Apertura',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">4</span><div>Entrega Turnkey <br/> Llave en Mano</div></div>,
    description:
      'Usted recibe una instalación lista para operar. Entra, conecta sus equipos y arranca producción. Sin intermediarios, sin retrasos, sin sorpresas.',
    video: '/parques-industriales-mexicali-nelson-3-optimizado.mp4',
    tag: {
      icon: <CheckCircle className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Entrega',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Proyectos entregados', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Agendar entrega', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 5: Seguridad',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">5</span><div> Infraestructura y <br/> Seguridad del Parque</div></div>,
    description:
      'Perímetro controlado, caseta de acceso, calles amplias, infraestructura compartida y vigilancia permanente. Su operación funciona dentro de un entorno industrial profesional las 24 horas del día, los 365 días del año.',
    video: '/scroll-storytelling/seguridad-del-parque.mp4',
    tag: {
      icon: <Shield className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Seguridad 24/7',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Protocolos de seguridad', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Más detalles', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 6: Mantenimiento',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">6</span><div>Mantenimiento y<br/>Servicios Primarios</div></div>,
    description:
      'Nuestro equipo de servicios atiende mejoras, reparaciones y actualizaciones de forma permanente. Proyectos menores con personal interno; proyectos de ingeniería avanzada con nuestra constructora. Usted se enfoca en producir.',
    video: '/scroll-storytelling/mantenimiento.mp4',
    tag: {
      icon: <Wrench className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Mantenimiento',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Planes de mantenimiento', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Solicitar servicio', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 7: Crecimiento',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">7</span><div>Crecimiento y<br/>Expansión</div></div>,
    description:
      'Cuando su operación crece, nosotros crecemos con usted. Clientes que iniciaron en 5,000 pies cuadrados hoy operan en más de 400,000 — sin cambiar de socio. Más de seis décadas construyendo relaciones que se miden en décadas, no en contratos.',
    video: '/scroll-storytelling/crecimiento.mp4',
    tag: {
      icon: <TrendingUp className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Crecimiento',
      href: '/parques-industriales-mexicali',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Historias de crecimiento', href: '/parques-industriales-mexicali', primary: true },
      { text: 'Planifica tu expansión', href: '#contacto', primary: false },
    ],
  },
  {
    caption: 'Fase 8: Proyectos Especiales',
    title: <div className="flex items-center gap-3"><span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-black text-3xl flex-shrink-0">8</span><div>Construcciones Industriales<br/>Especiales en Mexicali</div></div>,
    description:
      '95 metros sin columnas. Sin precedente. Un puente vehicular de estructura metálica con diseño europeo de arco, cimentación a 18 metros de profundidad en zona sísmica 4, montado en dos domingos para no cerrar la vialidad. Cuando Skyworks necesitó conectar dos plantas de semiconductores sobre un boulevard y un dren federal, nos buscaron a nosotros.',
    image: '/contructora-mexicali/puente-skyworks-2.jpg',
    tag: {
      icon: <Star className="w-5 h-5 text-gray-400" fill="currentColor" />,
      text: 'Construcciones Industriales Especiales en Mexicali',
      href: '/constructora/proyectos-especializados',
      gradientFrom: '#2563eb',
      gradientTo: '#0ea5e9',
    },
    buttons: [
      { text: 'Ver proyectos especiales', href: '/constructora/proyectos-especializados', primary: true },
      { text: 'Contactar', href: '#contacto', primary: false },
    ],
  },
]

export function ScrollStorytelling({
  items = defaultItems,
  className,
  mediaAspectRatio = 'aspect-video',
}: ScrollStorytellingProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingMobileVideo, setPlayingMobileVideo] = useState<number | null>(null)
  const blocksRef = useRef<(HTMLDivElement | null)[]>([])

  // Calcular la posición del indicador basado en el activeIndex
  const indicatorHeight = 100 / items.length // Altura proporcional (ej: 20% para 5 items)
  const indicatorPosition = (activeIndex / (items.length - 1)) * (100 - indicatorHeight)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = blocksRef.current.findIndex(
              (block) => block === entry.target
            )
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px',
      }
    )

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section data-component="ScrollStorytelling" data-component-file="src/components/brandpetram/scroll-storytelling.tsx" data-component-props="true" className={cn('relative md:w-10/12 xl:w-10/12 2xl:w-11/12 mx-auto min-h-screen bg-background', className)}>
      {/* Scrollbar progress indicator - estilo JetBrains */}
      <div className="hidden 1200:block absolute left-0 top-0 bottom-0 w-1 z-20">
        {/* Track (fondo de la barra) */}
        <div className="absolute inset-0 bg-border" />
        {/* Indicator (bloque naranja que se mueve) */}
        <motion.div
          className="absolute left-0 right-0 rounded-full"
          style={{
            height: `${indicatorHeight}%`,
            top: `${indicatorPosition}%`,
            background: 'linear-gradient(135deg, #2563eb, #0ea5e9)'
          }}
          animate={{
            top: `${indicatorPosition}%`
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      </div>

      <div className="flex flex-col 1200:flex-row items-start">
        {/* Columna de texto - scrollea normalmente */}
        <div className="w-full 1200:w-1/2 2xl:w-1/2  1200:min-h-[250vh] px-4 sm:px-6 1200:pl-8 xl:pl-16 2xl:pl-32 1200:pr-12">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                blocksRef.current[index] = el
              }}
              className="min-h-fit py-12 1200:py-0 1200:h-[70vh] flex flex-col justify-center max-w-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wider mb-3 text-primary">
                {item.caption}
              </p>
              <h3 className="text-2xl md:text-2xl 1024:text-3xl 1200:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-none tracking-tight mb-4 text-foreground">
                {item.title}
              </h3>
              <p className="text-1200 2xl:text-xl leading-relaxed mb-6 text-muted-foreground">
                {item.description}
              </p>
              {item.buttons && (
                <div className="flex flex-col sm:flex-row gap-4 ">
                  {item.buttons.map((button, buttonIndex) => (
                    <a
                      key={buttonIndex}
                      href={button.href}
                      className={cn(
                        'px-6 py-3 rounded-1200 font-medium text-center transition-all duration-200',
                        button.primary
                          ? 'bg-blue-600 text-white hover:brightness-110 hover:saturate-110 hover:scale-[1.02] active:scale-[0.98] shadow-md border-[0.5px] border-white/25 shadow-black/20'
                          : 'border border-border text-foreground hover:bg-muted hover:ring-1 hover:ring-foreground/20 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-black/15'
                      )}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              )}

              {/* Thumbnail con play para móvil */}
              {(item.video || item.image) && (
                <div className="1200:hidden mt-6 relative">
                  <div className={cn("relative w-full rounded-xs overflow-hidden", mediaAspectRatio)}>
                    {playingMobileVideo === index && item.video ? (
                      // Mostrar VideoPlayer cuando se hace clic en play
                      <VideoPlayer
                        videos={item.video}
                        poster={item.videoPoster}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Thumbnail cuando no está reproduciendo */}
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={`Imagen de ${item.title}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        ) : item.videoPoster ? (
                          <Image
                            src={item.videoPoster}
                            alt={`Video de ${item.title}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted" />
                        )}
                        {/* Overlay oscuro y botón play solo si hay video */}
                        {item.video && (
                          <>
                            <div className="absolute inset-0 bg-black/30" />
                            <button
                              onClick={() => setPlayingMobileVideo(index)}
                              className="absolute inset-0 flex items-center justify-center group"
                              aria-label="Reproducir video"
                            >
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-1200 group-hover:scale-110 transition-transform">
                                <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
                              </div>
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Columna de media - sticky, llega al borde derecho */}
        <aside className="hidden 1200:block w-full 1200:w-1/2 sticky top-[30vh] h-[38vh]">
            <div className="relative h-full w-full">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full">
                    {/* Tab/Pestaña estilo folder arriba del video */}
                    {item.tag && (
                      <div className="absolute -top-14 left-4 z-10">
                        {item.tag.href ? (
                          <a
                            href={item.tag.href}
                            className={cn(
                              "group flex items-center gap-3 px-6 py-3",
                              "rounded-xs",
                              "border border-b-0",
                              "transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                            )}
                            style={{
                              background: '#ffffff',
                              borderColor: '#9ca3af'
                            }}
                          >
                            {item.tag.icon && (
                              <span className="w-6 h-6 flex items-center justify-center">
                                {item.tag.icon}
                              </span>
                            )}
                            <span className="font-extrabold text-gray-900 text-base">
                              {item.tag.text}
                            </span>
                          </a>
                        ) : (
                          <div
                            className={cn(
                              "flex items-center gap-3 px-6 py-3",
                              "rounded-xs",
                              "border border-b-0",
                              "shadow-xl shadow-black/20"
                            )}
                            style={{
                              background: '#ffffff',
                              borderColor: '#9ca3af'
                            }}
                          >
                            {item.tag.icon && (
                              <span className="w-6 h-6 flex items-center justify-center">
                                {item.tag.icon}
                              </span>
                            )}
                            <span className="font-extrabold text-gray-900 text-base">
                              {item.tag.text}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Video/Imagen container */}
                    <div className={cn("relative w-full", mediaAspectRatio)}>
                      {item.video ? (
                        <VideoPlayer
                          videos={item.video}
                          poster={item.videoPoster}
                          className="w-full h-full object-cover rounded-xs"
                        />
                      ) : item.image ? (
                        <Image
                          src={item.image}
                          alt={`Imagen de ${item.title}`}
                          fill
                          className="object-cover rounded-xs"
                          sizes="(max-width: 1200px) 100vw, 50vw"
                        />
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>
    </section>
  )
}
