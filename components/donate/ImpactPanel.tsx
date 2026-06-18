import { ArrowUpRight } from "lucide-react"

const impactCards = [
  {
    title: "Public Education",
    description: "Equipping communities with knowledge to navigate climate risk…",
    icon: "https://www.figma.com/api/mcp/asset/968c14a3-d743-4067-8dc9-d5cdc3f65eca",
  },
  {
    title: "Community Co-Creation",
    description: "Building solutions alongside the people who will actually use them.",
    icon: "https://www.figma.com/api/mcp/asset/1e0ad5f7-bd7f-4615-8e51-63bc5cf99bb0",
  },
  {
    title: "Research & Advocacy",
    description: "Driving policy changes through data-backed insights and…",
    icon: "https://www.figma.com/api/mcp/asset/f7e206fd-e63c-42d6-a2ff-6251c33544b1",
  },
  {
    title: "Dashboards & Tools",
    description: "Creating accessible digital platforms for environmental monitoring.",
    icon: "https://www.figma.com/api/mcp/asset/6f56d5a0-2bb6-4e10-bbbd-8bd3c7d10abe",
  },
  {
    title: "Climate Resilience",
    description: "Preparing neighborhoods for extreme weather events and long-…",
    icon: "https://www.figma.com/api/mcp/asset/42b04879-d049-4d4e-b0d0-46b98c6e9281",
  },
  {
    title: "Digital Equity",
    description: "Ensuring every household has access to reliable internet and digital",
    icon: "https://www.figma.com/api/mcp/asset/bc8a365c-5247-4fd3-ae38-0a2f9bdeb709",
  },
]

export default function ImpactPanel() {
  return (
    <div className="relative mx-auto max-w-[1760px] px-4 sm:px-8 md:px-[80px] z-30 -mt-12 sm:-mt-24 md:-mt-[173px]">
      <div className="bg-white border border-[#dcfcc0] rounded-[32px] p-6 sm:p-10 md:p-[49px] md:px-[81px] shadow-[0px_20px_20px_rgba(28,53,48,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[32px]">
          {impactCards.map((card, idx) => (
            <div key={idx} className="flex gap-[16px] p-[16px] rounded-[16px] hover:bg-[#f6f9f9] transition-colors">
              <div className="size-[44px] shrink-0">
                <img src={card.icon} alt={card.title} className="size-full object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-[#1c3530] leading-[27px]">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#3d5e57] leading-[21px] max-w-[260px]">
                  {card.description}
                </p>
                <button className="group flex items-center gap-1 pt-2 text-[14px] font-semibold text-[#2d584a] hover:underline">
                  Learn more
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
