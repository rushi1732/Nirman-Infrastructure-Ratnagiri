import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Building, 
  MapPin, 
  Maximize2, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  ExternalLink 
} from "lucide-react"
import { PROJECTS_DATA, type Project } from "@/data/nirmanData"

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filterOptions = [
    "All",
    "Residential",
    "Commercial",
    "Turnkey",
    "Ongoing",
    "Completed"
  ]

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Residential") return project.category === "Residential"
    if (activeFilter === "Commercial") return project.category === "Commercial"
    if (activeFilter === "Turnkey") return project.category === "Turnkey"
    if (activeFilter === "Ongoing") return project.status === "Ongoing"
    if (activeFilter === "Completed") return project.status === "Completed"
    return true
  })

  return (
    <section id="projects" className="py-24 bg-[#090e1a] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Notice on Editable Architectural Placeholders */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Architectural Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured Projects & Developments
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Explore our architectural execution standards across residential bungalows, commercial complexes, and turnkey site developments in the Ratnagiri region.
            </p>
          </div>

          {/* Transparent Notice */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-sm">
            <div className="flex items-center gap-1.5 text-sky-400 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editable Sample Portfolio</span>
            </div>
            <span>
              Curated representation of architectural types. Contact us to review verified site plans and ongoing inspections.
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-950/50"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase Container */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Status & Category Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-900/90 text-white border border-slate-700 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md flex items-center gap-1 border ${
                        project.status === "Completed"
                          ? "bg-emerald-950/80 text-emerald-300 border-emerald-700/60"
                          : "bg-sky-950/80 text-sky-300 border-sky-700/60"
                      }`}
                    >
                      {project.status === "Completed" ? (
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Clock className="w-3 h-3 text-sky-400" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Area Specification Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>View Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onInquireProject(project.title)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="rounded-xl overflow-hidden h-64 sm:h-72 border border-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-950 text-sky-300 border border-sky-800">
                    {selectedProject.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    {selectedProject.status}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-xs text-sky-400 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedProject.location} • {selectedProject.area}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineering & Architectural Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire CTA Button */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title
                    setSelectedProject(null)
                    onInquireProject(title)
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
