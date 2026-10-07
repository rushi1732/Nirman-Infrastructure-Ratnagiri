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
    <div className="border border-slate-800 bg-slate-900/60 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
      <button
        type="button"
        id={`faq-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={onToggle}
        className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          {category && (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40 w-fit">
              {category}
            </span>
          )}
          <span className="text-base sm:text-lg font-medium text-slate-100">
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
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
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
