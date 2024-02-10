import About from '@/components/about/about'
import Intro from '@/components/intro/intro'
import Projects from '@/components/projects/projects'
import SectionDivider from '@/components/sectionHandler/sectionDivider/sectionDivider'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
