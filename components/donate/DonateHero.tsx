import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function DonateHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[983px] w-full overflow-hidden flex items-end">
      {/* Background Image Layer 1 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.figma.com/api/mcp/asset/b28a3638-c6b5-4b24-998f-6a7fc365b525"
          alt="Mission Background"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/53" />
      </div>

      {/* Background Image Layer 2 (Overlay pattern) */}
      <div className="absolute inset-0 z-10 opacity-70">
        <img
          src="https://www.figma.com/api/mcp/asset/875be947-8d16-462e-adb9-67b43ad78a82"
          alt="Overlay Pattern"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1c3530]/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1760px] px-4 sm:px-8 md:px-[80px] pt-[100px] md:pt-[180px] lg:pt-[264px] pb-12 md:pb-20">
        <div className="max-w-[1011px] space-y-8 md:space-y-[42px]">
          <div className="opacity-90">
            <p className="text-[14px] md:text-[20px] font-semibold tracking-wide text-white uppercase">
              Donate
            </p>
          </div>

          <div className="space-y-4 md:space-y-[32px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-white">
              Projects Built With Communities.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-[32px] leading-snug text-white font-normal opacity-80 max-w-[786px]">
              Explore the initiatives, research, tools, and community-centered work helping close the divide between digital access and climate resilience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-[24px] items-center">
            <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[52px] md:h-[64px] px-[24px] md:px-[32px] rounded-[12px] text-[15px] md:text-[16px] shadow-lg gap-2">
              Donate Now
              <img src="https://www.figma.com/api/mcp/asset/08c14db6-5cef-49df-b506-55fd15066093" alt="Icon" className="size-[13px]" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1c3530] h-[52px] md:h-[64px] px-[24px] md:px-[33px] rounded-[12px] text-[15px] md:text-[16px] gap-2">
              Get Involved
              <img src="https://www.figma.com/api/mcp/asset/08c14db6-5cef-49df-b506-55fd15066093" alt="Icon" className="size-[13px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
