'use client'

import Header from '@/components/header'
import About from '@/components/home/about'
import Contact from '@/components/home/contact'
import Education from '@/components/home/education'
import Experience from '@/components/home/experience'
import Gallery from '@/components/home/gallery'
import Projects from '@/components/home/projects'
import SkillMarquee from '@/components/home/skill-marquee'

export default function Home() {
  return (
    <main style={{ marginTop: '70px', width: 'device-width' }}>
      <Header />
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
