import React, { useState, useMemo } from "react"
import { Calculator, ArrowRight, Check, Clock } from "lucide-react"

interface EstimatorProps {
  onOpenConsultationWithData: (data: { area: number; type: string; estimatedCost: string }) => void
}

export const CostEstimatorSection: React.FC<EstimatorProps> = ({ onOpenConsultationWithData }) => {
  const [area, setArea] = useState<number>(1800)
  const [specTier, setSpecTier] = useState<"standard" | "premium" | "turnkey" | "commercial">("turnkey")

  // Specification rates per sq.ft tailored for Ratnagiri construction planning
  const tierConfigs = {
    standard: {
      name: "Residential Building Construction",
      ratePerSqFt: 1850,
      timelineMonths: (a: number) => Math.ceil(a / 250) + 4,
      desc: "Structured building construction covering foundation, RCC framed skeleton, brick masonry, and essential finishing.",
      features: ["RCC Framed Structure", "Brick / Masonry Work", "Concealed Electrical Lines", "Terrace Weather Protection"]
    },
    premium: {
      name: "Custom Home & Villa Construction",
      ratePerSqFt: 2450,
      timelineMonths: (a: number) => Math.ceil(a / 220) + 5,
      desc: "Custom residential home construction with architectural elevation detailing, quality flooring, and coordinated joinery.",
      features: ["Custom Elevation Detailing", "Quality Window Glazing", "Sanitary & Bath Fittings", "Natural Stone Accents"]
    },
    turnkey: {
      name: "Complete Property Construction",
      ratePerSqFt: 2850,
      timelineMonths: (a: number) => Math.ceil(a / 200) + 6,
      desc: "Coordinated contracting from initial site planning through structural execution, utility installations, and final interior handover.",
      features: ["Coordinated Project Workflow", "Electrical & Plumbing Run", "Protective Exterior Finish", "Complete Interior Handover"]
    },
    commercial: {
      name: "Commercial Building Construction",
      ratePerSqFt: 2250,
      timelineMonths: (a: number) => Math.ceil(a / 350) + 6,
      desc: "Commercial building construction planned for offices, retail establishments, and business hubs with functional space planning.",
      features: ["Column Spans for Business", "Glass Frontage Detailing", "Commercial Load Slabs", "Planned Utility Runs"]
    }
  }

  const currentTier = tierConfigs[specTier]

  // Calculated estimates
  const calculatedCost = useMemo(() => {
    const rawCost = area * currentTier.ratePerSqFt
    const inLakhs = rawCost / 100000
    if (inLakhs >= 100) {
      return `₹${(inLakhs / 100).toFixed(2)} Cr`
    }
    return `₹${inLakhs.toFixed(2)} Lakh`
  }, [area, currentTier.ratePerSqFt])

  const calculatedTimeline = useMemo(() => {
    return `${currentTier.timelineMonths(area)} – ${currentTier.timelineMonths(area) + 3} Months`
  }, [area, currentTier])

  const handleRequestQuote = () => {
    onOpenConsultationWithData({
      area,
      type: currentTier.name,
      estimatedCost: calculatedCost,
    })
  }

  return (
    <section id="estimator" className="py-24 sm:py-32 bg-arch-stone/30 border-t border-arch-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-arch-bronze font-semibold">
              Project Feasibility
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-arch-charcoal tracking-tight">
              Preliminary Construction Estimator
            </h2>
          </div>
          <p className="text-arch-muted text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Calculate preliminary budgetary requirements and estimated project duration based on your intended built-up area and construction scope in Ratnagiri.
          </p>
        </div>

        {/* Main Estimator Box */}
        <div className="bg-arch-ivory border border-arch-border p-6 sm:p-10 lg:p-12 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Category Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-arch-muted block">
                  Select Construction Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(["turnkey", "premium", "standard", "commercial"] as const).map((tierKey) => {
                    const t = tierConfigs[tierKey]
                    const isSelected = specTier === tierKey

                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => setSpecTier(tierKey)}
                        className={`p-4 rounded-sm text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-arch-stone/50 border-arch-bronze shadow-sm"
                            : "bg-arch-ivory border-arch-border hover:border-arch-bronze/40 text-arch-muted"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-serif font-medium ${isSelected ? "text-arch-charcoal" : "text-arch-muted"}`}>
                            {t.name}
                          </span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-arch-bronze" />}
                        </div>
                        <span className="text-[11px] font-mono text-arch-bronze block">
                          ~₹{t.ratePerSqFt} / sq.ft indicative
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Built-up Area Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-arch-muted">
                    Proposed Built-up Area (Sq.Ft)
                  </label>
                  <span className="text-base font-serif font-medium text-arch-charcoal px-3 py-1 bg-arch-stone rounded-sm border border-arch-border">
                    {area.toLocaleString()} sq.ft
                  </span>
                </div>

                <input
                  type="range"
                  min="600"
                  max="10000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-1.5 bg-arch-stone rounded-sm appearance-none cursor-pointer accent-arch-bronze"
                />

                <div className="flex items-center justify-between text-[11px] text-arch-muted font-mono">
                  <span>600 sq.ft (Single Floor)</span>
                  <span>10,000+ sq.ft (Multi-Storey)</span>
                </div>
              </div>

              {/* 3. Included Scope Checklist */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-arch-muted block mb-3">
                  Scope Highlights Included
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentTier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-arch-charcoal font-sans">
                      <Check className="w-3.5 h-3.5 text-arch-bronze flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Result Card (5 Cols) */}
            <div className="lg:col-span-5 bg-arch-charcoal text-arch-ivory p-8 sm:p-10 rounded-sm border border-[#2E2D2A] space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-arch-bronze">
                  Indicative Project Estimate
                </span>
                <div className="text-3xl sm:text-4xl font-serif text-arch-ivory font-normal">
                  {calculatedCost}
                </div>
                <div className="text-xs text-arch-stone/60 font-sans">
                  Based on ~₹{currentTier.ratePerSqFt} / sq.ft for {area.toLocaleString()} sq.ft
                </div>
              </div>

              <div className="border-t border-[#2F2E2B] pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-arch-stone/80">
                  <Clock className="w-4 h-4 text-arch-bronze" />
                  <span>Estimated Schedule</span>
                </div>
                <span className="font-serif text-sm text-arch-ivory font-medium">
                  {calculatedTimeline}
                </span>
              </div>

              <div className="text-[11px] text-arch-stone/60 leading-relaxed font-sans border-t border-[#2F2E2B] pt-4">
                * Note: Indicative estimate for preliminary planning. Final pricing depends on structural drawings, soil profile, foundation depth, and specified interior materials.
              </div>

              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full py-3.5 px-6 bg-arch-bronze hover:bg-arch-bronze/90 text-arch-ivory text-xs font-medium tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Itemized Site Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
