'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import TablaModelosDeProductos from '@/components/brandpetram/tabla-modelos-de-productos'
import Drawer from '@/components/tailwind/drawer'
import type { NaveIndustrial } from '@/data/naves-industriales'

export default function AvailableBuildingsClient({ naves }: { naves: NaveIndustrial[] }) {
  const [naveSeleccionada, setNaveSeleccionada] = useState<NaveIndustrial | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleVerMas = (nave: NaveIndustrial) => {
    setNaveSeleccionada(nave)
    setDrawerOpen(true)
  }

  const disponibles = naves.filter(n => n.estatus === 'Disponible').length

  return (
    <div className="overflow-x-clip">
      <Header lang="en" />
      <main className="min-h-screen mt-32">
        {/* Compact hero */}
        <section className="border-b border-gray-200 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Industrial Parks · Mexicali, B.C.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Available Industrial<br className="hidden sm:block" /> Buildings
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {disponibles} buildings available in Nelson II, El Vigia and El Vigia II.
              Click <strong>+</strong> to view full specifications and request information.
            </p>
          </div>
        </section>

        <section className="py-10 max-w-[1440px] mx-auto">
          <TablaModelosDeProductos
            naves={naves}
            onVerMas={handleVerMas}
            lang="en"
          />
        </section>
      </main>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        nave={naveSeleccionada}
        lang="en"
      />
    </div>
  )
}
