import { Button } from "@/components/ui/button"
import { Paperclip, Share2 } from "lucide-react"

export default function ContactForm() {
  return (
    <section className="bg-[#f1ede1] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[24px] xl:gap-[60px] items-start">
          {/* Left Column: Info & Cards */}
          <div className="space-y-6 md:space-y-[32px]">
            <div className="space-y-3 md:space-y-[16px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold text-[#1c3530] leading-tight tracking-[-0.32px]">
                Feel Free to <br/> Contact &amp; Get Touch!
              </h2>
              <p className="text-base md:text-lg lg:text-[20px] font-medium text-[#3d5e57] leading-relaxed">
                Have a question, partnership idea, or want to learn more about our work at the intersection of climate resilience and digital equity? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3 md:space-y-[16px]">
              {/* Card 1: Email */}
              <div className="bg-white border border-[#dcfcc0] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="size-[44px] md:size-[52px] shrink-0">
                  <img src="https://www.figma.com/api/mcp/asset/75534f63-fa82-4102-a1f0-b20bf0a8af76" alt="Partners" className="size-full" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] tracking-[0.6px] uppercase">EMAIL ADDRESS</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530] break-all">contact@theundivideproject.org</p>
                </div>
              </div>

              {/* Card 2: Partnerships */}
              <div className="bg-white border border-[#dcfcc0] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="size-[44px] md:size-[52px] shrink-0">
                  <img src="https://www.figma.com/api/mcp/asset/75534f63-fa82-4102-a1f0-b20bf0a8af76" alt="Partners" className="size-full" />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] tracking-[0.6px] uppercase">PARTNERSHIPS</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530]">General Inquiry</p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="bg-white border border-[#dcfcc0] rounded-[22px] p-4 md:p-[25px] flex gap-3 md:gap-[16px] items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="size-[44px] md:size-[52px] shrink-0">
                  <img src="https://www.figma.com/api/mcp/asset/a7de202c-5607-4f9b-afea-6d8ed959a30e" alt="Location" className="size-full" />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] md:text-[16px] font-semibold text-[#8fa39d] tracking-[0.6px] uppercase">LOCATION</p>
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1c3530]">Headquarters Location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-[#dcfcc0] rounded-[22px] p-5 sm:p-6 md:p-[41px] shadow-sm">
            <form className="space-y-5 md:space-y-[24px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
                <div className="space-y-2">
                  <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Your Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full bg-white border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] outline-none focus:border-[#2d584a] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="w-full bg-white border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] outline-none focus:border-[#2d584a] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
                <div className="space-y-2">
                  <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full bg-white border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] outline-none focus:border-[#2d584a] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Phone / Organization</label>
                  <input type="text" placeholder="Optional" className="w-full bg-white border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] outline-none focus:border-[#2d584a] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] md:text-[14px] font-medium text-[#1c3530] tracking-[0.14px]">Your Message</label>
                <textarea placeholder="Write your message here..." className="w-full bg-white border border-[#a8b5b0] rounded-[18px] px-[15px] md:px-[17px] py-[13px] md:py-[15px] text-[15px] md:text-[16px] min-h-[140px] md:min-h-[160px] outline-none focus:border-[#2d584a] transition-colors resize-none" />
              </div>

              <button className="bg-[#2d584a] text-white px-[24px] md:px-[32px] py-[14px] md:py-[16px] rounded-full font-bold text-[15px] md:text-[16px] flex items-center gap-2 hover:bg-[#1c3530] transition-colors shadow-sm active:scale-95">
                Send Message
                <img src="https://www.figma.com/api/mcp/asset/a30f0b48-afbc-4b23-bdcd-7a0b36e685ca" alt="Arrow" className="size-[13px]" />
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
    </section>
  )
}
