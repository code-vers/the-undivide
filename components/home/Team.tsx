"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
    image: "https://www.figma.com/api/mcp/asset/2aa410c4-eaeb-494f-a2b8-0a674e6c24f6",
    tags: ["Leadership", "Advocacy", "Policy", "Justice"]
  },
  {
    id: "anne",
    name: "Anne Gibbon",
    role: "Advisor",
    description: `Advisor

Anne Gibbon is passionate about designing experiences that support leaders in making better decisions. She graduated from the Naval Academy in 2003, setting the 2000m erg record and becoming the first woman at the school to box competitively. She later won the 2007 National Amateur Boxing Championship. Through 10 years of military service Anne moved between roles including navigator of a warship, admiral’s aide, and leadership instructor. Her last tour was at Naval Special Warfare Development Group, where she helped to found an internal think tank. Since leaving the Navy she completed a fellowship at Stanford’s Design School and went on to consulting. Before launching Matri, a decision management and AI tech startup, Anne lived in New Zealand working with Maori tribes, co-designing innovation strategies.`,
    image: "https://www.theundivideproject.org/assets/Anne-Gibbon-DOZrB59X.jpeg",
    tags: ["Strategy", "Design", "Innovation", "Impact"]
  },
  {
    id: "yian",
    name: "Yian Hu",
    role: "Alumni",
    description: `Yian Hu is a second-year student at Georgetown University, pursuing a Master’s in Data Science and Analytics. He joined The Undivide Project team in September 2024 through his capstone course, focusing on evaluating climate risks and health impacts in low socioeconomic status counties across Ten States. Drawing on his passion for data-driven problem-solving, Yian aims to identify counties most vulnerable to climate change and support interventions that foster health equity and resilience.`,
    image: "https://www.theundivideproject.org/assets/Yian-D39OE-5B.jpg",
    tags: ["Technology", "Innovation", "Data Science", "Infrastructure"]
  },
  {
    id: "meghan",
    name: "Meghan McPherson",
    role: "Advisor",
    description: `Meghan McPherson is the Director of Emergency Management Education, Training, and Exercises for the Mount Sinai Health System in New York City. In this role, Meghan leads the development, planning, and execution of a robust training and exercise program across the health system. McPherson is a seasoned emergency manager with over two decades of experience in the field. Most recently, she served as the Director of Emergency Management for Mount Sinai Queens Hospital on the front lines of the response to the COVID-19 pandemic. Prior to joining the Mount Sinai Health System, Meghan was Assistant Director of the Center for Health Innovation (CHI) at Adelphi University, served as the program coordinator for emergency management graduate programs, and concentrated her work on community-based social resilience initiatives. Preceding her work at Adelphi, Meghan spent four years as both the Grants Manager and the Energy Assurance Program Manager in the Governor’s Office of Energy and Planning in New Hampshire. While in this position, she supported the State Emergency Operations Center during disasters by ensuring the continuity of the state’s energy supply. She also worked for James Lee Witt Associates in Washington, D.C. and deployed multiple times to Louisiana to support recovery efforts following Hurricane Katrina. Meghan serves on the University of Southern California Emergency Management program faculty, where she also participated in curriculum and course development. She previously wrote the curriculum for the MPS in Emergency Management and served as adjunct faculty at Tulane University’s Emergency and Security Studies graduate programs. Meghan is a Certified Emergency Manager (CEM), Certified National Healthcare Disaster Professional (NHDP-BC), and Certified Healthcare Provider Continuity Professional (CHPCP). She is the Co-Founder and Co-Director of the Pracademic Affairs journal. She is also a member of the Naval Postgraduate School Center for Homeland Defense and Security Executive Leaders Program Cohort 2102. Meghan earned her BA in political science at the University of New Hampshire and her Master of Public Policy (MPP) with a concentration in national security policy from The George Washington University.`,
    image: "https://www.theundivideproject.org/assets/Meghan-CpWtG55g.jpg",
    tags: ["Outreach", "Community", "Engagement", "Fieldwork"]
  },
  {
    id: "dustin",
    name: "Dustin Loup",
    role: "Founding Board Member/Community Connector",
    description: `Founding Board Member/Community Connector

Dustin Loup, a Founding Board Member and Community Connector for The Undivide Project, focuses on building strong community relationships and guiding the project's outreach strategies.`,
    image: "https://www.theundivideproject.org/assets/Dustin-ZNVgCs_z.jpg",
    tags: ["Systems", "IoT", "Technical", "Climate Data"]
  },
  {
    id: "lihem",
    name: "Lihem Amlak",
    role: "Volunteer Copywriter",
    description: "Lihem brings the human stories of our impact to light. Through her compelling narratives and advocacy-driven content, she helps The Undivide Project communicate its mission and inspire systemic change in environmental and digital policy.",
    image: "https://www.figma.com/api/mcp/asset/6f8eb9dc-4a95-4487-b5d4-6775476f439b",
    tags: ["Storytelling", "Content", "Advocacy", "Media"]
  },
  {
    id: "dave",
    name: "Dave Jacobs",
    role: "Advisor",
    description: "Dave Jacobs brings deep expertise in operations, finance, and organizational development. He advises The Undivide Project on sustainable growth strategies and helps optimize our resources for maximum community impact.",
    image: "https://www.figma.com/api/mcp/asset/c9f6abcd-bf2b-4d14-a3f8-67d252ac98ef",
    tags: ["Finance", "Operations", "Growth", "Governance"]
  },
  {
    id: "lisa",
    name: "Lisa Park",
    role: "Communications Manager",
    description: "Lisa manages our strategic communications and global media relations. She is instrumental in amplifying our message and ensuring that our initiatives at the intersection of climate and digital equity reach the world's stage.",
    image: "https://www.figma.com/api/mcp/asset/7a42b3b1-a18a-4942-9bd8-1ea9eda8ed22",
    tags: ["PR", "Communications", "Branding", "Strategy"]
  }
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
            We’re all about solutions that work for real people. Whether creating IoT-powered climate tools or advocating for better policies, The Undivide Project is here to break down barriers and build up communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Monica Sanders */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "monica") || null)}
            className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-[24px] md:rounded-[48px] border border-[#dcfcc0] h-[320px] md:h-[400px] lg:h-[589px] cursor-pointer"
          >
            <img src={teamMembers[0].image} alt="Monica Sanders" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-[#1c3530]/40 to-transparent p-[32px] flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-bold text-white leading-tight">{teamMembers[0].name}</h3>
              <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#e5fff8]/80 mt-1">{teamMembers[0].role}</p>
              <div className="mt-8 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 2: Anne Gibbon */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "anne") || null)}
            className="lg:col-span-1 lg:row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[42px] border border-[#dcfcc0] h-[220px] md:h-[280px] cursor-pointer"
          >
            <img src={teamMembers[1].image} alt="Anne Gibbon" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-[#1c3530]/40 to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-xl md:text-[32px] font-bold text-white leading-tight">{teamMembers[1].name}</h3>
              <p className="text-sm md:text-[20px] font-medium text-[#e5fff8]/80 mt-1">{teamMembers[1].role}</p>
              <div className="mt-6 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 3: Dr. Sarah Chen */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "yian") || null)}
            className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-[24px] md:rounded-[57px] border-[#2d584a] border-[1px] shadow-2xl h-[320px] md:h-[400px] lg:h-[581px] cursor-pointer"
          >
            <img src={teamMembers[2].image} alt="Dr. Sarah Chen" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/85 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-xl md:text-[32px] font-bold text-[#f8f8f2] leading-tight">{teamMembers[2].name}</h3>
              <p className="text-sm md:text-[20px] font-medium text-[#c5d0cc] mt-1">{teamMembers[2].role}</p>
              <div className="mt-6">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 4: Meghan */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "meghan") || null)}
            className={cn(
              "lg:col-span-1 lg:row-span-1 relative group overflow-hidden rounded-[466px] border border-[#dcfcc0] h-[280px] cursor-pointer",
              !isExpanded && "hidden md:block"
            )}
          >
            <img src={teamMembers[3].image} alt="Meghan" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c3530]/90 via-[#1c3530]/40 to-transparent p-[40px] flex flex-col justify-center items-end text-right">
              <h3 className="text-[32px] font-bold text-white leading-tight">{teamMembers[3].name}</h3>
              <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">{teamMembers[3].role}</p>
              <div className="mt-4">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 5: Dustin */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "dustin") || null)}
            className={cn(
              "lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-1 relative group overflow-hidden rounded-[42px] border border-[#dcfcc0] h-[284px] cursor-pointer",
              !isExpanded && "hidden md:block"
            )}
          >
            <img src={teamMembers[4].image} alt="Dustin" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-white leading-tight">{teamMembers[4].name}</h3>
              <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">{teamMembers[4].role}</p>
              <div className="mt-6 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 6: Join Us */}
          <div className={cn(
            "lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-2 relative group overflow-hidden rounded-[56px] border border-[#dcfcc0] h-[492px]",
            !isExpanded && "hidden md:block"
          )}>
            <img src="https://www.figma.com/api/mcp/asset/fb95f6e0-5041-4436-8411-c869a78f6ace" alt="Join Us" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-[#1c3530]/30 to-transparent p-[32px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-white leading-tight">Join Us</h3>
              <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">Open Position</p>
              <Button variant="outline" className="mt-8 self-start rounded-full bg-[#f8f8f2] text-[#1c3530] border-none font-semibold text-[14px] hover:bg-[#2d584a] hover:text-white transition-colors cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>

          {/* Card 7: Community */}
          <div className={cn(
            "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1 relative group overflow-hidden rounded-[42px] border border-[#dcfcc0] h-[280px]",
            !isExpanded && "hidden"
          )}>
            <img src="https://www.figma.com/api/mcp/asset/e39d717c-3ded-44aa-a4c2-6eb2a1073206" alt="Community" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-white leading-tight">Community</h3>
              <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">Partner Network</p>
              <Button variant="outline" className="mt-6 self-start rounded-full bg-[#f8f8f2] text-[#1c3530] border-none font-semibold text-[14px] hover:bg-[#2d584a] hover:text-white transition-colors cursor-pointer">
                View Partners
              </Button>
            </div>
          </div>

          {/* Card 8: Lihem Amlak */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "lihem") || null)}
            className={cn(
              "lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-2 relative group overflow-hidden rounded-[56px] border border-[#dcfcc0] h-[400px] md:h-[520px] cursor-pointer",
              !isExpanded && "hidden md:block"
            )}
          >
            <img src={teamMembers[5].image} alt="Lihem Amlak" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/75 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-[#f8f8f2] leading-tight">{teamMembers[5].name}</h3>
              <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">{teamMembers[5].role}</p>
              <div className="mt-6 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 9: Dave Jacobs */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "dave") || null)}
            className={cn(
              "lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-2 relative group overflow-hidden rounded-[56px] border border-[#dcfcc0] h-[400px] md:h-[520px] cursor-pointer",
              !isExpanded && "hidden md:block"
            )}
          >
            <img src={teamMembers[6].image} alt="Dave Jacobs" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/75 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-[#f8f8f2] leading-tight">{teamMembers[6].name}</h3>
              <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">{teamMembers[6].role}</p>
              <div className="mt-6 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 10: Anne Gibbon (Tall Rounded) */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "anne") || null)}
            className={cn(
              "lg:col-start-4 lg:col-span-1 lg:row-start-4 lg:row-span-1 relative group overflow-hidden rounded-[100px] border border-[#dcfcc0] h-[486px] cursor-pointer",
              !isExpanded && "hidden"
            )}
          >
            <img src="https://www.figma.com/api/mcp/asset/2f705207-1e1d-4af1-aa2e-5393f0a3c941" alt="Anne Gibbon" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530] via-transparent to-transparent p-[24px] flex flex-col justify-end items-center text-center">
              <h3 className="text-[20px] font-bold text-[#f8f8f2] leading-tight">{teamMembers[1].name}</h3>
              <p className="text-[14px] font-normal text-[#c5d0cc] mt-1">{teamMembers[1].role}</p>
              <div className="mt-4">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 11: Community Partner Network */}
          <div className={cn(
            "lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-1 relative group overflow-hidden rounded-[175px] border border-[#dcfcc0] h-[367px]",
            !isExpanded && "hidden"
          )}>
            <img src="https://www.figma.com/api/mcp/asset/f1a49011-1d8d-46ad-bdc2-c3cc8e534850" alt="Partner Network" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/90 via-transparent to-transparent p-[24px] flex flex-col justify-end items-center">
              <h3 className="text-[32px] font-bold text-white leading-tight">Community</h3>
              <p className="text-[20px] font-medium text-[#e5fff8]/80">Partner Network</p>
            </div>
          </div>

          {/* Card 12: Anne Gibbon (Small Pill) */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "anne") || null)}
            className={cn(
              "lg:col-start-3 lg:col-span-1 lg:row-start-5 lg:row-span-1 relative group overflow-hidden rounded-full border border-[#dcfcc0] h-[240px] cursor-pointer",
              !isExpanded && "hidden"
            )}
          >
            <img src="https://www.figma.com/api/mcp/asset/b0918f28-5250-4f45-b561-ce95a1eb04a1" alt="Anne Gibbon" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/75 via-transparent to-transparent p-[24px] flex flex-col justify-end items-center text-center">
              <h3 className="text-[20px] font-bold text-[#f8f8f2] leading-tight">{teamMembers[1].name}</h3>
              <p className="text-[14px] font-normal text-[#c5d0cc] mt-1">{teamMembers[1].role}</p>
              <div className="mt-4">
                <ViewProfileButton />
              </div>
            </div>
          </div>

          {/* Card 13: Lisa Park */}
          <div
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "lisa") || null)}
            className={cn(
              "lg:col-start-2 lg:col-span-1 lg:row-start-5 lg:row-span-1 relative group overflow-hidden rounded-[42px] border border-[#dcfcc0] h-[300px] md:h-[377px] cursor-pointer",
              !isExpanded && "hidden"
            )}
          >
            <img src={teamMembers[7].image} alt="Lisa Park" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/92 via-transparent to-transparent p-[24px] flex flex-col justify-end">
              <h3 className="text-[32px] font-bold text-white leading-tight">{teamMembers[7].name}</h3>
              <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">{teamMembers[7].role}</p>
              <div className="mt-6 self-start">
                <ViewProfileButton />
              </div>
            </div>
          </div>
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
