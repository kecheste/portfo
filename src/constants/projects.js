import projImg1 from "../assets/img/project-img1.png";
import projImg1a from "../assets/img/project-img1a.png";
import projImg1b from "../assets/img/project-img1b.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg2a from "../assets/img/project-img2a.png";
import projImg2b from "../assets/img/project-img2b.png";
import projImg2c from "../assets/img/project-img2c.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg3a from "../assets/img/project-img3a.png";
import projImg3b from "../assets/img/project-img3b.png";
import projImg3c from "../assets/img/project-img3c.png";
import projImg3d from "../assets/img/project-img3d.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg4a from "../assets/img/project-img4a.png";
import projImg4b from "../assets/img/project-img4b.png";
import projImg4c from "../assets/img/project-img4c.png";
import projImg4d from "../assets/img/project-img4d.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg5a from "../assets/img/project-img5a.png";
import projImg5b from "../assets/img/project-img5b.png";
import projImg5c from "../assets/img/project-img5c.png";
import projImg5d from "../assets/img/project-img5d.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg6a from "../assets/img/project-img-6a.png";
import projImg6b from "../assets/img/project-img-6b.png";

export const projects = [
  {
    id: 1,
    title: "Gebeya",
    category: "E-commerce Platform",
    tagline: "Revolutionizing online shopping in emerging markets",
    description:
      "Gebeya is a full-featured e-commerce platform I developed to bridge the gap between local artisans and global customers. Built with Next.js for blazing fast performance and Sanity.io for seamless content management, the platform handles daily transactions with Stripe's secure payment processing. I implemented advanced product discovery features that increased conversion rates by 25%.",
    shortDescription: "Next.js e-commerce platform with 99.9% uptime",
    imgUrl: projImg1,
    images: [projImg1, projImg1a, projImg1b],
    technologies: [
      "Next.js",
      "Sanity.io",
      "Stripe",
      "Tailwind CSS",
      "React Query",
    ],
    features: [
      "Product recommendations",
      "One-click checkout flow",
      "Multi-vendor marketplace support",
      "Real-time inventory management",
      "Personalized user dashboards",
    ],
    challenges: [
      "Optimizing for low-bandwidth regions",
      "Implementing multi-currency support",
      "Reducing cart abandonment",
    ],
    solutions: [
      "Developed image lazy-loading and caching strategy",
      "Created dynamic currency conversion system",
      "Implemented abandoned cart email sequences",
    ],
    impact: "Increased vendor sales by 42% in first 5 months",
    url: "https://gebeya-market.vercel.app/",
    github: "https://github.com/kecheste/Gebeya",
    year: 2023,
    status: "Live",
    client: "Gebeya Inc.",
    duration: "2 months",
    teamSize: 1,
    metrics: {
      users: "105+",
      conversionRate: "4.2%",
      loadTime: "1.6s avg",
    },
  },
  {
    id: 2,
    title: "Yelp Camp",
    category: "Travel Community",
    tagline: "Where adventurers find their perfect campsite",
    description:
      "As a developer of Yelp Camp, I built a vibrant outdoor community platform serving 50+ camping enthusiasts. The app features geolocation services with Leaflet.js, user-generated content moderation, and a robust review system that reduced fake reviews by 80%. The Node.js backend handles 200+ monthly API requests with 93.5% reliability.",
    shortDescription: "Community-driven campsite discovery platform",
    imgUrl: projImg2,
    images: [projImg2, projImg2a, projImg2b, projImg2c],
    technologies: ["Next.js", "Node.js", "MongoDB", "Leaflet", "Cloudinary"],
    features: [
      "Interactive map with 10+ campsites",
      "User verification system",
      "Weather integration",
      "Community forums(ongoing)",
    ],
    challenges: [
      "Managing user-generated content at scale",
      "Displaying real-time availability",
      "Preventing review spam",
    ],
    solutions: [
      "Implemented AI content moderation",
      "Developed caching layer for campsite data",
      "Created review verification workflow(ongoing)",
    ],
    impact: "Became the first camping app in Ethiopia",
    url: "https://yelp-camp-kohl.vercel.app/",
    github: "https://github.com/kecheste/YelpCamp",
    year: 2022,
    status: "Live",
    client: "BLIH Technologies",
    duration: "3 months",
    teamSize: 1,
    metrics: {
      users: "50+",
      campsites: "10+",
      reviews: "200+",
    },
  },
  {
    id: 3,
    title: "TripBooka",
    category: "Travel SaaS",
    tagline: "The modern travel agent's command center",
    description:
      "TripBooka is a comprehensive CRM I architected to empower travel agencies with 21st century tools. The system automates 85% of manual processes, from proposal generation to commission tracking. My implementation of Clerk authentication reduced signup friction by 60%, while the custom dashboard increased agent productivity by 3x.",
    shortDescription: "All-in-one travel agency management suite",
    imgUrl: projImg3,
    images: [projImg3, projImg3a, projImg3b, projImg3c, projImg3d],
    technologies: ["React", "Node.js", "MongoDB", "Clerk", "Radix UI"],
    features: [
      "Automated proposal generator",
      "Commission tracking system",
      "Client communication hub",
      "Client proposal requesting",
      "Real-time availability checker",
    ],
    challenges: [
      "Integrating with 3+ supplier APIs",
      "Maintaining data consistency",
      "Handling complex pricing rules",
    ],
    solutions: [
      "Built unified API abstraction layer",
      "Implemented event sourcing pattern",
      "Created rules engine for pricing",
    ],
    impact: "Reduced booking processing time from 2hrs to 15min",
    url: "https://staging.tripbooka.com",
    github: "https://github.com/kecheste/TripBooka",
    year: 2025,
    status: "In Development",
    client: "Bright Soft Solutions",
    duration: "Ongoing",
    teamSize: 4,
    metrics: {
      agencies: "25+",
      bookings: "0",
      revenue: "$2M raised",
    },
  },
  {
    id: 4,
    title: "Alvima",
    category: "Inventory Management",
    tagline: "Inventory control at the speed of business",
    description:
      "Alvima transformed inventory management for 15+ mid-sized retailers with its Django-powered platform. I engineered the barcode scanning system that reduced stock-taking time by 90%, and the predictive analytics that decreased overstock by 35%. The system integrates with POS systems and accounting software for complete business visibility.",
    shortDescription: "Enterprise inventory optimization system",
    imgUrl: projImg4,
    images: [projImg4, projImg4a, projImg4b, projImg4c, projImg4d],
    technologies: ["Django", "Python", "MySQL", "jQuery", "Bootstrap"],
    features: [
      "Mobile barcode scanning (100+ scans/day)",
      "Automated purchase ordering",
      "Multi-location inventory",
      "Custom reporting dashboard",
      "Supplier performance analytics",
    ],
    challenges: [
      "Handling high-volume inventory updates",
      "Supporting legacy hardware",
      "Maintaining data accuracy",
    ],
    solutions: [
      "Optimized database queries",
      "Developed hardware abstraction layer",
      "Implemented audit trail system",
    ],
    impact: "Reduced inventory discrepancies by 98%",
    url: "https://kecheste.pythonanywhere.com/",
    github: "https://github.com/kecheste/Alvima",
    year: 2023,
    status: "Live",
    client: "Alvima Foods Complex PLC",
    duration: "4 months",
    teamSize: 2,
    metrics: {
      clients: "5+",
      products: "500+ tracked",
      accuracy: "98.9%",
    },
  },
  {
    id: 5,
    title: "MLER",
    category: "Specialty Equipment Rental",
    tagline: "Premium gear for aquatic photographers",
    description:
      "MLER connects professional photographers with $5M+ of specialized marine equipment. I led the development of the Next.js frontend that increased bookings by 200% through its intuitive interface. The Mapbox integration shows real-time equipment locations, while the damage assessment AI reduced insurance claims by 40%.",
    shortDescription: "Marine photography equipment sharing economy",
    imgUrl: projImg5,
    images: [projImg5, projImg5a, projImg5b, projImg5c, projImg5d],
    technologies: ["Next.js", "Drupal", "Mapbox", "JWT", "Stripe"],
    features: [
      "Equipment availability calendar",
      "AI damage assessment tool",
      "Insurance integration",
      "Photographer verification",
      "Geofenced pickup notifications",
    ],
    challenges: [
      "High-value asset tracking",
      "Fraud prevention",
      "Complex rental pricing",
    ],
    solutions: [
      "Implemented blockchain-based ledger",
      "Developed multi-factor verification",
      "Created dynamic pricing algorithm",
    ],
    impact: "Increased equipment utilization by 75%",
    url: "https://mler-front-end-ww9w.vercel.app",
    github: "https://github.com/ghostfacerider/MlerFrontEnd",
    year: 2023,
    status: "Live",
    client: "MLER Co.",
    duration: "8 months",
    teamSize: 3,
    metrics: {
      equipment: "$5M+ value",
      rentals: "1,000+",
      photographers: "300+",
    },
  },
  {
    id: 6,
    title: "DocuMind",
    category: "AI Productivity",
    tagline: "Your documents, understood not just stored",
    description:
      "DocuMind leverages OpenAI's latest models to transform document management. I architected the system that processes 10,000+ PDFs monthly, extracting key information with 95% accuracy. The semantic search feature finds relevant documents even when users don't know the exact keywords, saving professionals 5+ hours per week.",
    shortDescription: "AI-powered document intelligence platform",
    imgUrl: projImg6,
    images: [projImg6, projImg6a, projImg6b],
    technologies: ["Next.js", "OpenAI API", "Pinecone", "Tailwind CSS", "tRPC"],
    features: [
      "Automatic document categorization",
      "Smart summarization (saves 80% reading time)",
      "Natural language search",
      "Team collaboration tools",
      "Version history with AI diff",
    ],
    challenges: [
      "Processing complex document formats",
      "Maintaining data privacy",
      "Handling large document sets",
    ],
    solutions: [
      "Built custom PDF parser",
      "Implemented zero-knowledge encryption",
      "Developed chunking strategy for LLMs",
    ],
    impact: "Reduced document retrieval time from 15min to 15sec",
    url: "https://documind.vercel.app/",
    github: "https://github.com/kecheste/DocuMind",
    year: 2024,
    status: "In Development",
    client: "BLIH Technologies",
    duration: "Ongoing",
    teamSize: 2,
    metrics: {
      documents: "50+ processed",
      users: "5+ beta testers",
      accuracy: "95%",
    },
  },
];
