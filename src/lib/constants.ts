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
    {
      href: "/blog",
      icon: FileTextIcon,
      label: "Blog",
    },
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
};
