export default function GevKeyFacts() {
  const facts = [
    { label: "Counties Mapped", value: "3" },
    { label: "Residency Funding", value: "$50K" },
    { label: "Inaugural Social Innovator in Residence", value: "1st" },
    { label: "FCC Claims vs. Reality Gap", value: "100%" },
  ]

  return (
    <section className="bg-[#2d584a] py-[64px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-[80px]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, idx) => (
            <div 
              key={idx}
              className={`flex flex-col items-center justify-center p-8 ${
                idx !== facts.length - 1 ? "lg:border-r border-[#3d5e57]" : ""
              }`}
            >
              <p className="text-[52px] font-extrabold text-[#f8f8f2] leading-none mb-3">
                {fact.value}
              </p>
              <p className="text-sm text-white/60 text-center leading-relaxed">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
