import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, Layers, HardHat, FileText, MapPin } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface AboutSectionProps {
  onOpenConsultation: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Tag */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About Nirman Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Building Ratnagiri’s Future With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
              Quality & Trust
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            At Nirman Infrastructure Ratnagiri, we believe enduring structures are built on the principles of thoughtful planning, reliable construction execution, and attention to every stage of the building process.
          </p>
        </div>

        {/* 2-Column Story & Architectural Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                alt="Construction by Nirman Infrastructure Ratnagiri"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-90" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nachane, Ratnagiri Head Office</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.locality}
                </p>
              </div>
            </div>

            {/* Architectural structural accent tag */}
            <div className="hidden sm:block absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-slate-900 border border-emerald-700/60 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Organized Project Execution</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Copy & 4 Engineering Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                Coordinated Construction Designed for Practical Living
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                Nirman Infrastructure provides comprehensive construction solutions across residential homes, commercial developments, and structural works in and around Ratnagiri. Our approach focuses on practical planning, coordinated construction, workmanship, and project-specific requirements.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                Whether executing private residential homes or multi-storey commercial spaces, Nirman Infrastructure coordinates the construction process from planning through execution to help turn project ideas into functional, well-built spaces.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center text-sky-400 border border-sky-800/40">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Thoughtful Planning</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Practical planning aligned with site conditions, natural light, and functional space requirements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800/40">
                  <HardHat className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Reliable Execution</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Structured project workflows, dedicated on-site coordination, and regular milestone reviews.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-950 flex items-center justify-center text-amber-400 border border-amber-800/40">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Quality Workmanship</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Quality-conscious construction methods, careful alignment, and consistent attention to detail.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center text-sky-400 border border-sky-800/40">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Customer-Focused Approach</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Clear communication, transparent discussions, and spaces designed around the needs of owners.
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
