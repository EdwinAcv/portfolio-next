import procjetsJsons from '../../data/projects.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { MyButton } from './components/MyButton';

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

      <div className='flex flex-col flex-wrap justify-center items-center gap-4'>
        {
          projects.map( ({ name, description, image, autoria, tecnologies }) => (
            // <div key={name} className='bg-cyan-900  flex p-4 gap-4'>
              
            //   <Image src={`/folder.png`} alt={name} width={250} height={250}/>
            //   <div className='bg-gray-300 rounded-md w-[250px] h-[32                                                                                                                                                                                                                                                                                                                                                     0px]'>

            //   </div>
            // </div>

            <div key={name} className='p-4 bg-gray-900 w-[400px] rounded-lg'>
              <div>
                <div className='bg-red-400 w-full h-[200px] bg-folder rounded-lg'></div>
                <h3 className='font-primary text-textPrimary'> { name } </h3>
              </div>

              <div className=' p-2'>
                <p className='font-primary text-textPrimary'> { description } </p>
              </div>

              {/* buttons projects */}
              <div className='flex justify-end gap-4 p-4'>
                <div className='relative group'>
                  <button className='text-gray-500 hover:text-white flex items-center gap-2'>
                    <FaExternalLinkAlt size={25} />
                    {/* <p>Enviar</p> */}
                  </button>
                  <span className='absolute bottom-full mb-2 hidden w-max px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:block group-hover:opacity-100'>
                    Ver sitio
                  </span>
                </div>

                
                
                <div className='relative group'>
                  <button className='text-gray-500 hover:text-white'>
                    <FaRegFolderOpen size={25} />
                  </button>
                  <span className='absolute bottom-full mb-2 hidden w-max px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:block group-hover:opacity-100'>
                    Más detalles
                  </span>
                </div>
              </div>
            </div>
          ) )
        }
      </div>
    </div>
  );
}