"use client"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaRegFolderOpen } from 'react-icons/fa6';

import { MyButton } from "./MyButton"
import { GenericModal } from "@/components/GenericModal";
import { ProjectsModal } from "@/utils/interfaces";

export const ButtonSection = ( props: ProjectsModal ) => {
  return (
    <div className='flex justify-end gap-4 p-4'>
      <MyButton 
          icon={ <FaExternalLinkAlt size={25} /> }
          tooltipName='Ver sitio'
          action={ () => console.log('click') }
      />
      <MyButton 
          icon={ <FaRegFolderOpen size={25} /> }
          tooltipName='Más detalles'
          action={ () => console.log('click') }
      />
    <div>

      <GenericModal {...props} />
    </div>
    </div>
  )
}
