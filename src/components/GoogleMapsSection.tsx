import React from "react"
import { MapPin, Navigation, ExternalLink, Phone } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-arch-stone/20 border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Location & Accessibility
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Visit Our Ratnagiri Office
            </h2>
            <p className="text-sm sm:text-base text-arch-muted font-sans leading-relaxed">
              Centrally situated in Nachane behind Chhatrapati Shivaji Maharaj Stadium, convenient to access across Ratnagiri.
            </p>
          </div>

          {/* Direct Directions Action */}
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-arch-charcoal hover:bg-arch-bronze text-arch-ivory text-xs uppercase tracking-widest font-medium transition-colors rounded-sm flex items-center gap-2 flex-shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 text-arch-bronze" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Map Viewport Box */}
        <div className="rounded-sm border border-arch-border overflow-hidden bg-arch-stone relative h-[450px] sm:h-[500px]">
          
          {/* Interactive Google Map Iframe */}
          <iframe
            title="Nirman Infrastructure Ratnagiri Location Map"
            src="https://maps.google.com/maps?q=Nirman%20Infrastructure%20Ratnagiri%20Nachane%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter grayscale-[20%]"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating Address Card on Map */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-6 rounded-sm bg-arch-charcoal text-arch-ivory border border-[#2E2D2A] shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#2E2D2A]">
              <span className="text-xs font-mono uppercase tracking-widest text-arch-bronze font-semibold">
                Nirman Infrastructure
              </span>
              <span className="text-[11px] text-arch-stone/60 font-mono">
                Ratnagiri 415612
              </span>
            </div>

            <div className="text-xs text-arch-stone/85 leading-relaxed font-sans">
              <span className="font-semibold text-arch-ivory block mb-0.5">
                {COMPANY_INFO.address.officeName}
              </span>
              <span>{COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area}, Ratnagiri</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#2E2D2A] text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-arch-ivory hover:text-arch-bronze flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-arch-bronze" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-arch-stone/60 text-[11px] font-mono">
                {COMPANY_INFO.hours.days}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
