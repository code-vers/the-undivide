"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  { src: "https://www.figma.com/api/mcp/asset/221179b3-9ff5-47db-97d5-a5d4038db3ab", width: 521, height: 391, overlay: "bg-[rgba(135,135,135,0.44)]" },
  { src: "https://www.figma.com/api/mcp/asset/6c58bd58-fb3b-44f2-ae74-994931776bb2", width: 293, height: 391, overlay: "bg-[rgba(200,200,200,0.4)]" },
  { src: "https://www.figma.com/api/mcp/asset/49bf84db-6716-4d0f-8937-197043bc5066", width: 743, height: 495, isMain: true },
  { src: "https://www.figma.com/api/mcp/asset/f9a98320-547c-46d8-a7e8-2ea46b72d8f1", width: 303, height: 405, overlay: "bg-[rgba(164,164,164,0.51)]" },
  { src: "https://www.figma.com/api/mcp/asset/a24dea29-251f-4923-98f1-beeb7f19c2a7", width: 293, height: 391 },
  { src: "https://www.figma.com/api/mcp/asset/428b99dd-7a5c-460f-9018-71aba2b14def", width: 521, height: 391 },
  { src: "https://www.figma.com/api/mcp/asset/a9920496-6944-4ade-bd4e-dd835225d0ab", width: 293, height: 391 },
]

export default function GevGallery() {
  // Triple the images to allow seamless scrolling in both directions
  const displayImages = [...images, ...images, ...images]
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  // Handle seamless infinite scroll jumping
  const handleInfiniteScroll = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    const singleSetWidth = scrollWidth / 3

    // If we've scrolled into the third set, jump back to the second set (silent jump)
    if (scrollLeft >= singleSetWidth * 2) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = scrollLeft - singleSetWidth
      container.style.scrollBehavior = 'smooth'
    } 
    // If we've scrolled into the first set, jump forward to the second set (silent jump)
    else if (scrollLeft <= singleSetWidth - clientWidth) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = scrollLeft + singleSetWidth
      container.style.scrollBehavior = 'smooth'
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isScrolling) return
    
    setIsScrolling(true)
    const container = scrollContainerRef.current
    const scrollAmount = direction === 'left' ? -container.offsetWidth / 2 : container.offsetWidth / 2
    
    container.style.scrollBehavior = 'smooth'
    container.scrollBy({ left: scrollAmount })
    
    // Reset isScrolling after animation roughly finishes
    setTimeout(() => setIsScrolling(false), 500)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Initial position: start at the beginning of the middle set
    const singleSetWidth = container.scrollWidth / 3
    container.scrollLeft = singleSetWidth

    const onScroll = () => {
      // We use a small delay or requestAnimationFrame to handle the "jump" smoothly
      // but standard scroll event is usually fine for this technique
      handleInfiniteScroll()
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [handleInfiniteScroll])

  return (
    <section className="bg-white pt-16 md:pt-[120px] pb-10 md:pb-[42px] overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-5 items-end overflow-x-auto no-scrollbar scroll-smooth px-4 md:px-0"
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className={cn(
              "relative rounded-lg overflow-hidden shrink-0 transition-transform duration-500 hover:scale-105",
              img.isMain ? "z-10" : "z-0"
            )}
            style={{ 
              width: img.width, 
              height: img.height,
              maxWidth: '80vw'
            }}
          >
            <img
              src={img.src}
              alt={`Gallery image ${idx + 1}`}
              className="size-full object-cover pointer-events-none"
            />
            {img.overlay && <div className={`absolute inset-0 ${img.overlay}`} />}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="mt-20 flex justify-center gap-[59px] text-black">
        <button 
          onClick={() => scroll('left')}
          className="size-10 rounded-full border border-[#3d5e57] flex items-center justify-center hover:bg-[#3d5e57] hover:text-white transition-colors group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5 transition-transform group-active:-translate-x-1 " />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="size-10 rounded-full border border-[#3d5e57] flex items-center justify-center hover:bg-[#3d5e57] hover:text-white transition-colors group"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5 transition-transform group-active:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
