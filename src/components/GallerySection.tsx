import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Image as ImageIcon, Maximize2, Tag, ArrowRight } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  category: "Elevations" | "Structural" | "Finishes" | "Commercial"
  image: string
  caption: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Contemporary Villa Facade",
    category: "Elevations",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Clean geometric cantilever balconies with coastal sunshade louvers."
  },
  {
    id: "gal-2",
    title: "RCC Framework & Heavy Reinforcement",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    caption: "High-grade concrete column casting with Fe-550D reinforcement rebars."
  },
  {
    id: "gal-3",
    title: "Turnkey Interior & Large Format Glazing",
    category: "Finishes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    caption: "Expansive cross-ventilation windows and seamless vitrified floor finishes."
  },
  {
    id: "gal-4",
    title: "Commercial Retail Hub Elevation",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    caption: "Multi-level glass curtain facade engineered for commercial high-traffic visibility."
  },
  {
    id: "gal-5",
    title: "Architectural Drafting & Engineering Layout",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    caption: "Detailed architectural drawings and municipality sanction blueprints."
  },
  {
    id: "gal-6",
    title: "Coastal Residential Bungalow",
    category: "Elevations",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    caption: "Custom private residence with laterite stone texture and terrace waterproofing."
  }
]

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = ["All", "Elevations", "Structural", "Finishes", "Commercial"]

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "All") return true
    return item.category === activeCategory
  })

  return (
    <section id="gallery" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Architectural Quality Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Visual Craftsmanship & Field Details
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Explore photographic perspectives of our structural concrete works, modern elevation designs, and finished interior spaces.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 h-72 cursor-pointer shadow-xl hover:border-slate-700"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 font-sans">
                    {item.caption}
                  </p>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="h-96 sm:h-[480px] bg-slate-950">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-slate-900 space-y-2 border-t border-slate-800">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h4 className="text-xl font-display font-bold text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-sm text-slate-300 font-sans">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
