"use client"

import { useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    src: "https://www.figma.com/api/mcp/asset/006e6b7b-f206-4315-8e13-968c1e852422",
    alt: "Case Study 1",
    className: "h-[220px] sm:h-[300px] md:h-[391px] w-[280px] sm:w-[380px] md:w-[521px] rounded-[8px] overflow-hidden shrink-0 snap-start"
  },
  {
    src: "https://www.figma.com/api/mcp/asset/174c8585-78bb-4b3c-86ac-cd2214ee65f6",
    alt: "Case Study 2",
    className: "h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start"
  },
  {
    src: "https://www.figma.com/api/mcp/asset/fd209c56-c83b-4ffe-8289-13406e59c6b9",
    alt: "Case Study 3",
    className: "h-[220px] sm:h-[300px] md:h-[391px] w-[320px] sm:w-[440px] md:w-[587px] rounded-[8px] overflow-hidden shrink-0 snap-start"
  },
  {
    src: "https://www.figma.com/api/mcp/asset/336d5bce-46b8-4001-a96c-de16382aec5f",
    alt: "Case Study 4",
    className: "h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start"
  },
  {
    src: "https://www.figma.com/api/mcp/asset/174c8585-78bb-4b3c-86ac-cd2214ee65f6",
    alt: "Case Study 5",
    className: "h-[220px] sm:h-[300px] md:h-[391px] w-[180px] sm:w-[220px] md:w-[293px] rounded-[8px] overflow-hidden shrink-0 snap-start"
  }
]

export default function CommunityPrograms() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // 1. Initialize scroll to the middle set (Set 2)
    const initScroll = () => {
      const children = scrollContainer.children
      if (children.length >= 10) {
        const elem0 = children[0] as HTMLElement
        const elem5 = children[5] as HTMLElement
        scrollContainer.scrollLeft = elem5.offsetLeft - elem0.offsetLeft
      } else if (scrollContainer.scrollWidth > 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3
      }
    }

    // Run on mount with a small timeout to ensure DOM layout is completed
    const timer = setTimeout(initScroll, 50)

    // 2. Debounced scroll normalization to wrap position seamlessly when scrolling stops
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const { scrollLeft } = scrollContainer
        const children = scrollContainer.children
        if (children.length < 10) return

        const elem0 = children[0] as HTMLElement
        const elem5 = children[5] as HTMLElement
        const oneSetWidth = elem5.offsetLeft - elem0.offsetLeft

        // If scrolled past Set 2 into Set 3 (right side), jump back to Set 2
        if (scrollLeft >= oneSetWidth * 2) {
          scrollContainer.scrollLeft = scrollLeft - oneSetWidth
        }
        // If scrolled before Set 2 into Set 1 (left side), jump forward to Set 2
        else if (scrollLeft < oneSetWidth) {
          scrollContainer.scrollLeft = scrollLeft + oneSetWidth
        }
      }, 150)
    }

    scrollContainer.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const { scrollLeft, clientWidth } = scrollContainer
    const children = scrollContainer.children
    if (children.length < 10) return

    const elem0 = children[0] as HTMLElement
    const elem5 = children[5] as HTMLElement
    const oneSetWidth = elem5.offsetLeft - elem0.offsetLeft

    let currentScrollLeft = scrollLeft

    // If we are out of Set 2 range, warp instantly before starting the smooth scroll
    if (currentScrollLeft >= oneSetWidth * 2) {
      scrollContainer.scrollLeft = currentScrollLeft - oneSetWidth
      currentScrollLeft = scrollContainer.scrollLeft
    } else if (currentScrollLeft < oneSetWidth) {
      scrollContainer.scrollLeft = currentScrollLeft + oneSetWidth
      currentScrollLeft = scrollContainer.scrollLeft
    }

    const scrollAmount = clientWidth * 0.6
    const scrollTo = direction === "left" ? currentScrollLeft - scrollAmount : currentScrollLeft + scrollAmount
    scrollContainer.scrollTo({ left: scrollTo, behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-white pt-12 md:pt-[60px] pb-16 sm:pb-24 md:pb-[100px]" id="community-programs">
      {/* Split background: green background covers top portion, ending exactly at the middle of the cards */}
      <div className="absolute inset-x-0 top-0 bg-[#2d584a] bottom-[206px] sm:bottom-[278px] md:bottom-[344px] z-0" />

      <div className="relative z-10 mx-auto max-w-[1920px]">
        <div className="pt-4 md:pt-8 pb-6 md:pb-8">
          <div className="mx-auto max-w-[1920px] px-4 sm:px-8 md:px-[80px]">
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

        {/* Horizontal Scrolling images with padding for shadows */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-[32px] overflow-x-auto pt-4 pb-8 md:pt-6 md:pb-12 px-4 sm:px-8 md:px-[80px] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Render first set (clone) */}
          {caseStudies.map((study, idx) => (
            <div
              key={`set-1-${idx}`}
              className={`${study.className} shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2`}
            >
              <img src={study.src} alt={study.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
          {/* Render second set (original) */}
          {caseStudies.map((study, idx) => (
            <div
              key={`set-2-${idx}`}
              className={`${study.className} shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2`}
            >
              <img src={study.src} alt={study.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
          {/* Render third set (clone) */}
          {caseStudies.map((study, idx) => (
            <div
              key={`set-3-${idx}`}
              className={`${study.className} shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2`}
            >
              <img src={study.src} alt={study.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
