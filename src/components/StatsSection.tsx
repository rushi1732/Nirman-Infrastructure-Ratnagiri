import React from "react"
import { ShieldCheck, Compass, CheckCircle2, Building2, MapPin, Award } from "lucide-react"
import { STATS_PLACEHOLDERS } from "@/data/nirmanData"

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Verified Standards & Commitment
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Clear structural benchmarks governing every construction site we manage in Ratnagiri.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_PLACEHOLDERS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 text-center space-y-3 shadow-xl group relative"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white group-hover:text-sky-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  {stat.unit}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2 border-t border-slate-800/80">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Note on Verified Numbers */}
        <div className="mt-8 text-center">
          <span className="text-[11px] font-mono text-slate-500">
            * Nirman Infrastructure Ratnagiri adheres to strict factual verification. Verified milestone audits and engineer reports available on request.
          </span>
        </div>

      </div>
    </section>
  )
}
