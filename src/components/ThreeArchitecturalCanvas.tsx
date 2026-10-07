import React, { useRef, useState, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import * as THREE from "three"
import { Compass, Sun, Moon, Layers, RotateCw, RefreshCw, Eye, Sparkles } from "lucide-react"

type ViewMode = "daylight" | "blueprint" | "dusk"

// 3D Geometric Architectural Tower & Structural Framework
function ArchitecturalTower3D({ mode }: { mode: ViewMode }) {
  const groupRef = useRef<THREE.Group>(null)

  // Gentle architectural rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12
    }
  })

  // Materials based on mode
  const concreteMat = useMemo(() => {
    if (mode === "blueprint") {
      return new THREE.MeshBasicMaterial({
        color: "#0284c7",
        wireframe: true,
      })
    }
    return new THREE.MeshStandardMaterial({
      color: mode === "dusk" ? "#1e293b" : "#e2e8f0",
      roughness: 0.6,
      metalness: 0.1,
    })
  }, [mode])

  const glassMat = useMemo(() => {
    if (mode === "blueprint") {
      return new THREE.MeshBasicMaterial({
        color: "#38bdf8",
        wireframe: true,
      })
    }
    return new THREE.MeshStandardMaterial({
      color: mode === "dusk" ? "#0284c7" : "#0284c7",
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: mode === "dusk" ? 0.75 : 0.65,
    })
  }, [mode])

  const warmInteriorMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: mode === "dusk" ? "#f59e0b" : "#ffffff",
      emissive: mode === "dusk" ? "#f59e0b" : "#0284c7",
      emissiveIntensity: mode === "dusk" ? 0.8 : 0.2,
      roughness: 0.3,
    })
  }, [mode])

  const columnSteelMat = useMemo(() => {
    if (mode === "blueprint") {
      return new THREE.MeshBasicMaterial({
        color: "#16a34a",
        wireframe: true,
      })
    }
    return new THREE.MeshStandardMaterial({
      color: mode === "dusk" ? "#334155" : "#475569",
      roughness: 0.4,
      metalness: 0.7,
    })
  }, [mode])

  const basePlinthMat = useMemo(() => {
    if (mode === "blueprint") {
      return new THREE.MeshBasicMaterial({
        color: "#1e3a8a",
        wireframe: true,
      })
    }
    return new THREE.MeshStandardMaterial({
      color: mode === "dusk" ? "#0f172a" : "#cbd5e1",
      roughness: 0.9,
    })
  }, [mode])

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* 1. Base Foundation Plinth */}
      <mesh position={[0, -0.2, 0]} material={basePlinthMat}>
        <boxGeometry args={[4.4, 0.4, 4.4]} />
      </mesh>

      {/* Stepped Landscape Terrace */}
      <mesh position={[0, 0.1, 0]} material={basePlinthMat}>
        <boxGeometry args={[3.6, 0.2, 3.6]} />
      </mesh>

      {/* 2. Ground Level Podium & Columns */}
      {/* 4 Corner Structural Columns */}
      {[
        [-1.4, 0.9, -1.4],
        [1.4, 0.9, -1.4],
        [-1.4, 0.9, 1.4],
        [1.4, 0.9, 1.4],
      ].map((pos, idx) => (
        <mesh key={`col-g-${idx}`} position={pos as [number, number, number]} material={columnSteelMat}>
          <cylinderGeometry args={[0.08, 0.08, 1.4, 12]} />
        </mesh>
      ))}

      {/* Ground Lobby Glass Chamber */}
      <mesh position={[0, 0.9, 0]} material={glassMat}>
        <boxGeometry args={[2.5, 1.4, 2.5]} />
      </mesh>

      {/* Lobby Interior Core */}
      <mesh position={[0, 0.9, 0]} material={warmInteriorMat}>
        <boxGeometry args={[1.2, 1.3, 1.2]} />
      </mesh>

      {/* 3. Level 1 Cantilevered Slab */}
      <mesh position={[0, 1.7, 0]} material={concreteMat}>
        <boxGeometry args={[3.4, 0.2, 3.4]} />
      </mesh>

      {/* Mid Level Cantilevered Wing */}
      <mesh position={[-0.4, 2.4, 0]} material={glassMat}>
        <boxGeometry args={[2.2, 1.2, 2.8]} />
      </mesh>

      {/* Balcony Overhang & Terrace Slab */}
      <mesh position={[0.6, 2.3, 0]} material={concreteMat}>
        <boxGeometry args={[1.6, 0.15, 2.6]} />
      </mesh>

      {/* 4. Upper Tier Structural Tower */}
      <mesh position={[0, 3.2, 0]} material={concreteMat}>
        <boxGeometry args={[2.6, 0.2, 2.6]} />
      </mesh>

      <mesh position={[0, 3.9, 0]} material={glassMat}>
        <boxGeometry args={[2.0, 1.2, 2.0]} />
      </mesh>

      {/* Upper Core */}
      <mesh position={[0, 3.9, 0]} material={warmInteriorMat}>
        <boxGeometry args={[0.9, 1.1, 0.9]} />
      </mesh>

      {/* 5. Roof Penthouse & Pergola Truss */}
      <mesh position={[0, 4.6, 0]} material={concreteMat}>
        <boxGeometry args={[2.2, 0.15, 2.2]} />
      </mesh>

      {/* Architectural Pergola Beams */}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
        <mesh key={`beam-${i}`} position={[x, 4.85, 0]} material={columnSteelMat}>
          <boxGeometry args={[0.06, 0.1, 2.0]} />
        </mesh>
      ))}

      {/* Spire / Architectural Finial */}
      <mesh position={[0, 5.2, 0]} material={columnSteelMat}>
        <cylinderGeometry args={[0.02, 0.05, 0.8, 8]} />
      </mesh>
    </group>
  )
}

// Graceful WebGL Error Boundary
class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(err: unknown) {
    console.warn("WebGL fallback initiated:", err)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export const ThreeArchitecturalCanvas: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  const [mode, setMode] = useState<ViewMode>("dusk")

  const modeConfig = {
    daylight: {
      ambient: 0.9,
      sunIntensity: 2.0,
      sunColor: "#ffffff",
      sunPos: [6, 10, 6] as [number, number, number],
      title: "Daylight Concrete & Structural Glazing",
      bgGrad: "from-slate-900 via-slate-950 to-[#080d17]",
    },
    blueprint: {
      ambient: 0.5,
      sunIntensity: 1.2,
      sunColor: "#0284c7",
      sunPos: [4, 8, 4] as [number, number, number],
      title: "Architectural CAD Blueprint Wireframe",
      bgGrad: "from-[#08152c] via-[#091b36] to-[#080d17]",
    },
    dusk: {
      ambient: 0.6,
      sunIntensity: 1.6,
      sunColor: "#f59e0b",
      sunPos: [5, 5, 5] as [number, number, number],
      title: "Dusk Illumination & Interior Warmth",
      bgGrad: "from-[#0d162b] via-[#0a1020] to-[#080d17]",
    },
  }

  const currentConfig = modeConfig[mode]

  return (
    <section id="model-3d" className="py-24 bg-[#080d17] relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive 3D Architectural Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Modern Geometric Architectural Form
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Interact with our 3D architectural study showcasing cantilevered floorplates, monolithic reinforced concrete, and climate-responsive glazing.
            </p>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <button
              type="button"
              onClick={() => setMode("blueprint")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === "blueprint"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Blueprint CAD</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("daylight")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === "daylight"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Daylight</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("dusk")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === "dusk"
                  ? "bg-slate-700 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-sky-300" />
              <span>Dusk Glow</span>
            </button>
          </div>
        </div>

        {/* 3D Viewport Box */}
        <div
          className={`relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b ${currentConfig.bgGrad} shadow-2xl transition-all duration-700`}
        >
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

          {/* Top Info Pill */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xs font-display font-semibold text-white tracking-wide">
                {currentConfig.title}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Drag to Orbit • Scroll to Zoom
              </span>
            </div>
          </div>

          {/* Bottom Right Inquire CTA */}
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-10">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-sky-950/60 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Discuss Custom Elevation</span>
            </button>
          </div>

          {/* Bottom Left Navigation Hints */}
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 hidden sm:flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/70 border border-slate-800 px-3.5 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            <RotateCw className="w-3.5 h-3.5 text-sky-400" />
            <span>360° Realtime WebGL Inspection</span>
          </div>

          {/* 3D Canvas with Fallback */}
          <CanvasErrorBoundary
            fallback={
              <div className="w-full h-full relative flex items-center justify-center p-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Nirman Architectural Tower"
                  className="w-full h-full object-cover rounded-2xl opacity-40 absolute inset-0"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 z-10">
                  <p className="text-2xl font-display font-bold text-white">Nirman Architectural Tower</p>
                  <p className="text-xs text-slate-300 mt-2 max-w-md">
                    Geometric cantilevered towers and modern commercial infrastructure designed with seismic Grade-A structural calculations.
                  </p>
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-xs font-mono text-slate-400">
                  <RefreshCw className="w-5 h-5 animate-spin mr-2 text-sky-400" />
                  Loading 3D Architectural Scene...
                </div>
              }
            >
              <Canvas
                camera={{ position: [5.2, 4.0, 5.8], fov: 42 }}
                className="cursor-grab active:cursor-grabbing w-full h-full"
                gl={{ antialias: true, powerPreference: "high-performance" }}
                dpr={[1, 1.5]}
                onCreated={({ gl }) => {
                  gl.toneMapping = THREE.ACESFilmicToneMapping
                  gl.toneMappingExposure = 1.05
                }}
              >
                <ambientLight intensity={currentConfig.ambient} />
                <directionalLight
                  position={currentConfig.sunPos}
                  intensity={currentConfig.sunIntensity}
                  color={currentConfig.sunColor}
                />
                <pointLight position={[-4, 2, -4]} intensity={0.5} color="#38bdf8" />
                <pointLight position={[0, -1, 0]} intensity={0.4} color="#16a34a" />

                <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
                  <ArchitecturalTower3D mode={mode} />
                </Float>

                <OrbitControls
                  enableZoom={true}
                  minDistance={4.5}
                  maxDistance={11}
                  maxPolarAngle={Math.PI / 2.05}
                  minPolarAngle={Math.PI / 6}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </Suspense>
          </CanvasErrorBoundary>
        </div>

      </div>
    </section>
  )
}
