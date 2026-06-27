"use client"

import React, { useState } from "react"
import { Clock, Heart, MapPin } from "lucide-react"

const cardsData = [
  {
    category: "Build community-led solutions for climate and digital challenges.",
    description: "Fund initiatives co-designed with residents to meet their unique needs, from digital literacy workshops to disaster preparedness planning.",
    location: "Community Center",
    time: "8:00 am - 5:00 pm",
    image: "/assets/sections/donate/1.jpeg"
  },
  {
    category: "Support tech-powered innovation that's changing lives.",
    description: "Help launch tools and programs that use technology to improve access, connectivity, and climate readiness in vulnerable regions.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    image: "/assets/sections/donate/2.jpg"
  },
  {
    category: "Drive advocacy for policies that create lasting change.",
    description: "Strengthen our voice in shaping policies that prioritize equity, resilience, and digital inclusion at the local and national level.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    image: "/assets/sections/donate/3.jpg"
  },
  {
    category: "Create communities of changemakers and futurists.",
    description: "Support the next generation of community leaders through mentorship, storytelling, and training in digital and environmental justice.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    image: "/assets/sections/impact/policy/1.jpg"
  }
]

export default function DonationImpact() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-16 md:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px] flex flex-col gap-8 md:gap-[59px]">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-[32px] items-start w-full">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px] flex items-center justify-center">
            <span className="text-[11px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
              Our RESEARCH
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-[8px] items-start w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1c3530] leading-tight">
              Here&apos;s What Your Donation Can Do:
            </h2>
            <p className="text-base sm:text-lg text-[#5c7a72] max-w-[1040px] leading-relaxed">
              Your contribution directly fuels action—from community tech access and emergency response training to youth programs and climate justice advocacy.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[42px] items-start w-full">
          {/* Left Cards Column */}
          <div className="flex flex-col gap-[16px] w-full lg:col-span-7">
            {cardsData.map((card, idx) => {
              const isActive = activeIndex === idx
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group border border-[#dcfcc0] p-[25px] rounded-[8px] flex gap-[24px] items-start w-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#2d584a] text-[#f8f8f2] shadow-lg"
                      : "bg-white text-[#144134] hover:bg-[#2d584a] hover:text-[#f8f8f2]"
                  }`}
                >
                  {/* Icon Column */}
                  <div className="size-[22px] shrink-0 mt-0.5 flex items-center justify-center">
                    <Heart className={`size-5 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#2d584a] group-hover:text-white"
                    }`} />
                  </div>

                  {/* Text Content Column */}
                  <div className="flex flex-col gap-[4px] w-full">
                    <h4
                      className={`text-[12px] font-bold tracking-[0.6px] uppercase leading-[16px] transition-colors duration-300 ${
                        isActive ? "text-[#fdf9ed]/70" : "text-[#4b6637] group-hover:text-[#fdf9ed]/70"
                      }`}
                    >
                      {card.category}
                    </h4>
                    <p className={`text-[16px] leading-[24px] font-normal transition-colors duration-300 ${
                      isActive ? "text-[#f8f8f2]" : "text-[#144134] group-hover:text-[#f8f8f2]"
                    }`}>
                      {card.description}
                    </p>

                    {/* Details Sub-row */}
                    <div className="flex flex-wrap gap-[16px] items-center pt-[3.5px] w-full">
                      <div className="flex gap-[4px] items-center shrink-0">
                        <MapPin size={14} className={`transition-colors duration-300 ${
                          isActive ? "text-[#f8f8f2]/70" : "text-[#8fa39d] group-hover:text-[#f8f8f2]/70"
                        }`} />
                        <span className={`text-[14px] whitespace-nowrap leading-[20px] transition-colors duration-300 ${
                          isActive ? "text-[#f8f8f2]/70" : "text-[#8fa39d] group-hover:text-[#f8f8f2]/70"
                        }`}>
                          {card.location}
                        </span>
                      </div>
                      <div className="flex gap-[4px] items-center shrink-0">
                        <Clock size={14} className={`transition-colors duration-300 ${
                          isActive ? "text-[#f8f8f2]/70" : "text-[#8fa39d] group-hover:text-[#f8f8f2]/70"
                        }`} />
                        <span className={`text-[14px] whitespace-nowrap leading-[20px] transition-colors duration-300 ${
                          isActive ? "text-[#f8f8f2]/70" : "text-[#8fa39d] group-hover:text-[#f8f8f2]/70"
                        }`}>
                          {card.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Showcase Image Column */}
          <div className="flex flex-col gap-[24px] items-center w-full lg:col-span-5 justify-between">
            <div className="w-full aspect-[737/627] rounded-[16px] overflow-hidden border border-[#dcfcc0] shadow-[0px_4px_2px_rgba(56,56,56,0.13)] relative bg-[#d6cfc0]">
              <img decoding="async" loading="lazy" src={cardsData[activeIndex].image} alt={cardsData[activeIndex].category} className="size-full object-cover transition-all duration-500 ease-in-out" />
            </div>
            {/* Pagination dots corresponding to card states */}
            <div className="flex gap-[6px] items-center">
              {cardsData.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`cursor-pointer transition-all duration-300 rounded-full ${
                    activeIndex === dotIdx 
                      ? "size-[16px] bg-[#2d584a] border border-[#dcfcc0]" 
                      : "size-[13px] bg-[#d6cfc0] hover:bg-[#2d584a]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
