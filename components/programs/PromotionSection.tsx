import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PromotionSection() {
  return (
    <section className="relative py-[96px] w-full overflow-hidden min-h-[613px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img decoding="async" loading="lazy" src="/assets/sections/what-we-do/promotion/research-promo-section.jpg" alt="Promotion Background" className="size-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1760px] px-4 md:px-[80px] w-full">
        <div className="flex flex-col items-center gap-[16px]">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[11px] font-medium tracking-[0.275px] text-white/70 uppercase">
              GET INVOLVED
            </span>
          </div>

          <h2 className="text-3xl md:text-[52px] font-bold text-[#f8f8f2] text-center leading-tight max-w-[900px]">
            Help Build a Future Where Communities Have the Tools to Thrive.
          </h2>

          <p className="text-[18px] text-[#c5d0cc] text-center max-w-[760px] leading-relaxed">
            Support education, co-created technology, research, and advocacy that help close the divide between digital access and climate resilience.
          </p>

          <div className="flex flex-wrap gap-[16px] justify-center mt-10">
            <Link href={'/donate'}>
              <Button className="bg-[#f8f8f2] hover:bg-white text-[#1c3530] h-[51px] px-[30px] rounded-[8px] text-[16px] font-semibold">
                Donate
              </Button>
            </Link>
            <Link href={'/contact'}>
              <Button variant="outline" className="bg-transparent border-2 border-[#f8f8f2] text-[#f8f8f2] hover:bg-[#f8f8f2] hover:text-[#1c3530] h-[51px] px-[27px] rounded-[8px] text-[16px] font-semibold">
                Contact With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
