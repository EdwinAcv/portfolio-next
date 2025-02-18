import { ReactNode } from "react";

// **************skills**************
interface Skill {
    tittle: string;
    icon: ReactNode;
    color?: string;
  }
  
  interface SkillsCategory {
    web: Skill[];
    mobile: Skill[];
  }
  
  export interface SkillsData {
    frontEnd: SkillsCategory;
    backEnd: Skill[];
    dataBase: Skill[];
    design: Skill[];
    others: Skill[];
  }

// **************contact**************
interface ContactItem {
  label: string;
  value: string;
  icon: string;
}

export interface ContactData {
  contact: ContactItem[];
  social: ContactItem[];
}

// **************projects**************
interface Button {
  icon: string;
  tooltipName: string;
  disabled: boolean;
  typeAction: string;
  url?: string; // Optional property since not all buttons have a URL
}
export interface IProjects {
  name: string;
  description: string;
  images: string[];
  autoria: string;
  tecnologies?: { tittle: "Redux", icon: "redux.svg" }[];
  buttons: Button[];
}

