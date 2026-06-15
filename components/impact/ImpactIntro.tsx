export default function ImpactIntro() {
  return (
    <section className="bg-white py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="space-y-4 mb-10 md:mb-[80px]">
          <div className="inline-block border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium tracking-[0.275px] text-[#2d584a] uppercase">
              Our Pillars of Action
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[63px] items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold leading-[1.1] text-[#1c3530]">
              Community-Led Work, Backed by Research and Practical Tools.
            </h2>

            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg lg:text-[24px] leading-relaxed text-[#3d5e57]">
                We don&apos;t just study problems; we build solutions with the people most affected by them. Our projects are living ecosystems of research, advocacy, and practical digital tools designed to empower local leaders and foster true climate resilience.
              </p>

              <div className="flex flex-wrap gap-[10px] md:gap-[12px]">
                {["Community Co-Creation", "Research & Advocacy", "Tools & Dashboards"].map((tag) => (
                  <div
                    key={tag}
                    className="bg-[#eaf3de] border border-[#cdecb1] rounded-full px-[14px] md:px-[17px] py-[6px] md:py-[8px] text-[13px] md:text-[14px] font-medium text-[#144134] tracking-[0.14px]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
