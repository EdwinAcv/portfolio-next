import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Carousel } from './Carousel';
import { IProjects } from '@/utils/interfaces';
import Image from 'next/image';
import { MyButton } from './MyButton';
import { TiDeleteOutline } from 'react-icons/ti';

interface IProjectsModal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: IProjects;
}

  
  export const ProjectsModal = ( { isOpen, setIsOpen, data }:IProjectsModal ) => {
    const tecnologiesStyle = 'flex flex-wrap justify-between';

    const { name, description, autoria, tecnologies } = data;
    return (
      <Dialog open={isOpen} onClose={()=>{}} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-y-auto hide-scrollbar  min-w-[50vw]  max-w-[90vw] max-h-[90vh] rounded-lg bg-gray-900 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
             
              <div className='m-8 relative'>
                <div className='bg-gray-800 absolute top-[-32px] right-[-32px]  '>
                  <MyButton icon={ <TiDeleteOutline size={40}/> } action={()=>{ setIsOpen(false) }}/>
                </div>

                <Carousel />
                <h2 className=" font-bold text-textPrimary font-primary text-[24px]"> { name } </h2>

                <p className="mt-2  text-textPrimary font-primary"> { description } </p>
                <p className="mt-4  font-bold text-textPrimary font-primary"> Autoria: <span className='font-normal'> { autoria } </span> </p>
                <div>
                  {/* <h3>Tecnologias utilizadas</h3> */}
                  {
                    tecnologies && tecnologies.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
                      <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Tecnologias utilizadas</h1>
        
                      <div className={`${tecnologiesStyle} gap-2`}>
                        {  tecnologies?.map( ( { tittle, icon } ) => {
                          return (
                            <div key={tittle} className="p-2 rounded-mdnt flex flex-col justify-between items-center min-h-[80px]">
                              
                              {
                                !icon 
                                ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                                </div>
                                : <Image className='' src={`/skills/${icon}`} alt={icon} width={30} height={30}/> 
                              }
                              <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary text-[14px]'>{ tittle }</h2>
                            </div>
                          )
                        } ) }
                      </div>
                    </div>
                  }
                </div>
              </div>

                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setIsOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>



             
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
  }