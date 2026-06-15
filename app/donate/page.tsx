import DonateHero from "@/components/donate/DonateHero"
import ImpactPanel from "@/components/donate/ImpactPanel"
import WhyDonate from "@/components/donate/WhyDonate"
import DonationImpact from "@/components/donate/DonationImpact"
import ImpactStats from "@/components/donate/ImpactStats"
import DonateIntro from "@/components/donate/DonateIntro"
import PromotionSection from "@/components/programs/PromotionSection"

export default function DonatePage() {
  return (
    <div className="flex flex-col bg-white">
      <DonateHero />
      <div className="relative">
        <ImpactPanel />
        <WhyDonate />
        <DonationImpact />
      </div>
      <div className="space-y-0">
        <ImpactStats />
        <DonateIntro />
      </div>
      <PromotionSection />
    </div>
  )
}
