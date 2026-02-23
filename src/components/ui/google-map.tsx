'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import type { CSSProperties } from 'react'

type Props = {
  lat: number
  lng: number
  zoom?: number
  mapId?: string
  className?: string
  style?: CSSProperties
}

export default function GoogleMapWidget({ lat, lng, zoom = 15, mapId, className, style }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!

  return (
    <APIProvider apiKey={apiKey}>
      <div
        className={className}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          minHeight: 300,
          ...style,
        }}
      >
        <Map
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          disableDefaultUI
          gestureHandling="cooperative"
          mapId={mapId}
        >
          <Marker position={{ lat, lng }} />
        </Map>
      </div>
    </APIProvider>
  )
}
