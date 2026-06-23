"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const carouselImages = [
  "/assets/sections/home/intro-carousel/1.jpg",
  "/assets/sections/home/intro-carousel/2.jpg",
  "/assets/sections/home/intro-carousel/3.jpeg"
]

const words = [
  "We're", "here", "to", "connect", "people", "with", "the", "resources", "and", "technology",
  "they", "need", "to", "thrive", "in", "a", "changing", "world.", "By", "tackling",
  "the", "climate", "crisis", "and", "the", "digital", "divide", "together,", "we're", "making",
  "sure", "anyone", "can", "thrive", "in", "the", "economies", "to", "come."
]

export default function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Image Carousel Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Scroll Progress effect
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return
      const rect = textRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const start = viewportHeight * 0.85
      const end = viewportHeight * 0.25
      
      const currentPos = rect.top
      const progress = Math.min(Math.max((start - currentPos) / (start - end), 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-6 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
          {/* Left Side */}
          <div className="space-y-8 lg:space-y-[136px]">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
              <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
                INTRODUCTION
              </span>
            </div>

            <div className="flex flex-col gap-4 md:gap-[24px]">
              {/* Carousel Image Container */}
              <div className="w-full aspect-[737/429] bg-[#d6cfc0] rounded-[16px] overflow-hidden relative shadow-sm">
                {carouselImages.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Intro Slide ${index + 1}`}
                    className={cn(
                      "absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out",
                      index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  />
                ))}
              </div>

              {/* Carousel Navigation Indicator Dots */}
              <div className="flex gap-[8px] justify-start items-center">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "h-[6px] rounded-full transition-all duration-300 cursor-pointer",
                      index === currentImageIndex 
                        ? "bg-[#2d584a] w-[24px]" 
                        : "bg-[#d6cfc0] w-[6px] hover:bg-[#8fa39d]"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between gap-10">
            {/* Scroll color-highlight text */}
            <h2 ref={textRef} className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium leading-tight select-none">
              {words.map((word, idx) => {
                const wordProgress = scrollProgress * 1.25
                const threshold = idx / words.length
                const isActive = wordProgress > threshold

                return (
                  <span
                    key={idx}
                    className="transition-colors duration-500 ease-out"
                    style={{
                      color: isActive ? "#1c3530" : "#8fa39d"
                    }}
                  >
                    {word}{" "}
                  </span>
                )
              })}
            </h2>

            <div className="border-t border-[#d6cfc0] pt-8 md:pt-[65px]">
              <div className="flex gap-6 md:gap-10 lg:gap-[100px]">
                {/* Stat 1 */}
                <div className="space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">8+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Years of Meaningful Impact</p>
                </div>

                {/* Stat 2 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">74+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Successful Projects</p>
                </div>

                {/* Stat 3 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">33+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Trusted Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
