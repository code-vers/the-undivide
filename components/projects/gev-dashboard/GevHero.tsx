import { MapPin, Building2, Calendar } from "lucide-react"

export default function GevHero() {
  return (
    <section className="relative h-[770px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img fetchPriority="high" src="/assets/bg/GEV-hero.JPG" alt="Grinnell Iowa" className="size-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-8 md:px-[80px] pt-[200px] md:pt-[264px]">
        <div className="max-w-[1696px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[17px] py-[5px] border border-white/25 rounded-full mb-4">
            <span className="text-[11px] font-medium tracking-[0.88px] uppercase text-white/55">
              Community Project
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight max-w-[1452px] mb-8">
            Grinnell Social Innovator in Residence: Hazard vs. Connectivity Collaboration
          </h1>

          {/* Description */}
          <p className="text-lg md:text-[22px] text-white/70 max-w-[700px] leading-relaxed mb-8">
            Mapping where hazard risk meets the digital divide—powered by community data and collaboration across Iowa.
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-white/60" />
              <span className="text-sm text-white/65">Grinnell, Iowa</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="size-4 text-white/60" />
              <span className="text-sm text-white/65">Grinnell College Partnership</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-white/60" />
              <span className="text-sm text-white/65">2024 — Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
