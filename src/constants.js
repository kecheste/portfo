import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "./assets/img";

import alet from "./assets/img/alet.png";
import icog from "./assets/img/images.png";
import mini from "./assets/img/mini.png";
import tripbooka from "./assets/img/tripbooka.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "stacks",
    title: "Stacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Alet Technologies",
    icon: alet,
    iconBg: "#000000",
    date: "Jan 2023 – Apr 2024",
    points: [
      "Developed and maintained web applications using React.js and other modern technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and developers to build high-quality features.",
      "Contributed to 5 GitHub repositories with a 92% code accuracy rate, consistently meeting deadlines across team projects.",
      "Automated build processes using npm scripts, reducing deployment times by up to 9 days.",
      "Wrote and maintained 60+ unit tests with Jest, achieving 78% overall code coverage.",
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "miniExtensions for Airtable",
    icon: mini,
    iconBg: "#101010ff",
    date: "Mar 2023 – Jun 2024",
    points: [
      "Built reusable and type-safe UI components with React.js and TypeScript, enhancing maintainability and responsiveness.",
      "Created interactive Airtable-driven features like custom forms, gallery views, and PDF export functionality.",
      "Developed and optimized backend services using Node.js, Express.js, and Airtable APIs, improving scalability and system performance.",
      "Wrote unit and integration tests using Jest and React Testing Library, boosting system reliability and reducing bug rates.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "iCog Labs",
    icon: icog,
    iconBg: "#ffffffff",
    date: "May 2024 – Oct 2024",
    points: [
      "Collaborated on AI-powered applications, building responsive interfaces using React.js and Next.js.",
      "Integrated frontend dashboards with machine learning systems, enabling users to interact with NLP and computer vision services.",
      "Worked in Agile sprints with cross-functional teams, delivering production-ready features on time.",
      "Shipped client-facing portals and admin panels for AI applications, ensuring performance and usability.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "TripBooka (Upwork Contract)",
    icon: tripbooka,
    iconBg: "#000000ff",
    date: "Nov 2024 – Jun 2025",
    points: [
      "Developed and maintained core features of a lead management system using Next.js and Node.js, enabling agents to efficiently manage client proposals.",
      "Led the integration of dynamic form generation, PDF exports, and client-side validation workflows for seamless agent-client communication.",
      "Implemented CI/CD pipelines with GitHub Actions and ensured full test coverage, leading to a 30% reduction in deployment issues.",
      "Delivered all core features with zero major bugs reported in production, ensuring reliability and stakeholder satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
