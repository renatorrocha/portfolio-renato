import {
  FileTextIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { GiNotebook } from "react-icons/gi";

export const BLUR_FADE_DELAY = 0.1;

// export const MySkills: TechnologyCategory[] = [
//   {
//     name: "Languages",
//     skills: [
//       { Icon: SiJavascript, name: "Javascript" },
//       { Icon: SiHtml5, name: "Html5" },
//       { Icon: SiCss3, name: "Css3" },
//       { Icon: SiTypescript, name: "Typescript" },
//       { Icon: SiNodedotjs, name: "Node" },
//       { Icon: FaJava, name: "Java" },
//       { Icon: SiKotlin, name: "Kotlin" },
//     ],
//   },

//   {
//     name: "Libs",
//     skills: [
//       { Icon: SiReact, name: "React" },
//       { Icon: SiStyledcomponents, name: "Styled Components" },
//       { Icon: SiZod, name: "Zod" },
//       { Icon: SiReacthookform, name: "Hook Form" },
//       { Icon: SiShadcnui, name: "Shadcn-Ui" },
//       { Icon: SiMui, name: "Mui" },
//       { Icon: SiNextui, name: "Next-Ui" },
//       { Icon: SiReactquery, name: "React Query" },
//     ],
//   },

//   {
//     name: "Frameworks",
//     skills: [
//       { Icon: SiTailwindcss, name: "Tailwind" },
//       { Icon: SiVite, name: "Vite" },
//       { Icon: SiNextdotjs, name: "Next" },
//       { Icon: SiAstro, name: "Astro" },
//       { Icon: SiTauri, name: "Tauri" },
//     ],
//   },

//   {
//     name: "Tools",
//     skills: [
//       { Icon: SiGit, name: "Git" },
//       { Icon: SiNotion, name: "Notion" },
//       { Icon: SiGithub, name: "Github" },
//       { Icon: SiDocker, name: "Docker" },
//       { Icon: BsAndroid, name: "Android Studio" },
//     ],
//   },
// ];

export const DATA = {
  name: "Renato Rocha Rodrigues",
  initials: "RR",
  avatarUrl: "/my-pic.jpg",
  resume:
    "I'm a passionate and dedicated **software developer**, constantly seeking to enhance my skills and tackle new technological challenges. Started my career as a **Mobile Developer** focused in _Android_ and now I'm a **Frontend Developer** focused in creating responsive and modern web applications using _React_.",
  description:
    "Software Developer focused in Frontend. Self-taught and always eager to learn new technologies.",
  role: "Software Developer",
  location: "Espirito Santo, Brazil",

  skills: [
    "React",
    "Next",
    "Typescript",
    "Tailwind",
    "Astro",
    "Vite",
    "Git",
    "Docker",
    "PostgreSQL",
    "Node",
    "Prisma",
    "Jest",
    "Java",
    "Kotlin",
    "Android",
    "Nginx",
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
    // {
    //   href: "/blog",
    //   icon: FileTextIcon,
    //   label: "Blog",
    // },
  ],
  contact: {
    email: "renatorrodrigues2002@gmail.com",
    phone: "(27) 99311-7272",
    social: {
      Linkedin: {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/renato-rrodrigues/",
        icon: LinkedInLogoIcon,
        navbar: true,
      },
      Github: {
        name: "Github",
        url: "https://github.com/renatorrocha",
        icon: GitHubLogoIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Foursys",
      href: "https://foursys.com.br/",
      badges: ["Kotlin", "Java", "Android"],
      location: "Sao Paulo, Brazil",
      title: "Mobile Developer",
      logoUrl: "/foursys.png",
      start: "April 2022",
      end: "Feb 2023",
      description: `Foursys offers services that cater to the different stages, needs, and challenges of their clients, regardless of the lifecycle stage of their solutions or the journey they propose to the market. I worked as a Mobile Development Intern for Android with Java. During the training, we covered:

      - Interface Design
      - Programming Logic
      - Java for Android
      - GIT for version control of developed code
      - Methodologies for managing Technology Projects
      
      > We used the following tools:
      
      - GitHub/GitLab - Repository
      - Android Studio - IDE
      - Agile Methodology - Scrum
      - Figma/Miro
      - Firebase`,
    },
    {
      company: "Findes",
      href: "https://findes.com.br/",
      badges: ["React", "Typescript", "Docker"],
      location: "Espirito Santo, Brazil",
      title: "Software Developer",
      logoUrl: "/findes.png",
      start: "Aug 2023",
      end: "Present",
      description: `Working on software development projects as a web development intern, focusing on the front-end with TypeScript, creating responsive screens aligned with client preferences and requests. Development of projects using:

      - React (with libraries like Zod and Hook Form)
      - Vite/Next
      - Zod
      - React Hook Form
      - Tanstack Query + Router
      - Styled-Components
      - Material UI
      - TypeScript
      - Docker
      - Agile Methodology`,
    },
  ],
  education: [
    {
      institution: "Multivix",
      href: "https://multivix.edu.br/",
      degree: "Software Analysis and Development",
      logoUrl: "/multivix.png",
      start: "Jul 2022",
      end: "Nov 2024",
    },
    {
      institution: "Rocketseat + Sirius",
      href: "https://www.rocketseat.com.br/",
      degree: "MBA in Fullstack Development",
      logoUrl: "/rocketseat.png",
      start: "Aug 2024",
      end: "Aug 2025",
    },
  ],
  projects: [
    {
      title: "ShowScout",
      href: "https://spot-show.vercel.app/",
      active: false,
      description:
        "**ShowScout** is a web application that allows users to log in with their _Spotify_ account and view upcoming shows of their favorite artists. The application leverages the **Spotify API** to fetch the list of artists the user follows and displays their upcoming concerts using the **TicketMaster API**.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "NextAuth",
        "Shadcn UI",
        "Spotify API",
        "TicketMaster API",
      ],
      links: [
        {
          type: "Website",
          href: "https://spot-show.vercel.app/",
        },
        {
          type: "Code",
          href: "https://github.com/renatorrocha/ShowScout",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dg Rei da Palha",
      href: "https://dg-rei-das-palhas.up.railway.app/",
      active: false,
      description:
        "A comprehensive website for a local confectionery company, featuring an engaging landing page for product showcase and a robust admin panel for efficient management of products and transactions.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Prisma",
        "Tanstack Query",
        "Shadcn UI",
        "Framer Motion",
        "React Hook Form",
        "Zod",
        "Railway",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://dg-rei-das-palhas.up.railway.app/",
        },
      ],
      image: "",
      video: "",
    },
  ],
};
