import { Button } from "@/components/ui/button"

export default function WhyDonate() {
  return (
    <section className="bg-[#fdf9ed] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
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
                  <img src="https://www.figma.com/api/mcp/asset/3f5c889e-7915-431b-afa8-dba3d838ddfd" alt="Check" className="size-5 md:size-6 shrink-0 mt-0.5" />
                  <span className="text-lg md:text-xl lg:text-[24px] text-[#1c3530] leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button className="bg-[#2d584a] hover:bg-[#1c3530] text-[#f8f8f2] h-[50px] md:h-[56px] px-[24px] md:px-[32px] rounded-full text-[15px] md:text-[16px] font-bold gap-2">
                Donate Now
                <img src="https://www.figma.com/api/mcp/asset/3279e6b7-a417-4e74-a2ae-c278b483fc5a" alt="Icon" className="size-[13px]" />
              </Button>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="grid grid-cols-2 gap-3 md:gap-[22px]">
            <div className="h-[280px] sm:h-[380px] md:h-[500px] lg:h-[635px] rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
              <img
                src="https://www.figma.com/api/mcp/asset/3ae63c5f-7588-4298-8112-7057a6fbd635"
                alt="Donation 1"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-[24px] h-full">
              <div className="flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
                <img
                  src="https://www.figma.com/api/mcp/asset/dc3b6e05-7aaa-4866-b5e5-ece81ed8cab2"
                  alt="Donation 2"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#dcfcc0] shadow-lg">
                <img
                  src="https://www.figma.com/api/mcp/asset/68489b04-a4f6-4d69-81f8-170c74059300"
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
