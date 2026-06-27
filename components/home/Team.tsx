"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import TeamDialog, { TeamMember } from "./TeamDialog"

const teamMembers: TeamMember[] = [
  {
    id: "monica",
    name: "Monica Sanders",
    role: "Founder / Advocate in Chief",
    description: `Founder, Advocate in Chief

Prof. Monica Sanders JD, LL.M. is an attorney, educator, and advocate. She focuses on disasters, climate justice, and how law and policy can be both inhibitors and creators of systemic change. She holds undergraduate degrees from the University of Miami and the University of Costa Rica. She received her science and legal qualifications from the Catholic University of America, Jagiellonian University, Harvard Law School, and University College London. Professor Sanders is a two-time social impact founder, who started both The Undivide Project and Bonne Terre LLC - Consulting for the Planet. She and her teams partner with communities in Washington, DC, Southeast Louisiana, and Puerto Rico. Professor Sanders teaches at the Georgetown University Law Center and is an affiliated scholar with the Earth Commons at Georgetown University.

`,
    image: "/assets/team/Monica.jpeg",
    tags: ["Leadership", "Advocacy", "Policy", "Justice"]
  },
  {
    id: "anne",
    name: "Anne Gibbon",
    role: "Advisor",
    description: `Advisor

Anne Gibbon is passionate about designing experiences that support leaders in making better decisions. She graduated from the Naval Academy in 2003, setting the 2000m erg record and becoming the first woman at the school to box competitively. She later won the 2007 National Amateur Boxing Championship. Through 10 years of military service Anne moved between roles including navigator of a warship, admiral’s aide, and leadership instructor. Her last tour was at Naval Special Warfare Development Group, where she helped to found an internal think tank. Since leaving the Navy she completed a fellowship at Stanford’s Design School and went on to consulting. Before launching Matri, a decision management and AI tech startup, Anne lived in New Zealand working with Maori tribes, co-designing innovation strategies.`,
    image: "/assets/team/Anne.jpeg",
    tags: ["Strategy", "Design", "Innovation", "Impact"]
  },
  {
    id: "yian",
    name: "Yian Hu",
    role: "Alumni",
    description: `Yian Hu is a second-year student at Georgetown University, pursuing a Master’s in Data Science and Analytics. He joined The Undivide Project team in September 2024 through his capstone course, focusing on evaluating climate risks and health impacts in low socioeconomic status counties across Ten States. Drawing on his passion for data-driven problem-solving, Yian aims to identify counties most vulnerable to climate change and support interventions that foster health equity and resilience.`,
    image: "/assets/team/Yian.jpg",
    tags: ["Technology", "Innovation", "Data Science", "Infrastructure"]
  },
  {
    id: "meghan",
    name: "Meghan McPherson",
    role: "Advisor",
    description: `Meghan McPherson is the Director of Emergency Management Education, Training, and Exercises for the Mount Sinai Health System in New York City. In this role, Meghan leads the development, planning, and execution of a robust training and exercise program across the health system. McPherson is a seasoned emergency manager with over two decades of experience in the field. Most recently, she served as the Director of Emergency Management for Mount Sinai Queens Hospital on the front lines of the response to the COVID-19 pandemic. Prior to joining the Mount Sinai Health System, Meghan was Assistant Director of the Center for Health Innovation (CHI) at Adelphi University, served as the program coordinator for emergency management graduate programs, and concentrated her work on community-based social resilience initiatives. Preceding her work at Adelphi, Meghan spent four years as both the Grants Manager and the Energy Assurance Program Manager in the Governor’s Office of Energy and Planning in New Hampshire. While in this position, she supported the State Emergency Operations Center during disasters by ensuring the continuity of the state’s energy supply. She also worked for James Lee Witt Associates in Washington, D.C. and deployed multiple times to Louisiana to support recovery efforts following Hurricane Katrina. Meghan serves on the University of Southern California Emergency Management program faculty, where she also participated in curriculum and course development. She previously wrote the curriculum for the MPS in Emergency Management and served as adjunct faculty at Tulane University’s Emergency and Security Studies graduate programs. Meghan is a Certified Emergency Manager (CEM), Certified National Healthcare Disaster Professional (NHDP-BC), and Certified Healthcare Provider Continuity Professional (CHPCP). She is the Co-Founder and Co-Director of the Pracademic Affairs journal. She is also a member of the Naval Postgraduate School Center for Homeland Defense and Security Executive Leaders Program Cohort 2102. Meghan earned her BA in political science at the University of New Hampshire and her Master of Public Policy (MPP) with a concentration in national security policy from The George Washington University.`,
    image: "/assets/team/Meghan.jpg",
    tags: ["Outreach", "Community", "Engagement", "Fieldwork"]
  },
  {
    id: "dustin",
    name: "Dustin Loup",
    role: "Founding Board Member/Community Connector",
    description: `Founding Board Member/Community Connector

Dustin Loup, a Founding Board Member and Community Connector for The Undivide Project, focuses on building strong community relationships and guiding the project's outreach strategies.`,
    image: "/assets/team/Dustin.jpg",
    tags: ["Systems", "IoT", "Technical", "Climate Data"]
  },
  {
    id: "lihem",
    name: "Lihem Amlak",
    role: "Volunteer Copywriter",
    description: "Lihem Amlak, as a Volunteer Copywriter for The Undivide Project, helps articulate the project's vision and impact through clear and engaging written content.",
    image: "/assets/team/Lihem.jpg",
    tags: ["Storytelling", "Content", "Advocacy", "Media"]
  },
  {
    id: "dave",
    name: "Dave Jacobs",
    role: "Operations, Finance, and Development Advisor",
    description: "Dave has held positions at companies such as 360i, Time Inc, and Goldman Sachs in strategy, general management, operations, and marketing leadership roles. He currently works as a consultant for digital marketing agencies, B2B and B2C services companies, and nonprofit organizations, and he has been supporting The Undivide Project since early 2024. Dave holds a BA from Colgate University and an MBA from Duke University's Fuqua School of Business.",
    image: "/assets/team/David.jpg",
    tags: ["Operations", "Finance", "Development", "Advisor"]
  },
  {
    id: "mariska",
    name: "Mariska Bogaard",
    role: "Environmental Justice & Community Engagement Associate",
    description: "Mariska is an environmental justice and community engagement associate for The Undivide Project, providing research support from an environmental justice perspective. She is passionate about environmental communication and access. Mariska graduated from Georgetown with majors in Sociology and Government and a minor in Environmental Studies. She loves playing ultimate frisbee, crocheting, hiking, and spending time outdoors.",
    image: "/assets/team/Mariska.jpg",
    tags: ["Environmental Justice", "Community Engagement", "Research"]
  },
    {
    id: "drishti",
    name: "Drishti Jogadia",
    role: "Alumni",
    description: "Drishti Jogadia is an Alumna of The Undivide Project, who contributed to the project's early development and vision.",
    image: "/assets/team/Drishti.jpg",
    tags: ["Alumni"]
  },
     {
    id: "jasmine",
    name: "Jasmine Obas",
    role: "Developer",
    description: "Jasmine Obas, a Developer with The Undivide Project, dedicates her technical skills to developing and maintaining the software solutions that power the project's initiatives.",
    image: "/assets/team/Jasmine.jpg",
    tags: ["Developer"]
  },    
   {
    id: "maya",
    name: "Maya Ardon",
    role: "Alumni",
    description: "Maya Ardon is a recent graduate from McGill University with a BA in Environment. As a budding global health researcher with passions for health equity and climate justice, she joined The Undivide Project team in September 2024 to integrate content using geographic information systems (GIS) on the Ten States Project. Through her involvement with T-UP and learning continuously about the confluences between digital access and climate resilience, she hopes to advance the utility of GIS in powering meaningful policy and communications surrounding environmental justice and public health.",
    image: "/assets/team/Maya.jpg",
    tags: ["Alumni"]
  },
     {
    id: "helene",
    name: "Helene Gusman",
    role: "Analyst Fellow",
    description: "Helene Gusman serves as an Analyst Fellow at The Undivide Project, where she contributes her analytical skills to research efforts and data interpretation, supporting the project's mission.",
    image: "/assets/team/Helene.jpg",
    tags: ["Analyst Fellow"]
  },
      { 
    id: "nahian",
    name: "Nahian Mustafa",
    role: "Alumni",
    description: "Nahian Mustafa is a graduate student in Emergency and Disaster Management at Georgetown University, passionate about developing Disaster Risk Reduction strategies. She has contributed to projects aligned with the Sustainable Development Goals (SDGs), particularly SDG 5 (Gender Equality) and SDG 8 (Decent Work and Economic Growth), in Southeast Asia. In September 2024, Nahian joined The Undivide Project as an Applied Research Fellow, contributing to the Ten-State Project by conducting GIS analyses to assess the socio-cultural impacts of climate change on vulnerable communities across ten U.S. states. She also created StoryMaps and simplified complex research into accessible formats to communicate key environmental justice issues effectively. Presently, she is working on her research project exploring the disproportionate impacts of climate change and developing strategies to support vulnerable communities.",
    image: "/assets/team/Nahian.jpg",
    tags: ["Alumni"]
  },
   { 
    id: "noha",
    name: "Noha Yousif",
    role: "Alumni",
    description: "Noha Yousif is a graduate student in Emergency and Disaster Management at Georgetown University, passionate about developing Disaster Risk Reduction strategies. She has contributed to projects aligned with the Sustainable Development Goals (SDGs), particularly SDG 5 (Gender Equality) and SDG 8 (Decent Work and Economic Growth), in Southeast Asia. In September 2024, Noha joined The Undivide Project as an Applied Research Fellow, contributing to the Ten-State Project by conducting GIS analyses to assess the socio-cultural impacts of climate change on vulnerable communities across ten U.S. states. She also created StoryMaps and simplified complex research into accessible formats to communicate key environmental justice issues effectively. Presently, she is working on her research project exploring the disproportionate impacts of climate change and developing strategies to support vulnerable communities.",
    image: "/assets/team/Noha.jpg",
    tags: ["Alumni"]
  },
     { 
    id: "maria",
    name: "Maria Lactao",
    role: "Alumni",
    description: "Maria Lactao is a UX designer who loves creating intuitive, user-friendly experiences. She studied User Experience Design at Savannah College of Art and Design (SCAD) and joined The Undivide Project in 2024 as a UX design volunteer, where she works on high-fidelity designs and visuals. When she’s not deep in Figma, she’s probably diving into another design book (seriously, send recs!) or exploring other creative mediums like graphic design and industrial design—because why stop at just one?",
    image: "/assets/team/Maria.jpg",
    tags: ["Alumni"]
  },
]

export default function Team() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const handleNext = () => {
    if (!selectedMember) return
    const currentIndex = teamMembers.findIndex(m => m.id === selectedMember.id)
    const nextIndex = (currentIndex + 1) % teamMembers.length
    setSelectedMember(teamMembers[nextIndex])
  }

  const handlePrevious = () => {
    if (!selectedMember) return
    const currentIndex = teamMembers.findIndex(m => m.id === selectedMember.id)
    const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length
    setSelectedMember(teamMembers[prevIndex])
  }

  const ViewProfileButton = () => (
    <div className="bg-[#f8f8f2] flex items-center px-[18px] md:px-[24px] py-[6px] md:py-[8px] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-[#dcfcc0]/50">
      <span className="font-semibold text-[#1c3530] text-[12px] md:text-[14px]">View Profile</span>
    </div>
  )

  const visibleMembers = isExpanded ? teamMembers : teamMembers.slice(0, 4)

  return (
    <section className="bg-[#fffdf6] py-12 md:py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-[80px] overflow-hidden">
      <div className="mx-auto max-w-[1750px]">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="border border-[#d6cfc0] rounded-full px-[17px] py-[5px]">
            <span className="text-[16px] font-medium text-[#1c3530] uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1c3530] text-center">
            Meet Our Team
          </h2>
          <p className="text-[16px] text-[#5c7a72] text-center max-w-[964px]">
            Conversations with leaders working at the intersection of climate risk, technology, and environmental justice.
          </p>
        </div>

        {/* Team Grid */}
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="relative group overflow-hidden rounded-[24px] lg:rounded-[36px] border border-[#dcfcc0] h-[360px] sm:h-[400px] lg:h-[480px] cursor-pointer"
            >
              <img decoding="async" loading="lazy" src={member.image} alt={member.name} className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-[#1c3530]/40 to-transparent p-6 lg:p-8 flex flex-col justify-end">
                <h3 className="text-xl lg:text-[28px] font-bold text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm lg:text-[18px] font-medium text-[#e5fff8]/80 mt-1">
                  {member.role}
                </p>
                <div className="mt-6 self-start">
                  <ViewProfileButton />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Team Toggle Button */}
        <div className="flex justify-center w-full mt-12 z-20">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-[#2d584a] hover:bg-[#1c3530] text-white h-[64px] px-[32px] rounded-[12px] text-[16px] shadow-lg gap-[12px]"
          >
            <span>{isExpanded ? "Show Less" : "View Full Team"}</span>
            <div className="size-[13.33px] relative">
              <ArrowRight className={cn("size-full transition-transform duration-500", isExpanded && "rotate-[270deg]")} />
            </div>
          </Button>
        </div>
      </div>

      {/* Team Member Dialog */}
      <TeamDialog
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  )
}
