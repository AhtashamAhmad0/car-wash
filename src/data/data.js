// Central data source for ShineBay Car Wash — mock content, front-end only.

export const BUSINESS = {
  name: "ShineBay",
  tagline: "Car Wash & Detailing",
  phone: "0300-1234567",
  whatsapp: "923001234567", // international format, no +, for wa.me links
  email: "bookings@shinebay.pk",
  address: "Plot 14, Service Road, Bahria Town, Rawalpindi, Punjab",
  hours: "Mon – Sat, 9:00 AM – 8:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13276.0!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBahria+Town+Rawalpindi!5e0!3m2!1sen!2s!4v1700000000000",
};

export const SERVICES = [
  {
    id: "basic-wash",
    name: "Basic Car Wash",
    icon: "Droplets",
    description: "A quick, thorough exterior rinse and foam wash to clear off daily dust and grime.",
    price: 800,
    duration: 25,
    tag: "Most booked",
  },
  {
    id: "premium-wash",
    name: "Premium Car Wash",
    icon: "Sparkles",
    description: "Foam wash, tyre shine, dashboard wipe-down, and a light interior vacuum.",
    price: 1800,
    duration: 45,
    tag: "Popular",
  },
  {
    id: "exterior-wash",
    name: "Exterior Wash",
    icon: "Car",
    description: "Hand wash, wheel cleaning and a spot-free rinse for the body and glass.",
    price: 1000,
    duration: 30,
  },
  {
    id: "interior-cleaning",
    name: "Interior Cleaning",
    icon: "Wind",
    description: "Full vacuum, seat and mat cleaning, dashboard and console detailing.",
    price: 1500,
    duration: 40,
  },
  {
    id: "full-detailing",
    name: "Full Car Detailing",
    icon: "Gem",
    description: "Complete interior and exterior detail — the works, inside and out.",
    price: 5000,
    duration: 120,
    tag: "Best value",
  },
  {
    id: "wax-polish",
    name: "Wax & Polish",
    icon: "Disc3",
    description: "Machine polish followed by a protective wax coat for a mirror finish.",
    price: 3000,
    duration: 90,
  },
  {
    id: "engine-cleaning",
    name: "Engine Bay Cleaning",
    icon: "Cog",
    description: "Careful degreasing and cleaning of the engine bay, safe for electronics.",
    price: 1200,
    duration: 35,
  },
  {
    id: "tire-wheel",
    name: "Tire & Wheel Cleaning",
    icon: "CircleDot",
    description: "Deep clean for rims and tyres with a long-lasting tyre-black finish.",
    price: 600,
    duration: 20,
  },
  {
    id: "ceramic-protection",
    name: "Ceramic Protection",
    icon: "ShieldCheck",
    description: "A ceramic coat that shields your paint from sun, rain and road grime.",
    price: 8000,
    duration: 180,
    tag: "Premium",
  },
];

export const VEHICLE_TYPES = [
  {
    id: "small-car",
    name: "Small Car",
    examples: "Hatchbacks, Small Sedans",
    suitable: "Basic Wash, Premium Wash, Full Detailing",
    startingPrice: 800,
    time: "25–60 min",
  },
  {
    id: "sedan",
    name: "Sedan",
    examples: "Standard & Executive Sedans",
    suitable: "All Services & Packages",
    startingPrice: 1000,
    time: "30–75 min",
  },
  {
    id: "suv",
    name: "SUV",
    examples: "Compact & Large SUVs",
    suitable: "All Services & Packages",
    startingPrice: 1300,
    time: "35–90 min",
  },
  {
    id: "luxury",
    name: "Luxury / Premium",
    examples: "Premium Sedans, Luxury SUVs",
    suitable: "Detailing, Wax & Ceramic Protection recommended",
    startingPrice: 1500,
    time: "45–180 min",
  },
];

// Vehicle-based pricing matrix (Rs.)
export const PRICING_MATRIX = [
  { vehicle: "Small Car", basic: 800, premium: 1500, detailing: 4000 },
  { vehicle: "Sedan", basic: 1000, premium: 1800, detailing: 5000 },
  { vehicle: "SUV", basic: 1300, premium: 2200, detailing: 6000 },
  { vehicle: "Luxury", basic: 1500, premium: 2500, detailing: 8000 },
];

export const PACKAGES = [
  {
    id: "basic",
    name: "Basic Wash",
    price: 800,
    highlight: false,
    features: ["Exterior Wash", "Tyre Cleaning", "Hand Drying", "Basic Interior Vacuum"],
  },
  {
    id: "premium",
    name: "Premium Wash",
    price: 1800,
    highlight: true,
    features: [
      "Exterior Wash",
      "Interior Cleaning",
      "Tyre & Wheel Cleaning",
      "Dashboard Cleaning",
      "Wax Treatment",
    ],
  },
  {
    id: "full-detailing",
    name: "Full Detailing",
    price: 5000,
    highlight: false,
    features: [
      "Complete Exterior Wash",
      "Deep Interior Cleaning",
      "Machine Polish",
      "Wax Coating",
      "Tyre Treatment",
      "Interior Protection",
    ],
  },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Choose Your Service", text: "Pick the wash or detailing service that suits your vehicle." },
  { step: "02", title: "Select Date & Time", text: "Choose a convenient day and an open time slot at our bay." },
  { step: "03", title: "Enter Your Details", text: "Tell us about you and your vehicle so we're ready when you arrive." },
  { step: "04", title: "Confirm Booking", text: "Review everything on the summary screen before you send it in." },
  { step: "05", title: "Visit ShineBay", text: "Arrive at your slot and get your vehicle professionally serviced." },
];

export const WHY_CHOOSE_US = [
  { icon: "Wrench", title: "Professional Equipment", text: "Industrial foam guns, vacuum systems & polishers." },
  { icon: "Users", title: "Experienced Staff", text: "Trained detailers who treat every vehicle with care." },
  { icon: "FlaskConical", title: "Premium Products", text: "pH-balanced shampoos safe for paint and interiors." },
  { icon: "Timer", title: "Fast Turnaround", text: "In and out without compromising on quality." },
  { icon: "Wallet", title: "Affordable Pricing", text: "Transparent, vehicle-based pricing, no surprises." },
  { icon: "BadgeCheck", title: "Quality Guarantee", text: "Not happy? We'll make it right, free of charge." },
];

export const TESTIMONIALS = [
  {
    name: "Muhammad Ali",
    vehicle: "Toyota Corolla",
    rating: 5,
    review: "My car looked brand new after the detailing. Booking online took two minutes.",
  },
  {
    name: "Ayesha Khan",
    vehicle: "Honda City",
    rating: 5,
    review: "The premium wash is worth every rupee. The team is quick and genuinely careful.",
  },
  {
    name: "Bilal Hassan",
    vehicle: "Suzuki Swift",
    rating: 4,
    review: "Easy time-slot picker showed exactly which slots were free. Smooth experience.",
  },
  {
    name: "Fatima Raza",
    vehicle: "Toyota Fortuner",
    rating: 5,
    review: "Ceramic protection service on my SUV came out flawless. Booking again next month.",
  },
];

export const GALLERY = [
  { id: 1, label: "Foam Wash", category: "Exterior" },
  { id: 2, label: "Before / After", category: "Detailing" },
  { id: 3, label: "Interior Detailing", category: "Interior" },
  { id: 4, label: "Wheel Cleaning", category: "Exterior" },
  { id: 5, label: "Polishing", category: "Detailing" },
  { id: 6, label: "Car Drying", category: "Exterior" },
  { id: 7, label: "Dashboard Care", category: "Interior" },
  { id: 8, label: "Ceramic Coating", category: "Detailing" },
];

export const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

// Mock booking availability keyed by date (YYYY-MM-DD). Any date not listed
// is treated as fully open except for the two demo slots below repeating.
export const MOCK_UNAVAILABLE = {
  default: ["11:00 AM", "03:00 PM"],
};

export function getUnavailableSlots(dateStr) {
  return MOCK_UNAVAILABLE[dateStr] || MOCK_UNAVAILABLE.default;
}
