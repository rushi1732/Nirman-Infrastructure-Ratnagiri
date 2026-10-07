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
  slug: string
  title: string
  targetKeyword: string
  shortDesc: string
  fullDesc: string
  ctaText: string
  isFeatured: boolean
  iconName: string
  badge: string
  image: string
  deliverables: string[]
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
  category: "General" | "Construction" | "Cost & Planning" | "Local Ratnagiri"
}

export const COMPANY_INFO = {
  name: "Nirman Infrastructure Ratnagiri",
  tagline: "Building Dreams. Creating Strong Foundations.",
  shortDescription: "Professional construction, real estate development, and contracting services in Ratnagiri, Maharashtra.",
  phone: "+91 7447849574",
  phoneRaw: "+917447849574",
  whatsapp: "917447849574",
  email: "contact@nirmaninfrastructure.com",
  address: {
    officeName: "Office No. 06 & 07, Indradhanu",
    landmark: "Behind Chhatrapati Shivaji Maharaj Stadium",
    street: "SV Road, Hindu Colony",
    area: "Nachane",
    line1: "Office No. 06 & 07, First Floor, Indradhanu",
    line2: "Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Hindu Colony",
    locality: "Abhyudhya Nagar, Nachane",
    city: "Ratnagiri",
    state: "Maharashtra",
    pincode: "415612",
  },
  hours: {
    days: "Monday to Saturday",
    timings: "9:30 AM – 7:00 PM",
  },
  workingHours: "Monday to Saturday: 9:30 AM – 7:00 PM (Sunday by Appointment)",
  googleMapsUrl: "https://www.google.com/maps/place/Nirman+Infrastructure+Ratnagiri/@16.9863089,73.2752385,8697m/data=!3m1!1e3!4m10!1m2!2m1!1sbuilder+in+Ratnagiri,+Maharashtra!3m6!1s0x3bea0d87c6c61a49:0x653f9a2bc79f24c7!8m2!3d16.9863089!4d73.3133418!15sCiFidWlsZGVyIGluIFJhdG5hZ2lyaSwgTWFoYXJhc2h0cmFaIiIgYnVpbGRlciBpbiByYXRuYWdpcmkgbWFoYXJhc2h0cmGSARRjb25zdHJ1Y3Rpb25fY29tcGFueeABAA!16s%2Fg%2F11rfdb0r6j",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.62545853526!2d73.3033418!3d16.9863089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0d87c6c61a49%3A0x653f9a2bc79f24c7!2sNirman%20Infrastructure%20Ratnagiri!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
}

// 12 Actual Business Services for Nirman Infrastructure Ratnagiri
export const SERVICES_DATA: ServiceItem[] = [
  // 4 Featured Services
  {
    id: "building-construction",
    slug: "building-construction-ratnagiri",
    title: "Building Construction Services",
    targetKeyword: "Building Construction Services in Ratnagiri",
    shortDesc: "Comprehensive building construction solutions for residential and commercial developments across Ratnagiri.",
    fullDesc: "Nirman Infrastructure provides comprehensive building construction services in Ratnagiri, covering various stages of project execution. We focus on practical planning, coordinated construction, workmanship, and project-specific requirements.",
    ctaText: "Explore Construction Services",
    isFeatured: true,
    iconName: "Building2",
    badge: "Primary Service",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Structured Site Planning & Workflow Coordination",
      "Comprehensive Construction Execution",
      "On-Site Supervision & Milestone Reviews",
      "Turnkey Coordination for Residential & Commercial Scope"
    ]
  },
  {
    id: "property-construction",
    slug: "property-construction-contractors-ratnagiri",
    title: "Property Construction Contractors",
    targetKeyword: "Property Construction Contractors in Ratnagiri",
    shortDesc: "Complete property construction contracting services for different types of development projects.",
    fullDesc: "From initial planning to on-site execution, Nirman Infrastructure undertakes property construction projects with a structured and professional approach. We coordinate the construction process to help turn project plans into functional built spaces.",
    ctaText: "Request a Consultation",
    isFeatured: true,
    iconName: "HardHat",
    badge: "Contracting",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "End-to-End Contract Coordination",
      "Material & Site Labor Scheduling",
      "Architectural Blueprint Alignment",
      "Stage-wise Progress Documentation"
    ]
  },
  {
    id: "residential-builders",
    slug: "residential-builders-ratnagiri",
    title: "Residential Builders",
    targetKeyword: "Residential Builders in Ratnagiri",
    shortDesc: "Residential development and home-building services designed around everyday living needs.",
    fullDesc: "Nirman Infrastructure provides residential building services for homes and residential developments in and around Ratnagiri. We focus on practical planning, coordinated construction, thoughtful execution, and creating spaces designed around the needs of the people who will use them.",
    ctaText: "Start Your Residential Project",
    isFeatured: true,
    iconName: "Home",
    badge: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Individual Home & Bungalow Building",
      "Residential Layout Construction",
      "Natural Light & Ventilation Orientation",
      "Practical Interior Layout Coordination"
    ]
  },
  {
    id: "commercial-building-construction",
    slug: "commercial-building-construction-ratnagiri",
    title: "Commercial Building Construction",
    targetKeyword: "Commercial Building Construction in Ratnagiri",
    shortDesc: "Construction services for commercial buildings, office complexes, and business spaces.",
    fullDesc: "We undertake commercial construction projects for offices, retail spaces, commercial establishments, and other business-oriented developments. Our approach combines thoughtful planning with coordinated site execution to create functional commercial spaces.",
    ctaText: "Discuss a Commercial Project",
    isFeatured: true,
    iconName: "Briefcase",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Commercial Complex & Office Construction",
      "Retail Showroom Spaces & Business Hubs",
      "Functional Entryways & Parking Layouts",
      "Structured Utility & Service Coordination"
    ]
  },

  // 8 Additional Construction Services
  {
    id: "building-erection",
    slug: "building-erection-services-ratnagiri",
    title: "Building Erection Services",
    targetKeyword: "Building Erection Services in Ratnagiri",
    shortDesc: "Professional building erection and structural execution services for residential, commercial, and other construction projects.",
    fullDesc: "Nirman Infrastructure provides coordinated building erection services covering structural execution and on-site construction activities. Our approach focuses on organized project execution, quality workmanship, and attention to every stage of the building process.",
    ctaText: "Discuss Your Project",
    isFeatured: false,
    iconName: "Building",
    badge: "Structural",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Structural Framework Execution",
      "Coordinated On-Site Assembly & Pouring",
      "Supervised Column & Slab Alignment",
      "Practical Quality Checks"
    ]
  },
  {
    id: "building-development",
    slug: "building-development-services-ratnagiri",
    title: "Building Development Services",
    targetKeyword: "Building Development Services in Ratnagiri",
    shortDesc: "Building and property development solutions from concept toward execution.",
    fullDesc: "Our building development services support the transformation of property concepts into thoughtfully planned developments. Nirman Infrastructure works across planning, construction coordination, execution, and development requirements for different types of properties.",
    ctaText: "Start Your Development",
    isFeatured: false,
    iconName: "Layers",
    badge: "Development",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Property Concept Evaluation",
      "Phased Development Planning",
      "Infrastructure & Access Coordination",
      "Practical Land Layout Planning"
    ]
  },
  {
    id: "general-contractors",
    slug: "general-building-contractors-ratnagiri",
    title: "General Building Contractors",
    targetKeyword: "Building Contractors in Ratnagiri",
    shortDesc: "Professional general contracting services for smooth multi-stage construction workflows.",
    fullDesc: "As general building contractors, Nirman Infrastructure coordinates multiple aspects of construction to maintain an organized project workflow. We work across planning, site coordination, execution, and finishing requirements based on each project's scope.",
    ctaText: "Talk to Our Team",
    isFeatured: false,
    iconName: "Hammer",
    badge: "General Contracting",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Comprehensive Site Management",
      "Sub-Contractor & Trade Synchronization",
      "Material Receipt & Storage Protocols",
      "Timely Stage-by-Stage Execution"
    ]
  },
  {
    id: "construction-provider",
    slug: "construction-services-provider-ratnagiri",
    title: "Construction Services Provider",
    targetKeyword: "Construction Company in Ratnagiri",
    shortDesc: "Construction solutions tailored for residential, commercial, and property development requirements.",
    fullDesc: "Nirman Infrastructure offers professional construction services designed around the specific requirements of each project. Our team focuses on coordinated execution, clear communication, practical planning, and quality-conscious construction.",
    ctaText: "Get Construction Assistance",
    isFeatured: false,
    iconName: "Wrench",
    badge: "Solutions",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Project-Specific Execution Strategies",
      "Transparent Milestone Discussions",
      "Clear Communication at Every Step",
      "Practical Site Support in Ratnagiri"
    ]
  },
  {
    id: "home-construction",
    slug: "home-construction-ratnagiri",
    title: "Home Construction Contractors",
    targetKeyword: "Home Construction Contractors in Ratnagiri",
    shortDesc: "Construction services for new homes, private bungalows, and custom family residences.",
    fullDesc: "Planning to build a new home in Ratnagiri? Nirman Infrastructure provides residential construction contracting services designed to take your project from planning through execution with a clear and organized construction process.",
    ctaText: "Plan Your Home",
    isFeatured: false,
    iconName: "Castle",
    badge: "Home Building",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "New Home Construction Contracting",
      "Foundation to Plaster Coordination",
      "Room Proportions & Space Planning",
      "Organized Building Steps for Homeowners"
    ]
  },
  {
    id: "real-estate-construction",
    slug: "real-estate-construction-ratnagiri",
    title: "Real Estate Construction",
    targetKeyword: "Real Estate Construction in Ratnagiri",
    shortDesc: "Construction and development execution for real estate projects and residential ventures.",
    fullDesc: "Nirman Infrastructure supports real estate construction projects across residential and commercial developments. We help coordinate planning and construction execution to transform property ideas into well-developed built environments.",
    ctaText: "Explore Real Estate Solutions",
    isFeatured: false,
    iconName: "Landmark",
    badge: "Real Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Real Estate Project Site Execution",
      "Multi-Unit Residential Structures",
      "Plotting & Approach Road Work",
      "Coordinated Development Implementation"
    ]
  },
  {
    id: "structure-building",
    slug: "structure-building-services-ratnagiri",
    title: "Structure Building Services",
    targetKeyword: "Structure Building Services in Ratnagiri",
    shortDesc: "Structural building and construction execution services focusing on the core building framework.",
    fullDesc: "Our structure building services focus on the core construction stages that create the framework of a building. Nirman Infrastructure brings an organized, quality-focused approach to structural construction and overall project execution.",
    ctaText: "Discuss Structural Work",
    isFeatured: false,
    iconName: "Columns3",
    badge: "Core Framework",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Plinth & Substructure Construction",
      "RCC Column, Beam & Slab Framework",
      "Masonry Wall Erection",
      "Supervised Structural Coordination"
    ]
  },
  {
    id: "temple-construction",
    slug: "temple-construction-services-ratnagiri",
    title: "Temple Construction Services",
    targetKeyword: "Temple Construction Services in Ratnagiri",
    shortDesc: "Construction services for temple and religious building projects approached according to specific design requirements.",
    fullDesc: "Nirman Infrastructure undertakes temple construction projects with attention to architectural requirements, functionality, detailing, and the character of the structure. Each project should be approached according to its specific design and construction requirements.",
    ctaText: "Discuss Temple Construction",
    isFeatured: false,
    iconName: "Church",
    badge: "Religious Buildings",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Project-Specific Design Coordination",
      "Detailed Masonry & Structural Framing",
      "Spacious Mandap & Sanctum Construction",
      "Respectful & Structured On-Site Work"
    ]
  }
]

export const ALL_SERVICES_LIST = SERVICES_DATA

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Coastal Horizon Residency",
    category: "Residential",
    status: "Completed",
    location: "Nachane, Ratnagiri",
    area: "8,500 sq.ft Built-up",
    description: "A contemporary residential project featuring structured balconies, regional stone accents, and weather-conscious design suitable for coastal Ratnagiri.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    features: ["Rainwater Planning", "RCC Framed Structure", "Cross-Ventilation Layout", "Quality Flooring"],
    isPlaceholder: true
  },
  {
    id: "proj-2",
    title: "Ratna Commercial Hub",
    category: "Commercial",
    status: "Completed",
    location: "SV Road, Near Stadium, Ratnagiri",
    area: "14,200 sq.ft Commercial",
    description: "A commercial building project featuring showroom spaces, glazed facade detailing, passenger elevator provision, and structured parking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: ["Glazed Facade Detailing", "Structured Slab Layout", "Utility Connections", "Designated Parking"],
    isPlaceholder: true
  },
  {
    id: "proj-3",
    title: "Palm Meadows Villa Enclave",
    category: "Turnkey",
    status: "Ongoing",
    location: "Kuwarbav, Ratnagiri",
    area: "12,000 sq.ft Site Development",
    description: "Residential construction project comprising planned homes with private courtyards, utility planning, and modern styling.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Coordinated Construction", "Functional Layouts", "Utility Trenching", "Gated Access"],
    isPlaceholder: true
  },
  {
    id: "proj-4",
    title: "Shivaji Nagar Urban Suites",
    category: "Residential",
    status: "Ongoing",
    location: "Shivaji Nagar, Ratnagiri",
    area: "18,500 sq.ft Residential",
    description: "Residential apartment development planned with organized structural execution, quality finishes, and shared utility amenities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: ["RCC Framed Structure", "Vitrified Tiling", "Stilt Parking", "Municipal Water Connection"],
    isPlaceholder: true
  },
  {
    id: "proj-5",
    title: "Indradhanu Retail Galleria",
    category: "Commercial",
    status: "Completed",
    location: "Hindu Colony, Nachane",
    area: "6,800 sq.ft Retail",
    description: "Retail and commercial suites constructed with practical lobbies, electrical distribution planning, and street-facing frontage.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80",
    features: ["Commercial Frontage", "Planned Electrical Points", "Durable Lobby Flooring", "Accessibility Access"],
    isPlaceholder: true
  },
  {
    id: "proj-6",
    title: "Mirjole Greenfield Estate",
    category: "Turnkey",
    status: "Planning",
    location: "Mirjole, Ratnagiri",
    area: "22,000 sq.ft Plotted Layout",
    description: "Planned residential layout project with demarcated plots, planned internal roads, and storm drainage provisions.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: ["Demarcated Plots", "Internal Access Roads", "Boundary Planning", "Drainage Outlines"],
    isPlaceholder: true
  }
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Site Review",
    stage: "Discovery",
    description: "We meet at our Nachane office or directly at your site to understand your project goals, layout requirements, and site conditions.",
    keyMilestone: "Initial Site Assessment & Requirement Document"
  },
  {
    number: "02",
    title: "Planning & Feasibility",
    stage: "Blueprint",
    description: "Our team evaluates project parameters, local site considerations, and outlines a clear project feasibility plan with organized cost estimates.",
    keyMilestone: "Feasibility Analysis & Budget Roadmap"
  },
  {
    number: "03",
    title: "Design Coordination",
    stage: "Architecture",
    description: "Coordinating with architectural planners, drafting elevations, preparing structural layout drawings, and aligning with local guidelines.",
    keyMilestone: "Approved Architectural & Layout Drawings"
  },
  {
    number: "04",
    title: "Construction Execution",
    stage: "Engineering",
    description: "Site preparation, foundation work, structural framing, masonry, and slab construction conducted under regular on-site supervision.",
    keyMilestone: "Milestone Inspections & Structured Supervised Work"
  },
  {
    number: "05",
    title: "Quality Review & Finishing",
    stage: "Craftsmanship",
    description: "Thorough review of plaster work, waterproofing applications, plumbing runs, electrical points, and interior floor finishes.",
    keyMilestone: "Multi-Point Quality Audit & Finishing Checks"
  },
  {
    number: "06",
    title: "Project Completion & Handover",
    stage: "Delivery",
    description: "Final walkthrough with the client, completion documentation review, and formal handover of the finished structure.",
    keyMilestone: "Formal Handover & Project Walkthrough"
  }
]

export const STORYTELLING_STAGES = [
  {
    stage: "01",
    name: "Vision & Conception",
    headline: "Transforming Ideas into Functional Spaces",
    copy: "Every building project begins with a concept. In Ratnagiri, we help translate your residential or commercial requirements into a practical, buildable plan.",
    visualBadge: "Conceptual Design",
    elevationFocus: "Site Orientation & Functional Needs"
  },
  {
    stage: "02",
    name: "Planning & Layout",
    headline: "Thoughtful Project Planning",
    copy: "We coordinate architectural layouts with practical construction requirements, ensuring that each space is planned for usability and long-term durability.",
    visualBadge: "Technical Blueprint",
    elevationFocus: "Layout Alignment & Dimension Coordination"
  },
  {
    stage: "03",
    name: "Foundation Work",
    headline: "Creating Strong Foundations",
    copy: "Solid foundation execution provides essential stability. We execute footings and plinth levels carefully according to site conditions and project drawings.",
    visualBadge: "Substructure Work",
    elevationFocus: "Foundation Footings & Plinth Level Alignment"
  },
  {
    stage: "04",
    name: "Structural Superstructure",
    headline: "Coordinated Building Framework",
    copy: "Columns, beams, and slabs are constructed systematically to establish a stable structural skeleton for your residential or commercial property.",
    visualBadge: "Framing Stage",
    elevationFocus: "Supervised Framework & Masonry Construction"
  },
  {
    stage: "05",
    name: "Weatherproofing & External Enclosure",
    headline: "Protective Finishing for Coastal Weather",
    copy: "Ratnagiri's seasonal rainfall requires careful surface treatment. We apply multi-stage exterior coatings, terrace water protection, and external plaster.",
    visualBadge: "Exterior Finishes",
    elevationFocus: "Terrace & Wall Weather Protection"
  },
  {
    stage: "06",
    name: "Handover & Usable Spaces",
    headline: "Delivering Finished Built Environments",
    copy: "Flooring, joinery, and utility connections are verified before completing the project and handing over the keys to the property owner.",
    visualBadge: "Final Handover",
    elevationFocus: "Handover Walkthrough & Documentation"
  }
]

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Quality-Focused Construction",
    description: "We emphasize organized workmanship, reliable construction methods, and quality-conscious execution throughout every project phase.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent Communication",
    description: "Clear project milestones, defined scope details, and periodic progress discussions keep you informed with open, honest communication.",
    icon: "Eye"
  },
  {
    title: "Thoughtful Planning",
    description: "Practical planning aligned with Ratnagiri's local climate conditions, natural light availability, and functional space utilization.",
    icon: "Compass"
  },
  {
    title: "Attention to Detail",
    description: "From plaster alignments and level surfaces to concealed utility coordination, we maintain consistent care at every stage.",
    icon: "Sparkles"
  },
  {
    title: "Customer-Focused Approach",
    description: "We work closely with clients to understand their needs, adapt to practical requirements, and offer sound professional guidance.",
    icon: "Users"
  },
  {
    title: "Reliable Project Execution",
    description: "Structured project workflows, dedicated on-site supervision, and coordinated scheduling to ensure organized milestone delivery.",
    icon: "CalendarCheck"
  }
]

export const STATS_PLACEHOLDERS = [
  {
    label: "Local Focus",
    value: "Ratnagiri",
    unit: "Local Presence",
    subtitle: "Understanding local site conditions & construction requirements",
    isMetric: true
  },
  {
    label: "Execution Standards",
    value: "Quality",
    unit: "Conscious",
    subtitle: "Organized workmanship & supervised on-site construction",
    isMetric: true
  },
  {
    label: "Project Management",
    value: "Structured",
    unit: "Coordination",
    subtitle: "Coordinated planning from initial review to completion",
    isMetric: true
  },
  {
    label: "Service Breadth",
    value: "12 Services",
    unit: "Categories",
    subtitle: "Residential, commercial, structural & contracting services",
    isMetric: true
  }
]

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Homeowner Feedback",
    projectType: "Residential Construction",
    location: "Nachane, Ratnagiri",
    rating: 5,
    reviewText: "Nirman Infrastructure provided structured updates throughout the home construction process. The site coordination was organized and the team was responsive to our questions.",
    isPlaceholder: true
  },
  {
    id: "test-2",
    clientName: "Commercial Property Owner",
    projectType: "Commercial Building",
    location: "SV Road, Ratnagiri",
    rating: 5,
    reviewText: "Good coordination on layout planning and on-site execution for our commercial development. Professional communication and reliable milestone progress.",
    isPlaceholder: true
  },
  {
    id: "test-3",
    clientName: "Property Client",
    projectType: "Property Contracting",
    location: "Kuwarbav, Ratnagiri",
    rating: 5,
    reviewText: "The general contracting service helped streamline multiple construction activities under one team. Practical approach and dependable team.",
    isPlaceholder: true
  }
]

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What types of construction projects does Nirman Infrastructure handle?",
    answer: "Nirman Infrastructure Ratnagiri provides building construction services, property construction contracting, residential home building, commercial building construction, structure building, building erection, development, and general contracting across Ratnagiri.",
    category: "General"
  },
  {
    question: "Do you provide residential construction services in Ratnagiri?",
    answer: "Yes, residential construction and home-building contracting are key services. We assist clients from initial planning through structural execution and finishing.",
    category: "Construction"
  },
  {
    question: "Do you handle commercial building construction?",
    answer: "Yes, we undertake commercial construction projects for offices, retail spaces, and business premises with thoughtful planning and site coordination.",
    category: "Construction"
  },
  {
    question: "What does your general contracting service cover?",
    answer: "As general building contractors, we coordinate planning, on-site labor, materials, and trade execution to ensure an organized construction workflow based on project scope.",
    category: "Construction"
  },
  {
    question: "Can I discuss my project before finalizing any agreement?",
    answer: "Yes. We welcome prospective clients to our Nachane office or can arrange a site discussion to review your requirements, layout ideas, and budget considerations.",
    category: "General"
  },
  {
    question: "How can I request a quotation or consultation?",
    answer: "You can reach us at +91 7447849574 or submit our online enquiry form with your project details and location. Our team will get in touch to discuss the scope.",
    category: "Cost & Planning"
  },
  {
    question: "How do you approach construction in Ratnagiri's monsoon climate?",
    answer: "We plan site work with attention to Ratnagiri's seasonal weather patterns, including proper drainage planning, surface curing management, and suitable weather-protective exterior coatings.",
    category: "Local Ratnagiri"
  },
  {
    question: "Where is Nirman Infrastructure located in Ratnagiri?",
    answer: "Our office is located at Office No. 06 & 07, First Floor, Indradhanu, Behind Chhatrapati Shivaji Maharaj Stadium, SV Rd, Hindu Colony, Abhyudhya Nagar, Nachane, Ratnagiri, Maharashtra 415612.",
    category: "General"
  }
]
