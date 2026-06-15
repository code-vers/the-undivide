export default function MapSection() {
  return (
    <section className="bg-[#e8edeb] h-[593px] relative w-full overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0 mix-blend-multiply opacity-60">
        <img 
          src="https://www.figma.com/api/mcp/asset/c4b0b7fb-8002-4769-bf9e-ffa8899abc8d" 
          alt="Map" 
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-white mix-blend-saturation" />
      </div>

      {/* Map Pin */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 -translate-y-12">
        <div className="h-[44px] w-[40px] relative">
          <img 
            src="https://www.figma.com/api/mcp/asset/68c317e8-6408-4844-ad68-01ef9c91c29d" 
            alt="Pin" 
            className="size-full object-contain"
          />
        </div>
        <div className="mt-4">
          <div className="bg-white border border-[#dcfcc0] rounded-full px-[17px] py-[9px] shadow-lg">
            <p className="text-[12px] font-bold text-[#2d584a] tracking-[0.6px] uppercase whitespace-nowrap">
              The Undivide Project HQ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
