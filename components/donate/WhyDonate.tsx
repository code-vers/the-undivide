import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function WhyDonate() {
  return (
    <section className="bg-[#fdf9ed] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 ">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] xl:gap-[154px] items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#1c3530] tracking-[-0.4px] leading-tight">
              Why Donate?
            </h2>

            <p className="text-base md:text-lg lg:text-[20px] font-medium text-[#3d5e57] leading-relaxed">
              Your support powers grassroots resilience. By giving today, you&apos;re helping underserved communities adapt to climate impacts and bridge the digital divide through real, scalable solutions.
            </p>

            <ul className="space-y-3 md:space-y-[16px]">
              {[
                "100% Secure & Encrypted Donations",
                "Tax-Deductible 501(c)(3) Organization",
                "Transparent Allocation of Funds"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                   <Check className="size-5 lg:size-7 xl:size-8 p-1 lg:p-1.5 bg-[#2d584a] rounded-full text-white" />
                  <span className="text-lg md:text-xl lg:text-[24px] text-[#1c3530] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link href={'https://donorbox.org/support-our-work-86'} target="_blank">
                <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-[#f8f8f2] h-[50px] md:h-[56px] px-[24px] md:px-[32px] rounded-full text-[15px] md:text-[16px] font-bold gap-2">
                  Donate Now
                 <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="grid grid-cols-2 gap-3 md:gap-[22px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[635px]">
            <div className="h-full rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
              <img
                src="/assets/sections/donate/2.jpg"
                alt="Donation 2"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-[24px] h-full">
              <div className="h-[55%] rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
                <img
                  src="/assets/sections/donate/1.jpeg"
                  alt="Donation 1"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
                <img
                  src="/assets/sections/donate/3.jpg"
                  alt="Donation 3"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
