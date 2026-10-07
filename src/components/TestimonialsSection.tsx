import React from "react"
import { Star, MessageSquare, ExternalLink, Building, CheckCircle2 } from "lucide-react"
import { TESTIMONIALS_DATA, COMPANY_INFO } from "@/data/nirmanData"

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Client Experiences & Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Testimonials & Client Feedback
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Transparent client sentiment reflecting our commitment to on-time execution, honest billing, and superior structural quality in Ratnagiri.
            </p>
          </div>

          {/* Google Review Badge */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 border border-slate-300">
              <span className="font-bold text-slate-900 text-xl">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono text-slate-300 block">
                Google Business Listing
              </span>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 mt-0.5"
              >
                <span>View Ratnagiri Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              {/* Editable Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                  Sample Review Format
                </span>
              </div>

              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{t.reviewText}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-1">
                <h4 className="text-sm font-display font-bold text-white">
                  {t.clientName}
                </h4>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{t.projectType}</span>
                  <span className="text-sky-400 font-mono">{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Google Reviews */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto font-sans">
            Ready to experience the Nirman Infrastructure standard? We invite all prospective homeowners and investors to connect with our previous project owners or visit active sites in Ratnagiri.
          </p>
        </div>

      </div>
    </section>
  )
}
