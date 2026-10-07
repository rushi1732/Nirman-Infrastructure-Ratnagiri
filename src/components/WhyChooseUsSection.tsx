import React from "react"
import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Eye, 
  Compass, 
  Sparkles, 
  Users, 
  CalendarCheck, 
  Phone,
  ArrowRight
} from "lucide-react"
import { WHY_CHOOSE_ITEMS, COMPANY_INFO } from "@/data/nirmanData"

interface WhyChooseUsProps {
  onOpenConsultation?: () => void
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = () => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#A8793D]"
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
    <section id="why-us" className="py-24 sm:py-32 bg-[#EDE8DE] border-t border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#A8793D] font-mono">
              <span className="w-6 h-[1.5px] bg-[#A8793D]" />
              <span>Foundational Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1C1C1A] tracking-tight">
              Built on Precision, Honesty & Structural Care
            </h2>
          </div>
          <p className="text-[#5A574E] text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Every project represents a long-term commitment. We combine on-site discipline with respectful communication to create durable, beautiful spaces in Ratnagiri.
          </p>
        </div>

        {/* 6 Core Pillars Grid with Nyati-Style Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border-2 border-[#D8D2C5] p-8 rounded-lg hover:border-[#A8793D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D9]">
                  <div className="w-12 h-12 rounded-lg bg-[#F4F1EA] flex items-center justify-center border border-[#D8D2C5] group-hover:scale-110 group-hover:bg-[#A8793D]/10 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-xs text-[#8C887B] font-bold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1C1C1A] group-hover:text-[#A8793D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5A574E] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E3D9] flex items-center text-xs font-mono font-bold text-[#A8793D]">
                <span>✓ Verified Execution Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-16 p-8 bg-white border-2 border-[#D8D2C5] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-lg shadow-md">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#1C1C1A] font-bold">
              Looking for a dependable construction partner in Ratnagiri?
            </h4>
            <p className="text-sm text-[#5A574E] mt-1 font-sans">
              Visit our head office in Nachane or call our engineering team directly.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1C1A] text-white text-xs tracking-widest uppercase font-bold hover:bg-[#A8793D] transition-colors rounded-sm flex-shrink-0 shadow-lg cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#E5A855]" />
            <span>Call +91 7447849574</span>
          </a>
        </div>

      </div>
    </section>
  )
}
