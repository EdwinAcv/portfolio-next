import { ContactSection } from './contact/components/ContactSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AboutMeSection } from './aboutme/components/AboutMeSection';
export default function Home() {
  return (
    <>
      {/* about me */}
      <div>
        <AboutMeSection/>
      </div>

      {/*****  section skills *****/}
      <div className='bg-black min-w-full min-h-[100px]'>

        <SkillsSection/>
      </div>

      {/***** section projects *****/}
      <div className='bg-background'>
        <ProjectsSection/>
      </div>

      {/*****  section contact *****/}
      <div className='special-background min-w-full  '>

        <ContactSection/>
      </div>
    </>
  );
}
