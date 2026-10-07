import React, { useState, Suspense, lazy } from "react"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { MilestonesSection } from "@/components/MilestonesSection"
import { AboutSection } from "@/components/AboutSection"
import { ArchitecturalPhilosophySection } from "@/components/ArchitecturalPhilosophySection"
import { ServicesSection } from "@/components/ServicesSection"
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { IntroSplashScreen } from "@/components/IntroSplashScreen"

// Lazy-loaded heavy below-the-fold sections
const ProjectsSection = lazy(() => import("@/components/ProjectsSection").then(m => ({ default: m.ProjectsSection })))
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })))
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })))
const FaqSection = lazy(() => import("@/components/FaqSection").then(m => ({ default: m.FaqSection })))
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })))
const GoogleMapsSection = lazy(() => import("@/components/GoogleMapsSection").then(m => ({ default: m.GoogleMapsSection })))
const ConsultationDialog = lazy(() => import("@/components/ConsultationDialog").then(m => ({ default: m.ConsultationDialog })))

const SectionFallback: React.FC = () => (
  <div className="w-full py-16 flex items-center justify-center min-h-[300px]">
    <div className="w-8 h-8 rounded-full border-2 border-[#A8793D]/30 border-t-[#A8793D] animate-spin" />
  </div>
)

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [introCompleted, setIntroCompleted] = useState(false)

  const handleIntroComplete = React.useCallback(() => {
    setIntroCompleted(true)
  }, [])

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName)
    setConsultationOpen(true)
  }

  return (
    <SmoothScrollProvider>
      {/* Cinematic Intro Splash Screen */}
      {!introCompleted && (
        <IntroSplashScreen onComplete={handleIntroComplete} />
      )}

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

          {/* 5. Nyati Group Style "Featured Landmarks" Portfolio (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>

          {/* 6. Nyati Group Style Architectural Philosophy Parallax Quote Showcase */}
          <ArchitecturalPhilosophySection />

          {/* 7. Comprehensive Business Services */}
          <ServicesSection onSelectService={handleOpenConsultation} />

          {/* 9. Why Choose Us: Foundational Principles */}
          <WhyChooseUsSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 10. 6-Stage Construction Workflow Timeline */}
          <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

          {/* 11. Visual Portfolio Gallery (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <GallerySection />
          </Suspense>

          {/* 12. Actual Google Business 4.8 Rating & Verified Reviews (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>

          {/* 13. Frequently Asked Questions (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <FaqSection onOpenConsultation={() => handleOpenConsultation()} />
          </Suspense>

          {/* 14. Office Contact Details & High-Contrast Enquiry Form (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>

          {/* 15. Google Maps Nachane Office Location (Lazy Loaded) */}
          <Suspense fallback={<SectionFallback />}>
            <GoogleMapsSection />
          </Suspense>
        </main>

        {/* 16. Deep Charcoal Architectural Footer */}
        <Footer />

        {/* 17. Project Consultation Modal Dialog (Lazy Loaded) */}
        <Suspense fallback={null}>
          {consultationOpen && (
            <ConsultationDialog
              open={consultationOpen}
              onOpenChange={setConsultationOpen}
              initialProjectType={selectedService}
            />
          )}
        </Suspense>

        {/* 18. Floating Back To Top Button */}
        <BackToTop />

      </div>
    </SmoothScrollProvider>
  )
}

export default App
