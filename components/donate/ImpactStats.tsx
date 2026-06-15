"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function ImpactStats() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.6
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#2d584a] py-10 md:py-[60px] relative overflow-hidden">
      <div className="mx-auto max-w-[1920px]">
        <div className="px-4 sm:px-8 md:px-[80px]">
          {/* Top row with title + nav arrows */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px] mb-5 md:mb-8">
                <span className="text-[11px] font-medium tracking-[0.275px] text-[#f8f8f2] uppercase">
                  Our RESEARCH
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-[#f8f8f2] leading-tight">
                Help us Make a bigger Impact
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-[8px] shrink-0 mt-2 md:mt-8">
              <button
                onClick={() => scroll("left")}
                className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <p className="text-[14px] md:text-[16px] text-[#f8f8f2] max-w-[964px] leading-[24px] opacity-90">
            Every donation, no matter the size, helps scale what&apos;s possible—from neighborhood pilot programs to national coalitions for systemic change.
          </p>
        </div>

        {/* Horizontal Scrolling images */}
        <div
          ref={scrollRef}
          className="mt-10 md:mt-20 flex gap-4 md:gap-[32px] overflow-x-auto pb-4 px-4 sm:px-8 md:px-[80px] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="h-[200px] sm:h-[280px] md:h-[391px] w-[280px] sm:w-[380px] md:w-[521px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/88994552-c2a5-4b57-bdd3-0ac27e70df06" alt="Impact 1" className="size-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[280px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/c913f3d1-868f-4bbe-b928-a0de8a62dfec" alt="Impact 2" className="size-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[280px] md:h-[391px] w-[320px] sm:w-[440px] md:w-[587px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/1bafcb6b-2ea8-4045-ad66-633583044001" alt="Impact 3" className="size-full object-cover" />
          </div>
          <div className="h-[200px] sm:h-[280px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/021afc96-a66e-448a-81d0-785fce7fc217" alt="Impact 4" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
