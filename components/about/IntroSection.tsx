import { BookOpenText, ChartColumn, Users } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="space-y-4 mb-10 md:mb-[80px]">
          <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#2d584a] uppercase">
              ABOUT US
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] xl:gap-[145px] items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-[1.1] text-[#1c3530]">
              Connecting Communities With{" "}
              <span className="text-[#2d584a]">Tools, Technology, and Support.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
                The Undivide Project works at the intersection of digital equity, climate resilience, education, research, and advocacy. We connect communities with the resources and technology they need to prepare for climate challenges and build a more equitable future.
              </p>
              <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
                Our approach combines practical tools, data-driven insights, and community-centered design to address the urgent challenges at the intersection of climate change and digital access.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Public Education */}
          <div className="group bg-white border border-[#dcfcc0] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] group-hover:bg-white text-white group-hover:text-[#2d584a] rounded-full flex items-center justify-center transition-colors duration-300">
              <BookOpenText className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530] group-hover:text-white transition-colors duration-300">Public Education</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57] group-hover:text-white/90 transition-colors duration-300">
              Sharing knowledge, stories, and resources that help communities understand digital inequity and climate risk.
            </p>
          </div>

          {/* Community Co-Creation */}
          <div className="group bg-white border border-[#dcfcc0] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] group-hover:bg-white text-white group-hover:text-[#2d584a] rounded-full flex items-center justify-center transition-colors duration-300">
              <Users className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530] group-hover:text-white transition-colors duration-300">Community Co-Creation</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57] group-hover:text-white/90 transition-colors duration-300">
              Working with communities to design practical tools and solutions based on real local needs.
            </p>
          </div>

          {/* Research & Advocacy */}
          <div className="group bg-white border border-[#dcfcc0] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[20px] p-6 md:p-[33px] shadow-[0px_2px_4px_rgba(28,53,48,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4 md:space-y-6">
            <div className="size-[48px] md:size-[56px] bg-[#2d584a] group-hover:bg-white text-white group-hover:text-[#2d584a] rounded-full flex items-center justify-center transition-colors duration-300">
              <ChartColumn className="size-5 md:size-6" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1c3530] group-hover:text-white transition-colors duration-300">Research & Advocacy</h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3d5e57] group-hover:text-white/90 transition-colors duration-300">
              Using data, dashboards, and applied research to support better decisions, policies, and community resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
