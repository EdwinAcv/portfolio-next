import { ProjectsModal } from '@/utils/interfaces';
import procjetsJsons from '../../data/projects.json';
import { ButtonSection } from './components/ButtonSection';

export default function ProjectsPage() {
  const { tittle, subtittle, projects } = procjetsJsons;

  return (
    <div className="max-display border">
      {/* header */}
      <div className='my-8 text-center'>
        <h1 className='font-primary text-textPrimary text-[30px]'> { tittle } </h1>
        <h3 className='font-primary text-textPrimary'> { subtittle } </h3>
      </div>

      {/* projects */}

      <div className='flex  flex-wrap justify-center items-center gap-4'>
        {
          projects.map( ( project ) => {

            const { name, description } = project


            return <div key={name} className='p-4 bg-gray-900 w-[400px] rounded-lg'>
              <div>
                <div className='bg-red-400 w-full h-[200px] bg-folder rounded-lg'></div>
                <h3 className='font-primary text-textPrimary'> { name } </h3>
              </div>

              <div className=' p-2'>
                <p className='font-primary text-textPrimary'> { description } </p>
              </div>

              {/* buttons projects */}
              <ButtonSection { ...project  as ProjectsModal }/>

            </div>
           })
        }
      </div>
    </div>
  );
}