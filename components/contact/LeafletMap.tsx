"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface LeafletMapProps {
  position: [number, number]
  address: string
}

export default function LeafletMap({ position, address }: LeafletMapProps) {
  useEffect(() => {
    // Fix default markers paths on Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="size-full"
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
      touchZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="p-2 space-y-1">
            <h4 className="font-bold text-[#1c3530] text-[14px]">The Undivide Project HQ</h4>
            <p className="text-[12px] text-[#3d5e57] leading-tight max-w-[200px]">
              {address}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
