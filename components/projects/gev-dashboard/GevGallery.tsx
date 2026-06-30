"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

const images = [
  { src: "/assets/sections/gev-climate/gallery/1.JPG", width: 521, height: 391, overlay: "bg-[rgba(135,135,135,0.44)]" },
  { src: "/assets/sections/gev-climate/gallery/2.JPG", width: 293, height: 391, overlay: "bg-[rgba(200,200,200,0.4)]" },
  { src: "/assets/sections/gev-climate/gallery/3.JPG", width: 743, height: 495, isMain: true },
  { src: "/assets/sections/gev-climate/gallery/4.JPG", width: 303, height: 405, overlay: "bg-[rgba(164,164,164,0.51)]" },
  { src: "/assets/sections/gev-climate/gallery/5.JPG", width: 293, height: 391 },
  { src: "/assets/sections/gev-climate/gallery/6.JPG", width: 521, height: 391 },
  { src: "/assets/sections/gev-climate/gallery/7.JPG", width: 293, height: 391 },
]

export default function GevGallery() {
  // Triple the images to allow seamless scrolling in both directions
  const displayImages = [...images, ...images, ...images]
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Handle seamless infinite scroll jumping
  const handleInfiniteScroll = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft } = container
    const children = container.children
    if (children.length < 14) return

    const elem0 = children[0] as HTMLElement
    const elem7 = children[7] as HTMLElement
    const singleSetWidth = elem7.offsetLeft - elem0.offsetLeft

    // If we've scrolled into the third set, jump back to the second set (silent jump)
    if (scrollLeft >= singleSetWidth * 2) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = scrollLeft - singleSetWidth
    } 
    // If we've scrolled into the first set, jump forward to the second set (silent jump)
    else if (scrollLeft < singleSetWidth) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = scrollLeft + singleSetWidth
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container || isScrolling) return
    
    setIsScrolling(true)
    const children = container.children
    if (children.length < 14) {
      setIsScrolling(false)
      return
    }

    const elem0 = children[0] as HTMLElement
    const elem7 = children[7] as HTMLElement
    const singleSetWidth = elem7.offsetLeft - elem0.offsetLeft

    let currentScrollLeft = container.scrollLeft

    // Warp instantly if we are out of Set 2 range before scrolling
    if (currentScrollLeft >= singleSetWidth * 2) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = currentScrollLeft - singleSetWidth
      currentScrollLeft = container.scrollLeft
    } else if (currentScrollLeft < singleSetWidth) {
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = currentScrollLeft + singleSetWidth
      currentScrollLeft = container.scrollLeft
    }

    const scrollAmount = direction === 'left' ? -container.offsetWidth / 2 : container.offsetWidth / 2
    const scrollTo = currentScrollLeft + scrollAmount
    
    container.style.scrollBehavior = 'smooth'
    container.scrollTo({ left: scrollTo })
    
    // Reset isScrolling after animation roughly finishes
    setTimeout(() => setIsScrolling(false), 500)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Initial position: start at the beginning of the middle set
    const initScroll = () => {
      const children = container.children
      if (children.length >= 14) {
        const elem0 = children[0] as HTMLElement
        const elem7 = children[7] as HTMLElement
        container.scrollLeft = elem7.offsetLeft - elem0.offsetLeft
      } else if (container.scrollWidth > 0) {
        container.scrollLeft = container.scrollWidth / 3
      }
    }

    const timer = setTimeout(initScroll, 50)

    // Debounced scroll normalization to wrap position seamlessly when scrolling stops
    let scrollTimeout: NodeJS.Timeout
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        handleInfiniteScroll()
      }, 150)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      container.removeEventListener('scroll', onScroll)
    }
  }, [handleInfiniteScroll])

  return (
    <section className="bg-white pt-16 md:pt-[120px] pb-10 md:pb-[42px] overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-5 items-end overflow-x-auto no-scrollbar px-4 md:px-0"
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img.src)}
            className={cn(
              "relative rounded-lg overflow-hidden shrink-0 transition-transform duration-500 hover:scale-105 cursor-pointer h-[220px] sm:h-[300px] md:h-[391px]",
              img.isMain ? "z-10" : "z-0"
            )}
            style={{ 
              aspectRatio: `${img.width} / ${img.height}`,
              maxWidth: '80vw'
            }}
          >
            <Image src={img.src} alt={`Gallery image ${idx + 1}`} fill className="object-cover pointer-events-none" />
            {img.overlay && <div className={`absolute inset-0 ${img.overlay} pointer-events-none`} />}
          </div>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] md:max-w-[1000px] p-0 overflow-hidden bg-black/95 border border-[#dcfcc0]/20 rounded-[12px] md:rounded-[16px] shadow-2xl flex flex-col items-center justify-center">
          <DialogTitle className="sr-only">View Image</DialogTitle>
          <DialogDescription className="sr-only">Detailed view of the selected gallery image</DialogDescription>
          {selectedImage && (
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] flex items-center justify-center p-4">
              <Image src={selectedImage} alt="Enlarged gallery view" fill className="object-contain rounded-sm" />
            </div>
          )}
        </DialogContent>
      </Dialog>

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
