"use client"

import { motion, type Transition, type Variants } from "motion/react"

interface HeroMotionPlusProps {
    lang?: 'en' | 'es'
    staggerInterval?: number
    itemOffsetY?: number
    itemTransition?: Transition
    badge?: string
    headlineTop?: string
    headlineAccent?: string
    subtitle?: string
    primaryButtonText?: string
    primaryButtonHref?: string
    secondaryButtonText?: string
    secondaryButtonHref?: string
    metrics?: { value: string; label: string }[]
}

const defaultItemTransition: Transition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
}

const heroMotionPlusDefaults = {
    es: {
        badge: "Desde 1967 en Mexicali",
        headlineTop: "Parques industriales",
        headlineAccent: "de clase mundial",
        subtitle: "Desarrollo, construcción y administración de naves industriales en Mexicali. La familia fundadora opera directamente cada proyecto.",
        primaryButtonText: "Solicita una consulta",
        primaryButtonHref: "/contacto",
        secondaryButtonText: "Conoce los parques",
        secondaryButtonHref: "/parques",
        metrics: [
            { value: "60+", label: "Años" },
            { value: "75+", label: "Proyectos" },
            { value: "33", label: "Corporaciones" },
        ],
    },
    en: {
        badge: "Since 1967 in Mexicali",
        headlineTop: "World-class",
        headlineAccent: "industrial parks",
        subtitle: "Development, construction, and management of industrial buildings in Mexicali. The founding family operates every project directly.",
        primaryButtonText: "Request a consultation",
        primaryButtonHref: "/contact",
        secondaryButtonText: "Explore the parks",
        secondaryButtonHref: "/industrial-parks",
        metrics: [
            { value: "60+", label: "Years" },
            { value: "75+", label: "Projects" },
            { value: "33", label: "Corporations" },
        ],
    },
}

export default function HeroMotionPlus({
    lang = 'es',
    staggerInterval = 0.1,
    itemOffsetY = 40,
    itemTransition = defaultItemTransition,
    badge,
    headlineTop,
    headlineAccent,
    subtitle,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
    metrics,
}: HeroMotionPlusProps) {
    const d = heroMotionPlusDefaults[lang]
    const _badge = badge ?? d.badge
    const _headlineTop = headlineTop ?? d.headlineTop
    const _headlineAccent = headlineAccent ?? d.headlineAccent
    const _subtitle = subtitle ?? d.subtitle
    const _primaryButtonText = primaryButtonText ?? d.primaryButtonText
    const _primaryButtonHref = primaryButtonHref ?? d.primaryButtonHref
    const _secondaryButtonText = secondaryButtonText ?? d.secondaryButtonText
    const _secondaryButtonHref = secondaryButtonHref ?? d.secondaryButtonHref
    const _metrics = metrics ?? d.metrics
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerInterval,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: itemOffsetY, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: itemTransition,
        },
    }

    return (
        <div data-component="HeroMotionPlus" data-component-file="src/components/brandpetram/hero-motionplus.tsx" data-component-props="true" className="hero-mp-wrapper">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    x: [0, 60, -40, 20, 0],
                    y: [0, -30, 50, -20, 0],
                }}
                transition={{
                    opacity: { duration: 1.2, ease: "easeOut" },
                    x: { duration: 23, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                }}
                className="hero-mp-glow hero-mp-glow-teal"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    x: [0, -50, 30, -60, 0],
                    y: [0, 40, -30, 50, 0],
                }}
                transition={{
                    opacity: { duration: 1.4, ease: "easeOut", delay: 0.2 },
                    x: { duration: 17, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 29, repeat: Infinity, ease: "easeInOut" },
                }}
                className="hero-mp-glow hero-mp-glow-green"
            />

            <motion.div
                className="hero-mp-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="hero-mp-badge">
                    <motion.span
                        className="hero-mp-badge-dot"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    {_badge}
                </motion.div>

                <motion.h1 variants={itemVariants} className="hero-mp-headline">
                    {_headlineTop}
                    <br />
                    <span className="hero-mp-headline-accent">{_headlineAccent}</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="hero-mp-subtitle">
                    {_subtitle}
                </motion.p>

                <motion.div variants={itemVariants} className="hero-mp-button-row">
                    <motion.a
                        href={_primaryButtonHref}
                        className="hero-mp-btn-primary"
                        whileHover={{
                            y: -1,
                            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                        }}
                    >
                        {_primaryButtonText}
                    </motion.a>
                    <motion.a
                        href={_secondaryButtonHref}
                        className="hero-mp-btn-secondary"
                        whileHover={{
                            y: -1,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                        }}
                        onClick={(e) => {
                            if (_secondaryButtonHref?.startsWith('#')) {
                                e.preventDefault()
                                document.querySelector(_secondaryButtonHref)?.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                    >
                        {_secondaryButtonText}
                    </motion.a>
                </motion.div>

                <motion.div variants={itemVariants} className="hero-mp-metrics">
                    {_metrics.map((metric) => (
                        <div key={metric.label} className="hero-mp-metric">
                            <span className="hero-mp-metric-value">
                                {metric.value}
                            </span>
                            <span className="hero-mp-metric-label">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <style>{`
                .hero-mp-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    min-height: 460px;
                    background-color: #0a1628;
                    overflow: hidden;
                }
                .hero-mp-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(10px);
                    mix-blend-mode: screen;
                    pointer-events: none;
                    z-index: 1;
                }
                .hero-mp-glow-teal {
                    top: 35%;
                    left: 45%;
                    width: 500px;
                    height: 300px;
                    transform: translate(-50%, -50%);
                    background: radial-gradient(ellipse at center, rgba(12, 220, 247, 0.15) 0%, transparent 70%);
                }
                .hero-mp-glow-green {
                    top: 20%;
                    left: 30%;
                    width: 400px;
                    height: 250px;
                    transform: translate(-50%, -50%);
                    background: radial-gradient(ellipse at center, rgba(0, 200, 120, 0.12) 0%, transparent 70%);
                }
                .hero-mp-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 24px;
                    padding: 40px 24px;
                    max-width: 700px;
                }
                .hero-mp-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    font-size: 13px;
                    font-weight: 500;
                    color: #0cdcf7;
                    background-color: rgba(12, 220, 247, 0.03);
                    border: 1px solid rgba(12, 220, 247, 0.15);
                    border-radius: 100px;
                }
                .hero-mp-badge-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #0cdcf7;
                    display: block;
                }
                .hero-mp-headline {
                    font-size: clamp(32px, 8vw, 48px);
                    font-weight: 700;
                    line-height: 0.95;
                    letter-spacing: -0.03em;
                    color: #f5f5f5;
                    margin: 0;
                }
                .hero-mp-headline-accent {
                    background: linear-gradient(135deg, #ea580c, #dc2626);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-mp-subtitle {
                    font-size: clamp(14px, 3.5vw, 16px);
                    line-height: 1.6;
                    color: rgba(245, 245, 245, 0.6);
                    margin: 0;
                    max-width: 380px;
                }
                .hero-mp-button-row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 12px;
                }
                .hero-mp-btn-primary,
                .hero-mp-btn-secondary {
                    padding: 12px 28px;
                    font-size: 14px;
                    font-weight: 600;
                    font-family: inherit;
                    border-radius: 10px;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                }
                .hero-mp-btn-primary {
                    color: #0f1115;
                    background-color: #f5f5f5;
                    border: none;
                }
                .hero-mp-btn-secondary {
                    color: #f5f5f5;
                    background-color: transparent;
                    border: 1px solid #1d2628;
                }
                .hero-mp-metrics {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    padding-top: 8px;
                    width: 100%;
                }
                @media (min-width: 640px) {
                    .hero-mp-metrics {
                        display: flex;
                        justify-content: center;
                        width: auto;
                    }
                }
                .hero-mp-metric {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .hero-mp-metric-value {
                    font-size: 18px;
                    font-weight: 700;
                    color: #f5f5f5;
                }
                .hero-mp-metric-label {
                    font-size: 12px;
                    color: rgba(245, 245, 245, 0.6);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                }
            `}</style>
        </div>
    )
}
