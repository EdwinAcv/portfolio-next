"use client"
import { FaExternalLinkAlt } from "react-icons/fa"
import { MyButton } from "./MyButton"

export const ButtonSection = () => {
  return (
    <div className='flex justify-end gap-4 p-4'>
    <MyButton 
        icon={ <FaExternalLinkAlt size={25} /> }
        tooltipName='Ver sitio'
        action={ () => console.log('click') }
    />
    <MyButton 
        icon={ <FaExternalLinkAlt size={25} /> }
        tooltipName='Más detalles'
        action={ () => console.log('click') }
    />
    </div>
  )
}
