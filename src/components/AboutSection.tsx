import React from "react"
import { motion } from "framer-motion"
import { MapPin, ShieldCheck, FileCheck, Clock, Users2, ArrowRight } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface AboutSectionProps {
  onOpenConsultation?: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#A8793D]" />,
      title: "Coastal Weather Engineering",
      desc: "Specialized RCC mix, anti-corrosive steel coating, and advanced multi-tier waterproofing tailored for heavy Konkan monsoons."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#A8793D]" />,
      title: "100% Clear Titles & RERA Sanctions",
      desc: "Zero legal ambiguity. Every project undergoes complete municipal clearance, NA sanctioning, and transparent documentation."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#A8793D]" />,
      title: "Committed Milestone Deliveries",
      desc: "Disciplined scheduling with transparent phase-by-phase updates from earthwork and structural framing through final finishing."
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#A8793D]" />,
      title: "Direct Leadership & Transparency",
      desc: "Accessible local presence at our Nachane office. Direct technical communication, honest cost projections, and zero hidden clauses."
    }
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4F1EA] text-[#252421] relative overflow-hidden">
      
      {/* Subtle Architectural Grid Lines in Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8E3D9_1px,transparent_1px),linear-gradient(to_bottom,#E8E3D9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow & Architectural Line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#A8793D]">
            <span className="w-6 h-[1.5px] bg-[#A8793D]" />
            <span>Who We Are</span>
          </div>
          <div className="arch-line" />
        </div>

        {/* Asymmetrical Split Storytelling (Nyati Group Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Architecture Image (5 Cols) with Floating Badges & Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Border Frame */}
            <div className="relative p-2 sm:p-3 bg-white rounded-lg shadow-2xl border border-[#D8D2C5]">
              <div className="relative overflow-hidden rounded bg-[#1C1C1A] aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="/images/nirman-building.png"
                  alt="Nirman Infrastructure Ratnagiri Built Landmark"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Site Photography Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-[#E5A855]/60 text-white text-[10px] font-mono uppercase tracking-widest backdrop-blur-md shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A855] animate-pulse" />
                    <span>Actual Site Photography</span>
                  </span>
                </div>

                {/* Floating Location Overlay at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-white/95 backdrop-blur-md border border-[#D8D2C5] shadow-lg">
                  <div className="flex items-start gap-2 text-xs text-[#252421]">
                    <MapPin className="w-4 h-4 text-[#A8793D] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif font-bold text-sm text-[#1C1C1A]">Indradhanu Project Landmark</div>
                      <div className="text-[11px] text-[#716D65] font-sans">
                        Nachane, Behind Chhatrapati Shivaji Maharaj Stadium, Ratnagiri
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 rounded-lg bg-[#1C1C1A] text-white shadow-2xl border border-[#A8793D]/50 z-20 max-w-[200px]">
              <div className="text-2xl font-serif font-bold text-[#E5A855]">15+ Years</div>
              <div className="text-[11px] text-[#D8D2C5] font-sans mt-0.5">
                Of Engineering Trust & Excellence in Konkan
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-7"
          >
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#A8793D] font-bold">
                The Nirman Legacy • Ratnagiri
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1C1C1A] leading-tight tracking-tight">
                Crafting Ratnagiri's Skyline With <br />
                <span className="italic font-normal text-[#A8793D]">Purpose, Precision & Permanence.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#5A574E] font-sans leading-relaxed">
              <p>
                At Nirman Infrastructure Ratnagiri, we perceive construction not merely as laying concrete, but as shaping lasting legacies. Building in the coastal Konkan belt demands deep geotechnical insight, disciplined structural planning, and meticulous moisture-resistant craftsmanship.
              </p>
              <p>
                From prestigious residential apartments and private bungalows to modern commercial landmarks, our practice is anchored in transparent client partnerships, strict adherence to municipal norms, and engineering that stands resilient against generations of coastal weather.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-lg bg-white border border-[#D8D2C5] hover:border-[#A8793D] transition-all duration-300 shadow-sm hover:shadow-md space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#F4F1EA] flex items-center justify-center border border-[#E8E3D9] group-hover:scale-110 group-hover:bg-[#A8793D]/10 transition-all">
                      {pil.icon}
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#1C1C1A]">
                      {pil.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#716D65] leading-relaxed font-sans pl-11">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex items-center gap-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>View Built Landmarks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-xs uppercase tracking-wider font-bold text-[#A8793D] hover:text-[#8F642F] underline underline-offset-4 transition-colors"
              >
                Inquire: +91 7447849574
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
