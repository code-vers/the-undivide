"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute top-0 z-50 w-full backdrop-blur-[6px] bg-[#1a352f]/90">
        <div className="mx-auto flex h-[80px] md:h-[100px] lg:h-[123px] max-w-[1920px] items-center justify-between px-4 sm:px-6 md:px-[80px]">
          {/* Logo Section */}
          <Link href="/" className="flex items-start shrink-0" onClick={() => setIsOpen(false)}>
            <Logo className="h-[46px] w-[42px] md:h-[60px] md:w-[56px] lg:h-[84px] lg:w-[78px]" />
            <span className="sr-only">The Undivide Project</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-[24px] xl:gap-[32px] shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative flex flex-col justify-center font-['Inter'] font-medium text-[14px] xl:text-[16px] tracking-[2px] uppercase whitespace-nowrap transition-all duration-300",
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

          {/* Right Side: Donate button + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/donate" className="hidden sm:block">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a352f] rounded-[22px] px-[20px] lg:px-[33px] h-[38px] lg:h-[44px] text-[11px] lg:text-[12px] font-semibold tracking-[0.6px] uppercase transition-all duration-300"
              >
                DONATE
              </Button>
            </Link>

            {/* Hamburger Button - mobile/tablet */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-[40px] h-[40px] rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-[#1a352f] shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo className="h-[42px] w-[38px]" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col flex-1 px-6 py-8 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg font-medium text-[14px] tracking-[1.5px] uppercase transition-all duration-200",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Donate Button */}
          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            <Link href="/donate" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full bg-white text-[#1a352f] hover:bg-white/90 rounded-[22px] h-[46px] text-[13px] font-semibold tracking-[0.6px] uppercase">
                DONATE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
