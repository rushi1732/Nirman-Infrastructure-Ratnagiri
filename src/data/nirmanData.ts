export interface Project {
  id: string
  title: string
  category: "Residential" | "Commercial" | "Turnkey"
  status: "Completed" | "Ongoing" | "Planning"
  location: string
  area: string
  description: string
  image: string
  features: string[]
  isPlaceholder?: boolean
}

export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  iconName: string
  deliverables: string[]
  badge: string
  image: string
}

export interface ProcessStep {
  number: string
  title: string
  stage: string
  description: string
  keyMilestone: string
}

export interface TestimonialItem {
  id: string
  clientName: string
  projectType: string
  location: string
  rating: number
  reviewText: string
  isPlaceholder?: boolean
}

export interface FaqItem {
  question: string
  answer: string
  category: "General" | "Construction" | "Cost & Permissions" | "Local Ratnagiri"
}

export const COMPANY_INFO = {
  name: "Nirman Infrastructure Ratnagiri",
  tagline: "Building Dreams. Creating Strong Foundations.",
  shortDescription: "Professional construction, real estate development and turnkey architectural engineering solutions in Ratnagiri, Maharashtra.",
  phone: "+91 7447849574",
  phoneRaw: "+917447849574",
  whatsapp: "917447849574",
  email: "contact@nirmaninfrastructure.com",
  address: {
    line1: "Office No. 06 & 07, First Floor, Indradhanu",
    line2: "Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Hindu Colony",
    locality: "Abhyudhya Nagar, Nachane",
    city: "Ratnagiri",
    state: "Maharashtra",
    pincode: "415612",
  },
  googleMapsUrl: "https://www.google.com/maps/place/Nirman+Infrastructure+Ratnagiri/@16.9863089,73.2752385,8697m/data=!3m1!1e3!4m10!1m2!2m1!1sbuilder+in+Ratnagiri,+Maharashtra!3m6!1s0x3bea0d87c6c61a49:0x653f9a2bc79f24c7!8m2!3d16.9863089!4d73.3133418!15sCiFidWlsZGVyIGluIFJhdG5hZ2lyaSwgTWFoYXJhc2h0cmFaIiIgYnVpbGRlciBpbiByYXRuYWdpcmkgbWFoYXJhc2h0cmGSARRjb25zdHJ1Y3Rpb25fY29tcGFueeABAA!16s%2Fg%2F11rfdb0r6j",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.62545853526!2d73.3033418!3d16.9863089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d87c6c61a49%3A0x653f9a2bc79f24c7!2sNirman%20Infrastructure%20Ratnagiri!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  workingHours: "Monday to Saturday: 9:30 AM – 7:00 PM (Sunday by Appointment)",
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Construction",
    shortDesc: "Bespoke bungalows, modern villas, and multi-family residential residences designed for coastal resilience.",
    fullDesc: "We build custom family residences engineered to withstand the unique Konkan climate. From high-grade reinforced RCC structures to waterproofed finishes, our residential construction prioritizes natural light, cross-ventilation, and long-term durability.",
    iconName: "Home",
    badge: "Core Expertise",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Custom Architectural Villa Planning",
      "RCC Framed Structural Execution",
      "Coastal Weatherproofing & Waterproofing",
      "Premium Flooring & Joinery Installation"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    shortDesc: "High-visibility retail hubs, office complexes, and multi-storey commercial developments.",
    fullDesc: "Engineered for maximum commercial efficiency, foot traffic flow, and safety compliance. We execute turnkey commercial buildings with modern facade elements, high-load column spacing, and robust MEP integration.",
    iconName: "Building2",
    badge: "High Capacity",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Structural Steel & Reinforced Concrete Works",
      "Modern Glass & ACP Facade Systems",
      "Commercial Fire & Safety Integration",
      "Underground & Multi-level Parking Design"
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Development",
    shortDesc: "Strategic land development, premium residential layouts, and planned community developments.",
    fullDesc: "Transforming strategic parcels in Ratnagiri into value-generating residential and commercial assets with clean legal titles, municipal approvals, proper drainage, and wide arterial road networks.",
    iconName: "Landmark",
    badge: "Strategic Assets",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Layout Demarcation & Infrastructure",
      "Collector & Town Planning Approvals",
      "Underground Drainage & Water Systems",
      "High-Return Real Estate Plotting"
    ]
  },
  {
    id: "turnkey",
    title: "Turnkey Construction",
    shortDesc: "Single-point end-to-end project delivery from architectural blueprint to handover key.",
    fullDesc: "Eliminate the hassle of coordinating multiple contractors. Our turnkey contract encompasses soil testing, municipal approvals, architectural coordination, material sourcing, execution, and final interior handover.",
    iconName: "KeyRound",
    badge: "Stress-Free Delivery",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Single-Window Project Accountability",
      "Pre-agreed Fixed Budgets & Timelines",
      "Strict Quality Milestone Audits",
      "Ready-to-Move Interior Fitouts"
    ]
  },
  {
    id: "renovation",
    title: "Renovation & Redevelopment",
    shortDesc: "Structural retrofitting, heritage house rejuvenation, and modern elevation transformations.",
    fullDesc: "Modernizing older properties across Ratnagiri with structural strengthening, roof waterproofing, modern interior layouts, and energy-efficient retrofitting while preserving property value.",
    iconName: "Hammer",
    badge: "Modernization",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Structural Health & NDT Assessments",
      "Modern Exterior Elevation Redesign",
      "Roofing & Heavy Monsoon Waterproofing",
      "Space Reconfiguration & Expansion"
    ]
  },
  {
    id: "consultation",
    title: "Construction Consultation",
    shortDesc: "Professional structural advisory, BOQ preparation, municipal permissions, and cost estimation.",
    fullDesc: "Unbiased technical expertise before you invest. We review architectural drawings, evaluate soil profiles, calculate precise material Bill of Quantities (BOQ), and guide you through Ratnagiri municipal sanctioning.",
    iconName: "FileCheck",
    badge: "Technical Advisory",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Accurate BOQ & Material Estimations",
      "Municipal & RERA Compliance Guidance",
      "Site Feasibility & Soil Test Analysis",
      "Independent Third-Party Quality Audits"
    ]
  }
]

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Coastal Horizon Residency",
    category: "Residential",
    status: "Completed",
    location: "Nachane, Ratnagiri",
    area: "8,500 sq.ft Built-up",
    description: "A contemporary tropical residence featuring expansive cantilevered balconies, local laterite stone accents, and high-performance weatherproofing for the coastal Konkan monsoon.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    features: ["Rainwater Harvesting", "Earthquake-Resistant RCC", "Solar Water Integration", "High Ceiling Cross-Ventilation"],
    isPlaceholder: true
  },
  {
    id: "proj-2",
    title: "Ratna Commercial Hub",
    category: "Commercial",
    status: "Completed",
    location: "SV Road, Near Stadium, Ratnagiri",
    area: "14,200 sq.ft Commercial",
    description: "A multi-storey commercial complex featuring column-free showroom spaces, modern glazed facades, high-capacity passenger elevators, and structured basement parking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: ["Acoustic Double Glazing", "High-Load Slab Capacity", "Dedicated Generator Backup", "Fire Safety Sprinkler System"],
    isPlaceholder: true
  },
  {
    id: "proj-3",
    title: "Palm Meadows Villa Enclave",
    category: "Turnkey",
    status: "Ongoing",
    location: "Kuwarbav, Ratnagiri",
    area: "12,000 sq.ft Site Development",
    description: "Turnkey development of 4 bespoke luxury villas with landscaped private courtyards, smart home readiness, and sustainable Konkan architectural styling.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Turnkey EPC Contract", "Custom Interior Joinery", "Underground Utility Trenching", "Gated Security Layout"],
    isPlaceholder: true
  },
  {
    id: "proj-4",
    title: "Shivaji Nagar Urban Suites",
    category: "Residential",
    status: "Ongoing",
    location: "Shivaji Nagar, Ratnagiri",
    area: "18,500 sq.ft Residential",
    description: "Modern apartment complex engineered with seismic Grade-A steel reinforcement, branded sanitaryware, and energy-efficient LED common lighting.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: ["Seismic Zone IV Compliant", "Branded Vitrified Tiling", "Covered Stilt Parking", "Dedicated Borewell & Municipal Supply"],
    isPlaceholder: true
  },
  {
    id: "proj-5",
    title: "Indradhanu Retail Galleria",
    category: "Commercial",
    status: "Completed",
    location: "Hindu Colony, Nachane",
    area: "6,800 sq.ft Retail",
    description: "Premium retail suites and corporate chambers constructed with sleek granite lobbies, advanced power distribution, and illuminated street signage frontage.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    features: ["Granite Lobby Flooring", "Energy-Smart Distribution", "Heavy Duty Security Grilles", "High Footfall Street Frontage"],
    isPlaceholder: true
  },
  {
    id: "proj-6",
    title: "Mirjole Greenfield Estate",
    category: "Turnkey",
    status: "Planning",
    location: "Mirjole, Ratnagiri",
    area: "22,000 sq.ft Plotted Layout",
    description: "Carefully planned gated residential community with demarcated villa plots, asphalt roads, street lighting, and rainwater recharging trenches.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: ["Town Planning Approved", "Asphalt Internal Roads", "Compound Wall Demarcation", "Electrical Sub-station Planned"],
    isPlaceholder: true
  }
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Site Review",
    stage: "Discovery",
    description: "We meet at our Nachane office or directly at your site to understand your vision, budget parameters, architectural preferences, and land contour conditions.",
    keyMilestone: "Initial Site Assessment & Requirement Document"
  },
  {
    number: "02",
    title: "Planning & Feasibility",
    stage: "Blueprint",
    description: "Our engineering team evaluates soil strength, FAR/FSI zoning, local municipal guidelines, and outlines clear project feasibility with transparent cost projections.",
    keyMilestone: "Feasibility Analysis & Budget Roadmap"
  },
  {
    number: "03",
    title: "Design Coordination & Sanctions",
    stage: "Architecture",
    description: "Coordination with structural engineers, drafting 2D/3D elevations, preparing structural reinforcement drawings, and assisting with municipal permissions.",
    keyMilestone: "Approved Architectural & Structural Blueprints"
  },
  {
    number: "04",
    title: "Construction Execution",
    stage: "Engineering",
    description: "Excavation, anti-termite treatment, foundation casting, RCC column erection, brickwork, and slab casting using standardized Grade-A materials and strict onsite supervision.",
    keyMilestone: "Supervised Milestone RCC & Masonry Inspections"
  },
  {
    number: "05",
    title: "Quality Review & Finishing",
    stage: "Craftsmanship",
    description: "Rigorous water-curing checks, multi-layer weatherproofing, plastering, plumbing pressure testing, electrical circuit testing, and premium flooring installation.",
    keyMilestone: "Multi-Point Quality Audit & Waterproofing Warranty"
  },
  {
    number: "06",
    title: "Project Completion & Handover",
    stage: "Delivery",
    description: "Final walkthrough inspection with the client, completion documentation, structural handover dossier, and key handover ready for occupancy.",
    keyMilestone: "Formal Handover & As-Built Documentation"
  }
]

export const STORYTELLING_STAGES = [
  {
    stage: "01",
    name: "Vision & Conception",
    headline: "Transforming Ideas into Concrete Realities",
    copy: "Every memorable building begins with an architectural aspiration. In Ratnagiri's distinctive coastal landscape, we translate your lifestyle or commercial requirements into a purposeful concept.",
    visualBadge: "Conceptual Design",
    elevationFocus: "Site Orientation & Natural Light Analysis"
  },
  {
    stage: "02",
    name: "Architectural Planning",
    headline: "Precision Engineering Down to the Millimeter",
    copy: "We coordinate architectural aesthetics with rigorous structural calculations. Soil tests and wind-load calculations guide our blueprint so your building stands resilient for generations.",
    visualBadge: "Technical Blueprint",
    elevationFocus: "Seismic & Wind-Load Resistance Modeling"
  },
  {
    stage: "03",
    name: "Deep Foundation",
    headline: "The Uncompromising Anchor of Safety",
    copy: "In the Konkan terrain, solid foundation engineering is vital. We dig down to hard strata, cast reinforced isolated/raft footings, and apply multi-barrier subterranean damp-proofing.",
    visualBadge: "Substructure Casting",
    elevationFocus: "Reinforced Footings & Anti-Capillary Damp Proofing"
  },
  {
    stage: "04",
    name: "Structural Superstructure",
    headline: "High-Grade RCC Skeleton Takes Shape",
    copy: "Certified Fe-550D TMT rebars, precise grade concrete mix, and vibration compaction ensure that columns, beams, and slabs form an unbreakable monolithic structural framework.",
    visualBadge: "RCC Superstructure",
    elevationFocus: "High-Strength Monolithic Columns & Slabs"
  },
  {
    stage: "05",
    name: "Coastal Waterproofing & Envelope",
    headline: "Engineered for 100+ Inches of Annual Monsoon",
    copy: "Ratnagiri's heavy monsoons demand specialized barrier defense. We execute multi-stage elastomer coatings, brick-bat coba waterproofing on terraces, and weather-shield external facades.",
    visualBadge: "Monsoon Defense",
    elevationFocus: "Multi-Layer Terrace & Wall Weather Barrier"
  },
  {
    stage: "06",
    name: "Handover & Lasting Value",
    headline: "Delivered on Schedule, Built to Endure",
    copy: "Flawless woodwork, polished stone flooring, crisp architectural lines, and all operational testing verified before you receive the keys to your new property.",
    visualBadge: "Final Handover",
    elevationFocus: "Complete As-Built Dossier & Key Handover"
  }
]

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Quality-Focused Construction",
    description: "We use laboratory-tested Grade-A cement, certified Fe-550D TMT steel, and uncompromised aggregate mixes to ensure structural longevity.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent Communication",
    description: "Clear BOQ line items, defined milestone payment stages, and weekly photo/video progress updates keep you fully informed with zero surprise expenses.",
    icon: "Eye"
  },
  {
    title: "Thoughtful Engineering Planning",
    description: "Architectural designs created specifically for Ratnagiri's tropical climate — optimizing coastal sea breezes, natural shade, and storm drainage.",
    icon: "Compass"
  },
  {
    title: "Attention to Detail",
    description: "From 90-degree plaster corners and flawless floor levelling to concealed plumbing pressure tests, no detail is overlooked.",
    icon: "Sparkles"
  },
  {
    title: "Customer-Focused Approach",
    description: "We work directly alongside you, accommodating practical layout adjustments and offering seasoned advice from day one.",
    icon: "Users"
  },
  {
    title: "Reliable Project Execution",
    description: "Disciplined scheduling, dedicated site supervisors, and reliable local vendor networks ensure on-schedule milestone delivery.",
    icon: "CalendarCheck"
  }
]

export const STATS_PLACEHOLDERS = [
  {
    label: "Local Expertise",
    value: "Ratnagiri",
    unit: "Focused",
    subtitle: "Deep understanding of Konkan soil & monsoon conditions",
    isMetric: true
  },
  {
    label: "Construction Standard",
    value: "Grade A",
    unit: "Materials",
    subtitle: "Certified Fe-550D TMT steel & tested aggregate mixes",
    isMetric: true
  },
  {
    label: "Turnkey Accountability",
    value: "100%",
    unit: "Managed",
    subtitle: "Single window from drawing approval to key handover",
    isMetric: true
  },
  {
    label: "Project Execution",
    value: "Turnkey & Custom",
    unit: "Services",
    subtitle: "Residential villas, commercial hubs & redevelopment",
    isMetric: true
  }
]

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Homeowner Review",
    projectType: "Residential Bungalow",
    location: "Nachane, Ratnagiri",
    rating: 5,
    reviewText: "Building a home in Ratnagiri while working outside was our biggest worry. Nirman Infrastructure provided transparent weekly updates, managed material deliveries smoothly, and delivered exceptional plaster and RCC finish quality.",
    isPlaceholder: true
  },
  {
    id: "test-2",
    clientName: "Commercial Property Investor",
    projectType: "Retail Showroom Complex",
    location: "SV Road, Ratnagiri",
    rating: 5,
    reviewText: "Their attention to structural safety, parking clearance, and modern elevation design made our commercial complex stand out in the locality. Very professional team and clear documentation.",
    isPlaceholder: true
  },
  {
    id: "test-3",
    clientName: "Property Buyer",
    projectType: "Turnkey Construction",
    location: "Kuwarbav, Ratnagiri",
    rating: 5,
    reviewText: "The turnkey contract made all the difference. No running behind multiple subcontractors for masonry, electrical, or plumbing. The waterproofing during this monsoon proved their craftsmanship.",
    isPlaceholder: true
  }
]

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What types of construction projects does Nirman Infrastructure handle?",
    answer: "Nirman Infrastructure Ratnagiri handles individual residential bungalows, luxury coastal villas, multi-storey residential apartments, commercial shopping complexes, turnkey EPC construction, and structural renovation/redevelopment across Ratnagiri and surrounding areas.",
    category: "General"
  },
  {
    question: "Do you provide residential construction services in Ratnagiri?",
    answer: "Yes, residential construction is our core specialty. We execute custom private homes from foundation excavation to turnkey interior handover, carefully engineered for Ratnagiri's coastal weather.",
    category: "Construction"
  },
  {
    question: "Do you handle commercial construction projects?",
    answer: "Yes, we construct commercial complexes, retail showrooms, corporate office chambers, and institutional facilities with heavy-load structural planning, column-free spans, and complete municipal compliance.",
    category: "Construction"
  },
  {
    question: "What is Turnkey Construction and what does it include?",
    answer: "Our Turnkey Construction service means we take complete, single-point accountability for your entire building. It includes architectural drafting coordination, municipal sanction liaison, soil testing, excavation, structural RCC, masonry, plaster, waterproofing, electrical, plumbing, tiling, and paintwork until the final handover.",
    category: "Construction"
  },
  {
    question: "Can I discuss my project before finalizing any agreement?",
    answer: "Absolutely. We encourage prospective clients to schedule an exploratory consultation at our Nachane office or directly at your site. We review your land documentation, discuss your floor requirements, and provide preliminary guidance with no commitment required.",
    category: "General"
  },
  {
    question: "How can I request a detailed cost quotation for my construction?",
    answer: "You can reach us directly at +91 7447849574 or submit our online enquiry form with your plot size, location, and proposed built-up area. Our team will schedule a site visit and prepare a transparent Bill of Quantities (BOQ).",
    category: "Cost & Permissions"
  },
  {
    question: "How do you protect buildings from heavy Ratnagiri monsoons?",
    answer: "Ratnagiri receives heavy monsoon rainfall exceeding 3,000mm annually. We apply multi-tier waterproofing, including crystalline subterranean water barriers, polymer-modified bitumen coatings, slope-calibrated terrace brick-bat coba, sill-level drip moulds, and elastomeric external anti-fungal paint.",
    category: "Local Ratnagiri"
  },
  {
    question: "Where is Nirman Infrastructure located in Ratnagiri?",
    answer: "Our office is centrally located at Office No. 06 & 07, First Floor, Indradhanu, Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Hindu Colony, Abhyudhya Nagar, Nachane, Maharashtra 415612. You are always welcome to visit us during business hours.",
    category: "General"
  }
]
