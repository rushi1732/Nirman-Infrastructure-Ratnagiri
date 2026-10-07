import React, { useState } from "react"
import { HelpCircle, Phone, MessageSquare, ArrowRight } from "lucide-react"
import { FAQS_DATA, COMPANY_INFO } from "@/data/nirmanData"
import { AccordionItem } from "@/components/ui/accordion"

interface FaqSectionProps {
  onOpenConsultation: () => void
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Clear Answers for Your Construction Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            Everything you need to know about building, turnkey contracts, approvals, and climate-resilient engineering in Ratnagiri.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              id={`faq-${index}`}
              title={faq.question}
              category={faq.category}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p className="font-sans leading-relaxed text-slate-300 text-sm sm:text-base">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </div>

        {/* Have More Questions Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-display font-bold text-white">
              Have a specific architectural query?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Speak directly with our senior site engineers at Nirman Infrastructure Ratnagiri.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Us</span>
            </a>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Get Free Advice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
