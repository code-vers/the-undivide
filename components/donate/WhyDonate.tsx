import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function WhyDonate() {
  return (
    <section className="bg-[#fdf9ed] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] xl:gap-[154px] items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 w-full lg:w-[560px] shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#1c3530] tracking-[-0.4px] leading-tight">
              Why Donate?
            </h2>

            <p className="text-base md:text-lg lg:text-[20px] font-medium text-[#3d5e57] leading-relaxed">
              Your support powers grassroots resilience. By giving today, you&apos;re helping underserved communities adapt to climate impacts and bridge the digital divide through real, scalable solutions.
            </p>

            <ul className="space-y-[16px]">
              {[
                "100% Secure & Encrypted Donations",
                "Tax-Deductible 501(c)(3) Organization",
                "Transparent Allocation of Funds"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-[12px]">
                  <div className="size-[22px] rounded-full bg-[#2d584a] flex items-center justify-center shrink-0">
                    <Check className="size-[14px] text-white" />
                  </div>
                  <span className="text-[16px] md:text-[20px] lg:text-[24px] text-[#1c3530] font-normal leading-[24px]">
                    {item}
                  </span>
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
          <div className="flex gap-3 md:gap-[22px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[635px] flex-1 w-full lg:max-w-[1048px]">
            {/* Left Card */}
            <div 
              className="h-full rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-[0px_4px_11.8px_rgba(0,0,0,0.2)]"
              style={{ flex: 502 }}
            >
              <img
                src="/assets/sections/donate/2.jpg"
                alt="Donation 2"
                className="size-full object-cover"
              />
            </div>
            {/* Right Cards Column */}
            <div 
              className="flex flex-col gap-3 md:gap-[24px] h-full"
              style={{ flex: 524 }}
            >
              <div 
                className="overflow-hidden border border-[#dcfcc0] shadow-[0px_4px_11.8px_rgba(0,0,0,0.2)] rounded-[24px]"
                style={{ flex: 330 }}
              >
                <img
                  src="/assets/sections/donate/1.jpeg"
                  alt="Donation 1"
                  className="size-full object-cover"
                />
              </div>
              <div 
                className="overflow-hidden border border-[#dcfcc0] shadow-[0px_4px_11.8px_rgba(0,0,0,0.2)] rounded-[24px]"
                style={{ flex: 281 }}
              >
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
