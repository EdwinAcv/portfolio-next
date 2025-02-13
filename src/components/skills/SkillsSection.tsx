import Image from 'next/image';
import  skills  from '../../data/skills.json';
import StarBorder from '../StarBorder';

export const SkillsSection = ()=> {


  const { tittle, subtittle, frontEnd, backEnd, dataBase, design, others } = skills;
  const { web } = frontEnd;
  const tecnologiesStyle = 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ';
  const mainContainerStyle = 'sm:grid-cols-1  lg:grid-cols-2 ';

  return (
    <div className='max-display'>
      <div className='m-4 p-4 sm:p-10 text-center font-mono'>
        <h1 className='sm:mb-2  text-[25px] font-semibold leading-5 text-textPrimary'> { tittle } </h1>
        <p className='text-[18px] text-textPrimary '>{ subtittle }</p>
      </div>

      {/* tecnologies */}
      <div className={`mx-4 grid ${mainContainerStyle} gap-2`}>
        {/* frontEnd */}
        <div className=''>
          {
            web.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
              <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Desarrollo Web</h1>

              <div className={`${tecnologiesStyle} gap-2`}>
                {  web.map( ( { tittle, icon } ) => {
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
        {/* backEnd */}
        <div className=''>
          {  backEnd.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
                <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Desarrollo BackEnd y APIs</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  backEnd.map( ( { tittle, icon } ) => {
                    return (
                      <div key={icon} className="p-2 roundegradient flex flex-col items-center">
                        
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
        {/* data base */}
        <div className=''>
          {  dataBase.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
                <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Bases de Datos</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  dataBase.map( ( { tittle, icon } ) => {
                    return (
                      <div key={tittle} className="p-2 rounded-mdt flex flex-col items-center">
                        
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
        {/* design */}
        <div className=''>
          {  design.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
                <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Diseño Web</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  design.map( ( { tittle, icon } ) => {
                    return (
                      <div key={tittle} className="p-2 rounded-md flex flex-col items-center">
                        
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
        {/* others */}
        <div className=''>
          {  others.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
                <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Otros</h1>

                <div className={`${tecnologiesStyle} gap-2`}>
                  {  others.map( ( { tittle, icon } ) => {
                    return (
                      <div key={tittle} className="p-2 rounded-md flex flex-col items-center">
                        
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
      </div>
    </div>
  );
}