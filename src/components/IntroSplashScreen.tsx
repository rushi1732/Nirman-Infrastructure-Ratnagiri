import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroSplashScreenProps {
  onComplete?: () => void
}

export const IntroSplashScreen: React.FC<IntroSplashScreenProps> = ({ onComplete }) => {
  // Step sequence:
  // 1 = initial logo appears centered (0s - 0.9s)
  // 2 = logo moves to left, big text reveals in center (0.9s - 3.2s)
  // 3 = exit animation reveals website (3.2s - 4.0s)
  const [step, setStep] = useState<1 | 2>(1)
  const [isExiting, setIsExiting] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const hasExitedRef = useRef(false)

  const triggerExit = React.useCallback(() => {
    if (hasExitedRef.current) return
    hasExitedRef.current = true
    setIsExiting(true)
    setTimeout(() => {
      document.body.style.overflow = ""
      setIsFinished(true)
      if (onCompleteRef.current) onCompleteRef.current()
    }, 850)
  }, [])

  useEffect(() => {
    // Lock scroll at top initially on initial page load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    // Phase 1 -> Phase 2: Logo moves to left and big text appears
    const timerStep2 = setTimeout(() => {
      setStep(2)
    }, 900)

    // Phase 2 -> Exit: Hold for ~3.2 seconds total, then animate open
    const timerExit = setTimeout(() => {
      triggerExit()
    }, 3300)

    return () => {
      document.body.style.overflow = originalOverflow
      clearTimeout(timerStep2)
      clearTimeout(timerExit)
    }
  }, [triggerExit])

  if (isFinished) return null

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="intro-overlay"
          initial={{ y: 0, opacity: 1 }}
          animate={
            isExiting
              ? {
                  y: "-100%",
                  opacity: 0.98,
                  transition: {
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1], // Architectural curtain wipe easing
                  },
                }
              : { y: 0, opacity: 1 }
          }
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
          style={{ willChange: "transform" }}
        >
          {/* Subtle luxury architectural background accents */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1C1C1A_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Top and Bottom subtle architectural guide borders */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#288bc8] to-[#3ba82e] opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#288bc8] via-[#3ba82e] to-transparent opacity-30" />

          {/* Quick Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            onClick={triggerExit}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#716D65] hover:text-[#1C1C1A] px-3.5 py-1.5 rounded-full border border-stone-200 hover:border-stone-400 bg-white/80 backdrop-blur-sm transition-all z-20 cursor-pointer shadow-xs"
          >
            Skip Intro →
          </motion.button>

          {/* Main Stage Lockup */}
          <div className="relative z-10 max-w-5xl w-full px-6 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-[300px]">
            
            {/* 1. Logo Element:
                Starts centered, then glides smoothly to the left when step === 2 */}
            <motion.div
              layout
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{
                scale: step === 1 ? 1.05 : 1,
                opacity: 1,
                y: 0,
                x: step === 1 ? 0 : 0, // In desktop flex row, layout prop smoothly moves it to the left side
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                layout: { duration: 0.85, ease: [0.25, 1, 0.5, 1] },
              }}
              className="flex items-center justify-center shrink-0"
            >
              <div className="relative p-2 sm:p-3">
                {/* Soft ambient logo glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#288bc8]/10 to-[#3ba82e]/10 blur-xl rounded-full transform scale-90" />
                
                <img
                  src="/images/nirman-logo.png"
                  alt="Nirman Infrastructure"
                  className="relative h-28 sm:h-36 md:h-44 lg:h-48 w-auto object-contain drop-shadow-sm filter contrast-[1.02]"
                />
              </div>
            </motion.div>

            {/* Vertical divider visible on desktop when text appears */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "130px", opacity: 0.3 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="hidden md:block w-[1.5px] bg-gradient-to-b from-[#288bc8] via-[#1C1C1A] to-[#3ba82e] self-center shrink-0"
                />
              )}
            </AnimatePresence>

            {/* 2. Big Central Text Element:
                Reveals when step === 2 with high impact typography */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col text-center md:text-left items-center md:items-start"
                >
                  {/* Subtle top badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#288bc8] inline-block animate-pulse" />
                    <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-[#716D65]">
                      Ratnagiri's Premier
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#3ba82e] inline-block" />
                  </motion.div>

                  {/* Main Company Name in Big Bold Letters */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1C1A] tracking-[-0.02em] leading-[1.08] font-sans">
                    NIRMAN
                    <span className="block text-[#1C1C1A] font-extrabold tracking-[-0.01em]">
                      INFRASTRUCTURE
                    </span>
                  </h1>

                  {/* Builders & Developers Subheading */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.55 }}
                    className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.22em] text-[#A8793D]">
                      BUILDERS AND DEVELOPERS
                    </span>
                    <span className="hidden sm:inline text-stone-300">•</span>
                    <span className="text-xs sm:text-sm font-medium tracking-[0.15em] text-[#716D65] uppercase">
                      Ratnagiri, Maharashtra
                    </span>
                  </motion.div>

                  {/* Signature accent underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.45, duration: 0.65, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="mt-4 sm:mt-5 h-[3px] w-36 sm:w-48 bg-gradient-to-r from-[#288bc8] via-[#3ba82e] to-[#A8793D] rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* 3. Bottom Architectural Progress Indicator (3 seconds timer indicator) */}
          <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#716D65]/70 font-semibold font-sans">
              Crafting Enduring Landmarks
            </span>
            <div className="w-44 sm:w-56 h-[2px] bg-stone-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#288bc8] via-[#3ba82e] to-[#A8793D]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default IntroSplashScreen
