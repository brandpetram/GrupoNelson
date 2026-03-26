'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { TerrenoGeoFeature } from '@/data/terrenos-geo-lookup'

interface TerrenoMiniMapProps {
  feature: TerrenoGeoFeature
  nombre: string
}

export function TerrenoMiniMap({ feature, nombre }: TerrenoMiniMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const lightRef = useRef<L.TileLayer | null>(null)
  const satelliteRef = useRef<L.TileLayer | null>(null)
  const [isSatellite, setIsSatellite] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    const map = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
    })

    const light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    })

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
    })

    // Por defecto: satelital
    satellite.addTo(map)
    lightRef.current = light
    satelliteRef.current = satellite

    if (feature.geometry.type === 'Polygon') {
      const layer = L.geoJSON(feature, {
        style: {
          color: '#ea580c',
          weight: 2,
          fillColor: '#ea580c',
          fillOpacity: 0.2,
          opacity: 0.8,
        },
      }).addTo(map)

      map.fitBounds(layer.getBounds(), { padding: [30, 30] })

      const center = layer.getBounds().getCenter()
      L.marker(center, {
        icon: L.divIcon({ className: 'hidden', iconSize: [0, 0] }),
      })
        .addTo(map)
        .bindTooltip(nombre, {
          permanent: true,
          direction: 'top',
          className: 'minimap-tooltip',
        })
    } else {
      const [lng, lat] = feature.geometry.coordinates as [number, number]
      map.setView([lat, lng], 14)

      L.circleMarker([lat, lng], {
        radius: 8,
        fillColor: '#ea580c',
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9,
      })
        .addTo(map)
        .bindTooltip(nombre, {
          permanent: true,
          direction: 'top',
          offset: [0, -12],
          className: 'minimap-tooltip',
        })
    }

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [feature, nombre])

  function toggleLayer() {
    const map = mapRef.current
    if (!map || !lightRef.current || !satelliteRef.current) return

    if (isSatellite) {
      map.removeLayer(satelliteRef.current)
      lightRef.current.addTo(map)
    } else {
      map.removeLayer(lightRef.current)
      satelliteRef.current.addTo(map)
    }
    setIsSatellite(!isSatellite)
  }

  return (
    <>
      <div className="relative">
        <div ref={containerRef} className="h-[250px] w-full" />
        <button
          type="button"
          onClick={toggleLayer}
          className="absolute top-2 right-2 z-[1000] bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-xs px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
        >
          {isSatellite ? 'Mapa' : 'Satélite'}
        </button>
      </div>
      <style>{`
        .minimap-tooltip {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          color: #111827;
          font-size: 11px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .minimap-tooltip::before {
          border-top-color: #e5e7eb;
        }
      `}</style>
    </>
  )
}
