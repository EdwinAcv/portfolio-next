import { SkillsData } from "@/utils/interfaces";
import { FaDatabase } from "react-icons/fa6";
import { SiCanva, SiCss3, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiJira, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiQuasar, SiReact, SiRedux, SiSass, SiSlack, SiTailwindcss, SiTypeorm, SiTypescript, SiVuedotjs } from "react-icons/si";

const size = '35px';
export const skills: SkillsData = {
    

    frontEnd:{
        web: [
            { tittle: "HTML", icon: <SiHtml5 size={size} color="#E34F26"/>,  },
            { tittle: "CSS", icon: <SiCss3 size={size} color="#1572B6"/> },
            { tittle: "Material UI", icon: <SiMui size={size} color="#007FFF"/>, "color": "#007FFF" },
            { tittle: "Tailwind CSS", icon: <SiTailwindcss size={size} color="#06B6D4"/> },
            { tittle: "Quasar", icon: <SiQuasar size={size} color="#4695EB"/> },
            { tittle: "SASS CSS", icon: <SiSass size={size} color="#CC6699"/> },
            { tittle: "JavaScript", icon: <SiJavascript size={size} color="#F7DF1E"/> },
            { tittle: "TypeScript", icon: <SiTypescript size={size} color="#3178C6"/> },
            { tittle: "Next.js", icon: <SiNextdotjs size={size} color="#000000"/> },
            { tittle: "React.js", icon: <SiReact size={size} color="#61DAFB"/> },
            { tittle: "Vue.js", icon: <SiVuedotjs size={size} color="#4FC08D"/> },
            { tittle: "Redux", icon: <SiRedux size={size} color="#764ABC"/> }
        ],
        mobile:[
            
        ]
    },
    backEnd:[
        { tittle: "Node.js", icon: <SiNodedotjs size={size} color="#5FA04E"/> },
        // { tittle: "Express.js", icon: <SiNextdotjs size={size} color="#000000"/> },
        { tittle: "Nest.js", icon: <SiNestjs size={size} color="#E0234E"/> },            
        { tittle: "TypeORM", icon: <SiTypeorm size={size} color="#FE0803"/> }            
    ],
    dataBase:[
        { tittle: "SQLServer", icon: <FaDatabase size={size} color="#FE0803"/> },
        { tittle: "MySQL", icon: <SiMysql size={size} color="#4479A1"/> },
        { tittle: "Postgressql", icon: <SiPostgresql size={size} color="#4169E1"/> }
    ],
    design:[
        { tittle: "Figma", icon: <SiFigma size={size} color="#F24E1E"/> },
        { tittle: "canva", icon:  <SiCanva size={size} color="#00C4CC"/> }
    ],
    others:[
        { tittle: "Git", icon: <SiGit size={size} color="#F05032"/> },
        { tittle: "Git Hub", icon: <SiGithub size={size} color="#181717"/> },
        { tittle: "Slack", icon: <SiSlack size={size} color="#4A154B"/> },
        { tittle: "Jira", icon: <SiJira size={size} color="#0052CC"/> },
        { tittle: "Postman", icon: <SiPostman size={size} color="#FF6C37"/> }
        
    ]
};
