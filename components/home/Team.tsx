"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import TeamDialog, { TeamMember } from "./TeamDialog"

const teamMembers: TeamMember[] = [
  {
    id: "monica",
    name: "Monica Sanders",
    role: "Founder / Advocate in Chief",
    description: "Monica Sanders is the visionary behind The Undivide Project. As a globally recognized expert in environmental justice and disaster resilience, she has dedicated her career to ensuring that technology serves as a bridge, not a barrier, for the most vulnerable communities.",
    image: "https://www.figma.com/api/mcp/asset/2aa410c4-eaeb-494f-a2b8-0a674e6c24f6",
    tags: ["Leadership", "Advocacy", "Policy", "Justice"]
  },
  {
    id: "anne",
    name: "Anne Gibbon",
    role: "Advisor",
    description: "Anne Gibbon provides strategic guidance on community-led innovation and sustainable design. Her extensive background in social impact helps the project build robust frameworks for long-term climate adaptation and digital equity.",
    image: "https://www.figma.com/api/mcp/asset/bdd6d645-0289-4eb5-9c88-1493c9bb9c89",
    tags: ["Strategy", "Design", "Innovation", "Impact"]
  },
  {
    id: "sarah",
    name: "Dr. Sarah Chen",
    role: "Director of Technology",
    description: "Dr. Chen leads our technology initiatives, developing innovative solutions to bridge the digital divide and enhance climate resilience through accessible technology. She oversees digital infrastructure and climate data systems.",
    image: "https://www.figma.com/api/mcp/asset/0a86def7-1994-4d7e-877f-8c5e7328455a",
    tags: ["Technology", "Innovation", "Data Science", "Infrastructure"]
  },
  {
    id: "meghan",
    name: "Meghan",
    role: "Team Member",
    description: "Meghan is a key driver of our grassroots engagement programs. She works directly with local communities to co-create digital tools that address their specific environmental challenges, ensuring our solutions are truly community-driven.",
    image: "https://www.figma.com/api/mcp/asset/47eca578-7d4c-4603-89a2-f786208dcad4",
    tags: ["Outreach", "Community", "Engagement", "Fieldwork"]
  },
  {
    id: "dustin",
    name: "Dustin",
    role: "Team Member",
    description: "Dustin specializes in the technical implementation of our climate resilience tools. With a focus on systems engineering and IoT solutions, he ensures our data-driven platforms are reliable and effective in real-world environments.",
    image: "https://www.figma.com/api/mcp/asset/b1bc9687-773f-408d-aed7-e55fef8d9e11",
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
               <h3 className="text-xl md:text-2xl lg:text-[32px] font-bold text-white leading-tight">Monica Sanders</h3>
               <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#e5fff8]/80 mt-1">Founder / Advocate in Chief</p>
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
               <h3 className="text-xl md:text-[32px] font-bold text-white leading-tight">Anne Gibbon</h3>
               <p className="text-sm md:text-[20px] font-medium text-[#e5fff8]/80 mt-1">Advisor</p>
               <div className="mt-6 self-start">
                  <ViewProfileButton />
               </div>
            </div>
          </div>

          {/* Card 3: Dr. Sarah Chen */}
          <div 
            onClick={() => setSelectedMember(teamMembers.find(m => m.id === "sarah") || null)}
            className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-[24px] md:rounded-[57px] border-[#2d584a] border-[1px] shadow-2xl h-[320px] md:h-[400px] lg:h-[581px] cursor-pointer"
          >
            <img src={teamMembers[2].image} alt="Dr. Sarah Chen" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c3530]/85 via-transparent to-transparent p-[24px] flex flex-col justify-end">
               <h3 className="text-xl md:text-[32px] font-bold text-[#f8f8f2] leading-tight">Dr. Sarah Chen</h3>
               <p className="text-sm md:text-[20px] font-medium text-[#c5d0cc] mt-1">Director of Technology</p>
               <p className="text-xs md:text-[14px] font-medium text-[#e8ebe9] mt-2">Digital infrastructure and climate data systems</p>
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
               <h3 className="text-[32px] font-bold text-white leading-tight">Meghan</h3>
               <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">Team Member</p>
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
               <h3 className="text-[32px] font-bold text-white leading-tight">Dustin</h3>
               <p className="text-[20px] font-medium text-[#e5fff8]/80 mt-1">Team Member</p>
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
               <Button variant="outline" className="mt-8 self-start rounded-full bg-[#f8f8f2] text-[#1c3530] border-none font-semibold text-[14px]">
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
               <Button variant="outline" className="mt-6 self-start rounded-full bg-[#f8f8f2] text-[#1c3530] border-none font-semibold text-[14px]">
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
               <h3 className="text-[32px] font-bold text-[#f8f8f2] leading-tight">Lihem Amlak</h3>
               <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">Volunteer Copywriter</p>
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
               <h3 className="text-[32px] font-bold text-[#f8f8f2] leading-tight">Dave Jacobs</h3>
               <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">Advisor</p>
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
               <h3 className="text-[20px] font-bold text-[#f8f8f2] leading-tight">Anne Gibbon</h3>
               <p className="text-[14px] font-normal text-[#c5d0cc] mt-1">Advisor</p>
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
               <h3 className="text-[20px] font-bold text-[#f8f8f2] leading-tight">Anne Gibbon</h3>
               <p className="text-[14px] font-normal text-[#c5d0cc] mt-1">Advisor</p>
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
              <h3 className="text-[32px] font-bold text-white leading-tight">Lisa Park</h3>
              <p className="text-[20px] font-medium text-[#c5d0cc] mt-1">Communications Manager</p>
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
                <img src="https://www.figma.com/api/mcp/asset/f82e8824-cd95-433f-abf8-9b6725ff2002" alt="Icon" className={cn("size-full transition-transform duration-500", isExpanded && "rotate-45")} />
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
