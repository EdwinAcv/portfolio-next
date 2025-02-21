import { ContactSection } from './contact/components/ContactSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AboutMeSection } from './aboutme/components/AboutMeSection';
export default function Home() {
  return (
    <>
      {/* about me */}
      <section id='aboutme'>
        <AboutMeSection/>
      </section>

      {/*****  section skills *****/}
      <section id='skills' className='bg-black min-w-full min-h-[100px]'>

        <SkillsSection/>
      </section>

      {/***** section projects *****/}
      <section id='projects' className='bg-background'>
        <ProjectsSection/>
      </section>

      {/*****  section contact *****/}
      <section id='contact' className='special-background min-w-full  '>

        <ContactSection/>
      </section>
      
    </>
  );
}
