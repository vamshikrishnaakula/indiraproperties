import project1 from "@/assets/main_features/main_kaman.png";
import project2 from "@/assets/sai_Happy_homes/Arch.png";
import project3 from "@/assets/main_features/11.png";
import project4 from "@/assets/main_features/10.png";

export interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  amenities: string[];
  locationAdvantages: string[];
  status: string;  
  mapEmbed: string;
  gallery: { src: string; alt: string }[] | string;
}

export const projects: Project[] = [
  {
    id: "Sai-Highway-Dream-Houses",
    name: "Sai Highway Dream Houses",
    location: "Nellore District, Gudur",
    image: project1,
    description:
      "Experience premium living at Indra Golden City — a thoughtfully planned gated community with world-class infrastructure, wide 40ft & 30ft BT roads, avenue plantation, and all modern amenities. Located on the booming Chillakuru Highway corridor with excellent connectivity.",
    amenities: [
      "Prime Location",
      "Excellent Connectivity",
      "Fast Developing Zone",
      "High Return Potential",
      "Peaceful Environment",
      "Children's Play Area",
      "Avenue Plantation",
      "Street Lights",
      "Community Hall",
    ],
    locationAdvantages: [
      "Nellore District, Gudur",
      "Behind Chillakuru Police Station",
      "Free Site Visit Available",
    ],
    status: "Open for Booking",
    gallery : [
      { src: project1, alt: "Sai Highway Dream Houses phase_1" },
      { src: project2, alt: "Sai Highway Dream Houses phase_2" },
    ],

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1072148006756!2d79.8678917!3d14.129791899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce30015c1ec49%3A0x5eb9eabdabb3f653!2sIndra%20properties!5e0!3m2!1sen!2sus!4v1775364422417!5m2!1sen!2sus",
  },
  {
    id: "Sai-Happy-Homes",
    name: "Sai Happy Homes",
    location: " Nellore District, Gudur",
    image: project2,
    description:
      "Nestled amidst lush greenery, Indra Green Valley offers a serene retreat with modern infrastructure. DTCP approved plots with clear titles, perfect for building your dream home in a peaceful environment close to nature.",
    amenities: [
      "Prime Location",
      "Excellent Connectivity",
      "Fast Developing Zone",
      "Bore Well Water Supply",
      "Children's Park",
      "Peaceful Environment",
      "Temple",
      "Street Lights",
      "Drainage System",
      "High Return Potential",
    ],
    locationAdvantages: [
      "Nellore District, Gudur",
      "Behind Chillakuru Police Station",
      "Free Site Visit Available",
    ],
    status: "Phase 3 Ongoing",
    status_1: "Phase 1 Completed",
    status_2: "Phase 2 Completed",
    gallery: "/Sai-homes-gallery",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1072148006756!2d79.8678917!3d14.129791899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce30015c1ec49%3A0x5eb9eabdabb3f653!2sIndra%20properties!5e0!3m2!1sen!2sus!4v1775364422417!5m2!1sen!2sus",
  },
];
