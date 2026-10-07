import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Phone, MessageSquare, Send } from "lucide-react"
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-arch-ivory border border-arch-border rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-arch-charcoal"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-arch-muted hover:text-arch-charcoal p-1 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-12 h-12 bg-arch-stone border border-arch-border rounded-full mx-auto flex items-center justify-center text-arch-bronze">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-arch-charcoal font-normal">
                Consultation Request Received
              </h3>
              <p className="text-sm text-arch-muted font-sans max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our engineering and planning team will contact you shortly on {formData.phone} to discuss your requirements.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-arch-charcoal hover:bg-arch-bronze text-arch-ivory text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-arch-bronze">
                  Nirman Infrastructure Ratnagiri
                </span>
                <h3 className="font-serif text-2xl text-arch-charcoal font-normal">
                  Schedule Project Consultation
                </h3>
                <p className="text-xs text-arch-muted font-sans">
                  Direct engagement with our engineering and construction team at our Nachane office.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Shinde"
                    className="w-full px-3.5 py-2 bg-white border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98220 XXXXX"
                    className="w-full px-3.5 py-2 bg-white border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                    Service Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze"
                  >
                    {ALL_SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                    Plot / Site Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Nachane, Ratnagiri"
                    className="w-full px-3.5 py-2 bg-white border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details regarding plot area, proposed built-up floors, or key questions..."
                  className="w-full px-3.5 py-2 bg-white border border-arch-border rounded-sm text-sm text-arch-charcoal focus:outline-none focus:border-arch-bronze resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex-1 py-3 bg-arch-charcoal hover:bg-arch-bronze text-arch-ivory text-xs uppercase tracking-widest font-medium transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Scheduling..." : "Request Consultation"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-4 py-3 border border-arch-border hover:border-arch-bronze text-arch-charcoal text-xs font-medium rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-arch-bronze" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
