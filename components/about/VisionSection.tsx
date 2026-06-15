import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="bg-[#f1ede1] py-12 md:py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 md:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center">
          {/* Collage Images — responsive height */}
          <div className="relative h-[360px] sm:h-[480px] md:h-[600px] lg:h-[752px]">
            {/* Main Top Left */}
            <div className="absolute top-0 left-0 right-[30%] sm:right-auto sm:w-[58%] lg:w-[382px] h-[58%] lg:h-[454px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-20">
              <img src="https://www.figma.com/api/mcp/asset/2c284dc5-5b90-4ca3-9034-0eaf60a49f60" alt="Work 1" className="size-full object-cover" />
            </div>

            {/* Top Right Tall */}
            <div className="absolute top-[5%] right-0 w-[40%] sm:w-[47%] lg:w-[320px] h-[52%] lg:h-[400px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-10">
              <img src="https://www.figma.com/api/mcp/asset/a966bd58-4f1b-410b-8167-7dd51b5dc2f2" alt="Work 2" className="size-full object-cover" />
              <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/90 border border-[#4b6637]/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-[#144134]" />
                <span className="text-[11px] md:text-[14px] font-semibold text-[#144134]">Community-led</span>
              </div>
            </div>

            {/* Bottom Left Medium */}
            <div className="absolute bottom-0 left-0 right-[28%] sm:right-auto sm:w-[68%] lg:w-[450px] h-[38%] lg:h-[315px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-30 group">
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 md:size-24 rounded-full bg-[#2d584a]/40 flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
                  <img src="https://www.figma.com/api/mcp/asset/8512d6cb-fe93-4303-b05f-a9581c46f423" alt="Play" className="size-8 md:size-11" />
                </div>
              </div>
            </div>

            {/* Bottom Right Square */}
            <div className="absolute bottom-0 right-0 w-[32%] sm:w-[36%] lg:w-[280px] h-[35%] lg:h-[280px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl z-20">
              <img src="https://www.figma.com/api/mcp/asset/c9470289-7f98-4967-9b8b-f55ee7c6060c" alt="Work 3" className="size-full object-cover" />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[8%] left-[8%] z-40 bg-white border border-[#4b6637] rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-[#4b6637]" />
              <span className="text-[10px] md:text-[13px] font-semibold text-[#4b6637] tracking-[2px] md:tracking-[3.5px] uppercase">
                Digital Equity + Climate
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-4 py-1">
              <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
                OUR VISION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold leading-tight text-[#1c3530]">
              Building a Future Where Every Community Has the Tools to Thrive.
            </h2>

            <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
              The Undivide Project works to close the gap between digital access, climate information, and community support. Our vision is a future where communities can access the technology, education, research, and advocacy they need to prepare, respond, and build lasting resilience.
            </p>

            <ul className="space-y-3 md:space-y-4 py-2">
              {["Community-first solutions", "Accessible tools and education", "Research-backed advocacy"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg md:text-[24px] text-[#1c3530]">
                  <img src="https://www.figma.com/api/mcp/asset/7fb0b3fa-610e-40a0-96ab-c65fe0b76c44" alt="check" className="size-5 md:size-6 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[48px] md:h-[54px] px-[24px] md:px-[28px] rounded-full text-[15px] md:text-[16px] font-semibold gap-2">
              Explore Our Work
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
