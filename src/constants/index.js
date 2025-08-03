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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Serverless Architecture & AWS Solutions",
    icon: mobile,
  },
  {
    title: "Backend API Developer",
    icon: backend,
  },
  {
    title: "Data Analysis & Visualization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: typescript,
  },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React Project",
    company_name: "3D Portfolio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developed an interactive 3D portfolio using React.js, Three.js, and React Three Fiber to showcase projects with immersive visuals and smooth animations.",
      "Implemented responsive 3D models and camera controls, enhancing user engagement and providing a modern, dynamic web experience.",
      "Utilized Vite for fast development and modular code structure, ensuring optimal performance and clean maintainability.",
      "Integrated Tailwind CSS and GSAP for sleek UI styling and fluid transitions between sections of the portfolio.",
    ],
  },
  {
    title: "Full Stack Project",
    company_name: "Result Management System",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Designed and developed a Result Management System to streamline student result handling for educational institutions during the internship.",
      "Built intuitive admin and student panels for managing marks, subjects, and student data using efficient form handling and validation.",
      "Implemented CRUD operations and role-based access, ensuring secure and organized data management across different user types.",
      "Collaborated with a team under real-world deadlines, applying best practices in full-stack development and project deployment.",
    ],
  },
  {
    title: "Data Analysis Project",
    company_name: "Cars24.com Web Scrapping",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Performed data cleaning, transformation, and visualization using tools like Python (Pandas, Matplotlib) and Excel to extract actionable insights.",
      "Performed data cleaning, transformation, and visualization using tools like Python (Pandas, Matplotlib) and Excel to extract actionable insights.",
      "Created interactive dashboards and reports using Power BI/Tableau to present data in a clear, impactful format for stakeholders.",
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
    name: "Result Management System",
    description:
      "Built a Result Management System as part of my internship to manage student records and results efficiently. Designed user-friendly interfaces for admins and students, implemented CRUD functionalities, and ensured secure data handling. The system streamlined result generation, updates, and access across multiple users with role-based permissions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
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
    source_code_link: "https://github.com/Anubhavsrivastava369/Result-Management-System",
  },
  {
    name: "Job Portal: Naukri4u",
    description:
      "Developed Naukari4u, a job portal during my internship, to connect job seekers with recruiters. Built using the MERN stack, it features user authentication, job posting, and application tracking. Designed intuitive interfaces for both candidates and employers, ensuring smooth navigation and real-time job updates.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Anubhavsrivastava369/Naukari4u_Job_portal",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
