import React from "react"
import { motion } from "framer-motion"
import { ArrowDown, Phone, ArrowRight, ShieldCheck, MapPin, Building2, CheckCircle2 } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface HeroProps {
  onOpenConsultation?: () => void
}

export const Hero: React.FC<HeroProps> = () => {
  const headlineWords = ["Building", "Spaces.", "Creating", "Lasting", "Value."]

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-end pb-12 sm:pb-16 pt-36 sm:pt-44 overflow-hidden"
    >
      {/* 1. Real Nirman Project Building Background with Cinematic Ken-Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/nirman-building.png"
          alt="Nirman Infrastructure Ratnagiri Landmark Building"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
        />
        {/* Luxury Vignette Gradient: Deep Onyx at bottom, ambient gold center, subtle top shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141412] via-[#141412]/50 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(229,168,85,0.15),transparent_60%)] pointer-events-none" />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Architectural Location Eyebrow with Animated Pulse Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#E5A855]/40 backdrop-blur-md text-xs uppercase tracking-widest text-[#E5A855] font-semibold shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5A855] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#E5A855] -ml-4" />
            <span>Nirman Infrastructure • Ratnagiri, Maharashtra</span>
          </motion.div>

          {/* Staggered Headline Animation (Nyati Group Luxury Real Estate Style) */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif text-white tracking-tight leading-[1.06] font-normal drop-shadow-2xl">
              <span className="inline-block">
                {headlineWords.slice(0, 2).map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 + idx * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block mr-3 sm:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="italic font-normal text-[#F4F1EA] inline-block">
                {headlineWords.slice(2).map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                    className="inline-block mr-3 sm:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Supporting Copy with Smooth Fade-Up */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg text-[#F4F1EA]/95 font-sans max-w-2xl leading-relaxed drop-shadow-md font-normal"
          >
            Delivering landmark residential, commercial, and property developments across Ratnagiri. Rooted in disciplined engineering, coastal climate resilience, and decades of client trust.
          </motion.p>

          {/* CTAs with Luxury Hover Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="pt-3 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Primary Action: Explore Landmarks */}
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-sm text-xs uppercase tracking-wider font-bold text-white bg-[#A8793D] hover:bg-[#8F642F] transition-all flex items-center gap-2.5 shadow-2xl hover:shadow-[#A8793D]/30 border border-[#E5A855]/30 cursor-pointer"
            >
              <span>Explore Landmarks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider font-bold text-white bg-black/60 hover:bg-black/80 border border-white/30 hover:border-[#E5A855]/60 backdrop-blur-md transition-all flex items-center gap-2.5 shadow-xl cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#E5A855]" />
              <span>Call +91 7447849574</span>
            </a>

            {/* View Services */}
            <a
              href="#services"
              className="text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-[#E5A855] underline underline-offset-8 transition-colors py-2 drop-shadow-md cursor-pointer"
            >
              <span>Our Services</span>
            </a>
          </motion.div>

        </div>

        {/* 3. Nyati-Style Floating Quick Highlights Strip at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-black/40 border border-[#E5A855]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#E5A855]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">15+ Years Trust</div>
              <div className="text-[11px] text-[#D8D2C5]/70 font-mono">Ratnagiri Heritage</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-black/40 border border-[#E5A855]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 h-4 text-[#E5A855]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Monsoon RCC</div>
              <div className="text-[11px] text-[#D8D2C5]/70 font-mono">Konkan Climate Grade</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-black/40 border border-[#E5A855]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#E5A855]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">100% Legal Clear</div>
              <div className="text-[11px] text-[#D8D2C5]/70 font-mono">RERA & Municipal Sanctioned</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-black/40 border border-[#E5A855]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#E5A855]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Nachane Head Office</div>
              <div className="text-[11px] text-[#D8D2C5]/70 font-mono">Near Stadium, Ratnagiri</div>
            </div>
          </div>
        </motion.div>

        {/* Subtle scroll cue */}
        <div className="pt-6 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#D8D2C5]/70 font-mono">
          <div className="flex items-center gap-2">
            <span>Scroll to explore landmarks</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E5A855] animate-bounce" />
          </div>
          <span className="hidden sm:inline-block">Nirman Infrastructure</span>
        </div>

      </div>
    </section>
  )
}
