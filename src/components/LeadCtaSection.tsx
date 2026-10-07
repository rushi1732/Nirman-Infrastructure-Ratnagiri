import React from "react"
import { ArrowRight, Phone, MessageSquare } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface LeadCtaProps {
  onOpenConsultation: () => void
}

export const LeadCtaSection: React.FC<LeadCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-arch-charcoal text-arch-ivory">
      {/* Full-bleed Architectural Photography with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Architectural structure in Ratnagiri"
          className="w-full h-full object-cover object-center filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-[#1C1C1A]/75 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
          Begin Your Build
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-arch-ivory tracking-tight leading-tight">
          Planning Your Next Project?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-arch-stone/85 font-sans max-w-2xl mx-auto leading-relaxed">
          Talk to Nirman Infrastructure Ratnagiri and discuss your project requirements with our engineering and design team.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          
          {/* Primary CTA: Discuss Your Project */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-arch-bronze hover:bg-arch-bronze/90 text-arch-ivory text-xs uppercase tracking-widest font-medium transition-colors rounded-sm flex items-center gap-2.5 cursor-pointer shadow-lg"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Secondary CTA: Call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-7 py-4 bg-transparent hover:bg-arch-ivory/10 text-arch-ivory border border-arch-ivory/40 text-xs uppercase tracking-widest font-medium transition-colors rounded-sm flex items-center gap-2.5"
          >
            <Phone className="w-3.5 h-3.5 text-arch-bronze" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nirman%20Infrastructure,%20I%20am%20interested%20in%20discussing%20a%20construction%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-transparent hover:bg-arch-ivory/10 text-arch-stone/80 hover:text-arch-ivory text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-arch-bronze" />
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Address snippet */}
        <div className="pt-8 border-t border-[#33322E] text-xs text-arch-stone/60 font-sans">
          Office: {COMPANY_INFO.address.officeName}, {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area}, Ratnagiri {COMPANY_INFO.address.pincode}
        </div>

      </div>
    </section>
  )
}
