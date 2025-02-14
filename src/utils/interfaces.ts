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
export interface IProjects {
  name: string;
  description: string;
  image?: string[];
  autoria: string;
  tecnologies?: { tittle: "Redux", icon: "redux.svg" }[];
}

