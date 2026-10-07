import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO } from "@/data/nirmanData"

interface NavbarProps {
  onOpenConsultation?: () => void
}

export const Navbar: React.FC<NavbarProps> = () => {
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
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  const marqueeItems = [
    {
      icon: <MapPin className="w-3 h-3 text-[#A8793D] flex-shrink-0" />,
      text: "Office: Office No. 06 & 07, First Floor, Indradhanu, Behind CSM Stadium, SV Rd, Nachane, Ratnagiri",
    },
    {
      icon: <Clock className="w-3 h-3 text-[#A8793D] flex-shrink-0" />,
      text: "Office Timing: Open 10:00 AM – Close 7:00 PM (Monday to Saturday)",
    },
    {
      icon: <Phone className="w-3 h-3 text-[#A8793D] flex-shrink-0" />,
      text: "Direct Contact: +91 7447849574",
    },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP ANNOUNCEMENT TICKER (Continuous Slide Show Motion) */}
      <div className="bg-[#141413] text-[#EDEAE2] border-b border-[#2A2926] text-[11px] font-sans py-1.5 overflow-hidden select-none">
        <div className="flex items-center">
          
          {/* Continuous Infinite Marquee Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center gap-10">
            {/* First Set */}
            {marqueeItems.map((item, idx) => (
              <div key={`m1-${idx}`} className="inline-flex items-center gap-2 text-stone-300">
                {item.icon}
                <span className="tracking-wide font-medium">{item.text}</span>
                <span className="text-[#A8793D] font-mono mx-2">•</span>
              </div>
            ))}

            {/* Duplicate Set for Seamless Continuous Loop */}
            {marqueeItems.map((item, idx) => (
              <div key={`m2-${idx}`} className="inline-flex items-center gap-2 text-stone-300">
                {item.icon}
                <span className="tracking-wide font-medium">{item.text}</span>
                <span className="text-[#A8793D] font-mono mx-2">•</span>
              </div>
            ))}

            {/* Triplicate Set for Large Displays */}
            {marqueeItems.map((item, idx) => (
              <div key={`m3-${idx}`} className="inline-flex items-center gap-2 text-stone-300">
                {item.icon}
                <span className="tracking-wide font-medium">{item.text}</span>
                <span className="text-[#A8793D] font-mono mx-2">•</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER NAVBAR */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F1EA]/95 text-[#252421] border-b border-[#D8D2C5] shadow-sm backdrop-blur-md py-3"
            : "bg-gradient-to-b from-[#1C1C1A]/85 via-[#1C1C1A]/50 to-transparent text-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Logo */}
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
                  isScrolled ? "text-[#716D65]" : "text-stone-300"
                }`}>
                  Builders & Developers • Ratnagiri
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
                    isScrolled ? "text-[#252421]" : "text-stone-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Direct Call Action (Discuss Your Project removed per request) */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#A8793D] hover:bg-[#8F642F] transition-colors flex items-center gap-2 shadow-sm"
                title="Call Nirman Infrastructure"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 7447849574</span>
              </a>

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
            className="bg-[#F4F1EA] border-b border-[#D8D2C5] shadow-xl lg:hidden p-6 space-y-5"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest font-medium text-[#252421] hover:text-[#A8793D] py-1 border-b border-[#E8E3D9]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded bg-[#A8793D] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 7447849574</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
