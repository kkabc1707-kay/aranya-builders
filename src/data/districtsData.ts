export interface DistrictInfo {
  id: string;
  name: string;
  role: string;
  activeProjects: number;
  highlight: string;
  coordinates: { x: number; y: number }; // percentage on stylized southern TN map
  focalServices: string[];
}

export const DISTRICTS_DATA: DistrictInfo[] = [
  {
    id: 'tirunelveli',
    name: 'Tirunelveli',
    role: 'Central Headquarters & Design Studio',
    activeProjects: 38,
    highlight: 'Headquarters located in Reddiarpatti. Full in-house structural, architectural, and civil engineering teams with rapid response coverage.',
    coordinates: { x: 50, y: 55 },
    focalServices: ['Custom Luxury Villas', 'Turnkey Commercial Spaces', 'Interior Architecture']
  },
  {
    id: 'tenkasi',
    name: 'Tenkasi',
    role: 'Western Foothills & Residential Hub',
    activeProjects: 16,
    highlight: 'Specialized in climate-resilient eco-luxury villas and commercial retail spaces optimized for the Western Ghats breezes.',
    coordinates: { x: 30, y: 45 },
    focalServices: ['Holiday Villas', 'Commercial Complexes', 'Heritage Renovations']
  },
  {
    id: 'thoothukudi',
    name: 'Thoothukudi',
    role: 'Coastal Port & Multi-Family Developments',
    activeProjects: 14,
    highlight: 'Engineered for marine durability using anti-saline concrete admixtures, epoxy-coated TMT bars, and rust-proof joinery.',
    coordinates: { x: 74, y: 50 },
    focalServices: ['Apartments & Flats', 'Industrial Warehouses', 'Marine-Grade Villas']
  },
  {
    id: 'virudhunagar',
    name: 'Virudhunagar',
    role: 'Commercial & Industrial Growth Corridor',
    activeProjects: 9,
    highlight: 'Delivering robust commercial showrooms, heavy-duty industrial structures, and modern urban residences.',
    coordinates: { x: 48, y: 22 },
    focalServices: ['Commercial Showrooms', 'Factory Sheds', 'Residential Bungalows']
  },
  {
    id: 'kanniyakumari',
    name: 'Kanniyakumari',
    role: 'Southern Coastline & Coastal Heritage',
    activeProjects: 11,
    highlight: 'Crafting signature sea-view residences and careful restorations of ancestral tiled homes with modern amenities.',
    coordinates: { x: 46, y: 88 },
    focalServices: ['Coastal Luxury Homes', 'Heritage Restorations', 'Turnkey Execution']
  }
];
