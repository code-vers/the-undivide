export default function Intro() {
  return (
    <section className="bg-white py-16 md:py-[120px] px-6 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
          {/* Left Side */}
          <div className="space-y-8 lg:space-y-[136px]">
            <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
              <span className="text-[16px] font-medium tracking-[0.275px] text-[#1c3530] uppercase">
                INTRODUCTION
              </span>
            </div>
            
            <div className="space-y-[24px] flex flex-col items-center">
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
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-medium leading-tight text-[#3b4554]">
              We’re here to connect people with the resources and technology they need to thrive in a changing world. By tackling the climate cr
              <span className="text-[#8fa39d]">isis and the digital divide together, we’re making sure anyone can thrive in the economies to come.</span>
            </h2>

            <div className="border-t border-[#d6cfc0] pt-12 lg:pt-[65px] mt-10 lg:mt-0">
              <div className="flex flex-wrap gap-8 lg:gap-[100px]">
                {/* Stat 1 */}
                <div className="space-y-[12px] min-w-[200px]">
                  <p className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#1c3530] leading-none">8+</p>
                  <p className="text-lg lg:text-[20px] font-normal text-[#5c7a72]">Years of Meaningful Impact</p>
                </div>
                
                {/* Stat 2 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px] min-w-[200px]">
                  <p className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#1c3530] leading-none">74+</p>
                  <p className="text-lg lg:text-[20px] font-normal text-[#5c7a72]">Successful Projects</p>
                </div>

                {/* Stat 3 */}
                <div className="lg:border-l lg:border-[#d6cfc0] lg:pl-[33px] space-y-[12px] min-w-[200px]">
                  <p className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#1c3530] leading-none">33+</p>
                  <p className="text-lg lg:text-[20px] font-normal text-[#5c7a72]">Trusted Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
