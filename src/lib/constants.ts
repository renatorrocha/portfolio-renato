"use client";

import { TechnologyCategory } from "@/types/technology-category";
import { BsAndroid } from "react-icons/bs";
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

export const MySkills: TechnologyCategory[] = [
  {
    name: "Languages",
    skills: [
      { Icon: SiJavascript, name: "Javascript" },
      { Icon: SiHtml5, name: "Html5" },
      { Icon: SiCss3, name: "Css3" },
      { Icon: SiTypescript, name: "Typescript" },
      { Icon: SiNodedotjs, name: "Node" },
      { Icon: FaJava, name: "Java" },
      { Icon: SiKotlin, name: "Kotlin" },
    ],
  },

  {
    name: "Libs",
    skills: [
      { Icon: SiReact, name: "React" },
      { Icon: SiStyledcomponents, name: "Styled Components" },
      { Icon: SiZod, name: "Zod" },
      { Icon: SiReacthookform, name: "Hook Form" },
      { Icon: SiShadcnui, name: "Shadcn-Ui" },
      { Icon: SiMui, name: "Mui" },
      { Icon: SiNextui, name: "Next-Ui" },
      { Icon: SiReactquery, name: "React Query" },
    ],
  },

  {
    name: "Frameworks",
    skills: [
      { Icon: SiTailwindcss, name: "Tailwind" },
      { Icon: SiVite, name: "Vite" },
      { Icon: SiNextdotjs, name: "Next" },
      { Icon: SiAstro, name: "Astro" },
      { Icon: SiTauri, name: "Tauri" },
    ],
  },

  {
    name: "Tools",
    skills: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiNotion, name: "Notion" },
      { Icon: SiGithub, name: "Github" },
      { Icon: SiDocker, name: "Docker" },
      { Icon: BsAndroid, name: "Android Studio" },
    ],
  },
];
