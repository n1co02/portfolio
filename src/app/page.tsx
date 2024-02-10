import About from '@/components/about/about'
import Experiences from '@/components/experiences/experiences'
import Intro from '@/components/intro/intro'
import Projects from '@/components/projects/projects'
import SectionDivider from '@/components/sectionHandler/sectionDivider/sectionDivider'
import Skills from '@/components/skills/skills'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
    </main>
  )
}
