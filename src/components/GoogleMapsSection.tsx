import React from "react"
import { MapPin, Navigation, ExternalLink, Building2, Phone } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ratnagiri Office Location</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Visit Nirman Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Centrally situated in Nachane behind Chhatrapati Shivaji Maharaj Stadium, easily accessible from all parts of Ratnagiri.
            </p>
          </div>

          {/* Direct Directions Action */}
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-sky-950/60 flex-shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Map Viewport Box */}
        <div className="rounded-3xl border border-slate-800 overflow-hidden bg-slate-900 shadow-2xl relative h-[450px] sm:h-[520px]">
          
          {/* Interactive Google Map Iframe */}
          <iframe
            title="Nirman Infrastructure Ratnagiri Location Map"
            src="https://maps.google.com/maps?q=Nirman%20Infrastructure%20Ratnagiri%20Nachane%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter contrast-125 brightness-90"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating Address Card on Map */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-6 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase font-bold tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Nirman Infrastructure</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Office No. 06 & 07, First Floor, Indradhanu, Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Hindu Colony, Abhyudhya Nagar, Nachane, Ratnagiri, Maharashtra 415612
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-mono text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-300 font-medium underline underline-offset-4 flex items-center gap-1"
              >
                <span>Open in Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
