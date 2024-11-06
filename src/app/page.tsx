import About from '@/sections/About'
import Contact from '@/sections/Contact'
import  HeroSection  from '@/sections/Hero'
import { ProjectsSection } from '@/sections/Projects'
import Tape from '@/sections/Tape'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ProjectsSection/>
      <Tape/>
      <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page