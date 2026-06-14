import Link from "next/link"

export default function ChatSection() {
  return (
    <section className="relative h-[732px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.figma.com/api/mcp/asset/d5a16ef2-ccaf-4517-bdae-457ad8888f70" 
          alt="Chat Background" 
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1c3530]/85" />
        <div className="absolute inset-0 bg-black/37" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] px-8 md:px-[80px] flex flex-col items-center">
        <h2 className="text-[68px] font-bold text-[#f8f8f2] text-center leading-none tracking-[-1.7px] mb-6">
          Chat to our team
        </h2>
        
        <div className="bg-transparent px-[32px] py-[12px] flex items-center justify-center">
          <p className="text-[15px] font-semibold text-[#f8f8f2] text-center">
            Feel free to chat with us anytime at{" "}
            <Link href="mailto:info@theundivideproject.org" className="text-[#88ddd3] underline decoration-[#88ddd3] decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">
              info@theundivideproject.org.
            </Link>
            {" "}We&apos;d love to hear from you!
          </p>
        </div>
      </div>
    </section>
  )
}
