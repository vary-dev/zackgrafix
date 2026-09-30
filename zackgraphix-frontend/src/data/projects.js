import mockup1 from "../assets/images/mockup_land1.jpg";
import mockup2 from "../assets/images/mockup2.webp";
import mockup3 from "../assets/images/mockup3.jpg";

export const projects = [
  {
    id: "brand-preview",
    title: "Brand identity study",
    category: "Branding",
    image: mockup1,
    alt: "Brand identity mockup",
  },
  {
    id: "digital-preview",
    title: "Digital experience",
    category: "Digital",
    image: mockup2,
    alt: "Digital design mockup",
  },
  {
    id: "visual-preview",
    title: "Visual storytelling",
    category: "Visual design",
    image: mockup3,
    alt: "Visual design mockup",
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];