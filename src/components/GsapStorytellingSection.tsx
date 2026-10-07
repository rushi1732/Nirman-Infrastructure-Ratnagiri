import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Compass, 
  Layers, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  FileCheck,
  ChevronRight
} from "lucide-react"
import { STORYTELLING_STAGES } from "@/data/nirmanData"

interface StorytellingProps {
  onOpenConsultation: () => void
}

export const GsapStorytellingSection: React.FC<StorytellingProps> = ({ onOpenConsultation }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const activeStage = STORYTELLING_STAGES[activeStageIndex]

  // Architectural visual previews for each stage
  const stageImages = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", // Vision
    "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80", // Planning
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80", // Foundation
    "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80", // Structure
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Monsoon Defense
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", // Completion
  ]

  return (
    <section 
      id="evolution" 
      ref={sectionRef} 
      className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Scroll-Driven Storytelling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Anatomy of Construction Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Step through the lifecycle of how Nirman Infrastructure transforms raw ground in Ratnagiri into enduring architectural landmarks.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Stage {activeStage.stage} of 06
            </span>
          </div>
        </div>

        {/* Stage Progress Bar / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {STORYTELLING_STAGES.map((stg, index) => {
            const isActive = index === activeStageIndex
            return (
              <button
                key={stg.stage}
                type="button"
                onClick={() => setActiveStageIndex(index)}
                className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? "bg-slate-800 border-sky-500 shadow-lg shadow-sky-950/40"
                    : "bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? "text-sky-400" : "text-slate-500"}`}>
                    {stg.stage}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                </div>
                <div className={`text-xs font-display font-semibold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                  {stg.name}
                </div>
              </button>
            )
          })}
        </div>

        {/* Stage Content Showcase Box */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800/50 text-sky-300 text-xs font-mono">
                <span>Phase {activeStage.stage}</span>
                <span>•</span>
                <span>{activeStage.visualBadge}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  {activeStage.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {activeStage.copy}
                </p>
              </div>

              {/* Architectural Technical Focus Pill */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Engineering Priority
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {activeStage.elevationFocus}
                  </span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                >
                  Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hidden sm:inline-flex text-xs font-mono text-sky-400 hover:text-sky-300 underline underline-offset-4 cursor-pointer"
                >
                  Discuss this phase for your site
                </button>
              </div>

            </div>

            {/* Right Architectural Elevation Visualization (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative h-80 sm:h-96 group">
                <img
                  src={stageImages[activeStageIndex]}
                  alt={activeStage.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating Technical Blueprint Stamp */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-sky-400 font-bold uppercase">
                      Stage {activeStage.stage} Verification
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                      Standardized Protocol
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 block mt-1">
                    {activeStage.name} — Supervised Execution
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
