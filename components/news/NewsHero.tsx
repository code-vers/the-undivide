import Link from "next/link"

export default function NewsHero() {
  return (
    <section className="bg-white pt-[187px] pb-[80px]">
      <div className="mx-auto max-w-[1760px] px-8 md:px-[80px]">
        <div className="flex flex-col md:flex-row gap-[50px] items-start">
          {/* Section Marker */}
          <div className="flex flex-col w-[189px]">
            <span className="text-[96px] font-bold text-[#1c3530] leading-none opacity-20">01</span>
            <span className="text-[16px] font-medium text-[#1c3530] mt-4 uppercase tracking-wide">In the News</span>
          </div>

          {/* Hero Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-[77px] font-bold text-[#1c3530] leading-[1.1]">
              In the News
            </h1>
            <p className="text-[24px] text-[#3d5e57] leading-relaxed max-w-[800px]">
              Updates, features, interviews, and stories highlighting our work at the intersection of climate resilience and digital equity.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-[#d6cfc0] mt-[80px]" />
      </div>
    </section>
  )
}
