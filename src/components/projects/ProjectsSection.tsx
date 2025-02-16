import { IProjects } from '@/utils/interfaces';
import procjetsJsons from '../../data/projects.json';
import { ButtonSection } from '@/app/projects/components/ButtonSection';

export const  ProjectsSection = () => {
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
        {projects.map((project) => {
          const { name, description } = project;

          return (
            <div key={name} className='p-4 bg-gray-900 bg-opacity-75 border shadow border-[#4B5563] sm:w-[350px] rounded-lg'>
              <div>
                <div className='bg-red-400 w-full h-[200px] bg-poject-preview rounded-lg'></div>
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
          );
        })}
      </div>
    </div>
  );
}