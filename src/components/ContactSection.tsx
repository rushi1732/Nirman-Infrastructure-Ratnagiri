import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Check, 
  ExternalLink
} from "lucide-react"
import { COMPANY_INFO, ALL_SERVICES_LIST } from "@/data/nirmanData"

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "Building Construction Services",
    projectLocation: "Ratnagiri",
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

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-arch-ivory border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Contact & Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Start a Conversation About Your Site
            </h2>
          </div>
          <p className="text-arch-muted text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Reach out directly to arrange a consultation at our Ratnagiri office or request a site visit for your upcoming project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office & Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Office Address Card */}
            <div className="bg-arch-stone/30 border border-arch-border p-8 rounded-sm space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-arch-bronze block">
                Corporate Headquarters
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-arch-bronze flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-arch-charcoal leading-relaxed">
                    <span className="font-semibold block">{COMPANY_INFO.address.officeName}</span>
                    <span>{COMPANY_INFO.address.landmark},</span><br />
                    <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.area},</span><br />
                    <span>Ratnagiri, Maharashtra {COMPANY_INFO.address.pincode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-arch-bronze flex-shrink-0" />
                  <div className="text-sm font-sans">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-arch-charcoal font-medium hover:text-arch-bronze transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-arch-muted block">Direct line for project inquiries</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-arch-bronze flex-shrink-0" />
                  <div className="text-sm font-sans">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-arch-charcoal font-medium hover:text-arch-bronze transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-arch-muted block">Official communication</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-arch-bronze flex-shrink-0" />
                  <div className="text-sm font-sans text-arch-charcoal">
                    <span className="font-medium">{COMPANY_INFO.hours.days}</span>
                    <span className="text-xs text-arch-muted block">{COMPANY_INFO.hours.timings}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-arch-border/70 flex items-center justify-between">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-arch-bronze hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nirman%20Infrastructure,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-arch-charcoal hover:text-arch-bronze"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-arch-bronze" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Local Context Notice */}
            <div className="p-6 bg-arch-ivory border border-arch-border rounded-sm">
              <h4 className="font-serif text-sm font-medium text-arch-charcoal mb-1">
                Local Presence in Ratnagiri
              </h4>
              <p className="text-xs text-arch-muted font-sans leading-relaxed">
                Operating across Nachane, Kuwarbav, Shivaji Nagar, Mirjole, Zadgaon, and greater Ratnagiri district.
              </p>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-arch-stone/20 border border-arch-border p-8 sm:p-12 rounded-sm">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-arch-stone border border-arch-border rounded-full mx-auto flex items-center justify-center text-arch-bronze">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-arch-charcoal font-normal">
                    Thank You, {formData.fullName}
                  </h3>
                  <p className="text-sm text-arch-muted max-w-md mx-auto font-sans leading-relaxed">
                    Your inquiry has been received. Our team from the Nachane office will review your requirements and reach out to you at {formData.phoneNumber}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-arch-charcoal text-arch-ivory text-xs uppercase tracking-widest rounded-sm hover:bg-arch-bronze transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-arch-charcoal font-normal">
                      Project Enquiry Form
                    </h3>
                    <p className="text-xs text-arch-muted font-sans">
                      Fill in your details below and we will contact you to discuss timeline and site feasibility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal placeholder:text-arch-muted/50 focus:outline-none focus:border-arch-bronze"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. +91 98220 XXXXX"
                        className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal placeholder:text-arch-muted/50 focus:outline-none focus:border-arch-bronze"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal placeholder:text-arch-muted/50 focus:outline-none focus:border-arch-bronze"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                        Service Category
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze"
                      >
                        {ALL_SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                      Site / Plot Location in Ratnagiri
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Nachane, Kuwarbav, Hatkhamba, etc."
                      className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal placeholder:text-arch-muted/50 focus:outline-none focus:border-arch-bronze"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                      Project Notes / Requirement
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your proposed construction or property requirement..."
                      className="w-full px-4 py-2.5 bg-arch-ivory border border-arch-border rounded-sm text-sm text-arch-charcoal placeholder:text-arch-muted/50 focus:outline-none focus:border-arch-bronze resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-arch-charcoal hover:bg-arch-bronze text-arch-ivory text-xs uppercase tracking-widest font-medium transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? "Submitting..." : "Send Project Enquiry"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-arch-muted text-center font-sans">
                    Your contact information will only be used by Nirman Infrastructure to respond to your project request.
                  </p>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}
