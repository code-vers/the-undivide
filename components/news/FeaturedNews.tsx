import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const latestUpdates = [
  {
    category: "PRESS",
    title: "Digital Equity Program Brings High-Speed Internet to Rural Georgia",
    date: "May 12, 2026"
  },
  {
    category: "INTERVIEW",
    title: "Founder Discusses Intersection of Climate Action and Data",
    date: "May 8, 2026"
  },
  {
    category: "RESEARCH",
    title: "New Study Shows Community Solar Programs Reduce Energy Burden",
    date: "May 3, 2026"
  },
  {
    category: "PRESS",
    title: "Partnership with Local Libraries Expands Tech Training",
    date: "April 28, 2026"
  }
]

export default function FeaturedNews() {
  return (
    <section className="bg-white py-[80px]">
      <div className="mx-auto max-w-[1760px] px-8 md:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1253px_1fr] gap-[40px]">
          {/* Left: Featured Article */}
          <div className="space-y-8 group cursor-pointer">
            <div className="aspect-[1253/554] rounded-[24px] overflow-hidden">
              <img
                src="/assets/bg/news-hero.png"
                alt="Featured News"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <span className="text-[13px] font-bold text-[#2d584a] tracking-[3px] uppercase">
                FEATURED
              </span>
              <h2 className="text-[48px] font-bold text-[#1c3530] leading-tight max-w-[984px]">
                Grinnell College Announces Monica Sanders as the Inaugural Social Innovator in Residence
              </h2>
              <p className="text-[20px] text-[#3d5e57] leading-relaxed max-w-[1035px]">
                Grinnell College is thrilled to announce Monica Sanders as the distinguished inaugural recipient of the Social Innovator in Residence Program.
              </p>

              <div className="flex items-center gap-3 text-[16px] text-[#8fa39d]">
                <span>May 15, 2026</span>
                <span>• Fast Company</span>
              </div>

              <Link href={"https://www.grinnell.edu/news/grinnell-college-announces-monica-sanders-inaugural-social-innovator-residence"}>
                <button className="flex items-center gap-2 text-[18px] font-semibold text-[#2d584a] hover:opacity-80 transition-opacity pt-4">
                  Read More
                  <ArrowUpRight size={20} />
                </button>
              </Link>

            </div>
          </div>

          {/* Right: Latest Updates Sidebar */}
          <div className="bg-[#f8f8f2] border border-[#d6cfc0] rounded-[24px] p-[32px] h-fit">
            <h3 className="text-[24px] font-bold text-[#1c3530] mb-8">Latest Updates</h3>
            <div className="space-y-10">
              {latestUpdates.map((update, i) => (
                <div key={i} className="space-y-3 group cursor-pointer border-b border-[#d6cfc0] pb-6 last:border-0 last:pb-0">
                  <span className="text-[11px] font-bold text-[#2d584a] tracking-wider uppercase">
                    {update.category}
                  </span>
                  <h4 className="text-[18px] font-bold text-[#1c3530] leading-snug group-hover:text-[#2d584a] transition-colors">
                    {update.title}
                  </h4>
                  <p className="text-[14px] text-[#8fa39d]">{update.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
