import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Carousel } from './Carousel';
import { IProjects } from '@/utils/interfaces';
import Image from 'next/image';
import { MyButton } from './MyButton';
import { TiDelete } from 'react-icons/ti';

interface IProjectsModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: IProjects;
}

  
  export const ProjectsModal = ( { isOpen, setIsOpen, data }:IProjectsModal ) => {
    const tecnologiesStyle = 'flex flex-wrap justify-center sm:justify-between';

    const { name, description, autoria, tecnologies, images } = data;
    return (
      <Dialog open={isOpen} onClose={()=>{ setIsOpen(false) }} className="relative z-20 ">
         <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 backdrop-blur-md duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
        />

        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-y-auto min-w-[50vw] my-auto max-h-[90vh] max-w-[90vw] sm:max-w-lg rounded-lg bg-gray-900 text-left  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
            >
             {/* content to display */}
              <div className='relative'>
                <div className='bg-gray-900 bg-opacity-60 z-10 sticky w-full p-2 top-0 flex flex-col items-end  '>
                  <MyButton icon={ <TiDelete size={40}/> } action={()=>{ setIsOpen(false) }}/>
                </div>

                <div className=''>

                  <Carousel images={images}/>
                  {/* info */}
                  <div className='m-8'>

                    <h2 className=" font-bold text-textPrimary font-primary text-[18px] sm:text-[24px] text-wrap"> { name } </h2>

                    <p className="mt-2  text-textPrimary font-primary text-[14px] sm:text-[16px]"> { description } </p>
                    <p className="mt-4  font-bold text-textPrimary font-primary"> Autoria: <span className='font-normal'> { autoria } </span> </p>
                    <div>
                      {
                        tecnologies && tecnologies.length > 1 && <div className='p-4 mb-4 mt-2 border bg-gradient3 rounded-md'>
                          <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[.8rem] sm:text-[1.2rem]'>Tecnologías utilizadas</h1>
            
                          <div className={`${tecnologiesStyle} gap-2`}>
                            {  tecnologies?.map( ( { tittle, icon } ) => {
                              return (
                                <div key={tittle} className="p-2 rounded-mdnt flex flex-col justify-between items-center min-h-[80px]">
                                  
                                  {
                                    !icon 
                                    ? <div className=' size-[25px] sm:size-[30px] bg-gray-400 rounded-lg'>
                                    </div>
                                    : <Image className=' size-[25px] sm:size-[30px]' loading='lazy' src={`/skills/${icon}`} alt={icon} width={30} height={30}/> 
                                  }
                                  <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary text-[12px] sm:text-[14px]'>{ tittle }</h2>
                                </div>
                              )
                            } ) }
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>

              </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
  }