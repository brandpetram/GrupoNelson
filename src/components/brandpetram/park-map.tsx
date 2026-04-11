'use client'

import { MapPin } from 'lucide-react'
import GoogleMapWidget from '@/components/ui/google-map'

// === Datos bilingües ===

const parkMapLabels = {
  es: {
    ubicacion: 'Ubicación',
    abrirEnGoogleMaps: 'Abrir en Google Maps →',
  },
  en: {
    ubicacion: 'Location',
    abrirEnGoogleMaps: 'Open in Google Maps →',
  },
} as const

interface ParkMapProps {
  parkName: string
  address: string
  lat: number
  lng: number
  zoom?: number
  mapsUrl?: string
  /** Altura del mapa en mobile (default: "400px") */
  mobileHeight?: string
  /** Altura del mapa en desktop (default: "560px") */
  desktopHeight?: string
  /** Idioma (default: "es") */
  lang?: 'en' | 'es'
}

export function ParkMap({ parkName, address, lat, lng, zoom = 15, mapsUrl, mobileHeight = '400px', desktopHeight = '560px', lang = 'es' }: ParkMapProps) {
  const t = parkMapLabels[lang]

  return (
    <section data-component="ParkMap" data-component-file="src/components/brandpetram/park-map.tsx" data-component-props="true" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Columna izquierda — info centrada verticalmente */}
        <div className=" text-white bg-linear-to-br from-blue-600  to-blue-800 relative px-6 py-16 sm:py-24 lg:static lg:px-8 flex items-center justify-center" style={{ minHeight: desktopHeight }}>
          <div className="w-full max-w-lg">
            {/* Cuadrícula decorativa de fondo */}


            <h2 className="text-[3rem] font-bold tracking-tight">
              {t.ubicacion}
            </h2>
            <p className="mt-0 text-[3rem] lg:text-[2.5rem] leading-none font-light ">
              {parkName}
            </p>

            <dl className="mt-8 text-[1.2rem] ">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <MapPin aria-hidden="true" className="h-6 w-6  mt-0.5" />
                </dt>
                <dd className="leading-relaxed">{address}</dd>
              </div>
            </dl>

            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-md font-medium text-blue-200 hover:underline"
              >
                {t.abrirEnGoogleMaps}
              </a>
            )}
          </div>
        </div>

        {/* Columna derecha — mapa */}
        <div
          className="overflow-hidden"
          style={{ height: desktopHeight }}
        >
          <GoogleMapWidget
            lat={lat}
            lng={lng}
            zoom={zoom}
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}
