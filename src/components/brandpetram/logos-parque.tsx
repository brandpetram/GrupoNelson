// Franja de logos de empresas establecidas en el parque industrial
// Se usa en las pages de /parques-industriales-mexicali/[slug]

import Image from "next/image"
import type { IndustrialPark } from "@/data/parks/types"

export function LogosParque({ park }: { park: IndustrialPark }) {
  if (!park.tenants || park.tenants.length === 0) return null

  const tenantsConLogo = park.tenants.filter((t) => t.logo)
  const tenantsSinLogo = park.tenants.filter((t) => !t.logo)

  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
        Empresas establecidas
      </p>
      <div className="flex flex-wrap items-center gap-8">
        {tenantsConLogo.map((tenant) => (
          <div
            key={tenant.name}
            className="relative h-12 w-36"
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
        {tenantsSinLogo.map((tenant) => (
          <span
            key={tenant.name}
            className="text-sm text-zinc-400 dark:text-zinc-500"
          >
            {tenant.name}
          </span>
        ))}
      </div>
    </div>
  )
}
