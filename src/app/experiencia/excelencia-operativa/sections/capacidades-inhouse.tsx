'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Hammer, Zap, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container } from '@/components/container'

const features = [
    {
        title: 'Obra civil y estructural',
        description: 'Cimentación, acero estructural, losas, muros tilt-up. Desde terracería y compactación hasta acabados. Grúas, soldadura y montaje con equipo propio.',
        icon: Hammer,
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2340&auto=format&fit=crop',
    },
    {
        title: 'Instalaciones electromecánicas',
        description: 'HVAC, sistemas eléctricos, protección contra incendio, plomería. Hasta 20 MW de capacidad eléctrica instalada. Ductos, bandejas, subestaciones.',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2340&auto=format&fit=crop',
    },
    {
        title: 'Control de calidad y seguridad',
        description: '11 checkpoints de QC documentados. Manual HSE de 18 capítulos. Permisos diarios de trabajo con matriz de riesgo. Auditorías semanales.',
        icon: ClipboardCheck,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2340&auto=format&fit=crop',
    },
]

export function CapacidadesInhouse() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
    }

    return (
        <>
            <Container
                asGrid
                className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid">
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:col-span-4">
                    <div
                        data-grid-content
                        className="@4xl:px-12 @4xl:pt-12 flex h-full flex-col gap-12 px-6 pt-6">
                        <div className="text-balance">
                            <h2 className="text-foreground text-3xl font-semibold">Un solo punto de responsabilidad</h2>
                            <p className="text-muted-foreground mb-6 mt-4">10 disciplinas de construcción ejecutadas con equipo propio. Sin intermediarios. Un solo contrato cubre diseño, permisos, construcción y entrega.</p>

                            <Button
                                asChild
                                variant="outline"
                                size="sm">
                                <Link href="/constructora/portafolio">Ver portafolio</Link>
                            </Button>
                        </div>

                        <div className={cn('mt-auto grid divide-y transition-all duration-300', expandedIndex === 0 && 'grid-rows-[1fr_auto_auto]', expandedIndex === 1 && 'grid-rows-[auto_1fr_auto]', expandedIndex === 2 && 'grid-rows-[auto_auto_1fr]')}>
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    data-expanded={expandedIndex === index}
                                    className="not-first:border-t not-first:border-t-card group relative grid grid-rows-[auto_1fr]">
                                    <button
                                        onClick={() => handleSelect(index)}
                                        className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left">
                                        <feature.icon className={cn('size-4 shrink-0 transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
                                        <h3 className={cn('group-hover:text-foreground font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.title}</h3>
                                    </button>

                                    <div className={cn('grid transition-[grid-template-rows] duration-300', expandedIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                                        <div className="overflow-hidden">
                                            <p className="text-muted-foreground text-balance pb-6 pl-7">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="@4xl:col-span-4 overflow-hidden">
                    <div
                        data-grid-content
                        className="relative overflow-hidden md:h-full">
                        <AnimatePresence
                            initial={false}
                            mode="popLayout">
                            <motion.div
                                key={expandedIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="before:border-foreground/10 absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded before:border">
                                <div className="dither absolute inset-0 opacity-75 dark:opacity-25">
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="Construcción de naves industriales — Baumex"
                                        fill
                                        className="size-full object-cover opacity-50"
                                    />
                                </div>
                                <Image
                                    src={features[expandedIndex].image}
                                    alt="Construcción de naves industriales — Baumex"
                                    fill
                                    className="size-full object-cover opacity-75 dark:opacity-40"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>

            <Container
                asGrid
                className="@2xl:grid-cols-2 @4xl:grid-cols-10 grid">
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
                <div className="@4xl:col-span-4">
                    <div
                        data-grid-content
                        className="@4xl:p-12 p-6">
                        <ul className="text-muted-foreground mt-auto space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                                <span className="text-foreground font-medium">ISN &quot;Recommended&quot;</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                                <span className="text-foreground font-medium">LEED Certified</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                                <span className="text-foreground font-medium">FM Global Approved</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                                <span className="text-foreground font-medium">EPGC</span>
                                <span>verificación independiente</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="@4xl:col-span-4">
                    <div
                        data-grid-content
                        className="@4xl:p-12 flex flex-col justify-end p-6">
                        <div className="relative mt-auto max-w-xl">
                            <p className="text-foreground max-w-xs text-balance">&quot;35 años construyendo con Baumex. Sin licitación — asignación directa.&quot;</p>

                            <div className="mt-4 flex items-center gap-2">
                                <div className="before:border-foreground/10 relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border">
                                    <img
                                        src="/logos-clientes/logo-gulfstream-2.svg"
                                        alt="Gulfstream"
                                        className="size-full object-contain p-1 dark:invert dark:brightness-200"
                                    />
                                </div>

                                <div className="space-y-0.5">
                                    <p className="text-foreground text-sm font-medium">Gulfstream Aerospace</p>
                                    <span className="text-muted-foreground block text-xs">Cliente desde 1990</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="@max-4xl:hidden">
                    <div data-grid-content />
                </div>
            </Container>
        </>
    )
}
