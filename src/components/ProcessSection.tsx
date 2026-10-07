import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { PROCESS_STEPS } from "@/data/nirmanData"

interface ProcessSectionProps {
  onOpenConsultation: () => void
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-arch-ivory border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Disciplined Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Our 6-Stage Construction Workflow
            </h2>
          </div>
          <p className="text-arch-muted text-sm sm:text-base max-w-md leading-relaxed font-sans">
            A milestone-governed progression from preliminary site evaluation to formal handover, designed to maintain quality, schedule discipline, and clarity.
          </p>
        </div>

        {/* Architectural Timeline Grid / Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-arch-stone/30 border border-arch-border p-8 rounded-sm hover:border-arch-bronze/40 transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-arch-border pb-4">
                  <span className="font-serif text-3xl text-arch-bronze font-normal">
                    {step.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-arch-muted font-mono">
                    Phase {step.stage}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-medium text-arch-charcoal group-hover:text-arch-bronze transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-arch-muted leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Milestone Box */}
              <div className="mt-8 pt-4 border-t border-arch-border/60">
                <div className="text-[11px] uppercase tracking-wider text-arch-muted font-mono mb-1">
                  Key Milestone
                </div>
                <div className="text-xs font-medium text-arch-charcoal flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-arch-bronze flex-shrink-0" />
                  <span>{step.keyMilestone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-16 text-center pt-8 border-t border-arch-border">
          <p className="text-sm text-arch-muted mb-4">
            Have a project in Ratnagiri requiring structured coordination?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-arch-charcoal text-arch-ivory text-xs tracking-widest uppercase hover:bg-arch-bronze transition-colors rounded-sm"
          >
            <span>Start Stage 01 Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
