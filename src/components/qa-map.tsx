'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { TerrenoGeoFeature } from '@/data/terrenos-geo-lookup'

interface QaMapProps {
  features: TerrenoGeoFeature[]
  selectedId: string | null
}

export function QaMap({ features, selectedId }: QaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)
  const layersRef = useRef<Map<string, L.Layer>>(new Map())

  // Inicializar mapa
  useEffect(() => {
    if (!containerRef.current) return

    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }

    const map = L.map(containerRef.current, {
      zoomControl: true,
      attributionControl: false,
    }).setView([32.58, -115.40], 10)

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
    })

    const light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    })

    satellite.addTo(map)
    L.control.layers({ 'Satelital': satellite, 'Mapa': light }).addTo(map)

    const newLayers = new Map<string, L.Layer>()

    features.forEach(f => {
      const id = f.properties?.id as string
      const nombre = f.properties?.nombre as string

      let layer: L.Layer
      if (f.geometry.type === 'Polygon') {
        layer = L.geoJSON(f, {
          style: {
            color: '#ea580c',
            weight: 3,
            fillColor: '#ea580c',
            fillOpacity: 0.25,
            opacity: 1,
          },
        })
      } else {
        const [lng, lat] = f.geometry.coordinates as [number, number]
        layer = L.circleMarker([lat, lng], {
          radius: 10,
          fillColor: '#3b82f6',
          color: '#ffffff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9,
        })
      }

      ;(layer as L.GeoJSON | L.CircleMarker).bindTooltip(nombre, {
        permanent: true,
        direction: 'top',
        className: 'qa-tooltip',
      })

      layer.addTo(map)
      newLayers.set(id, layer)
    })

    layersRef.current = newLayers

    // Fit a todos
    if (features.length > 0) {
      const allLayer = L.geoJSON(
        { type: 'FeatureCollection', features } as GeoJSON.FeatureCollection
      )
      map.fitBounds(allLayer.getBounds(), { padding: [30, 30] })
    }

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [features])

  // Zoom al terreno seleccionado
  useEffect(() => {
    if (!selectedId || !mapRef.current) return

    const layer = layersRef.current.get(selectedId)
    if (!layer) return

    if ('getBounds' in layer && typeof layer.getBounds === 'function') {
      mapRef.current.fitBounds(layer.getBounds(), { padding: [80, 80], maxZoom: 17 })
    } else if ('getLatLng' in layer && typeof layer.getLatLng === 'function') {
      mapRef.current.setView((layer as L.CircleMarker).getLatLng(), 16)
    }
  }, [selectedId])

  return (
    <>
      <div ref={containerRef} className="h-full w-full" />
      <style>{`
        .qa-tooltip {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          color: #111827;
          font-size: 11px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .qa-tooltip::before {
          border-top-color: #e5e7eb;
        }
      `}</style>
    </>
  )
}
