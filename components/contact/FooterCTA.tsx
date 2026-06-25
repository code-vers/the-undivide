import { Globe } from "lucide-react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="bg-[#f1ede1] py-[100px] px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1616px]">
        <div className="bg-[#2d584a] border border-[#144134] rounded-[24px] p-[41px] flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="flex items-center gap-[24px]">
            <div className="backdrop-blur-[2px] bg-white/10 border border-white/20 rounded-full size-[64px] flex items-center justify-center p-px">
              <Globe />
            </div>
            <div className="space-y-1">
              <h3 className="text-[24px] font-bold text-white leading-tight">Ready to Connect?</h3>
              <p className="text-[16px] text-white/80">Join us in building climate resilience.</p>
            </div>
          </div>
          
          <Link href={"/contact#contact-form"}>
          <button className="bg-[#f8f8f2] text-[#2d584a] px-[32px] py-[16px] rounded-full font-bold text-[16px] hover:bg-[#1c3530] hover:text-white transition-all mt-8 md:mt-0 active:scale-95 shadow-sm">
            Let&apos;s Get Started
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
