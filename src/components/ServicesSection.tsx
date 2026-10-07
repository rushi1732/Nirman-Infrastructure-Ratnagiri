import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  Building2, 
  Landmark, 
  KeyRound, 
  Hammer, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Sparkles
} from "lucide-react"
import { SERVICES_DATA, type ServiceItem } from "@/data/nirmanData"

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>("all")

  // Icon mapping helper
  const renderIcon = (name: string) => {
    switch (name) {
      case "Home": return <Home className="w-5 h-5" />
      case "Building2": return <Building2 className="w-5 h-5" />
      case "Landmark": return <Landmark className="w-5 h-5" />
      case "KeyRound": return <KeyRound className="w-5 h-5" />
      case "Hammer": return <Hammer className="w-5 h-5" />
      case "FileCheck": return <FileCheck className="w-5 h-5" />
      default: return <Layers className="w-5 h-5" />
    }
  }

  // Turnkey service as flagship
  const turnkeyService = SERVICES_DATA.find((s) => s.id === "turnkey") || SERVICES_DATA[3]
  const otherServices = SERVICES_DATA.filter((s) => s.id !== "turnkey")

  return (
    <section id="services" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Construction Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Our Construction & Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              From individual custom homes to multi-storey commercial ventures in Ratnagiri, we provide disciplined project delivery backed by rigorous structural standards.
            </p>
          </div>

          <div className="flex-shrink-0">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              6 Disciplines • Turnkey Ready
            </span>
          </div>
        </div>

        {/* 1. Flagship Spotlight: Turnkey Construction (Wide Architectural Banner) */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-sky-900/60 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <KeyRound className="w-64 h-64 text-sky-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Featured Solution • Most Popular for NRIs & Homeowners</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                  {turnkeyService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {turnkeyService.fullDesc}
                </p>
              </div>

              {/* Deliverable Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {turnkeyService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService(turnkeyService.title)}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 shadow-lg shadow-sky-950/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Inquire Turnkey Contract</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 font-mono">
                  Fixed Budgets • Strict Milestone Delivery
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
                <img
                  src={turnkeyService.image}
                  alt={turnkeyService.title}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-sky-300 uppercase tracking-wider block">
                    Zero Subcontractor Headaches
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Blueprint to Key Handover
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Varied Architectural Layout for Remaining Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherServices.map((service, index) => {
            const isWide = index === 0 || index === 1

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-800/90 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden shadow-xl"
              >
                {/* Top Corner Subtle Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-sky-500/10" />

                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:text-emerald-400 group-hover:border-emerald-600/40 transition-colors">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Image Preview */}
                  <div className="rounded-xl overflow-hidden border border-slate-800 h-36 my-2 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Scope Includes:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-sky-300 hover:text-white text-xs font-semibold uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
