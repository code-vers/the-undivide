"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const impactImages = [
  { src: "/assets/sections/donate/gallery/1.jpeg", alt: "Impact 1", widthClass: "w-[280px] sm:w-[380px] md:w-[521px]" },
  { src: "/assets/sections/donate/gallery/2.jpg", alt: "Impact 2", widthClass: "w-[180px] sm:w-[220px] md:w-[293px]" },
  { src: "/assets/sections/donate/gallery/3.jpg", alt: "Impact 3", widthClass: "w-[320px] sm:w-[440px] md:w-[587px]" },
  { src: "/assets/sections/donate/gallery/4.jpg", alt: "Impact 4", widthClass: "w-[180px] sm:w-[220px] md:w-[293px]" },
]

export default function ImpactStats() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isProgrammaticScroll = useRef(false)

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return

    const children = container.children
    if (children.length < 12) return

    const elem0 = children[0] as HTMLElement
    const elem4 = children[4] as HTMLElement
    const oneSetWidth = elem4.offsetLeft - elem0.offsetLeft

    let currentScrollLeft = container.scrollLeft

    // 1. Warp instantly if we are out of Set 2 range before scrolling
    if (currentScrollLeft >= oneSetWidth * 2) {
      container.scrollLeft = currentScrollLeft - oneSetWidth
      currentScrollLeft = container.scrollLeft
    } else if (currentScrollLeft < oneSetWidth) {
      container.scrollLeft = currentScrollLeft + oneSetWidth
      currentScrollLeft = container.scrollLeft
    }

    // 2. Find the child index closest to the current scroll position
    let activeIdx = 0
    let closestDiff = Infinity
    const containerOffsetLeft = container.offsetLeft

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement
      const targetPos = child.offsetLeft - containerOffsetLeft
      const offset = window.innerWidth >= 768 ? 80 : (window.innerWidth >= 640 ? 32 : 16)
      const diff = Math.abs(targetPos - offset - currentScrollLeft)
      
      if (diff < closestDiff) {
        closestDiff = diff
        activeIdx = i
      }
    }

    // 3. Scroll to the next or previous child index
    const targetIdx = direction === "left" ? activeIdx - 1 : activeIdx + 1
    if (targetIdx >= 0 && targetIdx < children.length) {
      isProgrammaticScroll.current = true
      
      const targetElement = children[targetIdx] as HTMLElement
      const targetOffsetLeft = targetElement.offsetLeft
      const offset = window.innerWidth >= 768 ? 80 : (window.innerWidth >= 640 ? 32 : 16)
      const scrollPos = targetOffsetLeft - containerOffsetLeft
      
      container.scrollTo({
        left: scrollPos - offset,
        behavior: "smooth"
      })

      // Update current index mapped to [0, 3]
      setCurrentIndex(targetIdx % impactImages.length)
      
      setTimeout(() => {
        isProgrammaticScroll.current = false
      }, 600)
    }
  }

  const handlePrev = () => {
    scroll("left")
  }

  const handleNext = () => {
    scroll("right")
  }

  const handleDotClick = (index: number) => {
    const container = scrollRef.current
    if (!container) return

    const children = container.children
    if (children.length < 12) return

    const elem0 = children[0] as HTMLElement
    const elem4 = children[4] as HTMLElement
    const oneSetWidth = elem4.offsetLeft - elem0.offsetLeft

    let currentScrollLeft = container.scrollLeft

    // Warp instantly if out of Set 2 range
    if (currentScrollLeft >= oneSetWidth * 2) {
      container.scrollLeft = currentScrollLeft - oneSetWidth
      currentScrollLeft = container.scrollLeft
    } else if (currentScrollLeft < oneSetWidth) {
      container.scrollLeft = currentScrollLeft + oneSetWidth
      currentScrollLeft = container.scrollLeft
    }

    isProgrammaticScroll.current = true
    const targetElement = children[index + 4] as HTMLElement
    const containerOffsetLeft = container.offsetLeft
    const targetOffsetLeft = targetElement.offsetLeft
    const scrollPos = targetOffsetLeft - containerOffsetLeft
    const offset = window.innerWidth >= 768 ? 80 : (window.innerWidth >= 640 ? 32 : 16)

    container.scrollTo({
      left: scrollPos - offset,
      behavior: "smooth"
    })

    setCurrentIndex(index)

    setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 600)
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
    
    const mappedIdx = activeIdx % impactImages.length
    if (mappedIdx !== currentIndex) {
      setCurrentIndex(mappedIdx)
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

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // 1. Initialize scroll to the middle set (Set 2)
    const initScroll = () => {
      const children = scrollContainer.children
      if (children.length >= 12) {
        const elem0 = children[0] as HTMLElement
        const elem4 = children[4] as HTMLElement
        scrollContainer.scrollLeft = elem4.offsetLeft - elem0.offsetLeft
      } else if (scrollContainer.scrollWidth > 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3
      }
    }

    const timer = setTimeout(initScroll, 50)

    // 2. Debounced scroll normalization to wrap position seamlessly when scrolling stops
    let scrollTimeout: NodeJS.Timeout
    const handleInfiniteScroll = () => {
      if (isProgrammaticScroll.current) return
      if (scrollTimeout) clearTimeout(scrollTimeout)
      
      scrollTimeout = setTimeout(() => {
        const { scrollLeft } = scrollContainer
        const children = scrollContainer.children
        if (children.length < 12) return

        const elem0 = children[0] as HTMLElement
        const elem4 = children[4] as HTMLElement
        const oneSetWidth = elem4.offsetLeft - elem0.offsetLeft

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

    scrollContainer.addEventListener("scroll", handleInfiniteScroll)

    return () => {
      clearTimeout(timer)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollContainer.removeEventListener("scroll", handleInfiniteScroll)
    }
  }, [])

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
          className="mt-10 md:mt-20 flex gap-4 md:gap-[32px] overflow-x-auto pb-4 px-4 sm:px-8 md:px-[80px] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Render first set (clone) */}
          {impactImages.map((img, idx) => (
            <div 
              key={`set-1-${idx}`} 
              className={`h-[200px] sm:h-[280px] md:h-[391px] ${img.widthClass} rounded-[8px] overflow-hidden shrink-0 snap-start transition-opacity duration-300 ${
                idx === currentIndex ? "opacity-100" : "opacity-70"
              }`}
            >
              <img src={img.src} alt={img.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
          {/* Render second set (original) */}
          {impactImages.map((img, idx) => (
            <div 
              key={`set-2-${idx}`} 
              className={`h-[200px] sm:h-[280px] md:h-[391px] ${img.widthClass} rounded-[8px] overflow-hidden shrink-0 snap-start transition-opacity duration-300 ${
                idx === currentIndex ? "opacity-100" : "opacity-70"
              }`}
            >
              <img src={img.src} alt={img.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
          {/* Render third set (clone) */}
          {impactImages.map((img, idx) => (
            <div 
              key={`set-3-${idx}`} 
              className={`h-[200px] sm:h-[280px] md:h-[391px] ${img.widthClass} rounded-[8px] overflow-hidden shrink-0 snap-start transition-opacity duration-300 ${
                idx === currentIndex ? "opacity-100" : "opacity-70"
              }`}
            >
              <img src={img.src} alt={img.alt} className="size-full object-cover select-none pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Navigation Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {impactImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
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
