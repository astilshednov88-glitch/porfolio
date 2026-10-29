export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dotColor: string;
  description: string;
  image: string;
  video?: string;
  gallery?: string[];
  category?: string;
  focus?: string;
  type?: string;
  typeLabel?: string;
  discipline?: string;
  services?: string;
  client: string;
  year: string;
  role: string;
  challenge: string;
  outcome: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "motion-graphics-showreel",
    title: "Motion Graphics Showreel",
    subtitle: "Showreel & Highlights",
    date: "Featured Reel",
    dotColor: "#e02477", // Magenta
    category: "Motion Graphics",
    focus: "Animation & Visual Storytelling",
    description:
      "A showcase of my motion design, animation, and visual storytelling skills, combining clean illustrations, dynamic transitions, and engaging compositions to bring ideas to life. This reel highlights my approach to creating compelling visual content for brands, digital campaigns, and creative projects.",
    image: "/projects/showreel/thumbnail.jpeg",
    video: "/projects/showreel/showreel.mp4",
    gallery: [
      "/projects/showreel/thumbnail.jpeg",
      "/projects/showreel/gallery-1.jpeg",
      "/projects/showreel/gallery-2.jpeg",
      "/projects/showreel/gallery-3.jpeg"
    ],
    client: "Astil Shednov Studio",
    year: "2026",
    role: "Motion Design, Art Direction, 2D/3D Animation, Sound Design",
    challenge:
      "Crafting a fast-paced, emotionally resonant montage that encapsulates diverse stylistic languages—from clean geometric vector animations to cinematic lighting and tactile compositions.",
    outcome:
      "An award-caliber portfolio centerpiece showcasing versatile creative direction, seamless transitions, and high-production kinetic motion.",
    tags: ["Motion Graphics", "Showreel", "Animation", "Visual Storytelling", "Cinematic Visuals"]
  },
  {
    id: "02",
    slug: "sporto-neo-rib-vest",
    title: "Sporto Neo Rib Vest",
    subtitle: "AI Advertising Campaign",
    date: "Featured Campaign",
    dotColor: "#2563eb", // Royal Electric Blue
    type: "AI Advertisement",
    discipline: "Motion Graphics & AI Visuals",
    category: "AI Advertisement",
    focus: "Motion Graphics & AI Visuals",
    description:
      "An AI-driven advertising campaign for the Sporto Neo Rib Vest, combining cinematic visuals and realistic product storytelling to highlight comfort, fit, and flexibility through engaging lifestyle imagery.",
    image: "/projects/sporto-neo/thumbnail.jpeg",
    video: "/projects/sporto-neo/sporto-neo.mp4",
    gallery: [
      "/projects/sporto-neo/thumbnail.jpeg",
      "/projects/sporto-neo/gallery-1.jpeg",
      "/projects/sporto-neo/gallery-2.jpeg",
      "/projects/sporto-neo/gallery-3.jpeg"
    ],
    client: "Sporto",
    year: "2026",
    role: "AI Creative Direction, Motion Graphics, Prompt Engineering & Video Compositing",
    challenge:
      "Balancing photorealistic garment textures and natural fabric physics with fluid dynamic camera moves, achieving cohesive product fidelity across entirely AI-generated visual sequences.",
    outcome:
      "A high-performing lifestyle campaign delivering impactful commercial engagement with breakthrough visual realism and brand affinity.",
    tags: ["AI Advertisement", "Motion Graphics", "AI Visuals", "Cinematic Commercial", "Product Storytelling"]
  },
  {
    id: "03",
    slug: "ntt-data-business-solutions",
    title: "NTT DATA Business Solutions",
    subtitle: "Corporate Brand Film",
    date: "Featured Project",
    dotColor: "#0ea5e9", // Sky Blue / Tech Cyan
    type: "Corporate Brand Film",
    typeLabel: "Project type",
    services: "Motion Graphics & Video Editing",
    category: "Corporate Brand Film",
    focus: "Motion Graphics & Video Editing",
    description:
      "A corporate brand film showcasing NTT DATA Business Solutions’ global reach, technology expertise, and digital transformation capabilities. The video combines cinematic visuals, motion graphics, and dynamic typography to communicate innovation, connectivity, and business growth.",
    image: "/projects/ntt-data/thumbnail.jpeg",
    video: "/projects/ntt-data/ntt-data.mp4",
    gallery: [
      "/projects/ntt-data/thumbnail.jpeg",
      "/projects/ntt-data/gallery-1.jpeg",
      "/projects/ntt-data/gallery-2.jpeg",
      "/projects/ntt-data/gallery-3.jpeg"
    ],
    client: "NTT DATA Business Solutions",
    year: "2026",
    role: "Motion Graphics, Video Editing, Kinetic Typography & Color Grading",
    challenge:
      "Synthesizing enterprise digital infrastructure, global cloud capabilities, and complex digital transformation narratives into an engaging, cohesive brand anthem.",
    outcome:
      "A centerpiece corporate brand video widely adopted across global leadership summits, customer innovation hubs, and international marketing initiatives.",
    tags: ["Corporate Brand Film", "Motion Graphics", "Video Editing", "Dynamic Typography", "Digital Transformation"]
  },
  {
    id: "04",
    slug: "knightsbridge-resort",
    title: "Knightsbridge Resort",
    subtitle: "Promotional Film",
    date: "Featured Project",
    dotColor: "#f59e0b", // Warm Amber / Luxury Gold
    type: "Social Media Advertisement",
    typeLabel: "Project type",
    services: "Motion Graphics & Video Editing",
    category: "Social Media Advertisement",
    focus: "Motion Graphics & Video Editing",
    description:
      "A cinematic promotional video showcasing Knightsbridge Resort’s elegant architecture, premium hospitality, and luxurious atmosphere. The film combines scenic visuals, lifestyle storytelling, and refined cinematography to highlight the resort’s unique experience and appeal.",
    image: "/projects/knightsbridge/thumbnail.jpeg",
    video: "/projects/knightsbridge/knightsbridge.mp4",
    gallery: [
      "/projects/knightsbridge/thumbnail.jpeg",
      "/projects/knightsbridge/gallery-1.jpeg",
      "/projects/knightsbridge/gallery-2.jpeg",
      "/projects/knightsbridge/gallery-3.jpeg"
    ],
    client: "Knightsbridge Resort & Spa",
    year: "2026",
    role: "Cinematography Direction, Motion Graphics, Video Editing & Color Grading",
    challenge:
      "Capturing the delicate balance of architectural grandeur and intimate luxury lifestyle moments while maintaining optimal visual pacing tailored for social media engagement.",
    outcome:
      "An acclaimed high-engagement social campaign elevating brand prestige and driving direct booking interest across premium hospitality audiences.",
    tags: ["Social Media Advertisement", "Motion Graphics", "Video Editing", "Luxury Hospitality", "Cinematic Film"]
  }
];

export const servicesList = [
  "Motion Graphics & Animation",
  "Video Editing",
  "AI Video & Image Generation",
  "Social Media Content",
  "Creative Direction & Visual Storytelling",
  "Corporate & Explainer Videos",
  "Visual Effects & Compositing"
];

export const recognizedPublications = servicesList;

