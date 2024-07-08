import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { BsAndroid } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiAstro,
  SiTauri,
  SiStyledcomponents,
  SiReact,
  SiZod,
  SiReacthookform,
  SiShadcnui,
  SiMui,
  SiNextui,
  SiNodedotjs,
  SiKotlin,
  SiReactquery,
  SiGit,
  SiDocker,
  SiNotion,
  SiGithub,
} from "react-icons/si";

export const GithubProfileUrl = "https://github.com/renatorrocha";
export const LinkedInProfileUrl =
  "https://www.linkedin.com/in/renato-rrodrigues/";

export const MySkills = [
  {
    name: "Languages",
    skills: [
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiHtml5, name: "Html5" },
      { icon: SiCss3, name: "Css3" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiNodedotjs, name: "Node" },
      { icon: FaJava, name: "Java" },
      { icon: SiKotlin, name: "Kotlin" },
    ],
  },

  {
    name: "Libs",
    skills: [
      { icon: SiReact, name: "React" },
      { icon: SiStyledcomponents, name: "Styled Components" },
      { icon: SiZod, name: "Zod" },
      { icon: SiReacthookform, name: "Hook Form" },
      { icon: SiShadcnui, name: "Shadcn-Ui" },
      { icon: SiMui, name: "Mui" },
      { icon: SiNextui, name: "Next-Ui" },
      { icon: SiReactquery, name: "React Query" },
    ],
  },

  {
    name: "Frameworks",
    skills: [
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiVite, name: "Vite" },
      { icon: SiNextdotjs, name: "Next" },
      { icon: SiAstro, name: "Astro" },
      { icon: SiTauri, name: "Tauri" },
    ],
  },

  {
    name: "Tools",
    skills: [
      { icon: SiGit, name: "Git" },
      { icon: SiNotion, name: "Notion" },
      { icon: SiGithub, name: "Github" },
      { icon: SiDocker, name: "Docker" },
      { icon: BsAndroid, name: "Android Studio" },
    ],
  },
];
