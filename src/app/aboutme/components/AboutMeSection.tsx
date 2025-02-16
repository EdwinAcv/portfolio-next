"use client";
import StarBorder from "@/components/StarBorder"
import Image from "next/image"
import { FaCloudArrowDown } from "react-icons/fa6"
import Data from "@/data/aboutme.json"
import SplitText from "@/components/SplitText"
import { EasingFunction } from "@react-spring/web"
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";

export const AboutMeSection = () => {
    const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    };
    const easeOutCubic: EasingFunction = (t) => (--t) * t * t + 1;
    const { tittle, subTittle } = Data;
  return (
    <div className="max-display min-h-[400px] grid md:grid-cols-2 items-center mt-10 p-4 ">
        <div>
          {/* <h1 className="text-[2.7rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[2.8rem] lg:leading-[4rem] text-textPrimary font-mono"> { tittle } </h1> */}
          <SplitText
            text={tittle}
            className="text-[2.7rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[2.8rem] lg:leading-[4rem] text-textPrimary font-mono"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing={easeOutCubic}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
        />
        
         

          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.0}
            threshold={0.2}
            // delay={1000}
          >
             <h3 className='text-textSecondary font-mono text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] mt-4 pl-4'> { subTittle } </h3>
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
            <a href="/files/CV.pdf" download>
              <StarBorder
                as="button"
                className="rounded-[20px]"
                color="cyan"
                speed="5s"
              >
                <div className="flex items-center gap-2">
                  <h3> Descargar CV</h3>
                  <FaCloudArrowDown size={'30px'} />
                </div>
              </StarBorder>
            </a>
          </div>
          </AnimatedContent>

        </div>
        
        {/* image or icon */}

        <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
          <div className="h-[100%] rounded-md flex justify-center">
            <Image className="size-[800px]" src={'/aboutme/blobAndProgrammer.svg'} width={0} height={0} alt='blob' priority/>
          </div>
        </FadeContent>

        
      </div>
  )
}
