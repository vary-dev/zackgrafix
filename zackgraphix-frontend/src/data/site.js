export const roles = [
  {
    name: "Designers",
    key: "designer",
    color: "#FBE3CB",
    description: "Turn your visual ideas into a portfolio people remember.",
  },
  {
    name: "Developers",
    key: "developer",
    color: "#DDE3C2",
    description: "Show the products you build and the problems you solve.",
  },
  {
    name: "Young Leaders",
    key: "leader",
    color: "#F1E6BF",
    description: "Share your initiatives, leadership, and community impact.",
  },
  {
    name: "Innovation Hub",
    key: "hub",
    color: "#CFDCD3",
    description: "Connect your community with talent and opportunities.",
  },
];

// Fictional profiles for UI testing, not registered platform users.
export const talents = [
  {
    id: "demo-aline",
    name: "Aline Uwase",
    role: "designer",
    title: "Brand designer",
    location: "Kigali, Rwanda",
    skills: ["Brand identity", "Typography", "Illustration"],
    bio: "Demo profile showing how a designer can introduce their approach, skills, and selected work.",
    kycStatus: "verified",
    qualificationStatus: "passed",
    available: true,
    portrait: null,
    cover: null,
    projectIds: ["brand-preview", "visual-preview"],
  },
  {
    id: "demo-eric",
    name: "Eric Mugisha",
    role: "developer",
    title: "Frontend developer",
    location: "Musanze, Rwanda",
    skills: ["React", "JavaScript", "Accessibility"],
    bio: "Demo profile showing how a developer can present products, technical skills, and project contributions.",
    kycStatus: "verified",
    qualificationStatus: "passed",
    available: true,
    portrait: null,
    cover: null,
    projectIds: ["digital-preview"],
  },
  {
    id: "demo-keza",
    name: "Keza Ingabire",
    role: "leader",
    title: "Community organiser",
    location: "Kigali, Rwanda",
    skills: ["Leadership", "Communication", "Project coordination"],
    bio: "Demo profile showing how a young leader can describe initiatives and contributions.",
    kycStatus: "verified",
    qualificationStatus: "pending",
    available: false,
    portrait: null,
    cover: null,
    projectIds: [],
  },
  {
    id: "demo-hub",
    name: "Creative Hub",
    role: "hub",
    title: "Innovation community",
    location: "Rwanda",
    skills: ["Mentorship", "Collaboration", "Innovation"],
    bio: "Demo organisation profile. Replace this with the hub’s real mission, team, and programmes.",
    kycStatus: "unverified",
    qualificationStatus: "not_started",
    available: true,
    portrait: null,
    cover: null,
    projectIds: [],
  },
];

// Keep these empty until you have authoritative content.
export const opportunities = [];
export const partners = [];
export const metrics = null;

export const resources = [
  {
    id: "career",
    title: "Career tips",
    description: "Portfolio presentation, professional communication, and finding your next opportunity.",
    image: null,
  },
  {
    id: "skills",
    title: "Skill guides",
    description: "Practical learning paths and guidance for demonstrating your abilities.",
    image: null,
  },
  {
    id: "events",
    title: "Community events",
    description: "A place for future workshops, challenges, and community gatherings.",
    image: null,
  },
];