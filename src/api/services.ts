// types
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image?: string;
}

// icons
import icon1 from "../images/service/1.svg";
import icon2 from "../images/service/2.svg";

// image
import ServiceImg1 from "../images/service-single/img-2.jpg";
import ServiceImg2 from "../images/service-single/img-3.jpg";
import ServiceImg3 from "../images/service-single/img-1.jpg";
import ServiceImg4 from "../images/service-single/img-4.jpg";

// data
const services: Service[] = [
  {
    id: 1,
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    description:
      "Keep your home spotless with thorough, reliable, and personalized cleaning services.",
    icon: icon1,
    image: ServiceImg1,
  },
  {
    id: 2,
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "Remove built-up dirt and grime with our detailed, top-to-bottom deep cleaning service.",
    icon: icon2,
    image: ServiceImg3,
  },
  {
    id: 3,
    title: "Move-In & Move-Out Cleaning",
    slug: "move-in-move-out-cleaning",
    description:
      "Leave every property fresh, sanitized, and ready for its next occupants.",
    icon: icon1,
    image: ServiceImg4,
  },
  {
    id: 4,
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    description:
      "Maintain a clean, healthy workplace with professional office and business cleaning.",
    icon: icon2,
    image: ServiceImg2,
  },
];

export default services;