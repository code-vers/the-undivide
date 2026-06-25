"use client"

import { useState, useEffect, useRef } from "react"

function AnimatedCounter({ value }: { value: string }) {
  const [currentVal, setCurrentVal] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ""

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    const duration = 1500 // milliseconds
    const startTime = performance.now()

    let animationFrameId: number

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress)
      
      const current = Math.floor(easeProgress * target)
      setCurrentVal(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter)
      } else {
        setCurrentVal(target)
      }
    }

    animationFrameId = requestAnimationFrame(updateCounter)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [hasAnimated, target])

  return (
    <span ref={elementRef}>
      {currentVal}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const stats = [
    { label: "Community Engagement Rate", value: "95%", hasBorder: true },
    { label: "Regions Reached", value: "120+", hasBorder: true },
    { label: "Active State Programs", value: "10", hasBorder: true },
    { label: "People Impacted", value: "50K+", hasBorder: false },
  ]

  return (
    <section className="bg-[#2d584a] py-10 md:py-[64px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center py-6 px-4 ${stat.hasBorder ? "lg:border-r border-[#3d5e57]" : ""}`}
            >
              <p className="text-[36px] sm:text-[44px] md:text-[56px] font-extrabold text-[#f8f8f2] leading-none">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] text-white/60 text-center mt-2 md:mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
