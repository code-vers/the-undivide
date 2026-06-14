import { Button } from "@/components/ui/button"

export default function ImpactQuote() {
  return (
    <section className="relative min-h-[558px] py-16 md:py-0 w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.figma.com/api/mcp/asset/78918359-201b-4736-bb68-0d69588b4ab2" 
          alt="Impact Background" 
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1c3530]/85" />
        <div className="absolute inset-0 bg-black/37" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] px-6 md:px-[80px] flex flex-col items-center space-y-[40px] w-full">
        <div className="border border-white/50 rounded-full px-[17px] py-[5px]">
          <span className="text-[16px] font-medium text-white/55 tracking-wide uppercase">
            IMPACT
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-[64px] font-bold text-[#f8f8f2] text-center leading-[1.1] max-w-[900px]">
          Rooted in Community. Driven by Data.
        </h2>

        <Button className="bg-[#f8f8f2] hover:bg-white text-[#1c3530] h-[48px] px-[32px] rounded-[8px] text-[16px] font-semibold">
          See Our Work
        </Button>
      </div>
    </section>
  )
}
