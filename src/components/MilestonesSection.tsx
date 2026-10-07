import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Building, Users, Clock, ShieldCheck, MapPin } from "lucide-react"

interface MilestoneItem {
  icon: React.ReactNode
  targetValue: number
  suffix: string
  label: string
  description: string
}

const MILESTONES: MilestoneItem[] = [
  {
    icon: <Clock className="w-5 h-5 text-[#E5A855]" />,
    targetValue: 15,
    suffix: "+",
    label: "Years of Heritage",
    description: "Continuous civil construction and development excellence across Ratnagiri."
  },
  {
    icon: <Building className="w-5 h-5 text-[#E5A855]" />,
    targetValue: 50,
    suffix: "+",
    label: "Landmark Projects",
    description: "Residential towers, commercial complexes, and bespoke bungalow developments."
  },
  {
    icon: <Award className="w-5 h-5 text-[#E5A855]" />,
    targetValue: 500000,
    suffix: "+ Sq.Ft",
    label: "Area Developed",
    description: "Premium built-up area engineered with coastal climate resilience."
  },
  {
    icon: <Users className="w-5 h-5 text-[#E5A855]" />,
    targetValue: 500,
    suffix: "+",
    label: "Happy Families",
    description: "Homeowners and business owners thriving in our built properties."
  }
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000 // 2 seconds

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, target])

  const formatNumber = (num: number) => {
    if (num >= 100000) {
      return num.toLocaleString("en-IN")
    }
    return num.toString()
  }

  return (
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
      {formatNumber(count)}
      <span className="text-[#E5A855] text-2xl sm:text-3xl lg:text-4xl ml-1 font-sans">{suffix}</span>
    </span>
  )
}

export const MilestonesSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#161614] border-y border-[#2E2E2A] overflow-hidden text-white">
      {/* Subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,168,85,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#E5A855]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E5A855] font-mono">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              Numbers That Speak Our Commitment
            </h2>
          </div>
          <p className="text-sm text-[#D8D2C5]/80 max-w-md font-sans leading-relaxed">
            Delivering beyond promises with disciplined RCC construction, verified municipal sanctions, and uncompromising structural integrity across Ratnagiri.
          </p>
        </div>

        {/* Milestones Grid with Nyati-Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative p-7 rounded-sm bg-[#1E1E1B] border border-[#2F2F2B] hover:border-[#E5A855]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A855]/40 to-transparent group-hover:via-[#E5A855] transition-all duration-500" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#262622] border border-[#3A3A34] flex items-center justify-center group-hover:scale-110 group-hover:border-[#E5A855]/60 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#8C887B]">
                    0{index + 1}
                  </span>
                </div>

                <div className="pt-2">
                  <AnimatedCounter target={item.targetValue} suffix={item.suffix} />
                </div>

                <h3 className="text-base font-serif font-medium text-white group-hover:text-[#E5A855] transition-colors">
                  {item.label}
                </h3>

                <p className="text-xs text-[#A9A499] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-6 pt-4 border-t border-[#2A2A26] flex items-center justify-between text-[11px] text-[#8C887B] font-mono">
                <span className="flex items-center gap-1.5 text-[#E5A855]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </span>
                <span className="text-[#8C887B]">Ratnagiri</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
