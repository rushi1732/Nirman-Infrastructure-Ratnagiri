import React from "react"
import { motion } from "framer-motion"
import { 
  GitCommit, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  FileCheck, 
  HardHat, 
  Layers, 
  KeyRound,
  ShieldCheck
} from "lucide-react"
import { PROCESS_STEPS } from "@/data/nirmanData"

interface ProcessSectionProps {
  onOpenConsultation: () => void
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Structured 6-Stage Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our Systematic Construction Process
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A disciplined, milestone-governed workflow from preliminary site inspection to formal key handover, engineered to keep your project on-time and on-budget.
          </p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Giant Watermark Number */}
              <div className="absolute -top-3 -right-2 text-7xl font-display font-black text-slate-800/40 select-none pointer-events-none group-hover:text-sky-900/30 transition-colors">
                {step.number}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-950 text-sky-400 border border-sky-800/50">
                    Stage {step.number}
                  </span>
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    {step.stage}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Milestone Box */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 relative z-10">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Deliverable Milestone
                    </span>
                    <span className="font-medium text-slate-200">
                      {step.keyMilestone}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 shadow-xl shadow-sky-950/50 transition-all cursor-pointer active:scale-95"
          >
            <span>Begin Stage 01: Schedule Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
