"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "01",
    title: "GEV Climate Risk Dashboard",
    description: "The GEV Climate Risk Dashboard provides critical insights into climate-related risks, helping communities and policymakers make informed decisions to build a more resilient future.",
    image: "https://www.figma.com/api/mcp/asset/006e6b7b-f206-4315-8e13-968c1e852422",
    href: "#"
  },
  {
    id: "02",
    title: "Ten States Project",
    description: "The Ten States Project targets states hardest hit by climate injustice and digital inequality, using storytelling and a research hub to help communities build sustainable, equitable solutions.",
    image: "https://www.figma.com/api/mcp/asset/d0c6a58a-a68f-46ec-9d3d-49aecfc51d13",
    href: "#"
  },
   {
    id: "03",
    title: "AI Resilience",
    description: "The AI Resilience project (AI Law Compass) explores the intersection of artificial intelligence, policy, and legal frameworks to guide legal practitioners and researchers through AI regulation.",
    image: "https://www.figma.com/api/mcp/asset/d0c6a58a-a68f-46ec-9d3d-49aecfc51d13",
    href: "/projects/ai-resilience"
  },
]

export default function ExploreProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1) // Default to Ten States Project

  return (
    <section className="bg-[#f6f9f9] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1750px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
              Our Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1c3530] text-center">
            Explore Our Projects
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#5c7a72] text-center max-w-[1014px] mt-2 md:mt-4">
            Driving change through innovative solutions and community-focused initiatives. Explore how we&apos;re making an impact.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4 md:space-y-6 pt-6 md:pt-16">
          {projects.map((project, idx) => {
            const isActive = hoveredIndex === idx

            if (isActive) {
              const cardContent = (
                <div className="p-4 md:p-[32px] pt-4 md:pt-[32px] flex flex-col lg:flex-row gap-6 md:gap-8 relative items-start">
                  <div className="w-full lg:max-w-[55%] xl:max-w-[60%] flex gap-4 md:gap-[32px] items-start">
                    <span className="text-[11px] md:text-[12px] font-medium tracking-[1.2px] text-white/40 mt-1 shrink-0">
                      {project.id}
                    </span>
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="text-[18px] md:text-[22px] font-semibold text-[#f8f8f2] flex items-center gap-2">
                          {project.title}
                          {project.href !== "#" && (
                            <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-normal tracking-wider uppercase">
                              Explore
                            </span>
                          )}
                        </h3>
                        <p className="text-[13px] md:text-[14px] text-white/70 mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inline Image Container for Mobile */}
                  <div className="w-full aspect-[532/388] rounded-[12px] overflow-hidden lg:hidden mt-4 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Floating Image Container for Desktop */}
                  <div className="hidden lg:block absolute right-4 xl:right-[32px] -top-[40px] xl:-top-[60px] w-[320px] xl:w-[442px] aspect-[532/388] rounded-[12px] overflow-hidden shadow-[0px_20px_40px_rgba(28,53,48,0.25)] z-20 transition-all duration-500 group-hover:-translate-y-2 border border-[#dcfcc0]/20 pointer-events-none">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover"
                    />
                  </div>

                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setHoveredIndex(-1);
                    }}
                    className="absolute top-4 md:top-8 right-4 md:right-8 size-8 md:size-10 bg-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-colors z-30"
                  >
                    <img
                      src="https://www.figma.com/api/mcp/asset/84b8371e-4119-4866-9e88-de50189ba59b"
                      alt="Close"
                      className="size-8 md:size-10"
                    />
                  </div>
                </div>
              )

              return (
                <div
                  key={idx}
                  className="group bg-[#2d584a] rounded-[16px] transition-all duration-300 shadow-lg relative"
                  onMouseEnter={() => setHoveredIndex(idx)}
                >
                  {project.href !== "#" ? (
                    <Link href={project.href} className="block size-full text-left">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              )
            } else {
              return (
                <div
                  key={idx}
                  className="bg-[#f1f2f3] border border-[#d6cfc0] rounded-[16px] p-4 md:p-[32px] transition-all duration-300 cursor-pointer hover:bg-[#e8eaeb]"
                  onMouseEnter={() => setHoveredIndex(idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-4 md:gap-[32px] items-start flex-1 min-w-0">
                      <span className="text-[11px] md:text-[12px] font-medium tracking-[1.2px] text-[#8fa39d] mt-1 shrink-0">
                        {project.id}
                      </span>
                      <div className="space-y-1 md:space-y-2 min-w-0">
                        <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1c3530]">
                          {project.title}
                        </h3>
                        <p className="text-[13px] md:text-[14px] text-[#5c7a72] line-clamp-2 md:line-clamp-none">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="size-8 md:size-10 bg-[#d6cfc0]/20 rounded-full flex items-center justify-center text-[#1c3530] shrink-0 hover:bg-[#d6cfc0]/40 transition-colors">
                      <img
                        src="https://www.figma.com/api/mcp/asset/3ac354b3-ade6-4171-8c18-fbb8a8381345"
                        alt="Plus"
                        className="size-8 md:size-10"
                      />
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
