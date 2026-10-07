import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, ArrowUpRight } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface NavbarProps {
  onOpenConsultation: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Massing Model", href: "#model-3d" },
    { label: "Process", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F1EA]/95 text-[#252421] border-b border-[#D8D2C5] shadow-sm backdrop-blur-md py-3.5"
            : "bg-gradient-to-b from-[#1C1C1A]/80 via-[#1C1C1A]/40 to-transparent text-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3.5 focus:outline-none"
              aria-label="Nirman Infrastructure Ratnagiri"
            >
              <div className="bg-white rounded p-1 shadow-sm border border-slate-200 flex items-center justify-center">
                <img
                  src="/images/nirman-logo.png"
                  alt="Nirman Infrastructure Logo"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                  isScrolled ? "text-[#252421]" : "text-white"
                }`}>
                  Nirman Infrastructure
                </span>
                <span className={`text-[10px] tracking-wider transition-colors ${
                  isScrolled ? "text-[#716D65]" : "text-slate-300"
                }`}>
                  Ratnagiri, Maharashtra
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#A8793D] ${
                    isScrolled ? "text-[#252421]" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs tracking-wider transition-colors hover:text-[#A8793D] ${
                  isScrolled ? "text-[#716D65]" : "text-slate-300"
                }`}
                title="Call Nirman Infrastructure"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8793D]" />
                <span className="font-sans font-medium">{COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-4 py-2.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1C1A] hover:bg-[#A8793D] border border-[#1C1C1A] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded transition-colors ${
                  isScrolled ? "text-[#252421] hover:bg-[#E8E3D9]" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[66px] z-40 bg-[#F4F1EA] border-b border-[#D8D2C5] shadow-xl lg:hidden p-6 space-y-5"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium text-[#252421] hover:text-[#A8793D] py-1 border-b border-[#E8E3D9]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 space-y-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded text-xs uppercase tracking-wider font-semibold text-[#252421] bg-[#E8E3D9] hover:bg-[#D8D2C5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A8793D]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenConsultation()
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1C1A] hover:bg-[#A8793D] transition-colors cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
