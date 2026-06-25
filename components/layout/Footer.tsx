import Link from "next/link"
import Logo from "./Logo"
import { Link2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c3530] text-white py-[64px] px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-20">
          {/* Brand block */}
          <div className="space-y-6">
            <Link href="/" className="flex items-start shrink-0">
              <Logo className="h-[46px] w-[42px] md:h-[60px] md:w-[56px] lg:h-[84px] lg:w-[78px]" />
              <span className="sr-only">The Undivide Project</span>
            </Link>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-[250px]">
              Empowering communities through technology, education, and advocacy to address climate change and digital inequity.
            </p>
            <div className="flex gap-[12px] pt-4">
              <Link href={"https://linktr.ee/theundivide?fbclid=PAZXh0bgNhZW0CMTEAAac6vdyK-U0F-blPOfGMHW3eZNdcQKxP2FNG5DCXM1KqL6X-Zs9VTDReRyP5eA_aem_NVBjfZP6J6Neu-qHuA9USg"} target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="Linktree">
                <Link2 />
              </Link>
              <Link href="https://www.facebook.com/people/The-Undivide-Project/100083055264645/" target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/theundivideproject/" target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/the-unidivide-project/" target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href={"https://www.youtube.com/channel/UCz0dO7FYgEQbR5UofPclwfA"} target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </Link>
            </div>
          </div>

          {/* Column 1: Our services */}
          <div className="space-y-4">
            <h4 className="text-14 font-medium uppercase tracking-wider text-white">
              Our services
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <Link href="/projects/gev-climate-risk-dashboard" className="hover:text-white transition-colors text-white/70">
                  Grinnell Social Innovator
                </Link>
              </li>
              <li>  
                <Link href="/impact" className="hover:text-white transition-colors text-white/70">
                  Eco-Dashboard
                </Link>
              </li>
              <li>
                <Link href="https://the-ten-states-project-for-equitable-climate-risk-undivide.hub.arcgis.com/" target="_blank" className="hover:text-white transition-colors text-white/70">
                  Ten States Project
                </Link>
              </li>
              <li>
                <Link href="/impact#community-programs" className="hover:text-white transition-colors text-white/70">
                  Community Programs
                </Link>
              </li>
              <li>
                <Link href="/impact#policy-advocacy" className="hover:text-white transition-colors text-white/70">
                  Policy Advocacy
                </Link>
              </li>
              {/* <li>
                <Link href="/programs" className="hover:text-white transition-colors text-white/70">
                 Storytelling Work
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 2: Get involved */}
          <div className="space-y-4">
            <h4 className="text-14 font-medium uppercase tracking-wider text-white">
              Get involved
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-white/70">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors text-white/70">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-white/70">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-white/70">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-14 font-medium uppercase tracking-wider text-white">
              CONTACT
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <span className="text-white/70">info@theundivideproject.org</span>
              </li>
              <li>
                <span className="text-white/70">601 King St STE 200 #671, Alexandria, Virginia</span>
              </li>
            </ul> 
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-[#3d5e57] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40">
            &copy; 2025 The Undivide Project. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[16px] leading-[24px]">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
