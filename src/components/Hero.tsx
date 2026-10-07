import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Phone, ArrowDown } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface HeroProps {
  onOpenConsultation: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#1C1C1A]"
    >
      {/* Full-width Architectural Photography Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural Residence by Nirman Infrastructure"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Tasteful Architectural Dark Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/65 to-[#1C1C1A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle architectural label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#A8793D] font-medium"
          >
            <span className="w-6 h-[1px] bg-[#A8793D]" />
            <span>Nirman Infrastructure • Ratnagiri, Maharashtra</span>
          </motion.div>

          {/* Headline - Editorial Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.08] font-normal"
          >
            Building Spaces. <br />
            <span className="italic font-normal text-[#F4F1EA]">Creating Lasting Value.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#E8E3D9] font-sans max-w-2xl leading-relaxed"
          >
            Nirman Infrastructure delivers professional residential, commercial and real estate construction solutions in Ratnagiri with a focus on thoughtful planning, quality execution and dependable service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#A8793D] hover:bg-[#8F642F] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-transparent hover:bg-white/10 border border-[#D8D2C5]/50 transition-colors"
            >
              <span>Explore Our Services</span>
            </a>

            {/* Small Contact Action */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E8E3D9] hover:text-[#A8793D] transition-colors py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8793D]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </motion.div>

        </div>

        {/* Subtle scroll cue */}
        <div className="pt-12 flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#716D65]">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#A8793D] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
