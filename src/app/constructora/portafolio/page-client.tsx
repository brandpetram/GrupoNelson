'use client'

import { useMemo } from 'react'
import { proyectosBaumex } from '@/data/proyectos-baumex'
import TablaPortafolioBaumex from '@/components/brandpetram/tabla-portafolio-baumex'
import Header from '@/components/Header'
import { SidebarPortafolioBaumex } from '@/components/brandpetram/sidebar-portafolio-baumex'

export default function PortafolioBaumexClient() {
  // Estadísticas rápidas
  const totalM2 = useMemo(() => 
    proyectosBaumex.reduce((acc, p) => acc + (p.superficieM2 || 0), 0), 
    []
  )

  return (
    <div className="bg-background min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-20">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-7xl font-light tracking-tighter leading-none text-gray-900 dark:text-white">
            +75 proyectos. <br/> en 28 años.
            <span className="block text-primary mt-2 font-extrabold text-5xl sm:text-7xl">Experiencia que da confianza.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Desde nuestra primera nave industrial en 1997 hasta el complejo aeroespacial de 52,200 m² que construimos hoy para Gulfstream. Este es el registro completo de Baumex Constructora.
          </p>
        </div>

        {/* Layout 2 columnas */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Columna Sticky Sidebar */}
          <SidebarPortafolioBaumex 
            totalProyectos={proyectosBaumex.length}
            totalM2={totalM2}
          />

          {/* Columna Principal - Tabla */}
          <div className="lg:col-span-9">
            <TablaPortafolioBaumex proyectos={proyectosBaumex} />
          </div>
        </div>
      </main>
    </div>
  )
}
