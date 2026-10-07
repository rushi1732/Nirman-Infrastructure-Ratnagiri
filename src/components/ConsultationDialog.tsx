import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Phone, MessageSquare, Send, Building2 } from "lucide-react"
import { COMPANY_INFO, ALL_SERVICES_LIST } from "@/data/nirmanData"

interface ConsultationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialProjectType?: string
  initialData?: { area: number; type: string; estimatedCost: string }
}

export const ConsultationDialog: React.FC<ConsultationDialogProps> = ({
  open,
  onOpenChange,
  initialProjectType,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: initialProjectType || "Building Construction Services",
    location: "Ratnagiri",
    notes: "",
  })

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }))
    }
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.type,
        notes: `Estimated Area: ${initialData.area} sq.ft | Preliminary Budget: ${initialData.estimatedCost}`,
      }))
    }
  }, [initialProjectType, initialData])

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const handleClose = () => {
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="bg-white border-2 border-[#D8D2C5] rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-[#1C1C1A] my-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Prominent High-Contrast Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F4F1EA] hover:bg-[#E8E3D9] text-[#1C1C1A] border border-[#D8D2C5] flex items-center justify-center transition-colors cursor-pointer shadow-sm z-10"
        >
          <X className="w-5 h-5 text-[#1C1C1A]" />
        </button>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#E8E3D9] border-2 border-[#A8793D] rounded-full mx-auto flex items-center justify-center text-[#A8793D]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-semibold">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#716D65] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1C1C1A]">{formData.name}</strong>. Our engineering and planning team will contact you shortly on <strong className="text-[#1C1C1A]">{formData.phone}</strong> to discuss your project requirements.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 px-8 py-3 bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs uppercase tracking-widest font-semibold rounded-md transition-colors cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Header */}
              <div className="space-y-1.5 pr-10 border-b border-[#E8E3D9] pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F4F1EA] border border-[#D8D2C5] text-[#A8793D] text-[11px] font-mono uppercase tracking-widest font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Nirman Infrastructure Ratnagiri</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-semibold tracking-tight">
                  Schedule Project Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#716D65] font-sans">
                  Direct engagement with our engineering team at our Nachane office or site visit in Ratnagiri.
                </p>
              </div>

              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Shinde"
                    className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98220 XXXXX"
                    className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Service Scope & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                    Service Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md outline-none transition-all shadow-sm cursor-pointer"
                  >
                    {ALL_SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title} className="text-[#1C1C1A] bg-white">
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                    Site / Plot Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Nachane, Kuwarbav, Ratnagiri"
                    className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 3: Notes & Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1C1A] block">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details regarding plot area, proposed built-up floors, or key questions..."
                  className="w-full px-4 py-3 bg-[#FBF9F5] border-2 border-[#D8D2C5] focus:border-[#A8793D] focus:bg-white text-[#1C1C1A] font-medium text-sm rounded-md placeholder-[#A19D94] outline-none transition-all shadow-sm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex-1 py-3.5 bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs uppercase tracking-widest font-bold transition-all rounded-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Scheduling..." : "Request Consultation"}</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-5 py-3.5 border-2 border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white text-[#1C1C1A] text-xs uppercase tracking-wider font-bold rounded-md flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#A8793D]" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nirman%20Infrastructure,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#716D65] hover:text-[#A8793D] font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A8793D]" />
                  <span>Prefer WhatsApp? Chat directly with our team</span>
                </a>
              </div>

            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
