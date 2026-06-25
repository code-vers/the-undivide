"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  {
    id: "01",
    title: "The Problem",
    description: "Climate change and the digital divide hit hardest where communities are struggling. That’s not fair, and it needs to change.",
    image: "https://www.theundivideproject.org/assets/digital-divide-map-BfyaqonR.png",
    points: [
      "Limited access to essential digital tools and resources",
      "Disproportionate climate impacts on vulnerable communities",
      "Lack of integrated data for resilient planning"
    ]
  },
  {
    id: "02",
    title: "Our Solution",
    description: "We bring together innovation, tech, and real partnerships to create solutions that work for everyone, not just a select few.",
    image: "https://www.theundivideproject.org/assets/monica-dmv-stand-BSsXTxyv.png",
    points: [
      "Community-driven technology solutions",
      "Public-private partnerships for digital equity",
      "Data-backed advocacy for climate resilience"
    ]
  },
  {
    id: "03",
    title: "Community Hub",
    description: "Creating physical and digital spaces where communities can access tools, education, and support for a resilient future.",
    image: "https://www.theundivideproject.org/assets/teamimage-CRSL7gX6.png",
    points: [
      "Localized climate resilience centers",
      "Digital literacy and skills training",
      "Sustainable technology infrastructure"
    ]
  }
]

export default function Programs() {
  const [activeId, setActiveId] = useState<string>("02")

  return (
    <section className="bg-[#f6f9f9] py-16 md:py-[120px]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[16px] font-medium text-[#1c3530] uppercase">
              PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#1c3530] text-center">
            We're Addressing Critical Issues
          </h2>
          <p className="text-[16px] text-[#5c7a72] text-center max-w-[540px]">
            Comprehensive initiatives addressing digital equity and climate justice across communities.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 pt-6 md:pt-16">
          {programs.map((program) => {
            const isActive = activeId === program.id
            
            if (isActive) {
              return (
                <div 
                  key={program.id}
                  className="group bg-[#2d584a] text-white rounded-[16px] transition-all duration-500 ease-in-out cursor-pointer relative shadow-lg"
                  onMouseEnter={() => setActiveId(program.id)}
                >
                  <div className="p-4 md:p-[32px] flex flex-col lg:flex-row gap-6 md:gap-8 relative items-start">
                    <div className="w-full lg:max-w-[55%] xl:max-w-[60%] flex gap-4 md:gap-[32px] items-start">
                      <span className="text-[12px] font-medium tracking-[1.2px] text-white/40 mt-1 shrink-0">
                        {program.id}
                      </span>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-[24px] font-semibold text-[#f8f8f2]">{program.title}</h3>
                          <p className="text-[16px] text-white/70 mt-2 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                        
                        <ul className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-500">
                          {program.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-white/80">
                              <div className="size-[15px] bg-[#d6cfc0] rounded-full flex items-center justify-center text-[#2d584a]">
                                <CheckIcon />
                              </div>
                              <span className="text-[14px]">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Inline Image Container for Mobile/Tablet */}
                    <div className="w-full aspect-[532/388] rounded-[12px] overflow-hidden lg:hidden mt-4 shrink-0">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="size-full object-cover"
                      />
                    </div>

                    {/* Floating Image Container for Desktop */}
                    <div className="hidden lg:block absolute right-4 xl:right-[32px] -top-[40px] xl:-top-[60px] w-[320px] xl:w-[442px] aspect-[532/388] rounded-[12px] overflow-hidden shadow-[0px_20px_40px_rgba(28,53,48,0.25)] z-20 transition-all duration-500 group-hover:-translate-y-2 border border-[#dcfcc0]/20 pointer-events-none">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="absolute top-4 md:top-8 right-4 md:right-8 size-8 md:size-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300">
                       <Plus size={24} className="rotate-45" />
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div 
                  key={program.id}
                  onMouseEnter={() => setActiveId(program.id)}
                  onClick={() => setActiveId(program.id)}
                  className="bg-[#f1f2f3] border border-[#ffffff] text-[#1c3530] rounded-[16px] transition-all duration-500 ease-in-out cursor-pointer hover:bg-[#e8eaeb]"
                >
                  <div className="p-4 md:p-[32px] flex items-center justify-between gap-4 relative">
                    <div className="flex gap-4 md:gap-[32px] items-start flex-1 min-w-0">
                      <span className="text-[12px] font-medium tracking-[1.2px] text-[#8fa39d] mt-1 shrink-0">
                        {program.id}
                      </span>
                      
                      <div className="space-y-2 min-w-0">
                        <h3 className="text-[24px] font-semibold">{program.title}</h3>
                        <p className="text-[16px] text-[#5c7a72] line-clamp-2 md:line-clamp-none">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    <div className="size-8 md:size-10 bg-[#d6cfc0]/20 rounded-full flex items-center justify-center text-[#1c3530] shrink-0 hover:bg-[#d6cfc0]/40 transition-colors">
                       <Plus size={24} />
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4L4 7L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
