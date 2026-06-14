"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  {
    id: "01",
    title: "The Problem",
    description: "Climate change and the digital divide hit hardest where communities are struggling. That’s not fair, and it needs to change.",
    image: "https://www.figma.com/api/mcp/asset/3b3cf235-7463-45a4-a4cd-179cc2569fbc",
    points: [
      "Limited access to essential digital tools and resources",
      "Disproportionate climate impacts on vulnerable communities",
      "Lack of integrated data for resilient planning"
    ]
  },
  {
    id: "02",
    title: "Our Solution",
    description: "We bring together innovation, tech, and real partnerships to create solutions that work for everyone—not just a select few.",
    image: "https://www.figma.com/api/mcp/asset/b51f3581-5e9b-4787-b135-ae10bd97fc8a",
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
    image: "https://www.figma.com/api/mcp/asset/47e90de4-6ba5-4a1f-b3ba-a5e8ca75e1b3",
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
      <div className="mx-auto max-w-[1750px] px-6 md:px-[80px]">
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
        <div className="space-y-6">
          {programs.map((program) => (
            <div 
              key={program.id}
              onMouseEnter={() => setActiveId(program.id)}
              onClick={() => setActiveId(program.id)}
              className={cn(
                "transition-all duration-500 ease-in-out rounded-[16px] overflow-hidden cursor-pointer",
                activeId === program.id 
                  ? "bg-[#2d584a] text-white" 
                  : "bg-[#f1f2f3] border border-[#d6cfc0] text-[#1c3530]"
              )}
            >
              <div className="p-[32px] flex flex-col lg:flex-row gap-8 relative">
                <div className="flex-1 flex gap-[32px] items-start">
                  <span className={cn(
                    "text-[12px] font-medium tracking-[1.2px] mt-1",
                    activeId === program.id ? "text-white/40" : "text-[#8fa39d]"
                  )}>
                    {program.id}
                  </span>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[24px] font-semibold">{program.title}</h3>
                      <p className={cn(
                        "text-[16px] mt-2 max-w-[879px] transition-all duration-300",
                        activeId === program.id ? "text-white/70" : "text-[#5c7a72]"
                      )}>
                        {program.description}
                      </p>
                    </div>
                    
                    {activeId === program.id && (
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
                    )}
                  </div>
                </div>
                
                {activeId === program.id && (
                  <div className="lg:w-[442px] aspect-[532/388] rounded-[12px] overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="size-full object-cover"
                    />
                  </div>
                )}

                <div className={cn(
                  "absolute top-8 right-8 size-10 rounded-full flex items-center justify-center transition-all duration-300",
                  activeId === program.id ? "bg-white/10 text-white" : "bg-[#d6cfc0]/20 text-[#1c3530]"
                )}>
                   <Plus size={24} className={cn("transition-transform duration-300", activeId === program.id && "rotate-45")} />
                </div>
              </div>
            </div>
          ))}
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
