'use client'

/**
 * HeroAnimado
 *
 * Componente hero con animaciones secuenciales:
 * 1. Div izquierdo: entra desde la izquierda
 * 2. Div derecho: entra desde la derecha (0.2s después)
 * 3. Div de texto: entra desde abajo (solo después de que los dos anteriores terminen)
 */

import * as motion from 'motion/react-client'
import Link from 'next/link'
import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoTexto1 } from '@/components/ui/brandpetram/poligono-texto-1'
import { Parrafo } from '@/components/ui/brandpetram/parrafo'
import { Flecha1 } from '@/components/ui/brandpetram/flecha-1'

interface HeroAnimadoProps {
    // Imagen izquierda
    imagenIzquierdaSrc: string
    imagenIzquierdaAlt: string
    // Texto del polígono
    textoPoligono: string
    // Imagen derecha
    imagenDerechaSrc: string
    imagenDerechaAlt: string
    // Párrafos
    parrafo1: string
    parrafo2: string
    linkContacto?: string
    // Lista de palabras (opcional, solo móvil)
    palabrasLista?: string[]
}

// Variantes de animación - secuenciales on load
// Izquierdo: inicia en 0s
// Derecho: inicia en 0.3s
// Texto: inicia en 1s (cuando los anteriores ya entraron)

const leftVariants = {
    hidden: {
        x: '-100vw' // Completamente fuera del viewport por la izquierda
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            delay: .8,
            ease: [0.25, 0.46, 0.45, 0.94] as const // easeOutQuad
        }
    }
}

const rightVariants = {
    hidden: {
        x: '100vw' // Completamente fuera del viewport por la derecha
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

const poligonoTextoVariants = {
    hidden: {
        y: '100vh' // Completamente fuera del viewport por abajo
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            delay: 1.5, // Entra después de las imágenes
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

const textVariants = {
    hidden: {
        y: '100vh' // Completamente fuera del viewport por abajo
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.6,
            delay: 2, // Entra después del polígono de texto
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

export function HeroAnimado({
    imagenIzquierdaSrc,
    imagenIzquierdaAlt,
    textoPoligono,
    imagenDerechaSrc,
    imagenDerechaAlt,
    parrafo1,
    parrafo2,
    linkContacto = '/contacto',
    palabrasLista
}: HeroAnimadoProps) {
    return (
        <>
            {/* Grid layout: Imagen 16:9 + Imagen 1:1.5 con PoligonoImagen1 */}
            <div className="relative mt-0 md:mt-0 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 md:gap-20 md:items-end">
                    {/* Imagen izquierda - 16:9 (60% del espacio) */}
                    <div className="1200:ml-15 2240:ml-0 relative aspect-[3/2.5] md:aspect-video">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={leftVariants}
                            className="w-full h-full"
                        >
                            <PoligonoImagen1
                                src={imagenIzquierdaSrc}
                                alt={imagenIzquierdaAlt}
                            />
                        </motion.div>

                        {/* PoligonoTexto1 - animación independiente desde abajo */}
                        <motion.div
                            className="absolute -bottom-30 md:right-0 z-10 h-auto"
                            initial="hidden"
                            animate="visible"
                            variants={poligonoTextoVariants}
                        >
                            <PoligonoTexto1
                                text={textoPoligono}
                                backgroundColor="bg-background/80"
                                textColor="text-foreground"
                                fontSize="text-3xl 430:text-4xl md:text-5xl 1024:text-5xl 1200:text-6xl 1440:text-7xl 1536:text-8xl 1920:text-8xl 2240:text-8xl"
                                fontWeight="font-bold"
                                padding="px-5 py-10 1728:py-20"
                                fontTracking="tracking-tight"
                                textAlign="text-left"
                                textWidth="w-full md:w-11/12 2xl:w-10/12"
                                className="w-9/12 md:w-10/12 1024:w-8/12 1200:w-9/12 1280:w-8/12 1536:w-10/12 1728:w-9/12 1920:w-8/12 2560:w-8/12 float-end rounded-xs"
                                hoverScale={false}
                            />
                        </motion.div>
                    </div>

                    {/* Imagen derecha - cuadrada (40% del espacio) */}
                    <motion.div
                        className="relative aspect-[1.4/1] md:aspect-[1/1.1] "
                        initial="hidden"
                        animate="visible"
                        variants={rightVariants}
                    >
                        {/* Patrón de dots arriba de la imagen */}
                        <svg
                            aria-hidden="true"
                            className="absolute 768:-top-35 1200:-top-40 right-0 w-40 768:h-[24rem] 1024:h-[27rem] 1200:h-[35rem] fill-orange-500/79 pointer-events-none z-0"
                        >
                            <defs>
                                <pattern
                                    id="dot-pattern-conveyor"
                                    x="0"
                                    y="0"
                                    width="17"
                                    height="17"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle cx="16" cy="16" r="3" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#dot-pattern-conveyor)"
                                width="100%"
                                height="100%"
                            />
                        </svg>

                        {/* Lista de palabras - solo móvil */}
                        {palabrasLista && palabrasLista.length > 0 && (
                            <div className="absolute top-48 430:top-48 640:top-56 768:top-64 right-0 md:hidden z-10 pr-4 430:pr-6">
                                <ul className="flex flex-col gap-2 430:gap-3 text-right">
                                    {palabrasLista.map((palabra, index) => (
                                        <li
                                            key={index}
                                            className="text-foreground font-bold text-sm 430:text-base tracking-wide uppercase"
                                        >
                                            {palabra}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <PoligonoImagen1
                            src={imagenDerechaSrc}
                            alt={imagenDerechaAlt}
                            textColor="text-white"
                            objectPosition="object-left"
                            className="w-1/2 md:w-full relative z-10 translate-y-32 md:-translate-y-20 rounded-xs"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Texto que entra desde abajo */}
            <motion.div
                className="container mx-auto 768:ml-16 834:ml-24 1024:ml-48 1200:ml-72 1280:ml-96 1440:ml-110 1536:ml-96 1728:ml-110 1920:mx-auto  max-w-xs md:max-w-lg 1200:max-w-md 1280:max-w-md 1366:max-w-md 1536:max-w-md 1728:max-w-lg 1920:max-w-lg mt-40 1200:mt-32 1728:mt-24 z-10 relative"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <div className="flex flex-col gap-4">
                    <Parrafo
                        fontSize="text-base md:text-2xl"
                        textColor="text-muted-foreground"
                    >
                        {parrafo1}
                    </Parrafo>
                    <Parrafo
                        fontSize="text-base md:text-2xl"
                        textColor="text-muted-foreground"
                    >
                        {parrafo2}
                        <Link href={linkContacto} className="text-orange-600 hover:text-orange-700 transition-colors">
                            <Flecha1 />
                        </Link>
                    </Parrafo>
                </div>
            </motion.div>
        </>
    )
}
