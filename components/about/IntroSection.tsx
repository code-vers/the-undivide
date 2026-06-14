export default function IntroSection() {
  return (
    <section className="bg-white py-[120px] px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="space-y-4 mb-[80px]">
          <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[16px] font-medium tracking-[0.275px] text-[#2d584a] uppercase">
              ABOUT US
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[608px_1fr] gap-[145px] items-start">
            <h2 className="text-[52px] font-bold leading-[1.1] text-[#1c3530]">
              Connecting Communities With <br />
              <span className="text-[#2d584a]">Tools, Technology, and Support.</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-[24px] leading-relaxed text-[#3d5e57]">
                The Undivide Project works at the intersection of digital equity, climate resilience, education, research, and advocacy. We connect communities with the resources and technology they need to prepare for climate challenges and build a more equitable future.
              </p>
              <p className="text-[24px] leading-relaxed text-[#3d5e57]">
                Our approach combines practical tools, data-driven insights, and community-centered design to address the urgent challenges at the intersection of climate change and digital access.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Public Education */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-6">
            <div className="size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/eb558602-6c63-4657-b179-e5c29378aae8" alt="Icon" className="size-6" />
            </div>
            <h3 className="text-[22px] font-bold text-[#1c3530]">Public Education</h3>
            <p className="text-[16px] leading-relaxed text-[#3d5e57]">
              Sharing knowledge, stories, and resources that help communities understand digital inequity and climate risk.
            </p>
          </div>

          {/* Community Co-Creation */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-6">
            <div className="size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/18ba16fe-6838-477d-844d-f7bca993b882" alt="Icon" className="size-6" />
            </div>
            <h3 className="text-[22px] font-bold text-[#1c3530]">Community Co-Creation</h3>
            <p className="text-[16px] leading-relaxed text-[#3d5e57]">
              Working with communities to design practical tools and solutions based on real local needs.
            </p>
          </div>

          {/* Research & Advocacy */}
          <div className="bg-white border border-[#dcfcc0] rounded-[20px] p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] space-y-6">
            <div className="size-[56px] bg-[#2d584a] rounded-full flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/766bfe78-b068-42c6-b858-af5ca8ca3146" alt="Icon" className="size-6" />
            </div>
            <h3 className="text-[22px] font-bold text-[#1c3530]">Research & Advocacy</h3>
            <p className="text-[16px] leading-relaxed text-[#3d5e57]">
              Using data, dashboards, and applied research to support better decisions, policies, and community resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
