'use client'

import { useMemo } from 'react'
import { proyectosBaumex } from '@/data/proyectos-baumex'
import TablaPortafolioBaumex from '@/components/brandpetram/tabla-portafolio-baumex'
import Header from '@/components/Header'
import { SidebarPortafolioBaumex } from '@/components/brandpetram/sidebar-portafolio-baumex'

export default function PortfolioClient() {
  // Quick stats
  const totalM2 = useMemo(() =>
    proyectosBaumex.reduce((acc, p) => acc + (p.superficieM2 || 0), 0),
    []
  )

  return (
    <div className="relative isolate overflow-hidden bg-background min-h-screen">
      {/* Background SVG grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-muted-foreground/10"
      >
        <defs>
          <pattern
            id="portafolio-grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M0.5 0V200M200 0.5L0 0.499983" />
          </pattern>
        </defs>
        <rect fill="url(#portafolio-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* Decorative color cloud */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:right-1/4 sm:top-10"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80b5ff] to-[#8989fc] opacity-10"
        />
      </div>

      <Header lang="en" />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-20">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-7xl font-light tracking-tighter leading-none text-gray-900 dark:text-white">
            +75 projects. <br/> in 28 years.
            <span className="block text-primary mt-2 font-extrabold text-5xl sm:text-7xl">Experience that builds confidence.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            From our first industrial building in 1997 to the 52,200 m² aerospace complex we are building today for Gulfstream. This is the complete track record of Baumex Constructora.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky Sidebar Column */}
          <SidebarPortafolioBaumex
            totalProyectos={proyectosBaumex.length}
            totalM2={totalM2}
          />

          {/* Main Column - Table */}
          <div className="lg:col-span-9">
            <TablaPortafolioBaumex proyectos={proyectosBaumex} />
          </div>
        </div>
      </main>
    </div>
  )
}
