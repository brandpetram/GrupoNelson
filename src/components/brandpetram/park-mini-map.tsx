'use client'

import GoogleMapWidget from '@/components/ui/google-map'

interface ParkMiniMapProps {
  lat: number
  lng: number
  zoom?: number
  className?: string
}

export function ParkMiniMap({ lat, lng, zoom = 14, className }: ParkMiniMapProps) {
  return (
    <div data-component="ParkMiniMap" data-component-file="src/components/brandpetram/park-mini-map.tsx" data-component-props="true" className={className} style={{ minHeight: 180 }}>
      <GoogleMapWidget lat={lat} lng={lng} zoom={zoom} className="w-full h-full" />
    </div>
  )
}
