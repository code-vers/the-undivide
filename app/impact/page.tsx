import ProjectsHero from "@/components/impact/ProjectsHero"
import ImpactIntro from "@/components/impact/ImpactIntro"
import ExploreProjects from "@/components/impact/ExploreProjects"
import CommunityPrograms from "@/components/impact/CommunityPrograms"
import PolicyAdvocacy from "@/components/impact/PolicyAdvocacy"
import PromotionSection from "@/components/programs/PromotionSection"

export default function ImpactPage() {
  return (
    <div className="flex flex-col bg-white">
      <ProjectsHero />
      <ImpactIntro />
      <ExploreProjects />
      <CommunityPrograms />
      <PolicyAdvocacy />
      <PromotionSection />
    </div>
  )
}
