import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Compass, MapPin, Building, Award, CheckCircle2 } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface HeroProps {
  onOpenConsultation: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#080d17]"
    >
      {/* Background Architectural Imagery with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Construction in Ratnagiri"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          style={{ animationDuration: "10s" }}
        />
        {/* Layered Gradient for Contrast and Architectural Mystery */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d17] via-[#080d17]/85 to-[#080d17]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-transparent to-[#080d17]/40" />
        
        {/* Architectural Blueprint Matrix Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Location & Trust Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-800/50 backdrop-blur-md shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-medium">
                Nirman Infrastructure • Ratnagiri, Maharashtra
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-xs text-slate-300 hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" /> Nachane
              </span>
            </motion.div>

            {/* Core Architectural Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                Building Dreams. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-400">
                  Creating Strong
                </span>{" "}
                Foundations.
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed"
            >
              Professional construction and real estate solutions in Ratnagiri, Maharashtra. 
              Engineered with precision for the Konkan climate, from bespoke family villas to landmark commercial infrastructure.
            </motion.p>

            {/* Primary & Secondary CTAs + Quick Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-xl shadow-sky-900/40 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Explore Our Work</span>
              </a>

              {/* Call Access */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors flex items-center gap-2"
                title="Call Nirman Infrastructure directly"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Call Us:</span>
                <span className="font-mono text-xs">{COMPANY_INFO.phone}</span>
              </a>

              {/* WhatsApp Access */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hello Nirman Infrastructure, I would like to discuss my construction project in Ratnagiri."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-sm font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 transition-colors flex items-center gap-2"
                title="Message on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Trust Highlights Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 max-w-2xl"
            >
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Turnkey Construction</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Monsoon-Proof Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Transparent BOQ Costing</span>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Architectural Feature Card - 4 Cols */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-5"
            >
              {/* Subtle architectural accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-400" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Project Consultation
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                  Ratnagiri Office Open
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-display font-bold text-white leading-snug">
                  Planning to Build in Ratnagiri?
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Whether you are planning a modern bungalow in Nachane, a commercial building along SV Road, or seeking turnkey contracting with verified Grade-A materials.
                </p>
              </div>

              {/* Quick Feature Checklist */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-white">Nachane, Ratnagiri</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Contract Modes</span>
                  <span className="font-semibold text-white">Turnkey / Item-Rate EPC</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Direct Contact</span>
                  <span className="font-mono text-sky-400 font-semibold">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              {/* Direct Booking Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Site Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
