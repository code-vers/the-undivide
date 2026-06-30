import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImpactQuote() {
  return (
    <section className="relative min-h-[558px] py-16 md:py-0 w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/sections/home/community.jpg" alt="Impact Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1c3530]/10" />
        <div className="absolute inset-0 bg-black/37" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] px-6 md:px-[80px] flex flex-col items-center space-y-[40px] w-full">
        <div className="border border-white/50 rounded-full px-[17px] py-[5px]">
          <span className="text-[16px] font-medium text-white/55 tracking-wide uppercase">
            IMPACT
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-[64px] font-bold text-[#f8f8f2] text-center leading-[1.1] max-w-[900px]">
          Rooted in Community. Driven by Data.
        </h2>

        <Link href='/impact'>
          <Button className="bg-[#f8f8f2] hover:bg-[#2d584a] hover:text-white text-[#1c3530] h-[48px] px-[32px] rounded-[8px] text-[16px] font-semibold transition-colors">
            See Our Work
          </Button>
        </Link>
      </div>
    </section>
  )
}
