import React, { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import * as THREE from "three"
import { RotateCw, RefreshCw, ArrowUpRight } from "lucide-react"

// Abstract Architectural Conceptual Massing Model
// Physical studio model aesthetic: concrete, honed stone, clear architectural glass, bronze finials
function ArchitecturalMassingModel() {
  const groupRef = useRef<THREE.Group>(null)

  // Slow, restrained architectural rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  // Architectural Physical Materials
  const stoneMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#DDD6C8", // Warm honed limestone
        roughness: 0.85,
        metalness: 0.05,
      }),
    []
  )

  const concreteMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9E9A90", // Cast architectural concrete
        roughness: 0.9,
        metalness: 0.1,
      }),
    []
  )

  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#CBD5E1",
        roughness: 0.15,
        metalness: 0.2,
        transparent: true,
        opacity: 0.65,
      }),
    []
  )

  const bronzeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#A8793D", // Refined architectural bronze
        roughness: 0.4,
        metalness: 0.65,
      }),
    []
  )

  const darkWoodMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#383633", // Architectural dark wood plinth
        roughness: 0.7,
      }),
    []
  )

  return (
    <group ref={groupRef} position={[0, -1.0, 0]}>
      {/* 1. Base Studio Display Plinth */}
      <mesh position={[0, -0.2, 0]} material={darkWoodMat}>
        <boxGeometry args={[4.6, 0.3, 4.6]} />
      </mesh>

      {/* 2. Substructure Concrete Podium */}
      <mesh position={[-0.3, 0.4, -0.2]} material={concreteMat}>
        <boxGeometry args={[3.2, 0.9, 3.2]} />
      </mesh>

      {/* Stepped Water / Courtyard Void */}
      <mesh position={[1.4, 0.15, 1.2]} material={stoneMat}>
        <boxGeometry args={[1.6, 0.4, 1.6]} />
      </mesh>

      {/* 3. Main Residential Massing Volume (Limestone Block) */}
      <mesh position={[-0.4, 1.5, 0.1]} material={stoneMat}>
        <boxGeometry args={[2.2, 1.4, 2.4]} />
      </mesh>

      {/* Interlocking Glazed Atrium Core */}
      <mesh position={[0.7, 1.6, -0.4]} material={glassMat}>
        <boxGeometry args={[1.5, 1.6, 1.8]} />
      </mesh>

      {/* 4. Cantilevered Upper Terrace Slab */}
      <mesh position={[-0.2, 2.3, 0.2]} material={concreteMat}>
        <boxGeometry args={[3.0, 0.15, 2.6]} />
      </mesh>

      {/* Upper Penthouse Massing */}
      <mesh position={[0.2, 3.0, 0]} material={stoneMat}>
        <boxGeometry args={[1.8, 1.3, 1.8]} />
      </mesh>

      {/* 5. Bronze Pergola Louvers on Roof */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={`louver-${i}`} position={[x, 3.75, 0]} material={bronzeMat}>
          <boxGeometry args={[0.05, 0.08, 1.6]} />
        </mesh>
      ))}

      {/* Bronze Framing Columns */}
      {[
        [-1.2, 1.2, 1.2],
        [0.9, 1.2, 1.2],
      ].map((pos, i) => (
        <mesh key={`col-${i}`} position={pos as [number, number, number]} material={bronzeMat}>
          <cylinderGeometry args={[0.04, 0.04, 2.2, 16]} />
        </mesh>
      ))}
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
  return (
    <section id="model-3d" className="py-28 bg-[#F4F1EA] text-[#252421] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A8793D] flex-shrink-0">
            Architectural Massing Study
          </span>
          <div className="arch-line" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#252421]">
              Conceptual Form & Massing
            </h2>
            <p className="text-sm sm:text-base text-[#716D65] font-sans leading-relaxed">
              An abstract conceptual study exploring the balance of monolithic limestone volumes, cast concrete cantilevered slabs, and architectural bronze detailing.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#716D65]">
            <RotateCw className="w-4 h-4 text-[#A8793D]" />
            <span>Interactive 360° Studio Study</span>
          </div>
        </div>

        {/* 3D Viewport Box - Soft Architectural Studio Presentation */}
        <div className="relative w-full h-[520px] sm:h-[620px] rounded overflow-hidden bg-[#E8E3D9] border border-[#D8D2C5] shadow-sm">
          
          {/* Top Label */}
          <div className="absolute top-6 left-6 z-10 space-y-0.5">
            <span className="text-xs uppercase tracking-widest font-serif font-semibold text-[#252421]">
              Massing Model No. 04
            </span>
            <span className="text-[11px] font-mono text-[#716D65] block">
              Materiality: Limestone • Cast Concrete • Bronze
            </span>
          </div>

          {/* Bottom Right Inquire CTA */}
          <div className="absolute bottom-6 right-6 z-10">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-3 rounded text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1C1A] hover:bg-[#A8793D] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Discuss Custom Architectural Elevation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Left Controls hint */}
          <div className="absolute bottom-6 left-6 z-10 hidden sm:block text-[11px] font-mono text-[#716D65]">
            Click and drag to rotate • Scroll to zoom
          </div>

          {/* 3D Canvas */}
          <CanvasErrorBoundary
            fallback={
              <div className="w-full h-full flex items-center justify-center p-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Massing Preview"
                  className="w-full h-full object-cover rounded opacity-40 absolute inset-0"
                />
                <div className="relative z-10 max-w-md space-y-2">
                  <h3 className="text-2xl font-serif text-[#252421]">Architectural Massing Concept</h3>
                  <p className="text-xs text-[#716D65]">
                    Thoughtfully composed geometric volumes and contemporary structural design for Ratnagiri properties.
                  </p>
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#716D65]">
                  <RefreshCw className="w-4 h-4 animate-spin mr-2 text-[#A8793D]" />
                  Loading Massing Model...
                </div>
              }
            >
              <Canvas
                camera={{ position: [5.2, 3.8, 5.5], fov: 40 }}
                className="cursor-grab active:cursor-grabbing w-full h-full"
                dpr={[1, 1.5]}
              >
                {/* Neutral Studio Soft Lighting */}
                <ambientLight intensity={1.1} />
                <directionalLight position={[7, 10, 6]} intensity={1.5} color="#FFFBF5" />
                <directionalLight position={[-6, 4, -4]} intensity={0.4} color="#E2E8F0" />

                <Float speed={1.0} rotationIntensity={0.1} floatIntensity={0.15}>
                  <ArchitecturalMassingModel />
                </Float>

                <OrbitControls
                  enableZoom={true}
                  minDistance={4.5}
                  maxDistance={10}
                  maxPolarAngle={Math.PI / 2.1}
                  minPolarAngle={Math.PI / 6}
                  autoRotate
                  autoRotateSpeed={0.4}
                />
              </Canvas>
            </Suspense>
          </CanvasErrorBoundary>
        </div>

      </div>
    </section>
  )
}
