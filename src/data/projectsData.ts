export interface Project {
  id: string;
  title: string;
  location: string;
  district: string;
  category: 'RESIDENTIAL' | 'COMMERCIAL' | 'INTERIOR' | 'RENOVATION';
  status: 'Completed' | 'In Progress';
  year: string;
  area: string;
  scope: string;
  heroImage: string;
  galleryImages: string[];
  excerpt: string;
  description: string;
  architecturalSolution: string;
  highlights: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  clientFeedback?: {
    quote: string;
    client: string;
    role: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'anbu-garden-villas',
    title: 'Anbu Garden Villas',
    location: 'Erode',
    district: 'Erode / South TN',
    category: 'RESIDENTIAL',
    status: 'Completed',
    year: '2024',
    area: '14,500 sq.ft',
    scope: 'Architectural Turnkey Construction',
    heroImage: '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
    galleryImages: [
      '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg',
      '/src/assets/images/project_luxury_interior_1790865328364.jpg',
    ],
    excerpt: 'A thoughtfully designed residential project combining contemporary architecture, functional planning and durable construction.',
    description: 'Anbu Garden Villas stands as a benchmark residential enclave engineered for multigenerational comfort. Built on expansive plots, the design emphasizes thermal comfort using aerated masonry, passive cross-ventilation, and expansive landscaped courtyards that frame natural light throughout the day.',
    architecturalSolution: 'Integrated cantilevered pergolas and deep overhangs reduce peak afternoon thermal gain by 4°C. The central double-height family atrium facilitates natural stack ventilation while establishing visual continuity across both levels.',
    highlights: [
      '8 Bespoke Luxury Contemporary Villa Units',
      'Engineered seismic-resistant RCC framed structural grid',
      'Double-glazed thermal acoustic aluminium fenestration',
      'Rainwater harvesting and integrated groundwater recharge wells'
    ],
    specifications: [
      { label: 'Structural Type', value: 'Seismic Zone III RCC Framed Structure' },
      { label: 'Built-up Area', value: '14,500 sq.ft (Combined Phase I)' },
      { label: 'Flooring', value: 'Italian Statuario & Imported Vitrified Slabs' },
      { label: 'Joinery', value: 'First-Class Burma Teakwood Doors & Frames' },
      { label: 'Completion Time', value: '14 Months (Handed over 2 weeks ahead)' }
    ],
    clientFeedback: {
      quote: 'From the initial structural layout to the final polish, Aranya Builders handled every single detail with military precision and pure transparency.',
      client: 'K. Anbuselvan',
      role: 'Villa Owner, Phase 1'
    }
  },
  {
    id: 'kavitha-house',
    title: 'Kavitha House',
    location: 'Tirunelveli',
    district: 'Tirunelveli',
    category: 'RESIDENTIAL',
    status: 'Completed',
    year: '2025',
    area: '4,200 sq.ft',
    scope: 'Custom Architectural Residence',
    heroImage: '/src/assets/images/project_kavitha_house_1790865297735.jpg',
    galleryImages: [
      '/src/assets/images/project_kavitha_house_1790865297735.jpg',
      '/src/assets/images/project_luxury_interior_1790865328364.jpg',
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg'
    ],
    excerpt: 'A contemporary private residence blending minimalist geometric geometry, local granite accents, and high-volume open-plan living.',
    description: 'Commissioned by a prominent medical practitioner family in Tirunelveli, Kavitha House balances privacy from the bustling avenue with expansive, sun-drenched internal living zones. Solid textured white plaster exterior walls contrast against warm timber louvers.',
    architecturalSolution: 'The orientation leverages the prevailing southern breeze from the Western Ghats. A customized courtyard with water cascades introduces evaporative cooling throughout the dry summer months.',
    highlights: [
      'Open-plan layout with uninterrupted 28-foot living spans',
      'Custom exterior motorized weather-proof timber screens',
      'Solar rooftop system delivering 7kW clean energy generation',
      'Bespoke automated entry gate and perimeter surveillance'
    ],
    specifications: [
      { label: 'Structural Type', value: 'Heavy-duty RCC with High-Grade Fe550D TMT' },
      { label: 'Built-up Area', value: '4,200 sq.ft across 2 levels' },
      { label: 'Finishes', value: 'Textured Mineral Plaster & Honed Granite' },
      { label: 'Plumbing & Bath', value: 'Grohe & Kohler concealed thermostatic fittings' },
      { label: 'Timeline', value: '11 Months' }
    ],
    clientFeedback: {
      quote: 'Managing construction while running our hospital was seamless because Aranya provided weekly digital reports and kept exact material records.',
      client: 'Dr. M. Kavitha',
      role: 'Homeowner, Tirunelveli'
    }
  },
  {
    id: 'sri-lakshmi-interior',
    title: 'Sri Lakshmi House Interior',
    location: 'Tirunelveli',
    district: 'Tirunelveli',
    category: 'INTERIOR',
    status: 'Completed',
    year: '2024',
    area: '3,800 sq.ft',
    scope: 'Complete Interior Architecture & Bespoke Millwork',
    heroImage: '/src/assets/images/project_luxury_interior_1790865328364.jpg',
    galleryImages: [
      '/src/assets/images/project_luxury_interior_1790865328364.jpg',
      '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg'
    ],
    excerpt: 'Warm minimalist interior transformation featuring hand-crafted teak veneer joinery, acoustic fluting, and tailored architectural lighting.',
    description: 'Sri Lakshmi House Interior represents our craft in bespoke interior engineering. The client required an uncluttered, serene living environment that could host family gatherings while providing quiet work-from-home suites with integrated acoustic baffling.',
    architecturalSolution: 'All cabinetry and storage were recessed flush into wall niches to preserve spatial purity. Concealed 2700K warm LED channels illuminate the natural grain of book-matched walnut veneers.',
    highlights: [
      'Bespoke kitchen with imported quartz countertops & Blum hardware',
      'Acoustic felt and wooden louver paneling in media lounge',
      'Custom fluted glass partitions preserving daylight distribution',
      'Comprehensive smart dimming scenes controlled via mobile app'
    ],
    specifications: [
      { label: 'Scope', value: 'Living, 4 Bedrooms, Modular Kitchen & Puja Suite' },
      { label: 'Materials', value: 'Teak Veneer, Italian Botticino Marble, Matte Brass' },
      { label: 'Hardware', value: 'Blum soft-close systems with lifetime warranty' },
      { label: 'Lighting', value: 'Architectural magnetic track & glare-free cob downlights' },
      { label: 'Execution', value: '75 Days on-site fit-out' }
    ],
    clientFeedback: {
      quote: 'The craftsmanship on the wood joinery and the lighting design transformed our house into an architectural sanctuary.',
      client: 'R. Srinivasan',
      role: 'Resident, Reddiarpatti'
    }
  },
  {
    id: 'justin-apartments',
    title: 'Justin Apartments',
    location: 'Thoothukudi',
    district: 'Thoothukudi',
    category: 'RESIDENTIAL',
    status: 'Completed',
    year: '2023',
    area: '18,500 sq.ft',
    scope: 'Multi-Family Residential Development',
    heroImage: '/src/assets/images/project_commercial_showroom_1790865311382.jpg',
    galleryImages: [
      '/src/assets/images/project_commercial_showroom_1790865311382.jpg',
      '/src/assets/images/project_anbu_garden_villas_1790865283364.jpg',
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg'
    ],
    excerpt: 'A 12-unit coastal residential development built with anti-saline corrosion protection and intelligent parking infrastructure.',
    description: 'Constructed within the coastal air environment of Thoothukudi, Justin Apartments prioritized high-durability concrete mix designs with fly-ash mineral admixtures to withstand marine chloride penetration.',
    architecturalSolution: 'Every apartment features double balconies facing southwest to harvest coastal evening breezes, reducing air conditioning load by over 30%.',
    highlights: [
      '12 spacious 3-BHK luxury apartments with dedicated stilt parking',
      'Corrosion-resistant epoxy-coated steel reinforcements',
      'Automated water-level controllers & dual filtration plant',
      '10-passenger high-speed automatic stretcher elevator'
    ],
    specifications: [
      { label: 'Building Height', value: 'Stilt + 4 Floors' },
      { label: 'Units', value: '12 Luxury 3-BHK Apartments' },
      { label: 'Concrete Spec', value: 'Ready-mix M30 with corrosion-inhibiting admixtures' },
      { label: 'Backup Power', value: '100% DG backup for common amenities & lifts' },
      { label: 'Approval Status', value: 'DTCP & RERA compliant handover' }
    ],
    clientFeedback: {
      quote: 'Aranya handled structural approvals, civil execution, and the finish with exemplary transparency. Zero cost creep.',
      client: 'Justin Paul',
      role: 'Developer & Property Owner'
    }
  },
  {
    id: 'apex-commercial-hub',
    title: 'Apex Commercial Hub & Showroom',
    location: 'Tenkasi',
    district: 'Tenkasi',
    category: 'COMMERCIAL',
    status: 'Completed',
    year: '2024',
    area: '9,500 sq.ft',
    scope: 'Commercial Plaza & Showroom Space',
    heroImage: '/src/assets/images/project_commercial_showroom_1790865311382.jpg',
    galleryImages: [
      '/src/assets/images/project_commercial_showroom_1790865311382.jpg',
      '/src/assets/images/project_luxury_interior_1790865328364.jpg',
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg'
    ],
    excerpt: 'A landmark multi-tenant commercial complex featuring structural double-glazed curtain walls and column-free floor plates.',
    description: 'Located along the main arterial corridor of Tenkasi, Apex Commercial Hub was designed to provide premium retail frontage on the lower levels and flexible corporate workspaces on the upper floors.',
    architecturalSolution: 'Post-tensioned RCC beams permitted wide 11-meter column-free spans, giving retail tenants complete freedom for storefront merchandising and flexible office cubicle layouts.',
    highlights: [
      'High-impact structural glass facade with low-E solar coatings',
      'Column-free interior spans optimized for high customer footfall',
      'Basement customer vehicle parking with hydraulic ramp clearance',
      'Integrated fire safety sprinkler system compliant with National Building Code'
    ],
    specifications: [
      { label: 'Configuration', value: 'Basement + Ground + 3 Upper Commercial Floors' },
      { label: 'Structural Grid', value: 'Post-tensioned long-span slab system' },
      { label: 'Facade', value: 'DGU Toughened Glass with Saint-Gobain Sunban coating' },
      { label: 'Accessibility', value: 'Universal barrier-free ramps and ADA compliant restrooms' }
    ]
  },
  {
    id: 'sylvan-heritage-renovation',
    title: 'Sylvan Heritage Residence Renovation',
    location: 'Kanniyakumari',
    district: 'Kanniyakumari',
    category: 'RENOVATION',
    status: 'Completed',
    year: '2023',
    area: '5,600 sq.ft',
    scope: 'Structural Retrofit & Modern Architectural Expansion',
    heroImage: '/src/assets/images/hero_architectural_villa_1790865258276.jpg',
    galleryImages: [
      '/src/assets/images/hero_architectural_villa_1790865258276.jpg',
      '/src/assets/images/project_kavitha_house_1790865297735.jpg',
      '/src/assets/images/project_luxury_interior_1790865328364.jpg'
    ],
    excerpt: 'Careful structural stabilization, roof modernization, and open-plan spatial reorganization of an ancestral heritage property.',
    description: 'The clients wished to preserve the ancestral character of their 40-year-old estate in Kanniyakumari while infusing contemporary open living, modern ensuite bathrooms, and modern foundation waterproofing.',
    architecturalSolution: 'Micro-concrete jacketing strengthened load-bearing masonry walls, enabling the removal of internal dividing partitions to create a panoramic sea-view sunroom.',
    highlights: [
      'Comprehensive structural retrofitting and foundation damp-proofing',
      'Restoration of antique Mangalore roof tile rafters with steel ties',
      'Integration of modern concealed HVAC and luxury sanitaryware',
      'Preservation of central traditional courtyard (Muttram) with motorized skylight'
    ],
    specifications: [
      { label: 'Type', value: 'Structural Strengthening & Modernization' },
      { label: 'Existing Footprint', value: '3,800 sq.ft expanded to 5,600 sq.ft' },
      { label: 'Waterproofing', value: 'Polymer-modified cementitious membrane across all wet areas' },
      { label: 'Handover', value: 'Completed within 6 Months' }
    ]
  }
];
