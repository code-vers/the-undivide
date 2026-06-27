import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GevResearch() {
  const cards = [
    {
      title: "Hazard vs. Connectivity Tool",
      description: "An interactive web map that combines state and federal data with community-collected connectivity measurements to identify broadband gaps and environmental threats.",
      image: "/assets/sections/gev-climate/hazard.jpg",
      theme: "dark",
      link: "https://arcg.is/bG5X40"
    },
    {
      title: "Iowa Community Asset Map",
      description: "Highlights local strengths—schools, libraries, nonprofits, and mutual aid organizations—that act as social and digital anchors during emergencies.",
      image: "/assets/sections/gev-climate/iows-asset-map.png",
      theme: "light",
      link: "https://www.canva.com/design/DAGu2tf09PI/ROiZXLZKxLTB2TJovW9zqw/view?utm_content=DAGu2tf09PI&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
    },
    {
      title: "5 Questions with Monica Sanders",
      description: "Read the interview with Monica Sanders about her work and the Social Innovator in Residence program.",
      image: "/assets/sections/gev-climate/monica-5-questions.jpg",
      theme: "light",
      link: "https://www.grinnell.edu/news/5-questions-monica-sanders"
    },
    {
      title: "Grinnell College Announcement",
      description: "Grinnell College announces Monica Sanders as Inaugural Social Innovator in Residence.",
      image: "/assets/sections/gev-climate/gallery/1.JPG",
      theme: "light",
      link: "https://www.grinnell.edu/news/grinnell-college-announces-monica-sanders-inaugural-social-innovator-residence"
    },
    {
      title: "Empowering Community Connections",
      description: "Tanner's interview on empowering community connections.",
      image: "/assets/sections/gev-climate/empowering-community.jpg",
      theme: "light",
      link: "https://www.grinnell.edu/news/empowering-community-connections"
    },
  ]

  return (
    <section className="bg-white py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1759px]">
        {/* Header */}
        <div className="flex flex-col items-center mb-[60px]">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px] mb-4">
            <span className="text-[11px] font-medium tracking-[0.275px] uppercase text-[#1c3530]">
              Our RESEARCH
            </span>
          </div>
          <h2 className="text-3xl md:text-[52px] font-bold text-[#1c3530] text-center mb-6">
            Tools & Further Reading
          </h2>
          <p className="text-[16px] text-[#5c7a72] text-center max-w-[964px] leading-relaxed">
            Data and stories matter. We combine both to push for policies that make a difference in people&apos;s lives. From climate justice to digital inclusion, our advocacy drives action.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <Link
              href={card.link}
              key={idx}
              target="_blank"
              className="group block no-underline h-full"
            >
              <div
                className="rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-[#f8f8f2] hover:bg-[#2d584a] text-[#1c3530]"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="aspect-[531/344] rounded-sm overflow-hidden bg-white mb-6 flex items-center justify-center shrink-0">
                    <img src={card.image} alt={card.title} className="size-full object-fit transition-transform duration-500 group-hover:scale-102" />
                  </div>
                  <div className="px-2 pb-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-serif text-[#2d584a] group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-[#717171] group-hover:text-white/90 transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>
                    <div
                      className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.35px] uppercase text-[#1c3530] group-hover:text-white transition-colors duration-300"
                    >
                      READ MORE
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
