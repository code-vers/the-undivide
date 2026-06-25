import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="bg-[#f1ede1] py-16 md:py-[120px] px-6 md:px-[80px]">
      <div className="mx-auto max-w-[1526px] flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1c3530] text-center max-w-[866px]">
          Stay Connected to the Movement.
        </h2>
        <p className="text-[16px] font-medium text-[#5c7a72] text-center max-w-[616px] mt-4">
          Get updates on our work, upcoming events, and ways to get involved in building a more equitable future.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row w-full max-w-[825px] gap-3 sm:gap-0">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow h-[48px] bg-white rounded-[8px] sm:rounded-r-none sm:rounded-l-[8px] px-[17px] text-[15px] text-[#8fa39d] outline-none w-full"
          />
          <Button 
            type="submit"
            className="h-[48px] bg-[#2d584a] hover:bg-[#1c3530] text-[#f8f8f2] px-[32px] rounded-[8px] sm:rounded-l-none sm:rounded-r-[8px] text-[16px] font-medium w-full sm:w-auto"
          >
            Subscribe
          </Button>
        </form>

        <p className="text-[11px] text-[#8fa39d] text-center mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
