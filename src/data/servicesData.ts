export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  subcategories: string[];
  description: string;
  image: string;
  features: string[];
  deliverables: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    tagline: 'Homes • Villas • Apartments',
    subcategories: ['Custom Independent Villas', 'Contemporary Residences', 'Gated Multi-Unit Enclaves'],
    description: 'We build residences tailored to your lifestyle, incorporating thermal efficiency, structural longevity, and bespoke architectural aesthetics designed for South Tamil Nadu climate.',
    image: '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
    features: [
      'Seismic-tested RCC framed structures using Fe550D grade steel',
      'Vastu-compliant architectural planning without compromising modern utility',
      'Advanced 3-tier moisture damp-proofing & foundation termite treatments',
      'High-performance acoustic and thermal insulation'
    ],
    deliverables: [
      'Comprehensive 3D Elevation & BIM Structural Blueprints',
      'Government Town Planning & DTCP Sanction Approvals',
      'Transparent Itemized Bill of Quantities (BoQ) with Zero Escalation Guarantee',
      '10-Year Structural Handover Warranty'
    ]
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    tagline: 'Offices • Shops • Showrooms',
    subcategories: ['Corporate Workspaces', 'Retail Showrooms', 'Hospitality & Healthcare Plazas'],
    description: 'High-traffic commercial structures engineered for optimum floor space efficiency, robust safety compliance, and striking contemporary facades that command brand authority.',
    image: '/src/assets/images/project_commercial_showroom_1790865311382.jpg',
    features: [
      'Long-span post-tensioned columns for flexible, column-free floor layouts',
      'Energy-efficient glass curtain walling and ventilated terracotta facades',
      'Complete MEP (Mechanical, Electrical, Plumbing) & Fire Sprinkler compliance',
      'Heavy-duty floor loading capacities with industrial screed finishes'
    ],
    deliverables: [
      'NBC (National Building Code) Safety & Fire NOC Compliance Documentation',
      'High-speed elevator and HVAC load engineering calculations',
      'Scheduled milestone-based construction with strict financial auditing',
      'Turnkey commercial occupancy readiness certification'
    ]
  },
  {
    id: 'interior',
    title: 'INTERIOR',
    tagline: 'Residential • Commercial • Fit-outs',
    subcategories: ['Luxury Living & Dining', 'Modular Gourmet Kitchens', 'Executive Corporate Suites'],
    description: 'Precision interior architecture that transforms spaces with curated materials, natural wood veneers, custom millwork, and layered architectural illumination.',
    image: '/src/assets/images/project_luxury_interior_1790865328364.jpg',
    features: [
      'Factory-finished modular joinery using marine-grade boiling waterproof (BWP) ply',
      'Concealed architectural lighting with high-CRI LEDs and mood programming',
      'Imported marble slab selection, book-matching, and dry-lay supervision',
      'Integrated acoustic treatments and concealed HVAC diffusers'
    ],
    deliverables: [
      'Photo-realistic 3D interior renders with exact material samples',
      'Detailed millwork cut-lists and electrical conduit layout schematics',
      'Hardware specification with 10-year Blum/Hafele hardware warranty',
      'Pristine site deep-cleaning prior to key handover'
    ]
  },
  {
    id: 'renovation',
    title: 'RENOVATION',
    tagline: 'Remodeling • Extensions • Upgrades',
    subcategories: ['Structural Strengthening', 'Vertical & Horizontal Expansions', 'Facade Modernization'],
    description: 'Breathe new life into aging structures with structural retrofitting, modernized floor plans, upgraded building services, and renewed architectural appeal.',
    image: '/src/assets/images/project_kavitha_house_1790865297735.jpg',
    features: [
      'Non-destructive rebound hammer structural integrity testing',
      'Carbon-fiber wrap & micro-concrete column jacketing for load upgrades',
      'Selective wall demolition with temporary steel shoring and load transfer',
      'Modern concealed rewiring and plumbing replacement without structural trauma'
    ],
    deliverables: [
      'Structural audit report by certified structural engineers',
      'Phased renovation roadmap minimizing disruption to surrounding premises',
      'Before & After 3D architectural spatial comparisons',
      'Comprehensive waterproofing guarantee on all modified roofs & terraces'
    ]
  },
  {
    id: 'project-management',
    title: 'PROJECT MANAGEMENT',
    tagline: 'Planning • Budget • Execution',
    subcategories: ['Site Supervision', 'Vendor & Procurement Auditing', 'Quality Control Inspections'],
    description: 'Rigorous construction management ensuring your build completes on schedule, within budgeted tolerances, and adhering to strict BIS civil engineering standards.',
    image: '/src/assets/images/hero_architectural_villa_1790865258276.jpg',
    features: [
      'Daily digital site logs, material consumption ledgers, and photographic records',
      'Mandatory cube-test slump checks for all concrete batches',
      'Strict site safety and personal protective equipment (PPE) protocols',
      'Proactive conflict resolution between structural, electrical, and plumbing trades'
    ],
    deliverables: [
      'Cloud client dashboard with weekly drone and progress video updates',
      'Detailed cash-flow forecasting aligned with construction milestones',
      'Batch test certificates for steel, cement, and aggregates',
      'Final comprehensive As-Built documentation dossier'
    ]
  },
  {
    id: 'turnkey',
    title: 'TURNKEY',
    tagline: 'Design → Construction → Handover',
    subcategories: ['End-to-End Single Point Responsibility', 'Approval to Grihapravesam', 'Fixed-Price Contract'],
    description: 'Experience complete peace of mind. From the initial soil test and municipal approvals through to civil construction, interior woodwork, and final key handover.',
    image: '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
    features: [
      'Single contract covering architectural design, approvals, civil build, and interiors',
      'Absolute protection against material market price volatility',
      'Dedicated senior Project Director as your single point of contact',
      'Guaranteed handover date with enforceable timeline commitments'
    ],
    deliverables: [
      'All local statutory body permits and utility connection clearances',
      'Fully furnished or semi-furnished readiness as per agreed contract',
      'Post-handover 12-month complimentary maintenance and touch-up visits',
      'Commemorative architectural documentation album of your building journey'
    ]
  }
];
