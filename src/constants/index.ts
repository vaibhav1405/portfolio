// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Download Resume",
    link: "/resume.pdf", // Updated to your GitHub
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Integration Specialist",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
] as const;

// Experiences (Reversed)
export const EXPERIENCES = [
  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Delivered the VerseWalkers project as a full-stack developer, implementing scalable architecture solutions.",
      "Built a 3D virtual lab for pharmacy clients using Blender and Three.js for interactive scientific demonstrations.",
      "Specialized in MERN stack development with focus on performance optimization and user experience.",
      "Integrated AI technologies including OpenAI, Groq, and Gemini API for enhanced application functionality.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Quadfi Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2022 - September 2024",
    points: [
      "Led a team of developers, overseeing project delivery for key fintech solutions that leveraged AI and scalable architectures.",
      "Enhanced client experience and reduced processing times by 30% through innovative AI integration.",
      "Designed and implemented a proprietary loan algorithm for fintech products, integrating third-party APIs.",
      "Oversaw the end-to-end software development lifecycle (SDLC) using agile methodologies.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Ongraph Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2022",
    points: [
      "Performed as a full-stack developer, managing frontend and backend development across multiple web applications.",
      "Delivered high-performance user interfaces and backend services using modern web technologies.",
      "Optimised codebase by reducing redundancies and implementing best practices, resulting in 20% improvement in application efficiency.",
      "Enhanced performance through strategic code optimization and modern development methodologies.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Device Doctor Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2021 - June 2021",
    points: [
      "Engineered robust REST APIs for backend systems, facilitating efficient data management and reliable server-client communication.",
      "Enhanced overall data flow and system resilience through optimized API architecture.",
      "Conducted rigorous testing and debugging to bolster backend reliability, achieving a 15% reduction in system errors.",
      "Boosted operational efficiency through comprehensive quality assurance practices.",
    ],
  },
] as const;


// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Vaibhav's expertise in full-stack development and AI integration transformed our fintech platform beyond expectations.",
    name: "Mehdi Gaffari",
    designation: "CTO",
    company: "Quadfi Inc",
    image: user1,
  },
  {
    testimonial:
      "The 3D virtual lab Vaibhav created for our pharmacy demonstrations was innovative and exceeded all our requirements.",
    name: "Ankit Sharma",
    designation: "Founder",
    company: "VerseWalkers",
    image: user2,
  },
  {
    testimonial:
      "Vaibhav's technical leadership and problem-solving skills significantly improved our development efficiency and code quality.",
    name: "Priya Sharma",
    designation: "Product Manager",
    company: "Ongraph Technologies",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Quadfi Lending Platform",
    description:
      "A scalable lending platform built on MERN stack with AI-driven loan processing, reducing manual intervention by 30% and improving operational efficiency by 25%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ai-integration",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://quadfi.com/",
    live_site_link: "https://quadfi.com/",
  },
  {
    name: "Universal Credit System",
    description:
      "International credit scoring system enabling accurate financial assessments for global clients using advanced data processing algorithms and MERN stack technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://quadfi.com/",
    live_site_link: "https://quadfi.com/",
  },
  {
    name: "VerseWalkers",
    description:
      "A comprehensive full-stack application with scalable architecture, featuring modern web technologies and optimized performance for enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://versewalkers.com/",
    live_site_link: "https://versewalkers.com/",
  },
  {
    name: "3D Virtual Pharmacy Lab",
    description:
      "Interactive 3D virtual laboratory for pharmaceutical demonstrations built with Blender and Three.js, enabling immersive scientific learning experiences.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/vaibhavdadhich/3d-pharmacy-lab",
    live_site_link: "https://3d-pharmacy-lab.netlify.app/",
  },
  {
    name: "Quadfi Orange AI",
    description:
      "Advanced application management system with robust backend APIs and OpenAI integration, providing intelligent automation and enhanced functionality.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://quadfi.com/",
    live_site_link: "https://quadfi.com/",
  },
  {
    name: "Parcel Import/Export Platform",
    description:
      "Node.js and EJS-based parcel management platform for 9 to 5 Import, enhancing data processing efficiency and user engagement for import/export tracking.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://9-5import.com/",
    live_site_link: "https://9-5import.com/",
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/vaibhav27", // Updated to your LinkedIn
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/vaibhav1405", // Updated to your GitHub
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/vaib0x", // You can update this to your actual Twitter
  },
] as const;