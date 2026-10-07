import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { TESTIMONIALS_DATA, COMPANY_INFO } from "@/data/nirmanData"

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentTestimonial = TESTIMONIALS_DATA[activeIndex] || TESTIMONIALS_DATA[0]

  return (
    <section className="py-24 sm:py-32 bg-arch-stone/20 border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Trust Built Through Concrete Results
            </h2>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-arch-ivory border border-arch-border rounded-sm text-xs font-sans text-arch-charcoal hover:border-arch-bronze transition-colors self-start md:self-auto"
          >
            <div className="flex items-center gap-1 text-arch-bronze">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-arch-bronze text-arch-bronze" />
              ))}
            </div>
            <span className="text-arch-muted">|</span>
            <span className="font-medium">Ratnagiri Office</span>
            <ExternalLink className="w-3.5 h-3.5 text-arch-muted" />
          </a>
        </div>

        {/* Featured Editorial Quote Display */}
        <div className="bg-arch-ivory border border-arch-border p-8 sm:p-14 lg:p-16 rounded-sm shadow-sm relative">
          <Quote className="w-12 h-12 text-arch-stone/80 absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-1 text-arch-bronze">
              {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-arch-bronze text-arch-bronze" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-xl sm:text-2xl md:text-3xl text-arch-charcoal font-normal leading-relaxed italic"
              >
                "{currentTestimonial.reviewText}"
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-arch-border gap-4">
              <div>
                <div className="font-serif text-base font-medium text-arch-charcoal">
                  {currentTestimonial.clientName}
                </div>
                <div className="text-xs text-arch-muted font-sans mt-0.5">
                  {currentTestimonial.projectType} • {currentTestimonial.location}
                </div>
              </div>

              {/* Slider Pagination Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-arch-muted">
                  0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_DATA.length - 1))}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 border border-arch-border bg-arch-stone/30 hover:bg-arch-stone rounded-sm flex items-center justify-center text-arch-charcoal transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev < TESTIMONIALS_DATA.length - 1 ? prev + 1 : 0))}
                    aria-label="Next testimonial"
                    className="w-9 h-9 border border-arch-border bg-arch-stone/30 hover:bg-arch-stone rounded-sm flex items-center justify-center text-arch-charcoal transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Overview Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 bg-arch-ivory border rounded-sm cursor-pointer transition-all ${
                activeIndex === idx
                  ? "border-arch-bronze shadow-sm"
                  : "border-arch-border hover:border-arch-bronze/40 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-1 text-arch-bronze mb-3">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-arch-bronze text-arch-bronze" />
                ))}
              </div>
              <p className="text-xs text-arch-charcoal font-sans line-clamp-3 leading-relaxed mb-4">
                "{t.reviewText}"
              </p>
              <div className="text-[11px] font-serif font-medium text-arch-charcoal">
                {t.clientName}
              </div>
              <div className="text-[10px] text-arch-muted font-sans">
                {t.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
