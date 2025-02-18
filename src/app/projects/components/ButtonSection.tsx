"use client"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaRegFolderOpen } from 'react-icons/fa6';
import { MyButton } from "./MyButton"
import { IProjects } from "@/utils/interfaces";
import { useState} from "react";
import { ProjectsModal } from "./ProjectsModal";

type TIcons = {
  [key:string]:JSX.Element;
}
const icons: TIcons= {
  folder: <FaRegFolderOpen size={30} />,
  link: <FaExternalLinkAlt size={30} />
}

export const ButtonSection = ( data: IProjects ) => {
  const [ isOpen, setIsOpen ] = useState(false);


  const allProps = { isOpen, setIsOpen, data };
  const { buttons } = data;

  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <div className='flex justify-end gap-4 '>
      {
        buttons.map( ( { icon, tooltipName, disabled, typeAction, url } ) => {
          return  !disabled && <MyButton 
              key={icon}
              icon={ icons[icon]  }
              tooltipName={tooltipName}
              action={ ()=> typeAction === 'link' ? window.open(url, '_blank') : openModal() }
            />
          
        })
      }
      <ProjectsModal { ...allProps } />
    </div>
  )
}