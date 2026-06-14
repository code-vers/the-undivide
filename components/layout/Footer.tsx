import Link from "next/link"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c3530] text-white py-[64px] px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-20">
          {/* Brand block */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 font-display text-lg font-bold text-white">
               <Logo className="h-[49px] w-[45px] mb-8" />
            </Link>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-[250px]">
              Empowering communities through technology, education, and advocacy to address climate change and digital inequity.
            </p>
            <div className="flex gap-[12px] pt-4">
               <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
               </Link>
               <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
               </Link>
               <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
               </Link>
            </div>
          </div>

          {/* Column 1: Our services */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              Our services
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <Link href="/programs" className="hover:text-white transition-colors text-white/70">
                  Eco-Dashboard
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors text-white/70">
                  Ten States Projects
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors text-white/70">
                  Policy Advocacy
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors text-white/70">
                  Storytelling Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Get involved */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              Get involved
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-white/70">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-white/70">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-white/70">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors text-white/70">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-medium uppercase tracking-wider text-white/50">
              CONTACT
            </h4>
            <ul className="space-y-3 text-[12px]">
              <li>
                <span className="text-white/70">hello@undivide.org</span>
              </li>
              <li>
                <span className="text-white/70">Atlanta, GA</span>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors font-medium text-white/70">
                  Send a message &rarr;
                </Link>
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
