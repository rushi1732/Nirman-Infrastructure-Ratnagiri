import React from "react"
import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Eye, 
  Compass, 
  Sparkles, 
  Users, 
  CalendarCheck, 
  ArrowRight
} from "lucide-react"
import { WHY_CHOOSE_ITEMS } from "@/data/nirmanData"

interface WhyChooseUsProps {
  onOpenConsultation: () => void
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-arch-bronze"
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck className={iconClass} />
      case "Eye": return <Eye className={iconClass} />
      case "Compass": return <Compass className={iconClass} />
      case "Sparkles": return <Sparkles className={iconClass} />
      case "Users": return <Users className={iconClass} />
      case "CalendarCheck": return <CalendarCheck className={iconClass} />
      default: return <ShieldCheck className={iconClass} />
    }
  }

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-arch-stone/40 border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Built on Precision, Honesty & Structural Care
            </h2>
          </div>
          <p className="text-arch-muted text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Every project represents a long-term commitment. We combine on-site discipline with respectful communication to create durable, beautiful spaces.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-arch-ivory border border-arch-border p-8 rounded-sm hover:border-arch-bronze/50 transition-colors duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-arch-border/70">
                  <div className="w-10 h-10 rounded-sm bg-arch-stone flex items-center justify-center border border-arch-border">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-serif text-xs text-arch-muted tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-arch-charcoal">
                  {item.title}
                </h3>

                <p className="text-sm text-arch-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-arch-border/50 flex items-center text-xs font-medium text-arch-bronze">
                <span>Verified Execution Practice</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-arch-ivory border border-arch-border flex flex-col sm:flex-row items-center justify-between gap-6 rounded-sm">
          <div>
            <h4 className="font-serif text-xl text-arch-charcoal font-normal">
              Looking for a dependable construction partner in Ratnagiri?
            </h4>
            <p className="text-sm text-arch-muted mt-1">
              Visit our office in Nachane or schedule a preliminary site visit.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-arch-charcoal text-arch-ivory text-xs tracking-widest uppercase hover:bg-arch-bronze transition-colors rounded-sm flex-shrink-0"
          >
            <span>Discuss Your Site</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
