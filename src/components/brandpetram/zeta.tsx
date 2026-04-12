'use client'

/**
 * Componente Zeta
 * Fase 1: Construir (basado en HeroAnimado, hardcodeado)
 */

import * as motion from 'motion/react-client'
import Link from 'next/link'
import { PoligonoImagen1 } from '@/components/ui/brandpetram/poligono-imagen-1'
import { PoligonoTexto1 } from '@/components/ui/brandpetram/poligono-texto-1'
import { ParrafoConProps as Parrafo } from '@/components/brandpetram/con-props/parrafo-con-props'
import { Flecha1 } from '@/components/ui/brandpetram/flecha-1'

// Variantes de animación - secuenciales on load
const leftVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            delay: .8,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

const rightVariants = {
    hidden: {
        x: '100vw'
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
        y: '100vh'
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            delay: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

const textVariants = {
    hidden: {
        y: '100vh'
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.6,
            delay: 2,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
}

const zetaText = {
  es: {
    poligonoText: 'Naves listas para operar en Mexicali',
    paragraph: 'Ocupa tu nave industrial en Mexicali en semanas. 4 parques con inventario disponible, infraestructura Fortune 500 y seguridad 24/7. 30 corporaciones internacionales ya operan aquí.',
    contactHref: '/contacto',
  },
  en: {
    poligonoText: 'Move-in ready industrial buildings in Mexicali',
    paragraph: 'Occupy your industrial building in Mexicali in weeks. 4 parks with available inventory, Fortune 500-grade infrastructure, and 24/7 security. 30 international corporations already operate here.',
    contactHref: '/contact',
  },
}

export function Zeta({ lang = 'es' }: { lang?: 'en' | 'es' }) {
    const t = zetaText[lang]
    const palabrasLista = [
        'Nelson I',
        'Nelson II',
        'Vigía I',
        'Vigía II'
    ]

    return (
        <>
            <div className="relative mt-0 md:mt-0 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_0.9fr] gap-8 md:gap-16 md:items-end">
                    {/* Imagen izquierda - 16:9 (60% del espacio) */}
                    <div className="1200:ml-15 2240:ml-0 relative aspect-[3/2.5] md:aspect-[3/2.4] 1200:aspect-[3/1.76] 1366:aspect-[3/1.6] 1440:aspect-[3/1.76] 1536:aspect-[3/1.8]">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={leftVariants}
                            className="w-full h-full"
                        >
                            <PoligonoImagen1
                                src="/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg"
                                alt="Nave industrial en parque de Grupo Nelson, Mexicali"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-30 md:right-0 z-10 h-auto"
                            initial="hidden"
                            animate="visible"
                            variants={poligonoTextoVariants}
                        >
                            <PoligonoTexto1
                                text={t.poligonoText}
                                backgroundColor="bg-background/80"
                                textColor="text-foreground"
                                fontSize="text-3xl 360:text-3xl 393:text-3xl 430:text-4xl 768:text-[3.6rem] 834:text-[3.8rem] 1024:text-[4.5rem] 1200:text-[4.3rem] 1280:text-[4.7rem] 1366:text-[5rem] 1440:text-[5.3rem] 1536:text-8xl 1920:text-[7rem] 2240:text-8xl"
                                fontWeight="font-bold"
                                padding="px-5 py-10 1728:py-20"
                                fontTracking="tracking-tight"
                                textAlign="text-left"
                                textWidth="w-full md:w-11/12 2xl:w-10/12"
                                className="w-9/12 360:w-9/12 393:w-9/12 430:w-9/12 768:w-11/12 834:w-11/12 1024:w-10/12 1200:w-9/12 1280:w-9/12 1536:w-10/12 1728:w-9/12 1920:w-9/12 2560:w-8/12 float-end rounded-xs"
                                hoverScale={false}
                            />
                        </motion.div>
                    </div>

                    {/* Imagen derecha - cuadrada (40% del espacio) */}
                    <motion.div
                        className="relative aspect-[1.4/1] md:aspect-[1/1.3] 1280:translate-y-[4rem] 1536:translate-y-[0rem] "
                        initial="hidden"
                        animate="visible"
                        variants={rightVariants}
                    >
                        <svg
                            aria-hidden="true"
                            className="absolute 768:-top-35 1200:-top-40 right-0 w-40 768:h-[24rem] 1024:h-[27rem] 1200:h-[45rem] 1728:h-[60rem] text-foreground/10 pointer-events-none z-0"
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
                                    <circle cx="16" cy="16" r="3" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#dot-pattern-conveyor)"
                                width="100%"
                                height="100%"
                            />
                        </svg>

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
                            src="/parque-industrial-nelson-2-en-mexicali.jpeg"
                            alt="Placeholder verticorum"
                            textColor="text-white"
                            objectPosition="object-left"
                            className="w-1/2 md:w-full relative z-10 translate-y-32 md:-translate-y-20 rounded-xs"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="container mx-auto 360:ml-0 393:ml-0 430:ml-0 768:ml-16 834:ml-24 1024:ml-48 1200:ml-78 1280:ml-80 1366:ml-80 1440:ml-90 1536:ml-80 1728:ml-116 1920:ml-126 max-w-xs 360:max-w-xs 393:max-w-xs 430:max-w-xs 768:max-w-lg 834:max-w-lg 1024:max-w-lg 1200:max-w-[38rem] 1280:max-w-[39rem] 1366:max-w-[40rem] 1440:max-w-[40rem] 1536:max-w-[43rem] 1728:max-w-[50rem] 1920:max-w-[53rem] mt-40 1200:mt-32 1728:mt-24 1920:mt-32 z-10 relative"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <div className="flex flex-col gap-4 px-9">
                    <Parrafo
                        fontSize="text-xl 768:text-2xl 834:text-2xl 1024:text-2xl 1200:text-[1.8rem] 1280:text-[1.8rem] 1366:text-[2rem] 1440:text-[2rem] 1536:text-[2.2rem] 1728:text-[2.3rem] 1920:text-[2.7rem]"
                        textColor="text-muted-foreground"
                    >
                        {t.paragraph}
                        <Link href={t.contactHref} className="text-orange-600 hover:text-orange-700 transition-colors">
                            <Flecha1 />
                        </Link>
                    </Parrafo>

                </div>
            </motion.div>
        </>
    )
}
