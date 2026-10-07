import React from "react"
import { ArrowRight, Phone, MessageSquare, MapPin, Sparkles, Building2 } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface LeadCtaProps {
  onOpenConsultation: () => void
}

export const LeadCtaSection: React.FC<LeadCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Blueprint Grid & Lighting Accents */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Construction Journey</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Planning Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-400">
            Construction Project?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Talk to Nirman Infrastructure Ratnagiri and discuss your project requirements with our engineering and design team.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-xl shadow-sky-950/60 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95 group"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-6 py-4 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 shadow-lg transition-all flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              "Hello Nirman Infrastructure, I would like to schedule a free construction consultation in Ratnagiri."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl text-sm font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-700/60 transition-all flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Enquiry</span>
          </a>

        </div>

        {/* Office Location Snippet */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>Indradhanu, Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Nachane, Ratnagiri</span>
        </div>

      </div>
    </section>
  )
}
