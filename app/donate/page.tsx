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
      <div className="relative bg-[#fdf9ed]">
        <ImpactPanel />
        <WhyDonate />
      </div>
      <ImpactStats />
      <DonationImpact />
      <div className="space-y-0 bg-[#fdf9ed]">
        <DonateIntro />
      </div>
      <PromotionSection />
    </div>
  )
}
