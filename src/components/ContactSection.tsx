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
  ExternalLink,
  Building2
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
    <section id="contact" className="py-24 sm:py-32 bg-[#F4F1EA] border-t border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8793D] font-bold font-mono">
              Contact & Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1C1C1A] tracking-tight">
              Start a Conversation About Your Site
            </h2>
          </div>
          <p className="text-[#716D65] text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Reach out directly to arrange a consultation at our Ratnagiri office or request a site visit for your upcoming construction project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office & Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="bg-white border-2 border-[#D8D2C5] p-8 rounded-lg shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F1EA] border border-[#D8D2C5] text-[#A8793D] text-[11px] font-mono uppercase tracking-widest font-semibold rounded-sm">
                <Building2 className="w-3.5 h-3.5" />
                <span>Headquarters • Ratnagiri</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#A8793D] flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-sans text-[#1C1C1A] leading-relaxed">
                    <strong className="block text-[#1C1C1A] text-base font-serif mb-1">{COMPANY_INFO.address.officeName}</strong>
                    <span>{COMPANY_INFO.address.landmark},</span><br />
                    <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.area},</span><br />
                    <span>Ratnagiri, Maharashtra {COMPANY_INFO.address.pincode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#E8E3D9]">
                  <Phone className="w-5 h-5 text-[#A8793D] flex-shrink-0" />
                  <div className="text-sm font-sans">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-[#1C1C1A] font-bold text-base hover:text-[#A8793D] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-[#716D65] block">Direct phone for project inquiries</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#E8E3D9]">
                  <Mail className="w-5 h-5 text-[#A8793D] flex-shrink-0" />
                  <div className="text-sm font-sans">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#1C1C1A] font-medium hover:text-[#A8793D] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-[#716D65] block">Official communication</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#E8E3D9]">
                  <Clock className="w-5 h-5 text-[#A8793D] flex-shrink-0" />
                  <div className="text-sm font-sans text-[#1C1C1A]">
                    <span className="font-bold">{COMPANY_INFO.hours.days}</span>
                    <span className="text-xs text-[#716D65] block">{COMPANY_INFO.hours.timings}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2C5] flex items-center justify-between">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-[#A8793D] font-bold hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nirman%20Infrastructure,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-[#1C1C1A] hover:text-[#A8793D] font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A8793D]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Local Context Notice */}
            <div className="p-6 bg-white border border-[#D8D2C5] rounded-lg">
              <h4 className="font-serif text-base font-semibold text-[#1C1C1A] mb-1">
                Local Presence in Ratnagiri
              </h4>
              <p className="text-xs text-[#716D65] font-sans leading-relaxed">
                Operating across Nachane, Kuwarbav, Shivaji Nagar, Mirjole, Zadgaon, and greater Ratnagiri district.
              </p>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#D8D2C5] p-8 sm:p-12 rounded-lg shadow-xl" style={{ backgroundColor: "#FFFFFF" }}>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#E8E3D9] border-2 border-[#A8793D] rounded-full mx-auto flex items-center justify-center text-[#A8793D]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#1C1C1A] font-semibold">
                    Thank You, {formData.fullName}
                  </h3>
                  <p className="text-sm text-[#716D65] max-w-md mx-auto font-sans leading-relaxed">
                    Your inquiry has been received. Our team from the Nachane office will review your requirements and reach out to you at <strong className="text-[#1C1C1A]">{formData.phoneNumber}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-[#1C1C1A] text-white text-xs uppercase tracking-widest font-bold rounded-md hover:bg-[#A8793D] transition-colors cursor-pointer shadow-md"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1.5 border-b border-[#E8E3D9] pb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-semibold tracking-tight">
                      Project Enquiry Form
                    </h3>
                    <p className="text-xs sm:text-sm text-[#716D65] font-sans">
                      Fill in your details below and we will contact you to discuss timeline and site feasibility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. +91 98220 XXXXX"
                        className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                        Service Category
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md outline-none transition-all shadow-sm cursor-pointer"
                      >
                        {ALL_SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title} className="text-[#1C1C1A] bg-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                      Site / Plot Location in Ratnagiri
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Nachane, Kuwarbav, Hatkhamba, etc."
                      className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                      Project Notes / Requirement
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your proposed construction or property requirement..."
                      className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs uppercase tracking-widest font-bold transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                  >
                    <span>{loading ? "Submitting..." : "Send Project Enquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-[#716D65] text-center font-sans">
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
