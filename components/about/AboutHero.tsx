import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative h-[753px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.figma.com/api/mcp/asset/c6ce2693-3499-44e3-a698-3414fd466210" 
          alt="Mission Background" 
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/53" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1760px] px-8 md:px-[80px] pt-[264px]">
        <div className="max-w-[1011px] space-y-[42px]">
          <div className="opacity-90">
            <p className="text-[20px] font-semibold tracking-wide text-white uppercase">
              THE UNDIVIDE PROJECT
            </p>
          </div>
          
          <div className="space-y-[32px]">
            <h1 className="text-[64px] font-bold leading-tight text-white">
              Mission Statement
            </h1>
            <p className="text-[32px] leading-snug text-white font-normal opacity-80">
              We’re here to connect people with the resources and technology they need to thrive in a changing world. By tackling the climate crisis and the digital divide together, we’re making sure anyone can thrive in the economies to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
