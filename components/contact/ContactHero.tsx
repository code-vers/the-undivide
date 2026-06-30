import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[547px] lg:min-h-[770px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/bg/contact-hero.JPG" alt="Contact Hero Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#1c3530]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 md:px-[64px] h-full flex flex-col items-center justify-center pt-[80px] md:pt-[123px]">
        <div className="space-y-3 md:space-y-[16px] text-center">
          <p className="text-[11px] md:text-[12px] font-semibold tracking-[0.6px] text-[#ffffff] uppercase">
            GET IN TOUCH
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-[#f8f8f2] leading-tight">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  )
}
