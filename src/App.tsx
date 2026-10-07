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
      <div className="min-h-screen bg-arch-ivory text-arch-charcoal selection:bg-arch-bronze selection:text-white relative font-sans">
        
        {/* 1. Global Sticky Architectural Navbar with Official Logo */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        <main id="main-content">
          {/* 2. Hero Section: Full-bleed Architectural Photography */}
          <Hero onOpenConsultation={() => handleOpenConsultation()} />

          {/* 3. About / Brand Story & Perspective */}
          <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 4. Comprehensive Services: 4 Featured + 8 Additional List */}
          <ServicesSection onSelectService={handleOpenConsultation} />

          {/* 5. Architectural Portfolio & Case Studies */}
          <ProjectsSection onInquireProject={(title) => handleOpenConsultation(`Project: ${title}`)} />

          {/* 6. Abstract Physical Massing 3D Model (Three.js / Drei) */}
          <ThreeArchitecturalCanvas onOpenConsultation={() => handleOpenConsultation("Custom Architectural Elevation")} />

          {/* 7. Why Choose Us: Foundational Principles */}
          <WhyChooseUsSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 8. 6-Stage Construction Workflow */}
          <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 9. Lifecycle Storytelling Section */}
          <GsapStorytellingSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 10. Preliminary Cost & Timeline Estimator */}
          <CostEstimatorSection onOpenConsultationWithData={handleOpenWithEstimatorData} />

          {/* 11. Visual Portfolio Gallery with Modal Lightbox */}
          <GallerySection />

          {/* 12. Editorial Client Testimonials & Google Business Attribution */}
          <TestimonialsSection />

          {/* 13. Frequently Asked Questions */}
          <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 14. Full-bleed Closing Lead CTA */}
          <LeadCtaSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 15. Office Contact Details & Project Enquiry Form */}
          <ContactSection />

          {/* 16. Google Maps Nachane Office Location */}
          <GoogleMapsSection />
        </main>

        {/* 17. Deep Charcoal Architectural Footer */}
        <Footer />

        {/* 18. Project Consultation Modal Dialog */}
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
