"use client"

import { Carousel, useCarousel } from "motion-plus/react"
import { motion } from "motion/react"
import { type ReactNode } from "react"

// Types
export interface CarouselItem {
  id: string | number
  content: ReactNode
}

export interface Carrusel1Props {
  items: CarouselItem[]
  gap?: number
  loop?: boolean
  snap?: false | "page" | "loose"
  overflow?: boolean
  className?: string
  itemClassName?: string
  showNavigation?: boolean
  /** Espacio antes del primer item (ej: "2rem", "5%", "50vw") */
  paddingStart?: string
  /** Espacio después del último item - usa "center" para centrar el último item */
  paddingEnd?: string | "center"
}

// Navigation component - positioned below, aligned to first item
function Navigation() {
  const { nextPage, prevPage, isNextActive, isPrevActive } = useCarousel()

  return (
    <nav className="flex items-center gap-4 mt-6">
      <motion.button
        className="flex size-16 items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring"
        aria-label="Página anterior"
        onClick={prevPage}
        animate={{ opacity: isPrevActive ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronLeftIcon />
      </motion.button>

      <motion.button
        className="flex size-16 items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-ring"
        aria-label="Página siguiente"
        onClick={nextPage}
        animate={{ opacity: isNextActive ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronRightIcon />
      </motion.button>
    </nav>
  )
}

// Main carousel component
export function Carrusel1({
  items,
  gap = 20,
  loop = false,
  snap = "page",
  overflow = true,
  className = "",
  itemClassName = "",
  showNavigation = true,
  paddingStart,
  paddingEnd,
}: Carrusel1Props) {
  // Calcular padding-end: "center" = 50vw - mitad del item (aproximado)
  const computedPaddingEnd = paddingEnd === "center" ? "calc(50vw - 150px)" : paddingEnd

  return (
    <div className={`${className}`}>
      {/* Estilo responsive para paddingEnd - solo aplica en md+ */}
      {computedPaddingEnd && (
        <style>{`
          @media (min-width: 768px) {
            .carrusel-padding-end { padding-right: ${computedPaddingEnd}; }
          }
        `}</style>
      )}
      <Carousel
        className={`relative ${computedPaddingEnd ? "carrusel-padding-end" : ""}`}
        style={{
          paddingLeft: paddingStart,
        }}
        items={items.map((item) => (
          <div key={item.id} className={itemClassName}>
            {item.content}
          </div>
        ))}
        overflow={overflow}
        gap={gap}
        snap={snap}
        loop={loop}
      >
        {showNavigation && <Navigation />}
      </Carousel>
    </div>
  )
}

// Default export
export default Carrusel1

// Icons
function ChevronLeftIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
