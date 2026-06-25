import { Button } from "@/components/ui/button"
import { Paperclip, Share2, ArrowUpRight, Mail, Handshake, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  return (
    <section className="bg-[#f1ede1] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]" id="contact-form">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[24px] xl:gap-[60px] items-start">
          {/* Left Column: Info & Cards */}
          <div className="space-y-6 md:space-y-[32px]">
            <div className="space-y-3 md:space-y-[16px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold text-[#1c3530] leading-tight tracking-[-0.32px]">
                Feel Free to <br /> Contact &amp; Get Touch!
              </h2>
              <p className="text-base md:text-lg lg:text-[20px] font-medium text-[#3d5e57] leading-relaxed">
                Have a question, partnership idea, or want to learn more about our work at the intersection of climate resilience and digital equity? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3 md:space-y-[16px]">
              {/* Card 1: Email */}
              <Link 
                href="mailto:info@theundivideproject.org"
                className="group block bg-white border border-[#2d584a] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline cursor-pointer"
              >
                <div className="size-[44px] md:size-[52px] shrink-0 bg-[#2d584a]/10 group-hover:bg-white/20 text-[#2d584a] group-hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <Mail className="size-5 md:size-6" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] group-hover:text-white/80 tracking-[0.6px] uppercase transition-colors duration-300">EMAIL ADDRESS</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530] group-hover:text-white break-all transition-colors duration-300">info@theundivideproject.org</p>
                </div>
              </Link>

              {/* Card 2: Socials */}
              <Link 
                href="https://linktr.ee/theundivide"
                target="_blank"
                className="group block bg-white border border-[#2d584a] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline cursor-pointer"
              >
                <div className="size-[44px] md:size-[52px] shrink-0 bg-[#2d584a]/10 group-hover:bg-white/20 text-[#2d584a] group-hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <Handshake className="size-5 md:size-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] group-hover:text-white/80 tracking-[0.6px] uppercase transition-colors duration-300">OUR SOCIALS</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530] group-hover:text-white transition-colors duration-300">Linktree</p>
                </div>
              </Link>

              {/* Card 3: Location */}
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=601+King+St+STE+200+%23671%2C+Alexandria%2C+Virginia"
                target="_blank"
                className="group block bg-white border border-[#2d584a] hover:border-[#2d584a] hover:bg-[#2d584a] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline cursor-pointer"
              >
                <div className="size-[44px] md:size-[52px] shrink-0 bg-[#2d584a]/10 group-hover:bg-white/20 text-[#2d584a] group-hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <MapPin className="size-5 md:size-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] group-hover:text-white/80 tracking-[0.6px] uppercase transition-colors duration-300">LOCATION</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530] group-hover:text-white transition-colors duration-300">601 King St STE 200 #671, Alexandria, Virginia</p>
                </div>
              </Link>
            </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white border border-[#2d584a] rounded-[22px] p-5 sm:p-6 md:p-[41px] shadow-sm">
          <form className="space-y-5 md:space-y-[24px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
              <div className="space-y-2">
                <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Your Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-white text-[#1c3530] placeholder:text-[#8fa39d] border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2d584a] focus:border-[#2d584a]" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Email Address</label>
                <input type="email" placeholder="Enter your email address" className="w-full bg-white text-[#1c3530] placeholder:text-[#8fa39d] border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2d584a] focus:border-[#2d584a]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
              <div className="space-y-2">
                <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full bg-white text-[#1c3530] placeholder:text-[#8fa39d] border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2d584a] focus:border-[#2d584a]" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Phone / Organization</label>
                <input type="text" placeholder="Optional" className="w-full bg-white text-[#1c3530] placeholder:text-[#8fa39d] border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2d584a] focus:border-[#2d584a]" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Your Message</label>
              <textarea placeholder="Write your message here..." className="w-full bg-white text-[#1c3530] placeholder:text-[#8fa39d] border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] min-h-[140px] md:min-h-[160px] transition-all focus:outline-none focus:ring-2 focus:ring-[#2d584a] focus:border-[#2d584a] resize-none" />
            </div>

            <button className="group bg-[#2d584a] text-white px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-full font-bold text-[15px] md:text-[16px] flex items-center gap-2 hover:bg-[#1c3530] transition-colors shadow-sm active:scale-95">
              Send Message
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="border-t border-[#dcfcc0] pt-5 md:pt-[25px] mt-4 md:mt-[16px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="text-[11px] md:text-[12px] font-semibold text-[#8fa39d] tracking-[0.6px] uppercase">Or connect with us on social media</p>
              <div className="flex gap-[12px] md:gap-[16px]">
                <div className="size-[38px] md:size-[40px] bg-[#eaf3de] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#dcfcc0] transition-colors">
                  <Paperclip className="size-4 text-[#2D584A]" />
                </div>
                <div className="size-[38px] md:size-[40px] bg-[#eaf3de] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#dcfcc0] transition-colors">
                  <Share2 className="size-4 text-[#2D584A]" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section >
  )
}
