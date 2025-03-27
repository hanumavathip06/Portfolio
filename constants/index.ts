import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed ,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FRONTEND_SKILL = {
  title: "Frontend Skills", // Added title for frontend skills
  skills: [
    {
      skill_name: "HTML",
      image: "html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "CSS",
      image: "css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "JavaScript",
      image: "js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind CSS",
      image: "tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      image: "react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next.js 14",
      image: "next.png",
      width: 80,
      height: 80,
    },
  ],
} as const;

export const BACKEND_SKILL = {
  title: "Backend Skills", // Added title for backend skills
  skills: [
    {
      skill_name: "Node.js",
      image: "node.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Express.js",
      image: "express.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "MongoDB",
      image: "mongodb.png",
      width: 40,
      height: 40,
    },
    {
      skill_name: "PostgreSQL",
      image: "postgresql.png",
      width: 70,
      height: 70,
    },
    {
      skill_name: "MySQL",
      image: "mysql.png",
      width: 70,
      height: 70,
    },
    {
      skill_name: "Prisma",
      image: "prisma.png",
      width: 70,
      height: 70,
    },
  ],
} as const;

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "E-COMMERCE WEBSITE",
    description:
      'WS( E-Commerce Website) Developed a digital website using HTML, CSS, and JavaScript. It is a user-friendly interface that uses Django and Python on the backend.Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "HOSTEL MANAGEMENT SYSTEM",
    description:
      'Management of Hostel Information The Hostel Management System simplifies student search, room availability, for both students and administrators. Using secure logins and user-friendly interfaces developed using Spring-Boot, Java, MongoDB. The system streamlines hostel management, enhancing efficiency and user experience.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/hanumavathip06",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/hanumavathi-pothuganti-879b83350/",
      },
      {
        name: "hanumavathipothuganti06@gmail.com",
        icon: RxEnvelopeClosed ,
        link: "hanumavathipothuganti06@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

