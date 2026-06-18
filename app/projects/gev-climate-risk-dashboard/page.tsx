import Newsletter from "@/components/home/Newsletter"
import GevHero from "@/components/projects/gev-dashboard/GevHero"
import GevGallery from "@/components/projects/gev-dashboard/GevGallery"
import GevDescription from "@/components/projects/gev-dashboard/GevDescription"
import GevResearch from "@/components/projects/gev-dashboard/GevResearch"
import GevImpact from "@/components/projects/gev-dashboard/GevImpact"
import GevKeyFacts from "@/components/projects/gev-dashboard/GevKeyFacts"

export const metadata = {
  title: "GEV Climate Risk Dashboard | The Undivide Project",
  description: "Mapping where hazard risk meets the digital divide—powered by community data and collaboration across Iowa.",
}

export default function GevDashboardPage() {
  return (
    <div className="flex flex-col bg-white">
      <GevHero />
      <GevGallery />
      <GevDescription />
      <GevResearch />
      <GevImpact />
      <GevKeyFacts />
      <Newsletter />
    </div>
  )
}
