import ProgramsHero from "@/components/programs/ProgramsHero"
import PillarsSection from "@/components/programs/PillarsSection"
import EventsSection from "@/components/programs/EventsSection"
import ResearchAdvocacy from "@/components/programs/ResearchAdvocacy"
import PromotionSection from "@/components/programs/PromotionSection"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col bg-white">
      <ProgramsHero />
      <PillarsSection />
      <EventsSection />
      <ResearchAdvocacy />
      <PromotionSection />
    </div>
  )
}
