import React, { useState } from "react"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { MilestonesSection } from "@/components/MilestonesSection"
import { AboutSection } from "@/components/AboutSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ArchitecturalPhilosophySection } from "@/components/ArchitecturalPhilosophySection"
import { ServicesSection } from "@/components/ServicesSection"
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
import { IntroSplashScreen } from "@/components/IntroSplashScreen"

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [introCompleted, setIntroCompleted] = useState(false)

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName)
    setConsultationOpen(true)
  }

  return (
    <SmoothScrollProvider>
      {/* Cinematic Intro Splash Screen */}
      <IntroSplashScreen onComplete={() => setIntroCompleted(true)} />

      {/* Main Website Container - Kept completely static without transforms so footer never shifts */}
      <div className="min-h-screen bg-[#F4F1EA] text-[#1C1C1A] selection:bg-[#A8793D] selection:text-white relative font-sans">
        
        {/* 1. Global Sticky Navbar with Continuous Top Marquee Bar */}
        <Navbar />

        <main id="main-content">
          {/* 2. Nyati Group Style Hero Section with Real Nirman Building & Staggered Animations */}
          <Hero onOpenConsultation={() => handleOpenConsultation()} />

          {/* 3. Nyati Group Style Milestones Counter Bar ("Numbers That Speak") */}
          <MilestonesSection />

          {/* 4. Nyati Group Style "Who We Are" Split Storytelling Section */}
          <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 5. Nyati Group Style "Featured Landmarks" Portfolio (Click opens project preview, NO form) */}
          <ProjectsSection />

          {/* 6. Nyati Group Style Architectural Philosophy Parallax Quote Showcase */}
          <ArchitecturalPhilosophySection />

          {/* 7. Comprehensive Business Services */}
          <ServicesSection onSelectService={handleOpenConsultation} />

          {/* 8. Why Choose Us: Foundational Principles */}
          <WhyChooseUsSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 9. 6-Stage Construction Workflow Timeline */}
          <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 10. Visual Portfolio Gallery */}
          <GallerySection />

          {/* 11. Actual Google Business 4.8 Rating & Verified Reviews */}
          <TestimonialsSection />

          {/* 12. Frequently Asked Questions */}
          <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 13. Office Contact Details & High-Contrast Enquiry Form */}
          <ContactSection />

          {/* 14. Google Maps Nachane Office Location */}
          <GoogleMapsSection />
        </main>

        {/* 15. Deep Charcoal Architectural Footer */}
        <Footer />

        {/* 16. Project Consultation Modal Dialog */}
        <ConsultationDialog
          open={consultationOpen}
          onOpenChange={setConsultationOpen}
          initialProjectType={selectedService}
        />

        {/* 17. Floating Back To Top Button */}
        <BackToTop />

      </div>
    </SmoothScrollProvider>
  )
}

export default App
