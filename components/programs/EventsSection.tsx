import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    title: "Underwater Projects Screening with Hip Hop Caucus and Georgetown Earth Commons",
    description: "During this event, we explored the power of storytelling at the intersection of art and environmental advocacy. The evening featured a film screening and panel discussion highlighting how creative expression can illuminate marine conservation challenges and inspire community action.",
    location: "Healey Family Student Center Social Room",
    time: "Feb 20, 2024, 5:30 PM-8:00 PM EST",
    image: "/assets/sections/what-we-do/event/1.jpg",
    imageLeft: false,
    link: "https://earthcommons.georgetown.edu/announcements/event-recap-underwater-projects-film-screening-and-panel-discussion/"
  },
  {
    title: "Water and Representation Convening",
    description: "During this event we will explore the critical connections between water issues and community representation. This event will bring together leaders, researchers, and advocates to discuss tools and strategies for empowering communities through inclusive water governance and action.",
    location: "301 Water St SE Washington, 20003 United States",
    time: "Nov 13, 2024, 11:30 AM 4:00 pm EST",
    image: "/assets/sections/what-we-do/event/2.jpg",
    imageLeft: true,
    link: "https://www.reservoircenter.org/event/water-and-representation-convening/"
  }
]

export default function EventsSection() {
  return (
    <section className="bg-[#f6f9f9] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
              Our Events
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1c3530] text-center">
            Explore our Events
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#5c7a72] text-center max-w-[964px] mt-2 md:mt-4">
            Let&apos;s talk about the big stuff. Through webinars, workshops, and events, we help communities and organizations understand the connection between climate and digital equity — and what they can do about it.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-14 md:space-y-20">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={cn(
                "flex flex-col gap-8 md:gap-[60px]",
                event.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Content */}
              <div className="flex-1 space-y-4 md:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#1a1c1b] leading-tight tracking-[-0.32px]">
                  {event.title}
                </h3>
                <p className="text-base md:text-lg lg:text-[24px] text-[#414845] leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-1 text-sm md:text-base lg:text-[20px] text-[#414845] leading-relaxed">
                  <p>Location: {event.location}</p>
                  <p>Time: {event.time}</p>
                </div>
                <Link href={event.link} target="_blank">
                  <button className="group border-2 border-[#2d584a] text-[#2d584a] rounded-full px-[22px] md:px-[26px] py-[12px] md:py-[14px] text-[13px] md:text-[14px] font-medium tracking-[0.14px] flex items-center gap-2 hover:bg-[#2d584a] hover:text-white transition-all w-fit">
                    Explore
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[55%] xl:w-[929px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[593px] rounded-[12px] overflow-hidden border border-[#c0c8c3] shadow-lg shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="size-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
