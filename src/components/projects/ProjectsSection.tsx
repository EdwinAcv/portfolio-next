"use client";
import { IProjects } from '@/utils/interfaces';
import procjetsJsons from '../../data/projects.json';
import { ButtonSection } from '@/app/projects/components/ButtonSection';
import Image from 'next/image';
import FadeContent from '../FadeContent';

export const ProjectsSection = () => {

  const limitDescription =(desc: string) => {
    return desc.length > 160 ? `${desc.slice(0, 160)}...` : desc;
  }
  const { tittle, subtittle, projects } = procjetsJsons;

  return (
    <div className="max-display px-8 py-[45px] sm:py-[80px]">
      {/* header */}
      <div className='mb-8 text-center'>
        <h1 className='font-primary text-textPrimary text-[30px] font-bold'>{tittle}</h1>
        <h3 className='font-primary text-textSecondary'>{subtittle}</h3>
      </div>

      {/* projects */}
      <div className='flex flex-wrap justify-center sm:justify-around lg:justify-between items-center gap-8'>
        {projects.map((project, index) => {
          const { name, description, images } = project;
          return (
            <FadeContent key={name} blur={true} delay={index * 200} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className='p-4 bg-gray-900 bg-opacity-75 border shadow-white border-[#4B5563] sm:w-[350px] rounded-2xl'>
                <div>
                  <div className='relative   rounded-md overflow-hidden'>
                    <Image 
                      className=' object-contain ' 
                      src={`/projects/${images[0]}`} 
                      width={1800} 
                      height={956} 
                      alt={images[0]}
                    />
                  </div>
                </div>

                <div className=''>
                  <h3 className='font-primary font-bold text-textPrimary py-2'>{name}</h3>
                  <div className='min-h-[150px] overflow-hidden '>
                    <p className='font-primary text-textPrimary'>{limitDescription(description)}</p>
                  </div>
                  {/* buttons projects */}
                  <ButtonSection {...project as IProjects} />
                </div>
              </div>
            </FadeContent>
          );
        })}
      </div>
    </div>
  );
}