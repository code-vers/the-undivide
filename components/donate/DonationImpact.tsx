import React from "react"

const imgContainer2 = "https://www.figma.com/api/mcp/asset/4fb07acc-6b7a-450f-90f8-be06ad05a272"
const imgGroup1 = "https://www.figma.com/api/mcp/asset/b6c4ccfb-40be-4e64-b431-c8d5fffa06b1" // Dark icon for white cards
const imgGroup2 = "https://www.figma.com/api/mcp/asset/b72598f0-8160-46fc-971b-efcccdbf41d5" // Light icon for green card
const imgContainer = "https://www.figma.com/api/mcp/asset/4d18a158-5e02-4122-bad5-9bec46079ed9" // Location icon
const imgContainer1 = "https://www.figma.com/api/mcp/asset/f736f6fb-4f3f-4b4a-ad49-fc64a061dd5f" // Clock icon

const cardsData = [
  {
    category: "Build community-led solutions for climate and digital challenges.",
    description: "Fund initiatives co-designed with residents to meet their unique needs, from digital literacy workshops to disaster preparedness planning.",
    location: "Community Center",
    time: "8:00 am - 5:00 pm",
    active: false
  },
  {
    category: "Support tech-powered innovation that's changing lives.",
    description: "Help launch tools and programs that use technology to improve access, connectivity, and climate readiness in vulnerable regions.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    active: true
  },
  {
    category: "Drive advocacy for policies that create lasting change.",
    description: "Strengthen our voice in shaping policies that prioritize equity, resilience, and digital inclusion at the local and national level.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    active: false
  },
  {
    category: "Create communities of changemakers and futurists.",
    description: "Support the next generation of community leaders through mentorship, storytelling, and training in digital and environmental justice.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    active: false
  }
]

export default function DonationImpact() {
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[42px] items-center justify-center w-full">
          {/* Left Cards Column */}
          <div className="flex flex-col gap-[16px] w-full lg:w-[935px] shrink-0">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                className={`border border-[#dcfcc0] p-[25px] rounded-[8px] flex gap-[24px] items-start w-full transition-all duration-300 ${
                  card.active
                    ? "bg-[#2d584a] text-[#f8f8f2] shadow-lg"
                    : "bg-white text-[#144134]"
                }`}
              >
                {/* Icon Column */}
                <div className="size-[22px] shrink-0 mt-0.5">
                  <img
                    src={card.active ? imgGroup2 : imgGroup1}
                    alt="Icon"
                    className="size-full object-contain"
                  />
                </div>

                {/* Text Content Column */}
                <div className="flex flex-col gap-[4px] w-full">
                  <h4
                    className={`text-[12px] font-bold tracking-[0.6px] uppercase leading-[16px] ${
                      card.active ? "text-[#fdf9ed]/70" : "text-[#4b6637]"
                    }`}
                  >
                    {card.category}
                  </h4>
                  <p className="text-[16px] leading-[24px] font-normal">
                    {card.description}
                  </p>

                  {/* Details Sub-row */}
                  <div className="flex flex-wrap gap-[16px] items-center pt-[3.5px] w-full">
                    <div className="flex gap-[4px] items-center shrink-0">
                      <img src={imgContainer} alt="Location" className="h-[11.667px] w-[9.333px] object-contain shrink-0 brightness-110" />
                      <span className="text-[14px] text-[#8fa39d] whitespace-nowrap leading-[20px]">
                        {card.location}
                      </span>
                    </div>
                    <div className="flex gap-[4px] items-center shrink-0">
                      <img src={imgContainer1} alt="Time" className="size-[11.667px] object-contain shrink-0 brightness-110" />
                      <span className="text-[14px] text-[#8fa39d] whitespace-nowrap leading-[20px]">
                        {card.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Showcase Image Column */}
          <div className="flex flex-col gap-[24px] items-center w-full lg:w-[737px] h-full justify-between shrink-0">
            <div className="w-full aspect-[737/627] rounded-[16px] overflow-hidden border border-[#dcfcc0] shadow-[0px_4px_2px_rgba(56,56,56,0.13)] relative bg-[#d6cfc0]">
              <img
                src={imgContainer2}
                alt="Donation Impact Showcase"
                className="size-full object-cover"
              />
            </div>
            {/* Pagination dots corresponding to card active states (card 2 active) */}
            <div className="flex gap-[6px] items-center">
              <span className="size-[13px] rounded-full bg-[#d6cfc0] transition-all" />
              <span className="size-[16px] rounded-full bg-[#2d584a] border border-[#dcfcc0] transition-all" />
              <span className="size-[13px] rounded-full bg-[#d6cfc0] transition-all" />
              <span className="size-[13px] rounded-full bg-[#d6cfc0] transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
