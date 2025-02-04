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
  
