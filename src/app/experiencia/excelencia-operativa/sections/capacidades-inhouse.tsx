'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Zap, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/container'

const features = [
    {
        title: 'Submittals antes de instalar',
        description: 'Cada material y equipo pasa por aprobación documentada del cliente antes de entrar a obra. Nada se instala sin submittal autorizado.',
        icon: ClipboardCheck,
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2340&auto=format&fit=crop',
    },
    {
        title: 'Inspección por fase',
        description: '11 puntos de control de calidad documentados por proyecto. Evidencia fotográfica en cada fase. Ensayos de laboratorio externo cuando la disciplina lo requiere.',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2340&auto=format&fit=crop',
    },
    {
        title: 'Permisos diarios de trabajo',
        description: 'Matriz de riesgo cuantitativa antes de cada turno. Permisos especializados para alturas y soldadura. Manual HSE de 18 capítulos aplicado en campo.',
        icon: ShieldCheck,
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
                            <h2 className="text-foreground text-3xl font-semibold">Los mismos 11 checkpoints en cada disciplina</h2>
                            <p className="text-muted-foreground mt-4">Cada fase de obra genera evidencia que el cliente puede auditar: submittals aprobados, inspecciones documentadas y permisos de trabajo firmados antes de cada turno.</p>
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
    )
}
