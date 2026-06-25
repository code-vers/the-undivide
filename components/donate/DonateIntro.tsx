"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChartNoAxesCombined, ChevronLeft, ChevronRight, Radar } from "lucide-react"

const introImages = [
  // "/assets/sections/donate/intro/1.JPG",
  "/assets/sections/donate/intro/2.JPG",
  "/assets/sections/donate/intro/3.jpg",
]

export default function DonateIntro() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + introImages.length) % introImages.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % introImages.length)
  }

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered])

  return (
    <section className="bg-[#fdf9ed] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px] xl:gap-[80px] 2xl:gap-[181px] items-center">
          {/* Left Side: Carousel and Label */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px] w-fit">
              <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
                INTRODUCTION
              </span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div 
                className="w-full aspect-[770/403] rounded-[16px] overflow-hidden shadow-xl relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Carousel Container */}
                <div 
                  className="flex size-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {introImages.map((src, index) => (
                    <div key={index} className="w-full h-full shrink-0 relative">
                      <img
                        src={src}
                        alt={`Intro image ${index + 1}`}
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Left Navigation Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/30 hover:bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#1c3530] opacity-0 group-hover:opacity-100 transition-all active:scale-95 cursor-pointer z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/30 hover:bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#1c3530] opacity-0 group-hover:opacity-100 transition-all active:scale-95 cursor-pointer z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Navigation Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/10 backdrop-blur-[2px] rounded-full px-3 py-1.5">
                  {introImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`size-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-white w-6" 
                          : "bg-white/50 hover:bg-white/85"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* <div className="h-[16px] w-[54px]">
                <img src="https://www.figma.com/api/mcp/asset/3dabd038-3b2d-4203-8a52-3be065ac7444" alt="Divider" className="size-full" />
              </div> */}
            </div>
          </div>

          {/* Right Side: Content and features */}
          <div className="flex flex-col justify-end space-y-5 md:space-y-[22px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight text-[#1c3530] tracking-[-0.32px]">
              Because Communities Should Not Face Climate Challenges Without Access to Tools and Information.
            </h2>

            <p className="text-base md:text-[18px] text-[#3d5e57] leading-[28.8px]">
              The intersection of systemic underinvestment, lack of internet access, and increasing environmental hazards leaves vulnerable populations exposed. We exist to bridge that gap.
            </p>

            <div className="space-y-5 md:space-y-6 pt-2">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="size-[28px] md:size-[32px] shrink-0 mt-1">
                  <Radar className="text-[#1c3530]"/>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[17px] md:text-[18px] font-semibold text-[#1c3530]">Empowering Local Leaders</h4>
                  <p className="text-[14px] md:text-[16px] text-[#3d5e57] leading-[24px]">
                    We don&apos;t dictate solutions; we provide the data frameworks for communities to build their own resilience strategies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="size-[28px] md:size-[34px] shrink-0 mt-1">
                  <ChartNoAxesCombined className="text-[#1c3530]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[17px] md:text-[18px] font-semibold text-[#1c3530]">Data-Driven Independence</h4>
                  <p className="text-[14px] md:text-[16px] text-[#3d5e57] leading-[24px]">
                    Our tools turn complex climate data into actionable insights, leveling the playing field against digital redlining.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-8">
              <Link href='/impact'>
                <Button variant="outline" className="!bg-transparent border-[#2d584a] text-[#2d584a] hover:!bg-[#2d584a] hover:!text-white h-[46px] md:h-[50px] px-[22px] md:px-[25px] rounded-[8px] text-[15px] md:text-[16px] transition-colors">
                  Explore Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
