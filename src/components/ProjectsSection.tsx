import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import { PROJECTS_DATA } from "@/data/nirmanData"

interface ProjectsSectionProps {
  onInquireProject?: (projectTitle: string) => void
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
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

        {/* Section Header (Filter boxes removed per user request) */}
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

        {/* Projects Grid Display (Direct list without filter buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <article
              key={project.id}
              className="space-y-4 group cursor-pointer"
              onClick={() => onInquireProject && onInquireProject(project.title)}
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
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8793D] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </span>
                  <span className="text-xs text-[#716D65] font-mono">
                    {project.area}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#A8793D] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
    </section>
  )
}
