import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Phone, MessageSquare, X, Check, ArrowRight } from "lucide-react"
import { SERVICES_DATA, type ServiceItem, COMPANY_INFO } from "@/data/nirmanData"

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const featuredServices = SERVICES_DATA.filter((s) => s.isFeatured)
  const additionalServices = SERVICES_DATA.filter((s) => !s.isFeatured)

  return (
    <section id="services" className="py-28 bg-[#EDEAE2] text-[#252421] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A8793D] flex-shrink-0">
            Our Services & Capabilities
          </span>
          <div className="arch-line" />
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#252421]">
            Architectural Construction & Development Services
          </h2>
          <p className="text-sm sm:text-base text-[#716D65] font-sans leading-relaxed">
            Delivering organized, dependable building services across residential, commercial, and property developments in Ratnagiri.
          </p>
        </div>

        {/* ========================================================
            PART 1: 4 FEATURED SERVICES — ALTERNATING EDITORIAL LAYOUT
            ======================================================== */}
        <div className="space-y-24 mb-28">
          {featuredServices.map((service, index) => {
            const isImageLeft = index % 2 === 0

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded overflow-hidden bg-[#D8D2C5] shadow-sm group">
                    <img
                      src={service.image}
                      alt={service.targetKeyword}
                      className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded bg-[#1C1C1A]/80 text-[#F4F1EA] text-[10px] uppercase tracking-widest font-mono">
                        0{index + 1} / Featured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A8793D]">
                      {service.targetKeyword}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#252421] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#716D65] font-sans leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-[#D8D2C5]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#252421] block">
                      Scope of Work:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#716D65]">
                          <Check className="w-3.5 h-3.5 text-[#A8793D] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="px-5 py-3 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1C1A] hover:bg-[#A8793D] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#252421] hover:text-[#A8793D] underline underline-offset-4 cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ========================================================
            PART 2: ADDITIONAL SERVICES — CLEAN NUMBERED LIST
            ======================================================== */}
        <div className="border-t border-[#D8D2C5] pt-16">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#252421]">
              Additional Construction Services
            </h3>
            <span className="text-xs font-mono text-[#716D65]">
              08 Specialized Categories
            </span>
          </div>

          <div className="divide-y divide-[#D8D2C5]">
            {additionalServices.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer transition-colors hover:bg-[#E8E3D9]/60 px-4 -mx-4 rounded"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="text-xs font-mono text-[#A8793D] tracking-wider pt-0.5 md:pt-0">
                    0{idx + 5}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-serif text-[#252421] group-hover:text-[#A8793D] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-[#716D65] max-w-xl font-sans mt-0.5">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end md:self-center">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#A8793D] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================
          ARCHITECTURAL SERVICE DETAIL MODAL (WARM IVORY / STONE)
          ======================================================== */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F4F1EA] border border-[#D8D2C5] rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6 text-[#252421]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded hover:bg-[#E8E3D9] text-[#716D65] hover:text-[#252421] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8793D]">
                  {selectedService.targetKeyword}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#252421]">
                  {selectedService.title}
                </h3>
              </div>

              {/* Imagery */}
              <div className="rounded overflow-hidden h-56 sm:h-64 bg-[#E8E3D9]">
                <img
                  src={selectedService.image}
                  alt={selectedService.targetKeyword}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#716D65] leading-relaxed font-sans">
                {selectedService.fullDesc}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 pt-3 border-t border-[#D8D2C5]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#252421]">
                  Scope of Work:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#716D65]">
                      <Check className="w-3.5 h-3.5 text-[#A8793D] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-[#D8D2C5] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-4 py-2.5 rounded bg-[#E8E3D9] hover:bg-[#D8D2C5] text-xs uppercase tracking-wider font-semibold text-[#252421] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A8793D]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Nirman Infrastructure, I would like to inquire about ${selectedService.title} in Ratnagiri.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded bg-[#E8E3D9] hover:bg-[#D8D2C5] text-xs uppercase tracking-wider font-semibold text-[#252421] flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A8793D]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title
                    setSelectedService(null)
                    onSelectService(title)
                  }}
                  className="px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1C1A] hover:bg-[#A8793D] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{selectedService.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
