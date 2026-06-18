"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const impactImages = [
  { src: "https://www.figma.com/api/mcp/asset/88994552-c2a5-4b57-bdd3-0ac27e70df06", alt: "Impact 1", widthClass: "w-[280px] sm:w-[380px] md:w-[521px]" },
  { src: "https://www.figma.com/api/mcp/asset/c913f3d1-868f-4bbe-b928-a0de8a62dfec", alt: "Impact 2", widthClass: "w-[180px] sm:w-[220px] md:w-[293px]" },
  { src: "https://www.figma.com/api/mcp/asset/1bafcb6b-2ea8-4045-ad66-633583044001", alt: "Impact 3", widthClass: "w-[320px] sm:w-[440px] md:w-[587px]" },
  { src: "https://www.figma.com/api/mcp/asset/021afc96-a66e-448a-81d0-785fce7fc217", alt: "Impact 4", widthClass: "w-[180px] sm:w-[220px] md:w-[293px]" },
]

export default function ImpactStats() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isProgrammaticScroll = useRef(false)

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      isProgrammaticScroll.current = true
      const container = scrollRef.current
      const children = container.children
      if (children && children[index]) {
        const targetElement = children[index] as HTMLElement
        const containerOffsetLeft = container.offsetLeft
        const targetOffsetLeft = targetElement.offsetLeft
        
        const scrollPos = targetOffsetLeft - containerOffsetLeft
        const offset = window.innerWidth >= 768 ? 80 : (window.innerWidth >= 640 ? 32 : 16)
        
        container.scrollTo({
          left: scrollPos - offset,
          behavior: "smooth"
        })
        
        setTimeout(() => {
          isProgrammaticScroll.current = false
        }, 600)
      }
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev - 1 + impactImages.length) % impactImages.length
      scrollToImage(nextIdx)
      return nextIdx
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % impactImages.length
      scrollToImage(nextIdx)
      return nextIdx
    })
  }

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollRef.current) return
    const container = scrollRef.current
    const scrollLeft = container.scrollLeft
    const children = container.children
    const containerOffsetLeft = container.offsetLeft
    
    let activeIdx = 0
    let closestDiff = Infinity
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement
      const targetPos = child.offsetLeft - containerOffsetLeft
      const offset = window.innerWidth >= 768 ? 80 : (window.innerWidth >= 640 ? 32 : 16)
      const diff = Math.abs(targetPos - offset - scrollLeft)
      
      if (diff < closestDiff) {
        closestDiff = diff
        activeIdx = i
      }
    }
    
    if (activeIdx !== currentIndex) {
      setCurrentIndex(activeIdx)
    }
  }

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext()
      }, 4000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered])

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
                onClick={handlePrev}
                className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-[#fdf9ed]"
                aria-label="Previous image"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="size-[36px] md:size-[40px] border border-[#fdf9ed] rounded-[4px] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-[#fdf9ed]"
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
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-10 md:mt-20 flex gap-4 md:gap-[32px] overflow-x-auto pb-4 px-4 sm:px-8 md:px-[80px] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {impactImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`h-[200px] sm:h-[280px] md:h-[391px] ${img.widthClass} rounded-[8px] overflow-hidden shrink-0 snap-start transition-opacity duration-300 ${
                idx === currentIndex ? "opacity-100" : "opacity-70"
              }`}
            >
              <img src={img.src} alt={img.alt} className="size-full object-cover" />
            </div>
          ))}
        </div>

        {/* Navigation Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {impactImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                scrollToImage(index)
              }}
              className={`size-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? "bg-[#f8f8f2] w-6" 
                  : "bg-[#f8f8f2]/40 hover:bg-[#f8f8f2]/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
