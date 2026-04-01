'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { Container } from '@/components/container'

const group1 = [
    { src: '/logos-clientes/logo-gulfstream-2.svg', alt: 'Gulfstream' },
    { src: '/logos-clientes/logo-honeywell-2.svg', alt: 'Honeywell' },
    { src: '/logos-clientes/logo-dhl-2.svg', alt: 'DHL' },
    { src: '/logos-clientes/logo-baxter-2.svg', alt: 'Baxter' },
]

const group2 = [
    { src: '/logos-clientes/logo-vertiv-2.svg', alt: 'Vertiv' },
    { src: '/logos-clientes/logo-intuitive-2.svg', alt: 'Intuitive' },
    { src: '/logos-clientes/logo-air-liquide-2.svg', alt: 'Air Liquide' },
    { src: '/logos-clientes/logo-direct-pack-2.svg', alt: 'Direct Pack' },
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
            className="grid-cols-2 md:grid-cols-4">
            <div className="col-span-full">
                <div
                    data-grid-content
                    className="py-16">
                    <p className="text-muted-foreground mx-auto max-w-xl text-balance text-center md:text-lg">
                        33 corporaciones internacionales han construido con Baumex
                    </p>
                </div>
            </div>
            <AnimatePresence
                initial={false}
                mode="popLayout">
                {groups[active].map((logo, i) => (
                    <div key={`${active}-${logo.alt}`}>
                        <div
                            data-grid-content
                            className="bg-card!">
                            <motion.div
                                className="flex h-24 items-center justify-center"
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -24, filter: 'blur(6px)', scale: 0.5 }}
                                transition={{ delay: i * 0.05, duration: 1, type: 'spring', bounce: 0.4 }}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-10 w-auto max-w-[180px] object-contain dark:invert dark:brightness-200"
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </AnimatePresence>
        </Container>
    )
}
