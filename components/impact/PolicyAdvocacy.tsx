import { ArrowUpRight, Clock, MapPin, Settings } from "lucide-react"
import Link from "next/link"

const policyEvents = [
  {
    category: "WORKSHOP",
    title: "Building a Digital Justice Framework (Federation of American Scientists)",
    location: "Community Center",
    time: "8:00 am - 5:00 pm",
    link: "https://fas.org/publication/using-a-digital-justice-framework-to-improve-disaster-preparation-and-response/"
  },
  {
    category: "FORUM",
    title: "Enhancing Climate Initiatives: Green Jobs (Federation of American Scientists)",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    link: "https://fas.org/publication/enhancing-climate-initiatives-green-jobs/"
  },
  {
    category: "FORUM",
    title: "The Regulatory Review - Climate Resilience Requires Digital Justice",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    link: "https://www.theregreview.org/2025/05/19/sanders-climate-resilience-requires-digital-justice/"
  },
  {
    category: "FORUM",
    title: "Contributions to UNDRR reports on gender equity and disaster response.",
    location: "Digital Library",
    time: "11:30 am - 6:30 pm",
    link:"https://www.undrr.org/event/parliamentary-delegation-regional-security-resilience-and-gender-equity-converging-risk"
  }
]

export default function PolicyAdvocacy() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]" id="policy-advocacy">
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
              <Link
                key={idx}
                href={event.link}
                target="_blank"
                className="bg-white border border-[#2d584a] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[8px] p-4 md:p-[25px] flex items-start gap-4 md:gap-[24px] group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer no-underline"
              >
                {/* Icon Marker */}
                <div className="size-[20px] md:size-[22px] shrink-0 mt-1">
                  <Settings className="size-full text-[#4b6637] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1 space-y-1 min-w-0">
                  <span className="text-[11px] md:text-[12px] font-bold text-[#4b6637] group-hover:text-white/80 tracking-[0.6px] uppercase transition-colors duration-300">
                    {event.category}
                  </span>
                  <h4 className="text-[14px] md:text-[16px] font-normal text-[#144134] group-hover:text-white leading-[24px] transition-colors duration-300">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#4b6637] group-hover:text-white/90 transition-colors duration-300" />
                      <span className="text-[13px] md:text-[14px] text-[#8fa39d] group-hover:text-white/70 transition-colors duration-300">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-[#4b6637] group-hover:text-white/90 transition-colors duration-300" />
                      <span className="text-[13px] md:text-[14px] text-[#8fa39d] group-hover:text-white/70 transition-colors duration-300">{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="group/btn hidden md:flex items-center gap-1 self-center text-[#144134] group-hover:text-white font-bold text-[14px] md:text-[16px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                  Read More
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Image Section */}
          <div className="w-full h-[250px] sm:h-[350px] md:h-[440px] lg:h-[540px] rounded-[12px] overflow-hidden border border-[#c0c8c3] shadow-lg lg:self-center">
            <img
              src="/assets/sections/impact/policy/1.jpg"
              alt="Policy Featured"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
