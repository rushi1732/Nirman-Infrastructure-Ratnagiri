import React from "react"
import { Phone, Mail, MapPin, ExternalLink, ArrowUp, MessageSquare, Building2 } from "lucide-react"
import { COMPANY_INFO, SERVICES_DATA } from "@/data/nirmanData"

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#060a12] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      
      {/* Blueprint Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Col (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Logo in clean high-contrast container */}
            <div className="bg-white rounded-xl p-2.5 w-fit shadow-md border border-slate-200/40">
              <img
                src="/images/nirman-logo.png"
                alt="Nirman Infrastructure Ratnagiri"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-sm">
              Nirman Infrastructure Ratnagiri is a premier real estate builder and construction company dedicated to creating enduring residential, commercial, and turnkey landmarks across the Konkan region.
            </p>

            <div className="space-y-1 text-xs font-mono text-slate-400">
              <div>Builders & Real Estate Developers</div>
              <div className="text-sky-400">Nachane, Ratnagiri, Maharashtra</div>
            </div>

          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#model-3d" className="hover:text-white transition-colors">3D Model</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Construction Process</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Cost Estimator</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Offered (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Construction Services (12 Categories)
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-sans">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors block truncate" title={s.title}>
                    • {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a href="#estimator" className="hover:text-white transition-colors text-xs text-sky-400 font-mono inline-flex items-center gap-1">
                <span>Interactive Cost Estimator</span> →
              </a>
            </div>
          </div>

          {/* Contact Details & Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Ratnagiri Office
            </h4>
            
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}, Maharashtra {COMPANY_INFO.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-mono text-sky-400 hover:text-sky-300 font-semibold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  WhatsApp Direct Support
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 underline underline-offset-4"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social media placeholders */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                Connect & Updates
              </span>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Facebook</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Instagram</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">LinkedIn</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <div>
            © Nirman Infrastructure Ratnagiri. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
