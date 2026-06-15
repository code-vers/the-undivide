import Link from "next/link"

export default function ContactHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[547px] lg:min-h-[647px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.figma.com/api/mcp/asset/30ead96a-b370-4f22-a864-d713dad700a4"
          alt="Contact Hero Background"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1c3530]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 md:px-[64px] h-full flex flex-col items-center justify-center pt-[80px] md:pt-[123px]">
        <div className="space-y-3 md:space-y-[16px] text-center">
          <p className="text-[11px] md:text-[12px] font-semibold tracking-[0.6px] text-[#dcfcc0] uppercase">
            GET IN TOUCH
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-[#f8f8f2] leading-tight">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-[8px] pt-2">
            <Link href="/" className="text-[13px] md:text-[14px] font-medium tracking-[0.14px] text-[#e8edeb] hover:text-white transition-colors">
              Home
            </Link>
            <img src="https://www.figma.com/api/mcp/asset/c37edb8e-4a2f-4619-8147-1b79950c15db" alt="separator" className="size-2 opacity-60" />
            <span className="text-[13px] md:text-[14px] font-medium tracking-[0.14px] text-[#e8edeb]">
              Contact
            </span>
          </nav>
        </div>
      </div>
    </section>
  )
}
