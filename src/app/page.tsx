import React, { Suspense } from 'react';
import { ContactSection } from './contact/components/ContactSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AboutMeSection } from './aboutme/components/AboutMeSection';
export default function Home() {
  return (
    <>
      {/* about me */}
      <section id='aboutme'>
        <Suspense fallback={<div>Loading...</div>}> 
          <AboutMeSection/>
        </Suspense>
      </section>

      {/*****  section skills *****/}
      <section id='skills' className='bg-black min-w-full min-h-[100px]'>
        <Suspense fallback={<div>Loading...</div>}> 
          <SkillsSection/>
        </Suspense>
      </section>

      {/***** section projects *****/}
      <section id='projects' className='bg-background'>
        <Suspense fallback={<div>Loading...</div>}> 
          <ProjectsSection/>
        </Suspense>
      </section>

      {/*****  section contact *****/}
      <section id='contact' className='special-background min-w-full  '>
        <Suspense fallback={<div>Loading...</div>}> 
          <ContactSection/>
        </Suspense>
      </section>
      
    </>
  );
}
