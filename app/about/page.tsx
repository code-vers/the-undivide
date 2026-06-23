import AboutHero from "@/components/about/AboutHero"
import IntroSection from "@/components/about/IntroSection"
import VisionSection from "@/components/about/VisionSection"
import NewsSection from "@/components/about/NewsSection"
import ChatSection from "@/components/about/ChatSection"
import Stats from "@/components/home/Stats"
import Newsletter from "@/components/home/Newsletter"

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      <AboutHero />
      <IntroSection />
      <NewsSection />
      <VisionSection />
      <ChatSection />
      <Stats />
      <Newsletter />
    </div>
  )
}
