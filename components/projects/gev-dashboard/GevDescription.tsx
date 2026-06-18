export default function GevDescription() {
  return (
    <section className="bg-white py-[120px] px-4 sm:px-8 md:px-[80px]">
      <div className="mx-auto max-w-[1760px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[100px]">
        <div className="w-full lg:max-w-[927px] space-y-12">
          <div className="text-[#2d584a] text-lg md:text-[20px] font-semibold leading-relaxed">
            <p>
              During the 2025 Grinnell College Social Innovator in Residence program, The Undivide Project partnered with faculty, students, and local leaders across Iowa to examine how digital inequity compounds climate and environmental risk. Over seven weeks in spring 2025, followed by a summer data collection phase, the team mapped broadband access, affordability, and reliability alongside regional hazards, including fire, tornado, drought, and flooding risk.
            </p>
          </div>

          <div className="text-[#3d5e57] text-[16px] font-medium tracking-[0.88px] uppercase space-y-6">
            <p className="normal-case font-medium leading-[26px]">
              The centerpiece of this collaboration is the{" "}
              <a 
                href="https://arcg.is/bG5X40" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#2d584a] transition-colors"
              >
                Grinnell Social Innovator in Residence Hazard vs. Connectivity Tool
              </a>
              —an interactive web map that combines state and federal data with community-collected connectivity measurements. The tool allows users to explore where broadband gaps overlap with environmental threats and helps local governments and residents identify priorities for investment, resilience planning, and advocacy. The dataset continues to evolve as community members add new speed test results and local observations.
            </p>

            <p className="normal-case font-medium leading-[26px]">
              Complementing the tool is the{" "}
              <a 
                href="https://www.canva.com/design/DAGu2tf09PI/ROiZXLZKxLTB2TJovW9zqw/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#2d584a] transition-colors"
              >
                Iowa Community Asset Map
              </a>
              , which highlights local strengths—schools, libraries, nonprofits, and mutual aid organizations—that act as social and digital anchors during emergencies. Together, these resources show how grassroots collaboration and data-driven insights can help bridge the digital divide while advancing equitable climate resilience.
            </p>

            <p className="normal-case font-medium leading-[26px]">
              Outcomes from this partnership include new insights into the relationship between digital access and hazard vulnerability, the creation of open-source advocacy tools, and a replicable model for integrating community data and institutional research. The project continues to inform ongoing work in The Undivide Project’s Ten States initiative, linking digital equity, climate adaptation, and policy innovation across the United States.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[756px] aspect-[756/504] rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://www.figma.com/api/mcp/asset/29f67fac-dcf3-427e-9027-10f50905259c"
            alt="Partnership case study"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
