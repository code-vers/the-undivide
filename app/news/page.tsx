import NewsHero from "@/components/news/NewsHero"
import FeaturedNews from "@/components/news/FeaturedNews"
import PressSection from "@/components/news/PressSection"
import InterviewSection from "@/components/news/InterviewSection"
import Stats from "@/components/home/Stats"
import Newsletter from "@/components/home/Newsletter"

export default function NewsPage() {
  return (
    <div className="flex flex-col bg-white">
      <NewsHero />
      <FeaturedNews />
      <PressSection />
      <InterviewSection />
      <Stats />
      <Newsletter />
    </div>
  )
}
