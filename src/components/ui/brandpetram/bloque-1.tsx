'use client'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'

interface Bloque1Props {
    /**
     * Título principal (eyebrow/kicker)
     * @example "BIOCLIMEX"
     */
    titulo: string

    /**
     * Descripción/texto principal
     * @example "Climatiza manufactura especializada"
     */
    descripcion: string

    /**
     * Texto del Call to Action
     * @default "Ver más"
     */
    textoCta?: string

    /**
     * URL del Call to Action (opcional)
     */
    hrefCta?: string

    /**
     * Mostrar flecha en el CTA
     * @default true
     */
    mostrarFlecha?: boolean

    /**
     * Escala proporcional (ajusta padding, font sizes)
     * @default "lg"
     */
    escala?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
     * Color de fondo del bloque
     * @default "bg-emerald-500"
     */
    colorFondo?: string

    /**
     * Color del texto
     * @default "text-white"
     */
    colorTexto?: string

    /**
     * Clases adicionales para el contenedor
     */
    className?: string

    /**
     * Clases adicionales para el título (peso, tracking, uppercase, etc.)
     * @example "font-semibold tracking-normal lowercase"
     */
    clasesTitulo?: string

    /**
     * Clases adicionales para la descripción (peso, leading, tracking, etc.)
     * @example "font-normal leading-relaxed"
     */
    clasesDescripcion?: string

    /**
     * Clases adicionales para el CTA (peso, tracking, etc.)
     * @example "font-semibold tracking-wide"
     */
    clasesCta?: string

    /**
     * Función onClick para el CTA (alternativa a hrefCta)
     */
    onClickCta?: () => void

    /**
     * Alineación del contenido
     * @default "center"
     */
    alineacion?: 'left' | 'center' | 'right'

    /**
     * Mostrar el CTA
     * @default true
     */
    mostrarCta?: boolean

    /**
     * Altura mínima del bloque (útil para grids uniformes)
     * @example "min-h-[400px]"
     */
    alturaMinima?: string

    /**
     * Desactivar animaciones hover/tap del bloque
     * @default false
     */
    desactivarAnimaciones?: boolean

    /**
     * Área donde funciona el click
     * - 'cta': Solo el texto del CTA es clickeable (default)
     * - 'bloque': Todo el bloque es clickeable
     * @default "cta"
     */
    areaClickeable?: 'cta' | 'bloque'
}

// Variantes proporcionales (optimizadas para bloques compactos)
const escalaVariantes = {
    sm: {
        padding: 'p-6 393:p-6 md:p-8 834:p-8 lg:p-10 1024:p-10 1200:p-10 1280:p-10 1366:p-10 1440:p-10 1536:p-10 1728:p-10 1920:p-10',
        titulo: 'text-xs 393:text-xs md:text-sm 834:text-sm lg:text-base 1024:text-base 1200:text-sm 1280:text-sm 1366:text-sm 1440:text-sm 1536:text-sm 1728:text-base 1920:text-base',
        descripcion: 'text-lg 393:text-lg md:text-xl 834:text-xl lg:text-2xl 1024:text-2xl 1200:text-xl 1280:text-xl 1366:text-xl 1440:text-xl 1536:text-xl 1728:text-2xl 1920:text-2xl',
        cta: 'text-xs 393:text-xs md:text-sm 834:text-sm lg:text-base 1024:text-base 1200:text-sm 1280:text-sm 1366:text-sm 1440:text-sm 1536:text-sm 1728:text-base 1920:text-base',
        espacioDescripcion: 'mt-2 393:mt-2 md:mt-3 834:mt-3 lg:mt-3 1024:mt-3 1200:mt-2 1280:mt-2 1366:mt-2 1440:mt-2 1536:mt-2 1728:mt-3 1920:mt-3',
        espacioCta: 'mt-4 393:mt-4 md:mt-5 834:mt-5 lg:mt-5 1024:mt-5 1200:mt-4 1280:mt-4 1366:mt-4 1440:mt-4 1536:mt-4 1728:mt-5 1920:mt-5',
        iconSize: 'size-4',
        maxWidth: 'max-w-xs',
    },
    md: {
        padding: 'p-8 393:p-8 md:p-10 834:p-10 lg:p-12 1024:p-12 1200:p-12 1280:p-12 1366:p-12 1440:p-12 1536:p-12 1728:p-12 1920:p-12',
        titulo: 'text-sm 393:text-sm md:text-base 834:text-base lg:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-lg 1536:text-lg 1728:text-lg 1920:text-lg',
        descripcion: 'text-xl 393:text-xl md:text-2xl 834:text-2xl lg:text-3xl 1024:text-3xl 1200:text-3xl 1280:text-3xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-3xl 1920:text-3xl',
        cta: 'text-sm 393:text-sm md:text-base 834:text-base lg:text-lg 1024:text-lg 1200:text-lg 1280:text-lg 1366:text-lg 1440:text-lg 1536:text-lg 1728:text-lg 1920:text-lg',
        espacioDescripcion: 'mt-3 393:mt-3 md:mt-4 834:mt-4 lg:mt-4 1024:mt-4 1200:mt-4 1280:mt-4 1366:mt-4 1440:mt-4 1536:mt-4 1728:mt-4 1920:mt-4',
        espacioCta: 'mt-5 393:mt-5 md:mt-6 834:mt-6 lg:mt-6 1024:mt-6 1200:mt-6 1280:mt-6 1366:mt-6 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6',
        iconSize: 'size-5',
        maxWidth: 'max-w-sm',
    },
    lg: {
        padding: 'p-10 393:p-10 md:p-12 834:p-12 lg:p-16 1024:p-16 1200:p-16 1280:p-16 1366:p-16 1440:p-16 1536:p-16 1728:p-16 1920:p-16',
        titulo: 'text-base 393:text-base md:text-lg 834:text-lg lg:text-xl 1024:text-xl 1200:text-xl 1280:text-xl 1366:text-xl 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl',
        descripcion: 'text-2xl 393:text-2xl md:text-3xl 834:text-3xl lg:text-4xl 1024:text-4xl 1200:text-4xl 1280:text-4xl 1366:text-4xl 1440:text-4xl 1536:text-4xl 1728:text-4xl 1920:text-4xl',
        cta: 'text-base 393:text-base md:text-lg 834:text-lg lg:text-xl 1024:text-xl 1200:text-xl 1280:text-xl 1366:text-xl 1440:text-xl 1536:text-xl 1728:text-xl 1920:text-xl',
        espacioDescripcion: 'mt-4 393:mt-4 md:mt-5 834:mt-5 lg:mt-5 1024:mt-5 1200:mt-5 1280:mt-5 1366:mt-5 1440:mt-5 1536:mt-5 1728:mt-5 1920:mt-5',
        espacioCta: 'mt-6 393:mt-6 md:mt-8 834:mt-8 lg:mt-8 1024:mt-8 1200:mt-8 1280:mt-8 1366:mt-8 1440:mt-8 1536:mt-8 1728:mt-8 1920:mt-8',
        iconSize: 'size-6',
        maxWidth: 'max-w-md',
    },
    xl: {
        padding: 'p-12 393:p-12 md:p-16 834:p-16 lg:p-20 1024:p-20 1200:p-20 1280:p-20 1366:p-20 1440:p-20 1536:p-20 1728:p-20 1920:p-20',
        titulo: 'text-lg 393:text-lg md:text-xl 834:text-xl lg:text-2xl 1024:text-2xl 1200:text-2xl 1280:text-2xl 1366:text-2xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl',
        descripcion: 'text-3xl 393:text-3xl md:text-4xl 834:text-4xl lg:text-5xl 1024:text-5xl 1200:text-5xl 1280:text-5xl 1366:text-5xl 1440:text-5xl 1536:text-5xl 1728:text-5xl 1920:text-5xl',
        cta: 'text-lg 393:text-lg md:text-xl 834:text-xl lg:text-2xl 1024:text-2xl 1200:text-2xl 1280:text-2xl 1366:text-2xl 1440:text-2xl 1536:text-2xl 1728:text-2xl 1920:text-2xl',
        espacioDescripcion: 'mt-5 393:mt-5 md:mt-6 834:mt-6 lg:mt-6 1024:mt-6 1200:mt-6 1280:mt-6 1366:mt-6 1440:mt-6 1536:mt-6 1728:mt-6 1920:mt-6',
        espacioCta: 'mt-8 393:mt-8 md:mt-10 834:mt-10 lg:mt-10 1024:mt-10 1200:mt-10 1280:mt-10 1366:mt-10 1440:mt-10 1536:mt-10 1728:mt-10 1920:mt-10',
        iconSize: 'size-7',
        maxWidth: 'max-w-lg',
    },
    '2xl': {
        padding: 'p-16 393:p-16 md:p-20 834:p-20 lg:p-24 1024:p-24 1200:p-24 1280:p-24 1366:p-24 1440:p-24 1536:p-24 1728:p-24 1920:p-24',
        titulo: 'text-xl 393:text-xl md:text-2xl 834:text-2xl lg:text-3xl 1024:text-3xl 1200:text-3xl 1280:text-3xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-3xl 1920:text-3xl',
        descripcion: 'text-4xl 393:text-4xl md:text-5xl 834:text-5xl lg:text-6xl 1024:text-6xl 1200:text-6xl 1280:text-6xl 1366:text-6xl 1440:text-6xl 1536:text-6xl 1728:text-6xl 1920:text-6xl',
        cta: 'text-xl 393:text-xl md:text-2xl 834:text-2xl lg:text-3xl 1024:text-3xl 1200:text-3xl 1280:text-3xl 1366:text-3xl 1440:text-3xl 1536:text-3xl 1728:text-3xl 1920:text-3xl',
        espacioDescripcion: 'mt-6 393:mt-6 md:mt-8 834:mt-8 lg:mt-8 1024:mt-8 1200:mt-8 1280:mt-8 1366:mt-8 1440:mt-8 1536:mt-8 1728:mt-8 1920:mt-8',
        espacioCta: 'mt-10 393:mt-10 md:mt-12 834:mt-12 lg:mt-12 1024:mt-12 1200:mt-12 1280:mt-12 1366:mt-12 1440:mt-12 1536:mt-12 1728:mt-12 1920:mt-12',
        iconSize: 'size-8',
        maxWidth: 'max-w-xl',
    },
}

export function Bloque1({
    titulo,
    descripcion,
    textoCta = 'Ver más',
    hrefCta,
    mostrarFlecha = true,
    escala = 'lg',
    colorFondo = 'bg-emerald-500',
    colorTexto = 'text-white',
    className,
    clasesTitulo,
    clasesDescripcion,
    clasesCta,
    onClickCta,
    alineacion = 'center',
    mostrarCta = true,
    alturaMinima,
    desactivarAnimaciones = false,
    areaClickeable = 'cta',
}: Bloque1Props) {
    const variante = escalaVariantes[escala]
    const shouldReduceMotion = useReducedMotion()
    const animacionesDesactivadas = desactivarAnimaciones || shouldReduceMotion

    // Clases de alineación
    const alineacionClases = {
        left: 'items-start text-left',
        center: 'items-center text-center',
        right: 'items-end text-right',
    }

    const contenidoCta = (
        <span className="inline-flex items-center gap-2 md:gap-3">
            <span>{textoCta}</span>
            {mostrarFlecha && <ArrowRight className={variante.iconSize} />}
        </span>
    )

    // Determinar si el bloque es clickeable
    const esClickeable = !!(hrefCta || onClickCta)

    // Props de motion para gestures
    const motionProps = (esClickeable && !animacionesDesactivadas) ? {
        whileHover: { scale: 0.95 },
        whileTap: { scale: 0.90 },
        transition: { type: "spring" as const, stiffness: 300, damping: 20 }
    } : {}

    // Usar motion.div si es clickeable, div normal si no
    const Contenedor = esClickeable ? motion.div : 'div'

    // Contenedor base (reutilizado en ambas opciones)
    const contenidoBloque = (
        <>
            {/* Título (eyebrow) */}
            <h3
                className={cn(
                    'font-bold tracking-wide uppercase',
                    variante.titulo,
                    clasesTitulo
                )}
            >
                {titulo}
            </h3>

            {/* Descripción */}
            <p
                className={cn(
                    'font-bold leading-tight text-balance',
                    variante.descripcion,
                    variante.espacioDescripcion,
                    variante.maxWidth,
                    clasesDescripcion
                )}
            >
                {descripcion}
            </p>

            {/* Call to Action */}
            {mostrarCta && (
                <>
                    {hrefCta && areaClickeable === 'cta' ? (
                        <Link
                            href={hrefCta}
                            className={cn(
                                'font-bold transition-opacity hover:opacity-80 cursor-pointer',
                                variante.cta,
                                variante.espacioCta,
                                clasesCta
                            )}
                        >
                            {contenidoCta}
                        </Link>
                    ) : onClickCta && areaClickeable === 'cta' ? (
                        <button
                            type="button"
                            onClick={onClickCta}
                            className={cn(
                                'font-bold transition-opacity hover:opacity-80 cursor-pointer',
                                variante.cta,
                                variante.espacioCta,
                                clasesCta
                            )}
                        >
                            {contenidoCta}
                        </button>
                    ) : areaClickeable === 'bloque' ? (
                        /* Solo texto visual cuando todo el bloque es clickeable */
                        <span
                            className={cn(
                                'font-bold',
                                variante.cta,
                                variante.espacioCta,
                                clasesCta
                            )}
                        >
                            {contenidoCta}
                        </span>
                    ) : null}
                </>
            )}
        </>
    )

    // Si todo el bloque es clickeable
    if (areaClickeable === 'bloque' && esClickeable && hrefCta) {
        return (
            <Link href={hrefCta}>
                <Contenedor
                    {...motionProps}
                    className={cn(
                        'flex flex-col justify-center',
                        alineacionClases[alineacion],
                        colorFondo,
                        colorTexto,
                        variante.padding,
                        alturaMinima,
                        'cursor-pointer',
                        className
                    )}
                >
                    {contenidoBloque}
                </Contenedor>
            </Link>
        )
    }

    // Si solo CTA es clickeable (default)
    return (
        <Contenedor
            {...motionProps}
            className={cn(
                'flex flex-col justify-center',
                alineacionClases[alineacion],
                colorFondo,
                colorTexto,
                variante.padding,
                alturaMinima,
                (esClickeable && areaClickeable === 'bloque') && 'cursor-pointer',
                className
            )}
        >
            {contenidoBloque}
        </Contenedor>
    )
}
