"use client"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaRegFolderOpen } from 'react-icons/fa6';

import { MyButton } from "./MyButton"
import { GenericModal } from "@/components/GenericModal";
import { ProjectsModal } from "@/utils/interfaces";
import { useState } from "react";

export const ButtonSection = ( data: ProjectsModal ) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const allProps = { isOpen, setIsOpen, data };

  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen)
  }

  return (
    <div className='flex justify-end gap-4 '>

        <MyButton 
          icon={ <FaRegFolderOpen size={30} /> }
          tooltipName='Más detalles'
          action={ openModal }
        />
        <MyButton 
            icon={ <FaExternalLinkAlt size={30} /> }
            tooltipName='Ver sitio'
            action={ () => console.log('click') }
        />
        
      <div>
        <GenericModal  {...allProps} />
      </div>
    </div>
  )
}
