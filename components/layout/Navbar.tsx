"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "./Logo"

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WHAT WE DO", href: "/programs" },
  { label: "OUR PROJECTS", href: "/impact" },
  { label: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="absolute top-0 z-50 w-full backdrop-blur-[6px] bg-[#1a352f]">
      <div className="mx-auto flex h-[123px] max-w-[1920px] items-center justify-between px-8 md:px-[80px]">
        {/* Logo Section */}
        <Link href="/" className="flex items-start shrink-0 w-[275px]">
          <Logo className="h-[84px] w-[78px]" />
          <span className="sr-only">The Undivide Project</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-[32px] pl-[1.18px] shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.label}
                href={link.href} 
                className={cn(
                  "relative flex flex-col justify-center font-['Inter'] font-medium text-[16px] tracking-[2px] uppercase whitespace-nowrap transition-all duration-300",
                  isActive 
                    ? "text-white border-b-2 border-white pb-[6px]" 
                    : "text-white/70 hover:text-white"
                )}
              >
                <span className="leading-[13px]">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center shrink-0">
          <Link href="/donate">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#1a352f] rounded-[22px] px-[33px] h-[44px] text-[12px] font-semibold tracking-[0.6px] uppercase transition-all duration-300"
            >
              DONATE
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
