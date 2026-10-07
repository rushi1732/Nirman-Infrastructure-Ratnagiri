import React, { useState } from "react"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { GallerySection } from "@/components/GallerySection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { ContactSection } from "@/components/ContactSection"
import { GoogleMapsSection } from "@/components/GoogleMapsSection"
import { Footer } from "@/components/Footer"
import { ConsultationDialog } from "@/components/ConsultationDialog"
import { BackToTop } from "@/components/BackToTop"

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName)
    setConsultationOpen(true)
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#F4F1EA] text-[#1C1C1A] selection:bg-[#A8793D] selection:text-white relative font-sans">
        
        {/* 1. Global Sticky Navbar with Continuous Top Marquee Bar */}
        <Navbar />

        <main id="main-content">
          {/* 2. Hero Section with Real Nirman Building Background Image */}
          <Hero />

          {/* 3. About Section (Brand Identity & Principles) */}
          <AboutSection />

          {/* 4. Comprehensive Business Services */}
          <ServicesSection onSelectService={handleOpenConsultation} />

          {/* 5. Architectural Portfolio & Real Nirman Projects (Click opens project preview, NO form) */}
          <ProjectsSection />

          {/* 6. Why Choose Us: Foundational Principles */}
          <WhyChooseUsSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 7. 6-Stage Construction Workflow Timeline */}
          <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 8. Visual Portfolio Gallery */}
          <GallerySection />

          {/* 9. Actual Google Business 4.8 Rating & Verified Reviews */}
          <TestimonialsSection />

          {/* 10. Frequently Asked Questions */}
          <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 11. Office Contact Details & High-Contrast Enquiry Form */}
          <ContactSection />

          {/* 12. Google Maps Nachane Office Location */}
          <GoogleMapsSection />
        </main>

        {/* 13. Deep Charcoal Architectural Footer */}
        <Footer />

        {/* 14. Project Consultation Modal Dialog */}
        <ConsultationDialog
          open={consultationOpen}
          onOpenChange={setConsultationOpen}
          initialProjectType={selectedService}
        />

        {/* 15. Floating Back To Top Button */}
        <BackToTop />

      </div>
    </SmoothScrollProvider>
  )
}

export default App
