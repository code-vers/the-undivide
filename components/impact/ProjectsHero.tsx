export default function ProjectsHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[653px] lg:min-h-[753px] w-full overflow-hidden flex items-end">
      {/* Background Image Layer 1 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.figma.com/api/mcp/asset/60b7bc9e-2422-4c4c-b438-d0cc93642932"
          alt="Projects Background"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/53" />
      </div>

      {/* Background Image Layer 2 (Overlay pattern) */}
      <div className="absolute inset-0 z-10 opacity-70">
        <img
          src="https://www.figma.com/api/mcp/asset/ff37667e-6984-4f30-8398-eed3489cfdce"
          alt="Overlay Pattern"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1c3530]/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-[1760px] px-4 sm:px-8 md:px-[80px] pt-[100px] md:pt-[180px] lg:pt-[264px] pb-10 md:pb-16">
        <div className="max-w-[1011px] space-y-6 md:space-y-[42px]">
          <div className="opacity-90">
            <p className="text-[14px] md:text-[20px] font-semibold tracking-wide text-white uppercase">
              Our Projects
            </p>
          </div>

          <div className="space-y-4 md:space-y-[32px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-white">
              Projects Built With Communities.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-[32px] leading-snug text-white font-normal opacity-80 max-w-[1011px]">
              Explore the initiatives, research, tools, and community-centered work helping close the divide between digital access and climate resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
