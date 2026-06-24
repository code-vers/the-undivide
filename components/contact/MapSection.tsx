"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  { 
    ssr: false,
    loading: () => (
      <div className="size-full flex items-center justify-center bg-[#e8edeb]">
        <p className="text-[14px] text-[#2d584a] font-semibold uppercase tracking-wider animate-pulse">
          Loading Map...
        </p>
      </div>
    )
  }
)

export default function MapSection() {
  return (
    <section className="bg-[#e8edeb] h-[593px] relative w-full overflow-hidden z-0">
      <LeafletMap 
        position={[38.8050, -77.0460]} 
        address="601 King St STE 200 #671, Alexandria, Virginia" 
      />
    </section>
  )
}

