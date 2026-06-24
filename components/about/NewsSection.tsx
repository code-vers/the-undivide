import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    category: "MIT Technology Review",
    title: "How climate vulnerability and the digital divide are linked",
    description: "Monica Sanders draws connections between internet availability, environmental risk, and historical racial inequity for the Undivide Project.",
    date: "May 10, 2026",
    source: "TechCrunch",
    image: "/assets/sections/about/news/news-1.png",
    url: 'https://www.technologyreview.com/2023/06/20/1074244/climate-vulnerability-digital-divide/'
  },
  {
    category: "Grinnel College",
    title: "Grinnell College Announces Monica Sanders as the Inaugural Social Innovator in Residence",
    description: "Grinnell College is thrilled to announce Monica Sanders as the distinguished inaugural recipient of the Social Innovator in Residence Program.",
    date: "May 6, 2026",
    source: "Grist",
    image: "/assets/sections/about/news/news-2.png",
    url: 'https://www.grinnell.edu/news/grinnell-college-announces-monica-sanders-inaugural-social-innovator-residence'
  },
  {
    category: "Forbes",
    title: "Expert Monica Sanders Analyzes Disproportionate Impact Of Natural Disasters On BIPOC Communities",
    description: "Low-socioeconomic communities face hindrances like prolonged wait times for utility services, personal loss, and lack of essential...",
    date: "May 1, 2026",
    source: "CityLab",
    image: "/assets/sections/about/news/news-3.jpg",
    url: 'https://www.forbes.com/sites/yolandabaruch/2022/10/25/expert-monica-sanders-analyzes-disproportionate-impact-of-natural-disasters-on-bipoc-communities/'
  }
]

export default function NewsSection() {
  return (
    <section className="bg-[#f8f8f2] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[14px] md:text-[16px] font-medium text-[#1c3530] uppercase">
              Our News
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1c3530] text-center">
            In the News
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#5c7a72] text-center max-w-[964px]">
            Stay in the loop about how we're making waves:
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group bg-white border border-[#dcfcc0] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-[220px] sm:h-[300px] md:h-[380px] lg:h-[497px] overflow-hidden bg-[#f8f8f2] flex items-center justify-center">
                <img src={item.image} alt={item.title} className="size-full object-fit transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 md:p-[20px] space-y-2 md:space-y-3">
                <span className="text-[11px] font-semibold text-[#2d584a] group-hover:text-white/80 tracking-[0.88px] uppercase transition-colors duration-300">
                  {item.category}
                </span>
                <h3 className="text-[17px] md:text-[20px] font-bold text-[#1c3530] group-hover:text-white leading-snug line-clamp-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#3d5e57] group-hover:text-white/90 line-clamp-2 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 pt-3">
                  <span className="text-[12px] md:text-[13px] text-[#8fa39d] group-hover:text-white/70 transition-colors duration-300">{item.date}</span>
                  <span className="text-[12px] md:text-[13px] text-[#8fa39d] group-hover:text-white/70 transition-colors duration-300">• {item.source}</span>
                </div>

                <Link href={item?.url} target="_blank">
                  <button className="flex items-center gap-2 pt-3 text-[13px] md:text-[14px] font-semibold text-[#2d584a] group-hover:text-white transition-colors duration-300 cursor-pointer">
                    Read More
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <Link href="/news">
            <button className="group bg-[#2d584a] hover:bg-[#1c3530] text-white h-[52px] md:h-[64px] px-[24px] md:px-[32px] rounded-[12px] text-[15px] md:text-[16px] font-normal shadow-lg flex items-center gap-[12px] transition-colors">
              View All News
              <ArrowRight className="size-[16px] transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
