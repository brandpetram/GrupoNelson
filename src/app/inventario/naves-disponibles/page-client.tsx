'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer1 from '@/components/brandpetram/footer-1'
import TablaModelosDeProductos from '@/components/brandpetram/tabla-modelos-de-productos'
import Drawer from '@/components/tailwind/drawer'
import { navesIndustriales, NaveIndustrial } from '@/data/naves-industriales'

export default function NavesDisponiblesClient() {
  const [naveSeleccionada, setNaveSeleccionada] = useState<NaveIndustrial | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleVerMas = (nave: NaveIndustrial) => {
    setNaveSeleccionada(nave)
    setDrawerOpen(true)
  }

  const disponibles = navesIndustriales.filter(n => n.estatus === 'Disponible').length

  return (
    <div className="overflow-x-clip">
      <Header />
      <main className="min-h-screen mt-32">
        {/* Hero compacto */}
        <section className="border-b border-gray-200 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Parques Industriales · Mexicali, B.C.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Naves Industriales<br className="hidden sm:block" /> Disponibles
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {disponibles} naves disponibles en Nelson II, El Vigía y El Vigía II.
              Da clic en <strong>+</strong> para ver especificaciones completas y solicitar información.
            </p>
          </div>
        </section>

        <section className="py-10 max-w-[1440px] mx-auto">
          <TablaModelosDeProductos
            naves={navesIndustriales}
            onVerMas={handleVerMas}
          />
        </section>
      </main>
      <Footer1 />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        nave={naveSeleccionada}
      />
    </div>
  )
}
