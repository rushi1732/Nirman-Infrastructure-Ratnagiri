import React, { useState, useMemo } from "react"
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Clock, IndianRupee, Sparkles } from "lucide-react"

interface EstimatorProps {
  onOpenConsultationWithData: (data: { area: number; type: string; estimatedCost: string }) => void
}

export const CostEstimatorSection: React.FC<EstimatorProps> = ({ onOpenConsultationWithData }) => {
  const [area, setArea] = useState<number>(1800)
  const [specTier, setSpecTier] = useState<"standard" | "premium" | "turnkey" | "commercial">("turnkey")

  // Specification rates per sq.ft tailored for Ratnagiri construction
  const tierConfigs = {
    standard: {
      name: "Standard Residential RCC",
      ratePerSqFt: 1850,
      timelineMonths: (a: number) => Math.ceil(a / 250) + 4,
      desc: "Robust RCC framed structure, standard vitrified flooring, exterior weather-coat, and certified Fe-550D reinforcement.",
      features: ["Grade Fe-550D Steel", "Red Brick / AAC Blockwork", "Concealed Copper Wiring", "Terrace Waterproofing"]
    },
    premium: {
      name: "Premium Architectural Villa",
      ratePerSqFt: 2450,
      timelineMonths: (a: number) => Math.ceil(a / 220) + 5,
      desc: "Architectural elevation treatments, laterite stone accents, premium vitrified tiles, UPVC noise-reduction windows, and dual-coat polymer weather barrier.",
      features: ["Architectural Elevation", "UPVC Sound-Dampening Glazing", "High-Grade Sanityware", "Laterite Stone Cladding Accents"]
    },
    turnkey: {
      name: "Turnkey Complete (Ready-to-Move)",
      ratePerSqFt: 2850,
      timelineMonths: (a: number) => Math.ceil(a / 200) + 6,
      desc: "All-inclusive contract from foundation excavation to modular kitchen, premium sanitary fixtures, painting, and interior joinery handover.",
      features: ["Single Window Handover", "Complete Electrical & Plumbing", "Monsoon Barrier Guarantee", "Full Interior Paint & Finishes"]
    },
    commercial: {
      name: "Commercial Building / Retail Complex",
      ratePerSqFt: 2250,
      timelineMonths: (a: number) => Math.ceil(a / 350) + 6,
      desc: "High-load capacity slabs, column-free showroom spans, modern glass frontage, fire sprinkler conduit provision, and heavy duty lobby finishes.",
      features: ["Column-Free Spans", "Toughened Glass Facade", "Heavy-Load RCC Slabs", "Underground Utility Trenches"]
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
    return `${currentTier.timelineMonths(area)} - ${currentTier.timelineMonths(area) + 3} Months`
  }, [area, currentTier])

  const handleRequestQuote = () => {
    onOpenConsultationWithData({
      area,
      type: currentTier.name,
      estimatedCost: calculatedCost,
    })
  }

  return (
    <section id="estimator" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost & Timeline Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Estimate Your Construction in Ratnagiri
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Calculate preliminary budgetary requirements and estimated project duration based on your intended built-up area and specification grade.
          </p>
        </div>

        {/* Main Estimator Box */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Specification Tier Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Select Construction Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(["turnkey", "premium", "standard", "commercial"] as const).map((tierKey) => {
                    const t = tierConfigs[tierKey]
                    const isSelected = specTier === tierKey

                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => setSpecTier(tierKey)}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-slate-800 border-sky-500 shadow-md shadow-sky-950/40"
                            : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-display font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                            {t.name}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                        </div>
                        <span className="text-[11px] font-mono text-sky-400 block">
                          ~₹{t.ratePerSqFt} / sq.ft
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Built-up Area Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Proposed Built-up Area (Sq.Ft)
                  </label>
                  <span className="text-lg font-mono font-bold text-sky-400 px-3 py-1 rounded-lg bg-sky-950 border border-sky-800/60">
                    {area.toLocaleString()} sq.ft
                  </span>
                </div>

                <input
                  type="range"
                  min="600"
                  max="10000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-500 border border-slate-800"
                />

                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>600 sq.ft (Bungalow)</span>
                  <span>3,000 sq.ft</span>
                  <span>6,000 sq.ft</span>
                  <span>10,000+ sq.ft (Commercial)</span>
                </div>
              </div>

              {/* Tier Description & Features */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {currentTier.desc}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  {currentTier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Display (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-sky-900/50 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Preliminary Cost Projection
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white flex items-center gap-1 text-sky-400">
                    {calculatedCost}
                  </div>
                  <span className="text-[11px] font-sans text-slate-400 block">
                    Estimated cost based on {area.toLocaleString()} sq.ft built-up area
                  </span>
                </div>

                {/* Timeline Box */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Estimated Duration
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {calculatedTimeline}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                    Includes Curing
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-400 font-sans">
                  <p>
                    * Note: This estimator provides indicative guidance. Actual costs depend on site soil profiles, contour excavation, and custom finishing choices.
                  </p>
                </div>

                {/* Lock In Quote CTA */}
                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Request Itemized BOQ For This Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
