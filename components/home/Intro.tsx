export default function Intro() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-6 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
          {/* Left Side */}
          <div className="space-y-8 lg:space-y-[136px]">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
              <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
                INTRODUCTION
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-[24px]">
              <div className="w-full aspect-[737/429] bg-[#d6cfc0] rounded-[16px] overflow-hidden">
                <img
                  src="https://www.figma.com/api/mcp/asset/3b3cf235-7463-45a4-a4cd-179cc2569fbc"
                  alt="Intro"
                  className="size-full object-cover"
                />
              </div>
              <div className="h-[16px] w-[54px]">
                <img src="https://www.figma.com/api/mcp/asset/eb1f3736-ca9b-46b8-88dc-fcf366f41750" alt="Divider" className="size-full" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between gap-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-medium leading-tight text-[#3b4554]">
              We&apos;re here to connect people with the resources and technology they need to thrive in a changing world. By tackling the climate crisis and the digital divide together,{" "}
              <span className="text-[#8fa39d]">we&apos;re making sure anyone can thrive in the economies to come.</span>
            </h2>

            <div className="border-t border-[#d6cfc0] pt-8 md:pt-[65px]">
              <div className="flex  gap-6 md:gap-10 lg:gap-[100px]">
                {/* Stat 1 */}
                <div className="space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">8+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Years of Meaningful Impact</p>
                </div>

                {/* Stat 2 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">74+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Successful Projects</p>
                </div>

                {/* Stat 3 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px]">
                  <p className="text-3xl sm:text-4xl lg:text-[64px] font-normal text-[#1c3530] leading-none">33+</p>
                  <p className="text-base md:text-lg lg:text-[20px] font-normal text-[#5c7a72]">Trusted Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
