import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    category: "MIT Technology Review",
    title: "Free Coding Workshops Empower Underserved Communities",
    description: "Digital literacy program graduates first cohort of 150 students in web development and data analysis.",
    date: "May 10, 2026",
    source: "TechCrunch",
    image: "https://www.figma.com/api/mcp/asset/54e3d323-928f-4007-bbab-7389940107dd"
  },
  {
    category: "Grinnel College",
    title: "Community Solar Initiative Powers 1,200 Low-Income Homes",
    description: "Renewable energy access program reduces utility costs while cutting carbon emissions.",
    date: "May 6, 2026",
    source: "Grist",
    image: "https://www.figma.com/api/mcp/asset/c6a96dae-a665-4346-ae56-010b5fdfbb7d"
  },
  {
    category: "Forbes",
    title: "Climate Adaptation Planning Tools Now Available to Cities",
    description: "Open-source platform helps municipalities develop evidence-based resilience strategies.",
    date: "May 1, 2026",
    source: "CityLab",
    image: "https://www.figma.com/api/mcp/asset/9f92ba8f-907d-46c3-8429-11216f19940d"
  }
]

export default function NewsSection() {
  return (
    <section className="bg-[#f8f8f2] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
              Our News
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1c3530] text-center">
            In the News
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#5c7a72] text-center max-w-[964px]">
            Stay in the loop about how we're making waves:
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#dcfcc0] rounded-[18px] overflow-hidden group">
              <div className="h-[220px] sm:h-[300px] md:h-[380px] lg:h-[497px] overflow-hidden">
                <img src={item.image} alt={item.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 md:p-[20px] space-y-2 md:space-y-3">
                <span className="text-[11px] font-semibold text-[#2d584a] tracking-[0.88px] uppercase">
                  {item.category}
                </span>
                <h3 className="text-[17px] md:text-[20px] font-bold text-[#1c3530] leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#3d5e57] line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 pt-3">
                  <span className="text-[12px] md:text-[13px] text-[#8fa39d]">{item.date}</span>
                  <span className="text-[12px] md:text-[13px] text-[#8fa39d]">• {item.source}</span>
                </div>

                <button className="flex items-center gap-2 pt-3 text-[13px] md:text-[14px] font-semibold text-[#2d584a] hover:opacity-80 transition-opacity">
                  Read More
                  <img src="https://www.figma.com/api/mcp/asset/baa27dd1-8f54-42cd-8bbe-c7a3bcdaf273" alt="arrow" className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <Link href="/news">
            <button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[52px] md:h-[64px] px-[24px] md:px-[32px] rounded-[12px] text-[15px] md:text-[16px] font-normal shadow-lg flex items-center gap-[12px] transition-colors">
              View All News
              <img src="https://www.figma.com/api/mcp/asset/23b3661c-9dae-4dc3-bdf5-d889773aa273" alt="arrow" className="size-[13.33px]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
