import Image from 'next/image';
import procjetsJsons from '../../data/projects.json';

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

            <div key={name} className='p-4 bg-gray-900 w-[400px]'>
              <div>
                <div className='bg-red-400 w-full h-[200px] bg-folder'>a</div>
                <h3 className='font-primary text-textPrimary'> { name } </h3>
              </div>

              <div className=' p-2'>
                <p className='font-primary text-textPrimary'> { description } </p>
              </div>

              <div className='text-right p-4'>
                <button className='text-textPrimary'>Ver mas</button>
              </div>
            </div>
          ) )
        }
      </div>
    </div>
  );
}