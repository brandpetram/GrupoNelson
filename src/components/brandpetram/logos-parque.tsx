// Franja de logos de empresas establecidas en el parque industrial
// Mobile: logos en flex wrap estático
// Desktop: marquee infinito animado con CSS

import Image from "next/image"
import type { IndustrialPark } from "@/data/parks/types"

export function LogosParque({ park }: { park: IndustrialPark }) {
  if (!park.tenants || park.tenants.length === 0) return null

  const tenants = park.tenants.filter((t) => t.logo)
  if (tenants.length === 0) return null

  // Duplicar para que el loop sea seamless
  const doubled = [...tenants, ...tenants]

  return (
    <div data-component="LogosParque" data-component-file="src/components/brandpetram/logos-parque.tsx" data-component-props="true" className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
        Empresas establecidas
      </p>

      {/* Mobile — estático */}
      <div className="flex flex-wrap items-center gap-8 lg:hidden">
        {tenants.map((tenant) => (
          <div key={tenant.name} className="relative h-12 w-36" title={tenant.name}>
            <Image
              src={tenant.logo!}
              alt={`Logo ${tenant.name}`}
              fill
              className="object-contain object-left"
            />
          </div>
        ))}
      </div>

      {/* Desktop — marquee */}
      <div className="hidden lg:block overflow-hidden w-full max-w-full">
        <div className="flex animate-marquee items-center gap-12 w-max will-change-transform">
          {doubled.map((tenant, i) => (
            <div
              key={`${tenant.name}-${i}`}
              className="relative h-12 w-36 shrink-0"
              title={tenant.name}
            >
              <Image
                src={tenant.logo!}
                alt={`Logo ${tenant.name}`}
                fill
                className="object-contain object-left"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
