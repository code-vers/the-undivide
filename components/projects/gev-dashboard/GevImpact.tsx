import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GevImpact() {
  return (
    <section className="relative min-h-[558px] flex items-center justify-center py-[120px] px-4 md:px-[318px] overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img decoding="async" loading="lazy" src="https://www.figma.com/api/mcp/asset/f024ee00-5136-47bd-abc4-e0ada86bef70" alt="Impact background" className="size-full object-cover" />
        <div className="absolute inset-0 bg-[#1c3530]/85" />
        <div className="absolute inset-0 bg-black/37" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] w-full px-4 md:px-[80px] flex flex-col items-center text-center">
        <div className="inline-flex items-center px-[17px] py-[5px] border border-white/50 rounded-full mb-6">
          <span className="text-base font-semibold tracking-wider text-white/55 uppercase">
            IMPACT
          </span>
        </div>

        <h2 className="text-4xl md:text-[64px] font-bold text-[#f8f8f2] leading-tight mb-10 max-w-[900px]">
          Rooted in Community. Driven by Data.
        </h2>

        <Link href={'/impact'}>
          <Button
            className="h-[48px] bg-[#f8f8f2] hover:bg-white text-[#1c3530] px-[32px] rounded-lg text-base font-semibold transition-all duration-300"
          >
            See Our Work
          </Button>
        </Link>
      </div>
    </section>
  )
}
