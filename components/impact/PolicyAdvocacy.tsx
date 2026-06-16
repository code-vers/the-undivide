import { ArrowUpRight, Settings } from "lucide-react"

const policyEvents = [
  {
    category: "WORKSHOP",
    title: "Building a Digital Justice Framework (Federation of American Scientists)",
    location: "Community Center",
    time: "8:00 am - 5:00 pm"
  },
  {
    category: "FORUM",
    title: "Enhancing Climate Initiatives: Green Jobs (Federation of American Scientists)",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm"
  },
  {
    category: "FORUM",
    title: "The Regulatory Review - Climate Resilience Requires Digital Justice",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm"
  },
  {
    category: "FORUM",
    title: "Contributions to UNDRR reports on gender equity and disaster response.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm"
  }
]

export default function PolicyAdvocacy() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 md:gap-[32px] mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[11px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
              Our RESEARCH
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-[#1c3530] leading-tight">
              Policy Advocacy
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#5c7a72] max-w-[1040px] leading-[24px]">
              Change happens when we push for it. That&apos;s why we&apos;re writing, collaborating, and advocating at every level — from local to international. Our white papers and research don&apos;t just sit on shelves — they influence real decisions that impact people like you.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] items-start">
          {/* Events List */}
          <div className="space-y-[14px] md:space-y-[16px]">
            {policyEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#dcfcc0] rounded-[8px] p-4 md:p-[25px] flex items-start gap-4 md:gap-[24px] group hover:shadow-md transition-all cursor-pointer"
              >
                {/* Icon Marker */}
                <div className="size-[20px] md:size-[22px] shrink-0 mt-1">
                  <Settings className="text-[#4b6637]" />
                </div>

                <div className="flex-1 space-y-1 min-w-0">
                  <span className="text-[11px] md:text-[12px] font-bold text-[#4b6637] tracking-[0.6px] uppercase">
                    {event.category}
                  </span>
                  <h4 className="text-[14px] md:text-[16px] font-normal text-[#144134] leading-[24px]">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                    <div className="flex items-center gap-1">
                      <img src="https://www.figma.com/api/mcp/asset/d3e8ab6b-8f7b-4f6f-9031-e17fa03b366f" alt="loc" className="size-[12px] shrink-0" />
                      <span className="text-[13px] md:text-[14px] text-[#8fa39d]">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://www.figma.com/api/mcp/asset/3d1cfb85-b0b8-49e4-826f-6a690a20d4a5" alt="time" className="size-[12px] shrink-0" />
                      <span className="text-[13px] md:text-[14px] text-[#8fa39d]">{event.time}</span>
                    </div>
                  </div>
                </div>

                <button className="hidden md:flex items-center gap-1 self-center text-[#144134] font-bold text-[14px] md:text-[16px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all hover:text-[#2d584a] shrink-0 cursor-pointer">
                  Read More
                  <img src="https://www.figma.com/api/mcp/asset/189cb1ab-7f4f-47be-b78a-757c152f3037" alt="arr" className="size-[10px]" />
                </button>
              </div>
            ))}
          </div>

          {/* Featured Image Section */}
          <div className="w-full h-[250px] sm:h-[350px] md:h-[440px] lg:h-[540px] rounded-[12px] overflow-hidden border border-[#c0c8c3] shadow-lg lg:self-center">
            <img
              src="https://www.figma.com/api/mcp/asset/bfa4934f-ca5c-460b-8e2d-bf425c36c5ec"
              alt="Policy Featured"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
