import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  description: string;
  amenities: string[];
  locationAdvantages: string[];
  plotSizes: string;
  totalPlots: number;
  status: string;
  mapEmbed: string;
}

export const projects: Project[] = [
  {
    id: "indra-golden-city",
    name: "Indra Golden City",
    location: "Hyderabad Highway, Vizag",
    price: "₹15,999/sq.yd onwards",
    image: project1,
    description:
      "Experience premium living at Indra Golden City — a thoughtfully planned gated community with world-class infrastructure, wide 40ft & 30ft BT roads, avenue plantation, and all modern amenities. Located on the booming Hyderabad Highway corridor with excellent connectivity.",
    amenities: [
      "Gated Community with 24/7 Security",
      "40ft & 30ft BT Roads",
      "Underground Drainage",
      "Overhead Water Tank",
      "Children's Play Area",
      "Avenue Plantation",
      "Street Lights",
      "Community Hall",
    ],
    locationAdvantages: [
      "5 mins from NH-44 Hyderabad Highway",
      "10 mins from Vizag Town",
      "Near Proposed Pharma City",
      "Close to Educational Institutions",
      "Upcoming Metro Connectivity",
      "Near IT Corridor",
    ],
    plotSizes: "150 - 500 sq.yds",
    totalPlots: 250,
    status: "Open for Booking",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160753!2d78.24323!3d17.2473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba12a3d70ffff%3A0x1!2sHyderabad!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "indra-green-valley",
    name: "Indra Green Valley",
    location: "Srisailam Highway, Kandukur",
    price: "₹9,999/sq.yd onwards",
    image: project2,
    description:
      "Nestled amidst lush greenery, Indra Green Valley offers a serene retreat with modern infrastructure. DTCP approved plots with clear titles, perfect for building your dream home in a peaceful environment close to nature.",
    amenities: [
      "DTCP Approved Layout",
      "30ft BT Roads",
      "Compound Wall",
      "Bore Well Water Supply",
      "Children's Park",
      "Temple",
      "Street Lights",
      "Drainage System",
    ],
    locationAdvantages: [
      "On Srisailam Highway",
      "15 mins from Kandukur Town",
      "Near Industrial Growth Corridor",
      "Close to Schools & Hospitals",
      "Proposed Ring Road Nearby",
      "Affordable Investment Zone",
    ],
    plotSizes: "120 - 400 sq.yds",
    totalPlots: 180,
    status: "Phase 2 Launching Soon",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160753!2d78.24323!3d17.2473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba12a3d70ffff%3A0x1!2sHyderabad!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "indra-hill-view",
    name: "Indra Hill View",
    location: "Amaravathi, Yadadri",
    price: "₹12,499/sq.yd onwards",
    image: project3,
    description:
      "Perched at a scenic hilltop location near the holy Amaravathi temple, Indra Hill View offers breathtaking panoramic views and a unique lifestyle opportunity. Fully developed plots with premium infrastructure in a rapidly appreciating zone.",
    amenities: [
      "Panoramic Hill Views",
      "Gated & Secured Layout",
      "40ft Main Road",
      "Underground Electricity",
      "Rainwater Harvesting",
      "Jogging Track",
      "Community Garden",
      "24/7 Water Supply",
    ],
    locationAdvantages: [
      "3 km from Amaravathi Temple",
      "Near Regional Ring Road",
      "20 mins from Guntur",
      "Close to Upcoming Airport City",
      "Near NIMZ Industrial Zone",
      "Excellent Capital Appreciation",
    ],
    plotSizes: "167 - 500 sq.yds",
    totalPlots: 200,
    status: "Selling Fast",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160753!2d78.24323!3d17.2473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba12a3d70ffff%3A0x1!2sHyderabad!5e0!3m2!1sen!2sin!4v1",
  },
];
