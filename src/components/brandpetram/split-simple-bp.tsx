/**
 * Componente original: Tailwind UI split-with-image (simplificado)
 * Brandpetramizado: 21 de marzo de 2026
 * Proyecto: Grupo Nelson — Diferenciadores (diferencia-nelson)
 *
 * Versión simplificada: título + párrafos + imagen.
 * Soporta imagen a la izquierda o derecha via prop imagePosition.
 */

'use client'

import Image from 'next/image'

const pClass = "text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.3125rem] 1536:text-[1.375rem] 1728:text-[1.4375rem] 1920:text-[1.5rem] text-muted-foreground leading-relaxed tracking-wide"

interface SplitSimpleBPProps {
    tagline?: string
    title: string
    children: React.ReactNode
    imageSrc: string
    imageAlt: string
    imagePosition?: 'left' | 'right'
}

export { pClass as splitParagraphClass }

export function SplitSimpleBP({
    tagline,
    title,
    children,
    imageSrc,
    imageAlt,
    imagePosition = 'right',
}: SplitSimpleBPProps) {
    const textBlock = (
        <div className="flex flex-1 flex-col justify-center px-[1.5rem] 768:px-[2rem] 1024:px-[2.5rem] 1200:px-[3rem] 1280:px-[3.5rem] 1366:px-[4rem] 1440:px-[4.5rem] 1536:px-[5rem] 1728:px-[5.5rem] 1920:px-[6rem] py-[3rem] 768:py-[4rem] 1024:py-[5rem] 1200:py-[5.5rem] 1920:py-[6rem]">
            {tagline && (
                <p className="text-[0.875rem] 1024:text-[0.9375rem] 1536:text-[1rem] font-semibold text-blue-600 mb-[0.5rem] 768:mb-[0.75rem]">
                    {tagline}
                </p>
            )}
            <h2 className="text-[1.5rem] 360:text-[1.5rem] 393:text-[1.5rem] 430:text-[1.75rem] 768:text-[2rem] 834:text-[2.25rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1280:text-[3rem] 1366:text-[3.25rem] 1440:text-[3.5rem] 1536:text-[3.75rem] 1728:text-[4.25rem] 1920:text-[4.5rem] text-foreground leading-none tracking-tighter font-extrabold text-balance">
                {title}
            </h2>
            <div className="mt-[1rem] 768:mt-[1.5rem] 1200:mt-[2rem] space-y-[0.75rem] 768:space-y-[1rem] 1200:space-y-[1.25rem]">
                {children}
            </div>
        </div>
    )

    const imageBlock = (
        <div className="relative flex-1 min-h-[15rem] 768:min-h-[20rem] 1024:min-h-[25rem] 1200:min-h-[30rem] 1920:min-h-[35rem]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-xs"
            />
        </div>
    )

    return (
        <section className="w-11/12 mx-auto flex flex-col lg:flex-row gap-[2rem] 1024:gap-[0rem]">
            {imagePosition === 'left' ? (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            ) : (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            )}
        </section>
    )
}
