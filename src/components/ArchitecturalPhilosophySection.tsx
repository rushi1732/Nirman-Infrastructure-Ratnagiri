import React from "react"
import { motion } from "framer-motion"
import { Quote, Phone, MapPin } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

export const ArchitecturalPhilosophySection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E0C] text-white overflow-hidden">
      
      {/* Background Architectural Real Building with Subtle Parallax Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/nirman-building.png"
          alt="Nirman Infrastructure Architectural Texture"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0C] via-[#0E0E0C]/90 to-[#0E0E0C]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(229,168,85,0.12),transparent_70%)] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Gold Decorative Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-full bg-[#1C1C18] border border-[#E5A855]/40 flex items-center justify-center mx-auto shadow-2xl"
          >
            <Quote className="w-8 h-8 text-[#E5A855]" />
          </motion.div>

          {/* Section Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#E5A855]" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E5A855] font-semibold">
              Architectural Philosophy
            </span>
            <span className="w-8 h-[1px] bg-[#E5A855]" />
          </motion.div>

          {/* Majestic Luxury Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal leading-[1.25] text-[#F4F1EA] tracking-tight"
          >
            "Every foundation we lay and every skyline we touch is governed by uncompromising structural permanence, Konkan climate resilience, and lasting client trust."
          </motion.blockquote>

          {/* Attributions & Direct Contact Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-[#D8D2C5]/80"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-white text-sm">Nirman Infrastructure</span>
              <span className="text-[#E5A855]">•</span>
              <span>Ratnagiri, Maharashtra</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E5A855]" />
              <span>Indradhanu, Nachane Head Office</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-[#E5A855] hover:text-white transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 7447849574</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
