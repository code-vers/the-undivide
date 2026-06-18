import { ArrowUpRight } from "lucide-react"

const pressItems = [
  {
    category: "FEATURE",
    title: "Building Digital Bridges in Underserved Neighborhoods",
    description: "How community-led tech hubs are transforming access to critical resources and education.",
    date: "April 25, 2026",
    source: "Wired",
    image: "https://www.figma.com/api/mcp/asset/54e3d323-928f-4007-bbab-7389940107dd",
    url: 'https://www.benton.org/headlines/how-climate-vulnerability-and-digital-divide-are-linked'
  },
  {
    category: "INNOVATION",
    title: "Youth-Led Climate Tech Accelerator Launches",
    description: "Young innovators develop solutions for environmental challenges in their own backyards.",
    date: "April 20, 2026",
    source: "MIT Tech Review",
    image: "https://www.figma.com/api/mcp/asset/c6a96dae-a665-4346-ae56-010b5fdfbb7d",
    url: ''
  },
  {
    category: "SUSTAINABILITY",
    title: "Green Jobs Training Program Sees 85% Placement Rate",
    description: "Career pathways in renewable energy create economic opportunities in low-income regions.",
    date: "April 18, 2026",
    source: "The Guardian",
    image: "https://www.figma.com/api/mcp/asset/9f92ba8f-907d-46c3-8429-11216f19940d"
  }
]

export default function PressSection() {
  return (
    <section className="bg-[#f8f8f2] py-[100px]">
      <div className="mx-auto max-w-[1760px] px-8 md:px-[80px]">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="size-3 rounded-full bg-[#2d584a]" />
          <h2 className="text-[32px] font-bold text-[#1c3530]">Press & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {pressItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#dcfcc0] rounded-[24px] overflow-hidden group shadow-sm flex flex-col h-full">
              <div className="h-[248px] overflow-hidden">
                <img src={item.image} alt={item.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-[32px] flex flex-col flex-1 space-y-4">
                <span className="text-[12px] font-bold text-[#2d584a] tracking-[1px] uppercase">
                  {item.category}
                </span>
                <h3 className="text-[22px] font-bold text-[#1c3530] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#3d5e57] leading-relaxed line-clamp-3">
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
    </section>
  )
}
