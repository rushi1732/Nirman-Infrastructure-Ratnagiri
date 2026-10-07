import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  id: string
  title: string
  category?: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  category,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-arch-border bg-arch-ivory rounded-sm overflow-hidden transition-colors hover:border-arch-bronze/40">
      <button
        type="button"
        id={`faq-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={onToggle}
        className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          {category && (
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-arch-stone text-arch-charcoal border border-arch-border w-fit">
              {category}
            </span>
          )}
          <span className="text-base sm:text-lg font-serif font-medium text-arch-charcoal">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-arch-bronze"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${id}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-arch-border/50 text-arch-muted text-sm sm:text-base font-sans leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
