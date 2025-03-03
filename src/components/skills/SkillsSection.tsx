import Image from 'next/image';
import  skills  from '../../data/skills.json';
import AnimatedContent from '../AnimatedContent';

export const SkillsSection = ()=> {


  const { tittle, subtittle, frontEnd, backEnd, dataBase, design, others } = skills;
  const { web } = frontEnd;
  const tecnologiesStyle = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ';
  const mainContainerStyle = 'sm:grid-cols-1  lg:grid-cols-2 ';

  return (
    <div className='max-display py-[45px] sm:py-[80px]'>
      <div className='  mb-8 text-center font-mono'>
        <h1 className='sm:mb-2  text-[30px] font-semibold leading-5 text-textPrimary'> { tittle } </h1>
        <p className='text-[18px] text-textSecondary '>{ subtittle }</p>
      </div>

      {/* tecnologies */}
      <div className={`mx-4 grid ${mainContainerStyle} gap-2`}>
        {/* frontEnd */}
        <div className=''>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        >
          
          {
            web.length > 1 && <div className='p-4 mb-4 border bg-gradient2 rounded-md'>
              <h1 className='font-semibold mb-2 text-textPrimary font-mono text-[1.2rem]'>Desarrollo Web</h1>

              <div className={`${tecnologiesStyle} gap-2`}>
                {  web.map( ( { tittle, icon } ) => {
                  return (
                    <div key={tittle} className="p-2 rounded-mdnt flex flex-col items-center">
                      
                      {
                        !icon 
                        ? <div className='size-[30px] bg-gray-400 rounded-lg'>
                        </div>
                        : <Image loading='lazy' className='size-[35px]' src={`/skills/${icon}`} alt={icon} width={0} height={0}/> 
                      }
                      <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                    </div>
                  )
                } ) }
              </div>
            </div>
          }
        </AnimatedContent>

        </div>
        {/* backEnd */}
        <div className=''>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        >
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
                          : <Image loading='lazy' className='size-[35px]' src={`/skills/${icon}`} alt={icon} width={0} height={0}/> 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </AnimatedContent>

        </div>

        {/* data base */}
        <div className=''>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        > 
        
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
                          : <Image loading='lazy' className='size-[35px]' src={`/skills/${icon}`} alt={icon} width={0} height={0}/> 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </AnimatedContent>
        </div>

        {/* design */}
        <div className=''>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        > 
        
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
                          : <Image loading='lazy' className='size-[35px]' src={`/skills/${icon}`} alt={icon} width={0} height={0}/> 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </AnimatedContent>
        </div>
        {/* others */}
        <div className=''>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        > 
        
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
                          : <Image loading='lazy' className='size-[35px]' src={`/skills/${icon}`} alt={icon} width={0} height={0}/> 
                        }
                        <h2 className='mt-2 uppercase font-mono font-semibold text-textPrimary'>{ tittle }</h2>
                      </div>
                    )
                  } ) }
                </div>
            </div>
          }
        </AnimatedContent>
        </div>
      </div>
    </div>
  );
}