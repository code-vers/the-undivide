export default function Stats() {
  const stats = [
    { label: "Community Engagement Rate", value: "95%", hasBorder: true },
    { label: "Regions Reached", value: "120+", hasBorder: true },
    { label: "Active State Programs", value: "10", hasBorder: true },
    { label: "People Impacted", value: "50K+", hasBorder: false },
  ]

  return (
    <section className="bg-[#2d584a] py-[64px] px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center py-6 ${stat.hasBorder ? "lg:border-r border-[#3d5e57]" : ""}`}
            >
              <p className="text-[56px] font-extrabold text-[#f8f8f2] leading-none">
                {stat.value}
              </p>
              <p className="text-[20px] text-white/60 text-center mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
