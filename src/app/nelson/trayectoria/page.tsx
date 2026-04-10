import type { Metadata } from 'next'
import Header from '@/components/Header'
import { LogosGridBP2 } from '@/components/brandpetram/logos-grid-bp-2'
import { StatsGridBPGamma } from '@/components/brandpetram/stats-grid-bp-gamma'
import { EditorialCascadaBP } from '@/components/brandpetram/editorial-cascada-bp'

export const metadata: Metadata = {
  title: 'Trayectoria',
  description: 'Más de 60 años desarrollando parques industriales y naves industriales built-to-suit en Mexicali. Empresas Fortune 500 confían en Grupo Nelson.',
}

export default function TrayectoriaPage() {
  return (
    <div className="min-h-[200vh] overflow-x-clip">
      <Header />

      <main>
        {/* ── Logos Grid — Hero de la página ── */}
        <div className="pt-20">
          <LogosGridBP2 />
        </div>

        <StatsGridBPGamma />

        {/* ── Texto editorial + cascada de cubos ── */}
        <EditorialCascadaBP />
      </main>
    </div>
  )
}
