import { IconType } from "react-icons";

declare type Skill = {
  Icon: IconType;
  name: string;
};

declare type TechnologyCategory = {
  name: string;
  skills: Skill[];
};
