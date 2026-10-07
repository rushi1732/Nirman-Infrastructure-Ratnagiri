import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, MapPin, X, Check, Building, Sparkles } from "lucide-react"
import { PROJECTS_DATA, type Project } from "@/data/nirmanData"

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#141412] text-[#F4F1EA] relative overflow-hidden">
      
      {/* Luxury subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A8793D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Gold Line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#E5A855] font-mono">
            <span className="w-6 h-[1.5px] bg-[#E5A855]" />
            <span>Featured Landmarks</span>
          </div>
          <div className="arch-line-dark" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight">
              Architectural Landmarks & Built Work
            </h2>
            <p className="text-sm sm:text-base text-[#D8D2C5]/80 font-sans leading-relaxed">
              Curated residential developments, private bungalows, and commercial spaces crafted across Ratnagiri with structural brilliance.
            </p>
          </div>
          <div className="text-xs font-mono text-[#E5A855] uppercase tracking-wider self-start md:self-auto flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Click any project to view full specifications</span>
          </div>
        </div>

        {/* Projects Grid Display (No filter boxes, purely clean luxury cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-[#1C1C19] rounded-lg overflow-hidden border border-[#2D2D29] hover:border-[#E5A855]/70 transition-all duration-500 shadow-xl flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Large Architectural Photography with Zoom Animation */}
                <div className="relative overflow-hidden aspect-[16/11] bg-[#141412]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.95]"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C19] via-transparent to-black/30 pointer-events-none" />

                  {/* Status Overlay Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/20">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-sm bg-[#A8793D] text-[10px] font-mono uppercase tracking-widest text-white font-bold shadow-md">
                      {project.status}
                    </span>
                  </div>

                  {/* Area Tag */}
                  <div className="absolute bottom-3 right-4">
                    <span className="px-2.5 py-1 rounded-sm bg-black/75 backdrop-blur-md text-[11px] font-mono text-[#E5A855] border border-[#E5A855]/30">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Case Study Metadata */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5A855] flex items-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#E5A855] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="w-8 h-8 rounded-full bg-[#262622] flex items-center justify-center border border-[#3A3A34] group-hover:bg-[#E5A855] group-hover:border-[#E5A855] transition-all">
                      <ArrowUpRight className="w-4 h-4 text-[#D8D2C5] group-hover:text-black transition-colors" />
                    </div>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8D2C5]/75 font-sans leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Scope Highlights & Action */}
              <div className="px-6 pb-6 pt-3 border-t border-[#2A2A26] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.features.slice(0, 2).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-[#262622] text-[#D8D2C5] border border-[#3A3A34]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5A855] group-hover:underline font-semibold">
                  Details →
                </span>
              </div>
            </motion.article>
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
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#1C1C1A] hover:bg-[#A8793D] hover:text-white border-2 border-[#D8D2C5] flex items-center justify-center transition-all cursor-pointer shadow-xl z-10"
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

                  <span className="text-xs font-mono font-bold text-[#1C1C1A] px-3.5 py-1.5 bg-[#F4F1EA] border border-[#D8D2C5] rounded self-start sm:self-auto">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1C1C1A] font-medium bg-[#FBF9F5] p-2.5 rounded border border-[#E8E3D9]">
                        <Check className="w-4 h-4 text-[#A8793D] flex-shrink-0" />
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
                    className="px-6 py-2.5 rounded bg-[#1C1C1A] hover:bg-[#A8793D] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
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
