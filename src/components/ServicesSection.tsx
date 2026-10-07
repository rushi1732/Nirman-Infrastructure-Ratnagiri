import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Building2, 
  HardHat, 
  Home, 
  Briefcase, 
  Building, 
  Layers, 
  Hammer, 
  Wrench, 
  Landmark, 
  Columns3, 
  Sparkles,
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  X
} from "lucide-react"
import { SERVICES_DATA, type ServiceItem, COMPANY_INFO } from "@/data/nirmanData"

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null)

  const featuredServices = SERVICES_DATA.filter((s) => s.isFeatured)
  const additionalServices = SERVICES_DATA.filter((s) => !s.isFeatured)

  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case "Building2": return <Building2 className={className} />
      case "HardHat": return <HardHat className={className} />
      case "Home": return <Home className={className} />
      case "Briefcase": return <Briefcase className={className} />
      case "Building": return <Building className={className} />
      case "Layers": return <Layers className={className} />
      case "Hammer": return <Hammer className={className} />
      case "Wrench": return <Wrench className={className} />
      case "Landmark": return <Landmark className={className} />
      case "Columns3": return <Columns3 className={className} />
      case "Church":
      case "Sparkles":
        // Dignified architectural temple icon
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4" />
            <path d="m8 6 4-3 4 3" />
            <path d="M4 10h16" />
            <path d="M6 10v10" />
            <path d="M10 10v10" />
            <path d="M14 10v10" />
            <path d="M18 10v10" />
            <path d="M3 20h18" />
          </svg>
        )
      default: return <Building2 className={className} />
    }
  }

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service)
  }

  const handleConsultationForService = (service: ServiceItem) => {
    setSelectedService(null)
    onSelectService(service.title)
  }

  return (
    <section id="services" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background blueprint subtle pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Actual Business Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Construction & Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Explore our verified construction contracting and building services in Ratnagiri, designed around practical planning, quality workmanship, and coordinated site execution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              12 Service Categories • Ratnagiri, MH
            </span>
          </div>
        </div>

        {/* ========================================================
            PART 1: FEATURED SERVICES (4 PRIMARY SERVICES)
            Editorial-Style Asymmetrical Architectural Layouts
            ======================================================== */}
        <div className="space-y-4 mb-20">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              Featured Core Services
            </h3>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 font-sans">
              Primary residential, commercial & contracting disciplines
            </span>
          </div>

          {/* 4 Featured Services in Editorial 2x2 Rich Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, idx) => {
              const isEven = idx % 2 === 0
              return (
                <article
                  key={service.id}
                  className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image & Badge Header */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.targetKeyword}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Badge & SEO Tag */}
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800 backdrop-blur-md">
                        {service.badge}
                      </span>
                      <span className="hidden sm:inline px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800">
                        Ratnagiri
                      </span>
                    </div>

                    {/* Icon container */}
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center text-sky-400 shadow-lg">
                      {renderIcon(service.iconName, "w-5 h-5")}
                    </div>

                    {/* Title overlay in image foot */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {service.fullDesc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                          Service Scope:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenDetail(service)}
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>View Service Scope</span>
                        <ChevronRight className="w-4 h-4 text-sky-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-950/50 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: ADDITIONAL CONSTRUCTION SERVICES (8 SERVICES)
            Interactive Refined Grid & Expandable Mobile List
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Additional Construction & Specialized Services
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              8 Tailored Solutions
            </span>
          </div>

          {/* Desktop & Tablet: Refined 4-Column Interactive Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => handleOpenDetail(service)}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg relative overflow-hidden"
              >
                {/* Subtle top-right accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:text-emerald-400 group-hover:border-emerald-700/50 transition-colors">
                      {renderIcon(service.iconName, "w-5 h-5")}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      0{idx + 5}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] font-semibold text-sky-400 group-hover:text-sky-300 flex items-center gap-1">
                    {service.ctaText}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform group-hover:text-sky-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Easy-to-Scan Stacked Accordion Layout */}
          <div className="sm:hidden space-y-3">
            {additionalServices.map((service, idx) => {
              const isExpanded = expandedMobileCategory === service.id
              return (
                <div
                  key={service.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedMobileCategory(isExpanded ? null : service.id)}
                    className="w-full p-4 flex items-center justify-between text-left gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                        {renderIcon(service.iconName, "w-4 h-4")}
                      </div>
                      <span className="text-sm font-display font-bold text-white">
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-800/60 text-xs text-slate-300">
                      <p className="leading-relaxed font-sans">{service.fullDesc}</p>
                      
                      <div className="space-y-1 pt-1">
                        {service.deliverables.slice(0, 3).map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenDetail(service)}
                          className="flex-1 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="flex-1 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold"
                        >
                          {service.ctaText}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>

      {/* ========================================================
          ACCESSIBLE SERVICE DETAIL DIALOG / DRAWER MODAL
          ======================================================== */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-950 text-sky-400 border border-sky-800">
                    {selectedService.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Ratnagiri, Maharashtra
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {selectedService.title}
                </h3>

                {/* Target SEO Keyword Pill */}
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-sky-300 flex items-center gap-2">
                  <span className="text-slate-500">Service Focus:</span>
                  <span className="font-semibold">{selectedService.targetKeyword}</span>
                </div>
              </div>

              {/* Service Imagery */}
              <div className="rounded-2xl overflow-hidden h-52 sm:h-64 border border-slate-800 relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.targetKeyword}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
                  Nirman Infrastructure • Nachane Office Coordination
                </div>
              </div>

              {/* Full Original Professional Description */}
              <div className="space-y-3 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>{selectedService.fullDesc}</p>
              </div>

              {/* Key Service Scope / Deliverables */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Included Service Scope & Execution Steps:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct CTAs: Call, WhatsApp & Consultation */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Nirman Infrastructure, I would like to inquire about ${selectedService.title} in Ratnagiri.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 border border-emerald-800/60 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => handleConsultationForService(selectedService)}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{selectedService.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
