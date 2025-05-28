'use client'

import About from '@/components/home/about'
import Contact from '@/components/home/contact'
import Education from '@/components/home/education'
import Experience from '@/components/home/experience'
import Gallery from '@/components/home/gallery'
import Projects from '@/components/home/projects'
import SkillMarquee from '@/components/home/skill-marquee'

export default function Home() {
  return (
    <main style={{ width: 'device-width' }}>
      <About />
      <SkillMarquee />
      <Experience />
      <Projects />
      <Education />
      <Gallery />
      <Contact />
    </main>
  )
}
