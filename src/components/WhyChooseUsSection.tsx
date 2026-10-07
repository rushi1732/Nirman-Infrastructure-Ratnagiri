import React from "react"
import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Eye, 
  Compass, 
  Sparkles, 
  Users, 
  CalendarCheck, 
  CheckCircle2, 
  ArrowRight,
  Award
} from "lucide-react"
import { WHY_CHOOSE_ITEMS } from "@/data/nirmanData"

interface WhyChooseUsProps {
  onOpenConsultation: () => void
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-emerald-400" />
      case "Eye": return <Eye className="w-6 h-6 text-sky-400" />
      case "Compass": return <Compass className="w-6 h-6 text-amber-400" />
      case "Sparkles": return <Sparkles className="w-6 h-6 text-sky-400" />
      case "Users": return <Users className="w-6 h-6 text-emerald-400" />
      case "CalendarCheck": return <CalendarCheck className="w-6 h-6 text-amber-400" />
      default: return <CheckCircle2 className="w-6 h-6 text-sky-400" />
    }
  }

  return (
    <section id="why-us" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Why Nirman Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Built on Principles of Precision & Transparency
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            We understand that constructing a building or purchasing property is among your most significant lifetime investments. Here is how we ensure reliability at every step.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center transition-transform group-hover:scale-110">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  Pillar 0{index + 1}
                </span>
                <span className="text-sky-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-display font-bold text-white">
              Want to see our quality standards in person?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Visit our office in Nachane, Ratnagiri to inspect sample materials and review engineering blueprints.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md flex-shrink-0"
          >
            <span>Visit Office / Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
