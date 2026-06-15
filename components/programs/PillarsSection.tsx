export default function PillarsSection() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="space-y-4 mb-10 md:mb-[80px]">
          <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#2d584a] uppercase">
              Our Pillars of Action
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] xl:gap-[181px] items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-[1.1] text-[#1c3530]">
              Community-Led Solutions for{" "}
              <span className="text-[#2d584a]">Digital and Climate Justice.</span>
            </h2>

            <div className="space-y-5 md:space-y-6">
              <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
                At The Undivide Project, we believe that technology and data should serve the people who need it most. Our approach is grounded in listening, collaboration, and action.
              </p>
              <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
                We work at the intersection of digital equity and climate resilience, building a framework where communities are not just participants, but leaders in defining and solving their own challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Public Education */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/0af288dd-9cad-4b58-970d-10d5b8e2d911" alt="Icon" className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530]">Public Education</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57]">
              Sharing knowledge, stories, and resources that help communities understand digital inequity and climate risk.
            </p>
          </div>

          {/* Community Co-Creation */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/2bfdbe7a-1a60-4772-8eb0-f8329b42490f" alt="Icon" className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530]">Community Co-Creation</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57]">
              Working with communities to design practical tools and solutions based on real local needs.
            </p>
          </div>

          {/* Research & Advocacy */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/79283511-0fe4-4531-82a3-a1ee10d2e040" alt="Icon" className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530]">Research & Advocacy</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57]">
              Using data, dashboards, and applied research to support better decisions, policies, and community resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
