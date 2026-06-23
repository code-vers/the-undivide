"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Check, Play, Pause } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"

export default function VisionSection() {
  const [isInlinePlaying, setIsInlinePlaying] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isInlinePlaying && !isDialogOpen) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInlinePlaying, isDialogOpen])

  return (
    <section className="bg-[#f1ede1] py-12 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 md:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-[100px] items-center">
          {/* Collage Images — responsive height */}
          <div className="relative h-[360px] sm:h-[480px] md:h-[600px] lg:h-[752px]">
            {/* Main Top Left */}
            <div className="absolute top-0 left-0 w-[52%] lg:w-[50%] h-[52%] lg:h-[50%] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-20">
              <img src="/assets/sections/about/vision/1.jpg" alt="Work 1" className="size-full object-cover" />
            </div>

            {/* Top Right Tall */}
            <div className="absolute top-[5%] right-0 w-[42%] lg:w-[45%] h-[48%] lg:h-[48%] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-10">
              <img src="/assets/sections/about/vision/2.jpeg" alt="Work 2" className="size-full object-cover" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 backdrop-blur-md bg-white/90 border border-[#4b6637]/20 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2">
                <div className="size-2 sm:size-2.5 rounded-full bg-[#144134]" />
                <span className="text-[9px] sm:text-[11px] md:text-[14px] font-semibold text-[#144134]">Community-led</span>
              </div>
            </div>

            {/* Bottom Left Medium */}
            <div 
              onClick={() => setIsDialogOpen(true)}
              className="absolute bottom-0 left-0 w-[58%] lg:w-[55%] h-[40%] lg:h-[42%] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-30 group cursor-pointer"
            >
              <video 
                ref={videoRef}
                playsInline 
                autoPlay 
                muted 
                loop
                className="w-full h-full object-cover" 
                src="/assets/sections/about/vision/Monica-reduced.mp4" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                {/* Large Center Play Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsDialogOpen(true)
                  }}
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#2d584a]/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-40 border border-white/10"
                  aria-label="Play video in modal"
                >
                  <Play className="fill-white translate-x-0.5 size-4 sm:size-6 lg:size-7" />
                </button>

                {/* Small Inline Play/Pause Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsInlinePlaying(!isInlinePlaying)
                  }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 active:scale-95 border border-white/10"
                  aria-label={isInlinePlaying ? "Pause inline preview" : "Play inline preview"}
                >
                  {isInlinePlaying ? <Pause className="fill-white size-3 sm:size-3.5" /> : <Play className="fill-white translate-x-[1px] size-3 sm:size-3.5" />}
                </button>
              </div>
            </div>

            {/* Bottom Right Square */}
            <div className="absolute bottom-0 right-0 w-[38%] lg:w-[40%] h-[38%] lg:h-[40%] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-20">
              <img src="/assets/sections/about/vision/3.JPG" alt="Work 3" className="size-full object-cover" />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[4%] left-[4%] sm:top-[8%] sm:left-[8%] z-40 bg-white border border-[#4b6637] rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg flex items-center gap-1.5 sm:gap-2">
              <div className="size-2 sm:size-2.5 rounded-full bg-[#4b6637]" />
              <span className="text-[8px] sm:text-[10px] md:text-[13px] font-semibold text-[#4b6637] tracking-[1px] sm:tracking-[2px] md:tracking-[3.5px] uppercase">
                Digital Equity + Climate
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-4 py-1">
              <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
                OUR VISION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] xl:text-[64px] font-bold leading-tight xl:leading-[1.1] text-[#1c3530]">
              Building a Future Where Every Community Has the Tools to Thrive.
            </h2>

            <p className="text-base md:text-lg lg:text-[20px] xl:text-[24px] leading-relaxed text-[#3d5e57]">
              The Undivide Project works to close the gap between digital access, climate information, and community support. Our vision is a future where communities can access the technology, education, research, and advocacy they need to prepare, respond, and build lasting resilience.
            </p>

            <ul className="space-y-3 md:space-y-4 py-2">
              {["Community-first solutions", "Accessible tools and education", "Research-backed advocacy"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg lg:text-[20px] xl:text-[24px] text-[#1c3530]">
                  <Check className="size-5 lg:size-7 xl:size-8 p-1 lg:p-1.5 bg-[#2d584a] rounded-full text-white" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href='/impact'>
              <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[48px] md:h-[54px] px-[24px] md:px-[28px] rounded-full text-[15px] md:text-[16px] font-semibold gap-2">
                Explore Our Work
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-[900px] p-0 overflow-hidden bg-black/95 border border-[#dcfcc0]/20 rounded-[20px] md:rounded-[32px] shadow-[0px_24px_60px_0px_rgba(28,53,48,0.4)]">
          <DialogTitle className="sr-only">Our Vision Video</DialogTitle>
          <DialogDescription className="sr-only">Video detailing the vision of The Undivide Project.</DialogDescription>
          <div className="relative w-full aspect-video flex items-center justify-center bg-black">
            <video
              src="/assets/sections/about/vision/Monica.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
