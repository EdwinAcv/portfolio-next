import { FaCloudArrowDown } from 'react-icons/fa6';
import BgBlob from '../../public/aboutme/blob.svg';
import Image from 'next/image';
import { ContactSection } from './contact/components/ContactSection';
import StarBorder from '@/components/StarBorder';
export default function Home() {
  return (
    <>
      {/* about me */}
      <div className="max-display min-h-[400px] grid sm:grid-cols-1 md:grid-cols-2 items-center mt-10 p-4 ">
        <div>
          <h1 className="sm:text-[2.8rem] md:text-[5rem] leading-[4rem] text-textPrimary font-mono">!Hola, Soy Edwin Acevedo</h1>
          <h3 className='text-textPrimary font-mono sm:text-[0.938rem] md:text-[1.25rem] mt-4 pl-4'>Ingeniero en sistemas y desarrollador de software</h3>
          <br/>
          {/*  Button  */}
          <div className="flex">
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
            >
              <div className="flex items-center gap-2">
                <h3> Descargar CV</h3>
                <FaCloudArrowDown size={'30px'}/>
              </div>
            </StarBorder>

          </div>
        </div>
        
        {/* image or icon */}
        <div className="h-[100%] rounded-md flex justify-center">
          <Image src={'/aboutme/blobAndProgrammer.svg'} width={800} height={800} alt='blob'/>
        </div>

        
      </div>

      {/*****  section contact *****/}
      <div className='special-background min-w-full min-h-[100px]'>

        <ContactSection/>
      </div>
    </>
  );
}
