/**
 * Componente: LogosGridBP
 * Brandpetramizado: 21 de marzo de 2026
 * Proyecto: Grupo Nelson — Cuadrícula de logos de clientes
 *
 * Layout: 40% texto izquierda, 60% cuadrícula de logos derecha
 * Grid: 4 columnas x 3 filas con líneas finas
 */

'use client'

import Image from 'next/image'

const logos = [
    { src: '/logos-clientes/logo-gulfstream.svg', alt: 'Gulfstream' },
    { src: '/logos-clientes/logo-honeywell.svg', alt: 'Honeywell' },
    { src: '/logos-clientes/logo-dhl.svg', alt: 'DHL' },
    { src: '/logos-clientes/logo-general-dynamics.svg', alt: 'General Dynamics' },
    { src: '/logos-clientes/logo-baxter.svg', alt: 'Baxter' },
    { src: '/logos-clientes/logo-rheem.svg', alt: 'Rheem' },
    { src: '/logos-clientes/logo-vertiv.svg', alt: 'Vertiv' },
    { src: '/logos-clientes/logo-celestica.svg', alt: 'Celestica' },
    { src: '/logos-clientes/logo-intuitive.svg', alt: 'Intuitive Surgical' },
    { src: '/logos-clientes/logo-utc-aerospace-systems.svg', alt: 'UTC Aerospace Systems' },
    { src: '/logos-clientes/logo-goodrich.svg', alt: 'Goodrich' },
    { src: '/logos-clientes/logo-air-liquide.svg', alt: 'Air Liquide' },
]

interface LogosGridBPProps {
    tagline?: string
    title?: string
    paragraph?: React.ReactNode
}

export function LogosGridBP({
    tagline = 'Trayectoria',
    title = '33 corporaciones internacionales confían en Grupo Nelson',
    paragraph = <>Desde <strong>Gulfstream</strong> hasta <strong>DHL</strong>, las empresas más exigentes del mundo operan en parques de Grupo Nelson. Cada una pasó por su propio proceso de due diligence. Cada una firmó.</>,
}: LogosGridBPProps) {
    return (
        <section data-component="LogosGridBP" data-component-file="src/components/brandpetram/logos-grid-bp.tsx" data-component-props="true" className="w-11/12 mx-auto py-[3rem] 768:py-[4rem] 1024:py-[5rem] 1200:py-[5.5rem] 1920:py-[6rem]">
            <div className="flex flex-col lg:flex-row gap-[2rem] 1024:gap-[3rem] 1200:gap-[4rem]">
                {/* Texto — 40% */}
                <div className="flex flex-col justify-center lg:w-[40%] px-[1rem] 768:px-[1.5rem] 1200:px-[2rem]">
                    {tagline && (
                        <p className="text-[1.125rem] 768:text-[1.25rem] 1024:text-[1.375rem] 1200:text-[1.5rem] 1536:text-[1.625rem] 1920:text-[1.75rem] font-semibold text-blue-600 mb-[0.5rem] 768:mb-[0.75rem]">
                            {tagline}
                        </p>
                    )}
                    <h2 className="text-[1.5rem] 360:text-[1.5rem] 393:text-[1.5rem] 430:text-[1.75rem] 768:text-[2rem] 834:text-[2.25rem] 1024:text-[2.5rem] 1200:text-[2.75rem] 1280:text-[3rem] 1366:text-[3.25rem] 1440:text-[3.5rem] 1536:text-[3.75rem] 1728:text-[4.25rem] 1920:text-[4.5rem] text-foreground leading-none tracking-tighter font-extrabold text-balance">
                        {title}
                    </h2>
                    <p className="mt-[1rem] 768:mt-[1.5rem] 1200:mt-[2rem] text-[0.875rem] 360:text-[0.875rem] 393:text-[0.875rem] 430:text-[1rem] 768:text-[1rem] 834:text-[1.0625rem] 1024:text-[1.125rem] 1200:text-[1.125rem] 1280:text-[1.1875rem] 1366:text-[1.25rem] 1440:text-[1.3125rem] 1536:text-[1.375rem] 1728:text-[1.4375rem] 1920:text-[1.5rem] text-muted-foreground leading-relaxed tracking-wide">
                        {paragraph}
                    </p>
                </div>

                {/* Logos — 60% */}
                <div className="lg:w-[60%]">
                    <div className="grid grid-cols-4 border-t border-l border-border">
                        {logos.map((logo) => (
                            <div
                                key={logo.alt}
                                className="flex items-center justify-center border-r border-b border-border p-[1rem] 768:p-[1.5rem] 1024:p-[2rem] 1200:p-[2rem] 1536:p-[2.5rem] 1920:p-[3rem] aspect-[3/2]"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
