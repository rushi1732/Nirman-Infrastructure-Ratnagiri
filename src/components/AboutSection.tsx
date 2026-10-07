import React from "react"
import { MapPin } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface AboutSectionProps {
  onOpenConsultation?: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-28 bg-[#F4F1EA] text-[#252421] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Architectural Line */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A8793D] flex-shrink-0">
            About Nirman Infrastructure
          </span>
          <div className="arch-line" />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Large Architecture Image (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded bg-[#E8E3D9]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                alt="Construction execution by Nirman Infrastructure Ratnagiri"
                className="w-full h-[520px] object-cover"
              />
            </div>
            
            {/* Architectural Caption */}
            <div className="flex items-start gap-2.5 text-xs text-[#716D65] pt-2">
              <MapPin className="w-4 h-4 text-[#A8793D] flex-shrink-0 mt-0.5" />
              <span>
                Nachane Head Office — {COMPANY_INFO.address.line1}, Behind Chhatrapati Shivaji Maharaj Stadium, Ratnagiri 415612.
              </span>
            </div>
          </div>

          {/* Right Editorial Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#252421] leading-tight">
              Building Ratnagiri With <br />
              <span className="italic font-normal">Purpose & Precision.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#716D65] font-sans leading-relaxed">
              <p>
                At Nirman Infrastructure Ratnagiri, we approach real estate and construction with long-term responsibility. Building in the coastal Konkan region requires careful planning, disciplined site coordination, and respect for local environmental conditions.
              </p>
              <p>
                Whether executing residential homes, private bungalows, commercial buildings, or regional property developments, our focus remains centered on practical planning, quality workmanship, and dependable communication from foundation through completion.
              </p>
            </div>

            {/* Architectural Line Divider */}
            <div className="arch-line" />

            {/* 3 Core Values - Editorial Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#A8793D] uppercase tracking-wider block">
                  01 / Method
                </span>
                <h4 className="text-base font-serif font-semibold text-[#252421]">
                  Thoughtful Planning
                </h4>
                <p className="text-xs text-[#716D65] leading-relaxed">
                  Practical site analysis, space utilization, and natural light coordination.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#A8793D] uppercase tracking-wider block">
                  02 / Discipline
                </span>
                <h4 className="text-base font-serif font-semibold text-[#252421]">
                  Organized Execution
                </h4>
                <p className="text-xs text-[#716D65] leading-relaxed">
                  Coordinated trade workflows, dedicated supervision, and milestone reviews.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#A8793D] uppercase tracking-wider block">
                  03 / Relationship
                </span>
                <h4 className="text-base font-serif font-semibold text-[#252421]">
                  Transparent Service
                </h4>
                <p className="text-xs text-[#716D65] leading-relaxed">
                  Open discussions, clear scope definitions, and long-term customer focus.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
