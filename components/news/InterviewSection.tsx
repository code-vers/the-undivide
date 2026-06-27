import { ArrowUpRight } from "lucide-react"

const interviewItems = [
  {
    category: "CONVERSATION",
    title: "Youth Leaders Discuss Climate Tech Innovation",
    description: "Students from the accelerator program share their vision for a digitally-empowered future.",
    date: "March 28, 2026",
    source: "PBS",
    image: "https://www.figma.com/api/mcp/asset/2c284dc5-5b90-4ca3-9034-0eaf60a49f60"
  },
  {
    category: "INTERVIEW",
    title: "Community Organizers on Building Resilient Neighborhoods",
    description: "Grassroots leaders share strategies for climate adaptation and digital equity models.",
    date: "March 22, 2026",
    source: "Democracy Now",
    image: "https://www.figma.com/api/mcp/asset/a966bd58-4f1b-410b-8167-7dd51b5dc2f2"
  }
]

export default function InterviewSection() {
  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1760px] px-8 md:px-[80px]">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="size-3 rounded-full bg-[#2d584a]" />
          <h2 className="text-[32px] font-bold text-[#1c3530]">Interviews & Conversations</h2>
        </div>

        <div className="space-y-[32px]">
          {/* Featured Interview (Full Width) */}
          <div className="bg-[#f8f8f2] border border-[#dcfcc0] rounded-[32px] overflow-hidden group shadow-sm flex flex-col lg:flex-row h-auto lg:h-[345px] transition-all hover:shadow-md">
            <div className="lg:w-[442px] h-[300px] lg:h-full overflow-hidden shrink-0">
               <img decoding="async" loading="lazy" src="https://www.figma.com/api/mcp/asset/c9470289-7f98-4967-9b8b-f55ee7c6060c" alt="Main Interview" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-[40px] flex flex-col justify-center space-y-4">
               <span className="text-[12px] font-bold text-[#2d584a] tracking-[1px] uppercase">INTERVIEW</span>
               <h3 className="text-[28px] font-bold text-[#1c3530] leading-tight">
                 In Conversation: Bridging the Digital Divide Through Local Action
               </h3>
               <p className="text-[18px] text-[#3d5e57] leading-relaxed max-w-[800px] line-clamp-2">
                 Executive Director shares insights on building inclusive digital infrastructures that withstand climate challenges.
               </p>
               <div className="flex items-center gap-3 pt-2 text-[15px] text-[#8fa39d]">
                 <span>April 2, 2026</span>
                 <span>• NPR</span>
               </div>
            </div>
          </div>

          {/* Grid of Two */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {interviewItems.map((item, idx) => (
              <div key={idx} className="bg-[#f8f8f2] border border-[#dcfcc0] rounded-[32px] overflow-hidden group shadow-sm flex flex-col transition-all hover:shadow-md h-full">
                <div className="h-[376px] overflow-hidden relative">
                   <img decoding="async" loading="lazy" src={item.image} alt={item.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-[32px] flex flex-col flex-1 space-y-4">
                  <span className="text-[12px] font-bold text-[#2d584a] tracking-[1px] uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-[24px] font-bold text-[#1c3530] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#3d5e57] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 mt-auto">
                    <span className="text-[14px] text-[#8fa39d]">{item.date}</span>
                    <span className="text-[14px] text-[#8fa39d]">• {item.source}</span>
                  </div>

                  <button className="flex items-center gap-2 pt-6 text-[16px] font-semibold text-[#2d584a] hover:opacity-80 transition-opacity">
                    Read More
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
