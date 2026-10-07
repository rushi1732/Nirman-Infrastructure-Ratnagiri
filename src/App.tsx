import React, { useState } from "react"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ThreeArchitecturalCanvas } from "@/components/ThreeArchitecturalCanvas"
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { GsapStorytellingSection } from "@/components/GsapStorytellingSection"
import { CostEstimatorSection } from "@/components/CostEstimatorSection"
import { StatsSection } from "@/components/StatsSection"
import { GallerySection } from "@/components/GallerySection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { LeadCtaSection } from "@/components/LeadCtaSection"
import { ContactSection } from "@/components/ContactSection"
import { GoogleMapsSection } from "@/components/GoogleMapsSection"
import { Footer } from "@/components/Footer"
import { ConsultationDialog } from "@/components/ConsultationDialog"

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [estimatorData, setEstimatorData] = useState<
    { area: number; type: string; estimatedCost: string } | undefined
  >(undefined)

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName)
    setEstimatorData(undefined)
    setConsultationOpen(true)
  }

  const handleOpenWithEstimatorData = (data: {
    area: number
    type: string
    estimatedCost: string
  }) => {
    setEstimatorData(data)
    setSelectedService(data.type)
    setConsultationOpen(true)
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#080d17] text-[#f8fafc] selection:bg-[#0284c7] selection:text-white relative font-sans">
        
        {/* Subtle Architectural Grid Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-20 -z-10 bg-blueprint-grid" />

        {/* 1. Global Sticky Navbar with Official Logo */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        <main id="main-content">
          {/* 2. Cinematic Architectural Hero Section */}
          <Hero onOpenConsultation={() => handleOpenConsultation()} />

          {/* 3. About / Brand Introduction */}
          <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 4. Comprehensive Services Capabilities */}
          <ServicesSection onSelectService={handleOpenConsultation} />

          {/* 5. Interactive Project Showcase */}
          <ProjectsSection onInquireProject={(title) => handleOpenConsultation(`Project: ${title}`)} />

          {/* 6. Interactive 3D Architectural Scene (React Three Fiber + Drei) */}
          <ThreeArchitecturalCanvas onOpenConsultation={() => handleOpenConsultation("Custom Architectural Elevation")} />

          {/* 7. Why Choose Us Section */}
          <WhyChooseUsSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 8. 6-Stage Construction Process Timeline */}
          <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 9. GSAP Scroll Storytelling Section */}
          <GsapStorytellingSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 10. Interactive Cost & Timeline Estimator */}
          <CostEstimatorSection onOpenConsultationWithData={handleOpenWithEstimatorData} />

          {/* 11. Statistics & Track Record Standards */}
          <StatsSection />

          {/* 12. Visual Quality Gallery */}
          <GallerySection />

          {/* 13. Testimonials & Google Business Reviews */}
          <TestimonialsSection />

          {/* 14. Real Estate & Construction FAQ */}
          <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 15. Closing Lead Generation CTA */}
          <LeadCtaSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 16. Contact Details & Project Enquiry Form */}
          <ContactSection />

          {/* 17. Google Maps Office Location */}
          <GoogleMapsSection />
        </main>

        {/* 18. Architectural Footer */}
        <Footer />

        {/* 19. Consultation & Project Enquiry Modal Dialog */}
        <ConsultationDialog
          open={consultationOpen}
          onOpenChange={setConsultationOpen}
          initialProjectType={selectedService}
          initialData={estimatorData}
        />

      </div>
    </SmoothScrollProvider>
  )
}

export default App
