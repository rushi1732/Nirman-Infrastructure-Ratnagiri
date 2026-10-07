import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, X, ArrowUpRight } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  category: "Residential" | "Structural" | "Finishes" | "Commercial"
  image: string
  caption: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Contemporary Residential Facade",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Clean geometric cantilever balconies designed for natural ventilation and daylight."
  },
  {
    id: "gal-2",
    title: "RCC Framework Execution",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    caption: "Coordinated column casting and structural framing under regular on-site supervision."
  },
  {
    id: "gal-3",
    title: "Interior Spaces & Large Format Glazing",
    category: "Finishes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    caption: "Cross-ventilation window openings and coordinated floor finishes."
  },
  {
    id: "gal-4",
    title: "Commercial Building Frontage",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    caption: "Multi-level glass facade detailing engineered for retail and commercial visibility."
  },
  {
    id: "gal-5",
    title: "Architectural Drafting & Layout Planning",
    category: "Structural",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    caption: "Detailed architectural coordination drawings and structured site execution plans."
  },
  {
    id: "gal-6",
    title: "Coastal Residential Bungalow",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    caption: "Private home construction with regional masonry accents and terrace weather protection."
  }
]

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = ["All", "Residential", "Commercial", "Structural", "Finishes"]

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-arch-ivory border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Visual Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              On-Site Craft & Architectural Realization
            </h2>
          </div>
          
          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-sans tracking-wide rounded-sm transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-arch-charcoal text-arch-ivory"
                    : "bg-arch-stone/50 text-arch-muted hover:text-arch-charcoal border border-arch-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer bg-arch-stone/20 border border-arch-border rounded-sm overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-arch-stone">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="p-5 bg-arch-ivory border-t border-arch-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-arch-bronze font-mono">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-arch-muted group-hover:text-arch-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-serif text-base text-arch-charcoal font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-arch-muted font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-arch-charcoal border border-[#2E2D2A] rounded-sm max-w-4xl w-full overflow-hidden text-arch-ivory shadow-2xl"
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#2E2D2A]">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-arch-bronze uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-arch-ivory font-normal">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-arch-stone/80 font-sans">
                    {selectedImage.caption}
                  </p>
                </div>
                <div className="text-xs text-arch-stone/60 font-mono flex-shrink-0">
                  Nirman Infrastructure Ratnagiri
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
