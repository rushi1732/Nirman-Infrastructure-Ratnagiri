import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft
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
      className="py-24 sm:py-32 bg-arch-charcoal text-arch-ivory relative overflow-hidden border-t border-[#2A2926]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Project Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-ivory tracking-tight">
              Anatomy of Construction Execution
            </h2>
            <p className="text-sm sm:text-base text-arch-stone/80 font-sans leading-relaxed">
              Step through each progressive phase of how Nirman Infrastructure transforms site blueprints into lasting built environments across Ratnagiri.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-arch-bronze uppercase tracking-widest">
              Stage {activeStage.stage} / 06
            </span>
          </div>
        </div>

        {/* Stage Progress Bar / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {STORYTELLING_STAGES.map((stg, index) => {
            const isActive = index === activeStageIndex
            return (
              <button
                key={stg.stage}
                type="button"
                onClick={() => setActiveStageIndex(index)}
                className={`p-3.5 text-left transition-all border rounded-sm cursor-pointer ${
                  isActive
                    ? "bg-[#252421] border-arch-bronze text-arch-ivory"
                    : "bg-[#1C1C1A] border-[#2E2D2A] hover:bg-[#252421]/60 text-arch-stone/60"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono ${isActive ? "text-arch-bronze font-semibold" : "text-arch-stone/40"}`}>
                    {stg.stage}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-arch-bronze" />}
                </div>
                <div className={`text-xs font-serif truncate ${isActive ? "text-arch-ivory font-medium" : "text-arch-stone/70"}`}>
                  {stg.name}
                </div>
              </button>
            )
          })}
        </div>

        {/* Stage Content Showcase Box */}
        <div className="border border-[#2E2D2A] bg-[#22211F] p-6 sm:p-10 lg:p-12 rounded-sm shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A18] border border-[#33322E] text-arch-bronze text-xs font-mono rounded-sm">
                <span>Stage {activeStage.stage}</span>
                <span>•</span>
                <span>{activeStage.visualBadge}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-arch-ivory leading-tight">
                  {activeStage.headline}
                </h3>
                <p className="text-sm sm:text-base text-arch-stone/80 leading-relaxed font-sans">
                  {activeStage.copy}
                </p>
              </div>

              {/* Architectural Technical Focus */}
              <div className="p-4 bg-[#191917] border border-[#2D2C28] rounded-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-arch-bronze flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-arch-stone/60 block mb-0.5">
                    Field Priority
                  </span>
                  <span className="text-sm font-medium text-arch-ivory">
                    {activeStage.elevationFocus}
                  </span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-4 py-2 text-xs font-medium text-arch-stone/80 hover:text-arch-ivory bg-[#1C1C1A] border border-[#33322E] transition-colors cursor-pointer rounded-sm flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStageIndex((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="px-5 py-2 text-xs font-medium text-arch-ivory bg-arch-bronze hover:bg-arch-bronze/90 transition-colors cursor-pointer rounded-sm flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs text-arch-stone/70 hover:text-arch-ivory underline underline-offset-4 cursor-pointer font-sans"
                >
                  Inquire about this stage
                </button>
              </div>

            </div>

            {/* Right Architectural Preview Visual (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#33322E] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStageIndex}
                    src={stageImages[activeStageIndex]}
                    alt={`Stage ${activeStage.stage}: ${activeStage.name}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-arch-stone/80">
                  <span className="font-serif">Fig. {activeStage.stage} — {activeStage.name}</span>
                  <span className="font-mono text-arch-bronze">Ratnagiri Region</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
