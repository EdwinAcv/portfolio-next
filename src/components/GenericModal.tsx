"use client"
import { Carousel } from '@/app/projects/components/Carousel';
import { ProjectsModal } from '@/utils/interfaces';
import Image from 'next/image';
import { useState } from 'react'

interface Modal {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: ProjectsModal;
}

export const GenericModal = (  {isOpen, setIsOpen, data}: Modal ) => {
  const tecnologiesStyle = 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ';
  const { name, description, autoria, tecnologies } = data;

  return (
    <div className="">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 m-4 p-6 rounded-lg shadow-lg w-[700px]">
            <h2 className=" font-bold text-textPrimary font-primary text-[24px]"> { name } </h2>

            <Carousel />

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
                        <div key={tittle} className="p-2 rounded-mdnt flex flex-col items-center">
                          
                          {
                            !icon 
                            ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                            </div>
                            : <Image className='' src={`/skills/${icon}`} alt={icon} width={35} height={35}/> 
                          }
                          <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                        </div>
                      )
                    } ) }
                  </div>
                </div>
              }
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}
      