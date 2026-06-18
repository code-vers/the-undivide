import { ArrowRight } from "lucide-react"

export default function GevResearch() {
  const cards = [
    {
      title: "Hazard vs. Connectivity Tool",
      description: "An interactive web map that combines state and federal data with community-collected connectivity measurements to identify broadband gaps and environmental threats.",
      image: "https://www.figma.com/api/mcp/asset/2bb65cff-6977-4512-8dc8-7cd68ba97849",
      theme: "dark",
      link: "#"
    },
    {
      title: "Hazard vs. Connectivity Tool",
      description: "An interactive web map that combines state and federal data with community-collected connectivity measurements to identify broadband gaps and environmental threats.",
      image: "https://www.figma.com/api/mcp/asset/38e5cd6d-f729-4b47-9156-84470a168a98",
      theme: "light",
      link: "#"
    },
    {
      title: "5 Questions with Monica Sanders",
      description: "Read the interview with Monica Sanders about her work and the Social Innovator in Residence program.",
      image: "https://www.figma.com/api/mcp/asset/82b45ab9-15e6-4e0c-973c-30a11bd463af",
      theme: "light",
      link: "#"
    }
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
            <div 
              key={idx}
              className={`rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                card.theme === "dark" ? "bg-[#2d5448] text-white" : "bg-[#f8f8f2] text-[#1c3530]"
              }`}
            >
              <div className="p-4 flex flex-col h-full">
                <div className="aspect-[531/344] rounded-sm overflow-hidden mb-6">
                  <img src={card.image} alt={card.title} className="size-full object-cover" />
                </div>
                <div className="px-2 pb-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className={`text-xl font-bold font-serif ${card.theme === "dark" ? "text-white" : "text-[#2d584a]"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-[16px] leading-relaxed ${card.theme === "dark" ? "text-[#d1d5db]" : "text-[#717171]"}`}>
                      {card.description}
                    </p>
                  </div>
                  <a 
                    href={card.link}
                    className={`inline-flex items-center gap-2 text-sm font-bold tracking-[0.35px] uppercase transition-colors ${
                      card.theme === "dark" ? "text-[#e6c875] hover:text-white" : "text-[#1c3530] hover:text-[#2d584a]"
                    }`}
                  >
                    READ MORE
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
