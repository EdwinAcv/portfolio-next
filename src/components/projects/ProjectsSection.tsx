import { IProjects } from '@/utils/interfaces';
import procjetsJsons from '../../data/projects.json';
import { ButtonSection } from '@/app/projects/components/ButtonSection';
import AnimatedContent from '../AnimatedContent';
import Image from 'next/image';

export const ProjectsSection = () => {
  const { tittle, subtittle, projects } = procjetsJsons;

  return (
    <div className="max-display p-8">
      {/* header */}
      <div className='my-8 text-center'>
        <h1 className='font-primary text-textPrimary text-[30px]'>{tittle}</h1>
        <h3 className='font-primary text-textPrimary'>{subtittle}</h3>
      </div>

      {/* projects */}
      <div className='flex flex-wrap justify-center sm:justify-around lg:justify-between items-center gap-8'>
        {projects.map((project, index) => {
          const { name, description, images } = project;
          console.log(images[0]);
          return (
            <AnimatedContent
              key={name}
              distance={150}
              direction="horizontal"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={index * 200} // Añadir un retraso de medio segundo por cada tarjeta
            >
              <div className='p-4 bg-gray-900 bg-opacity-75 border shadow border-[#4B5563] sm:w-[350px] rounded-lg'>
                <div>

                  {/* { images.length > 0 && <div className={`bg-red-400 w-full h-[200px] bg-[url(/${images[0]})]  bg-poject-preview rounded-lg`}></div> } */}
                  
                  <div className='w-full h-[200px] bg-poject-preview '>

                    <Image className=' h-full rounded-lg' src={`/${images[0]}`} width={350} height={0} alt={images[0]}/>
                  </div>
                </div>

                <div className=''>
                  <h3 className='font-primary font-bold text-textPrimary py-2'>{name}</h3>
                  <div className='min-h-[150px] overflow-hidden '>
                    <p className='font-primary text-textPrimary '>{description}</p>
                  </div>
                  {/* buttons projects */}
                  <ButtonSection {...project as IProjects} />
                </div>
              </div>
            </AnimatedContent>
          );
        })}
      </div>
    </div>
  );
}