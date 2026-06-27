import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, BookOpenText, Search, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[1081px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg/home-hero.jpg"
          alt="Hero Background"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px] px-6 md:px-[80px] pt-16 md:pt-[10px] pb-12 md:pb-0 w-full">
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
              <Link href={'/impact'}>
                <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[64px] px-[32px] rounded-[12px] text-[16px] shadow-lg gap-2">
                  Explore Our Work
                  <ArrowUpRight size={16} />
                </Button>
              </Link>
              <Link href={'/contact'}>
                <Button variant="outline" className="bg-transparent dark:bg-transparent text-white dark:text-white border-white dark:border-white hover:bg-white dark:hover:bg-white hover:text-[#1c3530] dark:hover:text-[#1c3530] h-[64px] px-[33px] rounded-[12px] text-[16px] gap-2">
                  Get Involved
                  <ArrowUpRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillars */}
          <div className="max-w-[1266px] pt-10">
            <div className="flex flex-wrap items-center gap-[24px]">
              {/* Pillar 1 */}
              <div className="flex items-center gap-[16px] w-[210px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center text-white">
                  <BookOpenText className="text-white" style={{ color: 'white', stroke: 'white' }} />
                </div>
                <div className="opacity-90">
                  <p className="text-[18px] text-white leading-[27px]">Public Education</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-[76px] bg-white/20" />

              {/* Pillar 2 */}
              <div className="flex items-center gap-[16px] w-[281px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center text-white">
                  <Users className="text-white" style={{ color: 'white', stroke: 'white' }} />
                </div>
                <div className="opacity-90">
                  <p className="text-[18px] text-white leading-[27px]">Community Co-Creation</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-[76px] bg-white/20" />

              {/* Pillar 3 */}
              <div className="flex items-center gap-[16px] w-[271px]">
                <div className="h-[52px] w-[53px] rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center text-white">
                  <Search className="text-white" style={{ color: 'white', stroke: 'white' }} />
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
