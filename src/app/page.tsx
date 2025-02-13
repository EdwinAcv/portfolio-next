import { FaCloudArrowDown } from 'react-icons/fa6';
import BgBlob from '../../public/aboutme/blob.svg';
import Image from 'next/image';
import { ContactSection } from './contact/components/ContactSection';
import StarBorder from '@/components/StarBorder';
import { SkillsSection } from '@/components/skills/SkillsSection';
export default function Home() {
  return (
    <>
      {/* about me */}
      <div className="max-display min-h-[400px] grid md:grid-cols-2 items-center mt-10 p-4 ">
        <div>
          <h1 className="text-[2.7rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[2.8rem] lg:leading-[4rem] text-textPrimary font-mono">!Hola, Soy Edwin Acevedo</h1>
          <h3 className='text-textSecondary font-mono text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] mt-4 pl-4'>Ingeniero en sistemas y desarrollador de software</h3>
          <br/>

          {/* description */}
          <div className='p-4 bg-black text-textPrimary text-[1rem] lg:text-[1.3rem] font-primary rounded-2xl leading-[1.2rem] lg:leading-[1.3rem]'>
            <p>
              Me apaciona el mundo del desarrollo porque siempre hay algo nuevo por aprender y mejorar. Trabajo tanto en frontend
              como en backend, y disfruto construir aplicaciones funcionales y bien estructuradas.
              <br /> <br />
              Siempre busco mejorar mis habilidades y mantenerme al día con las tecnologías. Me gusta enfrentar desafíos
              que me ayuden a crecer, ya sea optimizando código, aprendiendo nuevas herramientas o resolviendo problemas
              en proyectos.
     
            </p>
          </div>

          {/*  Button  download cv*/}
          <div className="mt-4">
            <StarBorder
              as="button"
              className="rounded-[20px]"
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

      {/*****  section skills *****/}
      <div className='special-background min-w-full min-h-[100px]'>

        <SkillsSection/>
      </div>

      {/***** section project *****/}
      <div className='bg-background h-[200px]'>

      </div>

      {/*****  section contact *****/}
      <div className='special-background min-w-full min-h-[100px]'>

        <ContactSection/>
      </div>
    </>
  );
}
