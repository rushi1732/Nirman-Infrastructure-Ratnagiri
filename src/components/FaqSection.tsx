import React, { useState } from "react"
import { Phone, ArrowRight } from "lucide-react"
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
    <section id="faq" className="py-24 sm:py-32 bg-arch-stone/20 border-t border-arch-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
            Common Inquiries
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-arch-muted leading-relaxed font-sans max-w-2xl">
            Clear insights into construction workflows, site planning, regulatory approvals, and building practices in Ratnagiri.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              id={`faq-${index}`}
              title={faq.question}
              category={faq.category}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p className="font-sans leading-relaxed text-arch-muted text-sm sm:text-base">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </div>

        {/* Have More Questions Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-arch-ivory border border-arch-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-serif font-medium text-arch-charcoal">
              Have a specific question about your plot or property?
            </h4>
            <p className="text-xs text-arch-muted font-sans">
              Our team is available at our Nachane office or via direct phone consultation.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-arch-stone border border-arch-border hover:border-arch-bronze text-arch-charcoal text-xs font-sans tracking-wide rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-arch-bronze" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-arch-charcoal hover:bg-arch-bronze text-arch-ivory text-xs font-sans tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
            >
              <span>Ask Us Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
