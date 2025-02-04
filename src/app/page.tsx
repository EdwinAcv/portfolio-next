import { FaCloudArrowDown } from 'react-icons/fa6';
// import { SiTypescript } from 'react-icons/si';
import img from '@/img/developer.webp';
import Image from 'next/image';
export default function Home() {
  return (
  <div className="min-h-[400px] grid grid-cols-2 items-center mt-10 p-4 ">
    <div>
      <h1 className="text-[5rem] leading-[4rem]">Full Stack Developer</h1>

      <br/>
      {/*  Button  */}
      <div className="flex">
        <div className="bg-[#F5F4D7] flex items-center gap-2 rounded-[10px] p-4 hover:cursor-pointer">
          <h3> Descargar CV</h3>
          <FaCloudArrowDown size={'30px'}/>
          
          
        </div>
      </div>
      {/* <button> Descargar CV </button> */}
    </div>
    
    {/* image or icon */}
    <div className="h-[100%] bg-fuchsia-100 rounded-md flex relative">
      {/* big circle */}
      <div className='bg-slate-500 size-[300px] rounded-full absolute left-[35%] transform -translate-x-[35%] top-[10px]'>
      </div>

      <div className='bg-slate-400 size-[150px] rounded-full absolute left-[65%] transform -translate-x-[65%] bottom-[10px]'>
      </div>
      
      <div className=' size-[350px] z-[-] rounded-full absolute left-[65%] transform -translate-x-[65%] bottom-[10px]'>
        <Image src={'/img/developer.webp'} width={100} height={100} alt='imagen'/>
      </div>
    </div>
  </div>
  );
}
