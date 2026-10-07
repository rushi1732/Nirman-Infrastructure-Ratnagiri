import React from "react"
import { motion } from "framer-motion"
import { ArrowDown, Phone, ArrowRight } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface HeroProps {
  onOpenConsultation?: () => void
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] lg:min-h-screen flex items-end pb-16 lg:pb-24 pt-36 overflow-hidden"
    >
      {/* 1. Real Nirman Project Building Background Image (Ensured z-0 so it is 100% visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/nirman-building.png"
          alt="Nirman Infrastructure Ratnagiri Project Building"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Architectural Vignette Overlay: Dark at bottom for readability, clear in middle for the building */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A] via-[#1C1C1A]/45 to-black/30 pointer-events-none" />
      </div>

      {/* 2. Content Container (z-10 above the image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Architectural location tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#E5A855] font-semibold drop-shadow-md"
          >
            <span className="w-6 h-[1.5px] bg-[#E5A855]" />
            <span>Nirman Infrastructure • Ratnagiri, Maharashtra</span>
          </motion.div>

          {/* Headline - Editorial Serif with text shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.08] font-normal drop-shadow-lg"
          >
            Building Spaces. <br />
            <span className="italic font-normal text-[#F4F1EA]">Creating Lasting Value.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#F4F1EA] font-sans max-w-2xl leading-relaxed drop-shadow-md"
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
            {/* Primary Action: Explore Services */}
            <a
              href="#services"
              className="px-7 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-white bg-[#A8793D] hover:bg-[#8F642F] transition-all flex items-center gap-2 shadow-xl"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded text-xs uppercase tracking-wider font-bold text-white bg-black/60 hover:bg-black/80 border border-white/40 backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#E5A855]" />
              <span>Call +91 7447849574</span>
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="text-xs uppercase tracking-wider font-semibold text-white hover:text-[#E5A855] underline underline-offset-4 transition-colors py-2 drop-shadow-md"
            >
              <span>View Projects</span>
            </a>
          </motion.div>

        </div>

        {/* Subtle scroll cue */}
        <div className="pt-12 flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#D8D2C5]">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#E5A855] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
