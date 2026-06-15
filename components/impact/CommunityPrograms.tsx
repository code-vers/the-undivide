"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function CommunityPrograms() {
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
    <section className="bg-[#2d584a] py-12 md:py-[60px] relative overflow-hidden">
      <div className="mx-auto max-w-[1920px]">
        <div className="pt-4 md:pt-8 pb-6 md:pb-8">
          <div className="mx-auto max-w-[1760px] px-4 sm:px-8 md:px-[80px]">
            {/* Top row with title + nav arrows */}
            <div className="flex items-start justify-between gap-4 mb-6 md:mb-8">
              <div>
                <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px] mb-4 md:mb-6">
                  <span className="text-[11px] font-medium tracking-[0.275px] text-[#f8f8f2] uppercase">
                    Our RESEARCH
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-[#f8f8f2] leading-tight mb-3">
                  Community Resilience Programs
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#f8f8f2] max-w-[964px] leading-[24px] opacity-90">
                  From cooling down urban heat islands to prepping for natural disasters, our programs are here to help communities gear up for the challenges of tomorrow. No one should be left out when it comes to protecting their home, family, or future.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-[8px] shrink-0 mt-2">
                <button
                  onClick={() => scroll("left")}
                  className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-[#fdf9ed]"
                  aria-label="Previous page"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-[#fdf9ed]"
                  aria-label="Next page"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling images */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-[32px] overflow-x-auto pb-4 px-4 sm:px-8 md:px-[80px] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="h-[220px] sm:h-[300px] md:h-[391px] w-[280px] sm:w-[380px] md:w-[521px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/006e6b7b-f206-4315-8e13-968c1e852422" alt="Case Study 1" className="size-full object-cover" />
          </div>
          <div className="h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/174c8585-78bb-4b3c-86ac-cd2214ee65f6" alt="Case Study 2" className="size-full object-cover" />
          </div>
          <div className="h-[220px] sm:h-[300px] md:h-[391px] w-[320px] sm:w-[440px] md:w-[587px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/fd209c56-c83b-4ffe-8289-13406e59c6b9" alt="Case Study 3" className="size-full object-cover" />
          </div>
          <div className="h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/336d5bce-46b8-4001-a96c-de16382aec5f" alt="Case Study 4" className="size-full object-cover" />
          </div>
          <div className="h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start">
            <img src="https://www.figma.com/api/mcp/asset/174c8585-78bb-4b3c-86ac-cd2214ee65f6" alt="Case Study 5" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
