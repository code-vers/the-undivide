import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[1081px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.figma.com/api/mcp/asset/db746d67-4f29-4ed4-b7e7-68192da19966" 
          alt="Hero Background" 
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1760px] px-6 md:px-[80px] pt-[100px] md:pt-[141px] pb-12 md:pb-0 w-full">
        <div className="max-w-[1760px] space-y-[40px] md:space-y-[60px]">
          <div className="space-y-[42px]">
            <div className="opacity-90">
              <p className="text-[20px] font-semibold tracking-wide text-white uppercase">
                THE UNDIVIDE PROJECT
              </p>
            </div>
            
            <div className="space-y-[32px]">
               <div className="max-w-4xl">
                  <h1 className="text-3xl sm:text-5xl md:text-[64px] font-bold leading-[1.1] text-white">
                    Closing the Divide<br />
                    Between Climate Risk<br />
                    and Digital Access.
                  </h1>
               </div>
               
               <div className="max-w-[786px] opacity-80 pt-[8.19px]">
                  <p className="text-lg sm:text-2xl md:text-[32px] leading-snug text-white font-normal">
                    We connect communities with tools, data, education, and support to prepare for climate challenges and build a more equitable future.
                  </p>
               </div>
            </div>

            <div className="flex flex-wrap gap-[24px] items-center">
              <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[64px] px-[32px] rounded-[12px] text-[16px] shadow-lg gap-2">
                Explore Our Work
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="outline" className="bg-transparent dark:bg-transparent text-white dark:text-white border-white dark:border-white hover:bg-white dark:hover:bg-white hover:text-[#1c3530] dark:hover:text-[#1c3530] h-[64px] px-[33px] rounded-[12px] text-[16px] gap-2">
                Get Involved
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          {/* Pillars */}
          <div className="max-w-[1266px] pt-10">
            <div className="flex flex-wrap items-center gap-[24px]">
              {/* Pillar 1 */}
              <div className="flex items-center gap-[16px] w-[210px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center">
                   <img src="https://www.figma.com/api/mcp/asset/b7e73fd7-16f0-43ed-97cf-3ba4a1b96ba0" alt="Icon" className="h-[21px] w-[28px]" />
                </div>
                <div className="opacity-90">
                  <p className="text-[18px] text-white leading-[27px]">Public Education</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-[76px] bg-white/20" />

              {/* Pillar 2 */}
              <div className="flex items-center gap-[16px] w-[281px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center">
                   <img src="https://www.figma.com/api/mcp/asset/e325640d-81ad-49ff-a736-436fabd84c39" alt="Icon" className="h-[19px] w-[27px]" />
                </div>
                <div className="opacity-90">
                  <p className="text-[18px] text-white leading-[27px]">Community Co-Creation</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-[76px] bg-white/20" />

              {/* Pillar 3 */}
              <div className="flex items-center gap-[16px] w-[271px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center">
                   <img src="https://www.figma.com/api/mcp/asset/cb175779-83da-4c65-bef1-0691f0a911d2" alt="Icon" className="size-6" />
                </div>
                <div className="opacity-90">
                  <p className="text-[18px] text-white leading-[27px]">Research & Advocacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
