import { skills } from '../../data/skills';
import { SiHtml5 } from 'react-icons/si';


export default function SkillsPage() {

  const { frontEnd, backEnd, dataBase, design, others } = skills;
  const { web } = frontEnd;

  const tecnologiesStyle = 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ';
  const mainContainerStyle = 'sm:grid-cols-1  lg:grid-cols-2 ';

  return (
    <>
      <h1 className='mt-2 text-[25px] font-semibold leading-5'>Tecnologias</h1>
      <p className='text-[18px] '>Estas son las tecnologias que manejo actualmente:</p>

      {/* tecnologies */}
      <div className={`grid ${mainContainerStyle} gap-2`}>
        {/* frontEnd */}
        <div className=''>
          {
            web.length > 1 && <div className='p-4 mb-4 bg-slate-400 rounded-md'>
              <h1 className='font-semibold mb-2'>Desarrollo Web</h1>

              <div className={`${tecnologiesStyle} gap-2`}>
                {  web.map( ( { tittle, icon } ) => {
                  return (
                    <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
                      
                      {
                        !icon 
                        ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                        </div>
                        : icon 
                      }
                      <h2 className='mt-2 uppercase font-mono font-semibold'>{ tittle }</h2>
                    </div>
                  )
                } ) }
              </div>
            </div>
          }

        </div>
        {/* backEnd */}
        <div className=''>
          {  backEnd.length > 1 && <div className='p-4 mb-4 bg-slate-400 rounded-md'>
                <h1 className='font-semibold mb-2'>Desarrollo BackEnd y APIs</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  backEnd.map( ( { tittle, icon } ) => {
                    return (
                      <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
                        
                        {
                          !icon 
                          ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                          </div>
                          : icon 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </div>
        {/* data base */}
        <div className=''>
          {  dataBase.length > 1 && <div className='p-4 mb-4 bg-slate-400 rounded-md'>
                <h1 className='font-semibold mb-2'>Bases de Datos</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  dataBase.map( ( { tittle, icon } ) => {
                    return (
                      <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
                        
                        {
                          !icon 
                          ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                          </div>
                          : icon 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </div>
        {/* design */}
        <div className=''>
          {  design.length > 1 && <div className='p-4 mb-4 bg-slate-400 rounded-md'>
                <h1 className='font-semibold mb-2'>Diseño Web</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  design.map( ( { tittle, icon } ) => {
                    return (
                      <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
                        
                        {
                          !icon 
                          ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                          </div>
                          : icon 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </div>
        {/* others */}
        <div className=''>
          {  others.length > 1 && <div className='p-4 mb-4 bg-slate-400 rounded-md'>
                <h1 className='font-semibold mb-2'>Otros</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  others.map( ( { tittle, icon } ) => {
                    return (
                      <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
                        
                        {
                          !icon 
                          ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                          </div>
                          : icon 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}