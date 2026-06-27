import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const researchItems = [
  {
    title: "Why affordable housing is more vulnerable to disasters",
    description: "Despite contributing the least to greenhouse gas emissions, low-income households often bear the brunt of climate change impacts. It usually becomes evident after significant flood events, such as Hurricane Helene, which pummeled the Southern US in September 2024, or the devastating floods that inundated Nepal in July 2024. The effects of climate change reinforce the disparities already evident in the housing sector.",
    image: "/assets/sections/what-we-do/research/research-1.jpg",
    dark: true,
    link: "https://www.preventionweb.net/drr-community-voices/why-affordable-housing-more-vulnerable-disasters"
  },
  {
    title: "Digital Justice Framework To Improve Disaster Preparation",
    description: "Social justice, environmental justice, and climate justice are all digital justice. Digital injustice arises from the fact that 21 million Americans are not connected to the internet, and seven percent of Americans do not use it, even if they have access to it. This lack of connectivity can lead to the loss of life, disrupted communities, and frayed social cohesion during natural disasters, as people are In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-",
    image: "/assets/sections/what-we-do/research/research-2.jpg",
    dark: false,
    link: "https://fas.org/publication/using-a-digital-justice-framework-to-improve-disaster-preparation-and-response/"
  },
  {
    title: "Avoiding Data and Algorithmic Bias In Disaster Research",
    description: "In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-Americans in the ten most states where, except for New York and California, 60% of that population lives. Our goal is to create a In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-Americans in the ten most states where, except for New York and California, 60% of that population lives. Our goal is to create a",
    image: "/assets/sections/what-we-do/research/research-3.jpg",
    dark: false,
    link: "https://fas.org/publication/increasing-national-resilience-through-an-open-disaster-data-initiative/"
  },
  {
    title: "Policy Paper – How the nation's emergency management agency can confront climate change",
    description: "Federal, state, local, tribal, and territorial agencies collect and maintain a range of disaster resilience, vulnerability, and loss data. However, this valuable data lives on different platforms and in various formats across agency silos. Inconsistent data collection and lack of validation can result in gaps and inefficiencies and make it difficult to implement appropriate mitigation, preparedness, response, recovery, and adaptation measures for natural hazards, including wildfires, smoke, drought, extreme heat, flooding, and debris flow.",
    image: "/assets/sections/what-we-do/research/research-4.jpg",
    dark: false,
    link: "https://www.preventionweb.net/news/increasing-national-resilience-through-open-disaster-data-initiative"
  },
  // {
  //   title: "Digital Justice Framework To Improve Disaster Preparation",
  //   description: "Social justice, environmental justice, and climate justice are all digital justice. Digital injustice arises from the fact that 21 million Americans are not connected to the internet, and seven percent of Americans do not use it, even if they have access to it. This lack of connectivity can lead to the loss of life, disrupted communities, and frayed social cohesion during natural disasters, as people are In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-",
  //   image: "https://www.figma.com/api/mcp/asset/202e5f01-d835-4207-bfba-0a86ffb1dd58",
  //   dark: false
  // },
  // {
  //   title: "Avoiding Data and Algorithmic Bias In Disaster Research",
  //   description: "In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-Americans in the ten most states where, except for New York and California, 60% of that population lives. Our goal is to create a In this writing, we wanted to delve into the Ten States Project, a pioneering initiative addressing climate and disaster risks confronting African-Americans in the ten most states where, except for New York and California, 60% of that population lives. Our goal is to create a",
  //   image: "https://www.figma.com/api/mcp/asset/8fab6cc2-c342-4977-a662-75f6d947ca13",
  //   dark: false
  // }
]

export default function ResearchAdvocacy() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[11px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
              Our RESEARCH
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-[#1c3530] text-center leading-tight">
            Research and Advocacy
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#5c7a72] text-center max-w-[964px] leading-[24px]">
            Data and stories matter. We combine both to push for policies that make a difference in people&apos;s lives. From climate justice to digital inclusion, our advocacy drives action.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchItems.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank" className="block no-underline">
              <div
                className={cn(
                  "group rounded-[8px] overflow-hidden flex flex-col min-h-[450px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#f8f8f2] hover:bg-[#2d584a] text-[#1c3530]"
                )}
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="h-[264px] rounded-[4px] overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col flex-1 p-2 pt-6 gap-3">
                    <h3 className={cn(
                      "text-[20px] font-bold leading-[28px] line-clamp-2 text-[#1c3530] group-hover:text-white transition-colors duration-300"
                    )}>
                      {item.title}
                    </h3>
                    <p className={cn(
                      "text-[14px] md:text-[16px] leading-[20px] line-clamp-[6] text-[#717171] group-hover:text-white/90 transition-colors duration-300"
                    )}>
                      {item.description}
                    </p>

                    <div className="mt-auto pt-4 pb-2">
                      <div className={cn(
                        "flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.35px] text-[#1c3530] group-hover:text-white transition-colors duration-300 cursor-pointer"
                      )}>
                        READ MORE
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
