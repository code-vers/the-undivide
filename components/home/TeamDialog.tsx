"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image: string
  tags: string[]
}

interface TeamDialogProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
  onNext?: () => void
  onPrevious?: () => void
}

export default function TeamDialog({ member, isOpen, onClose, onNext, onPrevious }: TeamDialogProps) {
  if (!member) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        showCloseButton={false}
        className="w-[95vw] sm:max-w-[95vw] md:max-w-[1100px] md:w-full p-0 overflow-hidden border-[#dcfcc0] rounded-[32px] bg-white shadow-[0px_24px_60px_0px_rgba(28,53,48,0.25)] gap-0 outline-none"
      >
        <div className="flex flex-col md:flex-row h-full md:h-[551px] relative">
          {/* Left: Image Container */}
          <div className="w-full md:w-[439px] h-[300px] md:h-full relative overflow-hidden shrink-0 border-r border-[#dcfcc0]/30 bg-neutral-100">
            <img 
              src={member.image} 
              alt={member.name} 
              className="size-full object-cover"
            />
          </div>

          {/* Right: Content Container */}
          <div className="flex-grow p-8 md:p-[48px] pr-16 md:pr-[64px] flex flex-col justify-center relative bg-white">
            <div className="space-y-[12px]">
              <span className="text-[13px] font-semibold text-[#2d584a] tracking-[3px] uppercase block">
                TEAM MEMBER
              </span>
              <DialogTitle className="text-[32px] md:text-[46px] font-bold text-[#1c3530] leading-[1.1] md:leading-[57.5px]">
                {member.name}
              </DialogTitle>
              <p className="text-[19px] font-semibold text-[#2d584a] leading-[28.5px]">
                {member.role}
              </p>
            </div>

            <DialogDescription className="text-[17px] text-[#3d5e57] leading-[27.625px] mt-6 max-w-[563px]">
              {member.description}
            </DialogDescription>

            {/* Tags (Skills) */}
            <div className="flex flex-wrap gap-[8px] mt-[24px]">
              {member.tags.map((tag, idx) => (
                <div 
                  key={idx}
                  className="bg-[#f8f8f2] border border-[#dcfcc0] rounded-full px-[16px] py-[8px] text-[14px] font-medium text-[#2d584a] whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Close Button (Figma styled) */}
          <button 
              onClick={onClose}
              className="absolute top-6 right-6 size-[44px] rounded-full bg-[#f8f8f2] border border-[#dcfcc0] flex items-center justify-center text-[#1c3530] hover:bg-white transition-all shadow-sm z-30 active:scale-95 cursor-pointer"
              aria-label="Close modal"
          >
              <img src="https://www.figma.com/api/mcp/asset/ec896985-9f4b-476c-9b3f-8bca1b627006" alt="Close" className="size-5" />
          </button>

          {/* Design navigation: Previous (Left arrow overlay) */}
          <button 
              onClick={(e) => { e.stopPropagation(); onPrevious?.(); }}
              className="group absolute left-6 top-[130px] md:top-[252px] z-20 size-[44px] rounded-full bg-[#f8f8f2] border border-[#dcfcc0] flex items-center justify-center text-[#1c3530] hover:bg-white transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous team member"
          >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Design navigation: Next (Right arrow overlay) */}
          <button 
              onClick={(e) => { e.stopPropagation(); onNext?.(); }}
              className="group absolute right-6 top-[130px] md:top-[252px] z-20 size-[44px] rounded-full bg-[#f8f8f2] border border-[#dcfcc0] flex items-center justify-center text-[#1c3530] hover:bg-white transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next team member"
          >
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
