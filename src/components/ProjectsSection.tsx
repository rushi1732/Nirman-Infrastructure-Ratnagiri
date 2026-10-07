import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, MapPin, X, Check } from "lucide-react"
import { PROJECTS_DATA, type Project } from "@/data/nirmanData"

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-28 bg-[#1C1C1A] text-[#F4F1EA] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Line */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A8793D] flex-shrink-0">
            Selected Architectural Portfolio
          </span>
          <div className="arch-line-dark" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
              Projects & Built Work
            </h2>
            <p className="text-sm sm:text-base text-[#D8D2C5] font-sans leading-relaxed">
              A curated selection of residential developments, commercial spaces, and property construction projects across Ratnagiri.
            </p>
          </div>
        </div>

        {/* Projects Grid Display (Clicking previews the project details, NO form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="space-y-4 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Large Architectural Photography */}
              <div className="relative rounded overflow-hidden h-72 sm:h-80 bg-[#20211F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Status Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#1C1C1A]/85 text-[10px] font-mono uppercase tracking-widest text-[#E8E3D9]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#A8793D]/90 text-[10px] font-mono uppercase tracking-widest text-white">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Case Study Metadata */}
              <div className="space-y-2 pt-2 border-t border-[#31312E]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8793D] flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-xs text-[#A19D94] font-mono">
                    {project.area}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#A8793D] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#A8793D]" />
                </h3>

                <p className="text-xs sm:text-sm text-[#D8D2C5]/80 font-sans leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#252421] text-[#E8E3D9] border border-[#31312E]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Pure Project Preview Lightbox (NO FORM) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: "#FFFFFF" }}
              className="bg-white border-2 border-[#D8D2C5] rounded-lg max-w-3xl w-full overflow-hidden text-[#1C1C1A] shadow-2xl relative my-auto max-h-[90vh] flex flex-col"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-stone-900 overflow-hidden flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Prominent High-Contrast Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project preview"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#1C1C1A] hover:bg-[#A8793D] hover:text-white border-2 border-[#D8D2C5] flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
                >
                  <X className="w-5 h-5 font-bold" />
                </button>

                {/* Status Badges */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-[#1C1C1A]/90 text-xs font-mono uppercase tracking-widest text-white">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#A8793D] text-xs font-mono uppercase tracking-widest text-white font-bold">
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* High Contrast Project Details (NO FORM) */}
              <div className="p-6 sm:p-8 bg-white border-t-2 border-[#E8E3D9] space-y-4 overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8E3D9] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#A8793D] uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{selectedProject.location}</span>
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-bold">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#1C1C1A] px-3 py-1.5 bg-[#F4F1EA] border border-[#D8D2C5] rounded self-start sm:self-auto">
                    {selectedProject.area}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#716D65] font-sans leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Scope & Features List */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1C1C1A] font-bold block mb-2">
                    Project Features & Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1C1C1A] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#A8793D] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E3D9] flex items-center justify-between">
                  <span className="text-xs text-[#716D65] font-mono">
                    Nirman Infrastructure Ratnagiri
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
