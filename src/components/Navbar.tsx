import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageSquare, Menu, X, ArrowRight, MapPin, Building2, ChevronRight } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface NavbarProps {
  onOpenConsultation: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "3D Visual", href: "#model-3d" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Estimator", href: "#estimator" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090e1a]/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/40 py-3"
            : "bg-gradient-to-b from-[#080d17]/90 via-[#080d17]/50 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Main Brand Logo - Exact Nirman Infrastructure Identity */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
              aria-label="Nirman Infrastructure Ratnagiri - Return to Homepage"
            >
              <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-md border border-slate-200/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/images/nirman-logo.png"
                  alt="Nirman Infrastructure Ratnagiri Logo"
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-mono tracking-wider uppercase text-sky-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Ratnagiri, MH
                </span>
                <span className="text-[11px] text-slate-400 font-sans">
                  Builders & Infrastructure
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Call Link */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                title="Call Nirman Infrastructure"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hello Nirman Infrastructure, I would like to enquire about construction services in Ratnagiri."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/50 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Consultation Modal Trigger */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-4 py-2 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-md shadow-sky-900/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#0a101d]/98 border-b border-slate-800 backdrop-blur-2xl shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-5">
              
              {/* Brand Tag in Mobile Menu */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Nirman Infrastructure Ratnagiri
                  </span>
                </div>
                <span className="text-xs text-sky-400 font-medium">Nachane Office</span>
              </div>

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-900/70 border border-slate-800/80 hover:bg-slate-800 hover:text-sky-400 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-sky-950/40"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello Nirman Infrastructure, I would like to enquire about construction services in Ratnagiri."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenConsultation()
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>Book Free Consultation</span>
                </button>
              </div>

              {/* Office Address Snippet */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>
                  Indradhanu, Behind Chhatrapati Shivaji Maharaj Stadium, Nachane, Ratnagiri 415612
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
