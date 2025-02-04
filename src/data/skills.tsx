import { SkillsData } from "@/utils/interfaces";
import { SiCss3, SiHtml5, SiJavascript, SiMui, SiNextdotjs, SiQuasar, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";

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
        { tittle: "Node.js", icon: "" },
        { tittle: "Express.js", icon: "" },
        { tittle: "Nest.js", icon: "" },            
        { tittle: "Type ORM", icon: "" }            
    ],
    dataBase:[
        { tittle: "MS SQL Server", icon: "" },
        { tittle: "MySql", icon: "" },
        { tittle: "Postgres", icon: "" }
    ],
    design:[
        { tittle: "Figma", icon: "" },
        { tittle: "canvas", icon:  "" }
    ],
    others:[
        { tittle: "Git", icon: "" },
        { tittle: "Git Hub", icon: "" },
        { tittle: "Slack", icon: "" },
        { tittle: "Jira", icon: "" },
        { tittle: "Postman", icon: "" }
        
    ]
};
