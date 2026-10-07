import React from "react"
import { Phone, Mail, MapPin, ExternalLink, ArrowUp, MessageSquare } from "lucide-react"
import { COMPANY_INFO, ALL_SERVICES_LIST } from "@/data/nirmanData"

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-arch-charcoal border-t border-[#2A2926] text-arch-stone/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Top Massive Architectural Brand Title */}
        <div className="pb-16 border-b border-[#2E2D2A]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-sm p-3 w-fit shadow-md inline-block">
                <img
                  src="/images/nirman-logo.png"
                  alt="Nirman Infrastructure Ratnagiri"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-arch-ivory font-normal tracking-tight">
                Nirman Infrastructure
              </h2>
              <p className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-mono">
                Builders & Property Development • Ratnagiri, Maharashtra
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#33322E] bg-[#22211F] hover:bg-arch-bronze hover:text-arch-ivory text-xs uppercase tracking-widest text-arch-ivory transition-colors rounded-sm cursor-pointer self-start lg:self-auto"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-[#2E2D2A]">
          
          {/* Col 1: About & Positioning (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-arch-ivory font-semibold">
              About the Firm
            </h4>
            <p className="text-xs sm:text-sm text-arch-stone/80 leading-relaxed font-sans max-w-sm">
              Nirman Infrastructure provides organized building execution, property construction, residential home building, and commercial development across the Ratnagiri district.
            </p>
            <div className="pt-2 space-y-1.5 text-xs font-mono text-arch-stone/60">
              <div>Office: Indradhanu, Behind CSM Stadium</div>
              <div className="text-arch-bronze">SV Road, Nachane, Ratnagiri 415612</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-arch-ivory font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><a href="#about" className="hover:text-arch-ivory transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-arch-ivory transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-arch-ivory transition-colors">Project Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-arch-ivory transition-colors">Core Principles</a></li>
              <li><a href="#process" className="hover:text-arch-ivory transition-colors">6-Stage Process</a></li>
              <li><a href="#estimator" className="hover:text-arch-ivory transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="hover:text-arch-ivory transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Col 3: Business Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-arch-ivory font-semibold">
              Construction Services
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {ALL_SERVICES_LIST.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-arch-ivory transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-arch-ivory font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-sans">
              <div>
                <span className="text-[11px] font-mono text-arch-stone/60 uppercase block">Phone Inquiries</span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-arch-ivory hover:text-arch-bronze text-sm font-medium transition-colors block mt-0.5"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-arch-stone/60 uppercase block">Email</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-arch-ivory hover:text-arch-bronze transition-colors block mt-0.5"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-arch-stone/60 uppercase block">Hours</span>
                <span className="text-arch-stone/90 block mt-0.5">
                  {COMPANY_INFO.hours.days}: {COMPANY_INFO.hours.timings}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nirman%20Infrastructure,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-arch-bronze hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-arch-stone/60 gap-4">
          <p className="font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Nirman Infrastructure Ratnagiri. All Rights Reserved. Professional Real Estate & Construction Services.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Nachane, Ratnagiri</span>
            <span>•</span>
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-arch-ivory">
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
