import { Button } from "@/components/ui/button"

export default function AboutHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[653px] lg:min-h-[800px] w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg/about-hero.JPG"
          alt="Mission Background"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/53" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-8 md:px-[80px] pt-16 md:pt-24 lg:pt-[160px] pb-10 md:pb-16">
        <div className="max-w-[1011px] space-y-6 md:space-y-[42px]">
          <div className="opacity-90">
            <p className="text-[14px] md:text-[20px] font-semibold tracking-wide text-white uppercase">
              THE UNDIVIDE PROJECT
            </p>
          </div>

          <div className="space-y-4 md:space-y-[32px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-white">
              Mission Statement
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-[32px] leading-snug text-white font-normal opacity-80">
              We're here to connect people with the resources and technology they need to thrive in a changing world. By tackling the climate crisis and the digital divide together, we're making sure anyone can thrive in the economies to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
