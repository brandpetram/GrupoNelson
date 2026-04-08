'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { Container } from '@/components/container'

const group1 = [
    '18 hitos monitoreados',
    'Reportes semanales',
    'Minutas firmadas',
    'Submittals',
    'Long lead items',
]

const group2 = [
    'Permisos diarios',
    'Scorecard HSE',
    'Control de calidad',
    'Responsables asignados',
    'Avance medible',
]

const groups = [group1, group2]

export default function LogoCloudClientes() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % groups.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Container
            asGrid
            className="grid-cols-2 md:grid-cols-5">
            <div className="col-span-full">
                <div
                    data-grid-content
                    className="py-16">
                    <p className="text-muted-foreground mx-auto max-w-xl text-balance text-center md:text-lg">
                        El vocabulario de una obra que se controla de verdad
                    </p>
                </div>
            </div>
            <AnimatePresence
                initial={false}
                mode="popLayout">
                {groups[active].map((word, i) => (
                    <div key={`${active}-${word}`}>
                        <div
                            data-grid-content
                            className="bg-card!">
                            <motion.div
                                className="flex h-24 items-center justify-center px-4"
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -24, filter: 'blur(6px)', scale: 0.5 }}
                                transition={{ delay: i * 0.05, duration: 1, type: 'spring', bounce: 0.4 }}>
                                <span className="text-foreground text-center text-sm font-medium tracking-wide uppercase">
                                    {word}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </AnimatePresence>
        </Container>
    )
}
