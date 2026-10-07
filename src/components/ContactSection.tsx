import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  Navigation
} from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "Residential Construction",
    projectLocation: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Connect with our Nachane Office</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Contact Nirman Infrastructure Ratnagiri
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Discuss your construction blueprints, schedule a site inspection, or visit our office behind Chhatrapati Shivaji Maharaj Stadium.
          </p>
        </div>

        {/* 2-Column Contact Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Business Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block">
                  Official Office Details
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Nirman Infrastructure Ratnagiri
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Real Estate Builders & Construction Company
                </p>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800/80 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="font-semibold text-white block">Office Address:</span>
                  <p className="leading-relaxed text-slate-300 font-sans text-xs sm:text-sm">
                    {COMPANY_INFO.address.line1}, <br />
                    {COMPANY_INFO.address.line2}, <br />
                    {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}, <br />
                    {COMPANY_INFO.address.state} — {COMPANY_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start gap-3.5 border-t border-slate-800/80 pt-4 text-sm text-slate-300">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Direct Phone / Enquiries:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-mono text-base font-bold text-sky-400 hover:text-sky-300 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Lines open Monday – Saturday</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 border-t border-slate-800/80 pt-4 text-xs text-slate-300">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Hours:</span>
                  <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Directly</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello Nirman Infrastructure, I would like to get in touch regarding a construction project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 border border-emerald-800/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Google Maps Directions Action */}
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-sky-950/60 hover:bg-sky-900/70 text-sky-300 font-semibold text-xs flex items-center justify-center gap-2 border border-sky-800/60 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

            </div>

          </div>

          {/* Right Column: Contact & Project Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              
              <div className="mb-8 space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  Send Project Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans">
                  Provide your project specifics and our technical team will review and contact you with preliminary estimates.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-900/80 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-600/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-display font-bold text-white">
                      Enquiry Received
                    </h4>
                    <p className="text-sm text-emerald-200 font-sans max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Nirman Infrastructure. Our team will get in touch with you shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        fullName: "",
                        phoneNumber: "",
                        email: "",
                        projectType: "Residential Construction",
                        projectLocation: "",
                        message: "",
                      })
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Full Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kadam"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Phone Number <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. +91 98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Project Type <span className="text-sky-400">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                      >
                        <option value="Building Construction Services">Building Construction Services</option>
                        <option value="Property Construction Contractors">Property Construction Contractors</option>
                        <option value="Residential Builders">Residential Builders</option>
                        <option value="Commercial Building Construction">Commercial Building Construction</option>
                        <option value="Building Erection Services">Building Erection Services</option>
                        <option value="Building Development Services">Building Development Services</option>
                        <option value="General Building Contractors">General Building Contractors</option>
                        <option value="Construction Services Provider">Construction Services Provider</option>
                        <option value="Home Construction Contractors">Home Construction Contractors</option>
                        <option value="Real Estate Construction">Real Estate Construction</option>
                        <option value="Structure Building Services">Structure Building Services</option>
                        <option value="Temple Construction Services">Temple Construction Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Location in Ratnagiri */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Project Location (Plot / Area in Ratnagiri) <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Nachane / Kuwarbav / Shivaji Nagar / Mirjole"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Message / Requirement Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your plot size, proposed built-up area, timeline, or any specific architectural preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-sans"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-xl shadow-sky-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending Enquiry..." : "Send Enquiry"}</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] font-sans text-slate-500">
                      Your information is kept confidential. We will never share your contact details.
                    </span>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
