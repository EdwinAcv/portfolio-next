"use client"
import { ProjectsModal } from '@/utils/interfaces';
import { useState } from 'react'



export const GenericModal = ( { name, description, autoria, tecnologies }:ProjectsModal ) => {
    {
        const [isOpen, setIsOpen] = useState(false);
      
        return (
          <div className="">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Abrir Modal
            </button>
      
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[700px]">
                  <h2 className="text-xl font-bold"> { name } </h2>
                  <p className="mt-2 text-gray-600"> { description } </p>
                  <p className="mt-2 text-gray-600 font-bold"> Autoria: <span> { autoria } </span> </p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
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
    }
      