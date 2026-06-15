import { Button } from "@/components/ui/button"

export default function DonateIntro() {
  return (
    <section className="bg-[#fdf9ed] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px] xl:gap-[80px] 2xl:gap-[181px] items-center">
          {/* Left Side: Image and Label */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px] w-fit">
              <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
                INTRODUCTION
              </span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-full aspect-[770/403] rounded-[16px] overflow-hidden shadow-xl">
                <img
                  src="https://www.figma.com/api/mcp/asset/8bcd98d4-e1a5-4bad-9569-8b1b2446613d"
                  alt="Intro"
                  className="size-full object-cover"
                />
              </div>
              <div className="h-[16px] w-[54px]">
                <img src="https://www.figma.com/api/mcp/asset/3dabd038-3b2d-4203-8a52-3be065ac7444" alt="Divider" className="size-full" />
              </div>
            </div>
          </div>

          {/* Right Side: Content and features */}
          <div className="flex flex-col justify-end space-y-5 md:space-y-[22px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight text-[#1c3530] tracking-[-0.32px]">
              Because Communities Should Not Face Climate Challenges Without Access to Tools and Information.
            </h2>

            <p className="text-base md:text-[18px] text-[#3d5e57] leading-[28.8px]">
              The intersection of systemic underinvestment, lack of internet access, and increasing environmental hazards leaves vulnerable populations exposed. We exist to bridge that gap.
            </p>

            <div className="space-y-5 md:space-y-6 pt-2">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="size-[28px] md:size-[32px] shrink-0 mt-1">
                  <img src="https://www.figma.com/api/mcp/asset/49d1f225-588d-4b5e-b510-c4da5dbe309a" alt="Icon" className="size-full" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[17px] md:text-[18px] font-semibold text-[#1c3530]">Empowering Local Leaders</h4>
                  <p className="text-[14px] md:text-[16px] text-[#3d5e57] leading-[24px]">
                    We don&apos;t dictate solutions; we provide the data frameworks for communities to build their own resilience strategies.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="size-[28px] md:size-[34px] shrink-0 mt-1">
                  <img src="https://www.figma.com/api/mcp/asset/43964137-e36c-4376-8dc1-954804b86452" alt="Icon" className="size-full" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[17px] md:text-[18px] font-semibold text-[#1c3530]">Data-Driven Independence</h4>
                  <p className="text-[14px] md:text-[16px] text-[#3d5e57] leading-[24px]">
                    Our tools turn complex climate data into actionable insights, leveling the playing field against digital redlining.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-8">
              <Button variant="outline" className="border-[#2d584a] text-[#2d584a] hover:bg-[#2d584a] hover:text-white h-[46px] md:h-[50px] px-[22px] md:px-[25px] rounded-[8px] text-[15px] md:text-[16px]">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
