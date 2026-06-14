import Hero from "@/components/home/Hero"
import Intro from "@/components/home/Intro"
import Programs from "@/components/home/Programs"
import Team from "@/components/home/Team"
import ImpactQuote from "@/components/home/ImpactQuote"
import Stats from "@/components/home/Stats"
import Newsletter from "@/components/home/Newsletter"

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <Programs />
      <Team />
      <ImpactQuote />
      <Stats />
      <Newsletter />
    </div>
  )
}
