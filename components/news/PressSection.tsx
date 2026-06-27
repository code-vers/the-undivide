import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const pressItems = [
  {
    category: "FEATURE",
    title: "How climate vulnerability and the digital divide are linked",
    description: "The Wi-Fi signal is weak outside the Frederick Douglass National Historic Site in Anacostia, a historic African-American section of Washington, DC. The abolitionist leader's former home sits serenely atop a grassy hill in the otherwise bustling neighborhood.",
    date: "April 25, 2026",
    source: "MIT Technology Review",
    image: "/assets/sections/news/news_card_1.jpg",
    url: 'https://www.benton.org/headlines/how-climate-vulnerability-and-digital-divide-are-linked'
  },
  {
    category: "INNOVATION",
    title: "What is Climate Justice? It's more than just a trending term.",
    description: "During this event we will explore the critical connections between water issues and community representation. This event will bring together leaders, researchers, and advocates to discuss tools and strategies for empowering communities to educate policymakers on water security, environmental justice, and resource access.",
    date: "April 20, 2026",
    source: "Medium",
    image: "/assets/sections/news/news_card_3.jpg",
    url: 'https://medium.com/the-new-climate/what-is-climate-justice-its-more-than-just-a-trending-term-851b67396234'
  },
  {
    category: "SUSTAINABILITY",
    title: "Analyze Disproportionate Impact Of Natural Disasters On BIPOC Communitie.",
    description: "The National Library of Medicine conducted research showing a stark disparity between Black and Latino communities who experience a higher risk...",
    date: "April 18, 2026",
    source: "Medium",
    image: "/assets/sections/news/news_card_4.png",
    url: "https://www.forbes.com/sites/yolandabaruch/2022/10/25/expert-monica-sanders-analyzes-disproportionate-impact-of-natural-disasters-on-bipoc-communities/"
  },
    {
    category: "FEATURE",
    title: "Contributions to Sustainability",
    description: "Writing for Forbes since 2023, Monica has reported on key issues such as the impact of extreme weather events on vulnerable communities and advancements in climate justice.",
    date: "April 25, 2026",
    source: "Forbes",
    image: "/assets/sections/news/news_card_5.jpg",
    url: 'https://www.forbes.com/sites/monicasanders/'
  },
  {
    category: "INNOVATION",
    title: "Disaster Resilience with Prof. Monica Sanders. Are you READY?",
    description: "A sit down with Professor Monica Sanders and discuss disaster resilience and what you can to to put yourself in a better position when you are faced with a natural disaster.",
    date: "April 20, 2026",
    source: "Around the House",
    image: "/assets/sections/news/news_card_6.png",
    url: 'https://www.youtube.com/watch?v=_9i5qX6Th-k'
  },
  {
    category: "SUSTAINABILITY",
    title: "The Storm That Blew Us Apart",
    description: "A powerful story about the aftermath of a devastating storm and its impact on a small community.",
    date: "April 18, 2026",
    source: "Oxford American",
    image: "/assets/sections/news/news_card_7.jpg",
    url: "https://oxfordamerican.org/oa-now/the-storm-that-blew-us-apart"
  },
   {
    category: "SUSTAINABILITY",
    title: "Why Brands Should Embrace Slow Fashion and Renewable Consumption",
    description: "Fashion is a statement about who you are and how you navigate the world. I believe we've moved away from this idea and have become too focused on trends or what's considered attractive, instead of using our attire to communicate our individuality. For example, if I'm wearing the latest trendy outfit, it conveys a certain message about me, but if I'm in comfortable, professionally appropriate attire, that tells a different story.",
    date: "April 18, 2026",
    source: "Medium",
    image: "/assets/sections/news/news-card-8.jpg",
    url: "https://oxfordamerican.org/oa-now/the-storm-that-blew-us-apart"
  },
   {
    category: "SUSTAINABILITY",
    title: "Social Impact Heroes: Why & How Monica Sanders Is Helping To Change Our World",
    description: "Imposter syndrome is fake. Just keep going. As I said, I have had struggles with this phenomenon. Then I realized it is the product of anxiety and to a lesser extent, societal expectations. It is not a real thing that can have an impact beyond allowing it to have one.",
    date: "April 18, 2026",
    source: "Medium",
    image: "/assets/sections/news/news_card_9.png",
    url: "https://medium.com/authority-magazine/social-impact-heroes-why-how-monica-sanders-of-the-undivided-project-is-helping-to-change-our-409d2784f51b"
  },
  {
    category: "SUSTAINABILITY",
    title: "Unlocking The Future Of Work by Updating Federal Job Classifications",
    description: "The Standard Occupational Classification (SOC) system contains critical statistical information about occupations, employment levels, trends, pay and benefits, demographic characteristics, and more. The system allows users – including leaders at Federal agencies – to collect, analyze, and disseminate data on employment trends, wages, and workforce demographics, and it enables a consistent analysis of the labor market. However, the rapid evolution of the job market, particularly in the tech sector, is outpacing updates to the SOC system. This misalignment poses challenges for economic measurement and development.",
    date: "April 18, 2026",
    source: "Federation of American Scientists",
    image: "/assets/sections/news/news_card_10.png",
    url: "https://fas.org/publication/future-of-work-classifications/ "
  },
  {
    category: "SUSTAINABILITY",
    title: "Heroes Of The COVID Crisis",
    description: "Many of us are becoming more socially aware. We are thinking about the climate in a more intentional way. I am seeing social impact businesses being started and others redirecting in that way. My hope is that this odd period of being both in stasis and unrest will cause the majority of us to decide to keep some of the good from this experience and move it forward.",
    date: "April 18, 2026",
    source: "Medium",
    image: "/assets/sections/news/news_card_11.jpg",
    url: "https://medium.com/authority-magazine/heroes-of-the-covid-crisis-how-professor-monica-sanders-aims-to-facilitate-an-equitable-recovery-6cd6caac62d9"
  },
  {
    category: "SUSTAINABILITY",
    title: "Regional Security in a Changing Context",
    description: "Representing The Undivide Project, Monica shared critical insights on how climate change, cyber threats, and criminal activity converge to destabilize communities—especially impacting women—and emphasized the role of women's leadership and resilience in building security.",
    date: "April 18, 2026",
    source: "ParlAmericas",
    image: "/assets/sections/news/news_card_12.jpg",
    url: "https://thedialogue.org/analysis/parlamericas-parliamentary-delegation-regional-security-in-a-changing-context-traditional-and-non-traditional-threats"
  },
]

export default function PressSection() {
  return (
    <section className="bg-[#f8f8f2] py-[100px]">
      <div className="mx-auto max-w-[1760px] px-8 md:px-[80px]">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="size-3 rounded-full bg-[#2d584a]" />
          <h2 className="text-[32px] font-bold text-[#1c3530]">Press & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {pressItems.map((item, idx) => (
            <Link 
            target="_blank"
              key={idx} 
              href={item.url}
              className="bg-white border border-[#dcfcc0] rounded-[24px] overflow-hidden group shadow-sm flex flex-col h-full transition-all duration-300 hover:bg-[#2d584a] hover:border-[#2d584a] hover:shadow-lg text-left"
            >
              <div className="h-[248px] overflow-hidden w-full">
                <img src={item.image} alt={item.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-[32px] flex flex-col flex-1 space-y-4 w-full">
                <span className="text-[12px] font-bold text-[#2d584a] tracking-[1px] uppercase transition-colors duration-300 group-hover:text-[#dcfcc0]">
                  {item.category}
                </span>
                <h3 className="text-[22px] font-bold text-[#1c3530] leading-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#3d5e57] leading-relaxed line-clamp-3 transition-colors duration-300 group-hover:text-white/90">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-3 pt-4 mt-auto">
                  <span className="text-[14px] text-[#8fa39d] transition-colors duration-300 group-hover:text-white/60">{item.date}</span>
                  <span className="text-[14px] text-[#8fa39d] transition-colors duration-300 group-hover:text-white/60">• {item.source}</span>
                </div>

                <div 
                  className="inline-flex items-center gap-2 pt-6 text-[16px] font-semibold text-[#2d584a] transition-colors duration-300 group-hover:text-white w-fit hover:opacity-80"
                >
                  Read More
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
