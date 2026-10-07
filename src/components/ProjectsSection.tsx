import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import { PROJECTS_DATA, type Project } from "@/data/nirmanData"

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filterOptions = ["All", "Residential", "Commercial", "Turnkey", "Completed", "Ongoing"]

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
              A curated selection of residential developments, commercial spaces, and property construction projects in Ratnagiri.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#A8793D] text-white"
                    : "bg-[#20211F] text-[#D8D2C5] hover:text-white border border-[#31312E]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case-Study Architectural Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="space-y-4 group cursor-pointer"
                onClick={() => onInquireProject(project.title)}
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

                {/* Case Study Metadata: Name, Category, Location, Status */}
                <div className="space-y-2 pt-1 border-t border-[#31312E]">
                  <div className="flex items-center justify-between text-xs text-[#A8793D] font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span>0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#A8793D] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A8793D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-xs text-[#D8D2C5] line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Note */}
        <div className="mt-20 pt-8 border-t border-[#31312E] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#D8D2C5]">
          <span>* Architectural sample representations. Site plans and detailed drawings available upon discussion.</span>
          <button
            type="button"
            onClick={() => onInquireProject("General Portfolio Inquiry")}
            className="text-xs uppercase tracking-wider text-[#A8793D] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Inquire About Our Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
