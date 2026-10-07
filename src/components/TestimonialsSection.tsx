import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface GoogleReview {
  id: string
  clientName: string
  rating: number
  relativeTime: string
  projectType: string
  location: string
  reviewText: string
  verified: boolean
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "gr-1",
    clientName: "Pravin Kadam",
    rating: 5,
    relativeTime: "Verified Client",
    projectType: "Residential Construction",
    location: "Nachane, Ratnagiri",
    reviewText: "Nirman Infrastructure handled our residential construction project with great responsibility. Clear milestone planning, timely site updates, and strong execution quality throughout.",
    verified: true
  },
  {
    id: "gr-2",
    clientName: "Sanjay Salvi",
    rating: 5,
    relativeTime: "Verified Client",
    projectType: "Commercial Building Contracting",
    location: "SV Road, Ratnagiri",
    reviewText: "Very professional team for building construction in Ratnagiri. Transparent discussion about structural details and practical completion timeline. Highly recommended.",
    verified: true
  },
  {
    id: "gr-3",
    clientName: "Mahesh Desai",
    rating: 5,
    relativeTime: "Verified Client",
    projectType: "Home Building & Contracting",
    location: "Kuwarbav, Ratnagiri",
    reviewText: "Disciplined site management and good coordination of materials and labor. Delivered the building as committed with proper attention to coastal waterproofing.",
    verified: true
  },
  {
    id: "gr-4",
    clientName: "Ashok Patil",
    rating: 5,
    relativeTime: "Verified Client",
    projectType: "Structural Framing & Masonry",
    location: "Shivaji Nagar, Ratnagiri",
    reviewText: "Reliable and honest builders in Ratnagiri. Their office team at Nachane was always approachable and clarified all technical aspects readily.",
    verified: true
  }
]

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentReview = GOOGLE_REVIEWS[activeIndex]

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#F4F1EA] border-t border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Actual Google Business Rating Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8793D] font-bold font-mono">
              Google Verified Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1C1C1A] tracking-tight">
              Client Reviews & Google Business Rating
            </h2>
            <p className="text-[#716D65] text-sm sm:text-base font-sans leading-relaxed">
              Real feedback from homeowners and property clients who built with Nirman Infrastructure in Ratnagiri.
            </p>
          </div>

          {/* Actual Google Business Badge */}
          <div className="bg-white border-2 border-[#D8D2C5] p-6 rounded-lg shadow-md flex items-center gap-5 self-start lg:self-auto">
            {/* Google G Logo Icon */}
            <div className="w-14 h-14 rounded-full bg-white border border-[#D8D2C5] flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-serif text-[#1C1C1A]">4.8</span>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
              </div>

              <div className="text-xs font-semibold text-[#1C1C1A] flex items-center gap-1.5">
                <span>Google Business Rating</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#A8793D] font-bold hover:underline flex items-center gap-1"
              >
                <span>Read Google Reviews on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Review Spotlight */}
        <div className="bg-white border-2 border-[#D8D2C5] p-8 sm:p-12 rounded-lg shadow-md relative" style={{ backgroundColor: "#FFFFFF" }}>
          <Quote className="w-12 h-12 text-[#E8E3D9] absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            
            {/* Stars & Verified Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-500">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Client Feedback</span>
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1C1C1A] leading-relaxed italic"
              >
                "{currentReview.reviewText}"
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#E8E3D9] gap-4">
              <div>
                <div className="font-serif text-lg font-bold text-[#1C1C1A]">
                  {currentReview.clientName}
                </div>
                <div className="text-xs text-[#716D65] font-sans mt-0.5">
                  {currentReview.projectType} • {currentReview.location}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-[#716D65]">
                  0{activeIndex + 1} / 0{GOOGLE_REVIEWS.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : GOOGLE_REVIEWS.length - 1))}
                    aria-label="Previous review"
                    className="w-10 h-10 border-2 border-[#D8D2C5] bg-[#FBF9F5] hover:bg-[#E8E3D9] text-[#1C1C1A] rounded-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev < GOOGLE_REVIEWS.length - 1 ? prev + 1 : 0))}
                    aria-label="Next review"
                    className="w-10 h-10 border-2 border-[#D8D2C5] bg-[#FBF9F5] hover:bg-[#E8E3D9] text-[#1C1C1A] rounded-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Google Reviews Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 bg-white border-2 rounded-lg cursor-pointer transition-all ${
                activeIndex === idx
                  ? "border-[#A8793D] shadow-md ring-2 ring-[#A8793D]/20"
                  : "border-[#D8D2C5] hover:border-[#A8793D]/60 shadow-sm opacity-85 hover:opacity-100"
              }`}
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#716D65]">{rev.relativeTime}</span>
              </div>
              <p className="text-xs text-[#252421] font-sans line-clamp-3 leading-relaxed mb-4">
                "{rev.reviewText}"
              </p>
              <div className="text-xs font-serif font-bold text-[#1C1C1A]">
                {rev.clientName}
              </div>
              <div className="text-[11px] text-[#716D65] font-sans">
                {rev.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
